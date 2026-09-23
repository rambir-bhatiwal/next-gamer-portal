/**
 * Next Games/Game — Register Category 7 (Card) in Site Config
 * Updates:
 * - config/site-config.json
 * - config/site-config.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const jsonPath = path.join(rootDir, 'config', 'site-config.json');
const jsPath = path.join(rootDir, 'config', 'site-config.js');

const config = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Update 'all' category badge to 71 Games
const allCat = config.categories.find(c => c.id === 'all');
if (allCat) allCat.badge = '71 Games';

// Add or update 'card' category
let cardCat = config.categories.find(c => c.id === 'card');
if (!cardCat) {
  cardCat = {
    id: 'card',
    label: 'Cyber Card & Casino',
    badge: '10 Cyber Decks',
    icon: '🃏',
    description: 'Holographic solitaire data stacks, 2099 high-roller blackjack lounges, quantum roguelike deckbuilders, neural pair memory grids, and elemental 3x3 duels.'
  };
  config.categories.push(cardCat);
} else {
  cardCat.label = 'Cyber Card & Casino';
  cardCat.badge = '10 Cyber Decks';
  cardCat.icon = '🃏';
  cardCat.description = 'Holographic solitaire data stacks, 2099 high-roller blackjack lounges, quantum roguelike deckbuilders, neural pair memory grids, and elemental 3x3 duels.';
}

const newCardGames = [
  {
    id: 'cyber-solitaire',
    title: 'Cyber Solitaire: Data Deck Stacker',
    slug: 'cyber-solitaire',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/cyber-solitaire.svg',
    path: 'public/games/cyber-solitaire/index.html',
    description: 'Klondike Solitaire played with a holographic 52-card data deck featuring glowing neon suits across 45 staged solitaire challenges.',
    longDescription: 'Cyber Solitaire combines timeless Klondike card sequencing with a futuristic digital interface. Move cards between 7 tableau cascades, draw from the data stock, and stack all 4 foundation pillars from Ace to King across 45 staged cyber table environments.',
    rating: 4.9,
    ratingCount: 1680,
    plays: '132.4K',
    badge: 'Featured Card',
    tags: ['Solitaire', 'Klondike', 'Data Deck', '45 Themes', 'Web Audio'],
    controls: 'Mouse Drag or Tap to Move Cards | Space to Draw from Stock',
    features: [
      '45 Unique Cyber Table Felt Themes',
      'Full 52-Card Holographic Data Deck',
      'Auto-Finish Foundation Progression',
      'Cascading Victory Fanfares'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'neon-blackjack-2099',
    title: 'Neon Blackjack 2099: High Roller Matrix',
    slug: 'neon-blackjack-2099',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/neon-blackjack-2099.svg',
    path: 'public/games/neon-blackjack-2099/index.html',
    description: 'Challenge a cybernetic dealer AI in high-stakes Blackjack, progressing through 45 escalating casino lounge tiers.',
    longDescription: 'Neon Blackjack 2099 delivers authentic Vegas casino action set in high-roller cyberpunk lounges. Manage your bankroll, place chip wagers, hit, stand, double down, and beat the dealer AI across 45 escalating VIP salon stages.',
    rating: 4.9,
    ratingCount: 1820,
    plays: '145.8K',
    badge: 'Popular',
    tags: ['Blackjack', '21', 'Casino', '45 Themes', 'Web Audio'],
    controls: 'Chip buttons to wager | Deal, Hit, Stand, Double Down action buttons',
    features: [
      '45 Futuristic Casino Salon Tiers',
      'Realistic Soft-17 Dealer AI Logic',
      'Bankroll Progression & Milestones',
      'Multi-denomination Holographic Chips'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'quantum-deckbuilder',
    title: 'Quantum Deckbuilder: Rogue Cyberpunk Cards',
    slug: 'quantum-deckbuilder',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/quantum-deckbuilder.svg',
    path: 'public/games/quantum-deckbuilder/index.html',
    description: 'Draft attack, defense, and utility programs into your deck to defeat hostile rogue AI bosses across 45 procedural floor battles.',
    longDescription: 'Quantum Deckbuilder merges roguelike deck construction with turn-based tactical combat. Manage energy budgets, deploy laser attacks, activate nano shields, and exploit boss vulnerabilities across 45 procedural mainframe floor encounters.',
    rating: 4.8,
    ratingCount: 1590,
    plays: '121.3K',
    badge: 'Top Roguelike',
    tags: ['Deckbuilder', 'Roguelike', 'Card Combat', '45 Themes', 'Web Audio'],
    controls: 'Click cards to play program | Space or End Turn button to conclude round',
    features: [
      '45 Mainframe Floor Battles with Escalating HP',
      'Turn-based Energy & Shield Defense Mechanics',
      'Dynamic Enemy Daemon AI Intents',
      'Laser Zap & Explosion Procedural Sound FX'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'neural-memory-match',
    title: 'Neural Memory Match: Holographic Pairs',
    slug: 'neural-memory-match',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/neural-memory-match.svg',
    path: 'public/games/neural-memory-match/index.html',
    description: 'Flip face-down holographic cards on a grid to locate matching pairs of cybernetic technology glyphs across 45 memory stages.',
    longDescription: 'Neural Memory Match tests cognitive recall and pattern recognition on expanding holographic card grids. Match pairs of nanotech glyphs, maintain combo streaks, and beat strict move limits across 45 progressive brainteasers.',
    rating: 4.8,
    ratingCount: 1410,
    plays: '110.6K',
    badge: 'Brain Gym',
    tags: ['Memory', 'Concentration', 'Pairs', '45 Themes', 'Web Audio'],
    controls: 'Click cards to flip and match pairs',
    features: [
      '45 Expanding Grid Memory Stages (4x3 to 6x4)',
      '12 Unique Holographic Cyber Glyphs',
      'Combo Multiplier Streak Scoring',
      'Harmonic Match & Fanfare Sound Synthesis'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'tri-peaks-cyber-pyramid',
    title: 'Tri-Peaks Cyber Pyramid: Data Clear',
    slug: 'tri-peaks-cyber-pyramid',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/tri-peaks-cyber-pyramid.svg',
    path: 'public/games/tri-peaks-cyber-pyramid/index.html',
    description: 'Clear three overlapping pyramid peaks of cards by selecting cards that are one rank higher or lower than the active waste card across 45 levels.',
    longDescription: 'Tri-Peaks Cyber Pyramid challenges players to dismantle 3 towering card peaks through rapid numerical sequencing. Chain consecutive card clearances without drawing to trigger escalating combo streak multipliers across 45 cosmic backgrounds.',
    rating: 4.9,
    ratingCount: 1530,
    plays: '119.5K',
    badge: 'Popular',
    tags: ['Tri-Peaks', 'Pyramid', 'Solitaire', '45 Themes', 'Web Audio'],
    controls: 'Click accessible card (+-1 rank of waste) | Space or Draw button for new waste card',
    features: [
      '45 Unique Cosmic Pyramid Environments',
      'Sequential Rising Pentatonic Streak Audio',
      '28-Card Overlapping Tri-Peak Structures',
      'King-to-Ace Wrap Sequence Dynamics'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'freecell-neo',
    title: 'FreeCell Neo: Quantum Cascade',
    slug: 'freecell-neo',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/freecell-neo.svg',
    path: 'public/games/freecell-neo/index.html',
    description: 'Solve open-card solitaire puzzles using four temporary free reserve cells across 45 numbered challenge deals.',
    longDescription: 'FreeCell Neo provides the classic strategic open-board solitaire experience with 4 free reserve cells and 4 foundations. With all 52 cards revealed from the start, plan deep multi-card transfers to build out all suits across 45 numbered deals.',
    rating: 4.9,
    ratingCount: 1740,
    plays: '136.2K',
    badge: 'Featured Strategy',
    tags: ['FreeCell', 'Solitaire', 'Open Cards', '45 Themes', 'Web Audio'],
    controls: 'Mouse Drag or Click to Move Cards between Cascades, Free Cells, and Foundations',
    features: [
      '45 Numbered Solitaire Challenge Deals',
      '4 Open Free Cells & 4 Suit Foundations',
      'Automatic Foundation Placement Assistant',
      'Clean Cyber Matrix Table Aesthetics'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'spider-protocol',
    title: 'Spider Protocol: Eight-Legged Data Sorter',
    slug: 'spider-protocol',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/spider-protocol.svg',
    path: 'public/games/spider-protocol/index.html',
    description: 'Arrange descending sequences of cards from King to Ace in the tableau to complete full suits across 45 progressive difficulty stages.',
    longDescription: 'Spider Protocol puts your sorting acumen to the test across 10 tableau cascades. Assemble full sequences from King down to Ace to clear suits from the board, scaling from 1-suit beginners to 4-suit master protocols across 45 stages.',
    rating: 4.8,
    ratingCount: 1610,
    plays: '127.8K',
    badge: 'Hardcore',
    tags: ['Spider', 'Solitaire', '10 Columns', '45 Themes', 'Web Audio'],
    controls: 'Mouse Drag sequences to build descending columns | Space to deal new row',
    features: [
      '45 Difficulty Stages Scaling 1, 2, to 4 Suits',
      '10-Column Multi-Deck Tableau Architecture',
      'Automatic Complete Suit Extraction',
      'Energy Hum & Card Slide Sound FX'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'cyber-baccarat',
    title: 'Cyber Baccarat: Quantum High Stakes',
    slug: 'cyber-baccarat',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/cyber-baccarat.svg',
    path: 'public/games/cyber-baccarat/index.html',
    description: 'Wager on Player, Banker, or Tie across 45 VIP casino salon stages, with automated third-card drawing rules and shoe statistics.',
    longDescription: 'Cyber Baccarat offers the purest high-stakes casino excitement with authentic Punto Banco drawing regulations. Predict whether Player or Banker will achieve a score closest to 9, or wager on the lucrative 8:1 Tie across 45 VIP salon environments.',
    rating: 4.9,
    ratingCount: 1470,
    plays: '115.4K',
    badge: 'VIP Casino',
    tags: ['Baccarat', 'Punto Banco', 'Casino', '45 Themes', 'Web Audio'],
    controls: 'Select Player, Banker, or Tie | Space or Deal button to draw shoe',
    features: [
      '45 Exclusive VIP Salon Atmospheres',
      'Authentic Punto Banco 3rd Card Drawing Matrix',
      'Commission-Adjusted Payout Calculations',
      'Card Deal Friction & Win Fanfare Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'elemental-card-duel',
    title: 'Elemental Card Duel: Nano Elementalists',
    slug: 'elemental-card-duel',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/elemental-card-duel.svg',
    path: 'public/games/elemental-card-duel/index.html',
    description: 'Place cards on a 3x3 grid to capture adjacent enemy cards by comparing directional values across 45 tactical duel stages.',
    longDescription: 'Elemental Card Duel brings tactical grid card battles inspired by classic mini-games. Position 5 elemental cards strategically on a 3x3 matrix, overpower adjacent enemy edges, and convert the entire board to your color across 45 unique arenas.',
    rating: 4.9,
    ratingCount: 1890,
    plays: '152.0K',
    badge: 'Featured Duel',
    tags: ['Card Duel', 'Triple Triad', '3x3 Grid', '45 Themes', 'Web Audio'],
    controls: 'Click hand card to select | Click empty grid slot to place and challenge adjacent cards',
    features: [
      '45 Tactical Elemental Arena Environments',
      '4-Directional Number Power Comparison',
      'Dynamic Card Flip Color Conversion',
      'Reactive AI Opponent Strategies'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'cyber-poker',
    title: 'Cyber Poker: Holographic Video Draw',
    slug: 'cyber-poker',
    category: 'card',
    categoryLabel: 'Cyber Card & Casino',
    thumbnail: 'assets/thumbnails/cyber-poker.svg',
    path: 'public/games/cyber-poker/index.html',
    description: '5-card draw Video Poker with authentic paytables, card holding toggles, and double-up mini-games across 45 casino stages.',
    longDescription: 'Cyber Poker recreates the retro-futuristic charm of classic casino video poker cabinets. Receive 5 dealt cards, choose which cards to hold, draw new replacements, and cash out on winning hands from Jacks or Better to Royal Flush across 45 stages.',
    rating: 4.9,
    ratingCount: 1650,
    plays: '130.5K',
    badge: 'Arcade Classic',
    tags: ['Video Poker', '5 Card Draw', 'Casino', '45 Themes', 'Web Audio'],
    controls: 'Click cards to toggle HELD status | Space or Deal/Draw button to play hand',
    features: [
      '45 Video Terminal Cabinet Themes',
      'Authentic Jacks or Better Paytable Multipliers',
      'Credit Bankroll Management & Bet Adjustment',
      'Winning Sirens & Card Beep Sound FX'
    ],
    releaseDate: '2026-09-22'
  }
];

// Append or update new games in config.games
newCardGames.forEach(newGame => {
  const idx = config.games.findIndex(g => g.id === newGame.id);
  if (idx >= 0) {
    config.games[idx] = newGame;
  } else {
    config.games.push(newGame);
  }
});

// Write to site-config.json
fs.writeFileSync(jsonPath, JSON.stringify(config, null, 2), 'utf-8');
console.log('Updated config/site-config.json with Category 7 and 10 Card games.');

// Write to site-config.js
const jsContent = `// Auto-generated site configuration for direct browser consumption\nwindow.__SITE_CONFIG__ = ${JSON.stringify(config, null, 2)};\n`;
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log('Updated config/site-config.js with Category 7 and 10 Card games.');
console.log(`Total games registered: ${config.games.length}`);
