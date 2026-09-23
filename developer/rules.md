# Next Games/Game — Active Development Standards & Guardrails

This document establishes the mandatory engineering standards, guardrails, and architectural protocols for all developers, automated systems, and subagents working on the **"Next Games/Game"** portal.

---

## Rule 1: Zero-Deletion Policy (Absolute Ban on Deletion)
- **Zero Deletion Mandate**: Strictly forbidden from deleting any file, asset, directory, or database entry (`rm`, `rmdir`, `del`, `git rm`).
- **Append & Modify Only**: When updates are required, modify existing files through in-place edits or create new modular files.
- **Rationale**: Preserves complete historical auditability, prevents catastrophic code loss, and protects operational continuity.

---

## Rule 2: Strict No-Override Policy for Existing Working Code
- **Preservation of Functional Core**: When introducing new games, features, or visual extensions, you must **NEVER** overwrite, delete, or break working production code in `css/style.css`, `js/app.js`, `index.html`, or existing game modules.
- **Modular Additions**: 
  - For CSS: Append new class rules and component extensions to the bottom of `css/style.css` or load separate modular stylesheets without mutating baseline reset, token, or layout rules.
  - For JavaScript: Append new standalone functions, event hooks, or modular helper scripts rather than refactoring or displacing tested core routines.
  - For Markup: Add new sections or attributes semantically without stripping existing landmarks, modal wrappers, or SEO tags.
- **Rationale**: Prevents regression errors, maintains baseline stability, and guarantees backwards compatibility as the catalog scales to 100+ titles.

---

## Rule 3: Visual Theme Standards — Dark Mode Base with Neon Glassmorphism
- **Color Architecture**: 
  - Deep space/cyberpunk dark foundations (`#04060f`, `#070a18`, `#0c1026`).
  - High-intensity vibrant neon accents: Electric Cyan (`#00f0ff`), Vivid Magenta (`#ff007f`), Hyper Violet (`#8a2be2`), Emerald Matrix (`#00ff88`), and Solar Amber (`#ffaa00`).
- **Glassmorphic Depth**: 
  - All navigation bars, floating HUD elements, and modal overlays must incorporate CSS `backdrop-filter: blur(...) saturate(...)` with semi-transparent tinted backgrounds (`rgba(...)`) and subtle neon rim borders.
- **Dynamic Feedback & Motion**:
  - Interactive hover states must feature scaling (`scale(1.02)`), border illumination, and multi-layered glowing drop-shadows.

---

## Rule 4: Semantic HTML5, Accessibility & JSON-LD Schema Markup
- **Semantic Structure**: 
  - Every page and view must utilize appropriate HTML5 semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`).
- **Schema.org Structured Data**: 
  - All new pages and games must include valid JSON-LD schemas (`WebSite`, `Organization`, `VideoGame`, `FAQPage`, `CollectionPage`).
- **Accessibility (A11y)**:
  - High contrast ratios, strict ARIA landmark roles, accessible names, skip-to-content links, and keyboard focus trap handling (native `<dialog>` support and Escape key dismissal).

---

## Rule 5: 100% Mobile-Friendly Responsive Architecture
- **Fluid Layouts**: 
  - Mobile-first approach using CSS Grid (`repeat(auto-fill, minmax(...))`) and Flexbox layouts.
  - Smooth scaling from 1 column on mobile screens (< 640px) up to 4+ columns on ultra-wide desktop displays (> 1440px).
- **Adaptive Touch & Keyboard Controls**:
  - All interactive controls, game viewports, and modals must provide touch gestures (tap, drag, swipe) alongside standard desktop keyboard and mouse inputs.

---

## Rule 6: Realistic Copywriting & Anti-Placeholder Mandate
- **Zero Dummy Content**: 
  - Absolutely NO "Lorem Ipsum", "dolor sit amet", "Sample Game", or generic filler copy allowed anywhere in HTML, JSON, CSS comments, or markdown files.
- **Compelling Worldbuilding**: 
  - All titles, gameplay briefings, controls descriptions, badges, and marketing blurbs must be realistic, high-octane, immersive, and copyright-free.

---

## Rule 7: Massive Level Scaling (30 to 45 Levels Minimum)
- **Definitive Progression Mandate**: Every game built for the portal MUST feature a minimum of **30 to 45 distinct, playable levels or progression stages**.
- **No Endless-Only Loops**: Simple, single-loop endless games without level progression are strictly forbidden as standalone submissions. Games must implement concrete level goals, victory conditions, level transitions, and persistent progression tracking (e.g., stage select, current level save state in `localStorage`).
- **Escalating Mechanics**: Difficulty, enemy behavioral patterns, obstacle velocity, and puzzle complexity must tangibly scale across all 30–45 levels.

---

## Rule 8: Unique Thematic Environments (A Unique Theme Per Level)
- **100% Environmental Variety**: Every single level (from Level 1 up to Level 45) within a game MUST feature a **completely unique visual theme, color palette, and environmental architecture**.
  - *Example progression*: Level 1 (Neon Cyber-Grid), Level 2 (Bioluminescent Crystal Cave), Level 3 (Molten Magma Core), Level 4 (Clockwork Sky-Fortress), Level 5 (Quantum Void), continuing through 45 totally distinct environmental biomes.
- **Dynamic Procedural Generation**: Procedural generation algorithms, CSS art, and HTML5 Canvas drawing routines must dynamically regenerate background elements, architectural geometry, obstacle styling, and particle effects so that **no two levels share identical visuals**.
- **Thematic Audio Modulation**: Web Audio API synthesis soundscapes must dynamically modulate (fundamental frequencies, chord progressions, and ambient filter cutoffs) to mirror the active level's unique thematic environment.

---

## Rule 9: Copyright-Free Asset & Procedural Audio Enforcement
- **Native Web Audio Synthesis**:
  - No external copyrighted MP3 or WAV audio files may be downloaded or linked.
  - All sound effects, engine rumbles, laser blasts, chords, and music beats must be generated programmatically using the browser's native Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`).
