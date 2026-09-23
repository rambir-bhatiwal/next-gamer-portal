# The 100-Game Scaling Masterplan (`gamescript.md`)
## "Next Games/Game" — Master Prompt & Specification Repository for 100 HTML5 Web Games

---

## Universal Architecture & Global Development Directives 

Every game prompt in this master repository strictly enforces the active development standards:

1. **Framework Standard**: *"Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config."*
2. **Massive Level Scaling Mandate**: Every game MUST feature a minimum of **30 to 45 distinct, playable levels or progression stages**. Short, endless-only loops are strictly forbidden as standalone submissions. Games must implement definitive stage clear criteria, level transitions, and persistent stage progress in `localStorage`.
3. **Extreme Thematic Variety (Unique Theme Per Level)**: Every single level (from Level 1 up to Level 45) within a game MUST feature a **completely unique visual theme, color palette, and environmental architecture**.
   - *Archetype Progression Paradigm*: Level 1 (Neon Cyber-Grid), Level 2 (Bioluminescent Crystal Cave), Level 3 (Molten Core), Level 4 (Clockwork Sky-Fortress), Level 5 (Quantum Void), Level 6 (Submerged Hydro-Lab), Level 7 (Solar Flare Wasteland), Level 8 (Emerald Jungle Canopy), Level 9 (Frozen Cryo-Tundra), Level 10 (Gravity Inversion Nexus), continuing through 45 totally distinct environmental biomes.
   - Procedural generation algorithms, CSS art, and HTML5 Canvas drawing logic dynamically regenerate background architectures, obstacle designs, and color palettes so that **no two levels share identical visuals**.
4. **Procedural Web Audio API Mandate**: No external MP3 or WAV audio files may be downloaded from the internet. All sound effects, music tracks, and ambient soundscapes must be synthesized dynamically using the browser's native Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`). Audio parameters must dynamically shift to reflect the current level's unique thematic environment.
5. **Copyright-Free Visual Mandate**: Zero ripped commercial sprites or copyrighted character likenesses. All graphics must be rendered procedurally on HTML5 Canvas, styled with CSS3 art, or generated programmatically via inline SVG vectors.
6. **Portal Integration**: Each game must be completely self-contained in `public/games/<game-id>/index.html`, responsive to iframe embedding, mobile touch-friendly, and register cleanly in `config/site-config.json`.
7. **Strict English-Only Policy (Rule 12)**: Every text element across UI, HUD, dialogue, prompts, error alerts, and instructions must be written exclusively in English. No foreign characters or non-English scripts.
8. **In-Game Dynamic Non-Blocking Instructions (Rule 13)**: Replace/supplement static pre-game tutorials with real-time, non-blocking in-game instructional hints. "How to play" hints must appear contextually while the player is actively playing (e.g. floating text near obstacles, dynamic helper banners, fading directional arrows) without pausing or freezing the game loop.
9. **20-Cycle Minimum QA Testing & Reporting Protocol (Rule 14)**: Every game must undergo a strict automated testing loop a minimum of 20 times covering distinct lanes, answers, and level transitions, generating a detailed QA report.

---

# Category 1: Racing

### Game 1: Cosmic Gate Runner
- **Category**: Racing
- **Genre**: Pseudo-3D Neon Horizon Driver
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cosmic Gate Runner" for Next Games/Game
  - **Concept**: A high-velocity pseudo-3D cockpit perspective racing experience set across twisting highways in deep space with hyper-speed gate navigation and reaction checkpoints.
  - **Level Scaling & Progression**: Features exactly 45 distinct, playable levels (Levels 1 to 45). Each level features specific distance targets, tighter gate clearances, and escalating warp velocities. Progress saves automatically in localStorage.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**:
    - Level 1: Neon Cyber-Grid (Electric Cyan/Violet wireframe highway, synthwave horizon).
    - Level 2: Bioluminescent Crystal Cave (Phosphorescent teal stalactites, glowing fungal spores).
    - Level 3: Molten Core (Volcanic basalt track, magma geysers, ember particle rain).
    - Level 4: Clockwork Sky-Fortress (Brass cogs, steam vents, sepia/gold copper pipes).
    - Level 5: Quantum Void (Monochrome inverted highway, black hole gravitational lensing).
    - Levels 6 through 45: Dynamically shift through 40 additional unique environmental biomes (e.g., Solar Flare Corona, Emerald Nanite Spire, Sub-Zero Glacial Rift, Acid Rain Neo-Tokyo, Antimatter Nebula, Cyber Ruins), with custom canvas background architectures and distinct color palettes per level.
  - **Core Mechanics**: 3-lane steering (Left/Right arrows, A/D, touch); throttle acceleration and braking; green turbo gates (+150 speed); red hazard gates; rapid-fire quiz reaction checkpoints.
  - **Audio Implementation**: Procedurally synthesized via Web Audio API. Engine pitch shifts with throttle; soundscapes dynamically modulate frequencies and scales to mirror each level's unique thematic environment.
  - **Strict Mandates**:
    - Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config.
    - Zero external audio/image assets; 100% procedural Canvas visuals and Web Audio API synthesis.
    - Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 2: Isometric Precision Racer
- **Category**: Racing
- **Genre**: Isometric Tile Drift & Time-Trial
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Isometric Precision Racer" for Next Games/Game
  - **Concept**: High-precision top-down isometric racing game emphasizing tight cornering, counter-steering drift mechanics, and ghost time-trial challenges.
  - **Level Scaling & Progression**: Features 45 distinct playable track levels with increasing corner complexity, narrower apexes, and target ghost lap times.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**:
    - Level 1: Neon Metropolitan Roof (Cyan neon guardrails, dark wet asphalt).
    - Level 2: Bioluminescent Jungle Track (Organic glowing moss curbs, spore mist).
    - Level 3: Molten Foundry (Steel grating over bubbling slag, orange heat shimmer).
    - Level 4: Clockwork Aerodrome (Whirring bronze gears, steam hazards).
    - Levels 5 to 45: 41 additional distinct themes (Glacial Iceway, Desert Solar Farm, Underwater Glass Tunnel, Orbital Station Rim, Cyber Canyon, etc.) with unique procedural track tiles and color palettes for every level.
  - **Core Mechanics**: Isometric 2:1 projection; Left/Right steer, Up throttle, Down brake/reverse; Spacebar emergency drift; Overdrive boost multiplier; translucent ghost car recorder.
  - **Audio Implementation**: Web Audio API synthesis: FM modulated tire screeches, turbo boost whistles, and level-specific ambient engine resonance.
  - **Strict Mandates**:
    - Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config.
    - Zero external media; procedural Canvas isometric rendering and Web Audio API synthesis.
    - Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 3: Neon Horizon
- **Category**: Racing
- **Genre**: Outrun Synthwave Retro Highway Racer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Horizon" for Next Games/Game
  - **Concept**: An homage to classic arcade scaling racers with curved road projection, roadside wireframe scenery, and dynamic AI traffic dodging.
  - **Level Scaling & Progression**: Features 45 distinct highway stages, each with specific distance checkpoints, traffic density scaling, and stage-clear gates.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**:
    - Level 1: Miami Cyber-Coast (Neon pink wireframe palm trees, purple ocean reflections).
    - Level 2: Bioluminescent Rainforest Highway (Giant glowing ferns, green fireflies).
    - Level 3: Magma Trench Freeway (Obsidian road, red lava flows, smoke clouds).
    - Level 4: Victorian Clockwork Viaduct (Ornate iron streetlamps, golden smog).
    - Levels 5 to 45: 41 additional completely unique themes (Aurora Borealis Arctic, Cyber Canyon, Silicon Valley Server Highway, Hyper-Desert, Orbital Ringway, etc.) with custom roadside SVG/canvas scenery per stage.
  - **Core Mechanics**: Outrun-style road elevation and curvature algorithms; traffic AI near-miss scoring; emerald boost pads; responsive touch/keyboard steering.
  - **Audio Implementation**: Web Audio API synthesized multi-channel synthwave music loops that modulate tempo, key, and instrumentation across each level's theme.
  - **Strict Mandates**:
    - Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config.
    - Zero external audio/image downloads; procedural Canvas road math and Web Audio synthesizer.
    - Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 4: Quantum Velocity: Sub-Atomic GP
- **Category**: Racing
- **Genre**: Micro-Particle Slalom Racer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Quantum Velocity: Sub-Atomic GP" for Next Games/Game
  - **Concept**: Race a charged sub-atomic particle through an electromagnetic accelerator ring, dodging volatile positron clusters and utilizing magnetic field coils.
  - **Level Scaling & Progression**: 40 distinct accelerator stages with increasing relativistic velocities, complex magnetic barriers, and quantum coherence quotas.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique sub-atomic biomes ranging from Level 1: Hadron Ring (Cyan magnetic flux) to Level 2: Quark-Gluon Plasma (Amber fluid), Level 3: Dark Matter Singularity (Inverted purple), Level 4: Tachyon Field (Chromatic blur), through 40 distinct particle chamber aesthetics.
  - **Core Mechanics**: Particle steering; polarity inversion (Space); electron pickups; relativistic time-dilation mechanics.
  - **Audio Implementation**: Web Audio API resonant frequency chirps, magnetic coil hums, and relativistic Doppler pitch shifts.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 5: Cyber Drift: Tokyo Neo-Alley
- **Category**: Racing
- **Genre**: Top-Down Urban Drift Challenge
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Drift: Tokyo Neo-Alley" for Next Games/Game
  - **Concept**: Top-down alley drifting through futuristic urban backstreets, weaving around delivery drones, holographic kiosks, and tight 90-degree corners.
  - **Level Scaling & Progression**: 45 unique alley course stages with escalating target drift scores, tighter chicanes, and dynamic moving obstacles.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 completely unique city district themes (Level 1: Akihabara Neon Alley, Level 2: Shinjuku Rain Alley, Level 3: Industrial Harbor Slums, Level 4: Underground Maglev Hub, Level 5: Imperial Gardens, etc.) with custom asphalt textures and neon signage per stage.
  - **Core Mechanics**: 2D car drift physics with inertia, slip angles, and tire smoke; combo drift multiplier; time trial countdown.
  - **Audio Implementation**: Web Audio API synthesized tire slip noise, engine rumble oscillators, and Tokyo crosswalk synth arpeggios.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 6: Graviton Loop: Orbital Roller
- **Category**: Racing
- **Genre**: 360-Degree Pipe Racer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Graviton Loop: Orbital Roller" for Next Games/Game
  - **Concept**: Pilot a mag-lev pod around the 360-degree interior circumference of an endless cylindrical space pipeline, dodging repair scaffolding.
  - **Level Scaling & Progression**: 40 distinct orbital pipeline sectors with increasing roll velocity, moving laser barriers, and energy quotas.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 distinct pipe themes (Level 1: Clear Glass Stellar View, Level 2: Hydroponic Moss Pipe, Level 3: Geothermal Magma Conduit, Level 4: Cryogenic Nitrogen Tube, etc.) with unique procedural exterior vistas and pipe wall materials.
  - **Core Mechanics**: 360-degree rotational steering around pipe perimeter; ion thruster acceleration; laser gate evasion.
  - **Audio Implementation**: Low sub-bass thruster hum (sine 55Hz), filtered wind noise sweeps, and energy barrier zap effects via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 7: Solar Wind Sprint: Asteroid Slalom
- **Category**: Racing
- **Genre**: Space Slalom Speedrun
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Solar Wind Sprint: Asteroid Slalom" for Next Games/Game
  - **Concept**: Ride a photonic solar sail craft along high-speed stellar wind currents, weaving through asteroid slalom gates.
  - **Level Scaling & Progression**: 42 distinct cosmic course stages with shifting radiation currents and tighter asteroid gates.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 42 distinct stellar biomes (Level 1: Yellow Dwarf Orbit, Level 2: Blue Supergiant Flare, Level 3: Red Giant Nebular Dust, Level 4: Pulsar Magnetosphere, etc.) with distinct celestial skyboxes and asteroid compositions.
  - **Core Mechanics**: Sail angle trimming to catch photon propulsion vectors; slalom gate scoring; asteroid avoidance.
  - **Audio Implementation**: Cosmic ambient resonance, solar wind filtered noise, and solar flare pulse stings via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 8: Hyper Maglev: Monorail Blitz
- **Category**: Racing
- **Genre**: Multi-Track Bullet Train Switcher
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Hyper Maglev: Monorail Blitz" for Next Games/Game
  - **Concept**: Command a 600km/h supersonic maglev train hurtling across a complex skyway network, switching between parallel tracks to dodge maintenance drones.
  - **Level Scaling & Progression**: 45 unique transit sectors connecting remote megacities, with escalating switch frequencies and hazard densities.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct transit biomes (Level 1: Skyway Spire Heights, Level 2: Sub-Oceanic Glass Tunnel, Level 3: Desert Canyon Viaduct, Level 4: Volcanic Geothermal Bridge, etc.) with unique track architectures and cityscape backgrounds.
  - **Core Mechanics**: Instantaneous lane switching; emergency magnetic braking; energy pickup collection.
  - **Audio Implementation**: Electric magnetic rail hum (180Hz-440Hz), track switch clacks, and station arrival synth chimes via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 9: Tachyon Overdrive: Temporal Time-Trial
