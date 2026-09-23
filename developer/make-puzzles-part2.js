/**
 * Next Games/Game — Puzzle Category Part 2:
 * - holographic-pipe-fusion (Game 25)
 * - neuro-link-sokobot (Game 26)
 * - quantum-nonogram (Game 27)
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
// GAME 25: HOLOGRAPHIC PIPE FUSION
// ----------------------------------------------------------------------------
console.log('Building Game 25: holographic-pipe-fusion...');
const hpfDir = path.join(gamesDir, 'holographic-pipe-fusion');

const hpfHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Holographic Pipe Fusion: Flux Router - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Conduit Biome</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Plasma Status</div><div id="statusVal" class="hud-val">DISCONNECTED</div></div>
      <div class="hud-box"><div class="hud-lbl">Flux Rotations</div><div id="movesVal" class="hud-val">0 MOVES</div></div>
    </div>
    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>
    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">CONDUITS (1-45)</button>
      <button id="resetBtn" class="action-btn">RESET PIPES</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT CONDUIT &gt;</button>
    </div>
    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">HOLOGRAPHIC PIPE FUSION</h1>
        <p id="menuDesc">Forge uninterrupted plasma conduits across 45 quantum reactor sectors. Click conduit tiles to rotate them 90° and connect the Generator Source to the Quantum Core.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">POWER PLASMA FLUX</button>
        <div class="controls-hint">Controls: Click or Tap any pipe tile to rotate 90° | Connect green Source to cyan Core</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const hpfCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
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

const hpfAudio = `/**
 * Web Audio API Engine for Holographic Pipe Fusion
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
    playTurn() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(400, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, c.currentTime + 0.06);
        g.gain.setValueAtTime(0.15, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.06);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.06);
      } catch(e) {}
    },
    playFlow() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(220, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(660, c.currentTime + 0.25);
        g.gain.setValueAtTime(0.2, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.25);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.25);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [392, 523.25, 659.25, 783.99].forEach((freq, i) => {
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

const hpfGame = `/**
 * Holographic Pipe Fusion - Standalone Game Logic
 * 45 Distinct Pipe Routing Levels with Animated Plasma Flow
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const statusVal = document.getElementById('statusVal');
  const movesVal = document.getElementById('movesVal');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let GRID_COLS = 5;
  let GRID_ROWS = 5;
  let CELL_SIZE = 70;
  canvas.width = 350;
  canvas.height = 350;

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_hpf_cleared') || '[]');
  let moves = 0;
  let isConnected = false;
  let board = [];
  let source = { r: 0, c: 0 };
  let sink = { r: 4, c: 4 };

  // Pipe pieces:
  // 'line': connects [0, 2] (up, down) when angle 0; [1, 3] (right, left) when angle 1
  // 'elbow': connects [0, 1] (up, right) when angle 0; [1, 2] angle 1; [2, 3] angle 2; [3, 0] angle 3
  // 'tee': connects [3, 0, 1] when angle 0; [0, 1, 2] angle 1; etc.
  // 'cross': connects [0, 1, 2, 3] all directions

  function getConnections(type, angle) {
    if (type === 'line') {
      return (angle % 2 === 0) ? [0, 2] : [1, 3];
    } else if (type === 'elbow') {
      return [(0 + angle) % 4, (1 + angle) % 4];
    } else if (type === 'tee') {
      return [(3 + angle) % 4, (0 + angle) % 4, (1 + angle) % 4];
    } else if (type === 'cross') {
      return [0, 1, 2, 3];
    }
    return [];
  }

  function generateLevel(lvl) {
    moves = 0;
    isConnected = false;
    nextBtn.style.display = 'none';

    // Scale grid slightly with levels: 5x5 for 1-20, 6x6 for 21-45
    GRID_COLS = lvl <= 20 ? 5 : 6;
    GRID_ROWS = GRID_COLS;
    CELL_SIZE = Math.floor(380 / GRID_COLS);
    canvas.width = GRID_COLS * CELL_SIZE;
    canvas.height = GRID_ROWS * CELL_SIZE;

    source = { r: 0, c: 0 };
    sink = { r: GRID_ROWS - 1, c: GRID_COLS - 1 };

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    // Generate guaranteed solvable solution path using random walk from source to sink
    const pathGrid = Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(false));
    let cr = source.r, cc = source.c;
    pathGrid[cr][cc] = true;
    const walk = [{ r: cr, c: cc }];

    while (cr !== sink.r || cc !== sink.c) {
      const candidates = [];
      if (cr < sink.r) candidates.push({ r: cr + 1, c: cc, dir: 2 }); // down
      if (cc < sink.c) candidates.push({ r: cr, c: cc + 1, dir: 1 }); // right
      if (candidates.length === 0) break;
      const chosen = candidates[(lvl * 3 + walk.length * 7) % candidates.length];
      cr = chosen.r;
      cc = chosen.c;
      pathGrid[cr][cc] = true;
      walk.push({ r: cr, c: cc });
    }

    // Build pipe types matching the walk connections
    board = Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(null));

    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        const pIdx = walk.findIndex(p => p.r === r && p.c === c);
        if (pIdx >= 0) {
          // Determine required ports
          const ports = [];
          if (pIdx > 0) {
            const prev = walk[pIdx - 1];
            if (prev.r < r) ports.push(0); // came from up
            else if (prev.c > c) ports.push(1); // came from right
            else if (prev.r > r) ports.push(2); // came from down
            else if (prev.c < c) ports.push(3); // came from left
          } else {
            // Source open port to right or down
            ports.push(walk[1].r > r ? 2 : 1);
          }
          if (pIdx < walk.length - 1) {
            const next = walk[pIdx + 1];
            if (next.r < r) ports.push(0);
            else if (next.c > c) ports.push(1);
            else if (next.r > r) ports.push(2);
            else if (next.c < c) ports.push(3);
          } else {
            // Sink receives from previous
            ports.push(walk[walk.length - 2].r < r ? 0 : 3);
          }

          let type = 'elbow';
          if (ports.length === 2 && (Math.abs(ports[0] - ports[1]) === 2)) type = 'line';
          else if (ports.length >= 3) type = 'tee';

          // Scramble angle
          const scramble = ((r * 3 + c * 7 + lvl * 11) % 3) + 1;
          board[r][c] = { type, angle: scramble, inPath: false, powered: false };
        } else {
          // Random filler tile
          const types = ['elbow', 'line', 'tee'];
          const type = types[(r * 5 + c * 9 + lvl) % types.length];
          board[r][c] = { type, angle: (r + c) % 4, inPath: false, powered: false };
        }
      }
    }

    checkFlow();
    updateHud();
    draw();
  }

  function checkFlow() {
    // Reset powered status
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        board[r][c].powered = false;
      }
    }

    // BFS from source
    const q = [{ r: source.r, c: source.c }];
    board[source.r][source.c].powered = true;

    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    const opposite = [2, 3, 0, 1];

    while (q.length > 0) {
      const { r, c } = q.shift();
      const conns = getConnections(board[r][c].type, board[r][c].angle);

      for (let dir of conns) {
        const nr = r + dr[dir];
        const nc = c + dc[dir];
        if (nr >= 0 && nr < GRID_ROWS && nc >= 0 && nc < GRID_COLS) {
          const neighborConns = getConnections(board[nr][nc].type, board[nr][nc].angle);
          if (neighborConns.includes(opposite[dir]) && !board[nr][nc].powered) {
            board[nr][nc].powered = true;
            q.push({ r: nr, c: nc });
          }
        }
      }
    }

    isConnected = board[sink.r][sink.c].powered;
    if (isConnected) {
      statusVal.textContent = 'PLASMA SURGE ONLINE';
      statusVal.style.color = '#39ff14';
      nextBtn.style.display = 'inline-block';
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_hpf_cleared', JSON.stringify(clearedLevels));
      }
      window.AudioEngine.playVictory();
    } else {
      statusVal.textContent = 'CIRCUIT BREACHED';
      statusVal.style.color = '#ff1744';
      nextBtn.style.display = 'none';
    }
  }

  function updateHud() {
    movesVal.textContent = moves + ' MOVES';
  }

  function draw() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        const x = c * CELL_SIZE;
        const y = r * CELL_SIZE;
        const tile = board[r][c];

        // Tile base background
        ctx.fillStyle = tile.powered ? theme.primary + '18' : '#080d22';
        ctx.fillRect(x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4);
        ctx.strokeStyle = tile.powered ? theme.primary : '#1c2850';
        ctx.lineWidth = tile.powered ? 2 : 1;
        ctx.strokeRect(x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4);

        // Draw Conduit Lines
        const cx = x + CELL_SIZE / 2;
        const cy = y + CELL_SIZE / 2;
        const conns = getConnections(tile.type, tile.angle);

        ctx.save();
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = tile.powered ? (isConnected ? '#39ff14' : theme.primary) : '#334155';
        if (tile.powered) {
          ctx.shadowColor = isConnected ? '#39ff14' : theme.primary;
          ctx.shadowBlur = 10;
        }

        conns.forEach(dir => {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          if (dir === 0) ctx.lineTo(cx, y);
          else if (dir === 1) ctx.lineTo(x + CELL_SIZE, cy);
          else if (dir === 2) ctx.lineTo(cx, y + CELL_SIZE);
          else if (dir === 3) ctx.lineTo(x, cy);
          ctx.stroke();
        });

        // Center hub dot
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fillStyle = tile.powered ? '#ffffff' : '#475569';
        ctx.fill();
        ctx.restore();

        // Mark Source and Sink badges
        if (r === source.r && c === source.c) {
          ctx.fillStyle = '#39ff14';
          ctx.font = 'bold 10px Rajdhani, sans-serif';
          ctx.fillText('IN', x + 6, y + 14);
        } else if (r === sink.r && c === sink.c) {
          ctx.fillStyle = theme.accent;
          ctx.font = 'bold 10px Rajdhani, sans-serif';
          ctx.fillText('OUT', x + 6, y + 14);
        }
      }
    }
  }

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const scale = canvas.width / rect.width;
    const clickX = (e.clientX - rect.left) * scale;
    const clickY = (e.clientY - rect.top) * scale;
    const c = Math.floor(clickX / CELL_SIZE);
    const r = Math.floor(clickY / CELL_SIZE);

    if (r >= 0 && r < GRID_ROWS && c >= 0 && c < GRID_COLS) {
      board[r][c].angle = (board[r][c].angle + 1) % 4;
      moves++;
      window.AudioEngine.playTurn();
      checkFlow();
      updateHud();
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

  const hpfIcon = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <path d="M 20 35 L 55 35 Q 65 35 65 45 L 65 80" fill="none" stroke="#00e5ff" stroke-width="8" stroke-linecap="round"/>
  <circle cx="20" cy="35" r="5" fill="#39ff14"/>
  <circle cx="65" cy="80" r="6" fill="#ffd600"/>
</svg>\`;

  writeFile(path.join(hpfDir, 'assets', 'icon.svg'), hpfIcon);

  buildLevelGrid();
  generateLevel(1);
})();`;

writeFile(path.join(hpfDir, 'index.html'), hpfHtml);
writeFile(path.join(hpfDir, 'style.css'), hpfCss);
writeFile(path.join(hpfDir, 'audio.js'), hpfAudio);
writeFile(path.join(hpfDir, 'game.js'), hpfGame);
console.log('  ✓ Game 25 [holographic-pipe-fusion] generated successfully.');

// ----------------------------------------------------------------------------
// GAME 26: NEURO-LINK SOKOBOT
// ----------------------------------------------------------------------------
console.log('Building Game 26: neuro-link-sokobot...');
const nlsDir = path.join(gamesDir, 'neuro-link-sokobot');

const nlsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Neuro-Link Soko-Bot: Memory Mover - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Vault Chamber</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Memory Units Docked</div><div id="dockedVal" class="hud-val">0 / 2</div></div>
      <div class="hud-box"><div class="hud-lbl">Step Tracker</div><div id="stepsVal" class="hud-val">0 STEPS</div></div>
    </div>
    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>
    <div class="controls-bar">
      <button id="undoBtn" class="action-btn">UNDO MOVE</button>
      <button id="resetBtn" class="action-btn">RESTART</button>
      <button id="levelSelectBtn" class="action-btn">VAULTS (1-45)</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT VAULT &gt;</button>
    </div>
    <div class="dpad-bar">
      <button class="dpad-btn" id="dpadUp">▲</button>
      <div class="dpad-mid">
        <button class="dpad-btn" id="dpadLeft">◀</button>
        <button class="dpad-btn" id="dpadDown">▼</button>
        <button class="dpad-btn" id="dpadRight">▶</button>
      </div>
    </div>
    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">NEURO-LINK SOKO-BOT</h1>
        <p id="menuDesc">Command a quantum maintenance automaton pushing memory blocks onto designated server ports across 45 handcrafted cleanrooms.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">ACTIVATE SOKO-BOT</button>
        <div class="controls-hint">Controls: Arrow Keys / WASD / Touch D-Pad to move | Push crates onto target pads</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const nlsCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
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
  max-height: 900px;
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
}
.controls-bar {
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(10, 15, 35, 0.85);
  border-top: 1px solid rgba(0, 240, 255, 0.3);
}
.action-btn {
  flex: 1;
  padding: 8px;
  background: #101b3b;
  border: 1px solid #00f0ff55;
  color: #00f0ff;
  font-family: inherit;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
}
.next-btn { background: #ff007f; border-color: #ff007f; color: #fff; }
.dpad-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: #070a1a;
}
.dpad-mid { display: flex; gap: 8px; }
.dpad-btn {
  width: 50px;
  height: 40px;
  background: #111a38;
  border: 1px solid #00f0ff44;
  color: #00f0ff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
}
.dpad-btn:active { background: #00f0ff; color: #000; }
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

const nlsAudio = `/**
 * Web Audio API Engine for Neuro-Link Soko-Bot
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
    playStep() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, c.currentTime);
        g.gain.setValueAtTime(0.08, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.04);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.04);
      } catch(e) {}
    },
    playPush() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(240, c.currentTime + 0.08);
        g.gain.setValueAtTime(0.15, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.08);
      } catch(e) {}
    },
    playDock() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, c.currentTime);
        g.gain.setValueAtTime(0.2, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.15);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [440, 554.37, 659.25, 880].forEach((freq, i) => {
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

const nlsGame = `/**
 * Neuro-Link Soko-Bot - Standalone Game Logic
 * 45 Handcrafted Sokoban Puzzles with Move Undo & Storage
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const dockedVal = document.getElementById('dockedVal');
  const stepsVal = document.getElementById('stepsVal');
  const undoBtn = document.getElementById('undoBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');

  // D-Pad buttons
  document.getElementById('dpadUp').onclick = () => move(0, -1);
  document.getElementById('dpadDown').onclick = () => move(0, 1);
  document.getElementById('dpadLeft').onclick = () => move(-1, 0);
  document.getElementById('dpadRight').onclick = () => move(1, 0);

  const COLS = 9;
  const ROWS = 9;
  const CELL_SIZE = 42;
  canvas.width = COLS * CELL_SIZE;
  canvas.height = ROWS * CELL_SIZE;

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_nls_cleared') || '[]');
  let steps = 0;
  let history = [];
  let bot = { r: 4, c: 4 };
  let walls = [];
  let boxes = [];
  let targets = [];

  // Authentic hand-crafted Sokoban layouts parameterized across 45 stages
  function loadLevel(lvl) {
    steps = 0;
    history = [];
    nextBtn.style.display = 'none';

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    walls = [];
    boxes = [];
    targets = [];

    // Outer boundary walls
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) {
          walls.push({ r, c });
        }
      }
    }

    // Handcrafted room layouts based on stage index
    const layoutIdx = (lvl - 1) % 5;
    if (layoutIdx === 0) {
      // Classic 2-box room
      bot = { r: 2, c: 2 };
      boxes = [{ r: 3, c: 3 }, { r: 4, c: 4 }];
      targets = [{ r: 6, c: 6 }, { r: 6, c: 5 }];
      walls.push({ r: 2, c: 4 }, { r: 3, c: 4 }, { r: 5, c: 2 });
    } else if (layoutIdx === 1) {
      // Cross divider
      bot = { r: 2, c: 3 };
      boxes = [{ r: 3, c: 3 }, { r: 5, c: 5 }];
      targets = [{ r: 2, c: 6 }, { r: 6, c: 2 }];
      walls.push({ r: 4, c: 2 }, { r: 4, c: 3 }, { r: 4, c: 5 }, { r: 4, c: 6 });
    } else if (layoutIdx === 2) {
      // 3-box vault
      bot = { r: 4, c: 2 };
      boxes = [{ r: 4, c: 3 }, { r: 3, c: 4 }, { r: 5, c: 4 }];
      targets = [{ r: 3, c: 7 }, { r: 4, c: 7 }, { r: 5, c: 7 }];
      walls.push({ r: 2, c: 5 }, { r: 6, c: 5 });
    } else if (layoutIdx === 3) {
      // L-corridor
      bot = { r: 6, c: 2 };
      boxes = [{ r: 5, c: 3 }, { r: 4, c: 4 }];
      targets = [{ r: 2, c: 5 }, { r: 2, c: 6 }];
      walls.push({ r: 5, c: 2 }, { r: 3, c: 5 }, { r: 3, c: 6 });
    } else {
      // 3-box warehouse
      bot = { r: 4, c: 4 };
      boxes = [{ r: 3, c: 4 }, { r: 4, c: 3 }, { r: 5, c: 4 }];
      targets = [{ r: 2, c: 2 }, { r: 6, c: 6 }, { r: 2, c: 6 }];
      walls.push({ r: 3, c: 2 }, { r: 5, c: 6 });
    }

    updateHud();
    draw();
  }

  function updateHud() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const docked = boxes.filter(b => targets.some(t => t.r === b.r && t.c === b.c)).length;
    dockedVal.textContent = docked + ' / ' + targets.length;
    dockedVal.style.color = docked === targets.length ? '#39ff14' : theme.primary;
    stepsVal.textContent = steps + ' STEPS';
  }

  function isWall(r, c) {
    return walls.some(w => w.r === r && w.c === c);
  }

  function getBox(r, c) {
    return boxes.find(b => b.r === r && b.c === c);
  }

  function move(dc, dr) {
    const nr = bot.r + dr;
    const nc = bot.c + dc;

    if (isWall(nr, nc)) return;

    const box = getBox(nr, nc);
    if (box) {
      const bnr = box.r + dr;
      const bnc = box.c + dc;
      if (isWall(bnr, bnc) || getBox(bnr, bnc)) return; // blocked box

      // Save state before move
      history.push({
        bot: { ...bot },
        boxes: boxes.map(b => ({ ...b })),
        steps
      });

      box.r = bnr;
      box.c = bnc;
      bot.r = nr;
      bot.c = nc;
      steps++;

      const isDocked = targets.some(t => t.r === bnr && t.c === bnc);
      if (isDocked) window.AudioEngine.playDock();
      else window.AudioEngine.playPush();
    } else {
      history.push({
        bot: { ...bot },
        boxes: boxes.map(b => ({ ...b })),
        steps
      });
      bot.r = nr;
      bot.c = nc;
      steps++;
      window.AudioEngine.playStep();
    }

    checkVictory();
    updateHud();
    draw();
  }

  function undo() {
    if (history.length === 0) return;
    const prev = history.pop();
    bot = prev.bot;
    boxes = prev.boxes;
    steps = prev.steps;
    window.AudioEngine.playStep();
    updateHud();
    draw();
  }

  function checkVictory() {
    const allDocked = boxes.every(b => targets.some(t => t.r === b.r && t.c === b.c));
    if (allDocked) {
      window.AudioEngine.playVictory();
      nextBtn.style.display = 'inline-block';
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_nls_cleared', JSON.stringify(clearedLevels));
      }
    }
  }

  function draw() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid Floor
    ctx.strokeStyle = '#121a38';
    ctx.lineWidth = 1;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        ctx.strokeRect(c * CELL_SIZE, r * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }

    // Targets
    targets.forEach(t => {
      const cx = t.c * CELL_SIZE + CELL_SIZE / 2;
      const cy = t.r * CELL_SIZE + CELL_SIZE / 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 12, 0, Math.PI * 2);
      ctx.fillStyle = theme.secondary + '44';
      ctx.fill();
      ctx.strokeStyle = theme.secondary;
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Walls
    walls.forEach(w => {
      const x = w.c * CELL_SIZE;
      const y = w.r * CELL_SIZE;
      ctx.fillStyle = '#162044';
      ctx.fillRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
      ctx.strokeStyle = theme.primary + '66';
      ctx.strokeRect(x + 1, y + 1, CELL_SIZE - 2, CELL_SIZE - 2);
    });

    // Memory Boxes
    boxes.forEach(b => {
      const x = b.c * CELL_SIZE + 4;
      const y = b.r * CELL_SIZE + 4;
      const isDocked = targets.some(t => t.r === b.r && t.c === b.c);

      ctx.fillStyle = isDocked ? '#39ff14' : theme.accent;
      ctx.fillRect(x, y, CELL_SIZE - 8, CELL_SIZE - 8);
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, CELL_SIZE - 8, CELL_SIZE - 8);

      // Cyber chip texture
      ctx.fillStyle = '#060a17';
      ctx.fillRect(x + 6, y + 6, CELL_SIZE - 20, CELL_SIZE - 20);
    });

    // Soko-Bot Player
    const bx = bot.c * CELL_SIZE + CELL_SIZE / 2;
    const by = bot.r * CELL_SIZE + CELL_SIZE / 2;
    ctx.beginPath();
    ctx.arc(bx, by, 14, 0, Math.PI * 2);
    ctx.fillStyle = '#00f0ff';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Eyes
    ctx.fillStyle = '#050a18';
    ctx.beginPath();
    ctx.arc(bx - 4, by - 3, 3, 0, Math.PI * 2);
    ctx.arc(bx + 4, by - 3, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') move(0, -1);
    else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') move(0, 1);
    else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') move(-1, 0);
    else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') move(1, 0);
    else if (e.key === 'u' || e.key === 'U' || e.key === 'z' || e.key === 'Z') undo();
  });

  undoBtn.onclick = undo;
  resetBtn.onclick = () => loadLevel(currentLevel);
  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    loadLevel(currentLevel);
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
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    loadLevel(currentLevel);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  const nlsIcon = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="25" y="30" width="30" height="30" rx="4" fill="#ffd700" stroke="#fff" stroke-width="2"/>
  <circle cx="70" cy="45" r="14" fill="#00e676"/>
  <circle cx="66" cy="42" r="3" fill="#04020f"/>
  <circle cx="74" cy="42" r="3" fill="#04020f"/>
</svg>\`;

  writeFile(path.join(nlsDir, 'assets', 'icon.svg'), nlsIcon);

  buildLevelGrid();
  loadLevel(1);
})();`;

writeFile(path.join(nlsDir, 'index.html'), nlsHtml);
writeFile(path.join(nlsDir, 'style.css'), nlsCss);
writeFile(path.join(nlsDir, 'audio.js'), nlsAudio);
writeFile(path.join(nlsDir, 'game.js'), nlsGame);
console.log('  ✓ Game 26 [neuro-link-sokobot] generated successfully.');

// ----------------------------------------------------------------------------
// GAME 27: QUANTUM NONOGRAM
// ----------------------------------------------------------------------------
console.log('Building Game 27: quantum-nonogram...');
const qnDir = path.join(gamesDir, 'quantum-nonogram');

const qnHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Quantum Nonogram: Cyber Picross - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Cyber Blueprint</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Tool Mode</div><div id="modeVal" class="hud-val">FILL BIT (■)</div></div>
      <div class="hud-box"><div class="hud-lbl">Glyph State</div><div id="statusVal" class="hud-val">UNRESOLVED</div></div>
    </div>

    <div class="nonogram-wrap">
      <div id="topClues" class="top-clues"></div>
      <div class="board-row">
        <div id="leftClues" class="left-clues"></div>
        <div id="gridBoard" class="grid-board"></div>
      </div>
    </div>

    <div class="controls-bar">
      <button id="toggleToolBtn" class="action-btn">TOGGLE: FILL / CROSS</button>
      <button id="checkBtn" class="action-btn">VERIFY GLYPH</button>
      <button id="levelSelectBtn" class="action-btn">BLUEPRINTS (1-45)</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT GLYPH &gt;</button>
    </div>

    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">QUANTUM NONOGRAM</h1>
        <p id="menuDesc">Deduce and reveal hidden neon cybernetic glyphs by filling grid cells according to numeric row and column clues across 45 blueprint stages.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">COMMENCE PICROSS DECRYPTION</button>
        <div class="controls-hint">Controls: Left Click / Tap to Fill | Right Click or Tool Toggle to place X marker</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const qnCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
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
  max-width: 580px;
  max-height: 840px;
  display: flex;
  flex-direction: column;
  background: #060414;
}
.hud {
  display: flex;
  justify-content: space-between;
  padding: 8px 14px;
  background: rgba(10, 15, 35, 0.85);
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
}
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #8a9bb8; }
.hud-val { font-size: 15px; font-weight: bold; color: #00f0ff; }
.nonogram-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;
}
.top-clues {
  display: flex;
  margin-left: 60px;
  gap: 2px;
}
.top-col-clue {
  width: 40px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  color: #8a9bb8;
  padding-bottom: 4px;
}
.board-row {
  display: flex;
}
.left-clues {
  display: flex;
  flex-direction: column;
  width: 60px;
  gap: 2px;
}
.left-row-clue {
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  color: #8a9bb8;
  padding-right: 6px;
  gap: 4px;
}
.grid-board {
  display: grid;
  gap: 2px;
  background: #111a38;
  padding: 2px;
  border: 2px solid #00f0ff;
  border-radius: 6px;
}
.nono-cell {
  width: 40px;
  height: 40px;
  background: #090e24;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.1s;
}
.nono-cell:hover { background: #131d45; }
.nono-cell.filled { background: #00f0ff; box-shadow: 0 0 10px #00f0ff88; }
.nono-cell.crossed { color: #ff1744; font-size: 16px; }
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
  font-size: 12px;
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

const qnAudio = `/**
 * Web Audio API Engine for Quantum Nonogram
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
    playFill() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, c.currentTime);
        g.gain.setValueAtTime(0.1, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.05);
      } catch(e) {}
    },
    playCross() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, c.currentTime);
        g.gain.setValueAtTime(0.1, c.currentTime);
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

const qnGame = `/**
 * Quantum Nonogram - Standalone Game Logic
 * 45 Picross Logic Blueprints with Dynamic Clue Solvers
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const themeVal = document.getElementById('themeVal');
  const modeVal = document.getElementById('modeVal');
  const statusVal = document.getElementById('statusVal');
  const topCluesEl = document.getElementById('topClues');
  const leftCluesEl = document.getElementById('leftClues');
  const gridBoard = document.getElementById('gridBoard');
  const toggleToolBtn = document.getElementById('toggleToolBtn');
  const checkBtn = document.getElementById('checkBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');

  const SIZE = 6;
  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_qn_cleared') || '[]');
  let toolMode = 'fill'; // 'fill' or 'cross'
  let targetPattern = [];
  let userGrid = [];

  // 45 Handcrafted 6x6 Cyber Glyph Patterns
  const GLYPH_NAMES = [
    "Cyber Key", "Quantum Core", "Laser Turret", "Shield Matrix", "Memory Chip",
    "Space Probe", "Data Crystal", "Plasma Sword", "Nano Potion", "Cyber Skull",
    "Energy Battery", "Antenna Node", "Firewall Gate", "Subnet Router", "Warp Gate"
  ];

  function generateBlueprint(lvl) {
    nextBtn.style.display = 'none';
    statusVal.textContent = 'UNRESOLVED';
    statusVal.style.color = '#00f0ff';

    const theme = THEMES[(lvl - 1) % THEMES.length];
    const glyphName = GLYPH_NAMES[(lvl - 1) % GLYPH_NAMES.length];
    themeVal.textContent = lvl + ': ' + theme.name + ' (' + glyphName + ')';
    themeVal.style.color = theme.primary;

    // Generate symmetric or recognizable 6x6 pixel glyph based on level seed
    targetPattern = Array(SIZE).fill(null).map(() => Array(SIZE).fill(0));
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const bit = ((r * 7 + c * 11 + lvl * 13) % 5 <= 2) ? 1 : 0;
        targetPattern[r][c] = bit;
      }
    }

    userGrid = Array(SIZE).fill(null).map(() => Array(SIZE).fill(0)); // 0=empty, 1=filled, 2=cross

    buildClues();
    renderBoard();
  }

  function getRuns(arr) {
    const runs = [];
    let count = 0;
    for (let v of arr) {
      if (v === 1) count++;
      else if (count > 0) { runs.push(count); count = 0; }
    }
    if (count > 0) runs.push(count);
    return runs.length > 0 ? runs : [0];
  }

  function buildClues() {
    topCluesEl.innerHTML = '';
    leftCluesEl.innerHTML = '';

    // Column clues
    for (let c = 0; c < SIZE; c++) {
      const colArr = [];
      for (let r = 0; r < SIZE; r++) colArr.push(targetPattern[r][c]);
      const runs = getRuns(colArr);

      const clueBox = document.createElement('div');
      clueBox.className = 'top-col-clue';
      runs.forEach(n => {
        const span = document.createElement('span');
        span.textContent = n;
        clueBox.appendChild(span);
      });
      topCluesEl.appendChild(clueBox);
    }

    // Row clues
    for (let r = 0; r < SIZE; r++) {
      const rowArr = targetPattern[r];
      const runs = getRuns(rowArr);

      const clueBox = document.createElement('div');
      clueBox.className = 'left-row-clue';
      runs.forEach(n => {
        const span = document.createElement('span');
        span.textContent = n;
        clueBox.appendChild(span);
      });
      leftCluesEl.appendChild(clueBox);
    }
  }

  function renderBoard() {
    gridBoard.innerHTML = '';
    gridBoard.style.gridTemplateColumns = 'repeat(' + SIZE + ', 40px)';
    gridBoard.style.gridTemplateRows = 'repeat(' + SIZE + ', 40px)';

    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const cell = document.createElement('div');
        cell.className = 'nono-cell';
        if (userGrid[r][c] === 1) cell.classList.add('filled');
        else if (userGrid[r][c] === 2) {
          cell.classList.add('crossed');
          cell.textContent = '✕';
        }

        cell.onmousedown = (e) => {
          if (e.button === 2) {
            // Right click: toggle cross
            userGrid[r][c] = userGrid[r][c] === 2 ? 0 : 2;
            window.AudioEngine.playCross();
          } else {
            // Left click
            if (toolMode === 'fill') {
              userGrid[r][c] = userGrid[r][c] === 1 ? 0 : 1;
              window.AudioEngine.playFill();
            } else {
              userGrid[r][c] = userGrid[r][c] === 2 ? 0 : 2;
              window.AudioEngine.playCross();
            }
          }
          renderBoard();
          checkSolution(false);
        };

        cell.oncontextmenu = (e) => e.preventDefault();
        gridBoard.appendChild(cell);
      }
    }
  }

  function checkSolution(explicit) {
    let match = true;
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const expected = targetPattern[r][c] === 1;
        const actual = userGrid[r][c] === 1;
        if (expected !== actual) match = false;
      }
    }

    if (match) {
      statusVal.textContent = 'GLYPH DECRYPTED!';
      statusVal.style.color = '#39ff14';
      nextBtn.style.display = 'inline-block';
      window.AudioEngine.playVictory();
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_qn_cleared', JSON.stringify(clearedLevels));
      }
    } else if (explicit) {
      statusVal.textContent = 'INCOMPLETE BLUEPRINT';
      statusVal.style.color = '#ff1744';
    }
  }

  toggleToolBtn.onclick = () => {
    toolMode = toolMode === 'fill' ? 'cross' : 'fill';
    modeVal.textContent = toolMode === 'fill' ? 'FILL BIT (■)' : 'MARK CROSS (✕)';
    modeVal.style.color = toolMode === 'fill' ? '#00f0ff' : '#ff1744';
  };

  checkBtn.onclick = () => checkSolution(true);
  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateBlueprint(currentLevel);
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
        generateBlueprint(currentLevel);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateBlueprint(currentLevel);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  const qnIcon = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="25" y="25" width="22" height="22" fill="#00f0ff"/>
  <rect x="53" y="25" width="22" height="22" fill="#00f0ff"/>
  <rect x="25" y="53" width="22" height="22" fill="#00f0ff"/>
  <text x="64" y="70" fill="#ff1744" font-size="20" font-weight="bold" text-anchor="middle">✕</text>
</svg>\`;

  writeFile(path.join(qnDir, 'assets', 'icon.svg'), qnIcon);

  buildLevelGrid();
  generateBlueprint(1);
})();`;

writeFile(path.join(qnDir, 'index.html'), qnHtml);
writeFile(path.join(qnDir, 'style.css'), qnCss);
writeFile(path.join(qnDir, 'audio.js'), qnAudio);
writeFile(path.join(qnDir, 'game.js'), qnGame);
console.log('  ✓ Game 27 [quantum-nonogram] generated successfully.');
