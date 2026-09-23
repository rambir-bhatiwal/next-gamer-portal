/**
 * Next Games/Game — Strategy Category Part 3:
 * - biodome-terraform (Game 37)
 * - drone-swarm-commander (Game 38)
 * - ai-defense-matrix (Game 39)
 * - space-station-outpost (Game 40)
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
// GAME 37: BIODOME TERRAFORM PROTOCOL: ECOSYSTEM SIM
// ----------------------------------------------------------------------------
console.log('Building Game 37: biodome-terraform...');
const btpDir = path.join(gamesDir, 'biodome-terraform');

const btpHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Bio-Dome Terraform Protocol: Ecosystem Sim - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Biosphere Sector</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">Temperature</div><div id="tempVal" class="hud-val" style="color:#ffd600;">22°C (STABLE)</div></div>
      <div class="hud-box"><div class="hud-lbl">Oxygen / CO2</div><div id="gasVal" class="hud-val" style="color:#00ffcc;">21% / 0.04%</div></div>
      <div class="hud-box"><div class="hud-lbl">Eco-Stability</div><div id="stabilityVal" class="hud-val" style="color:#39ff14;">85%</div></div>
      <div class="hud-box"><div class="hud-lbl">Flora Biomass</div><div id="biomassVal" class="hud-val" style="color:#00f0ff;">0 / 100</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-action-bar">
      <button class="eco-btn" id="heatUpBtn">WARM CORE (+)</button>
      <button class="eco-btn" id="coolDownBtn">CRYO COOL (-)</button>
      <button class="eco-btn" id="mistBtn">RELEASE MOISTURE</button>
      <button class="eco-btn" id="microbeBtn">SEED MICROBES</button>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">DOMES (1-45)</button>
      <button id="restartBtn" class="action-btn">RESET ECOSYSTEM</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT DOME &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">BIODOME TERRAFORM PROTOCOL</h1>
        <p id="overlayDesc">Regulate atmospheric equilibrium across 45 unique alien biospheres. Balance temperature, atmospheric moisture, and seed microbial flora until full ecological stability is reached.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE TERRAFORMING</button>
        <div class="controls-hint">Controls: Use atmospheric regulator buttons to maintain 18°C–26°C and 80%+ eco-stability to grow 100 flora biomass units.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const btpCss = `* {
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
.controls-action-bar {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.eco-btn {
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
.eco-btn:hover {
  background: rgba(0, 240, 255, 0.25);
  border-color: #00f0ff;
  color: #00f0ff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
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

const btpAudio = `/**
 * Bio-Dome Terraform Web Audio API Engine
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
  playValve() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(150, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch(e) {}
  }
  playGrow() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(660, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
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

const btpGame = `/**
 * Bio-Dome Terraform Protocol: Ecosystem Sim - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const tempVal = document.getElementById('tempVal');
  const gasVal = document.getElementById('gasVal');
  const stabilityVal = document.getElementById('stabilityVal');
  const biomassVal = document.getElementById('biomassVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  const heatUpBtn = document.getElementById('heatUpBtn');
  const coolDownBtn = document.getElementById('coolDownBtn');
  const mistBtn = document.getElementById('mistBtn');
  const microbeBtn = document.getElementById('microbeBtn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let temp = 22; // ideal 20-25
  let moisture = 50; // ideal 40-60
  let oxygen = 21;
  let biomass = 0;
  const targetBiomass = 100;
  let stability = 85;
  let tick = 0;
  let floraNodes = [];
  let gasParticles = [];
  let invulnerable = 0; // human speed fair defense

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
    temp = 15 + (lvl % 12);
    moisture = 30 + (lvl % 25);
    oxygen = 18;
    biomass = 0;
    stability = 75;
    floraNodes = [];
    gasParticles = [];
    invulnerable = 60;

    for (let i = 0; i < 40; i++) {
      gasParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 2 + 1,
        color: '#00f0ff'
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    biomassVal.textContent = '0 / ' + targetBiomass;
    nextBtn.style.display = 'none';
    isPlaying = true;
    updateHUD();
  }

  function updateHUD() {
    // Calculate stability
    let tempDiff = Math.abs(temp - 22);
    let moistDiff = Math.abs(moisture - 50);
    stability = Math.max(10, Math.min(100, Math.round(100 - tempDiff * 3 - moistDiff * 0.8)));

    tempVal.textContent = Math.round(temp) + '°C (' + (tempDiff < 4 ? 'STABLE' : (temp > 22 ? 'HOT' : 'COLD')) + ')';
    tempVal.style.color = tempDiff < 4 ? '#39ff14' : (temp > 22 ? '#ff1744' : '#00f0ff');

    gasVal.textContent = Math.round(oxygen) + '% / 0.04%';
    stabilityVal.textContent = stability + '%';
    stabilityVal.style.color = stability > 70 ? '#39ff14' : (stability > 40 ? '#ffd600' : '#ff1744');
    biomassVal.textContent = Math.round(biomass) + ' / ' + targetBiomass;

    if (biomass >= targetBiomass && isPlaying) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'TERRAFORM PROTOCOL COMPLETE!';
      overlayDesc.textContent = 'Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + ') has established an autonomous, thriving biological envelope!';
      startBtn.textContent = 'PROCEED TO NEXT BIOSPHERE';
      overlay.style.display = 'flex';
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2 + 40;
    const domeR = Math.min(width, height) * 0.42;

    // Dome Arc Glow
    const dGlow = ctx.createRadialGradient(cx, cy, domeR * 0.2, cx, cy, domeR);
    dGlow.addColorStop(0, theme.primary + '22');
    dGlow.addColorStop(0.9, theme.primary + '11');
    dGlow.addColorStop(1, theme.accent + '44');
    ctx.fillStyle = dGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, domeR, Math.PI, 0);
    ctx.fill();

    // Dome Glass Arc
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, domeR, Math.PI, 0);
    ctx.stroke();

    // Ground Basin
    ctx.fillStyle = '#10141b';
    ctx.fillRect(cx - domeR - 20, cy, (domeR + 20) * 2, 80);
    ctx.strokeStyle = theme.secondary;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - domeR, cy);
    ctx.lineTo(cx + domeR, cy);
    ctx.stroke();

    // Draw Flora Nodes
    floraNodes.forEach(f => {
      ctx.fillStyle = f.color;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();

      // Stem
      ctx.strokeStyle = '#00e676';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(f.x, cy);
      ctx.lineTo(f.x, f.y);
      ctx.stroke();
    });

    // Draw Gas Particles
    gasParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < cx - domeR + 10 || p.x > cx + domeR - 10) p.vx *= -1;
      if (p.y < cy - domeR + 10 || p.y > cy - 5) p.vy *= -1;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!isPlaying) return;

    // Simulation Tick
    tick++;
    if (tick >= 45) {
      tick = 0;
      // Slight environmental drift
      temp += (Math.random() - 0.48) * 0.4;
      moisture += (Math.random() - 0.48) * 0.5;

      if (stability >= 75) {
        biomass = Math.min(targetBiomass, biomass + 1.8);
        if (Math.random() < 0.35 && floraNodes.length < 35) {
          const fx = cx + (Math.random() - 0.5) * domeR * 1.6;
          const maxH = Math.sqrt(Math.max(0, domeR * domeR - Math.pow(fx - cx, 2))) * 0.7;
          const fy = cy - Math.random() * maxH;
          floraNodes.push({
            x: fx,
            y: fy,
            r: Math.random() * 5 + 3,
            color: Math.random() < 0.6 ? '#39ff14' : theme.accent
          });
          if (window.soundEngine) window.soundEngine.playGrow();
        }
      } else if (stability < 40) {
        biomass = Math.max(0, biomass - 0.5);
      }
      updateHUD();
    }
  }

  // Controls
  heatUpBtn.addEventListener('click', () => {
    temp += 1.8;
    if (window.soundEngine) window.soundEngine.playValve();
    updateHUD();
  });

  coolDownBtn.addEventListener('click', () => {
    temp -= 1.8;
    if (window.soundEngine) window.soundEngine.playValve();
    updateHUD();
  });

  mistBtn.addEventListener('click', () => {
    moisture = Math.min(100, moisture + 5);
    if (window.soundEngine) window.soundEngine.playValve();
    updateHUD();
  });

  microbeBtn.addEventListener('click', () => {
    if (stability >= 60) {
      biomass = Math.min(targetBiomass, biomass + 4);
      if (window.soundEngine) window.soundEngine.playGrow();
      updateHUD();
    }
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (biomass >= targetBiomass) {
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
    overlayTitle.textContent = 'BIOSPHERE SECTOR CATALOG (1-45)';
    overlayDesc.textContent = 'Select target atmospheric dome:';
    startBtn.textContent = 'RESUME TERRAFORMING';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(btpDir, 'index.html'), btpHtml);
writeFile(path.join(btpDir, 'style.css'), btpCss);
writeFile(path.join(btpDir, 'audio.js'), btpAudio);
writeFile(path.join(btpDir, 'game.js'), btpGame);

// ----------------------------------------------------------------------------
// GAME 38: DRONE SWARM COMMANDER: TACTICAL PATROL
// ----------------------------------------------------------------------------
console.log('Building Game 38: drone-swarm-commander...');
const dscDir = path.join(gamesDir, 'drone-swarm-commander');

const dscHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Drone Swarm Commander: Tactical Patrol - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Patrol Sector</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">Swarm Drones</div><div id="droneVal" class="hud-val" style="color:#00f0ff;">40 DRONES</div></div>
      <div class="hud-box"><div class="hud-lbl">Current Stance</div><div id="stanceVal" class="hud-val" style="color:#ffd600;">INTERCEPT</div></div>
      <div class="hud-box"><div class="hud-lbl">Hostiles Purged</div><div id="scoreVal" class="hud-val" style="color:#39ff14;">0 / 20</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="stance-bar">
      <button class="stance-btn active" data-stance="intercept">AGGRESSIVE INTERCEPT</button>
      <button class="stance-btn" data-stance="orbit">ORBITAL DEFENSE</button>
      <button class="stance-btn" data-stance="scatter">SPREAD PATROL</button>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <button id="restartBtn" class="action-btn">RESET PATROL</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">DRONE SWARM COMMANDER</h1>
        <p id="overlayDesc">Command a dynamic flock of autonomous micro-drones using flocking algorithms across 45 security sectors. Direct your swarm to hunt down stealth enemy infiltrators.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">LAUNCH DRONE SWARM</button>
        <div class="controls-hint">Controls: Click or drag on canvas to position swarm focal beacon. Choose tactical stance to adapt flocking behavior.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const dscCss = `* {
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
.stance-bar {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.stance-btn {
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
.stance-btn.active, .stance-btn:hover {
  background: rgba(0, 240, 255, 0.25);
  border-color: #00f0ff;
  color: #00f0ff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
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

const dscAudio = `/**
 * Drone Swarm Commander Web Audio API Engine
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
  playChirp() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch(e) {}
  }
  playPop() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
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

const dscGame = `/**
 * Drone Swarm Commander: Tactical Patrol - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const droneVal = document.getElementById('droneVal');
  const stanceVal = document.getElementById('stanceVal');
  const scoreVal = document.getElementById('scoreVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const stanceBtns = document.querySelectorAll('.stance-btn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let stance = 'intercept';
  let score = 0;
  let targetScore = 20;
  let beaconX = width / 2;
  let beaconY = height / 2;
  let invulnerable = 0; // human speed fair defense

  let drones = [];
  let enemies = [];
  let lasers = [];
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
    targetScore = 15 + lvl;
    score = 0;
    beaconX = width / 2;
    beaconY = height / 2;
    enemies = [];
    lasers = [];
    particles = [];
    spawnCooldown = 40;
    invulnerable = 60;

    // Initialize 40 Micro-Drones
    drones = [];
    for (let i = 0; i < 40; i++) {
      drones.push({
        x: beaconX + (Math.random() - 0.5) * 80,
        y: beaconY + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        cooldown: Math.floor(Math.random() * 20)
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    droneVal.textContent = drones.length + ' DRONES';
    scoreVal.textContent = '0 / ' + targetScore;
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

  function spawnEnemy() {
    const side = Math.floor(Math.random() * 4);
    let x = 0, y = 0;
    if (side === 0) { x = Math.random() * width; y = -20; }
    else if (side === 1) { x = width + 20; y = Math.random() * height; }
    else if (side === 2) { x = Math.random() * width; y = height + 20; }
    else { x = -20; y = Math.random() * height; }

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const speed = 1.0 + Math.min(2.0, currentLevel * 0.04);
    const targetAngle = Math.atan2(height / 2 - y, width / 2 - x);

    enemies.push({
      x, y,
      vx: Math.cos(targetAngle) * speed,
      vy: Math.sin(targetAngle) * speed,
      hp: 15 + currentLevel,
      maxHp: 15 + currentLevel,
      r: 12,
      color: '#ff1744'
    });
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Grid Radar Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 60) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Swarm Beacon Indicator
    ctx.strokeStyle = theme.primary + '66';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(beaconX, beaconY, 24, 0, Math.PI * 2);
    ctx.stroke();

    if (!isPlaying) return;

    // Spawning Enemies
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnEnemy();
      spawnCooldown = Math.max(30, 80 - currentLevel);
    }

    // Update Drones (Flocking to Beacon)
    drones.forEach(d => {
      // Pull to beacon
      const dx = beaconX - d.x;
      const dy = beaconY - d.y;
      const dist = Math.hypot(dx, dy);

      let force = 0.08;
      if (stance === 'scatter') force = 0.03;
      if (stance === 'orbit') {
        // Tangential swirl
        d.vx += -dy * 0.001;
        d.vy += dx * 0.001;
      }

      d.vx += (dx / Math.max(20, dist)) * force;
      d.vy += (dy / Math.max(20, dist)) * force;

      // Damping
      d.vx *= 0.94;
      d.vy *= 0.94;

      d.x += d.vx;
      d.y += d.vy;

      // Draw Drone
      ctx.fillStyle = theme.primary;
      ctx.beginPath();
      ctx.arc(d.x, d.y, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Drone Targeting
      d.cooldown--;
      if (d.cooldown <= 0) {
        // Find enemy in range
        let target = null;
        let minDist = 140;
        enemies.forEach(e => {
          const ed = Math.hypot(e.x - d.x, e.y - d.y);
          if (ed < minDist) {
            minDist = ed;
            target = e;
          }
        });

        if (target) {
          d.cooldown = 35;
          lasers.push({
            x1: d.x, y1: d.y,
            x2: target.x, y2: target.y,
            life: 6,
            color: theme.accent
          });
          target.hp -= 4;
          if (window.soundEngine && Math.random() < 0.2) window.soundEngine.playChirp();

          if (target.hp <= 0) {
            createExplosion(target.x, target.y, '#ff1744', 12);
            enemies = enemies.filter(e => e !== target);
            score++;
            scoreVal.textContent = score + ' / ' + targetScore;
            if (window.soundEngine) window.soundEngine.playPop();

            if (score >= targetScore) {
              isPlaying = false;
              if (window.soundEngine) window.soundEngine.playWin();
              nextBtn.style.display = 'inline-block';
              overlayTitle.textContent = 'SECTOR SECURED!';
              overlayDesc.textContent = 'All hostile stealth drones neutralized in Sector ' + currentLevel + ' (' + theme.name + ').';
              startBtn.textContent = 'PATROL NEXT SECTOR';
              overlay.style.display = 'flex';
            }
          }
        }
      }
    });

    // Draw Lasers
    for (let i = lasers.length - 1; i >= 0; i--) {
      const l = lasers[i];
      l.life--;
      ctx.strokeStyle = l.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
      if (l.life <= 0) lasers.splice(i, 1);
    }

    // Update Enemies
    enemies.forEach(e => {
      e.x += e.vx;
      e.y += e.vy;

      ctx.fillStyle = e.color;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fill();

      // Health ring
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r * (e.hp / e.maxHp), 0, Math.PI * 2);
      ctx.stroke();
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
  canvas.addEventListener('mousemove', e => {
    if (isPlaying) {
      const rect = canvas.getBoundingClientRect();
      beaconX = e.clientX - rect.left;
      beaconY = e.clientY - rect.top;
    }
  });

  stanceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stanceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      stance = btn.dataset.stance;
      stanceVal.textContent = stance.toUpperCase();
    });
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

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'PATROL SECTOR MAP (1-45)';
    overlayDesc.textContent = 'Select autonomous drone patrol zone:';
    startBtn.textContent = 'RESUME PATROL';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(dscDir, 'index.html'), dscHtml);
writeFile(path.join(dscDir, 'style.css'), dscCss);
writeFile(path.join(dscDir, 'audio.js'), dscAudio);
writeFile(path.join(dscDir, 'game.js'), dscGame);

// ----------------------------------------------------------------------------
// GAME 39: AI DEFENSE MATRIX: NEURAL FIREWALL WAR
// ----------------------------------------------------------------------------
console.log('Building Game 39: ai-defense-matrix...');
const admDir = path.join(gamesDir, 'ai-defense-matrix');

const admHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>AI Defense Matrix: Neural Firewall War - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Neural Subnet</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">CPU Cycles</div><div id="cpuVal" class="hud-val" style="color:#00f0ff;">100 MHz</div></div>
      <div class="hud-box"><div class="hud-lbl">Core Sentience</div><div id="coreVal" class="hud-val" style="color:#00ff88;">100%</div></div>
      <div class="hud-box"><div class="hud-lbl">Intrusions Quarantined</div><div id="scoreVal" class="hud-val" style="color:#ffd600;">0 / 25</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="defense-tools-bar">
      <button class="tool-btn active" data-tool="firewall"><span class="t-name">FIREWALL (25 CPU)</span><span class="t-sub">Block Path</span></button>
      <button class="tool-btn" data-tool="honeypot"><span class="t-name">HONEYPOT (40 CPU)</span><span class="t-sub">Trap Infiltrator</span></button>
      <button class="tool-btn" data-tool="purge"><span class="t-name">PURGE (60 CPU)</span><span class="t-sub">Area Quarantine</span></button>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">MATRICES (1-45)</button>
      <button id="restartBtn" class="action-btn">RELOAD NEURAL CORE</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT MATRIX &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">AI DEFENSE MATRIX</h1>
        <p id="overlayDesc">Protect a nascent sentient neural core against escalating cyber breaches across 45 neural network stages. Allocate CPU cycles to deploy adaptive firewalls, decoy honeypots, and purge routines.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">ACTIVATE NEURAL SAFEGUARD</button>
        <div class="controls-hint">Controls: Select security subroutine, click on neural pathways or nodes to construct defense barriers.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const admCss = `* {
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
.defense-tools-bar {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.tool-btn {
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
.tool-btn.active, .tool-btn:hover {
  background: rgba(0, 240, 255, 0.25);
  border-color: #00f0ff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
}
.t-name {
  font-size: 11px;
  font-weight: 700;
  color: #00f0ff;
}
.t-sub {
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

const admAudio = `/**
 * AI Defense Matrix Web Audio API Engine
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
  playLock() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(500, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(800, this.ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch(e) {}
  }
  playPurge() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(200, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(700, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
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

const admGame = `/**
 * AI Defense Matrix: Neural Firewall War - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const cpuVal = document.getElementById('cpuVal');
  const coreVal = document.getElementById('coreVal');
  const scoreVal = document.getElementById('scoreVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const toolBtns = document.querySelectorAll('.tool-btn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedTool = 'firewall';
  let cpu = 100;
  let coreHealth = 100;
  let score = 0;
  let targetScore = 25;
  let spawnCooldown = 0;
  let invulnerable = 0; // human speed fair defense

  let nodes = [];
  let links = [];
  let intruders = [];
  let firewalls = [];
  let honeypots = [];
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
    targetScore = 20 + lvl;
    score = 0;
    cpu = 100 + lvl * 5;
    coreHealth = 100;
    intruders = [];
    firewalls = [];
    honeypots = [];
    particles = [];
    spawnCooldown = 50;
    invulnerable = 60;

    const cx = width / 2;
    const cy = height / 2;
    nodes = [];
    links = [];

    // Core Node (Center)
    nodes.push({ id: 0, x: cx, y: cy, r: 35, isCore: true });

    // Neural Ring Nodes
    const ringCount = 8;
    for (let i = 0; i < ringCount; i++) {
      const ang = (i / ringCount) * Math.PI * 2;
      const dist = Math.min(width, height) * 0.35;
      const nx = cx + Math.cos(ang) * dist;
      const ny = cy + Math.sin(ang) * dist;
      nodes.push({ id: i + 1, x: nx, y: ny, r: 16, isCore: false });
      links.push({ from: 0, to: i + 1 });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    cpuVal.textContent = cpu + ' MHz';
    coreVal.textContent = '100%';
    coreVal.style.color = '#00ff88';
    scoreVal.textContent = '0 / ' + targetScore;
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

  function spawnIntruder() {
    const outerNodes = nodes.filter(n => !n.isCore);
    const startNode = outerNodes[Math.floor(Math.random() * outerNodes.length)];
    const speed = 0.8 + Math.min(1.8, currentLevel * 0.03);

    intruders.push({
      x: startNode.x,
      y: startNode.y,
      currentNode: startNode,
      targetNode: nodes[0], // Moving toward core
      speed,
      hp: 12 + currentLevel,
      color: '#ff1744'
    });
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw Links
    links.forEach(l => {
      const n1 = nodes[l.from];
      const n2 = nodes[l.to];
      ctx.strokeStyle = theme.primary + '33';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);
      ctx.stroke();
    });

    // Draw Firewalls
    firewalls.forEach(fw => {
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(fw.x, fw.y, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Honeypots
    honeypots.forEach(hp => {
      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.arc(hp.x, hp.y, 14, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Nodes
    nodes.forEach(n => {
      if (n.isCore) {
        const glow = ctx.createRadialGradient(n.x, n.y, 10, n.x, n.y, n.r * 1.5);
        glow.addColorStop(0, '#00ff8844');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#00ff88';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#04020f';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('AI CORE', n.x, n.y);
      } else {
        ctx.fillStyle = theme.primary;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (!isPlaying) return;

    // Spawning Intruders
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnIntruder();
      spawnCooldown = Math.max(35, 75 - currentLevel);
      cpu = Math.min(200, cpu + 3);
      cpuVal.textContent = cpu + ' MHz';
    }

    // Update Intruders
    for (let i = intruders.length - 1; i >= 0; i--) {
      const intr = intruders[i];

      // Check if near honeypot
      let trapped = false;
      honeypots.forEach(hp => {
        if (Math.hypot(hp.x - intr.x, hp.y - intr.y) < 25) {
          trapped = true;
          intr.hp -= 0.5;
        }
      });

      if (!trapped) {
        const dx = intr.targetNode.x - intr.x;
        const dy = intr.targetNode.y - intr.y;
        const dist = Math.hypot(dx, dy);

        // Check firewall collision along path
        let blocked = false;
        firewalls.forEach(fw => {
          if (Math.hypot(fw.x - intr.x, fw.y - intr.y) < 14) {
            blocked = true;
            intr.hp -= 1.0;
            fw.hp = (fw.hp || 30) - 1;
          }
        });

        if (!blocked && dist > 10) {
          intr.x += (dx / dist) * intr.speed;
          intr.y += (dy / dist) * intr.speed;
        } else if (dist <= 10) {
          // Reached Core
          coreHealth = Math.max(0, coreHealth - 15);
          coreVal.textContent = coreHealth + '%';
          coreVal.style.color = coreHealth > 50 ? '#00ff88' : '#ff1744';
          createExplosion(intr.x, intr.y, '#ff1744', 15);
          intruders.splice(i, 1);

          if (coreHealth <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'NEURAL CORE QUARANTINED';
            overlayDesc.textContent = 'Intrusion packets overwhelmed the synthetic AI core in Sector ' + currentLevel + '. Reset firewall and retry.';
            startBtn.textContent = 'RETRY MATRIX ' + currentLevel;
            overlay.style.display = 'flex';
          }
          continue;
        }
      }

      // Draw Intruder
      ctx.fillStyle = intr.color;
      ctx.beginPath();
      ctx.arc(intr.x, intr.y, 6, 0, Math.PI * 2);
      ctx.fill();

      if (intr.hp <= 0) {
        createExplosion(intr.x, intr.y, '#ffd600', 10);
        intruders.splice(i, 1);
        score++;
        scoreVal.textContent = score + ' / ' + targetScore;

        if (score >= targetScore) {
          isPlaying = false;
          if (window.soundEngine) window.soundEngine.playWin();
          nextBtn.style.display = 'inline-block';
          overlayTitle.textContent = 'MATRIX SECURED!';
          overlayDesc.textContent = 'All malicious malware vectors purged in Sector ' + currentLevel + ' (' + theme.name + ').';
          startBtn.textContent = 'FORTIFY NEXT MATRIX';
          overlay.style.display = 'flex';
        }
      }
    }

    // Clean broken firewalls
    firewalls = firewalls.filter(f => (f.hp === undefined || f.hp > 0));

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
    if (!isPlaying) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (selectedTool === 'firewall' && cpu >= 25) {
      cpu -= 25;
      cpuVal.textContent = cpu + ' MHz';
      firewalls.push({ x: mx, y: my, hp: 45 });
      if (window.soundEngine) window.soundEngine.playLock();
    } else if (selectedTool === 'honeypot' && cpu >= 40) {
      cpu -= 40;
      cpuVal.textContent = cpu + ' MHz';
      honeypots.push({ x: mx, y: my });
      if (window.soundEngine) window.soundEngine.playLock();
    } else if (selectedTool === 'purge' && cpu >= 60) {
      cpu -= 60;
      cpuVal.textContent = cpu + ' MHz';
      if (window.soundEngine) window.soundEngine.playPurge();
      createExplosion(mx, my, '#00f0ff', 25);
      intruders.forEach(intr => {
        if (Math.hypot(intr.x - mx, intr.y - my) < 100) {
          intr.hp -= 20;
        }
      });
    }
  });

  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toolBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTool = btn.dataset.tool;
    });
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

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'NEURAL ARCHITECTURE MAP (1-45)';
    overlayDesc.textContent = 'Select target synthetic AI core:';
    startBtn.textContent = 'RESUME DEFENSE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(admDir, 'index.html'), admHtml);
writeFile(path.join(admDir, 'style.css'), admCss);
writeFile(path.join(admDir, 'audio.js'), admAudio);
writeFile(path.join(admDir, 'game.js'), admGame);

// ----------------------------------------------------------------------------
// GAME 40: SPACE STATION OUTPOST: RESOURCE BALANCER
// ----------------------------------------------------------------------------
console.log('Building Game 40: space-station-outpost...');
const ssoDir = path.join(gamesDir, 'space-station-outpost');

const ssoHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Space Station Outpost: Resource Balancer - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Solar Sector</div><div id="themeVal" class="hud-val">1: Earth Orbital Alpha</div></div>
      <div class="hud-box"><div class="hud-lbl">Credits</div><div id="creditsVal" class="hud-val" style="color:#ffd600;">100 CR</div></div>
      <div class="hud-box"><div class="hud-lbl">Fuel Reserve</div><div id="fuelVal" class="hud-val" style="color:#00ffcc;">100%</div></div>
      <div class="hud-box"><div class="hud-lbl">Trade Volume</div><div id="quotaVal" class="hud-val" style="color:#39ff14;">0 / 500 CR</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="trade-bar">
      <button class="trade-btn active" data-cargo="ore">ORE CONVOY (15 CR)</button>
      <button class="trade-btn" data-cargo="fuel">HYDROGEN TANKER (25 CR)</button>
      <button class="trade-btn" data-cargo="tech">QUANTUM TECH (40 CR)</button>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">OUTPOSTS (1-45)</button>
      <button id="restartBtn" class="action-btn">RELOAD ROUTE</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">SPACE STATION OUTPOST</h1>
        <p id="overlayDesc">Optimize commercial logistics across 45 deep-space solar sectors. Dispatch cargo freighters between mining moons, refineries, and orbital hubs to reach commercial revenue quotas.</p>
        <div class="level-select" id="levelSelectGrid"></div>
        <button id="startBtn" class="play-btn">INITIATE TRADE NETWORK</button>
        <div class="controls-hint">Controls: Select cargo type, click from source station to target outpost to dispatch freighter convoys.</div>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const ssoCss = `* {
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
.trade-bar {
  position: absolute;
  left: 14px;
  bottom: 14px;
  display: flex;
  gap: 8px;
  z-index: 10;
}
.trade-btn {
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
.trade-btn.active, .trade-btn:hover {
  background: rgba(0, 240, 255, 0.25);
  border-color: #00f0ff;
  color: #00f0ff;
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
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

const ssoAudio = `/**
 * Space Station Outpost Web Audio API Engine
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
  playLaunch() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(600, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch(e) {}
  }
  playCash() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(700, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(1050, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
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

const ssoGame = `/**
 * Space Station Outpost: Resource Balancer - 45 Thematic Levels
 */
