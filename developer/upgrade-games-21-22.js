/**
 * Upgrade quantum-matrix and chrono-switch to include 45 THEMES and Level Select
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const qmDir = path.join(rootDir, 'public', 'games', 'quantum-matrix');
const csDir = path.join(rootDir, 'public', 'games', 'chrono-switch');

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf-8');
}

const PUZZLE_THEMES_CODE = `const THEMES = [
  { id: 1, name: "Neon Cyber-Grid", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Bioluminescent Crystal Cave", bg: "#02120e", primary: "#00ffcc", secondary: "#0099ff", accent: "#76ff03", text: "#e0f2f1" },
  { id: 3, name: "Molten Core", bg: "#160303", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 4, name: "Clockwork Sky-Fortress", bg: "#120e06", primary: "#ffd700", secondary: "#d4af37", accent: "#ff8c00", text: "#fff8e1" },
  { id: 5, name: "Quantum Void", bg: "#05010d", primary: "#b388ff", secondary: "#7c4dff", accent: "#ea80fc", text: "#ede7f6" },
  { id: 6, name: "Submerged Hydro-Lab", bg: "#010e1a", primary: "#00b0ff", secondary: "#00e5ff", accent: "#1de9b6", text: "#e1f5fe" },
  { id: 7, name: "Solar Flare Wasteland", bg: "#170a01", primary: "#ff6d00", secondary: "#ffab00", accent: "#ffd600", text: "#fff3e0" },
  { id: 8, name: "Emerald Nanite Spire", bg: "#021609", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 9, name: "Frozen Cryo-Tundra", bg: "#02121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 10, name: "Gravity Inversion Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 11, name: "Dark Matter Singularity", bg: "#030308", primary: "#7986cb", secondary: "#3f51b5", accent: "#ff4081", text: "#e8eaf6" },
  { id: 12, name: "Antimatter Reactor", bg: "#14010e", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 13, name: "Prismatic Aurora", bg: "#011210", primary: "#1de9b6", secondary: "#00bfa5", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 14, name: "Tachyon Warp Conduit", bg: "#0e0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 15, name: "Supernova Nebula", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 16, name: "Silicon Wafer Cleanroom", bg: "#081014", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 17, name: "Vaporwave Sunset Highway", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 18, name: "Radioactive Fallout Vault", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 19, name: "Obsidian Hex Matrix", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 20, name: "Cyber-Gothic Cathedral", bg: "#0d020d", primary: "#ea80fc", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 21, name: "Plasma Discharge Canal", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 22, name: "Golden Asteroid Belt", bg: "#141103", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fffde7" },
  { id: 23, name: "Krypton Laser Array", bg: "#011409", primary: "#00e676", secondary: "#1de9b6", accent: "#ff007f", text: "#e8f5e9" },
  { id: 24, name: "Acid Rain Megacity", bg: "#070c0c", primary: "#64ffda", secondary: "#1de9b6", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 25, name: "Cobalt Deep Subnet", bg: "#01071c", primary: "#2979ff", secondary: "#2962ff", accent: "#00e5ff", text: "#e3f2fd" },
  { id: 26, name: "Crimson Sector 9", bg: "#1c0206", primary: "#ff1744", secondary: "#f50057", accent: "#ff9100", text: "#ffebee" },
  { id: 27, name: "Galactic Star Forge", bg: "#0b051c", primary: "#7c4dff", secondary: "#651fff", accent: "#ffd600", text: "#ede7f6" },
  { id: 28, name: "Hyper-Space Monolith", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ff4081", text: "#e1f5fe" },
  { id: 29, name: "Bio-Synthetic Jungle", bg: "#02170a", primary: "#00c853", secondary: "#64dd17", accent: "#ffea00", text: "#e8f5e9" },
  { id: 30, name: "Volcanic Basalt Shelf", bg: "#170404", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 31, name: "Starlight Ionosphere", bg: "#06091c", primary: "#448aff", secondary: "#2979ff", accent: "#e040fb", text: "#e8eaf6" },
  { id: 32, name: "Amber CRT Mainframe", bg: "#140a00", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffd600", text: "#fff8e1" },
  { id: 33, name: "Phosphor Terminal 1978", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 34, name: "Titanium Orbital Dock", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 35, name: "Superconductor Loop", bg: "#03101c", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ff4081", text: "#e1f5fe" },
  { id: 36, name: "Magnetic Flux Funnel", bg: "#10031c", primary: "#b388ff", secondary: "#7c4dff", accent: "#00e676", text: "#ede7f6" },
  { id: 37, name: "Photon Wave Chamber", bg: "#021217", primary: "#18ffff", secondary: "#00e5ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 38, name: "Neutron Star Horizon", bg: "#0c0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 39, name: "Helios Solar Sail", bg: "#170c01", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 40, name: "Cryo-Containment Ring", bg: "#01121a", primary: "#80d8ff", secondary: "#0091ea", accent: "#69f0ae", text: "#e1f5fe" },
  { id: 41, name: "Cyber-Zen Sanctuary", bg: "#080210", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 42, name: "Nanoscale Bio-Chip", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 43, name: "Dark Energy Singularity", bg: "#020208", primary: "#5c6bc0", secondary: "#3949ab", accent: "#ff1744", text: "#e8eaf6" },
  { id: 44, name: "Tesseract Hyperspace", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Quantum Singularity Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];`;

// ----------------------------------------------------------------------------
// UPGRADE QUANTUM MATRIX
// ----------------------------------------------------------------------------
console.log('Upgrading Game 21: quantum-matrix with 45 themes & level select...');

const qmHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Quantum Matrix: Cryptographic Decryptor - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Security Sector</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Score Target</div><div id="scoreDisplay" class="hud-val">0 / 800 PTS</div></div>
      <div class="hud-box"><div class="hud-lbl">Breach Window</div><div id="timeDisplay" class="hud-val">60s</div></div>
    </div>
    
    <div class="canvas-wrap">
      <canvas id="gameCanvas" style="display:none;"></canvas>
      <div id="matrixGrid" class="matrix-grid"></div>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <button id="restartBtn" class="action-btn">RESTART SECTOR</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">QUANTUM MATRIX HACKER</h1>
        <p id="overlayDesc">Match 3 or more cryptographic data glyphs to decrypt the security mainframe across 45 covert security sectors.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">COMMENCE INFILTRATION</button>
        <div class="controls-hint">Controls: Click adjacent glyphs to swap and match 3 in a row</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const qmCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body {
  background: #04020f;
  color: #e0f7fa;
  font-family: 'Rajdhani', -apple-system, sans-serif;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
#gameContainer {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 520px;
  max-height: 840px;
  display: flex;
  flex-direction: column;
  background: #060414;
}
.hud {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: rgba(10, 15, 35, 0.85);
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
}
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #8a9bb8; }
.hud-val { font-size: 15px; font-weight: bold; color: #00f0ff; text-shadow: 0 0 6px rgba(0,240,255,0.4); }
.canvas-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.matrix-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 6px;
  width: 360px;
  height: 360px;
  background: #0b122c;
  padding: 8px;
  border: 2px solid #00f0ff;
  border-radius: 10px;
}
.tile {
  background: #111a3b;
  border: 1px solid #00f0ff55;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.15s;
}
.tile:hover { background: #00f0ff33; }
.tile.selected { border: 2px solid #ff007f; box-shadow: 0 0 12px #ff007f; }
.tile.t-0 { color: #00f0ff; }
.tile.t-1 { color: #ff007f; }
.tile.t-2 { color: #39ff14; }
.tile.t-3 { color: #ffd600; }
.tile.t-4 { color: #ea80fc; }
.controls-bar {
  display: flex;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(10, 15, 35, 0.85);
  border-top: 1px solid rgba(0, 240, 255, 0.3);
}
.action-btn {
  flex: 1;
  padding: 10px 4px;
  background: #101b3b;
  border: 1px solid #00f0ff55;
  color: #00f0ff;
  font-family: inherit;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
}
.next-btn { background: #ff007f; border-color: #ff007f; color: #fff; }
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.94);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 100;
}
.overlay.hidden { display: none; }
.card {
  background: #090e24;
  border: 1px solid #00f0ff;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  padding: 20px;
  max-width: 480px;
  width: 100%;
  text-align: center;
}
.card h1 { font-size: 24px; margin-bottom: 6px; color: #00f0ff; letter-spacing: 2px; }
.card p { font-size: 13px; color: #94a3b8; margin-bottom: 14px; line-height: 1.4; }
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
  margin-bottom: 16px;
  max-height: 160px;
  overflow-y: auto;
  padding: 4px;
}
.lvl-btn {
  background: #111a38;
  border: 1px solid #00f0ff44;
  color: #fff;
  border-radius: 4px;
  padding: 5px 0;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
}
.lvl-btn:hover, .lvl-btn.active { background: #00f0ff; color: #000; }
.lvl-btn.cleared { border-color: #39ff14; color: #39ff14; }
.play-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #00f0ff, #ff007f);
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
  border-radius: 6px;
  cursor: pointer;
}
.controls-hint { margin-top: 10px; font-size: 11px; color: #64748b; }`;

const qmGame = `/**
 * Quantum Matrix Hacker - Standalone Game Logic
 * 45 Thematic Security Sectors with Match-3 Cryptographic Cascades
 */
