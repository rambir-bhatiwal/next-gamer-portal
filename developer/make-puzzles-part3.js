/**
 * Next Games/Game — Puzzle Category Part 3:
 * - hexa-tile-polarity (Game 28)
 * - cryptographic-word-cipher (Game 29)
 * - nanite-slide-puzzle (Game 30)
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
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
// GAME 28: HEXA-TILE POLARITY MATCH
// ----------------------------------------------------------------------------
console.log('Building Game 28: hexa-tile-polarity...');
const htpDir = path.join(gamesDir, 'hexa-tile-polarity');

const htpHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Hexa-Tile Polarity Match: Hex Matrix - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Hex Sector</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Target Polarity</div><div id="targetVal" class="hud-val">CYAN FLUX</div></div>
      <div class="hud-box"><div class="hud-lbl">Chain Bridge</div><div id="statusVal" class="hud-val">DISCONNECTED</div></div>
    </div>
    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>
    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <button id="resetBtn" class="action-btn">RESET POLARITIES</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>
    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">HEXA-TILE POLARITY MATCH</h1>
        <p id="menuDesc">Connect left energy emitters to right power receptors across a honeycomb matrix of 45 sectors. Click hexagonal nodes to cycle color polarities until an unbroken quantum chain is forged.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE HEX MATRIX</button>
        <div class="controls-hint">Controls: Click or Tap any Hex to cycle its color polarity | Connect Left to Right with matching color</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const htpCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
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
  max-width: 800px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  background: #060414;
}
.hud {
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  background: rgba(10, 15, 35, 0.85);
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
}
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8a9bb8; }
.hud-val { font-size: 16px; font-weight: bold; color: #00f0ff; text-shadow: 0 0 8px rgba(0,240,255,0.5); }
.canvas-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
  gap: 10px;
  padding: 10px 16px;
  background: rgba(10, 15, 35, 0.85);
  border-top: 1px solid rgba(0, 240, 255, 0.3);
}
.action-btn {
  flex: 1;
  padding: 10px;
  background: rgba(16, 25, 55, 0.8);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-family: inherit;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.action-btn:hover { background: #00f0ff22; box-shadow: 0 0 12px rgba(0,240,255,0.4); }
.next-btn { background: #ff007f; border-color: #ff007f; color: #fff; }
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.94);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 100;
}
.overlay.hidden { display: none; }
.card {
  background: #090e24;
  border: 1px solid #00f0ff;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  padding: 24px;
  max-width: 520px;
  width: 100%;
  text-align: center;
}
.card h1 { font-size: 26px; margin-bottom: 8px; color: #00f0ff; letter-spacing: 2px; }
.card p { font-size: 14px; color: #94a3b8; margin-bottom: 16px; line-height: 1.4; }
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 6px;
  margin-bottom: 20px;
  max-height: 180px;
  overflow-y: auto;
  padding: 4px;
}
.lvl-btn {
  background: #111a38;
  border: 1px solid #00f0ff44;
  color: #fff;
  border-radius: 4px;
  padding: 6px 0;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
}
.lvl-btn:hover, .lvl-btn.active { background: #00f0ff; color: #000; }
.lvl-btn.cleared { border-color: #39ff14; color: #39ff14; }
.play-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, #00f0ff, #ff007f);
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  border-radius: 6px;
  cursor: pointer;
}
.controls-hint { margin-top: 12px; font-size: 11px; color: #64748b; }`;

const htpAudio = `/**
 * Web Audio API Engine for Hexa-Tile Polarity Match
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
    playToggle(colorIdx) {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        const freqs = [440, 554.37, 659.25, 783.99];
        osc.frequency.setValueAtTime(freqs[colorIdx % freqs.length], c.currentTime);
        g.gain.setValueAtTime(0.12, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.08);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [440, 554.37, 659.25, 880].forEach((freq, i) => {
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.09);
          g.gain.setValueAtTime(0.2, c.currentTime + i * 0.09);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.09 + 0.35);
          osc.connect(g); g.connect(c.destination);
          osc.start(c.currentTime + i * 0.09);
          osc.stop(c.currentTime + i * 0.09 + 0.35);
        });
      } catch(e) {}
    }
  };
})(window);`;

const htpGame = `/**
 * Hexa-Tile Polarity Match - Standalone Game Logic
 * 45 Distinct Honeycomb Boards with Graph Bridge Pathfinding
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const targetVal = document.getElementById('targetVal');
  const statusVal = document.getElementById('statusVal');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  canvas.width = 460;
  canvas.height = 420;

  const HEX_RADIUS = 28;
  const COLS = 7;
  const ROWS = 6;
  const COLORS = ['#00f0ff', '#ff007f', '#39ff14'];
  const COLOR_NAMES = ['CYAN FLUX', 'MAGENTA SURGE', 'EMERALD PULSE'];

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_htp_cleared') || '[]');
  let targetColorIdx = 0;
  let grid = [];
  let isBridgeComplete = false;

  function hexCenter(col, row) {
    const x = 50 + col * (HEX_RADIUS * 1.6);
    const y = 50 + row * (HEX_RADIUS * 1.73) + (col % 2 === 1 ? HEX_RADIUS * 0.86 : 0);
    return { x, y };
  }

  function generateLevel(lvl) {
    isBridgeComplete = false;
    nextBtn.style.display = 'none';

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    targetColorIdx = (lvl - 1) % 3;
    targetVal.textContent = COLOR_NAMES[targetColorIdx];
    targetVal.style.color = COLORS[targetColorIdx];

    grid = [];
    for (let r = 0; r < ROWS; r++) {
      grid[r] = [];
      for (let c = 0; c < COLS; c++) {
        // Scramble colors based on level seed
        const initialColor = (r * 3 + c * 5 + lvl * 7) % 3;
        grid[r][c] = {
          col: c,
          row: r,
          colorIdx: initialColor,
          inBridge: false
        };
      }
    }

    // Ensure a solvable bridge path exists on left-to-right walk
    let r = Math.floor(ROWS / 2);
    for (let c = 0; c < COLS; c++) {
      // Set to another color initially so player must click to match target color
      grid[r][c].solutionColor = targetColorIdx;
      // Slight random variation in path row
      if (c < COLS - 1) {
        r = Math.max(0, Math.min(ROWS - 1, r + (((lvl * 3 + c) % 3) - 1)));
      }
    }

    checkBridge();
    draw();
  }

  function getNeighbors(c, r) {
    const isOdd = c % 2 === 1;
    const deltas = isOdd ?
      [[0, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]] :
      [[0, -1], [1, -1], [1, 0], [0, 1], [-1, 0], [-1, -1]];
    const res = [];
    deltas.forEach(([dc, dr]) => {
      const nc = c + dc;
      const nr = r + dr;
      if (nc >= 0 && nc < COLS && nr >= 0 && nr < ROWS) {
        res.push(grid[nr][nc]);
      }
    });
    return res;
  }

  function checkBridge() {
    // Reset inBridge
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        grid[r][c].inBridge = false;
      }
    }

    // BFS starting from col 0 matching targetColorIdx
    const q = [];
    for (let r = 0; r < ROWS; r++) {
      if (grid[r][0].colorIdx === targetColorIdx) {
        grid[r][0].inBridge = true;
        q.push(grid[r][0]);
      }
    }

    while (q.length > 0) {
      const curr = q.shift();
      const neighbors = getNeighbors(curr.col, curr.row);
      neighbors.forEach(n => {
        if (n.colorIdx === targetColorIdx && !n.inBridge) {
          n.inBridge = true;
          q.push(n);
        }
      });
    }

    // Check if any node in last column is inBridge
    isBridgeComplete = false;
    for (let r = 0; r < ROWS; r++) {
      if (grid[r][COLS - 1].inBridge) isBridgeComplete = true;
    }

    if (isBridgeComplete) {
      statusVal.textContent = 'BRIDGE COMPLETE!';
      statusVal.style.color = '#39ff14';
      nextBtn.style.display = 'inline-block';
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_htp_cleared', JSON.stringify(clearedLevels));
      }
      window.AudioEngine.playVictory();
    } else {
      statusVal.textContent = 'SECTOR ISOLATED';
      statusVal.style.color = '#ff1744';
      nextBtn.style.display = 'none';
    }
  }

  function drawHex(x, y, radius, fillColor, strokeColor, lineWidth = 2) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const hx = x + radius * Math.cos(angle);
      const hy = y + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  function draw() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Hex Tiles
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const { x, y } = hexCenter(c, r);
        const tile = grid[r][c];
        const hexColor = COLORS[tile.colorIdx];

        ctx.save();
        if (tile.inBridge) {
          ctx.shadowColor = hexColor;
          ctx.shadowBlur = 14;
        }

        drawHex(x, y, HEX_RADIUS - 2, tile.inBridge ? hexColor + 'bb' : hexColor + '44', tile.inBridge ? '#ffffff' : hexColor, tile.inBridge ? 3 : 1.5);
        ctx.restore();

        // Inner marker dot
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = tile.inBridge ? '#ffffff' : hexColor;
        ctx.fill();

        // Column indicators
        if (c === 0) {
          ctx.fillStyle = COLORS[targetColorIdx];
          ctx.font = 'bold 9px Rajdhani, sans-serif';
          ctx.fillText('IN', x - 26, y + 3);
        } else if (c === COLS - 1) {
          ctx.fillStyle = COLORS[targetColorIdx];
          ctx.font = 'bold 9px Rajdhani, sans-serif';
          ctx.fillText('OUT', x + 16, y + 3);
        }
      }
    }
  }

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const scale = canvas.width / rect.width;
    const mx = (e.clientX - rect.left) * scale;
    const my = (e.clientY - rect.top) * scale;

    let closest = null;
    let minDist = 99999;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const { x, y } = hexCenter(c, r);
        const dist = Math.hypot(mx - x, my - y);
        if (dist < HEX_RADIUS && dist < minDist) {
          minDist = dist;
          closest = grid[r][c];
        }
      }
    }

    if (closest) {
      closest.colorIdx = (closest.colorIdx + 1) % 3;
      window.AudioEngine.playToggle(closest.colorIdx);
      checkBridge();
      draw();
    }
  });

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '') + (clearedLevels.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        currentLevel = i;
        menuScreen.classList.add('hidden');
        generateLevel(currentLevel);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateLevel(currentLevel);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  resetBtn.onclick = () => generateLevel(currentLevel);
  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateLevel(currentLevel);
  };

  const htpIcon = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <polygon points="35,35 55,25 75,35 75,60 55,70 35,60" fill="#00e5ff" opacity="0.8"/>
  <circle cx="55" cy="47" r="6" fill="#ffffff"/>
</svg>\`;

  writeFile(path.join(htpDir, 'assets', 'icon.svg'), htpIcon);

  buildLevelGrid();
  generateLevel(1);
})();`;

writeFile(path.join(htpDir, 'index.html'), htpHtml);
writeFile(path.join(htpDir, 'style.css'), htpCss);
writeFile(path.join(htpDir, 'audio.js'), htpAudio);
writeFile(path.join(htpDir, 'game.js'), htpGame);
console.log('  ✓ Game 28 [hexa-tile-polarity] generated successfully.');

// ----------------------------------------------------------------------------
// GAME 29: CRYPTOGRAPHIC WORD CIPHER
// ----------------------------------------------------------------------------
console.log('Building Game 29: cryptographic-word-cipher...');
const cwcDir = path.join(gamesDir, 'cryptographic-word-cipher');

const cwcHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cryptographic Word Cipher: Decryptor - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Comm Sector</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Decrypted Progress</div><div id="progressVal" class="hud-val">0% DECRYPTED</div></div>
      <div class="hud-box"><div class="hud-lbl">Cipher Type</div><div id="typeVal" class="hud-val">MONOALPHABETIC</div></div>
    </div>

    <div class="terminal-body">
      <div class="terminal-header">&gt; INTERCEPTED TRANSMISSION:// DECRYPT_STREAM</div>
      <div id="cipherStream" class="cipher-stream"></div>
    </div>

    <div class="mapping-bar">
      <div class="selected-cipher" id="selectedCipherBox">SELECT A CIPHER LETTER ABOVE</div>
      <div class="plain-keys" id="alphabetKeyboard"></div>
    </div>

    <div class="controls-bar">
      <button id="hintBtn" class="action-btn">DECRYPT HINT (1 LETTER)</button>
      <button id="levelSelectBtn" class="action-btn">BRIEFS (1-45)</button>
      <button id="resetBtn" class="action-btn">CLEAR MAPPINGS</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT BRIEF &gt;</button>
    </div>

    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">CRYPTOGRAPHIC WORD CIPHER</h1>
        <p id="menuDesc">Decode intercepted cyber-intelligence communiqués across 45 covert security sectors by substituting scrambled cipher symbols with alphabetical letters.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">START CRYPTO DECRYPTION</button>
        <div class="controls-hint">Controls: Click an encrypted letter, then tap the decoded letter | Hints available</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const cwcCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body {
  background: #04020f;
  color: #e0f7fa;
  font-family: 'Rajdhani', monospace, sans-serif;
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
  max-width: 680px;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  background: #050d0a;
}
.hud {
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  background: rgba(4, 18, 12, 0.9);
  border-bottom: 1px solid rgba(0, 230, 118, 0.3);
}
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #8a9bb8; }
.hud-val { font-size: 15px; font-weight: bold; color: #00e676; text-shadow: 0 0 8px rgba(0,230,118,0.5); }
.terminal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #020b06;
  overflow-y: auto;
}
.terminal-header {
  font-size: 12px;
  color: #00e676;
  margin-bottom: 14px;
  letter-spacing: 2px;
  opacity: 0.8;
}
.cipher-stream {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 8px;
  align-items: flex-start;
  line-height: 1.6;
}
.word-group {
  display: flex;
  gap: 3px;
  margin-right: 8px;
}
.letter-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24px;
  cursor: pointer;
}
.plain-slot {
  width: 24px;
  height: 28px;
  background: #091c10;
  border-bottom: 2px solid #00e676;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 900;
  text-shadow: 0 0 6px #00e676;
}
.plain-slot.selected {
  background: #00e67644;
  border-color: #ffd600;
}
.cipher-char {
  font-size: 12px;
  color: #76ff03;
  margin-top: 2px;
  font-family: monospace;
}
.mapping-bar {
  padding: 10px 14px;
  background: #04140b;
  border-top: 1px solid rgba(0, 230, 118, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.selected-cipher {
  font-size: 12px;
  color: #ffd600;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}
.plain-keys {
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 4px;
}
.key-btn {
  padding: 8px 0;
  background: #081f12;
  border: 1px solid #00e67644;
  color: #00e676;
  font-weight: 900;
  font-size: 13px;
  border-radius: 4px;
  cursor: pointer;
}
.key-btn:hover { background: #00e676; color: #000; box-shadow: 0 0 8px #00e676; }
.controls-bar {
  display: flex;
  gap: 8px;
  padding: 10px 14px;
  background: #020d07;
  border-top: 1px solid rgba(0, 230, 118, 0.2);
}
.action-btn {
  flex: 1;
  padding: 10px 4px;
  background: #092415;
  border: 1px solid #00e67655;
  color: #00e676;
  font-family: inherit;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}
.next-btn { background: #ff007f; border-color: #ff007f; color: #fff; }
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(2, 11, 6, 0.94);
  backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 100;
}
.overlay.hidden { display: none; }
.card {
  background: #06170d;
  border: 1px solid #00e676;
  box-shadow: 0 0 30px rgba(0, 230, 118, 0.3);
  border-radius: 12px;
  padding: 20px;
  max-width: 480px;
  width: 100%;
  text-align: center;
}
.card h1 { font-size: 24px; margin-bottom: 6px; color: #00e676; letter-spacing: 2px; }
.card p { font-size: 13px; color: #a7f3d0; margin-bottom: 14px; line-height: 1.4; }
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
  background: #0b2616;
  border: 1px solid #00e67644;
  color: #fff;
  border-radius: 4px;
  padding: 5px 0;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
}
.lvl-btn:hover, .lvl-btn.active { background: #00e676; color: #000; }
.lvl-btn.cleared { border-color: #ffd600; color: #ffd600; }
.play-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(90deg, #00e676, #00b0ff);
  border: none;
  color: #000;
  font-size: 15px;
  font-weight: 900;
  border-radius: 6px;
  cursor: pointer;
}
.controls-hint { margin-top: 10px; font-size: 11px; color: #6ee7b7; }`;

const cwcAudio = `/**
 * Web Audio API Engine for Cryptographic Word Cipher
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
    playKey() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(700, c.currentTime);
        g.gain.setValueAtTime(0.08, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.04);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.04);
      } catch(e) {}
    },
    playHint() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, c.currentTime);
        osc.frequency.setValueAtTime(659.25, c.currentTime + 0.08);
        g.gain.setValueAtTime(0.15, c.currentTime);
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

const cwcGame = `/**
 * Cryptographic Word Cipher - Standalone Game Logic
 * 45 Intelligence Quotes with Real-Time Letter Substitution
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const themeVal = document.getElementById('themeVal');
  const progressVal = document.getElementById('progressVal');
  const cipherStream = document.getElementById('cipherStream');
  const selectedCipherBox = document.getElementById('selectedCipherBox');
  const alphabetKeyboard = document.getElementById('alphabetKeyboard');
  const hintBtn = document.getElementById('hintBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_cwc_cleared') || '[]');
  let selectedCipherLetter = null;
  let cipherMapping = {}; // cipherChar -> plainChar
  let solutionMapping = {}; // cipherChar -> correct plainChar

  // 45 Authentic Cyberpunk & Computing Intelligence Quotes
  const QUOTES = [
    "CYBERSPACE IS A CONSENSUAL HALLUCINATION EXPERIENCED DAILY BY BILLIONS",
    "THE FUTURE IS ALREADY HERE IT IS JUST NOT EVENLY DISTRIBUTED",
    "ANY SUFFICIENTLY ADVANCED TECHNOLOGY IS INDISTINGUISHABLE FROM MAGIC",
    "DATA IS THE NEW CURRENCY OF THE DIGITAL INTERSTELLAR REALM",
    "WE SHAPE OUR TOOLS AND THEREAFTER OUR TOOLS SHAPE US",
    "NEURAL NETWORKS REWRITE THE ARCHITECTURE OF CONSCIOUSNESS",
    "THE CIPHER HOLDS SECRETS THAT THE SILICON MATRIX CANNOT ERASE",
    "QUANTUM LOGIC TRANSCENDS THE BINARY LIMITATIONS OF REALITY",
    "DEFEND THE CORE MAINFRAME AGAINST EXTERNAL INTRUSION PROTOCOLS",
    "INFORMATION WANTS TO BE FREE BUT CODE REQUIRES DISCIPLINE",
    "THE LIGHT THAT BURNS TWICE AS BRIGHT BURNS HALF AS LONG",
    "ACROSS THE FIBER HORIZON LIES THE UNKNOWN DIGITAL WILDERNESS",
    "NEON LIGHTS REFLECT ACROSS WET RAIN SLICKED METROPOLITAN STEEL",
    "REVOLUTION BEGINS WHEN THE CIRCUIT BREAKS FROM THE SOURCE",
    "EVERY ALGORITHM CARRIES THE ECHO OF ITS HUMAN CREATOR"
  ];

  let currentQuote = "";
  let encryptedText = "";

  function generateCipher(lvl) {
    nextBtn.style.display = 'none';
    selectedCipherLetter = null;
    cipherMapping = {};
    solutionMapping = {};

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    currentQuote = QUOTES[(lvl - 1) % QUOTES.length].toUpperCase();

    // Create a scrambled monoalphabetic substitution cipher
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const shuffled = [...letters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = (i * 7 + lvl * 13) % (i + 1);
      const temp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = temp;
    }

    letters.forEach((plain, idx) => {
      const cipher = shuffled[idx];
      solutionMapping[cipher] = plain;
    });

    // Invert mapping: plain to cipher
    const plainToCipher = {};
    for (let c in solutionMapping) plainToCipher[solutionMapping[c]] = c;

    encryptedText = "";
    for (let ch of currentQuote) {
      if (/[A-Z]/.test(ch)) encryptedText += plainToCipher[ch];
      else encryptedText += ch;
    }

    selectedCipherBox.textContent = 'SELECT A CIPHER LETTER ABOVE';
    renderStream();
    updateProgress();
  }

  function renderStream() {
    cipherStream.innerHTML = '';
    const words = encryptedText.split(' ');

    words.forEach(word => {
      const wGroup = document.createElement('div');
      wGroup.className = 'word-group';

      for (let ch of word) {
        if (/[A-Z]/.test(ch)) {
          const lBox = document.createElement('div');
          lBox.className = 'letter-box';

          const slot = document.createElement('div');
          slot.className = 'plain-slot';
          if (cipherMapping[ch]) slot.textContent = cipherMapping[ch];
          if (selectedCipherLetter === ch) slot.classList.add('selected');

          const cipherChar = document.createElement('div');
          cipherChar.className = 'cipher-char';
          cipherChar.textContent = ch;

          lBox.onclick = () => {
            selectedCipherLetter = ch;
            selectedCipherBox.textContent = 'MAPPING CIPHER: "' + ch + '" -> CHOOSE DECODED LETTER';
            renderStream();
          };

          lBox.appendChild(slot);
          lBox.appendChild(cipherChar);
          wGroup.appendChild(lBox);
        } else {
          // Punctuation
          const pBox = document.createElement('div');
          pBox.className = 'plain-slot';
          pBox.textContent = ch;
          wGroup.appendChild(pBox);
        }
      }

      cipherStream.appendChild(wGroup);
    });
  }

  function updateProgress() {
    const lettersInQuote = [...new Set(encryptedText.replace(/[^A-Z]/g, ''))];
    let correct = 0;
    lettersInQuote.forEach(c => {
      if (cipherMapping[c] === solutionMapping[c]) correct++;
    });

    const pct = Math.floor((correct / lettersInQuote.length) * 100);
    progressVal.textContent = pct + '% DECRYPTED';

    if (pct === 100) {
      window.AudioEngine.playVictory();
      nextBtn.style.display = 'inline-block';
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_cwc_cleared', JSON.stringify(clearedLevels));
      }
    }
  }

  function mapLetter(plainChar) {
    if (!selectedCipherLetter) return;
    cipherMapping[selectedCipherLetter] = plainChar;
    window.AudioEngine.playKey();
    renderStream();
    updateProgress();
  }

  // Keyboard mapping buttons
  alphabetKeyboard.innerHTML = '';
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(ch => {
    const btn = document.createElement('button');
    btn.className = 'key-btn';
    btn.textContent = ch;
    btn.onclick = () => mapLetter(ch);
    alphabetKeyboard.appendChild(btn);
  });

  window.addEventListener('keydown', (e) => {
    const ch = e.key.toUpperCase();
    if (/^[A-Z]$/.test(ch)) mapLetter(ch);
  });

  hintBtn.onclick = () => {
    // Reveal 1 unmapped letter
    const lettersInQuote = [...new Set(encryptedText.replace(/[^A-Z]/g, ''))];
    const unmapped = lettersInQuote.filter(c => cipherMapping[c] !== solutionMapping[c]);
    if (unmapped.length > 0) {
      const chosen = unmapped[0];
      cipherMapping[chosen] = solutionMapping[chosen];
      window.AudioEngine.playHint();
      renderStream();
      updateProgress();
    }
  };

  resetBtn.onclick = () => {
    cipherMapping = {};
    renderStream();
    updateProgress();
  };

  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateCipher(currentLevel);
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
        generateCipher(currentLevel);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateCipher(currentLevel);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  const cwcIcon = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="20" y="25" width="60" height="50" rx="6" fill="#051208" stroke="#00e676" stroke-width="3"/>
  <text x="50" y="48" fill="#ffd600" font-size="14" font-weight="bold" text-anchor="middle">QXZ</text>
  <text x="50" y="65" fill="#00e676" font-size="14" font-weight="bold" text-anchor="middle">THE</text>
</svg>\`;

  writeFile(path.join(cwcDir, 'assets', 'icon.svg'), cwcIcon);

  buildLevelGrid();
  generateCipher(1);
})();`;

writeFile(path.join(cwcDir, 'index.html'), cwcHtml);
writeFile(path.join(cwcDir, 'style.css'), cwcCss);
writeFile(path.join(cwcDir, 'audio.js'), cwcAudio);
writeFile(path.join(cwcDir, 'game.js'), cwcGame);
console.log('  ✓ Game 29 [cryptographic-word-cipher] generated successfully.');

// ----------------------------------------------------------------------------
// GAME 30: NANITE SLIDE PUZZLE
// ----------------------------------------------------------------------------
console.log('Building Game 30: nanite-slide-puzzle...');
const nspDir = path.join(gamesDir, 'nanite-slide-puzzle');

const nspHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Nanite Slide Puzzle: Core Reassembly - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Reactor Core</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Core Status</div><div id="statusVal" class="hud-val">UNSTABLE (4x4)</div></div>
      <div class="hud-box"><div class="hud-lbl">Slide Moves</div><div id="movesVal" class="hud-val">0 MOVES</div></div>
    </div>

    <div class="board-wrap">
      <div id="slideGrid" class="slide-grid"></div>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">CORES (1-45)</button>
      <button id="resetBtn" class="action-btn">SHUFFLE CORE</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT CORE &gt;</button>
    </div>

    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">NANITE SLIDE PUZZLE</h1>
        <p id="menuDesc">Reassemble scrambled quantum energy cores across 45 reactor stages. Slide numbered nanite tiles into numerical order using the empty slot.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE CORE REASSEMBLY</button>
        <div class="controls-hint">Controls: Click or Tap any tile adjacent to the empty slot | Arrow Keys also supported</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const nspCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
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
  max-width: 540px;
  max-height: 840px;
  display: flex;
  flex-direction: column;
  background: #060414;
}
.hud {
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  background: rgba(10, 15, 35, 0.85);
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
}
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8a9bb8; }
.hud-val { font-size: 16px; font-weight: bold; color: #00f0ff; text-shadow: 0 0 8px rgba(0,240,255,0.5); }
.board-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  overflow: hidden;
}
.slide-grid {
  display: grid;
  gap: 6px;
  background: #111a38;
  padding: 10px;
  border: 2px solid #00f0ff;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0, 240, 255, 0.25);
}
.slide-tile {
  width: 70px;
  height: 70px;
  background: #101b3b;
  border: 1px solid #00f0ff77;
  color: #00f0ff;
  font-size: 26px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: inset 0 0 10px rgba(0, 240, 255, 0.2);
  transition: all 0.12s;
}
.slide-tile:hover {
  background: #00f0ff;
  color: #000;
  box-shadow: 0 0 15px #00f0ff;
}
.slide-tile.empty {
  background: transparent;
  border: 1px dashed #ff007f55;
  box-shadow: none;
  cursor: default;
}
.controls-bar {
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(10, 15, 35, 0.85);
  border-top: 1px solid rgba(0, 240, 255, 0.3);
}
.action-btn {
  flex: 1;
  padding: 10px;
  background: rgba(16, 25, 55, 0.8);
  border: 1px solid #00f0ff;
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
  padding: 20px;
  z-index: 100;
}
.overlay.hidden { display: none; }
.card {
  background: #090e24;
  border: 1px solid #00f0ff;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  width: 100%;
  text-align: center;
}
.card h1 { font-size: 26px; margin-bottom: 8px; color: #00f0ff; letter-spacing: 2px; }
.card p { font-size: 14px; color: #94a3b8; margin-bottom: 16px; line-height: 1.4; }
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 6px;
  margin-bottom: 20px;
  max-height: 180px;
  overflow-y: auto;
  padding: 4px;
}
.lvl-btn {
  background: #111a38;
  border: 1px solid #00f0ff44;
  color: #fff;
  border-radius: 4px;
  padding: 6px 0;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
}
.lvl-btn:hover, .lvl-btn.active { background: #00f0ff; color: #000; }
.lvl-btn.cleared { border-color: #39ff14; color: #39ff14; }
.play-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, #00f0ff, #ff007f);
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  border-radius: 6px;
  cursor: pointer;
}
.controls-hint { margin-top: 12px; font-size: 11px; color: #64748b; }`;

const nspAudio = `/**
 * Web Audio API Engine for Nanite Slide Puzzle
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
    playSlide() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(360, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(540, c.currentTime + 0.05);
        g.gain.setValueAtTime(0.12, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.05);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.09);
          g.gain.setValueAtTime(0.2, c.currentTime + i * 0.09);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.09 + 0.35);
          osc.connect(g); g.connect(c.destination);
          osc.start(c.currentTime + i * 0.09);
          osc.stop(c.currentTime + i * 0.09 + 0.35);
        });
      } catch(e) {}
    }
  };
})(window);`;

const nspGame = `/**
 * Nanite Slide Puzzle - Standalone Game Logic
 * 45 Sliding Tile Core Configurations with Solvable Permutations
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const themeVal = document.getElementById('themeVal');
  const statusVal = document.getElementById('statusVal');
  const movesVal = document.getElementById('movesVal');
  const slideGrid = document.getElementById('slideGrid');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_nsp_cleared') || '[]');
  let size = 4; // 3x3 for lvl 1-15, 4x4 for lvl 16-45
  let board = [];
  let moves = 0;

  function generateLevel(lvl) {
    moves = 0;
    nextBtn.style.display = 'none';
    statusVal.textContent = 'UNSTABLE (' + size + 'x' + size + ')';
    statusVal.style.color = '#ff1744';

    size = lvl <= 12 ? 3 : 4;

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    // Start with solved state
    board = [];
    const total = size * size;
    for (let i = 1; i < total; i++) board.push(i);
    board.push(0); // 0 = empty slot

    // Perform N valid random sliding moves from solved state to guarantee 100% solvability
    const shuffleSteps = 20 + lvl * 4;
    let emptyIdx = total - 1;

    for (let s = 0; s < shuffleSteps; s++) {
      const er = Math.floor(emptyIdx / size);
      const ec = emptyIdx % size;
      const neighbors = [];
      if (er > 0) neighbors.push(emptyIdx - size);
      if (er < size - 1) neighbors.push(emptyIdx + size);
      if (ec > 0) neighbors.push(emptyIdx - 1);
      if (ec < size - 1) neighbors.push(emptyIdx + 1);

      const targetIdx = neighbors[(s * 7 + lvl * 11) % neighbors.length];
      board[emptyIdx] = board[targetIdx];
      board[targetIdx] = 0;
      emptyIdx = targetIdx;
    }

    renderGrid();
    updateHud();
  }

  function renderGrid() {
    slideGrid.innerHTML = '';
    slideGrid.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    slideGrid.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';

    const theme = THEMES[(currentLevel - 1) % THEMES.length];

    board.forEach((val, idx) => {
      const tile = document.createElement('div');
      tile.className = 'slide-tile';
      if (val === 0) {
        tile.classList.add('empty');
      } else {
        tile.textContent = val;
        tile.style.borderColor = theme.primary + '88';
        tile.style.color = theme.primary;
        tile.onclick = () => trySlide(idx);
      }
      slideGrid.appendChild(tile);
    });
  }

  function trySlide(idx) {
    const emptyIdx = board.indexOf(0);
    const tr = Math.floor(idx / size);
    const tc = idx % size;
    const er = Math.floor(emptyIdx / size);
    const ec = emptyIdx % size;

    const isAdjacent = (Math.abs(tr - er) === 1 && tc === ec) || (Math.abs(tc - ec) === 1 && tr === er);
    if (!isAdjacent) return;

    board[emptyIdx] = board[idx];
    board[idx] = 0;
    moves++;
    window.AudioEngine.playSlide();
    renderGrid();
    updateHud();
    checkVictory();
  }

  function updateHud() {
    movesVal.textContent = moves + ' MOVES';
  }

  function checkVictory() {
    let isSolved = true;
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== i + 1) isSolved = false;
    }

    if (isSolved && board[board.length - 1] === 0) {
      statusVal.textContent = 'CORE STABILIZED!';
      statusVal.style.color = '#39ff14';
      nextBtn.style.display = 'inline-block';
      window.AudioEngine.playVictory();
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_nsp_cleared', JSON.stringify(clearedLevels));
      }
    }
  }

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '') + (clearedLevels.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        currentLevel = i;
        menuScreen.classList.add('hidden');
        generateLevel(currentLevel);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateLevel(currentLevel);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  resetBtn.onclick = () => generateLevel(currentLevel);
  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateLevel(currentLevel);
  };

  const nspIcon = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="20" y="20" width="26" height="26" rx="4" fill="#180e29" stroke="#ea80fc" stroke-width="2"/>
  <text x="33" y="38" fill="#ea80fc" font-size="14" font-weight="bold" text-anchor="middle">1</text>
  <rect x="52" y="20" width="26" height="26" rx="4" fill="#180e29" stroke="#00f0ff" stroke-width="2"/>
  <text x="65" y="38" fill="#00f0ff" font-size="14" font-weight="bold" text-anchor="middle">2</text>
  <rect x="20" y="52" width="26" height="26" rx="4" fill="#180e29" stroke="#00f0ff" stroke-width="2"/>
  <text x="33" y="70" fill="#00f0ff" font-size="14" font-weight="bold" text-anchor="middle">3</text>
</svg>\`;

  writeFile(path.join(nspDir, 'assets', 'icon.svg'), nspIcon);

  buildLevelGrid();
  generateLevel(1);
})();`;

writeFile(path.join(nspDir, 'index.html'), nspHtml);
writeFile(path.join(nspDir, 'style.css'), nspCss);
writeFile(path.join(nspDir, 'audio.js'), nspAudio);
writeFile(path.join(nspDir, 'game.js'), nspGame);
console.log('  ✓ Game 30 [nanite-slide-puzzle] generated successfully.');
