/* ═══════════════════════════════════════════════════════════════════
   CABINET LUDO — Game Library Database
   All games currently in the collection, with quick-start rules
   and full metadata for display and filtering.
   ═══════════════════════════════════════════════════════════════════ */

/* ── Static BGG cover URLs (scraped from each game's og:image) ────────
   Why baked-in: BGG xmlapi2 is now CORS-walled AND auth-walled, so
   runtime fetch fails. These URLs are cf.geekdo-images.com CDN paths
   from the public game pages — hot-linkable, stable.
   Keyed by BGG id; ludo.js falls back to gradient if a game's id is
   missing here. */
const BGG_COVERS = {
  13:     'https://images.weserv.nl/?url=cf.geekdo-images.com/0XODRpReiZBFUffEcqT5-Q__opengraph/img/ARkyerUcE8vdJx0U5S0eVM0RTzY=/0x0:1000x525/fit-in/1200x630/filters:strip_icc()/pic9156909.png',
  38:     'https://images.weserv.nl/?url=cf.geekdo-images.com/kazoS3z-rZ4RFBvAHMKbzA__opengraph/img/TLllrG14IYc3FyVYguU9eiBM2z8=/0x0:1531x804/fit-in/1200x630/filters:strip_icc()/pic6274530.jpg',
  42:     'https://images.weserv.nl/?url=cf.geekdo-images.com/t-cfSQs4Ic3SAzCSxTigLg__opengraph/img/hb0KRf4FhBZpB725ehiln26_LPc=/0x48:1560x867/fit-in/1200x630/filters:strip_icc()/pic9203204.png',
  171:    'https://images.weserv.nl/?url=cf.geekdo-images.com/0_RWFMNapgr5yCrdhvGi_Q__opengraph/img/K7-MKIaTowM-QZjFCzpMbuO38pI=/0x18:6478x3419/fit-in/1200x630/filters:strip_icc()/pic8785991.jpg',
  181:    'https://images.weserv.nl/?url=cf.geekdo-images.com/Oem1TTtSgxOghRFCoyWRPw__opengraph/img/UcmKPcJUUscy7ikWw1Ew8_Y-tu8=/0x0:889x467/fit-in/1200x630/filters:strip_icc()/pic4916782.jpg',
  220:    'https://images.weserv.nl/?url=cf.geekdo-images.com/lNRG273h6gkd3szSY3EswQ__opengraph/img/GWbNcp24PacF53OMuHSU9SGEYNw=/0x591:2835x2079/fit-in/1200x630/filters:strip_icc()/pic9202764.png',
  483:    'https://images.weserv.nl/?url=cf.geekdo-images.com/CGJihifkrZSqW40zElgXkQ__opengraph/img/iJynfjeQLNzBQ6Yso4G5nU2OUJY=/0x71:2000x1121/fit-in/1200x630/filters:strip_icc()/pic7376874.jpg',
  1115:   'https://images.weserv.nl/?url=cf.geekdo-images.com/QhsvR9GY0LbTpj27fairWA__opengraph/img/FFuk1EuC8UkRBQhlznzheUMpbbs=/0x61:509x347/fit-in/1200x630/filters:fill(blur):strip_icc()/pic186610.jpg',
  2397:   'https://images.weserv.nl/?url=cf.geekdo-images.com/fuNntWUQ8NsmbF7S1gn5GQ__opengraph/img/B3T0-_4jgocgtMHgUBIH7xYTetM=/fit-in/1200x630/filters:strip_icc()/pic4017988.jpg',
  2511:   'https://images.weserv.nl/?url=cf.geekdo-images.com/ptDZ2tJ6dSNiONAx3HH8Tw__opengraph/img/QXogVcR9A3LAD-E4lkCeCBHq_D4=/0x0:1501x788/fit-in/1200x630/filters:strip_icc()/pic3514298.jpg',
  9209:   'https://images.weserv.nl/?url=cf.geekdo-images.com/kdWYkW-7AqG63HhqPL6ekA__opengraph/img/dQRVo1f0UIX-QxlmItn6syEn1a4=/0x0:1500x788/fit-in/1200x630/filters:strip_icc()/pic8937637.jpg',
  11330:  'https://images.weserv.nl/?url=cf.geekdo-images.com/aTzHfe4DVgNvHPmGYThWuw__opengraph/img/0CtvbT41bhEVfoM4ssF-DHcoCxU=/0x492:698x935/fit-in/1200x630/filters:fill(blur):strip_icc()/pic9110087.jpg',
  30549:  'https://images.weserv.nl/?url=cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__opengraph/img/fNu5AeI1nPD73l9_KNPEurNwBuI=/0x655:976x1167/fit-in/1200x630/filters:strip_icc()/pic1534148.jpg',
  55584:  'https://images.weserv.nl/?url=cf.geekdo-images.com/rfZLgeT1PYojpW3WfsSruA__opengraph/img/wCEqxxHZIS4NoEbzz84Cf9d68zU=/0x838:792x1254/fit-in/1200x630/filters:strip_icc()/pic673213.jpg',
  92415:  'https://images.weserv.nl/?url=cf.geekdo-images.com/GVbKORueiHezUaLfVZKlfQ__opengraph/img/0-SrNslW3qHoB8iIJoZMmexInAo=/0x0:900x473/fit-in/1200x630/filters:strip_icc()/pic9315848.jpg',
  103343: 'https://images.weserv.nl/?url=cf.geekdo-images.com/M_7UvwZvuxBVjxdadsa5AA__opengraph/img/tF5c-5cy78b5F7SsfckjKaZSTQI=/0x0:720x378/fit-in/1200x630/filters:strip_icc()/pic1077906.jpg',
  116985: 'https://images.weserv.nl/?url=cf.geekdo-images.com/D9m0sE_WBgS-WVYoeQT2nw__opengraph/img/tNJS4j7A2wEow8bJ-Sg5gbyoxzc=/0x0:420x221/fit-in/1200x630/filters:strip_icc()/pic1304355.jpg',
  128882: 'https://images.weserv.nl/?url=cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__opengraph/img/dioop3_JeqcZjKy_ccNs8-cG8G8=/0x0:700x368/fit-in/1200x630/filters:strip_icc()/pic1398895.jpg',
  129622: 'https://images.weserv.nl/?url=cf.geekdo-images.com/T1ltXwapFUtghS9A7_tf4g__opengraph/img/Q-TYFTvpmXb1QogiEl0udcOtXPU=/0x0:1364x716/fit-in/1200x630/filters:strip_icc()/pic1401448.jpg',
  131357: 'https://images.weserv.nl/?url=cf.geekdo-images.com/MWhSY_GOe2-bmlQ2rntSVg__opengraph/img/JxPFbyoilhY-P5helyOKI5Bw7LM=/0x0:399x209/fit-in/1200x630/filters:strip_icc()/pic2016054.jpg',
  173346: 'https://images.weserv.nl/?url=cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__opengraph/img/EyT9R-od6g-49iIzr8TeWpTg94g=/0x0:720x378/fit-in/1200x630/filters:strip_icc()/pic2576399.jpg',
  188834: 'https://images.weserv.nl/?url=cf.geekdo-images.com/rAQ3hIXoH6xDcj41v9iqCg__opengraph/img/ae8mg6V5TH2WKatln7JHz3BIi8I=/8x0:693x360/fit-in/1200x630/filters:strip_icc()/pic5164305.jpg',
  199792: 'https://images.weserv.nl/?url=cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__opengraph/img/LaoNUvWBEx8UQuHyXjStN_0wwL8=/0x42:1600x882/fit-in/1200x630/filters:strip_icc()/pic3918905.png',
  227935: 'https://images.weserv.nl/?url=cf.geekdo-images.com/bUbrvlY6Dw1cdb-sNrnkew__opengraph/img/DxlvVMrQztjss2gXPH2TIrYlCKA=/0x1853:3900x3900/fit-in/1200x630/filters:strip_icc()/pic5188761.jpg',
  256960: 'https://images.weserv.nl/?url=cf.geekdo-images.com/oSM_AuKYfGIwOtKbVEsoVg__opengraph/img/k_2lbdBwtB2TlxSjnL-P2luonIo=/0x80:1673x958/fit-in/1200x630/filters:strip_icc()/pic4503733.png',
  257499: 'https://images.weserv.nl/?url=cf.geekdo-images.com/09KeqyJEtu2qcskbtlOhqw__opengraph/img/Z-G4SyC61wOiDt1HK9KV6lHgMLc=/0x0:1500x788/fit-in/1200x630/filters:strip_icc()/pic5726297.jpg',
  332686: 'https://images.weserv.nl/?url=cf.geekdo-images.com/TAdE4z_bwAAjJlmPrkmKhA__opengraph/img/gRepsbz9DFvDSrjf49vBfoCL8t8=/0x415:2333x1640/fit-in/1200x630/filters:strip_icc()/pic6601629.jpg'
};

