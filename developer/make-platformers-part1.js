/**
 * Next Games/Game — Platformer Category Part 1:
 * - neon-gravity-jumper (Game 41)
 * - cyber-ninja-climb (Game 42)
 * - nanotech-crawler (Game 43)
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
// GAME 41: NEON GRAVITY JUMPER: DUAL-FLOOR FLIP
// ----------------------------------------------------------------------------
console.log('Building Game 41: neon-gravity-jumper...');
const ngjDir = path.join(gamesDir, 'neon-gravity-jumper');

const ngjHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Neon Gravity Jumper: Dual-Floor Flip - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Course Track</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Course Progress</div><div id="distVal" class="hud-val">0 / 1000m</div></div>
      <div class="hud-box"><div class="hud-lbl">Shield Matrix</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Orbs Collected</div><div id="orbsVal" class="hud-val" style="color:#ffd600;">0 ORBS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">COURSES (1-45)</button>
      <button id="flipBtn" class="action-btn flip-btn">INVERT GRAVITY [SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY COURSE</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT COURSE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">NEON GRAVITY JUMPER</h1>
        <p id="overlayDesc">Sprint across dual ceiling and floor velocity tracks across 45 futuristic courses. Invert gravity with precise timing to dodge laser barriers and gather quantum energy orbs.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">COMMENCE GRAVITY RUN</button>
        <div class="controls-hint">Controls: Press Spacebar or Click/Tap anywhere to flip gravity between floor and ceiling.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const ngjCss = `* {
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
.flip-btn {
  border-color: #ffd600;
  color: #ffd600;
  padding: 8px 24px;
}
.flip-btn:hover {
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

const ngjAudio = `/**
 * Neon Gravity Jumper Web Audio API Engine
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
  playFlip() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(850, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch(e) {}
  }
  playOrb() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(659.25, this.ctx.currentTime);
      osc.frequency.setValueAtTime(880, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch(e) {}
  }
  playHit() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
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

const ngjGame = `/**
 * Neon Gravity Jumper: Dual-Floor Flip - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const distVal = document.getElementById('distVal');
  const shieldVal = document.getElementById('shieldVal');
  const orbsVal = document.getElementById('orbsVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const flipBtn = document.getElementById('flipBtn');
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
  let distance = 0;
  const targetDistance = 1000;
  let shields = 3;
  let orbs = 0;
  let invulnerable = 0; // fair human-speed pacing

  const player = {
    x: 120,
    y: 0,
    w: 24,
    h: 30,
    vy: 0,
    gravityDir: 1 // 1 for down, -1 for up
  };

  let floorY = 0;
  let ceilY = 0;
  let obstacles = [];
  let energyOrbs = [];
  let particles = [];
  let spawnCooldown = 0;

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
    distance = 0;
    shields = 3;
    orbs = 0;
    invulnerable = 60;
    obstacles = [];
    energyOrbs = [];
    particles = [];
    spawnCooldown = 50;

    floorY = height * 0.82;
    ceilY = height * 0.18;
    player.y = floorY - player.h;
    player.vy = 0;
    player.gravityDir = 1;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    distVal.textContent = '0 / ' + targetDistance + 'm';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    orbsVal.textContent = '0 ORBS';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function invertGravity() {
    if (!isPlaying) return;
    player.gravityDir *= -1;
    player.vy = player.gravityDir * 4;
    if (window.soundEngine) window.soundEngine.playFlip();

    createExplosion(player.x + player.w / 2, player.y + player.h / 2, '#00f0ff', 8);
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

  function spawnObstacle() {
    const isCeil = Math.random() < 0.5;
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const obY = isCeil ? ceilY : floorY - 32;

    obstacles.push({
      x: width + 20,
      y: obY,
      w: 22,
      h: 32,
      isCeil,
      color: theme.secondary
    });

    if (Math.random() < 0.6) {
      energyOrbs.push({
        x: width + 60,
        y: isCeil ? floorY - 35 : ceilY + 25,
        r: 8,
        color: theme.accent
      });
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    floorY = height * 0.82;
    ceilY = height * 0.18;

    // Draw Ceiling Track
    ctx.fillStyle = theme.primary + '33';
    ctx.fillRect(0, 0, width, ceilY);
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, ceilY);
    ctx.lineTo(width, ceilY);
    ctx.stroke();

    // Draw Floor Track
    ctx.fillStyle = theme.primary + '33';
    ctx.fillRect(0, floorY, width, height - floorY);
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, floorY);
    ctx.lineTo(width, floorY);
    ctx.stroke();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Update Distance Pacing (calibrated ~35s per level)
    distance += 0.55;
    distVal.textContent = Math.floor(distance) + ' / ' + targetDistance + 'm';

    if (distance >= targetDistance) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'COURSE CONQUERED!';
      overlayDesc.textContent = 'You conquered Course ' + currentLevel + ' (' + theme.name + ') with ' + orbs + ' energy orbs!';
      startBtn.textContent = 'ENTER NEXT COURSE';
      overlay.style.display = 'flex';
      return;
    }

    // Player Physics
    const gravityAccel = 0.52 * player.gravityDir;
    player.vy += gravityAccel;
    player.y += player.vy;

    // Floor Collision
    if (player.gravityDir === 1 && player.y + player.h >= floorY) {
      player.y = floorY - player.h;
      player.vy = 0;
    }
    // Ceiling Collision
    if (player.gravityDir === -1 && player.y <= ceilY) {
      player.y = ceilY;
      player.vy = 0;
    }

    // Spawning Hazards
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnObstacle();
      spawnCooldown = Math.max(38, 70 - currentLevel);
    }

    // Obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const ob = obstacles[i];
      ob.x -= 4.2 + Math.min(2.5, currentLevel * 0.05);

      // Draw Spike
      ctx.fillStyle = ob.color;
      ctx.beginPath();
      if (ob.isCeil) {
        ctx.moveTo(ob.x, ob.y);
        ctx.lineTo(ob.x + ob.w / 2, ob.y + ob.h);
        ctx.lineTo(ob.x + ob.w, ob.y);
      } else {
        ctx.moveTo(ob.x, ob.y + ob.h);
        ctx.lineTo(ob.x + ob.w / 2, ob.y);
        ctx.lineTo(ob.x + ob.w, ob.y + ob.h);
      }
      ctx.closePath();
      ctx.fill();

      // Check Collision with player
      if (
        player.x < ob.x + ob.w &&
        player.x + player.w > ob.x &&
        player.y < ob.y + ob.h &&
        player.y + player.h > ob.y
      ) {
        if (invulnerable <= 0) {
          shields--;
          invulnerable = 60; // 1s invulnerability blinking
          if (window.soundEngine) window.soundEngine.playHit();
          createExplosion(player.x, player.y, '#ff1744', 15);

          shieldVal.textContent = shields + ' SHIELDS';
          shieldVal.style.color = shields > 1 ? '#00ff88' : (shields === 1 ? '#ffaa00' : '#ff1744');

          if (shields <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'GRAVITY MATRIX DESTABILIZED';
            overlayDesc.textContent = 'Shields failed during Course ' + currentLevel + '. Recalibrate jump timing and retry.';
            startBtn.textContent = 'RETRY COURSE ' + currentLevel;
            overlay.style.display = 'flex';
          }
        }
      }

      if (ob.x < -50) obstacles.splice(i, 1);
    }

    // Energy Orbs
    for (let i = energyOrbs.length - 1; i >= 0; i--) {
      const orb = energyOrbs[i];
      orb.x -= 4.2;

      ctx.fillStyle = orb.color;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();

      // Collection check
      if (Math.hypot((player.x + player.w / 2) - orb.x, (player.y + player.h / 2) - orb.y) < player.w / 2 + orb.r) {
        orbs++;
        orbsVal.textContent = orbs + ' ORBS';
        if (window.soundEngine) window.soundEngine.playOrb();
        createExplosion(orb.x, orb.y, orb.color, 8);
        energyOrbs.splice(i, 1);
        continue;
      }

      if (orb.x < -30) energyOrbs.splice(i, 1);
    }

    // Draw Player
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.primary;
      ctx.fillRect(player.x, player.y, player.w, player.h);

      // Player Visor
      ctx.fillStyle = '#ffffff';
      const visorY = player.gravityDir === 1 ? player.y + 6 : player.y + player.h - 10;
      ctx.fillRect(player.x + player.w - 8, visorY, 6, 4);
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
  window.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      invertGravity();
    }
  });

  canvas.addEventListener('click', invertGravity);
  flipBtn.addEventListener('click', invertGravity);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (distance >= targetDistance) {
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
    overlayTitle.textContent = 'GRAVITY COURSE SELECTOR (1-45)';
    overlayDesc.textContent = 'Select any course track to attempt:';
    startBtn.textContent = 'RESUME COURSE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(ngjDir, 'index.html'), ngjHtml);
writeFile(path.join(ngjDir, 'style.css'), ngjCss);
writeFile(path.join(ngjDir, 'audio.js'), ngjAudio);
writeFile(path.join(ngjDir, 'game.js'), ngjGame);

// ----------------------------------------------------------------------------
// GAME 42: CYBER NINJA CLIMB: SHADOW SHURIKEN DASH
// ----------------------------------------------------------------------------
console.log('Building Game 42: cyber-ninja-climb...');
const cncDir = path.join(gamesDir, 'cyber-ninja-climb');

const cncHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyber Ninja Climb: Shadow Shuriken Dash - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Spire Tower</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Altitude Reached</div><div id="altVal" class="hud-val">0 / 800m</div></div>
      <div class="hud-box"><div class="hud-lbl">Shinobi Shields</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Drones Slashed</div><div id="killsVal" class="hud-val" style="color:#39ff14;">0 KILLS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SPIRES (1-45)</button>
      <button id="shurikenBtn" class="action-btn shuriken-btn">THROW SHURIKEN [Z / CLICK]</button>
      <button id="restartBtn" class="action-btn">RETRY ASCENT</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SPIRE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBER NINJA CLIMB</h1>
        <p id="overlayDesc">Scale neon megastructure spires across 45 vertical stages. Wall-jump between shaft walls, throw precision shurikens at patrolling security drones, and reach the apex.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">BEGIN SPIRE ASCENT</button>
        <div class="controls-hint">Controls: Arrow keys / [A][D] to steer & wall-jump. [Space] to leap. [Z] or Click to throw shurikens.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const cncCss = `* {
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
.shuriken-btn {
  border-color: #39ff14;
  color: #39ff14;
}
.shuriken-btn:hover {
  background: #39ff14;
  color: #04020f;
}
.next-btn {
  border-color: #ffd600;
  color: #ffd600;
}
.next-btn:hover {
  background: #ffd600;
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

const cncAudio = `/**
 * Cyber Ninja Climb Web Audio API Engine
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
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(700, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch(e) {}
  }
  playShuriken() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(900, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch(e) {}
  }
  playHit() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
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

const cncGame = `/**
 * Cyber Ninja Climb: Shadow Shuriken Dash - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const altVal = document.getElementById('altVal');
  const shieldVal = document.getElementById('shieldVal');
  const killsVal = document.getElementById('killsVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const shurikenBtn = document.getElementById('shurikenBtn');
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
  let altitude = 0;
  const targetAltitude = 800;
  let shields = 3;
  let kills = 0;
  let invulnerable = 0;

  let leftWallX = 0;
  let rightWallX = 0;

  const ninja = {
    x: 0,
    y: 0,
    w: 22,
    h: 30,
    vx: 0,
    vy: 0,
    onWall: false,
    wallSide: 0 // -1 left, 1 right
  };

  let shurikens = [];
  let drones = [];
  let particles = [];
  let spawnCooldown = 0;

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
    altitude = 0;
    shields = 3;
    kills = 0;
    invulnerable = 60;
    shurikens = [];
    drones = [];
    particles = [];
    spawnCooldown = 40;

    leftWallX = Math.max(40, width * 0.2);
    rightWallX = Math.min(width - 40, width * 0.8);

    ninja.x = leftWallX;
    ninja.y = height * 0.7;
    ninja.vx = 0;
    ninja.vy = 0;
    ninja.onWall = true;
    ninja.wallSide = -1;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    altVal.textContent = '0 / ' + targetAltitude + 'm';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    killsVal.textContent = '0 KILLS';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function throwShuriken() {
    if (!isPlaying) return;
    const dir = ninja.wallSide === -1 ? 1 : (ninja.wallSide === 1 ? -1 : (ninja.vx >= 0 ? 1 : -1));
    shurikens.push({
      x: ninja.x + ninja.w / 2,
      y: ninja.y + ninja.h / 2,
      vx: dir * 9,
      vy: -1.5,
      r: 6
    });
    if (window.soundEngine) window.soundEngine.playShuriken();
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

  function spawnDrone() {
    const x = leftWallX + 30 + Math.random() * (rightWallX - leftWallX - 60);
    drones.push({
      x,
      y: -30,
      vy: 1.8 + Math.min(2.0, currentLevel * 0.04),
      vx: (Math.random() - 0.5) * 1.5,
      hp: 1,
      r: 14,
      color: '#ff1744'
    });
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    leftWallX = Math.max(40, width * 0.2);
    rightWallX = Math.min(width - 40, width * 0.8);

    // Draw Spire Walls
    ctx.fillStyle = '#10141d';
    ctx.fillRect(0, 0, leftWallX, height);
    ctx.fillRect(rightWallX, 0, width - rightWallX, height);

    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(leftWallX, 0);
    ctx.lineTo(leftWallX, height);
    ctx.moveTo(rightWallX, 0);
    ctx.lineTo(rightWallX, height);
    ctx.stroke();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Spire climb progress
    altitude += 0.5;
    altVal.textContent = Math.floor(altitude) + ' / ' + targetAltitude + 'm';

    if (altitude >= targetAltitude) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'SPIRE CONQUERED!';
      overlayDesc.textContent = 'You scaled the summit of Spire ' + currentLevel + ' (' + theme.name + ') with ' + kills + ' drone purges!';
      startBtn.textContent = 'ENTER NEXT SPIRE';
      overlay.style.display = 'flex';
      return;
    }

    // Input Movement
    if (keys['ArrowLeft'] || keys['KeyA']) {
      ninja.vx -= 0.6;
    }
    if (keys['ArrowRight'] || keys['KeyD']) {
      ninja.vx += 0.6;
    }

    // Gravity
    ninja.vy += 0.42;

    // Apply Wall Slide friction
    if (ninja.onWall) {
      if (ninja.vy > 1.8) ninja.vy = 1.8;
    }

    ninja.x += ninja.vx;
    ninja.y += ninja.vy;
    ninja.vx *= 0.9;

    // Wall Collisions
    if (ninja.x <= leftWallX) {
      ninja.x = leftWallX;
      ninja.vx = 0;
      ninja.onWall = true;
      ninja.wallSide = -1;
    } else if (ninja.x + ninja.w >= rightWallX) {
      ninja.x = rightWallX - ninja.w;
      ninja.vx = 0;
      ninja.onWall = true;
      ninja.wallSide = 1;
    } else {
      ninja.onWall = false;
      ninja.wallSide = 0;
    }

    // Keep on screen vertical
    if (ninja.y > height - 40) {
      ninja.y = height - 40;
      ninja.vy = -10;
    }
    if (ninja.y < 40) ninja.y = 40;

    // Spawning Drones
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnDrone();
      spawnCooldown = Math.max(35, 75 - currentLevel);
    }

    // Update Shurikens
    for (let i = shurikens.length - 1; i >= 0; i--) {
      const s = shurikens[i];
      s.x += s.vx;
      s.y += s.vy;

      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();

      // Check collision with drones
      drones.forEach(d => {
        if (Math.hypot(d.x - s.x, d.y - s.y) < d.r + s.r) {
          d.hp = 0;
          kills++;
          killsVal.textContent = kills + ' KILLS';
          createExplosion(d.x, d.y, '#ff1744', 12);
        }
      });

      if (s.x < leftWallX || s.x > rightWallX || s.y < 0) {
        shurikens.splice(i, 1);
      }
    }

    // Update Drones
    for (let i = drones.length - 1; i >= 0; i--) {
      const d = drones[i];
      d.y += d.vy;
      d.x += d.vx;
      if (d.x < leftWallX + 20 || d.x > rightWallX - 20) d.vx *= -1;

      ctx.fillStyle = d.color;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();

      // Collision with ninja
      if (Math.hypot((ninja.x + ninja.w / 2) - d.x, (ninja.y + ninja.h / 2) - d.y) < ninja.w / 2 + d.r) {
        if (invulnerable <= 0) {
          shields--;
          invulnerable = 60;
          if (window.soundEngine) window.soundEngine.playHit();
          createExplosion(ninja.x, ninja.y, '#ff1744', 15);

          shieldVal.textContent = shields + ' SHIELDS';
          shieldVal.style.color = shields > 1 ? '#00ff88' : (shields === 1 ? '#ffaa00' : '#ff1744');

          if (shields <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'SHINOBI FALLEN';
            overlayDesc.textContent = 'Security drones brought down the ninja in Spire ' + currentLevel + '. Regroup and retry.';
            startBtn.textContent = 'RETRY SPIRE ' + currentLevel;
            overlay.style.display = 'flex';
          }
        }
      }

      if (d.hp <= 0 || d.y > height + 30) drones.splice(i, 1);
    }

    // Draw Ninja
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.accent;
      ctx.fillRect(ninja.x, ninja.y, ninja.w, ninja.h);

      // Scarf trailing
      ctx.fillStyle = '#ff1744';
      const scarfX = ninja.wallSide === -1 ? ninja.x - 8 : (ninja.wallSide === 1 ? ninja.x + ninja.w + 2 : ninja.x);
      ctx.fillRect(scarfX, ninja.y + 4, 6, 12);
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
      if (ninja.onWall) {
        ninja.vy = -9.5;
        ninja.vx = ninja.wallSide === -1 ? 7.5 : -7.5;
        if (window.soundEngine) window.soundEngine.playJump();
        createExplosion(ninja.x + ninja.w / 2, ninja.y + ninja.h, '#00f0ff', 6);
      }
    } else if (e.code === 'KeyZ') {
      throwShuriken();
    }
  });

  window.addEventListener('keyup', e => {
    keys[e.code] = false;
  });

  canvas.addEventListener('click', throwShuriken);
  shurikenBtn.addEventListener('click', throwShuriken);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (altitude >= targetAltitude) {
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
    overlayTitle.textContent = 'SPIRE MAP REGISTER (1-45)';
    overlayDesc.textContent = 'Select target vertical climbing spire:';
    startBtn.textContent = 'RESUME ASCENT';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(cncDir, 'index.html'), cncHtml);
writeFile(path.join(cncDir, 'style.css'), cncCss);
writeFile(path.join(cncDir, 'audio.js'), cncAudio);
writeFile(path.join(cncDir, 'game.js'), cncGame);

// ----------------------------------------------------------------------------
// GAME 43: NANOTECH CRAWLER: MAGNETIC SURFACE CLIMB
// ----------------------------------------------------------------------------
console.log('Building Game 43: nanotech-crawler...');
const ntcDir = path.join(gamesDir, 'nanotech-crawler');

const ntcHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Nanotech Crawler: Magnetic Surface Climb - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Substrate Node</div><div id="themeVal" class="hud-val">1: Neon Cyber-Grid</div></div>
      <div class="hud-box"><div class="hud-lbl">Magnetic Energy</div><div id="energyVal" class="hud-val" style="color:#00f0ff;">100%</div></div>
      <div class="hud-box"><div class="hud-lbl">Bot Shields</div><div id="shieldVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Nanites Extracted</div><div id="nanitesVal" class="hud-val" style="color:#ffd600;">0 / 15</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">CIRCUITS (1-45)</button>
      <button id="leapBtn" class="action-btn leap-btn">SURFACE LEAP [SPACE]</button>
      <button id="restartBtn" class="action-btn">RETRY CIRCUIT</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT CIRCUIT &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">NANOTECH CRAWLER</h1>
        <p id="overlayDesc">Crawl along 360-degree magnetic circuit surfaces across 45 microscopic substrates. Adhere to walls, leap across floating circuit conduits, and extract all nanite clusters.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">ACTIVATE NANOBOT</button>
        <div class="controls-hint">Controls: Left/Right [A][D] to crawl along the surface ring. Spacebar / Leap button to hop to the outer conduit.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const ntcCss = `* {
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
.leap-btn {
  border-color: #ffd600;
  color: #ffd600;
}
.leap-btn:hover {
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

const ntcAudio = `/**
 * Nanotech Crawler Web Audio API Engine
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
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch(e) {}
  }
  playLeap() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(250, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(750, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch(e) {}
  }
  playCollect() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(783.99, this.ctx.currentTime);
      osc.frequency.setValueAtTime(1046.5, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.14);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.14);
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

const ntcGame = `/**
 * Nanotech Crawler: Magnetic Surface Climb - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${PLATFORMER_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const energyVal = document.getElementById('energyVal');
  const shieldVal = document.getElementById('shieldVal');
  const nanitesVal = document.getElementById('nanitesVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const leapBtn = document.getElementById('leapBtn');
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
  let nanites = 0;
  let targetNanites = 15;
  let shields = 3;
  let invulnerable = 0;

  // 360-degree cylindrical track radii
  let innerRadius = 120;
  let outerRadius = 200;
  let currentRing = 'inner'; // 'inner' or 'outer'
  let angle = 0;
  let leapProgress = 0;
  let isLeaping = false;

  let hazards = [];
  let pickups = [];
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
    targetNanites = 12 + lvl;
    nanites = 0;
    shields = 3;
    invulnerable = 60;
    angle = 0;
    currentRing = 'inner';
    isLeaping = false;
    leapProgress = 0;
    hazards = [];
    pickups = [];
    particles = [];

    innerRadius = Math.min(width, height) * 0.22;
    outerRadius = Math.min(width, height) * 0.38;

    // Place Hazards along both rings
    const hazardCount = 3 + Math.min(4, Math.floor(lvl / 10));
    for (let i = 0; i < hazardCount; i++) {
      hazards.push({
        ring: i % 2 === 0 ? 'inner' : 'outer',
        angle: (i / hazardCount) * Math.PI * 2 + 0.5,
        speed: (Math.random() < 0.5 ? 1 : -1) * (0.01 + currentLevel * 0.0005)
      });
    }

    // Place Nanite Pickups
    for (let i = 0; i < 8; i++) {
      spawnPickup();
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    energyVal.textContent = '100%';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    nanitesVal.textContent = '0 / ' + targetNanites;
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function spawnPickup() {
    pickups.push({
      ring: Math.random() < 0.5 ? 'inner' : 'outer',
      angle: Math.random() * Math.PI * 2,
      r: 7
    });
  }

  function executeLeap() {
    if (!isPlaying || isLeaping) return;
    isLeaping = true;
    leapProgress = 0;
    if (window.soundEngine) window.soundEngine.playLeap();
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

    const cx = width / 2;
    const cy = height / 2;
    innerRadius = Math.min(width, height) * 0.22;
    outerRadius = Math.min(width, height) * 0.38;

    // Draw Inner Ring
    ctx.strokeStyle = theme.primary + '66';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw Outer Ring
    ctx.strokeStyle = theme.primary + '66';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(cx, cy, outerRadius, 0, Math.PI * 2);
    ctx.stroke();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Movement controls
    if (keys['ArrowLeft'] || keys['KeyA']) {
      angle -= 0.035;
      if (Math.random() < 0.2 && window.soundEngine) window.soundEngine.playStep();
    }
    if (keys['ArrowRight'] || keys['KeyD']) {
      angle += 0.035;
      if (Math.random() < 0.2 && window.soundEngine) window.soundEngine.playStep();
    }

    // Leap transition
    let currentR = currentRing === 'inner' ? innerRadius : outerRadius;
    if (isLeaping) {
      leapProgress += 0.08;
      const startR = currentRing === 'inner' ? innerRadius : outerRadius;
      const endR = currentRing === 'inner' ? outerRadius : innerRadius;
      currentR = startR + (endR - startR) * leapProgress;

      if (leapProgress >= 1.0) {
        isLeaping = false;
        leapProgress = 0;
        currentRing = currentRing === 'inner' ? 'outer' : 'inner';
      }
    }

    const botX = cx + Math.cos(angle) * currentR;
    const botY = cy + Math.sin(angle) * currentR;

    // Update & Draw Hazards
    hazards.forEach(h => {
      h.angle += h.speed;
      const hr = h.ring === 'inner' ? innerRadius : outerRadius;
      const hx = cx + Math.cos(h.angle) * hr;
      const hy = cy + Math.sin(h.angle) * hr;

      ctx.fillStyle = '#ff1744';
      ctx.beginPath();
      ctx.arc(hx, hy, 12, 0, Math.PI * 2);
      ctx.fill();

      // Check collision
      if (Math.hypot(botX - hx, botY - hy) < 18) {
        if (invulnerable <= 0) {
          shields--;
          invulnerable = 60;
          createExplosion(botX, botY, '#ff1744', 15);
          shieldVal.textContent = shields + ' SHIELDS';
          shieldVal.style.color = shields > 1 ? '#00ff88' : (shields === 1 ? '#ffaa00' : '#ff1744');

          if (shields <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'NANOBOT OVERCHARGED';
            overlayDesc.textContent = 'Laser hazard purged the crawler in Circuit ' + currentLevel + '. Recalibrate leap timing and retry.';
            startBtn.textContent = 'RETRY CIRCUIT ' + currentLevel;
            overlay.style.display = 'flex';
          }
        }
      }
    });

    // Update & Draw Pickups
    for (let i = pickups.length - 1; i >= 0; i--) {
      const p = pickups[i];
      const pr = p.ring === 'inner' ? innerRadius : outerRadius;
      const px = cx + Math.cos(p.angle) * pr;
      const py = cy + Math.sin(p.angle) * pr;

      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Collect
      if (Math.hypot(botX - px, botY - py) < 16) {
        nanites++;
        nanitesVal.textContent = nanites + ' / ' + targetNanites;
        if (window.soundEngine) window.soundEngine.playCollect();
        createExplosion(px, py, '#ffd600', 8);
        pickups.splice(i, 1);
        spawnPickup();

        if (nanites >= targetNanites) {
          isPlaying = false;
          if (window.soundEngine) window.soundEngine.playWin();
          nextBtn.style.display = 'inline-block';
          overlayTitle.textContent = 'CIRCUIT HARVEST COMPLETE!';
          overlayDesc.textContent = 'Nanite extraction quota reached for Circuit ' + currentLevel + ' (' + theme.name + ')!';
          startBtn.textContent = 'ENTER NEXT SUBSTRATE';
          overlay.style.display = 'flex';
        }
      }
    }

    // Draw Crawler Bot
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.accent;
      ctx.beginPath();
      ctx.arc(botX, botY, 10, 0, Math.PI * 2);
      ctx.fill();

      // Bot Core
      ctx.fillStyle = '#04020f';
      ctx.beginPath();
      ctx.arc(botX, botY, 4, 0, Math.PI * 2);
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
    if (e.code === 'Space') {
      e.preventDefault();
      executeLeap();
    }
  });

  window.addEventListener('keyup', e => {
    keys[e.code] = false;
  });

  leapBtn.addEventListener('click', executeLeap);
  canvas.addEventListener('click', executeLeap);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (nanites >= targetNanites) {
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
    overlayTitle.textContent = 'SUBSTRATE CIRCUITS (1-45)';
    overlayDesc.textContent = 'Select microscopic magnetic circuit:';
    startBtn.textContent = 'RESUME CRAWL';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(ntcDir, 'index.html'), ntcHtml);
writeFile(path.join(ntcDir, 'style.css'), ntcCss);
writeFile(path.join(ntcDir, 'audio.js'), ntcAudio);
writeFile(path.join(ntcDir, 'game.js'), ntcGame);

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

copyIcon('orbital-defense', 'neon-gravity-jumper');
copyIcon('orbital-defense', 'cyber-ninja-climb');
copyIcon('orbital-defense', 'nanotech-crawler');

console.log('Part 1 Complete: neon-gravity-jumper, cyber-ninja-climb, nanotech-crawler.');
