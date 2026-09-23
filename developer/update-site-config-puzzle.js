/**
 * Register all 10 Category 3 Puzzle Games in site-config.json and site-config.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const jsonPath = path.join(rootDir, 'config', 'site-config.json');
const jsPath = path.join(rootDir, 'config', 'site-config.js');

const config = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Update category count badge
const allCat = config.categories.find(c => c.id === 'all');
if (allCat) allCat.badge = '32 Games';

// Ensure puzzle category exists
let puzzleCat = config.categories.find(c => c.id === 'puzzle');
if (!puzzleCat) {
  puzzleCat = {
    id: "puzzle",
    label: "Cyber Puzzle & Logic",
    badge: "10 Brainteasers",
    icon: "🧩",
    description: "Decryption matrices, optical reflectors, Sudoku nodes, picross grids, and nanite sliding cores."
  };
  config.categories.push(puzzleCat);
} else {
  puzzleCat.badge = "10 Brainteasers";
  puzzleCat.label = "Cyber Puzzle & Logic";
}

// 10 Puzzle Game Definitions
const PUZZLE_GAMES = [
  {
    id: "quantum-matrix",
    title: "Quantum Matrix Hacker",
    slug: "quantum-matrix",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/quantum-matrix.svg",
    path: "public/games/quantum-matrix/index.html",
    description: "Swap adjacent cryptographic data nodes on a 6x6 security grid to form sequences of 3 or more matching glyphs across 45 covert security sectors.",
    longDescription: "Quantum Matrix Hacker tests your cybernetic pattern recognition across 45 unique firewall sectors. Swap adjacent quantum data nodes to trigger cascading decrypts, score time bonuses, and breach secure mainframes before time expires.",
    rating: 4.9,
    ratingCount: 1420,
    plays: "118.5K",
    badge: "Staff Pick",
    tags: ["Match-3", "Puzzle", "Cryptographic", "45 Themes", "Audio Synth"],
    controls: "Click adjacent tiles to swap and match 3 in a row",
    features: ["45 Thematic Security Sectors", "Match-3 Cascade Engine", "Web Audio Synthesis", "Stage Select Grid"],
    releaseDate: "2026-08-10"
  },
  {
    id: "chrono-switch",
    title: "Chrono Switch: Phase Shift",
    slug: "chrono-switch",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/chrono-switch.svg",
    path: "public/games/chrono-switch/index.html",
    description: "Phase-shift your quantum particle core between Cyan and Magenta energy polarities to match and absorb laser barrier gates across 45 rift horizons.",
    longDescription: "Chrono Switch: Phase Shift combines tactical color-polarity matching with reflex puzzle timing. Shift quantum states on the fly to absorb matched laser fields and sustain defensive shields across 45 distinct dimensional rifts.",
    rating: 4.8,
    ratingCount: 1290,
    plays: "94.2K",
    badge: "Hot",
    tags: ["Polarity Puzzle", "Reflex", "Dual Phase", "45 Themes", "Web Audio"],
    controls: "Spacebar / Screen Tap / Button to Toggle Polarity",
    features: ["45 Polarity Rift Horizons", "Dual-Phase Absorption Mechanics", "Procedural Synth Audio", "Shield Buffer System"],
    releaseDate: "2026-08-12"
  },
  {
    id: "laser-circuit-reflector",
    title: "Laser Circuit Reflector: Prism Grid",
    slug: "laser-circuit-reflector",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/laser-circuit-reflector.svg",
    path: "public/games/laser-circuit-reflector/index.html",
    description: "Direct photon laser beams across 45 optical breadboards by rotating 45-degree angled mirrors and activating quantum energy receptors.",
    longDescription: "Laser Circuit Reflector challenges your spatial optics reasoning. Align angled mirrors and guide glowing particle beams from high-energy laser emitters to illuminate targets across 45 cleanroom and optical laboratory biomes.",
    rating: 4.9,
    ratingCount: 980,
    plays: "82.4K",
    badge: "New Release",
    tags: ["Laser Puzzle", "Optics", "Reflector", "45 Themes", "Web Audio"],
    controls: "Click or Tap mirrors to rotate 90° | Direct lasers into all glowing targets",
    features: ["45 Optical Breadboard Puzzles", "Real-Time Particle Ray Tracing", "Native Web Audio API", "Level Selector Grid"],
    releaseDate: "2026-09-22"
  },
  {
    id: "cyber-sudoku",
    title: "Cyber Sudoku: Binary Node Matrix",
    slug: "cyber-sudoku",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/cyber-sudoku.svg",
    path: "public/games/cyber-sudoku/index.html",
    description: "Decrypt 9x9 binary data matrices across 45 difficulty sectors featuring notes mode, smart cell highlighting, and mistake counters.",
    longDescription: "Cyber Sudoku reimagines the timeless 9x9 number puzzle inside a neon terminal interface. Fill rows, columns, and 3x3 sectors with digits 1 through 9 with note-taking support, instant verification, and 45 graded difficulty stages.",
    rating: 4.9,
    ratingCount: 1150,
    plays: "105.7K",
    badge: "Featured",
    tags: ["Sudoku", "Logic Grid", "Brainteaser", "45 Themes", "Cyberpunk"],
    controls: "Select cell and tap 1-9 on keypad or keyboard | Toggle notes mode for draft marks",
    features: ["45 Difficulty Sectors (Easy, Medium, Master)", "Notes Mode & Mistake Counter", "Procedural Tonal Feedback", "Undo System"],
    releaseDate: "2026-09-22"
  },
  {
    id: "holographic-pipe-fusion",
    title: "Holographic Pipe Fusion: Flux Router",
    slug: "holographic-pipe-fusion",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/holographic-pipe-fusion.svg",
    path: "public/games/holographic-pipe-fusion/index.html",
    description: "Rotate scrambled plasma conduits to forge an unbroken circuit connecting generator sources to quantum reactor cores across 45 sectors.",
    longDescription: "Holographic Pipe Fusion delivers fluid connection routing mechanics. Rotate straight lines, elbows, and T-junction conduits to channel glowing plasma surges across 45 unique reactor biomes.",
    rating: 4.8,
    ratingCount: 870,
    plays: "76.1K",
    badge: "New Release",
    tags: ["Pipe Puzzle", "Flow", "Fluid Routing", "45 Themes", "Web Audio"],
    controls: "Click or Tap pipe tiles to rotate 90° | Connect green IN to cyan OUT",
    features: ["45 Conduit Routing Sectors", "BFS Real-Time Connection Validation", "Glowing Plasma Flow Animation", "Level Select Grid"],
    releaseDate: "2026-09-22"
  },
  {
    id: "neuro-link-sokobot",
    title: "Neuro-Link Soko-Bot: Memory Mover",
    slug: "neuro-link-sokobot",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/neuro-link-sokobot.svg",
    path: "public/games/neuro-link-sokobot/index.html",
    description: "Control a quantum maintenance automaton pushing memory blocks onto server docking pads across 45 handcrafted cleanroom vaults.",
    longDescription: "Neuro-Link Soko-Bot tests your forward planning and spatial navigation. Navigate constrained cybernetic cleanrooms, push quantum storage crates into designated docking sockets, and utilize full move-undo support.",
    rating: 4.9,
    ratingCount: 1310,
    plays: "89.3K",
    badge: "Editor's Choice",
    tags: ["Sokoban", "Box Pusher", "Spatial Logic", "45 Themes", "Web Audio"],
    controls: "Arrow Keys / WASD / On-Screen D-Pad to move bot | U to Undo move",
    features: ["45 Handcrafted Vault Layouts", "Full Move-Undo History Stack", "Step Counter & Level Select", "Synthesized Mechanical Audio"],
    releaseDate: "2026-09-22"
  },
  {
    id: "quantum-nonogram",
    title: "Quantum Nonogram: Cyber Picross",
    slug: "quantum-nonogram",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/quantum-nonogram.svg",
    path: "public/games/quantum-nonogram/index.html",
    description: "Deduce and reveal hidden neon cybernetic icons by filling grid cells according to numeric row and column clues across 45 blueprint stages.",
    longDescription: "Quantum Nonogram brings classic Japanese picture logic into a sleek cyberpunk matrix. Analyze numeric run clues along the headers to reconstruct iconic cybernetic glyphs across 45 distinct stages.",
    rating: 4.9,
    ratingCount: 1040,
    plays: "84.9K",
    badge: "New Release",
    tags: ["Picross", "Nonogram", "Picture Logic", "45 Themes", "Web Audio"],
    controls: "Left Click / Tap to Fill | Right Click or Tool Button to place X mark",
    features: ["45 Unique Cyber Pixel Glyphs", "Dynamic Run Clue Calculation", "Dual Fill/Cross Tooling", "Victory Fanfares"],
    releaseDate: "2026-09-22"
  },
  {
    id: "hexa-tile-polarity",
    title: "Hexa-Tile Polarity Match: Hex Matrix",
    slug: "hexa-tile-polarity",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/hexa-tile-polarity.svg",
    path: "public/games/hexa-tile-polarity/index.html",
    description: "Cycle color polarities across hexagonal honeycomb nodes to forge continuous energy bridges from left power lines to right receptors.",
    longDescription: "Hexa-Tile Polarity Match utilizes hexagonal graph theory. Tap adjacent honeycomb cells to cycle their quantum polarities, linking matching colored paths across 45 unique geometric matrix sectors.",
    rating: 4.8,
    ratingCount: 790,
    plays: "68.2K",
    badge: "Trending",
    tags: ["Hexagonal", "Color Match", "Graph Bridge", "45 Themes", "Web Audio"],
    controls: "Click or Tap Hexagon to cycle color polarity | Bridge left to right",
    features: ["45 Honeycomb Board Configurations", "Hexagonal Graph Pathfinding", "Harmonic Note Feedback", "Level Select Grid"],
    releaseDate: "2026-09-22"
  },
  {
    id: "cryptographic-word-cipher",
    title: "Cryptographic Word Cipher: Decryptor",
    slug: "cryptographic-word-cipher",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/cryptographic-word-cipher.svg",
    path: "public/games/cryptographic-word-cipher/index.html",
    description: "Decode intercepted cyber-intelligence briefs across 45 covert security sectors by substituting scrambled cipher symbols with alphabet letters.",
    longDescription: "Cryptographic Word Cipher puts you in the shoes of a security cryptanalyst. Analyze letter frequencies, deduce word patterns, and decrypt 45 authentic computing, AI, and cosmology quotes in an authentic CRT terminal.",
    rating: 4.9,
    ratingCount: 1220,
    plays: "91.5K",
    badge: "Staff Pick",
    tags: ["Cryptogram", "Word Puzzle", "Decryption", "45 Themes", "Terminal"],
    controls: "Click cipher letter, tap decoded alphabet key | Hint button reveals letters",
    features: ["45 Covert Intelligence Communiqués", "Interactive Alphabet Keypad & Hints", "Mechanical Keyboard Sound Synthesis", "Real-Time Percentage Tracker"],
    releaseDate: "2026-09-22"
  },
  {
    id: "nanite-slide-puzzle",
    title: "Nanite Slide Puzzle: Core Reassembly",
    slug: "nanite-slide-puzzle",
    category: "puzzle",
    categoryLabel: "Cyber Puzzle & Logic",
    thumbnail: "assets/thumbnails/nanite-slide-puzzle.svg",
    path: "public/games/nanite-slide-puzzle/index.html",
    description: "Reassemble scrambled quantum energy cores across 45 reactor stages by sliding numbered tiles into sequential order using the empty slot.",
    longDescription: "Nanite Slide Puzzle delivers the classic 15-puzzle sliding brainteaser with neon cyberpunk styling. Every puzzle is mathematically generated via random valid moves to guarantee 100% solvability across 45 reactor stages.",
    rating: 4.8,
    ratingCount: 930,
    plays: "73.8K",
    badge: "New Release",
    tags: ["Slide Puzzle", "15-Puzzle", "Tile Sliding", "45 Themes", "Web Audio"],
    controls: "Click or Tap tile adjacent to empty slot to slide | Arrow Keys supported",
    features: ["45 Reactor Core Stages (3x3 & 4x4)", "100% Solvable Permutations", "Metallic Slide Audio Synthesis", "Move Counter & Level Select"],
    releaseDate: "2026-09-22"
  }
];

// Merge into config.games: update existing or append new
PUZZLE_GAMES.forEach(pGame => {
  const existingIdx = config.games.findIndex(g => g.id === pGame.id);
  if (existingIdx >= 0) {
    config.games[existingIdx] = pGame;
  } else {
    config.games.push(pGame);
  }
});

// Save site-config.json
fs.writeFileSync(jsonPath, JSON.stringify(config, null, 2), 'utf-8');
console.log('✓ Updated config/site-config.json with ' + config.games.length + ' total games.');

// Update config/site-config.js
const jsContent = `/**
 * Next Games/Game — Dynamic Portal Configuration Manifest
 * Automatically generated & loaded directly to bypass browser CORS file:// protocol restrictions.
 */
window.__SITE_CONFIG__ = ${JSON.stringify(config, null, 2)};
`;
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log('✓ Updated config/site-config.js successfully.');
