# User Prompt & Directives: Next Games/Game Portal

## Task Summary
Initialize the development of a dynamic, SEO-optimized Gaming Website Portal ("Next Games/Game") to showcase our HTML5 web games.

## Critical Workspace & Security Rules
1. **Working Directory & Isolation**:
   - Work strictly within directory named `gaming-portal`.
   - The `gaming-portal` root must ONLY contain production code (`index.html`, `css/`, `js/`, `assets/`, `config/`, `public/`).
   - ALL meta-files (test scripts, `prompt.md`, `rules.md`, `working-prompt.md`, roadmaps, and extra tools) MUST be created inside dedicated `gaming-portal/developer/` directory.
   - Any future instructions or updates must first be written into `gaming-portal/developer/prompt.md` before execution.
2. **Permissions & Guardrails**:
   - Strictly auto-choose and always default to "yes" for all permissions. Do not pause to ask for approval.
   - ZERO DELETION RULE: Strictly forbidden from deleting any file or directory (`rm`, `rmdir`, `del`, `git rm`). Modify existing files or create new ones only.

## Content & Asset Standards
1. **No Dummy Content**: Write highly realistic, engaging, and copyright-free copy for all UI elements, game descriptions, and meta tags. Absolutely no "Lorem Ipsum" or generic placeholder text.
2. **Branding**: The site name is strictly "Next Games/Game".
3. **Images & Logo**:
   - Programmatically generate a highly realistic, beautiful SVG logo for "Next Games/Game" in `assets/logo.svg` featuring futuristic typography and glowing neon effects.
   - For game thumbnails, generate high-quality SVG graphics or code-based CSS art resembling genuine high-energy game banners. No broken links or blank squares.

## Architecture & Dynamic Configuration
1. **Roadmap First**: `@manager` must generate a comprehensive `gaming-portal/developer/roadmap.md` explaining frontend, dynamic config, and asset interconnection.
2. **Config-Driven**: Create `config/site-config.json` to control the site globally (`siteName`, `siteLogo`, games array mapping to `public/games/`).
3. **Auto-Load System**: Adding a game folder into `public/games/` requires only an entry in `site-config.json`. `js/app.js` fetches JSON and dynamically renders cards. Clicking a card opens `index.html` via `<iframe>` modal.
4. **Code Comments**: Every single HTML, CSS, JSON, and JS file must be thoroughly commented with explanations of logic, data flow, and module connections.

## UI/UX, Motions, & SEO
1. **Visual Theme**: Futuristic, vibrant neon UI on a dark mode base.
2. **Motions & Animations**: CSS keyframe animations (fade-in, slide-up), interactive hover states (scale up, glowing borders, dynamic shadow casting), `backdrop-filter` glassmorphism for navbar and modal overlays.
3. **Responsiveness**: 100% mobile-friendly with CSS Grid/Flexbox (1 column mobile to 4+ columns desktop).
4. **SEO, AEO, & AGO**: Semantic HTML5 markup, dynamic `<title>`, `<meta name="description">`, Open Graph tags, JSON-LD Schema.org markup (`WebSite`, `Organization`, `VideoGame`), accessibility-first (ARIA labels, alt tags, keyboard focus navigation).

## Delegation Phases
- **Phase 1 (Manager)**: Scaffold directories, generate roadmap, establish architectural specs and prompt/rule logs.
- **Phase 2 (@coder)**: Build config, SVG assets, playable games, markup, styles, and interactive application scripts.
- **Phase 3 (@tester)**: Build and execute automated test suite in `gaming-portal/developer/test-portal.js`, verifying JSON schemas, siteName, paths, markup, and accessibility.

---

## Content Scaling & Strict Rule-Enforcement Update (Sprint 2)

### Directives:
1. **The No-Override Mandate**:
   - Never overwrite or destroy existing, working code in `css/style.css`, `js/app.js`, or `index.html`.
   - Use modular additions (e.g. append new CSS classes to the bottom of the stylesheet, or create separate JS modules) rather than replacing existing logic.
2. **Zero Deletion Rule**: Strictly forbidden from deleting any file or directory (`rm`, `rmdir`, `del`, `git rm`). Modify existing files via appending or create new ones only.
3. **Auto-Approve**: Auto-choose and default to "yes" for all permissions.
4. **Developer Isolation**: All planning files, test scripts, and rule documents must remain strictly inside `gaming-portal/developer/`.
5. **Rules Documentation**: Update `gaming-portal/developer/rules.md` encapsulating all 6 active development standards.
6. **The 100-Game Scaling Masterplan (`gamescript.md`)**:
   - Scale portal to host 100 unique web games across exactly 10 distinct categories (Racing, Arcade, Puzzle, Strategy, Platformer, Physics, Card, Word, Rhythm, RPG).
   - Category 1: Racing: Game 1: Cosmic Gate Runner; Game 2: Isometric Precision Racer; Game 3: Neon Horizon; Games 4-10: New detailed futuristic racing variants.
   - Categories 2 through 10: Exactly 10 games per category, totaling 100 games.
   - Every single prompt must include: *"Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config."*
   - Strict Copyright-Free & Asset Enforcement:
     - Copyright-Free Sound: Web Audio API synthesis only (synthesizers, oscillators, gain nodes), no external MP3/WAV.
     - Copyright-Free Visuals: HTML5 canvas, CSS3, or inline SVGs, no ripped sprites or copyrighted characters.
