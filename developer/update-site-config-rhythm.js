/**
 * Next Games/Game — Register Category 9 (Rhythm) in Site Config
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

// Update 'all' category badge to 91 Games
const allCat = config.categories.find(c => c.id === 'all');
if (allCat) allCat.badge = '91 Games';

// Add or update 'rhythm' category
let rhythmCat = config.categories.find(c => c.id === 'rhythm');
if (!rhythmCat) {
  rhythmCat = {
    id: 'rhythm',
    label: 'Cyber Rhythm & Beat',
    badge: '10 Cyber Beats',
    icon: '🎵',
    description: '4-lane synthwave highway taps, interactive 16-pad drum machines, directional cyber saber slicers, FFT amplitude surfers, and 360-degree radial beat catchers.'
  };
  config.categories.push(rhythmCat);
} else {
  rhythmCat.label = 'Cyber Rhythm & Beat';
  rhythmCat.badge = '10 Cyber Beats';
  rhythmCat.icon = '🎵';
  rhythmCat.description = '4-lane synthwave highway taps, interactive 16-pad drum machines, directional cyber saber slicers, FFT amplitude surfers, and 360-degree radial beat catchers.';
}

const newRhythmGames = [
  {
    id: 'beat-highway',
    title: 'Beat Highway: 4-Lane Synthwave Tap',
    slug: 'beat-highway',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/beat-highway.svg',
    path: 'public/games/beat-highway/index.html',
    description: 'Hit descending neon rhythm notes across 4 highway tracks in perfect synchronization with synthesized music across 45 staged song levels.',
    longDescription: 'Beat Highway delivers pulse-pounding rhythm action with 4 perspective tracks. Time key presses to falling notes, chain multi-tier streak multipliers, and conquer 45 unique synthwave highway stages.',
    rating: 4.9,
    ratingCount: 1840,
    plays: '152.8K',
    badge: 'Featured Rhythm',
    tags: ['Rhythm', 'Guitar Hero', 'Synthwave', '45 Themes', 'Web Audio'],
    controls: 'Keys [D] [F] [J] [K] or click bottom lane buttons on beat',
    features: [
      '45 Unique Perspective Highway Biomes',
      'Procedural Multi-Oscillator Synth Music',
      'Multiplier Combo & Accuracy Windows (Perfect/Great/Good)',
      'Triple Shield Buffer System'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'neon-drum-machine',
    title: 'Neon Drum Machine: Precision Rhythm Hero',
    slug: 'neon-drum-machine',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/neon-drum-machine.svg',
    path: 'public/games/neon-drum-machine/index.html',
    description: 'Play interactive electronic drum pads following rhythmic timing prompts to replicate iconic drum breaks across 40 stages.',
    longDescription: 'Neon Drum Machine puts 16 synthesized drum pads and an active oscilloscope in your hands. Listen to pattern demos, memorize drum sequences, and repeat complex breakbeats across 40 hardware kit themes.',
    rating: 4.9,
    ratingCount: 1690,
    plays: '138.4K',
    badge: 'Sequencer',
    tags: ['Drum Machine', 'Sampler', 'Sequencer', '40 Themes', 'Web Audio'],
    controls: 'Click silicone pads or press keys [1-4, Q-R, A-F, Z-V] | Space to demo pattern',
    features: [
      '40 Distinct Hardware Drum Machine Aesthetics',
      'Real-Time Web Audio FFT Oscilloscope Display',
      '16 Synthesized Acoustic & Cyber Drum Voices',
      'Step-by-Step Rhythm Accuracy Grading'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'frequency-slicer',
    title: 'Frequency Slicer: Cyber Saber Beat',
    slug: 'frequency-slicer',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/frequency-slicer.svg',
    path: 'public/games/frequency-slicer/index.html',
    description: 'Slice approaching directional neon cube blocks in the indicated swipe direction to the rhythm of cyber beats across 45 stages.',
    longDescription: 'Frequency Slicer transforms directional rhythm slicing into an intense reflex arcade experience. Wield dual glowing sabers, swipe across incoming arrow cubes, and detonate sonic sparks across 45 laser arena environments.',
    rating: 4.9,
    ratingCount: 1980,
    plays: '164.2K',
    badge: 'Action Slicer',
    tags: ['Beat Saber', 'Slicer', 'Directional', '45 Themes', 'Web Audio'],
    controls: 'Mouse/touch swipe across approaching cubes | Arrow keys or WASD to slice',
    features: [
      '45 Unique Laser Arena Environments',
      'Dual Cyan & Magenta Saber Particle Dynamics',
      'Directional Arrow Detection & Combo Multipliers',
      'Sonic Whooshes & Bass Drop Synthesizer'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'soundwave-surfer',
    title: 'Soundwave Surfer: Audio Amplitude Rider',
    slug: 'soundwave-surfer',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/soundwave-surfer.svg',
    path: 'public/games/soundwave-surfer/index.html',
    description: 'Surf an undulating sine-wave ribbon generated in real-time by the frequency spectrum and amplitude of synthesized soundtracks across 40 stages.',
    longDescription: 'Soundwave Surfer combines wave physics with electronic music visualizers. Ride undulating sound waves on a futuristic hoverboard, jump to catch golden rhythm rings, and dodge voltage spikes across 40 audio biomes.',
    rating: 4.8,
    ratingCount: 1530,
    plays: '127.1K',
    badge: 'Popular',
    tags: ['Surfer', 'Audio Wave', 'Amplitude', '40 Themes', 'Web Audio'],
    controls: 'Space or Arrow Up to Jump Wave | Click canvas to leap',
    features: [
      '40 Frequency Spectrum Biome Environments',
      'Dynamic Sine-Wave Terrain Procedural Generation',
      'Golden Rhythm Ring Quotas & Score Multipliers',
      'Procedural Synth Harmonic Soundscape'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'pulse-conductor',
    title: 'Pulse Conductor: Orchestral Synth Duel',
    slug: 'pulse-conductor',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/pulse-conductor.svg',
    path: 'public/games/pulse-conductor/index.html',
    description: 'Conduct a cybernetic orchestra by tapping precise tempo meters, adapting to sudden tempo modulations and polyrhythms across 40 stages.',
    longDescription: 'Pulse Conductor puts your metronomic precision to the test. Tap in sync as the swinging pendulum reaches the golden tempo line, building orchestra harmony and unlocking triumphant chords across 40 concert halls.',
    rating: 4.8,
    ratingCount: 1470,
    plays: '119.8K',
    badge: 'Classical Synth',
    tags: ['Conductor', 'Metronome', 'Tempo', '40 Themes', 'Web Audio'],
    controls: 'Spacebar or Tap Conduct button when pendulum hits golden tempo line',
    features: [
      '40 Grand Futuristic Philharmonic Venues',
      'Harmonic Chord Web Audio Synthesis',
      'BPM Scaling from 85 to 180+ Metronomic Tempos',
      'Harmony Percentage Meter & Shield Safeguard'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'tempo-runner',
    title: 'Tempo Runner: Rhythm-Synced Platform Sprint',
    slug: 'tempo-runner',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/tempo-runner.svg',
    path: 'public/games/tempo-runner/index.html',
    description: 'High-speed platform runner where every jump, double-jump, and dash must land precisely on the beat across 45 stage tracks.',
    longDescription: 'Tempo Runner merges high-velocity infinite jumping with electronic dance beats. Jump in sync with expanding beat pulse rings to trigger soaring super-jumps across chasms in 45 city skyline tracks.',
    rating: 4.9,
    ratingCount: 1760,
    plays: '144.5K',
    badge: 'Rhythm Platformer',
    tags: ['Platformer', 'Runner', 'Tempo Sync', '45 Themes', 'Web Audio'],
    controls: 'Space, Arrow Up, or Click canvas to Rhythm Jump',
    features: [
      '45 Unique Electronic City Skyline Venues',
      'On-Beat Super Jump Boost Kinematics',
      'Expanding Pulsing Beat Indicator Rings',
      'Multi-Shield Chasm Recovery System'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'neon-dance-floor',
    title: 'Neon Dance Floor: Grid Memory DDR',
    slug: 'neon-dance-floor',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/neon-dance-floor.svg',
    path: 'public/games/neon-dance-floor/index.html',
    description: 'Step on a 3x3 glowing floor grid following rhythmic arrows and dance combinations displayed on screen across 45 dance stages.',
    longDescription: 'Neon Dance Floor brings the arcade DDR experience directly to the web. Match scrolling arrows to the top receptors using keyboard or 3x3 touch pads, maintaining massive combos across 45 world nightclub arenas.',
    rating: 4.9,
    ratingCount: 1890,
    plays: '158.3K',
    badge: 'DDR Arcade',
    tags: ['DDR', 'Dance Floor', '3x3 Grid', '45 Themes', 'Web Audio'],
    controls: 'Arrow keys / WASD / Space / Numpad or tap 3x3 dance pads',
    features: [
      '45 Global Nightclub & Disco Venues',
      '4-Track Scrolling Dance Arrow Engine',
      '3x3 Glowing Floor Tile Interactive Array',
      'Four-on-the-Floor Synth House Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'bassline-defender',
    title: 'Bassline Defender: BPM Turret Sync',
    slug: 'bassline-defender',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/bassline-defender.svg',
    path: 'public/games/bassline-defender/index.html',
    description: 'Fire sound cannons at incoming geometric aliens where cannon firing rate and damage are amplified by tapping on musical beats across 45 stages.',
    longDescription: 'Bassline Defender combines 360-degree turret defense with musical rhythm timing. Aim at converging sonic swarms and fire on the bass beat to unleash devastating high-damage shockwaves across 45 perimeter stages.',
    rating: 4.9,
    ratingCount: 1810,
    plays: '149.6K',
    badge: 'BPM Shooter',
    tags: ['Turret', 'Defense', 'BPM Sync', '45 Themes', 'Web Audio'],
    controls: 'Move mouse/finger to aim 360° | Space or click to fire sonic blast',
    features: [
      '45 Defensive Sound Perimeter Environments',
      'On-Beat Concussive Bass Shockwave Cannon',
      'Dynamic Swarm AI & Radial Wave Progression',
      'Procedural Sub-Bass Kick & Laser Audio'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'chiptune-piano-tiles',
    title: 'Chiptune Piano Tiles: Cyber Virtuoso',
    slug: 'chiptune-piano-tiles',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/chiptune-piano-tiles.svg',
    path: 'public/games/chiptune-piano-tiles/index.html',
    description: 'Tap falling piano keys as they scroll down 4 vertical columns without tapping empty spaces across 45 classical chiptune stages.',
    longDescription: 'Chiptune Piano Tiles fuses famous classical melodies with retro 8-bit square-wave synthesis. Tap descending neon tiles precisely on the hit line to render authentic musical masterpieces across 45 concertos.',
    rating: 4.9,
    ratingCount: 1940,
    plays: '161.0K',
    badge: 'Piano Tiles',
    tags: ['Piano Tiles', 'Virtuoso', 'Chiptune', '45 Themes', 'Web Audio'],
    controls: 'Keys [D] [F] [J] [K] or click falling tiles on the hitline',
    features: [
      '45 Classical & Cyber Piano Repertoires',
      'Authentic 8-Bit Square-Wave Frequency Synthesis',
      'Accelerating Tempo & Multi-Tile Cascade Challenges',
      'Triple Shield Safe Haven Protection'
    ],
    releaseDate: '2026-09-22'
  },
  {
    id: 'rhythm-revolver',
    title: 'Rhythm Revolver: 360-Degree Radial Beat Spinner',
    slug: 'rhythm-revolver',
    category: 'rhythm',
    categoryLabel: 'Cyber Rhythm & Beat',
    thumbnail: 'assets/thumbnails/rhythm-revolver.svg',
    path: 'public/games/rhythm-revolver/index.html',
    description: 'Rotate a defensive shield ring around a central core to catch converging rhythm sparks arriving from 360-degree angles across 45 stages.',
    longDescription: 'Rhythm Revolver delivers mesmerizing circular rhythm defense. Rotate the 60-degree shield ring to intercept incoming rhythm sparks rushing inward from all directions across 45 orbital radar sectors.',
    rating: 4.8,
    ratingCount: 1670,
    plays: '136.7K',
    badge: 'Radial Spinner',
    tags: ['Radial', '360 Beat', 'Spinner', '45 Themes', 'Web Audio'],
    controls: 'Move mouse around center or use Left/Right arrows to rotate shield',
    features: [
      '45 Futuristic Circular Radar Themes',
      '360-Degree Converging Spark Kinematics',
      'Harmonic Spark Interception Sound Effects',
      'Tri-Shield Core Breach Safeguard'
    ],
    releaseDate: '2026-09-22'
  }
];

// Append or update new games in config.games
newRhythmGames.forEach(newGame => {
  const idx = config.games.findIndex(g => g.id === newGame.id);
  if (idx >= 0) {
    config.games[idx] = newGame;
  } else {
    config.games.push(newGame);
  }
});

// Write to site-config.json
fs.writeFileSync(jsonPath, JSON.stringify(config, null, 2), 'utf-8');
console.log('Updated config/site-config.json with Category 9 and 10 Rhythm games.');

// Write to site-config.js
const jsContent = `// Auto-generated site configuration for direct browser consumption\nwindow.__SITE_CONFIG__ = ${JSON.stringify(config, null, 2)};\n`;
fs.writeFileSync(jsPath, jsContent, 'utf-8');
console.log('Updated config/site-config.js with Category 9 and 10 Rhythm games.');
console.log(`Total games registered: ${config.games.length}`);
