/**
 * Next Games/Game — Register Category 4 (Strategy) in Site Config
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

// Update category badges
const allCat = config.categories.find(c => c.id === 'all');
if (allCat) allCat.badge = '41 Games';

const stratCat = config.categories.find(c => c.id === 'strategy');
if (stratCat) {
  stratCat.label = 'Tactical & Sci-Fi';
  stratCat.badge = '10 Strategy Sims';
  stratCat.icon = '🧠';
  stratCat.description = 'Orbital defenses, subnet tower guardians, fleet tactics, lunar colonies, and autonomous drone swarms.';
}

// Update orbital-defense category
const odGame = config.games.find(g => g.id === 'orbital-defense');
if (odGame) {
  odGame.category = 'strategy';
  odGame.categoryLabel = 'Tactical & Sci-Fi';
  odGame.badge = 'Enhanced';
  odGame.features = [
    '45 Thematic Planetary Orbits',
    '360-Degree Aim & Fire',
    'EMP Shockwave Ability',
    'Procedural Web Audio API'
  ];
}

// 9 New Strategy Games to add
const newStrategyGames = [
  {
    id: 'cyber-tower-defense',
    title: 'Cyber Tower Defense: Subnet Guardian',
    slug: 'cyber-tower-defense',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/cyber-tower-defense.svg',
    path: 'public/games/cyber-tower-defense/index.html',
    description: 'Position defensive cyber-nodes along network data pathways to eliminate hostile malware packet worms across 45 unique subnet levels.',
    longDescription: 'Cyber Tower Defense delivers strategic data defense on a grid network. Construct and upgrade Pulse, Cryo, EMP, and Railgun security nodes using data bits. Defend your Subnet Core against malware worms, trojans, and rootkits across 45 procedurally themed stages.',
    rating: 4.9,
    ratingCount: 1120,
    plays: '88.4K',
    badge: 'Featured Strategy',
    tags: ['Tower Defense', 'Grid Tactics', 'Cyberpunk', '45 Themes', 'Web Audio'],
    controls: 'Select security node type, click on empty grid tiles to build | Click Next Wave to deploy',
    features: [
      '45 Subnet Pathway Stages',
      '4 Security Node Types (Pulse, Cryo, EMP, Railgun)',
      'Wave-Based Malware Infiltration',
      'Procedural Sound Synthesizer'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'galactic-fleet-commander',
    title: 'Galactic Fleet Commander: Turn-Based Tactics',
    slug: 'galactic-fleet-commander',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/galactic-fleet-commander.svg',
    path: 'public/games/galactic-fleet-commander/index.html',
    description: 'Command a squadron of space cruisers, interceptors, and torpedo frigates on a turn-based tactical grid against an AI admiral across 45 star sectors.',
    longDescription: 'Galactic Fleet Commander tests your strategic mastery of deep space warfare. Manage Action Points (AP) to maneuver heavy warships, unleash devastating broadside railguns, and activate directional shields to conquer enemy battle groups across 45 distinct star sectors.',
    rating: 4.9,
    ratingCount: 1250,
    plays: '95.2K',
    badge: 'New Release',
    tags: ['Turn-Based', 'Fleet Tactics', 'Space Strategy', '45 Themes', 'Web Audio'],
    controls: 'Click starship to select, choose order (Move/Attack/Shield), click destination or enemy vessel',
    features: [
      '45 Star Sector Missions',
      'Turn-Based Action Point System',
      '3 Warship Classes (Cruiser, Interceptor, Torpedo)',
      'Directional Shields & Railgun Cannons'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'micro-colony-automaton',
    title: 'Micro-Colony Automaton: Base Architect',
    slug: 'micro-colony-automaton',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/micro-colony-automaton.svg',
    path: 'public/games/micro-colony-automaton/index.html',
    description: 'Establish and balance off-world lunar outposts across 45 planetary sectors, managing power grids, oxygen extractors, and worker drones.',
    longDescription: 'Micro-Colony Automaton puts you in charge of extraterrestrial base construction. Build Solar Arrays, Bio-Domes, O2 Extractors, and Automated Mining Rigs while managing power and life support to reach required colonist population quotas across 45 unique alien biospheres.',
    rating: 4.8,
    ratingCount: 980,
    plays: '77.5K',
    badge: 'Hot Strategy',
    tags: ['City Builder', 'Base Management', 'Colony Sim', '45 Themes', 'Web Audio'],
    controls: 'Select structure type, click empty terrain tile to construct | Monitor power and oxygen',
    features: [
      '45 Extraterrestrial Worlds',
      'Resource Management Loop (Power, O2, Minerals)',
      'Autonomous Maintenance Drones',
      'Population Milestone Targets'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'hacker-node-conquest',
    title: 'Hacker Node Conquest: Subnet Dominance',
    slug: 'hacker-node-conquest',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/hacker-node-conquest.svg',
    path: 'public/games/hacker-node-conquest/index.html',
    description: 'Dispatch high-speed packet streams between network nodes to overwhelm and conquer neutral and rival server clusters in fast-paced graph warfare.',
    longDescription: 'Hacker Node Conquest delivers adrenaline-charged real-time network capture warfare. Drag packet streams from your secure nodes to capture neutral and enemy hosts across 45 topological subnets before rival botnets seize total control.',
    rating: 4.9,
    ratingCount: 1410,
    plays: '110.3K',
    badge: 'Trending',
    tags: ['Graph Warfare', 'Real-Time Strategy', 'Galcon-Style', '45 Themes', 'Web Audio'],
    controls: 'Click and drag from player nodes to target nodes to dispatch packet streams',
    features: [
      '45 Network Graph Topologies',
      'Real-Time Packet Stream Simulation',
      'Adaptive AI Botnet Opponents',
      'Instant Node Capture Feedback'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'cyberpunk-mech-tactics',
    title: 'Cyberpunk Mech Tactics: Grid Skirmish',
    slug: 'cyberpunk-mech-tactics',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/cyberpunk-mech-tactics.svg',
    path: 'public/games/cyberpunk-mech-tactics/index.html',
    description: 'Command a squad of 3 specialized combat mechs in turn-based tactical skirmishes across destructible city grids in 45 campaign sectors.',
    longDescription: 'Cyberpunk Mech Tactics combines gritty urban warfare with deep tactical combat. Maneuver your Vanguard, Recon Sniper, and Assault Titan through destructible city cover, managing Action Points and weapon ranges to obliterate rival marauder walkers.',
    rating: 4.9,
    ratingCount: 1330,
    plays: '104.7K',
    badge: 'Top Tactical',
    tags: ['Mech Skirmish', 'Turn-Based', 'Tactical Grid', '45 Themes', 'Web Audio'],
    controls: 'Click mech to select, select action (Move/Railgun/Missile), click target tile or hostile mech',
    features: [
      '45 Urban Warzone Skirmishes',
      '3 Specialized Mech Archetypes',
      'Destructible Cover & Line-of-Sight',
      'Heavy Hydraulic & Weapon Sound Synthesis'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'biodome-terraform',
    title: 'Bio-Dome Terraform Protocol: Ecosystem Sim',
    slug: 'biodome-terraform',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/biodome-terraform.svg',
    path: 'public/games/biodome-terraform/index.html',
    description: 'Regulate atmospheric gases, temperature, moisture, and microbial life inside an enclosed biosphere dome across 45 ecosystem development stages.',
    longDescription: 'Bio-Dome Terraform Protocol challenges you to balance planetary ecology. Adjust core heating, deploy cryo-coolant, release moisture mist, and seed biological cultures to achieve 100 biomass units in 45 extraterrestrial biosphere sectors.',
    rating: 4.8,
    ratingCount: 920,
    plays: '71.2K',
    badge: 'Eco Sim',
    tags: ['Terraform Sim', 'Ecosystem Strategy', 'Atmospheric Balance', '45 Themes', 'Web Audio'],
    controls: 'Click regulator buttons to maintain 18°C-26°C and 80%+ eco-stability to cultivate flora biomass',
    features: [
      '45 Extraterrestrial Biospheres',
      'Dynamic Atmospheric Equilibrium Simulation',
      'Procedural Flora & Gas Particle Rendering',
      'Harmonic Environmental Audio Synthesis'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'drone-swarm-commander',
    title: 'Drone Swarm Commander: Tactical Patrol',
    slug: 'drone-swarm-commander',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/drone-swarm-commander.svg',
    path: 'public/games/drone-swarm-commander/index.html',
    description: 'Direct an autonomous swarm of 40 micro-drones using flocking behavior algorithms to patrol sectors and intercept stealth hostile intruders.',
    longDescription: 'Drone Swarm Commander puts dynamic Boids flocking physics at your fingertips. Direct your drone swarm beacon, switch tactical stances (Intercept, Orbital Defense, Scatter), and unleash micro-laser volleys to hunt down rogue infiltrators across 45 patrol sectors.',
    rating: 4.9,
    ratingCount: 1560,
    plays: '118.9K',
    badge: 'Must Play',
    tags: ['Swarm Control', 'Boids Flocking', 'Real-Time Action', '45 Themes', 'Web Audio'],
    controls: 'Move mouse/cursor to position swarm beacon | Click stance buttons to adapt flocking tactics',
    features: [
      '45 High-Security Patrol Sectors',
      'Autonomous 40-Drone Boids Flocking Simulation',
      '3 Tactical Swarm Stances',
      'High-Frequency Drone Audio Synthesis'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'ai-defense-matrix',
    title: 'AI Defense Matrix: Neural Firewall War',
    slug: 'ai-defense-matrix',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/ai-defense-matrix.svg',
    path: 'public/games/ai-defense-matrix/index.html',
    description: 'Defend a sentient synthetic AI core against an escalating cyber-assault by deploying adaptive encryption firewalls, honeypots, and purge subroutines.',
    longDescription: 'AI Defense Matrix puts you in command of cybernetic neural defenses. Spend CPU cycles to erect hard firewalls, lure malware packets into honeypot traps, and detonate area purge algorithms across 45 neural mainframe matrices.',
    rating: 4.8,
    ratingCount: 1040,
    plays: '83.6K',
    badge: 'Cyber Defense',
    tags: ['Neural Defense', 'Cyber Warfare', 'Firewall Matrix', '45 Themes', 'Web Audio'],
    controls: 'Select security tool, click along neural links or nodes to deploy defenses',
    features: [
      '45 Neural Network Topologies',
      'Adaptive CPU Cycle Resource Management',
      'Honeypot Decoy Traps & Hard Firewalls',
      'Area-of-Effect Purge Routines'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'space-station-outpost',
    title: 'Space Station Outpost: Resource Balancer',
    slug: 'space-station-outpost',
    category: 'strategy',
    categoryLabel: 'Tactical & Sci-Fi',
    thumbnail: 'assets/thumbnails/space-station-outpost.svg',
    path: 'public/games/space-station-outpost/index.html',
    description: 'Optimize trade routes, orbital freighters, and cargo storage between asteroid mining outposts and deep space refineries across 45 solar sectors.',
    longDescription: 'Space Station Outpost delivers deep commercial logistics in the depths of space. Dispatch Ore, Fuel, and Tech freighters between orbital stations, balancing credits and fuel reserves to fulfill massive interstellar trade quotas across 45 solar sectors.',
    rating: 4.8,
    ratingCount: 970,
    plays: '79.1K',
    badge: 'Logistics Sim',
    tags: ['Logistics', 'Space Trade', 'Supply Chain', '45 Themes', 'Web Audio'],
    controls: 'Select cargo type, click from origin station to destination station to dispatch freighters',
    features: [
      '45 Solar Trade Sectors',
      'Multi-Commodity Supply & Demand Logistics',
      'Orbital Shipping Lane Simulation',
      'Morse Telemetry & Docking Audio Synthesis'
    ],
    releaseDate: '2026-09-22'
  }
];

// Append any games not already in config.games
newStrategyGames.forEach(g => {
  const existingIdx = config.games.findIndex(item => item.id === g.id);
  if (existingIdx >= 0) {
    config.games[existingIdx] = g;
  } else {
    config.games.push(g);
  }
});

// Save site-config.json
fs.writeFileSync(jsonPath, JSON.stringify(config, null, 2), 'utf-8');

// Save site-config.js
const jsContent = `/**
 * Next Games/Game — Dynamic Portal Configuration Manifest
 * Automatically generated & loaded directly to bypass browser CORS file:// protocol restrictions.
 */
window.__SITE_CONFIG__ = ${JSON.stringify(config, null, 2)};
`;
fs.writeFileSync(jsPath, jsContent, 'utf-8');

console.log(`Successfully updated site-config.json and site-config.js! Total games: ${config.games.length}`);
