/**
 * ============================================================================
 * NEXT GAMES/GAME — MASTER APPLICATION CORE
 * ============================================================================
 * Architectural Role:
 *   - Client-side Orchestrator & Dynamic Bootstrapper
 *   - Fetches & parses centralized manifest (`config/site-config.json`)
 *   - Renders Hero Showcase, Category Filter Pills, & Responsive Game Matrix
 *   - Controls Isolated HTML5 Iframe Player Modal (Lifecycle, Fullscreen, Cleanup)
 *   - Injects Schema.org JSON-LD structured data (VideoGame, FAQPage, WebSite)
 *   - Manages Real-time Search, Multi-criteria Filtering, and Keyboard Accessibility
 * ============================================================================
 */

(function () {
  'use strict';

  /**
   * Application State Container
   * Centralized reactive state for data cache, filter states, and active modal references.
   */
  const AppState = {
    config: null,
    games: [],
    categories: [],
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    activeGame: null,
    lastFocusedElement: null
  };

  /**
   * DOM Elements Cache
   * Performance optimization: Query DOM nodes once during bootstrap.
   */
  const DOM = {
    // Header & Search
    siteHeader: document.getElementById('siteHeader'),
    headerSearchInput: document.getElementById('headerSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),

    // Hero Showcase
    heroShowcase: document.getElementById('heroShowcase'),
    heroBadgeText: document.getElementById('heroBadgeText'),
    heroTitle: document.getElementById('heroTitle'),
    heroDescription: document.getElementById('heroDescription'),
    heroTags: document.getElementById('heroTags'),
    heroThumbnail: document.getElementById('heroThumbnail'),
    heroPlayBtn: document.getElementById('heroPlayBtn'),

    // Controls & Filtering
    categoryBar: document.getElementById('categoryBar'),
    resultsCount: document.getElementById('resultsCount'),
    visibleCount: document.getElementById('visibleCount'),
    totalCount: document.getElementById('totalCount'),
    sortSelect: document.getElementById('sortSelect'),

    // Games Gallery
    gamesGrid: document.getElementById('gamesGrid'),
    gridLoading: document.getElementById('gridLoading'),
    emptyState: document.getElementById('emptyState'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // FAQ & Footer
    faqAccordion: document.getElementById('faqAccordion'),
    footerCategoriesList: document.getElementById('footerCategoriesList'),

    // Interactive Iframe Modal
    gameModal: document.getElementById('gameModal'),
    modalWrapper: document.querySelector('.modal-wrapper'),
    modalGameTitle: document.getElementById('modalGameTitle'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    modalControlsText: document.getElementById('modalControlsText'),
    modalDescriptionText: document.getElementById('modalDescriptionText'),
    gameIframe: document.getElementById('gameIframe'),
    iframeLoader: document.getElementById('iframeLoader'),
    modalReloadBtn: document.getElementById('modalReloadBtn'),
    modalFullscreenBtn: document.getElementById('modalFullscreenBtn'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),

    // SEO Schema Hook
    jsonLdSchema: document.getElementById('jsonLdSchema')
  };

  /**
   * ==========================================================================
   * 1. CONFIGURATION & DATA INGESTION PIPELINE
   * ==========================================================================
   * Fetches the central JSON manifest from `config/site-config.json`.
   * If a fetch error occurs (e.g., file:// protocol restrictions in local previews),
   * provides a robust built-in fallback dataset ensuring zero downtime.
   */
  async function loadConfiguration() {
    // 1. If preloaded via script tag (e.g. file:// local protocol preview), load instantly
    if (window.__SITE_CONFIG__ && Array.isArray(window.__SITE_CONFIG__.games) && window.__SITE_CONFIG__.games.length > 0) {
      return window.__SITE_CONFIG__;
    }

    // 2. Fetch dynamic configuration from JSON
    try {
      const response = await fetch('config/site-config.json');
      if (!response.ok) {
        throw new Error(`HTTP error fetching config! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.warn('[Next Games/Game] Notice: Remote fetch failed, utilizing internal embedded manifest.', err);
      return getFallbackConfig();
    }
  }

  /**
   * Embedded fallback manifest guaranteeing 100% offline functionality.
   */
  function getFallbackConfig() {
    if (typeof window !== "undefined" && window.__SITE_CONFIG__) return window.__SITE_CONFIG__;
    return {
  "_comment_manifest": "Next Games/Game dynamic portal configuration manifest. Controls branding, metadata, navigation, and game catalog.",
  "siteMetadata": {
    "siteName": "Next Games/Game",
    "siteTagline": "The Next Frontier of Web3 & HTML5 Gaming",
    "siteDescription": "Next Games/Game delivers adrenaline-fueled, zero-latency HTML5 web games. Experience cutting-edge arcade action, neon reflex runners, and futuristic tactical challenges directly in your browser with zero installation.",
    "siteUrl": "https://next.gamer.free",
    "siteLogo": "assets/logo.svg",
    "favicon": "assets/logo.svg",
    "themeColor": "#00f0ff",
    "accentColor": "#ff007f",
    "author": "Next Games/Game Engineering Team",
    "publisher": "Next Games/Game Interactive",
    "contactEmail": "rambirworkofficial@gmail.com",
    "contactPhone": "+91-9992180680",
    "establishedYear": 2026,
    "socialLinks": {
      "twitter": "https://twitter.com/NextGamesGame",
      "discord": "https://discord.gg/nextgames",
      "github": "https://github.com/rambir-bhatiwal/next-gamer-portal"
    },
    "seoKeywords": [
      "HTML5 games",
      "free online games",
      "browser games",
      "cyberpunk web games",
      "neon arcade games",
      "Next Games Game",
      "instant play games",
      "no download gaming",
      "webgl games"
    ]
  },
  "featuredGameId": "cyber-runner",
  "categories": [
    {
      "id": "all",
      "label": "All Games",
      "badge": "24 Games",
      "icon": "🎮",
      "description": "Explore the complete library of cutting-edge browser titles."
    },
    {
      "id": "racing",
      "label": "High-Octane Racing",
      "badge": "45-Track Sprints",
      "icon": "🏎️",
      "description": "Supersonic pseudo-3D highways, isometric drifts, orbital loops, and relativistic particle accelerators."
    },
    {
      "id": "action",
      "label": "Action & Reflex",
      "badge": "High Velocity",
      "icon": "⚡",
      "description": "Fast-twitch reflex challenges and high-octane speedruns."
    },
    {
      "id": "arcade",
      "label": "Arcade Retro",
      "badge": "10 Arcade Hits",
      "icon": "🕹️",
      "description": "Reimagined cabinet physics meets futuristic particle dynamics."
    },
    {
      "id": "strategy",
      "label": "Tactical & Sci-Fi",
      "badge": "Brain Power",
      "icon": "🧠",
      "description": "Strategic grid manipulation and cybernetic logic puzzles."
    },
    {
      "id": "space",
      "label": "Space & Flight",
      "badge": "Zero Gravity",
      "icon": "🚀",
      "description": "Orbital dogfights and deep space vector navigation."
    }
  ],
  "games": [
    {
      "id": "cyber-runner",
      "title": "Cyber Runner 2099",
      "slug": "cyber-runner",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/cyber-runner.svg",
      "path": "public/games/cyber-runner/index.html",
      "description": "Navigate a supersonic cyber-cycle across glowing highway skyways. Dodge photon barriers, activate quantum overdrive, and set new high scores in this procedural neon sprint.",
      "longDescription": "Cyber Runner 2099 puts your reflexes to the ultimate test in a sprawling neo-metropolis. Jump over high-voltage barriers, slide under scanning defense turrets, and collect energy cells to boost your acceleration multiplier. Features procedural track generation and dynamic synth beats.",
      "rating": 4.9,
      "ratingCount": 1840,
      "plays": "142.8K",
      "badge": "Trending",
      "tags": ["Endless Runner", "Cyberpunk", "Reflex", "Neon", "Audio Synthesizer"],
      "controls": "Spacebar or Up Arrow to Jump | Down Arrow to Slide | Touch controls on mobile",
      "features": ["Procedural Obstacle Streams", "Reactive Audio Engine", "Local High-Score Persistence", "Dynamic Speed Scaling"],
      "releaseDate": "2026-06-18",
      "featured": true
    },
    {
      "id": "neon-pong",
      "title": "Neon Pong: Hyper Duel",
      "slug": "neon-pong",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/neon-pong.svg",
      "path": "public/games/neon-pong/index.html",
      "description": "Reinvent the classic paddle duel with hyper-velocity vector physics, kinetic deflection curves, and an adaptive cybernetic AI rival that learns from your spin.",
      "longDescription": "Step into the Neon Arena where paddle sports meet particle physics. Neon Pong features elastic collision dynamics, power smash triggers, trailing energy vectors, and three levels of neural AI difficulty. Can you out-rally the AI at maximum ball velocity?",
      "rating": 4.8,
      "ratingCount": 1210,
      "plays": "98.4K",
      "badge": "Classic",
      "tags": ["Arcade", "Physics", "AI Opponent", "Multi-Speed", "Retro"],
      "controls": "W/S Keys or Up/Down Arrows to Move Paddle | Mouse/Touch Drag Supported",
      "features": ["Adaptive Neural AI", "Dynamic Ball Spin Physics", "Particle Shockwaves", "First to 7 Points Wins"],
      "releaseDate": "2026-05-10",
      "featured": false
    },
    {
      "id": "quantum-matrix",
      "title": "Quantum Matrix Hacker",
      "slug": "quantum-matrix",
      "category": "strategy",
      "categoryLabel": "Tactical & Sci-Fi",
      "thumbnail": "assets/thumbnails/quantum-matrix.svg",
      "path": "public/games/quantum-matrix/index.html",
      "description": "Infiltrate high-security quantum core nodes by matching data sequences, clearing firewall anomalies, and decoding encrypted memory streams under strict time limits.",
      "longDescription": "A sleek tactical puzzle game set inside a quantum supercomputer mainframe. Rotate, swap, and chain quantum data packets to destabilize hostile cryptographic subroutines. Every stage introduces tighter clock countdowns and shifting firewall matrices.",
      "rating": 4.7,
      "ratingCount": 940,
      "plays": "76.2K",
      "badge": "Strategy Pick",
      "tags": ["Puzzle", "Logic", "Hacking", "Time Attack", "Cyberpunk"],
      "controls": "Mouse Click / Touch to Select and Swap Adjacent Quantum Nodes",
      "features": ["Chain Reaction Combos", "Firewall Surge Mechanics", "Cryptographic Tier Progression", "Synth Audio Stings"],
      "releaseDate": "2026-07-02",
      "featured": false
    },
    {
      "id": "hyper-space-drift",
      "title": "HyperSpace Drift: Zero-G",
      "slug": "hyper-space-drift",
      "category": "space",
      "categoryLabel": "Space & Flight",
      "thumbnail": "assets/thumbnails/hyper-space-drift.svg",
      "path": "public/games/hyper-space-drift/index.html",
      "description": "Pilot an agile vector interceptor through hazardous asteroid clusters. Master Newtonian zero-gravity drift physics, unleash twin plasma cannons, and survive orbital collapse.",
      "longDescription": "Experience genuine zero-friction deep space navigation. Rotate your ship, fire thrust vectors for momentum, and blast rogue spatial debris into harmless cosmic dust. Features split-asteroid mechanics, hyper-drive warp jumps, and dazzling particle explosions.",
      "rating": 4.9,
      "ratingCount": 2150,
      "plays": "189.5K",
      "badge": "Editor's Choice",
      "tags": ["Space Shooter", "Newtonian Physics", "Drift", "Vector Graphics", "Survival"],
      "controls": "Left/Right Arrows or A/D to Rotate | Up Arrow or W for Thrusters | Space to Fire Plasma",
      "features": ["Newtonian Inertia Engine", "Fragmenting Asteroids", "Hyperspace Jump Feature", "Screen Wrap Boundaries"],
      "releaseDate": "2026-04-20",
      "featured": true
    },
    {
      "id": "orbital-defense",
      "title": "Orbital Defense: Sentinel",
      "slug": "orbital-defense",
      "category": "space",
      "categoryLabel": "Space & Flight",
      "thumbnail": "assets/thumbnails/orbital-defense.svg",
      "path": "public/games/orbital-defense/index.html",
      "description": "Command a 360-degree orbital shield station orbiting Earth. Intercept incoming hyper-velocity orbital meteors and rogue satellites before planetary shield failure.",
      "longDescription": "Station Sentinel is humanity's last atmospheric safeguard. Rotate your defensive battery 360 degrees around the planetary core, launching precision interceptor projectiles at converging threats. Manage energy recharge rates and deploy EMP shockwaves when swarmed.",
      "rating": 4.6,
      "ratingCount": 780,
      "plays": "64.1K",
      "badge": "Popular",
      "tags": ["Defense", "360 Shooter", "Orbital", "Endless Waves", "Tactics"],
      "controls": "Mouse Aim or Left/Right Keys to Rotate Cannon | Click or Space to Fire",
      "features": ["360 Degree Rotational Gameplay", "Planetary Health Gauge", "EMP Overload Ability", "Wave Difficulty Scaling"],
      "releaseDate": "2026-08-01",
      "featured": false
    },
    {
      "id": "chrono-switch",
      "title": "Chrono Switch: Phase Shift",
      "slug": "chrono-switch",
      "category": "action",
      "categoryLabel": "Action & Reflex",
      "thumbnail": "assets/thumbnails/chrono-switch.svg",
      "path": "public/games/chrono-switch/index.html",
      "description": "Phase-shift between Cyan and Magenta energy polarities in real-time to traverse lethal electromagnetic grids and absorb matching particle streams.",
      "longDescription": "Chrono Switch takes rhythmic reflex gameplay to an intoxicating new plane. Your particle core traverses high-speed tracks where red and blue laser gates await. Shift polarity instantaneously: match the beam color to absorb energy and score bonus points; hit the wrong phase and face immediate containment failure.",
      "rating": 4.8,
      "ratingCount": 1130,
      "plays": "85.3K",
      "badge": "New Release",
      "tags": ["Color Shift", "Rhythm Reflex", "Neon", "Polarity", "High Speed"],
      "controls": "Spacebar or Tap to Switch Polarity (Cyan / Magenta)",
      "features": ["Dual Polarity Mechanics", "Color-Matched Absorption", "Adrenaline Speed Ramping", "Dynamic Visual Glows"],
      "releaseDate": "2026-09-12",
      "featured": false
    },
    {
      "id": "cosmic-gate-runner",
      "title": "Cosmic Gate Runner",
      "slug": "cosmic-gate-runner",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/cosmic-gate-runner.svg",
      "path": "public/games/cosmic-gate-runner/index.html",
      "description": "Pilot a supersonic hyper-craft through 45 unique planetary and stellar environments with pseudo-3D road math, turbo gates, and dynamic audio.",
      "longDescription": "Cosmic Gate Runner pushes your perception to relativistic limits. Navigate through 45 distinct thematic environments from Neon Cyber-Grid to Bioluminescent Caves and Omega Point Singularity. Pass target gates, dodge hazardous energy walls, and trigger turbo boosts.",
      "rating": 4.9,
      "ratingCount": 1950,
      "plays": "156.2K",
      "badge": "Featured",
      "tags": ["Racing", "Pseudo-3D", "Warp Speed", "Neon", "45 Levels"],
      "controls": "Left/Right or A/D to Steer | Touch to Navigate on Mobile",
      "features": ["45 Thematic Environments", "Pseudo-3D Projection", "Local High-Score & Level Persistence", "Web Audio API Synthesis"],
      "releaseDate": "2026-09-22",
      "featured": true
    },
    {
      "id": "isometric-precision-racer",
      "title": "Isometric Precision Racer",
      "slug": "isometric-precision-racer",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/isometric-precision-racer.svg",
      "path": "public/games/isometric-precision-racer/index.html",
      "description": "Master precision drift angles across 45 unique isometric raceways. Race against target ghost times and apex corners with realistic counter-steer physics.",
      "longDescription": "Experience tactile isometric drift physics with 2:1 projection track geometry. Slide through 45 distinct thematic circuits from Neon Rooftops to Molten Foundries and Glacial Iceways. Refine your entry angle to conquer ghost time-trial challenges.",
      "rating": 4.8,
      "ratingCount": 1420,
      "plays": "112.5K",
      "badge": "Drift King",
      "tags": ["Racing", "Isometric", "Drift", "Time Attack", "45 Levels"],
      "controls": "Arrow Keys / WASD to Steer & Throttle | Space to Drift | Touch on Mobile",
      "features": ["2:1 Isometric Projection", "45 Unique Track Biomes", "Tactile Handbrake Drift Dynamics", "Web Audio API Engine & Squeal"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "neon-horizon",
      "title": "Neon Horizon: Retro Synthwave",
      "slug": "neon-horizon",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/neon-horizon.svg",
      "path": "public/games/neon-horizon/index.html",
      "description": "Classic arcade scaling highway racer with curved pseudo-3D road math, AI traffic dodging, near-miss combo multipliers, and 45 sunset horizons.",
      "longDescription": "An exhilarating homage to classic scaling arcade racers. Blast down 45 uniquely themed highways into glowing synthwave suns, dodging dense traffic streams and chaining high-speed near-miss bonuses. Features procedural synthwave arpeggio music.",
      "rating": 4.9,
      "ratingCount": 2240,
      "plays": "178.9K",
      "badge": "Arcade Master",
      "tags": ["Racing", "Outrun", "Synthwave", "Retro Highway", "45 Levels"],
      "controls": "Left/Right or A/D to Steer | Up/W to Accelerate | Down/S to Brake | Touch Supported",
      "features": ["Curved Road Perspective Math", "45 Environmental Horizons", "Dynamic AI Traffic Streams", "Procedural Synthwave Soundtrack"],
      "releaseDate": "2026-09-22",
      "featured": true
    },
    {
      "id": "quantum-velocity",
      "title": "Quantum Velocity: Sub-Atomic GP",
      "slug": "quantum-velocity",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/quantum-velocity.svg",
      "path": "public/games/quantum-velocity/index.html",
      "description": "Pilot a relativistic sub-atomic particle through 45 electromagnetic accelerator chambers, switching polarities (+/-) to absorb charges and dodge antimatter.",
      "longDescription": "Take control of an energized micro-particle accelerating toward the speed of light. Invert polarity instantly with Spacebar to match positive and negative electron charges, maintaining coherence through 45 distinct sub-atomic chambers.",
      "rating": 4.7,
      "ratingCount": 1180,
      "plays": "89.4K",
      "badge": "Sci-Fi Speed",
      "tags": ["Racing", "Quantum", "Relativistic", "Slalom", "45 Levels"],
      "controls": "Left/Right or A/D to Steer | Space or Tap to Invert Polarity (+/-)",
      "features": ["Relativistic Accelerator Mechanics", "45 Sub-Atomic Biomes", "Charge Polarity Phase Inversion", "Doppler Web Audio Resonance"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "cyber-drift",
      "title": "Cyber Drift: Tokyo Neo-Alley",
      "slug": "cyber-drift",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/cyber-drift.svg",
      "path": "public/games/cyber-drift/index.html",
      "description": "Top-down urban alley drift challenge across 45 unique cyberpunk city districts. Counter-steer through tight corners to rack up massive drift multiplier combos.",
      "longDescription": "Master vehicle inertia, slip angles, and tire smoke dynamics in the neon backstreets of Neo-Tokyo. Slide through 45 distinct city districts from Akihabara to Shinjuku, dodging delivery obstacles and setting record drift points before the clock expires.",
      "rating": 4.8,
      "ratingCount": 1640,
      "plays": "134.1K",
      "badge": "Trending",
      "tags": ["Racing", "Top-Down", "Drift", "Tokyo", "45 Levels"],
      "controls": "Arrow Keys / WASD to Drive | Space for Handbrake Drift | Touch Drag on Mobile",
      "features": ["Inertial Drift Slip Physics", "45 Cyberpunk District Aesthetics", "Tire Smoke Particle Simulation", "Procedural FM Tire Squeal Synth"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "graviton-loop",
      "title": "Graviton Loop: Orbital Roller",
      "slug": "graviton-loop",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/graviton-loop.svg",
      "path": "public/games/graviton-loop/index.html",
      "description": "360-degree pipe racer inside a futuristic orbital transport pipeline. Roll around the inner circumference, dodge rotating laser scaffolding, and collect plasma orbs.",
      "longDescription": "Defy gravity inside cylindrical space conduits stretching across 45 planetary sectors. Rotate 360 degrees around the inner perimeter, boost through repair scaffolding, and collect energy orbs to replenish hull integrity.",
      "rating": 4.7,
      "ratingCount": 1310,
      "plays": "98.7K",
      "badge": "360 Reflex",
      "tags": ["Racing", "360 Pipe", "Orbital", "Zero-G", "45 Levels"],
      "controls": "Left/Right or A/D to Rotate 360° | Space or Up to Boost | Touch Drag on Mobile",
      "features": ["360-Degree Radial Navigation", "45 Conduit Thematic Environments", "Dynamic Laser Scaffolding Hazards", "Sub-Bass Thruster Audio Synthesis"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "solar-wind-sprint",
      "title": "Solar Wind Sprint: Asteroid Slalom",
      "slug": "solar-wind-sprint",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/solar-wind-sprint.svg",
      "path": "public/games/solar-wind-sprint/index.html",
      "description": "Ride high-energy stellar photon currents aboard a solar sail craft across 45 unique star systems. Trim your sails, slalom through asteroid ring gates, and clear the corona boundary.",
      "longDescription": "Harness photonic radiation pressure to surf supersonic stellar winds. Trim your glowing solar sail angles to carve through asteroid belts across 45 unique stellar environments, clearing slalom gates at over 1,000 km/s.",
      "rating": 4.8,
      "ratingCount": 1530,
      "plays": "119.8K",
      "badge": "Cosmic Run",
      "tags": ["Racing", "Solar Sail", "Space Slalom", "Photonic", "45 Levels"],
      "controls": "Left/Right or A/D to Angle Sail & Slalom | Space or Up for Photon Boost",
      "features": ["Photonic Sail Trimming Dynamics", "45 Stellar Biome Skyboxes", "Asteroid Ring Slalom Gates", "Ambient Cosmic Soundscapes"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "hyper-maglev",
      "title": "Hyper Maglev: Monorail Blitz",
      "slug": "hyper-maglev",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/hyper-maglev.svg",
      "path": "public/games/hyper-maglev/index.html",
      "description": "Command a 600km/h supersonic maglev train hurtling across 4-rail skyways across 45 transit biomes. Switch rails to dodge repair drones and collect magnetic battery cells.",
      "longDescription": "Take the controls of a supersonic bullet train connecting remote megacities across 45 transit sectors. Rapidly switch across 4 parallel magnetic guide rails, dodging maintenance drones and recharging battery cells before terminal arrival.",
      "rating": 4.9,
      "ratingCount": 1870,
      "plays": "148.5K",
      "badge": "High Velocity",
      "tags": ["Racing", "Maglev", "Multi-Track", "Bullet Train", "45 Levels"],
      "controls": "Left/Right or A/D to Switch Rail Tracks | Down or S for Magnetic Brake | Touch Left/Right",
      "features": ["4-Rail Parallel Switching", "45 Unique Megacity Transit Biomes", "Battery Energy Management", "Web Audio Rail Clack & Hum"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "tachyon-overdrive",
      "title": "Tachyon Overdrive: Temporal Time-Trial",
      "slug": "tachyon-overdrive",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/tachyon-overdrive.svg",
      "path": "public/games/tachyon-overdrive/index.html",
      "description": "Temporal checkpoint racing across 45 chronological eras. If you crash or take a suboptimal corner, hold Spacebar to engage Tachyon Rewind and reverse up to 3 seconds of time!",
      "longDescription": "Bypass temporal limits with tachyon rewind capabilities. Race through 45 chronological eras from ancient Megaliths to Dying Cosmos 5000. Hold Spacebar to rewind position, angle, and clock up to 3 seconds in reverse to master every apex.",
      "rating": 4.8,
      "ratingCount": 1720,
      "plays": "139.2K",
      "badge": "Time Warper",
      "tags": ["Racing", "Time Rewind", "Temporal", "Time Attack", "45 Levels"],
      "controls": "Arrow Keys / WASD to Steer & Throttle | Spacebar (Hold) to REWIND TIME | Touch on Mobile",
      "features": ["3-Second Temporal Rewind Ring Buffer", "45 Chronological Eras & Themes", "Strict Time-Trial Checkpoints", "Reversed Audio Envelope Synthesis"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "plasma-hydrofoil",
      "title": "Plasma Hydrofoil: Cyberpunk Waterway",
      "slug": "plasma-hydrofoil",
      "category": "racing",
      "categoryLabel": "High-Octane Racing",
      "thumbnail": "assets/thumbnails/plasma-hydrofoil.svg",
      "path": "public/games/plasma-hydrofoil/index.html",
      "description": "Electrified hydrofoil jet-ski racing across 45 illuminated cyberpunk canal environments. Hit water ramps for aerial stunt combos and carve through wake currents to reach the ocean terminal.",
      "longDescription": "Carve through the neon canals of Neo-Venice, bioluminescent swamps, and industrial spillways across 45 unique aquatic environments. Launch off ramp crests, execute mid-air stunts, and master water friction drifting.",
      "rating": 4.8,
      "ratingCount": 1610,
      "plays": "126.7K",
      "badge": "Water Drift",
      "tags": ["Racing", "Hydrofoil", "Water Physics", "Stunt Jumps", "45 Levels"],
      "controls": "Left/Right or A/D to Carve Water | Up/W for Throttle | Space to Handbrake Wake Drift",
      "features": ["Buoyancy & Wave Displacement Physics", "45 Canal & Waterway Biomes", "Ramp Aerial Stunt Scoring", "Procedural Water Splash Audio"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "retro-grid-invaders",
      "title": "Retro Grid Invaders: Alien Incursion",
      "slug": "retro-grid-invaders",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/retro-grid-invaders.svg",
      "path": "public/games/retro-grid-invaders/index.html",
      "description": "Defend orbital sectors against cascading alien armadas across 45 atmospheric defense sectors. Take cover behind destructible nano-bunkers and blast mystery command ships.",
      "longDescription": "Retro Grid Invaders elevates the legendary fixed-shooter with smooth vector rendering, 45 distinct atmospheric sectors, destructible shielding bunkers, marching alien waves, and Web Audio API synthesized laser audio.",
      "rating": 4.9,
      "ratingCount": 2150,
      "plays": "185.4K",
      "badge": "Alien Defense",
      "tags": ["Arcade", "Space Invaders", "Fixed Shooter", "Retro", "45 Levels"],
      "controls": "A/D or Arrow Keys to Move | Spacebar to Fire | Touch Buttons on Mobile",
      "features": ["Marching Vector Alien Squads", "45 Atmospheric Sector Themes", "Destructible Particle Bunkers", "Procedural Laser Synthesis"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "helix-breaker",
      "title": "Helix Breaker: Cybernetic Breakout",
      "slug": "helix-breaker",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/helix-breaker.svg",
      "path": "public/games/helix-breaker/index.html",
      "description": "Shatter high-density data matrices across 45 unique brick architecture levels. Collect multi-ball overcharges, laser blaster paddles, and dynamic magnetic grips.",
      "longDescription": "A revolutionary neon breakout experience featuring realistic deflection curves, 45 procedural brick theme layouts, explosive multi-ball triggers, and rhythmic procedural Web Audio API percussion.",
      "rating": 4.8,
      "ratingCount": 1980,
      "plays": "164.2K",
      "badge": "Brick Crusher",
      "tags": ["Arcade", "Breakout", "Paddle", "Physics", "45 Levels"],
      "controls": "Mouse / Touch to Steer Paddle | Space to Launch Ball | Left Click to Fire Lasers",
      "features": ["Dynamic Spin Deflection Physics", "45 Matrix Brick Architectures", "Multi-Ball & Laser Blasters", "Procedural Web Audio API Chimes"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "asteroid-shatter",
      "title": "Asteroid Shatter: Deep Space Vector",
      "slug": "asteroid-shatter",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/asteroid-shatter.svg",
      "path": "public/games/asteroid-shatter/index.html",
      "description": "Navigate deep space asteroid fields with 360-degree Newtonian inertia across 45 celestial nebula sectors. Blast drifting space rocks and out-maneuver hostile alien scout saucers.",
      "longDescription": "Full 360-degree vector physics simulation inspired by the arcade golden era. Thrust, drift, and shatter massive crystalline asteroids into fragments across 45 distinct starfield and nebula environments.",
      "rating": 4.9,
      "ratingCount": 2210,
      "plays": "192.8K",
      "badge": "Zero-G Vector",
      "tags": ["Arcade", "Asteroids", "Physics", "Space", "45 Levels"],
      "controls": "Left/Right or A/D to Rotate | Up/W for Thruster | Spacebar to Fire Vector Cannons | Shift for Hyperspace",
      "features": ["360° Newtonian Vector Inertia", "45 Celestial Nebula Themes", "Splitting Polygon Asteroids", "Hostile Hunter Saucers"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "cyber-snake-3000",
      "title": "Cyber Snake 3000: Quantum Labyrinth",
      "slug": "cyber-snake-3000",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/cyber-snake-3000.svg",
      "path": "public/games/cyber-snake-3000/index.html",
      "description": "Pilot an electrified cyber-serpent across 45 motherboard PCB labyrinth sectors. Consume overclock nodes, weave through microchip walls, and hit target data quotas to clear stages.",
      "longDescription": "Guide the high-speed data serpent across 45 intricate PCB circuit stages. Navigate labyrinth walls, collect golden overclock bits, manage tail collisions, and unlock progressive motherboard architectures.",
      "rating": 4.8,
      "ratingCount": 1790,
      "plays": "153.6K",
      "badge": "PCB Slither",
      "tags": ["Arcade", "Snake", "Labyrinth", "Retro", "45 Levels"],
      "controls": "Arrow Keys / WASD / Swipe Gestures to Steer Cyber Snake",
      "features": ["Stage Quota Level Progression", "45 Motherboard PCB Themes", "Dynamic Labyrinth Wall Matrices", "Overclock Frequency Audio"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "pixel-drop",
      "title": "Pixel Drop: Tetromino Matrix",
      "slug": "pixel-drop",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/pixel-drop.svg",
      "path": "public/games/pixel-drop/index.html",
      "description": "Stack and clear neon tetromino blocks across 45 stage challenge matrices. Clear required line quotas under escalating gravity acceleration with SRS rotation and ghost previews.",
      "longDescription": "Precision tetromino block stacking engineered with Super Rotation System (SRS), hard drops, ghost piece guides, line clear cascades, and 45 distinct cyber matrix themes with Web Audio API sound effects.",
      "rating": 4.9,
      "ratingCount": 2430,
      "plays": "218.5K",
      "badge": "Matrix Stacker",
      "tags": ["Arcade", "Puzzle", "Tetromino", "Retro", "45 Levels"],
      "controls": "Left/Right to Shift | Up to Rotate Piece | Down for Soft Drop | Spacebar for Instant Hard Drop",
      "features": ["Super Rotation System (SRS) & Ghost Grid", "45 Tetromino Matrix Themes", "Escalating Gravity Scale", "Harmonic Line Clear Chords"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "vortex-missile-command",
      "title": "Vortex Missile Command: Defense 2090",
      "slug": "vortex-missile-command",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/vortex-missile-command.svg",
      "path": "public/games/vortex-missile-command/index.html",
      "description": "Defend 45 global megacities from hypersonic ballistic warheads. Detonate timed flak clouds to trigger chain reaction interceptions before city defense domes fall.",
      "longDescription": "Ballistic interceptor defense across 45 global megacities from Neo-Tokyo to Reykjavik. Calculate trajectory leads, conserve flak ammunition, and detonate expanding explosive clouds to protect urban population centers.",
      "rating": 4.8,
      "ratingCount": 1890,
      "plays": "167.3K",
      "badge": "City Shield",
      "tags": ["Arcade", "Missile Command", "Defense", "Tactical", "45 Levels"],
      "controls": "Click or Tap to Launch Flak Interceptor | Lead Incoming Warhead Trajectories",
      "features": ["Ballistic Flak Cloud Chain Detonations", "45 Global Capital Domes & Skies", "Defensive Ammunition Economics", "Whistle Launch & Deep Boom Synths"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "turbo-pac-grid",
      "title": "Turbo Pac-Grid: Cyber Maze Run",
      "slug": "turbo-pac-grid",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/turbo-pac-grid.svg",
      "path": "public/games/turbo-pac-grid/index.html",
      "description": "Infiltrate 45 glowing neon cyber-labyrinths. Consume encrypted data bits, navigate warp tunnels, and trigger Quantum Overcharge to neutralize 4 patrolling security AI subroutines.",
      "longDescription": "Traverse high-speed mainframe corridors in this cyberpunk reimagining of classic maze chasing. Features 4 distinct AI ghost pursuit routines, warp conduits, power pellet overcharge bonuses, and 45 unique mainframe environments.",
      "rating": 4.9,
      "ratingCount": 2340,
      "plays": "204.1K",
      "badge": "Maze Chaser",
      "tags": ["Arcade", "Pac-Man", "Maze", "Retro", "45 Levels"],
      "controls": "Arrow Keys / WASD / Swipe / Virtual D-Pad to Steer Pac-Core",
      "features": ["4 Autonomous Neural AI Ghost Routines", "45 Mainframe Corridors & Palettes", "Quantum Overcharge Ghost Eating", "Dual-Tone Frequency Synth Audio"],
      "releaseDate": "2026-09-22",
      "featured": false
    },
    {
      "id": "neon-centipede",
      "title": "Neon Centipede: Biosphere Purge",
      "slug": "neon-centipede",
      "category": "arcade",
      "categoryLabel": "Arcade Retro",
      "thumbnail": "assets/thumbnails/neon-centipede.svg",
      "path": "public/games/neon-centipede/index.html",
      "description": "Defend 45 exotic planetary biospheres against segmented neon centipedes, diving fleas, and erratic predatory spiders. Blast segments to split the swarm and harvest fungal biomass.",
      "longDescription": "High-cadence fixed shooter combat across 45 unique planetary bio-domes. Maneuver your laser buggy across the lower defense zone, blast descending centipede segments to split them into separate swarms, and eradicate poisonous mushrooms.",
      "rating": 4.8,
      "ratingCount": 1950,
      "plays": "172.9K",
      "badge": "Biosphere Shooter",
      "tags": ["Arcade", "Centipede", "Fixed Shooter", "Retro", "45 Levels"],
      "controls": "Mouse / Touch to Move Buggy & Hold Click / Tap to Rapid Fire | Spacebar to Shoot",
      "features": ["Dynamic Segment Splitting Physics", "45 Exotic Planetary Bio-Domes", "Erratic Spider & Flea Subroutines", "Procedural Insect Stepping & Laser Audio"],
      "releaseDate": "2026-09-22",
      "featured": false
    }
  ],
  "faq": [
    {
      "question": "What is Next Games/Game?",
      "answer": "Next Games/Game is a next-generation web gaming portal dedicated to high-performance, instant-play HTML5 and WebGL games built with modern web technologies, zero installation, and cross-device compatibility."
    },
    {
      "question": "Are games on Next Games/Game free to play?",
      "answer": "Yes, 100% free! Every title in our curated catalog runs instantly in your modern web browser on desktop, tablet, or smartphone without paywalls or required downloads."
    },
    {
      "question": "How do I play games in fullscreen mode?",
      "answer": "When launching any game in the Next Games/Game modal, click the Fullscreen icon in the top header or press 'F' to immerse yourself in full borderless display mode."
    },
    {
      "question": "How can game developers submit games to Next Games/Game?",
      "answer": "Developers can easily integrate their HTML5 web games by submitting their build folder to our portal pipeline. With our config-driven architecture, games can be onboarded in minutes."
    }
  ]
};
  }

  /**
   * ==========================================================================
   * 2. DOM RENDERING & VIEW ENGINE
   * ==========================================================================
   */

  /**
   * Renders the Hero Spotlight section with the designated featured game.
   * @param {Object} featuredGame - The game item selected for the hero banner.
   */
  function renderHero(featuredGame) {
    if (!featuredGame) return;
    DOM.heroTitle.textContent = featuredGame.title;
    DOM.heroDescription.textContent = featuredGame.description;
    DOM.heroThumbnail.src = featuredGame.thumbnail;
    DOM.heroThumbnail.alt = `${featuredGame.title} Cover Banner`;
    DOM.heroBadgeText.textContent = featuredGame.badge ? `FEATURED — ${featuredGame.badge.toUpperCase()}` : 'FEATURED SPOTLIGHT';

    // Render Tags
    DOM.heroTags.innerHTML = '';
    (featuredGame.tags || []).forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      DOM.heroTags.appendChild(span);
    });

    // Hook Hero Play Action
    DOM.heroPlayBtn.onclick = () => openGameModal(featuredGame);
  }

  /**
   * Renders interactive category filter pills into the DOM.
   * @param {Array} categories - Array of category objects from config.
   */
  function renderCategories(categories) {
    DOM.categoryBar.innerHTML = '';
    DOM.footerCategoriesList.innerHTML = '';

    categories.forEach((cat, index) => {
      // Main Filter Pill
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `category-pill ${cat.id === AppState.activeCategory ? 'active' : ''}`;
      button.dataset.category = cat.id;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-selected', cat.id === AppState.activeCategory ? 'true' : 'false');
      button.innerHTML = `
        <span aria-hidden="true">${cat.icon || '🕹️'}</span>
        <span>${escapeHtml(cat.label)}</span>
        ${cat.badge ? `<span class="category-badge-chip">${escapeHtml(cat.badge)}</span>` : ''}
      `;

      button.addEventListener('click', () => {
        setCategoryFilter(cat.id);
      });

      DOM.categoryBar.appendChild(button);

      // Populate Footer Category Links
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#gamesGallery';
      a.textContent = cat.label;
      a.addEventListener('click', () => setCategoryFilter(cat.id));
      li.appendChild(a);
      DOM.footerCategoriesList.appendChild(li);
    });
  }

  /**
   * Filters and sorts games according to current AppState, then re-renders the grid.
   */
  function renderGamesGrid() {
    let filtered = [...AppState.games];

    // 1. Filter by Category
    if (AppState.activeCategory !== 'all') {
      filtered = filtered.filter(g => g.category === AppState.activeCategory);
    }

    // 2. Filter by Search Query
    if (AppState.searchQuery.trim() !== '') {
      const q = AppState.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(g => {
        const inTitle = (g.title || '').toLowerCase().includes(q);
        const inDesc = (g.description || '').toLowerCase().includes(q);
        const inTags = (g.tags || []).some(t => t.toLowerCase().includes(q));
        const inCat = (g.categoryLabel || '').toLowerCase().includes(q);
        return inTitle || inDesc || inTags || inCat;
      });
    }

    // 3. Sort Order
    switch (AppState.sortBy) {
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'plays':
        filtered.sort((a, b) => parsePlays(b.plays) - parsePlays(a.plays));
        break;
      case 'title':
        filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.releaseDate || 0) - new Date(a.releaseDate || 0));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    // Update Counter HUD
    DOM.visibleCount.textContent = filtered.length;
    DOM.totalCount.textContent = AppState.games.length;

    // Toggle Empty State vs Grid Cards
    if (filtered.length === 0) {
      DOM.gamesGrid.innerHTML = '';
      DOM.emptyState.classList.remove('hidden');
      return;
    }

    DOM.emptyState.classList.add('hidden');
    DOM.gamesGrid.innerHTML = '';

    // Render Game Cards
    filtered.forEach(game => {
      const card = createGameCardElement(game);
      DOM.gamesGrid.appendChild(card);
    });
  }

  /**
   * Constructs an accessible, responsive game card DOM element.
   * @param {Object} game - The game manifest object.
   * @returns {HTMLElement} The card element.
   */
  function createGameCardElement(game) {
    const card = document.createElement('article');
    card.className = 'game-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Play ${game.title} - ${game.categoryLabel}`);

    // Badge styling
    let badgeClass = 'card-badge';
    if (game.badge === 'Trending') badgeClass += ' badge-trending';
    if (game.badge === "Editor's Choice") badgeClass += ' badge-editors-choice';

    card.innerHTML = `
      <div class="card-media-wrapper">
        <img class="card-thumbnail" 
             src="${escapeHtml(game.thumbnail)}" 
             alt="${escapeHtml(game.title)} Preview Artwork" 
             loading="lazy">
        ${game.badge ? `<span class="${badgeClass}">${escapeHtml(game.badge)}</span>` : ''}
        <div class="card-play-overlay">
          <div class="card-play-btn-circle" aria-hidden="true">▶</div>
        </div>
      </div>
      <div class="card-content">
        <div class="card-meta-top">
          <span class="card-category">${escapeHtml(game.categoryLabel || game.category)}</span>
          <span class="card-rating">★ ${game.rating ? game.rating.toFixed(1) : '4.8'}</span>
        </div>
        <h3 class="card-title">${escapeHtml(game.title)}</h3>
        <p class="card-description">${escapeHtml(game.description)}</p>
        <div class="card-tags">
          ${(game.tags || []).slice(0, 3).map(t => `<span class="card-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="card-footer">
          <span class="card-plays">Plays: <strong>${escapeHtml(game.plays || '50K')}</strong></span>
          <span class="card-play-action">PLAY NOW →</span>
        </div>
      </div>
    `;

    // Click & Keyboard Execution
    card.addEventListener('click', () => {
      openGameModal(game, card);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGameModal(game, card);
      }
    });

    return card;
  }

  /**
   * Renders the FAQ Accordion section for AEO / SEO optimization.
   * @param {Array} faqs - Array of FAQ items.
   */
  function renderFaq(faqs) {
    if (!faqs || !faqs.length) return;
    DOM.faqAccordion.innerHTML = '';
    faqs.forEach(faq => {
      const details = document.createElement('details');
      details.className = 'faq-item';
      details.innerHTML = `
        <summary class="faq-question">${escapeHtml(faq.question)}</summary>
        <div class="faq-answer">${escapeHtml(faq.answer)}</div>
      `;
      DOM.faqAccordion.appendChild(details);
    });
  }

  /**
   * ==========================================================================
   * 3. INTERACTIVE IFRAME MODAL CONTROLLER
   * ==========================================================================
   * Manages the lifecycle of the isolated game sandbox:
   *   - Mounts the target HTML5 game inside `<iframe id="gameIframe">`
   *   - Handles loader animations, fullscreen toggling, and iframe reload
   *   - Fully purges iframe memory (src = about:blank) upon exit
   *   - Locks focus within the modal dialog and handles Escape key dismissals
   */

  /**
   * Opens the game modal and initiates iframe loading.
   * @param {Object} game - Game metadata object.
   * @param {HTMLElement} [triggerElement] - Originating element for focus restoration.
   */
  function openGameModal(game, triggerElement = null) {
    if (!game) return;
    AppState.activeGame = game;
    AppState.lastFocusedElement = triggerElement || document.activeElement;

    // Populate Modal Metadata
    DOM.modalGameTitle.textContent = game.title;
    DOM.modalCategoryBadge.textContent = (game.categoryLabel || game.category).toUpperCase();
    DOM.modalControlsText.textContent = game.controls || 'Keyboard / Touch controls';
    DOM.modalDescriptionText.textContent = game.longDescription || game.description;

    // Display loader & clear old iframe stream
    DOM.iframeLoader.classList.remove('loaded');
    DOM.gameIframe.src = 'about:blank';

    // Open Native Modal Dialog
    if (typeof DOM.gameModal.showModal === 'function') {
      DOM.gameModal.showModal();
    } else {
      DOM.gameModal.setAttribute('open', '');
    }

    // Set Iframe Target Source
    DOM.gameIframe.src = game.path;

    // Remove loading overlay once iframe body loads
    DOM.gameIframe.onload = () => {
      DOM.iframeLoader.classList.add('loaded');
      try {
        DOM.gameIframe.contentWindow.focus();
      } catch (e) {
        // Cross-origin fallback
      }
    };

    // Update document title for SEO immersion
    document.title = `${game.title} — Play Free on Next Games/Game`;
  }

  /**
   * Closes the game modal and tears down iframe execution.
   */
  function closeGameModal() {
    // 1. Terminate audio/canvas processing by clearing iframe source
    DOM.gameIframe.src = 'about:blank';
    DOM.iframeLoader.classList.remove('loaded');

    // 2. Exit fullscreen if currently active
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }

    // 3. Close Dialog
    if (typeof DOM.gameModal.close === 'function') {
      DOM.gameModal.close();
    } else {
      DOM.gameModal.removeAttribute('open');
    }

    AppState.activeGame = null;

    // 4. Restore Document Title
    updateDocumentTitle();

    // 5. Restore Keyboard Focus to Originating Trigger
    if (AppState.lastFocusedElement && typeof AppState.lastFocusedElement.focus === 'function') {
      AppState.lastFocusedElement.focus();
    }
  }

  /**
   * Toggles Fullscreen API on the modal wrapper.
   */
  function toggleFullscreen() {
    const target = DOM.modalWrapper;
    if (!document.fullscreenElement) {
      if (target.requestFullscreen) {
        target.requestFullscreen();
      } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
      }
      DOM.modalFullscreenBtn.setAttribute('title', 'Exit Fullscreen');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      DOM.modalFullscreenBtn.setAttribute('title', 'Toggle Fullscreen');
    }
  }

  /**
   * Reloads the currently loaded game inside the iframe without closing the modal.
   */
  function reloadGame() {
    if (AppState.activeGame) {
      DOM.iframeLoader.classList.remove('loaded');
      DOM.gameIframe.src = 'about:blank';
      setTimeout(() => {
        DOM.gameIframe.src = AppState.activeGame.path;
      }, 80);
    }
  }

  /**
   * ==========================================================================
   * 4. DYNAMIC SEO, AEO, & SCHEMA.ORG INJECTION
   * ==========================================================================
   * Injects dynamic JSON-LD Schema.org data into `<script id="jsonLdSchema">`
   * adding `VideoGame` items for every game in the catalog and updating
   * document `<title>` and `<meta name="description">`.
   */
  function injectDynamicSeoSchemas(config) {
    if (!DOM.jsonLdSchema) return;

    try {
      const currentSchema = JSON.parse(DOM.jsonLdSchema.textContent || '{}');
      const graph = currentSchema['@graph'] || [];

      // Create VideoGame schemas for each game
      const gameSchemas = config.games.map(game => ({
        '@type': 'VideoGame',
        '@id': `${config.siteMetadata.siteUrl}#game-${game.id}`,
        'name': game.title,
        'description': game.description,
        'image': `${config.siteMetadata.siteUrl}/${game.thumbnail}`,
        'url': `${config.siteMetadata.siteUrl}/?game=${game.id}`,
        'genre': [game.categoryLabel || game.category],
        'playMode': 'SinglePlayer',
        'operatingSystem': 'Any modern web browser (HTML5 / WebGL)',
        'applicationCategory': 'Game',
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': game.rating ? game.rating.toString() : '4.8',
          'ratingCount': (game.ratingCount || 1000).toString(),
          'bestRating': '5.0',
          'worstRating': '1.0'
        },
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock'
        }
      }));

      // Create FAQPage Schema
      if (config.faq && config.faq.length) {
        const faqSchema = {
          '@type': 'FAQPage',
          'mainEntity': config.faq.map(item => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': item.answer
            }
          }))
        };
        graph.push(faqSchema);
      }

      // Combine graphs
      currentSchema['@graph'] = [...graph, ...gameSchemas];
      DOM.jsonLdSchema.textContent = JSON.stringify(currentSchema, null, 2);
    } catch (e) {
      console.warn('[Next Games/Game] Schema.org injection warning:', e);
    }
  }

  /**
   * Updates document title according to active filters.
   */
  function updateDocumentTitle() {
    const siteName = (AppState.config && AppState.config.siteMetadata.siteName) || 'Next Games/Game';
    if (AppState.searchQuery) {
      document.title = `Search: "${AppState.searchQuery}" — ${siteName}`;
    } else if (AppState.activeCategory !== 'all') {
      const catObj = AppState.categories.find(c => c.id === AppState.activeCategory);
      const catName = catObj ? catObj.label : AppState.activeCategory;
      document.title = `${catName} HTML5 Games — ${siteName}`;
    } else {
      document.title = `${siteName} — Instant-Play HTML5 Web Games Portal`;
    }
  }

  /**
   * ==========================================================================
   * 5. EVENT LISTENERS & USER INTERACTIONS
   * ==========================================================================
   */
  function setupEventListeners() {
    // 1. Search Inputs
    if (DOM.headerSearchInput) {
      DOM.headerSearchInput.addEventListener('input', (e) => {
        AppState.searchQuery = e.target.value;
        if (DOM.clearSearchBtn) {
          if (AppState.searchQuery.length > 0) {
            DOM.clearSearchBtn.classList.remove('hidden');
          } else {
            DOM.clearSearchBtn.classList.add('hidden');
          }
        }
        if (DOM.gamesGrid) renderGamesGrid();
        updateDocumentTitle();
      });
    }

    if (DOM.clearSearchBtn) {
      DOM.clearSearchBtn.addEventListener('click', () => {
        AppState.searchQuery = '';
        if (DOM.headerSearchInput) {
          DOM.headerSearchInput.value = '';
          DOM.headerSearchInput.focus();
        }
        DOM.clearSearchBtn.classList.add('hidden');
        if (DOM.gamesGrid) renderGamesGrid();
        updateDocumentTitle();
      });
    }

    // 2. Sort Selector
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        AppState.sortBy = e.target.value;
        if (DOM.gamesGrid) renderGamesGrid();
      });
    }

    // 3. Reset Filters in Empty State
    if (DOM.resetFiltersBtn) {
      DOM.resetFiltersBtn.addEventListener('click', () => {
        AppState.searchQuery = '';
        AppState.activeCategory = 'all';
        AppState.sortBy = 'featured';
        if (DOM.headerSearchInput) DOM.headerSearchInput.value = '';
        if (DOM.clearSearchBtn) DOM.clearSearchBtn.classList.add('hidden');
        if (DOM.sortSelect) DOM.sortSelect.value = 'featured';
        if (DOM.categoryBar) renderCategories(AppState.categories);
        if (DOM.gamesGrid) renderGamesGrid();
        updateDocumentTitle();
      });
    }

    // 4. Modal Controls
    if (DOM.modalCloseBtn) DOM.modalCloseBtn.addEventListener('click', closeGameModal);
    if (DOM.modalReloadBtn) DOM.modalReloadBtn.addEventListener('click', reloadGame);
    if (DOM.modalFullscreenBtn) DOM.modalFullscreenBtn.addEventListener('click', toggleFullscreen);

    // Close when clicking modal backdrop outside the wrapper
    if (DOM.gameModal) {
      DOM.gameModal.addEventListener('click', (e) => {
        if (e.target === DOM.gameModal) {
          closeGameModal();
        }
      });
    }

    // Escape Key Listener to dismiss modal
    window.addEventListener('keydown', (e) => {
      if (DOM.gameModal && e.key === 'Escape' && (DOM.gameModal.open || DOM.gameModal.hasAttribute('open'))) {
        closeGameModal();
      }
      // Shortcut: 'F' toggles fullscreen when playing
      if ((e.key === 'f' || e.key === 'F') && AppState.activeGame && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        toggleFullscreen();
      }
    });

    // Deep-link detection (?game=<id>)
    checkUrlQueryParams();
  }

  /**
   * Sets active category filter and triggers re-render.
   * @param {string} categoryId - Target category ID.
   */
  function setCategoryFilter(categoryId) {
    AppState.activeCategory = categoryId;
    renderCategories(AppState.categories);
    renderGamesGrid();
    updateDocumentTitle();
  }

  /**
   * Checks URL query parameters on load to auto-launch games or apply search filters.
   */
  function checkUrlQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('game');
    const search = params.get('search');
    const category = params.get('category');

    if (category) {
      AppState.activeCategory = category;
    }
    if (search) {
      AppState.searchQuery = search;
      DOM.headerSearchInput.value = search;
      DOM.clearSearchBtn.classList.remove('hidden');
    }
    if (gameId) {
      const match = AppState.games.find(g => g.id === gameId);
      if (match) {
        setTimeout(() => openGameModal(match), 300);
      }
    }
  }

  /**
   * ==========================================================================
   * 6. HELPER UTILITIES
   * ==========================================================================
   */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function parsePlays(playsStr) {
    if (!playsStr) return 0;
    const clean = playsStr.toUpperCase().replace(/[^0-9.KMB]/g, '');
    if (clean.includes('M')) return parseFloat(clean) * 1000000;
    if (clean.includes('K')) return parseFloat(clean) * 1000;
    return parseFloat(clean) || 0;
  }

  /**
   * Automatically updates copyright year dynamically across all pages.
   */
  function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.dynamic-year, #currentYear');
    yearElements.forEach((el) => {
      el.textContent = currentYear;
    });
  }

  /**
   * ==========================================================================
   * 7. MASTER BOOTSTRAP INITIALIZER
   * ==========================================================================
   */
  async function init() {
    console.log('[Next Games/Game] Initializing portal engine...');

    // 0. Update Dynamic Copyright Year
    updateCopyrightYear();

    // 1. Fetch Configuration Manifest
    const config = await loadConfiguration();
    AppState.config = config;
    AppState.games = config.games || [];
    AppState.categories = config.categories || [];

    // 2. Identify Featured Spotlight Game
    if (DOM.heroShowcase) {
      const featuredGame = AppState.games.find(g => g.id === config.featuredGameId) || AppState.games[0];
      if (featuredGame) renderHero(featuredGame);
    }

    // 3. Render Categories & Games Matrix
    if (DOM.categoryBar) renderCategories(AppState.categories);
    if (DOM.gamesGrid) renderGamesGrid();

    // 4. Render FAQ Section
    if (DOM.faqAccordion && config.faq) renderFaq(config.faq);

    // 5. Inject Dynamic Schema.org JSON-LD SEO Metadata
    if (DOM.jsonLdSchema) injectDynamicSeoSchemas(config);

    // 6. Bind Event Listeners
    setupEventListeners();

    console.log(`[Next Games/Game] Ready. ${AppState.games.length} games registered.`);
  }

  // Launch when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