(function () {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const ROWS = 6;
  const COLS = 6;
  const NODE_TYPES = 5;
  const SYMBOLS = ['◈', '⬡', '▲', '◆', '✦'];

  const gridEl = document.getElementById('matrixGrid');
  const themeVal = document.getElementById('themeVal');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const timeDisplay = document.getElementById('timeDisplay');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_qm_cleared') || '[]');
  let targetScore = 800;
  let board = [];
  let selectedTile = null;
  let score = 0;
  let timeLeft = 60;
  let timerInterval = null;
  let isPlaying = false;

  function createBoard() {
    board = [];
    for (let r = 0; r < ROWS; r++) {
      board[r] = [];
      for (let c = 0; c < COLS; c++) {
        let type;
        do {
          type = Math.floor(Math.random() * NODE_TYPES);
        } while (
          (c >= 2 && board[r][c - 1] === type && board[r][c - 2] === type) ||
          (r >= 2 && board[r - 1][c] === type && board[r - 2][c] === type)
        );
        board[r][c] = type;
      }
    }
  }

  function renderBoard() {
    gridEl.innerHTML = '';
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const type = board[r][c];
        const tile = document.createElement('div');
        tile.className = 'tile t-' + type;
        tile.textContent = SYMBOLS[type];
        tile.dataset.r = r;
        tile.dataset.c = c;

        if (selectedTile && selectedTile.r === r && selectedTile.c === c) {
          tile.classList.add('selected');
        }

        tile.addEventListener('click', () => onTileClick(r, c));
        gridEl.appendChild(tile);
      }
    }
  }

  function onTileClick(r, c) {
    if (!isPlaying) return;
    if (!selectedTile) {
      selectedTile = { r, c };
      window.AudioEngine.playClick();
      renderBoard();
      return;
    }

    const dr = Math.abs(selectedTile.r - r);
    const dc = Math.abs(selectedTile.c - c);

    if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
      swap(selectedTile.r, selectedTile.c, r, c);
      selectedTile = null;
      renderBoard();

      setTimeout(() => {
        const matches = findMatches();
        if (matches.length > 0) {
          resolveMatches();
        } else {
          // Revert swap if no match
          swap(selectedTile ? selectedTile.r : r, selectedTile ? selectedTile.c : c, r, c);
          window.AudioEngine.playError();
          renderBoard();
        }
      }, 150);
    } else {
      selectedTile = { r, c };
      window.AudioEngine.playClick();
      renderBoard();
    }
  }

  function swap(r1, c1, r2, c2) {
    const temp = board[r1][c1];
    board[r1][c1] = board[r2][c2];
    board[r2][c2] = temp;
  }

  function findMatches() {
    const matched = [];
    // Horizontal
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS - 2; c++) {
        const val = board[r][c];
        if (val !== -1 && val === board[r][c + 1] && val === board[r][c + 2]) {
          matched.push({ r, c }, { r, c: c + 1 }, { r, c: c + 2 });
        }
      }
    }
    // Vertical
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS - 2; r++) {
        const val = board[r][c];
        if (val !== -1 && val === board[r + 1][c] && val === board[r + 2][c]) {
          matched.push({ r, c }, { r: r + 1, c }, { r: r + 2, c });
        }
      }
    }
    return matched;
  }

  function resolveMatches() {
    const matches = findMatches();
    if (matches.length === 0) return;

    const unique = new Set(matches.map(m => m.r + ',' + m.c));
    const count = unique.size;

    score += count * 50;
    timeLeft = Math.min(99, timeLeft + Math.floor(count / 2));
    updateHud();
    window.AudioEngine.playCascade();

    unique.forEach(key => {
      const [r, c] = key.split(',').map(Number);
      board[r][c] = -1;
    });

    // Drop down
    for (let c = 0; c < COLS; c++) {
      let emptyRow = ROWS - 1;
      for (let r = ROWS - 1; r >= 0; r--) {
        if (board[r][c] !== -1) {
          board[emptyRow][c] = board[r][c];
          if (emptyRow !== r) board[r][c] = -1;
          emptyRow--;
        }
      }
      while (emptyRow >= 0) {
        board[emptyRow][c] = Math.floor(Math.random() * NODE_TYPES);
        emptyRow--;
      }
    }

    renderBoard();
    setTimeout(resolveMatches, 220);

    if (score >= targetScore) {
      triggerVictory();
    }
  }

  function updateHud() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    scoreDisplay.textContent = score + ' / ' + targetScore + ' PTS';
    scoreDisplay.style.color = score >= targetScore ? '#39ff14' : theme.primary;
    timeDisplay.textContent = timeLeft + 's';
  }

  function triggerVictory() {
    if (!clearedLevels.includes(currentLevel)) {
      clearedLevels.push(currentLevel);
      localStorage.setItem('next_qm_cleared', JSON.stringify(clearedLevels));
    }
    nextBtn.style.display = 'inline-block';
    window.AudioEngine.playVictory();
  }

  function startSession(lvl) {
    currentLevel = lvl;
    targetScore = 600 + (lvl * 150);
    score = 0;
    timeLeft = 60;
    selectedTile = null;
    nextBtn.style.display = 'none';

    createBoard();
    renderBoard();
    updateHud();
    isPlaying = true;
    overlay.classList.add('hidden');

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!isPlaying) return;
      timeLeft--;
      timeDisplay.textContent = timeLeft + 's';
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endSession();
      }
    }, 1000);
  }

  function endSession() {
    isPlaying = false;
    window.AudioEngine.playError();
    overlayTitle.textContent = 'FIREWALL LOCKED';
    overlayDesc.textContent = 'Breach window expired! Total score: ' + score + ' points. Target was ' + targetScore + ' PTS.';
    startBtn.textContent = 'RE-INFILTRATE';
    overlay.classList.remove('hidden');
  }

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '') + (clearedLevels.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        startSession(i);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => startSession(currentLevel);
  restartBtn.onclick = () => startSession(currentLevel);
  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    startSession(currentLevel);
  };
  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    overlay.classList.remove('hidden');
  };

  buildLevelGrid();
  startSession(1);
})();`;

const qmAudio = `/**
 * Web Audio API Engine for Quantum Matrix
 */