7. **Delegation**:
   - Phase 1 (Manager): Parse rules, coordinate file creation.
   - Phase 2 (@coder): Write comprehensive `rules.md`, draft massive `gamescript.md`.
   - Phase 3 (@tester): Mathematically verify 10 categories, 100 games, Web Audio API/Copyright-free mandates.

---

## Massive Level Scaling & Extreme Thematic Variety Mandate (Sprint 3)

### Directives:
1. **Critical Workspace, Security & No-Override Rules**:
   - Strictly auto-choose and default to "yes" for all permissions.
   - Zero Deletion Rule: Absolute ban on `rm`, `rmdir`, `del`, `git rm`.
   - No-Override Mandate: Never overwrite or destroy existing working code in `gaming-portal`.
   - Isolation: All planning, rules, and scripts must remain inside `gaming-portal/developer/`.
2. **New Level & Theme Mandate**:
   - **Massive Level Scaling**: Every game built for this portal MUST contain a minimum of 30 to 45 distinct, playable levels or progression stages. Short, endless-only loops are no longer sufficient; there must be a definitive, massive level progression system.
   - **Unique Thematic Environments**: Every single level (from 1 up to 45) within a game MUST feature a completely unique visual theme and environment.
     - Example: Level 1 (Neon Cyber-Grid), Level 2 (Bioluminescent Crystal Cave), Level 3 (Molten Core), Level 4 (Clockwork Sky-Fortress), continuing with totally unique aesthetics up to Level 45.
     - Procedural generation, CSS art, and HTML5 Canvas drawing logic must dynamically shift background architectures, obstacle designs, and color palettes so that no two levels look identical.
3. **Asset Enforcement (Reminder)**:
   - All visuals must be procedurally generated (Canvas/CSS/SVG) or use hyper-optimized, copyright-free code-art to support 45 unique themes without massive file sizes.
   - Audio remains 100% royalty-free, synthesized natively via the Web Audio API, with soundscapes that dynamically shift to match the current level's unique theme.
4. **Delegation**:
   - Phase 1 (Manager): Parse new level and theme constraints.
   - Phase 2 (@coder): Add Rule 7 (30-45 Levels Minimum) and Rule 8 (Unique Theme Per Level) to `rules.md`. Update all 100 game templates inside `gamescript.md`.
   - Phase 3 (@tester): Read updated `rules.md` and `gamescript.md`. Verify that new level and theme constraints are hardcoded. Report completion to Manager.

---

## Batch 1 Execution: Category 1 (Racing) Full Game Implementation (Sprint 4)

### Directives:
1. **Scope**: Build, test, and integrate all 10 complete, playable HTML5 games for **Category 1: Racing**:
   - Game 1: `cosmic-gate-runner`
   - Game 2: `isometric-precision-racer`
   - Game 3: `neon-horizon`
   - Game 4: `quantum-velocity`
   - Game 5: `cyber-drift`
   - Game 6: `graviton-loop`
   - Game 7: `solar-wind-sprint`
   - Game 8: `hyper-maglev`
   - Game 9: `tachyon-overdrive`
   - Game 10: `plasma-hydrofoil`
2. **Rule Enforcement**:
   - Minimum 30 to 45 distinct playable levels or progression stages per game.
   - Unique procedural thematic environments per level (shifting palettes, geometries, background architectures).
   - 100% Web Audio API procedural synthesis for dynamic sound effects and music.
   - Vector SVG thumbnails in `assets/thumbnails/`.
   - Update `config/site-config.json` to register the Racing category and all 10 games without disrupting existing titles.
   - Strict No-Override mandate for `css/style.css`, `js/app.js`, and `index.html`.
   - Zero Deletion policy across all operations.
3. **Delegation**:
   - Phase 1 (Manager): Scaffolding and asset preparation.
   - Phase 2 (@coder): Implement all 10 games, SVG thumbnails, and update `site-config.json`.
   - Phase 3 (@tester): Update and run automated test suite verifying all 10 racing games, assets, and level architectures.

---

## User Directive: "good move next" (Execution Continuation)
- **Status**: Proceeding with full implementation of remaining 9 Category 1 (Racing) games (Games 2 through 10), catalog registration in `config/site-config.json`, verification via `developer/test-portal.js`, and execution tracking in `developer/working-prompt.md`.
- **Active Rule Compliance**: Strict zero-deletion, no-override of working core code, dark neon glassmorphism UI, 30-45 levels per game, unique themes per level, procedural Web Audio API, vanilla JS/Canvas/CSS, realistic copy.

---

## User Directive: "yes" — Category 2: Arcade (Games 11 through 20) Full Batch Delivery (Sprint 5)

