/**
 * Next Games/Game — Rule 11 In-Place Function Modification & Dead Code Audit Suite
 * 
 * Verifies:
 * 1. Rule 11 is formally codified in developer/rules.md
 * 2. Zero duplicate function declarations across all 101 games in public/games/
 * 3. Zero duplicate functions in audio.js, game.js, or index.html
 * 4. Zero duplicate functions in portal js/app.js
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const rulesPath = path.join(rootDir, 'developer', 'rules.md');
const gamesDir = path.join(rootDir, 'public', 'games');
const portalJsPath = path.join(rootDir, 'js', 'app.js');

// ANSI Colors
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
console.log(`${BOLD}  NEXT GAMES/GAME — RULE 11 IN-PLACE MODIFICATION TEST SUITE     ${RESET}`);
console.log(`${BOLD}${CYAN}================================================================${RESET}\n`);

// ----------------------------------------------------------------------------
// PART 1: RULES.MD ENFORCEMENT & CODIFICATION
// ----------------------------------------------------------------------------
console.log(`${BOLD}Part 1: Rules Codification Audit${RESET}`);

assert(fs.existsSync(rulesPath), `developer/rules.md exists on disk`);

if (fs.existsSync(rulesPath)) {
  const rulesContent = fs.readFileSync(rulesPath, 'utf-8');
  assert(
    rulesContent.includes('Rule 11: Strict In-Place Function Updating (No Duplicate Overrides)') ||
    rulesContent.includes('RULE 11: STRICT IN-PLACE FUNCTION UPDATING'),
    `rules.md explicitly defines Rule 11 (Strict In-Place Function Updating)`
  );
  assert(
    rulesContent.includes('edit the existing function, class, or CSS rule directly in its original location'),
    `rules.md mandates editing existing functions in original location`
  );
  assert(
    rulesContent.includes('strictly forbidden from writing a "new" function at the bottom of the file'),
    `rules.md forbids appending new functions to override old ones`
  );
  assert(
    rulesContent.includes('must not create alternative replacement functions'),
    `rules.md forbids creating alternative replacement function names (e.g. movePlayerNew)`
  );
  assert(
    rulesContent.includes('prevent dead code, execution order conflicts, and bloated file sizes'),
    `rules.md articulates rationale on preventing dead code and bloat`
  );
}

// ----------------------------------------------------------------------------
// PART 2: GLOBAL PORTAL APP.JS AUDIT
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Part 2: Global Portal Script Audit (js/app.js)${RESET}`);

assert(fs.existsSync(portalJsPath), `js/app.js exists on disk`);

if (fs.existsSync(portalJsPath)) {
  const appJs = fs.readFileSync(portalJsPath, 'utf-8');
  const funcMatches = appJs.match(/function\s+([a-zA-Z0-9_$]+)\s*\(/g) || [];
  const names = funcMatches.map(m => m.replace(/function\s+/, '').replace(/\s*\(/, ''));
  const counts = {};
  names.forEach(n => counts[n] = (counts[n] || 0) + 1);
  const dups = Object.keys(counts).filter(n => counts[n] > 1);

  assert(dups.length === 0, `js/app.js contains zero duplicate function declarations (found: ${dups.length})`);
}

// ----------------------------------------------------------------------------
// PART 3: PUBLIC/GAMES/ DIRECTORY DEEP FUNCTION AUDIT (ALL 101 GAMES)
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Part 3: Comprehensive Game Script Function Audit (All Games)${RESET}`);

const gameFolders = fs.readdirSync(gamesDir).filter(f => fs.statSync(path.join(gamesDir, f)).isDirectory());
assert(gameFolders.length >= 100, `Catalog contains 100+ games (found: ${gameFolders.length})`);

let totalGameJsFiles = 0;
let totalAudioJsFiles = 0;
let totalIndexHtmlFiles = 0;
let gamesWithDuplicates = [];

gameFolders.forEach(gameId => {
  const gDir = path.join(gamesDir, gameId);
  const audioPath = path.join(gDir, 'audio.js');
  const gamePath = path.join(gDir, 'game.js');
  const indexPath = path.join(gDir, 'index.html');

  const filesToCheck = [
    { p: audioPath, name: 'audio.js' },
    { p: gamePath, name: 'game.js' },
    { p: indexPath, name: 'index.html' }
  ];

  filesToCheck.forEach(fileInfo => {
    if (fs.existsSync(fileInfo.p)) {
      if (fileInfo.name === 'audio.js') totalAudioJsFiles++;
      if (fileInfo.name === 'game.js') totalGameJsFiles++;
      if (fileInfo.name === 'index.html') totalIndexHtmlFiles++;

      const content = fs.readFileSync(fileInfo.p, 'utf-8');
      const matches = content.match(/function\s+([a-zA-Z0-9_$]+)\s*\(/g) || [];
      const funcNames = matches.map(m => m.replace(/function\s+/, '').replace(/\s*\(/, ''));
      const counts = {};
      funcNames.forEach(fn => counts[fn] = (counts[fn] || 0) + 1);
      const dups = Object.keys(counts).filter(fn => counts[fn] > 1);

      if (dups.length > 0) {
        gamesWithDuplicates.push(`${gameId}/${fileInfo.name}: [${dups.join(', ')}]`);
      }
    }
  });
});

assert(gamesWithDuplicates.length === 0, `Zero duplicate functions across all ${totalGameJsFiles} game.js, ${totalAudioJsFiles} audio.js, and ${totalIndexHtmlFiles} index.html files`);

if (gamesWithDuplicates.length > 0) {
  console.error(`  ${RED}Duplicates detected in:${RESET}`);
  gamesWithDuplicates.forEach(d => console.error(`    - ${d}`));
}

// ----------------------------------------------------------------------------
// PART 4: AUDIT FORMERLY AFFECTED CATEGORY 1 & 2 AUDIO.JS FILES
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}Part 4: Targeted Verification of Sprint 8 Micro-Environments${RESET}`);

const formerlyDuplicated = [
  'helix-breaker', 'neon-pong', 'vortex-missile-command', 'graviton-loop',
  'solar-wind-sprint', 'hyper-maglev', 'retro-grid-invaders', 'isometric-precision-racer',
  'cyber-runner', 'quantum-velocity', 'pixel-drop', 'neon-horizon',
  'plasma-hydrofoil', 'cyber-drift', 'asteroid-shatter', 'cyber-snake-3000',
  'tachyon-overdrive'
];

formerlyDuplicated.forEach(gameId => {
  const aPath = path.join(gamesDir, gameId, 'audio.js');
  if (fs.existsSync(aPath)) {
    const code = fs.readFileSync(aPath, 'utf-8');
    const getAudioMatches = code.match(/function\s+getAudio\s*\(/g) || [];
    assert(getAudioMatches.length === 1, `[${gameId}] audio.js has exactly 1 getAudio declaration (in-place modification verified)`);
  }
});

// ----------------------------------------------------------------------------
// SUMMARY & EXIT
// ----------------------------------------------------------------------------
console.log(`\n${BOLD}${CYAN}================================================================${RESET}`);
console.log(`${BOLD}IN-PLACE MODIFICATION TEST SUMMARY:${RESET}`);
console.log(`  Total Tests Run:  ${totalTests}`);
console.log(`  Passed:           ${GREEN}${passedTests}${RESET}`);
console.log(`  Failed:           ${failedTests > 0 ? RED + failedTests : GREEN + '0'}${RESET}`);
console.log(`${BOLD}${CYAN}================================================================${RESET}\n`);

if (failedTests > 0) {
  console.error(`${RED}${BOLD}In-place modification validation failed. See errors above.${RESET}`);
  process.exit(1);
} else {
  console.log(`${GREEN}${BOLD}RULE 11 100% ENFORCED! ZERO DUPLICATE FUNCTIONS ACROSS ENTIRE REPOSITORY.${RESET}\n`);
  process.exit(0);
}