(function() {
  'use strict';

  ${STRATEGY_THEMES_CODE}

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const creditsVal = document.getElementById('creditsVal');
  const fuelVal = document.getElementById('fuelVal');
  const quotaVal = document.getElementById('quotaVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const tradeBtns = document.querySelectorAll('.trade-btn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedCargo = 'ore';
  let credits = 100;
  let revenue = 0;
  let targetRevenue = 500;
  let fuel = 100;
  let selectedStation = null;
  let invulnerable = 0; // human speed fair defense

  let stations = [];
  let freighters = [];
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
    targetRevenue = 400 + lvl * 25;
    credits = 120 + lvl * 10;
    revenue = 0;
    fuel = 100;
    selectedStation = null;
    freighters = [];
    particles = [];
    invulnerable = 60;

    const cx = width / 2;
    const cy = height / 2;
    const rad = Math.min(width, height) * 0.35;

    stations = [
      { id: 1, name: 'Mining Hub', type: 'ore', x: cx - rad * 0.8, y: cy - rad * 0.4, r: 26, color: '#ff9100' },
      { id: 2, name: 'Hydrogen Siphon', type: 'fuel', x: cx + rad * 0.8, y: cy - rad * 0.4, r: 26, color: '#00ffcc' },
      { id: 3, name: 'Tech Foundry', type: 'tech', x: cx - rad * 0.5, y: cy + rad * 0.6, r: 26, color: '#e040fb' },
      { id: 4, name: 'Orbital Citadel', type: 'hub', x: cx + rad * 0.5, y: cy + rad * 0.6, r: 32, color: theme.primary }
    ];

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    creditsVal.textContent = credits + ' CR';
    fuelVal.textContent = '100%';
    quotaVal.textContent = '0 / ' + targetRevenue + ' CR';
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

  function dispatchFreighter(fromSt, toSt) {
    if (fromSt === toSt || !isPlaying) return;

    const cost = selectedCargo === 'ore' ? 15 : (selectedCargo === 'fuel' ? 25 : 40);
    if (credits < cost) return;

    credits -= cost;
    fuel = Math.max(0, fuel - 5);
    creditsVal.textContent = credits + ' CR';
    fuelVal.textContent = Math.round(fuel) + '%';
    if (window.soundEngine) window.soundEngine.playLaunch();

    const payout = cost * 2.2;
    freighters.push({
      x: fromSt.x,
      y: fromSt.y,
      target: toSt,
      speed: 2.2,
      payout,
      cargo: selectedCargo,
      color: selectedCargo === 'ore' ? '#ff9100' : (selectedCargo === 'fuel' ? '#00ffcc' : '#e040fb')
    });
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

    // Orbital Shipping Lanes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    for (let i = 0; i < stations.length; i++) {
      for (let j = i + 1; j < stations.length; j++) {
        ctx.beginPath();
        ctx.moveTo(stations[i].x, stations[i].y);
        ctx.lineTo(stations[j].x, stations[j].y);
        ctx.stroke();
      }
    }
    ctx.setLineDash([]);

    // Draw Stations
    stations.forEach(st => {
      if (st === selectedStation) {
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r + 6, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = st.color;
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Station Label
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(st.name, st.x, st.y + st.r + 14);
    });

    if (!isPlaying) return;

    // Passive fuel recovery
    if (fuel < 100) {
      fuel = Math.min(100, fuel + 0.03);
      fuelVal.textContent = Math.round(fuel) + '%';
    }

    // Update Freighters
    for (let i = freighters.length - 1; i >= 0; i--) {
      const f = freighters[i];
      const dx = f.target.x - f.x;
      const dy = f.target.y - f.y;
      const dist = Math.hypot(dx, dy);

      if (dist < f.target.r) {
        // Arrived at destination!
        credits += Math.round(f.payout);
        revenue += Math.round(f.payout);
        creditsVal.textContent = credits + ' CR';
        quotaVal.textContent = revenue + ' / ' + targetRevenue + ' CR';
        if (window.soundEngine) window.soundEngine.playCash();
        createExplosion(f.x, f.y, f.color, 12);
        freighters.splice(i, 1);

        if (revenue >= targetRevenue) {
          isPlaying = false;
          if (window.soundEngine) window.soundEngine.playWin();
          nextBtn.style.display = 'inline-block';
          overlayTitle.textContent = 'COMMERCE QUOTA ACHIEVED!';
          overlayDesc.textContent = 'Commercial hub ' + currentLevel + ' (' + theme.name + ') achieved target volume. Prepare warp route.';
          startBtn.textContent = 'OPEN NEXT SOLAR SECTOR';
          overlay.style.display = 'flex';
        }
        continue;
      }

      f.x += (dx / dist) * f.speed;
      f.y += (dy / dist) * f.speed;

      ctx.fillStyle = f.color;
      ctx.beginPath();
      ctx.arc(f.x, f.y, 4, 0, Math.PI * 2);
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

  // Input Handling
  canvas.addEventListener('click', e => {
    if (!isPlaying) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const clicked = stations.find(s => Math.hypot(s.x - mx, s.y - my) <= s.r);

    if (clicked) {
      if (!selectedStation) {
        selectedStation = clicked;
      } else {
        dispatchFreighter(selectedStation, clicked);
        selectedStation = null;
      }
    } else {
      selectedStation = null;
    }
  });

  tradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tradeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCargo = btn.dataset.cargo;
    });
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (revenue >= targetRevenue) {
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
    overlayTitle.textContent = 'SOLAR SECTOR REGISTER (1-45)';
    overlayDesc.textContent = 'Select target trade corridor:';
    startBtn.textContent = 'RESUME COMMERCE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();`;

writeFile(path.join(ssoDir, 'index.html'), ssoHtml);
writeFile(path.join(ssoDir, 'style.css'), ssoCss);
writeFile(path.join(ssoDir, 'audio.js'), ssoAudio);
writeFile(path.join(ssoDir, 'game.js'), ssoGame);

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

copyIcon('orbital-defense', 'biodome-terraform');
copyIcon('orbital-defense', 'drone-swarm-commander');
copyIcon('orbital-defense', 'ai-defense-matrix');
copyIcon('orbital-defense', 'space-station-outpost');

console.log('Part 3 Complete: biodome-terraform, drone-swarm-commander, ai-defense-matrix, space-station-outpost.');