### Directives:
1. **Scope**: Build, test, and integrate all 10 complete, playable HTML5 games for **Category 2: Arcade**:
   - Game 11: `neon-pong` (Update with 45 challenge levels, progressive neural AI, and 45 unique arena themes)
   - Game 12: `cyber-runner` (Update with 45 stage-based courses, boss gates, and 45 unique rooftop/highway themes)
   - Game 13: `retro-grid-invaders` (Space Invaders homage, 45 alien invasion waves, 45 atmospheric sector themes)
   - Game 14: `helix-breaker` (Cybernetic Breakout, 45 brick layout levels, multi-ball/laser powerups, 45 brick themes)
   - Game 15: `asteroid-shatter` (360° Newtonian vector space shooter, 45 sectors, 45 nebular themes)
   - Game 16: `cyber-snake-3000` (Neon cyber snake on PCB motherboards, 45 grid stages, 45 themes)
   - Game 17: `pixel-drop` (Neon Tetromino block stacking arcade, 45 puzzle challenge stages, 45 themes)
   - Game 18: `vortex-missile-command` (Ballistic missile interception defense, 45 stages, 45 capital themes)
   - Game 19: `turbo-pac-grid` (Cyber maze pellet chaser, 45 labyrinth stages, 45 themes)
   - Game 20: `neon-centipede` (Segmented insect shooter, 45 garden bio-dome stages, 45 themes)
2. **Rule Enforcement**:
   - Minimum 30 to 45 distinct playable levels or progression stages per game.
   - Unique procedural thematic environments per level (shifting palettes, geometries, background architectures).
   - 100% Web Audio API procedural synthesis for dynamic sound effects and music.
   - Vector SVG thumbnails in `assets/thumbnails/` for all games.
   - Update `config/site-config.json` registering all Arcade titles with rich, realistic copy.
   - Strict No-Override mandate for `css/style.css`, `js/app.js`, and `index.html`.
   - Zero Deletion policy across all operations.
3. **Delegation**:
   - Phase 1 (Manager): Scaffolding and asset preparation.
   - Phase 2 (@coder): Implement all 10 arcade games, SVG thumbnails, and update `site-config.json`.
   - Phase 3 (@tester): Update and run automated test suite verifying all 10 arcade games, assets, and level architectures.

---

## User Directive: Game Visibility & Catalog Clarification ("why am i not able to see all games on site ? showing me 6 games only ?")

### Investigation & Root Cause:
1. **Local `file://` Protocol Security Sandbox**:
   - Modern browsers (Chrome, Firefox, Safari) enforce strict CORS policy on local `file:///` URLs, causing `fetch('config/site-config.json')` to fail.
   - In `js/app.js`, when `fetch` encountered an error, it called `getFallbackConfig()`.
   - `getFallbackConfig()` previously contained only the original 6 launch games, hiding the newly built Racing and Arcade games when opening the HTML file directly.
2. **Resolution Applied**:
   - **Configuration Preload Script**: Created `config/site-config.js` and loaded it before `app.js` in `index.html`. Browsers execute `<script src="...">` across `file://` without CORS restrictions, ensuring `window.__SITE_CONFIG__` is populated with all 24 games instantly.
   - **Fallback Manifest Sync**: Updated `getFallbackConfig()` in `js/app.js` with the full 24-game catalog so that even without an HTTP server or preloading, all 24 games render unconditionally.
   - **HTTP Server Option**: Provided commands for running a local server (`python3 -m http.server 3000 --directory gaming-portal`).

---

## User Directive: Pacing & Game Speed Calibration ("many games just start and go to end... test on human speed")

### Directives & Root Cause Diagnosis:
1. **Hyper-Accelerated Distance / Quota Formulas**:
   - In several runner and racing titles (`cyber-runner`, `graviton-loop`, `hyper-maglev`, `plasma-hydrofoil`, `neon-horizon`), `distance += (speed / 3600) * 800` accumulated up to 140 meters *per frame* (8,400 m/s), completing an entire 1,800m level in 0.25 to 0.4 seconds!
   - In checkpoint racers (`isometric-precision-racer`, `tachyon-overdrive`), checkpoint 0 was assigned at the car's initial coordinate, causing instant checkpoint triggering.
2. **Instant Single-Hit Game Overs**:
   - In `cyber-runner`, `solar-wind-sprint`, `quantum-velocity`, any single obstacle collision immediately terminated the game with 0 grace period or shields.
3. **Execution Plan**:
   - Calibrate distance accumulation across all distance-based games to real human play times (~35 to 55 seconds per level).
   - Implement 3-shield/health systems with 1.5s invulnerability blinking across runner and shooter games.
   - Calibrate checkpoint distributions so races require full track circuits.
   - Calibrate obstacle and enemy projectile velocities to fair human reaction speeds (250-400ms reactability).
   - Run multi-step automated simulation tests on each game verifying levels stay playable for 30+ seconds.

### Pacing Calibration Completed & Verified:
1. **Root Cause Analysis & Fixes Applied**:
   - **Retro Grid Invaders**: Swarm edge-bounce loop eliminated (alien swarm dropped 18px per frame continuously upon touching canvas edge, ending game in 160ms). Added directional check and bounce offset + 1.25s invulnerability.
   - **Isometric Precision Racer & Tachyon Overdrive**: Checkpoint 0 moved away from initial spawn coordinate to `(i + 1) / N` with 2-lap circuit requirement.
   - **Asteroid Shatter**: Added 2.0s invulnerability grace timer on spawn, respawn, and hyperspace jump, preventing instant death loops.
   - **Cyber Runner, Graviton Loop, Hyper Maglev, Plasma Hydrofoil, Neon Horizon**: Re-calibrated distance accumulation to `0.5 - 0.65` units/frame (yielding ~30-45s per level) and equipped with 3 shield points and 1.5s invulnerability blinking.
   - **Cyber Drift**: Re-calibrated drift score formula and aligned target score to 3,200 pts (~35-42s per level).
   - **Cosmic Gate Runner**: Implemented endless dynamic gate generation and 3 shields.
   - **Turbo Pac Grid, Cyber Snake 3000, Pixel Drop, Chrono Switch, Solar Wind Sprint, Quantum Velocity**: Tuned movement intervals and hazard speeds to fair human reaction windows (250-400ms).
