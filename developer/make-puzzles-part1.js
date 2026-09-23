/**
 * Next Games/Game — Puzzle Category Part 1:
 * - laser-circuit-reflector
 * - cyber-sudoku
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

// 45 Themes Definition
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
// GAME 23: LASER CIRCUIT REFLECTOR
// ----------------------------------------------------------------------------
console.log('Building Game 23: laser-circuit-reflector...');
const lcrDir = path.join(gamesDir, 'laser-circuit-reflector');

const lcrHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Laser Circuit Reflector: Prism Grid - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Optical Stage</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Receptors Activated</div><div id="targetsVal" class="hud-val">0 / 1</div></div>
      <div class="hud-box"><div class="hud-lbl">Mirror Rotations</div><div id="movesVal" class="hud-val">0 MOVES</div></div>
    </div>
    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>
    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">STAGES (1-45)</button>
      <button id="resetBtn" class="action-btn">RESET MIRRORS</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT STAGE &gt;</button>
    </div>
    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">LASER CIRCUIT REFLECTOR</h1>
        <p id="menuDesc">Guide photon laser beams across 45 optical breadboards. Rotate angled mirrors and prism splitters to illuminate all quantum energy receptors.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">COMMENCE OPTICAL ALIGNMENT</button>
        <div class="controls-hint">Controls: Click or Tap any Mirror to Rotate 90° | Direct laser into all glowing receptors</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const lcrCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
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
  backdrop-filter: blur(8px);
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
.next-btn:hover { background: #ff3399; box-shadow: 0 0 15px #ff007f; }
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.92);
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
.card h1 { font-size: 26px; margin-bottom: 8px; color: #00f0ff; letter-spacing: 2px; text-shadow: 0 0 10px #00f0ff; }
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
.lvl-btn:hover, .lvl-btn.active { background: #00f0ff; color: #000; box-shadow: 0 0 10px #00f0ff; }
.lvl-btn.cleared { border-color: #39ff14; color: #39ff14; }
.play-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(90deg, #00f0ff, #ff007f);
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 2px;
  border-radius: 6px;
  cursor: pointer;
}
.controls-hint { margin-top: 12px; font-size: 11px; color: #64748b; }`;

const lcrAudio = `/**
 * Web Audio API Engine for Laser Circuit Reflector
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
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(800, c.currentTime + 0.05);
        g.gain.setValueAtTime(0.15, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.05);
      } catch (e) {}
    },
    playLaser() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(1200, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, c.currentTime + 0.1);
        g.gain.setValueAtTime(0.08, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.1);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.1);
      } catch (e) {}
    },
    playTarget() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, c.currentTime);
        osc.frequency.setValueAtTime(659.25, c.currentTime + 0.08);
        g.gain.setValueAtTime(0.2, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.3);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.3);
      } catch (e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.09);
          g.gain.setValueAtTime(0.2, c.currentTime + i * 0.09);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.09 + 0.3);
          osc.connect(g); g.connect(c.destination);
          osc.start(c.currentTime + i * 0.09);
          osc.stop(c.currentTime + i * 0.09 + 0.3);
        });
      } catch (e) {}
    }
  };
})(window);`;

const lcrGame = `/**
 * Laser Circuit Reflector - Standalone Game Logic
 * 45 Optical Breadboard Puzzles with Real-Time Beam Tracing
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const targetsVal = document.getElementById('targetsVal');
  const movesVal = document.getElementById('movesVal');
  const menuScreen = document.getElementById('menuScreen');
  const menuTitle = document.getElementById('menuTitle');
  const menuDesc = document.getElementById('menuDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const resetBtn = document.getElementById('resetBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  const GRID_SIZE = 7;
  let CELL_SIZE = 60;
  canvas.width = 420;
  canvas.height = 420;

  let currentLevel = 1;
  let moves = 0;
  let clearedLevels = JSON.parse(localStorage.getItem('next_lcr_cleared') || '[]');
  let board = [];
  let emitter = { x: 0, y: 3, dir: 'right', color: '#00f0ff' };
  let targets = [];
  let laserPaths = [];
  let isLevelComplete = false;

  // Directions: right=0, down=1, left=2, up=3
  // Mirror angle types:
  // type '/' (angle 0 or 2): reflects right->up, down->left, left->down, up->right
  // type '\\' (angle 1 or 3): reflects right->down, down->right, left->up, up->left

  function generateLevel(lvl) {
    moves = 0;
    isLevelComplete = false;
    nextBtn.style.display = 'none';
    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    board = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null));

    // Place emitter on left edge
    const startY = (lvl * 3) % (GRID_SIZE - 2) + 1;
    emitter = { x: 0, y: startY, dir: 'right', color: theme.primary };

    // Procedurally place mirrors and targets based on level seed
    // Hand-guaranteed solvable layout: create a path from emitter to target
    let cx = emitter.x;
    let cy = emitter.y;
    let cdir = emitter.dir; // 'right'
    let stepCount = Math.min(6, 2 + Math.floor(lvl / 8));
    let pathPoints = [{ x: cx, y: cy }];

    for (let s = 0; s < stepCount; s++) {
      let turnDist = 1 + ((lvl * 7 + s * 11) % (GRID_SIZE - 3));
      if (cdir === 'right') cx = Math.min(GRID_SIZE - 1, cx + turnDist);
      else if (cdir === 'left') cx = Math.max(0, cx - turnDist);
      else if (cdir === 'down') cy = Math.min(GRID_SIZE - 1, cy + turnDist);
      else if (cdir === 'up') cy = Math.max(0, cy - turnDist);

      pathPoints.push({ x: cx, y: cy });
      
      if (s < stepCount - 1) {
        // Choose reflection mirror orientation
        const newDir = (cdir === 'right' || cdir === 'left') ? ((s % 2 === 0) ? 'down' : 'up') : ((s % 2 === 0) ? 'left' : 'right');
        const mType = ((cdir === 'right' && newDir === 'up') || (cdir === 'down' && newDir === 'left') || (cdir === 'left' && newDir === 'down') || (cdir === 'up' && newDir === 'right')) ? 0 : 1;
        
        // Randomly scramble initial rotation so player has to solve it!
        const initialAngle = (mType + (s % 3) + 1) % 4;
        board[cy][cx] = { type: 'mirror', angle: initialAngle, targetAngle: mType, solved: false };
        cdir = newDir;
      }
    }

    // Place target at final destination
    targets = [{ x: cx, y: cy, hit: false, color: theme.secondary }];
    board[cy][cx] = { type: 'target', color: theme.secondary, hit: false };

    // Add 2-3 decoy rotatable mirrors to increase puzzle challenge
    for (let i = 0; i < 3; i++) {
      const rx = (lvl * 13 + i * 17) % GRID_SIZE;
      const ry = (lvl * 19 + i * 23) % GRID_SIZE;
      if (!board[ry][rx] && (rx !== emitter.x || ry !== emitter.y)) {
        board[ry][rx] = { type: 'mirror', angle: (i * 2) % 4, decoy: true };
      }
    }

    traceLaser();
    updateHud();
    draw();
  }

  function traceLaser() {
    laserPaths = [];
    targets.forEach(t => t.hit = false);

    let x = emitter.x;
    let y = emitter.y;
    let dx = 1, dy = 0; // moving right
    let path = [{ x: x * CELL_SIZE + CELL_SIZE / 2, y: y * CELL_SIZE + CELL_SIZE / 2 }];
    let steps = 0;

    while (steps < 40) {
      steps++;
      x += dx;
      y += dy;

      if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) {
        // Laser left the board
        path.push({ x: (x - dx) * CELL_SIZE + CELL_SIZE / 2 + dx * (CELL_SIZE / 2), y: (y - dy) * CELL_SIZE + CELL_SIZE / 2 + dy * (CELL_SIZE / 2) });
        break;
      }

      const hitX = x * CELL_SIZE + CELL_SIZE / 2;
      const hitY = y * CELL_SIZE + CELL_SIZE / 2;
      path.push({ x: hitX, y: hitY });

      const cell = board[y][x];
      if (!cell) continue;

      if (cell.type === 'target') {
        cell.hit = true;
        targets.forEach(t => { if (t.x === x && t.y === y) t.hit = true; });
        break;
      }

      if (cell.type === 'mirror') {
        // Mirror angle 0 or 2 acts as /
        // Mirror angle 1 or 3 acts as \\
        const isSlash = (cell.angle % 2 === 0);
        if (isSlash) {
          // / reflection: right(1,0)->up(0,-1), down(0,1)->left(-1,0), left(-1,0)->down(0,1), up(0,-1)->right(1,0)
          const ndx = -dy;
          const ndy = -dx;
          dx = ndx;
          dy = ndy;
        } else {
          // \\ reflection: right(1,0)->down(0,1), down(0,1)->right(1,0), left(-1,0)->up(0,-1), up(0,-1)->left(-1,0)
          const ndx = dy;
          const ndy = dx;
          dx = ndx;
          dy = ndy;
        }
      }
    }

    laserPaths.push(path);

    // Check level completion
    const allHit = targets.length > 0 && targets.every(t => t.hit);
    if (allHit && !isLevelComplete) {
      isLevelComplete = true;
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_lcr_cleared', JSON.stringify(clearedLevels));
      }
      window.AudioEngine.playVictory();
      nextBtn.style.display = 'inline-block';
    }
  }

  function updateHud() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const hitCount = targets.filter(t => t.hit).length;
    targetsVal.textContent = hitCount + ' / ' + targets.length;
    targetsVal.style.color = hitCount === targets.length ? '#39ff14' : theme.primary;
    movesVal.textContent = moves + ' MOVES';
  }

  function draw() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid lines
    ctx.strokeStyle = theme.primary + '22';
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0); ctx.lineTo(i * CELL_SIZE, canvas.height);
      ctx.moveTo(0, i * CELL_SIZE); ctx.lineTo(canvas.width, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw Laser Emitter
    const ex = emitter.x * CELL_SIZE + CELL_SIZE / 2;
    const ey = emitter.y * CELL_SIZE + CELL_SIZE / 2;
    ctx.fillStyle = emitter.color;
    ctx.beginPath();
    ctx.arc(ex, ey, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Board Items (Mirrors & Targets)
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const item = board[r][c];
        if (!item) continue;
        const cx = c * CELL_SIZE + CELL_SIZE / 2;
        const cy = r * CELL_SIZE + CELL_SIZE / 2;

        if (item.type === 'mirror') {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate((item.angle * 90) * Math.PI / 180);

          // Mirror Base Frame
          ctx.strokeStyle = theme.primary;
          ctx.lineWidth = 2;
          ctx.strokeRect(-20, -20, 40, 40);

          // Diagonal Reflective Glass
          ctx.beginPath();
          ctx.moveTo(-18, 18);
          ctx.lineTo(18, -18);
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 4;
          ctx.stroke();

          // Neon sheen
          ctx.beginPath();
          ctx.moveTo(-14, 14);
          ctx.lineTo(14, -14);
          ctx.strokeStyle = theme.accent;
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.restore();
        } else if (item.type === 'target') {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.beginPath();
          ctx.arc(0, 0, item.hit ? 18 : 14, 0, Math.PI * 2);
          ctx.fillStyle = item.hit ? theme.accent : theme.secondary;
          ctx.fill();
          ctx.strokeStyle = item.hit ? '#fff' : theme.accent;
          ctx.lineWidth = 3;
          ctx.stroke();

          if (item.hit) {
            ctx.strokeStyle = theme.accent + '66';
            ctx.beginPath();
            ctx.arc(0, 0, 24, 0, Math.PI * 2);
            ctx.stroke();
          }
          ctx.restore();
        }
      }
    }

    // Draw Laser Beams
    ctx.save();
    laserPaths.forEach(path => {
      if (path.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      for (let p = 1; p < path.length; p++) {
        ctx.lineTo(path[p].x, path[p].y);
      }
      // Glowing Core
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 5;
      ctx.shadowColor = theme.primary;
      ctx.shadowBlur = 12;
      ctx.stroke();

      // White Center Beam
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
    ctx.restore();
  }

  // Click interaction on canvas
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const scale = canvas.width / rect.width;
    const clickX = (e.clientX - rect.left) * scale;
    const clickY = (e.clientY - rect.top) * scale;
    const col = Math.floor(clickX / CELL_SIZE);
    const row = Math.floor(clickY / CELL_SIZE);

    if (row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
      const cell = board[row][col];
      if (cell && cell.type === 'mirror') {
        cell.angle = (cell.angle + 1) % 4;
        moves++;
        window.AudioEngine.playClick();
        traceLaser();
        updateHud();
        draw();
      }
    }
  });

  // Setup Level Select Grid
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

  startBtn.addEventListener('click', () => {
    menuScreen.classList.add('hidden');
    generateLevel(currentLevel);
  });

  levelSelectBtn.addEventListener('click', () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  });

  resetBtn.addEventListener('click', () => {
    generateLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateLevel(currentLevel);
  });

  buildLevelGrid();
  generateLevel(1);
})();`;

const lcrIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <line x1="20" y1="50" x2="50" y2="50" stroke="#00f0ff" stroke-width="4"/>
  <line x1="50" y1="50" x2="50" y2="80" stroke="#ff007f" stroke-width="4"/>
  <polygon points="45,45 55,55 50,55" fill="#39ff14"/>
  <circle cx="20" cy="50" r="6" fill="#00f0ff"/>
  <circle cx="50" cy="80" r="7" fill="#ff007f"/>
</svg>`;

writeFile(path.join(lcrDir, 'index.html'), lcrHtml);
writeFile(path.join(lcrDir, 'style.css'), lcrCss);
writeFile(path.join(lcrDir, 'audio.js'), lcrAudio);
writeFile(path.join(lcrDir, 'game.js'), lcrGame);
writeFile(path.join(lcrDir, 'assets', 'icon.svg'), lcrIcon);
console.log('  ✓ Game 23 [laser-circuit-reflector] generated successfully.');

// ----------------------------------------------------------------------------
// GAME 24: CYBER SUDOKU
// ----------------------------------------------------------------------------
console.log('Building Game 24: cyber-sudoku...');
const csdDir = path.join(gamesDir, 'cyber-sudoku');

const csdHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyber Sudoku: Binary Node Matrix - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Matrix Sector</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Errors Allowed</div><div id="errorVal" class="hud-val">MISTAKES: 0 / 3</div></div>
      <div class="hud-box"><div class="hud-lbl">Timer</div><div id="timerVal" class="hud-val">00:00</div></div>
    </div>
    
    <div class="matrix-board" id="sudokuGrid"></div>

    <div class="keypad-bar">
      <div class="keypad-row">
        <button class="num-key" data-val="1">1</button>
        <button class="num-key" data-val="2">2</button>
        <button class="num-key" data-val="3">3</button>
        <button class="num-key" data-val="4">4</button>
        <button class="num-key" data-val="5">5</button>
        <button class="num-key" data-val="6">6</button>
        <button class="num-key" data-val="7">7</button>
        <button class="num-key" data-val="8">8</button>
        <button class="num-key" data-val="9">9</button>
      </div>
      <div class="tool-row">
        <button id="eraseBtn" class="tool-btn">ERASE</button>
        <button id="noteBtn" class="tool-btn">NOTES: OFF</button>
        <button id="levelSelectBtn" class="tool-btn">SECTORS (1-45)</button>
        <button id="restartBtn" class="tool-btn">RELOAD</button>
      </div>
    </div>

    <div id="menuScreen" class="overlay">
      <div class="card">
        <h1 id="menuTitle">CYBER SUDOKU</h1>
        <p id="menuDesc">Decrypt 9x9 binary data matrices across 45 unique difficulty sectors. Fill rows, columns, and 3x3 sectors with digits 1 through 9 without duplication.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIALIZE MATRIX</button>
        <div class="controls-hint">Controls: Select cell, tap number 1-9 | Toggle notes mode for scratch computation</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const csdCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
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
.matrix-board {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 1px;
  background: #111a38;
  padding: 6px;
  border: 2px solid #00f0ff;
  border-radius: 8px;
  margin: 10px;
}
.cell {
  background: #090e24;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: background 0.15s;
}
.cell:hover { background: #131d45; }
.cell.selected { background: #00f0ff33; border: 1px solid #00f0ff; }
.cell.highlighted { background: #00f0ff15; }
.cell.same-val { background: #ff007f2a; }
.cell.given { color: #fff; font-weight: 900; }
.cell.player { color: #00f0ff; }
.cell.error { color: #ff1744; background: #ff174433; animation: shake 0.3s; }
.cell.b-right { border-right: 2px solid #00f0ff88; }
.cell.b-bottom { border-bottom: 2px solid #00f0ff88; }
.notes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  font-size: 8px;
  color: #7986cb;
  pointer-events: none;
}
.keypad-bar {
  padding: 8px 12px 14px;
  background: rgba(10, 15, 35, 0.85);
  border-top: 1px solid rgba(0, 240, 255, 0.3);
}
.keypad-row {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 4px;
  margin-bottom: 8px;
}
.num-key {
  padding: 10px 0;
  background: #101b3b;
  border: 1px solid #00f0ff55;
  color: #00f0ff;
  font-size: 18px;
  font-weight: 900;
  border-radius: 6px;
  cursor: pointer;
}
.num-key:hover { background: #00f0ff; color: #000; box-shadow: 0 0 10px #00f0ff; }
.tool-row { display: flex; gap: 6px; }
.tool-btn {
  flex: 1;
  padding: 8px 4px;
  background: #101933;
  border: 1px solid #00f0ff44;
  color: #e0f7fa;
  font-size: 11px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}
.tool-btn.active { background: #ff007f; border-color: #ff007f; color: #fff; box-shadow: 0 0 8px #ff007f; }
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
.card h1 { font-size: 24px; margin-bottom: 6px; color: #00f0ff; letter-spacing: 2px; text-shadow: 0 0 10px #00f0ff; }
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
.controls-hint { margin-top: 10px; font-size: 11px; color: #64748b; }
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}`;

const csdAudio = `/**
 * Web Audio API Engine for Cyber Sudoku
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
    playNote() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.frequency.setValueAtTime(880, c.currentTime);
        g.gain.setValueAtTime(0.08, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.04);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.04);
      } catch(e) {}
    },
    playPlace(val) {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.frequency.setValueAtTime(300 + val * 60, c.currentTime);
        g.gain.setValueAtTime(0.12, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.08);
      } catch(e) {}
    },
    playError() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, c.currentTime);
        g.gain.setValueAtTime(0.2, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.2);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [440, 554.37, 659.25, 880].forEach((freq, i) => {
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.1);
          g.gain.setValueAtTime(0.2, c.currentTime + i * 0.1);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.1 + 0.3);
          osc.connect(g); g.connect(c.destination);
          osc.start(c.currentTime + i * 0.1);
          osc.stop(c.currentTime + i * 0.1 + 0.3);
        });
      } catch(e) {}
    }
  };
})(window);`;

const csdGame = `/**
 * Cyber Sudoku - Standalone Game Logic
 * 45 Distinct Sectors with Valid Sudoku Solver & Generators
 */
