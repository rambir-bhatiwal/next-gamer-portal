/**
 * Next Games/Game — Rhythm Category Part 1:
 * - beat-highway (Game 81)
 * - neon-drum-machine (Game 82)
 * - frequency-slicer (Game 83)
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
    const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#0c0724" stroke="#00f0ff" stroke-width="4"/><polygon points="50,20 80,75 20,75" fill="#ff007f"/></svg>`;
    writeFile(iconPath, fallback);
  }
}

const RHYTHM_THEMES_CODE = `const THEMES = [
  { id: 1, name: "Sunset Synthwave Highway", bg: "#14052b", road: "#220a44", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 2, name: "Neon Tokyo Express", bg: "#060919", road: "#0d1533", primary: "#00f0ff", secondary: "#39ff14", accent: "#ff007f", text: "#e0f7fa" },
  { id: 3, name: "Cyberpunk Underground Sub", bg: "#0d0417", road: "#190a2e", primary: "#7c4dff", secondary: "#ff0055", accent: "#00e5ff", text: "#ede7f6" },
  { id: 4, name: "Cosmic Superhighway", bg: "#03020c", road: "#0a0724", primary: "#651fff", secondary: "#00e5ff", accent: "#ffd600", text: "#e8eaf6" },
  { id: 5, name: "Glacial Aurora Freeway", bg: "#02131c", road: "#052638", primary: "#80d8ff", secondary: "#00e676", accent: "#ff4081", text: "#e1f5fe" },
  { id: 6, name: "Obsidian Bass Chamber", bg: "#070709", road: "#13141a", primary: "#b0bec5", secondary: "#00f0ff", accent: "#39ff14", text: "#eceff1" },
  { id: 7, name: "Solar Flare Speedway", bg: "#190700", road: "#361002", primary: "#ff3d00", secondary: "#ffab00", accent: "#ffff00", text: "#fbe9e7" },
  { id: 8, name: "Toxic Electro Core", bg: "#0a1702", road: "#162e05", primary: "#76ff03", secondary: "#00e5ff", accent: "#ffd600", text: "#f1f8e9" },
  { id: 9, name: "Cobalt Pulse Matrix", bg: "#020a1c", road: "#06183d", primary: "#2979ff", secondary: "#00f0ff", accent: "#ff1744", text: "#e3f2fd" },
  { id: 10, name: "Amethyst Trance Portal", bg: "#12021c", road: "#26063b", primary: "#d500f9", secondary: "#aa00ff", accent: "#00e5ff", text: "#f3e5f5" },
  { id: 11, name: "Hyperdrive Laser Grid", bg: "#030817", road: "#091738", primary: "#00b0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e1f5fe" },
  { id: 12, name: "Molten Dubstep Chasm", bg: "#170401", road: "#360e03", primary: "#ff5722", secondary: "#ff1744", accent: "#ffd600", text: "#fbe9e7" },
  { id: 13, name: "Prism Laser Symphony", bg: "#0a0417", road: "#1c0d38", primary: "#ea80fc", secondary: "#00f0ff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 14, name: "Titanium Club Mainframe", bg: "#08090d", road: "#151821", primary: "#cfd8dc", secondary: "#00e676", accent: "#00b0ff", text: "#ffffff" },
  { id: 15, name: "Electric Lavender Boulevard", bg: "#0a0317", road: "#1a0b36", primary: "#b388ff", secondary: "#ff80ab", accent: "#00f0ff", text: "#ede7f6" },
  { id: 16, name: "Emerald Glitch Runway", bg: "#011409", road: "#042914", primary: "#00e676", secondary: "#69f0ae", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Helios Gold Discoteca", bg: "#171201", road: "#332804", primary: "#ffd700", secondary: "#ff9100", accent: "#ff007f", text: "#fffde7" },
  { id: 18, name: "Aquamarine Vaporwave Bay", bg: "#011214", road: "#05262c", primary: "#18ffff", secondary: "#7c4dff", accent: "#ff007f", text: "#e0f7fa" },
  { id: 19, name: "Void Singularity Tunnel", bg: "#010108", road: "#06061c", primary: "#651fff", secondary: "#3d5afe", accent: "#00f0ff", text: "#ede7f6" },
  { id: 20, name: "Crimson Industrial Foundry", bg: "#170305", road: "#33080c", primary: "#ff1744", secondary: "#ff5252", accent: "#ffd600", text: "#ffebee" },
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
  { id: 38, name: "Sunburst Electro Disco", bg: "#190b01", road: "#381a04", primary: "#ff6d00", secondary: "#ffd600", accent: "#00e5ff", text: "#fff3e0" },
  { id: 39, name: "Vortex Synthesizer Well", bg: "#030514", road: "#090d2e", primary: "#3d5afe", secondary: "#ff007f", accent: "#39ff14", text: "#e8eaf6" },
  { id: 40, name: "Future Funk Skyway", bg: "#140417", road: "#2b0a33", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 41, name: "Bioluminescent Lagoon", bg: "#01140e", road: "#042b20", primary: "#00bfa5", secondary: "#64ffda", accent: "#ff4081", text: "#e0f2f1" },
  { id: 42, name: "Orbital Satellite Relay", bg: "#030919", road: "#091738", primary: "#00b0ff", secondary: "#7c4dff", accent: "#ffd600", text: "#e1f5fe" },
  { id: 43, name: "Tokyo Drift Eurobeat", bg: "#170308", road: "#330913", primary: "#ff1744", secondary: "#ff9100", accent: "#00f0ff", text: "#ffebee" },
  { id: 44, name: "Cyber Gothic Cathedral", bg: "#080414", road: "#130a2e", primary: "#651fff", secondary: "#ff0055", accent: "#ffd600", text: "#ede7f6" },
  { id: 45, name: "Infinite Resonance Apex", bg: "#04020a", road: "#0a061a", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#ffffff" }
];`;

// ============================================================================
// GAME 81: BEAT HIGHWAY (4-Lane Synthwave Tap)
// ============================================================================
console.log('Building Game 81: beat-highway...');
const g81Dir = path.join(gamesDir, 'beat-highway');

const g81Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Beat Highway: 4-Lane Synthwave Tap - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">STAGE</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">THEME</span><span id="themeDisplay" class="value">Sunset Synthwave</span></div>
      <div class="hud-item"><span class="label">SCORE</span><span id="scoreDisplay" class="value">0</span></div>
      <div class="hud-item"><span class="label">STREAK</span><span id="streakDisplay" class="value">0x</span></div>
      <div class="hud-item"><span class="label">SHIELDS</span><span id="shieldDisplay" class="value">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-level-select">STAGES</button>
    </header>

    <main class="canvas-wrapper">
      <canvas id="highwayCanvas" width="480" height="640"></canvas>
      <div id="hitFeedback" class="hit-feedback"></div>
    </main>

    <footer class="hud-footer">
      <div class="key-hints">
        <button class="key-btn" data-lane="0">D</button>
        <button class="key-btn" data-lane="1">F</button>
        <button class="key-btn" data-lane="2">J</button>
        <button class="key-btn" data-lane="3">K</button>
      </div>
      <div class="controls-hint">Tap keys [D] [F] [J] [K] or click lane buttons on beat!</div>
    </footer>
  </div>

  <!-- Level Select Modal -->
  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT SYNTHWAVE TRACK (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g81Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #060411;
  color: #fff;
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.game-container {
  width: 100vw;
  max-width: 540px;
  height: 100vh;
  max-height: 900px;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at 50% 20%, #150a2e 0%, #060411 90%);
  border: 1px solid rgba(0, 240, 255, 0.2);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: rgba(10, 5, 25, 0.85);
  border-bottom: 1px solid rgba(255, 0, 127, 0.3);
  backdrop-filter: blur(8px);
  z-index: 10;
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #00f0ff;
}
.hud-item .value {
  font-size: 13px;
  font-weight: 800;
  color: #fff;
}
.btn-level-select {
  background: linear-gradient(135deg, #ff007f, #7c4dff);
  border: none;
  color: #fff;
  font-weight: 800;
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 1px;
  transition: transform 0.1s, box-shadow 0.2s;
}
.btn-level-select:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px #ff007f;
}
.canvas-wrapper {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
#highwayCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.hit-feedback {
  position: absolute;
  bottom: 140px;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 0 0 10px #000;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease-out, transform 0.15s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}
.hit-feedback.show {
  opacity: 1;
  transform: scale(1.2);
}
.hud-footer {
  padding: 10px 14px 14px;
  background: rgba(10, 5, 25, 0.9);
  border-top: 1px solid rgba(0, 240, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
}
.key-hints {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.key-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid #00f0ff;
  color: #fff;
  font-size: 18px;
  font-weight: 900;
  padding: 12px 0;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
  transition: all 0.08s;
}
.key-btn:active, .key-btn.active {
  background: #00f0ff;
  color: #000;
  transform: scale(0.95);
  box-shadow: 0 0 20px #00f0ff;
}
.controls-hint {
  text-align: center;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.5px;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 2, 12, 0.92);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.2s;
}
.modal-overlay.hidden {
  display: none;
  opacity: 0;
}
.modal-content {
  width: 90%;
  max-width: 440px;
  max-height: 85%;
  background: #0e0722;
  border: 1px solid #00f0ff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
}
.modal-content h2 {
  font-size: 15px;
  font-weight: 900;
  color: #00f0ff;
  letter-spacing: 1px;
  text-align: center;
}
.level-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  overflow-y: auto;
  max-height: 380px;
  padding-right: 4px;
}
.lvl-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 0, 127, 0.4);
  color: #fff;
  padding: 10px 0;
  font-size: 13px;
  font-weight: 800;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
}
.lvl-btn:hover {
  background: #ff007f;
  box-shadow: 0 0 10px #ff007f;
  transform: translateY(-2px);
}
.lvl-btn.active {
  background: #00f0ff;
  color: #000;
  border-color: #fff;
}
.btn-close {
  background: #ff007f;
  border: none;
  color: #fff;
  font-weight: 800;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 1px;
}`;

const g81Audio = `class AudioManager {
  constructor() {
    this.ctx = null;
    this.tempo = 125;
    this.isPlaying = false;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playTone(freq, type = 'sine', dur = 0.15, gainVal = 0.2) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + dur);
    } catch(e) {}
  }
  playNoteHit(accuracy = 'perfect', lane = 0) {
    this.init();
    const lanePitches = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    const baseFreq = lanePitches[lane % 4];
    if (accuracy === 'perfect') {
      this.playTone(baseFreq * 1.5, 'triangle', 0.18, 0.25);
      this.playTone(baseFreq * 2, 'sine', 0.12, 0.15);
    } else if (accuracy === 'great') {
      this.playTone(baseFreq, 'triangle', 0.15, 0.2);
    } else if (accuracy === 'good') {
      this.playTone(baseFreq * 0.8, 'sawtooth', 0.12, 0.15);
    }
  }
  playMiss() {
    this.init();
    this.playTone(110, 'sawtooth', 0.2, 0.25);
    this.playTone(82.4, 'square', 0.25, 0.15);
  }
  playBassNote(freq) {
    this.init();
    this.playTone(freq, 'sawtooth', 0.22, 0.12);
  }
  playStageWin() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((n, i) => {
      setTimeout(() => this.playTone(n, 'triangle', 0.3, 0.3), i * 100);
    });
  }
}`;

const g81Game = `/**
 * Beat Highway — Game Engine (45 Levels & Multi-Shield Pacing)
 */