- **Vector & Procedural Visuals**:
  - No ripped commercial sprites or copyrighted character likenesses.
  - All visual assets must be drawn dynamically on HTML5 Canvas, styled with CSS3 art, or generated via clean inline SVG vectors.

---

## Rule 10: Developer Directory Isolation
- **Production Root Hygiene**: 
  - The root of `gaming-portal/` must strictly contain only production runtime code (`index.html`, `css/`, `js/`, `assets/`, `config/`, `public/`).
- **Meta-Directory Enclosure**: 
  - All developer planning documents, test suites, prompts, working logs, roadmaps, and script files must reside exclusively within `gaming-portal/developer/`.

---

## Rule 11: Strict In-Place Function Updating (No Duplicate Overrides)
- **Direct Location Modification**: When updating, fixing, or modifying an existing feature, you MUST edit the existing function, class, or CSS rule directly in its original location within the file.
- **No Appended Overrides**: You are strictly forbidden from writing a "new" function at the bottom of the file to override the old one (e.g., appending a second `function update()` to override the first one).
- **No Alternative Replacement Names**: You must not create alternative replacement functions (e.g., do not leave `function movePlayer()` rotting in the code and create `function movePlayerNew()` below it).
- **Zero Dead Code & Bloat**: Modify the existing logic cleanly in place to prevent dead code, execution order conflicts, and bloated file sizes.

---

## Rule 12: Strict English-Only Policy
- **Universal English Mandate**: Every text element in every game (including UI labels, HUD counters, dialogue sequences, in-game prompts, tutorial hints, and error alerts) MUST be written exclusively in English.
- **No Non-English Characters or Scripts**: No foreign languages, foreign characters, or untranslated idioms are permitted anywhere in the user-facing game interfaces or data configurations.
- **Clarity & Accessibility**: All copy must be grammatical, natural, engaging, and clear to English-speaking players worldwide.

---

## Rule 13: In-Game Dynamic Non-Blocking Instructions
- **Real-Time Contextual Guidance**: Replace or supplement static pre-game tutorial walls with real-time, non-blocking in-game instructional hints.
- **Active Gameplay Hints**: "How to play" hints must appear contextually *while* the player is actively playing (e.g., floating HUD tooltips, dynamic helper banners, fading directional arrows, or contextual prompt badges near hazards such as "Press SPACE to jump" or "Tap [D] on beat").
- **Seamless Flow**: Instructional cues must NEVER pause, freeze, or interrupt the flow of the game loop, allowing players to learn naturally through interactive gameplay.

---

## Rule 14: 20-Cycle Minimum QA Testing & Reporting Protocol
- **Rigorous 20-Iteration Verification**: Every game must successfully complete an automated testing loop a minimum of 20 consecutive simulation runs before being certified production-ready.
- **Stochastic Path Exploration**: The automated QA test script must simulate 20 distinct gameplay iterations covering varied lane choices, reaction timings, level transitions, and branching inputs.
- **Formal QA Test Report Generation**: Upon completion of the 20 test cycles, a comprehensive "QA Test Report" detailing pass/fail status, stability metrics, instruction visibility, and English-only compliance across all 20 iterations must be printed to the console and preserved in `developer/qa-reports/`.


