/**
 * Next Games/Game — Platformer Category Part 2:
 * - quantum-teleport-hopper (Game 44)
 * - skyward-spire (Game 45)
 * - silicon-cave-explorer (Game 46)
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
  { id: 44, name: "Tesseract Hyperspace", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Quantum Singularity Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];`;

// ----------------------------------------------------------------------------
// GAME 44: QUANTUM TELEPORT HOPPER: WARP JUMPER
// ----------------------------------------------------------------------------
console.log('Building Game 44: quantum-teleport-hopper...');
const qthDir = path.join(gamesDir, 'quantum-teleport-hopper');

const qthHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Quantum Teleport Hopper: Warp Jumper - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Test Chamber</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Quantum Beacons</div><div id="beaconVal" class="hud-val" style="color:#00f0ff;">READY [CLICK]</div></div>
      <div class="hud-box"><div class="hud-lbl">Hopper Shields</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Exit Portal</div><div id="portalVal" class="hud-val" style="color:#ffd600;">LOCKED</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">CHAMBERS (1-45)</button>
      <button id="warpBtn" class="action-btn warp-btn">WARP TO BEACON [SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY CHAMBER</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT CHAMBER &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">QUANTUM TELEPORT HOPPER</h1>
        <p id="overlayDesc">Solve complex puzzle platformer chambers across 45 test facilities. Fire physics beacons and instantly teleport across lethal laser barriers to reach the exit warp portal.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">ENTER TEST CHAMBER</button>
        <div class="controls-hint">Controls: [A][D] or Arrow keys to run. Click to shoot beacon. Spacebar or [E] to warp to beacon.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const qthCss = `* {
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
  padding: 8px 16px;
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
.warp-btn {
  border-color: #ffd600;
  color: #ffd600;
}
.warp-btn:hover {
  background: #ffd600;
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

const qthAudio = `/**
 * Quantum Teleport Hopper Web Audio API Engine
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
  playShoot() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch(e) {}
  }
  playWarp() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1100, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
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

const qthGame = `/**
 * Quantum Teleport Hopper: Warp Jumper - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const beaconVal = document.getElementById('beaconVal');
  const shieldVal = document.getElementById('shieldVal');
  const portalVal = document.getElementById('portalVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const warpBtn = document.getElementById('warpBtn');
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
  let shields = 3;
  let invulnerable = 0;

  const player = {
    x: 80,
    y: 0,
    w: 22,
    h: 32,
    vx: 0,
    vy: 0,
    grounded: false
  };

  let beacon = null;
  let platforms = [];
  let lasers = [];
  let exitPortal = { x: 0, y: 0, r: 24 };
  let particles = [];
  const keys = {};

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
    shields = 3;
    invulnerable = 60;
    beacon = null;
    particles = [];

    // Construct Chamber Platforms
    platforms = [
      { x: 40, y: height * 0.75, w: 180, h: 20 },
      { x: width * 0.35, y: height * 0.6, w: 140, h: 20 },
      { x: width * 0.65, y: height * 0.45, w: 140, h: 20 },
      { x: width - 200, y: height * 0.35, w: 160, h: 20 }
    ];

    // Lasers spanning bottom abyss
    lasers = [
      { x1: 220, y1: height * 0.85, x2: width - 200, y2: height * 0.85 }
    ];

    exitPortal = {
      x: width - 120,
      y: height * 0.35 - 35,
      r: 22
    };

    player.x = 70;
    player.y = height * 0.75 - player.h - 5;
    player.vx = 0;
    player.vy = 0;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    beaconVal.textContent = 'READY [CLICK]';
    beaconVal.style.color = '#00f0ff';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    portalVal.textContent = 'ACTIVE';
    portalVal.style.color = '#39ff14';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function shootBeacon(tx, ty) {
    if (!isPlaying) return;
    const ang = Math.atan2(ty - (player.y + player.h / 2), tx - (player.x + player.w / 2));
    beacon = {
      x: player.x + player.w / 2,
      y: player.y + player.h / 2,
      vx: Math.cos(ang) * 11,
      vy: Math.sin(ang) * 11,
      r: 6
    };
    beaconVal.textContent = 'ACTIVE [SPACE WARP]';
    beaconVal.style.color = '#ffd600';
    if (window.soundEngine) window.soundEngine.playShoot();
  }

  function warpToBeacon() {
    if (!isPlaying || !beacon) return;
    createExplosion(player.x, player.y, '#00f0ff', 12);
    player.x = beacon.x - player.w / 2;
    player.y = beacon.y - player.h / 2;
    player.vy = beacon.vy * 0.4;
    beacon = null;
    beaconVal.textContent = 'READY [CLICK]';
    beaconVal.style.color = '#00f0ff';
    if (window.soundEngine) window.soundEngine.playWarp();
    createExplosion(player.x, player.y, '#ff007f', 15);
  }

  function createExplosion(x, y, color, count = 10) {
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

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw Platforms
    platforms.forEach(p => {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
    });

    // Draw Lasers
    lasers.forEach(l => {
      ctx.strokeStyle = '#ff1744';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
    });

    // Draw Exit Portal
    const glow = ctx.createRadialGradient(exitPortal.x, exitPortal.y, 5, exitPortal.x, exitPortal.y, exitPortal.r * 1.5);
    glow.addColorStop(0, '#39ff14');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(exitPortal.x, exitPortal.y, exitPortal.r * 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#39ff14';
    ctx.beginPath();
    ctx.arc(exitPortal.x, exitPortal.y, exitPortal.r, 0, Math.PI * 2);
    ctx.fill();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Movement
    if (keys['ArrowLeft'] || keys['KeyA']) player.vx -= 0.6;
    if (keys['ArrowRight'] || keys['KeyD']) player.vx += 0.6;

    player.vy += 0.45;
    player.x += player.vx;
    player.y += player.vy;
    player.vx *= 0.88;

    // Platform Collisions
    player.grounded = false;
    platforms.forEach(p => {
      if (
        player.x + player.w > p.x &&
        player.x < p.x + p.w &&
        player.y + player.h >= p.y &&
        player.y + player.h <= p.y + p.h + player.vy
      ) {
        player.y = p.y - player.h;
        player.vy = 0;
        player.grounded = true;
      }
    });

    // Pitfall or Laser Collision
    if (player.y > height - 20) {
      if (invulnerable <= 0) {
        shields--;
        invulnerable = 60;
        shieldVal.textContent = shields + ' SHIELDS';
        shieldVal.style.color = shields > 1 ? '#00ff88' : '#ff1744';
        player.x = 70;
        player.y = height * 0.75 - player.h - 5;
        player.vx = 0;
        player.vy = 0;

        if (shields <= 0) {
          isPlaying = false;
          overlayTitle.textContent = 'CHAMBER CONTAINMENT BREACH';
          overlayDesc.textContent = 'The hopper fell into the laser chasm. Recalibrate teleport trajectories and retry.';
          startBtn.textContent = 'RETRY CHAMBER ' + currentLevel;
          overlay.style.display = 'flex';
        }
      }
    }

    // Update Beacon
    if (beacon) {
      beacon.x += beacon.vx;
      beacon.y += beacon.vy;
      beacon.vy += 0.2; // slight gravity arc

      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.arc(beacon.x, beacon.y, beacon.r, 0, Math.PI * 2);
      ctx.fill();

      if (beacon.y > height + 50 || beacon.x < 0 || beacon.x > width) {
        beacon = null;
        beaconVal.textContent = 'READY [CLICK]';
        beaconVal.style.color = '#00f0ff';
      }
    }

    // Portal Reached!
    if (Math.hypot((player.x + player.w / 2) - exitPortal.x, (player.y + player.h / 2) - exitPortal.y) < exitPortal.r + 10) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'TEST CHAMBER PASSED!';
      overlayDesc.textContent = 'Quantum beacon teleportation verified in Chamber ' + currentLevel + ' (' + theme.name + '). Ready for next testing sector.';
      startBtn.textContent = 'ADVANCE TO NEXT CHAMBER';
      overlay.style.display = 'flex';
    }

    // Draw Player
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.primary;
      ctx.fillRect(player.x, player.y, player.w, player.h);

      // Hopper Visor
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(player.x + player.w - 7, player.y + 6, 5, 4);
    }

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

  // Inputs
  window.addEventListener('keydown', e => {
    keys[e.code] = true;
    if (e.code === 'Space' || e.code === 'KeyE') {
      e.preventDefault();
      if (beacon) {
        warpToBeacon();
      } else if (player.grounded) {
        player.vy = -9;
      }
    }
  });

  window.addEventListener('keyup', e => {
    keys[e.code] = false;
  });

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    shootBeacon(e.clientX - rect.left, e.clientY - rect.top);
  });

  warpBtn.addEventListener('click', warpToBeacon);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
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
    overlayTitle.textContent = 'QUANTUM CHAMBER REGISTER (1-45)';
    overlayDesc.textContent = 'Select testing facility chamber:';
    startBtn.textContent = 'RESUME TESTING';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(qthDir, 'index.html'), qthHtml);
writeFile(path.join(qthDir, 'style.css'), qthCss);
writeFile(path.join(qthDir, 'audio.js'), qthAudio);
writeFile(path.join(qthDir, 'game.js'), qthGame);

// ----------------------------------------------------------------------------
// GAME 45: SKYWARD SPIRE: ENDLESS CYBER ASCENDER
// ----------------------------------------------------------------------------
console.log('Building Game 45: skyward-spire...');
const ssDir = path.join(gamesDir, 'skyward-spire');

const ssHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Skyward Spire: Endless Cyber Ascender - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Spire Altitude</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Climb Height</div><div id="heightVal" class="hud-val">0 / 1200m</div></div>
      <div class="hud-box"><div class="hud-lbl">Booster Shield</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Jump Boosters</div><div id="boostVal" class="hud-val" style="color:#ffd600;">READY</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">ALTITUDES (1-45)</button>
      <button id="boostBtn" class="action-btn boost-btn">JETPACK BOOST [SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY CLIMB</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT TOWER &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">SKYWARD SPIRE</h1>
        <p id="overlayDesc">Bounce upward through vertical communication megatowers across 45 altitude sectors. Steer across moving, spring-loaded, and crumbling platforms to summit the clouds.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">COMMENCE SPIRE ASCENT</button>
        <div class="controls-hint">Controls: Move Left/Right with [A][D] or Arrow keys. Automatic bounce on platforms. Spacebar for Jetpack Booster.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const ssCss = `* {
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
  padding: 8px 16px;
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
.boost-btn {
  border-color: #ffd600;
  color: #ffd600;
}
.boost-btn:hover {
  background: #ffd600;
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

const ssAudio = `/**
 * Skyward Spire Web Audio API Engine
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
  playBounce() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(650, this.ctx.currentTime + 0.14);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
    } catch(e) {}
  }
  playBoost() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(800, this.ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
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

const ssGame = `/**
 * Skyward Spire: Endless Cyber Ascender - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const heightVal = document.getElementById('heightVal');
  const shieldVal = document.getElementById('shieldVal');
  const boostVal = document.getElementById('boostVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const boostBtn = document.getElementById('boostBtn');
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
  let climbHeight = 0;
  const targetHeight = 1200;
  let shields = 3;
  let boostCooldown = 0;
  let invulnerable = 0;

  const player = {
    x: 0,
    y: 0,
    w: 24,
    h: 28,
    vx: 0,
    vy: 0
  };

  let platforms = [];
  let particles = [];
  const keys = {};

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
    climbHeight = 0;
    shields = 3;
    boostCooldown = 0;
    invulnerable = 60;
    particles = [];
    platforms = [];

    player.x = width / 2;
    player.y = height * 0.7;
    player.vx = 0;
    player.vy = -8;

    // Generate vertical platform ladder
    const platCount = 12;
    for (let i = 0; i < platCount; i++) {
      platforms.push({
        x: Math.random() * (width - 120) + 40,
        y: height - (i * 65) - 40,
        w: 90,
        h: 14,
        isMoving: Math.random() < 0.3,
        dir: Math.random() < 0.5 ? 1 : -1
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    heightVal.textContent = '0 / ' + targetHeight + 'm';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    boostVal.textContent = 'READY';
    boostVal.style.color = '#ffd600';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function triggerBoost() {
    if (!isPlaying || boostCooldown > 0) return;
    player.vy = -14;
    boostCooldown = 90;
    boostVal.textContent = 'CHARGING';
    boostVal.style.color = '#78909c';
    if (window.soundEngine) window.soundEngine.playBoost();
    createExplosion(player.x + player.w / 2, player.y + player.h, '#ffd600', 15);
  }

  function createExplosion(x, y, color, count = 10) {
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

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw Spire Scaffolding
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 60; x < width; x += 100) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw Platforms
    platforms.forEach(p => {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
    });

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    if (boostCooldown > 0) {
      boostCooldown--;
      if (boostCooldown === 0) {
        boostVal.textContent = 'READY';
        boostVal.style.color = '#ffd600';
      }
    }

    // Input Movement
    if (keys['ArrowLeft'] || keys['KeyA']) player.vx -= 0.7;
    if (keys['ArrowRight'] || keys['KeyD']) player.vx += 0.7;

    // Gravity
    player.vy += 0.42;
    player.x += player.vx;
    player.y += player.vy;
    player.vx *= 0.88;

    // Wrap screen sides
    if (player.x < -player.w) player.x = width;
    if (player.x > width) player.x = -player.w;

    // Scroll Camera Upwards when player ascends above mid-screen
    if (player.y < height * 0.4) {
      const diff = (height * 0.4) - player.y;
      player.y = height * 0.4;
      climbHeight += diff * 0.5;
      heightVal.textContent = Math.floor(climbHeight) + ' / ' + targetHeight + 'm';

      // Move platforms down
      platforms.forEach(p => {
        p.y += diff;
        if (p.y > height) {
          p.y = 0;
          p.x = Math.random() * (width - 120) + 40;
        }
      });

      if (climbHeight >= targetHeight) {
        isPlaying = false;
        if (window.soundEngine) window.soundEngine.playWin();
        nextBtn.style.display = 'inline-block';
        overlayTitle.textContent = 'SUMMIT REACHED!';
        overlayDesc.textContent = 'You scaled Altitude Sector ' + currentLevel + ' (' + theme.name + ') to the summit pinnacle!';
        startBtn.textContent = 'ASCEND TO NEXT ALTITUDE';
        overlay.style.display = 'flex';
        return;
      }
    }

    // Update Moving Platforms & Collision
    platforms.forEach(p => {
      if (p.isMoving) {
        p.x += p.dir * 1.5;
        if (p.x < 30 || p.x + p.w > width - 30) p.dir *= -1;
      }

      // Check downward landing collision
      if (
        player.vy > 0 &&
        player.x + player.w > p.x &&
        player.x < p.x + p.w &&
        player.y + player.h >= p.y &&
        player.y + player.h <= p.y + p.h + player.vy + 2
      ) {
        player.y = p.y - player.h;
        player.vy = -10.5; // automatic spring bounce
        if (window.soundEngine) window.soundEngine.playBounce();
        createExplosion(player.x + player.w / 2, player.y + player.h, theme.primary, 6);
      }
    });

    // Fall below screen check
    if (player.y > height) {
      if (invulnerable <= 0) {
        shields--;
        invulnerable = 60;
        shieldVal.textContent = shields + ' SHIELDS';
        shieldVal.style.color = shields > 1 ? '#00ff88' : '#ff1744';
        player.x = width / 2;
        player.y = height * 0.5;
        player.vy = -12;

        if (shields <= 0) {
          isPlaying = false;
          overlayTitle.textContent = 'PLUMMETED FROM SPIRE';
          overlayDesc.textContent = 'You lost footing at ' + Math.floor(climbHeight) + 'm in Sector ' + currentLevel + '. Recalibrate ascent bounce timing.';
          startBtn.textContent = 'RETRY SPIRE ' + currentLevel;
          overlay.style.display = 'flex';
        }
      }
    }

    // Draw Player
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.accent;
      ctx.fillRect(player.x, player.y, player.w, player.h);

      // Jetpack Thruster nozzle
      ctx.fillStyle = '#ffd600';
      ctx.fillRect(player.x + player.w / 2 - 4, player.y + player.h, 8, 4);
    }

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

  // Inputs
  window.addEventListener('keydown', e => {
    keys[e.code] = true;
    if (e.code === 'Space') {
      e.preventDefault();
      triggerBoost();
    }
  });

  window.addEventListener('keyup', e => {
    keys[e.code] = false;
  });

  boostBtn.addEventListener('click', triggerBoost);
  canvas.addEventListener('click', triggerBoost);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
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
    overlayTitle.textContent = 'SPIRE ALTITUDE CATALOG (1-45)';
    overlayDesc.textContent = 'Select target tower altitude:';
    startBtn.textContent = 'RESUME ASCENT';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(ssDir, 'index.html'), ssHtml);
writeFile(path.join(ssDir, 'style.css'), ssCss);
writeFile(path.join(ssDir, 'audio.js'), ssAudio);
writeFile(path.join(ssDir, 'game.js'), ssGame);

// ----------------------------------------------------------------------------
// GAME 46: SILICON CAVE EXPLORER: SPELUNKER 2099
// ----------------------------------------------------------------------------
console.log('Building Game 46: silicon-cave-explorer...');
const sceDir = path.join(gamesDir, 'silicon-cave-explorer');

const sceHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Silicon Cave Explorer: Spelunker 2099 - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Subterranean Sector</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Oxygen Tank</div><div id="o2Val" class="hud-val" style="color:#00ffcc;">100%</div></div>
      <div class="hud-box"><div class="hud-lbl">Suit Shields</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Crystals Harvested</div><div id="crystalVal" class="hud-val" style="color:#ffd600;">0 / 10</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">CAVERNS (1-45)</button>
      <button id="jumpBtn" class="action-btn jump-btn">JUMP [SPACE / W]</button>
      <button id="restartBtn" class="action-btn">RETRY DESCENT</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT CAVERN &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">SILICON CAVE EXPLORER</h1>
        <p id="overlayDesc">Descend into dangerous subterranean silicon caverns across 45 expedition depths. Navigate dynamic stalactites, harvest rare glowing energy crystals, and extract safely.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">COMMENCE EXPEDITION</button>
        <div class="controls-hint">Controls: [A][D] or Left/Right arrows to walk. [W], [Up], or Space to jump. Reach crystal quota and elevator.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const sceCss = `* {
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
  padding: 8px 16px;
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
.jump-btn {
  border-color: #ffd600;
  color: #ffd600;
}
.jump-btn:hover {
  background: #ffd600;
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

const sceAudio = `/**
 * Silicon Cave Explorer Web Audio API Engine
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
  playJump() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(540, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch(e) {}
  }
  playMine() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.setValueAtTime(1174.66, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.14, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.16);
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

const sceGame = `/**
 * Silicon Cave Explorer: Spelunker 2099 - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const o2Val = document.getElementById('o2Val');
  const shieldVal = document.getElementById('shieldVal');
  const crystalVal = document.getElementById('crystalVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const jumpBtn = document.getElementById('jumpBtn');
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
  let crystals = 0;
  let targetCrystals = 10;
  let oxygen = 100;
  let shields = 3;
  let invulnerable = 0;

  const player = {
    x: 60,
    y: 0,
    w: 22,
    h: 30,
    vx: 0,
    vy: 0,
    grounded: false
  };

  let platforms = [];
  let crystalNodes = [];
  let hazards = [];
  let particles = [];
  const keys = {};

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
    crystals = 0;
    targetCrystals = 8 + Math.min(6, lvl);
    oxygen = 100;
    shields = 3;
    invulnerable = 60;
    particles = [];
    platforms = [];
    crystalNodes = [];
    hazards = [];

    // Floor and cave ledges
    platforms.push({ x: 0, y: height - 40, w: width, h: 40 });
    platforms.push({ x: width * 0.2, y: height * 0.72, w: 140, h: 16 });
    platforms.push({ x: width * 0.5, y: height * 0.55, w: 140, h: 16 });
    platforms.push({ x: width * 0.75, y: height * 0.4, w: 120, h: 16 });
    platforms.push({ x: width * 0.35, y: height * 0.3, w: 130, h: 16 });

    // Glowing Crystals
    platforms.forEach((p, idx) => {
      if (idx > 0) {
        crystalNodes.push({ x: p.x + 30, y: p.y - 14, r: 8, mined: false });
        crystalNodes.push({ x: p.x + p.w - 30, y: p.y - 14, r: 8, mined: false });
      }
    });

    // Cave Stalactite Hazards
    for (let i = 0; i < 4; i++) {
      hazards.push({
        x: width * 0.25 + i * 160,
        y: 0,
        w: 24,
        h: 60
      });
    }

    player.x = 50;
    player.y = height - 80;
    player.vx = 0;
    player.vy = 0;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    o2Val.textContent = '100%';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    crystalVal.textContent = '0 / ' + targetCrystals;
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function doJump() {
    if (!isPlaying) return;
    if (player.grounded) {
      player.vy = -9.8;
      if (window.soundEngine) window.soundEngine.playJump();
    }
  }

  function createExplosion(x, y, color, count = 10) {
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

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Stalactite Hazards
    hazards.forEach(h => {
      ctx.fillStyle = '#37474f';
      ctx.beginPath();
      ctx.moveTo(h.x, h.y);
      ctx.lineTo(h.x + h.w / 2, h.y + h.h);
      ctx.lineTo(h.x + h.w, h.y);
      ctx.closePath();
      ctx.fill();
    });

    // Platforms
    platforms.forEach(p => {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
    });

    // Crystal Nodes
    crystalNodes.forEach(c => {
      if (!c.mined) {
        ctx.fillStyle = theme.accent;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Oxygen consumption
    oxygen = Math.max(0, oxygen - 0.02);
    o2Val.textContent = Math.round(oxygen) + '%';
    o2Val.style.color = oxygen > 50 ? '#00ffcc' : (oxygen > 20 ? '#ffd600' : '#ff1744');

    if (oxygen <= 0 && isPlaying) {
      isPlaying = false;
      overlayTitle.textContent = 'OXYGEN TANK DEPLETED';
      overlayDesc.textContent = 'Life support failed in Cavern ' + currentLevel + '. Harvest minerals swiftly and return.';
      startBtn.textContent = 'RETRY EXPEDITION ' + currentLevel;
      overlay.style.display = 'flex';
      return;
    }

    // Input Movement
    if (keys['ArrowLeft'] || keys['KeyA']) player.vx -= 0.6;
    if (keys['ArrowRight'] || keys['KeyD']) player.vx += 0.6;

    player.vy += 0.45;
    player.x += player.vx;
    player.y += player.vy;
    player.vx *= 0.88;

    // Platform Collisions
    player.grounded = false;
    platforms.forEach(p => {
      if (
        player.x + player.w > p.x &&
        player.x < p.x + p.w &&
        player.y + player.h >= p.y &&
        player.y + player.h <= p.y + p.h + player.vy + 2
      ) {
        player.y = p.y - player.h;
        player.vy = 0;
        player.grounded = true;
      }
    });

    // Keep within cave bounds
    if (player.x < 0) player.x = 0;
    if (player.x + player.w > width) player.x = width - player.w;

    // Crystal Harvesting
    crystalNodes.forEach(c => {
      if (!c.mined && Math.hypot((player.x + player.w / 2) - c.x, (player.y + player.h / 2) - c.y) < player.w / 2 + c.r) {
        c.mined = true;
        crystals++;
        crystalVal.textContent = crystals + ' / ' + targetCrystals;
        if (window.soundEngine) window.soundEngine.playMine();
        createExplosion(c.x, c.y, theme.accent, 10);

        if (crystals >= targetCrystals) {
          isPlaying = false;
          if (window.soundEngine) window.soundEngine.playWin();
          nextBtn.style.display = 'inline-block';
          overlayTitle.textContent = 'CAVERN HARVEST SECURED!';
          overlayDesc.textContent = 'All rare silicon crystal deposits extracted from Cavern ' + currentLevel + ' (' + theme.name + ').';
          startBtn.textContent = 'PROCEED TO DEEPER CAVERN';
          overlay.style.display = 'flex';
        }
      }
    });

    // Draw Player
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.secondary;
      ctx.fillRect(player.x, player.y, player.w, player.h);

      // Flashlight Beam
      ctx.fillStyle = 'rgba(255, 235, 59, 0.18)';
      ctx.beginPath();
      ctx.moveTo(player.x + player.w, player.y + 10);
      ctx.lineTo(player.x + player.w + 90, player.y - 15);
      ctx.lineTo(player.x + player.w + 90, player.y + 35);
      ctx.closePath();
      ctx.fill();
    }

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

  // Inputs
  window.addEventListener('keydown', e => {
    keys[e.code] = true;
    if (e.code === 'Space' || e.code === 'KeyW' || e.code === 'ArrowUp') {
      e.preventDefault();
      doJump();
    }
  });

  window.addEventListener('keyup', e => {
    keys[e.code] = false;
  });

  jumpBtn.addEventListener('click', doJump);
  canvas.addEventListener('click', doJump);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
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
    overlayTitle.textContent = 'SUBTERRANEAN EXPEDITIONS (1-45)';
    overlayDesc.textContent = 'Select target silicon cave:';
    startBtn.textContent = 'RESUME EXPEDITION';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(sceDir, 'index.html'), sceHtml);
writeFile(path.join(sceDir, 'style.css'), sceCss);
writeFile(path.join(sceDir, 'audio.js'), sceAudio);
writeFile(path.join(sceDir, 'game.js'), sceGame);

// Local assets/icon.svg copying
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

copyIcon('orbital-defense', 'quantum-teleport-hopper');
copyIcon('orbital-defense', 'skyward-spire');
copyIcon('orbital-defense', 'silicon-cave-explorer');

console.log('Part 2 Complete: quantum-teleport-hopper, skyward-spire, silicon-cave-explorer.');