(function(window) {
  'use strict';
  let ctx = null;
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }
  window.AudioEngine = {
    playClick() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.frequency.setValueAtTime(550, c.currentTime);
        g.gain.setValueAtTime(0.1, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.05);
      } catch(e) {}
    },
    playCascade() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, c.currentTime + 0.12);
        g.gain.setValueAtTime(0.15, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.12);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.12);
      } catch(e) {}
    },
    playError() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, c.currentTime);
        g.gain.setValueAtTime(0.15, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.15);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.08);
          g.gain.setValueAtTime(0.2, c.currentTime + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.08 + 0.3);
          osc.connect(g); g.connect(c.destination);
          osc.start(c.currentTime + i * 0.08);
          osc.stop(c.currentTime + i * 0.08 + 0.3);
        });
      } catch(e) {}
    }
  };
})(window);`;

writeFile(path.join(qmDir, 'index.html'), qmHtml);
writeFile(path.join(qmDir, 'style.css'), qmCss);
writeFile(path.join(qmDir, 'audio.js'), qmAudio);
writeFile(path.join(qmDir, 'game.js'), qmGame);
console.log('  ✓ Upgraded Game 21 [quantum-matrix]');

// ----------------------------------------------------------------------------
// UPGRADE CHRONO SWITCH
// ----------------------------------------------------------------------------
console.log('Upgrading Game 22: chrono-switch with 45 themes & level select...');

const csHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Chrono Switch: Phase Shift - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Phase Horizon</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Gate Quota</div><div id="quotaVal" class="hud-val">0 / 20 GATES | SHIELDS: 3</div></div>
      <div class="hud-box"><div class="hud-lbl">Phase State</div><div id="phaseVal" class="hud-val">CYAN POLARITY</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">PHASES (1-45)</button>
      <button id="shiftBtn" class="action-btn shift-btn">PHASE SHIFT (SPACE)</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT PHASE &gt;</button>
    </div>

    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">CHRONO SWITCH: PHASE SHIFT</h1>
        <p id="menuDesc">Shift your quantum core between Cyan and Magenta polarities in real-time across 45 unique rift horizons. Match barrier colors to absorb energy and clear gate quotas.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE PHASE SHIFT</button>
        <div class="controls-hint">Controls: Spacebar / Screen Tap / Button to Toggle Polarity</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const csCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body {
  background: #04020f;
  color: #e0f7fa;
  font-family: 'Rajdhani', -apple-system, sans-serif;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
#gameContainer {
  position: relative;
  width: 100vw;
  height: 100vh;
  max-width: 600px;
  max-height: 840px;
  display: flex;
  flex-direction: column;
  background: #060414;
}
.hud {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: rgba(10, 15, 35, 0.85);
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
}
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #8a9bb8; }
.hud-val { font-size: 15px; font-weight: bold; color: #00f0ff; text-shadow: 0 0 6px rgba(0,240,255,0.4); }
.canvas-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  overflow: hidden;
}
#gameCanvas {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
  cursor: pointer;
}
.controls-bar {
  display: flex;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(10, 15, 35, 0.85);
  border-top: 1px solid rgba(0, 240, 255, 0.3);
}
.action-btn {
  flex: 1;
  padding: 10px;
  background: #101b3b;
  border: 1px solid #00f0ff55;
  color: #00f0ff;
  font-family: inherit;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
}
.shift-btn { background: #ff007f; border-color: #ff007f; color: #fff; font-size: 14px; }
.next-btn { background: #39ff14; border-color: #39ff14; color: #000; }
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.94);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 100;
}
.overlay.hidden { display: none; }
.card {
  background: #090e24;
  border: 1px solid #00f0ff;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  padding: 20px;
  max-width: 480px;
  width: 100%;
  text-align: center;
}
.card h1 { font-size: 24px; margin-bottom: 6px; color: #00f0ff; letter-spacing: 2px; }
.card p { font-size: 13px; color: #94a3b8; margin-bottom: 14px; line-height: 1.4; }
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
  margin-bottom: 16px;
  max-height: 160px;
  overflow-y: auto;
  padding: 4px;
}
.lvl-btn {
  background: #111a38;
  border: 1px solid #00f0ff44;
  color: #fff;
  border-radius: 4px;
  padding: 5px 0;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
}
.lvl-btn:hover, .lvl-btn.active { background: #00f0ff; color: #000; }
.lvl-btn.cleared { border-color: #39ff14; color: #39ff14; }
.play-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #00f0ff, #ff007f);
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 900;
  border-radius: 6px;
  cursor: pointer;
}
.controls-hint { margin-top: 10px; font-size: 11px; color: #64748b; }`;