${RHYTHM_THEMES_CODE}

const audio = new AudioManager();
const canvas = document.getElementById('highwayCanvas');
const ctx = canvas.getContext('2d');
const hitFeedback = document.getElementById('hitFeedback');

let currentLevel = 1;
let score = 0;
let streak = 0;
let shields = 3;
let invulnerable = true;
let isGameOver = false;
let notes = [];
let noteSpawnTimer = 0;
let notesCleared = 0;
let targetNotes = 25;
let bpm = 120;
let speed = 4;
let beatIndex = 0;

const laneXFactors = [0.2, 0.4, 0.6, 0.8];
const laneColors = ['#00f0ff', '#ff007f', '#ffd600', '#39ff14'];
const laneKeys = ['d', 'f', 'j', 'k'];

function initLevel(lvl) {
  currentLevel = lvl;
  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/45\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  
  shields = 3;
  invulnerable = false;
  score = 0;
  streak = 0;
  notesCleared = 0;
  targetNotes = 20 + lvl * 2;
  bpm = 110 + (lvl * 1.5);
  speed = 3.5 + (lvl * 0.15);
  notes = [];
  noteSpawnTimer = 0;
  beatIndex = 0;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('streakDisplay').textContent = \`\${streak}x\`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function spawnNote() {
  const lane = Math.floor(Math.random() * 4);
  notes.push({
    lane,
    y: 0,
    hit: false,
    color: laneColors[lane]
  });
  // Procedural bass accompaniment on note spawn
  const bassPitches = [65.4, 82.4, 98.0, 110.0];
  audio.playBassNote(bassPitches[beatIndex % bassPitches.length]);
  beatIndex++;
}

function triggerHit(lane) {
  audio.init();
  const hitLineY = canvas.height * 0.85;
  const hitWindow = 45; // pixel tolerance

  // Find the lowest unhit note in this lane
  let candidate = null;
  let minDist = 999;
  for (let n of notes) {
    if (n.lane === lane && !n.hit) {
      const dist = Math.abs(n.y - hitLineY);
      if (dist < minDist) {
        minDist = dist;
        candidate = n;
      }
    }
  }

  if (candidate && minDist <= hitWindow) {
    candidate.hit = true;
    streak++;
    notesCleared++;

    let feedbackText = 'GOOD';
    let feedbackColor = '#ffd600';
    let pts = 100;

    if (minDist <= 15) {
      feedbackText = 'PERFECT!';
      feedbackColor = '#39ff14';
      pts = 300;
      audio.playNoteHit('perfect', lane);
    } else if (minDist <= 30) {
      feedbackText = 'GREAT!';
      feedbackColor = '#00f0ff';
      pts = 200;
      audio.playNoteHit('great', lane);
    } else {
      audio.playNoteHit('good', lane);
    }

    score += pts * Math.min(8, Math.floor(streak / 5) + 1);
    showFeedback(feedbackText, feedbackColor);
    updateHud();

    if (notesCleared >= targetNotes) {
      audio.playStageWin();
      showFeedback('STAGE CLEARED!', '#39ff14');
      setTimeout(() => {
        if (currentLevel < 45) {
          initLevel(currentLevel + 1);
        } else {
          showFeedback('ALL 45 STAGES BEATEN!', '#ffd600');
        }
      }, 1200);
    }
  } else {
    // Miss penalty with shield buffer
    streak = 0;
    shields--;
    audio.playMiss();
    showFeedback('MISS', '#ff0055');
    updateHud();

    if (shields <= 0) {
      showFeedback('SHIELDS DEPLETED - RETRYING', '#ff0055');
      setTimeout(() => initLevel(currentLevel), 1200);
    }
  }
}

function showFeedback(text, color) {
  hitFeedback.textContent = text;
  hitFeedback.style.color = color;
  hitFeedback.classList.remove('show');
  void hitFeedback.offsetWidth; // trigger reflow
  hitFeedback.classList.add('show');
  setTimeout(() => hitFeedback.classList.remove('show'), 600);
}

function update(dt) {
  noteSpawnTimer += dt;
  const interval = 60 / bpm;
  if (noteSpawnTimer >= interval && notesCleared + notes.length < targetNotes + 10) {
    noteSpawnTimer = 0;
    spawnNote();
  }

  const hitLineY = canvas.height * 0.85;
  for (let i = notes.length - 1; i >= 0; i--) {
    const n = notes[i];
    n.y += speed * (dt * 60);

    // Auto-miss if passed hitline
    if (!n.hit && n.y > hitLineY + 50) {
      n.hit = true;
      streak = 0;
      shields--;
      audio.playMiss();
      showFeedback('MISS', '#ff0055');
      updateHud();
      if (shields <= 0) {
        showFeedback('SHIELDS DEPLETED - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }

    if (n.y > canvas.height + 40) {
      notes.splice(i, 1);
    }
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Perspective 4-Lane Highway
  const vpX = canvas.width / 2;
  const vpY = 60;
  const bottomW = canvas.width * 0.9;
  const topW = canvas.width * 0.3;

  ctx.fillStyle = theme.road;
  ctx.beginPath();
  ctx.moveTo(vpX - topW / 2, vpY);
  ctx.lineTo(vpX + topW / 2, vpY);
  ctx.lineTo(vpX + bottomW / 2, canvas.height);
  ctx.lineTo(vpX - bottomW / 2, canvas.height);
  ctx.closePath();
  ctx.fill();

  // Lane Dividers
  for (let i = 0; i <= 4; i++) {
    const topX = (vpX - topW / 2) + (topW / 4) * i;
    const botX = (vpX - bottomW / 2) + (bottomW / 4) * i;
    ctx.strokeStyle = i === 0 || i === 4 ? theme.primary : 'rgba(255,255,255,0.15)';
    ctx.lineWidth = i === 0 || i === 4 ? 3 : 1.5;
    ctx.beginPath();
    ctx.moveTo(topX, vpY);
    ctx.lineTo(botX, canvas.height);
    ctx.stroke();
  }

  // Hit Zone Line
  const hitLineY = canvas.height * 0.85;
  ctx.strokeStyle = '#39ff14';
  ctx.lineWidth = 4;
  ctx.shadowColor = '#39ff14';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo((vpX - bottomW / 2), hitLineY);
  ctx.lineTo((vpX + bottomW / 2), hitLineY);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Hit Target Receptors
  for (let l = 0; l < 4; l++) {
    const botX1 = (vpX - bottomW / 2) + (bottomW / 4) * l;
    const botX2 = (vpX - bottomW / 2) + (bottomW / 4) * (l + 1);
    const targetX = (botX1 + botX2) / 2;
    ctx.fillStyle = laneColors[l];
    ctx.beginPath();
    ctx.arc(targetX, hitLineY, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Render Descending Notes
  for (let n of notes) {
    if (n.hit) continue;
    const progress = Math.max(0, Math.min(1, (n.y - vpY) / (canvas.height - vpY)));
    const curTopW = topW + (bottomW - topW) * progress;
    const curBotLeft = vpX - curTopW / 2;
    const laneWidth = curTopW / 4;
    const noteX = curBotLeft + laneWidth * (n.lane + 0.5);
    const noteRadius = 8 + progress * 10;

    ctx.fillStyle = n.color;
    ctx.shadowColor = n.color;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(noteX, n.y, noteRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(noteX, n.y, noteRadius * 0.4, 0, Math.PI * 2);
    ctx.fill();
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

// Input Handlers
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  const laneIndex = laneKeys.indexOf(key);
  if (laneIndex !== -1) {
    triggerHit(laneIndex);
    const btn = document.querySelector(\`.key-btn[data-lane="\${laneIndex}"]\`);
    if (btn) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 100);
    }
  }
});

document.querySelectorAll('.key-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lane = parseInt(btn.getAttribute('data-lane'), 10);
    triggerHit(lane);
  });
});

// Modal Setup
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => {
  modal.classList.remove('hidden');
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  modal.classList.add('hidden');
});

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

// Start
initLevel(1);
requestAnimationFrame(gameLoop);
`;

writeFile(path.join(g81Dir, 'index.html'), g81Html);
writeFile(path.join(g81Dir, 'style.css'), g81Css);
writeFile(path.join(g81Dir, 'audio.js'), g81Audio);
writeFile(path.join(g81Dir, 'game.js'), g81Game);
copyThumbnailToIcon('beat-highway');
console.log('Game 81 (beat-highway) built successfully.');

// ============================================================================
// GAME 82: NEON DRUM MACHINE (Interactive Drum Pad & Sequencer)
// ============================================================================
console.log('Building Game 82: neon-drum-machine...');
const g82Dir = path.join(gamesDir, 'neon-drum-machine');

const g82Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Drum Machine: Precision Rhythm Hero - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="drum-app">
    <header class="hud-bar">
      <div class="hud-stat"><span class="lbl">STAGE</span><span id="levelDisplay" class="val">1/40</span></div>
      <div class="hud-stat"><span class="lbl">KIT THEME</span><span id="themeDisplay" class="val">808 Orange</span></div>
      <div class="hud-stat"><span class="lbl">SCORE</span><span id="scoreDisplay" class="val">0</span></div>
      <div class="hud-stat"><span class="lbl">SHIELDS</span><span id="shieldDisplay" class="val">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <div class="screen-section">
      <canvas id="scopeCanvas" width="460" height="90"></canvas>
      <div id="statusPrompt" class="status-prompt">FOLLOW THE RHYTHM SEQUENCE!</div>
    </div>

    <main class="pad-grid">
      <!-- 4x4 Pads (16 Drum Sounds) -->
      <button class="pad-btn" data-pad="0"><span class="pad-lbl">KICK</span><span class="pad-key">1</span></button>
      <button class="pad-btn" data-pad="1"><span class="pad-lbl">SNARE</span><span class="pad-key">2</span></button>
      <button class="pad-btn" data-pad="2"><span class="pad-lbl">CLAP</span><span class="pad-key">3</span></button>
      <button class="pad-btn" data-pad="3"><span class="pad-lbl">CH</span><span class="pad-key">4</span></button>

      <button class="pad-btn" data-pad="4"><span class="pad-lbl">OH</span><span class="pad-key">Q</span></button>
      <button class="pad-btn" data-pad="5"><span class="pad-lbl">HI TOM</span><span class="pad-key">W</span></button>
      <button class="pad-btn" data-pad="6"><span class="pad-lbl">MID TOM</span><span class="pad-key">E</span></button>
      <button class="pad-btn" data-pad="7"><span class="pad-lbl">LO TOM</span><span class="pad-key">R</span></button>

      <button class="pad-btn" data-pad="8"><span class="pad-lbl">RIM</span><span class="pad-key">A</span></button>
      <button class="pad-btn" data-pad="9"><span class="pad-lbl">CYBER ZAP</span><span class="pad-key">S</span></button>
      <button class="pad-btn" data-pad="10"><span class="pad-lbl">LASER</span><span class="pad-key">D</span></button>
      <button class="pad-btn" data-pad="11"><span class="pad-lbl">SUB DROP</span><span class="pad-key">F</span></button>

      <button class="pad-btn" data-pad="12"><span class="pad-lbl">SHAKER</span><span class="pad-key">Z</span></button>
      <button class="pad-btn" data-pad="13"><span class="pad-lbl">COWBELL</span><span class="pad-key">X</span></button>
      <button class="pad-btn" data-pad="14"><span class="pad-lbl">CYMBAL</span><span class="pad-key">C</span></button>
      <button class="pad-btn" data-pad="15"><span class="pad-lbl">BEEP</span><span class="pad-key">V</span></button>
    </main>

    <footer class="hud-controls">
      <button id="playDemoBtn" class="ctl-btn demo-btn">PLAY PATTERN (SPACE)</button>
      <div class="hint-text">Trigger pads via click or keyboard shortcuts [1-4, Q-R, A-F, Z-V]</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-box">
      <h2>SELECT DRUM MACHINE STAGE (1–40)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g82Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #080a12;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.drum-app {
  width: 100vw;
  max-width: 500px;
  height: 100vh;
  max-height: 860px;
  background: #111422;
  border: 2px solid #ff8800;
  border-radius: 14px;
  box-shadow: 0 0 35px rgba(255, 136, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.hud-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #090c17;
  border-bottom: 1px solid rgba(255, 136, 0, 0.3);
}
.hud-stat {
  display: flex;
  flex-direction: column;
}
.hud-stat .lbl {
  font-size: 8px;
  color: #ff8800;
  font-weight: 800;
  letter-spacing: 1px;
}
.hud-stat .val {
  font-size: 13px;
  font-weight: 900;
}
.btn-stages {
  background: #ff8800;
  border: none;
  color: #000;
  font-weight: 900;
  font-size: 11px;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.screen-section {
  padding: 10px 14px;
  background: #06080e;
  border-bottom: 1px solid rgba(0, 240, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
#scopeCanvas {
  width: 100%;
  height: 80px;
  background: #030408;
  border: 1px solid #00f0ff;
  border-radius: 6px;
}
.status-prompt {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #39ff14;
  text-shadow: 0 0 8px rgba(57, 255, 20, 0.6);
}
.pad-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;
  padding: 14px;
}
.pad-btn {
  background: #1b2038;
  border: 2px solid #ff8800;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  box-shadow: 0 4px 0 #0c0e1a;
  transition: all 0.08s;
}
.pad-btn:active, .pad-btn.active {
  background: #ff8800;
  color: #000;
  transform: translateY(3px);
  box-shadow: 0 1px 0 #0c0e1a, 0 0 20px #ff8800;
}
.pad-lbl {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.5px;
}
.pad-key {
  font-size: 9px;
  opacity: 0.6;
  font-family: monospace;
}
.hud-controls {
  padding: 10px 14px 14px;
  background: #090c17;
  border-top: 1px solid rgba(255, 136, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ctl-btn {
  background: linear-gradient(135deg, #00f0ff, #7c4dff);
  border: none;
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1px;
}
.ctl-btn:hover {
  filter: brightness(1.15);
}
.hint-text {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(4, 3, 10, 0.94);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-box {
  width: 90%;
  max-width: 420px;
  background: #111422;
  border: 2px solid #ff8800;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.modal-box h2 {
  font-size: 14px;
  font-weight: 900;
  color: #ff8800;
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
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid #ff8800;
  color: #fff;
  padding: 10px 0;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 800;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ff8800;
  color: #000;
}
.btn-close {
  background: #39ff14;
  border: none;
  color: #000;
  font-weight: 900;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}`;

const g82Audio = `class DrumAudio {
  constructor() {
    this.ctx = null;
    this.analyser = null;
    this.dataArray = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playPad(padIndex) {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    switch(padIndex) {
      case 0: // Kick
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.35);
        gain.gain.setValueAtTime(1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(this.analyser);
        osc.start(now);
        osc.stop(now + 0.35);
        break;
      case 1: // Snare
        this.playNoise(0.2, 800);
        this.playTone(180, 0.1, 'triangle');
        break;
      case 2: // Clap
        for (let i = 0; i < 3; i++) {
          setTimeout(() => this.playNoise(0.08, 1200), i * 20);
        }
        break;
      case 3: // Closed Hat
        this.playNoise(0.05, 5000);
        break;
      case 4: // Open Hat
        this.playNoise(0.35, 4500);
        break;
      case 5: // Hi Tom
        this.playTom(300);
        break;
      case 6: // Mid Tom
        this.playTom(220);
        break;
      case 7: // Lo Tom
        this.playTom(150);
        break;
      case 8: // Rimshot
        this.playTone(450, 0.04, 'square');
        break;
      case 9: // Cyber Zap
        const zap = this.ctx.createOscillator();
        const zapGain = this.ctx.createGain();
        zap.frequency.setValueAtTime(1200, now);
        zap.frequency.exponentialRampToValueAtTime(80, now + 0.2);
        zapGain.gain.setValueAtTime(0.4, now);
        zapGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        zap.connect(zapGain);
        zapGain.connect(this.analyser);
        zap.start(now);
        zap.stop(now + 0.2);
        break;
      case 10: // Laser
        this.playTone(880, 0.15, 'sawtooth');
        break;
      case 11: // Sub Drop
        const sub = this.ctx.createOscillator();
        const subG = this.ctx.createGain();
        sub.frequency.setValueAtTime(90, now);
        sub.frequency.exponentialRampToValueAtTime(30, now + 0.6);
        subG.gain.setValueAtTime(0.8, now);
        subG.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
        sub.connect(subG);
        subG.connect(this.analyser);
        sub.start(now);
        sub.stop(now + 0.6);
        break;
      case 12: // Shaker
        this.playNoise(0.08, 3000);
        break;
      case 13: // Cowbell
        this.playTone(560, 0.1, 'sine');
        this.playTone(845, 0.1, 'sine');
        break;
      case 14: // Cymbal
        this.playNoise(0.5, 6000);
        break;
      case 15: // Beep
        this.playTone(987.77, 0.1, 'sine');
        break;
    }
  }
  playNoise(dur, filterFreq) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * dur;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = filterFreq;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + dur);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.analyser);
    noise.start();
  }
  playTone(freq, dur, type = 'sine') {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(this.analyser);
    osc.start();
    osc.stop(this.ctx.currentTime + dur);
  }
  playTom(freq) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.6, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.analyser);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
}`;

const g82Game = `/**
 * Neon Drum Machine — Game Engine (40 Stages, Pattern Replication, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new DrumAudio();
const scopeCanvas = document.getElementById('scopeCanvas');
const scopeCtx = scopeCanvas.getContext('2d');
const statusPrompt = document.getElementById('statusPrompt');

let currentLevel = 1;
let score = 0;
let shields = 3;
let invulnerable = true;
let targetPattern = [];
let playerStep = 0;
let isPlayingPattern = false;

const padKeyMap = {
  '1': 0, '2': 1, '3': 2, '4': 3,
  'q': 4, 'w': 5, 'e': 6, 'r': 7,
  'a': 8, 's': 9, 'd': 10, 'f': 11,
  'z': 12, 'x': 13, 'c': 14, 'v': 15
};

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  playerStep = 0;
  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = \`\${lvl}/40\`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();

  // Generate sequence pattern for this stage
  const patternLength = 4 + Math.floor(lvl * 0.3);
  targetPattern = [];
  for (let i = 0; i < patternLength; i++) {
    // Pick from pool of pads
    const pad = Math.floor(Math.random() * Math.min(16, 4 + Math.floor(lvl * 0.3)));
    targetPattern.push(pad);
  }

  statusPrompt.textContent = 'PRESS "PLAY PATTERN" OR SPACE TO LISTEN';
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function playPatternDemo() {
  if (isPlayingPattern) return;
  isPlayingPattern = true;
  playerStep = 0;
  statusPrompt.textContent = 'LISTENING TO PATTERN...';

  targetPattern.forEach((pad, idx) => {
    setTimeout(() => {
      triggerPad(pad, false);
      if (idx === targetPattern.length - 1) {
        isPlayingPattern = false;
        statusPrompt.textContent = 'YOUR TURN: REPEAT THE BEAT!';
      }
    }, idx * 450);
  });
}

function triggerPad(padIndex, isPlayer = true) {
  audio.playPad(padIndex);

  // Flash pad UI
  const padBtn = document.querySelector(\`.pad-btn[data-pad="\${padIndex}"]\`);
  if (padBtn) {
    padBtn.classList.add('active');
    setTimeout(() => padBtn.classList.remove('active'), 150);
  }

  if (isPlayer && !isPlayingPattern && targetPattern.length > 0) {
    if (padIndex === targetPattern[playerStep]) {
      playerStep++;
      score += 100 * currentLevel;
      updateHud();
      statusPrompt.textContent = \`HIT! \${playerStep}/\${targetPattern.length}\`;

      if (playerStep >= targetPattern.length) {
        statusPrompt.textContent = 'PERFECT BEAT! STAGE CLEARED!';
        score += 500;
        updateHud();
        setTimeout(() => {
          if (currentLevel < 40) initLevel(currentLevel + 1);
          else statusPrompt.textContent = 'ALL 40 DRUM STAGES MASTERED!';
        }, 1200);
      }
    } else {
      shields--;
      updateHud();
      statusPrompt.textContent = \`OFF BEAT! SHIELDS: \${shields}\`;
      if (shields <= 0) {
        statusPrompt.textContent = 'FAILED BEAT - RETRYING PATTERN';
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }
  }
}

// Oscilloscope Loop
function drawScope() {
  requestAnimationFrame(drawScope);
  scopeCtx.fillStyle = '#030408';
  scopeCtx.fillRect(0, 0, scopeCanvas.width, scopeCanvas.height);

  if (!audio.analyser) {
    // Idle flat line
    scopeCtx.strokeStyle = '#00f0ff';
    scopeCtx.lineWidth = 2;
    scopeCtx.beginPath();
    scopeCtx.moveTo(0, scopeCanvas.height / 2);
    scopeCtx.lineTo(scopeCanvas.width, scopeCanvas.height / 2);
    scopeCtx.stroke();
    return;
  }

  audio.analyser.getByteFrequencyData(audio.dataArray);
  const barWidth = (scopeCanvas.width / audio.dataArray.length) * 1.5;
  let x = 0;

  for (let i = 0; i < audio.dataArray.length; i++) {
    const barHeight = (audio.dataArray[i] / 255) * scopeCanvas.height;
    scopeCtx.fillStyle = \`hsl(\${i * 12 + 160}, 100%, 50%)\`;
    scopeCtx.fillRect(x, scopeCanvas.height - barHeight, barWidth - 1, barHeight);
    x += barWidth;
  }
}

// Key & Pad Events
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    playPatternDemo();
    return;
  }
  const key = e.key.toLowerCase();
  if (padKeyMap[key] !== undefined) {
    triggerPad(padKeyMap[key], true);
  }
});

document.querySelectorAll('.pad-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const pad = parseInt(btn.getAttribute('data-pad'), 10);
    triggerPad(pad, true);
  });
});

document.getElementById('playDemoBtn').addEventListener('click', playPatternDemo);

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
drawScope();
`;

writeFile(path.join(g82Dir, 'index.html'), g82Html);
writeFile(path.join(g82Dir, 'style.css'), g82Css);
writeFile(path.join(g82Dir, 'audio.js'), g82Audio);
writeFile(path.join(g82Dir, 'game.js'), g82Game);
copyThumbnailToIcon('neon-drum-machine');
console.log('Game 82 (neon-drum-machine) built successfully.');

// ============================================================================
// GAME 83: FREQUENCY SLICER (Directional Arrow Beat Slicer)
// ============================================================================
console.log('Building Game 83: frequency-slicer...');
const g83Dir = path.join(gamesDir, 'frequency-slicer');

const g83Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frequency Slicer: Cyber Saber Beat - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="slicer-container">
    <header class="hud-top">
      <div class="stat-col"><span class="label">STAGE</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="stat-col"><span class="label">ARENA</span><span id="themeDisplay" class="value">Cyan/Magenta Tunnel</span></div>
      <div class="stat-col"><span class="label">SCORE</span><span id="scoreDisplay" class="value">0</span></div>
      <div class="stat-col"><span class="label">COMBO</span><span id="comboDisplay" class="value">0x</span></div>
      <div class="stat-col"><span class="label">SHIELDS</span><span id="shieldDisplay" class="value">🛡️🛡️🛡️</span></div>
      <button id="levelSelectBtn" class="btn-stages">STAGES</button>
    </header>

    <main class="canvas-arena">
      <canvas id="slicerCanvas" width="480" height="600"></canvas>
      <div id="sliceMsg" class="slice-msg"></div>
    </main>

    <footer class="hud-bottom">
      <div class="saber-switches">
        <button class="saber-btn saber-left">LEFT SABER (CYAN)</button>
        <button class="saber-btn saber-right">RIGHT SABER (RED)</button>
      </div>
      <div class="instructions">Swipe or click/drag across approaching cubes matching arrow directions! [WASD/Arrows]</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-card">
      <h2>SELECT FREQUENCY SLICER ARENA (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const g83Css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #070310;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.slicer-container {
  width: 100vw;
  max-width: 520px;
  height: 100vh;
  max-height: 880px;
  background: radial-gradient(circle at 50% 30%, #150529 0%, #06020c 90%);
  border: 2px solid #00f0ff;
  border-radius: 12px;
  box-shadow: 0 0 35px rgba(0, 240, 255, 0.2);
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
  background: rgba(10, 4, 20, 0.85);
  border-bottom: 1px solid rgba(0, 240, 255, 0.3);
  z-index: 10;
}
.stat-col {
  display: flex;
  flex-direction: column;
}
.stat-col .label {
  font-size: 8px;
  color: #00f0ff;
  font-weight: 800;
  letter-spacing: 1px;
}
.stat-col .value {
  font-size: 13px;
  font-weight: 900;
}
.btn-stages {
  background: linear-gradient(135deg, #00f0ff, #ff0055);
  border: none;
  color: #fff;
  font-size: 11px;
  font-weight: 900;
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
#slicerCanvas {
  width: 100%;
  height: 100%;
  display: block;
}
.slice-msg {
  position: absolute;
  top: 40%;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 2px;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.7);
  transition: all 0.15s ease-out;
}
.slice-msg.show {
  opacity: 1;
  transform: scale(1.2);
}
.hud-bottom {
  padding: 10px 14px 14px;
  background: rgba(10, 4, 20, 0.9);
  border-top: 1px solid rgba(255, 0, 85, 0.3);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 10;
}
.saber-switches {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.saber-btn {
  padding: 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 900;
  cursor: pointer;
}
.saber-left {
  background: rgba(0, 240, 255, 0.15);
  border: 2px solid #00f0ff;
  color: #00f0ff;
}
.saber-right {
  background: rgba(255, 0, 85, 0.15);
  border: 2px solid #ff0055;
  color: #ff0055;
}
.instructions {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(3, 1, 8, 0.94);
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
  background: #0f061e;
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
  border: 1px solid #ff0055;
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

const g83Audio = `class SlicerAudio {
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
  playSlice(side = 'left') {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const freq = side === 'left' ? 440 : 587.33;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.15);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(now + 0.15);
  }
  playMiss() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playWin() {
    this.init();
    const pitches = [523.25, 659.25, 783.99, 1046.50];
    pitches.forEach((p, i) => {
      setTimeout(() => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.frequency.setValueAtTime(p, this.ctx.currentTime);
        g.gain.setValueAtTime(0.25, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.3);
      }, i * 100);
    });
  }
}`;

const g83Game = `/**
 * Frequency Slicer — Game Engine (45 Levels, Dual Saber Detection, Shields)
 */
${RHYTHM_THEMES_CODE}

const audio = new SlicerAudio();
const canvas = document.getElementById('slicerCanvas');
const ctx = canvas.getContext('2d');
const sliceMsg = document.getElementById('sliceMsg');

let currentLevel = 1;
let score = 0;
let combo = 0;
let shields = 3;
let invulnerable = true;
let cubes = [];
let particles = [];
let cubeTimer = 0;
let cubesCleared = 0;
let targetCubes = 25;
let speed = 3.5;

let isMouseDown = false;
let mouseTrail = [];

const directions = ['UP', 'DOWN', 'LEFT', 'RIGHT'];

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  combo = 0;
  cubesCleared = 0;
  targetCubes = 20 + lvl * 2;
  speed = 3.0 + (lvl * 0.12);
  cubes = [];
  particles = [];
  cubeTimer = 0;

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

function spawnCube() {
  const side = Math.random() > 0.5 ? 'left' : 'right';
  const dir = directions[Math.floor(Math.random() * directions.length)];
  const x = side === 'left' ? canvas.width * 0.32 : canvas.width * 0.68;
  cubes.push({
    x,
    y: 0,
    side,
    dir,
    hit: false,
    color: side === 'left' ? '#00f0ff' : '#ff0055'
  });
}

function sliceCube(c) {
  c.hit = true;
  combo++;
  cubesCleared++;
  score += 150 * Math.min(8, Math.floor(combo / 4) + 1);
  audio.playSlice(c.side);
  showMsg('PERFECT SLICE!', c.color);
  updateHud();

  // Create explosion particles
  for (let i = 0; i < 16; i++) {
    particles.push({
      x: c.x,
      y: c.y,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      color: c.color,
      alpha: 1
    });
  }

  if (cubesCleared >= targetCubes) {
    audio.playWin();
    showMsg('STAGE COMPLETED!', '#39ff14');
    setTimeout(() => {
      if (currentLevel < 45) initLevel(currentLevel + 1);
      else showMsg('ALL 45 SLICER ARENAS MASTERED!', '#ffd600');
    }, 1200);
  }
}

function showMsg(text, color) {
  sliceMsg.textContent = text;
  sliceMsg.style.color = color;
  sliceMsg.classList.remove('show');
  void sliceMsg.offsetWidth;
  sliceMsg.classList.add('show');
  setTimeout(() => sliceMsg.classList.remove('show'), 600);
}

function update(dt) {
  cubeTimer += dt;
  if (cubeTimer > 1.2 - Math.min(0.7, currentLevel * 0.015)) {
    cubeTimer = 0;
    spawnCube();
  }

  const hitZoneY = canvas.height * 0.85;

  for (let i = cubes.length - 1; i >= 0; i--) {
    const c = cubes[i];
    c.y += speed * (dt * 60);

    // Auto-miss
    if (!c.hit && c.y > hitZoneY + 40) {
      c.hit = true;
      combo = 0;
      shields--;
      audio.playMiss();
      showMsg('MISS!', '#ff0055');
      updateHud();
      if (shields <= 0) {
        showMsg('PERIMETER BREACH - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }

    if (c.y > canvas.height + 60) {
      cubes.splice(i, 1);
    }
  }

  // Update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= dt * 2;
    if (p.alpha <= 0) particles.splice(i, 1);
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Perspective Runway
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width * 0.4, 0);
  ctx.lineTo(canvas.width * 0.1, canvas.height);
  ctx.moveTo(canvas.width * 0.6, 0);
  ctx.lineTo(canvas.width * 0.9, canvas.height);
  ctx.stroke();

  // Hit Zone Arc
  const hitZoneY = canvas.height * 0.85;
  ctx.strokeStyle = '#ffd600';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(50, hitZoneY);
  ctx.lineTo(canvas.width - 50, hitZoneY);
  ctx.stroke();

  // Draw Cubes
  for (let c of cubes) {
    if (c.hit) continue;
    const size = 32 + (c.y / canvas.height) * 36;
    ctx.fillStyle = c.color;
    ctx.shadowColor = c.color;
    ctx.shadowBlur = 12;
    ctx.fillRect(c.x - size / 2, c.y - size / 2, size, size);
    ctx.shadowBlur = 0;

    // Arrow indicator
    ctx.fillStyle = '#fff';
    ctx.font = \`bold \${Math.floor(size * 0.6)}px sans-serif\`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let arrowGlyph = '▲';
    if (c.dir === 'DOWN') arrowGlyph = '▼';
    if (c.dir === 'LEFT') arrowGlyph = '◀';
    if (c.dir === 'RIGHT') arrowGlyph = '▶';
    ctx.fillText(arrowGlyph, c.x, c.y);
  }

  // Draw Particles
  for (let p of particles) {
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Draw Mouse Saber Trail
  if (mouseTrail.length > 1) {
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    for (let i = 0; i < mouseTrail.length; i++) {
      const pt = mouseTrail[i];
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    }
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

// Mouse / Touch Gesture Slicing
canvas.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  mouseTrail = [];
  handlePointer(e);
});

window.addEventListener('mouseup', () => {
  isMouseDown = false;
  mouseTrail = [];
});

canvas.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  handlePointer(e);
});

function handlePointer(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const px = (e.clientX - rect.left) * scaleX;
  const py = (e.clientY - rect.top) * scaleY;

  mouseTrail.push({ x: px, y: py });
  if (mouseTrail.length > 6) mouseTrail.shift();

  // Check collision with cubes near hitZone
  const hitZoneY = canvas.height * 0.85;
  for (let c of cubes) {
    if (!c.hit && Math.abs(c.y - hitZoneY) < 55) {
      const dist = Math.hypot(px - c.x, py - c.y);
      if (dist < 40) {
        sliceCube(c);
      }
    }
  }
}

// Keyboard controls [Arrow keys / WASD]
window.addEventListener('keydown', (e) => {
  const hitZoneY = canvas.height * 0.85;
  let targetDir = null;
  if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') targetDir = 'UP';
  if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') targetDir = 'DOWN';
  if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') targetDir = 'LEFT';
  if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') targetDir = 'RIGHT';

  if (targetDir) {
    for (let c of cubes) {
      if (!c.hit && Math.abs(c.y - hitZoneY) < 50 && c.dir === targetDir) {
        sliceCube(c);
        break;
      }
    }
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

writeFile(path.join(g83Dir, 'index.html'), g83Html);
writeFile(path.join(g83Dir, 'style.css'), g83Css);
writeFile(path.join(g83Dir, 'audio.js'), g83Audio);
writeFile(path.join(g83Dir, 'game.js'), g83Game);
copyThumbnailToIcon('frequency-slicer');
console.log('Game 83 (frequency-slicer) built successfully.');
