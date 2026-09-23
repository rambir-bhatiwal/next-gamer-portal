/**
 * Next Games/Game — Platformer Category Part 3:
 * - jetpack-salvager (Game 47)
 * - pulse-runner (Game 48)
 * - hologram-glitcher (Game 49)
 * - robo-escape-9 (Game 50)
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');
const thumbsDir = path.join(rootDir, 'assets', 'thumbnails');

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

function copyThumbnailToIcon(gameId) {
  const thumbPath = path.join(thumbsDir, `${gameId}.svg`);
  const iconPath = path.join(gamesDir, gameId, 'assets', 'icon.svg');
  if (fs.existsSync(thumbPath)) {
    const content = fs.readFileSync(thumbPath, 'utf-8');
    writeFile(iconPath, content);
  } else {
    const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#04020f" stroke="#00f0ff" stroke-width="4"/><polygon points="50,20 80,75 20,75" fill="#ff007f"/></svg>`;
    writeFile(iconPath, fallback);
  }
}

const PLATFORMER_THEMES_CODE = `const THEMES = [
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
  { id: 44, name: "Tesseract Hyperspace", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 45, name: "Quantum Singularity Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];`;

// ============================================================================
// GAME 47: JETPACK SALVAGER: ZERO-G CAVERN DASH
// ============================================================================
console.log('Building Game 47: jetpack-salvager...');
const jsDir = path.join(gamesDir, 'jetpack-salvager');

const jsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Jetpack Salvager: Zero-G Cavern Dash - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Derelict Sector</div><div id="themeVal" class="hud-val">Sector 1</div></div>
      <div class="hud-box"><div class="hud-lbl">Fuel Reserve</div><div id="fuelVal" class="hud-val">100%</div></div>
      <div class="hud-box"><div class="hud-lbl">Hull Integrity</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Salvage Quota</div><div id="salvageVal" class="hud-val" style="color:#ffd600;">0 / 4 CORES</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <button id="thrustLeftBtn" class="action-btn">THRUST LEFT [A]</button>
      <button id="thrustUpBtn" class="action-btn thrust-btn">MAIN THRUSTER [W/SPACE]</button>
      <button id="thrustRightBtn" class="action-btn">THRUST RIGHT [D]</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">JETPACK SALVAGER</h1>
        <p id="overlayDesc">Pilot a fuel-limited zero-g salvage explorer through treacherous metallic corridors across 45 sectors. Collect salvage cores, dodge hydraulic presses and laser hazards, and dock with the escape airlock!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE ZERO-G FLIGHT</button>
        <div class="controls-hint">Controls: [W/Up/Space] or Center Button to Fire Jetpack Thruster. [A/D or Left/Right] to steer. Land on landing pads to refuel!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const jsCss = `* {
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
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}
.action-btn {
  pointer-events: auto;
  padding: 10px 16px;
  background: rgba(10, 15, 30, 0.9);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-weight: 700;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.thrust-btn {
  background: #ff007f;
  color: #fff;
  border-color: #ff007f;
  flex: 1;
  max-width: 240px;
  box-shadow: 0 0 15px rgba(255, 0, 127, 0.4);
}
.next-btn {
  background: #39ff14;
  color: #04020f;
  border-color: #39ff14;
}
.action-btn:hover {
  filter: brightness(1.2);
  transform: translateY(-1px);
}
.action-btn:active {
  transform: translateY(1px);
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.92);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}
.card {
  background: rgba(15, 20, 40, 0.95);
  border: 2px solid #00f0ff;
  border-radius: 16px;
  padding: 24px;
  max-width: 580px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 35px rgba(0, 240, 255, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}
.card h1 {
  font-size: 26px;
  color: #00f0ff;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.card p {
  color: #b0bec5;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 16px;
}
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 6px;
  margin-bottom: 16px;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.3);
  color: #e0f7fa;
  padding: 8px 4px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.lvl-btn:hover {
  background: rgba(0, 240, 255, 0.3);
  border-color: #00f0ff;
}
.lvl-btn.active {
  background: #00f0ff;
  color: #04020f;
  border-color: #00f0ff;
}
.play-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
}
.controls-hint {
  font-size: 11px;
  color: #78909c;
  margin-top: 12px;
}`;

const jsAudio = `// Native Web Audio API procedural synthesis for Jetpack Salvager
class SoundFX {
  constructor() {
    this.ctx = null;
    this.thrusterNode = null;
    this.thrusterGain = null;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }
  startThruster() {
    this.init();
    if (this.thrusterNode) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.5;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      this.thrusterNode = this.ctx.createBufferSource();
      this.thrusterNode.buffer = buffer;
      this.thrusterNode.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 320;
      filter.Q.value = 3;

      this.thrusterGain = this.ctx.createGain();
      this.thrusterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

      this.thrusterNode.connect(filter);
      filter.connect(this.thrusterGain);
      this.thrusterGain.connect(this.ctx.destination);
      this.thrusterNode.start();
    } catch(e) {}
  }
  stopThruster() {
    if (this.thrusterGain && this.ctx) {
      try {
        this.thrusterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      } catch(e) {}
    }
    if (this.thrusterNode) {
      try { this.thrusterNode.stop(); } catch(e) {}
      this.thrusterNode = null;
    }
  }
  playPickup() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playRefuel() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.25);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch(e) {}
  }
  playHit() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.linearRampToValueAtTime(40, now + 0.25);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.25);
    } catch(e) {}
  }
  playClear() {
    this.init();
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.08;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.35);
      });
    } catch(e) {}
  }
}
window.soundFX = new SoundFX();
`;

const jsGame = `(() => {
  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const fuelVal = document.getElementById('fuelVal');
  const shieldVal = document.getElementById('shieldVal');
  const salvageVal = document.getElementById('salvageVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const thrustLeftBtn = document.getElementById('thrustLeftBtn');
  const thrustUpBtn = document.getElementById('thrustUpBtn');
  const thrustRightBtn = document.getElementById('thrustRightBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  // Player state
  const player = {
    x: 80,
    y: 400,
    vx: 0,
    vy: 0,
    radius: 14,
    fuel: 100,
    maxFuel: 100,
    shields: 3,
    invulnTimer: 0,
    salvageCores: 0,
    neededCores: 4,
    thrustingUp: false,
    thrustingLeft: false,
    thrustingRight: false
  };

  const GRAVITY = 0.12;
  const THRUST_POWER = 0.28;
  const LATERAL_THRUST = 0.22;
  const DRAG = 0.985;

  let walls = [];
  let landingPads = [];
  let salvageItems = [];
  let hazards = [];
  let exitAirlock = { x: 900, y: 100, radius: 24, active: false };
  let particles = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => {
        loadLevel(i);
        overlay.style.display = 'none';
        startGame();
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    player.x = 80;
    player.y = 420;
    player.vx = 0;
    player.vy = 0;
    player.fuel = 100;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace timer on spawn
    player.salvageCores = 0;
    player.neededCores = 3 + (lvl % 3);

    // Build cavern walls & platforms
    walls = [
      { x: 0, y: 0, w: 1200, h: 25 },
      { x: 0, y: 550, w: 1200, h: 50 },
      { x: 0, y: 0, w: 25, h: 600 },
      { x: 1175, y: 0, w: 25, h: 600 }
    ];

    // Procedural inner corridors based on level
    const seed = lvl * 17;
    for (let i = 1; i <= 5; i++) {
      const wx = 180 * i;
      const wy = (i % 2 === 1) ? 25 : 260 + (seed % 120);
      const wh = 250;
      walls.push({ x: wx, y: wy, w: 30, h: wh });
    }

    // Landing pads (safe refuel zones)
    landingPads = [
      { x: 60, y: 440, w: 80, h: 12 },
      { x: 520, y: 500, w: 90, h: 12 },
      { x: 860, y: 380, w: 80, h: 12 }
    ];

    // Salvage cores
    salvageItems = [];
    const coreSlots = [
      { x: 260, y: 120 },
      { x: 440, y: 480 },
      { x: 620, y: 160 },
      { x: 800, y: 480 },
      { x: 980, y: 160 }
    ];
    for (let i = 0; i < player.neededCores; i++) {
      const pos = coreSlots[i % coreSlots.length];
      salvageItems.push({ x: pos.x, y: pos.y + ((lvl * 23) % 80) - 40, collected: false, pulse: Math.random() * Math.PI });
    }

    // Hazards (hydraulic crushers or laser bars)
    hazards = [];
    for (let i = 1; i <= 3; i++) {
      hazards.push({
        x: 220 + i * 220,
        y: 80,
        w: 16,
        h: 60,
        speed: 1.5 + (lvl * 0.05),
        dir: 1,
        minY: 40,
        maxY: 260
      });
    }

    exitAirlock = {
      x: 1080,
      y: 120,
      radius: 28,
      active: false
    };

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    fuelVal.textContent = Math.max(0, Math.floor(player.fuel)) + '%';
    fuelVal.style.color = player.fuel > 25 ? '#00f0ff' : '#ff1744';
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    salvageVal.textContent = player.salvageCores + ' / ' + player.neededCores + ' CORES';
    if (player.salvageCores >= player.neededCores) {
      exitAirlock.active = true;
      salvageVal.textContent += ' [AIRLOCK OPEN]';
    }
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Key listeners
  const keys = {};
  window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'KeyW' || e.code === 'ArrowUp' || e.code === 'Space') {
      player.thrustingUp = true;
      window.soundFX.startThruster();
    }
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') player.thrustingLeft = true;
    if (e.code === 'KeyD' || e.code === 'ArrowRight') player.thrustingRight = true;
  });

  window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
    if (e.code === 'KeyW' || e.code === 'ArrowUp' || e.code === 'Space') {
      player.thrustingUp = false;
      window.soundFX.stopThruster();
    }
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') player.thrustingLeft = false;
    if (e.code === 'KeyD' || e.code === 'ArrowRight') player.thrustingRight = false;
  });

  // Touch & on-screen buttons
  thrustUpBtn.addEventListener('mousedown', () => { player.thrustingUp = true; window.soundFX.startThruster(); });
  thrustUpBtn.addEventListener('mouseup', () => { player.thrustingUp = false; window.soundFX.stopThruster(); });
  thrustUpBtn.addEventListener('touchstart', (e) => { e.preventDefault(); player.thrustingUp = true; window.soundFX.startThruster(); });
  thrustUpBtn.addEventListener('touchend', () => { player.thrustingUp = false; window.soundFX.stopThruster(); });

  thrustLeftBtn.addEventListener('mousedown', () => player.thrustingLeft = true);
  thrustLeftBtn.addEventListener('mouseup', () => player.thrustingLeft = false);
  thrustLeftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); player.thrustingLeft = true; });
  thrustLeftBtn.addEventListener('touchend', () => player.thrustingLeft = false);

  thrustRightBtn.addEventListener('mousedown', () => player.thrustingRight = true);
  thrustRightBtn.addEventListener('mouseup', () => player.thrustingRight = false);
  thrustRightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); player.thrustingRight = true; });
  thrustRightBtn.addEventListener('touchend', () => player.thrustingRight = false);

  startBtn.onclick = () => {
    overlay.style.display = 'none';
    loadLevel(currentLevel);
    startGame();
  };
  restartBtn.onclick = () => {
    loadLevel(currentLevel);
    startGame();
  };
  nextBtn.onclick = () => {
    loadLevel(currentLevel < 45 ? currentLevel + 1 : 1);
    startGame();
  };
  levelSelectBtn.onclick = () => {
    overlay.style.display = 'flex';
    isPlaying = false;
    window.soundFX.stopThruster();
  };

  function spawnParticles(x, y, color, count, speed = 3) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = Math.random() * speed;
      particles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.03 + Math.random() * 0.04,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Thrust mechanics
    if (player.thrustingUp && player.fuel > 0) {
      player.vy -= THRUST_POWER;
      player.fuel = Math.max(0, player.fuel - 0.14);
      spawnParticles(player.x, player.y + player.radius, activeTheme.primary, 2, 2);
    }
    if (player.thrustingLeft && player.fuel > 0) {
      player.vx -= LATERAL_THRUST;
      player.fuel = Math.max(0, player.fuel - 0.08);
      spawnParticles(player.x + player.radius, player.y, activeTheme.secondary, 1, 1.5);
    }
    if (player.thrustingRight && player.fuel > 0) {
      player.vx += LATERAL_THRUST;
      player.fuel = Math.max(0, player.fuel - 0.08);
      spawnParticles(player.x - player.radius, player.y, activeTheme.secondary, 1, 1.5);
    }

    // Apply gravity and drag
    player.vy += GRAVITY;
    player.vx *= DRAG;
    player.vy *= DRAG;

    player.x += player.vx;
    player.y += player.vy;

    // Check landing pads (refuel)
    let onPad = false;
    landingPads.forEach(pad => {
      if (player.x >= pad.x && player.x <= pad.x + pad.w &&
          player.y + player.radius >= pad.y && player.y + player.radius <= pad.y + pad.h + 8 &&
          player.vy >= 0 && Math.abs(player.vy) < 2) {
        player.y = pad.y - player.radius;
        player.vy = 0;
        player.vx *= 0.8;
        onPad = true;
        if (player.fuel < player.maxFuel) {
          player.fuel = Math.min(player.maxFuel, player.fuel + 0.5);
          if (Math.random() < 0.1) window.soundFX.playRefuel();
        }
      }
    });

    // Check Wall Collisions
    walls.forEach(w => {
      if (player.x + player.radius > w.x && player.x - player.radius < w.x + w.w &&
          player.y + player.radius > w.y && player.y - player.radius < w.y + w.h) {
        // Bounce back with slight damage if high speed
        const speed = Math.hypot(player.vx, player.vy);
        if (speed > 4.5 && player.invulnTimer <= 0) {
          player.shields--;
          player.invulnTimer = 60; // invulnerable grace period
          window.soundFX.playHit();
          spawnParticles(player.x, player.y, '#ff1744', 12, 4);
          if (player.shields <= 0) {
            isGameOver = true;
            overlayTitle.textContent = "HULL BREACHED";
            overlayDesc.textContent = "Your salvage explorer suffered fatal kinetic impact. Retry this sector!";
            overlay.style.display = 'flex';
          }
        }
        // Nudge out
        player.vx = -player.vx * 0.4;
        player.vy = -player.vy * 0.4;
        player.x += player.vx * 2;
        player.y += player.vy * 2;
      }
    });

    // Update hazards
    hazards.forEach(h => {
      h.y += h.speed * h.dir;
      if (h.y >= h.maxY || h.y <= h.minY) h.dir *= -1;

      // Hazard collision
      if (player.x + player.radius > h.x && player.x - player.radius < h.x + h.w &&
          player.y + player.radius > h.y && player.y - player.radius < h.y + h.h) {
        if (player.invulnTimer <= 0) {
          player.shields--;
          player.invulnTimer = 75; // invulnerable grace
          window.soundFX.playHit();
          spawnParticles(player.x, player.y, '#ff3d00', 15, 5);
          if (player.shields <= 0) {
            isGameOver = true;
            overlayTitle.textContent = "CRUSHED BY HAZARD";
            overlayDesc.textContent = "Hydraulic hazard crushed your ship hull. Keep clear of moving pistons!";
            overlay.style.display = 'flex';
          }
        }
      }
    });

    // Collect salvage
    salvageItems.forEach(item => {
      if (!item.collected) {
        item.pulse += 0.05;
        const dist = Math.hypot(player.x - item.x, player.y - item.y);
        if (dist < player.radius + 16) {
          item.collected = true;
          player.salvageCores++;
          window.soundFX.playPickup();
          spawnParticles(item.x, item.y, activeTheme.accent, 16, 4);
          updateHUD();
        }
      }
    });

    // Exit airlock check
    if (exitAirlock.active) {
      const exitDist = Math.hypot(player.x - exitAirlock.x, player.y - exitAirlock.y);
      if (exitDist < player.radius + exitAirlock.radius) {
        isVictory = true;
        window.soundFX.playClear();
        window.soundFX.stopThruster();
        overlayTitle.textContent = "SECTOR " + currentLevel + " SALVAGED!";
        overlayDesc.textContent = "All salvage cores secured and airlock docked successfully! Proceed to next sector.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }
    }

    // Update particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) particles.splice(i, 1);
    }

    updateHUD();
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Derelict grid background
    ctx.save();
    ctx.strokeStyle = activeTheme.primary + '18';
    ctx.lineWidth = 1;
    const gridStep = 40;
    for (let x = 0; x < canvas.width; x += gridStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridStep) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Scale cavern coordinates to fit screen
    const scaleX = canvas.width / 1200;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw walls
    ctx.fillStyle = '#0a0d18';
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 2;
    walls.forEach(w => {
      ctx.fillRect(w.x, w.y, w.w, w.h);
      ctx.strokeRect(w.x, w.y, w.w, w.h);
    });

    // Draw landing pads
    landingPads.forEach(pad => {
      ctx.fillStyle = '#1de9b6';
      ctx.fillRect(pad.x, pad.y, pad.w, pad.h);
      ctx.fillStyle = '#000';
      ctx.font = 'bold 8px monospace';
      ctx.fillText('REFUEL PAD', pad.x + 12, pad.y + 9);
    });

    // Draw hazards
    hazards.forEach(h => {
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(h.x, h.y, h.w, h.h);
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 2;
      ctx.strokeRect(h.x, h.y, h.w, h.h);
      // Warning stripes
      ctx.fillStyle = '#ffd600';
      ctx.fillRect(h.x + 3, h.y + 10, h.w - 6, 8);
    });

    // Draw salvage cores
    salvageItems.forEach(item => {
      if (!item.collected) {
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.pulse);
        ctx.fillStyle = activeTheme.accent;
        ctx.shadowColor = activeTheme.accent;
        ctx.shadowBlur = 12;
        ctx.fillRect(-10, -10, 20, 20);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeRect(-6, -6, 12, 12);
        ctx.restore();
      }
    });

    // Draw Exit Airlock
    ctx.save();
    ctx.translate(exitAirlock.x, exitAirlock.y);
    ctx.beginPath();
    ctx.arc(0, 0, exitAirlock.radius, 0, Math.PI * 2);
    ctx.fillStyle = exitAirlock.active ? '#39ff14' : '#555';
    ctx.shadowColor = exitAirlock.active ? '#39ff14' : '#000';
    ctx.shadowBlur = exitAirlock.active ? 20 : 0;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(exitAirlock.active ? 'DOCK' : 'LOCKED', 0, 4);
    ctx.restore();

    // Draw Particles
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw Player
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    // Jetpack body
    ctx.fillStyle = '#cfd8dc';
    ctx.beginPath();
    ctx.arc(0, -2, player.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Visor
    ctx.fillStyle = '#00f0ff';
    ctx.beginPath();
    ctx.arc(3, -4, 6, 0, Math.PI * 2);
    ctx.fill();

    // Thruster nozzles
    ctx.fillStyle = '#37474f';
    ctx.fillRect(-12, 6, 6, 8);
    ctx.fillRect(6, 6, 6, 8);

    // Thruster flame animation
    if (player.thrustingUp && player.fuel > 0) {
      ctx.fillStyle = '#ff9100';
      ctx.beginPath();
      ctx.moveTo(-12, 14);
      ctx.lineTo(-9, 22 + Math.random() * 8);
      ctx.lineTo(-6, 14);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(6, 14);
      ctx.lineTo(9, 22 + Math.random() * 8);
      ctx.lineTo(12, 14);
      ctx.fill();
    }

    // Shield aura
    if (player.shields > 1) {
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, player.radius + 6, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
    ctx.restore(); // scale
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  initLevelSelect();
  loadLevel(1);
  loop();
})();`;

writeFile(path.join(jsDir, 'index.html'), jsHtml);
writeFile(path.join(jsDir, 'style.css'), jsCss);
writeFile(path.join(jsDir, 'audio.js'), jsAudio);
writeFile(path.join(jsDir, 'game.js'), jsGame);
copyThumbnailToIcon('jetpack-salvager');

// ============================================================================
// GAME 48: PULSE RUNNER: PRECISION RHYTHM PLATFORMS
// ============================================================================
console.log('Building Game 48: pulse-runner...');
const prDir = path.join(gamesDir, 'pulse-runner');

const prHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Pulse Runner: Precision Rhythm Platforms - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Sound Track</div><div id="themeVal" class="hud-val">120BPM: Cyan City</div></div>
      <div class="hud-box"><div class="hud-lbl">Track Progress</div><div id="distVal" class="hud-val">0 / 1000m</div></div>
      <div class="hud-box"><div class="hud-lbl">Pulse Matrix</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Rhythm Combo</div><div id="comboVal" class="hud-val" style="color:#ffd600;">x1 COMBO</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">TRACKS (1-45)</button>
      <button id="jumpBtn" class="action-btn jump-btn">RHYTHM JUMP [SPACE/UP]</button>
      <button id="restartBtn" class="action-btn">RETRY TRACK</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT TRACK &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">PULSE RUNNER</h1>
        <p id="overlayDesc">Sprint along synth soundwaves across 45 musical platform courses. Jump, double jump, and hit rhythm gates to the beat to maintain your combo multiplier and conquer high BPM tracks!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">START RHYTHM RUN</button>
        <div class="controls-hint">Controls: Press [Space] or [Arrow Up] or Tap the Jump Button. Timing your jumps on beat yields PERFECT bonuses!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const prCss = `* {
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
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}
.action-btn {
  pointer-events: auto;
  padding: 10px 16px;
  background: rgba(10, 15, 30, 0.9);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-weight: 700;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.jump-btn {
  background: #ff007f;
  color: #fff;
  border-color: #ff007f;
  flex: 1;
  max-width: 280px;
  box-shadow: 0 0 15px rgba(255, 0, 127, 0.4);
}
.next-btn {
  background: #39ff14;
  color: #04020f;
  border-color: #39ff14;
}
.action-btn:hover {
  filter: brightness(1.2);
  transform: translateY(-1px);
}
.action-btn:active {
  transform: translateY(1px);
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.92);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}
.card {
  background: rgba(15, 20, 40, 0.95);
  border: 2px solid #00f0ff;
  border-radius: 16px;
  padding: 24px;
  max-width: 580px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 35px rgba(0, 240, 255, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}
.card h1 {
  font-size: 26px;
  color: #00f0ff;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.card p {
  color: #b0bec5;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 16px;
}
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 6px;
  margin-bottom: 16px;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.3);
  color: #e0f7fa;
  padding: 8px 4px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.lvl-btn:hover {
  background: rgba(0, 240, 255, 0.3);
  border-color: #00f0ff;
}
.lvl-btn.active {
  background: #00f0ff;
  color: #04020f;
  border-color: #00f0ff;
}
.play-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
}
.controls-hint {
  font-size: 11px;
  color: #78909c;
  margin-top: 12px;
}`;

const prAudio = `// Native Web Audio API procedural synthesis for Pulse Runner
class SoundFX {
  constructor() {
    this.ctx = null;
    this.beatInterval = null;
    this.bpm = 120;
    this.beatIndex = 0;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }
  setBPM(bpm) {
    this.bpm = bpm;
  }
  startBeatTrack() {
    this.init();
    this.stopBeatTrack();
    const intervalMs = (60 / this.bpm) * 1000;
    this.beatInterval = setInterval(() => {
      this.triggerBeat(this.beatIndex % 4 === 0);
      this.beatIndex++;
    }, intervalMs);
  }
  stopBeatTrack() {
    if (this.beatInterval) {
      clearInterval(this.beatInterval);
      this.beatInterval = null;
    }
  }
  triggerBeat(isDownbeat) {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = isDownbeat ? 'sine' : 'triangle';
      const freq = isDownbeat ? 130 : 220;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.12);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch(e) {}
  }
  playJump() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch(e) {}
  }
  playBeatBonus() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659, now);
      osc.frequency.exponentialRampToValueAtTime(1318, now + 0.2);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playHit() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(45, now + 0.2);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playClear() {
    this.init();
    try {
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.08;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.35);
      });
    } catch(e) {}
  }
}
window.soundFX = new SoundFX();
`;

const prGame = `(() => {
  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const distVal = document.getElementById('distVal');
  const shieldVal = document.getElementById('shieldVal');
  const comboVal = document.getElementById('comboVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const jumpBtn = document.getElementById('jumpBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  const player = {
    x: 100,
    y: 350,
    vy: 0,
    w: 26,
    h: 36,
    isGrounded: false,
    jumpCount: 0,
    maxJumps: 2,
    shields: 3,
    invulnTimer: 0,
    combo: 1,
    score: 0
  };

  const GRAVITY = 0.55;
  const JUMP_FORCE = -11.5;
  let bpm = 120;
  let courseDistance = 0;
  const TARGET_DISTANCE = 1000;
  let scrollSpeed = 4.2;

  let platforms = [];
  let obstacles = [];
  let rhythmRings = [];
  let floatingTexts = [];
  let eqBars = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    // Init audio visualizer bars
    eqBars = [];
    const count = 32;
    for (let i = 0; i < count; i++) {
      eqBars.push({ h: 10, targetH: 10 });
    }
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => {
        loadLevel(i);
        overlay.style.display = 'none';
        startGame();
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    bpm = 110 + Math.min(65, (lvl - 1) * 1.5);
    themeVal.textContent = Math.round(bpm) + 'BPM: ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    scrollSpeed = 3.8 + (lvl * 0.04);
    courseDistance = 0;

    player.x = 100;
    player.y = 350;
    player.vy = 0;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace timer on spawn
    player.combo = 1;
    player.score = 0;
    player.jumpCount = 0;

    // Build procedural track platforms
    platforms = [];
    obstacles = [];
    rhythmRings = [];
    floatingTexts = [];

    // Continuous starting runway
    platforms.push({ x: 0, y: 400, w: 800, h: 60 });

    // Procedurally seed platforms and rhythm gates up to target distance
    let currentX = 800;
    const seed = lvl * 31;
    while (currentX < 4500) {
      const gap = 120 + ((seed + currentX) % 130);
      const platW = 280 + ((seed * 3 + currentX) % 200);
      const platY = 320 + ((seed + currentX * 7) % 120);

      currentX += gap;
      platforms.push({ x: currentX, y: platY, w: platW, h: 60 });

      // Add rhythm ring on platform
      rhythmRings.push({
        x: currentX + platW * 0.4,
        y: platY - 45,
        radius: 18,
        collected: false
      });

      // Add obstacle (spike or laser gate)
      if (Math.random() > 0.35) {
        obstacles.push({
          x: currentX + platW * 0.75,
          y: platY - 24,
          w: 20,
          h: 24,
          type: 'spike'
        });
      }

      currentX += platW;
    }

    window.soundFX.setBPM(bpm);
    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    distVal.textContent = Math.min(TARGET_DISTANCE, Math.floor(courseDistance)) + ' / ' + TARGET_DISTANCE + 'm';
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    comboVal.textContent = 'x' + player.combo + ' COMBO (' + player.score + ' PTS)';
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
    window.soundFX.startBeatTrack();
  }

  function doJump() {
    if (!isPlaying || isGameOver || isVictory) return;
    if (player.isGrounded || player.jumpCount < player.maxJumps) {
      player.vy = JUMP_FORCE;
      player.isGrounded = false;
      player.jumpCount++;
      window.soundFX.playJump();
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
      e.preventDefault();
      doJump();
    }
  });

  jumpBtn.onclick = () => doJump();
  startBtn.onclick = () => {
    overlay.style.display = 'none';
    loadLevel(currentLevel);
    startGame();
  };
  restartBtn.onclick = () => {
    loadLevel(currentLevel);
    startGame();
  };
  nextBtn.onclick = () => {
    loadLevel(currentLevel < 45 ? currentLevel + 1 : 1);
    startGame();
  };
  levelSelectBtn.onclick = () => {
    overlay.style.display = 'flex';
    isPlaying = false;
    window.soundFX.stopBeatTrack();
  };

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Progress distance
    courseDistance += (scrollSpeed / 60) * 13;
    if (courseDistance >= TARGET_DISTANCE) {
      isVictory = true;
      window.soundFX.playClear();
      window.soundFX.stopBeatTrack();
      overlayTitle.textContent = "TRACK " + currentLevel + " MASTERED!";
      overlayDesc.textContent = "Flawless rhythm sprint across " + activeTheme.name + "! Final Score: " + player.score;
      nextBtn.style.display = 'inline-block';
      overlay.style.display = 'flex';
      return;
    }

    // Move world left
    platforms.forEach(p => p.x -= scrollSpeed);
    obstacles.forEach(o => o.x -= scrollSpeed);
    rhythmRings.forEach(r => r.x -= scrollSpeed);

    // Apply player physics
    player.vy += GRAVITY;
    player.y += player.vy;

    // Platform collision
    player.isGrounded = false;
    platforms.forEach(p => {
      if (player.x + player.w > p.x && player.x < p.x + p.w) {
        if (player.y + player.h >= p.y && player.y + player.h <= p.y + p.h + player.vy + 4 && player.vy >= 0) {
          player.y = p.y - player.h;
          player.vy = 0;
          player.isGrounded = true;
          player.jumpCount = 0;
        }
      }
    });

    // Pit fall check (buffer reset instead of instant loss)
    if (player.y > 600) {
      player.shields--;
      player.invulnTimer = 90; // invulnerable grace period
      window.soundFX.playHit();
      if (player.shields <= 0) {
        isGameOver = true;
        window.soundFX.stopBeatTrack();
        overlayTitle.textContent = "TRACK DESYNC";
        overlayDesc.textContent = "Fell into the sonic void. Practice the jump cadence and retry!";
        overlay.style.display = 'flex';
        return;
      } else {
        // Respawn on nearest platform
        const nextPlat = platforms.find(p => p.x + p.w > player.x) || platforms[0];
        player.y = nextPlat.y - player.h - 10;
        player.vy = 0;
        player.combo = 1;
      }
    }

    // Check Obstacles
    obstacles.forEach(obs => {
      if (player.x + player.w > obs.x && player.x < obs.x + obs.w &&
          player.y + player.h > obs.y && player.y < obs.y + obs.h) {
        if (player.invulnTimer <= 0) {
          player.shields--;
          player.invulnTimer = 75; // invulnerable grace
          player.combo = 1;
          window.soundFX.playHit();
          floatingTexts.push({ x: player.x, y: player.y - 20, text: "MISS!", color: "#ff1744", life: 1 });
          if (player.shields <= 0) {
            isGameOver = true;
            window.soundFX.stopBeatTrack();
            overlayTitle.textContent = "SYNTH MATRIX OVERLOAD";
            overlayDesc.textContent = "Struck acoustic spikes too many times. Retry the rhythm course!";
            overlay.style.display = 'flex';
          }
        }
      }
    });

    // Check Rhythm Rings
    rhythmRings.forEach(ring => {
      if (!ring.collected) {
        const rx = ring.x;
        const ry = ring.y;
        const dist = Math.hypot((player.x + player.w / 2) - rx, (player.y + player.h / 2) - ry);
        if (dist < ring.radius + 15) {
          ring.collected = true;
          player.combo++;
          player.score += 200 * player.combo;
          window.soundFX.playBeatBonus();
          floatingTexts.push({ x: rx, y: ry - 20, text: "PERFECT! x" + player.combo, color: activeTheme.accent, life: 1 });
        }
      }
    });

    // Update floating texts
    for (let i = floatingTexts.length - 1; i >= 0; i--) {
      const ft = floatingTexts[i];
      ft.y -= 1.2;
      ft.life -= 0.025;
      if (ft.life <= 0) floatingTexts.splice(i, 1);
    }

    // Update equalizer visualizer bars
    eqBars.forEach((bar, idx) => {
      if (Math.random() < 0.15) {
        bar.targetH = 20 + Math.random() * 120;
      }
      bar.h += (bar.targetH - bar.h) * 0.2;
    });

    updateHUD();
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render Procedural Sound Equalizer in Background
    ctx.save();
    const barW = canvas.width / eqBars.length;
    eqBars.forEach((bar, i) => {
      ctx.fillStyle = activeTheme.primary + '22';
      ctx.fillRect(i * barW + 2, canvas.height - bar.h - 80, barW - 4, bar.h);
      ctx.fillStyle = activeTheme.accent + '44';
      ctx.fillRect(i * barW + 2, canvas.height - bar.h - 84, barW - 4, 3);
    });
    ctx.restore();

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 550;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Platforms
    platforms.forEach(p => {
      ctx.fillStyle = '#0e1428';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = activeTheme.primary;
      ctx.lineWidth = 3;
      ctx.strokeRect(p.x, p.y, p.w, p.h);

      // Top neon neon line
      ctx.fillStyle = activeTheme.primary;
      ctx.shadowColor = activeTheme.primary;
      ctx.shadowBlur = 10;
      ctx.fillRect(p.x, p.y, p.w, 4);
      ctx.shadowBlur = 0;
    });

    // Draw Obstacles
    obstacles.forEach(o => {
      ctx.fillStyle = '#ff1744';
      ctx.beginPath();
      ctx.moveTo(o.x, o.y + o.h);
      ctx.lineTo(o.x + o.w / 2, o.y);
      ctx.lineTo(o.x + o.w, o.y + o.h);
      ctx.fill();
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw Rhythm Rings
    rhythmRings.forEach(r => {
      if (!r.collected) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = activeTheme.accent;
        ctx.lineWidth = 4;
        ctx.shadowColor = activeTheme.accent;
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        ctx.restore();
      }
    });

    // Draw Floating Texts
    floatingTexts.forEach(ft => {
      ctx.save();
      ctx.globalAlpha = ft.life;
      ctx.fillStyle = ft.color;
      ctx.font = 'bold 16px monospace';
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    });

    // Draw Player
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    // Runner body
    ctx.fillStyle = activeTheme.secondary;
    ctx.shadowColor = activeTheme.secondary;
    ctx.shadowBlur = 12;
    ctx.fillRect(0, 0, player.w, player.h);

    // Visor
    ctx.fillStyle = '#fff';
    ctx.fillRect(player.w - 10, 6, 8, 6);

    // Shield outline
    if (player.shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.strokeRect(-4, -4, player.w + 8, player.h + 8);
    }
    ctx.restore();

    ctx.restore(); // scale
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  initLevelSelect();
  loadLevel(1);
  loop();
})();`;

writeFile(path.join(prDir, 'index.html'), prHtml);
writeFile(path.join(prDir, 'style.css'), prCss);
writeFile(path.join(prDir, 'audio.js'), prAudio);
writeFile(path.join(prDir, 'game.js'), prGame);
copyThumbnailToIcon('pulse-runner');

// ============================================================================
// GAME 49: HOLOGRAM GLITCHER: REALITY SHIFTER
// ============================================================================
console.log('Building Game 49: hologram-glitcher...');
const hgDir = path.join(gamesDir, 'hologram-glitcher');

const hgHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Hologram Glitcher: Reality Shifter - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Reality Zone</div><div id="themeVal" class="hud-val">1: Cyan High-Tech</div></div>
      <div class="hud-box"><div class="hud-lbl">Active Layer</div><div id="layerVal" class="hud-val" style="color:#00f0ff;">LAYER ALPHA</div></div>
      <div class="hud-box"><div class="hud-lbl">Reality Anchor</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Quantum Shards</div><div id="shardsVal" class="hud-val" style="color:#ffd600;">0 / 3 SHARDS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">REALITIES (1-45)</button>
      <button id="leftBtn" class="action-btn">&lt; LEFT [A]</button>
      <button id="jumpBtn" class="action-btn jump-btn">JUMP [W]</button>
      <button id="rightBtn" class="action-btn">RIGHT [D] &gt;</button>
      <button id="shiftBtn" class="action-btn shift-btn">SHIFT REALITY [SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT REALITY &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">HOLOGRAM GLITCHER</h1>
        <p id="overlayDesc">Toggle between two alternate holographic reality layers (Layer Alpha & Layer Beta) across 45 spatial puzzle stages. Materialize solid platforms mid-air to reach quantum shards and unlock the spatial rift!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE REALITY GLITCH</button>
        <div class="controls-hint">Controls: [A/D or Left/Right] to move, [W/Up] to jump, [Space] to Glitch / Shift between Layer Alpha (Cyan) and Layer Beta (Amber/Magenta).</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const hgCss = `* {
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
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}
.action-btn {
  pointer-events: auto;
  padding: 10px 14px;
  background: rgba(10, 15, 30, 0.9);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-weight: 700;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.shift-btn {
  background: #ff007f;
  color: #fff;
  border-color: #ff007f;
  box-shadow: 0 0 15px rgba(255, 0, 127, 0.4);
}
.jump-btn {
  background: #00f0ff;
  color: #04020f;
  border-color: #00f0ff;
}
.next-btn {
  background: #39ff14;
  color: #04020f;
  border-color: #39ff14;
}
.action-btn:hover {
  filter: brightness(1.2);
  transform: translateY(-1px);
}
.action-btn:active {
  transform: translateY(1px);
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.92);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}
.card {
  background: rgba(15, 20, 40, 0.95);
  border: 2px solid #00f0ff;
  border-radius: 16px;
  padding: 24px;
  max-width: 580px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 35px rgba(0, 240, 255, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}
.card h1 {
  font-size: 26px;
  color: #00f0ff;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.card p {
  color: #b0bec5;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 16px;
}
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 6px;
  margin-bottom: 16px;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.3);
  color: #e0f7fa;
  padding: 8px 4px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.lvl-btn:hover {
  background: rgba(0, 240, 255, 0.3);
  border-color: #00f0ff;
}
.lvl-btn.active {
  background: #00f0ff;
  color: #04020f;
  border-color: #00f0ff;
}
.play-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
}
.controls-hint {
  font-size: 11px;
  color: #78909c;
  margin-top: 12px;
}`;

const hgAudio = `// Native Web Audio API procedural synthesis for Hologram Glitcher
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }
  playShift() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.18);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playJump() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch(e) {}
  }
  playShard() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659.25, now);
      osc.frequency.exponentialRampToValueAtTime(1318.5, now + 0.2);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch(e) {}
  }
  playHit() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(50, now + 0.2);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playClear() {
    this.init();
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.08;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.4);
      });
    } catch(e) {}
  }
}
window.soundFX = new SoundFX();
`;

const hgGame = `(() => {
  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const layerVal = document.getElementById('layerVal');
  const shieldVal = document.getElementById('shieldVal');
  const shardsVal = document.getElementById('shardsVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const leftBtn = document.getElementById('leftBtn');
  const jumpBtn = document.getElementById('jumpBtn');
  const rightBtn = document.getElementById('rightBtn');
  const shiftBtn = document.getElementById('shiftBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  // 'alpha' (cyan) or 'beta' (amber/magenta)
  let activeReality = 'alpha';

  const player = {
    x: 60,
    y: 400,
    vx: 0,
    vy: 0,
    w: 24,
    h: 36,
    isGrounded: false,
    shields: 3,
    invulnTimer: 0,
    shards: 0,
    neededShards: 3
  };

  const GRAVITY = 0.48;
  const MOVE_SPEED = 4.2;
  const JUMP_FORCE = -11.2;

  let platforms = [];
  let shards = [];
  let hazards = [];
  let exitPortal = { x: 920, y: 140, radius: 26, active: false };
  let glitchParticles = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => {
        loadLevel(i);
        overlay.style.display = 'none';
        startGame();
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    activeReality = 'alpha';
    player.x = 60;
    player.y = 420;
    player.vx = 0;
    player.vy = 0;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace timer on spawn
    player.shards = 0;
    player.neededShards = 3 + (lvl % 3);

    // Build stage platforms (both universal, alpha-only, and beta-only)
    platforms = [
      // Base floors
      { x: 0, y: 500, w: 200, h: 40, layer: 'universal' },
      { x: 800, y: 500, w: 250, h: 40, layer: 'universal' },
      // Alpha platforms
      { x: 220, y: 440, w: 120, h: 20, layer: 'alpha' },
      { x: 480, y: 340, w: 120, h: 20, layer: 'alpha' },
      { x: 740, y: 240, w: 120, h: 20, layer: 'alpha' },
      // Beta platforms
      { x: 350, y: 390, w: 120, h: 20, layer: 'beta' },
      { x: 610, y: 290, w: 120, h: 20, layer: 'beta' },
      { x: 860, y: 190, w: 140, h: 20, layer: 'beta' }
    ];

    // Procedural platforms per level
    const seed = lvl * 29;
    for (let i = 1; i <= 4; i++) {
      const px = 180 + i * 160;
      const py = 200 + ((seed + i * 50) % 180);
      platforms.push({
        x: px,
        y: py,
        w: 90,
        h: 18,
        layer: i % 2 === 0 ? 'alpha' : 'beta'
      });
    }

    // Shards scattered across realities
    shards = [];
    const shardSlots = [
      { x: 280, y: 400, layer: 'alpha' },
      { x: 410, y: 350, layer: 'beta' },
      { x: 540, y: 300, layer: 'alpha' },
      { x: 670, y: 250, layer: 'beta' },
      { x: 800, y: 200, layer: 'alpha' }
    ];
    for (let i = 0; i < player.neededShards; i++) {
      const slot = shardSlots[i % shardSlots.length];
      shards.push({
        x: slot.x,
        y: slot.y,
        layer: slot.layer,
        collected: false
      });
    }

    // Hazards
    hazards = [
      { x: 200, y: 520, w: 600, h: 20, layer: 'universal' } // pit of lasers
    ];

    exitPortal = {
      x: 930,
      y: 150,
      radius: 28,
      active: false
    };

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    layerVal.textContent = activeReality === 'alpha' ? 'LAYER ALPHA' : 'LAYER BETA';
    layerVal.style.color = activeReality === 'alpha' ? '#00f0ff' : '#ff007f';
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    shardsVal.textContent = player.shards + ' / ' + player.neededShards + ' SHARDS';
    if (player.shards >= player.neededShards) {
      exitPortal.active = true;
      shardsVal.textContent += ' [PORTAL OPEN]';
    }
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  function toggleReality() {
    if (!isPlaying || isGameOver || isVictory) return;
    activeReality = activeReality === 'alpha' ? 'beta' : 'alpha';
    window.soundFX.playShift();
    spawnGlitchBurst(player.x + player.w / 2, player.y + player.h / 2, activeReality === 'alpha' ? '#00f0ff' : '#ff007f');
    updateHUD();
  }

  function doJump() {
    if (!isPlaying || isGameOver || isVictory) return;
    if (player.isGrounded) {
      player.vy = JUMP_FORCE;
      player.isGrounded = false;
      window.soundFX.playJump();
    }
  }

  function spawnGlitchBurst(x, y, color) {
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 4;
      glitchParticles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.04 + Math.random() * 0.04,
        color
      });
    }
  }

  // Key listeners
  const keys = {};
  window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      e.preventDefault();
      toggleReality();
    }
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      e.preventDefault();
      doJump();
    }
  });

  window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
  });

  // Touch controls
  shiftBtn.onclick = () => toggleReality();
  jumpBtn.onclick = () => doJump();
  leftBtn.addEventListener('mousedown', () => keys['KeyA'] = true);
  leftBtn.addEventListener('mouseup', () => keys['KeyA'] = false);
  leftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); keys['KeyA'] = true; });
  leftBtn.addEventListener('touchend', () => keys['KeyA'] = false);

  rightBtn.addEventListener('mousedown', () => keys['KeyD'] = true);
  rightBtn.addEventListener('mouseup', () => keys['KeyD'] = false);
  rightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); keys['KeyD'] = true; });
  rightBtn.addEventListener('touchend', () => keys['KeyD'] = false);

  startBtn.onclick = () => {
    overlay.style.display = 'none';
    loadLevel(currentLevel);
    startGame();
  };
  restartBtn.onclick = () => {
    loadLevel(currentLevel);
    startGame();
  };
  nextBtn.onclick = () => {
    loadLevel(currentLevel < 45 ? currentLevel + 1 : 1);
    startGame();
  };
  levelSelectBtn.onclick = () => {
    overlay.style.display = 'flex';
    isPlaying = false;
  };

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Lateral movement
    player.vx = 0;
    if (keys['KeyA'] || keys['ArrowLeft']) player.vx = -MOVE_SPEED;
    if (keys['KeyD'] || keys['ArrowRight']) player.vx = MOVE_SPEED;

    player.x += player.vx;

    // Apply gravity
    player.vy += GRAVITY;
    player.y += player.vy;

    // Platform collisions (only solid if universal or matching activeReality)
    player.isGrounded = false;
    platforms.forEach(p => {
      const isSolid = (p.layer === 'universal' || p.layer === activeReality);
      if (isSolid) {
        if (player.x + player.w > p.x && player.x < p.x + p.w) {
          if (player.y + player.h >= p.y && player.y + player.h <= p.y + p.h + player.vy + 4 && player.vy >= 0) {
            player.y = p.y - player.h;
            player.vy = 0;
            player.isGrounded = true;
          }
        }
      }
    });

    // Check Pit / Hazards
    hazards.forEach(h => {
      const isActiveHazard = (h.layer === 'universal' || h.layer === activeReality);
      if (isActiveHazard) {
        if (player.x + player.w > h.x && player.x < h.x + h.w &&
            player.y + player.h > h.y && player.y < h.y + h.h) {
          if (player.invulnTimer <= 0) {
            player.shields--;
            player.invulnTimer = 75; // invulnerable grace period
            window.soundFX.playHit();
            spawnGlitchBurst(player.x, player.y, '#ff1744');
            if (player.shields <= 0) {
              isGameOver = true;
              overlayTitle.textContent = "REALITY ANCHOR COLLAPSE";
              overlayDesc.textContent = "Quantum destabilization in spatial rift. Shift realities to cross over hazards!";
              overlay.style.display = 'flex';
            } else {
              // Reset to stage spawn
              player.x = 60;
              player.y = 420;
              player.vx = 0;
              player.vy = 0;
            }
          }
        }
      }
    });

    // Fall below screen reset buffer
    if (player.y > 580) {
      if (player.invulnTimer <= 0) {
        player.shields--;
        player.invulnTimer = 80;
        window.soundFX.playHit();
        if (player.shields <= 0) {
          isGameOver = true;
          overlayTitle.textContent = "LOST TO THE VOID";
          overlayDesc.textContent = "You fell out of sync with all holographic realities. Retry stage!";
          overlay.style.display = 'flex';
        } else {
          player.x = 60;
          player.y = 420;
          player.vy = 0;
        }
      }
    }

    // Collect Shards
    shards.forEach(s => {
      if (!s.collected && (s.layer === 'universal' || s.layer === activeReality)) {
        const sx = s.x;
        const sy = s.y;
        const dist = Math.hypot((player.x + player.w / 2) - sx, (player.y + player.h / 2) - sy);
        if (dist < 24) {
          s.collected = true;
          player.shards++;
          window.soundFX.playShard();
          spawnGlitchBurst(sx, sy, activeReality === 'alpha' ? '#00f0ff' : '#ff007f');
          updateHUD();
        }
      }
    });

    // Exit portal
    if (exitPortal.active) {
      const portalDist = Math.hypot((player.x + player.w / 2) - exitPortal.x, (player.y + player.h / 2) - exitPortal.y);
      if (portalDist < exitPortal.radius + 15) {
        isVictory = true;
        window.soundFX.playClear();
        overlayTitle.textContent = "REALITY " + currentLevel + " STABILIZED!";
        overlayDesc.textContent = "All quantum shards collected and dimensional rift opened successfully! Advance to next reality.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }
    }

    // Update glitch particles
    for (let i = glitchParticles.length - 1; i >= 0; i--) {
      const p = glitchParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) glitchParticles.splice(i, 1);
    }
  }

  function render() {
    // Shifting reality background
    ctx.fillStyle = activeReality === 'alpha' ? activeTheme.bg : '#120214';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scanline & reality overlay grid
    ctx.save();
    ctx.strokeStyle = (activeReality === 'alpha' ? '#00f0ff' : '#ff007f') + '15';
    ctx.lineWidth = 1;
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Scale coordinates
    const scaleX = canvas.width / 1050;
    const scaleY = canvas.height / 560;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Platforms
    platforms.forEach(p => {
      const isCurrent = (p.layer === 'universal' || p.layer === activeReality);
      ctx.save();
      if (!isCurrent) {
        // Ethereal dashed ghost outline
        ctx.globalAlpha = 0.25;
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = p.layer === 'alpha' ? '#00f0ff' : '#ff007f';
        ctx.lineWidth = 2;
        ctx.strokeRect(p.x, p.y, p.w, p.h);
      } else {
        // Solid luminous platform
        ctx.fillStyle = p.layer === 'universal' ? '#1a2238' : (p.layer === 'alpha' ? '#041e2e' : '#2e0420');
        ctx.fillRect(p.x, p.y, p.w, p.h);
        ctx.strokeStyle = p.layer === 'universal' ? '#fff' : (p.layer === 'alpha' ? '#00f0ff' : '#ff007f');
        ctx.lineWidth = 2;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 8;
        ctx.strokeRect(p.x, p.y, p.w, p.h);
      }
      ctx.restore();
    });

    // Draw Hazards
    hazards.forEach(h => {
      ctx.save();
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(h.x, h.y, h.w, h.h);
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 2;
      ctx.strokeRect(h.x, h.y, h.w, h.h);
      ctx.restore();
    });

    // Draw Quantum Shards
    shards.forEach(s => {
      if (!s.collected) {
        ctx.save();
        const isCurrent = (s.layer === 'universal' || s.layer === activeReality);
        ctx.globalAlpha = isCurrent ? 1 : 0.25;
        ctx.translate(s.x, s.y);
        ctx.rotate(Date.now() * 0.002);
        ctx.fillStyle = s.layer === 'alpha' ? '#00f0ff' : '#ff007f';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = isCurrent ? 12 : 0;
        ctx.fillRect(-8, -8, 16, 16);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeRect(-5, -5, 10, 10);
        ctx.restore();
      }
    });

    // Draw Exit Portal
    ctx.save();
    ctx.translate(exitPortal.x, exitPortal.y);
    ctx.beginPath();
    ctx.arc(0, 0, exitPortal.radius, 0, Math.PI * 2);
    ctx.fillStyle = exitPortal.active ? '#39ff14' : '#444';
    ctx.shadowColor = exitPortal.active ? '#39ff14' : '#000';
    ctx.shadowBlur = exitPortal.active ? 25 : 0;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(exitPortal.active ? 'RIFT OPEN' : 'SEALED', 0, 3);
    ctx.restore();

    // Draw Glitch Particles
    glitchParticles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
      ctx.restore();
    });

    // Draw Player
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    ctx.fillStyle = activeReality === 'alpha' ? '#00f0ff' : '#ff007f';
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 12;
    ctx.fillRect(0, 0, player.w, player.h);

    // Holographic visor
    ctx.fillStyle = '#fff';
    ctx.fillRect(player.w - 8, 4, 6, 6);

    // Reality aura
    if (player.shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.strokeRect(-3, -3, player.w + 6, player.h + 6);
    }
    ctx.restore();

    ctx.restore(); // scale
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  initLevelSelect();
  loadLevel(1);
  loop();
})();`;

writeFile(path.join(hgDir, 'index.html'), hgHtml);
writeFile(path.join(hgDir, 'style.css'), hgCss);
writeFile(path.join(hgDir, 'audio.js'), hgAudio);
writeFile(path.join(hgDir, 'game.js'), hgGame);
copyThumbnailToIcon('hologram-glitcher');

// ============================================================================
// GAME 50: ROBO-ESCAPE 9: FACILITY INFILTRATOR
// ============================================================================
console.log('Building Game 50: robo-escape-9...');
const reDir = path.join(gamesDir, 'robo-escape-9');

const reHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Robo-Escape 9: Facility Infiltrator - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Security Sector</div><div id="themeVal" class="hud-val">Sector 1: Assembly Line</div></div>
      <div class="hud-box"><div class="hud-lbl">Alert Status</div><div id="alertVal" class="hud-val" style="color:#00ff88;">STEALTH</div></div>
      <div class="hud-box"><div class="hud-lbl">Chassis Integrity</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Terminals Hacked</div><div id="termVal" class="hud-val" style="color:#ffd600;">0 / 2 HACKED</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <button id="leftBtn" class="action-btn">&lt; LEFT [A]</button>
      <button id="crouchBtn" class="action-btn">CROUCH [S]</button>
      <button id="jumpBtn" class="action-btn jump-btn">JUMP/CLIMB [W]</button>
      <button id="rightBtn" class="action-btn">RIGHT [D] &gt;</button>
      <button id="hackBtn" class="action-btn hack-btn">HACK TERMINAL [E/SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">ROBO-ESCAPE 9</h1>
        <p id="overlayDesc">Guide rogue robot unit 9 escaping a high-security automated manufacturing complex across 45 sectors. Sneak beneath surveillance cones, hack security consoles, evade patrol drones, and reach the exit vent!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">START INFILTRATION</button>
        <div class="controls-hint">Controls: [A/D or Left/Right] to run, [W/Up] to jump or climb ladders, [S/Down] to crouch and hide behind crates, [E/Space] to hack security terminals.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const reCss = `* {
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
  bottom: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
}
.action-btn {
  pointer-events: auto;
  padding: 10px 14px;
  background: rgba(10, 15, 30, 0.9);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-weight: 700;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.hack-btn {
  background: #ff007f;
  color: #fff;
  border-color: #ff007f;
  box-shadow: 0 0 15px rgba(255, 0, 127, 0.4);
}
.jump-btn {
  background: #00f0ff;
  color: #04020f;
  border-color: #00f0ff;
}
.next-btn {
  background: #39ff14;
  color: #04020f;
  border-color: #39ff14;
}
.action-btn:hover {
  filter: brightness(1.2);
  transform: translateY(-1px);
}
.action-btn:active {
  transform: translateY(1px);
}
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 15, 0.92);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
}
.card {
  background: rgba(15, 20, 40, 0.95);
  border: 2px solid #00f0ff;
  border-radius: 16px;
  padding: 24px;
  max-width: 580px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 35px rgba(0, 240, 255, 0.3);
  max-height: 90vh;
  overflow-y: auto;
}
.card h1 {
  font-size: 26px;
  color: #00f0ff;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.card p {
  color: #b0bec5;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 16px;
}
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 6px;
  margin-bottom: 16px;
  max-height: 200px;
  overflow-y: auto;
  padding: 4px;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 240, 255, 0.3);
  color: #e0f7fa;
  padding: 8px 4px;
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.lvl-btn:hover {
  background: rgba(0, 240, 255, 0.3);
  border-color: #00f0ff;
}
.lvl-btn.active {
  background: #00f0ff;
  color: #04020f;
  border-color: #00f0ff;
}
.play-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #00f0ff, #ff007f);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
}
.controls-hint {
  font-size: 11px;
  color: #78909c;
  margin-top: 12px;
}`;

const reAudio = `// Native Web Audio API procedural synthesis for Robo-Escape 9
class SoundFX {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }
  playAlarm() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.15);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch(e) {}
  }
  playHack() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.18);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playHit() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.linearRampToValueAtTime(50, now + 0.2);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playClear() {
    this.init();
    try {
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.08;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.01, start + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.4);
      });
    } catch(e) {}
  }
}
window.soundFX = new SoundFX();
`;

const reGame = `(() => {
  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const alertVal = document.getElementById('alertVal');
  const shieldVal = document.getElementById('shieldVal');
  const termVal = document.getElementById('termVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const leftBtn = document.getElementById('leftBtn');
  const crouchBtn = document.getElementById('crouchBtn');
  const jumpBtn = document.getElementById('jumpBtn');
  const rightBtn = document.getElementById('rightBtn');
  const hackBtn = document.getElementById('hackBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  const player = {
    x: 60,
    y: 420,
    vx: 0,
    vy: 0,
    w: 22,
    h: 36,
    isCrouching: false,
    isGrounded: false,
    shields: 3,
    invulnTimer: 0,
    hackedTerminals: 0,
    neededTerminals: 2,
    alertTimer: 0
  };

  const GRAVITY = 0.48;
  const MOVE_SPEED = 3.6;
  const JUMP_FORCE = -10.8;

  let platforms = [];
  let crates = []; // crouching behind crates hides from cameras
  let cameras = []; // sweeping vision cones
  let drones = []; // patrol drones
  let terminals = []; // hack to disable exit lock
  let exitHatch = { x: 960, y: 140, radius: 26, unlocked: false };
  let particles = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => {
        loadLevel(i);
        overlay.style.display = 'none';
        startGame();
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    player.x = 60;
    player.y = 420;
    player.vx = 0;
    player.vy = 0;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace timer on spawn
    player.hackedTerminals = 0;
    player.neededTerminals = 2 + (lvl % 2);
    player.alertTimer = 0;

    // Build facility architecture
    platforms = [
      { x: 0, y: 480, w: 1100, h: 40 }, // ground floor
      { x: 200, y: 360, w: 220, h: 20 },
      { x: 480, y: 260, w: 220, h: 20 },
      { x: 760, y: 180, w: 260, h: 20 }
    ];

    // Crates for stealth cover
    crates = [
      { x: 260, y: 440, w: 35, h: 40 },
      { x: 540, y: 440, w: 40, h: 40 },
      { x: 320, y: 320, w: 30, h: 40 },
      { x: 600, y: 220, w: 35, h: 40 }
    ];

    // Security Cameras (sweeping angle)
    cameras = [
      { x: 300, y: 40, angle: 0, minAngle: -0.5, maxAngle: 0.5, dir: 1, speed: 0.01 + (lvl * 0.001) },
      { x: 600, y: 40, angle: 0, minAngle: -0.6, maxAngle: 0.6, dir: -1, speed: 0.012 + (lvl * 0.001) },
      { x: 900, y: 40, angle: 0, minAngle: -0.5, maxAngle: 0.5, dir: 1, speed: 0.015 }
    ];

    // Patrol Drones
    drones = [];
    for (let i = 1; i <= Math.min(3, 1 + Math.floor(lvl / 15)); i++) {
      drones.push({
        x: 350 + i * 200,
        y: 430 - i * 80,
        minX: 250 + i * 180,
        maxX: 500 + i * 180,
        speed: 1.8 + (lvl * 0.03),
        dir: 1
      });
    }

    // Terminals
    terminals = [
      { x: 380, y: 330, w: 22, h: 30, hacked: false },
      { x: 660, y: 230, w: 22, h: 30, hacked: false }
    ];
    if (player.neededTerminals > 2) {
      terminals.push({ x: 860, y: 150, w: 22, h: 30, hacked: false });
    }

    exitHatch = {
      x: 980,
      y: 140,
      radius: 26,
      unlocked: false
    };

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    if (player.alertTimer > 0) {
      alertVal.textContent = 'ALARM! DETECTED';
      alertVal.style.color = '#ff1744';
    } else {
      alertVal.textContent = player.isCrouching ? 'HIDDEN IN SHADOW' : 'STEALTH ACTIVE';
      alertVal.style.color = player.isCrouching ? '#ffd600' : '#00ff88';
    }
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    termVal.textContent = player.hackedTerminals + ' / ' + player.neededTerminals + ' HACKED';
    if (player.hackedTerminals >= player.neededTerminals) {
      exitHatch.unlocked = true;
      termVal.textContent += ' [EXIT OPEN]';
    }
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  function doHack() {
    if (!isPlaying || isGameOver || isVictory) return;
    terminals.forEach(t => {
      if (!t.hacked) {
        const dist = Math.hypot((player.x + player.w / 2) - (t.x + t.w / 2), (player.y + player.h / 2) - (t.y + t.h / 2));
        if (dist < 40) {
          t.hacked = true;
          player.hackedTerminals++;
          window.soundFX.playHack();
          spawnParticles(t.x + t.w / 2, t.y, '#39ff14', 16);
          updateHUD();
        }
      }
    });
  }

  function doJump() {
    if (!isPlaying || isGameOver || isVictory) return;
    if (player.isGrounded && !player.isCrouching) {
      player.vy = JUMP_FORCE;
      player.isGrounded = false;
    }
  }

  function spawnParticles(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 1 + Math.random() * 3;
      particles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.04,
        color
      });
    }
  }

  // Key listeners
  const keys = {};
  window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'KeyE' || e.code === 'Space') {
      e.preventDefault();
      doHack();
    }
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      e.preventDefault();
      doJump();
    }
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      player.isCrouching = true;
      player.h = 22;
    }
  });

  window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      player.isCrouching = false;
      player.h = 36;
    }
  });

  hackBtn.onclick = () => doHack();
  jumpBtn.onclick = () => doJump();
  crouchBtn.addEventListener('mousedown', () => { player.isCrouching = true; player.h = 22; });
  crouchBtn.addEventListener('mouseup', () => { player.isCrouching = false; player.h = 36; });
  crouchBtn.addEventListener('touchstart', (e) => { e.preventDefault(); player.isCrouching = true; player.h = 22; });
  crouchBtn.addEventListener('touchend', () => { player.isCrouching = false; player.h = 36; });

  leftBtn.addEventListener('mousedown', () => keys['KeyA'] = true);
  leftBtn.addEventListener('mouseup', () => keys['KeyA'] = false);
  leftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); keys['KeyA'] = true; });
  leftBtn.addEventListener('touchend', () => keys['KeyA'] = false);

  rightBtn.addEventListener('mousedown', () => keys['KeyD'] = true);
  rightBtn.addEventListener('mouseup', () => keys['KeyD'] = false);
  rightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); keys['KeyD'] = true; });
  rightBtn.addEventListener('touchend', () => keys['KeyD'] = false);

  startBtn.onclick = () => {
    overlay.style.display = 'none';
    loadLevel(currentLevel);
    startGame();
  };
  restartBtn.onclick = () => {
    loadLevel(currentLevel);
    startGame();
  };
  nextBtn.onclick = () => {
    loadLevel(currentLevel < 45 ? currentLevel + 1 : 1);
    startGame();
  };
  levelSelectBtn.onclick = () => {
    overlay.style.display = 'flex';
    isPlaying = false;
  };

  function isBehindCrate() {
    if (!player.isCrouching) return false;
    return crates.some(c => {
      return player.x + player.w >= c.x && player.x <= c.x + c.w &&
             player.y + player.h >= c.y;
    });
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;
    if (player.alertTimer > 0) player.alertTimer--;

    // Lateral movement
    player.vx = 0;
    const speed = player.isCrouching ? MOVE_SPEED * 0.55 : MOVE_SPEED;
    if (keys['KeyA'] || keys['ArrowLeft']) player.vx = -speed;
    if (keys['KeyD'] || keys['ArrowRight']) player.vx = speed;

    player.x += player.vx;

    // Apply gravity
    player.vy += GRAVITY;
    player.y += player.vy;

    // Platform collisions
    player.isGrounded = false;
    platforms.forEach(p => {
      if (player.x + player.w > p.x && player.x < p.x + p.w) {
        if (player.y + player.h >= p.y && player.y + player.h <= p.y + p.h + player.vy + 4 && player.vy >= 0) {
          player.y = p.y - player.h;
          player.vy = 0;
          player.isGrounded = true;
        }
      }
    });

    // Camera sweeping
    cameras.forEach(cam => {
      cam.angle += cam.speed * cam.dir;
      if (cam.angle >= cam.maxAngle || cam.angle <= cam.minAngle) cam.dir *= -1;

      // Detection cone check
      if (!isBehindCrate()) {
        const dx = (player.x + player.w / 2) - cam.x;
        const dy = (player.y + player.h / 2) - cam.y;
        const angleToPlayer = Math.atan2(dx, dy); // angle from vertical downward
        const diff = Math.abs(angleToPlayer - cam.angle);
        const dist = Math.hypot(dx, dy);

        if (diff < 0.28 && dist < 450) {
          if (player.alertTimer === 0) window.soundFX.playAlarm();
          player.alertTimer = 60;
        }
      }
    });

    // Patrol Drones
    drones.forEach(d => {
      d.x += d.speed * d.dir;
      if (d.x >= d.maxX || d.x <= d.minX) d.dir *= -1;

      // Drone collision
      const dist = Math.hypot((player.x + player.w / 2) - d.x, (player.y + player.h / 2) - d.y);
      if (dist < 28) {
        if (player.invulnTimer <= 0) {
          player.shields--;
          player.invulnTimer = 75; // invulnerable grace
          window.soundFX.playHit();
          spawnParticles(player.x, player.y, '#ff1744', 14);
          if (player.shields <= 0) {
            isGameOver = true;
            overlayTitle.textContent = "UNIT 9 NEUTRALIZED";
            overlayDesc.textContent = "Security drones terminated rogue escape attempt. Utilize shadows and retry!";
            overlay.style.display = 'flex';
          }
        }
      }
    });

    // Exit hatch
    if (exitHatch.unlocked) {
      const exitDist = Math.hypot((player.x + player.w / 2) - exitHatch.x, (player.y + player.h / 2) - exitHatch.y);
      if (exitDist < exitHatch.radius + 15) {
        isVictory = true;
        window.soundFX.playClear();
        overlayTitle.textContent = "SECTOR " + currentLevel + " INFILTRATED!";
        overlayDesc.textContent = "Security lockdown bypassed and exit ventilation reached! Advance to next sector.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }
    }

    // Update particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) particles.splice(i, 1);
    }

    updateHUD();
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Factory pipes & girder background
    ctx.save();
    ctx.strokeStyle = activeTheme.primary + '18';
    ctx.lineWidth = 2;
    for (let x = 60; x < canvas.width; x += 120) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    ctx.restore();

    // Scale coordinates
    const scaleX = canvas.width / 1100;
    const scaleY = canvas.height / 560;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Camera Vision Cones
    cameras.forEach(cam => {
      ctx.save();
      ctx.translate(cam.x, cam.y);
      ctx.rotate(cam.angle);

      // Light cone
      ctx.fillStyle = (player.alertTimer > 0) ? 'rgba(255, 23, 68, 0.25)' : 'rgba(255, 214, 0, 0.15)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-90, 420);
      ctx.lineTo(90, 420);
      ctx.closePath();
      ctx.fill();

      // Camera body
      ctx.fillStyle = '#455a64';
      ctx.fillRect(-10, -6, 20, 12);
      ctx.fillStyle = (player.alertTimer > 0) ? '#ff1744' : '#00e676';
      ctx.beginPath();
      ctx.arc(0, 4, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw Platforms
    platforms.forEach(p => {
      ctx.fillStyle = '#101626';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = activeTheme.primary;
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
    });

    // Draw Crates
    crates.forEach(c => {
      ctx.fillStyle = '#37474f';
      ctx.fillRect(c.x, c.y, c.w, c.h);
      ctx.strokeStyle = '#78909c';
      ctx.lineWidth = 2;
      ctx.strokeRect(c.x, c.y, c.w, c.h);
      // X pattern on crate
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(c.x + c.w, c.y + c.h);
      ctx.moveTo(c.x + c.w, c.y);
      ctx.lineTo(c.x, c.y + c.h);
      ctx.stroke();
    });

    // Draw Terminals
    terminals.forEach(t => {
      ctx.fillStyle = t.hacked ? '#1b5e20' : '#b71c1c';
      ctx.fillRect(t.x, t.y, t.w, t.h);
      ctx.strokeStyle = t.hacked ? '#39ff14' : '#ff1744';
      ctx.lineWidth = 2;
      ctx.strokeRect(t.x, t.y, t.w, t.h);
      // Screen glow
      ctx.fillStyle = t.hacked ? '#69f0ae' : '#ff8a80';
      ctx.fillRect(t.x + 3, t.y + 4, t.w - 6, 12);
    });

    // Draw Patrol Drones
    drones.forEach(d => {
      ctx.save();
      ctx.translate(d.x, d.y);
      ctx.fillStyle = '#ff1744';
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Drone rotors
      ctx.strokeStyle = '#ff9100';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-22, -10);
      ctx.lineTo(22, -10);
      ctx.stroke();
      ctx.restore();
    });

    // Draw Exit Hatch
    ctx.save();
    ctx.translate(exitHatch.x, exitHatch.y);
    ctx.beginPath();
    ctx.arc(0, 0, exitHatch.radius, 0, Math.PI * 2);
    ctx.fillStyle = exitHatch.unlocked ? '#39ff14' : '#37474f';
    ctx.shadowColor = exitHatch.unlocked ? '#39ff14' : '#000';
    ctx.shadowBlur = exitHatch.unlocked ? 25 : 0;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(exitHatch.unlocked ? 'VENT OPEN' : 'LOCKED', 0, 3);
    ctx.restore();

    // Draw Particles
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 3, 3);
      ctx.restore();
    });

    // Draw Robot Player (Unit 9)
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    ctx.fillStyle = '#90a4ae';
    ctx.fillRect(0, 0, player.w, player.h);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, player.w, player.h);

    // Robot eye/visor
    ctx.fillStyle = isBehindCrate() ? '#ffd600' : (player.alertTimer > 0 ? '#ff1744' : '#00f0ff');
    ctx.fillRect(player.w - 8, 4, 6, 6);

    // Shield aura
    if (player.shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.strokeRect(-3, -3, player.w + 6, player.h + 6);
    }
    ctx.restore();

    ctx.restore(); // scale
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  initLevelSelect();
  loadLevel(1);
  loop();
})();`;

writeFile(path.join(reDir, 'index.html'), reHtml);
writeFile(path.join(reDir, 'style.css'), reCss);
writeFile(path.join(reDir, 'audio.js'), reAudio);
writeFile(path.join(reDir, 'game.js'), reGame);
copyThumbnailToIcon('robo-escape-9');

console.log('Part 3 Complete: jetpack-salvager, pulse-runner, hologram-glitcher, robo-escape-9.');
