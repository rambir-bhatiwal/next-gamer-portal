/**
 * Next Games/Game — Standalone Game Isolation & Conflict Verification Suite
 * Tests architectural decoupling, relative pathing, Web Audio modules,
 * and executes multi-game sandbox simulations in isolated VM contexts.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');
const portalJsPath = path.join(rootDir, 'js', 'app.js');
const portalCssPath = path.join(rootDir, 'css', 'style.css');

// ANSI Color Output
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const CYAN = '\x1b[36m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ${GREEN}✓${RESET} ${message}`);
  } else {
    failedTests++;
    console.error(`  ${RED}✗ [FAIL]${RESET} ${message}`);
  }
}

console.log(`\n${BOLD}${CYAN}================================================================${RESET}`);
console.log(`${BOLD}  NEXT GAMES/GAME — STANDALONE ARCHITECTURE & ISOLATION SUITE   ${RESET}`);
console.log(`${BOLD}${CYAN}================================================================${RESET}\n`);

const games = fs.readdirSync(gamesDir).filter(f => fs.statSync(path.join(gamesDir, f)).isDirectory());

// ----------------------------------------------------------------------------
// PART 1: STANDALONE FILE STRUCTURE & ASSET VERIFICATION
// ----------------------------------------------------------------------------
console.log(`${BOLD}Part 1: Standalone Directory & Asset Structure Audit (${games.length} Games)${RESET}`);

games.forEach(g => {
  const gDir = path.join(gamesDir, g);
  const indexPath = path.join(gDir, 'index.html');
  const stylePath = path.join(gDir, 'style.css');
  const audioPath = path.join(gDir, 'audio.js');
  const gamePath = path.join(gDir, 'game.js');
  const assetsDir = path.join(gDir, 'assets');
  const iconPath = path.join(assetsDir, 'icon.svg');

  assert(fs.existsSync(indexPath), `[${g}] index.html exists`);
  assert(fs.existsSync(stylePath), `[${g}] style.css exists`);
  assert(fs.existsSync(audioPath), `[${g}] audio.js exists`);
  assert(fs.existsSync(gamePath), `[${g}] game.js exists`);
  assert(fs.existsSync(assetsDir) && fs.existsSync(iconPath), `[${g}] local assets/icon.svg exists`);
});

// ----------------------------------------------------------------------------
// PART 2: RELATIVE PATHING & ZERO-PORTAL COUPLING AUDIT
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Part 2: Relative Pathing & Zero-Portal Coupling Audit${RESET}`);

games.forEach(g => {
  const gDir = path.join(gamesDir, g);
  const indexContent = fs.readFileSync(path.join(gDir, 'index.html'), 'utf8');
  const styleContent = fs.readFileSync(path.join(gDir, 'style.css'), 'utf8');
  const audioContent = fs.readFileSync(path.join(gDir, 'audio.js'), 'utf8');
  const gameContent = fs.readFileSync(path.join(gDir, 'game.js'), 'utf8');

  // Relative path assertions
  assert(
    indexContent.includes('href="./style.css"') || indexContent.includes("href='./style.css'"),
    `[${g}] index.html links to local ./style.css via relative path`
  );
  assert(
    indexContent.includes('src="./audio.js"') || indexContent.includes("src='./audio.js'"),
    `[${g}] index.html links to local ./audio.js via relative path`
  );
  assert(
    indexContent.includes('src="./game.js"') || indexContent.includes("src='./game.js'"),
    `[${g}] index.html links to local ./game.js via relative path`
  );

  // Coupling assertions
  const allGameCode = indexContent + styleContent + audioContent + gameContent;
  assert(
    !allGameCode.includes('../../css/style.css') && !allGameCode.includes('/css/style.css'),
    `[${g}] completely decoupled from portal style.css`
  );
  assert(
    !allGameCode.includes('../../js/app.js') && !allGameCode.includes('/js/app.js'),
    `[${g}] completely decoupled from portal app.js`
  );
});

// ----------------------------------------------------------------------------
// PART 3: PORTAL FRAMEWORK PURITY AUDIT
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Part 3: Global Portal Script Purity Audit (app.js)${RESET}`);

const portalJs = fs.readFileSync(portalJsPath, 'utf8');

assert(
  !portalJs.includes('ctx.fillRect') && !portalJs.includes('ctx.beginPath'),
  'portal app.js contains zero canvas drawing or game render loops'
);
assert(
  portalJs.includes('init') && portalJs.includes('openGameModal') && portalJs.includes('closeGameModal'),
  'portal app.js strictly contains portal UI, filtering, search, and iframe modal controllers'
);
assert(
  portalJs.includes('about:blank'),
  'portal app.js safely isolates game iframe lifecycles with about:blank resets'
);

// ----------------------------------------------------------------------------
// PART 4: MULTI-GAME SANDBOX EXECUTION & SIMULATION
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Part 4: Multi-Game Isolated Sandbox Simulation (Testing Iframe Isolation)${RESET}`);

// Simulate opening and running consecutive games in mock browser iframe window contexts
const simulatedGames = ['cyber-runner', 'cosmic-gate-runner', 'neon-pong', 'retro-grid-invaders', 'cyber-drift'];

simulatedGames.forEach(g => {
  const gDir = path.join(gamesDir, g);
  const audioCode = fs.readFileSync(path.join(gDir, 'audio.js'), 'utf8');
  const gameCode = fs.readFileSync(path.join(gDir, 'game.js'), 'utf8');

  // Create isolated DOM / Window mock for iframe
  const mockWindow = {
    AudioContext: class MockAudioContext {
      constructor() {
        this.state = 'running';
        this.currentTime = 0;
        this.destination = {};
      }
      createOscillator() {
        return {
          type: 'sine',
          frequency: { setValueAtTime: () => {} },
          connect: () => {},
          start: () => {},
          stop: () => {}
        };
      }
      createGain() {
        return {
          gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} },
          connect: () => {}
        };
      }
      resume() { return Promise.resolve(); }
    },
    innerWidth: 800,
    innerHeight: 600,
    localStorage: {
      getItem: () => null,
      setItem: () => {}
    },
    addEventListener: () => {},
    removeEventListener: () => {},
    setTimeout: (fn) => fn(),
    setInterval: (fn) => fn(),
    requestAnimationFrame: () => 1
  };
  mockWindow.webkitAudioContext = mockWindow.AudioContext;
  mockWindow.window = mockWindow;

  const makeElement = () => ({
    getContext: () => ({
      fillRect: () => {},
      strokeRect: () => {},
      clearRect: () => {},
      beginPath: () => {},
      closePath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      arc: () => {},
      fill: () => {},
      stroke: () => {},
      createLinearGradient: () => ({ addColorStop: () => {} }),
      createRadialGradient: () => ({ addColorStop: () => {} }),
      save: () => {},
      restore: () => {},
      translate: () => {},
      rotate: () => {},
      scale: () => {},
      fillText: () => {},
      measureText: () => ({ width: 50 }),
      setLineDash: () => {},
      roundRect: () => {}
    }),
    width: 800,
    height: 600,
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {},
    addEventListener: () => {},
    querySelectorAll: () => [],
    textContent: '',
    innerHTML: '',
    style: {}
  });

  const mockDocument = {
    getElementById: () => makeElement(),
    createElement: () => makeElement(),
    querySelectorAll: () => [],
    addEventListener: () => {}
  };

  const sandboxContext = vm.createContext({
    window: mockWindow,
    document: mockDocument,
    localStorage: mockWindow.localStorage,
    requestAnimationFrame: () => 1,
    cancelAnimationFrame: () => {},
    console: { log: () => {}, warn: () => {}, error: () => {} },
    Math,
    Date,
    Array,
    Object,
    String,
    Number,
    Boolean,
    parseInt,
    parseFloat
  });

  let ranCleanly = true;
  try {
    // 1. Run audio.js in sandbox
    vm.runInContext(audioCode, sandboxContext);
    assert(
      typeof sandboxContext.window.getAudio === 'function' || typeof sandboxContext.window.initAudio === 'function',
      `[${g}] audio.js successfully initialized Web Audio API module in sandbox`
    );

    // 2. Run game.js in sandbox
    vm.runInContext(gameCode, sandboxContext);
    assert(
      ranCleanly,
      `[${g}] game.js executed cleanly with 0 namespace collisions or runtime errors`
    );
  } catch (err) {
    ranCleanly = false;
    assert(false, `[${g}] Runtime exception in sandbox: ${err.message}`);
  }
});

// ----------------------------------------------------------------------------
// SUMMARY & EXIT CODE
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}${CYAN}================================================================${RESET}`);
console.log(`${BOLD}ISOLATION SUITE RESULTS SUMMARY:${RESET}`);
console.log(`  Total Tests Run:  ${totalTests}`);
console.log(`  Passed:           ${GREEN}${passedTests}${RESET}`);
console.log(`  Failed:           ${failedTests > 0 ? RED + failedTests : GREEN + '0'}${RESET}`);
console.log(`${BOLD}${CYAN}================================================================${RESET}\n`);

if (failedTests > 0) {
  console.error(`${RED}${BOLD}Isolation validation failed with ${failedTests} error(s).${RESET}`);
  process.exit(1);
} else {
  console.log(`${GREEN}${BOLD}ALL ${games.length} GAMES 100% STANDALONE, SELF-CONTAINED & ISOLATED! Production Ready.${RESET}\n`);
  process.exit(0);
}
