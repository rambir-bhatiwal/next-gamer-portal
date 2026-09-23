/**
 * Next Games/Game — Physics Category Part 1:
 * - graviton-pinball (Game 51)
 * - cyber-ragdoll-demolition (Game 52)
 * - neon-elastic-sling (Game 53)
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
// GAME 51: GRAVITON PINBALL: HYPER COLLIDER
// ============================================================================
console.log('Building Game 51: graviton-pinball...');
const gpDir = path.join(gamesDir, 'graviton-pinball');

const gpHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Graviton Pinball: Hyper Collider - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Collider Table</div><div id="themeVal" class="hud-val">1: CERN Collider</div></div>
      <div class="hud-box"><div class="hud-lbl">Score Target</div><div id="scoreVal" class="hud-val">0 / 25,000 PTS</div></div>
      <div class="hud-box"><div class="hud-lbl">Particle Spheres</div><div id="ballsVal" class="hud-val" style="color:#00ff88;">3 BALLS</div></div>
      <div class="hud-box"><div class="hud-lbl">Bumper Multiplier</div><div id="multVal" class="hud-val" style="color:#ffd600;">x1 COMBO</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">TABLES (1-45)</button>
      <button id="flipLeftBtn" class="action-btn flipper-btn">&lt; LEFT FLIPPER [A/LEFT]</button>
      <button id="plungerBtn" class="action-btn plunger-btn">LAUNCH SPHERE [SPACE]</button>
      <button id="flipRightBtn" class="action-btn flipper-btn">RIGHT FLIPPER [D/RIGHT] &gt;</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT TABLE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">GRAVITON PINBALL</h1>
        <p id="overlayDesc">Launch subatomic particle spheres inside 45 quantum colliders. Trigger magnetic bumpers, accelerator loop ramps, and multi-ball anomalies to hit high score targets!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">POWER UP COLLIDER</button>
        <div class="controls-hint">Controls: [A / Left] for Left Flipper, [D / Right] for Right Flipper, [Space / Launch] to fire plunger. Touch buttons supported.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const gpCss = `* {
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
.flipper-btn {
  background: #ff007f;
  color: #fff;
  border-color: #ff007f;
  flex: 1;
  max-width: 220px;
  box-shadow: 0 0 15px rgba(255, 0, 127, 0.4);
}
.plunger-btn {
  background: #ffd600;
  color: #04020f;
  border-color: #ffd600;
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

const gpAudio = `// Native Web Audio API procedural synthesis for Graviton Pinball
class SoundFX {
  constructor() {
    this.ctx = null;
    this.bumperPitch = 440;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }
  playFlipper() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.08);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch(e) {}
  }
  playBumper(combo = 1) {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const freq = Math.min(1800, 330 * Math.pow(1.08, combo));
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.15);
      gain.gain.setValueAtTime(0.28, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playPlunger() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(100, now);
      osc.frequency.linearRampToValueAtTime(600, now + 0.25);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch(e) {}
  }
  playDrain() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(70, now + 0.35);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
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

const gpGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const scoreVal = document.getElementById('scoreVal');
  const ballsVal = document.getElementById('ballsVal');
  const multVal = document.getElementById('multVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const flipLeftBtn = document.getElementById('flipLeftBtn');
  const flipRightBtn = document.getElementById('flipRightBtn');
  const plungerBtn = document.getElementById('plungerBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let score = 0;
  let targetScore = 20000;
  let ballsRemaining = 3;
  let comboCount = 0;
  let comboResetTimer = 0;

  // Rigid-body balls
  let balls = [];

  // Table geometry & flippers
  const table = {
    w: 520,
    h: 700,
    gravity: 0.22
  };

  const leftFlipper = {
    x: 180,
    y: 620,
    length: 65,
    angle: 0.4,
    restAngle: 0.4,
    activeAngle: -0.4,
    isPressed: false
  };

  const rightFlipper = {
    x: 340,
    y: 620,
    length: 65,
    angle: Math.PI - 0.4,
    restAngle: Math.PI - 0.4,
    activeAngle: Math.PI + 0.4,
    isPressed: false
  };

  let bumpers = [];
  let slingshots = [];
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

    score = 0;
    targetScore = 15000 + (lvl * 1500);
    ballsRemaining = 3;
    comboCount = 0;
    comboResetTimer = 0;

    // Reset Balls with invulnerability grace timer
    balls = [];
    spawnBall();

    // Bumpers
    bumpers = [
      { x: 260, y: 190, radius: 28, value: 500 },
      { x: 170, y: 270, radius: 24, value: 350 },
      { x: 350, y: 270, radius: 24, value: 350 }
    ];

    // Additional bumpers for higher levels
    if (lvl > 10) {
      bumpers.push({ x: 260, y: 350, radius: 22, value: 400 });
    }
    if (lvl > 25) {
      bumpers.push({ x: 190, y: 130, radius: 20, value: 600 });
      bumpers.push({ x: 330, y: 130, radius: 20, value: 600 });
    }

    // Slingshot walls above flippers
    slingshots = [
      { x1: 120, y1: 480, x2: 150, y2: 570 },
      { x1: 400, y1: 480, x2: 370, y2: 570 }
    ];

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function spawnBall() {
    balls.push({
      x: 480,
      y: 580,
      vx: 0,
      vy: 0,
      radius: 11,
      invulnTimer: 90, // invulnerable grace period on spawn to prevent instant drain
      active: true
    });
  }

  function launchBall() {
    const launchBallObj = balls.find(b => b.x > 450 && b.y > 500);
    if (launchBallObj) {
      launchBallObj.vy = -16 - Math.random() * 2;
      launchBallObj.vx = -1.2;
      window.soundFX.playPlunger();
      spawnParticles(launchBallObj.x, launchBallObj.y, '#ffd600', 14);
    }
  }

  function updateHUD() {
    scoreVal.textContent = score.toLocaleString() + ' / ' + targetScore.toLocaleString() + ' PTS';
    ballsVal.textContent = ballsRemaining + ' BALLS';
    ballsVal.style.color = ballsRemaining > 1 ? '#00ff88' : '#ff3d00';
    multVal.textContent = 'x' + Math.max(1, comboCount) + ' COMBO';
    multVal.style.color = comboCount > 3 ? '#ff007f' : '#ffd600';
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Key controls
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
      leftFlipper.isPressed = true;
      window.soundFX.playFlipper();
    }
    if (e.code === 'KeyD' || e.code === 'ArrowRight') {
      rightFlipper.isPressed = true;
      window.soundFX.playFlipper();
    }
    if (e.code === 'Space' || e.code === 'ArrowDown') {
      e.preventDefault();
      launchBall();
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') leftFlipper.isPressed = false;
    if (e.code === 'KeyD' || e.code === 'ArrowRight') rightFlipper.isPressed = false;
  });

  // Touch controls
  flipLeftBtn.addEventListener('mousedown', () => { leftFlipper.isPressed = true; window.soundFX.playFlipper(); });
  flipLeftBtn.addEventListener('mouseup', () => leftFlipper.isPressed = false);
  flipLeftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); leftFlipper.isPressed = true; window.soundFX.playFlipper(); });
  flipLeftBtn.addEventListener('touchend', () => leftFlipper.isPressed = false);

  flipRightBtn.addEventListener('mousedown', () => { rightFlipper.isPressed = true; window.soundFX.playFlipper(); });
  flipRightBtn.addEventListener('mouseup', () => rightFlipper.isPressed = false);
  flipRightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); rightFlipper.isPressed = true; window.soundFX.playFlipper(); });
  flipRightBtn.addEventListener('touchend', () => rightFlipper.isPressed = false);

  plungerBtn.onclick = () => launchBall();
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

  function spawnParticles(x, y, color, count = 8) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 4;
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

    if (comboResetTimer > 0) {
      comboResetTimer--;
      if (comboResetTimer === 0) comboCount = 0;
    }

    // Animate Flippers
    leftFlipper.angle += ((leftFlipper.isPressed ? leftFlipper.activeAngle : leftFlipper.restAngle) - leftFlipper.angle) * 0.45;
    rightFlipper.angle += ((rightFlipper.isPressed ? rightFlipper.activeAngle : rightFlipper.restAngle) - rightFlipper.angle) * 0.45;

    // Update Balls
    for (let bIdx = balls.length - 1; bIdx >= 0; bIdx--) {
      const b = balls[bIdx];
      if (b.invulnTimer > 0) b.invulnTimer--;

      // Gravity & Velocity
      b.vy += table.gravity;
      b.x += b.vx;
      b.y += b.vy;

      // Table Boundary Collisions (Walls)
      // Left Wall
      if (b.x - b.radius < 50) {
        b.x = 50 + b.radius;
        b.vx = Math.abs(b.vx) * 0.75;
      }
      // Right Chute Outer Wall
      if (b.x + b.radius > 500) {
        b.x = 500 - b.radius;
        b.vx = -Math.abs(b.vx) * 0.75;
      }
      // Top Curved Arch
      if (b.y - b.radius < 50) {
        b.y = 50 + b.radius;
        b.vy = Math.abs(b.vy) * 0.8;
      }
      // Chute Divider Wall (x: 450, from y: 150 to y: 650)
      if (b.x + b.radius > 450 && b.x - b.radius < 455 && b.y > 150 && b.y < 650) {
        if (b.vx > 0) {
          b.x = 450 - b.radius;
          b.vx = -b.vx * 0.75;
        } else {
          b.x = 455 + b.radius;
          b.vx = -b.vx * 0.75;
        }
      }

      // Check Bumper Collisions
      bumpers.forEach(bm => {
        const dist = Math.hypot(b.x - bm.x, b.y - bm.y);
        if (dist < b.radius + bm.radius) {
          // Bounce normal
          const nx = (b.x - bm.x) / dist;
          const ny = (b.y - bm.y) / dist;
          b.vx = nx * 8.5;
          b.vy = ny * 8.5;
          comboCount++;
          comboResetTimer = 180;
          score += bm.value * comboCount;
          window.soundFX.playBumper(comboCount);
          spawnParticles(b.x, b.y, activeTheme.accent, 12);
          updateHUD();

          // Target reached check
          if (score >= targetScore) {
            isVictory = true;
            window.soundFX.playClear();
            overlayTitle.textContent = "COLLIDER " + currentLevel + " CONQUERED!";
            overlayDesc.textContent = "Target particle score reached! Advance to next collider stage.";
            nextBtn.style.display = 'inline-block';
            overlay.style.display = 'flex';
          }
        }
      });

      // Left Flipper Collision
      const lTipX = leftFlipper.x + Math.cos(leftFlipper.angle) * leftFlipper.length;
      const lTipY = leftFlipper.y + Math.sin(leftFlipper.angle) * leftFlipper.length;
      if (b.x > leftFlipper.x - 10 && b.x < lTipX + 10 && b.y + b.radius > Math.min(leftFlipper.y, lTipY) && b.y - b.radius < Math.max(leftFlipper.y, lTipY)) {
        b.vy = leftFlipper.isPressed ? -12 : -5;
        b.vx += (leftFlipper.isPressed ? 3 : 1);
        spawnParticles(b.x, b.y, '#ff007f', 6);
      }

      // Right Flipper Collision
      const rTipX = rightFlipper.x + Math.cos(rightFlipper.angle) * rightFlipper.length;
      const rTipY = rightFlipper.y + Math.sin(rightFlipper.angle) * rightFlipper.length;
      if (b.x < rightFlipper.x + 10 && b.x > rTipX - 10 && b.y + b.radius > Math.min(rightFlipper.y, rTipY) && b.y - b.radius < Math.max(rightFlipper.y, rTipY)) {
        b.vy = rightFlipper.isPressed ? -12 : -5;
        b.vx -= (rightFlipper.isPressed ? 3 : 1);
        spawnParticles(b.x, b.y, '#ff007f', 6);
      }

      // Drain Pit Check (Below flippers: y > 680)
      if (b.y > 690) {
        if (b.invulnTimer <= 0) {
          balls.splice(bIdx, 1);
          window.soundFX.playDrain();
          if (balls.length === 0) {
            ballsRemaining--;
            updateHUD();
            if (ballsRemaining > 0) {
              spawnBall();
            } else {
              isGameOver = true;
              overlayTitle.textContent = "PARTICLES DRAINED";
              overlayDesc.textContent = "All subatomic spheres exhausted before reaching the score quota. Retry collider!";
              overlay.style.display = 'flex';
            }
          }
        } else {
          // Bounced back by drain saver barrier
          b.y = 660;
          b.vy = -10;
        }
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

    // Scale to fit pinball dimensions
    const scale = Math.min(canvas.width / 540, canvas.height / 740);
    const offsetX = (canvas.width - 520 * scale) / 2;
    const offsetY = (canvas.height - 700 * scale) / 2;

    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);

    // Table Frame & Rails
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 50, 450, 640);

    // Chute divider
    ctx.beginPath();
    ctx.moveTo(450, 150);
    ctx.lineTo(450, 650);
    ctx.stroke();

    // Top Curve Arch
    ctx.beginPath();
    ctx.arc(260, 100, 180, Math.PI, 0);
    ctx.strokeStyle = activeTheme.secondary;
    ctx.stroke();

    // Draw Bumpers
    bumpers.forEach(bm => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(bm.x, bm.y, bm.radius, 0, Math.PI * 2);
      ctx.fillStyle = activeTheme.accent;
      ctx.shadowColor = activeTheme.accent;
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#000';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(bm.value, bm.x, bm.y + 4);
      ctx.restore();
    });

    // Draw Flippers
    // Left Flipper
    ctx.save();
    ctx.translate(leftFlipper.x, leftFlipper.y);
    ctx.rotate(leftFlipper.angle);
    ctx.fillStyle = '#ff007f';
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 10;
    ctx.fillRect(0, -6, leftFlipper.length, 12);
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.arc(leftFlipper.length, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Right Flipper
    ctx.save();
    ctx.translate(rightFlipper.x, rightFlipper.y);
    ctx.rotate(rightFlipper.angle);
    ctx.fillStyle = '#ff007f';
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 10;
    ctx.fillRect(0, -6, rightFlipper.length, 12);
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.arc(rightFlipper.length, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Draw Slingshots
    slingshots.forEach(s => {
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
      ctx.stroke();
    });

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

    // Draw Balls
    balls.forEach(b => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = activeTheme.primary;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.strokeStyle = activeTheme.primary;
      ctx.lineWidth = 2;
      ctx.stroke();
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

writeFile(path.join(gpDir, 'index.html'), gpHtml);
writeFile(path.join(gpDir, 'style.css'), gpCss);
writeFile(path.join(gpDir, 'audio.js'), gpAudio);
writeFile(path.join(gpDir, 'game.js'), gpGame);
copyThumbnailToIcon('graviton-pinball');

// ============================================================================
// GAME 52: CYBERNETIC RAGDOLL DEMOLITION: CRASH DUMMY
// ============================================================================
console.log('Building Game 52: cyber-ragdoll-demolition...');
const crdDir = path.join(gamesDir, 'cyber-ragdoll-demolition');

const crdHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cybernetic Ragdoll Demolition: Crash Dummy - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Demolition Slope</div><div id="themeVal" class="hud-val">1: Concrete Staircase</div></div>
      <div class="hud-box"><div class="hud-lbl">Impact Damage</div><div id="dmgVal" class="hud-val">0 / 8,000 PTS</div></div>
      <div class="hud-box"><div class="hud-lbl">Launch Units</div><div id="unitsVal" class="hud-val" style="color:#00ff88;">3 DUMMIES</div></div>
      <div class="hud-box"><div class="hud-lbl">Kinetic Velocity</div><div id="velVal" class="hud-val" style="color:#ffd600;">0 KM/H</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SLOPES (1-45)</button>
      <button id="angleUpBtn" class="action-btn">AIM UP [W]</button>
      <button id="launchBtn" class="action-btn launch-btn">LAUNCH DUMMY [SPACE]</button>
      <button id="angleDownBtn" class="action-btn">AIM DOWN [S]</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SLOPE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBER RAGDOLL DEMOLITION</h1>
        <p id="overlayDesc">Launch a multi-jointed cybernetic crash dummy down hazardous slopes filled with explosive barrels, pinwheels, and steel girders across 45 demolition stages. Accumulate severe kinetic impact damage to surpass the target quota!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">START CRASH TEST</button>
        <div class="controls-hint">Controls: [W/S] or Aim buttons to set angle, [Space] or Launch button to fire dummy. You can also drag the launch catapult with mouse/touch!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const crdCss = `* {
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
.launch-btn {
  background: #ff1744;
  color: #fff;
  border-color: #ff1744;
  flex: 1;
  max-width: 240px;
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

const crdAudio = `// Native Web Audio API procedural synthesis for Cybernetic Ragdoll Demolition
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
  playLaunch() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.2);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch(e) {}
  }
  playImpact(force = 1) {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.15);
      const vol = Math.min(0.35, 0.15 + force * 0.05);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch(e) {}
  }
  playExplosion() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.linearRampToValueAtTime(50, now + 0.35);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.38);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
      noise.stop(now + 0.4);
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

const crdGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const dmgVal = document.getElementById('dmgVal');
  const unitsVal = document.getElementById('unitsVal');
  const velVal = document.getElementById('velVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const launchBtn = document.getElementById('launchBtn');
  const angleUpBtn = document.getElementById('angleUpBtn');
  const angleDownBtn = document.getElementById('angleDownBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let totalDamage = 0;
  let targetDamage = 8000;
  let dummiesRemaining = 3;
  let launchAngle = -0.4; // radians
  let launchPower = 18;

  // Verlet Integration Ragdoll
  let ragdoll = null;
  let slopeLines = [];
  let barrels = [];
  let pinwheels = [];
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

  function createRagdoll(startX, startY, vx, vy) {
    // 8 points: Head, Chest, Hips, LHand, RHand, LKnee, RKnee, LFoot, RFoot
    const points = [
      { x: startX, y: startY - 24, oldX: startX - vx, oldY: startY - 24 - vy, radius: 10, name: 'head' },
      { x: startX, y: startY, oldX: startX - vx, oldY: startY - vy, radius: 12, name: 'chest' },
      { x: startX, y: startY + 24, oldX: startX - vx, oldY: startY + 24 - vy, radius: 10, name: 'hips' },
      { x: startX - 20, y: startY + 10, oldX: startX - 20 - vx, oldY: startY + 10 - vy, radius: 6, name: 'lhand' },
      { x: startX + 20, y: startY + 10, oldX: startX + 20 - vx, oldY: startY + 10 - vy, radius: 6, name: 'rhand' },
      { x: startX - 12, y: startY + 50, oldX: startX - 12 - vx, oldY: startY + 50 - vy, radius: 7, name: 'lfoot' },
      { x: startX + 12, y: startY + 50, oldX: startX + 12 - vx, oldY: startY + 50 - vy, radius: 7, name: 'rfoot' }
    ];

    // Distance constraints
    const sticks = [
      { p0: 0, p1: 1, len: 24 }, // Head to chest
      { p0: 1, p1: 2, len: 24 }, // Chest to hips
      { p0: 1, p1: 3, len: 24 }, // Chest to LHand
      { p0: 1, p1: 4, len: 24 }, // Chest to RHand
      { p0: 2, p1: 5, len: 28 }, // Hips to LFoot
      { p0: 2, p1: 6, len: 28 }  // Hips to RFoot
    ];

    return { points, sticks, active: true, invulnTimer: 60 };
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    totalDamage = 0;
    targetDamage = 6000 + (lvl * 1200);
    dummiesRemaining = 3;
    ragdoll = null;

    // Generate procedural slopes and obstacles
    slopeLines = [
      { x1: 50, y1: 180, x2: 300, y2: 300 },
      { x1: 300, y1: 300, x2: 600, y2: 440 },
      { x1: 600, y1: 440, x2: 950, y2: 520 },
      { x1: 950, y1: 520, x2: 1200, y2: 520 } // flat finish
    ];

    // Explosive barrels
    barrels = [
      { x: 380, y: 320, w: 26, h: 36, exploded: false },
      { x: 550, y: 400, w: 26, h: 36, exploded: false },
      { x: 780, y: 470, w: 26, h: 36, exploded: false }
    ];

    // Pinwheels
    pinwheels = [
      { x: 480, y: 360, radius: 45, angle: 0, speed: 0.05 + (lvl * 0.002) },
      { x: 700, y: 440, radius: 45, angle: 0, speed: -0.06 }
    ];

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    dmgVal.textContent = Math.floor(totalDamage).toLocaleString() + ' / ' + targetDamage.toLocaleString() + ' PTS';
    unitsVal.textContent = dummiesRemaining + ' DUMMIES';
    unitsVal.style.color = dummiesRemaining > 1 ? '#00ff88' : '#ff3d00';
  }

  function launchDummy() {
    if (ragdoll && ragdoll.active) return;
    if (dummiesRemaining <= 0) return;

    const vx = Math.cos(launchAngle) * launchPower;
    const vy = Math.sin(launchAngle) * launchPower;
    ragdoll = createRagdoll(80, 140, vx, vy);
    dummiesRemaining--;
    window.soundFX.playLaunch();
    updateHUD();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Key controls
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') launchAngle = Math.max(-1.1, launchAngle - 0.08);
    if (e.code === 'KeyS' || e.code === 'ArrowDown') launchAngle = Math.min(0.2, launchAngle + 0.08);
    if (e.code === 'Space') {
      e.preventDefault();
      launchDummy();
    }
  });

  angleUpBtn.onclick = () => launchAngle = Math.max(-1.1, launchAngle - 0.08);
  angleDownBtn.onclick = () => launchAngle = Math.min(0.2, launchAngle + 0.08);
  launchBtn.onclick = () => launchDummy();

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

  function spawnParticles(x, y, color, count = 10, speed = 4) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = Math.random() * speed;
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

    // Pinwheels rotate
    pinwheels.forEach(pw => pw.angle += pw.speed);

    // Update Ragdoll (Verlet Integration)
    if (ragdoll && ragdoll.active) {
      if (ragdoll.invulnTimer > 0) ragdoll.invulnTimer--;

      let maxVel = 0;

      // Update positions
      ragdoll.points.forEach(p => {
        const vx = (p.x - p.oldX) * 0.985;
        const vy = (p.y - p.oldY) * 0.985 + 0.35; // gravity
        p.oldX = p.x;
        p.oldY = p.y;
        p.x += vx;
        p.y += vy;

        const currentSpd = Math.hypot(vx, vy);
        if (currentSpd > maxVel) maxVel = currentSpd;

        // Collision with slopes
        slopeLines.forEach(line => {
          // Line segment distance
          const ldx = line.x2 - line.x1;
          const ldy = line.y2 - line.y1;
          const len = Math.hypot(ldx, ldy);
          const u = Math.max(0, Math.min(1, ((p.x - line.x1) * ldx + (p.y - line.y1) * ldy) / (len * len)));
          const nearX = line.x1 + u * ldx;
          const nearY = line.y1 + u * ldy;
          const dist = Math.hypot(p.x - nearX, p.y - nearY);

          if (dist < p.radius + 3) {
            // Push out
            const nx = (p.x - nearX) / dist;
            const ny = (p.y - nearY) / dist;
            p.x = nearX + nx * (p.radius + 3);
            p.y = nearY + ny * (p.radius + 3);

            // Friction & damage impact
            if (currentSpd > 2.5) {
              const impactScore = currentSpd * 18;
              totalDamage += impactScore;
              window.soundFX.playImpact(currentSpd);
              spawnParticles(p.x, p.y, activeTheme.accent, 4, 3);
              updateHUD();
            }
          }
        });

        // Pinwheel Collision
        pinwheels.forEach(pw => {
          const dist = Math.hypot(p.x - pw.x, p.y - pw.y);
          if (dist < pw.radius + p.radius) {
            const pushAngle = pw.angle + Math.PI;
            p.x += Math.cos(pushAngle) * 8;
            p.y += Math.sin(pushAngle) * 8;
            totalDamage += 120;
            window.soundFX.playImpact(4);
            spawnParticles(p.x, p.y, '#ffd600', 8, 4);
          }
        });

        // Explosive Barrels
        barrels.forEach(bar => {
          if (!bar.exploded) {
            if (p.x > bar.x && p.x < bar.x + bar.w && p.y > bar.y && p.y < bar.y + bar.h) {
              bar.exploded = true;
              totalDamage += 1500;
              window.soundFX.playExplosion();
              spawnParticles(bar.x + bar.w / 2, bar.y + bar.h / 2, '#ff1744', 30, 8);
              // Launch ragdoll outward
              ragdoll.points.forEach(pt => {
                pt.oldX = pt.x - (Math.random() * 14 - 7);
                pt.oldY = pt.y + 16;
              });
              updateHUD();
            }
          }
        });
      });

      // Solve Distance Constraints (3 iterations)
      for (let iter = 0; iter < 3; iter++) {
        ragdoll.sticks.forEach(st => {
          const p0 = ragdoll.points[st.p0];
          const p1 = ragdoll.points[st.p1];
          const dx = p1.x - p0.x;
          const dy = p1.y - p0.y;
          const dist = Math.hypot(dx, dy);
          const diff = (dist - st.len) / (dist || 1);
          const offsetX = dx * 0.5 * diff;
          const offsetY = dy * 0.5 * diff;
          p0.x += offsetX;
          p0.y += offsetY;
          p1.x -= offsetX;
          p1.y -= offsetY;
        });
      }

      velVal.textContent = Math.round(maxVel * 12) + ' KM/H';

      // Check if settled (rest)
      if (maxVel < 0.25 && ragdoll.invulnTimer <= 0) {
        ragdoll.active = false;
        if (totalDamage >= targetDamage) {
          isVictory = true;
          window.soundFX.playClear();
          overlayTitle.textContent = "SLOPE " + currentLevel + " DEMOLISHED!";
          overlayDesc.textContent = "Target kinetic impact damage surpassed! Advance to next demolition slope.";
          nextBtn.style.display = 'inline-block';
          overlay.style.display = 'flex';
        } else if (dummiesRemaining === 0) {
          isGameOver = true;
          overlayTitle.textContent = "DEMOLITION TEST FAILED";
          overlayDesc.textContent = "Failed to reach the target damage threshold with allocated crash dummies. Adjust launch angle and retry!";
          overlay.style.display = 'flex';
        }
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
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scale coordinates
    const scaleX = canvas.width / 1100;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Slopes
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 6;
    slopeLines.forEach(l => {
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
    });

    // Draw Launch Catapult Tube
    ctx.save();
    ctx.translate(80, 140);
    ctx.rotate(launchAngle);
    ctx.fillStyle = '#37474f';
    ctx.fillRect(-10, -12, 50, 24);
    ctx.strokeStyle = activeTheme.secondary;
    ctx.lineWidth = 3;
    ctx.strokeRect(-10, -12, 50, 24);
    ctx.restore();

    // Draw Explosive Barrels
    barrels.forEach(bar => {
      if (!bar.exploded) {
        ctx.fillStyle = '#ff1744';
        ctx.fillRect(bar.x, bar.y, bar.w, bar.h);
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 2;
        ctx.strokeRect(bar.x, bar.y, bar.w, bar.h);
        ctx.fillStyle = '#ffd600';
        ctx.font = 'bold 8px monospace';
        ctx.fillText('TNT', bar.x + 4, bar.y + bar.h / 2 + 3);
      }
    });

    // Draw Pinwheels
    pinwheels.forEach(pw => {
      ctx.save();
      ctx.translate(pw.x, pw.y);
      ctx.rotate(pw.angle);
      ctx.strokeStyle = activeTheme.secondary;
      ctx.lineWidth = 5;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(pw.radius, 0);
        ctx.stroke();
        ctx.rotate(Math.PI / 2);
      }
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.restore();
    });

    // Draw Particles
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
      ctx.restore();
    });

    // Draw Ragdoll
    if (ragdoll) {
      // Draw Sticks (Limbs)
      ctx.strokeStyle = activeTheme.primary;
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ragdoll.sticks.forEach(st => {
        const p0 = ragdoll.points[st.p0];
        const p1 = ragdoll.points[st.p1];
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      });

      // Draw Points (Joints / Head)
      ragdoll.points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.name === 'head' ? '#ffd600' : '#e0f7fa';
        ctx.shadowColor = activeTheme.accent;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    }

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

writeFile(path.join(crdDir, 'index.html'), crdHtml);
writeFile(path.join(crdDir, 'style.css'), crdCss);
writeFile(path.join(crdDir, 'audio.js'), crdAudio);
writeFile(path.join(crdDir, 'game.js'), crdGame);
copyThumbnailToIcon('cyber-ragdoll-demolition');

// ============================================================================
// GAME 53: NEON ELASTIC SLING: ORBIT CATAPULT
// ============================================================================
console.log('Building Game 53: neon-elastic-sling...');
const nesDir = path.join(gamesDir, 'neon-elastic-sling');

const nesHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Neon Elastic Sling: Orbit Catapult - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Planetary System</div><div id="themeVal" class="hud-val">1: Moon Base</div></div>
      <div class="hud-box"><div class="hud-lbl">Bunkers Destroyed</div><div id="targetVal" class="hud-val">0 / 3 CORES</div></div>
      <div class="hud-box"><div class="hud-lbl">Quantum Probes</div><div id="probesVal" class="hud-val" style="color:#00ff88;">3 PROBES</div></div>
      <div class="hud-box"><div class="hud-lbl">Gravitational Status</div><div id="gravVal" class="hud-val" style="color:#ffd600;">ORBIT STABLE</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SYSTEMS (1-45)</button>
      <button id="restartBtn" class="action-btn">RETRY SECTOR</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SYSTEM &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">NEON ELASTIC SLING</h1>
        <p id="overlayDesc">Slingshot quantum kinetic probes through multi-body gravitational fields across 45 orbital stages. Harness planetary slingshots and gravitational wells to demolish fortified enemy space stations!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIALIZE ORBIT SLING</button>
        <div class="controls-hint">Controls: Click and drag back the quantum probe inside the slingshot, then release to launch into orbit!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const nesCss = `* {
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

const nesAudio = `// Native Web Audio API procedural synthesis for Neon Elastic Sling
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
  playStretch() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.linearRampToValueAtTime(700, now + 0.15);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    } catch(e) {}
  }
  playRelease() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(500, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.2);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch(e) {}
  }
  playShatter() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.22);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.24);
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

const nesGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const targetVal = document.getElementById('targetVal');
  const probesVal = document.getElementById('probesVal');
  const gravVal = document.getElementById('gravVal');
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

  let destroyedTargets = 0;
  let totalTargets = 3;
  let probesRemaining = 3;

  const slingshot = {
    x: 140,
    y: 350,
    armL: { x: 120, y: 320 },
    armR: { x: 160, y: 320 }
  };

  let activeProbe = null;
  let isDragging = false;
  let dragPos = { x: 140, y: 350 };

  let planets = [];
  let targets = [];
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

    destroyedTargets = 0;
    totalTargets = 2 + (lvl % 3);
    probesRemaining = 3;
    activeProbe = null;
    isDragging = false;
    dragPos = { x: slingshot.x, y: slingshot.y };

    // Gravity bodies (Planets)
    planets = [
      { x: 450, y: 320, radius: 42, mass: 650, color: activeTheme.primary }
    ];
    if (lvl > 12) {
      planets.push({ x: 720, y: 180, radius: 32, mass: 450, color: activeTheme.secondary });
    }
    if (lvl > 28) {
      planets.push({ x: 620, y: 460, radius: 36, mass: 500, color: '#ffd600' });
    }

    // Hostile space stations / target cores
    targets = [];
    const targetSlots = [
      { x: 800, y: 320 },
      { x: 860, y: 220 },
      { x: 860, y: 420 },
      { x: 940, y: 320 }
    ];
    for (let i = 0; i < totalTargets; i++) {
      const slot = targetSlots[i % targetSlots.length];
      targets.push({
        x: slot.x + ((lvl * 13) % 40) - 20,
        y: slot.y + ((lvl * 29) % 40) - 20,
        radius: 20,
        destroyed: false
      });
    }

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    targetVal.textContent = destroyedTargets + ' / ' + totalTargets + ' CORES';
    targetVal.style.color = destroyedTargets >= totalTargets ? '#39ff14' : '#ffd600';
    probesVal.textContent = probesRemaining + ' PROBES';
    probesVal.style.color = probesRemaining > 1 ? '#00ff88' : '#ff3d00';
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Pointer / Mouse events for Slingshot Drag
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
    if (!isPlaying || activeProbe || probesRemaining <= 0) return;
    const pos = getCanvasPos(e);
    const dist = Math.hypot(pos.x - slingshot.x, pos.y - slingshot.y);
    if (dist < 60) {
      isDragging = true;
      dragPos = pos;
      window.soundFX.playStretch();
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const pos = getCanvasPos(e);
    // Limit drag radius
    const dx = pos.x - slingshot.x;
    const dy = pos.y - slingshot.y;
    const dist = Math.hypot(dx, dy);
    const maxDist = 90;
    if (dist > maxDist) {
      dragPos.x = slingshot.x + (dx / dist) * maxDist;
      dragPos.y = slingshot.y + (dy / dist) * maxDist;
    } else {
      dragPos = pos;
    }
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    const dx = slingshot.x - dragPos.x;
    const dy = slingshot.y - dragPos.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 15) {
      const power = dist * 0.16;
      activeProbe = {
        x: slingshot.x,
        y: slingshot.y,
        vx: (dx / dist) * power,
        vy: (dy / dist) * power,
        radius: 8,
        trail: [],
        invulnTimer: 45 // spawn protection
      };
      probesRemaining--;
      window.soundFX.playRelease();
      updateHUD();
    }
    dragPos = { x: slingshot.x, y: slingshot.y };
  });

  // Touch support
  canvas.addEventListener('touchstart', (e) => {
    if (!isPlaying || activeProbe || probesRemaining <= 0) return;
    const pos = getCanvasPos(e);
    const dist = Math.hypot(pos.x - slingshot.x, pos.y - slingshot.y);
    if (dist < 60) {
      isDragging = true;
      dragPos = pos;
      window.soundFX.playStretch();
    }
  });
  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const pos = getCanvasPos(e);
    const dx = pos.x - slingshot.x;
    const dy = pos.y - slingshot.y;
    const dist = Math.hypot(dx, dy);
    const maxDist = 90;
    if (dist > maxDist) {
      dragPos.x = slingshot.x + (dx / dist) * maxDist;
      dragPos.y = slingshot.y + (dy / dist) * maxDist;
    } else {
      dragPos = pos;
    }
  });
  window.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const dx = slingshot.x - dragPos.x;
    const dy = slingshot.y - dragPos.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 15) {
      const power = dist * 0.16;
      activeProbe = {
        x: slingshot.x,
        y: slingshot.y,
        vx: (dx / dist) * power,
        vy: (dy / dist) * power,
        radius: 8,
        trail: [],
        invulnTimer: 45
      };
      probesRemaining--;
      window.soundFX.playRelease();
      updateHUD();
    }
    dragPos = { x: slingshot.x, y: slingshot.y };
  });

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

  function spawnParticles(x, y, color, count = 12) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 1 + Math.random() * 4;
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

    if (activeProbe) {
      if (activeProbe.invulnTimer > 0) activeProbe.invulnTimer--;

      // N-body gravity attraction from planets
      planets.forEach(pl => {
        const dx = pl.x - activeProbe.x;
        const dy = pl.y - activeProbe.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 8) {
          const force = (pl.mass) / (dist * dist);
          activeProbe.vx += (dx / dist) * force;
          activeProbe.vy += (dy / dist) * force;
        }

        // Crash into planet surface
        if (dist < pl.radius + activeProbe.radius) {
          spawnParticles(activeProbe.x, activeProbe.y, pl.color, 16);
          window.soundFX.playShatter();
          activeProbe = null;
        }
      });

      if (activeProbe) {
        activeProbe.x += activeProbe.vx;
        activeProbe.y += activeProbe.vy;

        activeProbe.trail.push({ x: activeProbe.x, y: activeProbe.y });
        if (activeProbe.trail.length > 25) activeProbe.trail.shift();

        // Check target destruction
        targets.forEach(t => {
          if (!t.destroyed) {
            const dist = Math.hypot(activeProbe.x - t.x, activeProbe.y - t.y);
            if (dist < activeProbe.radius + t.radius) {
              t.destroyed = true;
              destroyedTargets++;
              window.soundFX.playShatter();
              spawnParticles(t.x, t.y, activeTheme.accent, 24);
              updateHUD();

              if (destroyedTargets >= totalTargets) {
                isVictory = true;
                window.soundFX.playClear();
                overlayTitle.textContent = "SYSTEM " + currentLevel + " LIBERATED!";
                overlayDesc.textContent = "All enemy orbital bunker cores annihilated! Proceed to next planetary sector.";
                nextBtn.style.display = 'inline-block';
                overlay.style.display = 'flex';
              }
            }
          }
        });

        // Out of bounds check
        if (activeProbe.x < -100 || activeProbe.x > 1150 || activeProbe.y < -100 || activeProbe.y > 700) {
          activeProbe = null;
        }
      }

      // Check failure condition
      if (!activeProbe && destroyedTargets < totalTargets && probesRemaining === 0) {
        isGameOver = true;
        overlayTitle.textContent = "PROBES DEPLETED";
        overlayDesc.textContent = "All quantum probe munitions exhausted before destroying bunker cores. Adjust trajectory slingshot and retry!";
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
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Deep space coordinate grid
    ctx.save();
    ctx.strokeStyle = activeTheme.primary + '12';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Planets & Gravity Wells
    planets.forEach(pl => {
      // Gravity field aura
      ctx.save();
      ctx.beginPath();
      ctx.arc(pl.x, pl.y, pl.radius * 2.2, 0, Math.PI * 2);
      ctx.strokeStyle = pl.color + '33';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.stroke();

      // Planet body
      ctx.beginPath();
      ctx.arc(pl.x, pl.y, pl.radius, 0, Math.PI * 2);
      ctx.fillStyle = pl.color;
      ctx.shadowColor = pl.color;
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    });

    // Draw Targets (Bunkers)
    targets.forEach(t => {
      if (!t.destroyed) {
        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.beginPath();
        ctx.arc(0, 0, t.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff1744';
        ctx.shadowColor = '#ff1744';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('CORE', 0, 3);
        ctx.restore();
      }
    });

    // Draw Slingshot Pedestal & Elastic Bands
    ctx.save();
    ctx.strokeStyle = '#455a64';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(slingshot.x, slingshot.y + 70);
    ctx.lineTo(slingshot.x, slingshot.y);
    ctx.lineTo(slingshot.armL.x, slingshot.armL.y);
    ctx.moveTo(slingshot.x, slingshot.y);
    ctx.lineTo(slingshot.armR.x, slingshot.armR.y);
    ctx.stroke();

    // Elastic Bands
    ctx.strokeStyle = '#39ff14';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(slingshot.armL.x, slingshot.armL.y);
    ctx.lineTo(dragPos.x, dragPos.y);
    ctx.moveTo(slingshot.armR.x, slingshot.armR.y);
    ctx.lineTo(dragPos.x, dragPos.y);
    ctx.stroke();

    // Probe in sling
    if (!activeProbe && probesRemaining > 0) {
      ctx.beginPath();
      ctx.arc(dragPos.x, dragPos.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;
      ctx.fill();
    }
    ctx.restore();

    // Draw Active Probe & Trail
    if (activeProbe) {
      ctx.save();
      // Draw trail
      ctx.strokeStyle = '#00f0ff88';
      ctx.lineWidth = 3;
      ctx.beginPath();
      activeProbe.trail.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // Probe head
      ctx.beginPath();
      ctx.arc(activeProbe.x, activeProbe.y, activeProbe.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 15;
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

writeFile(path.join(nesDir, 'index.html'), nesHtml);
writeFile(path.join(nesDir, 'style.css'), nesCss);
writeFile(path.join(nesDir, 'audio.js'), nesAudio);
writeFile(path.join(nesDir, 'game.js'), nesGame);
copyThumbnailToIcon('neon-elastic-sling');

console.log('Part 1 Complete: graviton-pinball, cyber-ragdoll-demolition, neon-elastic-sling.');
