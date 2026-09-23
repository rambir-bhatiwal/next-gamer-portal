/**
 * Next Games/Game — Register Category 8 (Word) in Site Config
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

// Update 'all' category badge to 81 Games
const allCat = config.categories.find(c => c.id === 'all');
if (allCat) allCat.badge = '81 Games';

// Add or update 'word' category
let wordCat = config.categories.find(c => c.id === 'word');
if (!wordCat) {
  wordCat = {
    id: 'word',
    label: 'Cyber Word & Decryption',
    badge: '10 Cyber Ciphers',
    icon: '🔤',
    description: 'Terminal password deduction, matrix grid searches, syntax anagram breakers, quantum crosswords, rapid typing infiltrators, and falling vocabulary wells.'
  };
  config.categories.push(wordCat);
} else {
  wordCat.label = 'Cyber Word & Decryption';
  wordCat.badge = '10 Cyber Ciphers';
  wordCat.icon = '🔤';
  wordCat.description = 'Terminal password deduction, matrix grid searches, syntax anagram breakers, quantum crosswords, rapid typing infiltrators, and falling vocabulary wells.';
}

const newWordGames = [
  {
    id: 'terminal-wordle',
    title: 'Terminal Wordle: 5-Letter Hacking Guess',
    slug: 'terminal-wordle',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/terminal-wordle.svg',
    path: 'public/games/terminal-wordle/index.html',
    description: 'Deduce 5-letter cryptographic passwords in 6 attempts with color-coded feedback across 45 unique security breach stages.',
    longDescription: 'Terminal Wordle tests your vocabulary and logic deduction. Breach mainframe security protocols by guessing hidden 5-letter access keys in 6 attempts with green, yellow, and dark feedback across 45 security levels.',
    rating: 4.9,
    ratingCount: 1720,
    plays: '138.2K',
    badge: 'Featured Word',
    tags: ['Wordle', 'Word Guess', 'Hacking', '45 Themes', 'Web Audio'],
    controls: 'Keyboard typing A-Z, Enter to submit, Backspace to delete | Virtual keyboard buttons',
    features: [
      '45 Unique Terminal CRT Shell Themes',
      'Color-coded Wordle Guess Matrix',
      'Keyboard & Onscreen Virtual Keypad',
      'Ascending Flip Chimes & Access Sirens'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'cyber-word-search',
    title: 'Cyber Word Search: Matrix Grid Hunter',
    slug: 'cyber-word-search',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/cyber-word-search.svg',
    path: 'public/games/cyber-word-search/index.html',
    description: 'Locate hidden sci-fi and tech vocabulary words buried inside letter grids across 45 distinct puzzle levels.',
    longDescription: 'Cyber Word Search challenges pattern recognition in high-tech matrix grids. Hunt for horizontal, vertical, and diagonal words hidden in expanding letter arrays across 45 tech and science themes.',
    rating: 4.8,
    ratingCount: 1540,
    plays: '124.7K',
    badge: 'Popular',
    tags: ['Word Search', 'Matrix', 'Puzzle', '45 Themes', 'Web Audio'],
    controls: 'Mouse drag or click start/end letters to highlight words',
    features: [
      '45 Distinct Matrix Grid Environments',
      'Dynamic Word Checklist Tracking',
      'Multi-directional Word Orientation',
      'Chime Audio Harmonics on Discovery'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'syntax-anagram-scrambler',
    title: 'Syntax Anagram Scrambler: Code Breaker',
    slug: 'syntax-anagram-scrambler',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/syntax-anagram-scrambler.svg',
    path: 'public/games/syntax-anagram-scrambler/index.html',
    description: 'Unscramble rotating circles of letters to construct valid dictionary words before the mainframe clock expires across 45 stages.',
    longDescription: 'Syntax Anagram Scrambler puts your coding vocabulary to the test with radial letter wheels. Construct sub-words and the master target keyword before system lockup across 45 compiler environments.',
    rating: 4.9,
    ratingCount: 1610,
    plays: '129.5K',
    badge: 'Top Anagram',
    tags: ['Anagram', 'Scrambler', 'Code Breaker', '45 Themes', 'Web Audio'],
    controls: 'Click circular letters or type on keyboard | Space/Enter to submit | Backspace to clear',
    features: [
      '45 Coding Environment Themes (JS, Rust, Python, etc.)',
      'Rotating Circular Letter Wheels',
      'Master Word Discovery Bonus',
      'Mechanical Clicks & Word Accept Chimes'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'quantum-crossword',
    title: 'Quantum Crossword: Cyber Mini-Puzzles',
    slug: 'quantum-crossword',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/quantum-crossword.svg',
    path: 'public/games/quantum-crossword/index.html',
    description: 'Solve compact 5x5 crossword puzzles with clever technology, science, and gaming clues across 45 unique puzzle stages.',
    longDescription: 'Quantum Crossword presents daily mini 5x5 crosswords designed for quick mental workouts. Solve intersecting tech and science clues, auto-advance through squares, and clear all 45 quantum stages.',
    rating: 4.8,
    ratingCount: 1480,
    plays: '118.9K',
    badge: 'Daily Mini',
    tags: ['Crossword', '5x5 Mini', 'Daily Clues', '45 Themes', 'Web Audio'],
    controls: 'Click cell to select clue direction | Type letters to fill and auto-advance | Backspace to clear',
    features: [
      '45 Unique Crossword UI Themes',
      'Across & Down Clue Synchronization',
      'Auto-advance & Error Verification Mode',
      'Subtle Typing Audio & Triumphant Fanfare'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'typing-blitzkrieg',
    title: 'Typing Blitzkrieg: Rapid Terminal Infiltrator',
    slug: 'typing-blitzkrieg',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/typing-blitzkrieg.svg',
    path: 'public/games/typing-blitzkrieg/index.html',
    description: 'Type descending enemy hacker code words accurately to fire laser beams and vaporize them before perimeter breach across 45 stages.',
    longDescription: 'Typing Blitzkrieg combines touch-typing speed with arcade defense action. Vaporize descending malware words with rapid laser salvos, trigger combo streaks, and defend the mainframe perimeter across 45 stages.',
    rating: 4.9,
    ratingCount: 1910,
    plays: '156.4K',
    badge: 'Action Typing',
    tags: ['Typing', 'Speedrun', 'Arcade Shooter', '45 Themes', 'Web Audio'],
    controls: 'Keyboard typing to match incoming words and fire lasers',
    features: [
      '45 Distinct Radar Screen Themes',
      'Laser Blast Particles & EMP Shockwaves',
      'WPM & Accuracy Metrics Tracking',
      'Triple Shield Defense Buffers'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'lexicon-link',
    title: 'Lexicon Link: Word Association Chain',
    slug: 'lexicon-link',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/lexicon-link.svg',
    path: 'public/games/lexicon-link/index.html',
    description: 'Group 16 technology and cultural words into 4 distinct secret categories of 4 items each across 45 staged puzzle levels.',
    longDescription: 'Lexicon Link challenges players to find the hidden threads linking 16 words. Identify 4 thematic clusters without exceeding 4 error allowances, navigating tricky red herrings across 45 puzzle stages.',
    rating: 4.9,
    ratingCount: 1750,
    plays: '141.0K',
    badge: 'Connections',
    tags: ['Connections', 'Association', 'Word Puzzle', '45 Themes', 'Web Audio'],
    controls: 'Click tiles to select 4 words | Submit button to test connection | Deselect to reset',
    features: [
      '45 Unique Category Board Themes',
      '4 Mystery Categories per Level',
      'Proximity Warning Alerts ("One Away...")',
      'Harmonic Success Chord & Shake Feedback'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'cyber-hangman',
    title: 'Cyber Hangman: AI Sentence Rescue',
    slug: 'cyber-hangman',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/cyber-hangman.svg',
    path: 'public/games/cyber-hangman/index.html',
    description: 'Prevent an imprisoned rogue AI companion from memory erasure by guessing letters to decode encrypted phrases across 45 stages.',
    longDescription: 'Cyber Hangman transforms the classic word-guessing game into a high-stakes AI containment breach rescue. Guess encrypted letters before all 6 defensive shields discharge across 45 containment environments.',
    rating: 4.8,
    ratingCount: 1620,
    plays: '128.4K',
    badge: 'Rescue',
    tags: ['Hangman', 'Word Guess', 'AI Defense', '45 Themes', 'Web Audio'],
    controls: 'Click on-screen alphabet keys or type keyboard letters A-Z',
    features: [
      '45 AI Containment Chamber Themes',
      'Holographic Avatar Disintegration States',
      '6 Multi-Shield Defense Buffer System',
      'Letter Ping & Shield Discharge FX'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'boggle-terminal',
    title: 'Boggle Terminal: 4x4 Word Constructor',
    slug: 'boggle-terminal',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/boggle-terminal.svg',
    path: 'public/games/boggle-terminal/index.html',
    description: 'Find as many words as possible in a 4x4 grid of scrambled letter dice by tracing paths between adjacent tiles across 45 stages.',
    longDescription: 'Boggle Terminal tests rapid word pattern recognition across 4x4 scrambled dice grids. Trace adjacent letter connections horizontally, vertically, or diagonally to discover valid words before time expires across 45 stages.',
    rating: 4.9,
    ratingCount: 1690,
    plays: '135.2K',
    badge: 'Boggle Master',
    tags: ['Boggle', 'Word Hunt', '4x4 Grid', '45 Themes', 'Web Audio'],
    controls: 'Click adjacent tiles to spell words | Enter or Submit to validate | Backspace to undo',
    features: [
      '45 Unique Terminal Boggle Themes',
      'Adjacency Path Visual Tracer Lines',
      'Dynamic Score Threshold Progression',
      'Rising Trace Tone Synthesis'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'binary-spelling-bee',
    title: 'Binary Spelling Bee: Hex Word Forge',
    slug: 'binary-spelling-bee',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/binary-spelling-bee.svg',
    path: 'public/games/binary-spelling-bee/index.html',
    description: 'Construct words of 4 or more letters using a honeycomb of 7 letters, requiring the central golden letter, across 45 stages.',
    longDescription: 'Binary Spelling Bee tests vocabulary depth with hexagonal honeycomb matrices. Craft valid words using the outer letters and mandatory core golden glyph, hunting for the elusive pangram across 45 stages.',
    rating: 4.9,
    ratingCount: 1810,
    plays: '147.6K',
    badge: 'Spelling Bee',
    tags: ['Spelling Bee', 'Honeycomb', 'Hexagon', '45 Themes', 'Web Audio'],
    controls: 'Click honeycomb letters or type keyboard keys | Enter to submit | Delete to backspace',
    features: [
      '45 Honeycomb Neon Environments',
      'Mandatory Center Golden Hexagon Rule',
      'Pangram Discovery Bonus Multipliers',
      'Rank Progression from Novice to Genius'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'word-drop',
    title: 'Word Drop: Falling Letter Vocabulary Tetris',
    slug: 'word-drop',
    category: 'word',
    categoryLabel: 'Cyber Word & Decryption',
    thumbnail: 'assets/thumbnails/word-drop.svg',
    path: 'public/games/word-drop/index.html',
    description: 'Columns of letter blocks drop into a well. Click adjacent blocks to form valid English words, clearing them before the stack reaches the top across 45 stages.',
    longDescription: 'Word Drop fuses falling-block gravity mechanics with Scrabble word building. Connect contiguous letter cubes in the well to detonate words, collapse the grid, and survive escalating drop tempos across 45 stages.',
    rating: 4.9,
    ratingCount: 1880,
    plays: '153.1K',
    badge: 'Drop Tetris',
    tags: ['Falling Blocks', 'Word Well', 'Scrabble Drop', '45 Themes', 'Web Audio'],
    controls: 'Click contiguous letter tiles in well to construct word | Enter or Submit button to clear | Space to drop tiles',
    features: [
      '45 Unique Well Themes & Texture Palettes',
      'Gravity Column Collapse Physics',
      'Shield Buffers & Emergency Top-out Warnings',
      'Explosive Word Blast Sound FX'
    ],
    releaseDate: '2026-09-22'
  }
];

// Append or update new games in config.games
newWordGames.forEach(newGame => {
  const idx = config.games.findIndex(g => g.id === newGame.id);
  if (idx >= 0) {
    config.games[idx] = newGame;
  } else {
    config.games.push(newGame);
  }
});

// Write to site-config.json
fs.writeFileSync(jsonPath, JSON.stringify(config, null, 2), 'utf-8');
console.log('Updated config/site-config.json with Category 8 and 10 Word games.');

// Write to site-config.js
const jsContent = `// Auto-generated site configuration for direct browser consumption\nwindow.__SITE_CONFIG__ = ${JSON.stringify(config, null, 2)};\n`;
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log('Updated config/site-config.js with Category 8 and 10 Word games.');
console.log(`Total games registered: ${config.games.length}`);
