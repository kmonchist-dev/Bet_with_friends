// ============================================================
// FIREBASE CONFIG
// Replace these values with your own Firebase project config
// See README.md for setup instructions
// ============================================================


// ── Firebase Init ────────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, addDoc, collection, query, where, getDocs, orderBy, serverTimestamp, increment, writeBatch }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const app = window._fbApp || (window._fbApp = initializeApp(FIREBASE_CONFIG));
const db  = getFirestore(app);
const firebaseConfig = {
  apiKey: "AIzaSyBeXaCFZSaKk4vHrzBfrhOAnb0XFg4fwEU",
  authDomain: "wc2026-bets-908e2.firebaseapp.com",
  projectId: "wc2026-bets-908e2",
  storageBucket: "wc2026-bets-908e2.firebasestorage.app",
  messagingSenderId: "694210566669",
  appId: "1:694210566669:web:e07955c1c9f72238821344"
};

// Admin password — change this to something only you know
const ADMIN_PASSWORD = "fuzachist";

// Daily bonus amount (€)
const DAILY_BONUS = 100;

// Starting balance for new users (€)
const STARTING_BALANCE = 500;

// ── Helpers ──────────────────────────────────────────────────

// Get or create user by username
async function getOrCreateUser(username) {
  const ref = doc(db, "users", username.toLowerCase());
  const snap = await getDoc(ref);
  if (snap.exists()) return { id: username.toLowerCase(), ...snap.data() };

  const newUser = {
    displayName: username,
    balance: STARTING_BALANCE,
    lastDailyBonus: null,
    createdAt: serverTimestamp()
  };
  await setDoc(ref, newUser);
  return { id: username.toLowerCase(), ...newUser };
}

// Check and award daily bonus
async function checkDailyBonus(userId) {
  const ref = doc(db, "users", userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { awarded: false };

  const data = snap.data();
  const now = Date.now();
  const lastBonus = data.lastDailyBonus?.toMillis?.() ?? 0;
  const msInDay = 86400000;

  if (now - lastBonus >= msInDay) {
    await updateDoc(ref, {
      balance: increment(DAILY_BONUS),
      lastDailyBonus: serverTimestamp()
    });
    return { awarded: true, amount: DAILY_BONUS };
  }
  return { awarded: false };
}

// Place a bet
async function placeBet({ userId, matchId, marketId, pick, amount }) {
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) throw new Error("User not found");

  const balance = userSnap.data().balance;
  if (balance < amount) throw new Error("Insufficient balance");
  if (amount < 1) throw new Error("Minimum bet is €1");

  const batch = writeBatch(db);

  // Deduct balance
  batch.update(userRef, { balance: increment(-amount) });

  // Record bet
  const betRef = doc(collection(db, "bets"));
  batch.set(betRef, {
    userId,
    matchId,
    marketId,
    pick,
    amount,
    status: "pending",   // "pending" | "won" | "lost" | "void"
    payout: 0,
    placedAt: serverTimestamp()
  });

  await batch.commit();
  return betRef.id;
}

// Get all bets for a user
async function getUserBets(userId) {
  const q = query(collection(db, "bets"), where("userId", "==", userId), orderBy("placedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Get all bets for a match + market (for pool odds calc)
async function getMatchMarketBets(matchId, marketId) {
  const q = query(collection(db, "bets"),
    where("matchId", "==", matchId),
    where("marketId", "==", marketId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Get all users sorted by balance (leaderboard)
async function getLeaderboard() {
  const q = query(collection(db, "users"), orderBy("balance", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Get a single match result
async function getMatchResult(matchId) {
  const ref = doc(db, "results", matchId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// Settle a match — called by admin
// Calculates payouts for pool markets and applies fixed multipliers
async function settleMatch(matchId, result, fixtures) {
  const fixture = fixtures.find(f => f.id === matchId);
  if (!fixture) throw new Error("Fixture not found");

  const batch = writeBatch(db);

  // Save result
  const resultRef = doc(db, "results", matchId);
  batch.set(resultRef, { ...result, settledAt: serverTimestamp() });

  // Mark match as settled
  const matchRef = doc(db, "matches", matchId);
  batch.set(matchRef, { status: "settled" }, { merge: true });

  await batch.commit();

  // Now settle each market
  const allBets = await getAllBetsForMatch(matchId);
  const settleBatch = writeBatch(db);

  for (const market of WC2026.marketTemplates) {
    const marketBets = allBets.filter(b => b.marketId === market.id);
    if (!marketBets.length) continue;

    const correctPick = resolveCorrectPick(market, result, fixture);

    if (market.type === "pool") {
      // Split pot among winners
      const totalPot = marketBets.reduce((s, b) => s + b.amount, 0);
      const winners  = marketBets.filter(b => b.pick === correctPick);
      const winnerStake = winners.reduce((s, b) => s + b.amount, 0);

      for (const bet of marketBets) {
        const betRef = doc(db, "bets", bet.id);
        const won = bet.pick === correctPick;
        const payout = won && winnerStake > 0
          ? Math.floor((bet.amount / winnerStake) * totalPot * 100) / 100
          : 0;
        settleBatch.update(betRef, { status: won ? "won" : "lost", payout });
        if (won) {
          settleBatch.update(doc(db, "users", bet.userId), { balance: increment(payout) });
        }
      }

    } else {
      // Fixed multiplier
      for (const bet of marketBets) {
        const betRef = doc(db, "bets", bet.id);
        const won = checkFixedWin(market, bet.pick, result);
        const payout = won ? Math.floor(bet.amount * market.multiplier * 100) / 100 : 0;
        settleBatch.update(betRef, { status: won ? "won" : "lost", payout });
        if (won) {
          settleBatch.update(doc(db, "users", bet.userId), { balance: increment(payout) });
        }
      }
    }
  }

  await settleBatch.commit();
  return true;
}

// ── Settlement helpers ───────────────────────────────────────

async function getAllBetsForMatch(matchId) {
  const q = query(collection(db, "bets"), where("matchId", "==", matchId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

function resolveCorrectPick(market, result, fixture) {
  if (market.id === "match_winner") return result.winner;
  if (market.id === "exact_score") return `${result.scoreHome}-${result.scoreAway}`;
  if (market.settlementField) return String(result[market.settlementField]);
  return null;
}

function checkFixedWin(market, pick, result) {
  const raw = result[market.settlementField];
  if (market.settlementLogic) return market.settlementLogic(raw, pick);
  return String(raw) === String(pick);
}

export {
  db, app,
  getOrCreateUser, checkDailyBonus, placeBet,
  getUserBets, getMatchMarketBets, getLeaderboard,
  getMatchResult, settleMatch, getAllBetsForMatch,
  DAILY_BONUS, STARTING_BALANCE, ADMIN_PASSWORD
};