- **Category**: Racing
- **Genre**: Time-Reversal Checkpoint Racer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Tachyon Overdrive: Temporal Time-Trial" for Next Games/Game
  - **Concept**: Race against time with the ability to rewind the past 3 seconds of track progression to correct fatal crashes, optimizing every corner entry.
  - **Level Scaling & Progression**: 45 distinct time-trial circuits with strict completion countdowns and challenging chicane layouts.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique temporal eras (Level 1: Neo-Kyoto 2099, Level 2: Jurassic Bioluminescence, Level 3: Steampunk London 1888, Level 4: Dying Cosmos 5000, etc.) with custom temporal glitch shaders and architectural scenery per stage.
  - **Core Mechanics**: 2D racing physics; Spacebar engages Tachyon Rewind; rewind buffer energy bar refills through clean driving.
  - **Audio Implementation**: Reversed audio envelopes, chronological clock ticking, and tachyon pulse detonations via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 10: Plasma Hydrofoil: Cyberpunk Waterway
- **Category**: Racing
- **Genre**: Jet-Ski Water Physics Racer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Plasma Hydrofoil: Cyberpunk Waterway" for Next Games/Game
  - **Concept**: Pilot an electrified jet hydrofoil through illuminated canal systems, mastering wake jumping, wave physics, and turbulent water drifting.
  - **Level Scaling & Progression**: 45 unique aquatic canal stages with increasing wave turbulence, floating mines, and stunt point quotas.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct waterway environments (Level 1: Neo-Venice Neon Canals, Level 2: Bioluminescent Mangrove Swamp, Level 3: Industrial Acid Drainage, Level 4: Glacial Meltwater Fjord, etc.) with custom water shaders and weather conditions.
  - **Core Mechanics**: Water buoyancy and wave displacement physics; ramp jumping with mid-air stunt scoring; water friction drifting.
  - **Audio Implementation**: Procedural water splash noise filters, twin-rotor engine synth, and ramp launch audio stings via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 2: Arcade

### Game 11: Neon Pong: Hyper Duel
- **Category**: Arcade
- **Genre**: Vector Paddle Combat
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Pong: Hyper Duel" for Next Games/Game
  - **Concept**: Vector paddle duel with dynamic deflection physics, kinetic spin curves, and an adaptive neural AI rival.
  - **Level Scaling & Progression**: 45 distinct challenge stages against progressive AI neural archetypes (Beginner, Spin-Master, Wall-Bouncer, Hyper-Speed, Quantum Predictor).
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique arena themes (Level 1: Cyan/Magenta Void, Level 2: Amber Laser Matrix, Level 3: Emerald Holographic Grid, Level 4: Glacial Blue Arena, Level 5: Volcanic Obsidian Court, etc.) with custom court boundaries and particle effects per level.
  - **Core Mechanics**: Target score victory condition; paddle hit deflection physics; ball spin acceleration; power smashes.
  - **Audio Implementation**: Web Audio API square-wave blips on paddle impacts, bass drops on scoring, and level-specific victory arpeggios.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 12: Cyber Runner 2099
- **Category**: Arcade
- **Genre**: Stage-Based Neon Cyber Runner
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Runner 2099" for Next Games/Game
  - **Concept**: Sprint across cyber-city rooftops and highways, jumping over photon barriers and sliding under high-beam lasers across structured stages.
  - **Level Scaling & Progression**: 45 distinct stage-based courses with distance milestones, boss defense gates, and speed increments.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 completely unique environments (Level 1: Rooftop Cyber-Grid, Level 2: Bioluminescent Underground Metro, Level 3: Smoggy Factory District, Level 4: Golden Skyscraper Spire, etc.) with procedural background architectures shifting per level.
  - **Core Mechanics**: Jump and slide mechanics; procedural obstacle streams; energy cell pickups; stage completion flags.
  - **Audio Implementation**: Web Audio API oscillator jumps, slide whooshes, and level-themed synth beats.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 13: Retro Grid Invaders: Vector Swarm
- **Category**: Arcade
- **Genre**: Space Invaders Vector Homage
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Retro Grid Invaders: Vector Swarm" for Next Games/Game
  - **Concept**: Defend the planetary base against marching formations of geometric vector aliens that descend progressively faster.
  - **Level Scaling & Progression**: 45 unique alien invasion waves with shifting enemy movement algorithms, dive-bombing bosses, and destructible defense shields.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct atmospheric sectors (Level 1: Moonbase Alpha, Level 2: Martian Red Sky, Level 3: Saturnian Ring Dust, Level 4: Europa Ice Crust, etc.) with distinct alien vector geometries and color palettes.
  - **Core Mechanics**: Horizontal movement and laser cannon fire; bunker destruction physics; mystery mothership flybys.
  - **Audio Implementation**: 4-note descending bass pulse marching tempo and explosion noise hits synthesized via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 14: Helix Breaker: Neon Brick Buster
- **Category**: Arcade
- **Genre**: Cybernetic Breakout / Arkanoid
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Helix Breaker: Neon Brick Buster" for Next Games/Game
  - **Concept**: Smash through neon multi-hit brick matrices with a laser paddle, deploying multi-ball powerups, explosive bricks, and laser blasters.
  - **Level Scaling & Progression**: 45 hand-crafted and procedurally structured brick layout levels with moving brick shields and boss brick clusters.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct brick themes (Level 1: Circuit Board Green, Level 2: Crystal Amethyst, Level 3: Solar Gold, Level 4: Deep Ocean Cyan, etc.) with unique brick textures and particle explosion aesthetics per level.
  - **Core Mechanics**: Paddle deflection angle physics; multi-hit bricks; falling capsule powerups (Multi-Ball, Laser, Wide Paddle).
  - **Audio Implementation**: Ascending scale synth pings on consecutive hits and powerup fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 15: Asteroid Shatter: Deep Space Vector
- **Category**: Arcade
- **Genre**: 360-Degree Vector Asteroids
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Asteroid Shatter: Deep Space Vector" for Next Games/Game
  - **Concept**: Newtonian drift space shooter. Rotate, thrust, and disintegrate floating space rocks into smaller fragments without getting crushed across 45 sectors.
  - **Level Scaling & Progression**: 45 unique asteroid belt sectors with escalating density, magnetic ore clusters, and hostile alien saucers.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct deep-space sectors (Level 1: Orion Nebula Violet, Level 2: Crab Nebula Amber, Level 3: Oort Cloud Ice Blue, Level 4: Supernova Remnant Red, etc.) with unique starfield densities and asteroid rock palettes.
  - **Core Mechanics**: Inertial velocity physics; ship rotation and acceleration; multi-tier asteroid splitting; hyperspace teleport.
  - **Audio Implementation**: Web Audio API thruster rumble, high-pitch laser zap, and deep low-pass explosive blasts.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 16: Cyber Snake 3000: Quantum Feed
- **Category**: Arcade
- **Genre**: Neon Cyber Snake
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Snake 3000: Quantum Feed" for Next Games/Game
  - **Concept**: Guide a glowing data-serpent through digital motherboard labyrinths, consuming encrypted energy packets that extend body length.
  - **Level Scaling & Progression**: 45 distinct grid puzzle stages with internal labyrinth walls, portals, moving hazards, and target length victory goals.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct motherboard themes (Level 1: Classic Green PCB, Level 2: Cyber Cyan Fiber, Level 3: Dark Matter Obsidian, Level 4: Gold Nanotube Array, etc.) with custom grid line styles and food node shapes.
  - **Core Mechanics**: 4-directional grid movement; self-collision and obstacle detection; special countdown multiplier nodes.
  - **Audio Implementation**: Digital byte pings on feed, wall impact crash, and level clear arpeggios via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 17: Pixel Drop: Neon Tetromino Collapse
- **Category**: Arcade
- **Genre**: Classic Block Stacking Arcade
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Pixel Drop: Neon Tetromino Collapse" for Next Games/Game
  - **Concept**: Fast-paced falling block puzzle where complete horizontal rows trigger line clears across 45 structured mission stages.
  - **Level Scaling & Progression**: 45 distinct puzzle stages (clear 10 lines, clear under 60 seconds, clear pre-placed garbage blocks, survive at maximum gravity).
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct themes (Level 1: Cyber Neon Matrix, Level 2: Glacial Crystal Blocks, Level 3: Molten Rock Blocks, Level 4: Steampunk Brass Blocks, etc.) with unique tetromino textures and line-clear explosion effects.
  - **Core Mechanics**: 7 geometric tetrominoes; SRS rotation system; hard drop, soft drop, hold queue.
  - **Audio Implementation**: Rotation ticks, hard drop thuds, multi-line clear chords, and stage victory fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 18: Vortex Missile Command: Defense 2090
- **Category**: Arcade
- **Genre**: Ballistic Counter-Battery Defense
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Vortex Missile Command: Defense 2090" for Next Games/Game
  - **Concept**: Defend metropolitan domes against incoming ballistic warheads by aiming and detonating timed interceptor flak clouds.
  - **Level Scaling & Progression**: 45 escalating military defense stages with fast MIRV splitters, stealth bombers, and EMP missiles.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct global capital themes (Level 1: Neo-Tokyo Skyline, Level 2: Cyber-London River Thames, Level 3: Neo-Cairo Pyramids, Level 4: Arctic Defense Base, etc.) with custom cityscape silhouettes and sky palettes.
  - **Core Mechanics**: Flak interception targeting; lingering blast chain-reactions; ammo conservation.
  - **Audio Implementation**: Launch whistle, flak explosion booms, and city destruction alarms synthesized via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 19: Turbo Pac-Grid: Cyber Maze Run
- **Category**: Arcade
- **Genre**: Neon Labyrinth Pellet Chaser
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Turbo Pac-Grid: Cyber Maze Run" for Next Games/Game
  - **Concept**: Traverse glowing cyber-labyrinths consuming data bits while evading four patrolling security subroutines.
  - **Level Scaling & Progression**: 45 unique maze corridor layouts with moving gates, teleport portals, and faster AI pursuit routines.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique labyrinth aesthetics (Level 1: Classic Neon Blue Maze, Level 2: Circuit Green Matrix, Level 3: Molten Red Labyrinth, Level 4: Ice Crystal Cavern, etc.) with distinct wall shaders and pellet designs.
  - **Core Mechanics**: 4-way maze navigation; Quantum Overcharge pellets; fruit score bonuses; stage clear on full pellet consumption.
  - **Audio Implementation**: Continuous dual-tone frequency alternator, siren pitch sweeps, and ghost eat stings via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 20: Neon Centipede: Biosphere Purge
- **Category**: Arcade
- **Genre**: Fixed Shooter Insect Swarm
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Centipede: Biosphere Purge" for Next Games/Game
  - **Concept**: Control a laser buggy blasting a segmented neon centipede winding down the screen through fungal obstacle nodes.
  - **Level Scaling & Progression**: 45 distinct garden stages with increasing centipede segment counts, faster descending fleas, and erratic spider spawns.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct bio-dome themes (Level 1: Cyber-Mushroom Forest, Level 2: Coral Reef Garden, Level 3: Toxic Slime Biosphere, Level 4: Crystal Stalactite Cave, etc.) with unique obstacle shapes and insect colors.
  - **Core Mechanics**: 2D lower-boundary player movement; rapid laser fire; segment split physics upon projectile impact.
  - **Audio Implementation**: Insect step synthesis, laser clicks, and mushroom pop tones via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 3: Puzzle

### Game 21: Quantum Matrix Hacker
- **Category**: Puzzle
- **Genre**: Match-3 Data Sequence Decryptor
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Quantum Matrix Hacker" for Next Games/Game
  - **Concept**: Swap adjacent quantum data nodes on a 6x6 security grid to form sequences of 3 or more matching cryptographic glyphs before the firewall clock expires.
  - **Level Scaling & Progression**: 45 distinct firewall decryption stages with escalating target scores, locked nodes, firewall surges, and tighter clock timers.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique mainframe themes (Level 1: Core Subnet Alpha, Level 2: Cryo-Memory Bank, Level 3: Quantum Flux Chamber, Level 4: Dark Web Proxy, etc.) with dynamically shifting cryptographic symbols and background terminal graphics per level.
  - **Core Mechanics**: Node swap mechanics; match 3 cascade drops; combo multipliers; time attack bonuses.
  - **Audio Implementation**: Node swap click, harmonious chord progression on match cascades, and firewall warning sirens via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 22: Chrono Switch: Phase Shift
- **Category**: Puzzle
- **Genre**: Dual-Polarity Reflex Puzzle
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Chrono Switch: Phase Shift" for Next Games/Game
  - **Concept**: Phase-shift your particle core between energy polarities in real-time to match and absorb incoming laser gates across 45 staged levels.
  - **Level Scaling & Progression**: 45 unique stage levels with increasing gate frequencies, moving polarity beams, and color-matched absorption quotas.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct polarity rift themes (Level 1: Cyan/Magenta Rift, Level 2: Emerald/Amber Flux, Level 3: Gold/Violet Void, Level 4: Monochrome Phase, etc.) with custom background waveforms and gate geometries.
  - **Core Mechanics**: Spacebar / tap switches active color polarity; matching absorbs gates; mismatch results in phase collapse.
  - **Audio Implementation**: High-pitch phase toggle bleeps, harmonic absorption chimes, and collapse noise blast via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 23: Laser Circuit Reflector: Prism Grid
