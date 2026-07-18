/* ═══════════════════════════════════════════════════════════════════
   CABINET LUDO — Game Library Database
   All games currently in the collection, with quick-start rules
   and full metadata for display and filtering.
   ═══════════════════════════════════════════════════════════════════ */

/* ── Local cover paths (baked from BGG og:image into /covers/) ────────
   Why local: zero external dependency. BGG hot-link protection,
   weserv proxy outages, cf.geekdo-images.com CDN changes — none
   of it can break Cabinet Ludo. Files committed to the repo at
   /covers/<slug>.jpg, ~50–80KB each, 700–800px JPEG q≈0.78.
   Keyed by BGG id; ludo.js falls back to gradient if a game's id is
   missing here. */
const BGG_COVERS = {
  13:     'covers/catan.jpg',
  325:    'covers/catan-seafarers.jpg',
  926:    'covers/catan-ck.jpg',
  171:    'covers/chess.jpg',
  181:    'covers/risk.jpg',
  220:    'covers/high-society.jpg',
  483:    'covers/diplomacy.jpg',
  1115:   'covers/poker.jpg',
  2397:   'covers/backgammon.jpg',
  2511:   'covers/sherlock-holmes.jpg',
  9209:   'covers/ticket-to-ride.jpg',
  11330:  'covers/jass.jpg',
  30549:  'covers/pandemic.jpg',
  67877:  'covers/anomia.jpg',
  92415:  'covers/skull.jpg',
  103343: 'covers/game-of-thrones.jpg',
  188188: 'covers/complots.jpg',
  128882: 'covers/avalon.jpg',
  129622: 'covers/love-letter-bridgerton.jpg',
  131357: 'covers/coup.jpg',
  173346: 'covers/7-wonders-duel.jpg',
  188834: 'covers/secret-hitler.jpg',
  199792: 'covers/everdell.jpg',
  227072: 'covers/chameleon.jpg',
  256960: 'covers/pax-pamir.jpg',
  257499: 'covers/arkham-horror.jpg',
  332686: 'covers/john-company.jpg'
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
    winningStrategy: 'Bidding is a weapon, not just a claim — sometimes bid low deliberately to force a rival into an over-bid they cannot make. Track who has already lost discs; a player down to one disc is desperate and readable. Your safest first flip is always your own stack, so watch how confidently opponents leave theirs.',
    winningStrategyFr: 'L\'enchere est une arme, pas seulement une declaration — enchérissez parfois bas pour forcer un rival a surenchérir au-dela de ses moyens. Surveillez qui a déja perdu des disques; un joueur réduit a un seul disque est désespéré et prévisible. Le premier retournement le plus sur reste votre propre pile.',
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
    winningStrategy: 'Claim the Duke early and often — free Tax income compounds fast and few dare challenge it. Keep a Contessa claim in reserve as an assassination bluff. A Coup (7 coins) can never be blocked or challenged, so bank toward it against a strong bluffer rather than risk a call.',
    winningStrategyFr: 'Revendiquez le Duc tot et souvent — l\'Impot gratuit s\'accumule vite et peu osent le contester. Gardez la Comtesse en réserve comme bluff anti-assassinat. Le Coup (7 pieces) ne peut etre ni bloqué ni contesté — accumulez vers lui face a un bon bluffeur plutot que de risquer une contestation.',
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
    winningStrategy: 'Win by being readable in ways that mislead — establish a pattern, then break it the turn a rival commits to predicting you. Weight your own predictions toward players who act emotionally rather than logically. Late game, the safest points come from opponents forced into predictable defensive plays.',
    winningStrategyFr: 'Gagnez en paraissant lisible pour mieux tromper — établissez un schéma, puis brisez-le au moment ou un rival parie sur vous. Orientez vos prédictions vers les joueurs émotifs plutot que logiques. En fin de partie, les points surs viennent des adversaires contraints a des jeux défensifs prévisibles.',
    cover: 'covers/oracle.jpg',
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
    winningStrategy: 'Whoever spends the most is eliminated, so the real game is spending second-most while grabbing value. Hoard your high money cards for the luxury cards and the crucial doubling card; dump low cards to drive up rivals\' spending on things you don\'t want. Always know roughly how much cash each rival has left.',
    winningStrategyFr: 'Le plus dépensier est éliminé: le vrai jeu est de dépenser en deuxieme position tout en raflant de la valeur. Gardez vos grosses coupures pour les objets de luxe et la carte qui double; lachez vos petites cartes pour faire monter les meses adverses sur ce que vous ne voulez pas. Sachez toujours combien il reste a chaque rival.',
    cover: 'covers/high-society.jpg',
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
    winningStrategy: 'This is reflex over knowledge — the winner is whoever stays calm when their symbol matches. Keep your eyes on the top of every pile, not just your own, so a face-off never surprises you. Pre-load easy category answers in your head during the lulls.',
    winningStrategyFr: 'Ici le réflexe prime sur le savoir — gagne celui qui reste calme quand son symbole correspond. Gardez les yeux sur le sommet de toutes les piles, pas seulement la votre, pour n\'etre jamais surpris par un duel. Préparez des réponses faciles en tete pendant les temps morts.',
    cover: 'covers/anomia.jpg',
    category: 'quick-social',
    publisher: 'Anomia Press', designer: 'Andrew Innes', year: 2009,
    players: { min:3, max:6, ideal:5, display:'3–6' },
    duration: { min:15, max:30, display:'15–30 min' },
    bggWeight: 1.0, bggId: 67877,
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
    winningStrategy: 'As in Coup, controlling the coin-generating role is the engine — claim it aggressively while cash is scarce. Force showdowns when you genuinely hold the card so rivals learn to fear your challenges. Save your unblockable paid action to remove the table\'s most dangerous bluffer.',
    winningStrategyFr: 'Comme dans Coup, controler le role qui génere des pieces est le moteur — revendiquez-le sans hésiter tant que l\'argent manque. Provoquez les confrontations quand vous détenez vraiment la carte, pour qu\'on craigne vos contestations. Gardez votre action payante imblocable pour éliminer le bluffeur le plus dangereux.',
    cover: 'covers/complots.jpg',
    category: 'quick-social',
    publisher: 'Games Factory', designer: 'Claude Lucchini', year: 2012,
    players: { min:2, max:8, ideal:5, display:'2–8' },
    duration: { min:15, max:20, display:'15–20 min' },
    bggWeight: 1.5, bggId: 188188,
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
    winningStrategy: 'Read the room\'s average and aim to land just inside it — the goal is to match the crowd, not to be clever. Watch the boldest players; they over-commit and expose themselves. Consistency across rounds beats the occasional brilliant guess.',
    winningStrategyFr: 'Jaugez la moyenne du groupe et placez-vous juste a l\'intérieur — le but est de se fondre, pas d\'etre malin. Surveillez les joueurs les plus audacieux; ils se surexposent. La régularité sur la durée l\'emporte sur le coup d\'éclat isolé.',
    cover: 'covers/blend-in.jpg',
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
    id: 'tapple', name: 'Tapple', subtitle: null,
    winningStrategy: 'Under time pressure, answer with the first valid word and slap the timer — speed beats the perfect answer. Scan the letter wheel in a fixed order so you\'re never hunting. Force the clock onto slower players by keeping your own turns instant.',
    winningStrategyFr: 'Sous pression, donnez le premier mot valide et frappez le minuteur — la vitesse prime sur la perfection. Balayez la roue des lettres dans un ordre fixe pour ne jamais chercher. Imposez le chrono aux joueurs plus lents en gardant vos tours instantanés.',
    cover: 'covers/tapple.jpg',
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
    winningStrategy: 'Count cards — with only sixteen in the deck, tracking what\'s played tells you what opponents likely hold. Play the Guard once the discards have narrowed the odds in your favour. Late in a round, quietly holding a high card often beats forcing risky eliminations.',
    winningStrategyFr: 'Comptez les cartes — avec seulement seize cartes, suivre ce qui est joué révele ce que tiennent les adversaires. Jouez le Garde quand la défausse a resserré les probabilités en votre faveur. En fin de manche, garder discretement une carte haute vaut souvent mieux que forcer des éliminations risquées.',
    cover: 'covers/love-letter-bridgerton.jpg',
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
    winningStrategy: 'Prioritise making your points — especially the 5-point and the bar-point — to build a prime your opponent cannot escape. Play a running game when ahead in the race and a holding game when behind. Master the doubling cube: double when you hold a clear edge, and drop bad doubles rather than bleeding equity.',
    winningStrategyFr: 'Faites vos cases en priorité — surtout la case 5 et la case de la barre — pour former un blocus infranchissable. Jouez la course quand vous menez, un jeu d\'arriere quand vous etes distancé. Maitrisez le videau: doublez avec un avantage net et refusez les mauvais doublements plutot que de perdre de la valeur.',
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
    winningStrategy: 'Control the centre, develop every piece before attacking, and castle early to shelter your king. Don\'t move the same piece twice in the opening or bring the queen out too soon. In the endgame, activate your king and push passed pawns — that is where most decisive games are truly won.',
    winningStrategyFr: 'Controlez le centre, développez toutes vos pieces avant d\'attaquer et roquez tot pour abriter votre roi. Ne déplacez pas deux fois la meme piece dans l\'ouverture et ne sortez pas la dame trop tot. En finale, activez votre roi et poussez les pions passés — c\'est la que se gagnent la plupart des parties.',
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
    winningStrategy: 'Track trumps relentlessly — knowing when the Buur and Nell have fallen decides the round. In team variants, read and signal through your partner\'s discards; a well-timed sluff beats a proud high card. Count the point-cards (Ace, Ten, and trump honours) that make up most of the score.',
    winningStrategyFr: 'Suivez les atouts sans relache — savoir quand le Buur et le Nell sont tombés décide la manche. En équipe, lisez et signalez par les défausses de votre partenaire; une défausse bien placée vaut mieux qu\'une fiere carte haute. Comptez les cartes a points (As, Dix et honneurs d\'atout) qui font l\'essentiel du score.',
    cover: 'covers/jass.jpg',
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
    winningStrategy: 'Play tight-aggressive: enter few hands, but bet strongly when you do. Position is power — play more hands in late position where you act with information. Fold discipline and reading betting patterns beat chasing draws; the money comes from opponents\' mistakes, not your miracles.',
    winningStrategyFr: 'Jouez serré-agressif: peu de mains, mais misez fort quand vous entrez. La position est un pouvoir — jouez davantage en fin de parole, ou vous agissez avec de l\'information. La discipline au coucher et la lecture des mises battent la poursuite de tirages; l\'argent vient des erreurs adverses, pas de vos miracles.',
    cover: 'covers/poker.jpg',
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
    strategyPage: 'catan-strategy.html',
    winningStrategy: 'Settle for resource diversity and high-probability numbers (6, 8, 5, 9) — brick and wood early for roads and settlements, ore and grain later for cities and development cards. Never neglect a resource entirely; the ports and the robber will punish it. Trade only when the deal helps you more than your opponent.',
    winningStrategyFr: 'Installez-vous pour la diversité des ressources et les numéros probables (6, 8, 5, 9) — brique et bois tot, minerai et blé ensuite pour villes et cartes développement. Ne négligez jamais une ressource; les ports et le voleur la puniront. N\'échangez que lorsque l\'accord vous aide plus que l\'adversaire.',
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
    winningStrategy: 'Invest early in knights — you need them active to defend Catan from the barbarians, and a sacked city is devastating. Commit to one commodity track (Politics for cheap strong knights, or Science for the aqueduct and progress engine). Race a Metropolis to lock in 2 VP opponents can never take.',
    winningStrategyFr: 'Investissez tot dans les chevaliers — actifs, ils défendent Catan des barbares, et voir la cité pillée est dévastateur. Engagez-vous sur une filiere (Politique pour des chevaliers puissants et bon marché, ou Science pour l\'aqueduc). Visez une Métropole pour verrouiller 2 PV imprenables.',
    cover: 'covers/catan-ck.jpg',
    category: 'euro-strategy',
    publisher: 'CATAN Studio', designer: 'Klaus Teuber', year: 1998,
    players: { min:3, max:4, ideal:4, display:'3–4 (5–6 with expansion)' },
    duration: { min:90, max:150, display:'90–150 min' },
    bggWeight: 3.0, bggId: 926,
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
    winningStrategy: 'The bonus VPs for settling new islands often decide the game — plan a shipping route to an empty island early. Balance land expansion against the ship investment; over-committing to the sea can starve your resource base. Guard the gold-field hexes, they smooth out any resource gaps.',
    winningStrategyFr: 'Les PV bonus pour coloniser de nouvelles iles décident souvent la partie — planifiez tot une route maritime vers une ile vide. Équilibrez l\'expansion terrestre et l\'investissement en navires; trop miser sur la mer affame votre base de ressources. Protégez les hexagones d\'or, ils comblent vos manques.',
    cover: 'covers/catan-seafarers.jpg',
    category: 'euro-strategy',
    publisher: 'CATAN Studio', designer: 'Klaus Teuber', year: 1997,
    players: { min:3, max:4, ideal:4, display:'3–4 (5–6 with expansion)' },
    duration: { min:90, max: 120, display: '90–120 min' },
    bggWeight: 2.5, bggId: 325,
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
    strategyPage: 'risk-strategy.html',
    winningStrategy: 'Hold a small, defensible continent early (Australia and South America are the classics) for steady bonus armies behind a short border. Don\'t over-attack in one turn — taking territory but ending weak invites elimination. Cash card sets at the right moment, and use diplomacy: let rivals bleed each other before you strike.',
    winningStrategyFr: 'Tenez tot un continent petit et défendable (Australie, Amérique du Sud) pour des bonus réguliers derriere une frontiere courte. N\'attaquez pas trop en un seul tour — conquérir puis finir affaibli invite a l\'élimination. Échangez vos cartes au bon moment et usez de diplomatie: laissez les rivaux s\'épuiser avant de frapper.',
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
    id: 'monopoly', name: 'Monopoly', subtitle: 'Classic Edition',
    category: 'family-strategy',
    publisher: 'Hasbro / Parker Brothers', designer: 'Charles Darrow \u00b7 Lizzie Magie', year: 1935,
    players: { min:2, max:8, ideal:4, display:'2\u20138' },
    duration: { min:60, max:180, display:'60\u2013180 min' },
    bggWeight: 1.6, bggId: 1406,
    description: 'The world\'s most famous board game — and far more strategic than its reputation suggests. Buy, rent, and bankrupt your way to a real-estate monopoly. Beneath the family-table chaos lies a game of probability, cash-flow discipline, and hard-nosed trading. Its true inventor was Lizzie Magie, whose 1904 Landlord\'s Game was designed to teach the dangers of monopoly.',
    descriptionFr: 'Le jeu de plateau le plus célebre du monde — et bien plus stratégique que sa réputation ne le laisse croire. Achetez, louez et ruinez vos adversaires jusqu\'au monopole immobilier. Sous le chaos de la table familiale se cache un jeu de probabilité, de gestion de trésorerie et de négociation impitoyable. Sa véritable inventrice fut Lizzie Magie, dont le Landlord\'s Game de 1904 devait dénoncer les dangers du monopole.',
    quickStart: 'Each player starts with $1,500. Roll and move; buy the unowned property you land on or it goes to auction. Collect $200 for passing GO. Own a full colour group to build houses (evenly) then hotels and raise rent. Pay rents, taxes, and Chance / Community Chest penalties; mortgage to raise cash. The last player not bankrupt wins. Full official rules — Classic, Speed Die and Short Game — in MONOPOLY.pdf.',
    quickStartFr: 'Chaque joueur commence avec 1 500 $. Lancez et déplacez-vous; achetez la propriété libre ou vous tombez, sinon elle part aux encheres. Touchez 200 $ en passant par la case Départ. Un groupe de couleur complet permet de batir des maisons (régulierement) puis des hotels. Payez loyers, taxes et pénalités; hypothéquez pour du liquide. Le dernier joueur non ruiné gagne. Regles officielles completes dans MONOPOLY.pdf.',
    winningStrategy: 'Buy aggressively early — idle cash wins nothing. The game is decided by trading for complete colour groups, so complete yours while never handing a rival theirs. Target the orange and red sets: they sit in the dice sweet-spot just past Jail and are cheap to develop. Build to three houses fast (the biggest rent jump), and starve opponents by holding houses rather than upgrading to hotels. Keep a cash buffer, and love Jail late in the game.',
    winningStrategyFr: 'Achetez vite et tot — l\'argent qui dort ne gagne rien. La partie se décide par les échanges pour compléter des groupes de couleur: complétez le votre sans jamais offrir le sien a un rival. Visez l\'orange et le rouge: juste apres la Prison, dans la zone idéale des dés, et peu couteux a développer. Montez vite a trois maisons (le plus gros bond de loyer) et affamez les adversaires en gardant vos maisons plutot qu\'en passant aux hotels. Gardez une réserve de trésorerie et appréciez la Prison en fin de partie.',
    strategyPage: 'monopoly-strategy.html',
    setting: 'American real estate \u00b7 Atlantic City, 1930s',
    pdfFile: 'MONOPOLY.pdf',
    gradient: 'linear-gradient(135deg, #0A140A 0%, #123012 55%, #1E4A1E 100%)',
    artisan: false, travel: false,
    tags: ['classic','family','trading','real-estate','negotiation']
  },


  {
    id: 'ticket-to-ride', name: 'Ticket to Ride', subtitle: 'With handcrafted wooden wagons',
    winningStrategy: 'Complete your destination tickets first — unfinished tickets are negative points that sink games. Claim contested bottleneck routes early, then fill longer safe routes later. Hoard cards quietly for a big multi-train route rather than tipping your plans, and draw extra tickets only when your network already covers them.',
    winningStrategyFr: 'Terminez d\'abord vos billets de destination — les billets non remplis sont des points négatifs qui coulent une partie. Prenez tot les routes-goulots disputées, gardez les longues routes sures pour plus tard. Accumulez discretement pour une grande route et ne piochez de nouveaux billets que si votre réseau les couvre déja.',
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
    winningStrategy: 'Threaten all three victory paths so your opponent can\'t defend them all — but truly commit to one. Deny key cards by taking them even when you can\'t use them, especially science symbols and the military cards that swing the conflict pawn. Plan which cards you\'ll free up for your opponent before you take yours.',
    winningStrategyFr: 'Menacez les trois voies de victoire pour disperser la défense adverse — mais engagez-vous vraiment sur une. Privez l\'adversaire des cartes clés en les prenant meme inutiles, surtout les symboles science et les cartes militaires qui déplacent le pion de conflit. Anticipez quelles cartes vous libérez pour l\'adversaire avant de prendre les votres.',
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
    winningStrategy: 'As Good, share information carefully — loud logic only helps evil find Merlin. As Merlin, steer the group without revealing knowledge you shouldn\'t have. Evil\'s best weapon is a quiet failed mission blamed on someone else; Good\'s is tracking who sat on failed teams. The Assassin should watch for whoever guided the group a little too accurately.',
    winningStrategyFr: 'Cote Bien, partagez l\'information avec prudence — trop de logique aide le mal a trouver Merlin. En Merlin, orientez le groupe sans trahir un savoir que vous ne devriez pas avoir. L\'arme du mal est un échec discret imputé a autrui; celle du Bien, suivre qui siégeait dans les missions ratées. L\'Assassin guette celui qui a guidé le groupe un peu trop juste.',
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
    winningStrategy: 'As an honest player, give a word specific enough to prove you know the topic but not so obvious it hands it to the Chameleon. As the Chameleon, echo the tone and category of earlier answers and speak mid-order so you have cues. When accusing, distrust the vaguest, most generic clue.',
    winningStrategyFr: 'En joueur honnete, donnez un mot assez précis pour prouver votre savoir mais pas au point de le livrer au Caméléon. En Caméléon, imitez le ton et la catégorie des réponses précédentes et parlez en milieu d\'ordre pour avoir des indices. Pour accuser, méfiez-vous de l\'indice le plus vague et le plus générique.',
    category: 'social-deduction',
    publisher: 'Big Potato Games', designer: 'Rikki Tahta', year: 2017,
    players: { min:3, max:8, ideal:6, display:'3–8' },
    duration: { min:15, max:30, display:'15–30 min' },
    bggWeight: 1.3, bggId: 227072,
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
    winningStrategy: 'Liberals win on information — track who enacted which policies and force players to commit publicly. As a Fascist, build trust by enacting Liberal policies early when the tiles allow. Hitler should play quiet and moderate; the fastest Liberal loss is electing a trustworthy Chancellor who turns out to be Hitler.',
    winningStrategyFr: 'Les Libéraux gagnent par l\'information — suivez qui a fait passer quelles lois et forcez les engagements publics. En Fasciste, gagnez la confiance en votant des lois libérales tot quand les tuiles le permettent. Hitler doit rester discret et modéré; la défaite libérale la plus rapide, c\'est élire un Chancelier de confiance qui se révele etre Hitler.',
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
    winningStrategy: 'Build a self-triggering engine — chain Constructions that let you play their matching Critters for free. Favour cards that generate resources or points on every visit over one-off bonuses. Plan the final season carefully: unspent workers and an incomplete city (short of fifteen cards) are wasted potential.',
    winningStrategyFr: 'Construisez un moteur auto-déclenché — enchainez les Constructions qui offrent gratuitement leurs Créatures. Privilégiez les cartes qui produisent a chaque passage plutot que les bonus uniques. Anticipez la derniere saison: ouvriers inutilisés et ville incomplete (moins de quinze cartes) sont du potentiel gaché.',
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
    winningStrategy: 'Diplomacy wins this, not armies — secure non-aggression pacts, then break them at the decisive moment. Use support orders and hidden-order bluffs to win battles you\'d lose head-on. Control ports and supply to raise your army cap, and never let one player reach seven castles unopposed.',
    winningStrategyFr: 'Ici la diplomatie gagne, pas les armées — nouez des pactes de non-agression, puis brisez-les au moment décisif. Usez des ordres de soutien et des bluffs d\'ordres cachés pour gagner des batailles perdues de front. Controlez ports et ravitaillement pour agrandir votre armée, et ne laissez jamais un joueur atteindre sept chateaux sans réaction.',
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
    winningStrategy: 'Loyalty is a tool, not an identity — stay flexible and be loyal to whichever coalition is winning when a Dominance Check hits. Build your court for the actions and abilities you need, keeping spies and gifts ready to disrupt rivals. Read the table constantly; jumping coalitions one turn before a check can flip the entire score.',
    winningStrategyFr: 'La loyauté est un outil, pas une identité — restez flexible et loyal a la coalition gagnante au moment d\'une Vérification de Domination. Batissez votre cour pour les actions utiles, en gardant espions et cadeaux prets a géner les rivaux. Lisez la table sans cesse; changer de coalition juste avant une vérification peut renverser tout le score.',
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
    winningStrategy: 'Wealth flows through offices — angle your family into the posts that pay, then negotiate hard over who takes which Company action. Manage risk ruthlessly: over-ambitious wars and unbacked ventures can collapse the whole enterprise. Convert Company gains into lasting personal prestige before the inevitable decline — the richest family line wins, not the strongest Company.',
    winningStrategyFr: 'La richesse passe par les charges — placez votre famille dans les postes lucratifs, puis négociez aprement les actions de la Compagnie. Gérez le risque sans pitié: guerres démesurées et aventures non couvertes peuvent tout faire s\'effondrer. Convertissez les gains en prestige personnel durable avant le déclin inévitable — c\'est la lignée la plus riche qui gagne, pas la Compagnie la plus forte.',
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
    strategyPage: 'diplomacy-strategy.html',
    winningStrategy: 'Everything is negotiation — talk to everyone, including those you plan to betray, and never write an order you haven\'t gamed against every neighbour. Early on, secure your home region and one reliable ally; mid game, position for the stab before you need it. Support orders win battles, so manufacture situations where an ally must support you.',
    winningStrategyFr: 'Tout est négociation — parlez a tous, y compris ceux que vous comptez trahir, et n\'écrivez jamais un ordre sans l\'avoir anticipé contre chaque voisin. Tot, sécurisez votre région et un allié fiable; a mi-partie, préparez la trahison avant d\'en avoir besoin. Les soutiens gagnent les batailles — provoquez les situations ou un allié doit vous soutenir.',
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
    winningStrategy: 'Treat this as a team puzzle — plan turns aloud together and use all four actions every turn. Prioritise curing over treating; a cure stops the bleeding permanently. Cap at-risk cities early to prevent outbreak chains, use the Researcher and Dispatcher to move cards and people efficiently, and don\'t burn the draw deck — pace is the real enemy.',
    winningStrategyFr: 'Traitez-le comme un casse-tete d\'équipe — planifiez les tours a voix haute et utilisez les quatre actions a chaque tour. Priorisez la guérison sur le traitement; un remede arrete l\'hémorragie définitivement. Plafonnez tot les villes a risque pour éviter les chaines d\'épidémies, déplacez cartes et personnes efficacement, et ne gaspillez pas la pioche — le tempo est le vrai ennemi.',
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
    winningStrategy: 'Split objectives — send strong investigators after clues and combat while a support character manages sanity and healing. Don\'t fight every monster; evade what you can and spend actions advancing the scenario before the doom track fills. Gear up early with equipment and allies, because the finale escalates hard.',
    winningStrategyFr: 'Répartissez les objectifs — envoyez les enqueteurs solides aux indices et au combat pendant qu\'un personnage de soutien gere la santé mentale et les soins. Ne combattez pas tout; esquivez ce que vous pouvez et faites avancer le scénario avant que le Destin se remplisse. Équipez-vous tot, car le final s\'intensifie brutalement.',
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
    winningStrategy: 'Resist chasing every lead — you\'re scored against Holmes on efficiency, so follow only clues that logically advance the case. Take notes and build a timeline; the answer is usually reachable in a handful of the right visits. Read the newspaper and directory every case — they hide crucial free information.',
    winningStrategyFr: 'Résistez a l\'envie de suivre chaque piste — vous etes noté sur l\'efficacité face a Holmes, alors ne suivez que les indices logiquement utiles. Prenez des notes et batissez une chronologie; la solution tient souvent en quelques bonnes visites. Lisez le journal et l\'annuaire a chaque affaire — ils cachent des informations gratuites cruciales.',
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
