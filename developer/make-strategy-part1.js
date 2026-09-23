/**
 * Next Games/Game — Strategy Category Part 1:
 * - orbital-defense (Game 31 - Upgrade with 45 themes, level select)
 * - cyber-tower-defense (Game 32)
 * - galactic-fleet-commander (Game 33)
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
// GAME 31: ORBITAL DEFENSE: SENTINEL (UPGRADE)
// ----------------------------------------------------------------------------
console.log('Upgrading Game 31: orbital-defense...');
const odDir = path.join(gamesDir, 'orbital-defense');

const odHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Orbital Defense: Sentinel - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box">
        <div class="hud-lbl">Planetary Sector</div>
        <div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div>
      </div>
      <div class="hud-box">
        <div class="hud-lbl">Threats Neutralized</div>
        <div id="scoreVal" class="hud-val">0 / 20</div>
      </div>
      <div class="hud-box">
        <div class="hud-lbl">Colony Shield</div>
        <div id="shieldVal" class="hud-val" style="color: #00ff88;">100%</div>
      </div>
      <div class="hud-box">
        <div class="hud-lbl">EMP Charge</div>
        <div id="empVal" class="hud-val" style="color: #00f0ff;">READY [E]</div>
      </div>
    </div>

    <div class="canvas-wrap">
      <canvas id="defenseCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <button id="empBtn" class="action-btn">DETONATE EMP [E]</button>
      <button id="restartBtn" class="action-btn">RETRY SECTOR</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">ORBITAL DEFENSE: SENTINEL</h1>
        <p id="overlayDesc">Protect planetary colonies across 45 cosmic sectors from incoming meteor swarms and rogue orbital satellites. Rotate your 360-degree turret, launch interceptor missiles, and trigger EMP shockwaves.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIALIZE TURRET DEFENSE</button>
        <div class="controls-hint">Controls: Mouse / Touch to aim & click to fire. Spacebar to shoot, [E] key for EMP shockwave.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const odCss = `* {
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
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  z-index: 10;
  pointer-events: none;
}
.hud-box {
  background: rgba(4, 2, 15, 0.75);
  border: 1px solid rgba(0, 240, 255, 0.3);
  padding: 8px 16px;
  border-radius: 8px;
  backdrop-filter: blur(8px);
  pointer-events: auto;
}
.hud-lbl {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #7986cb;
}
.hud-val {
  font-size: 16px;
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
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
}
.action-btn:hover {
  background: #00f0ff;
  color: #04020f;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
}
.next-btn {
  border-color: #39ff14;
  color: #39ff14;
}
.next-btn:hover {
  background: #39ff14;
  color: #04020f;
  box-shadow: 0 0 15px rgba(57, 255, 20, 0.5);
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
  font-size: 22px;
  color: #00f0ff;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.card p {
  font-size: 13px;
  color: #b0bec5;
  margin-bottom: 16px;
  line-height: 1.5;
}
.level-select {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 5px;
  max-height: 180px;
  overflow-y: auto;
  margin-bottom: 18px;
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
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.play-btn:hover {
  filter: brightness(1.2);
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.6);
}
.controls-hint {
  margin-top: 14px;
  font-size: 11px;
  color: #78909c;
}`;

const odAudio = `/**
 * Orbital Defense Web Audio API Procedural Sound Engine
 */
