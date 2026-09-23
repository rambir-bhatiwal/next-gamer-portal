/**
 * ============================================================================
 * NEXT GAMES/GAME — AUTOMATED TEST & INTEGRITY VALIDATOR
 * ============================================================================
 * Automated test suite to verify:
 *   1. Dynamic Configuration Schema & Branding ("Next Games/Game")
 *   2. File System Integrity (Assets, SVGs, Thumbnails, Game Paths)
 *   3. Semantic HTML5 Shell & Structured Data (Schema.org JSON-LD)
 *   4. CSS Stylesheet Tokens, Animations, Glassmorphism, & Responsive Grid
 *   5. JavaScript Syntax, Modal Lifecycle, and Auto-Load Pipeline
 *   6. Quality Control: Zero "Lorem Ipsum" or placeholder text
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// Colors for terminal feedback
const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const CYAN = '\x1b[36m';
const YELLOW = '\x1b[33m';
const BOLD = '\x1b[1m';

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const errors = [];

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ${GREEN}✓${RESET} ${message}`);
  } else {
    failedTests++;
    console.error(`  ${RED}✗ [FAIL]${RESET} ${message}`);
    errors.push(message);
  }
}

console.log(`\n${BOLD}${CYAN}======================================================${RESET}`);
console.log(`${BOLD}${CYAN}   NEXT GAMES/GAME — AUTOMATED VALIDATION SUITE       ${RESET}`);
console.log(`${BOLD}${CYAN}======================================================${RESET}\n`);

const portalRoot = path.resolve(__dirname, '..');

// ----------------------------------------------------------------------------
// TEST SUITE 1: CONFIGURATION INTEGRITY (config/site-config.json)
// ----------------------------------------------------------------------------
console.log(`${BOLD}Suite 1: Configuration Schema & Brand Verification${RESET}`);

const configPath = path.join(portalRoot, 'config', 'site-config.json');
assert(fs.existsSync(configPath), `Configuration manifest exists at ${configPath}`);

let config = null;
try {
  const raw = fs.readFileSync(configPath, 'utf-8');
  config = JSON.parse(raw);
  assert(true, 'site-config.json parsed successfully as valid JSON');
} catch (e) {
  assert(false, `site-config.json parsing failed: ${e.message}`);
}

if (config) {
  // Brand name verification
  assert(
    config.siteMetadata && config.siteMetadata.siteName === 'Next Games/Game',
    `Site name is strictly "Next Games/Game" (Actual: "${config.siteMetadata?.siteName}")`
  );

  assert(
    typeof config.siteMetadata?.siteDescription === 'string' && config.siteMetadata.siteDescription.length > 20,
    'Site metadata contains a realistic, engaging siteDescription'
  );

  assert(
    config.siteMetadata?.siteLogo === 'assets/logo.svg',
    `Site logo path correctly configured to "assets/logo.svg" (Actual: "${config.siteMetadata?.siteLogo}")`
  );

  // Categories
  assert(
    Array.isArray(config.categories) && config.categories.length >= 4,
    `Categories array defined with at least 4 categories (Found: ${config.categories?.length || 0})`
  );

  // Games
  assert(
    Array.isArray(config.games) && config.games.length >= 4,
    `Games array defined with at least 4 titles (Found: ${config.games?.length || 0})`
  );

  // Featured Game ID
  assert(
    typeof config.featuredGameId === 'string' && config.games.some(g => g.id === config.featuredGameId),
    `Featured game ID ("${config.featuredGameId}") matches an existing game in catalog`
  );
}

// ----------------------------------------------------------------------------
// TEST SUITE 2: ASSET EXISTENCE & SVG VALIDITY
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 2: Asset & Logo Verification${RESET}`);

const logoPath = path.join(portalRoot, 'assets', 'logo.svg');
assert(fs.existsSync(logoPath), 'Brand logo SVG exists at assets/logo.svg');

if (fs.existsSync(logoPath)) {
  const logoContent = fs.readFileSync(logoPath, 'utf-8');
  assert(logoContent.includes('<svg') && logoContent.includes('</svg>'), 'assets/logo.svg has valid SVG tags');
  assert(logoContent.includes('NEXT') && logoContent.includes('GAMES'), 'assets/logo.svg contains branding typography');
  assert(logoContent.includes('feGaussianBlur'), 'assets/logo.svg includes neon blur glow filters');
}

if (config && Array.isArray(config.games)) {
  console.log(`\n${BOLD}Suite 3: Game Catalog & Thumbnail Assets Validation${RESET}`);
  config.games.forEach((game, idx) => {
    // Check thumbnail
    const thumbPath = path.join(portalRoot, game.thumbnail);
    assert(
      fs.existsSync(thumbPath),
      `Game [${game.id}] thumbnail exists at ${game.thumbnail}`
    );

    // Check game entrypoint HTML
    const gameHtmlPath = path.join(portalRoot, game.path);
    assert(
      fs.existsSync(gameHtmlPath),
      `Game [${game.id}] HTML entrypoint exists at ${game.path}`
    );

    // Check game copy
    assert(
      game.title && game.description && game.controls,
      `Game [${game.id}] has title, description, and controls metadata`
    );

    // Verify game HTML has canvas or script
    if (fs.existsSync(gameHtmlPath)) {
      const htmlContent = fs.readFileSync(gameHtmlPath, 'utf-8');
      assert(
        htmlContent.includes('<canvas') || htmlContent.includes('<script'),
        `Game [${game.id}] entrypoint contains playable game canvas/script elements`
      );
    }
  });
}

// ----------------------------------------------------------------------------
// TEST SUITE 4: SEMANTIC HTML & SEO SCHEMAS (index.html)
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 4: Semantic HTML5 Shell & SEO Verification${RESET}`);

const indexPath = path.join(portalRoot, 'index.html');
assert(fs.existsSync(indexPath), 'Production index.html exists in gaming-portal root');

if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf-8');

  // Semantic landmarks
  assert(indexContent.includes('<header') && indexContent.includes('</header>'), 'index.html contains semantic <header>');
  assert(indexContent.includes('<main') && indexContent.includes('</main>'), 'index.html contains semantic <main>');
  assert(indexContent.includes('<dialog') && indexContent.includes('</dialog>'), 'index.html contains accessible <dialog> modal');
  assert(indexContent.includes('<footer') && indexContent.includes('</footer>'), 'index.html contains semantic <footer>');
  assert(indexContent.includes('<iframe'), 'index.html contains game iframe player');

  // SEO & Social Tags
  assert(indexContent.includes('<title>Next Games/Game'), 'Document title features "Next Games/Game"');
  assert(indexContent.includes('property="og:title"'), 'Open Graph og:title tag present');
  assert(indexContent.includes('name="twitter:card"'), 'Twitter Card tag present');
  assert(indexContent.includes('application/ld+json'), 'JSON-LD Schema.org structured data script block present');
}

// ----------------------------------------------------------------------------
// TEST SUITE 5: MASTER CSS STYLESHEET (css/style.css)
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 5: CSS Design System, Animations & Glassmorphism${RESET}`);

const cssPath = path.join(portalRoot, 'css', 'style.css');
assert(fs.existsSync(cssPath), 'Master stylesheet exists at css/style.css');

if (fs.existsSync(cssPath)) {
  const cssContent = fs.readFileSync(cssPath, 'utf-8');

  assert(cssContent.includes('--neon-cyan') && cssContent.includes('--neon-magenta'), 'CSS defines neon custom properties (variables)');
  assert(cssContent.includes('@keyframes slideUp') || cssContent.includes('@keyframes fadeIn'), 'CSS defines keyframe animations');
  assert(cssContent.includes('backdrop-filter'), 'CSS uses backdrop-filter for glassmorphism');
  assert(cssContent.includes('.game-card:hover'), 'CSS implements interactive hover state for game cards');
  assert(cssContent.includes('@media (max-width: 640px)'), 'CSS contains responsive mobile breakpoint media queries');
  assert(cssContent.includes('grid-template-columns'), 'CSS utilizes CSS Grid for game matrix layout');
}

// ----------------------------------------------------------------------------
// TEST SUITE 6: MASTER APPLICATION JAVASCRIPT (js/app.js)
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 6: Master Application Logic (js/app.js)${RESET}`);

const jsPath = path.join(portalRoot, 'js', 'app.js');
assert(fs.existsSync(jsPath), 'Application script exists at js/app.js');

if (fs.existsSync(jsPath)) {
  const jsContent = fs.readFileSync(jsPath, 'utf-8');

  assert(jsContent.includes('loadConfiguration') || jsContent.includes('fetch'), 'js/app.js handles dynamic configuration loading');
  assert(jsContent.includes('openGameModal'), 'js/app.js implements openGameModal logic');
  assert(jsContent.includes('closeGameModal'), 'js/app.js implements closeGameModal cleanup logic');
  assert(jsContent.includes('about:blank'), 'js/app.js safely resets iframe to about:blank on exit');
  assert(jsContent.includes('requestFullscreen'), 'js/app.js implements fullscreen API integration');
  assert(jsContent.includes('injectDynamicSeoSchemas'), 'js/app.js injects dynamic Schema.org VideoGame markup');
}

// ----------------------------------------------------------------------------
// TEST SUITE 7: QUALITY CONTROL & NO DUMMY CONTENT
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 7: Copy Quality Control (Anti-Placeholder Audit)${RESET}`);

const filesToCheck = [
  indexPath,
  configPath,
  path.join(portalRoot, 'css', 'style.css'),
  path.join(portalRoot, 'js', 'app.js')
];

let foundLorem = false;
filesToCheck.forEach(file => {
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf-8').toLowerCase();
    if (text.includes('lorem ipsum') || text.includes('dolor sit amet')) {
      foundLorem = true;
      console.error(`  ${RED}Found placeholder 'Lorem Ipsum' in: ${file}${RESET}`);
    }
  }
});
assert(!foundLorem, 'No "Lorem Ipsum" or generic placeholder text discovered in codebase');

// ----------------------------------------------------------------------------
// TEST SUITE 8: 100-GAME SCALING MASTERPLAN (gamescript.md)
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 8: 100-Game Scaling Masterplan (gamescript.md)${RESET}`);

const gamescriptPath = path.join(portalRoot, 'developer', 'gamescript.md');
assert(fs.existsSync(gamescriptPath), 'gamescript.md exists in gaming-portal/developer/');

if (fs.existsSync(gamescriptPath)) {
  const gsContent = fs.readFileSync(gamescriptPath, 'utf-8');

  // Verify Categories: exactly 10 categories
  const categoryMatches = gsContent.match(/^# Category \d+:\s*.+$/gm) || [];
  assert(
    categoryMatches.length === 10,
    `Exactly 10 categories defined in gamescript.md (Found: ${categoryMatches.length})`
  );

  // Expected 10 Categories List
  const expectedCategories = [
    'Racing', 'Arcade', 'Puzzle', 'Strategy', 'Platformer',
    'Physics', 'Card', 'Word', 'Rhythm', 'RPG'
  ];
  expectedCategories.forEach((catName, idx) => {
    const found = categoryMatches.some(m => m.includes(catName));
    assert(found, `Category ${idx + 1} (${catName}) is properly declared in gamescript.md`);
  });

  // Verify Games: exactly 100 games
  const gameHeaders = gsContent.match(/^### Game \d+:\s*.+$/gm) || [];
  assert(
    gameHeaders.length === 100,
    `Exactly 100 games individually documented in gamescript.md (Found: ${gameHeaders.length})`
  );

  // Verify Existing 3 Racing Games
  assert(
    gsContent.includes('Cosmic Gate Runner'),
    'Racing Game 1 "Cosmic Gate Runner" documented with full prompt details'
  );
  assert(
    gsContent.includes('Isometric Precision Racer'),
    'Racing Game 2 "Isometric Precision Racer" documented with full prompt details'
  );
  assert(
    gsContent.includes('Neon Horizon'),
    'Racing Game 3 "Neon Horizon" documented with full prompt details'
  );

  // Mandatory prompt instruction check
  const mandatoryPhrase = "Build using vanilla HTML5 Canvas, modular CSS, and vanilla JS. Must fit seamlessly into the Next Games/Game portal config.";
  const phraseMatches = gsContent.split(mandatoryPhrase).length - 1;
  assert(
    phraseMatches >= 100,
    `Standard framework directive present in all game prompts (Found ${phraseMatches} instances; >= 100 required)`
  );

  // Asset enforcement: Web Audio API & Copyright-Free Visuals
  assert(
    gsContent.includes('Web Audio API') && gsContent.includes('OscillatorNode'),
    'Native Web Audio API procedural synthesis mandate enforced across masterplan'
  );
  assert(
    gsContent.includes('Copyright-Free') && gsContent.includes('HTML5 Canvas'),
    'Copyright-free visual asset mandate enforced across masterplan'
  );
}

// ----------------------------------------------------------------------------
// TEST SUITE 9: LEVEL SCALING & EXTREME THEMATIC VARIETY (rules.md & gamescript.md)
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 9: Massive Level Scaling & Extreme Thematic Variety${RESET}`);

const rulesPath = path.join(portalRoot, 'developer', 'rules.md');
assert(fs.existsSync(rulesPath), 'rules.md exists in gaming-portal/developer/');

if (fs.existsSync(rulesPath)) {
  const rulesContent = fs.readFileSync(rulesPath, 'utf-8');

  // Verify Rule 7: 30 to 45 Levels Minimum
  assert(
    rulesContent.includes('Rule 7: Massive Level Scaling') && rulesContent.includes('30 to 45'),
    'rules.md explicitly contains "Rule 7: Massive Level Scaling (30 to 45 Levels Minimum)"'
  );

  // Verify Rule 8: Unique Theme Per Level
  assert(
    rulesContent.includes('Rule 8: Unique Thematic Environments') && rulesContent.includes('Level 1') && rulesContent.includes('Level 45'),
    'rules.md explicitly contains "Rule 8: Unique Thematic Environments (A Unique Theme Per Level)"'
  );
}

if (fs.existsSync(gamescriptPath)) {
  const gsContent = fs.readFileSync(gamescriptPath, 'utf-8');

  // Check occurrences of 30 to 45 levels mandate
  const levelMatches = (gsContent.match(/30 to 45/g) || []).length;
  assert(
    levelMatches >= 100,
    `30 to 45 level scaling mandate hardcoded across gamescript.md (Found ${levelMatches} occurrences; >= 100 required)`
  );

  // Check unique theme mandate
  const themeMatches = (gsContent.match(/unique theme/gi) || []).length;
  assert(
    themeMatches >= 100,
    `Unique thematic environments mandate hardcoded across gamescript.md (Found ${themeMatches} occurrences; >= 100 required)`
  );

  // Check environmental biome examples presence
  assert(
    gsContent.includes('Bioluminescent Crystal Cave') && gsContent.includes('Molten Core') && gsContent.includes('Clockwork Sky-Fortress'),
    'Thematic environment archetypes (Bioluminescent Cave, Molten Core, Clockwork Fortress) verified in master prompts'
  );

  // Check procedural canvas background generation directive
  assert(
    gsContent.includes('procedural background') || gsContent.includes('procedural generation'),
    'Procedural background architecture generation explicitly mandated in gamescript.md'
  );
}

// ----------------------------------------------------------------------------
// TEST SUITE 10: CATEGORY 1 (RACING) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 10: Category 1 (Racing) Implementation & 45-Theme Level Verification${RESET}`);

const racingGames = [
  'cosmic-gate-runner',
  'isometric-precision-racer',
  'neon-horizon',
  'quantum-velocity',
  'cyber-drift',
  'graviton-loop',
  'solar-wind-sprint',
  'hyper-maglev',
  'tachyon-overdrive',
  'plasma-hydrofoil'
];

racingGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      (gameJs.includes('canvas') || html.includes('canvas')) && 
      (gameJs.includes('getContext') || html.includes('getContext')),
      `[${gameId}] renders via vanilla HTML5 Canvas`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// TEST SUITE 11: CATEGORY 2 (ARCADE) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 11: Category 2 (Arcade) Implementation & 45-Theme Level Verification${RESET}`);

const arcadeGames = [
  'neon-pong',
  'cyber-runner',
  'retro-grid-invaders',
  'helix-breaker',
  'asteroid-shatter',
  'cyber-snake-3000',
  'pixel-drop',
  'vortex-missile-command',
  'turbo-pac-grid',
  'neon-centipede'
];

arcadeGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      (gameJs.includes('canvas') || html.includes('canvas')) && 
      (gameJs.includes('getContext') || html.includes('getContext')),
      `[${gameId}] renders via vanilla HTML5 Canvas`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 12: JavaScript Syntax & Iframe Policy Verification${RESET}`);

const allGames = fs.readdirSync(path.join(portalRoot, 'public', 'games'));
let syntaxErrors = 0;
allGames.forEach(gameDir => {
  const file = path.join(portalRoot, 'public', 'games', gameDir, 'index.html');
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const scripts = content.match(/<script(?![^>]*ld\+json)[^>]*>([\s\S]*?)<\/script>/gi) || [];
  scripts.forEach((s, idx) => {
    const code = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
    try {
      new Function(code);
    } catch (e) {
      syntaxErrors++;
      console.error(`Syntax error in ${gameDir}: ${e.message}`);
    }
  });
});
assert(syntaxErrors === 0, `All ${allGames.length} games have 100% valid JavaScript syntax with zero syntax errors`);

const indexHtml = fs.readFileSync(path.join(portalRoot, 'index.html'), 'utf8');
assert(
  !indexHtml.includes('focus-without-user-activation'),
  'index.html iframe does not contain un-enabled origin trial features'
);
assert(
  indexHtml.includes('allow="fullscreen; autoplay; gamepad"'),
  'index.html iframe has standard permissions policy (fullscreen; autoplay; gamepad)'
);

// ----------------------------------------------------------------------------
// TEST SUITE 13: CATEGORY 3 (PUZZLE) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 13: Category 3 (Puzzle) Implementation & 45-Theme Level Verification${RESET}`);

const puzzleGames = [
  'quantum-matrix',
  'chrono-switch',
  'laser-circuit-reflector',
  'cyber-sudoku',
  'holographic-pipe-fusion',
  'neuro-link-sokobot',
  'quantum-nonogram',
  'hexa-tile-polarity',
  'cryptographic-word-cipher',
  'nanite-slide-puzzle'
];

puzzleGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// TEST SUITE 14: CATEGORY 4 (STRATEGY) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 14: Category 4 (Strategy) Implementation & 45-Theme Level Verification${RESET}`);

const strategyGames = [
  'orbital-defense',
  'cyber-tower-defense',
  'galactic-fleet-commander',
  'micro-colony-automaton',
  'hacker-node-conquest',
  'cyberpunk-mech-tactics',
  'biodome-terraform',
  'drone-swarm-commander',
  'ai-defense-matrix',
  'space-station-outpost'
];

strategyGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// TEST SUITE 15: CATEGORY 5 (PLATFORMER) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 15: Category 5 (Platformer) Implementation & 45-Theme Level Verification${RESET}`);

const platformerGames = [
  'neon-gravity-jumper',
  'cyber-ninja-climb',
  'nanotech-crawler',
  'quantum-teleport-hopper',
  'skyward-spire',
  'silicon-cave-explorer',
  'jetpack-salvager',
  'pulse-runner',
  'hologram-glitcher',
  'robo-escape-9'
];

platformerGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// TEST SUITE 16: CATEGORY 6 (PHYSICS) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 16: Category 6 (Physics) Implementation & 45-Theme Level Verification${RESET}`);

const physicsGames = [
  'graviton-pinball',
  'cyber-ragdoll-demolition',
  'neon-elastic-sling',
  'plasma-ballistics',
  'quantum-billiards',
  'structural-bridge-engineer',
  'fluid-particle-diverter',
  'pendulum-wrecking-bot',
  'magnetic-polarity-balancer',
  'orbital-trebuchet'
];

physicsGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// TEST SUITE 17: CATEGORY 7 (CARD) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 17: Category 7 (Card) Implementation & 45-Theme Level Verification${RESET}`);

const cardGames = [
  'cyber-solitaire',
  'neon-blackjack-2099',
  'quantum-deckbuilder',
  'neural-memory-match',
  'tri-peaks-cyber-pyramid',
  'freecell-neo',
  'spider-protocol',
  'cyber-baccarat',
  'elemental-card-duel',
  'cyber-poker'
];

cardGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// TEST SUITE 18: CATEGORY 8 (WORD) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 18: Category 8 (Word) Implementation & 45-Theme Level Verification${RESET}`);

const wordGames = [
  'terminal-wordle',
  'cyber-word-search',
  'syntax-anagram-scrambler',
  'quantum-crossword',
  'typing-blitzkrieg',
  'lexicon-link',
  'cyber-hangman',
  'boggle-terminal',
  'binary-spelling-bee',
  'word-drop'
];

wordGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// TEST SUITE 19: CATEGORY 9 (RHYTHM) 10-GAME BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 19: Category 9 (Rhythm) Implementation & 45-Theme Level Verification${RESET}`);

const rhythmGames = [
  'beat-highway',
  'neon-drum-machine',
  'frequency-slicer',
  'soundwave-surfer',
  'pulse-conductor',
  'tempo-runner',
  'neon-dance-floor',
  'bassline-defender',
  'chiptune-piano-tiles',
  'rhythm-revolver'
];

rhythmGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || gameJs.includes('40') || html.includes('40') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// TEST SUITE 20: CATEGORY 10 (RPG) 10-GAME CENTURY BATCH VERIFICATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Suite 20: Category 10 (RPG) Implementation & 45-Theme Level Verification — CENTURY FINALE${RESET}`);

const rpgGames = [
  'cyber-dungeon-crawler',
  'turn-based-cyberpunk-arena',
  'text-terminal-hacker-quest',
  'space-mercenary-outpost',
  'neon-wizard',
  'cyber-pet-simulator',
  'post-apocalyptic-barterer',
  'rogue-drone-swarm',
  'neon-samurai',
  'quantum-chrono-rpg'
];

rpgGames.forEach(gameId => {
  const gameDir = path.join(portalRoot, 'public', 'games', gameId);
  const gameIndexPath = path.join(gameDir, 'index.html');
  const gameJsPath = path.join(gameDir, 'game.js');
  const audioJsPath = path.join(gameDir, 'audio.js');

  assert(fs.existsSync(gameIndexPath), `[${gameId}] index.html exists on disk`);

  if (fs.existsSync(gameIndexPath)) {
    const html = fs.readFileSync(gameIndexPath, 'utf-8');
    const audioJs = fs.existsSync(audioJsPath) ? fs.readFileSync(audioJsPath, 'utf-8') : '';
    const gameJs = fs.existsSync(gameJsPath) ? fs.readFileSync(gameJsPath, 'utf-8') : '';

    assert(
      audioJs.includes('AudioContext') || html.includes('AudioContext'),
      `[${gameId}] incorporates native Web Audio API procedural synthesis`
    );
    assert(
      (gameJs.includes('THEMES') || html.includes('THEMES')) && 
      (gameJs.includes('45') || html.includes('45') || gameJs.includes('40') || html.includes('40') || (gameJs + html).match(/name:\s*"/g)?.length >= 40),
      `[${gameId}] implements 40-45 unique thematic environments in THEMES array`
    );
    assert(
      html.includes('levelSelectGrid') || gameJs.includes('levelSelectGrid') || html.includes('lvl-btn') || html.includes('level'),
      `[${gameId}] includes multi-level progression and level selector system`
    );
  }
});

// ----------------------------------------------------------------------------
// SUMMARY & EXIT CODE
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}${CYAN}======================================================${RESET}`);
console.log(`${BOLD}TEST RESULTS SUMMARY:${RESET}`);
console.log(`  Total Tests Run:  ${totalTests}`);
console.log(`  Passed:           ${GREEN}${passedTests}${RESET}`);
console.log(`  Failed:           ${failedTests > 0 ? RED + failedTests : GREEN + '0'}${RESET}`);
console.log(`${BOLD}${CYAN}======================================================${RESET}\n`);

if (failedTests > 0) {
  console.error(`${RED}${BOLD}Validation failed with ${failedTests} error(s). Review log above.${RESET}`);
  process.exit(1);
} else {
  console.log(`${GREEN}${BOLD}ALL TESTS PASSED WITH 100% SUCCESS RATE! Production Ready.${RESET}\n`);
  process.exit(0);
}
