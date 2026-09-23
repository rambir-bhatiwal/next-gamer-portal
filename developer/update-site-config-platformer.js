/**
 * Next Games/Game — Register Category 5 (Platformer) in Site Config
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

// Update 'all' category badge to 51 Games
const allCat = config.categories.find(c => c.id === 'all');
if (allCat) allCat.badge = '51 Games';

// Add or update 'platformer' category
let platCat = config.categories.find(c => c.id === 'platformer');
if (!platCat) {
  platCat = {
    id: 'platformer',
    label: 'Cyber Platformer & Reflex',
    badge: '10 Precision Climbers',
    icon: '🧗',
    description: 'Gravity inverters, vertical ninja climbs, magnetic crawlers, teleportation hoppers, and stealth infiltrators across 45 unique worlds.'
  };
  config.categories.push(platCat);
} else {
  platCat.label = 'Cyber Platformer & Reflex';
  platCat.badge = '10 Precision Climbers';
  platCat.icon = '🧗';
  platCat.description = 'Gravity inverters, vertical ninja climbs, magnetic crawlers, teleportation hoppers, and stealth infiltrators across 45 unique worlds.';
}

const newPlatformerGames = [
  {
    id: 'neon-gravity-jumper',
    title: 'Neon Gravity Jumper: Dual-Floor Flip',
    slug: 'neon-gravity-jumper',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/neon-gravity-jumper.svg',
    path: 'public/games/neon-gravity-jumper/index.html',
    description: 'Flip gravity between floor and ceiling at hypersonic speeds across 45 futuristic courses while dodging laser barriers and gathering quantum energy.',
    longDescription: 'Neon Gravity Jumper tests your split-second reflexes as you sprint across dual ceiling and floor velocity tracks. Invert gravity with precise timing to dodge laser barriers and gather quantum energy orbs across 45 procedurally generated neon environments.',
    rating: 4.9,
    ratingCount: 1420,
    plays: '112.5K',
    badge: 'Featured Platformer',
    tags: ['Gravity Flip', 'Reflex', 'Runner', '45 Themes', 'Web Audio'],
    controls: 'Press Spacebar or Click/Tap anywhere to flip gravity between floor and ceiling',
    features: [
      '45 Unique Thematic Courses',
      'Instant Gravity Inversion Mechanics',
      'Energy Orb Collection & Shield Matrix',
      'Procedural Web Audio API Soundscapes'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'cyber-ninja-climb',
    title: 'Cyber-Ninja Wall Climb: Precision Ascent',
    slug: 'cyber-ninja-climb',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/cyber-ninja-climb.svg',
    path: 'public/games/cyber-ninja-climb/index.html',
    description: 'Wall-jump and grapple upward through vertical shafts lined with neon spikes, laser grids, and data scrolls across 45 towering stages.',
    longDescription: 'Cyber-Ninja Wall Climb challenges your timing and agility in a vertical cyber-shaft. Wall-jump, wall-slide, and leap between opposing surfaces while gathering glowing data scrolls across 45 towering stages.',
    rating: 4.8,
    ratingCount: 1280,
    plays: '98.3K',
    badge: 'New Release',
    tags: ['Wall Jump', 'Ninja', 'Vertical', '45 Themes', 'Web Audio'],
    controls: 'Press Space / W / Up to leap between walls | Wall slide to slow descent',
    features: [
      '45 Vertical Megastructure Shafts',
      'Kinetic Wall-Jump & Sliding Physics',
      'Data Scroll Collection Quotas',
      'Dynamic Web Audio Synthesizer'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'nanotech-crawler',
    title: 'Nanotech Crawler: 360 Magnetic Infiltrator',
    slug: 'nanotech-crawler',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/nanotech-crawler.svg',
    path: 'public/games/nanotech-crawler/index.html',
    description: 'Crawl across ceilings, floors, and vertical walls with full 360-degree magnetic adhesion across 45 microcircuit architecture stages.',
    longDescription: 'Nanotech Crawler puts you in command of an agile magnetic micro-drone capable of climbing any surface orientation. Navigate complex 360-degree circuit boards, evade sweeping laser probes, and siphon data cores across 45 distinct bio-chip levels.',
    rating: 4.9,
    ratingCount: 1350,
    plays: '104.7K',
    badge: 'Popular',
    tags: ['Magnetic Crawl', '360 Physics', 'Microchip', '45 Themes', 'Web Audio'],
    controls: 'Arrow Keys or A/D to steer along magnetic surface | Space to fire EMP probe',
    features: [
      '45 Microcircuit Architecture Stages',
      '360-Degree Surface Navigation',
      'Magnetic Adhesion Physics',
      'Procedural Sound Synthesizer'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'quantum-teleport-hopper',
    title: 'Quantum Teleport Hopper: Warp Jumper',
    slug: 'quantum-teleport-hopper',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/quantum-teleport-hopper.svg',
    path: 'public/games/quantum-teleport-hopper/index.html',
    description: 'Launch quantum beacon projectiles and warp instantly to their position to bypass forcefields and solve spatial puzzles across 45 stages.',
    longDescription: 'Quantum Teleport Hopper combines precision platforming with instant warp mechanics. Aim and throw your quantum translocator beacon through narrow gaps and laser barriers, then teleport instantly to maneuver through 45 mind-bending sectors.',
    rating: 4.9,
    ratingCount: 1510,
    plays: '119.8K',
    badge: 'Staff Pick',
    tags: ['Teleportation', 'Puzzle Platformer', 'Quantum', '45 Themes', 'Web Audio'],
    controls: 'Click/Drag to aim & fire quantum beacon | Space to instant teleport',
    features: [
      '45 Quantum Warp Sectors',
      'Translocator Beacon Teleportation',
      'Forcefield & Laser Bypass Puzzles',
      'Procedural Web Audio API'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'skyward-spire',
    title: 'Skyward Spire: Procedural Cyber Tower',
    slug: 'skyward-spire',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/skyward-spire.svg',
    path: 'public/games/skyward-spire/index.html',
    description: 'Bounce skyward on anti-gravity trampoline pads, moving platforms, and kinetic accelerators across 45 cyber skyscraper spires.',
    longDescription: 'Skyward Spire delivers exhilarating vertical bouncing action. Ascend towering futuristic skyscrapers by timing bounces on anti-gravity pads, springs, and moving lifts while collecting energy cores across 45 distinct architectural levels.',
    rating: 4.8,
    ratingCount: 1190,
    plays: '91.6K',
    badge: 'New Release',
    tags: ['Vertical Ascender', 'Bounce', 'Cyber Tower', '45 Themes', 'Web Audio'],
    controls: 'A/D or Left/Right to steer mid-air | Bounce automatically on trampolines & pads',
    features: [
      '45 Skyward Tower Stages',
      'Kinetic Trampoline & Spring Physics',
      'Skyline Architecture Visuals',
      'Procedural Web Audio Chimes'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'silicon-cave-explorer',
    title: 'Silicon Cave Explorer: Deep Cavern Spelunker',
    slug: 'silicon-cave-explorer',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/silicon-cave-explorer.svg',
    path: 'public/games/silicon-cave-explorer/index.html',
    description: 'Spelunk through dark crystalline caverns using a dynamic flashlight beam, climbing ropes, and mining rare silicon gems across 45 subterranean depths.',
    longDescription: 'Silicon Cave Explorer combines atmospheric exploration with precision platforming. Illuminate jagged subterranean grottos with your flashlight cone, scale cliff ropes, and mine glowing crystals while managing oxygen and shields across 45 subterranean depths.',
    rating: 4.9,
    ratingCount: 1380,
    plays: '106.2K',
    badge: 'Atmospheric',
    tags: ['Spelunker', 'Flashlight Cone', 'Mining', '45 Themes', 'Web Audio'],
    controls: 'A/D or Left/Right to walk | W / Space to jump | Flashlight follows cursor',
    features: [
      '45 Subterranean Cavern Depths',
      'Dynamic 2D Flashlight Lighting Engine',
      'Crystal Harvesting Quotas',
      'Subterranean Echo Audio Synthesis'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'jetpack-salvager',
    title: 'Jetpack Salvager: Zero-G Cavern Dash',
    slug: 'jetpack-salvager',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/jetpack-salvager.svg',
    path: 'public/games/jetpack-salvager/index.html',
    description: 'Pilot a fuel-limited zero-g salvage explorer through narrow metallic corridors, hydraulic presses, and laser gates across 45 derelict sectors.',
    longDescription: 'Jetpack Salvager tests your delicate thrust maneuvers in zero gravity. Manage fuel consumption as you fire vertical and lateral thrusters, navigate treacherous hydraulic presses, gather salvage cores, and dock at the escape airlock across 45 derelict space station levels.',
    rating: 4.8,
    ratingCount: 1210,
    plays: '94.8K',
    badge: 'New Release',
    tags: ['Jetpack', 'Zero-G', 'Thrust Physics', '45 Themes', 'Web Audio'],
    controls: 'W / Up / Space to fire main thruster | A / D to tilt and steer | Land on pads to refuel',
    features: [
      '45 Derelict Station Sectors',
      'Realistic Zero-G Inertia & Thrust Physics',
      'Fuel Management & Refuel Landing Pads',
      'Modulated White Noise Thruster Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'pulse-runner',
    title: 'Pulse Runner: Precision Rhythm Platforms',
    slug: 'pulse-runner',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/pulse-runner.svg',
    path: 'public/games/pulse-runner/index.html',
    description: 'Sprint along dynamic soundwaves and hit rhythm gates in sync with synthesized electronic music across 45 high-tempo tracks (110–175 BPM).',
    longDescription: 'Pulse Runner unites high-velocity auto-running platforming with interactive rhythm mechanics. Time your jumps to the beat of procedural synth music tracks, pass through rhythm rings for score multipliers, and conquer 45 electronic tracks featuring background equalizer visualizers.',
    rating: 4.9,
    ratingCount: 1650,
    plays: '135.0K',
    badge: 'Top Rated',
    tags: ['Rhythm Runner', 'BPM Synced', 'Equalizer', '45 Themes', 'Web Audio'],
    controls: 'Space / Arrow Up / Tap to jump | Time jumps on the beat for PERFECT bonus multipliers',
    features: [
      '45 High-BPM Rhythm Tracks (110 to 175 BPM)',
      'Real-Time Procedural Audio Visualizer Bars',
      'Combo Multipliers & Perfect Beat Bonuses',
      'Procedural Multi-Track Synthesizer'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'hologram-glitcher',
    title: 'Hologram Glitcher: Reality Shifter',
    slug: 'hologram-glitcher',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/hologram-glitcher.svg',
    path: 'public/games/hologram-glitcher/index.html',
    description: 'Toggle between two alternate holographic reality layers (Alpha & Beta) to materialize solid platforms and solve 45 spatial puzzle stages.',
    longDescription: 'Hologram Glitcher delivers mind-bending dual-reality puzzle platforming. Toggle between Layer Alpha and Layer Beta with the press of a button, turning ethereal ghost beams into solid platforms mid-jump to collect quantum shards and stabilize 45 dimensional rifts.',
    rating: 4.9,
    ratingCount: 1470,
    plays: '115.6K',
    badge: 'Editor Choice',
    tags: ['Reality Shift', 'Phase Switch', 'Puzzle Platformer', '45 Themes', 'Web Audio'],
    controls: 'A/D or Left/Right to move | W/Up to jump | Space to switch between Alpha & Beta layers',
    features: [
      '45 Dual-Reality Puzzle Levels',
      'Instant Phase-Shift Reality Glitch Mechanics',
      'Quantum Shard Quotas & Dimensional Portals',
      'Procedural Glitch Shaders & Frequency Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'robo-escape-9',
    title: 'Robo-Escape 9: Facility Infiltrator',
    slug: 'robo-escape-9',
    category: 'platformer',
    categoryLabel: 'Cyber Platformer & Reflex',
    thumbnail: 'assets/thumbnails/robo-escape-9.svg',
    path: 'public/games/robo-escape-9/index.html',
    description: 'Guide rogue domestic robot Unit 9 through a high-security manufacturing complex, crouching in shadows and hacking terminals across 45 sectors.',
    longDescription: 'Robo-Escape 9 is a tactical stealth action platformer. Evade sweeping surveillance camera cones, duck into shadows and behind crates, hack security door consoles, and outmaneuver security patrol drones to guide Unit 9 to freedom across 45 facility zones.',
    rating: 4.8,
    ratingCount: 1290,
    plays: '101.4K',
    badge: 'New Release',
    tags: ['Stealth Platformer', 'Vision Cones', 'Hacking', '45 Themes', 'Web Audio'],
    controls: 'A/D to run | W to jump | S to crouch & hide behind crates | E or Space to hack terminals',
    features: [
      '45 High-Security Facility Sectors',
      'Surveillance Camera Vision Cone Detection',
      'Shadow & Crate Cover Stealth Mechanics',
      'Security Alarm Claxon Synthesizer'
    ],
    releaseDate: '2026-09-22'
  }
];

// Add games, avoiding duplicates
newPlatformerGames.forEach(newGame => {
  const existingIdx = config.games.findIndex(g => g.id === newGame.id);
  if (existingIdx >= 0) {
    config.games[existingIdx] = newGame;
  } else {
    config.games.push(newGame);
  }
});

// Write updated JSON
fs.writeFileSync(jsonPath, JSON.stringify(config, null, 2), 'utf-8');

// Write updated JS for direct browser script execution
const jsContent = `// Auto-generated site configuration for direct browser consumption
window.__SITE_CONFIG__ = ${JSON.stringify(config, null, 2)};
`;
fs.writeFileSync(jsPath, jsContent, 'utf-8');

console.log('Successfully registered Category 5 (Platformer) with 10 titles.');
console.log('Total Games in Catalog:', config.games.length);