- **Category**: Puzzle
- **Genre**: Optical Laser Beam Redirection
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Laser Circuit Reflector: Prism Grid" for Next Games/Game
  - **Concept**: Rotate and place mirrors, prisms, and beam splitters across an electronic breadboard to guide photon laser beams from source emitters to targets.
  - **Level Scaling & Progression**: 45 hand-crafted optical logic puzzles scaling from simple 2-mirror setups to complex multi-color prism splitters.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct lab bench themes (Level 1: Cleanroom Breadboard, Level 2: Holographic Optical Table, Level 3: Silicon Wafer Fab, Level 4: Deep Space Sensor Array, etc.) with custom laser color spectrums and mirror finishes.
  - **Core Mechanics**: Click to rotate mirrors; color mixing physics (Red + Green = Yellow); target receptor activation.
  - **Audio Implementation**: Optical hum frequencies, mechanical mirror click sounds, and target resonance chords via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 24: Cyber Sudoku: Binary Node Matrix
- **Category**: Puzzle
- **Genre**: 9x9 Logic Number Grid
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Sudoku: Binary Node Matrix" for Next Games/Game
  - **Concept**: Cyberpunk 9x9 Sudoku with neon grid highlights, smart error checking, and note-taking pencil modes across 45 graded difficulty stages.
  - **Level Scaling & Progression**: 45 distinct Sudoku puzzle stages categorized from Easy (Levels 1–15) to Medium (16–30) and Master (31–45).
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct terminal matrix themes (Level 1: Cyan Data Terminal, Level 2: Amber Ambergrid, Level 3: Emerald Linux Shell, Level 4: Violet Crypt, etc.) with custom digit font aesthetics and focus highlight colors.
  - **Core Mechanics**: Standard Sudoku logic; pencil note mode; undo/redo stack; error counter.
  - **Audio Implementation**: Gentle tonal feedback for placement, discordant buzz for errors, and completed puzzle arpeggios via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 25: Holographic Pipe Fusion: Flux Router
- **Category**: Puzzle
- **Genre**: Rotational Tile Flow Puzzle
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Holographic Pipe Fusion: Flux Router" for Next Games/Game
  - **Concept**: Rotate scrambled circuit conduits on a grid to forge an uninterrupted plasma flux pathway connecting generators to reactor cores.
  - **Level Scaling & Progression**: 45 unique pipe routing puzzles with expanding grid dimensions (4x4 up to 10x10) and multiple simultaneous fluid colors.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct reactor environments (Level 1: Fusion Core Alpha, Level 2: Hydroponic Water Lines, Level 3: Geothermal Steam Grid, Level 4: Cryo-Coolant Pipes, etc.) with unique pipe cross-sections and fluid glow effects.
  - **Core Mechanics**: Click to rotate tiles 90 degrees; fluid flow validation; countdown timer mode.
  - **Audio Implementation**: Mechanical ratchet rotation sounds, plasma fluid rush noise, and power lock triumph tones via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 26: Neuro-Link Soko-Bot: Memory Mover
- **Category**: Puzzle
- **Genre**: Cyberpunk Sokoban Box Pusher
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neuro-Link Soko-Bot: Memory Mover" for Next Games/Game
  - **Concept**: Control a maintenance automaton pushing quantum memory blocks onto designated server docking pads within constrained cleanrooms.
  - **Level Scaling & Progression**: 45 progressively challenging hand-crafted Sokoban puzzle stages requiring forward planning and spatial reasoning.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique cleanroom environments (Level 1: Server Room Blue, Level 2: Nanotech Storage Yellow, Level 3: Quantum Vault Purple, Level 4: Bio-Data Archive Green, etc.) with unique floor tiles and crate models.
  - **Core Mechanics**: Classic Sokoban pushing rules; undo button; step move counter.
  - **Audio Implementation**: Servo motor hums, crate scrape sounds, and docking pad lock-in chimes via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 27: Quantum Nonogram: Cyber Picross
- **Category**: Puzzle
- **Genre**: Picture Logic Number Grid
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Quantum Nonogram: Cyber Picross" for Next Games/Game
  - **Concept**: Deduce and reveal hidden pixel art glyphs by filling grid cells according to numeric row and column clues across 45 puzzle stages.
  - **Level Scaling & Progression**: 45 unique nonogram picture puzzles scaling from 5x5 up to 15x15 grids depicting cybernetic icons and tech symbols.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct blueprint themes (Level 1: Blueprint Cyan, Level 2: Radar Green, Level 3: Hologram Gold, Level 4: Darkroom Red, etc.) with unique cell fill patterns and revealed icon art.
  - **Core Mechanics**: Primary click fills node; secondary click places "X" exclusion marker; clue verification engine.
  - **Audio Implementation**: Digital toggles, clue completion chime, and completed art triumph jingle via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 28: Hexa-Tile Polarity Match: Hex Matrix
- **Category**: Puzzle
- **Genre**: Hexagonal Color Chain Connect
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Hexa-Tile Polarity Match: Hex Matrix" for Next Games/Game
  - **Concept**: Connect adjacent hexagonal energy tiles of matching color polarities to build unbroken circuit bridges across a honeycomb board.
  - **Level Scaling & Progression**: 45 unique hexagonal puzzle boards with obstacles, locked nodes, and limited move budgets.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct honeycomb themes (Level 1: Honeycomb Cyan, Level 2: Beehive Gold, Level 3: Cyber Violet, Level 4: Carbon Fiber Gray, etc.) with custom hex border illuminations and pulse effects.
  - **Core Mechanics**: Hexagonal graph pathfinding; move budget management; chain reaction score multipliers.
  - **Audio Implementation**: Pentatonic scale pings for each link in a chain, culminating in a synthesized harmonic resolution upon bridge completion.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 29: Cryptographic Word Cipher: Decryptor
- **Category**: Puzzle
- **Genre**: Cryptogram Letter Substitution
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cryptographic Word Cipher: Decryptor" for Next Games/Game
  - **Concept**: Decode intercepted cyber-intelligence communiqués by substituting encrypted symbols with the correct alphabetical letters.
  - **Level Scaling & Progression**: 45 distinct encrypted intelligence briefs ranging from short quotes to complex multi-paragraph secret logs.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique terminal interfaces (Level 1: Retro Green CRT, Level 2: Amber Decryption Desk, Level 3: Cyber Blue NSA Terminal, Level 4: Ghost In The Shell Purple, etc.) with distinct scanlines and typography styles.
  - **Core Mechanics**: Letter substitution mapping; automatic letter propagation; hint system; solution verification.
  - **Audio Implementation**: Mechanical keyboard clatter clicks, teletype data feed audio, and decryption success fanfare via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 30: Nanite Slide Puzzle: Core Reassembly
- **Category**: Puzzle
- **Genre**: 15-Puzzle Sliding Tile Brainteaser
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Nanite Slide Puzzle: Core Reassembly" for Next Games/Game
  - **Concept**: Reassemble scrambled quantum energy cores by sliding numbered tiles into chronological sequence within a grid containing an empty space.
  - **Level Scaling & Progression**: 45 distinct sliding puzzle stages ranging from 3x3 (Easy) to 4x4 (Classic 15-puzzle) and 5x5 (Master 24-puzzle).
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique energy core themes (Level 1: Titanium Cyber Core, Level 2: Plasma Gold Reactor, Level 3: Emerald Ion Matrix, Level 4: Dark Energy Cube, etc.) with custom tile materials and completed artwork backgrounds.
  - **Core Mechanics**: Click/arrow key sliding into empty space; move counter; timer; solvable configuration generator.
  - **Audio Implementation**: Metallic slide thuds, magnetic snap clicks, and stage completion triumph synth via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 4: Strategy

### Game 31: Orbital Defense: Sentinel
- **Category**: Strategy
- **Genre**: 360-Degree Planetary Defense
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Orbital Defense: Sentinel" for Next Games/Game
  - **Concept**: Command a 360-degree rotational shield and battery station orbiting Earth, intercepting converging meteors and rogue satellites across 45 defensive stages.
  - **Level Scaling & Progression**: 45 unique planetary defense stages with escalating threat counts, cluster meteors, stealth drones, and planetary boss asteroids.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct planetary orbit biomes (Level 1: Earth Orbit Cyan, Level 2: Mars Orbit Red, Level 3: Jupiter Auroral Orbit, Level 4: Saturnian Rings, etc.) with custom planetary textures and atmospheric halos.
  - **Core Mechanics**: 360-degree turret aiming; interceptor missile firing; planetary shield health gauge; EMP shockwave abilities.
  - **Audio Implementation**: Missile launch hiss, explosion pops, core breach alarm, and shield recharge chime via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 32: Cyber Tower Defense: Subnet Guardian
- **Category**: Strategy
- **Genre**: Grid Tower Defense
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Tower Defense: Subnet Guardian" for Next Games/Game
  - **Concept**: Position defensive cyber-nodes along network data pathways to eliminate hostile malware packet worms across 45 sector levels.
  - **Level Scaling & Progression**: 45 unique network map stages with branching pathways, multiple entry portals, and boss malware strains.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct subnet themes (Level 1: Mainframe Core, Level 2: Cloud Storage Node, Level 3: VPN Tunnel, Level 4: Quantum Datacenter, etc.) with custom pathway geometry and packet particle colors.
  - **Core Mechanics**: Bit resource generation; tower placement (Pulse, Cryo, EMP, Railgun); tower upgrades; enemy armor and speed variants.
  - **Audio Implementation**: Tower build clicks, beam zap frequencies, and malware deletion pings via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 33: Galactic Fleet Commander: Turn-Based Tactics
- **Category**: Strategy
- **Genre**: Hex-Grid Space Fleet Tactics
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Galactic Fleet Commander: Turn-Based Tactics" for Next Games/Game
  - **Concept**: Command a squadron of space cruisers, interceptors, and torpedo boats on a turn-based hexagonal battlefield against an AI admiral across 45 missions.
  - **Level Scaling & Progression**: 45 tactical fleet missions with differing fleet compositions, asteroid cover, and tactical objectives.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct star sectors (Level 1: Sector 001 Orion, Level 2: Binary Star Helix, Level 3: Black Hole Event Horizon, Level 4: Ghost Nebula, etc.) with unique cosmic backdrops and hex grid aesthetics.
  - **Core Mechanics**: Action point system; weapon firing arcs (front, broadside); directional shields; turn end resolution.
  - **Audio Implementation**: Tactical order confirmation chirps, heavy railgun cannon blasts, and shield deflection hums via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 34: Micro-Colony Automaton: Base Architect
- **Category**: Strategy
- **Genre**: Grid Resource Management & City Builder
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Micro-Colony Automaton: Base Architect" for Next Games/Game
  - **Concept**: Establish and balance off-world lunar outposts across 40 planetary sectors, managing power grids, oxygen extractors, and worker drones.
  - **Level Scaling & Progression**: 40 distinct colony milestone stages with specific population goals, hostile environmental hazards, and terraforming quotas.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique extraterrestrial planetary surfaces (Level 1: Lunar Mare Gray, Level 2: Martian Dust Plains, Level 3: Titan Hydrocarbon Lakes, Level 4: Venusian Acid Highlands, etc.) with custom terrain palettes and dome architectures.
  - **Core Mechanics**: Resource generation loops (Power, Oxygen, Minerals); structure placement; random hazard mitigation.
  - **Audio Implementation**: Airlock hums, construction placement thuds, and low-oxygen warning alert sirens via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 35: Hacker Node Conquest: Subnet Dominance
- **Category**: Strategy
- **Genre**: Node Graph Capture (Galcon-style)
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Hacker Node Conquest: Subnet Dominance" for Next Games/Game
  - **Concept**: Dispatch packets between network nodes to overwhelm and conquer neutral and rival server clusters in fast-paced real-time graph warfare across 45 stages.
  - **Level Scaling & Progression**: 45 unique node topological network layouts with differing node capacities, connection bandwidths, and multi-AI factions.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct network visualization themes (Level 1: Silicon Valley Intranet, Level 2: Dark Web Onion Graph, Level 3: Quantum Supercomputer, Level 4: Global Banking Wire, etc.) with custom node shapes and packet stream colors.
  - **Core Mechanics**: Drag-and-release packet dispatching; node packet generation; neutral node capture; complete subnet conquest victory.
  - **Audio Implementation**: Rapid packet dispatch clicks, node capture power hums, and victory terminal fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 36: Cyberpunk Mech Tactics: Grid Skirmish
