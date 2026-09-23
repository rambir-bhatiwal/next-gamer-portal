/**
 * Next Games/Game — Rhythm Category Part 2:
 * - soundwave-surfer (Game 84)
 * - pulse-conductor (Game 85)
 * - tempo-runner (Game 86)
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
    const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#08031a" stroke="#00f0ff" stroke-width="4"/><polygon points="50,20 80,75 20,75" fill="#ffd600"/></svg>`;
    writeFile(iconPath, fallback);
  }
}

const RHYTHM_THEMES_CODE = `const THEMES = [
  { id: 1, name: "Sunset Synthwave Wave", bg: "#14052b", road: "#220a44", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 2, name: "Neon Tokyo Equalizer", bg: "#060919", road: "#0d1533", primary: "#00f0ff", secondary: "#39ff14", accent: "#ff007f", text: "#e0f7fa" },
  { id: 3, name: "Cyberpunk Sub-Bass Crypt", bg: "#0d0417", road: "#190a2e", primary: "#7c4dff", secondary: "#ff0055", accent: "#00e5ff", text: "#ede7f6" },
  { id: 4, name: "Cosmic Audio Superhighway", bg: "#03020c", road: "#0a0724", primary: "#651fff", secondary: "#00e5ff", accent: "#ffd600", text: "#e8eaf6" },
  { id: 5, name: "Glacial Aurora Harmonic", bg: "#02131c", road: "#052638", primary: "#80d8ff", secondary: "#00e676", accent: "#ff4081", text: "#e1f5fe" },
  { id: 6, name: "Obsidian Bassline Core", bg: "#070709", road: "#13141a", primary: "#b0bec5", secondary: "#00f0ff", accent: "#39ff14", text: "#eceff1" },
  { id: 7, name: "Solar Flare Beat Flare", bg: "#190700", road: "#361002", primary: "#ff3d00", secondary: "#ffab00", accent: "#ffff00", text: "#fbe9e7" },
  { id: 8, name: "Toxic Electro Circuit", bg: "#0a1702", road: "#162e05", primary: "#76ff03", secondary: "#00e5ff", accent: "#ffd600", text: "#f1f8e9" },
  { id: 9, name: "Cobalt Pulse Matrix", bg: "#020a1c", road: "#06183d", primary: "#2979ff", secondary: "#00f0ff", accent: "#ff1744", text: "#e3f2fd" },
  { id: 10, name: "Amethyst Trance Temple", bg: "#12021c", road: "#26063b", primary: "#d500f9", secondary: "#aa00ff", accent: "#00e5ff", text: "#f3e5f5" },
  { id: 11, name: "Hyperdrive Laser Grid", bg: "#030817", road: "#091738", primary: "#00b0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e1f5fe" },
  { id: 12, name: "Molten Dubstep Chasm", bg: "#170401", road: "#360e03", primary: "#ff5722", secondary: "#ff1744", accent: "#ffd600", text: "#fbe9e7" },
  { id: 13, name: "Prism Wave Spectrum", bg: "#0a0417", road: "#1c0d38", primary: "#ea80fc", secondary: "#00f0ff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 14, name: "Titanium Club Mainframe", bg: "#08090d", road: "#151821", primary: "#cfd8dc", secondary: "#00e676", accent: "#00b0ff", text: "#ffffff" },
  { id: 15, name: "Electric Lavender Field", bg: "#0a0317", road: "#1a0b36", primary: "#b388ff", secondary: "#ff80ab", accent: "#00f0ff", text: "#ede7f6" },
  { id: 16, name: "Emerald Glitch Runway", bg: "#011409", road: "#042914", primary: "#00e676", secondary: "#69f0ae", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Helios Gold Philharmonic", bg: "#171201", road: "#332804", primary: "#ffd700", secondary: "#ff9100", accent: "#ff007f", text: "#fffde7" },
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
// GAME 84: SOUNDWAVE SURFER (Audio Amplitude Rider)
// ============================================================================
console.log('Building Game 84: soundwave-surfer...');
const g84Dir = path.join(gamesDir, 'soundwave-surfer');

const g84Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Soundwave Surfer: Audio Amplitude Rider - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="surfer-container">
    <header class="hud-top">
      <div class="stat"><span class="lbl">STAGE</span><span id="levelDisplay" class="val">1/40</span></div>
      <div class="stat"><span class="lbl">WAVE BIOME</span><span id="themeDisplay" class="val">Sunset Synthwave</span></div>
      <div class="stat"><span class="lbl">SCORE</span><span id="scoreDisplay" class="val">0</span></div>
      <div class="stat"><span class="lbl">RINGS</span><span id="ringsDisplay" class="val">0/15</span></div>
      <div class="stat"><span class="lbl">SHIELDS</span><span id="shieldDisplay" class="val">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <main class="canvas-area">
      <canvas id="surfCanvas" width="500" height="540"></canvas>
      <div id="surfMsg" class="surf-msg"></div>
    </main>

    <footer class="hud-bottom">
      <div class="controls-row">
        <button id="jumpBtn" class="surf-btn">JUMP WAVE (SPACE / UP)</button>
      </div>
      <div class="hint">Surfing amplitude wave | Jump to collect Golden Rhythm Rings and clear stage!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-box">
      <h2>SELECT SOUNDWAVE BIOME (1–40)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g84Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #05020f;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.surfer-container {
  width: 100vw;
  max-width: 520px;
  height: 100vh;
  max-height: 840px;
  background: radial-gradient(circle at 50% 20%, #15082b 0%, #05020c 90%);
  border: 2px solid #7b2cbf;
  border-radius: 12px;
  box-shadow: 0 0 35px rgba(123, 44, 191, 0.3);
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
  background: rgba(10, 4, 24, 0.9);
  border-bottom: 1px solid rgba(123, 44, 191, 0.3);
  z-index: 10;
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
  background: linear-gradient(135deg, #7b2cbf, #00f0ff);
  border: none;
  color: #fff;
  font-size: 11px;
  font-weight: 900;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.canvas-area {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#surfCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.surf-msg {
  position: absolute;
  top: 35%;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 2px;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.15s ease-out;
}
.surf-msg.show {
  opacity: 1;
  transform: scale(1.2);
}
.hud-bottom {
  padding: 10px 14px 14px;
  background: rgba(10, 4, 24, 0.9);
  border-top: 1px solid rgba(0, 240, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
}
.surf-btn {
  background: linear-gradient(135deg, #00f0ff, #ffd600);
  border: none;
  color: #000;
  font-size: 14px;
  font-weight: 900;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
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
.modal-box {
  width: 90%;
  max-width: 440px;
  background: #110724;
  border: 2px solid #7b2cbf;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-box h2 {
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
  border: 1px solid #7b2cbf;
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
  background: #ff007f;
  border: none;
  color: #fff;
  font-weight: 900;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}`;

const g84Audio = `class SurferAudio {
  constructor() {
    this.ctx = null;
    this.step = 0;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  playJump() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(780, now + 0.2);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(now + 0.2);
  }
  playRing() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(987.77, this.ctx.currentTime);
    osc.frequency.setValueAtTime(1318.51, this.ctx.currentTime + 0.08);
    g.gain.setValueAtTime(0.25, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playCrash() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.25);
    g.gain.setValueAtTime(0.4, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playWin() {
    this.init();
    const notes = [440, 554.37, 659.25, 880];
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

const g84Game = `/**
 * Soundwave Surfer — Game Engine (40 Biomes, Waveform Physics, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new SurferAudio();
const canvas = document.getElementById('surfCanvas');
const ctx = canvas.getContext('2d');
const surfMsg = document.getElementById('surfMsg');

let currentLevel = 1;
let score = 0;
let ringsCollected = 0;
let targetRings = 15;
let shields = 3;
let invulnerable = true;

let waveOffset = 0;
let waveSpeed = 2.5;

let surfer = {
  x: 100,
  y: 280,
  vy: 0,
  isJumping: false
};

let rings = [];
let obstacles = [];
let spawnTimer = 0;

function getWaveY(x, time) {
  const base = canvas.height * 0.65;
  const freq1 = 0.012 + (currentLevel * 0.0003);
  const freq2 = 0.024;
  const amp1 = 45 + Math.sin(time * 0.02) * 15;
  const amp2 = 25;
  return base + Math.sin(x * freq1 + time) * amp1 + Math.cos(x * freq2 - time * 0.5) * amp2;
}

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  ringsCollected = 0;
  targetRings = 10 + Math.floor(lvl * 0.5);
  waveSpeed = 2.5 + (lvl * 0.08);
  rings = [];
  obstacles = [];
  spawnTimer = 0;
  surfer.vy = 0;
  surfer.isJumping = false;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/40\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('ringsDisplay').textContent = \`\${ringsCollected}/\${targetRings}\`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function jump() {
  audio.init();
  if (!surfer.isJumping) {
    surfer.isJumping = true;
    surfer.vy = -12;
    audio.playJump();
  }
}

function showMsg(text, color) {
  surfMsg.textContent = text;
  surfMsg.style.color = color;
  surfMsg.classList.remove('show');
  void surfMsg.offsetWidth;
  surfMsg.classList.add('show');
  setTimeout(() => surfMsg.classList.remove('show'), 700);
}

function update(dt) {
  waveOffset += waveSpeed * (dt * 60) * 0.015;

  // Surfer physics
  const waveY = getWaveY(surfer.x, waveOffset);

  if (surfer.isJumping) {
    surfer.y += surfer.vy;
    surfer.vy += 0.6; // gravity
    if (surfer.y >= waveY - 10) {
      surfer.y = waveY - 10;
      surfer.isJumping = false;
      surfer.vy = 0;
    }
  } else {
    surfer.y = waveY - 10;
  }

  // Spawners
  spawnTimer += dt;
  if (spawnTimer > 1.2) {
    spawnTimer = 0;
    const isRing = Math.random() > 0.4;
    const spawnX = canvas.width + 40;
    const itemWaveY = getWaveY(spawnX, waveOffset);

    if (isRing) {
      rings.push({
        x: spawnX,
        y: itemWaveY - 45 - Math.random() * 40,
        radius: 12
      });
    } else {
      obstacles.push({
        x: spawnX,
        y: itemWaveY,
        width: 22,
        height: 32
      });
    }
  }

  // Update Rings
  for (let i = rings.length - 1; i >= 0; i--) {
    const r = rings[i];
    r.x -= waveSpeed * (dt * 60) * 2;

    // Collision with surfer
    const dist = Math.hypot(surfer.x - r.x, surfer.y - r.y);
    if (dist < 26) {
      ringsCollected++;
      score += 200;
      audio.playRing();
      showMsg('+RHYTHM RING!', '#ffd600');
      updateHud();
      rings.splice(i, 1);

      if (ringsCollected >= targetRings) {
        audio.playWin();
        showMsg('STAGE COMPLETED!', '#39ff14');
        setTimeout(() => {
          if (currentLevel < 40) initLevel(currentLevel + 1);
          else showMsg('ALL 40 WAVEFORMS CONQUERED!', '#ffd600');
        }, 1200);
      }
      continue;
    }

    if (r.x < -30) rings.splice(i, 1);
  }

  // Update Obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    const o = obstacles[i];
    o.x -= waveSpeed * (dt * 60) * 2;

    // Recalculate obstacle Y so it rides the wave
    o.y = getWaveY(o.x, waveOffset) - o.height;

    // Collision with surfer
    if (!invulnerable && Math.abs(surfer.x - o.x) < 20 && Math.abs(surfer.y - o.y) < 26) {
      shields--;
      audio.playCrash();
      showMsg('HARMONIC SPIKE HIT!', '#ff0055');
      updateHud();
      obstacles.splice(i, 1);

      if (shields <= 0) {
        showMsg('SURFER WIPEOUT - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
      continue;
    }

    if (o.x < -40) obstacles.splice(i, 1);
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Background FFT equalizer bars
  ctx.fillStyle = theme.primary;
  ctx.globalAlpha = 0.15;
  for (let i = 0; i < 20; i++) {
    const barW = 18;
    const barH = 50 + Math.sin(i * 0.8 + waveOffset) * 60;
    ctx.fillRect(i * 26 + 10, canvas.height * 0.45 - barH, barW, barH);
  }
  ctx.globalAlpha = 1;

  // Draw Audio Waveform Ribbon
  ctx.strokeStyle = theme.secondary;
  ctx.lineWidth = 6;
  ctx.shadowColor = theme.secondary;
  ctx.shadowBlur = 15;
  ctx.beginPath();
  for (let x = 0; x <= canvas.width; x += 10) {
    const y = getWaveY(x, waveOffset);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Draw Rings
  for (let r of rings) {
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#ffd600';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  // Draw Obstacles (Audio Spikes)
  for (let o of obstacles) {
    ctx.fillStyle = '#ff0055';
    ctx.shadowColor = '#ff0055';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(o.x, o.y);
    ctx.lineTo(o.x + o.width / 2, o.y - 20);
    ctx.lineTo(o.x + o.width, o.y);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Draw Surfer Hoverboard & Figure
  ctx.save();
  ctx.translate(surfer.x, surfer.y);

  // Hoverboard
  ctx.fillStyle = '#00f0ff';
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.ellipse(0, 4, 22, 6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Surfer Silhouette
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(0, -18, 6, 0, Math.PI * 2); // Head
  ctx.fill();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, -12);
  ctx.lineTo(0, 0); // Body
  ctx.moveTo(-8, -6);
  ctx.lineTo(8, -6); // Arms
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

// Controls
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    e.preventDefault();
    jump();
  }
});

document.getElementById('jumpBtn').addEventListener('click', jump);
canvas.addEventListener('click', jump);

// Level Modal
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => modal.classList.remove('hidden'));
document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));

function renderLevelGrid() {
  const grid = document.getElementById('levelSelectGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 40; i++) {
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

writeFile(path.join(g84Dir, 'index.html'), g84Html);
writeFile(path.join(g84Dir, 'style.css'), g84Css);
writeFile(path.join(g84Dir, 'audio.js'), g84Audio);
writeFile(path.join(g84Dir, 'game.js'), g84Game);
copyThumbnailToIcon('soundwave-surfer');
console.log('Game 84 (soundwave-surfer) built successfully.');

// ============================================================================
// GAME 85: PULSE CONDUCTOR (Orchestral Synth Duel)
// ============================================================================
console.log('Building Game 85: pulse-conductor...');
const g85Dir = path.join(gamesDir, 'pulse-conductor');

const g85Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pulse Conductor: Orchestral Synth Duel - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="conductor-box">
    <header class="hud-top">
      <div class="stat"><span class="lbl">STAGE</span><span id="levelDisplay" class="val">1/40</span></div>
      <div class="stat"><span class="lbl">HALL</span><span id="themeDisplay" class="val">Sunset Synthwave</span></div>
      <div class="stat"><span class="lbl">BPM</span><span id="bpmDisplay" class="val">100</span></div>
      <div class="stat"><span class="lbl">HARMONY</span><span id="harmonyDisplay" class="val">0%</span></div>
      <div class="stat"><span class="lbl">SHIELDS</span><span id="shieldDisplay" class="val">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <main class="hall-arena">
      <canvas id="metronomeCanvas" width="460" height="500"></canvas>
      <div id="accuracyMsg" class="accuracy-msg"></div>
    </main>

    <footer class="hud-bottom">
      <button id="tapBatonBtn" class="btn-conduct">CONDUCT / TAP BEAT (SPACE)</button>
      <div class="hint">Tap when the swinging baton intersects the central golden tempo mark!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-card">
      <h2>SELECT CONCERT HALL STAGE (1–40)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g85Css = `* {
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
.conductor-box {
  width: 100vw;
  max-width: 500px;
  height: 100vh;
  max-height: 820px;
  background: #100826;
  border: 2px solid #e0aaff;
  border-radius: 12px;
  box-shadow: 0 0 35px rgba(224, 170, 255, 0.25);
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
  background: #090417;
  border-bottom: 1px solid rgba(224, 170, 255, 0.3);
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat .lbl {
  font-size: 8px;
  color: #e0aaff;
  font-weight: 800;
  letter-spacing: 1px;
}
.stat .val {
  font-size: 13px;
  font-weight: 900;
}
.btn-stages {
  background: #e0aaff;
  border: none;
  color: #000;
  font-weight: 900;
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.hall-arena {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
#metronomeCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.accuracy-msg {
  position: absolute;
  top: 30%;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.12s ease-out;
}
.accuracy-msg.show {
  opacity: 1;
  transform: scale(1.2);
}
.hud-bottom {
  padding: 10px 14px 14px;
  background: #090417;
  border-top: 1px solid rgba(224, 170, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.btn-conduct {
  background: linear-gradient(135deg, #e0aaff, #7c4dff);
  border: none;
  color: #000;
  font-size: 14px;
  font-weight: 900;
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.08s;
}
.btn-conduct:active, .btn-conduct.active {
  transform: scale(0.96);
  filter: brightness(1.2);
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
  background: #130a2e;
  border: 2px solid #e0aaff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-card h2 {
  font-size: 14px;
  font-weight: 900;
  color: #e0aaff;
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
  border: 1px solid #e0aaff;
  color: #fff;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}
.lvl-btn.active {
  background: #e0aaff;
  color: #000;
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

const g85Audio = `class ConductorAudio {
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
  playMetronomeTick() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1046.5, this.ctx.currentTime);
    g.gain.setValueAtTime(0.2, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
  playHarmonicChord(harmonyPercent) {
    this.init();
    if (!this.ctx) return;
    const root = 261.63 * (1 + harmonyPercent / 200);
    [root, root * 1.25, root * 1.5].forEach(freq => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      g.gain.setValueAtTime(0.15, this.ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    });
  }
  playDissonantBuzzer() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(90, this.ctx.currentTime);
    g.gain.setValueAtTime(0.35, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
}`;

const g85Game = `/**
 * Pulse Conductor — Game Engine (40 Stages, Metronome Timing, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new ConductorAudio();
const canvas = document.getElementById('metronomeCanvas');
const ctx = canvas.getContext('2d');
const accuracyMsg = document.getElementById('accuracyMsg');

let currentLevel = 1;
let bpm = 100;
let shields = 3;
let invulnerable = true;
let harmony = 0;
let angle = 0;
let prevAngle = 0;
let swingPhase = 0;

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  harmony = 0;
  bpm = 85 + Math.floor(lvl * 2.2);
  swingPhase = 0;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/40\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  document.getElementById('bpmDisplay').textContent = bpm;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('harmonyDisplay').textContent = \`\${Math.floor(harmony)}%\`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function tapBeat() {
  audio.init();
  const distFromCenter = Math.abs(angle); // Center angle is 0
  const tolerance = 0.18; // radian threshold

  if (distFromCenter <= tolerance) {
    let pts = 10;
    let text = 'GOOD CONDUCT!';
    let color = '#ffd600';

    if (distFromCenter <= 0.06) {
      pts = 20;
      text = 'PERFECT TEMPO!';
      color = '#39ff14';
    }

    harmony = Math.min(100, harmony + pts);
    audio.playHarmonicChord(harmony);
    showMsg(text, color);
    updateHud();

    if (harmony >= 100) {
      showMsg('SYMPHONY COMPLETE!', '#39ff14');
      setTimeout(() => {
        if (currentLevel < 40) initLevel(currentLevel + 1);
        else showMsg('ALL 40 CONCERT HALLS MASTERED!', '#ffd600');
      }, 1200);
    }
  } else {
    shields--;
    harmony = Math.max(0, harmony - 10);
    audio.playDissonantBuzzer();
    showMsg('DISSONANT MISS!', '#ff0055');
    updateHud();

    if (shields <= 0) {
      showMsg('ORCHESTRA COLLAPSE - RETRYING', '#ff0055');
      setTimeout(() => initLevel(currentLevel), 1000);
    }
  }
}

function showMsg(text, color) {
  accuracyMsg.textContent = text;
  accuracyMsg.style.color = color;
  accuracyMsg.classList.remove('show');
  void accuracyMsg.offsetWidth;
  accuracyMsg.classList.add('show');
  setTimeout(() => accuracyMsg.classList.remove('show'), 600);
}

function update(dt) {
  const beatsPerSecond = bpm / 60;
  swingPhase += dt * beatsPerSecond * Math.PI;
  prevAngle = angle;
  angle = Math.sin(swingPhase) * 0.55; // Swing amplitude

  // Trigger tick sound on crossing center
  if ((prevAngle < 0 && angle >= 0) || (prevAngle > 0 && angle <= 0)) {
    audio.playMetronomeTick();
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Metronome Pyramid Base
  const cx = canvas.width / 2;
  const pivotY = canvas.height * 0.75;
  const topY = canvas.height * 0.2;

  ctx.fillStyle = '#170c36';
  ctx.strokeStyle = theme.primary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, topY);
  ctx.lineTo(cx + 120, pivotY + 40);
  ctx.lineTo(cx - 120, pivotY + 40);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Central Golden Tempo Target Mark
  ctx.strokeStyle = '#ffd600';
  ctx.lineWidth = 3;
  ctx.shadowColor = '#ffd600';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(cx, topY + 40);
  ctx.lineTo(cx, pivotY + 20);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Swinging Pendulum Rod
  const rodLength = canvas.height * 0.45;
  const tipX = cx + Math.sin(angle) * rodLength;
  const tipY = pivotY - Math.cos(angle) * rodLength;

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx, pivotY);
  ctx.lineTo(tipX, tipY);
  ctx.stroke();

  // Sliding Weight
  const weightDist = rodLength * 0.65;
  const weightX = cx + Math.sin(angle) * weightDist;
  const weightY = pivotY - Math.cos(angle) * weightDist;

  ctx.fillStyle = '#ff007f';
  ctx.shadowColor = '#ff007f';
  ctx.shadowBlur = 10;
  ctx.fillRect(weightX - 12, weightY - 10, 24, 20);
  ctx.shadowBlur = 0;

  // Pivot Base Circle
  ctx.fillStyle = theme.primary;
  ctx.beginPath();
  ctx.arc(cx, pivotY, 14, 0, Math.PI * 2);
  ctx.fill();
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
  if (e.code === 'Space') {
    e.preventDefault();
    tapBeat();
    const btn = document.getElementById('tapBatonBtn');
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 100);
  }
});

document.getElementById('tapBatonBtn').addEventListener('click', tapBeat);

// Level Modal
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => modal.classList.remove('hidden'));
document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));

function renderLevelGrid() {
  const grid = document.getElementById('levelSelectGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 40; i++) {
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

writeFile(path.join(g85Dir, 'index.html'), g85Html);
writeFile(path.join(g85Dir, 'style.css'), g85Css);
writeFile(path.join(g85Dir, 'audio.js'), g85Audio);
writeFile(path.join(g85Dir, 'game.js'), g85Game);
copyThumbnailToIcon('pulse-conductor');
console.log('Game 85 (pulse-conductor) built successfully.');

// ============================================================================
// GAME 86: TEMPO RUNNER (Rhythm-Synced Platform Sprint)
// ============================================================================
console.log('Building Game 86: tempo-runner...');
const g86Dir = path.join(gamesDir, 'tempo-runner');

const g86Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tempo Runner: Rhythm-Synced Platform Sprint - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="runner-box">
    <header class="hud-top">
      <div class="stat"><span class="lbl">STAGE</span><span id="levelDisplay" class="val">1/45</span></div>
      <div class="stat"><span class="lbl">VENUE</span><span id="themeDisplay" class="val">Techno City</span></div>
      <div class="stat"><span class="lbl">DISTANCE</span><span id="distDisplay" class="val">0/500m</span></div>
      <div class="stat"><span class="lbl">COMBO</span><span id="comboDisplay" class="val">0x</span></div>
      <div class="stat"><span class="lbl">SHIELDS</span><span id="shieldDisplay" class="val">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <main class="canvas-arena">
      <canvas id="runnerCanvas" width="500" height="520"></canvas>
      <div id="runnerMsg" class="runner-msg"></div>
    </main>

    <footer class="hud-bottom">
      <button id="jumpBtn" class="btn-jump">RHYTHM JUMP (SPACE / UP)</button>
      <div class="hint">Jump when the expanding rhythm pulse matches the runner ring!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-card">
      <h2>SELECT TEMPO RUNNER TRACK (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g86Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #040913;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.runner-box {
  width: 100vw;
  max-width: 520px;
  height: 100vh;
  max-height: 820px;
  background: #091224;
  border: 2px solid #39ff14;
  border-radius: 12px;
  box-shadow: 0 0 35px rgba(57, 255, 20, 0.25);
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
  background: #060d1a;
  border-bottom: 1px solid rgba(57, 255, 20, 0.3);
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat .lbl {
  font-size: 8px;
  color: #39ff14;
  font-weight: 800;
  letter-spacing: 1px;
}
.stat .val {
  font-size: 13px;
  font-weight: 900;
}
.btn-stages {
  background: #39ff14;
  border: none;
  color: #000;
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
#runnerCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.runner-msg {
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
.runner-msg.show {
  opacity: 1;
  transform: scale(1.2);
}
.hud-bottom {
  padding: 10px 14px 14px;
  background: #060d1a;
  border-top: 1px solid rgba(57, 255, 20, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.btn-jump {
  background: linear-gradient(135deg, #39ff14, #00f0ff);
  border: none;
  color: #000;
  font-size: 14px;
  font-weight: 900;
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
}
.btn-jump:active {
  transform: scale(0.96);
}
.hint {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(3, 7, 14, 0.94);
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
  background: #091224;
  border: 2px solid #39ff14;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-card h2 {
  font-size: 14px;
  font-weight: 900;
  color: #39ff14;
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
  border: 1px solid #39ff14;
  color: #fff;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}
.lvl-btn.active {
  background: #39ff14;
  color: #000;
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

const g86Audio = `class RunnerAudio {
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
  playBeat() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.1);
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  playJump(onBeat) {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'triangle';
    const freq = onBeat ? 659.25 : 330;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + 0.2);
    g.gain.setValueAtTime(0.3, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(g);
    g.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playHurt() {
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

const g86Game = `/**
 * Tempo Runner — Game Engine (45 Levels, Platform Gap Generator, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new RunnerAudio();
const canvas = document.getElementById('runnerCanvas');
const ctx = canvas.getContext('2d');
const runnerMsg = document.getElementById('runnerMsg');

let currentLevel = 1;
let distance = 0;
let targetDistance = 400;
let combo = 0;
let shields = 3;
let invulnerable = true;

let bpm = 120;
let beatTimer = 0;
let pulseRadius = 0;

let runner = {
  x: 80,
  y: 360,
  vy: 0,
  isJumping: false
};

let platforms = [];
let speed = 4;

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  distance = 0;
  targetDistance = 350 + lvl * 15;
  combo = 0;
  bpm = 115 + lvl * 1.2;
  speed = 3.5 + lvl * 0.1;
  beatTimer = 0;
  pulseRadius = 0;

  runner.y = 360;
  runner.vy = 0;
  runner.isJumping = false;

  platforms = [
    { x: 0, w: 250, y: 380 },
    { x: 280, w: 220, y: 380 },
    { x: 530, w: 200, y: 380 }
  ];

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/45\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('distDisplay').textContent = \`\${Math.floor(distance)}/\${targetDistance}m\`;
  document.getElementById('comboDisplay').textContent = \`\${combo}x\`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function jump() {
  audio.init();
  if (!runner.isJumping) {
    runner.isJumping = true;
    const beatInterval = 60 / bpm;
    const timeSinceBeat = beatTimer % beatInterval;
    const onBeat = timeSinceBeat < 0.12 || timeSinceBeat > (beatInterval - 0.12);

    if (onBeat) {
      runner.vy = -13.5; // Super jump!
      combo++;
      audio.playJump(true);
      showMsg('PERFECT BEAT JUMP!', '#39ff14');
    } else {
      runner.vy = -10.5; // Standard jump
      combo = 0;
      audio.playJump(false);
      showMsg('OFF-BEAT HOP', '#ffd600');
    }
    updateHud();
  }
}

function showMsg(text, color) {
  runnerMsg.textContent = text;
  runnerMsg.style.color = color;
  runnerMsg.classList.remove('show');
  void runnerMsg.offsetWidth;
  runnerMsg.classList.add('show');
  setTimeout(() => runnerMsg.classList.remove('show'), 600);
}

function update(dt) {
  const beatInterval = 60 / bpm;
  beatTimer += dt;
  if (beatTimer >= beatInterval) {
    beatTimer -= beatInterval;
    audio.playBeat();
    pulseRadius = 30; // Expanding ring
  }
  if (pulseRadius > 0) pulseRadius -= dt * 60;

  distance += speed * (dt * 10);
  updateHud();

  if (distance >= targetDistance) {
    audio.playWin();
    showMsg('TRACK COMPLETED!', '#39ff14');
    setTimeout(() => {
      if (currentLevel < 45) initLevel(currentLevel + 1);
      else showMsg('ALL 45 TEMPO TRACKS CONQUERED!', '#ffd600');
    }, 1200);
  }

  // Runner Physics
  runner.y += runner.vy;
  runner.vy += 0.65; // gravity

  let onPlatform = false;
  for (let p of platforms) {
    if (runner.x + 10 >= p.x && runner.x - 10 <= p.x + p.w) {
      if (runner.y >= p.y - 15 && runner.y <= p.y + 5 && runner.vy >= 0) {
        runner.y = p.y - 15;
        runner.vy = 0;
        runner.isJumping = false;
        onPlatform = true;
        break;
      }
    }
  }

  // Fall pit check
  if (runner.y > canvas.height + 20) {
    shields--;
    combo = 0;
    audio.playHurt();
    showMsg('CHASM FALL!', '#ff0055');
    updateHud();

    if (shields <= 0) {
      showMsg('SHIELDS DEPLETED - RETRYING', '#ff0055');
      setTimeout(() => initLevel(currentLevel), 1000);
    } else {
      // Respawn on nearest platform
      runner.y = 200;
      runner.vy = 0;
      runner.isJumping = false;
    }
  }

  // Move platforms
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].x -= speed * (dt * 60);
  }

  if (platforms[0].x + platforms[0].w < 0) {
    platforms.shift();
    const lastP = platforms[platforms.length - 1];
    const gap = 80 + Math.random() * 80;
    const w = 180 + Math.random() * 120;
    platforms.push({ x: lastP.x + lastP.w + gap, w, y: 380 });
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Background Skyline
  ctx.fillStyle = theme.road;
  ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

  // Platforms
  for (let p of platforms) {
    ctx.fillStyle = theme.primary;
    ctx.shadowColor = theme.primary;
    ctx.shadowBlur = 10;
    ctx.fillRect(p.x, p.y, p.w, 16);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(p.x, p.y, p.w, 3);
  }

  // Draw Runner
  ctx.save();
  ctx.translate(runner.x, runner.y);

  // Expanding Beat Pulse Ring
  if (pulseRadius > 0) {
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, pulseRadius, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Runner Body
  ctx.fillStyle = '#39ff14';
  ctx.shadowColor = '#39ff14';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(0, -6, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(4, -7, 3, 0, Math.PI * 2);
  ctx.fill();

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

// Controls
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    e.preventDefault();
    jump();
  }
});

document.getElementById('jumpBtn').addEventListener('click', jump);
canvas.addEventListener('click', jump);

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

writeFile(path.join(g86Dir, 'index.html'), g86Html);
writeFile(path.join(g86Dir, 'style.css'), g86Css);
writeFile(path.join(g86Dir, 'audio.js'), g86Audio);
writeFile(path.join(g86Dir, 'game.js'), g86Game);
copyThumbnailToIcon('tempo-runner');
console.log('Game 86 (tempo-runner) built successfully.');
