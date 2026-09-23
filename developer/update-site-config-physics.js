/**
 * Next Games/Game — Register Category 6 (Physics) in Site Config
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

// Update 'all' category badge to 61 Games
const allCat = config.categories.find(c => c.id === 'all');
if (allCat) allCat.badge = '61 Games';

// Add or update 'physics' category
let physCat = config.categories.find(c => c.id === 'physics');
if (!physCat) {
  physCat = {
    id: 'physics',
    label: 'Cyber Physics & Simulators',
    badge: '10 Physics Engines',
    icon: '⚛️',
    description: 'Particle colliders, ragdoll demolition slopes, orbital slingshots, ballistics artillery, fluid laboratories, and truss bridges.'
  };
  config.categories.push(physCat);
} else {
  physCat.label = 'Cyber Physics & Simulators';
  physCat.badge = '10 Physics Engines';
  physCat.icon = '⚛️';
  physCat.description = 'Particle colliders, ragdoll demolition slopes, orbital slingshots, ballistics artillery, fluid laboratories, and truss bridges.';
}

const newPhysicsGames = [
  {
    id: 'graviton-pinball',
    title: 'Graviton Pinball: Hyper Collider',
    slug: 'graviton-pinball',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/graviton-pinball.svg',
    path: 'public/games/graviton-pinball/index.html',
    description: 'Launch subatomic particle spheres inside 45 quantum collider tables with magnetic bumpers, flipper physics, and escalating combo multipliers.',
    longDescription: 'Graviton Pinball combines classic arcade table dynamics with cutting-edge particle physics simulation. Launch spheres into the accelerator ring, bounce between glowing magnetic bumpers, and rack up massive high-score combos across 45 unique collider environments.',
    rating: 4.9,
    ratingCount: 1540,
    plays: '118.2K',
    badge: 'Featured Physics',
    tags: ['Pinball', 'Particle Physics', 'Colliders', '45 Themes', 'Web Audio'],
    controls: 'A/Left for Left Flipper | D/Right for Right Flipper | Space to Launch Sphere',
    features: [
      '45 Particle Collider Table Stages',
      '2D Rigid-Body Kinetic Ball Physics',
      'Harmonic Bumper Audio Pitch Scaling',
      'Drain-Saver Protective Barrier Matrix'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'cyber-ragdoll-demolition',
    title: 'Cybernetic Ragdoll Demolition: Crash Dummy',
    slug: 'cyber-ragdoll-demolition',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/cyber-ragdoll-demolition.svg',
    path: 'public/games/cyber-ragdoll-demolition/index.html',
    description: 'Launch a multi-jointed cybernetic crash dummy down hazardous slopes with explosive barrels, pinwheels, and girders across 45 demolition stages.',
    longDescription: 'Cybernetic Ragdoll Demolition features Verlet-integrated skeleton dynamics across 45 hazardous descent slopes. Fine-tune catapult launch angle and velocity, trigger explosive chain reactions, and maximize structural impact score.',
    rating: 4.8,
    ratingCount: 1390,
    plays: '108.5K',
    badge: 'Popular',
    tags: ['Ragdoll', 'Verlet Physics', 'Demolition', '45 Themes', 'Web Audio'],
    controls: 'W/S to adjust catapult elevation angle | Space or Launch button to fire crash dummy',
    features: [
      '45 Unique Demolition Slope Environments',
      'Multi-Joint Verlet Integration Skeleton',
      'Dynamic Explosive Barrels & Pinwheel Traps',
      'Impact Stress & Velocity Sound Synthesis'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'neon-elastic-sling',
    title: 'Neon Elastic Sling: Orbit Catapult',
    slug: 'neon-elastic-sling',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/neon-elastic-sling.svg',
    path: 'public/games/neon-elastic-sling/index.html',
    description: 'Slingshot quantum kinetic probes around planetary gravity wells to shatter fortified enemy orbital bunkers across 45 deep space stages.',
    longDescription: 'Neon Elastic Sling harnesses N-body gravitational celestial mechanics. Drag and release probes from your neon sling, calculate curved slingshot flybys around massive planets, and obliterate fortified enemy space station cores across 45 star systems.',
    rating: 4.9,
    ratingCount: 1620,
    plays: '124.7K',
    badge: 'Top Rated',
    tags: ['Orbital Slingshot', 'N-Body Gravity', 'Space Physics', '45 Themes', 'Web Audio'],
    controls: 'Click/Tap and drag probe back in slingshot, then release to launch into orbit',
    features: [
      '45 Planetary Orbital System Sectors',
      'N-Body Gravitational Attraction Physics',
      'Dotted Trajectory Arc Simulation',
      'Structural Shatter Sound Synthesizer'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'plasma-ballistics',
    title: 'Plasma Ballistics: Laser Artillery',
    slug: 'plasma-ballistics',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/plasma-ballistics.svg',
    path: 'public/games/plasma-ballistics/index.html',
    description: 'Command a plasma artillery tank on destructible 2D terrain, calculating barrel elevation, fire power, and wind vectors across 45 combat stages.',
    longDescription: 'Plasma Ballistics delivers strategic turn-based artillery duels. Account for shifting crosswinds, adjust barrel angle and firing force, and carve craters into destructible procedural hills to eradicate hostile AI tank batteries across 45 battlegrounds.',
    rating: 4.9,
    ratingCount: 1480,
    plays: '115.3K',
    badge: 'Tactical',
    tags: ['Artillery Duel', 'Destructible Terrain', 'Ballistics', '45 Themes', 'Web Audio'],
    controls: 'W/S for barrel angle | A/D for fire power | Space or Fire button to shoot plasma shell',
    features: [
      '45 Destructible Terrain Battlegrounds',
      'Dynamic Atmospheric Wind Resistance Vectors',
      'Procedural Circular Crater Deformation',
      'Cannon Blast & Deep Impact Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'quantum-billiards',
    title: 'Zero-G Pool: Quantum Billiards',
    slug: 'quantum-billiards',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/quantum-billiards.svg',
    path: 'public/games/quantum-billiards/index.html',
    description: 'Pocket glowing quantum spheres on frictionless octagonal tables with magnetic bumpers and gravitational pockets across 45 stages.',
    longDescription: 'Zero-G Pool brings frictionless momentum conservation to trick-shot billiards. Aim geometric bank shots off magnetic cushion boundaries and sink all quantum spheres into gravitational pockets before strokes expire.',
    rating: 4.8,
    ratingCount: 1310,
    plays: '102.9K',
    badge: 'New Release',
    tags: ['Billiards', 'Zero Friction', 'Elastic Collisions', '45 Themes', 'Web Audio'],
    controls: 'Click/Tap and drag back from white cue sphere to set aim angle and stroke power',
    features: [
      '45 Octagonal Felt & Glass Arenas',
      '2D Elastic Sphere Kinetic Momentum',
      'Gravitational Pocket Absorption Physics',
      'Resonant Ball-to-Ball Acoustic Synthesis'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'structural-bridge-engineer',
    title: 'Structural Bridge Engineer: Cyber Span',
    slug: 'structural-bridge-engineer',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/structural-bridge-engineer.svg',
    path: 'public/games/structural-bridge-engineer/index.html',
    description: 'Design and construct truss bridges across planetary chasms, then test structural integrity under heavy convoy traffic across 45 stages.',
    longDescription: 'Structural Bridge Engineer challenges your construction prowess. Connect carbon-fiber beams between anchor nodes within budget constraints, then initiate load testing to see real-time color-coded stress distribution as heavy cyber-trucks transit the span.',
    rating: 4.9,
    ratingCount: 1730,
    plays: '138.4K',
    badge: 'Editor Choice',
    tags: ['Bridge Builder', 'Truss Engineering', 'Stress Test', '45 Themes', 'Web Audio'],
    controls: 'Click nodes to connect structural beams within budget | Click Test Convoy to run simulation',
    features: [
      '45 Canyon & Chasm Geological Levels',
      'Finite Element Stress Calculation Engine',
      'Dynamic Green-to-Red Load Visualization',
      'Structural Snap & Fracture Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'fluid-particle-diverter',
    title: 'Water Stream Particle Diverter: Fluid Lab',
    slug: 'fluid-particle-diverter',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/fluid-particle-diverter.svg',
    path: 'public/games/fluid-particle-diverter/index.html',
    description: 'Divert hundreds of glowing fluid particles into chemical flasks by drawing deflector paddles across 45 hydrodynamic laboratory stages.',
    longDescription: 'Fluid Lab Diverter simulates hydrodynamic stream dynamics. Draw angled deflector paddles to channel continuous streams of liquid particles into target flasks, bypassing obstacles and filling beakers across 45 unique chemistry environments.',
    rating: 4.8,
    ratingCount: 1250,
    plays: '97.6K',
    badge: 'New Release',
    tags: ['Fluid Dynamics', 'SPH Particles', 'Hydrodynamics', '45 Themes', 'Web Audio'],
    controls: 'Click and drag to draw deflector paddles | Space to toggle fluid nozzle emitter',
    features: [
      '45 Hydrodynamic Laboratory Chambers',
      'Smoothed Particle Fluid Simulation',
      'Custom Angled Deflector Placement',
      'Liquid Droplet & Flask Bubbling Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'pendulum-wrecking-bot',
    title: 'Pendulum Wrecking Bot: Kinetic Destroyer',
    slug: 'pendulum-wrecking-bot',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/pendulum-wrecking-bot.svg',
    path: 'public/games/pendulum-wrecking-bot/index.html',
    description: 'Adjust cable winch length and release a massive electromagnetic pendulum wrecking ball to pulverize server rack towers across 45 stages.',
    longDescription: 'Pendulum Wrecking Bot simulates harmonic pendulum kinematics. Adjust cable length to alter oscillation frequency, release the heavy demolition sphere at maximum apex, and smash stacked server racks into rubble across 45 industrial sites.',
    rating: 4.9,
    ratingCount: 1590,
    plays: '121.8K',
    badge: 'Featured Physics',
    tags: ['Pendulum', 'Harmonic Motion', 'Demolition', '45 Themes', 'Web Audio'],
    controls: 'W/S to winch cable length | Space or Release button to swing wrecking ball',
    features: [
      '45 Industrial Demolition Sites',
      'Harmonic Pendulum Gravity & Kinematics',
      'Destructible Physical Block Towers',
      'Cable Ratchet & Heavy Impact Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'magnetic-polarity-balancer',
    title: 'Magnetic Polarity Balancer: Levitator',
    slug: 'magnetic-polarity-balancer',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/magnetic-polarity-balancer.svg',
    path: 'public/games/magnetic-polarity-balancer/index.html',
    description: 'Suspend a quantum magnetic core in mid-air between opposing electromagnetic coils, regulating real-time voltage across 45 chambers.',
    longDescription: 'Magnetic Polarity Balancer tests your control systems precision. Modulate coil voltage in real-time to counteract gravity and turbulence, keeping the sensitive quantum core suspended in the equilibrium target band for the required duration across 45 testing facilities.',
    rating: 4.8,
    ratingCount: 1340,
    plays: '104.1K',
    badge: 'Precision Sim',
    tags: ['Magnetic Levitation', 'Equilibrium', 'Control Systems', '45 Themes', 'Web Audio'],
    controls: 'W/Up to increase coil voltage | S/Down to decrease coil voltage',
    features: [
      '45 High-Voltage Magnetic Chambers',
      'Real-Time Electrodynamic Equilibrium Physics',
      'Turbulence Flux Perturbation Challenges',
      '60Hz Modulated Coil Hum & Spark Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'orbital-trebuchet',
    title: 'Orbital Trebuchet: Deep Space Hurler',
    slug: 'orbital-trebuchet',
    category: 'physics',
    categoryLabel: 'Cyber Physics & Simulators',
    thumbnail: 'assets/thumbnails/orbital-trebuchet.svg',
    path: 'public/games/orbital-trebuchet/index.html',
    description: 'Calibrate counterweight mass and release dynamics on a futuristic siege trebuchet to launch payloads into orbital fortresses across 45 stages.',
    longDescription: 'Orbital Trebuchet delivers authentic rotational counterweight mechanics in futuristic deep space environments. Balance counterweight tonnage against payload weight to achieve optimum release velocity and demolish fortified bastions across 45 planetary sectors.',
    rating: 4.9,
    ratingCount: 1670,
    plays: '128.5K',
    badge: 'Popular',
    tags: ['Trebuchet', 'Siege Engine', 'Rotational Kinematics', '45 Themes', 'Web Audio'],
    controls: 'A/D to adjust counterweight mass | Space or Trigger Pin button to fire trebuchet',
    features: [
      '45 Planetary Siege Outpost Sectors',
      'Rotational Kinematics & Angular Momentum',
      'Fortress Bastion Destruction Quotas',
      'Counterweight Drop & Distant Explosion Booms'
    ],
    releaseDate: '2026-09-22'
  }
];

// Add games, avoiding duplicates
newPhysicsGames.forEach(newGame => {
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

console.log('Successfully registered Category 6 (Physics) with 10 titles.');
console.log('Total Games in Catalog:', config.games.length);