const CATEGORIES = {
  'quick-social':       { label: 'Quick Social & Party',                labelFr: 'Jeux Rapides & Sociaux',         icon: '🎲' },
  'abstract':           { label: 'Classic Abstracts & Traditional',     labelFr: 'Classiques & Abstraits',         icon: '♟️' },
  'family-strategy':    { label: 'Family Competitive Strategy',         labelFr: 'Stratégie Familiale',            icon: '🗺️' },
  'social-deduction':   { label: 'Social Deduction & Hidden Roles',     labelFr: 'Déduction Sociale',              icon: '🎭' },
  'euro-strategy':      { label: 'Euro Strategy & Engine Building',     labelFr: 'Stratégie Euro',                 icon: '⚙️' },
  'historical-strategy':{ label: 'Historical Strategy & Political Sim', labelFr: 'Stratégie Historique',           icon: '🏛️' },
  'cooperative':        { label: 'Cooperative',                         labelFr: 'Coopératif',                     icon: '🤝' }
};

const GAMES = [

  /* ─────────────────────────────────────────────────────
     QUICK SOCIAL & PARTY
  ───────────────────────────────────────────────────── */
  {
    id: 'skull', name: 'Skull', subtitle: null,
    category: 'quick-social',
    publisher: 'Asmodee', designer: 'Hervé Marly', year: 2011,
    players: { min:3, max:6, ideal:5, display:'3–6' },
    duration: { min:15, max:30, display:'15–30 min' },
    bggWeight: 1.1, bggId: 92415,
    description: 'The quintessential bluff game. Each player hides flowers and a skull, then bids on how many they can flip without revealing a skull. Pure psychology — nothing teaches reading people faster. The go-to table-opener anywhere in the world. Fearless in Audrey\'s hands.',
    descriptionFr: 'Le jeu de bluff par excellence. Chaque joueur cache des fleurs et un crâne, puis parie sur combien il peut retourner sans révéler le crâne. Pure psychologie — rien n\'enseigne la lecture des gens plus vite. L\'ouvreur de table par excellence.',
    quickStart: 'Each player has 3 flower discs + 1 skull disc. On your turn: place 1 disc face-down on your stack, OR start bidding (how many you\'ll flip without hitting a skull). If you bid, you must start flipping from your OWN stack first. Win 2 rounds → win the game. Caught bluffing → lose a random disc.',
    quickStartFr: 'Chaque joueur a 3 fleurs + 1 crâne. À votre tour: posez 1 disque face cachée, OU lancez les enchères (combien de disques vous pouvez retourner sans crâne). Si vous enchérissez, commencez par votre propre pile. Gagnez 2 manches → victoire.',
    setting: 'Abstract bluffing · No theme needed',
    pdfFile: 'SKULL-rulebook.pdf',
    gradient: 'linear-gradient(135deg, #1A0808 0%, #300E0E 55%, #4A1A1A 100%)',
    artisan: false, travel: true,
    tags: ['bluffing','quick','travel','family-favourite']
  },

  {
    id: 'coup', name: 'Coup', subtitle: null,
    category: 'quick-social',
    publisher: 'Indie Boards & Cards', designer: 'Rikki Tahta', year: 2012,
    players: { min:2, max:6, ideal:5, display:'2–6' },
    duration: { min:15, max:20, display:'15–20 min' },
    bggWeight: 1.7, bggId: 131357,
    description: 'Hidden identity, bluffing, and elimination in a micro-game that hits like a freight train. Claim any role — or bluff and dare someone to call you out. Lose a challenge, lose a card. Lose both cards, you\'re out. Audrey\'s absolute natural habitat.',
    descriptionFr: 'Identité cachée, bluff et élimination dans un micro-jeu qui frappe fort. Revendiquez n\'importe quel rôle — ou bluffez et défiez quelqu\'un de vous contredire. Perdez un défi, perdez une carte. Perdez les deux, vous êtes éliminé.',
    quickStart: '2 face-down role cards each. Actions: Income (1 coin), Foreign Aid (2 coins, blockable), Coup (pay 7 → force discard). Role actions: Duke → Tax (3 coins); Assassin → Assassinate (pay 3, target discards); Captain → Steal (take 2 from player); Ambassador → Exchange (swap cards). Challenge any claim — caught lying = lose a card. Contessa blocks assassination.',
    quickStartFr: '2 cartes rôle cachées chacun. Actions: Revenu (1 pièce), Aide Étrangère (2 pièces, bloquable), Coup (payer 7 → forcer à défausser). Rôles: Duc → Impôt; Assassin → Assassiner; Capitaine → Voler; Ambassadeur → Échanger. Contestez toute affirmation.',
    setting: 'Dystopian political court',
    pdfFile: 'COUP Rules book.pdf',
    gradient: 'linear-gradient(135deg, #0A0A1C 0%, #1A1A32 55%, #2A1838 100%)',
    artisan: false, travel: true,
    tags: ['hidden-roles','bluffing','quick','travel','family-favourite','audrey']
  },

  {
    id: 'oracle', name: 'Oracle', subtitle: null,
    category: 'quick-social',
    publisher: 'Self-published · James Walden (AU)', designer: 'James Walden', year: 2019,
    players: { min:2, max:5, ideal:4, display:'2–5' },
    duration: { min:20, max:40, display:'20–40 min' },
    bggWeight: 1.8, bggId: null,
    description: 'A rare niche gem from Australia. Created by James Walden, Oracle is adversarial, logical, and deeply satisfying. Its prediction mechanics reward pattern recognition and reading opponents. Portable enough for any table or vacation. A family favourite for its clean, elegant logic.',
    descriptionFr: 'Un joyau rare d\'Australie. Créé par James Walden, Oracle est adversarial, logique et profondément satisfaisant. Portable pour n\'importe quelle table ou vacances. Un favori de la famille pour sa logique élégante.',
    quickStart: 'Deal cards. Each round: make predictions about what opponents will play, then reveal simultaneously. Score for correct predictions. The interplay between what you commit to and what you expect from others is the entire game. Full rules: ORACLE.pdf',
    quickStartFr: 'Distribuez les cartes. Chaque manche: faites des prédictions sur ce que les adversaires vont jouer, puis révélez simultanément. Marquez pour les prédictions correctes. Voir ORACLE.pdf.',
    setting: 'Abstract · prediction and logic',
    pdfFile: 'ORACLE.pdf',
    gradient: 'linear-gradient(135deg, #1A1008 0%, #2A1E0A 55%, #C4922B14 100%)',
    artisan: false, travel: true,
    tags: ['logic','prediction','adversarial','travel','family-favourite']
  },

  {
    id: 'high-society', name: 'High Society', subtitle: null,
    category: 'quick-social',
    publisher: 'Osprey Games', designer: 'Reiner Knizia', year: 1995,
    players: { min:3, max:5, ideal:4, display:'3–5' },
    duration: { min:20, max:30, display:'20–30 min' },
    bggWeight: 1.5, bggId: 220,
    description: 'A Knizia masterclass in minimalist bidding. Auction luxury items to accumulate prestige — but the player who spent the most money is immediately eliminated, even if they\'re winning. The knife-edge tension between wanting the best items and not going bankrupt is perfectly calibrated.',
    descriptionFr: 'Un chef-d\'œuvre de Knizia en enchères minimalistes. Achetez des objets de luxe pour accumuler du prestige — mais le joueur qui a le plus dépensé est éliminé, même s\'il gagnait.',
    quickStart: 'Auction one luxury card at a time. To bid: must exceed previous bid using your money cards. Pass = keep your money, forfeit this item. After all auctions: player who spent the most is eliminated immediately. Then: highest prestige score wins.',
    quickStartFr: 'Enchères sur une carte luxe à la fois. Pour enchérir: dépassez la mise précédente. Passer = gardez votre argent mais renoncez à l\'objet. Après toutes les enchères: le joueur le plus dépensier est éliminé. Puis: meilleur prestige gagne.',
    setting: 'Gilded Age high society',
    pdfFile: 'High Society_rulebook_for_web.pdf',
    gradient: 'linear-gradient(135deg, #1A1408 0%, #2E2010 60%, #5A4018 100%)',
    artisan: false, travel: true,
    tags: ['bidding','quick','knizia','travel']
  },

  {
    id: 'anomia', name: 'Anomia', subtitle: null,
    category: 'quick-social',
    publisher: 'Anomia Press', designer: 'Andrew Innes', year: 2009,
    players: { min:3, max:6, ideal:5, display:'3–6' },
    duration: { min:15, max:30, display:'15–30 min' },
    bggWeight: 1.0, bggId: 55584,
    description: 'When two players\' symbols match, they race to shout an example of the other\'s category. The brain freezes on demand. Hilarious, chaotic, completely frictionless to teach to anyone of any age.',
    descriptionFr: 'Quand deux joueurs ont le même symbole, ils s\'affrontent pour crier un exemple de la catégorie de l\'autre. Le cerveau se bloque à la demande. Hilarant et chaotique.',
    quickStart: 'Players simultaneously flip cards onto personal face-up piles. When your symbol matches another player\'s exposed symbol → face-off: first to name an example of the other\'s category wins their top card. Wild cards create chain face-offs.',
    quickStartFr: 'Les joueurs retournent simultanément des cartes. Quand votre symbole correspond à celui d\'un autre → duel: premier à nommer un exemple de la catégorie de l\'autre gagne la carte.',
    setting: 'Abstract · real-world knowledge',
    pdfFile: 'Anomia.pdf',
    gradient: 'linear-gradient(135deg, #0A1A0A 0%, #163016 55%, #223A20 100%)',
    artisan: false, travel: true,
    tags: ['party','quick','chaotic','travel']
  },

  {
    id: 'complots', name: 'Complots', subtitle: null,
    category: 'quick-social',
    publisher: 'Games Factory', designer: 'Claude Lucchini', year: 2012,
    players: { min:2, max:8, ideal:5, display:'2–8' },
    duration: { min:15, max:20, display:'15–20 min' },
    bggWeight: 1.5, bggId: 116985,
    description: 'The French cousin of Coup — hidden influence and political intrigue in a corrupt medieval court. Similar bluffing mechanics with different role abilities and a distinctly European flavour. Works beautifully for large groups.',
    descriptionFr: 'Le cousin français de Coup — influence cachée et intrigues politiques dans une cour médiévale corrompue. Parfait pour les grands groupes.',
    quickStart: '2 face-down influence cards each. Claim role actions or bluff. Challenged on a lie → lose a card. Lose both → eliminated. Role powers differ from Coup — check the COMPLOTS.pdf card reference. Play until one player remains.',
    quickStartFr: '2 cartes d\'influence cachées. Revendiquez des actions de rôle ou bluffez. Contesté sur un mensonge → perdez une carte. Perdez les deux → éliminé.',
    setting: 'Corrupt medieval court',
    pdfFile: 'COMPLOTS.pdf',
    gradient: 'linear-gradient(135deg, #1A0A0A 0%, #2E1212 55%, #3A1820 100%)',
    artisan: false, travel: true,
    tags: ['hidden-roles','bluffing','quick','french']
  },

  {
    id: 'blend-in', name: 'Blend In', subtitle: null,
    category: 'quick-social',
    publisher: '—', designer: '—', year: 2020,
    players: { min:3, max:8, ideal:6, display:'3–8' },
    duration: { min:15, max:30, display:'15–30 min' },
    bggWeight: 1.2, bggId: null,
    description: 'A social party game about fitting in and standing out at exactly the right moment. Fast, social, and ideal as a table warmup.',
    descriptionFr: 'Jeu de soirée sur l\'art de se fondre dans la masse ou de se démarquer au bon moment. Rapide et social.',
    quickStart: 'Full rules in BLEND IN.pdf',
    quickStartFr: 'Règles complètes dans BLEND IN.pdf',
    setting: 'Social party game',
    pdfFile: 'BLEND IN.pdf',
    gradient: 'linear-gradient(135deg, #0A0A1C 0%, #1A1830 55%, #28203E 100%)',
    artisan: false, travel: true,
    tags: ['party','social','quick']
  },

  {
    id: 'tapper', name: 'Tapper', subtitle: null,
    category: 'quick-social',
    publisher: '—', designer: '—', year: 2020,
    players: { min:3, max:8, ideal:5, display:'3–8' },
    duration: { min:15, max:30, display:'15–30 min' },
    bggWeight: 1.2, bggId: null,
    description: 'Quick, light, and portable. A game of timing and social reading that works perfectly as a pre-dinner opener or late-night wind-down.',
    descriptionFr: 'Rapide, léger et portable. Parfait avant le dîner ou en fin de soirée.',
    quickStart: 'Full rules in TAPPER.pdf',
    quickStartFr: 'Règles complètes dans TAPPER.pdf',
    setting: 'Abstract party game',
    pdfFile: 'TAPPER.pdf',
    gradient: 'linear-gradient(135deg, #1A0C08 0%, #2E1A10 55%, #3A2210 100%)',
    artisan: false, travel: true,
    tags: ['party','quick','travel']
  },

  {
    id: 'love-letter', name: 'Love Letter', subtitle: 'Bridgerton Edition',
    category: 'quick-social',
    publisher: 'Z-Man Games', designer: 'Seiji Kanai', year: 2012,
    players: { min:2, max:6, ideal:4, display:'2–6' },
    duration: { min:15, max:20, display:'15–20 min' },
    bggWeight: 1.0, bggId: 129622,
    description: 'The original micro-game of deduction and elimination — 16 cards, one rule: hold 1, play 1. Elegant in its minimalism. The Bridgerton edition is a themed variant. Superb travel game and perfect as an amuse-bouche before the main event.',
    descriptionFr: 'Le micro-jeu original de déduction — 16 cartes, une règle: tenez-en 1, jouez-en 1. Élégant dans sa minimalisme. Parfait jeu de voyage.',
    quickStart: 'Hold 1 card at all times. Each turn: draw 1, then play 1. Each card has a power (eliminate a player, peek at a hand, swap hands, etc.). Last player standing OR highest card at round end wins a token. First to collect enough tokens wins.',
    quickStartFr: 'Tenez toujours 1 carte. À chaque tour: piochez 1, jouez 1. Chaque carte a un pouvoir. Dernier joueur debout OU carte la plus haute en fin de manche → jeton. Premier à collecter assez de jetons → victoire.',
    setting: 'Regency romance (Bridgerton)',
    pdfFile: 'BRIDGERTON Love Letter.pdf',
    gradient: 'linear-gradient(135deg, #1A0818 0%, #2E1028 55%, #421838 100%)',
    artisan: false, travel: true,
    tags: ['micro-game','deduction','quick','travel']
  },

  /* ─────────────────────────────────────────────────────
     CLASSIC ABSTRACTS & TRADITIONAL
  ───────────────────────────────────────────────────── */
  {
    id: 'backgammon', name: 'Backgammon', subtitle: null,
    category: 'abstract',
    publisher: 'Traditional', designer: 'Ancient (5000+ years)', year: null,
    players: { min:2, max:2, ideal:2, display:'2' },
    duration: { min:30, max:60, display:'30–60 min' },
    bggWeight: 2.0, bggId: 2397,
    description: 'One of humanity\'s oldest games — over 5,000 years of unbroken play. A race game where dice govern fortune but strategy governs bearing off, blocking, and hitting. The doubling cube adds high-stakes tension for advanced players. Artisan sets in leather and bone are among the most beautiful game objects in existence.',
    descriptionFr: 'L\'un des jeux les plus anciens de l\'humanité — plus de 5 000 ans de pratique ininterrompue. Course où les dés gouvernent la fortune mais la stratégie gouverne l\'issue. Les sets artisanaux en cuir et os sont parmi les plus beaux objets de jeu existants.',
    quickStart: 'Move all 15 checkers to your home board and bear them off. Roll two dice each turn; move checkers the exact number shown on each die. A single exposed checker = blot (can be hit). Hit checkers go to the Bar and must re-enter before any other move. First to bear off all 15 wins.',
    quickStartFr: 'Déplacez vos 15 pions vers votre maison et sortez-les. Lancez deux dés, déplacez les pions du nombre exact indiqué. Un pion seul = talon (peut être battu). Les pions battus vont à la barre. Premier à sortir tous ses pions gagne.',
    setting: 'Ancient — Mesopotamian origins',
    pdfFile: 'BACKGAMMON-rules.pdf',
    gradient: 'linear-gradient(135deg, #100A04 0%, #1E1408 55%, #2A1C0C 100%)',
    artisan: true, artisanNote: 'Seek Moroccan or Persian leather-board sets, or 19th-century hand-turned bone and ebony pieces. Fine antique sets surface at specialist auction houses. The doubling cube itself can be sourced in carved bone or ivory replica.',
    travel: false, tags: ['ancient','classic','traditional','artisan-potential']
  },

  {
    id: 'chess', name: 'Chess', subtitle: null,
    category: 'abstract',
    publisher: 'Traditional', designer: 'Traditional (Indian origins)', year: null,
    players: { min:2, max:2, ideal:2, display:'2' },
    duration: { min:30, max:180, display:'30 min – 3 hours' },
    bggWeight: 4.0, bggId: 171,
    description: '1,500 years of refinement from six piece types and 64 squares. The benchmark abstract. Of particular collector interest: 19th-century Mughal Indian ivory chess sets are among the most extraordinary game objects ever produced — aligned perfectly with Chris\'s historical and aesthetic preferences.',
    descriptionFr: '1 500 ans de raffinement en 6 types de pièces et 64 cases. L\'abstrait de référence. D\'un intérêt collectionneur particulier: les jeux d\'échecs en ivoire Moghol du XIXe siècle sont parmi les objets de jeu les plus extraordinaires jamais produits.',
    quickStart: 'Move pieces per their rules. Threaten the King (check); opponent must escape. King (1 sq any direction), Queen (any distance any direction), Rook (any distance straight), Bishop (any distance diagonal), Knight (L-shape, jumps), Pawn (forward 1–2 on first move, captures diagonally). Checkmate (inescapable check) = win.',
    quickStartFr: 'Déplacez les pièces selon leurs règles. Menacez le Roi (échec); l\'adversaire doit s\'échapper. Échec et mat (échec inévitable) = victoire.',
    setting: 'Medieval — Indian/Persian origins',
    pdfFile: null,
    gradient: 'linear-gradient(135deg, #0A0A08 0%, #181814 55%, #242420 100%)',
    artisan: true, artisanNote: 'Mughal-period Indian ivory or bone sets (19th century) are the crown jewel of artisan chess sets — seek at Bonhams, Christie\'s South Kensington, or specialist Indian antique dealers. Also: Isle of Lewis replicas (carved stone, medieval Scottish) and Jaques of London staunton sets.',
    travel: false, tags: ['ancient','classic','abstract','artisan-potential','deep-strategy']
  },

  {
    id: 'jass', name: 'Jass', subtitle: 'Swiss National Card Game',
    category: 'abstract',
    publisher: 'Traditional (Swiss)', designer: 'Traditional', year: null,
    players: { min:2, max:4, ideal:4, display:'2–4' },
    duration: { min:30, max:60, display:'30–60 min' },
    bggWeight: 2.2, bggId: 11330,
    description: 'The Swiss national card game — centuries of regional play in a single 36-card deck. A trick-taking game with a unique trump system where the Buur (Jack of trumps) and Nell (Nine of trumps) hold supreme power. Several variants: Coiffeur, Differenzler, Schieber. Family tradition.',
    descriptionFr: 'Le jeu de cartes national suisse — des siècles de pratique régionale. Jeu de plis avec un système d\'atouts unique où le Buur et le Nell dominent. Variantes: Coiffeur, Differenzler, Schieber. Tradition familiale.',
    quickStart: 'Use Swiss 36-card deck. Trump is declared at the start of each round. Trump hierarchy (high to low): Buur (Jack), Nell (9), Ace, King, Queen, 8, 7, 6. Non-trump: Ace, King, Queen, Jack, 10, 9, 8, 7, 6. Lead trick, must follow suit if possible. See JASS PDFs for scoring and variant rules.',
    quickStartFr: 'Utilisez le jeu de 36 cartes suisse. L\'atout est déclaré en début de manche. Hiérarchie atout: Buur (Valet), Nell (9), As, Roi, Dame... Voir les PDFs JASS pour les règles complètes.',
    setting: 'Traditional Swiss — centuries old',
    pdfFile: 'JASS_Spielregeln_Jassen_e.pdf',
    gradient: 'linear-gradient(135deg, #080E14 0%, #142030 55%, #081A08 100%)',
    artisan: false, travel: true,
    tags: ['traditional','swiss','trick-taking','family-favourite','travel']
  },

  {
    id: 'poker', name: 'Poker', subtitle: "Texas Hold'em",
    category: 'abstract',
    publisher: 'Traditional', designer: 'Traditional', year: null,
    players: { min:2, max:10, ideal:6, display:'2–10' },
    duration: { min:60, max:300, display:'Open-ended' },
    bggWeight: 2.8, bggId: 1115,
    description: 'The greatest psychological card game ever devised. Two hole cards, five community cards, four betting rounds. The mathematics are learnable; the psychology is inexhaustible. Texas Hold\'em has dominated the world\'s poker tables for excellent reason. Antonin\'s resource management instincts serve him exceptionally well here.',
    descriptionFr: 'Le plus grand jeu de cartes psychologique jamais conçu. Deux cartes personnelles, cinq cartes communes, quatre rondes de mises. Les mathématiques s\'apprennent; la psychologie est inépuisable.',
    quickStart: 'Each player: 2 hole cards. Betting rounds: Pre-flop (after hole cards dealt), Flop (3 community cards revealed), Turn (1 card), River (1 card). Best 5-card hand from any combination of 7 wins pot. Hand ranks (high→low): Royal Flush · Straight Flush · Four of a Kind · Full House · Flush · Straight · Three of a Kind · Two Pair · Pair · High Card.',
    quickStartFr: '2 cartes personnelles. Rondes: Pré-flop, Flop (3 cartes), Turn (1 carte), River (1 carte). Meilleure main sur 5 cartes parmi 7 remporte. Hiérarchie: Quinte Flush Royale · Quinte Flush · Carré · Full · Couleur · Quinte · Brelan · Double Paire · Paire · Carte Haute.',
    setting: "American frontier — 19th-century origins",
    pdfFile: 'POKER_en.pdf',
    gradient: 'linear-gradient(135deg, #0A0A0A 0%, #181410 55%, #181808 100%)',
    artisan: true, artisanNote: 'Seek ceramic or genuine clay-composite chip sets (avoid cheap plastic). Beautiful brass card holders and leather cases available. Vintage felt table cloths and mahogany chip trays exist as genuine upgrades.',
    travel: false, tags: ['classic','psychological','traditional','artisan-potential','antonin']
  },

  /* ─────────────────────────────────────────────────────
     FAMILY COMPETITIVE STRATEGY
  ───────────────────────────────────────────────────── */
  {
    id: 'catan', name: 'Catan', subtitle: 'Base Game',
    category: 'family-strategy',
    publisher: 'CATAN Studio', designer: 'Klaus Teuber', year: 1995,
    players: { min:3, max:4, ideal:4, display:'3–4 (5–6 with expansion)' },
    duration: { min:60, max:120, display:'60–120 min' },
    bggWeight: 2.3, bggId: 13,
    description: 'The game that brought Euro strategy to the world\'s mainstream. Modular hex board, resource trading, road blocking, and the eternal frustration of the 7. Antonin\'s resource hunger and trading instincts make him a natural threat. The base game is the essential launchpad for all expansions.',
    descriptionFr: 'Le jeu qui a popularisé la stratégie euro. Plateau hexagonal modulaire, échange de ressources, blocage de routes. Antonin et son instinct des ressources en font une menace naturelle. Le jeu de base est le tremplin vers toutes les extensions.',
    quickStart: 'Build roads, settlements, cities using resources (Brick · Wood · Grain · Ore · Sheep). Each turn: roll dice → all players collect resources from adjacent hexes → build/trade/play dev card. Robber on 7: move robber (block hex, steal from player), discard if 8+ cards. Longest Road (5+ connected) = 2VP. Largest Army (3+ knights) = 2VP. First to 10VP wins.',
    quickStartFr: 'Construisez routes, colonies, villes avec les ressources (Briques · Bois · Blé · Minerai · Laine). Lancez les dés → collectez ressources → construisez/échangez. Voleur sur 7. Route la plus longue = 2PV. Grande Armée = 2PV. Premier à 10PV gagne.',
    setting: 'Fictional island settlement',
    pdfFile: 'CATAN_CN3081 CATAN–The Game Rulebook secure (1).pdf',
    gradient: 'linear-gradient(135deg, #0D1A0D 0%, #1A3010 55%, #2E4818 100%)',
    artisan: false, travel: false,
    tags: ['family-favourite','trading','settlement','expansions'],
    expansions: ['Cities & Knights','Seafarers','Explorers & Pirates','Traders & Barbarians']
  },

  {
    id: 'catan-ck', name: 'Catan: Cities & Knights', subtitle: 'Expansion',
    category: 'euro-strategy',
    publisher: 'CATAN Studio', designer: 'Klaus Teuber', year: 1998,
    players: { min:3, max:4, ideal:4, display:'3–4 (5–6 with expansion)' },
    duration: { min:90, max:150, display:'90–150 min' },
    bggWeight: 3.0, bggId: 42,
    description: 'The crown jewel of Catan expansions. Adds knights to defend against barbarians, three commodity chains (Cloth, Coin, Paper), progress cards across three development tracks, and the potential Metropolis — worth 2 VP and denying the city upgrade to opponents. Current family favourite expansion. Significantly more rewarding than the base game.',
    descriptionFr: 'Le joyau des extensions Catan. Ajoute des chevaliers contre les barbares, trois filières de marchandises (Tissu, Pièce, Parchemin), des cartes de progrès et la Métropole. Extension favorite de la famille.',
    quickStart: 'Requires base Catan. New elements: Red die (Event die, not resource). Commodities: Cloth (upgrading forests), Coin (mines), Paper (mountains). Knights: activate with Grain, move anywhere connected. Barbarians advance each turn. If barbarians sack Catan → weakest active knight player loses a city. Progress cards (3 tracks: Trade/Politics/Science) replace standard Dev cards. Metropolis (Trade or Science, 4 improvements) = 2 bonus VP + blocks opponents from City there.',
    quickStartFr: 'Nécessite Catan de base. Nouveau: Dé rouge (événement). Marchandises: Tissu/Pièce/Parchemin. Chevaliers: activez avec du blé. Barbares: avancent chaque tour. Métropole = 2PV bonus.',
    setting: 'Fictional island — medieval expansion',
    pdfFile: 'CATAN_CN3087 CATAN–Cities&Knights_ Rulebook.pdf',
    gradient: 'linear-gradient(135deg, #0D1A18 0%, #1A2E28 55%, #2E3A20 100%)',
    artisan: false, travel: false,
    tags: ['catan-expansion','complex','family-favourite']
  },

  {
    id: 'catan-seafarers', name: 'Catan: Seafarers', subtitle: 'Expansion',
    category: 'euro-strategy',
    publisher: 'CATAN Studio', designer: 'Klaus Teuber', year: 1997,
    players: { min:3, max:4, ideal:4, display:'3–4 (5–6 with expansion)' },
    duration: { min:90, max: 120, display: '90–120 min' },
    bggWeight: 2.5, bggId: 38,
    description: 'Adds ships, sailing, and multiple islands. Several scenario maps included — from simple archipelagos to Viking colonisation scenarios. Transforms Catan from a single island into an explorable ocean world. Accessible complexity jump.',
    descriptionFr: 'Ajoute navires, navigation et îles multiples. Plusieurs scénarios inclus. Transforme Catan en un monde océanique explorable.',
    quickStart: 'Build ships (Wood + Sheep) instead of roads to cross sea hexes. Ships connect like roads but can be rerouted if one end is free. Explore and settle new islands for bonus VP tokens. Gold Field hexes = choose any resource when dice match. Pirates block shipping lanes.',
    quickStartFr: 'Construisez des navires (Bois + Laine) pour traverser la mer. Explorez de nouvelles îles pour des PV bonus. Les hexagones d\'or = choisissez n\'importe quelle ressource.',
    setting: 'Viking maritime exploration',
    pdfFile: 'CATAN_CN3083 CATAN–Seafarers Rulebook 2025 secured reduced.pdf',
    gradient: 'linear-gradient(135deg, #0A0E1C 0%, #181E30 55%, #0D2030 100%)',
    artisan: false, travel: false,
    tags: ['catan-expansion','sailing','exploration']
  },

  {
    id: 'risk', name: 'Risk', subtitle: '40th Anniversary — Metal Edition',
    category: 'family-strategy',
    publisher: 'Hasbro', designer: 'Albert Lamorisse', year: 1957,
    players: { min:2, max:6, ideal:5, display:'2–6' },
    duration: { min:120, max:240, display:'2–4 hours' },
    bggWeight: 2.1, bggId: 181,
    description: 'The grandfather of conflict games. World domination through territorial conquest, card set bonuses, and dice battles. Luck-driven, yes — but the politics of when to attack, who to let win temporarily, and when to consolidate are genuine strategy. The 40th Anniversary Metal Edition replaces plastic armies with beautiful cast metal pieces — a meaningful object upgrade.',
    descriptionFr: 'Le grand-père des jeux de conflit. Domination mondiale par la conquête territoriale. Axé sur la chance, certes — mais la politique de qui attaquer et quand se consolider est une vraie stratégie. L\'édition 40e anniversaire remplace le plastique par de beaux pions en métal.',
    quickStart: 'Distribute territories and armies. Each turn: 1) Reinforce (new armies from sets of 3 cards + territories owned + continent bonuses). 2) Attack (attacker rolls max 3 dice, defender max 2 — defender wins ties. Repeat until attacker stops or territory falls). 3) Fortify (move armies along connected territories). Eliminate a player → take all their cards. Hold a continent for bonus armies. Eliminate all opponents or hold all territories to win.',
    quickStartFr: 'Répartissez territoires et armées. Chaque tour: 1) Renforcements (cartes + territoires + continents). 2) Attaque (lancez jusqu\'à 3 dés vs 2, défenseur gagne à égalité). 3) Fortification. Éliminez tous les adversaires pour gagner.',
    setting: 'World domination — geopolitical',
    pdfFile: 'RISK.pdf',
    gradient: 'linear-gradient(135deg, #0D0A14 0%, #1A1020 55%, #2A1A10 100%)',
    artisan: true, artisanNote: 'Chris\'s copy is the 40th Anniversary Metal Edition — cast metal armies replacing the standard plastic. Seek Etsy artisan additions: engraved dice, custom territory cards printed on aged parchment.',
    travel: false, tags: ['classic','conflict','world','artisan-edition','family']
  },

  {
    id: 'ticket-to-ride', name: 'Ticket to Ride', subtitle: 'With handcrafted wooden wagons',
    category: 'family-strategy',
    publisher: 'Days of Wonder', designer: 'Alan R. Moon', year: 2004,
    players: { min:2, max:5, ideal:4, display:'2–5' },
    duration: { min:45, max:90, display:'45–90 min' },
    bggWeight: 1.9, bggId: 9209,
    description: 'Route collection and quiet sabotage across the railways of America. Accessible enough for any new player, with genuine tension when someone blocks your crucial connection at the last moment. Chris\'s copy features Etsy-sourced handcrafted wooden wagons — a simple upgrade that transforms the table feel entirely.',
    descriptionFr: 'Collection de routes et sabotage silencieux sur les chemins de fer américains. Accessible à tous, avec une vraie tension quand quelqu\'un bloque votre connexion cruciale au dernier moment. Les wagons artisanaux en bois transforment l\'expérience.',
    quickStart: 'Start with 4 train cards + 3 destination tickets (keep min 2). On your turn: 1) Draw 2 train cards (face-up or blind), OR 2) Claim a route (discard matching colour cards × route length → place trains → score points), OR 3) Draw 3 destination tickets (keep min 1). Longest continuous route = 10 bonus points. Completed destinations = positive points; unfulfilled = negative. Game ends when any player has 2 or fewer trains remaining.',
    quickStartFr: '4 cartes train + 3 billets de destination (gardez-en min 2). À votre tour: Piochez 2 cartes, OU Réclamez une route, OU Piochez des billets. Route la plus longue = 10 pts bonus. Destinations remplies = bonus; non remplies = pénalité.',
    setting: '19th–early 20th century American railways',
    pdfFile: 'TICKET TO RIDE.pdf',
    gradient: 'linear-gradient(135deg, #1A0808 0%, #2E1010 55%, #481818 100%)',
    artisan: true, artisanNote: 'Chris\'s copy features handcrafted wooden wagons from Etsy — a simple, high-impact upgrade. Search Etsy: "Ticket to Ride wooden trains" or "TTR wood replacement". Also seek premium metal/wood resource tokens.',
    travel: false, tags: ['family-favourite','railway','route-building','artisan-edition']
  },

  {
    id: '7-wonders-duel', name: '7 Wonders Duel', subtitle: null,
    category: 'family-strategy',
    publisher: 'Repos Production', designer: 'Antoine Bauza & Bruno Cathala', year: 2015,
    players: { min:2, max:2, ideal:2, display:'2 players only' },
    duration: { min:30, max:45, display:'30–45 min' },
    bggWeight: 2.2, bggId: 173346,
    description: 'One of the finest 2-player games ever designed. Three Ages of civilisation drafting — military confrontation, scientific supremacy, or most Victory Points. Faster and more tactical than the base 7 Wonders, with three distinct paths to victory that create perpetual tension.',
    descriptionFr: 'L\'un des meilleurs jeux à 2 jamais conçus. Trois Âges de civilisation — confrontation militaire, suprématie scientifique ou plus de Points de Victoire. Plus rapide et tactique que le 7 Wonders de base.',
    quickStart: 'Three Ages; each has a pyramid card layout. On your turn: take any exposed card (adding it to your board or discarding for 2 gold or building a wonder). Military: advance conflict pawn toward opponent\'s city. 3 military shields past midpoint → immediate win. Science: collect matching symbol pairs for progress tokens; 6 different symbols → immediate science win. After Age III: most VP wins.',
    quickStartFr: 'Trois Âges; disposition pyramide. À votre tour: prenez une carte exposée (jouez-la, défaussez pour 2 pièces ou construisez une merveille). Victoire: militaire (avancez le pion), science (6 paires différentes) ou PV totaux.',
    setting: 'Ancient civilisations — 3000 BCE',
    pdfFile: '7 Wonders DUEL.pdf',
    gradient: 'linear-gradient(135deg, #1A1208 0%, #2E2010 55%, #C4922B18 100%)',
    artisan: false, travel: false,
    tags: ['2-player','civilisation','drafting']
  },

  /* ─────────────────────────────────────────────────────
     SOCIAL DEDUCTION & HIDDEN ROLES
  ───────────────────────────────────────────────────── */
  {
    id: 'avalon', name: 'The Resistance: Avalon', subtitle: 'Big Box Edition',
    category: 'social-deduction',
    publisher: 'Indie Boards & Cards', designer: 'Don Eskridge', year: 2012,
    players: { min:5, max:10, ideal:7, display:'5–10' },
    duration: { min:30, max:60, display:'30–60 min' },
    bggWeight: 1.9, bggId: 128882,
    description: 'Hidden Arthurian roles where Merlin\'s knights must pass three missions while Mordred\'s spies try to fail them. Pure social deduction, information extraction, and misdirection. Ideal for the family\'s adversarial table. The Big Box adds Lancelot, Lady of the Lake, and Oberon — increasing the paranoia beautifully.',
    descriptionFr: 'Rôles arthuriens cachés: les chevaliers de Merlin doivent réussir trois missions tandis que les espions de Mordred tentent de les faire échouer. Déduction sociale pure, extraction d\'information et désinformation.',
    quickStart: 'Assign hidden roles (Loyal Servants vs Mordred\'s Spies; Merlin sees all evil). Leader proposes a mission team (size varies per player count). All players vote Approve/Reject — majority rules; if rejected 5 times in a row, evil wins. Approved mission: team members secretly play Success or Fail (only evil can Fail). 2 or more Fails = mission fails. 3 successful missions = Good wins → BUT Evil tries to guess Merlin. Correct guess = Evil wins.',
    quickStartFr: 'Rôles cachés (Serviteurs vs Espions; Merlin voit le mal). Le chef propose une équipe de mission → vote. Si accepté: les membres jouent Succès ou Échec en secret. 3 missions réussies = Bien gagne → mais le Mal tente de deviner Merlin.',
    setting: 'Arthurian England — Camelot',
    pdfFile: 'Avalon Big Box Edition Rules.pdf',
    gradient: 'linear-gradient(135deg, #0D1A2E 0%, #1A2E4A 55%, #0A0A1C 100%)',
    artisan: false, travel: true,
    tags: ['hidden-roles','deduction','social','arthurian','family-favourite','audrey']
  },

  {
    id: 'chameleon', name: 'The Chameleon', subtitle: null,
    category: 'social-deduction',
    publisher: 'Big Potato Games', designer: 'Rikki Tahta', year: 2017,
    players: { min:3, max:8, ideal:6, display:'3–8' },
    duration: { min:15, max:30, display:'15–30 min' },
    bggWeight: 1.3, bggId: 227935,
    description: 'One player secretly doesn\'t know the topic — the Chameleon. Everyone gives one word to prove they know the secret word. The Chameleon has to bluff convincingly. Then everyone accuses. Fast, hilarious, completely replayable.',
    descriptionFr: 'Un joueur ne connaît pas le sujet — le Caméléon. Tout le monde donne un mot pour prouver sa connaissance. Le Caméléon doit bluffer. Puis tout le monde accuse.',
    quickStart: 'Reveal the topic grid. All players flip encrypted code cards simultaneously. One player gets the Chameleon card (no secret word — only the grid). Each player says ONE word connected to the topic (not too obvious). Everyone votes to accuse someone of being the Chameleon. If Chameleon is found → they get one chance to guess the secret word and survive.',
    quickStartFr: 'Révélez la grille de sujets. Chacun retourne son code. Un joueur est le Caméléon. Chacun dit UN mot lié au sujet. Vote: qui est le Caméléon? S\'il est trouvé → il tente de deviner le mot secret.',
    setting: 'Abstract party deduction',
    pdfFile: 'THE CHAMELEON.pdf',
    gradient: 'linear-gradient(135deg, #0A1A0A 0%, #183018 55%, #2A3A10 100%)',
    artisan: false, travel: true,
    tags: ['hidden-roles','deduction','party','quick','travel']
  },

  {
    id: 'secret-hitler', name: 'Secret Hitler', subtitle: null,
    category: 'social-deduction',
    publisher: 'Goat Wolf & Cabbage', designer: 'Max Temkin, Mike Boxleiter, Tommy Maranges', year: 2016,
    players: { min:5, max:10, ideal:7, display:'5–10' },
    duration: { min:45, max:75, display:'45–75 min' },
    bggWeight: 2.1, bggId: 188834,
    description: 'A social deduction game set in the collapse of the Weimar Republic. Liberals must identify and neutralise Hitler; Fascists must get Hitler elected as Chancellor. Deeper than Avalon with a legislative mechanic — policies are drawn and enacted blindly, creating genuine chaos even among honest players.',
    descriptionFr: 'Déduction sociale dans l\'effondrement de la République de Weimar. Libéraux vs Fascistes + Hitler. Plus profond qu\'Avalon avec un mécanisme législatif créant un chaos authentique.',
    quickStart: 'Roles: Liberals (majority, don\'t know each other), Fascists + Hitler (know each other, Hitler doesn\'t know who\'s who in 7+ player game). Each round: President nominates Chancellor → all vote → if approved: President draws 3 policy tiles, discards 1, passes 2 to Chancellor, Chancellor enacts 1. Liberals: enact 5 Liberal policies OR investigate and execute Hitler. Fascists: enact 6 Fascist policies OR elect Hitler as Chancellor after 3 Fascist policies enacted.',
    quickStartFr: 'Rôles: Libéraux (majorité), Fascistes + Hitler. Chaque tour: Président nomme un Chancelier → vote → si approuvé: 3 tuiles politique, en défaussez 1, passez 2 au Chancelier. 5 Libérales = victoire Libérale. 6 Fascistes ou Hitler comme Chancelier = victoire Fasciste.',
    setting: 'Weimar Germany — 1930s political crisis',
    pdfFile: 'SECRET HITLER.pdf',
    gradient: 'linear-gradient(135deg, #1A0A0A 0%, #2E1010 55%, #0A0A1C 100%)',
    artisan: false, travel: false,
    tags: ['hidden-roles','political','deduction','social','heavy-social']
  },

  /* ─────────────────────────────────────────────────────
     EURO STRATEGY & ENGINE BUILDING
  ───────────────────────────────────────────────────── */
  {
    id: 'everdell', name: 'Everdell', subtitle: 'with Evertree',
    category: 'euro-strategy',
    publisher: 'Starling Games', designer: 'James A. Wilson', year: 2018,
    players: { min:1, max:4, ideal:3, display:'1–4' },
    duration: { min:40, max:80, display:'40–80 min' },
    bggWeight: 2.8, bggId: 199792,
    description: 'Engine-building and worker placement in an enchanted critter forest. Place workers to gather resources, construct buildings, attract critter residents. The 3D Evertree centrepiece makes it the most visually spectacular game on the table. Andrew Bosley\'s illustrations are exceptional. One of its greatest pleasures is watching new players see the table for the first time.',
    descriptionFr: 'Construction de moteur et placement d\'ouvriers dans une forêt enchantée. L\'arbre Evertree en 3D en fait le jeu le plus spectaculaire sur la table. Les illustrations d\'Andrew Bosley sont exceptionnelles.',
    quickStart: 'Workers gather resources (Berries · Twigs · Resin · Pebbles). Use resources to play card from hand — Construction or Critter. Some Critters are free when their matching Construction is built. Seasons advance when you recall workers: gain seasonal bonuses. Build the most efficient city (max 15 cards). Game ends after Spring–Summer–Autumn–Winter.',
    quickStartFr: 'Les ouvriers collectent des ressources. Jouez des cartes (Constructions ou Créatures). Les saisons avancent quand vous rappelez vos ouvriers. Construisez la ville la plus efficace (max 15 cartes). 4 saisons = fin de partie.',
    setting: 'Enchanted forest — critter civilisation',
    pdfFile: 'EVERDELL-rulebook.pdf',
    gradient: 'linear-gradient(135deg, #0A1A08 0%, #1A3010 55%, #2A3818 100%)',
    artisan: false, travel: false,
    tags: ['worker-placement','engine-building','beautiful','family-friendly']
  },

  {
    id: 'game-of-thrones', name: 'Game of Thrones', subtitle: 'The Board Game — 2nd Edition',
    category: 'historical-strategy',
    publisher: 'Fantasy Flight Games', designer: 'Christian T. Petersen', year: 2003,
    players: { min:3, max:6, ideal:6, display:'3–6' },
    duration: { min:120, max:240, display:'2–4 hours' },
    bggWeight: 3.7, bggId: 103343,
    description: 'The politics of Westeros in board game form. Area control, hidden orders, supply chains, and Wildling invasions. At 6 players it becomes a masterclass in live-table diplomacy — alliances form and collapse in real time. Closer in spirit to Diplomacy than to Catan.',
    descriptionFr: 'La politique de Westeros sous forme de jeu de plateau. Contrôle de zone, ordres secrets et invasion des Sauvageons. À 6 joueurs, c\'est un chef-d\'œuvre de diplomatie en temps réel.',
    quickStart: 'Choose a House. Each round: 1) Westeros phase (event cards affect all players), 2) Planning phase (simultaneously place order tokens face-down on all your territories), 3) Action phase (resolve orders in strict priority: Raid → March → Consolidate → Support/Defend counted in battles). Combat: sum of strength + support + fortification, highest wins (ties go to order advantage). First to 7 castles wins, OR most after round 10.',
    quickStartFr: 'Choisissez une Maison. Chaque tour: 1) Phase Westeros (cartes événement), 2) Planification (placez vos jetons d\'ordre simultanément), 3) Action (résolvez dans l\'ordre de priorité). Premier à 7 châteaux gagne.',
    setting: 'Westeros — fictional medieval epic',
    pdfFile: 'GAME OF THRONES 2nd.pdf',
    gradient: 'linear-gradient(135deg, #0A0A14 0%, #1A1A22 55%, #1A0A0A 100%)',
    artisan: false, travel: false,
    tags: ['political','area-control','diplomacy-adjacent','negotiation','heavy']
  },

  /* ─────────────────────────────────────────────────────
     HISTORICAL STRATEGY & POLITICAL SIMULATION
  ───────────────────────────────────────────────────── */
  {
    id: 'pax-pamir', name: 'Pax Pamir', subtitle: '2nd Edition',
    category: 'historical-strategy',
    publisher: 'Wehrlegig Games', designer: 'Cole Wehrle', year: 2019,
    players: { min:1, max:5, ideal:4, display:'1–5' },
    duration: { min:45, max:120, display:'45–120 min' },
    bggWeight: 3.9, bggId: 256960,
    description: 'The benchmark. Afghanistan 1848 — the collapse of the Durrani Empire and the Great Game between British and Russian empires. Players are Afghan chieftains shifting allegiance between three coalitions. The Wehrlegig cloth board, chalk-style wooden pieces, and hand-illustrated period cards set the artisan standard. Coalition scoring means reading the table matters as much as reading your cards.',
    descriptionFr: 'L\'étalon-or. Afghanistan 1848 — l\'effondrement de l\'Empire Durrani et le Grand Jeu entre empires britannique et russe. Plateau en tissu, pions en craie, cartes illustrées à la main par Wehrlegig. La notation de coalition signifie que lire la table compte autant que vos cartes.',
    quickStart: 'Each turn: 1) Purchase 1 card from the market (pay the coins shown on cards to its left). 2) Take up to 2 actions: Play a card (pay its cost + place in court), Build armies/roads (pay card action), Make spies (discard opponent\'s courtier), Tax (gain coins), Gift (gain dominance). Dominance Checks triggered by special cards: the coalition with most armies scores; players loyal to it score VP based on their dominance tokens. Most VP at game end wins.',
    quickStartFr: 'Chaque tour: 1) Achetez 1 carte. 2) Effectuez 2 actions: Jouez une carte, Construisez armées/routes, Espionnez, Taxez, Offrez. Les Vérifications de Domination déclenchées par certaines cartes: la coalition la plus forte marque; les joueurs loyaux marquent des PV. Plus de PV en fin = victoire.',
    setting: 'Afghanistan 1848 — The Great Game · Durrani Empire collapse',
    pdfFile: 'PAX PAMIR.pdf',
    gradient: 'linear-gradient(135deg, #1A1008 0%, #2E2010 40%, #4A3018 75%, #C4922B1A 100%)',
    artisan: true, artisanNote: 'Chris\'s copy is the Wehrlegig cloth board edition — the artisan benchmark. French rules also available in folder: PAX PAMIR (FR).pdf. Pense-bête (aide de jeu) also in folder.',
    travel: false,
    tags: ['historical','political','wehrlegig','artisan','afghanistan','great-game','family-favourite']
  },

  {
    id: 'john-company', name: 'John Company', subtitle: '2nd Edition',
    category: 'historical-strategy',
    publisher: 'Wehrlegig Games', designer: 'Cole Wehrle', year: 2022,
    players: { min:1, max:6, ideal:4, display:'1–6' },
    duration: { min:90, max:180, display:'90–180 min' },
    bggWeight: 4.2, bggId: 332686,
    description: 'The East India Company as a game of corporate ambition and institutional collapse. Players are shareholder families placing relatives in the Company hierarchy. The game models how organisations corrupt and fail with ruthless historical accuracy. More complex than Pax Pamir — awaiting the right strategic evening. A Wehrlegig masterwork.',
    descriptionFr: 'La Compagnie des Indes Orientales comme jeu d\'ambition d\'entreprise et d\'effondrement institutionnel. Les joueurs sont des familles actionnaires plaçant leurs membres dans la hiérarchie de la Compagnie. Plus complexe que Pax Pamir — en attente de la bonne soirée stratégique.',
    quickStart: 'Family offices placed across the EIC hierarchy. Each season: events advance the narrative, players negotiate who takes which Company actions (military, trading, governance). Profit flows up and out. Wars cost money. Famines happen. The British Crown eventually intervenes. Survival and prosperity of your family line = winning. Full rules: John Company Rules.pdf',
    quickStartFr: 'Familles placées dans la hiérarchie de la CIO. Chaque saison: négociez les actions de la Compagnie. Le profit remonte. Les guerres coûtent. La Couronne britannique intervient finalement. La survie et la prospérité de votre famille = victoire.',
    setting: 'British India — East India Company 1710–1875',
    pdfFile: 'John Company Rules.pdf',
    gradient: 'linear-gradient(135deg, #1A0808 0%, #2E1010 45%, #1A0D08 75%, #C4922B12 100%)',
    artisan: true, artisanNote: 'Wehrlegig Games edition. Not yet played — acquired and awaiting the right group and evening. One of the most historically serious games published in the 21st century.',
    travel: false,
    tags: ['historical','political','wehrlegig','artisan','colonial','british-india','heavy']
  },

  {
    id: 'diplomacy', name: 'Diplomacy', subtitle: 'Standard + Era of Empire + Golden Blade',
    category: 'historical-strategy',
    publisher: 'Avalon Hill / Gale Force Nine', designer: 'Allan B. Calhamer', year: 1959,
    players: { min:2, max:7, ideal:7, display:'2–7' },
    duration: { min:240, max:360, display:'4–6 hours' },
    bggWeight: 3.1, bggId: 483,
    description: 'The purest negotiation game ever designed. No dice. No luck. Seven European powers, one victor. Six hours of alliance, counter-alliance, and the inevitable great betrayal. Chris\'s personal favourite for strategic play with friends. The Era of Empire and Golden Blade variants expand the map and political canvas considerably.',
    descriptionFr: 'Le jeu de négociation le plus pur jamais conçu. Pas de dés. Pas de chance. Sept puissances européennes, un seul vainqueur. Six heures d\'alliance, de contre-alliance et de la grande trahison inévitable. Favori personnel de Chris pour le jeu stratégique entre amis.',
    quickStart: 'All players simultaneously write orders for all their units (Army or Fleet). Order types: Hold (stay), Move (to adjacent territory), Support (reinforce another\'s move or hold), Convoy (fleet transports an army across sea). All orders resolve simultaneously — equal strength = standoff; stronger move wins. After Spring and Fall: adjust unit count to match supply centres owned. 18 supply centres held = solo victory.',
    quickStartFr: 'Tous les joueurs écrivent simultanément leurs ordres. Types: Tenir, Avancer, Soutenir, Convoyer. Résolution simultanée — égale force = impasse; plus forte avance gagne. 18 centres de ravitaillement = victoire solo.',
    setting: 'Pre-WWI Europe — 1901',
    pdfFile: 'DiplomacyRGS_Rulebook_v6_LR.pdf',
    gradient: 'linear-gradient(135deg, #0A0E18 0%, #1A1E2E 55%, #0A1210 100%)',
    artisan: false, travel: false,
    tags: ['negotiation','betrayal','political','no-luck','chris-favourite','marathon']
  },

  /* ─────────────────────────────────────────────────────
     COOPERATIVE
  ───────────────────────────────────────────────────── */
  {
    id: 'pandemic', name: 'Pandemic', subtitle: null,
    category: 'cooperative',
    publisher: 'Z-Man Games', designer: 'Matt Leacock', year: 2008,
    players: { min:2, max:4, ideal:4, display:'2–4' },
    duration: { min:45, max:60, display:'45–60 min' },
    bggWeight: 2.4, bggId: 30549,
    description: 'The gold standard of cooperative games. Four simultaneous disease outbreaks; specialists racing to find cures before the world collapses. Creates genuine crisis and spectacular moments of coordinated recovery. A perfect change of pace from adversarial play — excellent for a couple or a quieter evening.',
    descriptionFr: 'L\'étalon-or des jeux coopératifs. Quatre épidémies simultanées; des spécialistes qui courent pour trouver des remèdes. Crée de vraies crises et des moments spectaculaires de récupération coordonnée.',
    quickStart: 'Each player has a unique role (Medic, Scientist, Researcher, etc.). On your turn: take 4 actions (Move, Build Research Station, Treat Disease, Share Knowledge, Discover Cure). Draw 2 Player cards (Epidemic card = intensify the infection deck). Draw Infection cards (place disease cubes; 3 cubes on one city = outbreak). Win: cure all 4 diseases before running out of Player cards, cubes, or reaching 8 outbreaks.',
    quickStartFr: 'Rôle unique chacun. 4 actions par tour (Déplacer, Construire Station, Traiter, Partager, Trouver Remède). Piochez 2 cartes Joueur (Épidémie = intensifier). Piochez cartes Infection. Victoire: guérissez les 4 maladies avant de manquer de cartes, de cubes ou d\'atteindre 8 épidémies.',
    setting: 'Contemporary global — disease outbreak',
    pdfFile: 'PANDEMIC_zm7101_pandemic_rules.pdf',
    gradient: 'linear-gradient(135deg, #0A0E1A 0%, #1A1E2E 55%, #102A10 100%)',
    artisan: false, travel: false,
    tags: ['cooperative','crisis-management','family-friendly']
  },

  {
    id: 'arkham-horror', name: 'Arkham Horror', subtitle: '3rd Edition',
    category: 'cooperative',
    publisher: 'Fantasy Flight Games', designer: 'Nikki Valens et al.', year: 2018,
    players: { min:1, max:6, ideal:4, display:'1–6' },
    duration: { min:120, max:180, display:'2–3 hours' },
    bggWeight: 3.6, bggId: 257499,
    description: 'Lovecraftian horror cooperative adventure. Investigators explore a city being consumed by an Ancient One\'s awakening. Narrative scenario play with skill tests, equipment cards, and the constant threat of insanity. Atmospheric, escalating, and deeply thematic.',
    descriptionFr: 'Aventure coopérative d\'horreur lovecraftienne. Des enquêteurs explorent une ville dévorée par l\'éveil d\'un Ancien. Jeu de scénarios narratifs avec tests de compétences et la menace constante de la folie.',
    quickStart: 'Choose scenario and Ancient One. Investigators take turns: perform 2 actions (Move, Rest, Prepare for Travel, Trade, Influence, Focus, Research, Scenario-specific). Then: Encounter (event at location). Then: Mythos phase (advance doom track, spawn monsters, trigger events). Win scenario objectives before doom track fills or Ancient One awakens.',
    quickStartFr: 'Choisissez un scénario et un Ancien. Chaque enquêteur: 2 actions, puis Rencontre, puis phase Mythe (avance le compteur de Destin, invoque des monstres). Remplissez les objectifs avant que le compteur se remplisse.',
    setting: 'Arkham, Massachusetts — 1920s Lovecraftian horror',
    pdfFile: 'ARKHAM HORROR.pdf',
    gradient: 'linear-gradient(135deg, #0A080E 0%, #1A1020 55%, #0A0808 100%)',
    artisan: false, travel: false,
    tags: ['cooperative','narrative','horror','lovecraftian','campaign']
  },

  {
    id: 'sherlock-holmes', name: 'Sherlock Holmes', subtitle: 'Consulting Detective',
    category: 'cooperative',
    publisher: 'Space Cowboys', designer: 'Gary Grady, Suzanne Goldberg, Raymond Edwards', year: 1981,
    players: { min:1, max:8, ideal:4, display:'1–8' },
    duration: { min:60, max:120, display:'60–120 min per case' },
    bggWeight: 3.0, bggId: 2511,
    description: 'The original deductive narrative game — and still the gold standard. Investigate Victorian London crimes using an illustrated directory, city map, and authentic newspaper facsimiles. No dice — pure logic and lateral thinking. You\'re scored against Holmes himself: use fewer leads than he did.',
    descriptionFr: 'Le jeu de déduction narrative original — et toujours la référence absolue. Enquêtez sur des crimes dans le Londres victorien grâce à un annuaire illustré, une carte et des journaux authentiques. Sans dés — pure logique et pensée latérale.',
    quickStart: 'Read the case introduction aloud. Discuss and decide which locations or people to investigate. Look up each lead number in the appropriate section. Consult the London Directory (cross-referenced by address) and the newspaper. When the group is confident: answer the case questions. Score = Holmes\'s lead count minus your lead count. Higher = better.',
    quickStartFr: 'Lisez l\'introduction du cas. Décidez quels indices suivre. Cherchez le numéro dans la section appropriée. Consultez l\'annuaire et le journal. Répondez aux questions du cas. Score = nombre de pistes de Holmes moins vos pistes.',
    setting: 'Victorian London — 1890s Baker Street',
    pdfFile: 'Sherlock Holmes/0 Sherlock Holmes.pdf',
    gradient: 'linear-gradient(135deg, #080808 0%, #181210 55%, #1A1A08 100%)',
    artisan: false, travel: false,
    tags: ['deduction','narrative','cooperative','victorian','reading']
  }

];

/* Helper: get games by category */
function getByCategory(cat) {
  return GAMES.filter(g => g.category === cat);
}

/* Helper: search games */
function searchGames(query) {
  const q = query.toLowerCase();
  return GAMES.filter(g =>
    g.name.toLowerCase().includes(q) ||
    (g.subtitle || '').toLowerCase().includes(q) ||
    g.publisher.toLowerCase().includes(q) ||
    (g.description || '').toLowerCase().includes(q) ||
    (g.tags || []).some(t => t.includes(q))
  );
}

/* Category display order */
const CATEGORY_ORDER = [
  'quick-social','abstract','family-strategy',
  'social-deduction','euro-strategy','historical-strategy','cooperative'
];