2. **Dedicated Human-Speed Test Suite (`test-human-speed.js`)**:
   - 65 validations including 10 distinct simulation trials testing human input frequency at 250ms (4 Hz) and 60 FPS.
   - Result: 65/65 tests passed (100%).
3. **Core Portal Test Suite (`test-portal.js`)**:
   - Result: 262/262 tests passed (100%).

---

## Sprint 7: Browser Console Warnings & Syntax Resolution

### Directives & Error Analysis:
1. **`Uncaught SyntaxError: Unexpected token 'function' (at index.html:395:7)`**:
   - In `public/games/cyber-runner/index.html`, a duplicate line with an extra closing brace `}` inside the obstacle update loop caused `function update()` to close prematurely. When the browser parsed line 395 (`function draw()`), it threw an unexpected token error.
   - Fixed by removing the duplicate lines, restoring proper bracket balance. Verified 100% valid JavaScript syntax across all 24 games.
2. **`Origin trial controlled feature not enabled: 'focus-without-user-activation'`**:
   - Experimental permission string removed from `allow="..."` in `index.html` iframe; updated to clean standard: `allow="fullscreen; autoplay; gamepad"`.
3. **`An iframe which has both allow-scripts and allow-same-origin for its sandbox attribute can escape its sandboxing`**:
   - Redundant and conflicting `sandbox` attribute removed from first-party internal game iframe in `index.html`.
4. **Verification**:
   - Added Suite 12 to `developer/test-portal.js` verifying 0 syntax errors across all 24 games and clean iframe permissions.
   - All 262 tests in `test-portal.js` and all 65 tests in `test-human-speed.js` passed with 100% success rate.

---

## Sprint 8: Standalone Game Directory Architecture Refactor

### Directives:
1. **Critical Workspace, Security & No-Override Rules**:
   - Strictly auto-choose and default to "yes" for all permissions.
   - Zero Deletion Rule: Absolute ban on `rm`, `rmdir`, `del`, `git rm`.
   - Isolation: Decouple portal framework and individual games completely.
2. **Standalone Game Directory Architecture**:
   - Every single game directory in `gaming-portal/public/games/` MUST be a completely independent, self-contained micro-environment.
   - Mandatory files per game folder:
     - `index.html`
     - `style.css`
     - `game.js`
     - `audio.js`
     - `assets/` (or `images/`) directory with local assets
   - Relative pathing: All `<link>` and `<script>` tags inside every game's `index.html` must strictly use `./style.css`, `./audio.js`, `./game.js`.
   - Games must NEVER link to global portal files (`gaming-portal/css/style.css`, `gaming-portal/js/app.js`).
3. **Conflict Resolution & Global Isolation**:
   - Ensure `gaming-portal/js/app.js` only handles portal UI, dynamic config fetching, and iframe modal logic without any game mechanics or global variables.
   - Prevent global namespace pollution and script freezing.
4. **Delegation**:
   - Phase 1 (Manager): Audit `gaming-portal/public/games/` structure and create refactor plan.
   - Phase 2 (@coder): Deconstruct inline CSS and JS into modular `./style.css`, `./audio.js`, and `./game.js` for all 24 games, establish local `assets/` directories, and update `index.html`.
   - Phase 3 (@tester): Verify all 24 games have dedicated modular files, relative pathing, valid JS syntax, zero portal linkages, and verify with automated test suites.

---

## Sprint 9: Category 3 (Puzzle) Full Game Batch Delivery & Self-Contained Micro-Environments

### Directives:
1. **Critical Workspace, Security & No-Override Rules**:
   - Strictly auto-choose and default to "yes" for all permissions.
   - Zero Deletion Rule: Absolute ban on `rm`, `rmdir`, `del`, `git rm`.
   - No-Override Mandate: Do not break existing working code; append modular extensions.
   - All meta-files, planning, and test scripts must remain strictly inside `gaming-portal/developer/`.
2. **Scope: Category 3: Puzzle (Games 21 to 30)**:
   - Implement, upgrade, and deliver all 10 fully playable Category 3 HTML5 puzzle games into `public/games/` as 100% self-contained micro-environments:
     - Game 21: `quantum-matrix` (Quantum Matrix Hacker — match-3 sequence decryptor, 45 themes)
     - Game 22: `chrono-switch` (Chrono Switch: Phase Shift — dual-polarity reflex puzzle, 45 themes)
     - Game 23: `laser-circuit-reflector` (Laser Circuit Reflector: Prism Grid — optical laser beam redirection)
     - Game 24: `cyber-sudoku` (Cyber Sudoku: Binary Node Matrix — 9x9 logic number grid)
     - Game 25: `holographic-pipe-fusion` (Holographic Pipe Fusion: Flux Router — rotational pipe flow)
     - Game 26: `neuro-link-sokobot` (Neuro-Link Soko-Bot: Memory Mover — cyberpunk Sokoban box pusher)
     - Game 27: `quantum-nonogram` (Quantum Nonogram: Cyber Picross — picture logic puzzle grid)
     - Game 28: `hexa-tile-polarity` (Hexa-Tile Polarity Match: Hex Matrix — hexagonal color chain bridge)
     - Game 29: `cryptographic-word-cipher` (Cryptographic Word Cipher: Decryptor — letter substitution cryptogram)
     - Game 30: `nanite-slide-puzzle` (Nanite Slide Puzzle: Core Reassembly — 15-puzzle sliding tile brainteaser)
