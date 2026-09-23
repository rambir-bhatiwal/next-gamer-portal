/**
 * Next Games/Game — Strategy Category Part 2:
 * - micro-colony-automaton (Game 34)
 * - hacker-node-conquest (Game 35)
 * - cyberpunk-mech-tactics (Game 36)
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

const STRATEGY_THEMES_CODE = `const THEMES = [
  { id: 1, name: "Earth Orbital Alpha", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Mars Dust Plains", bg: "#160505", primary: "#ff5722", secondary: "#ff9800", accent: "#ffeb3b", text: "#fbe9e7" },
  { id: 3, name: "Titan Methane Ocean", bg: "#02120e", primary: "#00ffcc", secondary: "#00bcd4", accent: "#76ff03", text: "#e0f2f1" },
  { id: 4, name: "Europa Sub-Surface Core", bg: "#02121a", primary: "#80d8ff", secondary: "#00b0ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 5, name: "Venusian Acid Highlands", bg: "#140e02", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fff8e1" },
  { id: 6, name: "Jovian Magnetic Vortex", bg: "#0d0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 7, name: "Saturnian Ice Ring 7", bg: "#081017", primary: "#00e5ff", secondary: "#40c4ff", accent: "#b388ff", text: "#e0f7fa" },
  { id: 8, name: "Kuiper Belt Relay", bg: "#04050d", primary: "#5c6bc0", secondary: "#3f51b5", accent: "#00f0ff", text: "#e8eaf6" },
  { id: 9, name: "Solar Corona Outpost", bg: "#170a01", primary: "#ff6d00", secondary: "#ff3d00", accent: "#ffd600", text: "#fff3e0" },
  { id: 10, name: "Oort Cloud Perimeter", bg: "#03020a", primary: "#7c4dff", secondary: "#651fff", accent: "#ff4081", text: "#ede7f6" },
  { id: 11, name: "Proxima Centauri Foundry", bg: "#14010a", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 12, name: "Sirius A Thermal Forge", bg: "#021218", primary: "#00e5ff", secondary: "#00b0ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 13, name: "Orion Nebula Spire", bg: "#120317", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 14, name: "Cygnus X-1 Event Horizon", bg: "#05010a", primary: "#9575cd", secondary: "#512da8", accent: "#00f0ff", text: "#ede7f6" },
  { id: 15, name: "Tachyon Star Bridge", bg: "#0a0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 16, name: "Silicon Wafer Megacity", bg: "#061214", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Dark Matter Bastion", bg: "#020308", primary: "#7986cb", secondary: "#3949ab", accent: "#ff4081", text: "#e8eaf6" },
  { id: 18, name: "Antimatter Containment Hub", bg: "#170308", primary: "#ff1744", secondary: "#c51162", accent: "#00f0ff", text: "#ffebee" },
  { id: 19, name: "Emerald Nanite Colony", bg: "#021708", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 20, name: "Obsidian Deep Subnet", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 21, name: "Neutron Star Pulsar Hub", bg: "#0f0217", primary: "#e040fb", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 22, name: "Heliosphere Beacon", bg: "#170e02", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffff00", text: "#fff8e1" },
  { id: 23, name: "Cryo-Stasis Vault", bg: "#01121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e676", text: "#e1f5fe" },
  { id: 24, name: "Molten Magma Shelf", bg: "#170402", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 25, name: "Galactic Trade Nexus", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ffd600", text: "#e1f5fe" },
  { id: 26, name: "Asteroid Mining Belt V", bg: "#141103", primary: "#ffd600", secondary: "#ff9100", accent: "#ff3d00", text: "#fffde7" },
  { id: 27, name: "Quantum Supercluster", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 28, name: "Plasma Shield Line Alpha", bg: "#14010e", primary: "#ff007f", secondary: "#d50000", accent: "#00f0ff", text: "#ffebee" },
  { id: 29, name: "Hyper-Relay Terminal", bg: "#021217", primary: "#18ffff", secondary: "#00b0ff", accent: "#76ff03", text: "#e0f7fa" },
  { id: 30, name: "Starlight Dreadnought Yard", bg: "#090614", primary: "#b388ff", secondary: "#7c4dff", accent: "#ffd600", text: "#ede7f6" },
  { id: 31, name: "Supernova Remnant M-1", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 32, name: "Sub-Atomic Slalom Gate", bg: "#01140e", primary: "#00e676", secondary: "#1de9b6", accent: "#00f0ff", text: "#e8f5e9" },
  { id: 33, name: "Geothermal Power Basin", bg: "#160902", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffd600", text: "#fff3e0" },
  { id: 34, name: "Dark Nebula Veil", bg: "#04020a", primary: "#7e57c2", secondary: "#4527a0", accent: "#ea80fc", text: "#ede7f6" },
  { id: 35, name: "Solar Wind Sail Station", bg: "#170c01", primary: "#ffd600", secondary: "#ffab00", accent: "#ff3d00", text: "#fff8e1" },
  { id: 36, name: "Cyber-Bunker Quarantine", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 37, name: "Vaporwave Orbital Arcade", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 38, name: "Titanium Asteroid Bastion", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 39, name: "Phosphor Command Bunker", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 40, name: "Krypton Atmospheric Station", bg: "#021714", primary: "#26a69a", secondary: "#00897b", accent: "#80cbc4", text: "#e0f2f1" },
  { id: 41, name: "Quantum Horizon Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 42, name: "Singularity Defense Ring", bg: "#030208", primary: "#3f51b5", secondary: "#1a237e", accent: "#ff1744", text: "#e8eaf6" },
  { id: 43, name: "Bioluminescent Biosphere", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 44, name: "Tesseract Command Core", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Galactic Apex Citadel", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];`;

// ----------------------------------------------------------------------------
// GAME 34: MICRO-COLONY AUTOMATON: BASE ARCHITECT
// ----------------------------------------------------------------------------
console.log('Building Game 34: micro-colony-automaton...');
const mcaDir = path.join(gamesDir, 'micro-colony-automaton');

const mcaHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Micro-Colony Automaton: Base Architect - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Colony World</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">Power Grid</div><div id="powerVal" class="hud-val" style="color:#ffd600;">+10 kW</div></div>
      <div class="hud-box"><div class="hud-lbl">Oxygen Level</div><div id="oxygenVal" class="hud-val" style="color:#00ffcc;">100%</div></div>
      <div class="hud-box"><div class="hud-lbl">Mineral Stock</div><div id="mineralVal" class="hud-val" style="color:#00f0ff;">150 M</div></div>
      <div class="hud-box"><div class="hud-lbl">Colonists</div><div id="popVal" class="hud-val" style="color:#39ff14;">0 / 25</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="build-bar">
      <button class="build-btn active" data-type="solar"><span class="b-name">SOLAR ARRAY</span><span class="b-cost">40 M | +15 kW</span></button>
      <button class="build-btn" data-type="dome"><span class="b-name">BIO-DOME</span><span class="b-cost">60 M | +5 Pop, -5 kW</span></button>
      <button class="build-btn" data-type="extractor"><span class="b-name">O2 SCRUBBER</span><span class="b-cost">50 M | +O2, -8 kW</span></button>
      <button class="build-btn" data-type="mine"><span class="b-name">MINING RIG</span><span class="b-cost">45 M | +10 M/s, -6 kW</span></button>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">WORLDS (1-45)</button>
      <button id="restartBtn" class="action-btn">REBUILD COLONY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT WORLD &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">MICRO-COLONY AUTOMATON</h1>
        <p id="overlayDesc">Establish resilient planetary outposts across 45 extraterrestrial worlds. Balance your power grid, maintain life-support oxygen, extract raw minerals, and grow your colonist population.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">BEGIN COLONIZATION INITIATIVE</button>
        <div class="controls-hint">Controls: Select structure type, click an empty terrain tile to construct. Reach the colonist population quota to complete each stage.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const mcaCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
html, body {
  width: 100%;
  height: 100%;
  background: #04020f;
  color: #e0f7fa;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  overflow: hidden;
}
#gameContainer {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.hud {
  position: absolute;
  top: 10px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  z-index: 10;
  pointer-events: none;
}
.hud-box {
  background: rgba(4, 2, 15, 0.85);
  border: 1px solid rgba(0, 240, 255, 0.3);
  padding: 6px 14px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  pointer-events: auto;
}
.hud-lbl {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #7986cb;
}
.hud-val {
  font-size: 15px;
  font-weight: 700;
  color: #00f0ff;
  margin-top: 2px;
}
.canvas-wrap {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
}
canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.build-bar {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.build-btn {
  background: rgba(4, 2, 15, 0.9);
  border: 1px solid rgba(0, 240, 255, 0.4);
  color: #e0f7fa;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.build-btn.active, .build-btn:hover {
  background: rgba(0, 240, 255, 0.25);
  border-color: #00f0ff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
}
.b-name {
  font-size: 11px;
  font-weight: 700;
  color: #00f0ff;
}
.b-cost {
  font-size: 9px;
  color: #ffd600;
  margin-top: 2px;
}
.controls-bar {
  position: absolute;
  bottom: 14px;
  right: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.action-btn {
  background: rgba(4, 2, 15, 0.85);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.action-btn:hover {
  background: #00f0ff;
  color: #04020f;
}
.next-btn {
  border-color: #39ff14;
  color: #39ff14;
}
.next-btn:hover {
  background: #39ff14;
  color: #04020f;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(10px);
}
.card {
  background: rgba(10, 8, 25, 0.95);
  border: 1px solid rgba(0, 240, 255, 0.4);
  padding: 24px;
  max-width: 520px;
  width: 90%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
}
.card h1 {
  font-size: 20px;
  color: #00f0ff;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.card p {
  font-size: 12px;
  color: #b0bec5;
  margin-bottom: 14px;
  line-height: 1.5;
}
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
  max-height: 180px;
  overflow-y: auto;
  margin-bottom: 16px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.lvl-btn {
  aspect-ratio: 1;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.3);
  color: #e0f7fa;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}
.lvl-btn:hover, .lvl-btn.active {
  background: #00f0ff;
  color: #04020f;
  transform: scale(1.08);
}
.play-btn {
  width: 100%;
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
}
.controls-hint {
  margin-top: 12px;
  font-size: 11px;
  color: #78909c;
}`;

const mcaAudio = `/**
 * Micro-Colony Automaton Web Audio API Engine
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  playBuild() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(550, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch(e) {}
  }
  playHarvest() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch(e) {}
  }
  playAlarm() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch(e) {}
  }
  playWin() {
    this.init();
    try {
      [330, 440, 554.37, 659.25, 880].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.1);
        osc.stop(this.ctx.currentTime + i * 0.1 + 0.25);
      });
    } catch(e) {}
  }
}
window.soundEngine = new SoundEngine();`;

const mcaGame = `/**
 * Micro-Colony Automaton: Base Architect - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const powerVal = document.getElementById('powerVal');
  const oxygenVal = document.getElementById('oxygenVal');
  const mineralVal = document.getElementById('mineralVal');
  const popVal = document.getElementById('popVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const buildBtns = document.querySelectorAll('.build-btn');

  let width = 0, height = 0;
  const cols = 12;
  const rows = 8;
  let cellSize = 50;
  let offsetX = 0;
  let offsetY = 0;

  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    cellSize = Math.min((width - 60) / cols, (height - 120) / rows);
    offsetX = (width - cols * cellSize) / 2;
    offsetY = (height - rows * cellSize) / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedBuildType = 'solar';
  let power = 20;
  let oxygen = 100;
  let minerals = 150;
  let population = 0;
  let targetPopulation = 25;
  let tickTimer = 0;
  let invulnerable = 0; // human speed fair defense

  const COSTS = {
    solar: 40,
    dome: 60,
    extractor: 50,
    mine: 45
  };

  let grid = [];
  let particles = [];
  let drones = [];

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentLevel ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        currentLevel = t.id;
        document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadLevel(currentLevel);
        overlay.style.display = 'none';
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    const theme = THEMES[(lvl - 1) % THEMES.length];
    targetPopulation = 20 + lvl * 2;
    minerals = 160 + lvl * 10;
    power = 20;
    oxygen = 100;
    population = 0;
    tickTimer = 0;
    grid = [];
    particles = [];
    drones = [];
    invulnerable = 60;

    // Build Empty Grid with natural mineral deposit nodes
    for (let r = 0; r < rows; r++) {
      grid[r] = [];
      for (let c = 0; c < cols; c++) {
        const isDeposit = Math.random() < 0.15;
        grid[r][c] = {
          type: isDeposit ? 'deposit' : 'empty',
          level: 1
        };
      }
    }

    // Place Initial Headquarters Dome
    const hqx = Math.floor(cols / 2);
    const hqy = Math.floor(rows / 2);
    grid[hqy][hqx] = { type: 'hq', level: 1 };
    population = 5;

    // Drones
    for (let i = 0; i < 3; i++) {
      drones.push({
        x: offsetX + hqx * cellSize + cellSize / 2,
        y: offsetY + hqy * cellSize + cellSize / 2,
        targetX: offsetX + hqx * cellSize + cellSize / 2,
        targetY: offsetY + hqy * cellSize + cellSize / 2,
        speed: 1.5
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    powerVal.textContent = '+20 kW';
    oxygenVal.textContent = '100%';
    oxygenVal.style.color = '#00ffcc';
    mineralVal.textContent = minerals + ' M';
    popVal.textContent = population + ' / ' + targetPopulation;
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function createExplosion(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 3 + 1;
      particles.push({
        x, y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 25,
        maxLife: 25,
        color
      });
    }
  }

  function buildStructure(c, r) {
    if (!isPlaying) return;
    const tile = grid[r][c];
    if (tile.type !== 'empty' && !(tile.type === 'deposit' && selectedBuildType === 'mine')) {
      return;
    }

    const cost = COSTS[selectedBuildType];
    if (minerals < cost) return;

    minerals -= cost;
    mineralVal.textContent = minerals + ' M';
    tile.type = selectedBuildType;
    if (window.soundEngine) window.soundEngine.playBuild();

    const tx = offsetX + c * cellSize + cellSize / 2;
    const ty = offsetY + r * cellSize + cellSize / 2;
    createExplosion(tx, ty, '#00f0ff', 12);

    updateStats();
  }

  function updateStats() {
    let powerGen = 20;
    let powerDrain = 0;
    let o2Rate = 0;
    let mineralRate = 2;
    let maxPop = 5;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const type = grid[r][c].type;
        if (type === 'solar') powerGen += 15;
        if (type === 'dome') { powerDrain += 5; maxPop += 6; }
        if (type === 'extractor') { powerDrain += 8; o2Rate += 2; }
        if (type === 'mine') { powerDrain += 6; mineralRate += 8; }
      }
    }

    const netPower = powerGen - powerDrain;
    powerVal.textContent = (netPower >= 0 ? '+' : '') + netPower + ' kW';
    powerVal.style.color = netPower >= 0 ? '#ffd600' : '#ff1744';

    if (population < maxPop && netPower >= 0 && oxygen > 30) {
      population = Math.min(maxPop, population + 1);
      popVal.textContent = population + ' / ' + targetPopulation;
    }

    // Check Victory
    if (population >= targetPopulation) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'COLONY MILESTONE ACHIEVED!';
      overlayDesc.textContent = 'Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + ') has established a thriving sustainable civilization!';
      startBtn.textContent = 'COLONIZE NEXT WORLD';
      overlay.style.display = 'flex';
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw Grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offsetX + c * cellSize;
        const y = offsetY + r * cellSize;
        const tile = grid[r][c];

        ctx.strokeStyle = theme.primary + '22';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cellSize, cellSize);

        // Tile Content
        if (tile.type === 'empty') {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
          ctx.fillRect(x + 1, y + 1, cellSize - 2, cellSize - 2);
        } else if (tile.type === 'deposit') {
          ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
          ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          ctx.fillStyle = '#00f0ff';
          ctx.font = '10px monospace';
          ctx.fillText('ORES', x + 8, y + cellSize / 2 + 3);
        } else if (tile.type === 'hq') {
          ctx.fillStyle = theme.primary;
          ctx.beginPath();
          ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize * 0.35, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#04020f';
          ctx.font = 'bold 9px monospace';
          ctx.fillText('HQ', x + cellSize / 2 - 6, y + cellSize / 2 + 3);
        } else if (tile.type === 'solar') {
          ctx.fillStyle = '#ffd600';
          ctx.fillRect(x + cellSize * 0.2, y + cellSize * 0.2, cellSize * 0.6, cellSize * 0.6);
          ctx.strokeStyle = '#04020f';
          ctx.lineWidth = 1;
          ctx.strokeRect(x + cellSize * 0.2, y + cellSize * 0.2, cellSize * 0.6, cellSize * 0.6);
        } else if (tile.type === 'dome') {
          ctx.fillStyle = 'rgba(57, 255, 20, 0.5)';
          ctx.beginPath();
          ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize * 0.35, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#39ff14';
          ctx.stroke();
        } else if (tile.type === 'extractor') {
          ctx.fillStyle = '#00ffcc';
          ctx.beginPath();
          ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize * 0.3, 0, Math.PI * 2);
          ctx.fill();
        } else if (tile.type === 'mine') {
          ctx.fillStyle = '#ff9100';
          ctx.fillRect(x + cellSize * 0.25, y + cellSize * 0.25, cellSize * 0.5, cellSize * 0.5);
        }
      }
    }

    if (!isPlaying) return;

    // Simulation Tick
    tickTimer++;
    if (tickTimer >= 60) {
      tickTimer = 0;

      // Minerals earned from mines
      let mineCount = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c].type === 'mine') mineCount++;
        }
      }
      minerals += 3 + mineCount * 8;
      mineralVal.textContent = minerals + ' M';

      updateStats();
    }

    // Drone flight logic
    drones.forEach(d => {
      const dx = d.targetX - d.x;
      const dy = d.targetY - d.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 4) {
        // Pick new random tile
        const rc = Math.floor(Math.random() * cols);
        const rr = Math.floor(Math.random() * rows);
        d.targetX = offsetX + rc * cellSize + cellSize / 2;
        d.targetY = offsetY + rr * cellSize + cellSize / 2;
      } else {
        d.x += (dx / dist) * d.speed;
        d.y += (dy / dist) * d.speed;
      }

      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(d.x, d.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  // Input Handling
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const c = Math.floor((mx - offsetX) / cellSize);
    const r = Math.floor((my - offsetY) / cellSize);
    if (c >= 0 && c < cols && r >= 0 && r < rows) {
      buildStructure(c, r);
    }
  });

  buildBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      buildBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedBuildType = btn.dataset.type;
    });
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (population >= targetPopulation) {
      currentLevel = (currentLevel % THEMES.length) + 1;
    }
    loadLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = (currentLevel % THEMES.length) + 1;
    loadLevel(currentLevel);
  });

  restartBtn.addEventListener('click', () => {
    loadLevel(currentLevel);
  });

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'COLONY WORLD ATLAS (1-45)';
    overlayDesc.textContent = 'Select target extraterrestrial biosphere:';
    startBtn.textContent = 'RESUME COLONIZATION';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(mcaDir, 'index.html'), mcaHtml);
writeFile(path.join(mcaDir, 'style.css'), mcaCss);
writeFile(path.join(mcaDir, 'audio.js'), mcaAudio);
writeFile(path.join(mcaDir, 'game.js'), mcaGame);

// ----------------------------------------------------------------------------
// GAME 35: HACKER NODE CONQUEST: SUBNET DOMINANCE
// ----------------------------------------------------------------------------
console.log('Building Game 35: hacker-node-conquest...');
const hncDir = path.join(gamesDir, 'hacker-node-conquest');

const hncHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Hacker Node Conquest: Subnet Dominance - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Subnet Graph</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">Player Packets</div><div id="playerVal" class="hud-val" style="color:#00f0ff;">50 BITS</div></div>
      <div class="hud-box"><div class="hud-lbl">Rival Packets</div><div id="enemyVal" class="hud-val" style="color:#ff1744;">50 BITS</div></div>
      <div class="hud-box"><div class="hud-lbl">Subnet Control</div><div id="controlVal" class="hud-val" style="color:#39ff14;">50% / 100%</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">NETWORKS (1-45)</button>
      <button id="restartBtn" class="action-btn">RESET INVASION</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SUBNET &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">HACKER NODE CONQUEST</h1>
        <p id="overlayDesc">Conquer network server nodes in real-time cyber graph warfare across 45 covert subnets. Drag from your nodes to launch high-speed packet streams and capture neutral and rival hosts.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE SUBNET INVASION</button>
        <div class="controls-hint">Controls: Click/drag from your blue nodes to any adjacent node to dispatch packet streams. Capture 100% of nodes to win.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const hncCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
html, body {
  width: 100%;
  height: 100%;
  background: #04020f;
  color: #e0f7fa;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  overflow: hidden;
}
#gameContainer {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.hud {
  position: absolute;
  top: 10px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  z-index: 10;
  pointer-events: none;
}
.hud-box {
  background: rgba(4, 2, 15, 0.85);
  border: 1px solid rgba(0, 240, 255, 0.3);
  padding: 6px 14px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  pointer-events: auto;
}
.hud-lbl {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #7986cb;
}
.hud-val {
  font-size: 15px;
  font-weight: 700;
  color: #00f0ff;
  margin-top: 2px;
}
.canvas-wrap {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
}
canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.controls-bar {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}
.action-btn {
  background: rgba(4, 2, 15, 0.85);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.action-btn:hover {
  background: #00f0ff;
  color: #04020f;
}
.next-btn {
  border-color: #39ff14;
  color: #39ff14;
}
.next-btn:hover {
  background: #39ff14;
  color: #04020f;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(10px);
}
.card {
  background: rgba(10, 8, 25, 0.95);
  border: 1px solid rgba(0, 240, 255, 0.4);
  padding: 24px;
  max-width: 520px;
  width: 90%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
}
.card h1 {
  font-size: 20px;
  color: #00f0ff;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.card p {
  font-size: 12px;
  color: #b0bec5;
  margin-bottom: 14px;
  line-height: 1.5;
}
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
  max-height: 180px;
  overflow-y: auto;
  margin-bottom: 16px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.lvl-btn {
  aspect-ratio: 1;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.3);
  color: #e0f7fa;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}
.lvl-btn:hover, .lvl-btn.active {
  background: #00f0ff;
  color: #04020f;
  transform: scale(1.08);
}
.play-btn {
  width: 100%;
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
}
.controls-hint {
  margin-top: 12px;
  font-size: 11px;
  color: #78909c;
}`;

const hncAudio = `/**
 * Hacker Node Conquest Web Audio API Engine
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  playDispatch() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(750, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch(e) {}
  }
  playCapture() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(900, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch(e) {}
  }
  playWin() {
    this.init();
    try {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.1);
        osc.stop(this.ctx.currentTime + i * 0.1 + 0.25);
      });
    } catch(e) {}
  }
}
window.soundEngine = new SoundEngine();`;

const hncGame = `/**
 * Hacker Node Conquest: Subnet Dominance - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const playerVal = document.getElementById('playerVal');
  const enemyVal = document.getElementById('enemyVal');
  const controlVal = document.getElementById('controlVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedNode = null;
  let dragTarget = null;
  let aiTimer = 0;
  let tickTimer = 0;
  let invulnerable = 0; // human speed fair defense

  let nodes = [];
  let packets = [];
  let particles = [];

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentLevel ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        currentLevel = t.id;
        document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadLevel(currentLevel);
        overlay.style.display = 'none';
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    const theme = THEMES[(lvl - 1) % THEMES.length];
    selectedNode = null;
    dragTarget = null;
    packets = [];
    particles = [];
    nodes = [];
    invulnerable = 60;

    const nodeCount = 6 + Math.min(6, Math.floor(lvl / 8));
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.38;

    // Player Root Node
    nodes.push({
      id: 0,
      x: cx - radius * 0.8,
      y: cy,
      r: 28,
      owner: 'player',
      count: 40,
      maxCount: 100,
      color: '#00f0ff'
    });

    // Enemy Root Node
    nodes.push({
      id: 1,
      x: cx + radius * 0.8,
      y: cy,
      r: 28,
      owner: 'enemy',
      count: 35 + lvl,
      maxCount: 100,
      color: '#ff1744'
    });

    // Neutral Nodes
    for (let i = 2; i < nodeCount; i++) {
      const ang = ((i - 2) / (nodeCount - 2)) * Math.PI * 2 + Math.PI / 4;
      const dist = radius * (0.45 + (i % 3) * 0.2);
      nodes.push({
        id: i,
        x: cx + Math.cos(ang) * dist,
        y: cy + Math.sin(ang) * dist,
        r: 20 + (i % 3) * 4,
        owner: 'neutral',
        count: 10 + (i % 4) * 5,
        maxCount: 60,
        color: '#78909c'
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    nextBtn.style.display = 'none';
    isPlaying = true;
    updateHUD();
  }

  function sendPackets(fromNode, toNode) {
    if (fromNode === toNode || fromNode.count <= 1) return;
    const amount = Math.floor(fromNode.count * 0.5);
    fromNode.count -= amount;

    if (window.soundEngine) window.soundEngine.playDispatch();

    for (let i = 0; i < amount; i++) {
      packets.push({
        x: fromNode.x,
        y: fromNode.y,
        target: toNode,
        owner: fromNode.owner,
        color: fromNode.owner === 'player' ? '#00f0ff' : '#ff1744',
        speed: 3.5 + Math.random() * 0.8,
        delay: i * 4
      });
    }
  }

  function updateHUD() {
    let pBits = 0, eBits = 0, pNodes = 0, total = nodes.length;
    nodes.forEach(n => {
      if (n.owner === 'player') { pBits += n.count; pNodes++; }
      else if (n.owner === 'enemy') { eBits += n.count; }
    });
    playerVal.textContent = pBits + ' BITS';
    enemyVal.textContent = eBits + ' BITS';
    const pct = Math.round((pNodes / total) * 100);
    controlVal.textContent = pct + '% / 100%';
    controlVal.style.color = pct > 50 ? '#39ff14' : '#ff1744';

    // Check Victory / Defeat
    if (pNodes === total && total > 0) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'SUBNET CONQUERED!';
      overlayDesc.textContent = '100% network capture verified in Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + ').';
      startBtn.textContent = 'COMMENCE NEXT INVASION';
      overlay.style.display = 'flex';
    } else if (pNodes === 0 && total > 0) {
      isPlaying = false;
      overlayTitle.textContent = 'NETWORK PURGED';
      overlayDesc.textContent = 'Your cyber nodes were completely quarantined by the rival botnet. Recalibrate and retry.';
      startBtn.textContent = 'RETRY SUBNET ' + currentLevel;
      overlay.style.display = 'flex';
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Network Grid Links
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }

    // Drag Line
    if (selectedNode && dragTarget) {
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(selectedNode.x, selectedNode.y);
      ctx.lineTo(dragTarget.x, dragTarget.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw Nodes
    nodes.forEach(n => {
      // Glow
      const glow = ctx.createRadialGradient(n.x, n.y, n.r * 0.5, n.x, n.y, n.r * 1.5);
      glow.addColorStop(0, n.color + '44');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Node Body
      ctx.fillStyle = n.owner === 'player' ? '#00f0ff' : (n.owner === 'enemy' ? '#ff1744' : '#263238');
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = n === selectedNode ? '#ffd600' : '#ffffff';
      ctx.lineWidth = n === selectedNode ? 3 : 1.5;
      ctx.stroke();

      // Bit Count
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(Math.floor(n.count), n.x, n.y);
    });

    if (!isPlaying) return;

    // Simulation Tick: Nodes produce bits
    tickTimer++;
    if (tickTimer >= 40) {
      tickTimer = 0;
      nodes.forEach(n => {
        if (n.owner !== 'neutral' && n.count < n.maxCount) {
          n.count += 1;
        }
      });
      updateHUD();
    }

    // AI Botnet Logic
    aiTimer++;
    if (aiTimer >= 90) {
      aiTimer = 0;
      const enemyNodes = nodes.filter(n => n.owner === 'enemy' && n.count >= 15);
      if (enemyNodes.length > 0) {
        const source = enemyNodes[Math.floor(Math.random() * enemyNodes.length)];
        const nonEnemy = nodes.filter(n => n.owner !== 'enemy');
        if (nonEnemy.length > 0) {
          const target = nonEnemy[Math.floor(Math.random() * nonEnemy.length)];
          sendPackets(source, target);
        }
      }
    }

    // Update Packets
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      if (p.delay > 0) {
        p.delay--;
        continue;
      }
      const dx = p.target.x - p.x;
      const dy = p.target.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < p.target.r) {
        // Arrived at target
        packets.splice(i, 1);
        if (p.target.owner === p.owner) {
          p.target.count += 1;
        } else {
          p.target.count -= 1;
          if (p.target.count <= 0) {
            p.target.owner = p.owner;
            p.target.count = 2;
            p.target.color = p.owner === 'player' ? '#00f0ff' : '#ff1744';
            if (window.soundEngine) window.soundEngine.playCapture();
          }
        }
        updateHUD();
        continue;
      }

      p.x += (dx / dist) * p.speed;
      p.y += (dy / dist) * p.speed;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Input Handling
  canvas.addEventListener('mousedown', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const clicked = nodes.find(n => Math.hypot(n.x - mx, n.y - my) <= n.r);
    if (clicked && clicked.owner === 'player') {
      selectedNode = clicked;
      dragTarget = { x: mx, y: my };
    }
  });

  window.addEventListener('mousemove', e => {
    if (selectedNode) {
      const rect = canvas.getBoundingClientRect();
      dragTarget = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  });

  window.addEventListener('mouseup', e => {
    if (selectedNode) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const target = nodes.find(n => Math.hypot(n.x - mx, n.y - my) <= n.r);
      if (target && target !== selectedNode) {
        sendPackets(selectedNode, target);
      }
      selectedNode = null;
      dragTarget = null;
    }
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    const allPlayer = nodes.every(n => n.owner === 'player');
    if (allPlayer) {
      currentLevel = (currentLevel % THEMES.length) + 1;
    }
    loadLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = (currentLevel % THEMES.length) + 1;
    loadLevel(currentLevel);
  });

  restartBtn.addEventListener('click', () => {
    loadLevel(currentLevel);
  });

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'NETWORK SUBNET MAP (1-45)';
    overlayDesc.textContent = 'Select target node cluster topology:';
    startBtn.textContent = 'RESUME ATTACK';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(hncDir, 'index.html'), hncHtml);
writeFile(path.join(hncDir, 'style.css'), hncCss);
writeFile(path.join(hncDir, 'audio.js'), hncAudio);
writeFile(path.join(hncDir, 'game.js'), hncGame);

// ----------------------------------------------------------------------------
// GAME 36: CYBERPUNK MECH TACTICS: GRID SKIRMISH
// ----------------------------------------------------------------------------
console.log('Building Game 36: cyberpunk-mech-tactics...');
const cmtDir = path.join(gamesDir, 'cyberpunk-mech-tactics');

const cmtHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyberpunk Mech Tactics: Grid Skirmish - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Skirmish Sector</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">Squad Phase</div><div id="phaseVal" class="hud-val" style="color:#00f0ff;">PLAYER TURN</div></div>
      <div class="hud-box"><div class="hud-lbl">Action Points</div><div id="apVal" class="hud-val" style="color:#ffd600;">3 / 3 AP</div></div>
      <div class="hud-box"><div class="hud-lbl">Hostile Mechs</div><div id="enemyVal" class="hud-val" style="color:#ff1744;">3 REMAINING</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="orders-bar">
      <button class="order-btn active" data-action="move">MOVE MECH</button>
      <button class="order-btn" data-action="railgun">RAILGUN BLAST</button>
      <button class="order-btn" data-action="missile">MISSILE SALVO</button>
      <button id="endTurnBtn" class="action-btn end-turn-btn">END TURN &gt;</button>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">ZONES (1-45)</button>
      <button id="restartBtn" class="action-btn">RETRY SKIRMISH</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT ZONE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBERPUNK MECH TACTICS</h1>
        <p id="overlayDesc">Command a squad of three heavy combat mechs across 45 city battleground sectors. Deploy tactical AP to maneuver through destructible cover and eliminate hostile enemy walkers.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">DEPLOY MECH SQUADRON</button>
        <div class="controls-hint">Controls: Click a player mech to select, choose action, click destination tile or hostile target.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const cmtCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
html, body {
  width: 100%;
  height: 100%;
  background: #04020f;
  color: #e0f7fa;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  overflow: hidden;
}
#gameContainer {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.hud {
  position: absolute;
  top: 10px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  z-index: 10;
  pointer-events: none;
}
.hud-box {
  background: rgba(4, 2, 15, 0.85);
  border: 1px solid rgba(0, 240, 255, 0.3);
  padding: 6px 14px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  pointer-events: auto;
}
.hud-lbl {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #7986cb;
}
.hud-val {
  font-size: 15px;
  font-weight: 700;
  color: #00f0ff;
  margin-top: 2px;
}
.canvas-wrap {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
}
canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.orders-bar {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.order-btn {
  background: rgba(4, 2, 15, 0.9);
  border: 1px solid rgba(0, 240, 255, 0.4);
  color: #e0f7fa;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.order-btn.active, .order-btn:hover {
  background: rgba(0, 240, 255, 0.25);
  border-color: #00f0ff;
  color: #00f0ff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
}
.end-turn-btn {
  background: rgba(255, 23, 68, 0.2);
  border-color: #ff1744;
  color: #ff1744;
}
.end-turn-btn:hover {
  background: #ff1744;
  color: #fff;
}
.controls-bar {
  position: absolute;
  bottom: 14px;
  right: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.action-btn {
  background: rgba(4, 2, 15, 0.85);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.action-btn:hover {
  background: #00f0ff;
  color: #04020f;
}
.next-btn {
  border-color: #39ff14;
  color: #39ff14;
}
.next-btn:hover {
  background: #39ff14;
  color: #04020f;
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  backdrop-filter: blur(10px);
}
.card {
  background: rgba(10, 8, 25, 0.95);
  border: 1px solid rgba(0, 240, 255, 0.4);
  padding: 24px;
  max-width: 520px;
  width: 90%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.2);
}
.card h1 {
  font-size: 20px;
  color: #00f0ff;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.card p {
  font-size: 12px;
  color: #b0bec5;
  margin-bottom: 14px;
  line-height: 1.5;
}
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
  max-height: 180px;
  overflow-y: auto;
  margin-bottom: 16px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.lvl-btn {
  aspect-ratio: 1;
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid rgba(0, 240, 255, 0.3);
  color: #e0f7fa;
  font-size: 11px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}
.lvl-btn:hover, .lvl-btn.active {
  background: #00f0ff;
  color: #04020f;
  transform: scale(1.08);
}
.play-btn {
  width: 100%;
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
}
.controls-hint {
  margin-top: 12px;
  font-size: 11px;
  color: #78909c;
}`;

const cmtAudio = `/**
 * Cyberpunk Mech Tactics Web Audio API Engine
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  playStep() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(80, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch(e) {}
  }
  playBlast() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(280, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.22, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch(e) {}
  }
  playWin() {
    this.init();
    try {
      [440, 554.37, 659.25, 880].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.1 + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + i * 0.1);
        osc.stop(this.ctx.currentTime + i * 0.1 + 0.25);
      });
    } catch(e) {}
  }
}
window.soundEngine = new SoundEngine();`;

const cmtGame = `/**
 * Cyberpunk Mech Tactics: Grid Skirmish - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const phaseVal = document.getElementById('phaseVal');
  const apVal = document.getElementById('apVal');
  const enemyVal = document.getElementById('enemyVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const endTurnBtn = document.getElementById('endTurnBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const orderBtns = document.querySelectorAll('.order-btn');

  let width = 0, height = 0;
  const cols = 10;
  const rows = 7;
  let cellSize = 50;
  let offsetX = 0;
  let offsetY = 0;

  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    cellSize = Math.min((width - 60) / cols, (height - 120) / rows);
    offsetX = (width - cols * cellSize) / 2;
    offsetY = (height - rows * cellSize) / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let actionPoints = 3;
  let currentAction = 'move';
  let selectedMech = null;
  let isEnemyTurn = false;
  let invulnerable = 0; // human speed fair defense

  let playerMechs = [];
  let enemyMechs = [];
  let obstacles = [];
  let particles = [];

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentLevel ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        currentLevel = t.id;
        document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadLevel(currentLevel);
        overlay.style.display = 'none';
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    const theme = THEMES[(lvl - 1) % THEMES.length];
    actionPoints = 3;
    isEnemyTurn = false;
    particles = [];
    invulnerable = 60;

    // Obstacles / Cover
    obstacles = [];
    for (let i = 0; i < 6; i++) {
      const ox = 3 + Math.floor(Math.random() * 4);
      const oy = 1 + Math.floor(Math.random() * 5);
      if (!obstacles.some(o => o.gx === ox && o.gy === oy)) {
        obstacles.push({ gx: ox, gy: oy, hp: 40 });
      }
    }

    // 3 Player Mechs
    playerMechs = [
      { id: 1, name: 'Vanguard', gx: 1, gy: 3, hp: 120, maxHp: 120, dmg: 40, range: 2, color: '#00f0ff' },
      { id: 2, name: 'Recon Sniper', gx: 0, gy: 1, hp: 70, maxHp: 70, dmg: 35, range: 4, color: '#39ff14' },
      { id: 3, name: 'Assault Titan', gx: 0, gy: 5, hp: 100, maxHp: 100, dmg: 50, range: 2, color: '#ffd600' }
    ];

    // Enemy Mechs
    const enemyCount = 2 + Math.min(2, Math.floor(lvl / 15));
    enemyMechs = [];
    const ePos = [{ gx: 8, gy: 3 }, { gx: 9, gy: 1 }, { gx: 9, gy: 5 }, { gx: 8, gy: 2 }];
    for (let i = 0; i < enemyCount; i++) {
      const p = ePos[i];
      const hp = 70 + lvl * 3;
      enemyMechs.push({
        id: 10 + i,
        name: 'Marauder ' + (i + 1),
        gx: p.gx,
        gy: p.gy,
        hp: hp,
        maxHp: hp,
        dmg: 25 + Math.floor(lvl * 0.4),
        range: 3,
        color: '#ff1744'
      });
    }

    selectedMech = playerMechs[0];

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    phaseVal.textContent = 'PLAYER TURN';
    phaseVal.style.color = '#00f0ff';
    apVal.textContent = '3 / 3 AP';
    enemyVal.textContent = enemyMechs.length + ' REMAINING';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function createExplosion(x, y, color, count = 12) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 3.5 + 1;
      particles.push({
        x, y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 25,
        maxLife: 25,
        color
      });
    }
  }

  function executeEnemyTurn() {
    isEnemyTurn = true;
    phaseVal.textContent = 'ENEMY ENCOUNTER...';
    phaseVal.style.color = '#ff1744';

    setTimeout(() => {
      enemyMechs.forEach(em => {
        if (playerMechs.length === 0) return;
        // Check attack range
        let target = null;
        playerMechs.forEach(pm => {
          const d = Math.abs(pm.gx - em.gx) + Math.abs(pm.gy - em.gy);
          if (d <= em.range) target = pm;
        });

        if (target) {
          if (window.soundEngine) window.soundEngine.playBlast();
          target.hp = Math.max(0, target.hp - em.dmg);
          const px = offsetX + target.gx * cellSize + cellSize / 2;
          const py = offsetY + target.gy * cellSize + cellSize / 2;
          createExplosion(px, py, '#00f0ff', 10);
        } else {
          // Advance towards closest player mech
          let closest = playerMechs[0];
          let minDist = 99;
          playerMechs.forEach(pm => {
            const d = Math.abs(pm.gx - em.gx) + Math.abs(pm.gy - em.gy);
            if (d < minDist) { minDist = d; closest = pm; }
          });
          const dx = Math.sign(closest.gx - em.gx);
          const dy = Math.sign(closest.gy - em.gy);
          const tgx = em.gx + dx;
          const tgy = em.gy + dy;
          if (!isBlocked(tgx, tgy) && tgx >= 0 && tgx < cols && tgy >= 0 && tgy < rows) {
            em.gx = tgx;
            em.gy = tgy;
          }
        }
      });

      playerMechs = playerMechs.filter(m => m.hp > 0);
      if (playerMechs.length === 0) {
        isPlaying = false;
        overlayTitle.textContent = 'SQUADRON WIPED OUT';
        overlayDesc.textContent = 'All player combat mechs were destroyed in Sector ' + currentLevel + '. Reinforce chassis armor and retry.';
        startBtn.textContent = 'RETRY SECTOR ' + currentLevel;
        overlay.style.display = 'flex';
        return;
      }

      if (!playerMechs.includes(selectedMech)) selectedMech = playerMechs[0];

      isEnemyTurn = false;
      actionPoints = 3;
      phaseVal.textContent = 'PLAYER TURN';
      phaseVal.style.color = '#00f0ff';
      apVal.textContent = '3 / 3 AP';
    }, 850);
  }

  function isBlocked(gx, gy) {
    return playerMechs.some(m => m.gx === gx && m.gy === gy) ||
           enemyMechs.some(m => m.gx === gx && m.gy === gy) ||
           obstacles.some(o => o.gx === gx && o.gy === gy);
  }

  function handleTileClick(gx, gy) {
    if (!isPlaying || isEnemyTurn) return;

    // Check click player mech
    const pm = playerMechs.find(m => m.gx === gx && m.gy === gy);
    if (pm) {
      selectedMech = pm;
      return;
    }

    if (!selectedMech || actionPoints <= 0) return;

    if (currentAction === 'move') {
      const d = Math.abs(gx - selectedMech.gx) + Math.abs(gy - selectedMech.gy);
      if (d === 1 && !isBlocked(gx, gy)) {
        selectedMech.gx = gx;
        selectedMech.gy = gy;
        actionPoints--;
        apVal.textContent = actionPoints + ' / 3 AP';
        if (window.soundEngine) window.soundEngine.playStep();
        if (actionPoints === 0) executeEnemyTurn();
      }
    } else {
      // Attack target
      const em = enemyMechs.find(m => m.gx === gx && m.gy === gy);
      if (em) {
        const d = Math.abs(em.gx - selectedMech.gx) + Math.abs(em.gy - selectedMech.gy);
        if (d <= selectedMech.range) {
          actionPoints--;
          apVal.textContent = actionPoints + ' / 3 AP';
          if (window.soundEngine) window.soundEngine.playBlast();
          em.hp = Math.max(0, em.hp - selectedMech.dmg);
          const ex = offsetX + em.gx * cellSize + cellSize / 2;
          const ey = offsetY + em.gy * cellSize + cellSize / 2;
          createExplosion(ex, ey, '#ff1744', 12);

          if (em.hp <= 0) {
            enemyMechs = enemyMechs.filter(m => m !== em);
            enemyVal.textContent = enemyMechs.length + ' REMAINING';

            if (enemyMechs.length === 0) {
              isPlaying = false;
              if (window.soundEngine) window.soundEngine.playWin();
              nextBtn.style.display = 'inline-block';
              overlayTitle.textContent = 'ZONE SECURED!';
              overlayDesc.textContent = 'Hostile mechs eliminated in Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + ').';
              startBtn.textContent = 'DEPLOY TO NEXT ZONE';
              overlay.style.display = 'flex';
              return;
            }
          }

          if (actionPoints === 0) executeEnemyTurn();
        }
      }
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw Grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offsetX + c * cellSize;
        const y = offsetY + r * cellSize;
        ctx.strokeStyle = theme.primary + '22';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cellSize, cellSize);

        // Highlight moves
        if (selectedMech && !isEnemyTurn) {
          const d = Math.abs(c - selectedMech.gx) + Math.abs(r - selectedMech.gy);
          if (currentAction === 'move' && d === 1 && !isBlocked(c, r)) {
            ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
            ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          } else if (currentAction !== 'move' && d <= selectedMech.range) {
            ctx.fillStyle = 'rgba(255, 23, 68, 0.1)';
            ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          }
        }
      }
    }

    // Draw Obstacles
    obstacles.forEach(o => {
      const ox = offsetX + o.gx * cellSize;
      const oy = offsetY + o.gy * cellSize;
      ctx.fillStyle = '#37474f';
      ctx.fillRect(ox + 4, oy + 4, cellSize - 8, cellSize - 8);
      ctx.strokeStyle = '#78909c';
      ctx.strokeRect(ox + 4, oy + 4, cellSize - 8, cellSize - 8);
    });

    // Draw Player Mechs
    playerMechs.forEach(m => {
      const mx = offsetX + m.gx * cellSize + cellSize / 2;
      const my = offsetY + m.gy * cellSize + cellSize / 2;

      if (m === selectedMech) {
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 2;
        ctx.strokeRect(mx - cellSize * 0.45, my - cellSize * 0.45, cellSize * 0.9, cellSize * 0.9);
      }

      ctx.fillStyle = m.color;
      ctx.fillRect(mx - cellSize * 0.3, my - cellSize * 0.3, cellSize * 0.6, cellSize * 0.6);

      // HP Bar
      const bw = cellSize * 0.7;
      const hpR = m.hp / m.maxHp;
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.fillRect(mx - bw / 2, my - cellSize * 0.45, bw, 3);
      ctx.fillStyle = '#00e676';
      ctx.fillRect(mx - bw / 2, my - cellSize * 0.45, bw * hpR, 3);
    });

    // Draw Enemy Mechs
    enemyMechs.forEach(m => {
      const mx = offsetX + m.gx * cellSize + cellSize / 2;
      const my = offsetY + m.gy * cellSize + cellSize / 2;

      ctx.fillStyle = m.color;
      ctx.fillRect(mx - cellSize * 0.3, my - cellSize * 0.3, cellSize * 0.6, cellSize * 0.6);

      // HP Bar
      const bw = cellSize * 0.7;
      const hpR = m.hp / m.maxHp;
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.fillRect(mx - bw / 2, my - cellSize * 0.45, bw, 3);
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(mx - bw / 2, my - cellSize * 0.45, bw * hpR, 3);
    });

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  // Input Handling
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const c = Math.floor((mx - offsetX) / cellSize);
    const r = Math.floor((my - offsetY) / cellSize);
    if (c >= 0 && c < cols && r >= 0 && r < rows) {
      handleTileClick(c, r);
    }
  });

  orderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      orderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAction = btn.dataset.action;
    });
  });

  endTurnBtn.addEventListener('click', () => {
    if (!isPlaying || isEnemyTurn) return;
    executeEnemyTurn();
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (enemyMechs.length === 0) {
      currentLevel = (currentLevel % THEMES.length) + 1;
    }
    loadLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = (currentLevel % THEMES.length) + 1;
    loadLevel(currentLevel);
  });

  restartBtn.addEventListener('click', () => {
    loadLevel(currentLevel);
  });

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'SKIRMISH WAR ZONES (1-45)';
    overlayDesc.textContent = 'Select urban combat deployment sector:';
    startBtn.textContent = 'RESUME SKIRMISH';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(cmtDir, 'index.html'), cmtHtml);
writeFile(path.join(cmtDir, 'style.css'), cmtCss);
writeFile(path.join(cmtDir, 'audio.js'), cmtAudio);
writeFile(path.join(cmtDir, 'game.js'), cmtGame);

// Verify local assets/icon.svg
const copyIcon = (fromGame, toGame) => {
  const src = path.join(gamesDir, fromGame, 'assets', 'icon.svg');
  const dst = path.join(gamesDir, toGame, 'assets', 'icon.svg');
  if (fs.existsSync(src)) {
    const content = fs.readFileSync(src, 'utf-8');
    writeFile(dst, content);
  } else {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#04020f" stroke="#00f0ff" stroke-width="4"/><polygon points="50,20 80,75 20,75" fill="#ff007f"/></svg>`;
    writeFile(dst, svg);
  }
};

copyIcon('orbital-defense', 'micro-colony-automaton');
copyIcon('orbital-defense', 'hacker-node-conquest');
copyIcon('orbital-defense', 'cyberpunk-mech-tactics');

console.log('Part 2 Complete: micro-colony-automaton, hacker-node-conquest, cyberpunk-mech-tactics.');
