/**
 * Next Games/Game — Rhythm Category Part 3:
 * - neon-dance-floor (Game 87)
 * - bassline-defender (Game 88)
 * - chiptune-piano-tiles (Game 89)
 * - rhythm-revolver (Game 90)
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
    const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#08031a" stroke="#ff007f" stroke-width="4"/><polygon points="50,20 80,75 20,75" fill="#39ff14"/></svg>`;
    writeFile(iconPath, fallback);
  }
}

const RHYTHM_THEMES_CODE = `const THEMES = [
  { id: 1, name: "Sunset Synthwave Club", bg: "#14052b", road: "#220a44", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 2, name: "Neon Tokyo Disco", bg: "#060919", road: "#0d1533", primary: "#00f0ff", secondary: "#39ff14", accent: "#ff007f", text: "#e0f7fa" },
  { id: 3, name: "Cyberpunk Underground Sub", bg: "#0d0417", road: "#190a2e", primary: "#7c4dff", secondary: "#ff0055", accent: "#00e5ff", text: "#ede7f6" },
  { id: 4, name: "Cosmic Dancefloor", bg: "#03020c", road: "#0a0724", primary: "#651fff", secondary: "#00e5ff", accent: "#ffd600", text: "#e8eaf6" },
  { id: 5, name: "Glacial Aurora Lounge", bg: "#02131c", road: "#052638", primary: "#80d8ff", secondary: "#00e676", accent: "#ff4081", text: "#e1f5fe" },
  { id: 6, name: "Obsidian Bass Chamber", bg: "#070709", road: "#13141a", primary: "#b0bec5", secondary: "#00f0ff", accent: "#39ff14", text: "#eceff1" },
  { id: 7, name: "Solar Flare Rave", bg: "#190700", road: "#361002", primary: "#ff3d00", secondary: "#ffab00", accent: "#ffff00", text: "#fbe9e7" },
  { id: 8, name: "Toxic Electro Core", bg: "#0a1702", road: "#162e05", primary: "#76ff03", secondary: "#00e5ff", accent: "#ffd600", text: "#f1f8e9" },
  { id: 9, name: "Cobalt Pulse Matrix", bg: "#020a1c", road: "#06183d", primary: "#2979ff", secondary: "#00f0ff", accent: "#ff1744", text: "#e3f2fd" },
  { id: 10, name: "Amethyst Trance Temple", bg: "#12021c", road: "#26063b", primary: "#d500f9", secondary: "#aa00ff", accent: "#00e5ff", text: "#f3e5f5" },
  { id: 11, name: "Hyperdrive Laser Grid", bg: "#030817", road: "#091738", primary: "#00b0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e1f5fe" },
  { id: 12, name: "Molten Dubstep Chasm", bg: "#170401", road: "#360e03", primary: "#ff5722", secondary: "#ff1744", accent: "#ffd600", text: "#fbe9e7" },
  { id: 13, name: "Prism Wave Spectrum", bg: "#0a0417", road: "#1c0d38", primary: "#ea80fc", secondary: "#00f0ff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 14, name: "Titanium Club Mainframe", bg: "#08090d", road: "#151821", primary: "#cfd8dc", secondary: "#00e676", accent: "#00b0ff", text: "#ffffff" },
  { id: 15, name: "Electric Lavender Field", bg: "#0a0317", road: "#1a0b36", primary: "#b388ff", secondary: "#ff80ab", accent: "#00f0ff", text: "#ede7f6" },
  { id: 16, name: "Emerald Glitch Runway", bg: "#011409", road: "#042914", primary: "#00e676", secondary: "#69f0ae", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Helios Gold Discoteca", bg: "#171201", road: "#332804", primary: "#ffd700", secondary: "#ff9100", accent: "#ff007f", text: "#fffde7" },
  { id: 18, name: "Aquamarine Vapor Bay", bg: "#011214", road: "#05262c", primary: "#18ffff", secondary: "#7c4dff", accent: "#ff007f", text: "#e0f7fa" },
  { id: 19, name: "Void Singularity Tunnel", bg: "#010108", road: "#06061c", primary: "#651fff", secondary: "#3d5afe", accent: "#00f0ff", text: "#ede7f6" },
  { id: 20, name: "Crimson Industrial Beat", bg: "#170305", road: "#33080c", primary: "#ff1744", secondary: "#ff5252", accent: "#ffd600", text: "#ffebee" },
  { id: 21, name: "Quantum Hologram Deck", bg: "#040b17", road: "#0c1d3b", primary: "#00e5ff", secondary: "#76ff03", accent: "#ff007f", text: "#e0f7fa" },
  { id: 22, name: "Bismuth Polyrhythm Lab", bg: "#0d071a", road: "#1f123b", primary: "#e040fb", secondary: "#18ffff", accent: "#ffd600", text: "#f3e5f5" },
  { id: 23, name: "Deep Reef Sub-Bass Zone", bg: "#010e14", road: "#041e2b", primary: "#00b4d8", secondary: "#06d6a0", accent: "#ffbe0b", text: "#e0f7fa" },
  { id: 24, name: "Acid Jazz High-Rise", bg: "#0d0e02", road: "#1c1f06", primary: "#c6ff00", secondary: "#00e5ff", accent: "#ff007f", text: "#f9fbe7" },
  { id: 25, name: "Starlight Arpeggio Skyway", bg: "#050314", road: "#0e092e", primary: "#b388ff", secondary: "#3d5afe", accent: "#ffd600", text: "#ede7f6" },
  { id: 26, name: "Plasma Rave Reactor", bg: "#170212", road: "#330629", primary: "#ff007f", secondary: "#ff3d00", accent: "#00f0ff", text: "#fce4ec" },
  { id: 27, name: "Chrono Tempo Accelerator", bg: "#070317", road: "#130936", primary: "#7c4dff", secondary: "#00e5ff", accent: "#39ff14", text: "#ede7f6" },
  { id: 28, name: "Dark Nebula Soundclash", bg: "#04020f", road: "#0a0526", primary: "#536dfe", secondary: "#e040fb", accent: "#ffd600", text: "#e8eaf6" },
  { id: 29, name: "Amber Vinyl Lounge", bg: "#140a02", road: "#291605", primary: "#ff9100", secondary: "#ffd600", accent: "#ff1744", text: "#fff8e1" },
  { id: 30, name: "Cyber Jungle Breakdown", bg: "#031405", road: "#082b0d", primary: "#00e676", secondary: "#00f0ff", accent: "#ff007f", text: "#e8f5e9" },
  { id: 31, name: "Zero Gravity Dance Dome", bg: "#06061c", road: "#0e0e3b", primary: "#651fff", secondary: "#00e5ff", accent: "#39ff14", text: "#ede7f6" },
  { id: 32, name: "Maglev Sonic Track", bg: "#021217", road: "#07242e", primary: "#00f0ff", secondary: "#ffd600", accent: "#ff007f", text: "#e0f7fa" },
  { id: 33, name: "Neon Cyberpunk Alley", bg: "#120317", road: "#260933", primary: "#ff007f", secondary: "#7c4dff", accent: "#00f0ff", text: "#fce4ec" },
  { id: 34, name: "Spectral Audio Mirage", bg: "#09041a", road: "#170c38", primary: "#e040fb", secondary: "#00e5ff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 35, name: "Hyper Pop Supernova", bg: "#170417", road: "#330c33", primary: "#ff4081", secondary: "#ffd600", accent: "#00f0ff", text: "#fdf0ff" },
  { id: 36, name: "Carbon Fiber Beatbox", bg: "#060608", road: "#121216", primary: "#90a4ae", secondary: "#00e676", accent: "#ff007f", text: "#eceff1" },
  { id: 37, name: "Tachyon Harmonic Rift", bg: "#08021a", road: "#140638", primary: "#7c4dff", secondary: "#ff1744", accent: "#00f0ff", text: "#ede7f6" },
  { id: 38, name: "Sunburst Electro Disco", bg: "#190b01", road: "#381a04", primary: "#ff6d00", secondary: "#ffd600", accent: "#00f0ff", text: "#fff3e0" },
  { id: 39, name: "Vortex Synthesizer Well", bg: "#030514", road: "#090d2e", primary: "#3d5afe", secondary: "#ff007f", accent: "#39ff14", text: "#e8eaf6" },
  { id: 40, name: "Future Funk Skyway", bg: "#140417", road: "#2b0a33", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 41, name: "Bioluminescent Lagoon", bg: "#01140e", road: "#042b20", primary: "#00bfa5", secondary: "#64ffda", accent: "#ff4081", text: "#e0f2f1" },
  { id: 42, name: "Orbital Satellite Relay", bg: "#030919", road: "#091738", primary: "#00b0ff", secondary: "#7c4dff", accent: "#ffd600", text: "#e1f5fe" },
  { id: 43, name: "Tokyo Drift Eurobeat", bg: "#170308", road: "#330913", primary: "#ff1744", secondary: "#ff9100", accent: "#00f0ff", text: "#ffebee" },
  { id: 44, name: "Cyber Gothic Cathedral", bg: "#080414", road: "#130a2e", primary: "#651fff", secondary: "#ff0055", accent: "#ffd600", text: "#ede7f6" },
  { id: 45, name: "Infinite Resonance Apex", bg: "#04020a", road: "#0a061a", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#ffffff" }
];`;

// ============================================================================
// GAME 87: NEON DANCE FLOOR (3x3 Grid Rhythm Dance / DDR)
// ============================================================================
console.log('Building Game 87: neon-dance-floor...');
const g87Dir = path.join(gamesDir, 'neon-dance-floor');

const g87Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Dance Floor: Grid Memory DDR - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="ddr-container">
    <header class="hud-top">
      <div class="stat"><span class="lbl">STAGE</span><span id="levelDisplay" class="val">1/45</span></div>
      <div class="stat"><span class="lbl">CLUB</span><span id="themeDisplay" class="val">Sunset Synthwave</span></div>
      <div class="stat"><span class="lbl">SCORE</span><span id="scoreDisplay" class="val">0</span></div>
      <div class="stat"><span class="lbl">COMBO</span><span id="comboDisplay" class="val">0x</span></div>
      <div class="stat"><span class="lbl">SHIELDS</span><span id="shieldDisplay" class="val">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <div class="stream-view">
      <canvas id="streamCanvas" width="460" height="240"></canvas>
      <div id="ddrMsg" class="ddr-msg"></div>
    </div>

    <main class="dance-grid">
      <!-- 3x3 Dance Floor Tiles -->
      <button class="step-btn corner" data-dir="NW">◤</button>
      <button class="step-btn prime" data-dir="UP">▲</button>
      <button class="step-btn corner" data-dir="NE">◥</button>

      <button class="step-btn prime" data-dir="LEFT">◀</button>
      <button class="step-btn center" data-dir="CENTER">★</button>
      <button class="step-btn prime" data-dir="RIGHT">▶</button>

      <button class="step-btn corner" data-dir="SW">◣</button>
      <button class="step-btn prime" data-dir="DOWN">▼</button>
      <button class="step-btn corner" data-dir="SE">◢</button>
    </main>

    <footer class="hud-bottom">
      <div class="hint">Step on arrows via keyboard [Arrows / WASD / Numpad] or tap 3x3 dance pads!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-card">
      <h2>SELECT DANCE CLUB VENUE (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g87Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #090314;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.ddr-container {
  width: 100vw;
  max-width: 500px;
  height: 100vh;
  max-height: 860px;
  background: #120726;
  border: 2px solid #ff007f;
  border-radius: 12px;
  box-shadow: 0 0 35px rgba(255, 0, 127, 0.25);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.hud-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #090314;
  border-bottom: 1px solid rgba(255, 0, 127, 0.3);
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat .lbl {
  font-size: 8px;
  color: #ff007f;
  font-weight: 800;
  letter-spacing: 1px;
}
.stat .val {
  font-size: 13px;
  font-weight: 900;
}
.btn-stages {
  background: #ff007f;
  border: none;
  color: #fff;
  font-weight: 900;
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.stream-view {
  position: relative;
  background: #06020c;
  border-bottom: 2px solid #00f0ff;
  height: 240px;
}
#streamCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.ddr-msg {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
  pointer-events: none;
  opacity: 0;
  transition: all 0.12s ease-out;
}
.ddr-msg.show {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.2);
}
.dance-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  padding: 14px;
  background: #0c041a;
}
.step-btn {
  background: #1b0c36;
  border: 2px solid #7c4dff;
  border-radius: 8px;
  color: #fff;
  font-size: 28px;
  font-weight: 900;
  cursor: pointer;
  box-shadow: 0 4px 0 #090314;
  transition: all 0.08s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step-btn.prime {
  border-color: #ff007f;
}
.step-btn.center {
  border-color: #ffd600;
  color: #ffd600;
}
.step-btn:active, .step-btn.active {
  background: #ff007f;
  color: #000;
  transform: translateY(3px);
  box-shadow: 0 1px 0 #090314, 0 0 20px #ff007f;
}
.hud-bottom {
  padding: 8px 14px 12px;
  background: #090314;
  border-top: 1px solid rgba(255, 0, 127, 0.3);
}
.hint {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 10, 0.94);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-card {
  width: 90%;
  max-width: 440px;
  background: #120726;
  border: 2px solid #ff007f;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-card h2 {
  font-size: 14px;
  font-weight: 900;
  color: #ff007f;
  text-align: center;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  max-height: 360px;
  overflow-y: auto;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ff007f;
  color: #fff;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ff007f;
  color: #000;
}
.btn-close {
  background: #00f0ff;
  border: none;
  color: #000;
  font-weight: 900;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}`;

const g87Audio = `class DDRAudio {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  playStep(dir) {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    const freqs = { 'LEFT': 261.63, 'UP': 329.63, 'DOWN': 392.00, 'RIGHT': 523.25, 'CENTER': 659.25 };
    const freq = freqs[dir] || 440;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  playMiss() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, this.ctx.currentTime);
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playWin() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((n, i) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.frequency.setValueAtTime(n, this.ctx.currentTime);
        g.gain.setValueAtTime(0.25, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        o.connect(g);
        g.connect(this.ctx.destination);
        o.start();
        o.stop(this.ctx.currentTime + 0.3);
      }, i * 100);
    });
  }
}`;

const g87Game = `/**
 * Neon Dance Floor — Game Engine (45 Stages, 4-Track Arrow Stream, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new DDRAudio();
const canvas = document.getElementById('streamCanvas');
const ctx = canvas.getContext('2d');
const ddrMsg = document.getElementById('ddrMsg');

let currentLevel = 1;
let score = 0;
let combo = 0;
let shields = 3;
let invulnerable = true;
let arrows = [];
let arrowTimer = 0;
let stepsCleared = 0;
let targetSteps = 25;
let speed = 4;

const arrowDirs = ['LEFT', 'DOWN', 'UP', 'RIGHT'];
const dirKeys = {
  'arrowleft': 'LEFT', 'a': 'LEFT',
  'arrowdown': 'DOWN', 's': 'DOWN',
  'arrowup': 'UP', 'w': 'UP',
  'arrowright': 'RIGHT', 'd': 'RIGHT',
  ' ': 'CENTER'
};

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  combo = 0;
  stepsCleared = 0;
  targetSteps = 20 + lvl * 2;
  speed = 3.5 + lvl * 0.12;
  arrows = [];
  arrowTimer = 0;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/45\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('comboDisplay').textContent = \`\${combo}x\`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function spawnArrow() {
  const dir = arrowDirs[Math.floor(Math.random() * arrowDirs.length)];
  const laneIdx = arrowDirs.indexOf(dir);
  const x = canvas.width * 0.2 + laneIdx * (canvas.width * 0.2);
  arrows.push({
    x,
    y: canvas.height + 20,
    dir,
    hit: false
  });
}

function stepDirection(dir) {
  audio.init();
  const targetY = 45; // Hit receptors near top
  const hitTolerance = 35;

  let candidate = null;
  let minDist = 999;
  for (let a of arrows) {
    if (a.dir === dir && !a.hit) {
      const d = Math.abs(a.y - targetY);
      if (d < minDist) {
        minDist = d;
        candidate = a;
      }
    }
  }

  if (candidate && minDist <= hitTolerance) {
    candidate.hit = true;
    combo++;
    stepsCleared++;
    audio.playStep(dir);

    let text = 'GOOD STEP';
    let col = '#ffd600';
    let pts = 100;
    if (minDist <= 12) {
      text = 'PERFECT!';
      col = '#39ff14';
      pts = 250;
    }

    score += pts * Math.min(8, Math.floor(combo / 4) + 1);
    showMsg(text, col);
    updateHud();

    if (stepsCleared >= targetSteps) {
      audio.playWin();
      showMsg('STAGE COMPLETED!', '#39ff14');
      setTimeout(() => {
        if (currentLevel < 45) initLevel(currentLevel + 1);
        else showMsg('ALL 45 CLUBS CONQUERED!', '#ffd600');
      }, 1200);
    }
  } else {
    combo = 0;
    shields--;
    audio.playMiss();
    showMsg('MISS!', '#ff0055');
    updateHud();

    if (shields <= 0) {
      showMsg('CLUB FEVER OVER - RETRYING', '#ff0055');
      setTimeout(() => initLevel(currentLevel), 1000);
    }
  }
}

function showMsg(text, color) {
  ddrMsg.textContent = text;
  ddrMsg.style.color = color;
  ddrMsg.classList.remove('show');
  void ddrMsg.offsetWidth;
  ddrMsg.classList.add('show');
  setTimeout(() => ddrMsg.classList.remove('show'), 600);
}

function update(dt) {
  arrowTimer += dt;
  if (arrowTimer > 0.9 - Math.min(0.5, currentLevel * 0.01)) {
    arrowTimer = 0;
    spawnArrow();
  }

  const targetY = 45;
  for (let i = arrows.length - 1; i >= 0; i--) {
    const a = arrows[i];
    a.y -= speed * (dt * 60);

    // Auto-miss if scrolled past top
    if (!a.hit && a.y < targetY - 40) {
      a.hit = true;
      combo = 0;
      shields--;
      audio.playMiss();
      showMsg('MISS!', '#ff0055');
      updateHud();
      if (shields <= 0) {
        showMsg('SHIELDS DEPLETED - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }

    if (a.y < -30) arrows.splice(i, 1);
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const targetY = 45;

  // Receptors at top
  for (let i = 0; i < 4; i++) {
    const x = canvas.width * 0.2 + i * (canvas.width * 0.2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(x - 20, targetY - 20, 40, 40);

    ctx.fillStyle = '#fff';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const glyphs = ['◀', '▼', '▲', '▶'];
    ctx.fillText(glyphs[i], x, targetY);
  }

  // Scrolling Arrows
  for (let a of arrows) {
    if (a.hit) continue;
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 10;
    ctx.fillRect(a.x - 20, a.y - 20, 40, 40);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#000';
    ctx.font = 'bold 20px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let g = '▲';
    if (a.dir === 'LEFT') g = '◀';
    if (a.dir === 'DOWN') g = '▼';
    if (a.dir === 'RIGHT') g = '▶';
    ctx.fillText(g, a.x, a.y);
  }
}

let lastTime = performance.now();
function gameLoop(now) {
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(gameLoop);
}

// Controls
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (dirKeys[key]) {
    e.preventDefault();
    stepDirection(dirKeys[key]);
    const btn = document.querySelector(\`.step-btn[data-dir="\${dirKeys[key]}"]\`);
    if (btn) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 120);
    }
  }
});

document.querySelectorAll('.step-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const dir = btn.getAttribute('data-dir');
    stepDirection(dir);
  });
});

// Level Modal
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => modal.classList.remove('hidden'));
document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));

function renderLevelGrid() {
  const grid = document.getElementById('levelSelectGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 45; i++) {
    const btn = document.createElement('button');
    btn.className = \`lvl-btn \${i === currentLevel ? 'active' : ''}\`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      initLevel(i);
      modal.classList.add('hidden');
    });
    grid.appendChild(btn);
  }
}

initLevel(1);
requestAnimationFrame(gameLoop);
`;

writeFile(path.join(g87Dir, 'index.html'), g87Html);
writeFile(path.join(g87Dir, 'style.css'), g87Css);
writeFile(path.join(g87Dir, 'audio.js'), g87Audio);
writeFile(path.join(g87Dir, 'game.js'), g87Game);
copyThumbnailToIcon('neon-dance-floor');
console.log('Game 87 (neon-dance-floor) built successfully.');

// ============================================================================
// GAME 88: BASSLINE DEFENDER (Rhythm Turret Shooter)
// ============================================================================
console.log('Building Game 88: bassline-defender...');
const g88Dir = path.join(gamesDir, 'bassline-defender');

const g88Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bassline Defender: BPM Turret Sync - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="defender-container">
    <header class="hud-top">
      <div class="stat"><span class="lbl">STAGE</span><span id="levelDisplay" class="val">1/45</span></div>
      <div class="stat"><span class="lbl">PERIMETER</span><span id="themeDisplay" class="val">Sub-Bass Subnet</span></div>
      <div class="stat"><span class="lbl">SCORE</span><span id="scoreDisplay" class="val">0</span></div>
      <div class="stat"><span class="lbl">WAVE</span><span id="waveDisplay" class="val">0/20</span></div>
      <div class="stat"><span class="lbl">SHIELDS</span><span id="shieldDisplay" class="val">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <main class="turret-arena">
      <canvas id="defenderCanvas" width="480" height="560"></canvas>
      <div id="defMsg" class="def-msg"></div>
    </main>

    <footer class="hud-bottom">
      <button id="fireBtn" class="btn-fire">FIRE SONIC CANNON (SPACE / CLICK)</button>
      <div class="hint">Aim with mouse/touch | Fire on the bass beat for massive shockwaves!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-card">
      <h2>SELECT DEFENSE PERIMETER (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g88Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #060814;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.defender-container {
  width: 100vw;
  max-width: 520px;
  height: 100vh;
  max-height: 860px;
  background: #0c1022;
  border: 2px solid #00f0ff;
  border-radius: 12px;
  box-shadow: 0 0 35px rgba(0, 240, 255, 0.25);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.hud-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #060814;
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat .lbl {
  font-size: 8px;
  color: #00f0ff;
  font-weight: 800;
  letter-spacing: 1px;
}
.stat .val {
  font-size: 13px;
  font-weight: 900;
}
.btn-stages {
  background: #00f0ff;
  border: none;
  color: #000;
  font-weight: 900;
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.turret-arena {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#defenderCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.def-msg {
  position: absolute;
  top: 35%;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.12s ease-out;
}
.def-msg.show {
  opacity: 1;
  transform: scale(1.2);
}
.hud-bottom {
  padding: 10px 14px 14px;
  background: #060814;
  border-top: 1px solid rgba(0, 240, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.btn-fire {
  background: linear-gradient(135deg, #00f0ff, #ff0055);
  border: none;
  color: #fff;
  font-size: 14px;
  font-weight: 900;
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
}
.btn-fire:active {
  transform: scale(0.97);
}
.hint {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(3, 4, 10, 0.94);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-card {
  width: 90%;
  max-width: 440px;
  background: #0c1022;
  border: 2px solid #00f0ff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-card h2 {
  font-size: 14px;
  font-weight: 900;
  color: #00f0ff;
  text-align: center;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  max-height: 360px;
  overflow-y: auto;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #00f0ff;
  color: #fff;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}
.lvl-btn.active {
  background: #00f0ff;
  color: #000;
}
.btn-close {
  background: #ff0055;
  border: none;
  color: #fff;
  font-weight: 900;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}`;

const g88Audio = `class DefenderAudio {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  playBeatKick() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.15);
    g.gain.setValueAtTime(0.4, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  playBlast(onBeat) {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = onBeat ? 'triangle' : 'sine';
    const freq = onBeat ? 320 : 180;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.25);
    g.gain.setValueAtTime(onBeat ? 0.5 : 0.2, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playEnemyHit() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.1);
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  playWin() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((n, i) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.frequency.setValueAtTime(n, this.ctx.currentTime);
        g.gain.setValueAtTime(0.25, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        o.connect(g);
        g.connect(this.ctx.destination);
        o.start();
        o.stop(this.ctx.currentTime + 0.3);
      }, i * 100);
    });
  }
}`;

const g88Game = `/**
 * Bassline Defender — Game Engine (45 Stages, BPM Turret Sync, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new DefenderAudio();
const canvas = document.getElementById('defenderCanvas');
const ctx = canvas.getContext('2d');
const defMsg = document.getElementById('defMsg');

let currentLevel = 1;
let score = 0;
let enemiesDefeated = 0;
let targetEnemies = 20;
let shields = 3;
let invulnerable = true;

let bpm = 120;
let beatTimer = 0;
let beatPulse = 0;

let turret = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  angle: 0
};

let bullets = [];
let enemies = [];
let enemyTimer = 0;

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  enemiesDefeated = 0;
  targetEnemies = 15 + lvl * 2;
  bpm = 110 + lvl * 1.5;
  beatTimer = 0;
  beatPulse = 0;
  bullets = [];
  enemies = [];
  enemyTimer = 0;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/45\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('waveDisplay').textContent = \`\${enemiesDefeated}/\${targetEnemies}\`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function fireTurret() {
  audio.init();
  const beatInterval = 60 / bpm;
  const timeSinceBeat = beatTimer % beatInterval;
  const onBeat = timeSinceBeat < 0.12 || timeSinceBeat > (beatInterval - 0.12);

  const bSpeed = onBeat ? 9 : 6;
  const bRadius = onBeat ? 8 : 4;
  const bDmg = onBeat ? 3 : 1;

  bullets.push({
    x: turret.x + Math.cos(turret.angle) * 25,
    y: turret.y + Math.sin(turret.angle) * 25,
    vx: Math.cos(turret.angle) * bSpeed,
    vy: Math.sin(turret.angle) * bSpeed,
    radius: bRadius,
    damage: bDmg,
    onBeat
  });

  audio.playBlast(onBeat);
  if (onBeat) {
    showMsg('ON-BEAT BASS BLAST!', '#39ff14');
  }
}

function spawnEnemy() {
  const angle = Math.random() * Math.PI * 2;
  const dist = canvas.width * 0.7;
  enemies.push({
    x: turret.x + Math.cos(angle) * dist,
    y: turret.y + Math.sin(angle) * dist,
    hp: 1 + Math.floor(currentLevel * 0.1),
    speed: 1.2 + (currentLevel * 0.03)
  });
}

function showMsg(text, color) {
  defMsg.textContent = text;
  defMsg.style.color = color;
  defMsg.classList.remove('show');
  void defMsg.offsetWidth;
  defMsg.classList.add('show');
  setTimeout(() => defMsg.classList.remove('show'), 600);
}

function update(dt) {
  const beatInterval = 60 / bpm;
  beatTimer += dt;
  if (beatTimer >= beatInterval) {
    beatTimer -= beatInterval;
    audio.playBeatKick();
    beatPulse = 40;
  }
  if (beatPulse > 0) beatPulse -= dt * 60;

  // Spawn enemies
  enemyTimer += dt;
  if (enemyTimer > 1.2 - Math.min(0.6, currentLevel * 0.015)) {
    enemyTimer = 0;
    spawnEnemy();
  }

  // Update Bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i];
    b.x += b.vx;
    b.y += b.vy;

    // Check collision with enemies
    for (let j = enemies.length - 1; j >= 0; j--) {
      const e = enemies[j];
      const dist = Math.hypot(b.x - e.x, b.y - e.y);
      if (dist < b.radius + 15) {
        e.hp -= b.damage;
        audio.playEnemyHit();
        bullets.splice(i, 1);

        if (e.hp <= 0) {
          enemies.splice(j, 1);
          enemiesDefeated++;
          score += 150;
          updateHud();

          if (enemiesDefeated >= targetEnemies) {
            audio.playWin();
            showMsg('PERIMETER SECURED!', '#39ff14');
            setTimeout(() => {
              if (currentLevel < 45) initLevel(currentLevel + 1);
              else showMsg('ALL 45 PERIMETERS DEFENDED!', '#ffd600');
            }, 1200);
          }
        }
        break;
      }
    }

    if (b.x < 0 || b.x > canvas.width || b.y < 0 || b.y > canvas.height) {
      bullets.splice(i, 1);
    }
  }

  // Update Enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    const angleToTurret = Math.atan2(turret.y - e.y, turret.x - e.x);
    e.x += Math.cos(angleToTurret) * e.speed;
    e.y += Math.sin(angleToTurret) * e.speed;

    // Core collision
    const dist = Math.hypot(turret.x - e.x, turret.y - e.y);
    if (dist < 30) {
      shields--;
      enemies.splice(i, 1);
      showMsg('CORE BREACH!', '#ff0055');
      updateHud();

      if (shields <= 0) {
        showMsg('DEFENSE OVERRUN - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Concentric Radar Rings
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(turret.x, turret.y, 80, 0, Math.PI * 2);
  ctx.arc(turret.x, turret.y, 160, 0, Math.PI * 2);
  ctx.arc(turret.x, turret.y, 240, 0, Math.PI * 2);
  ctx.stroke();

  // Pulsing Basswave Ring
  if (beatPulse > 0) {
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(turret.x, turret.y, 35 + (40 - beatPulse) * 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Draw Enemies
  for (let e of enemies) {
    ctx.fillStyle = '#ff0055';
    ctx.shadowColor = '#ff0055';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(e.x, e.y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Draw Bullets
  for (let b of bullets) {
    ctx.fillStyle = b.onBeat ? '#39ff14' : '#00f0ff';
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = b.onBeat ? 15 : 6;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Turret Base & Barrel
  ctx.save();
  ctx.translate(turret.x, turret.y);
  ctx.rotate(turret.angle);

  ctx.fillStyle = '#00f0ff';
  ctx.fillRect(0, -5, 30, 10); // Barrel

  ctx.fillStyle = '#1b2038';
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

let lastTime = performance.now();
function gameLoop(now) {
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(gameLoop);
}

// Aiming & Firing
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const px = (e.clientX - rect.left) * scaleX;
  const py = (e.clientY - rect.top) * scaleY;
  turret.angle = Math.atan2(py - turret.y, px - turret.x);
});

canvas.addEventListener('click', fireTurret);
document.getElementById('fireBtn').addEventListener('click', fireTurret);

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    fireTurret();
  }
});

// Level Modal
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => modal.classList.remove('hidden'));
document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));

function renderLevelGrid() {
  const grid = document.getElementById('levelSelectGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 45; i++) {
    const btn = document.createElement('button');
    btn.className = \`lvl-btn \${i === currentLevel ? 'active' : ''}\`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      initLevel(i);
      modal.classList.add('hidden');
    });
    grid.appendChild(btn);
  }
}

initLevel(1);
requestAnimationFrame(gameLoop);
`;

writeFile(path.join(g88Dir, 'index.html'), g88Html);
writeFile(path.join(g88Dir, 'style.css'), g88Css);
writeFile(path.join(g88Dir, 'audio.js'), g88Audio);
writeFile(path.join(g88Dir, 'game.js'), g88Game);
copyThumbnailToIcon('bassline-defender');
console.log('Game 88 (bassline-defender) built successfully.');

// ============================================================================
// GAME 89: CHIPTUNE PIANO TILES (Vertical Falling Piano Stream)
// ============================================================================
console.log('Building Game 89: chiptune-piano-tiles...');
const g89Dir = path.join(gamesDir, 'chiptune-piano-tiles');

const g89Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chiptune Piano Tiles: Cyber Virtuoso - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="piano-container">
    <header class="hud-top">
      <div class="stat"><span class="lbl">STAGE</span><span id="levelDisplay" class="val">1/45</span></div>
      <div class="stat"><span class="lbl">SONG</span><span id="themeDisplay" class="val">Sunset Melody</span></div>
      <div class="stat"><span class="lbl">TILES</span><span id="tilesDisplay" class="val">0/30</span></div>
      <div class="stat"><span class="lbl">SHIELDS</span><span id="shieldDisplay" class="val">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <main class="canvas-arena">
      <canvas id="pianoCanvas" width="440" height="560"></canvas>
      <div id="pianoMsg" class="piano-msg"></div>
    </main>

    <footer class="hud-bottom">
      <div class="key-labels">
        <button class="key-tap" data-lane="0">D</button>
        <button class="key-tap" data-lane="1">F</button>
        <button class="key-tap" data-lane="2">J</button>
        <button class="key-tap" data-lane="3">K</button>
      </div>
      <div class="hint">Tap falling black/neon tiles as they cross the bottom line! [D, F, J, K]</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-card">
      <h2>SELECT PIANO REPERTOIRE (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g89Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #040814;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.piano-container {
  width: 100vw;
  max-width: 480px;
  height: 100vh;
  max-height: 840px;
  background: #080f24;
  border: 2px solid #8a2be2;
  border-radius: 12px;
  box-shadow: 0 0 35px rgba(138, 43, 226, 0.25);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.hud-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #050a1a;
  border-bottom: 1px solid rgba(138, 43, 226, 0.3);
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat .lbl {
  font-size: 8px;
  color: #8a2be2;
  font-weight: 800;
  letter-spacing: 1px;
}
.stat .val {
  font-size: 13px;
  font-weight: 900;
}
.btn-stages {
  background: #8a2be2;
  border: none;
  color: #fff;
  font-weight: 900;
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.canvas-arena {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#pianoCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.piano-msg {
  position: absolute;
  top: 40%;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.12s ease-out;
}
.piano-msg.show {
  opacity: 1;
  transform: scale(1.2);
}
.hud-bottom {
  padding: 10px 14px 14px;
  background: #050a1a;
  border-top: 1px solid rgba(138, 43, 226, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.key-labels {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.key-tap {
  background: #111a3b;
  border: 2px solid #8a2be2;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  padding: 12px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.08s;
}
.key-tap:active, .key-tap.active {
  background: #8a2be2;
  color: #000;
  transform: scale(0.95);
  box-shadow: 0 0 20px #8a2be2;
}
.hint {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(3, 4, 10, 0.94);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-card {
  width: 90%;
  max-width: 440px;
  background: #080f24;
  border: 2px solid #8a2be2;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-card h2 {
  font-size: 14px;
  font-weight: 900;
  color: #8a2be2;
  text-align: center;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  max-height: 360px;
  overflow-y: auto;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #8a2be2;
  color: #fff;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}
.lvl-btn.active {
  background: #8a2be2;
  color: #fff;
}
.btn-close {
  background: #ff007f;
  border: none;
  color: #fff;
  font-weight: 900;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}`;

const g89Audio = `class PianoAudio {
  constructor() {
    this.ctx = null;
    this.melodyIndex = 0;
    this.melody = [
      261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25,
      523.25, 493.88, 440.00, 392.00, 349.23, 329.63, 293.66, 261.63
    ];
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  playKeyNote() {
    this.init();
    if (!this.ctx) return;
    const freq = this.melody[this.melodyIndex % this.melody.length];
    this.melodyIndex++;

    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'square'; // 8-bit chiptune sound
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    g.gain.setValueAtTime(0.2, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playMiss() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, this.ctx.currentTime);
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playWin() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((n, i) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.frequency.setValueAtTime(n, this.ctx.currentTime);
        g.gain.setValueAtTime(0.25, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        o.connect(g);
        g.connect(this.ctx.destination);
        o.start();
        o.stop(this.ctx.currentTime + 0.3);
      }, i * 100);
    });
  }
}`;

const g89Game = `/**
 * Chiptune Piano Tiles — Game Engine (45 Stages, Falling Key Matrix, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new PianoAudio();
const canvas = document.getElementById('pianoCanvas');
const ctx = canvas.getContext('2d');
const pianoMsg = document.getElementById('pianoMsg');

let currentLevel = 1;
let score = 0;
let tilesCleared = 0;
let targetTiles = 30;
let shields = 3;
let invulnerable = true;

let speed = 4.5;
let tiles = [];
let tileTimer = 0;

const laneKeys = ['d', 'f', 'j', 'k'];

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  tilesCleared = 0;
  targetTiles = 25 + lvl * 2;
  speed = 4.0 + lvl * 0.15;
  tiles = [];
  tileTimer = 0;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/45\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('tilesDisplay').textContent = \`\${tilesCleared}/\${targetTiles}\`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function spawnTile() {
  const lane = Math.floor(Math.random() * 4);
  const laneW = canvas.width / 4;
  tiles.push({
    lane,
    x: lane * laneW,
    y: -90,
    w: laneW,
    h: 80,
    hit: false
  });
}

function tapLane(lane) {
  audio.init();
  const hitLineY = canvas.height * 0.82;
  const tolerance = 60;

  let candidate = null;
  let minDist = 999;
  for (let t of tiles) {
    if (t.lane === lane && !t.hit) {
      const dist = Math.abs(t.y + t.h / 2 - hitLineY);
      if (dist < minDist) {
        minDist = dist;
        candidate = t;
      }
    }
  }

  if (candidate && minDist <= tolerance) {
    candidate.hit = true;
    tilesCleared++;
    score += 100;
    audio.playKeyNote();
    updateHud();

    if (tilesCleared >= targetTiles) {
      audio.playWin();
      showMsg('PIANO CONCERTO CLEARED!', '#39ff14');
      setTimeout(() => {
        if (currentLevel < 45) initLevel(currentLevel + 1);
        else showMsg('ALL 45 CONCERTOS MASTERED!', '#ffd600');
      }, 1200);
    }
  } else {
    shields--;
    audio.playMiss();
    showMsg('WRONG KEY!', '#ff0055');
    updateHud();

    if (shields <= 0) {
      showMsg('DISSONANCE - RETRYING', '#ff0055');
      setTimeout(() => initLevel(currentLevel), 1000);
    }
  }
}

function showMsg(text, color) {
  pianoMsg.textContent = text;
  pianoMsg.style.color = color;
  pianoMsg.classList.remove('show');
  void pianoMsg.offsetWidth;
  pianoMsg.classList.add('show');
  setTimeout(() => pianoMsg.classList.remove('show'), 600);
}

function update(dt) {
  tileTimer += dt;
  if (tileTimer > 0.7 - Math.min(0.4, currentLevel * 0.008)) {
    tileTimer = 0;
    spawnTile();
  }

  const hitLineY = canvas.height * 0.82;
  for (let i = tiles.length - 1; i >= 0; i--) {
    const t = tiles[i];
    t.y += speed * (dt * 60);

    // Auto miss if fell past hitline
    if (!t.hit && t.y > hitLineY + 60) {
      t.hit = true;
      shields--;
      audio.playMiss();
      showMsg('MISSED TILE!', '#ff0055');
      updateHud();

      if (shields <= 0) {
        showMsg('SHIELDS DEPLETED - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }

    if (t.y > canvas.height + 90) tiles.splice(i, 1);
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const laneW = canvas.width / 4;

  // 4 Vertical Lanes
  for (let i = 0; i < 4; i++) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.strokeRect(i * laneW, 0, laneW, canvas.height);
  }

  // Hit Zone Line
  const hitLineY = canvas.height * 0.82;
  ctx.strokeStyle = '#ff007f';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, hitLineY);
  ctx.lineTo(canvas.width, hitLineY);
  ctx.stroke();

  // Falling Tiles
  for (let t of tiles) {
    if (t.hit) continue;
    ctx.fillStyle = theme.primary;
    ctx.shadowColor = theme.primary;
    ctx.shadowBlur = 10;
    ctx.fillRect(t.x + 4, t.y, t.w - 8, t.h);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(t.x + 4, t.y, t.w - 8, 4);
  }
}

let lastTime = performance.now();
function gameLoop(now) {
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(gameLoop);
}

// Controls
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  const lane = laneKeys.indexOf(key);
  if (lane !== -1) {
    tapLane(lane);
    const btn = document.querySelector(\`.key-tap[data-lane="\${lane}"]\`);
    if (btn) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 100);
    }
  }
});

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const px = (e.clientX - rect.left) * (canvas.width / rect.width);
  const lane = Math.floor(px / (canvas.width / 4));
  tapLane(lane);
});

document.querySelectorAll('.key-tap').forEach(btn => {
  btn.addEventListener('click', () => {
    const lane = parseInt(btn.getAttribute('data-lane'), 10);
    tapLane(lane);
  });
});

// Level Modal
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => modal.classList.remove('hidden'));
document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));

function renderLevelGrid() {
  const grid = document.getElementById('levelSelectGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 45; i++) {
    const btn = document.createElement('button');
    btn.className = \`lvl-btn \${i === currentLevel ? 'active' : ''}\`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      initLevel(i);
      modal.classList.add('hidden');
    });
    grid.appendChild(btn);
  }
}

initLevel(1);
requestAnimationFrame(gameLoop);
`;

writeFile(path.join(g89Dir, 'index.html'), g89Html);
writeFile(path.join(g89Dir, 'style.css'), g89Css);
writeFile(path.join(g89Dir, 'audio.js'), g89Audio);
writeFile(path.join(g89Dir, 'game.js'), g89Game);
copyThumbnailToIcon('chiptune-piano-tiles');
console.log('Game 89 (chiptune-piano-tiles) built successfully.');

// ============================================================================
// GAME 90: RHYTHM REVOLVER (360-Degree Radial Beat Spinner)
// ============================================================================
console.log('Building Game 90: rhythm-revolver...');
const g90Dir = path.join(gamesDir, 'rhythm-revolver');

const g90Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rhythm Revolver: 360-Degree Radial Beat Spinner - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="revolver-container">
    <header class="hud-top">
      <div class="stat"><span class="lbl">STAGE</span><span id="levelDisplay" class="val">1/45</span></div>
      <div class="stat"><span class="lbl">RADAR</span><span id="themeDisplay" class="val">Radar Green</span></div>
      <div class="stat"><span class="lbl">SPARKS</span><span id="sparksDisplay" class="val">0/25</span></div>
      <div class="stat"><span class="lbl">SHIELDS</span><span id="shieldDisplay" class="val">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <main class="radial-arena">
      <canvas id="revolverCanvas" width="480" height="560"></canvas>
      <div id="revMsg" class="rev-msg"></div>
    </main>

    <footer class="hud-bottom">
      <div class="hint">Rotate shield arc with mouse/touch or Arrow Keys to intercept incoming rhythm sparks!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-card">
      <h2>SELECT RADAR SECTOR (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g90Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #080314;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.revolver-container {
  width: 100vw;
  max-width: 500px;
  height: 100vh;
  max-height: 840px;
  background: #100624;
  border: 2px solid #ff007f;
  border-radius: 12px;
  box-shadow: 0 0 35px rgba(255, 0, 127, 0.25);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.hud-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #080314;
  border-bottom: 1px solid rgba(255, 0, 127, 0.3);
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat .lbl {
  font-size: 8px;
  color: #ff007f;
  font-weight: 800;
  letter-spacing: 1px;
}
.stat .val {
  font-size: 13px;
  font-weight: 900;
}
.btn-stages {
  background: #ff007f;
  border: none;
  color: #fff;
  font-weight: 900;
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.radial-arena {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#revolverCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.rev-msg {
  position: absolute;
  top: 35%;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.12s ease-out;
}
.rev-msg.show {
  opacity: 1;
  transform: scale(1.2);
}
.hud-bottom {
  padding: 10px 14px 14px;
  background: #080314;
  border-top: 1px solid rgba(255, 0, 127, 0.3);
}
.hint {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(3, 4, 10, 0.94);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-card {
  width: 90%;
  max-width: 440px;
  background: #100624;
  border: 2px solid #ff007f;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-card h2 {
  font-size: 14px;
  font-weight: 900;
  color: #ff007f;
  text-align: center;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  max-height: 360px;
  overflow-y: auto;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #ff007f;
  color: #fff;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ff007f;
  color: #fff;
}
.btn-close {
  background: #00f0ff;
  border: none;
  color: #000;
  font-weight: 900;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}`;

const g90Audio = `class RevolverAudio {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  playCatch() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(587.33, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.15);
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  playMiss() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playWin() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((n, i) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.frequency.setValueAtTime(n, this.ctx.currentTime);
        g.gain.setValueAtTime(0.25, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        o.connect(g);
        g.connect(this.ctx.destination);
        o.start();
        o.stop(this.ctx.currentTime + 0.3);
      }, i * 100);
    });
  }
}`;

const g90Game = `/**
 * Rhythm Revolver — Game Engine (45 Stages, Radial Catcher, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new RevolverAudio();
const canvas = document.getElementById('revolverCanvas');
const ctx = canvas.getContext('2d');
const revMsg = document.getElementById('revMsg');

let currentLevel = 1;
let score = 0;
let sparksCaught = 0;
let targetSparks = 25;
let shields = 3;
let invulnerable = true;

let shieldAngle = 0;
const shieldArc = Math.PI / 3; // 60-degree catching arc
const coreRadius = 70;

let sparks = [];
let sparkTimer = 0;
let speed = 2.5;

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  sparksCaught = 0;
  targetSparks = 20 + lvl * 2;
  speed = 2.0 + (lvl * 0.08);
  sparks = [];
  sparkTimer = 0;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/45\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('sparksDisplay').textContent = \`\${sparksCaught}/\${targetSparks}\`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function spawnSpark() {
  const angle = Math.random() * Math.PI * 2;
  const dist = canvas.width * 0.7;
  sparks.push({
    angle,
    dist,
    speed: speed * (0.9 + Math.random() * 0.2)
  });
}

function showMsg(text, color) {
  revMsg.textContent = text;
  revMsg.style.color = color;
  revMsg.classList.remove('show');
  void revMsg.offsetWidth;
  revMsg.classList.add('show');
  setTimeout(() => revMsg.classList.remove('show'), 600);
}

function update(dt) {
  sparkTimer += dt;
  if (sparkTimer > 1.0 - Math.min(0.5, currentLevel * 0.01)) {
    sparkTimer = 0;
    spawnSpark();
  }

  for (let i = sparks.length - 1; i >= 0; i--) {
    const s = sparks[i];
    s.dist -= s.speed * (dt * 60);

    // Spark reaches the shield ring
    if (s.dist <= coreRadius + 10 && s.dist >= coreRadius - 10) {
      // Check angle difference
      let diff = Math.abs(s.angle - shieldAngle);
      while (diff > Math.PI) diff = Math.abs(diff - Math.PI * 2);

      if (diff <= shieldArc / 2) {
        // Shield Caught!
        sparks.splice(i, 1);
        sparksCaught++;
        score += 150;
        audio.playCatch();
        showMsg('SPARK INTERCEPTED!', '#00f0ff');
        updateHud();

        if (sparksCaught >= targetSparks) {
          audio.playWin();
          showMsg('SECTOR DEFENDED!', '#39ff14');
          setTimeout(() => {
            if (currentLevel < 45) initLevel(currentLevel + 1);
            else showMsg('ALL 45 RADAR SECTORS MASTERED!', '#ffd600');
          }, 1200);
        }
        continue;
      }
    }

    // Spark penetrates core
    if (s.dist <= 25) {
      sparks.splice(i, 1);
      shields--;
      audio.playMiss();
      showMsg('CORE BREACH!', '#ff0055');
      updateHud();

      if (shields <= 0) {
        showMsg('RADAR OVERLOAD - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  // Radar Concentric Rings
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, 70, 0, Math.PI * 2);
  ctx.arc(cx, cy, 140, 0, Math.PI * 2);
  ctx.arc(cx, cy, 210, 0, Math.PI * 2);
  ctx.stroke();

  // Central Core
  ctx.fillStyle = '#ff007f';
  ctx.shadowColor = '#ff007f';
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(cx, cy, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Rotating Shield Arc
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 15;
  ctx.beginPath();
  ctx.arc(cx, cy, coreRadius, shieldAngle - shieldArc / 2, shieldAngle + shieldArc / 2);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Converging Sparks
  for (let s of sparks) {
    const sx = cx + Math.cos(s.angle) * s.dist;
    const sy = cy + Math.sin(s.angle) * s.dist;

    ctx.fillStyle = '#ffd600';
    ctx.shadowColor = '#ffd600';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(sx, sy, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Trail line towards center
    ctx.strokeStyle = 'rgba(255, 214, 0, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx + Math.cos(s.angle) * 15, sy + Math.sin(s.angle) * 15);
    ctx.stroke();
  }
}

let lastTime = performance.now();
function gameLoop(now) {
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(gameLoop);
}

// Mouse / Touch Rotation
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const px = (e.clientX - rect.left) * (canvas.width / rect.width);
  const py = (e.clientY - rect.top) * (canvas.height / rect.height);
  shieldAngle = Math.atan2(py - canvas.height / 2, px - canvas.width / 2);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') shieldAngle -= 0.2;
  if (e.key === 'ArrowRight') shieldAngle += 0.2;
});

// Level Modal
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => modal.classList.remove('hidden'));
document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));

function renderLevelGrid() {
  const grid = document.getElementById('levelSelectGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 45; i++) {
    const btn = document.createElement('button');
    btn.className = \`lvl-btn \${i === currentLevel ? 'active' : ''}\`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      initLevel(i);
      modal.classList.add('hidden');
    });
    grid.appendChild(btn);
  }
}

initLevel(1);
requestAnimationFrame(gameLoop);
`;

writeFile(path.join(g90Dir, 'index.html'), g90Html);
writeFile(path.join(g90Dir, 'style.css'), g90Css);
writeFile(path.join(g90Dir, 'audio.js'), g90Audio);
writeFile(path.join(g90Dir, 'game.js'), g90Game);
copyThumbnailToIcon('rhythm-revolver');
console.log('Game 90 (rhythm-revolver) built successfully.');