- **Category**: Strategy
- **Genre**: Turn-Based Mech Skirmish
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyberpunk Mech Tactics: Grid Skirmish" for Next Games/Game
  - **Concept**: Control a squad of 3 specialized combat mechs in turn-based tactical combat on a destructible city grid across 45 campaign skirmishes.
  - **Level Scaling & Progression**: 45 campaign skirmish maps with varying enemy mech squad configurations, extraction objectives, and boss mechs.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct battleground themes (Level 1: Industrial Docks, Level 2: Corporate Plaza, Level 3: Slum Rooftops, Level 4: Underground Maglev Depot, etc.) with custom building models and destructible objects.
  - **Core Mechanics**: Grid movement points; cover mechanics (light/heavy); weapon heat management; line-of-sight targeting.
  - **Audio Implementation**: Hydraulic servo footsteps, missile volley screeches, and armor impact clangs via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 37: Bio-Dome Terraform Protocol: Ecosystem Sim
- **Category**: Strategy
- **Genre**: Ecological Balance Strategy
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Bio-Dome Terraform Protocol: Ecosystem Sim" for Next Games/Game
  - **Concept**: Regulate atmospheric gases, temperature, moisture, and microbial life inside an enclosed biosphere dome across 40 ecosystem development stages.
  - **Level Scaling & Progression**: 40 distinct ecological scenario stages ranging from reviving barren arid rock to stabilizing tropical coral biomes.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique biome themes (Level 1: Barren Basalt Dome, Level 2: Lichen Tundra Dome, Level 3: Coniferous Alpine Dome, Level 4: Tropical Rainforest Dome, etc.) with distinct procedural flora and atmospheric lighting.
  - **Core Mechanics**: Gas ratio adjustments; catalytic microbe deployment; solar radiation spike management.
  - **Audio Implementation**: Bubbling ambient filters, wind noise modulation, and ecosystem milestone chords via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 38: Drone Swarm Commander: Tactical Patrol
- **Category**: Strategy
- **Genre**: Real-Time Swarm Control
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Drone Swarm Commander: Tactical Patrol" for Next Games/Game
  - **Concept**: Direct an autonomous swarm of 50 micro-drones using flocking behavior algorithms to patrol sectors and intercept hostile intruders across 45 missions.
  - **Level Scaling & Progression**: 45 unique tactical patrol stages with expanding sector radii, electronic jamming zones, and heavily armored enemy infiltrators.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct patrol zone themes (Level 1: Perimeter Fence Alpha, Level 2: Sub-Level Server Vault, Level 3: Chemical Vat Facility, Level 4: Skyward Relay Tower, etc.) with custom radar terrain grids.
  - **Core Mechanics**: Flocking Boids algorithms; stance switching (Aggressive, Defense, Harvest); formation manipulation.
  - **Audio Implementation**: High-frequency drone propeller hum, micro-laser chirps, and target explosion pops via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 39: AI Defense Matrix: Neural Firewall War
- **Category**: Strategy
- **Genre**: Asymmetric Cyber Defense
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "AI Defense Matrix: Neural Firewall War" for Next Games/Game
  - **Concept**: Defend a sentient AI core against an escalating cyber-assault by deploying adaptive encryption layers and honeypots across 45 defensive stages.
  - **Level Scaling & Progression**: 45 unique cyber-warfare breach stages with multi-threaded intrusion vectors, Trojan infiltrators, and brute-force attacks.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct neural network themes (Level 1: Synaptic Blue Matrix, Level 2: Cortical Amber Lattice, Level 3: Deep Mind Violet Core, Level 4: Cybernetic Optic Net, etc.) with custom node graph layouts.
  - **Core Mechanics**: CPU cycle resource allocation; node quarantine and tracing; encrypted honeypot lures.
  - **Audio Implementation**: Modem handshake tones, CPU clock pulse tempo, and firewall breach alarms via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 40: Space Station Outpost: Resource Balancer
- **Category**: Strategy
- **Genre**: Supply Chain Logistics
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Space Station Outpost: Resource Balancer" for Next Games/Game
  - **Concept**: Optimize trade routes, orbital shuttles, and storage silos between asteroid mining outposts and deep space refineries across 40 solar sectors.
  - **Level Scaling & Progression**: 40 distinct trade network stages with escalating market volatility, pirate threats, and fuel consumption quotas.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 distinct solar sectors (Level 1: Inner Mercury Relay, Level 2: Asteroid Ceres Hub, Level 3: Jovian Orbital Depot, Level 4: Kuiper Belt Outpost, etc.) with custom celestial planetary backdrops.
  - **Core Mechanics**: Shuttle transit dispatching; market price fluctuations; fuel vs profit trade-offs; pirate raid defense.
  - **Audio Implementation**: Morse-code radio telemetry, docking clamp release clunks, and financial transaction chimes via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 5: Platformer

### Game 41: Neon Gravity Jumper: Dual-Floor Flip
- **Category**: Platformer
- **Genre**: Gravity-Inverting Runner
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Gravity Jumper: Dual-Floor Flip" for Next Games/Game
  - **Concept**: Sprint across dual parallel ceiling and floor tracks, inverting gravity with precise timing across 45 unique level courses.
  - **Level Scaling & Progression**: 45 distinct platforming stages featuring moving laser barriers, vanishing blocks, and velocity boosts.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 completely unique stage themes (Level 1: Neon Cyber-Grid, Level 2: Bioluminescent Crystal Cave, Level 3: Molten Core, Level 4: Clockwork Sky-Fortress, Level 5: Quantum Void, continuing through 45 distinct biomes) with dynamic background structures and shifting track colors.
  - **Core Mechanics**: Spacebar / tap inverts gravity; horizontal platforming momentum; floating energy orb collection; stage clear checkpoints.
  - **Audio Implementation**: Gravity inversion whoosh, orb pickup arpeggio, and spike impact noise burst via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 42: Cyber Ninja: Shadow Shuriken Dash
- **Category**: Platformer
- **Genre**: Precision Wall-Jump Platformer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Ninja: Shadow Shuriken Dash" for Next Games/Game
  - **Concept**: Guide an agile cybernetic shinobi through vertical towers, wall-sliding, air-dashing, and throwing shurikens across 45 stealth levels.
  - **Level Scaling & Progression**: 45 distinct platforming challenge stages with moving laser grids, patrolling guard drones, and vertical elevator shafts.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique tower themes (Level 1: Rooftop Neo-Dojo, Level 2: Neon Bamboo Garden, Level 3: Corporate Server Core, Level 4: Industrial Scrap Yard, etc.) with custom weather and architectural silhouettes.
  - **Core Mechanics**: Double jumping, wall sliding/jumping, Shift air-dash, shuriken projectile throwing.
  - **Audio Implementation**: Katana slash whooshes, shuriken metallic whir, footstep taps, and laser deflection clinks via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 43: Nanotech Crawler: Magnetic Surface Climb
- **Category**: Platformer
- **Genre**: 360-Degree Surface Walker
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Nanotech Crawler: Magnetic Surface Climb" for Next Games/Game
  - **Concept**: Control a multi-legged nanobot walking on walls, ceilings, and floating geometric blocks in any orientation across 40 complex obstacle courses.
  - **Level Scaling & Progression**: 40 unique structural stages with rotating geometric blocks, moving laser hazards, and target nanite extraction points.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 distinct facility themes (Level 1: Microchip Substrate, Level 2: Fiber Optic Conduit, Level 3: Cryo-Heatsink Matrix, Level 4: Solar Panel Grid, etc.) with custom surface textures and lighting.
  - **Core Mechanics**: 360-degree surface normal adhesion; leap between detached platforms; magnetic switch triggering.
  - **Audio Implementation**: Magnetic pad attach clicks, micro-servo motor hums, and energy node activation tones via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 44: Quantum Teleport Hopper: Warp Jumper
- **Category**: Platformer
- **Genre**: Teleportation Gun Platformer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Quantum Teleport Hopper: Warp Jumper" for Next Games/Game
  - **Concept**: Overcome chasms and laser barriers by firing physics beacons and instantly teleporting to their coordinates across 45 puzzle platformer levels.
  - **Level Scaling & Progression**: 45 hand-crafted testing chamber levels requiring trajectory calculations, momentum preservation, and rapid air-teleports.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct laboratory themes (Level 1: Aperture Cleanroom, Level 2: Overgrown Abandoned Lab, Level 3: Magma Chamber Testing, Level 4: Zero-G Satellite Bay, etc.) with custom wall materials and hazard colors.
  - **Core Mechanics**: Platforming movement; physics beacon shooting; instant teleportation preserving velocity; exit portal unlocking.
  - **Audio Implementation**: Warp charging sine ramp, instantaneous teleport pop, and impact thuds via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 45: Skyward Spire: Endless Cyber Ascender
- **Category**: Platformer
- **Genre**: Vertical Jumping Odyssey
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Skyward Spire: Endless Cyber Ascender" for Next Games/Game
  - **Concept**: Bounce upward through vertical communication towers across 40 distinct spire stages, navigating crumbling, moving, and spring-loaded platforms.
  - **Level Scaling & Progression**: 40 distinct tower altitude stages with specific height checkpoints, rising laser ceilings, and platform variety.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique altitude themes (Level 1: Lower City Slums, Level 2: Mid-Town Neon Spire, Level 3: Cloudline Highway, Level 4: Stratosphere Solar Deck, Level 5: Orbital Elevator Base, etc.) with progressive vertical background transitions.
  - **Core Mechanics**: Automatic platform bounce; left/right steering; jump spring pads; crumbling platforms; jetpack powerups.
  - **Audio Implementation**: Boing bounce pitch variations based on height, jetpack roar noise, and wind velocity audio via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 46: Silicon Cave Explorer: Spelunker 2099
- **Category**: Platformer
- **Genre**: Procedural Cave Platformer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Silicon Cave Explorer: Spelunker 2099" for Next Games/Game
  - **Concept**: Descend into subterranean silicon caverns across 45 expedition stages to harvest rare mineral crystals while avoiding acid pools.
  - **Level Scaling & Progression**: 45 distinct cave expedition levels with deeper descents, hazardous gas pockets, and complex labyrinth tunnels.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique subterranean cave biomes (Level 1: Quartz Crystal Grotto, Level 2: Bioluminescent Slime Hollow, Level 3: Molten Basalt Cavern, Level 4: Frozen Diamond Crevasse, etc.) with custom rock textures and lighting shaders.
  - **Core Mechanics**: Flashlight cone vision; rope/ladder climbing; flare throwing; crystal harvesting quotas.
  - **Audio Implementation**: Cave echo audio filters, footsteps on gravel, crystal harvesting chimes, and oxygen alarms via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 47: Jetpack Salvager: Zero-G Cavern Dash
- **Category**: Platformer
- **Genre**: Thrust-Based Cave Navigator
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Jetpack Salvager: Zero-G Cavern Dash" for Next Games/Game
  - **Concept**: Pilot a fuel-limited jetpack explorer through narrow metallic corridors across 40 stages, maneuvering around hydraulic presses and electrical gates.
  - **Level Scaling & Progression**: 40 distinct salvage sector stages with tighter flight corridors, rotating hazard blades, and salvage quota goals.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique derelict station themes (Level 1: Cargo Hold Alpha, Level 2: Reactor Core Vent, Level 3: Hydroponics Overgrowth, Level 4: Engine Thruster Shaft, etc.) with custom industrial wall art and steam vents.
  - **Core Mechanics**: Vertical thruster control; tilt steering; fuel management; landing pad refuel points.
  - **Audio Implementation**: Modulated white noise thruster roar, fuel depleted stutter clicks, and crusher thuds via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 48: Pulse Runner: Precision Rhythm Platforms
- **Category**: Platformer
- **Genre**: Auto-Runner Rhythm Platformer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Pulse Runner: Precision Rhythm Platforms" for Next Games/Game
  - **Concept**: Auto-scrolling platformer where obstacles, jump pads, and laser gates are synchronized strictly to synthesized music tracks across 45 stages.
  - **Level Scaling & Progression**: 45 distinct musical platform tracks with increasing BPM (from 110BPM to 175BPM) and complex polyrhythmic jump patterns.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct visualizer themes (Level 1: 120BPM Cyan City, Level 2: 128BPM Electro Forest, Level 3: 140BPM Dubstep Inferno, Level 4: 160BPM Drum & Bass Skyway, etc.) with procedural background equalizer bars and level palettes.
  - **Core Mechanics**: One-button jump timing; beat synchronization; combo multiplier for perfect streaks.
  - **Audio Implementation**: Procedurally generated multi-track synth songs with real-time interactive audio layer triggers via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 49: Hologram Glitcher: Reality Shifter
- **Category**: Platformer
- **Genre**: Phase-Shifting Puzzle Platformer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Hologram Glitcher: Reality Shifter" for Next Games/Game
  - **Concept**: Toggle between two alternate holographic reality layers (Layer Alpha and Layer Beta) to materialize solid platforms across 45 puzzle stages.
  - **Level Scaling & Progression**: 45 distinct spatial puzzle levels requiring rapid mid-air reality shifts and timing coordination.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique reality pairs (Level 1: Cyan High-Tech / Amber Ruins, Level 2: Glacial Frost / Volcanic Ash, Level 3: Organic Forest / Steel Machine, etc.) with custom glitch shaders and architecture per level.
  - **Core Mechanics**: Platforming movement; Spacebar switches active reality layer; solid platforms in Alpha are ethereal in Beta and vice versa.
  - **Audio Implementation**: Glitch static bursts on reality shifts, phase hum frequencies, and goal portal chords via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 50: Robo-Escape 9: Facility Infiltrator