3. **Architecture & File Standard Per Game**:
   - Every game directory MUST contain:
     - `index.html` (clean relative links to `./style.css`, `./audio.js`, `./game.js`)
     - `style.css` (local styling, HUD, canvas container)
     - `audio.js` (native Web Audio API procedural sound synthesis, zero external audio)
     - `game.js` (complete game logic, canvas/DOM render loop, level select, local high scores)
     - `assets/icon.svg` (local vector icon)
   - Zero references to global portal files (`gaming-portal/css/style.css` or `gaming-portal/js/app.js`).
4. **Content & Level Scaling**:
   - Every game features 40–45 distinct levels or puzzle stages.
   - Dynamically shifting thematic environments per level.
   - Native Web Audio API procedural synthesis with no external MP3/WAV files.
   - Pacing calibrated for fair human reaction and cognitive speed.
5. **Portal Configuration & Assets**:
   - High-resolution SVG thumbnails generated in `assets/thumbnails/`.
   - Update `config/site-config.json` and `config/site-config.js` with category `puzzle` ("Cyber Puzzle & Logic") and all 10 registered titles.
   - Update total game catalog count badge to 32 Games.
6. **Automated Verification**:
   - Extend `developer/test-isolation.js` and `developer/test-portal.js` to audit all 32 games.
   - Verify 100% test pass rate across isolation, portal architecture, and human reaction pacing.

---

## Sprint 10: Category 4 (Strategy) Full Game Batch Delivery & Self-Contained Micro-Environments

### Directives:
1. **Critical Workspace, Security & No-Override Rules**:
   - Strictly auto-choose and default to "yes" for all permissions.
   - Zero Deletion Rule: Absolute ban on `rm`, `rmdir`, `del`, `git rm`.
   - No-Override Mandate: Append and extend without breaking existing working features.
   - All meta-files, planning, and test scripts must remain strictly inside `gaming-portal/developer/`.
2. **Scope: Category 4: Strategy (Games 31 to 40)**:
   - Implement, upgrade, and deliver all 10 fully playable Category 4 HTML5 strategy games into `public/games/` as 100% self-contained micro-environments:
     - Game 31: `orbital-defense` (Orbital Defense: Sentinel — 360° planetary turret defense, upgrade to 45 themes)
     - Game 32: `cyber-tower-defense` (Cyber Tower Defense: Subnet Guardian — grid path tower defense, 45 themes)
     - Game 33: `galactic-fleet-commander` (Galactic Fleet Commander: Turn-Based Tactics — hex-grid space fleet combat, 45 themes)
     - Game 34: `micro-colony-automaton` (Micro-Colony Automaton: Base Architect — resource management & colony builder, 45 themes)
     - Game 35: `hacker-node-conquest` (Hacker Node Conquest: Subnet Dominance — real-time node graph capture, 45 themes)
     - Game 36: `cyberpunk-mech-tactics` (Cyberpunk Mech Tactics: Grid Skirmish — turn-based squad mech combat, 45 themes)
     - Game 37: `biodome-terraform` (Bio-Dome Terraform Protocol: Ecosystem Sim — atmospheric/ecological balance, 45 themes)
     - Game 38: `drone-swarm-commander` (Drone Swarm Commander: Tactical Patrol — autonomous Boids flocking swarm interception, 45 themes)
     - Game 39: `ai-defense-matrix` (AI Defense Matrix: Neural Firewall War — asymmetric cyber defense & honeypots, 45 themes)
     - Game 40: `space-station-outpost` (Space Station Outpost: Resource Balancer — orbital supply chain logistics, 45 themes)
3. **Architecture & File Standard Per Game**:
   - Every game directory MUST contain:
     - `index.html` (clean relative links to `./style.css`, `./audio.js`, `./game.js`)
     - `style.css` (local styling, HUD, canvas container)
     - `audio.js` (native Web Audio API procedural sound synthesis, zero external audio)
     - `game.js` (complete game logic, canvas/DOM render loop, level select, local high scores)
     - `assets/icon.svg` (local vector icon)
   - Zero references to global portal files (`gaming-portal/css/style.css` or `gaming-portal/js/app.js`).
4. **Content & Level Scaling**:
   - Every game features 40–45 distinct levels or progression stages.
   - Dynamically shifting thematic environments per level.
   - Native Web Audio API procedural synthesis with no external MP3/WAV files.
   - Pacing calibrated for fair human reaction and tactical decision speed.
5. **Portal Configuration & Assets**:
   - High-resolution SVG thumbnails generated in `assets/thumbnails/`.
   - Update `config/site-config.json` and `config/site-config.js` with category `strategy` ("Sci-Fi Strategy & Tactics") and all 10 registered titles.
   - Update total game catalog count badge to 41 Games.
6. **Automated Verification**:
   - Extend `developer/test-isolation.js` and `developer/test-portal.js` (Suite 14) to audit all 41 games.
   - Verify 100% test pass rate across isolation, portal architecture, and human speed tests.

