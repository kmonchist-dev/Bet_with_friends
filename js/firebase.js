// ============================================================
// FIREBASE CONFIG — ES Module (imports must come first)
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs, orderBy, serverTimestamp, increment, writeBatch }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ── Config — replace with your Firebase project values ───────
const firebaseConfig = {
  apiKey: "AIzaSyBeXaCFZSaKk4vHrzBfrhOAnb0XFg4fwEU",
  authDomain: "wc2026-bets-908e2.firebaseapp.com",
  projectId: "wc2026-bets-908e2",
  storageBucket: "wc2026-bets-908e2.firebasestorage.app",
  messagingSenderId: "694210566669",
  appId: "1:694210566669:web:e07955c1c9f72238821344"
};

// Admin password — change this
const ADMIN_PASSWORD = "worldcup2026admin";

// Daily bonus (€)
const DAILY_BONUS = 100;

// Starting balance for new users (€)
const STARTING_BALANCE = 500;

// ── Init ─────────────────────────────────────────────────────
const app = window._fbApp || (window._fbApp = initializeApp(firebaseConfig));
const db  = getFirestore(app);

// ── User ─────────────────────────────────────────────────────
async function getOrCreateUser(username) {
  const ref  = doc(db, "users", username.toLowerCase());
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

// ── Daily bonus ───────────────────────────────────────────────
async function checkDailyBonus(userId) {
  const ref  = doc(db, "users", userId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return { awarded: false };

  const data     = snap.data();
  const now      = Date.now();
  const lastBonus = data.lastDailyBonus?.toMillis?.() ?? 0;

  if (now - lastBonus >= 86400000) {
    await updateDoc(ref, {
      balance: increment(DAILY_BONUS),
      lastDailyBonus: serverTimestamp()
    });
    return { awarded: true, amount: DAILY_BONUS };
  }
  return { awarded: false };
}

// ── Place bet ─────────────────────────────────────────────────
async function placeBet({ userId, matchId, marketId, pick, amount }) {
  const userRef  = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) throw new Error("User not found");

  const balance = userSnap.data().balance;
  if (balance < amount) throw new Error("Insufficient balance");
  if (amount < 1)       throw new Error("Minimum bet is €1");

  const batch  = writeBatch(db);
  batch.update(userRef, { balance: increment(-amount) });

  const betRef = doc(collection(db, "bets"));
  batch.set(betRef, {
    userId, matchId, marketId, pick, amount,
    status: "pending",
    payout: 0,
    placedAt: serverTimestamp()
  });

  await batch.commit();
  return betRef.id;
}

// ── Bets queries ──────────────────────────────────────────────
async function getUserBets(userId) {
  const q    = query(collection(db, "bets"), where("userId", "==", userId), orderBy("placedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function getMatchMarketBets(matchId, marketId) {
  const q    = query(collection(db, "bets"), where("matchId", "==", matchId), where("marketId", "==", marketId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

async function getAllBetsForMatch(matchId) {
  const q    = query(collection(db, "bets"), where("matchId", "==", matchId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ── Leaderboard ───────────────────────────────────────────────
async function getLeaderboard() {
  const q    = query(collection(db, "users"), orderBy("balance", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ── Match result ──────────────────────────────────────────────
async function getMatchResult(matchId) {
  const ref  = doc(db, "results", matchId);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

// ── Settle match ──────────────────────────────────────────────
async function settleMatch(matchId, result, fixtures) {
  const fixture = fixtures.find(f => f.id === matchId);
  if (!fixture) throw new Error("Fixture not found");

  // Save result + mark settled
  const batch = writeBatch(db);
  batch.set(doc(db, "results", matchId), { ...result, settledAt: serverTimestamp() });
  batch.set(doc(db, "matches", matchId), { status: "settled" }, { merge: true });
  await batch.commit();

  // Settle each market
  const allBets    = await getAllBetsForMatch(matchId);
  const settleBatch = writeBatch(db);

  for (const market of WC2026.marketTemplates) {
    const marketBets = allBets.filter(b => b.marketId === market.id);
    if (!marketBets.length) continue;

    if (market.type === "pool") {
      const correctPick = resolveCorrectPick(market, result);
      const totalPot    = marketBets.reduce((s, b) => s + b.amount, 0);
      const winners     = marketBets.filter(b => b.pick === correctPick);
      const winnerStake = winners.reduce((s, b) => s + b.amount, 0);

      for (const bet of marketBets) {
        const won    = bet.pick === correctPick;
        const payout = won && winnerStake > 0
          ? Math.floor((bet.amount / winnerStake) * totalPot * 100) / 100
          : 0;
        settleBatch.update(doc(db, "bets", bet.id), { status: won ? "won" : "lost", payout });
        if (won) settleBatch.update(doc(db, "users", bet.userId), { balance: increment(payout) });
      }

    } else {
      for (const bet of marketBets) {
        const won    = checkFixedWin(market, bet.pick, result);
        const payout = won ? Math.floor(bet.amount * market.multiplier * 100) / 100 : 0;
        settleBatch.update(doc(db, "bets", bet.id), { status: won ? "won" : "lost", payout });
        if (won) settleBatch.update(doc(db, "users", bet.userId), { balance: increment(payout) });
      }
    }
  }

  await settleBatch.commit();
  return true;
}

// ── Settlement helpers ────────────────────────────────────────
function resolveCorrectPick(market, result) {
  if (market.id === "match_winner") return result.winner;
  if (market.id === "exact_score")  return `${result.scoreHome}-${result.scoreAway}`;
  if (market.settlementField)       return String(result[market.settlementField]);
  return null;
}

function checkFixedWin(market, pick, result) {
  const raw = result[market.settlementField];
  if (market.settlementLogic) return market.settlementLogic(raw, pick);
  return String(raw) === String(pick);
}

// ── Exports ───────────────────────────────────────────────────
export {
  db, app,
  getOrCreateUser, checkDailyBonus, placeBet,
  getUserBets, getMatchMarketBets, getAllBetsForMatch, getLeaderboard,
  getMatchResult, settleMatch,
  DAILY_BONUS, STARTING_BALANCE, ADMIN_PASSWORD
};