- **Category**: Platformer
- **Genre**: Stealth Action Platformer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Robo-Escape 9: Facility Infiltrator" for Next Games/Game
  - **Concept**: Guide a rogue domestic robot escaping a high-security manufacturing plant, evading spotlight cameras and security drones across 45 stealth levels.
  - **Level Scaling & Progression**: 45 distinct facility security sectors with moving camera cones, laser tripwires, and keycard clearance requirements.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique facility zones (Level 1: Assembly Line Alpha, Level 2: Stamping Press Bay, Level 3: Chemical Treatment Lab, Level 4: Executive Penthouse, etc.) with custom surveillance lighting and architectural props.
  - **Core Mechanics**: Sneak, crouch, sprint, and hide in shadows; surveillance vision cone evasion; terminal hacking consoles.
  - **Audio Implementation**: Quiet mechanical footsteps, camera servo whines, and sudden alarm claxon synthesizer when detected via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 6: Physics

### Game 51: Graviton Pinball: Hyper Collider
- **Category**: Physics
- **Genre**: Cybernetic Pinball Simulator
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Graviton Pinball: Hyper Collider" for Next Games/Game
  - **Concept**: Pinball table set inside particle colliders featuring magnetic flippers, multi-ball anomalies, and bumper combos across 40 distinct table stages.
  - **Level Scaling & Progression**: 40 distinct table challenge stages with specific mission targets (hit accelerator ramp 5 times, trigger multi-ball, score 1M points).
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique table themes (Level 1: CERN Particle Collider, Level 2: Tokamak Fusion Ring, Level 3: Quantum Graviton Well, Level 4: Solar Core Chamber, etc.) with custom bumper geometries and rail colors.
  - **Core Mechanics**: 2D rigid-body ball physics; left/right flipper controls; magnetic bumpers; multi-ball triggers.
  - **Audio Implementation**: Flipper mechanical clacks, harmonic bumper chimes with escalating pitch per combo, and ball drain whistles via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 52: Cybernetic Ragdoll Demolition: Crash Dummy
- **Category**: Physics
- **Genre**: Ragdoll Dismount & Dismemberment
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cybernetic Ragdoll Demolition: Crash Dummy" for Next Games/Game
  - **Concept**: Launch a multi-jointed cybernetic crash dummy down hazardous slopes filled with gravity vortexes and pinwheels across 45 demolition stages.
  - **Level Scaling & Progression**: 45 distinct slope hazard levels with escalating target impact force quotas, explosive barrels, and pinwheel traps.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct obstacle environments (Level 1: Concrete Staircase, Level 2: Steel Construction Girders, Level 3: Neon Pinball Pachinko, Level 4: Volcanic Basalt Slide, etc.) with custom slope textures and impact props.
  - **Core Mechanics**: Launch angle and velocity controls; Verlet integration 10-joint ragdoll physics; damage impact scoring.
  - **Audio Implementation**: Joint impact thuds, robotic metal stress creaks, and explosion blasts synthesized via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 53: Neon Elastic Sling: Orbit Catapult
- **Category**: Physics
- **Genre**: Slingshot Orbital Physics
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Elastic Sling: Orbit Catapult" for Next Games/Game
  - **Concept**: Slingshot quantum probes around gravitational planetary bodies to demolish hostile space stations across 45 orbital stages.
  - **Level Scaling & Progression**: 45 distinct orbital puzzle stages with multiple gravity wells, orbiting moons, and fortified enemy bunkers.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct planetary system themes (Level 1: Terrestrial Moon Base, Level 2: Gas Giant Ring Station, Level 3: Binary Asteroid Field, Level 4: Solar Corona Outpost, etc.) with custom gravity well auras and space station blocks.
  - **Core Mechanics**: Drag-and-release slingshot launcher; N-body gravitational trajectory calculations; structural block collapse physics.
  - **Audio Implementation**: Elastic stretch pitch rise, sling release whoosh, gravity well hum, and structural glass shatters via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 54: Plasma Ballistics: Laser Artillery
- **Category**: Physics
- **Genre**: Turn-Based Artillery Duel
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Plasma Ballistics: Laser Artillery" for Next Games/Game
  - **Concept**: Command a plasma tank on destructible 2D terrain, calculating firing angle, projectile power, and wind resistance across 45 combat stages.
  - **Level Scaling & Progression**: 45 distinct artillery battle stages against escalating AI tank squadrons on complex procedurally generated terrain.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct battleground themes (Level 1: Martian Red Dunes, Level 2: Lunar Crater Field, Level 3: Toxic Slime Badlands, Level 4: Cyber-City Rubble, etc.) with custom terrain textures and sky gradients.
  - **Core Mechanics**: Barrel elevation and power adjustments; wind vector calculations; 2D terrain cratering physics; multi-weapon selection.
  - **Audio Implementation**: Tank turret rotation clicks, cannon blast booms, falling projectile whistles, and explosion roars via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 55: Zero-G Pool: Quantum Billiards
- **Category**: Physics
- **Genre**: Frictionless Space Pool
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Zero-G Pool: Quantum Billiards" for Next Games/Game
  - **Concept**: Pocket glowing quantum balls on an octagonal zero-friction billiard table with magnetic bumpers and gravitational pockets across 45 stages.
  - **Level Scaling & Progression**: 45 trick-shot and clearance stages with obstacle pegs, moving gravitational pockets, and stroke limits.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique table themes (Level 1: Octagonal Felt Cyan, Level 2: Diamond Glass Purple, Level 3: Emerald Hexagon, Level 4: Dark Matter Orbit, etc.) with custom cushion materials and ball aura colors.
  - **Core Mechanics**: 2D elastic sphere collisions; cue stick aiming and power strike; zero-friction momentum conservation.
  - **Audio Implementation**: Solid ball-to-ball impact clicks, cushion bounce thuds, and pocket absorption frequency sweeps via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 56: Structural Bridge Engineer: Cyber Span
- **Category**: Physics
- **Genre**: Truss Bridge Construction Simulator
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Structural Bridge Engineer: Cyber Span" for Next Games/Game
  - **Concept**: Construct truss bridges across chasms using limited carbon-fiber beams and suspension cables across 45 structural challenge levels.
  - **Level Scaling & Progression**: 45 unique chasm stages with widening gaps, moving barge obstacles, and heavier multi-trailer cyber-truck convoys.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct canyon themes (Level 1: River Gorge Cyan, Level 2: Volcanic Rift Orange, Level 3: Sub-Zero Glacier Chasm, Level 4: Megacity Expressway Gap, etc.) with custom geological cliff faces.
  - **Core Mechanics**: Node and beam placement; finite-element stress calculation; color-coded load visualization (Green to Red); structural snapping.
  - **Audio Implementation**: Blueprint clicks, vehicle engine rumbles, cable tension creaks, and structural snap sounds via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 57: Water Stream Particle Diverter: Fluid Lab
- **Category**: Physics
- **Genre**: SPH Fluid Dynamics Puzzle
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Water Stream Particle Diverter: Fluid Lab" for Next Games/Game
  - **Concept**: Divert streams of hundreds of glowing fluid particles into matching chemical flasks using moveable deflectors across 45 puzzle stages.
  - **Level Scaling & Progression**: 45 distinct fluid physics stages featuring multi-color liquids, vapor heaters, freezers, and dynamic valve gates.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct chemistry lab themes (Level 1: Cleanroom Cyan, Level 2: Acid Bio-Lab, Level 3: Cryo Liquid Lab, Level 4: Molten Plasma Chamber, etc.) with custom fluid colors, viscosity, and flask designs.
  - **Core Mechanics**: Smoothed Particle Hydrodynamics (SPH) fluid simulation; place and rotate deflectors, sponges, and portals.
  - **Audio Implementation**: Liquid pour rushing noise, bubbling droplets, container full chimes, and steam hisses via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 58: Pendulum Wrecking Bot: Kinetic Destroyer
- **Category**: Physics
- **Genre**: Kinetic Pendulum Demolition
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Pendulum Wrecking Bot: Kinetic Destroyer" for Next Games/Game
  - **Concept**: Release and swing a massive electromagnetic wrecking ball on an adjustable pendulum cable to smash towers of server racks across 40 stages.
  - **Level Scaling & Progression**: 40 distinct demolition stages with reinforced steel structures, explosive fuel tanks, and swing stroke limits.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique demolition sites (Level 1: Abandoned Data Center, Level 2: Obsolete Power Plant, Level 3: Scrap Skyscraper, Level 4: Orbital Relay Ruin, etc.) with custom building block materials.
  - **Core Mechanics**: Harmonic pendulum motion physics; cable winch length adjustments; release angle timing; impulse impact transfer.
  - **Audio Implementation**: Cable winch ratchets, heavy swing wind rush, and devastating concrete/metal smashing impacts via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 59: Magnetic Polarity Balancer: Levitator
- **Category**: Physics
- **Genre**: Magnetic Levitation Balance
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Magnetic Polarity Balancer: Levitator" for Next Games/Game
  - **Concept**: Balance a magnetic core suspended in mid-air between opposing electromagnetic coils by adjusting real-time voltage across 45 balance stages.
  - **Level Scaling & Progression**: 45 balance levels with increasing turbulence wind gusts, shifting gravity vectors, and dual-core balance requirements.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique test chamber themes (Level 1: Magnetic Lab Alpha, Level 2: High-Voltage Coil Room, Level 3: Cryo-Levitation Chamber, Level 4: Zero-G Simulator, etc.) with custom electromagnetic coil models and flux line glows.
  - **Core Mechanics**: Real-time PID voltage controls; external turbulence mitigation; stability duration quotas.
  - **Audio Implementation**: 60Hz hum buzzing modulated by coil power, electrical spark sounds on boundary touches, and stability chimes via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 60: Orbital Trebuchet: Deep Space Hurler
- **Category**: Physics
- **Genre**: Counterweight Siege Engine
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Orbital Trebuchet: Deep Space Hurler" for Next Games/Game
  - **Concept**: Adjust counterweight mass, sling length, and release pin angle on a futuristic trebuchet to launch payloads across planetary gravity wells across 40 stages.
  - **Level Scaling & Progression**: 40 siege stages with varying planetary distances, atmospheric drag factors, and moving orbital defense targets.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique siege environments (Level 1: Lunar Siege Platform, Level 2: Martian Ridge Battery, Level 3: Asteroid Fortress Rim, Level 4: Titan Methane Outpost, etc.) with custom siege engine frames and terrain.
  - **Core Mechanics**: Rotational kinematics; angular momentum conservation; release angle tuning; trajectory impact scoring.
  - **Audio Implementation**: Counterweight drop thuds, structural creaking strain, release pin snap, and distant impact booms via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 7: Card

### Game 61: Cyber Solitaire: Data Deck Stacker
- **Category**: Card
- **Genre**: Klondike Solitaire Cyber Edition
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Solitaire: Data Deck Stacker" for Next Games/Game
  - **Concept**: Klondike Solitaire played with a holographic 52-card data deck featuring glowing neon suits across 45 staged solitaire challenges.
  - **Level Scaling & Progression**: 45 distinct staged solitaire deals with varying winnable seeds, timed score goals, and restricted draw modes (1-card to 3-card).
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique card table themes (Level 1: Cyber Cyan Felt, Level 2: Velvet Violet Table, Level 3: Emerald Matrix Desk, Level 4: Obsidian Titanium Surface, etc.) with custom card backplates and victory bounce particle trails.
  - **Core Mechanics**: Standard Klondike rules; tableau sequencing; foundation stacking; drag-and-drop or tap-to-move.
  - **Audio Implementation**: Smooth card sliding noise, card flip snaps, and cascading victory arpeggios synthesized via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 62: Neon Blackjack 2099: High Roller Matrix
- **Category**: Card
- **Genre**: Vegas Blackjack Cyber Casino
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Blackjack 2099: High Roller Matrix" for Next Games/Game
  - **Concept**: Challenge a cybernetic dealer AI in high-stakes Blackjack, progressing through 45 escalating casino lounge tiers.
  - **Level Scaling & Progression**: 45 distinct casino lounge stages with increasing minimum bets, side bet options (Perfect Pairs, 21+3), and bankroll milestones.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique casino parlor themes (Level 1: Downtown Cyber Alley Bar, Level 2: Mid-Level Casino Floor, Level 3: High-Roller Penthouse, Level 4: Orbital Zero-G VIP Lounge, etc.) with custom luxury table felts and chip designs.
  - **Core Mechanics**: Standard Blackjack rules (Dealer hits soft 17); Hit, Stand, Double, Split, Insurance; chip management.
  - **Audio Implementation**: Chip clinking frequencies, card deal flips, dealer blackjack warning tone, and player win jackpot chimes via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 63: Quantum Deckbuilder: Rogue Cyberpunk Cards