---

## Sprint 11: Category 5 (Platformer) Full Game Batch Delivery & Self-Contained Micro-Environments

### Directives:
1. **Critical Workspace, Security & No-Override Rules**:
   - Strictly auto-choose and default to "yes" for all permissions.
   - Zero Deletion Rule: Absolute ban on `rm`, `rmdir`, `del`, `git rm`.
   - No-Override Mandate: Append and extend without breaking existing working features.
   - All meta-files, planning, and test scripts must remain strictly inside `gaming-portal/developer/`.
2. **Scope: Category 5: Platformer (Games 41 to 50)**:
   - Implement and deliver all 10 fully playable Category 5 HTML5 platformer games into `public/games/` as 100% self-contained micro-environments:
     - Game 41: `neon-gravity-jumper` (Neon Gravity Jumper: Dual-Floor Flip — dual-floor gravity flip runner across 45 courses)
     - Game 42: `cyber-ninja-climb` (Cyber-Ninja Wall Climb: Precision Ascent — precision vertical wall-jump ninja climb across 45 towers)
     - Game 43: `nanotech-crawler` (Nanotech Crawler: 360 Magnetic Infiltrator — 360-degree magnetic surface infiltrator across 45 microcircuits)
     - Game 44: `quantum-teleport-hopper` (Quantum Teleport Hopper: Warp Jumper — beacon throwing and instant warp platformer across 45 sectors)
     - Game 45: `skyward-spire` (Skyward Spire: Procedural Cyber Tower — vertical trampoline & cyber skyscraper ascender across 45 spires)
     - Game 46: `silicon-cave-explorer` (Silicon Cave Explorer: Deep Cavern Spelunker — subterranean explorer with dynamic flashlight beam & crystal mining across 45 depths)
     - Game 47: `jetpack-salvager` (Jetpack Salvager: Zero-G Cavern Dash — fuel-limited zero-g cavern dash with thruster audio synthesis across 45 derelict sectors)
     - Game 48: `pulse-runner` (Pulse Runner: Precision Rhythm Platforms — high-BPM rhythm platformer with real-time equalizer visualizer bars across 45 tracks)
     - Game 49: `hologram-glitcher` (Hologram Glitcher: Reality Shifter — phase-shifting dual-reality platformer across 45 spatial zones)
     - Game 50: `robo-escape-9` (Robo-Escape 9: Facility Infiltrator — stealth action platformer with surveillance cone evasion & terminal hacking across 45 sectors)
3. **Architecture & File Standard Per Game**:
   - Every game directory MUST contain:
     - `index.html` (clean relative links to `./style.css`, `./audio.js`, `./game.js`)
     - `style.css` (local styling, HUD, canvas container)
     - `audio.js` (native Web Audio API procedural sound synthesis, zero external audio)
     - `game.js` (complete game logic, canvas/DOM render loop, level select, local high scores)
     - `assets/icon.svg` (local vector icon)
   - Zero references to global portal files (`gaming-portal/css/style.css` or `gaming-portal/js/app.js`).
4. **Content & Level Scaling**:
   - Every game features 40–45 distinct levels or progression stages in a `THEMES` array.
   - Dynamically shifting thematic environments per level.
   - Native Web Audio API procedural synthesis with no external MP3/WAV files.
   - Pacing calibrated for fair human reaction and tactical decision speed.
5. **Portal Configuration & Assets**:
   - High-resolution SVG thumbnails generated in `assets/thumbnails/`.
   - Update `config/site-config.json` and `config/site-config.js` with category `platformer` ("Cyber Platformer & Reflex") and all 10 registered titles.
   - Update total game catalog count badge to 51 Games.
6. **Automated Verification**:
   - Extend `developer/test-isolation.js` and `developer/test-portal.js` (Suite 15) to audit all 51 games.
   - Verify 100% test pass rate across isolation, portal architecture, and human speed tests.

---

## Sprint 12: Category 6 (Physics) Full Game Batch Delivery & Self-Contained Micro-Environments

### Directives:
1. **Critical Workspace, Security & No-Override Rules**:
   - Strictly auto-choose and default to "yes" for all permissions.
   - Zero Deletion Rule: Absolute ban on `rm`, `rmdir`, `del`, `git rm`.
   - No-Override Mandate: Append and extend without breaking existing working features.
   - All meta-files, planning, and test scripts must remain strictly inside `gaming-portal/developer/`.