(function() {
  'use strict';
  ${PUZZLE_THEMES_CODE}

  const themeVal = document.getElementById('themeVal');
  const errorVal = document.getElementById('errorVal');
  const timerVal = document.getElementById('timerVal');
  const sudokuGrid = document.getElementById('sudokuGrid');
  const noteBtn = document.getElementById('noteBtn');
  const eraseBtn = document.getElementById('eraseBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const menuTitle = document.getElementById('menuTitle');
  const menuDesc = document.getElementById('menuDesc');
  const startBtn = document.getElementById('startBtn');

  let currentSector = 1;
  let clearedSectors = JSON.parse(localStorage.getItem('next_csd_cleared') || '[]');
  let mistakes = 0;
  let maxMistakes = 3;
  let notesMode = false;
  let selectedCell = null;
  let timerSecs = 0;
  let timerInterval = null;

  let solution = [];
  let board = [];
  let notes = [];

  // Sudoku Pattern Generator
  function generateSudoku(sector) {
    // Base valid 9x9 board
    const base = [
      [1,2,3, 4,5,6, 7,8,9],
      [4,5,6, 7,8,9, 1,2,3],
      [7,8,9, 1,2,3, 4,5,6],
      [2,3,1, 5,6,4, 8,9,7],
      [5,6,4, 8,9,7, 2,3,1],
      [8,9,7, 2,3,1, 5,6,4],
      [3,1,2, 6,4,5, 9,7,8],
      [6,4,5, 9,7,8, 3,1,2],
      [9,7,8, 3,1,2, 6,4,5]
    ];

    // Shuffle rows within bands, columns within stacks, and map numbers based on sector seed
    const map = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 1; i <= 9; i++) {
      const j = 1 + ((i * 7 + sector * 13) % 9);
      const temp = map[i]; map[i] = map[j]; map[j] = temp;
    }

    solution = base.map(row => row.map(v => map[v]));

    // Difficulty determines how many cells are given (45 Easy, 35 Medium, 28 Master)
    const cluesCount = sector <= 15 ? 42 : (sector <= 30 ? 35 : 28);
    board = solution.map(row => [...row]);
    notes = Array(9).fill(null).map(() => Array(9).fill(null).map(() => []));

    // Remove numbers to create the puzzle
    let cellsToRemove = 81 - cluesCount;
    const order = [];
    for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) order.push([r, c]);
    // Seeded shuffle
    for (let i = order.length - 1; i > 0; i--) {
      const j = (i * 3 + sector * 11) % (i + 1);
      const temp = order[i]; order[i] = order[j]; order[j] = temp;
    }

    for (let i = 0; i < cellsToRemove; i++) {
      const [r, c] = order[i];
      board[r][c] = 0;
    }

    mistakes = 0;
    timerSecs = 0;
    selectedCell = null;
    updateHud();
    renderGrid();

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerSecs++;
      const mins = String(Math.floor(timerSecs / 60)).padStart(2, '0');
      const secs = String(timerSecs % 60).padStart(2, '0');
      timerVal.textContent = mins + ':' + secs;
    }, 1000);
  }

  function updateHud() {
    const theme = THEMES[(currentSector - 1) % THEMES.length];
    themeVal.textContent = currentSector + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    errorVal.textContent = 'MISTAKES: ' + mistakes + ' / ' + maxMistakes;
    errorVal.style.color = mistakes >= 2 ? '#ff1744' : theme.primary;
  }

  function renderGrid() {
    sudokuGrid.innerHTML = '';
    const theme = THEMES[(currentSector - 1) % THEMES.length];

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = board[r][c];
        const cell = document.createElement('div');
        cell.className = 'cell';
        if (c === 2 || c === 5) cell.classList.add('b-right');
        if (r === 2 || r === 5) cell.classList.add('b-bottom');

        if (val !== 0) {
          cell.textContent = val;
          if (val === solution[r][c]) {
            cell.classList.add(board[r][c] === solution[r][c] && !notes[r][c].length ? 'given' : 'player');
          }
        } else if (notes[r][c].length > 0) {
          const nGrid = document.createElement('div');
          nGrid.className = 'notes-grid';
          for (let n = 1; n <= 9; n++) {
            const nSpan = document.createElement('span');
            nSpan.textContent = notes[r][c].includes(n) ? n : '';
            nGrid.appendChild(nSpan);
          }
          cell.appendChild(nGrid);
        }

        cell.onclick = () => selectCell(r, c);
        sudokuGrid.appendChild(cell);
      }
    }
    highlightCells();
  }

  function selectCell(r, c) {
    selectedCell = { r, c };
    highlightCells();
  }

  function highlightCells() {
    const cells = sudokuGrid.children;
    for (let i = 0; i < 81; i++) {
      const r = Math.floor(i / 9);
      const c = i % 9;
      const cell = cells[i];
      cell.classList.remove('selected', 'highlighted', 'same-val');

      if (selectedCell) {
        if (selectedCell.r === r && selectedCell.c === c) {
          cell.classList.add('selected');
        } else if (selectedCell.r === r || selectedCell.c === c || (Math.floor(selectedCell.r/3) === Math.floor(r/3) && Math.floor(selectedCell.c/3) === Math.floor(c/3))) {
          cell.classList.add('highlighted');
        }

        const selVal = board[selectedCell.r][selectedCell.c];
        if (selVal !== 0 && board[r][c] === selVal) {
          cell.classList.add('same-val');
        }
      }
    }
  }

  function inputDigit(digit) {
    if (!selectedCell) return;
    const { r, c } = selectedCell;

    // If cell already given from start, prevent overwrite
    // We check if value matches solution and was initial
    if (board[r][c] === solution[r][c] && !notes[r][c].length) return;

    if (notesMode) {
      const idx = notes[r][c].indexOf(digit);
      if (idx >= 0) notes[r][c].splice(idx, 1);
      else notes[r][c].push(digit);
      window.AudioEngine.playNote();
      renderGrid();
      return;
    }

    if (digit === solution[r][c]) {
      board[r][c] = digit;
      notes[r][c] = [];
      window.AudioEngine.playPlace(digit);
      checkVictory();
    } else {
      mistakes++;
      window.AudioEngine.playError();
      updateHud();
      if (mistakes >= maxMistakes) {
        alert('FIREWALL LOCKOUT: Maximum mistakes reached. Matrix resetting.');
        generateSudoku(currentSector);
        return;
      }
    }
    renderGrid();
  }

  function eraseSelected() {
    if (!selectedCell) return;
    const { r, c } = selectedCell;
    if (board[r][c] !== solution[r][c] || notes[r][c].length > 0) {
      board[r][c] = 0;
      notes[r][c] = [];
      renderGrid();
    }
  }

  function checkVictory() {
    let complete = true;
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] !== solution[r][c]) complete = false;
      }
    }
    if (complete) {
      clearInterval(timerInterval);
      window.AudioEngine.playVictory();
      if (!clearedSectors.includes(currentSector)) {
        clearedSectors.push(currentSector);
        localStorage.setItem('next_csd_cleared', JSON.stringify(clearedSectors));
      }
      setTimeout(() => {
        alert('SECTOR ' + currentSector + ' DECRYPTED! Clean run.');
        currentSector = Math.min(45, currentSector + 1);
        generateSudoku(currentSector);
      }, 300);
    }
  }

  // Event Listeners
  document.querySelectorAll('.num-key').forEach(btn => {
    btn.onclick = () => inputDigit(parseInt(btn.dataset.val));
  });

  window.addEventListener('keydown', (e) => {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 9) inputDigit(num);
    else if (e.key === 'Backspace' || e.key === 'Delete') eraseSelected();
  });

  noteBtn.onclick = () => {
    notesMode = !notesMode;
    noteBtn.classList.toggle('active', notesMode);
    noteBtn.textContent = 'NOTES: ' + (notesMode ? 'ON' : 'OFF');
  };

  eraseBtn.onclick = eraseSelected;
  restartBtn.onclick = () => generateSudoku(currentSector);

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentSector ? ' active' : '') + (clearedSectors.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        currentSector = i;
        menuScreen.classList.add('hidden');
        generateSudoku(currentSector);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateSudoku(currentSector);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  const csdIcon = \`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="20" y="20" width="60" height="60" rx="6" fill="none" stroke="#00ffcc" stroke-width="3"/>
  <line x1="40" y1="20" x2="40" y2="80" stroke="#7c4dff" stroke-width="2"/>
  <line x1="60" y1="20" x2="60" y2="80" stroke="#7c4dff" stroke-width="2"/>
  <line x1="20" y1="40" x2="80" y2="40" stroke="#7c4dff" stroke-width="2"/>
  <line x1="20" y1="60" x2="80" y2="60" stroke="#7c4dff" stroke-width="2"/>
  <text x="30" y="36" fill="#00ffcc" font-size="14" font-weight="bold" text-anchor="middle">7</text>
  <text x="50" y="56" fill="#ff007f" font-size="14" font-weight="bold" text-anchor="middle">3</text>
  <text x="70" y="76" fill="#ffd600" font-size="14" font-weight="bold" text-anchor="middle">9</text>
</svg>\`;

  writeFile(path.join(csdDir, 'assets', 'icon.svg'), csdIcon);

  buildLevelGrid();
  generateSudoku(1);
})();`;

writeFile(path.join(csdDir, 'index.html'), csdHtml);
writeFile(path.join(csdDir, 'style.css'), csdCss);
writeFile(path.join(csdDir, 'audio.js'), csdAudio);
writeFile(path.join(csdDir, 'game.js'), csdGame);
console.log('  ✓ Game 24 [cyber-sudoku] generated successfully.');
