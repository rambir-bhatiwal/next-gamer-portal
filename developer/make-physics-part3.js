/**
 * Next Games/Game — Physics Category Part 3:
 * - fluid-particle-diverter (Game 57)
 * - pendulum-wrecking-bot (Game 58)
 * - magnetic-polarity-balancer (Game 59)
 * - orbital-trebuchet (Game 60)
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
// GAME 57: WATER STREAM PARTICLE DIVERTER: FLUID LAB
// ============================================================================
console.log('Building Game 57: fluid-particle-diverter...');
const fpdDir = path.join(gamesDir, 'fluid-particle-diverter');

const fpdHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Water Stream Particle Diverter: Fluid Lab - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Fluid Lab</div><div id="themeVal" class="hud-val">1: Cleanroom Cyan</div></div>
      <div class="hud-box"><div class="hud-lbl">Flask Volume</div><div id="volumeVal" class="hud-val">0 / 60 ML</div></div>
      <div class="hud-box"><div class="hud-lbl">Fluid Pressure</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Deflector Budget</div><div id="paddlesVal" class="hud-val" style="color:#ffd600;">3 PADDLES</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">LABS (1-45)</button>
      <button id="streamBtn" class="action-btn stream-btn">TOGGLE FLOW [SPACE]</button>
      <button id="clearPaddlesBtn" class="action-btn">CLEAR PADDLES</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT LAB &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">FLUID LAB DIVERTER</h1>
        <p id="overlayDesc">Divert streams of hundreds of glowing fluid particles into matching chemical flasks across 45 fluid dynamics stages. Place and rotate deflector paddles to guide hydrodynamic flow!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIALIZE FLUID STREAM</button>
        <div class="controls-hint">Controls: Click and drag anywhere on the canvas to place a deflector paddle. Press [Space] to toggle fluid nozzle flow!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const fpdCss = `* {
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
.stream-btn {
  background: #00e5ff;
  color: #04020f;
  border-color: #00e5ff;
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

const fpdAudio = `// Native Web Audio API procedural synthesis for Fluid Lab Diverter
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
  playDrop() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, now);
      osc.frequency.exponentialRampToValueAtTime(1400, now + 0.08);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch(e) {}
  }
  playFlaskFill() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
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

const fpdGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const volumeVal = document.getElementById('volumeVal');
  const shieldVal = document.getElementById('shieldVal');
  const paddlesVal = document.getElementById('paddlesVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const streamBtn = document.getElementById('streamBtn');
  const clearPaddlesBtn = document.getElementById('clearPaddlesBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let streamActive = true;
  let filledVolume = 0;
  let targetVolume = 60;
  let maxPaddles = 4;
  let particles = [];
  let paddles = [];
  let isDrawingPaddle = false;
  let paddleStart = { x: 0, y: 0 };
  let paddleCurrent = { x: 0, y: 0 };

  // Emitter Nozzle
  const nozzle = { x: 250, y: 60 };

  // Collection Flask
  const flask = {
    x: 750,
    y: 480,
    w: 90,
    h: 80
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

    filledVolume = 0;
    targetVolume = 50 + (lvl % 5) * 5;
    maxPaddles = 3 + (lvl % 2);
    streamActive = true;
    particles = [];
    paddles = [];

    // Reposition flask based on level
    const seed = lvl * 27;
    flask.x = 650 + (seed % 150);
    flask.y = 450;

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    volumeVal.textContent = filledVolume + ' / ' + targetVolume + ' ML';
    volumeVal.style.color = filledVolume >= targetVolume ? '#39ff14' : '#00f0ff';
    paddlesVal.textContent = (maxPaddles - paddles.length) + ' PADDLES';
    paddlesVal.style.color = (maxPaddles - paddles.length) > 0 ? '#ffd600' : '#ff1744';
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
    if (!isPlaying || paddles.length >= maxPaddles) return;
    isDrawingPaddle = true;
    paddleStart = getCanvasPos(e);
    paddleCurrent = paddleStart;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDrawingPaddle) return;
    paddleCurrent = getCanvasPos(e);
  });

  window.addEventListener('mouseup', () => {
    if (!isDrawingPaddle) return;
    isDrawingPaddle = false;
    const len = Math.hypot(paddleCurrent.x - paddleStart.x, paddleCurrent.y - paddleStart.y);
    if (len > 30) {
      paddles.push({
        x1: paddleStart.x,
        y1: paddleStart.y,
        x2: paddleCurrent.x,
        y2: paddleCurrent.y
      });
      updateHUD();
    }
  });

  streamBtn.onclick = () => streamActive = !streamActive;
  clearPaddlesBtn.onclick = () => {
    paddles = [];
    updateHUD();
  };

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

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    // Emit fluid particles
    if (streamActive && particles.length < 150) {
      particles.push({
        x: nozzle.x + Math.random() * 8 - 4,
        y: nozzle.y,
        vx: Math.random() * 0.8 - 0.4,
        vy: 3.5 + Math.random(),
        radius: 4,
        invulnTimer: 45
      });
    }

    // Update Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      if (p.invulnTimer > 0) p.invulnTimer--;

      p.vy += 0.22; // gravity
      p.x += p.vx;
      p.y += p.vy;

      // Deflector paddle collisions
      paddles.forEach(pad => {
        const ldx = pad.x2 - pad.x1;
        const ldy = pad.y2 - pad.y1;
        const len = Math.hypot(ldx, ldy);
        const u = Math.max(0, Math.min(1, ((p.x - pad.x1) * ldx + (p.y - pad.y1) * ldy) / (len * len)));
        const nearX = pad.x1 + u * ldx;
        const nearY = pad.y1 + u * ldy;
        const dist = Math.hypot(p.x - nearX, p.y - nearY);

        if (dist < p.radius + 6) {
          // Bounce off normal
          const nx = -(pad.y2 - pad.y1) / len;
          const ny = (pad.x2 - pad.x1) / len;
          const dot = p.vx * nx + p.vy * ny;
          p.vx = (p.vx - 1.8 * dot * nx) * 0.85;
          p.vy = (p.vy - 1.8 * dot * ny) * 0.85;
          p.x = nearX + nx * (p.radius + 7);
          p.y = nearY + ny * (p.radius + 7);
          if (Math.random() < 0.15) window.soundFX.playDrop();
        }
      });

      // Check Flask collection
      if (p.x > flask.x && p.x < flask.x + flask.w && p.y > flask.y && p.y < flask.y + flask.h) {
        particles.splice(i, 1);
        filledVolume++;
        if (filledVolume % 5 === 0) window.soundFX.playFlaskFill();
        updateHUD();

        if (filledVolume >= targetVolume) {
          isVictory = true;
          window.soundFX.playClear();
          overlayTitle.textContent = "FLUID LAB " + currentLevel + " COMPLETE!";
          overlayDesc.textContent = "Chemical flask filled to required specification! Proceed to next fluid lab.";
          nextBtn.style.display = 'inline-block';
          overlay.style.display = 'flex';
          return;
        }
        continue;
      }

      // Out of screen bounds
      if (p.y > 600 || p.x < 0 || p.x > 1000) {
        particles.splice(i, 1);
      }
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

    // Draw Nozzle Emitter
    ctx.fillStyle = '#37474f';
    ctx.fillRect(nozzle.x - 16, nozzle.y - 40, 32, 40);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.strokeRect(nozzle.x - 16, nozzle.y - 40, 32, 40);

    // Draw Paddles
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    paddles.forEach(pad => {
      ctx.beginPath();
      ctx.moveTo(pad.x1, pad.y1);
      ctx.lineTo(pad.x2, pad.y2);
      ctx.stroke();
    });

    // Draw active drawing paddle preview
    if (isDrawingPaddle) {
      ctx.strokeStyle = '#ff007f';
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(paddleStart.x, paddleStart.y);
      ctx.lineTo(paddleCurrent.x, paddleCurrent.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw Flask Container
    ctx.fillStyle = '#101626';
    ctx.fillRect(flask.x, flask.y, flask.w, flask.h);
    ctx.strokeStyle = activeTheme.secondary;
    ctx.lineWidth = 4;
    ctx.strokeRect(flask.x, flask.y, flask.w, flask.h);

    // Fill level
    const fillH = (filledVolume / targetVolume) * (flask.h - 6);
    ctx.fillStyle = activeTheme.primary;
    ctx.shadowColor = activeTheme.primary;
    ctx.shadowBlur = 12;
    ctx.fillRect(flask.x + 4, flask.y + flask.h - fillH - 4, flask.w - 8, fillH);
    ctx.shadowBlur = 0;

    // Flask graduation lines
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    for (let y = flask.y + 10; y < flask.y + flask.h - 10; y += 15) {
      ctx.beginPath();
      ctx.moveTo(flask.x + flask.w - 14, y);
      ctx.lineTo(flask.x + flask.w - 4, y);
      ctx.stroke();
    }

    // Draw Fluid Particles
    ctx.fillStyle = '#18ffff';
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
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

writeFile(path.join(fpdDir, 'index.html'), fpdHtml);
writeFile(path.join(fpdDir, 'style.css'), fpdCss);
writeFile(path.join(fpdDir, 'audio.js'), fpdAudio);
writeFile(path.join(fpdDir, 'game.js'), fpdGame);
copyThumbnailToIcon('fluid-particle-diverter');

// ============================================================================
// GAME 58: PENDULUM WRECKING BOT: KINETIC DESTROYER
// ============================================================================
console.log('Building Game 58: pendulum-wrecking-bot...');
const pwbDir = path.join(gamesDir, 'pendulum-wrecking-bot');

const pwbHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Pendulum Wrecking Bot: Kinetic Destroyer - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Demolition Site</div><div id="themeVal" class="hud-val">1: Data Center</div></div>
      <div class="hud-box"><div class="hud-lbl">Server Rubble</div><div id="rubbleVal" class="hud-val">0 / 70% SMASHED</div></div>
      <div class="hud-box"><div class="hud-lbl">Swings Remaining</div><div id="swingsVal" class="hud-val" style="color:#00ff88;">4 SWINGS</div></div>
      <div class="hud-box"><div class="hud-lbl">Kinetic Impulse</div><div id="impulseVal" class="hud-val" style="color:#ffd600;">0 KN</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SITES (1-45)</button>
      <button id="shortenBtn" class="action-btn">WINCH UP [W]</button>
      <button id="lengthenBtn" class="action-btn">WINCH DOWN [S]</button>
      <button id="releaseBtn" class="action-btn swing-btn">RELEASE PENDULUM [SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SITE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">PENDULUM WRECKING BOT</h1>
        <p id="overlayDesc">Release and swing a massive electromagnetic wrecking ball on an adjustable pendulum cable across 45 stages. Smash high-density server rack towers into rubble before swings expire!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">DEPLOY WRECKING BOT</button>
        <div class="controls-hint">Controls: [W/S] or Winch buttons to adjust cable length. [Space] or Release button to release the pendulum and smash towers!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const pwbCss = `* {
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
.swing-btn {
  background: #ff007f;
  color: #fff;
  border-color: #ff007f;
  flex: 1;
  max-width: 260px;
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

const pwbAudio = `// Native Web Audio API procedural synthesis for Pendulum Wrecking Bot
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
  playWinch() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(300, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch(e) {}
  }
  playImpact() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.25);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
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

const pwbGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const rubbleVal = document.getElementById('rubbleVal');
  const swingsVal = document.getElementById('swingsVal');
  const impulseVal = document.getElementById('impulseVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const shortenBtn = document.getElementById('shortenBtn');
  const lengthenBtn = document.getElementById('lengthenBtn');
  const releaseBtn = document.getElementById('releaseBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let swingsLeft = 4;
  let destroyedBlocks = 0;
  let totalBlocks = 12;

  // Pendulum setup
  const pivot = { x: 300, y: 70 };
  let cableLength = 260;
  let angle = -1.2; // initial release angle
  let angleVel = 0;
  let isSwinging = false;

  let blocks = [];
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

    swingsLeft = 4;
    destroyedBlocks = 0;
    isSwinging = false;
    cableLength = 260;
    angle = -1.2;
    angleVel = 0;

    // Build tower of blocks
    blocks = [];
    const rows = 4 + (lvl % 3);
    const cols = 3;
    totalBlocks = rows * cols;
    const startX = 600;
    const startY = 480;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        blocks.push({
          x: startX + c * 38,
          y: startY - r * 38,
          w: 34,
          h: 34,
          vx: 0,
          vy: 0,
          destroyed: false
        });
      }
    }

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    const pct = Math.round((destroyedBlocks / totalBlocks) * 100);
    rubbleVal.textContent = pct + '% / 70% SMASHED';
    rubbleVal.style.color = pct >= 70 ? '#39ff14' : '#00f0ff';
    swingsVal.textContent = swingsLeft + ' SWINGS';
    swingsVal.style.color = swingsLeft > 1 ? '#00ff88' : '#ff3d00';
  }

  function releasePendulum() {
    if (isSwinging || swingsLeft <= 0) return;
    isSwinging = true;
    swingsLeft--;
    angle = -1.35;
    angleVel = 0;
    updateHUD();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      cableLength = Math.max(160, cableLength - 8);
      window.soundFX.playWinch();
    }
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      cableLength = Math.min(320, cableLength + 8);
      window.soundFX.playWinch();
    }
    if (e.code === 'Space') {
      e.preventDefault();
      releasePendulum();
    }
  });

  shortenBtn.onclick = () => { cableLength = Math.max(160, cableLength - 8); window.soundFX.playWinch(); };
  lengthenBtn.onclick = () => { cableLength = Math.min(320, cableLength + 8); window.soundFX.playWinch(); };
  releaseBtn.onclick = () => releasePendulum();

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
    for (let i = 0; i < 14; i++) {
      const spd = 2 + Math.random() * 5;
      const a = Math.random() * Math.PI * 2;
      particles.push({
        x, y,
        vx: Math.cos(a) * spd,
        vy: Math.sin(a) * spd,
        life: 1,
        decay: 0.04,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    // Harmonic Pendulum equation: theta'' = -(g / L) * sin(theta) - damping * theta'
    if (isSwinging) {
      const g = 9.8;
      const damping = 0.003;
      const angleAcc = -(g / cableLength) * Math.sin(angle) - damping * angleVel;
      angleVel += angleAcc;
      angle += angleVel;

      const ballX = pivot.x + Math.sin(angle) * cableLength;
      const ballY = pivot.y + Math.cos(angle) * cableLength;
      const ballRadius = 26;

      impulseVal.textContent = Math.round(Math.abs(angleVel) * 1500) + ' KN';

      // Check block collisions
      blocks.forEach(b => {
        if (!b.destroyed) {
          const dist = Math.hypot(ballX - (b.x + b.w / 2), ballY - (b.y + b.h / 2));
          if (dist < ballRadius + 18) {
            b.destroyed = true;
            destroyedBlocks++;
            window.soundFX.playImpact();
            spawnParticles(b.x + b.w / 2, b.y + b.h / 2, activeTheme.accent);
            updateHUD();

            // Win condition (70% destroyed)
            if ((destroyedBlocks / totalBlocks) >= 0.70) {
              isVictory = true;
              window.soundFX.playClear();
              overlayTitle.textContent = "SITE " + currentLevel + " DEMOLISHED!";
              overlayDesc.textContent = "Over 70% of server structures pulverized! Advance to next demolition site.";
              nextBtn.style.display = 'inline-block';
              overlay.style.display = 'flex';
            }
          }
        }
      });

      // Stop swing after energy dissipates
      if (Math.abs(angleVel) < 0.005 && Math.abs(angle) < 0.05) {
        isSwinging = false;
        angle = -1.2;
        angleVel = 0;
        if ((destroyedBlocks / totalBlocks) < 0.70 && swingsLeft === 0) {
          isGameOver = true;
          overlayTitle.textContent = "SWINGS EXHAUSTED";
          overlayDesc.textContent = "Failed to smash 70% of server towers. Adjust cable length and release timing!";
          overlay.style.display = 'flex';
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

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Ground Floor
    ctx.fillStyle = '#101626';
    ctx.fillRect(0, 514, 1000, 90);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 514, 1000, 90);

    // Pivot mount
    ctx.fillStyle = '#37474f';
    ctx.beginPath();
    ctx.arc(pivot.x, pivot.y, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Pendulum Ball & Cable
    const ballX = pivot.x + Math.sin(angle) * cableLength;
    const ballY = pivot.y + Math.cos(angle) * cableLength;

    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pivot.x, pivot.y);
    ctx.lineTo(ballX, ballY);
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    ctx.arc(ballX, ballY, 26, 0, Math.PI * 2);
    ctx.fillStyle = '#263238';
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 14;
    ctx.fill();
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    // Draw Blocks
    blocks.forEach(b => {
      if (!b.destroyed) {
        ctx.fillStyle = '#152238';
        ctx.fillRect(b.x, b.y, b.w, b.h);
        ctx.strokeStyle = activeTheme.primary;
        ctx.lineWidth = 2;
        ctx.strokeRect(b.x, b.y, b.w, b.h);
        // Server blinker light
        ctx.fillStyle = '#39ff14';
        ctx.fillRect(b.x + 4, b.y + 4, 6, 6);
      }
    });

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

writeFile(path.join(pwbDir, 'index.html'), pwbHtml);
writeFile(path.join(pwbDir, 'style.css'), pwbCss);
writeFile(path.join(pwbDir, 'audio.js'), pwbAudio);
writeFile(path.join(pwbDir, 'game.js'), pwbGame);
copyThumbnailToIcon('pendulum-wrecking-bot');

// ============================================================================
// GAME 59: MAGNETIC POLARITY BALANCER: LEVITATOR
// ============================================================================
console.log('Building Game 59: magnetic-polarity-balancer...');
const mpbDir = path.join(gamesDir, 'magnetic-polarity-balancer');

const mpbHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Magnetic Polarity Balancer: Levitator - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Coil Chamber</div><div id="themeVal" class="hud-val">1: Magnetic Lab</div></div>
      <div class="hud-box"><div class="hud-lbl">Stability Time</div><div id="stableVal" class="hud-val">0 / 12 SEC</div></div>
      <div class="hud-box"><div class="hud-lbl">Core Shields</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Coil Voltage</div><div id="voltageVal" class="hud-val" style="color:#ffd600;">50% FLUX</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">CHAMBERS (1-45)</button>
      <button id="pwrDownBtn" class="action-btn">VOLTS - [S/DOWN]</button>
      <button id="pwrUpBtn" class="action-btn pwr-btn">VOLTS + [W/UP]</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT CHAMBER &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">MAGNETIC LEVITATOR</h1>
        <p id="overlayDesc">Balance a magnetic quantum core suspended in mid-air between electromagnetic coils across 45 chambers. Regulate real-time coil voltage to maintain perfect equilibrium against turbulence!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">ACTIVATE MAGNETIC COILS</button>
        <div class="controls-hint">Controls: Press [W/Up] or [S/Down] to adjust coil voltage. Keep the core within the green target zone for the required duration!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const mpbCss = `* {
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
.pwr-btn {
  background: #00ff88;
  color: #04020f;
  border-color: #00ff88;
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

const mpbAudio = `// Native Web Audio API procedural synthesis for Magnetic Levitator
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
  playHum(voltage = 50) {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      const freq = 60 + (voltage * 1.5);
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
    } catch(e) {}
  }
  playSpark() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(900, now);
      osc.frequency.exponentialRampToValueAtTime(100, now + 0.12);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
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

const mpbGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const stableVal = document.getElementById('stableVal');
  const shieldVal = document.getElementById('shieldVal');
  const voltageVal = document.getElementById('voltageVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const pwrDownBtn = document.getElementById('pwrDownBtn');
  const pwrUpBtn = document.getElementById('pwrUpBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let voltage = 50; // 0 to 100%
  let stableTimer = 0;
  let requiredTime = 12 * 60; // 12 seconds @ 60fps
  let shields = 3;
  let invulnTimer = 0;

  // Magnetic Core Object
  const core = {
    x: 500,
    y: 300,
    vy: 0,
    radius: 16
  };

  const chamber = {
    topCoilY: 100,
    bottomCoilY: 500,
    targetY: 300,
    targetRange: 75
  };

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

    voltage = 50;
    stableTimer = 0;
    requiredTime = (10 + (lvl % 5)) * 60;
    shields = 3;
    invulnTimer = 90; // invulnerable grace on spawn

    core.x = 500;
    core.y = 300;
    core.vy = 0;

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    const sec = (stableTimer / 60).toFixed(1);
    const reqSec = (requiredTime / 60).toFixed(0);
    stableVal.textContent = sec + ' / ' + reqSec + ' SEC';
    stableVal.style.color = stableTimer > 0 ? '#39ff14' : '#00f0ff';
    shieldVal.textContent = shields + ' SHIELDS';
    shieldVal.style.color = shields > 1 ? '#00ff88' : '#ff3d00';
    voltageVal.textContent = Math.round(voltage) + '% FLUX';
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      voltage = Math.min(100, voltage + 3);
      window.soundFX.playHum(voltage);
      updateHUD();
    }
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      voltage = Math.max(0, voltage - 3);
      window.soundFX.playHum(voltage);
      updateHUD();
    }
  });

  pwrUpBtn.onclick = () => { voltage = Math.min(100, voltage + 4); window.soundFX.playHum(voltage); updateHUD(); };
  pwrDownBtn.onclick = () => { voltage = Math.max(0, voltage - 4); window.soundFX.playHum(voltage); updateHUD(); };

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
      const a = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 4;
      particles.push({
        x, y,
        vx: Math.cos(a) * spd,
        vy: Math.sin(a) * spd,
        life: 1,
        decay: 0.04,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (invulnTimer > 0) invulnTimer--;

    // Magnetic force: Top coil pulls upward proportional to voltage
    const topPull = (voltage / 50) * 0.38;
    const gravity = 0.36;
    const turbulence = (Math.sin(Date.now() * 0.005) * 0.08);

    core.vy += (gravity - topPull + turbulence);
    core.vy *= 0.97; // air resistance damping
    core.y += core.vy;

    // Boundary check with coils
    if (core.y - core.radius <= chamber.topCoilY + 15 || core.y + core.radius >= chamber.bottomCoilY - 15) {
      if (invulnTimer <= 0) {
        shields--;
        invulnTimer = 60; // invulnerable grace period
        window.soundFX.playSpark();
        spawnParticles(core.x, core.y, '#ff1744');
        updateHUD();

        if (shields <= 0) {
          isGameOver = true;
          overlayTitle.textContent = "CORE DISCHARGE FAILURE";
          overlayDesc.textContent = "The quantum core touched electromagnetic coils and discharged completely. Retry chamber!";
          overlay.style.display = 'flex';
        } else {
          // Re-center core
          core.y = chamber.targetY;
          core.vy = 0;
        }
      }
    }

    // Equilibrium target zone check
    if (Math.abs(core.y - chamber.targetY) < chamber.targetRange) {
      stableTimer++;
      updateHUD();
      if (stableTimer >= requiredTime) {
        isVictory = true;
        window.soundFX.playClear();
        overlayTitle.textContent = "CHAMBER " + currentLevel + " STABILIZED!";
        overlayDesc.textContent = "Core equilibrium successfully maintained for required duration! Proceed to next chamber.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }
    } else {
      if (stableTimer > 0) stableTimer = Math.max(0, stableTimer - 2);
      updateHUD();
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

    // Draw Top Coil
    ctx.fillStyle = '#263238';
    ctx.fillRect(350, chamber.topCoilY - 40, 300, 40);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(350, chamber.topCoilY - 40, 300, 40);

    // Draw Bottom Coil
    ctx.fillStyle = '#263238';
    ctx.fillRect(350, chamber.bottomCoilY, 300, 40);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(350, chamber.bottomCoilY, 300, 40);

    // Target Equilibrium Zone
    ctx.fillStyle = 'rgba(0, 255, 136, 0.08)';
    ctx.fillRect(360, chamber.targetY - chamber.targetRange, 280, chamber.targetRange * 2);
    ctx.strokeStyle = 'rgba(0, 255, 136, 0.3)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.strokeRect(360, chamber.targetY - chamber.targetRange, 280, chamber.targetRange * 2);
    ctx.setLineDash([]);

    // Magnetic Flux Field Lines
    ctx.strokeStyle = activeTheme.accent + '22';
    ctx.lineWidth = 2;
    for (let x = 400; x <= 600; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, chamber.topCoilY);
      ctx.lineTo(x, chamber.bottomCoilY);
      ctx.stroke();
    }

    // Draw Magnetic Core
    ctx.save();
    ctx.translate(core.x, core.y);
    if (invulnTimer > 0 && Math.floor(invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    ctx.beginPath();
    ctx.arc(0, 0, core.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffd600';
    ctx.shadowColor = activeTheme.accent;
    ctx.shadowBlur = 18;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    if (shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, core.radius + 6, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

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

writeFile(path.join(mpbDir, 'index.html'), mpbHtml);
writeFile(path.join(mpbDir, 'style.css'), mpbCss);
writeFile(path.join(mpbDir, 'audio.js'), mpbAudio);
writeFile(path.join(mpbDir, 'game.js'), mpbGame);
copyThumbnailToIcon('magnetic-polarity-balancer');

// ============================================================================
// GAME 60: ORBITAL TREBUCHET: DEEP SPACE HURLER
// ============================================================================
console.log('Building Game 60: orbital-trebuchet...');
const otDir = path.join(gamesDir, 'orbital-trebuchet');

const otHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Orbital Trebuchet: Deep Space Hurler - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Siege Platform</div><div id="themeVal" class="hud-val">1: Lunar Siege</div></div>
      <div class="hud-box"><div class="hud-lbl">Fortress Hits</div><div id="hitsVal" class="hud-val">0 / 2 HITS</div></div>
      <div class="hud-box"><div class="hud-lbl">Payload Shells</div><div id="shellsVal" class="hud-val" style="color:#00ff88;">3 SHELLS</div></div>
      <div class="hud-box"><div class="hud-lbl">Counterweight</div><div id="weightVal" class="hud-val" style="color:#ffd600;">85 TONS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <button id="weightDownBtn" class="action-btn">MASS - [A]</button>
      <button id="weightUpBtn" class="action-btn">MASS + [D]</button>
      <button id="launchBtn" class="action-btn launch-btn">TRIGGER PIN [SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">ORBITAL TREBUCHET</h1>
        <p id="overlayDesc">Calibrate counterweight mass and release pin dynamics to launch orbital siege payloads across planetary gravity wells across 45 stages. Demolish fortified orbital bastions!</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">WINCH COUNTERWEIGHT</button>
        <div class="controls-hint">Controls: [A/D] or Mass buttons to adjust counterweight mass. [Space] or Trigger Pin button to release the trebuchet swing!</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const otCss = `* {
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
  background: #ff9100;
  color: #04020f;
  border-color: #ff9100;
  flex: 1;
  max-width: 260px;
  font-weight: 800;
  box-shadow: 0 0 15px rgba(255, 145, 0, 0.4);
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

const otAudio = `// Native Web Audio API procedural synthesis for Orbital Trebuchet
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
  playRelease() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.linearRampToValueAtTime(450, now + 0.25);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch(e) {}
  }
  playImpact() {
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.3);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.32);
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

const otGame = `(() => {
  ${PHYSICS_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const hitsVal = document.getElementById('hitsVal');
  const shellsVal = document.getElementById('shellsVal');
  const weightVal = document.getElementById('weightVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const weightDownBtn = document.getElementById('weightDownBtn');
  const weightUpBtn = document.getElementById('weightUpBtn');
  const launchBtn = document.getElementById('launchBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let shellsLeft = 3;
  let fortressHits = 0;
  let neededHits = 2;
  let counterweight = 85; // tons

  // Trebuchet Beam state
  const trebuchet = {
    x: 180,
    y: 360,
    beamAngle: 0.6,
    beamAngleVel: 0,
    isFiring: false
  };

  let activePayload = null;
  let fortress = { x: 780, y: 320, w: 90, h: 120, health: 100 };
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

    shellsLeft = 3;
    fortressHits = 0;
    neededHits = 1 + (lvl % 2);
    counterweight = 70 + (lvl * 2);

    trebuchet.beamAngle = 0.6;
    trebuchet.beamAngleVel = 0;
    trebuchet.isFiring = false;
    activePayload = null;

    fortress.x = 750 + ((lvl * 17) % 100);
    fortress.health = 100;

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    hitsVal.textContent = fortressHits + ' / ' + neededHits + ' HITS';
    hitsVal.style.color = fortressHits >= neededHits ? '#39ff14' : '#00f0ff';
    shellsVal.textContent = shellsLeft + ' SHELLS';
    shellsVal.style.color = shellsLeft > 1 ? '#00ff88' : '#ff3d00';
    weightVal.textContent = counterweight + ' TONS';
  }

  function triggerTrebuchet() {
    if (trebuchet.isFiring || activePayload || shellsLeft <= 0) return;
    trebuchet.isFiring = true;
    trebuchet.beamAngle = 0.6;
    trebuchet.beamAngleVel = -0.05 * (counterweight / 75);
    shellsLeft--;
    window.soundFX.playRelease();
    updateHUD();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
      counterweight = Math.max(40, counterweight - 5);
      updateHUD();
    }
    if (e.code === 'KeyD' || e.code === 'ArrowRight') {
      counterweight = Math.min(180, counterweight + 5);
      updateHUD();
    }
    if (e.code === 'Space') {
      e.preventDefault();
      triggerTrebuchet();
    }
  });

  weightDownBtn.onclick = () => { counterweight = Math.max(40, counterweight - 5); updateHUD(); };
  weightUpBtn.onclick = () => { counterweight = Math.min(180, counterweight + 5); updateHUD(); };
  launchBtn.onclick = () => triggerTrebuchet();

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
    window.soundFX.playImpact();
    for (let i = 0; i < 24; i++) {
      const a = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 6;
      particles.push({
        x, y,
        vx: Math.cos(a) * spd,
        vy: Math.sin(a) * spd,
        life: 1,
        decay: 0.035,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    // Trebuchet Beam Swing Physics
    if (trebuchet.isFiring) {
      trebuchet.beamAngleVel -= 0.008 * (counterweight / 75);
      trebuchet.beamAngle += trebuchet.beamAngleVel;

      // Release Payload at release pin angle
      if (trebuchet.beamAngle <= -0.55 && !activePayload) {
        const armLen = 95;
        const tipX = trebuchet.x + Math.cos(trebuchet.beamAngle) * armLen;
        const tipY = trebuchet.y + Math.sin(trebuchet.beamAngle) * armLen;
        const speed = Math.abs(trebuchet.beamAngleVel) * armLen * 0.9;

        activePayload = {
          x: tipX,
          y: tipY,
          vx: Math.cos(-0.7) * speed,
          vy: Math.sin(-0.7) * speed,
          radius: 9,
          invulnTimer: 45
        };
      }

      // Stop beam
      if (trebuchet.beamAngle <= -1.1) {
        trebuchet.beamAngle = -1.1;
        trebuchet.beamAngleVel = 0;
        trebuchet.isFiring = false;
      }
    }

    // Update active payload
    if (activePayload) {
      if (activePayload.invulnTimer > 0) activePayload.invulnTimer--;

      activePayload.vy += 0.25; // gravity
      activePayload.x += activePayload.vx;
      activePayload.y += activePayload.vy;

      // Check Fortress Hit
      if (activePayload.x > fortress.x && activePayload.x < fortress.x + fortress.w &&
          activePayload.y > fortress.y && activePayload.y < fortress.y + fortress.h) {
        fortressHits++;
        spawnExplosion(activePayload.x, activePayload.y, '#ffd600');
        activePayload = null;
        updateHUD();

        if (fortressHits >= neededHits) {
          isVictory = true;
          window.soundFX.playClear();
          overlayTitle.textContent = "SECTOR " + currentLevel + " OBLITERATED!";
          overlayDesc.textContent = "Hostile orbital bastion reduced to space rubble! Advance to next siege sector.";
          nextBtn.style.display = 'inline-block';
          overlay.style.display = 'flex';
          return;
        }
      }

      // Ground or Out of bounds hit
      if (activePayload && (activePayload.y > 480 || activePayload.x > 1050)) {
        spawnExplosion(activePayload.x, Math.min(480, activePayload.y), '#ff1744');
        activePayload = null;

        // Reset beam for next shell
        trebuchet.beamAngle = 0.6;

        if (fortressHits < neededHits && shellsLeft === 0) {
          isGameOver = true;
          overlayTitle.textContent = "PAYLOADS EXHAUSTED";
          overlayDesc.textContent = "All orbital trebuchet shells expended before destroying bastion. Adjust counterweight mass and retry!";
          overlay.style.display = 'flex';
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

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Surface Terrain Floor
    ctx.fillStyle = '#101626';
    ctx.fillRect(0, 480, 1000, 120);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 480, 1000, 120);

    // Trebuchet Frame Chassis
    ctx.strokeStyle = '#455a64';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(trebuchet.x - 35, 480);
    ctx.lineTo(trebuchet.x, trebuchet.y);
    ctx.lineTo(trebuchet.x + 35, 480);
    ctx.stroke();

    // Pivot Axle
    ctx.fillStyle = '#ffd600';
    ctx.beginPath();
    ctx.arc(trebuchet.x, trebuchet.y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Rotating Arm & Counterweight
    ctx.save();
    ctx.translate(trebuchet.x, trebuchet.y);
    ctx.rotate(trebuchet.beamAngle);

    // Beam
    ctx.strokeStyle = activeTheme.secondary;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-45, 0); // counterweight side
    ctx.lineTo(95, 0);  // sling payload side
    ctx.stroke();

    // Counterweight Mass
    ctx.fillStyle = '#b71c1c';
    ctx.fillRect(-65, -15, 30, 30);
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 2;
    ctx.strokeRect(-65, -15, 30, 30);

    // Ready Payload in sling
    if (!activePayload && !trebuchet.isFiring && shellsLeft > 0) {
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(95, 0, 9, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Draw Fortress Bastion
    ctx.fillStyle = '#1b2838';
    ctx.fillRect(fortress.x, fortress.y, fortress.w, fortress.h);
    ctx.strokeStyle = '#ff1744';
    ctx.lineWidth = 3;
    ctx.strokeRect(fortress.x, fortress.y, fortress.w, fortress.h);
    ctx.fillStyle = '#ff1744';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('BASTION', fortress.x + 16, fortress.y + fortress.h / 2);

    // Draw Flying Payload
    if (activePayload) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(activePayload.x, activePayload.y, activePayload.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
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

writeFile(path.join(otDir, 'index.html'), otHtml);
writeFile(path.join(otDir, 'style.css'), otCss);
writeFile(path.join(otDir, 'audio.js'), otAudio);
writeFile(path.join(otDir, 'game.js'), otGame);
copyThumbnailToIcon('orbital-trebuchet');

console.log('Part 3 Complete: fluid-particle-diverter, pendulum-wrecking-bot, magnetic-polarity-balancer, orbital-trebuchet.');