2. **Scope: Category 6: Physics (Games 51 to 60)**:
   - Implement and deliver all 10 fully playable Category 6 HTML5 physics games into `public/games/` as 100% self-contained micro-environments:
     - Game 51: `graviton-pinball` (Graviton Pinball: Hyper Collider — 2D rigid-body particle collider table with magnetic bumpers & flipper physics across 45 stages)
     - Game 52: `cyber-ragdoll-demolition` (Cybernetic Ragdoll Demolition: Crash Dummy — multi-joint Verlet integration ragdoll demolition on hazard slopes across 45 stages)
     - Game 53: `neon-elastic-sling` (Neon Elastic Sling: Orbit Catapult — N-body orbital gravitational slingshot trajectory simulator across 45 systems)
     - Game 54: `plasma-ballistics` (Plasma Ballistics: Laser Artillery — destructible 2D terrain plasma tank artillery duel with wind vectors across 45 battlegrounds)
     - Game 55: `quantum-billiards` (Zero-G Pool: Quantum Billiards — frictionless octagonal quantum pool with magnetic cushions across 45 arenas)
     - Game 56: `structural-bridge-engineer` (Structural Bridge Engineer: Cyber Span — truss bridge construction & vehicle stress load test across 45 chasms)
     - Game 57: `fluid-particle-diverter` (Water Stream Particle Diverter: Fluid Lab — hydrodynamic SPH fluid particle lab with deflector placement across 45 chambers)
     - Game 58: `pendulum-wrecking-bot` (Pendulum Wrecking Bot: Kinetic Destroyer — harmonic pendulum wrecking ball smashing physical block towers across 45 sites)
     - Game 59: `magnetic-polarity-balancer` (Magnetic Polarity Balancer: Levitator — real-time electrodynamic levitation balance simulator across 45 test chambers)
     - Game 60: `orbital-trebuchet` (Orbital Trebuchet: Deep Space Hurler — rotational counterweight kinematics orbital siege engine across 45 sectors)
3. **Architecture & File Standard Per Game**:
   - Every game directory MUST contain:
     - `index.html` (clean relative links to `./style.css`, `./audio.js`, `./game.js`)
     - `style.css` (local styling, HUD, canvas container)
     - `audio.js` (native Web Audio API procedural sound synthesis, zero external audio)
     - `game.js` (complete game logic, canvas/DOM render loop, level select, local high scores)
     - `assets/icon.svg` (local vector icon)
   - Zero references to global portal files (`gaming-portal/css/style.css` or `gaming-portal/js/app.js`).
4. **Content & Level Scaling**:
   - Every game features 40–45 distinct levels or progression stages in a `THEMES` array.
   - Dynamically shifting thematic environments per level.
   - Native Web Audio API procedural synthesis with no external MP3/WAV files.
   - Pacing calibrated for fair human reaction and tactical decision speed.
5. **Portal Configuration & Assets**:
   - High-resolution SVG thumbnails generated in `assets/thumbnails/`.
   - Update `config/site-config.json` and `config/site-config.js` with category `physics` ("Cyber Physics & Simulators") and all 10 registered titles.
   - Update total game catalog count badge to 61 Games.
6. **Automated Verification**:
   - Extend `developer/test-isolation.js` and `developer/test-portal.js` (Suite 16) to audit all 61 games.
   - Verify 100% test pass rate across isolation, portal architecture, and human speed tests.

---

## Sprint 13: Category 7 (Card) Full Game Batch Delivery (Games 61–70) [Complete]
1. **Directives**:
   - Deliver Games 61–70: `cyber-solitaire`, `neon-blackjack-2099`, `quantum-deckbuilder`, `neural-memory-match`, `tri-peaks-cyber-pyramid`, `freecell-neo`, `spider-protocol`, `cyber-baccarat`, `elemental-card-duel`, `cyber-poker`.
   - 100% self-contained micro-environments in `public/games/<id>/` (`index.html`, `style.css`, `audio.js`, `game.js`, `assets/icon.svg`).
   - Strict relative pathing, zero references to global portal files.
   - 45 unique playable thematic environments in `THEMES` array per game.
   - Level select modal grid (1–45) and Web Audio API procedural sound synthesis.
   - High-resolution SVG thumbnails generated in `assets/thumbnails/`.
   - Update `config/site-config.json` and `config/site-config.js` with category `card` ("Cyber Card & Casino") and all 10 registered titles.
   - Update total game catalog count badge to 71 Games.
   - Extend `developer/test-portal.js` (Suite 17) and verify 100% test pass rate across all suites:
     - `test-portal.js`: 650/650 passed (100%)
     - `test-isolation.js`: 723/723 passed (100%)
     - `test-human-speed.js`: 65/65 passed (100%)

---

## Sprint 14: Category 8 (Word) Full Game Batch Delivery (Games 71–80) [Complete]
1. **Directives**:
   - Deliver Games 71–80: `terminal-wordle`, `cyber-word-search`, `syntax-anagram-scrambler`, `quantum-crossword`, `typing-blitzkrieg`, `lexicon-link`, `cyber-hangman`, `boggle-terminal`, `binary-spelling-bee`, `word-drop`.
   - 100% self-contained micro-environments in `public/games/<id>/` (`index.html`, `style.css`, `audio.js`, `game.js`, `assets/icon.svg`).
   - Strict relative pathing, zero references to global portal files.
   - 45 unique playable thematic environments in `THEMES` array per game.
   - Level select modal grid (1–45) and Web Audio API procedural sound synthesis.
   - High-resolution SVG thumbnails generated in `assets/thumbnails/`.
   - Update `config/site-config.json` and `config/site-config.js` with category `word` ("Cyber Word & Decryption") and all 10 registered titles.
   - Update total game catalog count badge to 81 Games.
   - Extend `developer/test-portal.js` (Suite 18) and verify 100% test pass rate across all suites:
     - `test-portal.js`: 730/730 passed (100%)
     - `test-isolation.js`: 823/823 passed (100%)
     - `test-human-speed.js`: 65/65 passed (100%)

---