const csGame = `/**
 * Chrono Switch - Standalone Game Logic
 * 45 Phase Horizons with Dual-Polarity Gate Absorption
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const quotaVal = document.getElementById('quotaVal');
  const phaseVal = document.getElementById('phaseVal');
  const shiftBtn = document.getElementById('shiftBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');

  canvas.width = 440;
  canvas.height = 440;

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_cs_cleared') || '[]');
  let targetGates = 20;
  let passedGates = 0;
  let shields = 3;
  let isInvulnerable = false;
  let isPlaying = false;
  let currentPolarity = 0; // 0 = Cyan, 1 = Magenta
  let barriers = [];
  let stars = [];

  function loadLevel(lvl) {
    currentLevel = lvl;
    targetGates = 15 + lvl;
    passedGates = 0;
    shields = 3;
    isInvulnerable = false;
    currentPolarity = 0;
    barriers = [];
    nextBtn.style.display = 'none';

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    // Background stars
    stars = [];
    for (let i = 0; i < 40; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: 1 + Math.random() * 2,
        speed: 1 + Math.random() * 2
      });
    }

    updateHud();
    isPlaying = true;
  }

  function updateHud() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    quotaVal.textContent = passedGates + ' / ' + targetGates + ' GATES | SHIELDS: ' + shields;
    quotaVal.style.color = shields <= 1 ? '#ff1744' : theme.primary;
    phaseVal.textContent = currentPolarity === 0 ? 'CYAN POLARITY' : 'MAGENTA POLARITY';
    phaseVal.style.color = currentPolarity === 0 ? '#00f0ff' : '#ff007f';
  }

  function togglePolarity() {
    currentPolarity = currentPolarity === 0 ? 1 : 0;
    window.AudioEngine.playShift();
    updateHud();
  }

  function spawnBarrier() {
    const polarity = Math.random() < 0.5 ? 0 : 1;
    barriers.push({
      y: -20,
      polarity,
      passed: false
    });
  }

  let frameCount = 0;
  function update() {
    if (!isPlaying) return;

    frameCount++;
    // Human-speed fair spawn interval: ~60-75 frames (1.0-1.2s per gate)
    if (frameCount % 65 === 0 && passedGates + barriers.length < targetGates + 2) {
      spawnBarrier();
    }

    // Move stars
    stars.forEach(s => {
      s.y += s.speed;
      if (s.y > canvas.height) s.y = 0;
    });

    // Move barriers (fair human reaction speed: ~2.8px/f)
    const playerY = canvas.height - 70;
    const playerX = canvas.width / 2;

    for (let i = barriers.length - 1; i >= 0; i--) {
      const b = barriers[i];
      b.y += 2.8;

      // Collision check with player
      if (!b.passed && Math.abs(b.y - playerY) < 18) {
        b.passed = true;
        if (b.polarity === currentPolarity) {
          // Successful absorption
          passedGates++;
          window.AudioEngine.playAbsorb();
          updateHud();
          if (passedGates >= targetGates) {
            triggerVictory();
          }
        } else {
          // Mismatch collision!
          if (!isInvulnerable) {
            shields--;
            window.AudioEngine.playDamage();
            isInvulnerable = true;
            setTimeout(() => isInvulnerable = false, 1200);
            updateHud();

            if (shields <= 0) {
              isPlaying = false;
              alert('POLARITY COLLAPSE: Shields depleted in Sector ' + currentLevel);
              loadLevel(currentLevel);
              return;
            }
          }
        }
      }

      if (b.y > canvas.height + 40) {
        barriers.splice(i, 1);
      }
    }

    draw();
    requestAnimationFrame(update);
  }

  function triggerVictory() {
    isPlaying = false;
    window.AudioEngine.playVictory();
    nextBtn.style.display = 'inline-block';
    if (!clearedLevels.includes(currentLevel)) {
      clearedLevels.push(currentLevel);
      localStorage.setItem('next_cs_cleared', JSON.stringify(clearedLevels));
    }
  }

  function draw() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Stars
    ctx.fillStyle = theme.primary + '55';
    stars.forEach(s => {
      ctx.fillRect(s.x, s.y, s.s, s.s);
    });

    // Barriers
    barriers.forEach(b => {
      const color = b.polarity === 0 ? '#00f0ff' : '#ff007f';
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 10;
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;

      // Barrier with center aperture
      ctx.beginPath();
      ctx.moveTo(20, b.y);
      ctx.lineTo(canvas.width / 2 - 30, b.y);
      ctx.moveTo(canvas.width / 2 + 30, b.y);
      ctx.lineTo(canvas.width - 20, b.y);
      ctx.stroke();

      // Glowing gate core
      ctx.fillStyle = color;
      ctx.fillRect(canvas.width / 2 - 12, b.y - 4, 24, 8);
      ctx.restore();
    });

    // Player Quantum Core
    const px = canvas.width / 2;
    const py = canvas.height - 70;
    const pColor = currentPolarity === 0 ? '#00f0ff' : '#ff007f';

    ctx.save();
    if (!isInvulnerable || frameCount % 6 < 3) {
      ctx.shadowColor = pColor;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(px, py, 18, 0, Math.PI * 2);
      ctx.fillStyle = pColor;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Outer polarity ring
      ctx.beginPath();
      ctx.arc(px, py, 26, 0, Math.PI * 2);
      ctx.strokeStyle = pColor + '88';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.restore();
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      togglePolarity();
    }
  });

  shiftBtn.onclick = togglePolarity;
  canvas.onclick = togglePolarity;

  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    loadLevel(currentLevel);
    isPlaying = true;
    requestAnimationFrame(update);
  };

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '') + (clearedLevels.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        currentLevel = i;
        menuScreen.classList.add('hidden');
        loadLevel(currentLevel);
        requestAnimationFrame(update);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    loadLevel(currentLevel);
    requestAnimationFrame(update);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  buildLevelGrid();
  loadLevel(1);
  requestAnimationFrame(update);
})();`;

const csAudio = `/**
 * Web Audio API Engine for Chrono Switch
 */
(function(window) {
  'use strict';
  let ctx = null;
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }
  window.AudioEngine = {
    playShift() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.frequency.setValueAtTime(400, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, c.currentTime + 0.05);
        g.gain.setValueAtTime(0.12, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.05);
      } catch(e) {}
    },
    playAbsorb() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(659.25, c.currentTime);
        g.gain.setValueAtTime(0.12, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.08);
      } catch(e) {}
    },
    playDamage() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(120, c.currentTime);
        g.gain.setValueAtTime(0.2, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.2);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.08);
          g.gain.setValueAtTime(0.2, c.currentTime + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.08 + 0.3);
          osc.connect(g); g.connect(c.destination);
          osc.start(c.currentTime + i * 0.08);
          osc.stop(c.currentTime + i * 0.08 + 0.3);
        });
      } catch(e) {}
    }
  };
})(window);`;

writeFile(path.join(csDir, 'index.html'), csHtml);
writeFile(path.join(csDir, 'style.css'), csCss);
writeFile(path.join(csDir, 'audio.js'), csAudio);
writeFile(path.join(csDir, 'game.js'), csGame);
console.log('  ✓ Upgraded Game 22 [chrono-switch]');