- **Category**: Card
- **Genre**: Roguelike Deckbuilding Combat
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Quantum Deckbuilder: Rogue Cyberpunk Cards" for Next Games/Game
  - **Concept**: Draft attack, defense, and utility programs into your deck to defeat hostile rogue AI bosses across 45 procedural floor battles.
  - **Level Scaling & Progression**: 45 distinct floor combat encounters with escalating boss HP, hostile status buffs, and rare card drafting rewards.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique mainframe floor themes (Level 1: Subnet Gateway, Level 2: Encrypted Storage, Level 3: Firewall Perimeter, Level 4: AI Core Chamber, etc.) with custom battle stage backdrops and enemy daemon avatars.
  - **Core Mechanics**: Turn-based card battles; 3 energy per turn; card drafting; relic inventory; status effects (Bleed, Stun, Overclock).
  - **Audio Implementation**: Card play swoosh, shield block clanks, laser attack zaps, and enemy defeat explosions via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 64: Neural Memory Match: Holographic Pairs
- **Category**: Card
- **Genre**: Concentration / Memory Card Match
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neural Memory Match: Holographic Pairs" for Next Games/Game
  - **Concept**: Flip face-down holographic cards on a grid to locate matching pairs of cybernetic technology glyphs across 45 memory stages.
  - **Level Scaling & Progression**: 45 distinct stages scaling grid dimensions (from 4x3 up to 8x6) with stricter flip limits and countdown clocks.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique holographic grid themes (Level 1: Nanotech Blue, Level 2: AI Neural Yellow, Level 3: Cybernetic Violet, Level 4: Quantum Emerald, etc.) with distinct card back designs and icon art per stage.
  - **Core Mechanics**: Flip two cards at a time; matched pairs remain face up; combo streak multipliers; move limit budgets.
  - **Audio Implementation**: Card flip sound, pair match harmony chord, mismatch low buzz, and game complete fanfare via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 65: Tri-Peaks Cyber Pyramid: Data Clear
- **Category**: Card
- **Genre**: Tri-Peaks Solitaire
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Tri-Peaks Cyber Pyramid: Data Clear" for Next Games/Game
  - **Concept**: Clear three overlapping pyramid peaks of cards by selecting cards that are one rank higher or lower than the active waste card across 45 levels.
  - **Level Scaling & Progression**: 45 distinct pyramid card layouts featuring locked cards, wild cards, and minimum streak requirements.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct cosmic background themes (Level 1: Andromeda Galaxy, Level 2: Solar Eclipse, Level 3: Aurora Borealis, Level 4: Deep Void Nebulae, etc.) with unique card pyramid border glows and suit colors.
  - **Core Mechanics**: Tri-Peaks sequence rules; waste pile drawing; streak multipliers for consecutive clearances without drawing.
  - **Audio Implementation**: Sequential rising pentatonic note progression for streak chains, card snaps, and victory fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 66: FreeCell Neo: Quantum Cascade
- **Category**: Card
- **Genre**: Classic FreeCell Solitaire
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "FreeCell Neo: Quantum Cascade" for Next Games/Game
  - **Concept**: Solve open-card solitaire puzzles using four temporary free reserve cells across 45 numbered challenge deals.
  - **Level Scaling & Progression**: 45 distinct FreeCell deals categorized from Beginner to Expert with move quotas and solve timers.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct digital card table themes (Level 1: Glass Matrix Blue, Level 2: Emerald Datacenter, Level 3: Amber Silicon Desk, Level 4: Platinum Executive Suite, etc.) with custom card faces and foundation animations.
  - **Core Mechanics**: FreeCell rule compliance; calculation of maximum movable sequence based on free cells; auto-foundation moves.
  - **Audio Implementation**: Card movement clicks, foundation placement pings, and celebration victory chord sequence via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 67: Spider Protocol: Eight-Legged Data Sorter
- **Category**: Card
- **Genre**: Spider Solitaire (1, 2, or 4 Suits)
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Spider Protocol: Eight-Legged Data Sorter" for Next Games/Game
  - **Concept**: Arrange descending sequences of cards from King to Ace in the tableau to complete full suits across 45 progressive difficulty stages.
  - **Level Scaling & Progression**: 45 distinct Spider deals scaling from 1-suit (Levels 1–15) to 2-suit (16–30) and 4-suit (31–45) configurations.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique table themes (Level 1: Web Spider Web Blue, Level 2: Cyber Silk Yellow, Level 3: Black Widow Red, Level 4: Tarantula Purple, etc.) with custom suit symbols and removal animations.
  - **Core Mechanics**: Column sequencing; dealing new rows from stock; moving completed sequences from King to Ace; undo stack.
  - **Audio Implementation**: Smooth card distribution whoosh, suit removal energy hum, and level clear arpeggios via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 68: Cyber Baccarat: Quantum High Stakes
- **Category**: Card
- **Genre**: High-Roller Baccarat (Punto Banco)
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Baccarat: Quantum High Stakes" for Next Games/Game
  - **Concept**: Wager on Player, Banker, or Tie across 45 VIP casino salon stages, with automated third-card drawing rules and shoe statistics.
  - **Level Scaling & Progression**: 45 distinct high-stakes casino salons with escalating minimum bets, commission discounts, and shoe progression.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct salon themes (Level 1: Macau Neon Salon, Level 2: Monaco Glass Casino, Level 3: Vegas High-Stakes Vault, Level 4: Dubai Golden Sky-Suite, etc.) with custom felt textures and scoreboard styles.
  - **Core Mechanics**: Standard Punto Banco rules; natural 8 or 9 checks; automatic third-card drawing table; Player (1:1), Banker (0.95:1), Tie (8:1) payouts.
  - **Audio Implementation**: Card peel friction noise, chip bet clicks, dealer announcement synth tones, and victory payout fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 69: Elemental Card Duel: Nano Elementalists
- **Category**: Card
- **Genre**: Tactical Element Card Battler (Triple Triad style)
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Elemental Card Duel: Nano Elementalists" for Next Games/Game
  - **Concept**: Place cards on a 3x3 grid to capture adjacent enemy cards by comparing directional values across 45 tactical duel stages.
  - **Level Scaling & Progression**: 45 distinct elemental duel matches against specialized AI opponents with elemental field bonuses and special rules.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique 3x3 arena themes (Level 1: Fire Forge, Level 2: Ice Glaze, Level 3: Thunder Peak, Level 4: Toxic Swamp, etc.) with custom board slots and elemental particle aura effects.
  - **Core Mechanics**: 3x3 grid card placement; directional value comparison (higher flips adjacent card); Combo and Same rule variants; card collection.
  - **Audio Implementation**: Card placement thuds, card flip electric zaps, and match win fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 70: Cyber Poker: Holographic Video Draw
- **Category**: Card
- **Genre**: Jacks or Better Video Poker
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Poker: Holographic Video Draw" for Next Games/Game
  - **Concept**: 5-card draw Video Poker with authentic paytables, card holding toggles, and double-up mini-games across 45 casino stages.
  - **Level Scaling & Progression**: 45 distinct video poker machine stages with varying wild card rules (Jacks or Better, Deuces Wild, Joker Poker) and bankroll targets.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique cabinet themes (Level 1: 1980s Retro Neon, Level 2: 2099 Cyber Holo, Level 3: Golden Vegas Glitz, Level 4: Dark Web Terminal, etc.) with custom CRT scanlines and digital card styles.
  - **Core Mechanics**: 5-card deal; hold card toggles; draw replacement; paytable evaluation; double-or-nothing mini-game.
  - **Audio Implementation**: Coin counter clinks, electronic deal bleeps, and classic winning sirens via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 8: Word

### Game 71: Terminal Wordle: 5-Letter Hacking Guess
- **Category**: Word
- **Genre**: 5-Letter Word Deduction Puzzle
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Terminal Wordle: 5-Letter Hacking Guess" for Next Games/Game
  - **Concept**: Deduce 5-letter cryptographic passwords in 6 attempts with color-coded feedback across 45 unique security breach stages.
  - **Level Scaling & Progression**: 45 distinct password clearance stages with escalating vocabulary difficulty, timer modes, and streak goals.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique terminal themes (Level 1: Green Phosphor Shell, Level 2: Amber Decryption CRT, Level 3: Cyber Blue NSA Box, Level 4: Crimson Red Alert, etc.) with custom keyboard layouts and tile styles per stage.
  - **Core Mechanics**: 6 guess limit; dictionary validation; tile color evaluations (Green = Correct, Yellow = Present, Gray = Absent); streak tracking.
  - **Audio Implementation**: Mechanical keyboard typing clicks, tile flip tone ascending sequences, and access granted fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 72: Cyber Word Search: Matrix Grid Hunter
- **Category**: Word
- **Genre**: Word Search Grid Puzzle
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Word Search: Matrix Grid Hunter" for Next Games/Game
  - **Concept**: Locate hidden sci-fi and tech vocabulary words buried inside letter grids across 45 distinct puzzle levels.
  - **Level Scaling & Progression**: 45 unique word search grids scaling from 8x8 up to 14x14 with diagonal and backward word orientations and countdown clocks.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct matrix themes (Level 1: AI Cybernetics, Level 2: Astrophysics, Level 3: Quantum Mechanics, Level 4: Robotics, etc.) with custom grid backgrounds and glowing word highlight capsules.
  - **Core Mechanics**: Word placement generator; touch/mouse drag selection; bidirectional word matching; checklist tracking.
  - **Audio Implementation**: Letter drag tick frequency, word found chime, and puzzle completed victory arpeggios via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 73: Syntax Anagram Scrambler: Code Breaker
- **Category**: Word
- **Genre**: Anagram Word Unscramble
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Syntax Anagram Scrambler: Code Breaker" for Next Games/Game
  - **Concept**: Unscramble rotating circles of letters to construct valid dictionary words before the mainframe clock expires across 45 stages.
  - **Level Scaling & Progression**: 45 distinct anagram stages with increasing letter wheel counts (from 5-letter up to 8-letter wheels) and word quotas.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique coding environment themes (Level 1: JavaScript Engine, Level 2: Python Shell, Level 3: Rust Compiler, Level 4: Assembly Subnet, etc.) with custom radial carousel designs and particle bursts.
  - **Core Mechanics**: Radial letter selection; dictionary anagram validator; master word discovery bonus; timer extensions.
  - **Audio Implementation**: Letter selection notes, valid word submission bell, invalid buzz, and round bonus fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 74: Quantum Crossword: Cyber Mini-Puzzles
- **Category**: Word
- **Genre**: Daily 5x5 Mini Crossword
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Quantum Crossword: Cyber Mini-Puzzles" for Next Games/Game
  - **Concept**: Solve compact 5x5 crossword puzzles with clever technology, science, and gaming clues across 45 unique puzzle stages.
  - **Level Scaling & Progression**: 45 distinct 5x5 mini crossword puzzle stages with increasing clue cleverness and word intersection density.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique crossword UI themes (Level 1: Cyber Blue Grid, Level 2: Slate Modernist, Level 3: Amber Newsprint, Level 4: Terminal Dark Mode, etc.) with custom grid highlighting and clue box styles.
  - **Core Mechanics**: Across and down clue navigation; keyboard typing with auto-advance; backspace clearing; clue auto-check mode.
  - **Audio Implementation**: Keypress clicks, word completed subtle chime, and full puzzle solved triumphant chord via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 75: Typing Blitzkrieg: Rapid Terminal Infiltrator
- **Category**: Word
- **Genre**: Fast Typing Speedrun Shooter
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Typing Blitzkrieg: Rapid Terminal Infiltrator" for Next Games/Game
  - **Concept**: Type descending enemy hacker code words accurately to fire laser beams and vaporize them before perimeter breach across 45 stages.
  - **Level Scaling & Progression**: 45 distinct defense stages with increasing word lengths, descending velocities, and multi-word boss drones.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 distinct radar screen themes (Level 1: Green Vector Radar, Level 2: Blue Sonar Screen, Level 3: Red Alert Infiltration, Level 4: Gold Satellite Net, etc.) with custom enemy drone models and laser blast colors.
  - **Core Mechanics**: Real-time typing target lock-on; WPM and accuracy evaluation; boss typing phases.
  - **Audio Implementation**: Mechanical keyboard typing clicks, laser destruction zaps, and multiplier combo tone escalations via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 76: Lexicon Link: Word Association Chain
- **Category**: Word
- **Genre**: 4-Word Category Association (Connections style)
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Lexicon Link: Word Association Chain" for Next Games/Game
  - **Concept**: Group 16 technology and cultural words into 4 distinct secret categories of 4 items each across 45 staged puzzle levels.
  - **Level Scaling & Progression**: 45 distinct word association puzzle stages with increasing abstraction, red herrings, and strict 4-mistake limits.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique category board themes (Level 1: Modern Tech Matrix, Level 2: Retro Gaming Lore, Level 3: Hardware Components, Level 4: Sci-Fi Cinema, etc.) with custom banner reveal animations per stage.
  - **Core Mechanics**: Multi-select 4 tiles; validate submission; "One away..." proximity alert; category color assignment.
  - **Audio Implementation**: Tile select tap, category match success chord, and error shake buzz synthesized via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 77: Cyber Hangman: AI Sentence Rescue