class SoundEngine {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playLaunch() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch(e) {}
  }
  playExplode() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch(e) {}
  }
  playEmp() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(880, this.ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch(e) {}
  }
  playHit() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(80, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
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

const odGame = `/**
 * Orbital Defense: Sentinel - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('defenseCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const scoreVal = document.getElementById('scoreVal');
  const shieldVal = document.getElementById('shieldVal');
  const empVal = document.getElementById('empVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const empBtn = document.getElementById('empBtn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let score = 0;
  let targetScore = 20;
  let shield = 100;
  let empReady = true;
  let turretAngle = 0;
  let invulnerable = 0; // human speed fair defense

  const planetRadius = 45;
  const orbitRadius = 75;

  let missiles = [];
  let meteors = [];
  let particles = [];
  let shockwaves = [];
  let stars = [];
  let spawnCooldown = 0;

  function initStars() {
    stars = [];
    for (let i = 0; i < 90; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2
      });
    }
  }
  initStars();

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
    targetScore = 15 + lvl;
    score = 0;
    shield = 100;
    empReady = true;
    missiles = [];
    meteors = [];
    particles = [];
    shockwaves = [];
    spawnCooldown = 60;
    invulnerable = 60;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    scoreVal.textContent = '0 / ' + targetScore;
    shieldVal.textContent = '100%';
    shieldVal.style.color = '#00ff88';
    empVal.textContent = 'READY [E]';
    empVal.style.color = theme.primary;
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function triggerEmp() {
    if (!empReady || !isPlaying) return;
    empReady = false;
    empVal.textContent = 'RECHARGING...';
    empVal.style.color = '#78909c';
    if (window.soundEngine) window.soundEngine.playEmp();

    shockwaves.push({
      x: width / 2,
      y: height / 2,
      radius: orbitRadius,
      maxRadius: Math.max(width, height) * 0.7,
      color: THEMES[(currentLevel - 1) % THEMES.length].primary
    });

    meteors.forEach(m => {
      score++;
      createExplosion(m.x, m.y, m.color, 12);
    });
    meteors = [];
    scoreVal.textContent = score + ' / ' + targetScore;
    checkProgress();

    setTimeout(() => {
      empReady = true;
      empVal.textContent = 'READY [E]';
      empVal.style.color = THEMES[(currentLevel - 1) % THEMES.length].primary;
    }, 8000);
  }

  function fireMissile() {
    if (!isPlaying) return;
    const cx = width / 2;
    const cy = height / 2;
    const sx = cx + Math.cos(turretAngle) * orbitRadius;
    const sy = cy + Math.sin(turretAngle) * orbitRadius;
    const speed = 7.5;

    missiles.push({
      x: sx,
      y: sy,
      vx: Math.cos(turretAngle) * speed,
      vy: Math.sin(turretAngle) * speed,
      life: 90,
      color: THEMES[(currentLevel - 1) % THEMES.length].accent
    });
    if (window.soundEngine) window.soundEngine.playLaunch();
  }

  function createExplosion(x, y, color, count = 14) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 4.5 + 1;
      particles.push({
        x, y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 30,
        maxLife: 30,
        color
      });
    }
  }

  function spawnMeteor() {
    const angle = Math.random() * Math.PI * 2;
    const spawnDist = Math.max(width, height) * 0.65;
    const cx = width / 2;
    const cy = height / 2;
    const x = cx + Math.cos(angle) * spawnDist;
    const y = cy + Math.sin(angle) * spawnDist;

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const speed = 1.0 + Math.min(2.2, currentLevel * 0.04);
    const targetAngle = Math.atan2(cy - y, cx - x) + (Math.random() - 0.5) * 0.2;

    meteors.push({
      x, y,
      vx: Math.cos(targetAngle) * speed,
      vy: Math.sin(targetAngle) * speed,
      radius: Math.random() * 10 + 12,
      hp: Math.random() < 0.25 ? 2 : 1,
      color: Math.random() < 0.5 ? theme.secondary : theme.primary
    });
  }

  function checkProgress() {
    if (score >= targetScore) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'SECTOR SECURED!';
      overlayDesc.textContent = 'You have defended Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + '). Advance to the next celestial waypoint.';
      startBtn.textContent = 'COMMENCE NEXT SECTOR';
      overlay.style.display = 'flex';
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Starfield
    stars.forEach(s => {
      ctx.fillStyle = 'rgba(255, 255, 255, ' + s.alpha + ')';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    const cx = width / 2;
    const cy = height / 2;

    // Atmospheric halo
    const glow = ctx.createRadialGradient(cx, cy, planetRadius, cx, cy, orbitRadius + 40);
    glow.addColorStop(0, theme.primary + '33');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, orbitRadius + 40, 0, Math.PI * 2);
    ctx.fill();

    // Orbit Ring
    ctx.strokeStyle = theme.primary + '55';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, orbitRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Central Planet
    const pGrad = ctx.createRadialGradient(cx - 10, cy - 10, 5, cx, cy, planetRadius);
    pGrad.addColorStop(0, theme.primary);
    pGrad.addColorStop(0.8, theme.secondary);
    pGrad.addColorStop(1, '#000000');
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, planetRadius, 0, Math.PI * 2);
    ctx.fill();

    // Planet details
    ctx.strokeStyle = theme.accent + '66';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, planetRadius - 6, 0, Math.PI * 2);
    ctx.stroke();

    // Defense Turret Station
    const tx = cx + Math.cos(turretAngle) * orbitRadius;
    const ty = cy + Math.sin(turretAngle) * orbitRadius;

    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(turretAngle);

    // Turret Base
    ctx.fillStyle = theme.accent;
    ctx.beginPath();
    ctx.arc(0, 0, 9, 0, Math.PI * 2);
    ctx.fill();

    // Turret Cannon
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(16, 0);
    ctx.stroke();
    ctx.restore();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Spawning
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnMeteor();
      spawnCooldown = Math.max(35, 75 - currentLevel);
    }

    // Update & draw missiles
    for (let i = missiles.length - 1; i >= 0; i--) {
      const m = missiles[i];
      m.x += m.vx;
      m.y += m.vy;
      m.life--;

      ctx.fillStyle = m.color;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
      ctx.fill();

      if (m.life <= 0 || m.x < 0 || m.x > width || m.y < 0 || m.y > height) {
        missiles.splice(i, 1);
      }
    }

    // Update & draw shockwaves
    for (let i = shockwaves.length - 1; i >= 0; i--) {
      const sw = shockwaves[i];
      sw.radius += 12;
      ctx.strokeStyle = sw.color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.stroke();
      if (sw.radius >= sw.maxRadius) {
        shockwaves.splice(i, 1);
      }
    }

    // Update & draw meteors
    for (let i = meteors.length - 1; i >= 0; i--) {
      const met = meteors[i];
      met.x += met.vx;
      met.y += met.vy;

      ctx.fillStyle = met.color;
      ctx.beginPath();
      ctx.arc(met.x, met.y, met.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(met.x, met.y, met.radius * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      // Check collision with missiles
      for (let j = missiles.length - 1; j >= 0; j--) {
        const mis = missiles[j];
        const dist = Math.hypot(met.x - mis.x, met.y - mis.y);
        if (dist < met.radius + 4) {
          missiles.splice(j, 1);
          met.hp--;
          if (window.soundEngine) window.soundEngine.playExplode();
          createExplosion(met.x, met.y, met.color, 12);
          if (met.hp <= 0) {
            meteors.splice(i, 1);
            score++;
            scoreVal.textContent = score + ' / ' + targetScore;
            checkProgress();
            break;
          }
        }
      }

      // Check collision with planet
      const distToPlanet = Math.hypot(met.x - cx, met.y - cy);
      if (distToPlanet < planetRadius + met.radius) {
        meteors.splice(i, 1);
        if (invulnerable <= 0) {
          shield = Math.max(0, shield - 18);
          shieldVal.textContent = shield + '%';
          shieldVal.style.color = shield > 50 ? '#00ff88' : (shield > 25 ? '#ffaa00' : '#ff1744');
          if (window.soundEngine) window.soundEngine.playHit();
          createExplosion(cx, cy, '#ff1744', 20);

          if (shield <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'PLANETARY DEFENSE COLLAPSED';
            overlayDesc.textContent = 'The planetary shield was breached in Sector ' + currentLevel + '. Recalibrate defense grid and retry.';
            startBtn.textContent = 'RETRY SECTOR ' + currentLevel;
            overlay.style.display = 'flex';
          }
        }
      }
    }

    // Update & draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      const alpha = p.life / p.maxLife;

      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;

      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  // Input Handling
  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    turretAngle = Math.atan2(my - height / 2, mx - width / 2);
  });

  window.addEventListener('mousedown', e => {
    if (e.target === canvas) {
      fireMissile();
    }
  });

  window.addEventListener('keydown', e => {
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      fireMissile();
    } else if (e.key === 'e' || e.key === 'E') {
      e.preventDefault();
      triggerEmp();
    } else if (e.key === 'ArrowLeft') {
      turretAngle -= 0.12;
    } else if (e.key === 'ArrowRight') {
      turretAngle += 0.12;
    }
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (score >= targetScore) {
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

  empBtn.addEventListener('click', () => {
    triggerEmp();
  });

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'CELESTIAL SECTORS (1-45)';
    overlayDesc.textContent = 'Select any planetary orbit to defend with rotational turret batteries:';
    startBtn.textContent = 'RESUME DEFENSE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(odDir, 'index.html'), odHtml);
writeFile(path.join(odDir, 'style.css'), odCss);
writeFile(path.join(odDir, 'audio.js'), odAudio);
writeFile(path.join(odDir, 'game.js'), odGame);

// ----------------------------------------------------------------------------
// GAME 32: CYBER TOWER DEFENSE: SUBNET GUARDIAN
// ----------------------------------------------------------------------------
console.log('Building Game 32: cyber-tower-defense...');
const ctdDir = path.join(gamesDir, 'cyber-tower-defense');

const ctdHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyber Tower Defense: Subnet Guardian - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Subnet Sector</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">Data Bits</div><div id="bitsVal" class="hud-val" style="color:#ffd600;">120 BITS</div></div>
      <div class="hud-box"><div class="hud-lbl">Subnet Core Integrity</div><div id="coreVal" class="hud-val" style="color:#00ff88;">100%</div></div>
      <div class="hud-box"><div class="hud-lbl">Malware Wave</div><div id="waveVal" class="hud-val">1 / 5</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="tower-selector">
      <button class="tower-btn active" data-type="pulse"><span class="t-name">PULSE (40)</span><span class="t-desc">Rapid Dart</span></button>
      <button class="tower-btn" data-type="cryo"><span class="t-name">CRYO (60)</span><span class="t-desc">Freeze Slow</span></button>
      <button class="tower-btn" data-type="emp"><span class="t-name">EMP (80)</span><span class="t-desc">Area Shock</span></button>
      <button class="tower-btn" data-type="railgun"><span class="t-name">RAILGUN (120)</span><span class="t-desc">Pierce Beam</span></button>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SUBNETS (1-45)</button>
      <button id="startWaveBtn" class="action-btn wave-btn">DEPLOY NEXT WAVE</button>
      <button id="restartBtn" class="action-btn">RESTART SUBNET</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SUBNET &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBER TOWER DEFENSE</h1>
        <p id="overlayDesc">Defend vulnerable data pathways against malware packet worms across 45 unique subnet environments. Deploy Pulse, Cryo, EMP, and Railgun security nodes.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">COMMENCE GUARDIAN PROTOCOL</button>
        <div class="controls-hint">Controls: Select security node type, click on empty grid tiles along the pathway to build.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const ctdCss = `* {
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
.tower-selector {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.tower-btn {
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
.tower-btn.active, .tower-btn:hover {
  background: rgba(0, 240, 255, 0.25);
  border-color: #00f0ff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
  transform: translateY(-2px);
}
.t-name {
  font-size: 11px;
  font-weight: 700;
  color: #00f0ff;
}
.t-desc {
  font-size: 9px;
  color: #b0bec5;
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
.wave-btn {
  border-color: #ffd600;
  color: #ffd600;
}
.wave-btn:hover {
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

const ctdAudio = `/**
 * Cyber Tower Defense Web Audio API Engine
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
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch(e) {}
  }
  playZap() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(900, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch(e) {}
  }
  playEmp() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(40, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch(e) {}
  }
  playKill() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
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

const ctdGame = `/**
 * Cyber Tower Defense: Subnet Guardian - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const bitsVal = document.getElementById('bitsVal');
  const coreVal = document.getElementById('coreVal');
  const waveVal = document.getElementById('waveVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const startWaveBtn = document.getElementById('startWaveBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const towerBtns = document.querySelectorAll('.tower-btn');

  let width = 0, height = 0;
  const cols = 16;
  const rows = 10;
  let cellSize = 40;
  let offsetX = 0;
  let offsetY = 0;

  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    cellSize = Math.min((width - 40) / cols, (height - 120) / rows);
    offsetX = (width - cols * cellSize) / 2;
    offsetY = (height - rows * cellSize) / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedTowerType = 'pulse';
  let bits = 120;
  let coreHealth = 100;
  let currentWave = 1;
  const totalWaves = 5;
  let waveInProgress = false;
  let invulnerable = 0; // human reaction pacing

  const TOWER_COSTS = {
    pulse: 40,
    cryo: 60,
    emp: 80,
    railgun: 120
  };

  let grid = [];
  let pathWay = [];
  let towers = [];
  let enemies = [];
  let projectiles = [];
  let particles = [];
  let spawnQueue = [];
  let spawnTimer = 0;

  function generatePath(lvl) {
    pathWay = [];
    const seed = lvl % 5;
    if (seed === 0) {
      for (let x = 0; x < 6; x++) pathWay.push({ x, y: 2 });
      for (let y = 3; y < 8; y++) pathWay.push({ x: 5, y });
      for (let x = 6; x < 12; x++) pathWay.push({ x, y: 7 });
      for (let y = 6; y >= 3; y--) pathWay.push({ x: 11, y });
      for (let x = 12; x < cols; x++) pathWay.push({ x, y: 3 });
    } else if (seed === 1) {
      for (let x = 0; x < 8; x++) pathWay.push({ x, y: 3 });
      for (let y = 4; y < 7; y++) pathWay.push({ x: 7, y });
      for (let x = 8; x < cols; x++) pathWay.push({ x, y: 6 });
    } else if (seed === 2) {
      for (let x = 0; x < 4; x++) pathWay.push({ x, y: 7 });
      for (let y = 6; y >= 2; y--) pathWay.push({ x: 3, y });
      for (let x = 4; x < 13; x++) pathWay.push({ x, y: 2 });
      for (let y = 3; y < 8; y++) pathWay.push({ x: 12, y });
      for (let x = 13; x < cols; x++) pathWay.push({ x, y: 7 });
    } else {
      for (let x = 0; x < 5; x++) pathWay.push({ x, y: 4 });
      for (let y = 5; y < 8; y++) pathWay.push({ x: 4, y });
      for (let x = 5; x < 10; x++) pathWay.push({ x, y: 7 });
      for (let y = 6; y >= 2; y--) pathWay.push({ x: 9, y });
      for (let x = 10; x < cols; x++) pathWay.push({ x, y: 2 });
    }
  }

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
    generatePath(lvl);
    bits = 120 + lvl * 10;
    coreHealth = 100;
    currentWave = 1;
    waveInProgress = false;
    towers = [];
    enemies = [];
    projectiles = [];
    particles = [];
    spawnQueue = [];
    invulnerable = 60;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    bitsVal.textContent = bits + ' BITS';
    coreVal.textContent = '100%';
    coreVal.style.color = '#00ff88';
    waveVal.textContent = '1 / ' + totalWaves;
    startWaveBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function startWave() {
    if (waveInProgress || !isPlaying) return;
    waveInProgress = true;
    startWaveBtn.style.display = 'none';
    const count = 8 + currentWave * 4 + currentLevel * 2;
    spawnQueue = [];
    for (let i = 0; i < count; i++) {
      spawnQueue.push({
        type: i % 5 === 0 ? 'trojan' : (i % 8 === 0 ? 'rootkit' : 'worm'),
        delay: i * 35
      });
    }
    spawnTimer = 0;
  }

  function spawnEnemy(type) {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const hpMult = 1 + (currentLevel - 1) * 0.15 + (currentWave - 1) * 0.3;
    let hp = 30 * hpMult;
    let speed = 1.2;
    let reward = 12;
    let color = theme.secondary;
    let size = cellSize * 0.28;

    if (type === 'trojan') {
      hp = 70 * hpMult;
      speed = 0.85;
      reward = 25;
      color = '#ff1744';
      size = cellSize * 0.38;
    } else if (type === 'rootkit') {
      hp = 180 * hpMult;
      speed = 0.55;
      reward = 50;
      color = '#ffd600';
      size = cellSize * 0.45;
    }

    enemies.push({
      type,
      pathIndex: 0,
      subDist: 0,
      hp,
      maxHp: hp,
      speed,
      reward,
      color,
      size,
      slowTimer: 0
    });
  }

  function buildTower(gx, gy) {
    if (!isPlaying) return;
    // Check if on path
    const onPath = pathWay.some(p => p.x === gx && p.y === gy);
    if (onPath) return;

    // Check if tower exists
    const exists = towers.some(t => t.gx === gx && t.gy === gy);
    if (exists) return;

    const cost = TOWER_COSTS[selectedTowerType];
    if (bits < cost) return;

    bits -= cost;
    bitsVal.textContent = bits + ' BITS';
    if (window.soundEngine) window.soundEngine.playBuild();

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    let range = cellSize * 2.5;
    let fireRate = 25;
    let damage = 12;
    let color = theme.primary;

    if (selectedTowerType === 'cryo') {
      range = cellSize * 2.2;
      fireRate = 45;
      damage = 4;
      color = '#80d8ff';
    } else if (selectedTowerType === 'emp') {
      range = cellSize * 2.0;
      fireRate = 60;
      damage = 25;
      color = '#e040fb';
    } else if (selectedTowerType === 'railgun') {
      range = cellSize * 3.8;
      fireRate = 75;
      damage = 50;
      color = '#ffd600';
    }

    towers.push({
      type: selectedTowerType,
      gx, gy,
      x: offsetX + gx * cellSize + cellSize / 2,
      y: offsetY + gy * cellSize + cellSize / 2,
      range,
      fireRate,
      cooldown: 0,
      damage,
      color
    });
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

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let r = 0; r <= rows; r++) {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY + r * cellSize);
      ctx.lineTo(offsetX + cols * cellSize, offsetY + r * cellSize);
      ctx.stroke();
    }
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(offsetX + c * cellSize, offsetY);
      ctx.lineTo(offsetX + c * cellSize, offsetY + rows * cellSize);
      ctx.stroke();
    }

    // Draw Pathway
    for (let i = 0; i < pathWay.length; i++) {
      const pt = pathWay[i];
      const px = offsetX + pt.x * cellSize;
      const py = offsetY + pt.y * cellSize;

      ctx.fillStyle = 'rgba(0, 240, 255, 0.12)';
      ctx.fillRect(px, py, cellSize, cellSize);

      ctx.strokeStyle = theme.primary + '55';
      ctx.strokeRect(px + 2, py + 2, cellSize - 4, cellSize - 4);

      if (i === 0) {
        ctx.fillStyle = '#00e676';
        ctx.font = 'bold 10px monospace';
        ctx.fillText('ENTRY', px + 4, py + cellSize / 2 + 3);
      } else if (i === pathWay.length - 1) {
        ctx.fillStyle = '#ff1744';
        ctx.font = 'bold 10px monospace';
        ctx.fillText('CORE', px + 6, py + cellSize / 2 + 3);
      }
    }

    // Draw Towers
    towers.forEach(t => {
      // Range indicator subtle
      ctx.strokeStyle = t.color + '22';
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.range, 0, Math.PI * 2);
      ctx.stroke();

      // Node Body
      ctx.fillStyle = t.color;
      ctx.beginPath();
      ctx.arc(t.x, t.y, cellSize * 0.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Tower Core
      ctx.fillStyle = '#04020f';
      ctx.beginPath();
      ctx.arc(t.x, t.y, cellSize * 0.15, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!isPlaying) return;

    // Spawning Queue
    if (waveInProgress && spawnQueue.length > 0) {
      spawnTimer++;
      if (spawnTimer >= 25) {
        spawnTimer = 0;
        const next = spawnQueue.shift();
        spawnEnemy(next.type);
      }
    }

    // Towers Targeting & Firing
    towers.forEach(t => {
      if (t.cooldown > 0) t.cooldown--;
      if (t.cooldown <= 0) {
        // Find nearest enemy in range
        let target = null;
        let minDist = t.range;
        enemies.forEach(e => {
          const pt = pathWay[e.pathIndex];
          if (!pt) return;
          const ex = offsetX + pt.x * cellSize + cellSize / 2;
          const ey = offsetY + pt.y * cellSize + cellSize / 2;
          const dist = Math.hypot(ex - t.x, ey - t.y);
          if (dist <= minDist) {
            minDist = dist;
            target = { enemy: e, x: ex, y: ey };
          }
        });

        if (target) {
          t.cooldown = t.fireRate;
          if (t.type === 'emp') {
            if (window.soundEngine) window.soundEngine.playEmp();
            enemies.forEach(e => {
              const pt = pathWay[e.pathIndex];
              if (!pt) return;
              const ex = offsetX + pt.x * cellSize + cellSize / 2;
              const ey = offsetY + pt.y * cellSize + cellSize / 2;
              if (Math.hypot(ex - t.x, ey - t.y) <= t.range) {
                e.hp -= t.damage;
                e.slowTimer = 40;
                createExplosion(ex, ey, t.color, 4);
              }
            });
          } else {
            if (window.soundEngine) window.soundEngine.playZap();
            projectiles.push({
              x: t.x,
              y: t.y,
              target: target.enemy,
              speed: 9,
              damage: t.damage,
              type: t.type,
              color: t.color
            });
          }
        }
      }
    });

    // Update Projectiles
    for (let i = projectiles.length - 1; i >= 0; i--) {
      const p = projectiles[i];
      if (!enemies.includes(p.target)) {
        projectiles.splice(i, 1);
        continue;
      }
      const pt = pathWay[p.target.pathIndex];
      if (!pt) {
        projectiles.splice(i, 1);
        continue;
      }
      const tx = offsetX + pt.x * cellSize + cellSize / 2;
      const ty = offsetY + pt.y * cellSize + cellSize / 2;
      const angle = Math.atan2(ty - p.y, tx - p.x);
      p.x += Math.cos(angle) * p.speed;
      p.y += Math.sin(angle) * p.speed;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();

      if (Math.hypot(tx - p.x, ty - p.y) < 8) {
        p.target.hp -= p.damage;
        if (p.type === 'cryo') p.target.slowTimer = 90;
        createExplosion(p.x, p.y, p.color, 6);
        projectiles.splice(i, 1);
      }
    }

    // Update Enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      let spd = e.speed;
      if (e.slowTimer > 0) {
        e.slowTimer--;
        spd *= 0.5;
      }
      e.subDist += spd;
      if (e.subDist >= cellSize) {
        e.subDist = 0;
        e.pathIndex++;
      }

      if (e.pathIndex >= pathWay.length) {
        // Reached Core
        enemies.splice(i, 1);
        coreHealth = Math.max(0, coreHealth - 12);
        coreVal.textContent = coreHealth + '%';
        coreVal.style.color = coreHealth > 50 ? '#00ff88' : (coreHealth > 25 ? '#ffaa00' : '#ff1744');
        if (coreHealth <= 0) {
          isPlaying = false;
          overlayTitle.textContent = 'SUBNET CORE COMPROMISED';
          overlayDesc.textContent = 'Hostile malware breached the central router in Sector ' + currentLevel + '. Reinforce defensive nodes and retry.';
          startBtn.textContent = 'RETRY SUBNET ' + currentLevel;
          overlay.style.display = 'flex';
        }
        continue;
      }

      if (e.hp <= 0) {
        bits += e.reward;
        bitsVal.textContent = bits + ' BITS';
        if (window.soundEngine) window.soundEngine.playKill();
        const pt = pathWay[e.pathIndex];
        const ex = offsetX + pt.x * cellSize + cellSize / 2;
        const ey = offsetY + pt.y * cellSize + cellSize / 2;
        createExplosion(ex, ey, e.color, 12);
        enemies.splice(i, 1);
        continue;
      }

      // Draw Enemy
      const pt = pathWay[e.pathIndex];
      const ex = offsetX + pt.x * cellSize + cellSize / 2;
      const ey = offsetY + pt.y * cellSize + cellSize / 2;

      ctx.fillStyle = e.color;
      ctx.beginPath();
      ctx.arc(ex, ey, e.size, 0, Math.PI * 2);
      ctx.fill();

      // Health bar
      const barW = cellSize * 0.7;
      const barH = 3;
      const hpRatio = Math.max(0, e.hp / e.maxHp);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(ex - barW / 2, ey - e.size - 6, barW, barH);
      ctx.fillStyle = e.color;
      ctx.fillRect(ex - barW / 2, ey - e.size - 6, barW * hpRatio, barH);
    }

    // Check Wave Completion
    if (waveInProgress && spawnQueue.length === 0 && enemies.length === 0) {
      waveInProgress = false;
      if (currentWave < totalWaves) {
        currentWave++;
        waveVal.textContent = currentWave + ' / ' + totalWaves;
        startWaveBtn.style.display = 'inline-block';
      } else {
        // Sector Cleared!
        isPlaying = false;
        if (window.soundEngine) window.soundEngine.playWin();
        nextBtn.style.display = 'inline-block';
        overlayTitle.textContent = 'SUBNET SECURED!';
        overlayDesc.textContent = 'You have neutralized all malware waves in Sector ' + currentLevel + ' (' + theme.name + '). Ready for the next network deployment.';
        startBtn.textContent = 'ADVANCE TO SECTOR ' + ((currentLevel % THEMES.length) + 1);
        overlay.style.display = 'flex';
      }
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

  // Input Handling
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const gx = Math.floor((mx - offsetX) / cellSize);
    const gy = Math.floor((my - offsetY) / cellSize);
    if (gx >= 0 && gx < cols && gy >= 0 && gy < rows) {
      buildTower(gx, gy);
    }
  });

  towerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      towerBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTowerType = btn.dataset.type;
    });
  });

  startWaveBtn.addEventListener('click', startWave);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (currentWave >= totalWaves && enemies.length === 0) {
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
    overlayTitle.textContent = 'SUBNET SECTOR SELECTION (1-45)';
    overlayDesc.textContent = 'Select any network node infrastructure to defend:';
    startBtn.textContent = 'RESUME DEFENSE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(ctdDir, 'index.html'), ctdHtml);
writeFile(path.join(ctdDir, 'style.css'), ctdCss);
writeFile(path.join(ctdDir, 'audio.js'), ctdAudio);
writeFile(path.join(ctdDir, 'game.js'), ctdGame);

// ----------------------------------------------------------------------------
// GAME 33: GALACTIC FLEET COMMANDER: TURN-BASED TACTICS
// ----------------------------------------------------------------------------
console.log('Building Game 33: galactic-fleet-commander...');
const gfcDir = path.join(gamesDir, 'galactic-fleet-commander');

const gfcHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Galactic Fleet Commander: Turn-Based Tactics - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Star Sector</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">Active Turn</div><div id="turnVal" class="hud-val" style="color:#00f0ff;">PLAYER FLEET</div></div>
      <div class="hud-box"><div class="hud-lbl">Action Points</div><div id="apVal" class="hud-val" style="color:#ffd600;">3 / 3 AP</div></div>
      <div class="hud-box"><div class="hud-lbl">Enemy Strength</div><div id="enemyVal" class="hud-val" style="color:#ff1744;">3 SHIPS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="orders-bar">
      <button class="order-btn active" data-action="move">ENGAGE ENGINES [MOVE]</button>
      <button class="order-btn" data-action="attack">FIRE CANNONS [ATTACK]</button>
      <button class="order-btn" data-action="shield">SHIELD OVERCHARGE</button>
      <button id="endTurnBtn" class="action-btn end-turn-btn">END TURN &gt;</button>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <button id="restartBtn" class="action-btn">RETRY MISSION</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">GALACTIC FLEET COMMANDER</h1>
        <p id="overlayDesc">Command an elite battle squadron across 45 star sectors against an adaptive AI admiral. Use tactical Action Points to maneuver cruisers, fire broadside railguns, and activate directional shields.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE TACTICAL ENGAGEMENT</button>
        <div class="controls-hint">Controls: Select your starship, choose order (Move/Attack/Shield), click target tile or enemy vessel.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const gfcCss = `* {
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

const gfcAudio = `/**
 * Galactic Fleet Commander Web Audio API Engine
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
  playMove() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(450, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch(e) {}
  }
  playCannon() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch(e) {}
  }
  playShield() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(900, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
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
      [392, 523.25, 659.25, 783.99].forEach((freq, i) => {
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

const gfcGame = `/**
 * Galactic Fleet Commander: Turn-Based Tactics - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const turnVal = document.getElementById('turnVal');
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
  const cols = 9;
  const rows = 6;
  let cellSize = 55;
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
  let selectedShip = null;
  let isEnemyTurn = false;
  let invulnerable = 0; // human speed fair defense

  let playerShips = [];
  let enemyShips = [];
  let particles = [];
  let stars = [];

  function initStars() {
    stars = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2
      });
    }
  }
  initStars();

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
    selectedShip = null;
    particles = [];
    invulnerable = 60;

    // Player Ships: 3 Ships
    playerShips = [
      { id: 1, type: 'Cruiser', gx: 1, gy: 2, hp: 100, maxHp: 100, shield: 30, maxShield: 30, range: 3, power: 35, color: '#00f0ff' },
      { id: 2, type: 'Interceptor', gx: 0, gy: 1, hp: 60, maxHp: 60, shield: 20, maxShield: 20, range: 4, power: 25, color: '#39ff14' },
      { id: 3, type: 'Torpedo', gx: 0, gy: 4, hp: 80, maxHp: 80, shield: 20, maxShield: 20, range: 2, power: 45, color: '#ffd600' }
    ];

    // Enemy Ships: 2 to 4 Ships based on level
    const enemyCount = 2 + Math.min(2, Math.floor(lvl / 15));
    enemyShips = [];
    const positions = [
      { gx: 7, gy: 2 },
      { gx: 8, gy: 1 },
      { gx: 8, gy: 4 },
      { gx: 7, gy: 3 }
    ];
    for (let i = 0; i < enemyCount; i++) {
      const pos = positions[i];
      const hp = 60 + lvl * 2;
      enemyShips.push({
        id: 10 + i,
        gx: pos.gx,
        gy: pos.gy,
        hp: hp,
        maxHp: hp,
        shield: 15 + lvl,
        maxShield: 15 + lvl,
        range: 3,
        power: 20 + Math.floor(lvl * 0.4),
        color: '#ff1744'
      });
    }

    selectedShip = playerShips[0];

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    turnVal.textContent = 'PLAYER FLEET';
    turnVal.style.color = '#00f0ff';
    apVal.textContent = '3 / 3 AP';
    enemyVal.textContent = enemyShips.length + ' SHIPS';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function createExplosion(x, y, color, count = 12) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 4 + 1;
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
    turnVal.textContent = 'AI ADMIRAL...';
    turnVal.style.color = '#ff1744';

    setTimeout(() => {
      // AI chooses orders for living ships
      enemyShips.forEach(es => {
        if (playerShips.length === 0) return;
        // Check if in range of any player ship
        let inRangeTarget = null;
        playerShips.forEach(ps => {
          const dist = Math.abs(ps.gx - es.gx) + Math.abs(ps.gy - es.gy);
          if (dist <= es.range) {
            inRangeTarget = ps;
          }
        });

        if (inRangeTarget) {
          // Attack player
          if (window.soundEngine) window.soundEngine.playCannon();
          const dmg = es.power;
          if (inRangeTarget.shield > 0) {
            inRangeTarget.shield = Math.max(0, inRangeTarget.shield - dmg);
          } else {
            inRangeTarget.hp = Math.max(0, inRangeTarget.hp - dmg);
          }
          const px = offsetX + inRangeTarget.gx * cellSize + cellSize / 2;
          const py = offsetY + inRangeTarget.gy * cellSize + cellSize / 2;
          createExplosion(px, py, '#00f0ff', 10);
        } else {
          // Move towards closest player ship
          let closest = playerShips[0];
          let minDist = 99;
          playerShips.forEach(ps => {
            const d = Math.abs(ps.gx - es.gx) + Math.abs(ps.gy - es.gy);
            if (d < minDist) { minDist = d; closest = ps; }
          });
          const dx = Math.sign(closest.gx - es.gx);
          const dy = Math.sign(closest.gy - es.gy);
          const tgx = es.gx + dx;
          const tgy = es.gy + dy;
          if (!isTileOccupied(tgx, tgy) && tgx >= 0 && tgx < cols && tgy >= 0 && tgy < rows) {
            es.gx = tgx;
            es.gy = tgy;
          }
        }
      });

      // Cleanup destroyed player ships
      playerShips = playerShips.filter(ps => ps.hp > 0);
      if (playerShips.length === 0) {
        isPlaying = false;
        overlayTitle.textContent = 'FLEET DESTROYED';
        overlayDesc.textContent = 'The AI Admiral overwhelmed your battlegroup in Sector ' + currentLevel + '. Regroup and retry mission.';
        startBtn.textContent = 'RETRY SECTOR ' + currentLevel;
        overlay.style.display = 'flex';
        return;
      }

      if (!playerShips.includes(selectedShip)) {
        selectedShip = playerShips[0];
      }

      // Reset for Player Turn
      isEnemyTurn = false;
      actionPoints = 3;
      turnVal.textContent = 'PLAYER FLEET';
      turnVal.style.color = '#00f0ff';
      apVal.textContent = '3 / 3 AP';
    }, 900);
  }

  function isTileOccupied(gx, gy) {
    return playerShips.some(s => s.gx === gx && s.gy === gy) ||
           enemyShips.some(s => s.gx === gx && s.gy === gy);
  }

  function handleTileClick(gx, gy) {
    if (!isPlaying || isEnemyTurn) return;

    // Check if clicked player ship
    const clickedPlayer = playerShips.find(s => s.gx === gx && s.gy === gy);
    if (clickedPlayer) {
      selectedShip = clickedPlayer;
      return;
    }

    if (!selectedShip || actionPoints <= 0) return;

    if (currentAction === 'move') {
      const dist = Math.abs(gx - selectedShip.gx) + Math.abs(gy - selectedShip.gy);
      if (dist === 1 && !isTileOccupied(gx, gy)) {
        selectedShip.gx = gx;
        selectedShip.gy = gy;
        actionPoints--;
        apVal.textContent = actionPoints + ' / 3 AP';
        if (window.soundEngine) window.soundEngine.playMove();
        if (actionPoints === 0) executeEnemyTurn();
      }
    } else if (currentAction === 'attack') {
      const clickedEnemy = enemyShips.find(s => s.gx === gx && s.gy === gy);
      if (clickedEnemy) {
        const dist = Math.abs(clickedEnemy.gx - selectedShip.gx) + Math.abs(clickedEnemy.gy - selectedShip.gy);
        if (dist <= selectedShip.range) {
          actionPoints--;
          apVal.textContent = actionPoints + ' / 3 AP';
          if (window.soundEngine) window.soundEngine.playCannon();

          if (clickedEnemy.shield > 0) {
            clickedEnemy.shield = Math.max(0, clickedEnemy.shield - selectedShip.power);
          } else {
            clickedEnemy.hp = Math.max(0, clickedEnemy.hp - selectedShip.power);
          }

          const ex = offsetX + clickedEnemy.gx * cellSize + cellSize / 2;
          const ey = offsetY + clickedEnemy.gy * cellSize + cellSize / 2;
          createExplosion(ex, ey, '#ff1744', 12);

          // Check if enemy dead
          if (clickedEnemy.hp <= 0) {
            enemyShips = enemyShips.filter(e => e !== clickedEnemy);
            enemyVal.textContent = enemyShips.length + ' SHIPS';

            if (enemyShips.length === 0) {
              // Mission Victory!
              isPlaying = false;
              if (window.soundEngine) window.soundEngine.playWin();
              nextBtn.style.display = 'inline-block';
              overlayTitle.textContent = 'SECTOR LIBERATED!';
              overlayDesc.textContent = 'Hostile fleet vanquished in Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + '). Cruisers standing by for next jump.';
              startBtn.textContent = 'PROCEED TO SECTOR ' + ((currentLevel % THEMES.length) + 1);
              overlay.style.display = 'flex';
              return;
            }
          }

          if (actionPoints === 0) executeEnemyTurn();
        }
      }
    } else if (currentAction === 'shield') {
      actionPoints--;
      apVal.textContent = actionPoints + ' / 3 AP';
      selectedShip.shield = Math.min(selectedShip.maxShield * 1.5, selectedShip.shield + 25);
      if (window.soundEngine) window.soundEngine.playShield();
      const sx = offsetX + selectedShip.gx * cellSize + cellSize / 2;
      const sy = offsetY + selectedShip.gy * cellSize + cellSize / 2;
      createExplosion(sx, sy, '#00f0ff', 8);
      if (actionPoints === 0) executeEnemyTurn();
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Stars
    stars.forEach(s => {
      ctx.fillStyle = 'rgba(255, 255, 255, ' + s.alpha + ')';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Hex/Square Grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offsetX + c * cellSize;
        const y = offsetY + r * cellSize;

        ctx.strokeStyle = theme.primary + '33';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cellSize, cellSize);

        // Highlight selected ship valid moves or attack range
        if (selectedShip && !isEnemyTurn) {
          const dist = Math.abs(c - selectedShip.gx) + Math.abs(r - selectedShip.gy);
          if (currentAction === 'move' && dist === 1 && !isTileOccupied(c, r)) {
            ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
            ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          } else if (currentAction === 'attack' && dist <= selectedShip.range) {
            ctx.fillStyle = 'rgba(255, 23, 68, 0.1)';
            ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          }
        }
      }
    }

    // Draw Player Ships
    playerShips.forEach(s => {
      const sx = offsetX + s.gx * cellSize + cellSize / 2;
      const sy = offsetY + s.gy * cellSize + cellSize / 2;

      // Selection ring
      if (s === selectedShip) {
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, cellSize * 0.45, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Hull
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.moveTo(sx + cellSize * 0.35, sy);
      ctx.lineTo(sx - cellSize * 0.25, sy - cellSize * 0.25);
      ctx.lineTo(sx - cellSize * 0.15, sy);
      ctx.lineTo(sx - cellSize * 0.25, sy + cellSize * 0.25);
      ctx.closePath();
      ctx.fill();

      // Shield Aura
      if (s.shield > 0) {
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, cellSize * 0.38, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Bars
      const bw = cellSize * 0.7;
      const hpR = s.hp / s.maxHp;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(sx - bw / 2, sy - cellSize * 0.45, bw, 3);
      ctx.fillStyle = '#00e676';
      ctx.fillRect(sx - bw / 2, sy - cellSize * 0.45, bw * hpR, 3);
    });

    // Draw Enemy Ships
    enemyShips.forEach(s => {
      const sx = offsetX + s.gx * cellSize + cellSize / 2;
      const sy = offsetY + s.gy * cellSize + cellSize / 2;

      // Hull
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.moveTo(sx - cellSize * 0.35, sy);
      ctx.lineTo(sx + cellSize * 0.25, sy - cellSize * 0.25);
      ctx.lineTo(sx + cellSize * 0.15, sy);
      ctx.lineTo(sx + cellSize * 0.25, sy + cellSize * 0.25);
      ctx.closePath();
      ctx.fill();

      // Shield Aura
      if (s.shield > 0) {
        ctx.strokeStyle = 'rgba(255, 23, 68, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, cellSize * 0.38, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Bars
      const bw = cellSize * 0.7;
      const hpR = s.hp / s.maxHp;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(sx - bw / 2, sy - cellSize * 0.45, bw, 3);
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(sx - bw / 2, sy - cellSize * 0.45, bw * hpR, 3);
    });

    // Draw Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
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
    const gx = Math.floor((mx - offsetX) / cellSize);
    const gy = Math.floor((my - offsetY) / cellSize);
    if (gx >= 0 && gx < cols && gy >= 0 && gy < rows) {
      handleTileClick(gx, gy);
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
    if (enemyShips.length === 0) {
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
    overlayTitle.textContent = 'SECTOR WAR MAP (1-45)';
    overlayDesc.textContent = 'Choose star sector fleet deployment:';
    startBtn.textContent = 'RESUME ENGAGEMENT';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(gfcDir, 'index.html'), gfcHtml);
writeFile(path.join(gfcDir, 'style.css'), gfcCss);
writeFile(path.join(gfcDir, 'audio.js'), gfcAudio);
writeFile(path.join(gfcDir, 'game.js'), gfcGame);

// Also verify local assets/icon.svg for games 32, 33
const copyIcon = (fromGame, toGame) => {
  const src = path.join(gamesDir, fromGame, 'assets', 'icon.svg');
  const dst = path.join(gamesDir, toGame, 'assets', 'icon.svg');
  if (fs.existsSync(src)) {
    const content = fs.readFileSync(src, 'utf-8');
    writeFile(dst, content);
  } else {
    // Generate simple icon SVG
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#04020f" stroke="#00f0ff" stroke-width="4"/><polygon points="50,20 80,75 20,75" fill="#ff007f"/></svg>`;
    writeFile(dst, svg);
  }
};

copyIcon('orbital-defense', 'cyber-tower-defense');
copyIcon('orbital-defense', 'galactic-fleet-commander');

console.log('Part 1 Complete: orbital-defense, cyber-tower-defense, galactic-fleet-commander.');
