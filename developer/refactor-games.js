/**
 * Next Games/Game — Standalone Game Directory Architecture Refactor
 * Converts all 24 games into completely independent, self-contained micro-environments:
 *   - style.css (local styles)
 *   - audio.js (dedicated Web Audio API engine)
 *   - game.js (dedicated game mechanics & canvas loop)
 *   - index.html (links only local ./style.css, ./audio.js, ./game.js)
 *   - assets/icon.svg (local vector asset)
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');
const thumbnailsDir = path.join(rootDir, 'assets', 'thumbnails');

const gameList = fs.readdirSync(gamesDir).filter(f => {
  return fs.statSync(path.join(gamesDir, f)).isDirectory();
});

console.log(`Starting standalone refactor for ${gameList.length} games...`);

gameList.forEach(gameId => {
  const gDir = path.join(gamesDir, gameId);
  const indexPath = path.join(gDir, 'index.html');
  if (!fs.existsSync(indexPath)) return;

  const originalContent = fs.readFileSync(indexPath, 'utf8');

  // 1. Extract Title
  const titleMatch = originalContent.match(/<title>([\s\S]*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : `${gameId} - Next Games/Game`;

  // 2. Extract CSS into style.css
  const styleMatch = originalContent.match(/<style>([\s\S]*?)<\/style>/);
  const cssContent = styleMatch ? styleMatch[1].trim() : '/* Standalone Game Styles */';
  const stylePath = path.join(gDir, 'style.css');
  fs.writeFileSync(stylePath, `/**\n * ${gameId} — Standalone Stylesheet\n * Next Games/Game Isolated Micro-Environment\n */\n\n${cssContent}\n`, 'utf8');

  // 3. Extract Body HTML
  const bodyMatch = originalContent.match(/<body>([\s\S]*?)<script>/);
  let bodyHtml = bodyMatch ? bodyMatch[1].trim() : '';

  // 4. Extract Script
  const scriptMatch = originalContent.match(/<script>([\s\S]*?)<\/script>/);
  let rawScript = scriptMatch ? scriptMatch[1].trim() : '';

  // 5. Build Dedicated audio.js
  const audioPath = path.join(gDir, 'audio.js');
  let audioJsContent = buildAudioEngine(gameId, rawScript);
  fs.writeFileSync(audioPath, audioJsContent, 'utf8');

  // 6. Build Dedicated game.js
  const gamePath = path.join(gDir, 'game.js');
  let gameJsContent = buildGameScript(gameId, rawScript);
  fs.writeFileSync(gamePath, gameJsContent, 'utf8');

  // 7. Ensure Local assets/ Folder & icon.svg
  const assetsDir = path.join(gDir, 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  const localIconPath = path.join(assetsDir, 'icon.svg');
  const sourceThumbPath = path.join(thumbnailsDir, `${gameId}.svg`);
  if (fs.existsSync(sourceThumbPath)) {
    fs.copyFileSync(sourceThumbPath, localIconPath);
  } else {
    // Generate fallback vector SVG icon
    const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#0b0416"/>
  <circle cx="50" cy="50" r="35" stroke="#00f0ff" stroke-width="4" fill="none"/>
  <polygon points="42,35 68,50 42,65" fill="#00f0ff"/>
</svg>`;
    fs.writeFileSync(localIconPath, fallbackSvg, 'utf8');
  }

  // 8. Rewrite index.html with Relative Pathing
  const newIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>${title}</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  ${bodyHtml}

  <!-- Standalone Decoupled Modules -->
  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>
`;
  fs.writeFileSync(indexPath, newIndexHtml, 'utf8');

  console.log(`✓ Refactored [${gameId}] -> index.html, style.css, audio.js, game.js, assets/icon.svg`);
});

/**
 * Builds dedicated Web Audio API engine for a specific game
 */
function buildAudioEngine(gameId, script) {
  // Extract all audio functions
  const fnSignatures = [
    'getAudio', 'getAudioCtx', 'initAudio',
    'playTone', 'playBlip', 'playSynth', 'playChime', 'playSqueal',
    'playSplash', 'playBeep', 'playPing', 'playClack', 'playChirp',
    'playRewindSound', 'playBoom', 'playLaunch',
    'playLaserSound', 'playMushroomPop', 'playCentipedeHit', 'playBuggyHit', 'playStageClear',
    'playPelletChime', 'playPowerPellet', 'playGhostEaten', 'playPlayerDied', 'playLevelWin'
  ];

  const extractedFns = [];
  fnSignatures.forEach(fnName => {
    const fnCode = extractFunction(script, fnName);
    if (fnCode) {
      extractedFns.push(fnCode.trim());
    }
  });

  return `/**
 * Standalone Web Audio API Sound Engine
 * Module: ${gameId}
 * Next Games/Game Isolated Micro-Environment
 * 100% royalty-free, native procedural audio synthesis.
 */
(function(window) {
  'use strict';

  let audioCtx = null;

  function getAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  // Fallback playTone if not defined specifically
  function defaultPlayTone(freq, type = 'sine', duration = 0.1, gainVal = 0.1) {
    try {
      const actx = getAudio();
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, actx.currentTime);
      gain.gain.setValueAtTime(gainVal, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start();
      osc.stop(actx.currentTime + duration);
    } catch (e) {}
  }

${extractedFns.length > 0 ? extractedFns.map(f => '  ' + f).join('\n\n') : '  const playTone = defaultPlayTone;'}

  // Export clean API to window for game.js consumption
  window.getAudio = getAudio;
  window.getAudioCtx = getAudio;
  window.initAudio = getAudio;
  if (typeof playTone !== 'undefined') window.playTone = playTone;
  else window.playTone = defaultPlayTone;

  // Export specific functions if declared
${fnSignatures.filter(s => !['getAudio', 'getAudioCtx', 'initAudio'].includes(s)).map(s => {
  return `  if (typeof ${s} !== 'undefined') window.${s} = ${s};`;
}).join('\n')}

})(window);
`;
}

/**
 * Builds game.js script
 */
function buildGameScript(gameId, script) {
  return `/**
 * Standalone Game Engine & Canvas Renderer
 * Module: ${gameId}
 * Next Games/Game Isolated Micro-Environment
 */
${script}
`;
}

function extractFunction(script, fnName) {
  const startIdx = script.search(new RegExp(`function\\s+${fnName}\\s*\\(`));
  if (startIdx === -1) return null;
  let braceCount = 0;
  let started = false;
  let endIdx = -1;
  for (let i = startIdx; i < script.length; i++) {
    if (script[i] === '{') {
      braceCount++;
      started = true;
    } else if (script[i] === '}') {
      braceCount--;
      if (started && braceCount === 0) {
        endIdx = i + 1;
        break;
      }
    }
  }
  return endIdx !== -1 ? script.slice(startIdx, endIdx) : null;
}

console.log('\nAll 24 games refactored into standalone micro-environments successfully!');