- **Category**: Word
- **Genre**: Classic Word Guess with Shield Defense
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Hangman: AI Sentence Rescue" for Next Games/Game
  - **Concept**: Prevent an imprisoned rogue AI companion from memory erasure by guessing letters to decode encrypted phrases across 45 stages.
  - **Level Scaling & Progression**: 45 rescue mission stages with longer phrases, obscure vocabulary, and fewer allowable error shields.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique AI containment chamber themes (Level 1: Cyan Cryo Chamber, Level 2: Amber Laser Cell, Level 3: Purple Singularity Trap, Level 4: Obsidian Cleanroom, etc.) with custom avatar disintegration states.
  - **Core Mechanics**: Letter guessing via keyboard or touch; 6 allowable error shields; category hints; phrase completion validation.
  - **Audio Implementation**: Letter hit positive ping, letter miss shield discharge sound, and companion rescue fanfare via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 78: Boggle Terminal: 4x4 Word Constructor
- **Category**: Word
- **Genre**: 4x4 Adjacency Boggle Word Hunt
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Boggle Terminal: 4x4 Word Constructor" for Next Games/Game
  - **Concept**: Find as many words as possible in a 4x4 grid of scrambled letter dice by tracing paths between adjacent tiles across 45 stages.
  - **Level Scaling & Progression**: 45 unique dice configurations with target score thresholds, minimum word length constraints, and countdown timers.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique boggle terminal themes (Level 1: Cyber Blue Dice, Level 2: Neon Orange Cube, Level 3: Emerald Jade Dice, Level 4: Platinum Grid, etc.) with custom tracer paths and found-words HUDs.
  - **Core Mechanics**: Adjacency graph traversal; letter reuse prevention in single word; dictionary validation; score scaling with word length.
  - **Audio Implementation**: Letter trace pitch steps, word accept chime, and timer hurry-up warning pulses via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 79: Binary Spelling Bee: Hex Word Forge
- **Category**: Word
- **Genre**: 7-Letter Hexagonal Spelling Bee
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Binary Spelling Bee: Hex Word Forge" for Next Games/Game
  - **Concept**: Construct words of 4 or more letters using a honeycomb of 7 letters, requiring the central golden letter, across 45 stages.
  - **Level Scaling & Progression**: 45 unique letter honeycomb puzzles with progressive point ranks (Novice, Solid, Great, Genius) and pangram challenges.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique honeycomb themes (Level 1: Honeycomb Gold & Cyan, Level 2: Cyber Violet & Amber, Level 3: Emerald & Lime, Level 4: Titanium & Crimson, etc.) with custom hex cell animations.
  - **Core Mechanics**: 4-letter minimum; center letter mandate; pangram discovery bonus; rank progression bar.
  - **Audio Implementation**: Hexagon tap clicks, word accepted reward tone, pangram discovery special fanfare via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 80: Word Drop: Falling Letter Vocabulary Tetris
- **Category**: Word
- **Genre**: Falling Letter Tile Scrabble
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Word Drop: Falling Letter Vocabulary Tetris" for Next Games/Game
  - **Concept**: Columns of letter blocks drop into a well. Click adjacent blocks to form valid English words, clearing them before the stack reaches the top across 45 stages.
  - **Level Scaling & Progression**: 45 distinct drop stages with increasing block fall speeds, locked letter cubes, and quota clearances.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique well themes (Level 1: Cyber Neon Well, Level 2: Glacial Ice Well, Level 3: Molten Rock Well, Level 4: Bio-Chemical Well, etc.) with custom letter cube textures and explosion particles.
  - **Core Mechanics**: Word creation from connected tiles; tile clearing and gravity collapse; bomb tile creation for long words.
  - **Audio Implementation**: Tile landing thuds, word blast explosions, and emergency top-out alarm sirens via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 9: Rhythm

### Game 81: Beat Highway: 4-Lane Synthwave Tap
- **Category**: Rhythm
- **Genre**: 4-Track Rhythm Tap (Guitar Hero style)
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Beat Highway: 4-Lane Synthwave Tap" for Next Games/Game
  - **Concept**: Hit descending neon rhythm notes across 4 highway tracks in perfect synchronization with synthesized music across 45 staged song levels.
  - **Level Scaling & Progression**: 45 distinct playable song tracks with increasing note speeds, complex polyrhythms, and accuracy clear thresholds (A/S/SS rank).
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 completely unique highway themes (Level 1: Sunset Highway, Level 2: Neon Tokyo Express, Level 3: Cyberpunk Underground, Level 4: Cosmic Superhighway, Level 5: Glacial Aurora, continuing through 45 distinct biomes) with dynamic 3D road shaders and visualizer backdrops per song.
  - **Core Mechanics**: 4-lane note synchronization (D, F, J, K or touch); timing accuracy windows (Perfect, Great, Miss); multiplier combo meter.
  - **Audio Implementation**: Procedural multi-oscillator synthwave song playback (bassline, arp, chords, drums) with interactive note hit confirmation clicks.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 82: Neon Drum Machine: Precision Rhythm Hero
- **Category**: Rhythm
- **Genre**: Interactive Drum Pad Simulator & Sequencer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Drum Machine: Precision Rhythm Hero" for Next Games/Game
  - **Concept**: Play interactive electronic drum pads following rhythmic timing prompts to replicate iconic drum breaks across 40 stages.
  - **Level Scaling & Progression**: 40 distinct drum beat challenge stages scaling from simple 4/4 rock beats to syncopated hip-hop, jungle breaks, and complex 7/8 polyrhythms.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique drum machine pad themes (Level 1: Classic 808 Orange/Black, Level 2: Cyber 909 White/Cyan, Level 3: MPC Gray/Red, Level 4: Neon Synthwave Pink/Blue, etc.) with dynamic pad light-ups and oscilloscope waveforms.
  - **Core Mechanics**: Low-latency pad triggers; 16-step loop sequencer; rhythm accuracy grading.
  - **Audio Implementation**: 100% synthesized drum sounds via Web Audio API (exponential pitch-drop kick, noise-filtered snare, metallic hi-hats).
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 83: Frequency Slicer: Cyber Saber Beat
- **Category**: Rhythm
- **Genre**: Directional Arrow Beat Slicer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Frequency Slicer: Cyber Saber Beat" for Next Games/Game
  - **Concept**: Slice approaching directional neon cube blocks in the indicated swipe direction to the rhythm of cyber beats across 45 stages.
  - **Level Scaling & Progression**: 45 unique beat slicing stages with increasing cube approach velocities, complex cross-hand directional patterns, and obstacle walls.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique slicing arena themes (Level 1: Cyan/Magenta Tunnel, Level 2: Emerald Laser Hall, Level 3: Golden Sun Arena, Level 4: Obsidian Shadow Chamber, etc.) with custom cube glow textures and slash particle sparks.
  - **Core Mechanics**: Directional swipe detection via mouse/touch gesture or arrow keys; blade color matching; rhythm synchronization.
  - **Audio Implementation**: Blade slash whooshes, cube slice sonic hits, and procedural synth tracks via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 84: Soundwave Surfer: Audio Amplitude Rider
- **Category**: Rhythm
- **Genre**: Procedural Terrain Audio Surfer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Soundwave Surfer: Audio Amplitude Rider" for Next Games/Game
  - **Concept**: Surf an undulating sine-wave ribbon generated in real-time by the frequency spectrum and amplitude of synthesized soundtracks across 40 stages.
  - **Level Scaling & Progression**: 40 unique musical wave stages with shifting audio frequencies, sudden tempo drops, and floating ring quotas.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique soundwave ribbon themes (Level 1: Bassline Violet, Level 2: Arpeggio Amber, Level 3: Lead Synth Cyan, Level 4: Percussion White-Hot, etc.) with real-time FFT audio visualizer landscapes.
  - **Core Mechanics**: Stay centered on the peak of the soundwave; jump to collect rhythm rings during bass drops; avoid audio spikes.
  - **Audio Implementation**: Web Audio AnalyserNode Fourier transform (FFT) feeding real-time amplitude directly into the canvas terrain vertex shader.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 85: Pulse Conductor: Orchestral Synth Duel
- **Category**: Rhythm
- **Genre**: Metronome Precision Tapper
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Pulse Conductor: Orchestral Synth Duel" for Next Games/Game
  - **Concept**: Conduct a cybernetic orchestra by tapping precise tempo meters, adapting to sudden tempo modulations and polyrhythms across 40 stages.
  - **Level Scaling & Progression**: 40 distinct conducting score stages progressing from simple adagio tempos to allegro and prestissimo polyrhythms.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique concert hall themes (Level 1: Neon Philharmonic Hall, Level 2: Underground Jazz Crypt, Level 3: Orbital Amphitheater, Level 4: Cathedral Cybernetics, etc.) with custom holographic baton trails and section spotlights.
  - **Core Mechanics**: Tap Space/Screen on exact beats; handle tempo transitions (90BPM to 160BPM); maintain accuracy across time signatures.
  - **Audio Implementation**: Metronome clicks, polyphonic synth strings, and brass chord stabs synthesized via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 86: Tempo Runner: Rhythm-Synced Platform Sprint
- **Category**: Rhythm
- **Genre**: Speed-Shifting Rhythm Platformer
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Tempo Runner: Rhythm-Synced Platform Sprint" for Next Games/Game
  - **Concept**: High-speed platform runner where every jump, double-jump, and dash must land precisely on the beat across 45 stage tracks.
  - **Level Scaling & Progression**: 45 distinct rhythm-platform courses with increasing BPM and syncopated jump sequences.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique stage themes (Level 1: Techno City, Level 2: Trance Temple, Level 3: Industrial Cyber-Factory, Level 4: Glitch Void, etc.) with pulsing platforms and dynamic beat lighting.
  - **Core Mechanics**: Jumping off-beat causes stumbles; on-beat hits launch high super-jumps; continuous combo multiplier.
  - **Audio Implementation**: Dynamic interactive soundtrack where missing notes mutes the synth lead, and perfect chains add extra percussion layers via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 87: Neon Dance Floor: Grid Memory DDR
- **Category**: Rhythm
- **Genre**: 3x3 Grid Rhythm Dance
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Dance Floor: Grid Memory DDR" for Next Games/Game
  - **Concept**: Step on a 3x3 glowing floor grid following rhythmic arrows and dance combinations displayed on screen across 45 dance stages.
  - **Level Scaling & Progression**: 45 dance club stages with faster arrow streams, complex step choreography, and Fever Mode score goals.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique nightclub themes (Level 1: Tokyo Cyber Disco, Level 2: Berlin Techno Bunker, Level 3: Ibiza Beach Club, Level 4: Orbital Space Lounge, etc.) with custom illuminated dance floor tiles and crowd avatars.
  - **Core Mechanics**: Arrow keys / numpad / touch grid inputs; rhythm timing evaluation; Fever Mode multiplier on 20-streak combos.
  - **Audio Implementation**: Four-on-the-floor disco house synth loops with rhythmic vocoder stings via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 88: Bassline Defender: BPM Turret Sync
- **Category**: Rhythm
- **Genre**: Rhythm Tower Shooter
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Bassline Defender: BPM Turret Sync" for Next Games/Game
  - **Concept**: Fire sound cannons at incoming geometric aliens where cannon firing rate and damage are amplified by tapping on musical beats across 45 stages.
  - **Level Scaling & Progression**: 45 defensive wave stages with faster alien swarms, beat-sync shielded enemies, and rhythm boss battles.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique defense perimeter themes (Level 1: Sub-Bass Subnet, Level 2: Mid-Range Nebula, Level 3: Treble Peak, Level 4: Dubstep Trench, etc.) with custom central audio cannons and pulsating shockwave rings.
  - **Core Mechanics**: 360-degree aiming; firing on-beat releases high-damage sonic booms; off-beat shots produce weak sparks.
  - **Audio Implementation**: Heavy sub-bass kick on beat, snare crack on off-beat, and alien destruction synth pops via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 89: Chiptune Piano Tiles: Cyber Virtuoso
- **Category**: Rhythm
- **Genre**: Vertical Falling Piano Key Stream
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Chiptune Piano Tiles: Cyber Virtuoso" for Next Games/Game
  - **Concept**: Tap falling piano keys as they scroll down 4 vertical columns without tapping empty spaces across 45 classical chiptune stages.
  - **Level Scaling & Progression**: 45 distinct classical and electronic melody stages with accelerating tempo and dense polyphonic chords.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique piano visualizer themes (Level 1: Monochrome Piano, Level 2: Neon Cyan Cascade, Level 3: Gold Grand Piano, Level 4: Cyber Violet Keys, etc.) with custom key glow trails and tap shockwaves.
  - **Core Mechanics**: 4-lane key tapping (Keys D, F, J, K or touch); tempo acceleration; instant fail upon missing a key or tapping white space.
  - **Audio Implementation**: Synthesized 8-bit square-wave notes mapped to authentic musical frequencies playing famous melodies via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 90: Rhythm Revolver: 360-Degree Radial Beat Spinner
