/**
 * Next Games/Game — Physics Category Part 2:
 * - plasma-ballistics (Game 54)
 * - quantum-billiards (Game 55)
 * - structural-bridge-engineer (Game 56)
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

const PHYSICS_THEMES_CODE = `const THEMES = [
  { id: 1, name: "CERN Particle Collider", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Tokamak Fusion Ring", bg: "#140402", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 3, name: "Quantum Graviton Well", bg: "#050114", primary: "#b388ff", secondary: "#7c4dff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 4, name: "Solar Core Chamber", bg: "#170a01", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 5, name: "Dark Matter Singularity", bg: "#020208", primary: "#7986cb", secondary: "#3f51b5", accent: "#ff4081", text: "#e8eaf6" },
  { id: 6, name: "Cryo-Superconductor Loop", bg: "#01121a", primary: "#80d8ff", secondary: "#00b0ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 7, name: "Antimatter Containment", bg: "#14010e", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 8, name: "Tachyon Accelerator Chute", bg: "#0d0217", primary: "#ea80fc", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 9, name: "Neutron Star Horizon", bg: "#0c0217", primary: "#e040fb", secondary: "#7c4dff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 10, name: "Magnetic Flux Matrix", bg: "#021609", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 11, name: "Helios Plasma Funnel", bg: "#170601", primary: "#ff6d00", secondary: "#ff9100", accent: "#ffd600", text: "#fff3e0" },
  { id: 12, name: "Laser Interferometer", bg: "#021217", primary: "#18ffff", secondary: "#00e5ff", accent: "#ff007f", text: "#e0f7fa" },
  { id: 13, name: "Higgs Boson Laboratory", bg: "#0b051c", primary: "#7c4dff", secondary: "#651fff", accent: "#ffd600", text: "#ede7f6" },
  { id: 14, name: "Radioactive Ion Trap", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 15, name: "Prismatic Waveform Basin", bg: "#011210", primary: "#1de9b6", secondary: "#00bfa5", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 16, name: "Relativistic Spacetime Grid", bg: "#081014", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 17, name: "Photon Resonance Vault", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 18, name: "Hadron Beam Siphon", bg: "#1c0206", primary: "#ff1744", secondary: "#f50057", accent: "#ff9100", text: "#ffebee" },
  { id: 19, name: "Zero-Point Energy Conduit", bg: "#03101c", primary: "#40c4ff", secondary: "#0091ea", accent: "#39ff14", text: "#e1f5fe" },
  { id: 20, name: "Stellar Wind Ionizer", bg: "#141103", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fffde7" },
  { id: 21, name: "Synchrotron Arc Ring", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 22, name: "Magnetic Mirror Trap", bg: "#011409", primary: "#00e676", secondary: "#1de9b6", accent: "#ff007f", text: "#e8f5e9" },
  { id: 23, name: "Pulsar Emission Cone", bg: "#070c0c", primary: "#64ffda", secondary: "#1de9b6", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 24, name: "Bose-Einstein Condensate", bg: "#01071c", primary: "#2979ff", secondary: "#2962ff", accent: "#00e5ff", text: "#e3f2fd" },
  { id: 25, name: "Quark-Gluon Plasma Vat", bg: "#1c0502", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffd600", text: "#fbe9e7" },
  { id: 26, name: "Casimir Cavity Chamber", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 27, name: "Superfluid Helium Basin", bg: "#02121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#69f0ae", text: "#e1f5fe" },
  { id: 28, name: "Titanium Shock Tunnel", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#ff1744", text: "#eceff1" },
  { id: 29, name: "Electrostatic Bell Jar", bg: "#0e031c", primary: "#d500f9", secondary: "#aa00ff", accent: "#ffd600", text: "#f3e5f5" },
  { id: 30, name: "Geothermal Kinetic Well", bg: "#170802", primary: "#ff6d00", secondary: "#ff3d00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 31, name: "Gravitational Lens Array", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ea80fc", text: "#e1f5fe" },
  { id: 32, name: "Ferrofluid Vortex Tank", bg: "#03140a", primary: "#00c853", secondary: "#64dd17", accent: "#00e5ff", text: "#e8f5e9" },
  { id: 33, name: "Wormhole Metric Anchor", bg: "#0b0217", primary: "#b388ff", secondary: "#7c4dff", accent: "#ff007f", text: "#ede7f6" },
  { id: 34, name: "Hypervelocity Rail Chute", bg: "#140a00", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffd600", text: "#fff8e1" },
  { id: 35, name: "Piezoelectric Spark Bay", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 36, name: "Aerogel Impact Buffer", bg: "#050d17", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ffea00", text: "#e1f5fe" },
  { id: 37, name: "Cavitation Bubble Array", bg: "#001014", primary: "#18ffff", secondary: "#00e5ff", accent: "#ff4081", text: "#e0f7fa" },
  { id: 38, name: "Magnetohydrodynamic Vent", bg: "#160501", primary: "#ff5722", secondary: "#e64a19", accent: "#ffeb3b", text: "#fbe9e7" },
  { id: 39, name: "Quantum Hall Edge State", bg: "#090217", primary: "#ea80fc", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 40, name: "Superradiant Scattering", bg: "#170c01", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 41, name: "Kerr Singularity Ring", bg: "#060312", primary: "#9c27b0", secondary: "#673ab7", accent: "#00e5ff", text: "#ede7f6" },
  { id: 42, name: "Dirac String Filament", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 43, name: "Hawking Flux Horizon", bg: "#030209", primary: "#5c6bc0", secondary: "#3949ab", accent: "#ff1744", text: "#e8eaf6" },
  { id: 44, name: "Quantum Chromodynamic Void", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 45, name: "Grand Unified Field Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];`;

// ============================================================================
// GAME 54: PLASMA BALLISTICS: LASER ARTILLERY
// ============================================================================
console.log('Building Game 54: plasma-ballistics...');
const pbDir = path.join(gamesDir, 'plasma-ballistics');

const pbHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Plasma Ballistics: Laser Artillery - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Battleground</div><div id="themeVal" class="hud-val">1: Martian Dunes</div></div>
      <div class="hud-box"><div class="hud-lbl">Wind Vector</div><div id="windVal" class="hud-val">0.0 M/S</div></div>
      <div class="hud-box"><div class="hud-lbl">Tank Armor</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Enemy Target</div><div id="enemyVal" class="hud-val" style="color:#ff1744;">100% ARMOR</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">ZONES (1-45)</button>
      <button id="aimUpBtn" class="action-btn">ELEVATE ^ [W]</button>
      <button id="aimDownBtn" class="action-btn">LOWER v [S]</button>
      <button id="powerDownBtn" class="action-btn">PWR - [A]</button>
      <button id="powerUpBtn" class="action-btn">PWR + [D]</button>
      <button id="fireBtn" class="action-btn fire-btn">FIRE CANNON [SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT ZONE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">PLASMA BALLISTICS</h1>
        <p id="overlayDesc">Command a plasma artillery tank on destructible 2D terrain across 45 combat stages. Adjust barrel elevation, firing power, and account for shifting atmospheric wind vectors to obliterate hostile tank squadrons!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">DEPLOY ARTILLERY</button>
        <div class="controls-hint">Controls: [W/S] to adjust barrel angle, [A/D] to adjust cannon power, [Space] to fire. Touch buttons supported.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const pbCss = `* {
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
  gap: 6px;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
  flex-wrap: wrap;
}
.action-btn {
  pointer-events: auto;
  padding: 8px 12px;
  background: rgba(10, 15, 30, 0.9);
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-weight: 700;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.fire-btn {
  background: #ff1744;
  color: #fff;
  border-color: #ff1744;
  padding: 8px 18px;
  font-weight: 800;
  box-shadow: 0 0 15px rgba(255, 23, 68, 0.4);
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

const pbAudio = `// Native Web Audio API procedural synthesis for Plasma Ballistics
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
  playCannon() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.25);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch(e) {}
  }
  playExplosion() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.45;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.linearRampToValueAtTime(40, now + 0.4);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.45, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.42);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
      noise.stop(now + 0.45);
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

const pbGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const windVal = document.getElementById('windVal');
  const shieldVal = document.getElementById('shieldVal');
  const enemyVal = document.getElementById('enemyVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const aimUpBtn = document.getElementById('aimUpBtn');
  const aimDownBtn = document.getElementById('aimDownBtn');
  const powerDownBtn = document.getElementById('powerDownBtn');
  const powerUpBtn = document.getElementById('powerUpBtn');
  const fireBtn = document.getElementById('fireBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let wind = 0; // -0.05 to +0.05 horizontal acceleration
  const GRAVITY = 0.24;

  // Player tank
  const player = {
    x: 140,
    y: 350,
    angle: -0.65, // radians
    power: 14,
    shields: 3,
    invulnTimer: 0
  };

  // Enemy tank
  const enemy = {
    x: 820,
    y: 350,
    angle: Math.PI + 0.65,
    power: 14,
    health: 100
  };

  let activeShell = null;
  let enemyTurnTimer = 0;
  let terrainHeights = [];
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

  function generateTerrain(lvl) {
    terrainHeights = new Array(1000);
    const baseHeight = 380;
    const seed = lvl * 23;
    for (let x = 0; x < 1000; x++) {
      const hill1 = Math.sin((x + seed) * 0.008) * 60;
      const hill2 = Math.cos((x * 2 + seed) * 0.015) * 35;
      terrainHeights[x] = baseHeight + hill1 + hill2;
    }
    // Level ground at player and enemy positions
    const pY = terrainHeights[player.x];
    for (let x = player.x - 30; x <= player.x + 30; x++) terrainHeights[x] = pY;
    const eY = terrainHeights[enemy.x];
    for (let x = enemy.x - 30; x <= enemy.x + 30; x++) terrainHeights[x] = eY;

    player.y = pY;
    enemy.y = eY;
  }

  function carveCrater(cx, cy, radius) {
    const minX = Math.max(0, Math.floor(cx - radius));
    const maxX = Math.min(999, Math.floor(cx + radius));
    for (let x = minX; x <= maxX; x++) {
      const dx = x - cx;
      const dy = Math.sqrt(Math.max(0, radius * radius - dx * dx));
      terrainHeights[x] = Math.max(terrainHeights[x], cy + dy);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    wind = (Math.sin(lvl * 11) * 0.04);
    player.x = 140;
    player.angle = -0.65;
    player.power = 14;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace period on spawn

    enemy.x = 820;
    enemy.health = 100;
    enemy.power = 13 + (lvl % 5);

    activeShell = null;
    enemyTurnTimer = 0;

    generateTerrain(lvl);
    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    windVal.textContent = (wind * 100).toFixed(1) + ' M/S ' + (wind >= 0 ? '>' : '<');
    windVal.style.color = wind >= 0 ? '#39ff14' : '#ff007f';
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    enemyVal.textContent = Math.max(0, enemy.health) + '% ARMOR';
    enemyVal.style.color = enemy.health > 40 ? '#ff1744' : '#ffd600';
  }

  function firePlayerShell() {
    if (activeShell || enemyTurnTimer > 0) return;
    const barrelLen = 32;
    const startX = player.x + Math.cos(player.angle) * barrelLen;
    const startY = player.y - 12 + Math.sin(player.angle) * barrelLen;

    activeShell = {
      x: startX,
      y: startY,
      vx: Math.cos(player.angle) * player.power,
      vy: Math.sin(player.angle) * player.power,
      isPlayer: true,
      radius: 5
    };
    window.soundFX.playCannon();
  }

  function fireEnemyShell() {
    const barrelLen = 32;
    const startX = enemy.x + Math.cos(enemy.angle) * barrelLen;
    const startY = enemy.y - 12 + Math.sin(enemy.angle) * barrelLen;

    // AI calculates trajectory
    const dx = player.x - enemy.x;
    const aimAngle = Math.PI - 0.75 + (Math.random() * 0.1 - 0.05);
    enemy.angle = aimAngle;
    const aiPower = 14 + (Math.random() * 2 - 1);

    activeShell = {
      x: startX,
      y: startY,
      vx: Math.cos(enemy.angle) * aiPower,
      vy: Math.sin(enemy.angle) * aiPower,
      isPlayer: false,
      radius: 5
    };
    window.soundFX.playCannon();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Key controls
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') player.angle = Math.max(-1.4, player.angle - 0.05);
    if (e.code === 'KeyS' || e.code === 'ArrowDown') player.angle = Math.min(-0.1, player.angle + 0.05);
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') player.power = Math.max(6, player.power - 0.5);
    if (e.code === 'KeyD' || e.code === 'ArrowRight') player.power = Math.min(22, player.power + 0.5);
    if (e.code === 'Space') {
      e.preventDefault();
      firePlayerShell();
    }
  });

  aimUpBtn.onclick = () => player.angle = Math.max(-1.4, player.angle - 0.05);
  aimDownBtn.onclick = () => player.angle = Math.min(-0.1, player.angle + 0.05);
  powerDownBtn.onclick = () => player.power = Math.max(6, player.power - 0.5);
  powerUpBtn.onclick = () => player.power = Math.min(22, player.power + 0.5);
  fireBtn.onclick = () => firePlayerShell();

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

  function spawnExplosion(x, y, color) {
    window.soundFX.playExplosion();
    carveCrater(x, y, 28);
    for (let i = 0; i < 24; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 6;
      particles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.035,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Update active artillery shell
    if (activeShell) {
      activeShell.vx += wind;
      activeShell.vy += GRAVITY;
      activeShell.x += activeShell.vx;
      activeShell.y += activeShell.vy;

      // Check Enemy Tank Hit
      if (activeShell.isPlayer) {
        const distToEnemy = Math.hypot(activeShell.x - enemy.x, activeShell.y - (enemy.y - 10));
        if (distToEnemy < 28) {
          enemy.health -= 50;
          spawnExplosion(activeShell.x, activeShell.y, '#ffd600');
          activeShell = null;
          updateHUD();

          if (enemy.health <= 0) {
            isVictory = true;
            window.soundFX.playClear();
            overlayTitle.textContent = "BATTLEGROUND " + currentLevel + " LIBERATED!";
            overlayDesc.textContent = "Hostile artillery battery pulverized! Advance to next combat sector.";
            nextBtn.style.display = 'inline-block';
            overlay.style.display = 'flex';
            return;
          }
          // Shift wind
          wind = (Math.random() * 0.08 - 0.04);
          enemyTurnTimer = 60;
          return;
        }
      } else {
        // Enemy Shell check Player Hit
        const distToPlayer = Math.hypot(activeShell.x - player.x, activeShell.y - (player.y - 10));
        if (distToPlayer < 28) {
          if (player.invulnTimer <= 0) {
            player.shields--;
            player.invulnTimer = 60; // invulnerable grace period
            updateHUD();
            if (player.shields <= 0) {
              isGameOver = true;
              overlayTitle.textContent = "TANK DESTROYED";
              overlayDesc.textContent = "Enemy counter-battery fire pierced your hull armor. Calibrate your trajectory and retry!";
              overlay.style.display = 'flex';
            }
          }
          spawnExplosion(activeShell.x, activeShell.y, '#ff1744');
          activeShell = null;
          wind = (Math.random() * 0.08 - 0.04);
          return;
        }
      }

      // Check Terrain Hit
      const curX = Math.floor(activeShell.x);
      if (curX >= 0 && curX < 1000) {
        if (activeShell.y >= terrainHeights[curX]) {
          spawnExplosion(activeShell.x, activeShell.y, activeTheme.accent);
          const wasPlayer = activeShell.isPlayer;
          activeShell = null;
          if (wasPlayer) {
            enemyTurnTimer = 60;
          }
        }
      } else if (activeShell.y > 600) {
        activeShell = null;
      }
    }

    // AI Counter-Attack Timer
    if (enemyTurnTimer > 0) {
      enemyTurnTimer--;
      if (enemyTurnTimer === 0 && !isGameOver && !isVictory) {
        fireEnemyShell();
      }
    }

    // Update Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Terrain
    ctx.fillStyle = '#151e2e';
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 600);
    for (let x = 0; x < 1000; x++) {
      ctx.lineTo(x, terrainHeights[x]);
    }
    ctx.lineTo(1000, 600);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw Player Tank
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    // Turret Barrel
    ctx.save();
    ctx.translate(0, -12);
    ctx.rotate(player.angle);
    ctx.fillStyle = activeTheme.primary;
    ctx.fillRect(0, -4, 32, 8);
    ctx.restore();

    // Hull & Treads
    ctx.fillStyle = '#263238';
    ctx.fillRect(-22, -14, 44, 16);
    ctx.fillStyle = '#111';
    ctx.fillRect(-26, 0, 52, 10);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 2;
    ctx.strokeRect(-22, -14, 44, 16);

    // Shield Aura
    if (player.shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.strokeRect(-30, -20, 60, 32);
    }
    ctx.restore();

    // Draw Enemy Tank
    ctx.save();
    ctx.translate(enemy.x, enemy.y);
    // Turret Barrel
    ctx.save();
    ctx.translate(0, -12);
    ctx.rotate(enemy.angle);
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(0, -4, 32, 8);
    ctx.restore();

    // Hull & Treads
    ctx.fillStyle = '#3e2723';
    ctx.fillRect(-22, -14, 44, 16);
    ctx.fillStyle = '#111';
    ctx.fillRect(-26, 0, 52, 10);
    ctx.strokeStyle = '#ff1744';
    ctx.lineWidth = 2;
    ctx.strokeRect(-22, -14, 44, 16);
    ctx.restore();

    // Draw Active Shell
    if (activeShell) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(activeShell.x, activeShell.y, activeShell.radius, 0, Math.PI * 2);
      ctx.fillStyle = activeShell.isPlayer ? '#00f0ff' : '#ff1744';
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.restore();
    }

    // Draw Particles
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
      ctx.restore();
    });

    ctx.restore();
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

writeFile(path.join(pbDir, 'index.html'), pbHtml);
writeFile(path.join(pbDir, 'style.css'), pbCss);
writeFile(path.join(pbDir, 'audio.js'), pbAudio);
writeFile(path.join(pbDir, 'game.js'), pbGame);
copyThumbnailToIcon('plasma-ballistics');

// ============================================================================
// GAME 55: ZERO-G POOL: QUANTUM BILLIARDS
// ============================================================================
console.log('Building Game 55: quantum-billiards...');
const qbDir = path.join(gamesDir, 'quantum-billiards');

const qbHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Zero-G Pool: Quantum Billiards - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Quantum Table</div><div id="themeVal" class="hud-val">1: Felt Cyan</div></div>
      <div class="hud-box"><div class="hud-lbl">Spheres Sunk</div><div id="ballsVal" class="hud-val">0 / 5 BALLS</div></div>
      <div class="hud-box"><div class="hud-lbl">Stroke Limit</div><div id="strokesVal" class="hud-val" style="color:#00ff88;">6 STROKES</div></div>
      <div class="hud-box"><div class="hud-lbl">Cue Shield</div><div id="shieldVal" class="hud-val" style="color:#ffd600;">3 LIVES</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">TABLES (1-45)</button>
      <button id="restartBtn" class="action-btn">RETRY TABLE</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT TABLE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">ZERO-G POOL</h1>
        <p id="overlayDesc">Pocket glowing quantum spheres on frictionless octagonal tables across 45 stages. Calculate geometric bank shots off magnetic cushions and into gravitational pockets within strict stroke limits!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">CHALK QUANTUM CUE</button>
        <div class="controls-hint">Controls: Click/Tap and drag back from the white Cue Sphere to aim and set stroke power, then release to strike!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const qbCss = `* {
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
  cursor: crosshair;
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

const qbAudio = `// Native Web Audio API procedural synthesis for Quantum Billiards
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
  playHit() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.08);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch(e) {}
  }
  playPocket() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.2);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
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

const qbGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const ballsVal = document.getElementById('ballsVal');
  const strokesVal = document.getElementById('strokesVal');
  const shieldVal = document.getElementById('shieldVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let strokesLeft = 6;
  let cueLives = 3;
  let targetBalls = [];
  let cueBall = { x: 260, y: 300, vx: 0, vy: 0, radius: 12, invulnTimer: 0 };
  let pockets = [];
  let isAiming = false;
  let dragStart = { x: 0, y: 0 };
  let currentDrag = { x: 0, y: 0 };
  let particles = [];

  const TABLE = {
    x: 120,
    y: 80,
    w: 760,
    h: 440,
    friction: 0.988
  };

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

    const ballCount = 3 + (lvl % 4);
    strokesLeft = ballCount + 3;
    cueLives = 3;

    cueBall = {
      x: 240,
      y: 300,
      vx: 0,
      vy: 0,
      radius: 12,
      invulnTimer: 60 // invulnerable grace on spawn
    };

    // Pockets on table perimeter
    pockets = [
      { x: TABLE.x + 20, y: TABLE.y + 20, radius: 22 },
      { x: TABLE.x + TABLE.w / 2, y: TABLE.y + 15, radius: 22 },
      { x: TABLE.x + TABLE.w - 20, y: TABLE.y + 20, radius: 22 },
      { x: TABLE.x + 20, y: TABLE.y + TABLE.h - 20, radius: 22 },
      { x: TABLE.x + TABLE.w / 2, y: TABLE.y + TABLE.h - 15, radius: 22 },
      { x: TABLE.x + TABLE.w - 20, y: TABLE.y + TABLE.h - 20, radius: 22 }
    ];

    // Seed target balls
    targetBalls = [];
    const seed = lvl * 19;
    for (let i = 0; i < ballCount; i++) {
      targetBalls.push({
        x: 550 + ((seed + i * 40) % 220),
        y: 160 + ((seed * 3 + i * 65) % 260),
        vx: 0,
        vy: 0,
        radius: 12,
        color: i % 2 === 0 ? activeTheme.accent : activeTheme.secondary,
        sunk: false
      });
    }

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    const sunkCount = targetBalls.filter(b => b.sunk).length;
    ballsVal.textContent = sunkCount + ' / ' + targetBalls.length + ' BALLS';
    strokesVal.textContent = strokesLeft + ' STROKES';
    strokesVal.style.color = strokesLeft > 1 ? '#00ff88' : '#ff3d00';
    shieldVal.textContent = cueLives + ' LIVES';
    shieldVal.style.color = cueLives > 1 ? '#ffd600' : '#ff1744';
  }

  function areBallsMoving() {
    if (Math.hypot(cueBall.vx, cueBall.vy) > 0.05) return true;
    return targetBalls.some(b => !b.sunk && Math.hypot(b.vx, b.vy) > 0.05);
  }

  function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (1000 / rect.width),
      y: (clientY - rect.top) * (600 / rect.height)
    };
  }

  canvas.addEventListener('mousedown', (e) => {
    if (!isPlaying || areBallsMoving() || strokesLeft <= 0) return;
    const pos = getCanvasPos(e);
    const dist = Math.hypot(pos.x - cueBall.x, pos.y - cueBall.y);
    if (dist < 35) {
      isAiming = true;
      dragStart = { x: cueBall.x, y: cueBall.y };
      currentDrag = pos;
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isAiming) return;
    currentDrag = getCanvasPos(e);
  });

  window.addEventListener('mouseup', () => {
    if (!isAiming) return;
    isAiming = false;
    const dx = cueBall.x - currentDrag.x;
    const dy = cueBall.y - currentDrag.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 10) {
      const power = Math.min(18, dist * 0.14);
      cueBall.vx = (dx / dist) * power;
      cueBall.vy = (dy / dist) * power;
      strokesLeft--;
      window.soundFX.playHit();
      updateHUD();
    }
  });

  // Touch Support
  canvas.addEventListener('touchstart', (e) => {
    if (!isPlaying || areBallsMoving() || strokesLeft <= 0) return;
    const pos = getCanvasPos(e);
    const dist = Math.hypot(pos.x - cueBall.x, pos.y - cueBall.y);
    if (dist < 35) {
      isAiming = true;
      dragStart = { x: cueBall.x, y: cueBall.y };
      currentDrag = pos;
    }
  });
  window.addEventListener('touchmove', (e) => {
    if (!isAiming) return;
    currentDrag = getCanvasPos(e);
  });
  window.addEventListener('touchend', () => {
    if (!isAiming) return;
    isAiming = false;
    const dx = cueBall.x - currentDrag.x;
    const dy = cueBall.y - currentDrag.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 10) {
      const power = Math.min(18, dist * 0.14);
      cueBall.vx = (dx / dist) * power;
      cueBall.vy = (dy / dist) * power;
      strokesLeft--;
      window.soundFX.playHit();
      updateHUD();
    }
  });

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

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

  function spawnParticles(x, y, color) {
    for (let i = 0; i < 12; i++) {
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

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (cueBall.invulnTimer > 0) cueBall.invulnTimer--;

    // Update Cue Ball
    cueBall.x += cueBall.vx;
    cueBall.y += cueBall.vy;
    cueBall.vx *= TABLE.friction;
    cueBall.vy *= TABLE.friction;

    // Table cushion bounce for Cue Ball
    if (cueBall.x - cueBall.radius < TABLE.x) {
      cueBall.x = TABLE.x + cueBall.radius;
      cueBall.vx = -cueBall.vx * 0.9;
    }
    if (cueBall.x + cueBall.radius > TABLE.x + TABLE.w) {
      cueBall.x = TABLE.x + TABLE.w - cueBall.radius;
      cueBall.vx = -cueBall.vx * 0.9;
    }
    if (cueBall.y - cueBall.radius < TABLE.y) {
      cueBall.y = TABLE.y + cueBall.radius;
      cueBall.vy = -cueBall.vy * 0.9;
    }
    if (cueBall.y + cueBall.radius > TABLE.y + TABLE.h) {
      cueBall.y = TABLE.y + TABLE.h - cueBall.radius;
      cueBall.vy = -cueBall.vy * 0.9;
    }

    // Check Cue Ball pocketing (scratch)
    pockets.forEach(p => {
      const dist = Math.hypot(cueBall.x - p.x, cueBall.y - p.y);
      if (dist < p.radius) {
        cueLives--;
        cueBall.x = 240;
        cueBall.y = 300;
        cueBall.vx = 0;
        cueBall.vy = 0;
        spawnParticles(p.x, p.y, '#ffffff');
        updateHUD();
        if (cueLives <= 0) {
          isGameOver = true;
          overlayTitle.textContent = "SCRATCH OUT";
          overlayDesc.textContent = "Cue sphere sank into gravitational pockets too many times. Retry table!";
          overlay.style.display = 'flex';
        }
      }
    });

    // Update Target Balls
    targetBalls.forEach(tb => {
      if (!tb.sunk) {
        tb.x += tb.vx;
        tb.y += tb.vy;
        tb.vx *= TABLE.friction;
        tb.vy *= TABLE.friction;

        // Cushion bounce
        if (tb.x - tb.radius < TABLE.x) {
          tb.x = TABLE.x + tb.radius;
          tb.vx = -tb.vx * 0.9;
        }
        if (tb.x + tb.radius > TABLE.x + TABLE.w) {
          tb.x = TABLE.x + TABLE.w - tb.radius;
          tb.vx = -tb.vx * 0.9;
        }
        if (tb.y - tb.radius < TABLE.y) {
          tb.y = TABLE.y + tb.radius;
          tb.vy = -tb.vy * 0.9;
        }
        if (tb.y + tb.radius > TABLE.y + TABLE.h) {
          tb.y = TABLE.y + TABLE.h - tb.radius;
          tb.vy = -tb.vy * 0.9;
        }

        // Pocket check
        pockets.forEach(p => {
          const dist = Math.hypot(tb.x - p.x, tb.y - p.y);
          if (dist < p.radius) {
            tb.sunk = true;
            window.soundFX.playPocket();
            spawnParticles(p.x, p.y, tb.color);
            updateHUD();

            // Win condition check
            if (targetBalls.every(b => b.sunk)) {
              isVictory = true;
              window.soundFX.playClear();
              overlayTitle.textContent = "TABLE " + currentLevel + " CLEARED!";
              overlayDesc.textContent = "All quantum spheres pocketed with perfect geometry! Advance to next table.";
              nextBtn.style.display = 'inline-block';
              overlay.style.display = 'flex';
            }
          }
        });

        // Cue to Target Collision
        const distCue = Math.hypot(cueBall.x - tb.x, cueBall.y - tb.y);
        if (distCue < cueBall.radius + tb.radius) {
          // Elastic sphere collision
          const nx = (tb.x - cueBall.x) / distCue;
          const ny = (tb.y - cueBall.y) / distCue;
          const kx = cueBall.vx - tb.vx;
          const ky = cueBall.vy - tb.vy;
          const p = 2 * (nx * kx + ny * ky) / 2;
          cueBall.vx -= p * nx * 0.95;
          cueBall.vy -= p * ny * 0.95;
          tb.vx += p * nx * 0.95;
          tb.vy += p * ny * 0.95;
          window.soundFX.playHit();
        }
      }
    });

    // Check Stroke Out Condition
    if (!areBallsMoving() && strokesLeft === 0 && !targetBalls.every(b => b.sunk)) {
      isGameOver = true;
      overlayTitle.textContent = "STROKES EXHAUSTED";
      overlayDesc.textContent = "Failed to pocket all quantum spheres within the stroke limit. Practice bank angles and retry!";
      overlay.style.display = 'flex';
    }

    // Update Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Billiard Table Cushion Frame
    ctx.fillStyle = '#101726';
    ctx.fillRect(TABLE.x - 24, TABLE.y - 24, TABLE.w + 48, TABLE.h + 48);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(TABLE.x - 24, TABLE.y - 24, TABLE.w + 48, TABLE.h + 48);

    // Inner Felt
    ctx.fillStyle = '#061a24';
    ctx.fillRect(TABLE.x, TABLE.y, TABLE.w, TABLE.h);

    // Draw Pockets
    pockets.forEach(p => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.shadowColor = activeTheme.secondary;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.strokeStyle = activeTheme.secondary;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    });

    // Draw Aim Line
    if (isAiming) {
      ctx.save();
      const dx = cueBall.x - currentDrag.x;
      const dy = cueBall.y - currentDrag.y;
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cueBall.x, cueBall.y);
      ctx.lineTo(cueBall.x + dx * 2.5, cueBall.y + dy * 2.5);
      ctx.stroke();
      ctx.restore();
    }

    // Draw Target Balls
    targetBalls.forEach(tb => {
      if (!tb.sunk) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(tb.x, tb.y, tb.radius, 0, Math.PI * 2);
        ctx.fillStyle = tb.color;
        ctx.shadowColor = tb.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }
    });

    // Draw Cue Ball
    ctx.save();
    ctx.beginPath();
    ctx.arc(cueBall.x, cueBall.y, cueBall.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 14;
    ctx.fill();
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    ctx.stroke();
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

    ctx.restore();
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

writeFile(path.join(qbDir, 'index.html'), qbHtml);
writeFile(path.join(qbDir, 'style.css'), qbCss);
writeFile(path.join(qbDir, 'audio.js'), qbAudio);
writeFile(path.join(qbDir, 'game.js'), qbGame);
copyThumbnailToIcon('quantum-billiards');

// ============================================================================
// GAME 56: STRUCTURAL BRIDGE ENGINEER: CYBER SPAN
// ============================================================================
console.log('Building Game 56: structural-bridge-engineer...');
const sbeDir = path.join(gamesDir, 'structural-bridge-engineer');

const sbeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Structural Bridge Engineer: Cyber Span - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Chasm Gorge</div><div id="themeVal" class="hud-val">1: River Gorge Cyan</div></div>
      <div class="hud-box"><div class="hud-lbl">Materials Budget</div><div id="budgetVal" class="hud-val">$15,000 / $15,000</div></div>
      <div class="hud-box"><div class="hud-lbl">Convoy Status</div><div id="convoyVal" class="hud-val" style="color:#00ff88;">READY AT DOCK</div></div>
      <div class="hud-box"><div class="hud-lbl">Max Stress Load</div><div id="stressVal" class="hud-val" style="color:#ffd600;">0% STRESS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">CHASMS (1-45)</button>
      <button id="testBtn" class="action-btn test-btn">TEST CONVOY [SPACE]</button>
      <button id="clearBtn" class="action-btn">RESET BEAMS</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT CHASM &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">STRUCTURAL BRIDGE ENGINEER</h1>
        <p id="overlayDesc">Construct truss bridges across treacherous planetary canyons using carbon-fiber beams and cables across 45 stages. Test your engineering under heavy cyber-truck convoy loads!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">START BLUEPRINT</button>
        <div class="controls-hint">Controls: Click on nodes and drag to connect beams across the chasm within your materials budget. Click 'TEST CONVOY' to run the stress load test!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const sbeCss = `* {
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
  cursor: pointer;
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
.test-btn {
  background: #ff9100;
  color: #04020f;
  border-color: #ff9100;
  font-weight: 800;
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

const sbeAudio = `// Native Web Audio API procedural synthesis for Structural Bridge Engineer
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
  playSnap() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.15);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch(e) {}
  }
  playBeamClick() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
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

const sbeGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const budgetVal = document.getElementById('budgetVal');
  const convoyVal = document.getElementById('convoyVal');
  const stressVal = document.getElementById('stressVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const testBtn = document.getElementById('testBtn');
  const clearBtn = document.getElementById('clearBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let totalBudget = 16000;
  let usedBudget = 0;
  let maxStress = 0;
  let isTesting = false;

  // Nodes & Beams
  let nodes = [];
  let beams = [];
  let selectedNode = null;

  // Convoy Truck
  const truck = {
    x: 60,
    y: 280,
    w: 55,
    h: 22,
    vx: 0,
    invulnTimer: 60,
    active: false
  };

  const chasm = {
    leftX: 180,
    rightX: 820,
    depth: 550,
    deckY: 280
  };

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

    totalBudget = 16000 + (lvl * 800);
    usedBudget = 0;
    maxStress = 0;
    isTesting = false;
    selectedNode = null;

    truck.x = 60;
    truck.y = chasm.deckY;
    truck.vx = 0;
    truck.invulnTimer = 60;
    truck.active = false;

    // Chasm fixed anchor nodes
    nodes = [
      { id: 0, x: chasm.leftX, y: chasm.deckY, fixed: true },
      { id: 1, x: chasm.leftX, y: chasm.deckY + 90, fixed: true },
      { id: 2, x: chasm.rightX, y: chasm.deckY, fixed: true },
      { id: 3, x: chasm.rightX, y: chasm.deckY + 90, fixed: true }
    ];

    // Sub-divided deck points across gap
    const stepCount = 5;
    const stepW = (chasm.rightX - chasm.leftX) / stepCount;
    for (let i = 1; i < stepCount; i++) {
      nodes.push({
        id: 3 + i,
        x: chasm.leftX + stepW * i,
        y: chasm.deckY,
        fixed: false
      });
      // Lower truss node
      nodes.push({
        id: 3 + stepCount + i,
        x: chasm.leftX + stepW * i,
        y: chasm.deckY + 80,
        fixed: false
      });
    }

    beams = [];
    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    budgetVal.textContent = '$' + (totalBudget - usedBudget).toLocaleString() + ' / $' + totalBudget.toLocaleString();
    budgetVal.style.color = (totalBudget - usedBudget) > 2000 ? '#00f0ff' : '#ff1744';
    stressVal.textContent = Math.round(maxStress) + '% STRESS';
    stressVal.style.color = maxStress < 70 ? '#00ff88' : '#ff1744';
    convoyVal.textContent = isTesting ? (truck.active ? 'TRANSITING SPAN...' : 'COMPLETED') : 'READY AT DOCK';
  }

  function addBeam(n1, n2) {
    if (n1.id === n2.id) return;
    const exists = beams.some(b => (b.n1.id === n1.id && b.n2.id === n2.id) || (b.n1.id === n2.id && b.n2.id === n1.id));
    if (exists) return;

    const len = Math.hypot(n2.x - n1.x, n2.y - n1.y);
    const cost = Math.round(len * 8);

    if (usedBudget + cost > totalBudget) return;

    usedBudget += cost;
    beams.push({ n1, n2, len, cost, stress: 0, broken: false });
    window.soundFX.playBeamClick();
    updateHUD();
  }

  function startTesting() {
    if (isTesting || beams.length < 3) return;
    isTesting = true;
    truck.x = 60;
    truck.vx = 2.4;
    truck.active = true;
    updateHUD();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Pointer interactions for building beams
  function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (1000 / rect.width),
      y: (clientY - rect.top) * (600 / rect.height)
    };
  }

  canvas.addEventListener('click', (e) => {
    if (!isPlaying || isTesting) return;
    const pos = getCanvasPos(e);
    const clickedNode = nodes.find(n => Math.hypot(n.x - pos.x, n.y - pos.y) < 22);

    if (clickedNode) {
      if (!selectedNode) {
        selectedNode = clickedNode;
      } else {
        addBeam(selectedNode, clickedNode);
        selectedNode = null;
      }
    } else {
      selectedNode = null;
    }
  });

  testBtn.onclick = () => startTesting();
  clearBtn.onclick = () => {
    if (isTesting) return;
    beams = [];
    usedBudget = 0;
    updateHUD();
  };

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

    if (truck.invulnTimer > 0) truck.invulnTimer--;

    // Update Truck transit
    if (isTesting && truck.active) {
      truck.x += truck.vx;

      // Calculate beam load & stress
      maxStress = 0;
      beams.forEach(b => {
        if (!b.broken) {
          const midX = (b.n1.x + b.n2.x) / 2;
          const distToTruck = Math.abs(midX - truck.x);
          if (distToTruck < 140) {
            b.stress = Math.min(120, (140 - distToTruck) * 0.75 + (b.cost * 0.02));
          } else {
            b.stress = 0;
          }
          if (b.stress > maxStress) maxStress = b.stress;

          // Structural break if stress exceeds 100%
          if (b.stress >= 100) {
            b.broken = true;
            window.soundFX.playSnap();
          }
        }
      });

      // Check if bridge collapsed beneath truck
      const activeDecks = beams.filter(b => !b.broken && Math.abs(b.n1.y - chasm.deckY) < 10 && Math.abs(b.n2.y - chasm.deckY) < 10);
      const isSupported = (truck.x < chasm.leftX || truck.x > chasm.rightX) || activeDecks.some(b => truck.x >= Math.min(b.n1.x, b.n2.x) - 10 && truck.x <= Math.max(b.n1.x, b.n2.x) + 10);

      if (!isSupported) {
        // Truck falls into chasm
        truck.y += 6;
        if (truck.y > chasm.depth) {
          truck.active = false;
          isGameOver = true;
          overlayTitle.textContent = "STRUCTURAL COLLAPSE";
          overlayDesc.textContent = "The bridge failed to withstand convoy stress loads. Strengthen your truss geometry!";
          overlay.style.display = 'flex';
        }
      }

      // Reached far bank
      if (truck.x >= chasm.rightX + 60) {
        truck.active = false;
        isVictory = true;
        window.soundFX.playClear();
        overlayTitle.textContent = "CHASM " + currentLevel + " CONQUERED!";
        overlayDesc.textContent = "Convoy safely transited the span! Advance to next chasm crossing.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }

      updateHUD();
    }
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Canyon Cliffs
    ctx.fillStyle = '#101626';
    ctx.fillRect(0, chasm.deckY, chasm.leftX, 320);
    ctx.fillRect(chasm.rightX, chasm.deckY, 1000 - chasm.rightX, 320);

    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.strokeRect(0, chasm.deckY, chasm.leftX, 320);
    ctx.strokeRect(chasm.rightX, chasm.deckY, 1000 - chasm.rightX, 320);

    // Draw Beams
    beams.forEach(b => {
      if (!b.broken) {
        ctx.save();
        // Color code stress from green to red
        let beamColor = '#39ff14';
        if (b.stress > 50) beamColor = '#ffd600';
        if (b.stress > 80) beamColor = '#ff1744';

        ctx.strokeStyle = beamColor;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(b.n1.x, b.n1.y);
        ctx.lineTo(b.n2.x, b.n2.y);
        ctx.stroke();
        ctx.restore();
      }
    });

    // Draw Nodes
    nodes.forEach(n => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(n.x, n.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = n.fixed ? '#ffab00' : '#00f0ff';
      if (selectedNode && selectedNode.id === n.id) {
        ctx.shadowColor = '#ff007f';
        ctx.shadowBlur = 15;
        ctx.fillStyle = '#ff007f';
      }
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    });

    // Draw Truck
    ctx.save();
    ctx.translate(truck.x, truck.y - truck.h);
    ctx.fillStyle = '#ff3d00';
    ctx.fillRect(0, 0, truck.w, truck.h);
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, truck.w, truck.h);

    // Wheels
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(12, truck.h + 2, 6, 0, Math.PI * 2);
    ctx.arc(42, truck.h + 2, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.restore();
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

writeFile(path.join(sbeDir, 'index.html'), sbeHtml);
writeFile(path.join(sbeDir, 'style.css'), sbeCss);
writeFile(path.join(sbeDir, 'audio.js'), sbeAudio);
writeFile(path.join(sbeDir, 'game.js'), sbeGame);
copyThumbnailToIcon('structural-bridge-engineer');

console.log('Part 2 Complete: plasma-ballistics, quantum-billiards, structural-bridge-engineer.');
