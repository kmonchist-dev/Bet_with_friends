// ============================================================
// WC2026 BETS — DATA FILE
// All 48 teams, squads, and fixtures
// Knockout fixtures are auto-generated once group stage settles
// ============================================================

const WC2026 = {

  // ── TEAMS ──────────────────────────────────────────────────
  teams: {
    // GROUP A
    MEX: { name: "Mexico",       flag: "🇲🇽", group: "A", players: ["Guillermo Ochoa","Edson Álvarez","César Montes","Néstor Araujo","Jorge Sánchez","Luis Romo","Roberto Alvarado","Hirving Lozano","Alexis Vega","Raúl Jiménez","Santiago Giménez","Gerardo Arteaga","Kevin Álvarez","Orbelin Pineda","Uriel Antuna","Carlos Rodríguez","Fernando Beltrán","Jesús Gallardo","Julián Araujo","Rodrigo Huescas","Johan Vásquez","Israel Reyes","Antonio Rodríguez","Rodrigo Becerra","Pablo Ruiz","Memo Ochoa"] },
    RSA: { name: "South Africa", flag: "🇿🇦", group: "A", players: ["Ronwen Williams","Keagan Dolly","Percy Tau","Evidence Makgopa","Themba Zwane","Bongani Zungu","Teboho Mokoena","Yusuf Maart","Sifiso Hlanti","Rushine De Reuck","Siyanda Xulu","Khuliso Mudau","Terrence Mashego","Bradley Cross","Ethan Brooks","Lyle Foster","Elias Mokwana","Pule Mmodi","Nkosinathi Sibisi","Mothobi Mvala","Grant Kekana","Luke Fleurs","Abbubaker Mobara","Vikash Dheeraj","Bruce Bvuma","Sipho Mbule"] },
    KOR: { name: "South Korea",  flag: "🇰🇷", group: "A", players: ["Kim Seung-gyu","Son Heung-min","Kim Min-jae","Lee Jae-sung","Hwang Hee-chan","Hwang In-beom","Jung Woo-young","Kim Young-gwon","Lee Kang-in","Cho Gue-sung","Oh Hyeon-gyu","Kim Jin-su","Kim Tae-hwan","Hong Chul","Kwon Kyung-won","Park Ji-soo","Song Min-kyu","Baek Seung-ho","Won Du-jae","Jeong Sang-bin","Kim Joo-sung","Bae Jun-ho","Lee Hyun-joo","Yang Hyun-jun","Moon Seon-min","Lee Chang-hyun"] },
    CZE: { name: "Czechia",      flag: "🇨🇿", group: "A", players: ["Jiří Staněk","Tomáš Vaclík","Lukáš Hrádecký","Vladimír Coufal","Tomáš Holeš","Lukáš Holeš","Pavel Kadeřábek","Jan Bořil","Ladislav Krejčí","Marek Suchý","Tomáš Souček","Lukáš Provod","Jakub Jankto","Patrik Schick","Adam Hložek","Ondřej Lingr","Jan Kuchta","Václav Černý","Tomáš Čvančara","David Jurásek","Aleš Matějů","Antonín Barák","Matěj Jurásek","Michal Sadílek","Jakub Pešek","Alex Král"] },

    // GROUP B
    CAN: { name: "Canada",       flag: "🇨🇦", group: "B", players: ["Milan Borjan","Cyle Larin","Jonathan David","Alphonso Davies","Tajon Buchanan","Stephen Eustáquio","Atiba Hutchinson","Scott Kennedy","Alistair Johnston","Samuel Piette","Richie Laryea","Mark-Anthony Kaye","Jonathan Osorio","Lucas Cavallini","David Junior Hoilett","Liam Fraser","Kamal Miller","Derek Cornelius","Doneil Henry","Zachary Brault-Guillard","Ismaël Koné","Luca Petrasso","Nathan Ingham","Maxime Crépeau","Charles-Andreas Brym","Ben Ramsay"] },
    BIH: { name: "Bosnia & Herz.",flag: "🇧🇦", group: "B", players: ["Ibrahim Šehić","Zlatan Kovačević","Jasmin Kurtić","Miralem Pjanić","Edin Džeko","Ermedin Demirović","Sead Kolašinac","Vedad Ibišević","Zlatan Musić","Amar Dedić","Strahinja Pavlović","Benjamin Tahirović","Siniša Saničanin","Aldin Đulović","Aner Đulović","Muhamed Bičakčić","Armin Hodžić","Haris Hajradinović","Vedat Muriqi","Adnan Šećerović","Rijad Bajić","Nermin Zolj","Anel Šarić","Hamza Čataković","Selim Šišić","Nedim Kozica"] },
    QAT: { name: "Qatar",        flag: "🇶🇦", group: "B", players: ["Meshaal Barsham","Saad Al Sheeb","Pedro Miguel","Abdelkarim Hassan","Bassam Al Rawi","Boualem Khoukhi","Tarek Salman","Hassan Al Haydos","Akram Afif","Almoez Ali","Assim Madibo","Ali Asad","Karim Boudiaf","Mohammed Waad","Homam Al Amin","Mohammed Al Bakr","Khaled Mohammed","Yusuf Abdurisag","Abdullah Al Ahrak","Jassem Gaber","Abdulaziz Hatem","Salem Al Hajri","Abdulelah Al Amri","Meshaal Barsham","Tariq Salman","Abdulaziz Hatim"] },
    SUI: { name: "Switzerland",  flag: "🇨🇭", group: "B", players: ["Yann Sommer","Gregor Kobel","Fabian Schär","Manuel Akanji","Silvan Widmer","Nico Elvedi","Kevin Mbabu","Ricardo Rodriguez","Granit Xhaka","Remo Freuler","Denis Zakaria","Xherdan Shaqiri","Ruben Vargas","Christian Fassnacht","Breel Embolo","Haris Seferovic","Renato Steffen","Fabian Frei","Noah Okafor","Dan Ndoye","Zeki Amdouni","Ardon Jashari","Michel Aebischer","Edimilson Fernandes","Kwadwo Duah","Vincent Sierro"] },

    // GROUP C
    BRA: { name: "Brazil",       flag: "🇧🇷", group: "C", players: ["Alisson","Ederson","Marquinhos","Thiago Silva","Danilo","Alex Sandro","Eder Militão","Gabriel Magalhães","Casemiro","Fabinho","Lucas Paquetá","Bruno Guimarães","Vinícius Júnior","Rodrygo","Raphinha","Gabriel Jesus","Richarlison","Pedro","Antony","Endrick","Savinho","Andrés Pereira","Guilherme Arana","Yan Couto","Vanderson","Bremer"] },
    MAR: { name: "Morocco",      flag: "🇲🇦", group: "C", players: ["Yassine Bounou","Munir Mohamedi","Achraf Hakimi","Romain Saiss","Sofyan Amrabat","Noussair Mazraoui","Nayef Aguerd","Jawad El Yamiq","Azzedine Ounahi","Selim Amallah","Ilias Chair","Hakim Ziyech","Youssef En-Nesyri","Sofiane Boufal","Abderrazak Hamdallah","Anass Zaroury","Zakaria Aboukhlal","Yahya Jabrane","Bilal El Khannouss","Ibrahim Salah","Tarik Tissoudali","Walid Cheddira","Adam Masina","Samy Mmaee","Abde Ezzalzouli","Nassim Azaouagh"] },
    HTI: { name: "Haiti",        flag: "🇭🇹", group: "C", players: ["Josué Duverger","Bryan Alcéus","Duckens Nazon","Frantzdy Pierrot","Wilde-Donald Guerrier","Mechack Jérôme","Steeven Saba","Kevin Lafrance","Stevenson Zancu","Bernadin Augustin","Herby Bazile","Yvens Limage","Jhon Piette","Carlens Arcus","Ronaldo Léon","Garry Rodrigues","Réginald Gornet","Réginal Gornet","Bob Édouard","James Léandre","Patrick Lallerstedt","Chery Duckens","Henry Heléna","Gedeon Kalulu","Haney Gélin","Réginald Gornet"] },
    SCO: { name: "Scotland",     flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C", players: ["Angus Gunn","Craig Gordon","Andy Robertson","Kieran Tierney","Scott McKenna","Grant Hanley","Liam Cooper","Aaron Hickey","Nathan Patterson","Stuart Armstrong","John McGinn","Callum McGregor","Billy Gilmour","Ryan Christie","Kenny McLean","Ryan Jack","Scott McTominay","Ryan Fraser","Che Adams","Lyndon Dykes","Oli McBurnie","Lawrence Shankland","Kevin Nisbet","Ben Doak","Ross McCrorie","Greg Taylor"] },

    // GROUP D
    USA: { name: "USA",          flag: "🇺🇸", group: "D", players: ["Matt Turner","Zack Steffen","Sergino Dest","Antonee Robinson","Miles Robinson","Walker Zimmerman","Tim Ream","Chris Richards","Tyler Adams","Weston McKennie","Yunus Musah","Luca de la Torre","Brenden Aaronson","Christian Pulisic","Timothy Weah","Gio Reyna","Josh Sargent","Jordan Morris","Ricardo Pepi","Jesé Rodriguez","DeAndre Yedlin","Cameron Carter-Vickers","Joe Scally","Malik Tillman","Folarin Balogun","Paxten Aaronson"] },
    PAR: { name: "Paraguay",     flag: "🇵🇾", group: "D", players: ["Antony Silva","Roberto Fernández","Gustavo Gómez","Fabián Balbuena","Omar Alderete","Santiago Arzamendia","Matías Espinoza","Mathías Villasanti","Andrés Cubas","Miguel Almirón","Óscar Romero","Ángel Romero","Alejandro Romero","Robert Morales","Carlos González","Roque Santa Cruz","Adam Bareiro","Alberto Espínola","Richard Sánchez","Juan Brunetta","Iván Piris","Iván Ramírez","Hugo Rodallega","Alfredo Aguilar","Jorge Morel","Ramón Martínez"] },
    AUS: { name: "Australia",    flag: "🇦🇺", group: "D", players: ["Matthew Ryan","Danny Vukovic","Aziz Behich","Milos Degenek","Trent Sainsbury","Harry Souttar","Fran Karacic","Bailey Wright","Aaron Mooy","Tom Rogic","Jackson Irvine","Ajdin Hrustic","Riley McGree","Denis Genreau","Keanu Baccus","Marco Tilio","Awer Mabil","Mathew Leckie","Craig Goodwin","Mitchell Duke","Adam Taggart","Garang Kuol","Nestory Irankunda","Cameron Devlin","Martin Boyle","Jamie Maclaren"] },
    TUR: { name: "Türkiye",      flag: "🇹🇷", group: "D", players: ["Mert Günok","Altay Bayındır","Çağlar Söyüncü","Merih Demiral","Samet Akaydin","Ferdi Kadıoğlu","Zeki Çelik","Mert Müldür","Hakan Çalhanoğlu","Orkun Kökçü","Kaan Ayhan","Barış Alper Yılmaz","Kerem Aktürkoğlu","Arda Güler","Cenk Tosun","Burak Yılmaz","Yusuf Yazıcı","Salih Özcan","Okay Yokuşlu","Abdülkadir Ömür","Halil Dervişoğlu","Yunus Akgün","İrfan Can Kahveci","Taner Yıldız","Muhammed Şengezer","Ahmet Kutucu"] },

    // GROUP E
    GER: { name: "Germany",      flag: "🇩🇪", group: "E", players: ["Manuel Neuer","Marc-André ter Stegen","Joshua Kimmich","Antonio Rüdiger","Niklas Süle","Matthias Ginter","David Raum","Thilo Kehrer","Leon Goretzka","İlkay Gündoğan","Toni Kroos","Kai Havertz","Thomas Müller","Serge Gnabry","Leroy Sané","Jamal Musiala","Florian Wirtz","Jonas Hofmann","Lukas Klostermann","Julian Draxler","Mario Götze","Christopher Nkunku","Karim Adeyemi","Niclas Füllkrug","Julian Brandt","Kevin Trapp"] },
    CUW: { name: "Curaçao",      flag: "🇨🇼", group: "E", players: ["Eloy Room","Cuco Martina","Rangelo Janga","Jurien Gaari","Rivaldo Coelen","Leandro Bacuna","GilmarFilemon","Jarchinio Antonia","Etienne Reijnen","Vurnon Anita","Sheraldo Becker","Quentin Boisgard","Myron Boadu","Javairo Dilrosun","Denzell Dumfries","Cuco Martina","Riquelme Daal","Jürgen Locadia","Medy Elito","Felitciano Zschusschen","Denzel Dumfries","Corydon Mouton","Calvin Hiwula","Dion Malone","Cherechero Flemming","Gio Lippinkhof"] },
    CIV: { name: "Ivory Coast",  flag: "🇨🇮", group: "E", players: ["Yahia Fofana","Badra Ali Sangaré","Serge Aurier","Wilfried Zaha","Nicolas Pépé","Franck Kessié","Sébastien Haller","Simon Adingra","Salomon Kalou","Gervinho","Max Gradel","Ismaël Diomandé","Odilon Kossounou","Willy Boly","Jean-Philippe Gbamin","Ibrahim Sangaré","Hamidou Traoré","Oumar Diakité","Emmanuel Agbadou","Kouamé Christian","Eric Bailly","Ghislain Konan","Harold Moukoudi","Evan Ndicka","Cheick Doucouré","Yves Bissouma"] },
    ECU: { name: "Ecuador",      flag: "🇪🇨", group: "E", players: ["Hernán Galíndez","Alexander Domínguez","Piero Hincapié","Felix Torres","Pervis Estupiñán","Ángelo Preciado","Xavier Arreaga","Beder Caicedo","José Cifuentes","Carlos Gruezo","Jhegson Méndez","Alan Minda","Moisés Caicedo","Ángel Mena","Gonzalo Plata","Enner Valencia","Michael Estrada","Leonardo Campana","Romario Ibarra","Xavier Méndez","Willian Pacho","Ángel Caicedo","Diego Palacios","Sebas Méndez","Jordy Caicedo","Bryan Angulo"] },

    // GROUP F
    NED: { name: "Netherlands",  flag: "🇳🇱", group: "F", players: ["Andries Noppert","Remko Pasveer","Virgil van Dijk","Matthijs de Ligt","Daley Blind","Nathan Aké","Denzel Dumfries","Tyrell Malacia","Frenkie de Jong","Davy Klaassen","Marten de Roon","Steven Berghuis","Cody Gakpo","Memphis Depay","Donyell Malen","Steven Bergwijn","Xavi Simons","Georginio Wijnaldum","Noa Lang","Jeremie Frimpong","Ryan Gravenberch","Jurriën Timber","Brian Brobbey","Wout Weghorst","Vincent Janssen","Quinten Timber"] },
    JPN: { name: "Japan",        flag: "🇯🇵", group: "F", players: ["Shuichi Gonda","Zion Suzuki","Takehiro Tomiyasu","Maya Yoshida","Ko Itakura","Hidemasa Morita","Wataru Endo","Junya Ito","Kaoru Mitoma","Takefusa Kubo","Ritsu Doan","Daichi Kamada","Ayase Ueda","Ao Tanaka","Yuki Soma","Keito Nakamura","Yukinari Sugawara","Mao Hosoya","Shuto Machino","Koki Machida","Takumi Minamino","Shogo Taniguchi","Hiroki Ito","Tsuyoshi Watanabe","Reo Hatate","Kuryu Matsuki"] },
    SWE: { name: "Sweden",       flag: "🇸🇪", group: "F", players: ["Robin Olsen","Karl-Johan Johnsson","Victor Lindelöf","Mikael Lustig","Emil Krafth","Marcus Danielson","Alexander Milosevic","Ludwig Augustinsson","Sebastian Larsson","Albin Ekdal","Viktor Claesson","Emil Forsberg","Dejan Kulusevski","Isak Alexander","Anthony Elanga","Zlatan Ibrahimović","Kristoffer Olsson","Robin Quaison","Sam Larsson","Mattias Svanberg","Jens-Lys Cajuste","Williot Swedberg","Oscar Linnér","Pontus Dahlberg","Jesper Karlsson","Patrik Walemark"] },
    TUN: { name: "Tunisia",      flag: "🇹🇳", group: "F", players: ["Aymen Dahmen","Mouez Hassen","Dylan Bronn","Montassar Talbi","Bilel Ifa","Wajdi Kechrida","Hamza Mathlouthi","Ali Maaloul","Ellyes Skhiri","Ferjani Sassi","Anis Ben Slimane","Wahbi Khazri","Youssef Msakni","Saîf-Eddine Khaoui","Taha Yassine Khenissi","Naïm Sliti","Seifeddine Jaziri","Mohamed Drager","Hamza Rafia","Issam Jebali","Anis Slimane","Mortadha Ben Ouanes","Hichem Chaâlali","Yan Valery","Mohamed Ali Ben Romdhane","Hannibal Mejbri"] },

    // GROUP G
    BEL: { name: "Belgium",      flag: "🇧🇪", group: "G", players: ["Thibaut Courtois","Simon Mignolet","Toby Alderweireld","Jan Vertonghen","Thomas Meunier","Jason Denayer","Axel Witsel","Youri Tielemans","Kevin De Bruyne","Eden Hazard","Dries Mertens","Romelu Lukaku","Michy Batshuayi","Leandro Trossard","Charles De Ketelaere","Loïs Openda","Johan Bakayoko","Jeremy Doku","Arthur Theate","Timothy Castagne","Wout Faes","Amadou Onana","Orel Mangala","Alexis Saelemaekers","Thomas Kaminski","Zeno Debast"] },
    EGY: { name: "Egypt",        flag: "🇪🇬", group: "G", players: ["Mohamed El Shenawy","Ahmed El Shenawy","Ahmed Hegazy","Omar Gaber","Ayman Ashraf","Ahmed Fatouh","Akram Tawfik","Amr El Sulaya","Tarek Hamed","Hamdi Fathi","Mahmoud Trezeguet","Mohamed Elneny","Ramadan Sobhi","Omar Marmoush","Mohamed Salah","Mostafa Mohamed","Mahmoud Kahraba","Zizo","Emam Ashour","Karim El Debes","Marwan Hamdy","Nasser Mansi","Ahmed Abou Moslem","Mahmoud Alaa","Sherif Ekramy","Ramy Rabia"] },
    IRN: { name: "Iran",         flag: "🇮🇷", group: "G", players: ["Alireza Beiranvand","Hossein Hosseini","Sadegh Moharrami","Majid Hosseini","Mohammad Mohebi","Ehsan Hajsafi","Milad Mohammadi","Abolfazl Jalali","Saeid Ezatolahi","Ahmad Nourollahi","Morteza Pouraliganji","Ali Gholizadeh","Mehdi Taremi","Sardar Azmoun","Karim Ansarifard","Alireza Jahanbakhsh","Vahid Amiri","Reza Ghoochannejhad","Saman Ghoddos","Omid Noorafkan","Allahyar Sayyadmanesh","Shoja Khalilzadeh","Roozbeh Cheshmi","Saeid Sadeghi","Farshid Esmaeili","Ali Karimi"] },
    NZL: { name: "New Zealand",  flag: "🇳🇿", group: "G", players: ["Joe Lumley","Michael Woud","Winston Reid","Tommy Smith","Liberato Cacace","Niko Kirwan","Tim Payne","Storm Roux","Michael McGlinchey","Callum McCowatt","Clayton Lewis","Myer Bevan","Oli Sail","Joe Bell","Elijah Just","Matt Garbett","Kosta Barbarouses","Matthew Ridenton","Ben Old","Oskar Zawada","Marko Stamenic","Matt Doyle","Zach Pearson","Deklan Wynne","Marco Rojas","Lukas Görtler"] },

    // GROUP H
    ESP: { name: "Spain",        flag: "🇪🇸", group: "H", players: ["Unai Simón","David Raya","Daniel Carvajal","Pau Torres","Aymeric Laporte","Alejandro Balde","Dani Olmo","Rodri","Pedri","Gavi","Fabián Ruiz","Marcos Llorente","Ferran Torres","Lamine Yamal","Nico Williams","Álvaro Morata","Mikel Oyarzabal","Ansu Fati","Joselu","Martín Zubimendi","Mikel Merino","Jesús Navas","Nacho Fernández","Robin Le Normand","Yeremy Pino","Eric García"] },
    CPV: { name: "Cape Verde",   flag: "🇨🇻", group: "H", players: ["Vozinha","David Monteiro","Roberto Lopes","Ryan Mendes","Stopira","Nanu","Steven Fortes","Diogo Tavares","Garry Rodrigues","Hélder Rodrigues","Jovane Cabral","Jamiro Monteiro","Bryan Teixeira","Patrick Andrade","Jair Tavares","Kenny Rocha","Júlio Tavares","Nícolas Veiga","Vítor Fernandes","Deroy Duarte","Ryan Mendes","Luca Koleosho","Lisandro","Babanco","David Tavares","Willy Semedo"] },
    KSA: { name: "Saudi Arabia", flag: "🇸🇦", group: "H", players: ["Mohammed Al-Owais","Yasser Al-Mosailem","Sultan Al-Ghanam","Abdullah Al-Amri","Ali Al-Bulayhi","Abdulelah Al-Amri","Hassan Al-Tambakti","Saud Abdulhamid","Salman Al-Faraj","Abdulrahman Al-Aboud","Sami Al-Najei","Hattan Bahebri","Feras Al-Buraikan","Salem Al-Dawsari","Nawaf Al-Abed","Mohammed Al-Burayk","Ahmed Al-Ghannam","Yasser Al-Shahrani","Alibek Niyazbekov","Abdullah Madu","Nasser Al-Dawsari","Yasir Al-Shahrani","Mohamed Kanno","Riyadh Sharahili","Abdulelah Al-Malki","Mohammed Al-Rubaie"] },
    URU: { name: "Uruguay",      flag: "🇺🇾", group: "H", players: ["Fernando Muslera","Sebastián Coates","José María Giménez","Martín Cáceres","Mathías Olivera","Diego Godín","Rodrigo Bentancur","Federico Valverde","Matías Vecino","Nicolás De La Cruz","Lucas Torreira","Giorgian De Arrascaeta","Luis Suárez","Edinson Cavani","Darwin Núñez","Facundo Torres","Facundo Pellistri","Ronald Araújo","Nahitan Nández","Nicolás Fonseca","Agustín Canobbio","Brian Rodríguez","Maximiliano Araújo","Augusto Batista","Kevin Méndez","Marcelo Saracchi"] },

    // GROUP I
    FRA: { name: "France",       flag: "🇫🇷", group: "I", players: ["Hugo Lloris","Mike Maignan","Benjamin Pavard","Raphaël Varane","Presnel Kimpembe","Lucas Hernández","William Saliba","Theo Hernandez","N'Golo Kanté","Aurélien Tchouaméni","Adrien Rabiot","Antoine Griezmann","Kylian Mbappé","Ousmane Dembélé","Marcus Thuram","Olivier Giroud","Randal Kolo Muani","Kingsley Coman","Youssouf Fofana","Eduardo Camavinga","Warren Zaïre-Emery","Bradley Barcola","Jules Koundé","Ibrahima Konaté","Axel Disasi","Alphonse Areola"] },
    SEN: { name: "Senegal",      flag: "🇸🇳", group: "I", players: ["Edouard Mendy","Alfred Gomis","Kalidou Koulibaly","Abdou Diallo","Saliou Ciss","Youssouf Sabaly","Pape Abou Cissé","Nampalys Mendy","Cheikhou Kouyaté","Idrissa Gueye","Pape Matar Sarr","Sadio Mané","Ismaïla Sarr","Boulaye Dia","Famara Diédhiou","Keita Baldé","Habib Diallo","Nicolas Jackson","Iliman Ndiaye","Lamine Camara","Krepin Diatta","Formose Mendy","Moussa Niakhaté","Abdoulaye Seck","Mikayil Faye","Pathé Ciss"] },
    IRQ: { name: "Iraq",         flag: "🇮🇶", group: "I", players: ["Jalal Hassan","Fahad Talib","Ali Adnan","Saad Abdul Amir","Rebin Sulaka","Hussein Ali","Osama Rashid","Ahmed Ibrahim","Ali Jasim","Bashar Resan","Mohanad Ali","Amjed Attwan","Moatasem Hussein","Ahmed Yasin","Ameen Mohammed","Ibrahim Bayesh","Amir Al-Ammari","Aymen Hussein","Karrar Mohammed","Hamza Sulaiman","Dhurgham Ismail","Ahmed Salam","Hammam Tariq","Ali Hisham","Omar Kasim","Mustafa Nadhim"] },
    NOR: { name: "Norway",       flag: "🇳🇴", group: "I", players: ["Ørjan Nyland","Jørgen Strand Larsen","Erling Haaland","Martin Ødegaard","Alexander Sørloth","Joshua King","Antonio Nusa","Mohamed Elyounoussi","Sander Berge","Stefan Strandberg","Leo Skiri Østigård","Kristoffer Ajer","Fredrik André Björkan","Birger Meling","Morten Thorsby","Mathias Normann","Fredrik Aursnes","Veton Berisha","Taijo Teniste","Thomas Delaney","Patrick Berg","Ulrik Mathisen","Stian Gregersen","Andreas Hanche-Olsen","Julian Ryerson","Andreas Zeqiri"] },

    // GROUP J
    ARG: { name: "Argentina",    flag: "🇦🇷", group: "J", players: ["Emiliano Martínez","Franco Armani","Nahuel Molina","Nicolás Otamendi","Cristian Romero","Lisandro Martínez","Marcos Acuña","Nicolás Tagliafico","Alexis Mac Allister","Rodrigo De Paul","Leandro Paredes","Enzo Fernández","Lionel Messi","Paulo Dybala","Ángel Di María","Julián Álvarez","Lautaro Martínez","Joaquín Correa","Nicolás González","Exequiel Palacios","Germán Pezzella","Thiago Almada","Valentín Carboni","Santiago Simón","Alejandro Garnacho","Facundo Buonanotte"] },
    DZA: { name: "Algeria",      flag: "🇩🇿", group: "J", players: ["Raïs M'Bolhi","Alexandre Oukidja","Ramy Bensebaïni","Djamel Benlamri","Aïssa Mandi","Hossem Aouar","Yacine Adli","Nabil Bentaleb","Sofiane Feghouli","Riyad Mahrez","Islam Slimani","Baghdad Bounedjah","Andy Delort","Youcef Atal","Ismael Bennacer","Zinedine Ferhat","Mohamed Amoura","Adam Ounas","Sâad Boulahrouz","Farouk Chafai","Samir Merzougui","Zakaria Aboukhlal","Saïd Benrahma","Ayoub Abdelkader","Bilal Benkhedim","Ilyes Housni"] },
    AUT: { name: "Austria",      flag: "🇦🇹", group: "J", players: ["Patrick Pentz","Heinz Lindner","Stefan Posch","Aleksandar Dragovic","David Alaba","Philipp Mwene","Maximilian Wöber","Andreas Ulmer","Florian Grillitsch","Xaver Schlager","Konrad Laimer","Marcel Sabitzer","Marko Arnautovic","Michael Gregoritsch","Christoph Baumgartner","Sascha Mölders","Sasa Kalajdzic","Nicolas Seiwald","Florian Kainz","Philipp Lienhart","Marco Friedl","Gernot Trauner","Romano Schmid","Patrick Wimmer","Ljuban Krizanovic","Maximilian Entrup"] },
    JOR: { name: "Jordan",       flag: "🇯🇴", group: "J", players: ["Amer Shafi","Moayad Salama","Yazan Khalil","Baha Faisal","Anas Bani Yaseen","Ahmad Salam","Haitham Aqrabawi","Ibrahim Naber","Ahmad Atiyat Allah","Musa Suleiman","Basem Qweider","Emad Al-Nasir","Mahmoud Al-Mardi","Mohammad Al-Rashdan","Feras Al-Hamarsheh","Omran Al-Hayek","Mohammed Al-Dmeiri","Khalil Bani Attiyeh","Yazeed Al-Rawashda","Ahmed Zaid","Mahmoud Almasri","Moh'd Ababneh","Yosef Asakra","Abdul Karim Al-Khatib","Oday Dabbagh","Omar Salameh"] },

    // GROUP K
    POR: { name: "Portugal",     flag: "🇵🇹", group: "K", players: ["Diogo Costa","Rui Patrício","João Cancelo","Rúben Dias","Pepe","Danilo Pereira","Nuno Mendes","Raphaël Guerreiro","Bernardo Silva","Bruno Fernandes","Vitinha","João Palhinha","Rúben Neves","Otávio","Diogo Jota","Rafael Leão","Cristiano Ronaldo","André Silva","João Félix","Gonçalo Ramos","Francisco Conceição","Pedro Neto","Nuno Tavares","António Silva","Tiago Djaló","Matheus Nunes"] },
    COD: { name: "DR Congo",     flag: "🇨🇩", group: "K", players: ["Joël Kiassumbua","Gaël Kakuta","Chancel Mbemba","Arthur Masuaku","Silas Wissa","Cédric Bakambu","Yannick Bolasie","Dodi Lukebakio","Yoane Wissa","Jonathan Bolingi","Machlas Ntambu","Élis Mangulu","Théo Bongonda","Samuel Bastien","Neeskens Kebano","Lika Lokesa","Anselme Buso","Christian Luyindama","Yeni N'Gbakoto","André Zambo Anguissa","Ciaran Brown","Glody Lilepo","Héritier Mputu","Paul-José Mpoku","Meschak Elia","Mbenza Isaac"] },
    UZB: { name: "Uzbekistan",   flag: "🇺🇿", group: "K", players: ["Otabek Shukurov","Jasur Jalolov","Eldor Shomurodov","Abbosbek Fayzullaev","Rustam Ashurmatov","Dostonbek Khamdamov","Husayn Norchaev","Jaloliddin Masharipov","Bobur Abdixoliqov","Shamsiddin Shokirov","Khojiakbar Alijonov","Mirzohid Dehkonov","Oybek Dzhaksybekov","Ibrohim Rabimov","Timur Kapadze","Sanjar Tursunov","Bunyodkor Saidov","Vohid Hamroyev","Avazbek Begaliyev","Akbar Tursunov","Doniyorbek Hasanov","Khamza Kamolov","Odiljon Hamrobekov","Ulugbek Asrorov","Sardor Rashidov","Ilhom Hamidov"] },
    COL: { name: "Colombia",     flag: "🇨🇴", group: "K", players: ["David Ospina","Camilo Vargas","Dávinson Sánchez","Yerry Mina","Oscar Murillo","Johan Mojica","Daniel Muñoz","Luis Díaz","James Rodríguez","Wilmar Barrios","Mateus Uribe","Juan Cuadrado","Duván Zapata","Miguel Ángel Borja","Rafael Santos Borré","Roger Martínez","Sebastián Villa","Jhon Córdoba","Cucho Hernández","Richard Ríos","Jhon Jáder Durán","Alexis Castillo","Kevin Castaño","Carlos Cuesta","Nicolás Lucumí","Jefferson Lerma"] },

    // GROUP L
    ENG: { name: "England",      flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "L", players: ["Jordan Pickford","Aaron Ramsdale","Kieran Trippier","Harry Maguire","John Stones","Luke Shaw","Trent Alexander-Arnold","Reece James","Declan Rice","Kalvin Phillips","Jordan Henderson","Mason Mount","Phil Foden","Jack Grealish","Raheem Sterling","Bukayo Saka","Marcus Rashford","Harry Kane","Callum Wilson","Ivan Toney","Cole Palmer","Jude Bellingham","Ben White","Marc Guehi","Lewis Dunk","Conor Gallagher"] },
    CRO: { name: "Croatia",      flag: "🇭🇷", group: "L", players: ["Dominik Livaković","Ivo Grbić","Šime Vrsaljko","Dejan Lovren","Domagoj Vida","Josip Stanisić","Borna Sosa","Josip Juranović","Ivan Perišić","Luka Modrić","Mateo Kovačić","Marcelo Brozović","Mario Pašalić","Nikola Vlašić","Ante Budimir","Bruno Petković","Ivan Rakitić","Andrej Kramarić","Lovro Majer","Josip Sutalo","Martin Erlić","Duje Ćaleta-Car","Joško Gvardiol","Luka Ivanušec","Mislav Oršić","Petar Sucic"] },
    GHA: { name: "Ghana",        flag: "🇬🇭", group: "L", players: ["Richard Ofori","Lawrence Ati-Zigi","Andrew Ayew","Jordan Ayew","Thomas Partey","Daniel-Kofi Kyereh","Kudus Mohammed","Daniel Amartey","Alexander Djiku","Gideon Mensah","Tariqe Fosu","Inaki Williams","Nico Williams","Baba Rahman","Elisha Owusu","Caleb Ekuban","Kamaldeen Sulemana","Osman Bukari","Antoine Semenyo","Ernest Nuamah","Felix Afena-Gyan","Abdul Fatawu Issahaku","Frank Asante","Alidu Seidu","Hans Nunoo Sarpei","Benjamin Asante"] },
    PAN: { name: "Panama",       flag: "🇵🇦", group: "L", players: ["Luis Mejía","Jaime Penedo","Michael Murillo","Harold Cummings","Fidel Escobar","Cecilio Waterman","Adolfo Machado","Édgar Bárcenas","Rolando Blackburn","Éric Davis","Abdiel Ayarza","Cristian Martínez","José Luis Rodríguez","Alberto Quintero","Anibal Godoy","Aníbal Godoy","Gabriel Torres","César Yanis","Rolando Blackburn","Alfredo Stephens","José Fajardo","Michael Amir Murillo","Ricardo Avila","Leonel Gómez","Adalberto Carrasquilla","Ismael Díaz"] }
  },

  // ── GROUP STAGE FIXTURES ────────────────────────────────────
  // status: "upcoming" | "locked" | "live" | "settled"
  fixtures: [
    // GROUP A
    { id:"m001", matchNum:1,  group:"A", home:"MEX", away:"RSA", venue:"Estadio Azteca, Mexico City",       date:"2026-06-11", time:"21:00", tz:"America/Mexico_City", status:"settled" },
    { id:"m002", matchNum:2,  group:"A", home:"KOR", away:"CZE", venue:"SoFi Stadium, Los Angeles",         date:"2026-06-12", time:"12:00", tz:"America/Los_Angeles", status:"settled" },
    { id:"m003", matchNum:3,  group:"A", home:"MEX", away:"KOR", venue:"Estadio Akron, Guadalajara",        date:"2026-06-15", time:"21:00", tz:"America/Mexico_City", status:"upcoming" },
    { id:"m004", matchNum:4,  group:"A", home:"CZE", away:"RSA", venue:"Arrowhead Stadium, Kansas City",    date:"2026-06-15", time:"15:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m005", matchNum:5,  group:"A", home:"RSA", away:"KOR", venue:"SoFi Stadium, Los Angeles",         date:"2026-06-19", time:"18:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m006", matchNum:6,  group:"A", home:"CZE", away:"MEX", venue:"Rose Bowl, Los Angeles",            date:"2026-06-19", time:"21:00", tz:"America/Los_Angeles", status:"upcoming" },

    // GROUP B
    { id:"m007", matchNum:7,  group:"B", home:"CAN", away:"BIH", venue:"BMO Field, Toronto",                date:"2026-06-12", time:"21:00", tz:"America/Toronto",     status:"settled" },
    { id:"m008", matchNum:8,  group:"B", home:"QAT", away:"SUI", venue:"Levi's Stadium, San Francisco",     date:"2026-06-12", time:"18:00", tz:"America/Los_Angeles", status:"settled" },
    { id:"m009", matchNum:9,  group:"B", home:"CAN", away:"QAT", venue:"BC Place, Vancouver",               date:"2026-06-16", time:"18:00", tz:"America/Vancouver",   status:"upcoming" },
    { id:"m010", matchNum:10, group:"B", home:"SUI", away:"BIH", venue:"Gillette Stadium, Boston",          date:"2026-06-16", time:"15:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m011", matchNum:11, group:"B", home:"BIH", away:"QAT", venue:"Empower Field, Denver",             date:"2026-06-20", time:"18:00", tz:"America/Denver",      status:"upcoming" },
    { id:"m012", matchNum:12, group:"B", home:"SUI", away:"CAN", venue:"BC Place, Vancouver",               date:"2026-06-20", time:"21:00", tz:"America/Vancouver",   status:"upcoming" },

    // GROUP C
    { id:"m013", matchNum:13, group:"C", home:"BRA", away:"SCO", venue:"AT&T Stadium, Dallas",              date:"2026-06-13", time:"15:00", tz:"America/Chicago",     status:"settled" },
    { id:"m014", matchNum:14, group:"C", home:"MAR", away:"HTI", venue:"Lumen Field, Seattle",              date:"2026-06-13", time:"18:00", tz:"America/Los_Angeles", status:"settled" },
    { id:"m015", matchNum:15, group:"C", home:"BRA", away:"MAR", venue:"MetLife Stadium, New York",         date:"2026-06-17", time:"21:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m016", matchNum:16, group:"C", home:"SCO", away:"HTI", venue:"BMO Field, Toronto",                date:"2026-06-17", time:"15:00", tz:"America/Toronto",     status:"upcoming" },
    { id:"m017", matchNum:17, group:"C", home:"HTI", away:"BRA", venue:"Gillette Stadium, Boston",          date:"2026-06-21", time:"15:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m018", matchNum:18, group:"C", home:"SCO", away:"MAR", venue:"Lumen Field, Seattle",              date:"2026-06-21", time:"18:00", tz:"America/Los_Angeles", status:"upcoming" },

    // GROUP D
    { id:"m019", matchNum:19, group:"D", home:"USA", away:"PAR", venue:"Rose Bowl, Los Angeles",            date:"2026-06-13", time:"21:00", tz:"America/Los_Angeles", status:"settled" },
    { id:"m020", matchNum:20, group:"D", home:"AUS", away:"TUR", venue:"Hard Rock Stadium, Miami",          date:"2026-06-13", time:"12:00", tz:"America/New_York",    status:"settled" },
    { id:"m021", matchNum:21, group:"D", home:"USA", away:"AUS", venue:"AT&T Stadium, Dallas",              date:"2026-06-17", time:"18:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m022", matchNum:22, group:"D", home:"TUR", away:"PAR", venue:"Arrowhead Stadium, Kansas City",    date:"2026-06-17", time:"21:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m023", matchNum:23, group:"D", home:"PAR", away:"AUS", venue:"Hard Rock Stadium, Miami",          date:"2026-06-21", time:"21:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m024", matchNum:24, group:"D", home:"TUR", away:"USA", venue:"Rose Bowl, Los Angeles",            date:"2026-06-21", time:"21:00", tz:"America/Los_Angeles", status:"upcoming" },

    // GROUP E
    { id:"m025", matchNum:25, group:"E", home:"GER", away:"CUW", venue:"Mercedes-Benz Stadium, Atlanta",   date:"2026-06-14", time:"12:00", tz:"America/New_York",    status:"settled" },
    { id:"m026", matchNum:26, group:"E", home:"CIV", away:"ECU", venue:"Arrowhead Stadium, Kansas City",    date:"2026-06-14", time:"15:00", tz:"America/Chicago",     status:"settled" },
    { id:"m027", matchNum:27, group:"E", home:"GER", away:"CIV", venue:"Rose Bowl, Los Angeles",            date:"2026-06-18", time:"18:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m028", matchNum:28, group:"E", home:"ECU", away:"CUW", venue:"Arrowhead Stadium, Kansas City",    date:"2026-06-18", time:"15:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m029", matchNum:29, group:"E", home:"CUW", away:"CIV", venue:"NRG Stadium, Houston",             date:"2026-06-22", time:"15:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m030", matchNum:30, group:"E", home:"ECU", away:"GER", venue:"MetLife Stadium, New York",         date:"2026-06-22", time:"21:00", tz:"America/New_York",    status:"upcoming" },

    // GROUP F
    { id:"m031", matchNum:31, group:"F", home:"NED", away:"TUN", venue:"Gillette Stadium, Boston",          date:"2026-06-14", time:"18:00", tz:"America/New_York",    status:"settled" },
    { id:"m032", matchNum:32, group:"F", home:"JPN", away:"SWE", venue:"BMO Field, Toronto",                date:"2026-06-14", time:"21:00", tz:"America/Toronto",     status:"settled" },
    { id:"m033", matchNum:33, group:"F", home:"NED", away:"JPN", venue:"Hard Rock Stadium, Miami",          date:"2026-06-18", time:"21:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m034", matchNum:34, group:"F", home:"SWE", away:"TUN", venue:"Levi's Stadium, San Francisco",     date:"2026-06-18", time:"12:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m035", matchNum:35, group:"F", home:"TUN", away:"JPN", venue:"BMO Field, Toronto",                date:"2026-06-22", time:"18:00", tz:"America/Toronto",     status:"upcoming" },
    { id:"m036", matchNum:36, group:"F", home:"SWE", away:"NED", venue:"Gillette Stadium, Boston",          date:"2026-06-22", time:"18:00", tz:"America/New_York",    status:"upcoming" },

    // GROUP G
    { id:"m037", matchNum:37, group:"G", home:"BEL", away:"IRN", venue:"SoFi Stadium, Los Angeles",         date:"2026-06-15", time:"20:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m038", matchNum:38, group:"G", home:"EGY", away:"NZL", venue:"BC Place, Vancouver",               date:"2026-06-15", time:"17:00", tz:"America/Vancouver",   status:"upcoming" },
    { id:"m039", matchNum:39, group:"G", home:"BEL", away:"EGY", venue:"AT&T Stadium, Dallas",              date:"2026-06-19", time:"15:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m040", matchNum:40, group:"G", home:"NZL", away:"IRN", venue:"Lumen Field, Seattle",              date:"2026-06-19", time:"12:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m041", matchNum:41, group:"G", home:"IRN", away:"EGY", venue:"SoFi Stadium, Los Angeles",         date:"2026-06-23", time:"18:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m042", matchNum:42, group:"G", home:"NZL", away:"BEL", venue:"BC Place, Vancouver",               date:"2026-06-23", time:"18:00", tz:"America/Vancouver",   status:"upcoming" },

    // GROUP H
    { id:"m043", matchNum:43, group:"H", home:"ESP", away:"CPV", venue:"Mercedes-Benz Stadium, Atlanta",   date:"2026-06-15", time:"12:00", tz:"America/New_York",    status:"settled" },
    { id:"m044", matchNum:44, group:"H", home:"URU", away:"KSA", venue:"Hard Rock Stadium, Miami",          date:"2026-06-15", time:"23:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m045", matchNum:45, group:"H", home:"ESP", away:"URU", venue:"Arrowhead Stadium, Kansas City",    date:"2026-06-19", time:"18:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m046", matchNum:46, group:"H", home:"KSA", away:"CPV", venue:"NRG Stadium, Houston",             date:"2026-06-19", time:"12:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m047", matchNum:47, group:"H", home:"CPV", away:"URU", venue:"Mercedes-Benz Stadium, Atlanta",   date:"2026-06-23", time:"21:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m048", matchNum:48, group:"H", home:"KSA", away:"ESP", venue:"Hard Rock Stadium, Miami",          date:"2026-06-23", time:"21:00", tz:"America/New_York",    status:"upcoming" },

    // GROUP I
    { id:"m049", matchNum:49, group:"I", home:"FRA", away:"SEN", venue:"MetLife Stadium, New York",         date:"2026-06-15", time:"15:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m050", matchNum:50, group:"I", home:"IRQ", away:"NOR", venue:"Gillette Stadium, Boston",          date:"2026-06-16", time:"12:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m051", matchNum:51, group:"I", home:"FRA", away:"IRQ", venue:"Lincoln Financial Field, Philly",   date:"2026-06-20", time:"21:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m052", matchNum:52, group:"I", home:"NOR", away:"SEN", venue:"BMO Field, Toronto",                date:"2026-06-20", time:"18:00", tz:"America/Toronto",     status:"upcoming" },
    { id:"m053", matchNum:53, group:"I", home:"SEN", away:"IRQ", venue:"MetLife Stadium, New York",         date:"2026-06-24", time:"18:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m054", matchNum:54, group:"I", home:"NOR", away:"FRA", venue:"Lincoln Financial Field, Philly",   date:"2026-06-24", time:"21:00", tz:"America/New_York",    status:"upcoming" },

    // GROUP J
    { id:"m055", matchNum:55, group:"J", home:"ARG", away:"DZA", venue:"Arrowhead Stadium, Kansas City",    date:"2026-06-16", time:"21:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m056", matchNum:56, group:"J", home:"AUT", away:"JOR", venue:"Levi's Stadium, San Francisco",     date:"2026-06-16", time:"15:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m057", matchNum:57, group:"J", home:"ARG", away:"AUT", venue:"AT&T Stadium, Dallas",              date:"2026-06-20", time:"18:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m058", matchNum:58, group:"J", home:"JOR", away:"DZA", venue:"Levi's Stadium, San Francisco",     date:"2026-06-20", time:"15:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m059", matchNum:59, group:"J", home:"DZA", away:"AUT", venue:"Arrowhead Stadium, Kansas City",    date:"2026-06-24", time:"18:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m060", matchNum:60, group:"J", home:"JOR", away:"ARG", venue:"AT&T Stadium, Dallas",              date:"2026-06-24", time:"21:00", tz:"America/Chicago",     status:"upcoming" },

    // GROUP K
    { id:"m061", matchNum:61, group:"K", home:"POR", away:"COD", venue:"NRG Stadium, Houston",             date:"2026-06-16", time:"18:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m062", matchNum:62, group:"K", home:"UZB", away:"COL", venue:"Estadio Azteca, Mexico City",       date:"2026-06-16", time:"22:00", tz:"America/Mexico_City", status:"upcoming" },
    { id:"m063", matchNum:63, group:"K", home:"POR", away:"UZB", venue:"Rose Bowl, Los Angeles",            date:"2026-06-20", time:"21:00", tz:"America/Los_Angeles", status:"upcoming" },
    { id:"m064", matchNum:64, group:"K", home:"COL", away:"COD", venue:"Hard Rock Stadium, Miami",          date:"2026-06-20", time:"15:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m065", matchNum:65, group:"K", home:"COD", away:"UZB", venue:"NRG Stadium, Houston",             date:"2026-06-24", time:"15:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m066", matchNum:66, group:"K", home:"COL", away:"POR", venue:"MetLife Stadium, New York",         date:"2026-06-24", time:"18:00", tz:"America/New_York",    status:"upcoming" },

    // GROUP L
    { id:"m067", matchNum:67, group:"L", home:"ENG", away:"GHA", venue:"Gillette Stadium, Boston",          date:"2026-06-17", time:"21:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m068", matchNum:68, group:"L", home:"CRO", away:"PAN", venue:"AT&T Stadium, Dallas",              date:"2026-06-17", time:"12:00", tz:"America/Chicago",     status:"upcoming" },
    { id:"m069", matchNum:69, group:"L", home:"ENG", away:"CRO", venue:"MetLife Stadium, New York",         date:"2026-06-21", time:"21:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m070", matchNum:70, group:"L", home:"PAN", away:"GHA", venue:"BMO Field, Toronto",                date:"2026-06-21", time:"18:00", tz:"America/Toronto",     status:"upcoming" },
    { id:"m071", matchNum:71, group:"L", home:"GHA", away:"CRO", venue:"Gillette Stadium, Boston",          date:"2026-06-25", time:"18:00", tz:"America/New_York",    status:"upcoming" },
    { id:"m072", matchNum:72, group:"L", home:"PAN", away:"ENG", venue:"Mercedes-Benz Stadium, Atlanta",   date:"2026-06-25", time:"18:00", tz:"America/New_York",    status:"upcoming" },
  ],

  // ── BET MARKETS PER MATCH ───────────────────────────────────
  // These are auto-attached to every fixture by the app
  marketTemplates: [
    {
      id: "match_winner",
      label: "Match Winner",
      type: "pool",          // pool = dynamic odds split among winners
      options: ["home", "draw", "away"],
      optionLabels: { home: "{home} Win", draw: "Draw", away: "{away} Win" },
      settlementField: "winner",  // field set in match result
    },
    {
      id: "exact_score",
      label: "Exact Score",
      type: "pool",
      options: "free_score",      // user types e.g. "2-1"
      settlementField: "score",
    },
    {
      id: "first_goalscorer",
      label: "First Goalscorer",
      type: "fixed",
      multiplier: 15,             // custom fixed payout (15x)
      options: "player_list",     // populated from both squads
      extraOption: "No Goal",
      settlementField: "firstGoalscorer",
    },
    {
      id: "last_goalscorer",
      label: "Last Goalscorer",
      type: "fixed",
      multiplier: 12,
      options: "player_list",
      extraOption: "No Goal",
      settlementField: "lastGoalscorer",
    },
    {
      id: "btts",
      label: "Both Teams to Score",
      type: "fixed",
      multiplier: 2.5,
      options: ["yes", "no"],
      optionLabels: { yes: "Yes", no: "No" },
      settlementField: "btts",
    },
    {
      id: "over_under_goals",
      label: "Total Goals Over/Under 2.5",
      type: "fixed",
      multiplier: 2,
      options: ["over", "under"],
      optionLabels: { over: "Over 2.5", under: "Under 2.5" },
      settlementField: "totalGoals",
      settlementLogic: (v, pick) => pick === "over" ? v > 2.5 : v <= 2.5,
    },
    {
      id: "red_card",
      label: "Red Card in Match?",
      type: "fixed",
      multiplier: 3,
      options: ["yes", "no"],
      optionLabels: { yes: "Yes", no: "No" },
      settlementField: "redCard",
    },
    {
      id: "over_yellows",
      label: "More Than 4 Yellow Cards?",
      type: "fixed",
      multiplier: 2.5,
      options: ["yes", "no"],
      optionLabels: { yes: "Yes (5+)", no: "No (0-4)" },
      settlementField: "yellowCards",
      settlementLogic: (v, pick) => pick === "yes" ? v >= 5 : v < 5,
    },
    {
      id: "first_yellow_team",
      label: "First Team to Get a Yellow",
      type: "fixed",
      multiplier: 3,
      options: ["home", "away", "none"],
      optionLabels: { home: "{home}", away: "{away}", none: "No Yellow" },
      settlementField: "firstYellowTeam",
    },
    {
      id: "first_goal_before_30",
      label: "First Goal Before 30 Minutes?",
      type: "fixed",
      multiplier: 2.5,
      options: ["yes", "no"],
      optionLabels: { yes: "Yes (before 30')", no: "No" },
      settlementField: "firstGoalMinute",
      settlementLogic: (v, pick) => pick === "yes" ? (v !== null && v < 30) : (v === null || v >= 30),
    },
    {
      id: "goal_in_extra_time",
      label: "Goal in Extra Time / Stoppage?",
      type: "fixed",
      multiplier: 4,
      options: ["yes", "no"],
      optionLabels: { yes: "Yes (90+ min goal)", no: "No" },
      settlementField: "goalInExtraTime",
    },
  ],

  // ── RESULT TEMPLATE ─────────────────────────────────────────
  // When admin settles a match, they fill this object
  resultTemplate: {
    scoreHome: null,           // number
    scoreAway: null,           // number
    winner: null,              // "home" | "draw" | "away"
    firstGoalscorer: null,     // player name or "No Goal"
    lastGoalscorer: null,      // player name or "No Goal"
    btts: null,                // "yes" | "no"
    totalGoals: null,          // number
    redCard: null,             // "yes" | "no"
    yellowCards: null,         // number
    firstYellowTeam: null,     // "home" | "away" | "none"
    firstGoalMinute: null,     // number or null (no goal)
    goalInExtraTime: null,     // "yes" | "no"
  }
};

if (typeof module !== "undefined") module.exports = WC2026;
