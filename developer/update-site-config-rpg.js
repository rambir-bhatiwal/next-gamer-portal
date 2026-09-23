/**
 * Next Games/Game — Register Category 10 (RPG) in Site Config
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

// Update 'all' category badge to 101 Games (100 Century Milestone achieved!)
const allCat = config.categories.find(c => c.id === 'all');
if (allCat) allCat.badge = '101 Games';

// Add or update 'rpg' category
let rpgCat = config.categories.find(c => c.id === 'rpg');
if (!rpgCat) {
  rpgCat = {
    id: 'rpg',
    label: 'Cyber RPG & Adventures',
    badge: '10 Cyber RPGs',
    icon: '⚔️',
    description: 'Turn-based procedural dungeon crawlers, cyborg gladiator arenas, retro text hacking terminals, space mercenary gunships, rune grimoires, virtual pets, wasteland caravans, modular drone crafting, bushido samurai duels, and time-travel ATB epics.'
  };
  config.categories.push(rpgCat);
} else {
  rpgCat.label = 'Cyber RPG & Adventures';
  rpgCat.badge = '10 Cyber RPGs';
  rpgCat.icon = '⚔️';
  rpgCat.description = 'Turn-based procedural dungeon crawlers, cyborg gladiator arenas, retro text hacking terminals, space mercenary gunships, rune grimoires, virtual pets, wasteland caravans, modular drone crafting, bushido samurai duels, and time-travel ATB epics.';
}

const newRPGGames = [
  {
    id: 'cyber-dungeon-crawler',
    title: 'Cyber Dungeon Crawler: Matrix',
    slug: 'cyber-dungeon-crawler',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/cyber-dungeon-crawler.svg',
    path: 'public/games/cyber-dungeon-crawler/index.html',
    description: 'Explore procedurally generated server floor mazes across 45 distinct floor levels, battling security daemons and collecting RAM upgrades.',
    longDescription: 'Descend through 45 floors of high-tech digital catacombs. Battle firewall daemons in turn-based grid combat, scavenge nanite vials, upgrade your cyber deck RAM, and conquer the Century Matrix Master Core.',
    rating: 4.9,
    ratingCount: 2150,
    plays: '184.2K',
    badge: 'Century Roguelike',
    tags: ['Roguelike', 'Turn-Based', 'Dungeon', '45 Themes', 'Web Audio'],
    controls: 'Arrow Keys / WASD to move. Bump into enemies to attack. [H] to heal nanite, [Space] for EMP pulse.',
    features: [
      '45 Unique Server Floor Environments',
      'Turn-Based Grid Bump Combat Mechanics',
      'Inventory, Nanites, RAM, and Microchip Upgrades',
      'Procedural Maze Layouts and Boss Daemons'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'turn-based-cyberpunk-arena',
    title: 'Neon Gladiator: Cyber Arena',
    slug: 'turn-based-cyberpunk-arena',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/turn-based-cyberpunk-arena.svg',
    path: 'public/games/turn-based-cyberpunk-arena/index.html',
    description: 'Equip your cyborg gladiator with cyberware implants and plasma blades across 45 championship arena bouts against rival gladiators.',
    longDescription: 'Step into the underground neon fighting colosseums. Engage in strategic turn-based tactical combat against rival champions. Time your energy shields, unleash heavy plasma strikes, and build your championship legacy.',
    rating: 4.8,
    ratingCount: 1980,
    plays: '167.5K',
    badge: 'Gladiator RPG',
    tags: ['Arena', 'Turn-Based', 'Gladiator', '45 Themes', 'Web Audio'],
    controls: 'Click action buttons or press [1] [2] [3] [4] to execute combat commands.',
    features: [
      '45 Unique Championship Arena Backdrops',
      'Tactical Plasma Slash, Shielding, and Nanite Injections',
      'Adaptive AI Rival Gladiator Combat Strategies',
      'Energy Management and Purse Credit Rewards'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'text-terminal-hacker-quest',
    title: 'Text Terminal Hacker Quest',
    slug: 'text-terminal-hacker-quest',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/text-terminal-hacker-quest.svg',
    path: 'public/games/text-terminal-hacker-quest/index.html',
    description: 'An immersive text-based cyberpunk RPG played through a retro Unix terminal across 45 branching mission nodes, investigating corporate espionage.',
    longDescription: 'Assume the identity of an elite cyber infiltrator. Navigate retro green-phosphor command lines, scan memory buffers, bypass corporate ICE security firewalls, and decrypt secret corporate payroll records.',
    rating: 4.9,
    ratingCount: 2240,
    plays: '192.1K',
    badge: 'Interactive Fiction',
    tags: ['Terminal', 'Hacking', 'Text RPG', '45 Themes', 'Web Audio'],
    controls: 'Type commands (ls, cat, scan, hack, decrypt, next) or use quick command buttons.',
    features: [
      '45 Corporate Mainframe Node Systems',
      'Authentic Retro CRT Terminal Visual Filter & Typist Audio',
      'Exploit Buffer Injection & Encryption Decryption Mechanics',
      'Branching Filesystem Investigation'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'space-mercenary-outpost',
    title: 'Space Mercenary: Star Outpost',
    slug: 'space-mercenary-outpost',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/space-mercenary-outpost.svg',
    path: 'public/games/space-mercenary-outpost/index.html',
    description: 'Pilot a mercenary gunship across 45 planetary outposts, taking on pirate bounties, upgrading ship hulls, and trading contraband.',
    longDescription: 'Command your mercenary strike ship through 45 star systems and orbital bases. Engage in intense 2D Newtonian space dogfights against pirate fleets, protect space stations, and amass bounty credits.',
    rating: 4.8,
    ratingCount: 1890,
    plays: '159.4K',
    badge: 'Space Dogfight',
    tags: ['Space', 'Dogfight', 'Bounty Hunter', '45 Themes', 'Web Audio'],
    controls: 'Arrow Keys / WASD to fly (steer + thrust). Spacebar to fire lasers.',
    features: [
      '45 Star System and Orbital Outpost Biomes',
      'Newtonian Inertia Flight Mechanics with Thrusters',
      'Photon Laser Weaponry and Pirate Fleet Bounties',
      'Triple Shield Core Safeguards'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'neon-wizard',
    title: 'Neon Wizard: Spell Grimoire',
    slug: 'neon-wizard',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/neon-wizard.svg',
    path: 'public/games/neon-wizard/index.html',
    description: 'Draw glowing geometric runes on screen with mouse or touch to cast dynamic elemental spells against waves of mythical monsters across 45 stages.',
    longDescription: 'Harness the arcane cyber elements. Cast fire blasts, frost shards, shock waves, and protective arcane wards to banish glitched mythical monstrosities invading 45 sacred cyber sanctums.',
    rating: 4.9,
    ratingCount: 2040,
    plays: '174.6K',
    badge: 'Arcane Battler',
    tags: ['Magic', 'Rune Drawing', 'Wizard', '45 Themes', 'Web Audio'],
    controls: 'Click spell buttons or press [1] [2] [3] [4] to invoke elemental runes.',
    features: [
      '45 Arcane Cyber Sanctum Environments',
      'Elemental Counter Mechanics (Fire vs Ice vs Shock)',
      'Mana Pool Regeneration & Arcane Ward Shields',
      'Sparkling Spell Particle Trajectory Animations'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'cyber-pet-simulator',
    title: 'Cyber Pet: Virtual Tamagotchi',
    slug: 'cyber-pet-simulator',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/cyber-pet-simulator.svg',
    path: 'public/games/cyber-pet-simulator/index.html',
    description: 'Care for, train, and evolve a digital nanobot companion across 40 distinct evolutionary lifecycle stages and discipline training mini-games.',
    longDescription: 'Experience the nostalgic joy of virtual digital pets with a cybernetic twist. Feed data packets, train neural weights, defragment memories, and watch your companion evolve from a tiny Nano-Spore into an omnipotent Mecha-Titan.',
    rating: 4.9,
    ratingCount: 2310,
    plays: '198.3K',
    badge: 'Virtual Life Sim',
    tags: ['Tamagotchi', 'Pet Sim', 'Evolution', '40 Themes', 'Web Audio'],
    controls: 'Click care buttons (Feed, Train, Clean, Play) to nurture companion.',
    features: [
      '40 Unique Digital Living Habitats',
      '11 Evolutionary Growth Stages (Spore to Mecha-Titan)',
      'Real-Time Energy, Hygiene, and Happiness Needs',
      'Charming 8-Bit Retro Chime Audio Synthesis'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'post-apocalyptic-barterer',
    title: 'Wasteland Barterer: Caravan',
    slug: 'post-apocalyptic-barterer',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/post-apocalyptic-barterer.svg',
    path: 'public/games/post-apocalyptic-barterer/index.html',
    description: 'Lead a scrap caravan across radioactive wastelands across 45 trading settlement stages, buying low and selling high while fending off raiders.',
    longDescription: 'Lead a merchant wagon train through the post-apocalyptic frontier. Exploit shifting supply and demand for Water, Scrap Metal, Bio-Fuel, and Medical Stims. Navigate raider ambushes and build your trading empire.',
    rating: 4.8,
    ratingCount: 1920,
    plays: '161.8K',
    badge: 'Wasteland Trader',
    tags: ['Economy', 'Caravan', 'Wasteland', '45 Themes', 'Web Audio'],
    controls: 'Click Buy / Sell on market commodities, then click Travel to advance caravan.',
    features: [
      '45 Unique Wasteland Settlement Trading Posts',
      'Dynamic Supply-and-Demand Commodity Market System',
      'Caravan Resource Management (Water and Fuel Consumption)',
      'Random Wasteland Road Encounters and Ambush Risks'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'rogue-drone-swarm',
    title: 'Rogue Drone Swarm: Evolve',
    slug: 'rogue-drone-swarm',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/rogue-drone-swarm.svg',
    path: 'public/games/rogue-drone-swarm/index.html',
    description: 'Control a core drone harvesting scrap from discarded machines across 45 combat testing sectors, evolving into a walking fortress.',
    longDescription: 'Enter the combat testing proving grounds. Battle swarms of rogue drones, salvage discarded scrap components, and snap modular weapon pods onto your core chassis to unleash quad-directional firepower.',
    rating: 4.9,
    ratingCount: 2080,
    plays: '179.2K',
    badge: 'Modular Action RPG',
    tags: ['Action RPG', 'Drone', 'Modular', '45 Themes', 'Web Audio'],
    controls: 'Move with Arrow Keys / WASD. Spacebar or click Fire to unleash plasma cannons.',
    features: [
      '45 Modular Proving Ground Sectors',
      'Scrap Collection and Dynamic 4-Slot Chassis Evolution',
      'Multidirectional Bullet Patterns and Boss Mechs',
      'Responsive Movement and Collision Grace Windows'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'neon-samurai',
    title: 'Neon Samurai: Bushido Odyssey',
    slug: 'neon-samurai',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/neon-samurai.svg',
    path: 'public/games/neon-samurai/index.html',
    description: 'Embark on a vengeance quest across corporate spires as an augmented ronin across 45 story duel stages, seeking corporate liberation.',
    longDescription: 'Channel the ancient code of Bushido in a gleaming cyberpunk future. Master three combat stances (Fire, Water, Wind), execute split-second katana parries to stagger corporate adversaries, and conquer 45 cinematic story duels.',
    rating: 5.0,
    ratingCount: 2490,
    plays: '215.0K',
    badge: 'Bushido Odyssey',
    tags: ['Samurai', 'Parry Duel', 'Bushido', '45 Themes', 'Web Audio'],
    controls: 'Press [1] to Katana Slash, [2] to Parry Clash, [3] to Switch Combat Stance.',
    features: [
      '45 Atmospheric Cyberpunk Duel Backdrops (Neon Rain, Spires, Shrines)',
      'Precision Parry and Enemy Stagger Combat Engine',
      'Three Dynamic Combat Stances (Fire / Water / Wind)',
      'Bamboo Flute and Taiko Drum Procedural Audio Synthesis'
    ],
    releaseDate: '2026-09-23'
  },
  {
    id: 'quantum-chrono-rpg',
    title: 'Quantum Chrono RPG: Paradox',
    slug: 'quantum-chrono-rpg',
    category: 'rpg',
    categoryLabel: 'Cyber RPG & Adventures',
    thumbnail: 'assets/thumbnails/quantum-chrono-rpg.svg',
    path: 'public/games/quantum-chrono-rpg/index.html',
    description: 'Travel between Past, Present, and Future eras across 45 timeline paradox stages to defeat the Entropy Core and restore history.',
    longDescription: 'The Century Finale of Next Games/Game! Lead the Chrono Knight, Quantum Mage, and Tech Specialist in epic Active Time Battles across 45 historical and future eras. Shift timelines to disrupt enemy resistances and restore universal history.',
    rating: 5.0,
    ratingCount: 2850,
    plays: '254.7K',
    badge: '★ 100TH GAME CENTURY FINALE ★',
    tags: ['ATB RPG', 'Time Travel', 'Chrono', '45 Themes', 'Web Audio', 'Game 100'],
    controls: 'Press [1] Chrono Strike, [2] Time Warp, [3] Quantum Tech, [4] Shift Timeline Era.',
    features: [
      '45 Multi-Era Timeline Backdrops (Past, Present, Future)',
      'Active Time Battle (ATB) Real-Time Party Charge Mechanics',
      'Timeline Era Shifting Altering Combat Resistances & Weaknesses',
      'Grand Century Milestone Fanfares & Temporal Audio Synthesis'
    ],
    releaseDate: '2026-09-23'
  }
];

// Append or update new games in config.games
newRPGGames.forEach(newGame => {
  const idx = config.games.findIndex(g => g.id === newGame.id);
  if (idx >= 0) {
    config.games[idx] = newGame;
  } else {
    config.games.push(newGame);
  }
});

// Write to site-config.json
fs.writeFileSync(jsonPath, JSON.stringify(config, null, 2), 'utf-8');
console.log('Updated config/site-config.json with Category 10 and 10 RPG games.');

// Write to site-config.js
const jsContent = `// Auto-generated site configuration for direct browser consumption\nwindow.__SITE_CONFIG__ = ${JSON.stringify(config, null, 2)};\n`;
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log('Updated config/site-config.js with Category 10 and 10 RPG games.');
console.log(`Total games registered: ${config.games.length}`);