- **Category**: Rhythm
- **Genre**: Circular Radial Rhythm Catcher
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Rhythm Revolver: 360-Degree Radial Beat Spinner" for Next Games/Game
  - **Concept**: Rotate a defensive shield ring around a central core to catch converging rhythm sparks arriving from 360-degree angles across 45 stages.
  - **Level Scaling & Progression**: 45 distinct orbital rhythm stages with accelerating spark approach speeds, color-coded notes, and multi-arc shields.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique circular radar themes (Level 1: Radar Green, Level 2: Sonar Blue, Level 3: Plasma Orange, Level 4: Quantum Violet, etc.) with custom central cores and spark particle flares.
  - **Core Mechanics**: Rotate shield via mouse cursor or arrow keys; align shield angle with incoming note at exact moment of impact; accuracy ratings.
  - **Audio Implementation**: Multi-track synthesized electronic beats with localized stereo-panning sound effects via Web Audio PannerNode.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

# Category 10: RPG

### Game 91: Cyber Dungeon Crawler: Roguelike Matrix
- **Category**: RPG
- **Genre**: Turn-Based Procedural Grid Roguelike
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Dungeon Crawler: Roguelike Matrix" for Next Games/Game
  - **Concept**: Explore procedurally generated server floor mazes across 45 distinct floor levels, battling security daemons and collecting RAM upgrades.
  - **Level Scaling & Progression**: 45 distinct dungeon floor levels with deeper descents, escalating enemy AI behaviors, floor boss daemons, and permadeath stakes.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique server floor themes (Floor 1: Guest Network Corridor, Floor 2: Encrypted Storage Vault, Floor 3: Overclocked Reactor Floor, Floor 4: Sub-Zero Liquid Nitrogen Core, Floor 5: Quantum Core Sanctum, continuing through 45 distinct architectural floor biomes) with dynamic tile geometries and fog-of-war shaders.
  - **Core Mechanics**: Turn-based grid movement; bump-to-attack combat; inventory management; character stats (Health, Memory, CPU Cycles).
  - **Audio Implementation**: Step clicks, laser attack hits, potion drink gulps, and floor descent synth tones via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 92: Turn-Based Cyberpunk Arena: Neon Gladiator
- **Category**: RPG
- **Genre**: Turn-Based Tactical Gladiator Arena
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Turn-Based Cyberpunk Arena: Neon Gladiator" for Next Games/Game
  - **Concept**: Equip your cyborg gladiator with cyberware implants and plasma blades across 45 championship arena bouts against rival gladiators.
  - **Level Scaling & Progression**: 45 distinct arena championship bouts with unique champion opponents, special arena rules, and prize purse earnings.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique arena stadium themes (Level 1: Underground Pit, Level 2: Neon Colosseum, Level 3: Factory Slaughterhouse, Level 4: Floating Sky-Arena, etc.) with custom animated crowd banners and arena floors.
  - **Core Mechanics**: Turn-based combat commands (Slash, Heavy Strike, Shield Wall, Nanite Heal); stamina/energy management; cyberware shop.
  - **Audio Implementation**: Blade clashes, crowd cheers, shield deflection hums, and victory fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 93: Text Terminal Hacker Quest: Interactive Fiction
- **Category**: RPG
- **Genre**: Interactive Narrative Terminal RPG
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Text Terminal Hacker Quest: Interactive Fiction" for Next Games/Game
  - **Concept**: An immersive text-based cyberpunk RPG played through a retro Unix terminal across 45 branching mission nodes, investigating corporate espionage.
  - **Level Scaling & Progression**: 45 distinct corporate infiltration mission chapters with escalating security clearance puzzles and branching narrative outcomes.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique terminal system themes (Level 1: Police Dispatch Terminal, Level 2: Biotech Corporation Intranet, Level 3: Orbital Defense Console, Level 4: AI Research Node, etc.) with distinct color phosphor schemes, ASCII headers, and prompt signatures.
  - **Core Mechanics**: Command parser (`ls`, `cat`, `connect`, `hack`, `decrypt`, `inventory`); branching dialogue; multiple storyline endings.
  - **Audio Implementation**: Mechanical keyboard keystrokes, floppy disk whir, modem connect tones, and warning beeps via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 94: Space Mercenary Outpost: Sector Bounty Hunter
- **Category**: RPG
- **Genre**: Space Trader & Bounty Hunter RPG
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Space Mercenary Outpost: Sector Bounty Hunter" for Next Games/Game
  - **Concept**: Pilot a mercenary gunship across 45 planetary outposts, taking on pirate bounties, upgrading ship hulls, and trading contraband.
  - **Level Scaling & Progression**: 45 distinct bounty sector missions with escalating pirate fleet sizes, capital ship targets, and planetary dock stations.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique star system outposts (Level 1: Mars Orbital Hangar, Level 2: Titan Refinery Bay, Level 3: Asteroid Pirate Den, Level 4: Deep Space Military Citadel, etc.) with custom space dogfight starfields and hangar station UIs.
  - **Core Mechanics**: Ship customization (Hull, Engines, Shield, Weapons); bounty mission board; 2D orbital combat dogfights; reputation system.
  - **Audio Implementation**: Thruster roars, laser blaster fire, warp drive jump booms, and mission accepted chimes via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 95: Neon Wizard: Spell-Crafting Grimoire
- **Category**: RPG
- **Genre**: Rune-Drawing Magic Battler
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Wizard: Spell-Crafting Grimoire" for Next Games/Game
  - **Concept**: Draw glowing geometric runes on screen with mouse or touch to cast dynamic elemental spells against waves of mythical monsters across 45 stages.
  - **Level Scaling & Progression**: 45 distinct arcane trial stages featuring complex composite runes, resistant elemental bosses, and mana scarcity.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique sanctum themes (Level 1: Arcane Library, Level 2: Infernal Crucible, Level 3: Frozen Spire, Level 4: Astral Void, etc.) with custom glowing spell circle rings and monster particle models.
  - **Core Mechanics**: Gesture recognition algorithm matching drawn strokes to spell templates; mana pool management; elemental monster counters.
  - **Audio Implementation**: Rune drawing spark sizzles, spell discharge detonations, and monster growl synth noise via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 96: Cyber Pet Simulator: Virtual Tamagotchi Bot
- **Category**: RPG
- **Genre**: Virtual Digital Pet Life Sim
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Cyber Pet Simulator: Virtual Tamagotchi Bot" for Next Games/Game
  - **Concept**: Care for, train, and evolve a digital nanobot companion across 40 distinct evolutionary lifecycle stages and discipline training mini-games.
  - **Level Scaling & Progression**: 40 distinct evolution tiers and mini-game levels unlocking new chassis parts, personality algorithms, and combat stats.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 40 unique living habitat themes (Level 1: Cleanroom Habitat, Level 2: Cyber Yard, Level 3: Beach Vacation Room, Level 4: Lunar Playpen, etc.) with custom pixel LCD screen borders and background art.
  - **Core Mechanics**: Virtual pet lifecycle simulation; feeding, cleaning, training; multiple evolution branches based on care metrics; localStorage state.
  - **Audio Implementation**: Retro 8-bit Tamagotchi bleeps, eating munch tones, happy arpeggios, and attention alarm chirps via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 97: Post-Apocalyptic Barterer: Wasteland Merchant
- **Category**: RPG
- **Genre**: Economic Survival Merchant RPG
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Post-Apocalyptic Barterer: Wasteland Merchant" for Next Games/Game
  - **Concept**: Lead a scrap caravan across radioactive wastelands across 45 trading settlement stages, buying low and selling high while fending off raiders.
  - **Level Scaling & Progression**: 45 unique wasteland settlement route stages with shifting market commodities, raider ambush risks, and settlement reputation ranks.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique wasteland settlement themes (Level 1: Scrap City Gateway, Level 2: Salt Flat Bazaar, Level 3: Oasis Outpost, Level 4: Bunker 101 Market, etc.) with custom stylized parchment/neon map art.
  - **Core Mechanics**: Commodity trading economics; caravan guard hiring; random encounter combat decisions; fuel and water rations.
  - **Audio Implementation**: Desert wind background noise, cash register coin jingles, and shotgun blast defense sounds via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 98: Rogue Drone Swarm: Craft & Evolve
- **Category**: RPG
- **Genre**: Action RPG Drone Evolution
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Rogue Drone Swarm: Craft & Evolve" for Next Games/Game
  - **Concept**: Control a core drone harvesting scrap from discarded machines across 45 combat testing sectors, evolving into a walking fortress.
  - **Level Scaling & Progression**: 45 distinct proving ground sectors with tougher enemy drone chassis, heavy boss mechs, and modular scrap components.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique proving ground themes (Level 1: Junkyard Alpha, Level 2: Smelting Facility, Level 3: Military Testing Grounds, Level 4: Orbital Debris Field, etc.) with custom scrap floor tiles and modular components.
  - **Core Mechanics**: Grid-based modular component attachment; energy routing; real-time weapon testing arena; level progression.
  - **Audio Implementation**: Component snapping clinks, welding torch sizzle, laser testing discharges, and level-up fanfares via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 99: Neon Samurai: Bushido Cyber Odyssey
- **Category**: RPG
- **Genre**: Narrative Bushido Hack-and-Slash RPG
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Neon Samurai: Bushido Cyber Odyssey" for Next Games/Game
  - **Concept**: Embark on a vengeance quest across corporate spires as an augmented ronin across 45 story duel stages, seeking corporate liberation.
  - **Level Scaling & Progression**: 45 distinct story duel stages featuring unique corporate boss swordsmen, changing weather, and stance mastery requirements.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique duel stage themes (Level 1: Rain-Slicked Neon Alley, Level 2: Cybernetic Tea House, Level 3: Holographic Cherry Blossom Garden, Level 4: Megacorp Rooftop Heli-pad, etc.) with custom weather and cinematic lighting per stage.
  - **Core Mechanics**: Real-time katana parry and counter-strike mechanics; stance switching (Water, Wind, Fire); narrative dialogue moral choices.
  - **Audio Implementation**: Steel blade parry clash, bamboo flute synthesizer melody, and blood-pumping taiko drum beats via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

### Game 100: Quantum Chrono RPG: Timeline Paradox Savior
- **Category**: RPG
- **Genre**: Epic Time-Travel Turn-Based RPG
- **Prompt Specification**:
  ```markdown
  ### Task: Develop "Quantum Chrono RPG: Timeline Paradox Savior" for Next Games/Game
  - **Concept**: Travel between Past, Present, and Future eras across 45 timeline paradox stages to defeat the Entropy Core and restore history.
  - **Level Scaling & Progression**: 45 chronological mission stages requiring timeline puzzle solving, multi-era boss fights, and party ability combinations.
  - **Unique Thematic Environments (30 to 45 Unique Themes)**: 45 unique historical and futuristic era themes (Level 1: Neo-Kyoto 2099, Level 2: Primordial Volcanic Earth, Level 3: Medieval Clockwork Kingdom, Level 4: Post-Singularity Cosmos, etc.) with custom multi-era tilesets and seamless time-warp shaders.
  - **Core Mechanics**: Active Time Battle (ATB) gauge; multi-character combo techniques (Dual Techs); actions taken in the Past alter the map in the Future.
  - **Audio Implementation**: Epoch time-warp frequency glissando, vintage battle chimes, and sweeping emotional synth chords via Web Audio API.
  - **Strict Mandates**: Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config. Enforce 30 to 45 unique playable levels with completely unique visual themes per level.
  ```

---

## Verification & Catalog Summary Matrix

| Category # | Category Name | Games Range | Count | Minimum Levels Per Game | Unique Themes Per Game | Primary Tech Stack | Audio Implementation |
|:---|:---|:---|:---|:---|:---|:---|:---|
| **1** | Racing | Games 1 – 10 | 10 | 40 to 45 Levels | 40 to 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **2** | Arcade | Games 11 – 20 | 10 | 45 Levels | 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **3** | Puzzle | Games 21 – 30 | 10 | 45 Levels | 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **4** | Strategy | Games 31 – 40 | 10 | 40 to 45 Levels | 40 to 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **5** | Platformer | Games 41 – 50 | 10 | 40 to 45 Levels | 40 to 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **6** | Physics | Games 51 – 60 | 10 | 40 to 45 Levels | 40 to 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **7** | Card | Games 61 – 70 | 10 | 45 Levels | 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **8** | Word | Games 71 – 80 | 10 | 45 Levels | 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **9** | Rhythm | Games 81 – 90 | 10 | 40 to 45 Levels | 40 to 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **10** | RPG | Games 91 – 100 | 10 | 40 to 45 Levels | 40 to 45 Unique Themes | Vanilla HTML5 Canvas / CSS / JS | Native Web Audio API |
| **TOTAL** | **10 Categories** | **Games 1 – 100** | **100** | **30 to 45 Minimum** | **30 to 45 Unique Themes** | **100% Vanilla Web Standards** | **100% Procedural Synthesis** |