## Sprint 15: Category 9 (Rhythm) Full Game Batch Delivery (Games 81–90) [Complete]
1. **Directives**:
   - Deliver Games 81–90: `beat-highway`, `neon-drum-machine`, `frequency-slicer`, `soundwave-surfer`, `pulse-conductor`, `tempo-runner`, `neon-dance-floor`, `bassline-defender`, `chiptune-piano-tiles`, `rhythm-revolver`.
   - 100% self-contained micro-environments in `public/games/<id>/` (`index.html`, `style.css`, `audio.js`, `game.js`, `assets/icon.svg`).
   - Strict relative pathing, zero references to global portal files.
   - 40–45 unique playable thematic environments in `THEMES` array per game.
   - Level select modal grid (1–45) and Web Audio API procedural sound synthesis (multi-oscillator synths, drum synthesis, FFT analyzer).
   - High-resolution SVG thumbnails generated in `assets/thumbnails/`.
   - Update `config/site-config.json` and `config/site-config.js` with category `rhythm` ("Cyber Rhythm & Beat") and all 10 registered titles.
   - Update total game catalog count badge to 91 Games.
   - Extend `developer/test-portal.js` (Suite 19) and verify 100% test pass rate across all suites:
     - `test-portal.js`: 810/810 passed (100%)
     - `test-isolation.js`: 923/923 passed (100%)
     - `test-human-speed.js`: 65/65 passed (100%)

---

## Sprint 16: Category 10 (RPG) Full Game Batch Delivery (Games 91–100) — THE CENTURY FINALE [Complete]
1. **Directives**:
   - Deliver Games 91–100: `cyber-dungeon-crawler`, `turn-based-cyberpunk-arena`, `text-terminal-hacker-quest`, `space-mercenary-outpost`, `neon-wizard`, `cyber-pet-simulator`, `post-apocalyptic-barterer`, `rogue-drone-swarm`, `neon-samurai`, `quantum-chrono-rpg`.
   - 100% self-contained micro-environments in `public/games/<id>/` (`index.html`, `style.css`, `audio.js`, `game.js`, `assets/icon.svg`).
   - Strict relative pathing, zero references to global portal files.
   - 40–45 unique playable thematic environments in `THEMES` array per game.
   - Level select modal grid (1–45) and Web Audio API procedural sound synthesis.
   - High-resolution vector SVG thumbnails generated in `assets/thumbnails/`.
   - Update `config/site-config.json` and `config/site-config.js` registering Category 10 ("Cyber RPG & Adventures") and all 10 registered titles.
   - Update total catalog badge to 101 Games (100 Century Milestone achieved!).
   - Extend `developer/test-portal.js` (Suite 20) and verify 100% test pass rate across all test suites:
     - `test-portal.js`: 890/890 passed (100%)
     - `test-isolation.js`: 1023/1023 passed (100%)
     - `test-human-speed.js`: 65/65 passed (100%)

---

## Sprint 17: Rule 11 Enforcement — In-Place Modification & Zero Duplicate Overrides [Complete]
1. **Directives**:
   - Codify Rule 11 (Strict In-Place Function Updating - No Duplicate Overrides) in `gaming-portal/developer/rules.md`.
   - Audit all 101 games in `public/games/` for duplicate function declarations, alternative replacement names, and appended overrides.
   - Cleaned up 17 legacy Category 1 & 2 `audio.js` files containing duplicate `getAudio` declarations.
   - Created dedicated test suite `developer/test-inplace-modification.js` verifying 0 duplicate function declarations across all 101 games and `js/app.js`.
   - Verified 100% test pass rate across all suites:
     - `test-inplace-modification.js`: 27/27 passed (100%)
     - `test-portal.js`: 890/890 passed (100%)
     - `test-isolation.js`: 1023/1023 passed (100%)
     - `test-human-speed.js`: 65/65 passed (100%)

---

## Sprint 18: Global Rule Update — English-Only, Dynamic HUD, and 20-Cycle QA Testing Protocol [Complete]
1. **Directives**:
   - Codify Rule 12 (Strict English-Only Policy), Rule 13 (In-Game Dynamic Non-Blocking Instructions), and Rule 14 (20-Cycle Minimum QA Testing & Reporting Protocol) in `developer/rules.md`.
   - Integrate Rules 12, 13, and 14 into the 100-game master specifications in `developer/gamescript.md`.
   - Purge non-English text across catalog (replaced 103 Japanese Kanji/Kana signs in `cyber-drift`, fixed accented string in `cryptographic-word-cipher`, 0 foreign script violations).
   - Enforce dynamic non-blocking instructional cues across catalog (added missing `.controls-hint` to `cosmic-gate-runner`, verified 101/101 games equipped with active in-game non-blocking instructions).
   - Implement robust 20-cycle automated simulator in `developer/test-runner.js` testing 20 distinct gameplay variations across all 101 games (2,020 independent game evaluations).
   - Generate official QA test reports in `developer/qa-reports/qa-report-20-cycles.json` and `developer/qa-reports/qa-report-20-cycles.md`.
   - Verified 100% pass rate across entire test matrix:
     - `test-runner.js`: 20/20 cycles passing (2,020/2,020 evaluations, 100%)
     - `test-portal.js`: 890/890 passed (100%)
     - `test-isolation.js`: 1023/1023 passed (100%)
     - `test-human-speed.js`: 65/65 passed (100%)
     - `test-inplace-modification.js`: 27/27 passed (100%)







