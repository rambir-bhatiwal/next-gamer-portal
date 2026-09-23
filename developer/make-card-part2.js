/**
 * Next Games/Game — Card Category Part 2:
 * - neural-memory-match (Game 64)
 * - tri-peaks-cyber-pyramid (Game 65)
 * - freecell-neo (Game 66)
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

const CARD_THEMES_CODE = `const THEMES = [
  { id: 1, name: "Cyber Cyan Felt", bg: "#040817", felt: "#0a1733", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Velvet Violet Parlor", bg: "#0d031c", felt: "#1b0938", primary: "#e040fb", secondary: "#7c4dff", accent: "#ffd600", text: "#f3e5f5" },
  { id: 3, name: "Emerald Matrix Desk", bg: "#02140a", felt: "#062b16", primary: "#00e676", secondary: "#1de9b6", accent: "#ffd600", text: "#e8f5e9" },
  { id: 4, name: "Obsidian Titanium Suite", bg: "#0a0c10", felt: "#151a24", primary: "#b0bec5", secondary: "#00f0ff", accent: "#ff007f", text: "#eceff1" },
  { id: 5, name: "Crimson Neon Salon", bg: "#170208", felt: "#2e0513", primary: "#ff1744", secondary: "#ff5252", accent: "#ffd600", text: "#ffebee" },
  { id: 6, name: "Royal Gold High-Roller", bg: "#140f02", felt: "#291f06", primary: "#ffd700", secondary: "#ffab00", accent: "#00f0ff", text: "#fffde7" },
  { id: 7, name: "Deep Space Casino", bg: "#02020a", felt: "#080820", primary: "#7986cb", secondary: "#3d5afe", accent: "#ff4081", text: "#e8eaf6" },
  { id: 8, name: "Laser Ruby Table", bg: "#1a040b", felt: "#360918", primary: "#ff4081", secondary: "#f50057", accent: "#00e5ff", text: "#fce4ec" },
  { id: 9, name: "Sapphire Circuit Floor", bg: "#010f1c", felt: "#04203b", primary: "#40c4ff", secondary: "#0091ea", accent: "#39ff14", text: "#e1f5fe" },
  { id: 10, name: "Cyberpunk Amber Den", bg: "#170b01", felt: "#331904", primary: "#ff9100", secondary: "#ff6d00", accent: "#00f0ff", text: "#fff3e0" },
  { id: 11, name: "Cobalt Quantum Cell", bg: "#03081a", felt: "#09183d", primary: "#2979ff", secondary: "#536dfe", accent: "#ffea00", text: "#e3f2fd" },
  { id: 12, name: "Synthwave Sunset Lounge", bg: "#140316", felt: "#2e0933", primary: "#ff007f", secondary: "#7c4dff", accent: "#00f0ff", text: "#fdf0ff" },
  { id: 13, name: "Plasma Orange Pit", bg: "#190801", felt: "#3b1404", primary: "#ff5722", secondary: "#ff9800", accent: "#ffd600", text: "#fbe9e7" },
  { id: 14, name: "Frost White VIP Booth", bg: "#081017", felt: "#12202e", primary: "#80d8ff", secondary: "#b2ebf2", accent: "#ff4081", text: "#ffffff" },
  { id: 15, name: "Dark Carbon Nexus", bg: "#070709", felt: "#131418", primary: "#90a4ae", secondary: "#cfd8dc", accent: "#39ff14", text: "#eceff1" },
  { id: 16, name: "Hologram Lavender Pit", bg: "#0b0417", felt: "#1c0b3b", primary: "#b388ff", secondary: "#ea80fc", accent: "#00f0ff", text: "#ede7f6" },
  { id: 17, name: "Toxic Acid Arcade", bg: "#081401", felt: "#152e04", primary: "#76ff03", secondary: "#64dd17", accent: "#ffff00", text: "#f1f8e9" },
  { id: 18, name: "Solar Flare Penthouse", bg: "#170601", felt: "#381105", primary: "#ff6d00", secondary: "#ffab00", accent: "#ff1744", text: "#fff3e0" },
  { id: 19, name: "Void Singularity Vault", bg: "#010105", felt: "#070714", primary: "#651fff", secondary: "#304ffe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 20, name: "Helios Radiant Deck", bg: "#141101", felt: "#2e2704", primary: "#ffea00", secondary: "#ffd600", accent: "#ff007f", text: "#fffde7" },
  { id: 21, name: "Aquamarine Bay Table", bg: "#011214", felt: "#05292e", primary: "#18ffff", secondary: "#00e5ff", accent: "#ffea00", text: "#e0f7fa" },
  { id: 22, name: "Tokamak Fusion Pit", bg: "#170304", felt: "#360b0f", primary: "#ff3d00", secondary: "#d50000", accent: "#ffd600", text: "#fbe9e7" },
  { id: 23, name: "Hyperdrive Orbital Bar", bg: "#040a17", felt: "#0b1b3b", primary: "#00b0ff", secondary: "#2979ff", accent: "#39ff14", text: "#e1f5fe" },
  { id: 24, name: "Prism Spectrum Floor", bg: "#0a0517", felt: "#1d0f3d", primary: "#d500f9", secondary: "#00f0ff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 25, name: "Bismuth Crystal Club", bg: "#0c0817", felt: "#1e1438", primary: "#ea80fc", secondary: "#64ffda", accent: "#ffd600", text: "#f3e5f5" },
  { id: 26, name: "Subnet Hacker Basement", bg: "#020f08", felt: "#072615", primary: "#00c853", secondary: "#69f0ae", accent: "#00e5ff", text: "#e8f5e9" },
  { id: 27, name: "Glitch Glade Casino", bg: "#120217", felt: "#290833", primary: "#f50057", secondary: "#7c4dff", accent: "#39ff14", text: "#fce4ec" },
  { id: 28, name: "Aero Blue Sky Salon", bg: "#031017", felt: "#0a2636", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ffd600", text: "#e1f5fe" },
  { id: 29, name: "Chrono Shift Deck", bg: "#070417", felt: "#140c38", primary: "#7c4dff", secondary: "#b388ff", accent: "#ff007f", text: "#ede7f6" },
  { id: 30, name: "Starlight Gala Suite", bg: "#0a0a14", felt: "#18182e", primary: "#c5cae9", secondary: "#9fa8da", accent: "#ffd700", text: "#e8eaf6" },
  { id: 31, name: "Magma Forge Lounge", bg: "#170501", felt: "#380f05", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 32, name: "Nanite Core Chamber", bg: "#02120e", felt: "#062b21", primary: "#1de9b6", secondary: "#00bfa5", accent: "#ea80fc", text: "#e0f2f1" },
  { id: 33, name: "Zero-G Macau Parlor", bg: "#040a1a", felt: "#0b1c40", primary: "#00e5ff", secondary: "#651fff", accent: "#ffd600", text: "#e1f5fe" },
  { id: 34, name: "Tachyon VIP Sanctum", bg: "#0e0217", felt: "#240738", primary: "#e040fb", secondary: "#00f0ff", accent: "#76ff03", text: "#f3e5f5" },
  { id: 35, name: "Copper Kilovolt Den", bg: "#140902", felt: "#2e1707", primary: "#ffab00", secondary: "#ff6d00", accent: "#00f0ff", text: "#fff8e1" },
  { id: 36, name: "Bio-Luminescent Reef", bg: "#011412", felt: "#042e2b", primary: "#64ffda", secondary: "#1de9b6", accent: "#ff4081", text: "#e0f2f1" },
  { id: 37, name: "Infrared Speakeasy", bg: "#170202", felt: "#360606", primary: "#ff1744", secondary: "#d50000", accent: "#ffd600", text: "#ffebee" },
  { id: 38, name: "Aurora Polar Station", bg: "#010e14", felt: "#052433", primary: "#18ffff", secondary: "#00e676", accent: "#e040fb", text: "#e0f7fa" },
  { id: 39, name: "Zenith Executive Floor", bg: "#090912", felt: "#171729", primary: "#b0bec5", secondary: "#78909c", accent: "#ffd700", text: "#eceff1" },
  { id: 40, name: "Pulsar Beacon Lounge", bg: "#0c0217", felt: "#22073d", primary: "#d500f9", secondary: "#3d5afe", accent: "#39ff14", text: "#f3e5f5" },
  { id: 41, name: "Neutron Core Arena", bg: "#060214", felt: "#140833", primary: "#7c4dff", secondary: "#651fff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 42, name: "Antimatter High-Limit", bg: "#14010a", felt: "#2e051a", primary: "#ff007f", secondary: "#f50057", accent: "#ffd600", text: "#fdf0ff" },
  { id: 43, name: "Cosmic Horizon Deck", bg: "#020717", felt: "#071638", primary: "#2979ff", secondary: "#00e5ff", accent: "#ff007f", text: "#e3f2fd" },
  { id: 44, name: "Quantum Mirage Parlor", bg: "#080117", felt: "#180536", primary: "#ea80fc", secondary: "#b388ff", accent: "#00e676", text: "#f3e5f5" },
  { id: 45, name: "Apex Grand Casino", bg: "#000005", felt: "#08081a", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];`;

// ============================================================================
// GAME 64: NEURAL MEMORY MATCH: HOLOGRAPHIC PAIRS
// ============================================================================
console.log('Building Game 64: neural-memory-match...');
const mmDir = path.join(gamesDir, 'neural-memory-match');

const mmHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Neural Memory Match: Holographic Pairs - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Memory Matrix</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Matches / Total</div><div id="matchVal" class="hud-val" style="color:#00ff88;">0 / 6 PAIRS</div></div>
      <div class="hud-box"><div class="hud-lbl">Moves Budget</div><div id="movesVal" class="hud-val" style="color:#ffd600;">20 MOVES LEFT</div></div>
      <div class="hud-box"><div class="hud-lbl">Combo Streak</div><div id="comboVal" class="hud-val" style="color:#00f0ff;">x1 STREAK</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">MATRICES (1-45)</button>
      <button id="restartBtn" class="action-btn">RELOAD</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT MATRIX &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">NEURAL MEMORY MATCH</h1>
        <p id="overlayDesc">Flip face-down holographic cards to pair matching cybernetic glyphs across 45 memory stages. Watch your moves budget!</p>
        <button id="startBtn" class="glow-btn">INITIALIZE MATRIX</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT MEMORY MATRIX (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const mmCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #030814; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(3,8,22,0.92); padding: 8px 16px; border-bottom: 2px solid #ffd600; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ffd600; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(3,8,22,0.92); padding: 8px; border-top: 1px solid #1a2a44; flex-wrap: wrap; }
.action-btn { background: #0a1730; color: #ffd600; border: 1px solid #ffd600; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ffd600; color: #000; box-shadow: 0 0 10px #ffd600; }
.next-btn { background: #00f0ff; color: #000; border-color: #00f0ff; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00f0ff; }
.overlay { position: absolute; inset: 0; background: rgba(2,4,12,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #061126; border: 2px solid #ffd600; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,214,0,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ffd600; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #ccdcee; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ffd600; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ffd600; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #0c1836; border: 1px solid #1a3268; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ffd600; color: #ffd600; }
.lvl-btn.active { background: #ffd600; color: #000; }`;

const mmAudio = `// Web Audio API procedural sound synthesis for Neural Memory Match
class SoundFx {
  constructor() {
    this.ctx = null;
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
  playCardFlip() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(350, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playMatchSuccess() {
    this.init();
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.07);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.07 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.07);
      osc.stop(this.ctx.currentTime + idx * 0.07 + 0.2);
    });
  }
  playMismatch() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  playLevelFanfare() {
    this.init();
    [440, 554.37, 659.25, 880].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.1);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.1);
      osc.stop(this.ctx.currentTime + idx * 0.1 + 0.35);
    });
  }
}
window.sfx = new SoundFx();`;

const mmGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let movesLeft = 20;
let streak = 1;
let matchedPairs = 0;
let totalPairs = 6;
let invulnerable = true; // protection buffer against instant failure

const GLYPHS = ['⚡', '🧬', '⚛️', '🛡️', '🛰️', '💠', '🪐', '🔮', '🚀', '🧪', '🛸', '💎'];

let cards = [];
let flipped = [];
let lockBoard = false;
let gridCols = 4;
let gridRows = 3;

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initMatrix(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  if (lvl <= 10) {
    gridCols = 4; gridRows = 3; totalPairs = 6; movesLeft = 20;
  } else if (lvl <= 25) {
    gridCols = 4; gridRows = 4; totalPairs = 8; movesLeft = 24;
  } else if (lvl <= 38) {
    gridCols = 5; gridRows = 4; totalPairs = 10; movesLeft = 28;
  } else {
    gridCols = 6; gridRows = 4; totalPairs = 12; movesLeft = 32;
  }
  
  // Pick totalPairs unique glyphs
  const chosenGlyphs = GLYPHS.slice(0, totalPairs);
  const cardPool = [];
  chosenGlyphs.forEach(g => {
    cardPool.push({ glyph: g, matched: false, faceUp: false });
    cardPool.push({ glyph: g, matched: false, faceUp: false });
  });
  
  // Shuffle
  for (let i = cardPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardPool[i], cardPool[j]] = [cardPool[j], cardPool[i]];
  }
  
  cards = cardPool;
  flipped = [];
  lockBoard = false;
  matchedPairs = 0;
  streak = 1;
  document.getElementById('nextBtn').style.display = 'none';
  updateHud();
}

function updateHud() {
  document.getElementById('matchVal').innerText = matchedPairs + ' / ' + totalPairs + ' PAIRS';
  document.getElementById('movesVal').innerText = movesLeft + ' MOVES LEFT';
  document.getElementById('comboVal').innerText = 'x' + streak + ' STREAK';
  
  if (matchedPairs === totalPairs) {
    window.sfx.playLevelFanfare();
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function handleCardClick(idx) {
  if (lockBoard || idx < 0 || idx >= cards.length) return;
  const card = cards[idx];
  if (card.faceUp || card.matched) return;
  
  card.faceUp = true;
  flipped.push({ idx, card });
  window.sfx.playCardFlip();
  
  if (flipped.length === 2) {
    movesLeft--;
    if (movesLeft < 0) movesLeft = 5; // buffer
    
    const [c1, c2] = flipped;
    if (c1.card.glyph === c2.card.glyph) {
      // Match!
      c1.card.matched = true;
      c2.card.matched = true;
      matchedPairs++;
      streak++;
      window.sfx.playMatchSuccess();
      flipped = [];
      updateHud();
    } else {
      // Mismatch
      streak = 1;
      lockBoard = true;
      window.sfx.playMismatch();
      setTimeout(() => {
        c1.card.faceUp = false;
        c2.card.faceUp = false;
        flipped = [];
        lockBoard = false;
        updateHud();
      }, 750);
    }
  }
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const gap = 12;
  const maxW = Math.min(85, (canvas.width - (gridCols + 1) * gap) / gridCols);
  const maxH = Math.min(115, (canvas.height - (gridRows + 1) * gap) / gridRows);
  const cardW = Math.min(maxW, maxH * 0.75);
  const cardH = cardW * 1.33;
  
  const totalGridW = gridCols * cardW + (gridCols - 1) * gap;
  const totalGridH = gridRows * cardH + (gridRows - 1) * gap;
  const startX = (canvas.width - totalGridW) / 2;
  const startY = (canvas.height - totalGridH) / 2;
  
  cards.forEach((c, i) => {
    const col = i % gridCols;
    const row = Math.floor(i / gridCols);
    const cx = startX + col * (cardW + gap);
    const cy = startY + row * (cardH + gap);
    
    if (c.matched) {
      // Matched: soft glow
      ctx.fillStyle = 'rgba(0,255,136,0.15)';
      ctx.fillRect(cx, cy, cardW, cardH);
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(cx, cy, cardW, cardH);
      ctx.font = Math.floor(cardH * 0.35) + 'px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(c.glyph, cx + cardW/2, cy + cardH/2 + 10);
    } else if (c.faceUp) {
      // Face Up
      ctx.fillStyle = '#0a1733';
      ctx.fillRect(cx, cy, cardW, cardH);
      ctx.strokeStyle = currentTheme.accent;
      ctx.lineWidth = 2;
      ctx.strokeRect(cx, cy, cardW, cardH);
      ctx.font = Math.floor(cardH * 0.4) + 'px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(c.glyph, cx + cardW/2, cy + cardH/2 + 12);
    } else {
      // Face Down Backplate
      ctx.fillStyle = '#060d1f';
      ctx.fillRect(cx, cy, cardW, cardH);
      ctx.strokeStyle = currentTheme.primary;
      ctx.lineWidth = 1.5;
      ctx.strokeRect(cx, cy, cardW, cardH);
      
      // Cyber circuit icon
      ctx.strokeStyle = currentTheme.secondary;
      ctx.strokeRect(cx + 8, cy + 8, cardW - 16, cardH - 16);
      ctx.beginPath();
      ctx.arc(cx + cardW/2, cy + cardH/2, 10, 0, Math.PI * 2);
      ctx.stroke();
    }
  });
  
  requestAnimationFrame(render);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const gap = 12;
  const maxW = Math.min(85, (canvas.width - (gridCols + 1) * gap) / gridCols);
  const maxH = Math.min(115, (canvas.height - (gridRows + 1) * gap) / gridRows);
  const cardW = Math.min(maxW, maxH * 0.75);
  const cardH = cardW * 1.33;
  
  const totalGridW = gridCols * cardW + (gridCols - 1) * gap;
  const totalGridH = gridRows * cardH + (gridRows - 1) * gap;
  const startX = (canvas.width - totalGridW) / 2;
  const startY = (canvas.height - totalGridH) / 2;
  
  cards.forEach((c, i) => {
    const col = i % gridCols;
    const row = Math.floor(i / gridCols);
    const cx = startX + col * (cardW + gap);
    const cy = startY + row * (cardH + gap);
    
    if (mx >= cx && mx <= cx + cardW && my >= cy && my <= cy + cardH) {
      handleCardClick(i);
    }
  });
});

document.getElementById('restartBtn').addEventListener('click', () => initMatrix(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initMatrix(currentLevel + 1);
});

// Modal Setup
const levelGrid = document.getElementById('levelGrid');
THEMES.forEach((t, i) => {
  const btn = document.createElement('button');
  btn.className = 'lvl-btn' + (i === 0 ? ' active' : '');
  btn.innerText = t.id;
  btn.title = t.name;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initMatrix(t.id);
    document.getElementById('levelModal').style.display = 'none';
  });
  levelGrid.appendChild(btn);
});
document.getElementById('levelSelectBtn').addEventListener('click', () => {
  document.getElementById('levelModal').style.display = 'flex';
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  document.getElementById('levelModal').style.display = 'none';
});

resizeCanvas();
initMatrix(1);
render();
`;

writeFile(path.join(mmDir, 'index.html'), mmHtml);
writeFile(path.join(mmDir, 'style.css'), mmCss);
writeFile(path.join(mmDir, 'audio.js'), mmAudio);
writeFile(path.join(mmDir, 'game.js'), mmGame);
copyThumbnailToIcon('neural-memory-match');
console.log('Game 64 (neural-memory-match) built successfully.');

// ============================================================================
// GAME 65: TRI-PEAKS CYBER PYRAMID: DATA CLEAR
// ============================================================================
console.log('Building Game 65: tri-peaks-cyber-pyramid...');
const tpDir = path.join(gamesDir, 'tri-peaks-cyber-pyramid');

const tpHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Tri-Peaks Cyber Pyramid: Data Clear - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Cyber Pyramid</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Pyramid Cards</div><div id="cardsVal" class="hud-val" style="color:#00ff88;">28 / 28 REMAINING</div></div>
      <div class="hud-box"><div class="hud-lbl">Streak Multiplier</div><div id="streakVal" class="hud-val" style="color:#ffd600;">x1 STREAK</div></div>
      <div class="hud-box"><div class="hud-lbl">Stock Draw Pile</div><div id="stockVal" class="hud-val" style="color:#00f0ff;">23 CARDS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">PYRAMIDS (1-45)</button>
      <button id="drawBtn" class="action-btn">DRAW STOCK [SPACE]</button>
      <button id="restartBtn" class="action-btn">RELOAD</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT PYRAMID &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">TRI-PEAKS CYBER PYRAMID</h1>
        <p id="overlayDesc">Clear 3 overlapping cyber peaks by matching cards that are 1 higher or 1 lower than the waste card across 45 cosmic layouts!</p>
        <button id="startBtn" class="glow-btn">ENTER PYRAMID</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT CYBER PYRAMID (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const tpCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #060212; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(8,2,22,0.92); padding: 8px 16px; border-bottom: 2px solid #ff007f; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ff007f; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(8,2,22,0.92); padding: 8px; border-top: 1px solid #300c3b; flex-wrap: wrap; }
.action-btn { background: #1a0628; color: #ff007f; border: 1px solid #ff007f; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ff007f; color: #fff; box-shadow: 0 0 10px #ff007f; }
.next-btn { background: #00f0ff; color: #000; border-color: #00f0ff; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00f0ff; }
.overlay { position: absolute; inset: 0; background: rgba(4,1,12,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #130424; border: 2px solid #ff007f; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,0,127,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ff007f; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #e1bee7; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ff007f; color: #fff; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ff007f; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #1b0730; border: 1px solid #3c1363; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ff007f; color: #ff007f; }
.lvl-btn.active { background: #ff007f; color: #fff; }`;

const tpAudio = `// Web Audio API procedural sound synthesis for Tri-Peaks Cyber Pyramid
class SoundFx {
  constructor() {
    this.ctx = null;
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
  playCardSnap(streak = 1) {
    this.init();
    const freqs = [392, 440, 493.88, 523.25, 587.33, 659.25, 783.99, 880];
    const f = freqs[Math.min(streak - 1, freqs.length - 1)];
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }
  playDrawSlide() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playWinFanfare() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.1);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.1);
      osc.stop(this.ctx.currentTime + idx * 0.1 + 0.35);
    });
  }
}
window.sfx = new SoundFx();`;

const tpGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let streak = 1;
let stock = [];
let waste = null;
let pyramidCards = [];
let invulnerable = true; // protection buffer against instant failure

const SUITS = ['♠', '♥', '♦', '♣'];
const SUIT_COLORS = { '♠': '#00f0ff', '♣': '#00f0ff', '♥': '#ff007f', '♦': '#ffd600' };
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function createDeck() {
  const deck = [];
  for (let s of SUITS) {
    for (let r = 0; r < RANKS.length; r++) {
      deck.push({
        suit: s,
        rankVal: r + 1,
        rankStr: RANKS[r],
        id: s + RANKS[r]
      });
    }
  }
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function initPyramid(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  const deck = createDeck();
  streak = 1;
  document.getElementById('nextBtn').style.display = 'none';
  
  // Tri-Peaks has 28 cards organized in 4 rows:
  // Row 0: 3 cards (peaks: 0, 1, 2)
  // Row 1: 6 cards (3, 4, 5, 6, 7, 8)
  // Row 2: 9 cards (9..17)
  // Row 3: 10 cards (18..27) - fully face up at start!
  pyramidCards = [];
  for (let i = 0; i < 28; i++) {
    const card = deck.pop();
    card.cleared = false;
    card.faceUp = (i >= 18); // Row 3 cards are face-up
    card.index = i;
    pyramidCards.push(card);
  }
  
  waste = deck.pop();
  stock = deck; // remaining 23 cards
  updateCardAccessibility();
  updateHud();
}

function updateCardAccessibility() {
  // A card is uncovered if its two covering children in the row below are cleared
  // Map parent indices to children:
  // Row 0:
  // peak 0 -> children 3, 4
  // peak 1 -> children 5, 6
  // peak 2 -> children 7, 8
  // Row 1:
  // 3 -> 9, 10
  // 4 -> 10, 11
  // 5 -> 12, 13
  // 6 -> 13, 14
  // 7 -> 15, 16
  // 8 -> 16, 17
  // Row 2:
  // 9 -> 18, 19
  // 10 -> 19, 20
  // 11 -> 20, 21
  // 12 -> 21, 22
  // 13 -> 22, 23
  // 14 -> 23, 24
  // 15 -> 24, 25
  // 16 -> 25, 26
  // 17 -> 26, 27
  // Row 3: (18..27) have no children
  const childMap = {
    0: [3, 4], 1: [5, 6], 2: [7, 8],
    3: [9, 10], 4: [10, 11], 5: [12, 13], 6: [13, 14], 7: [15, 16], 8: [16, 17],
    9: [18, 19], 10: [19, 20], 11: [20, 21], 12: [21, 22], 13: [22, 23], 14: [23, 24],
    15: [24, 25], 16: [25, 26], 17: [26, 27]
  };
  
  for (let i = 0; i < 18; i++) {
    const card = pyramidCards[i];
    if (!card.cleared) {
      const children = childMap[i];
      if (children) {
        const c1 = pyramidCards[children[0]];
        const c2 = pyramidCards[children[1]];
        if (c1.cleared && c2.cleared) {
          card.faceUp = true;
        }
      }
    }
  }
}

function updateHud() {
  const remaining = pyramidCards.filter(c => !c.cleared).length;
  document.getElementById('cardsVal').innerText = remaining + ' / 28 REMAINING';
  document.getElementById('streakVal').innerText = 'x' + streak + ' STREAK';
  document.getElementById('stockVal').innerText = stock.length + ' CARDS';
  
  if (remaining === 0) {
    window.sfx.playWinFanfare();
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function drawStock() {
  if (stock.length > 0) {
    waste = stock.pop();
    streak = 1;
    window.sfx.playDrawSlide();
    updateHud();
  }
}

function handlePyramidCardClick(index) {
  const card = pyramidCards[index];
  if (!card || card.cleared || !card.faceUp || !waste) return;
  
  // Check if rank is +-1 or King/Ace wrap
  const r1 = card.rankVal;
  const r2 = waste.rankVal;
  let match = (Math.abs(r1 - r2) === 1);
  if ((r1 === 1 && r2 === 13) || (r1 === 13 && r2 === 1)) match = true;
  
  if (match) {
    card.cleared = true;
    waste = card;
    streak++;
    window.sfx.playCardSnap(streak);
    updateCardAccessibility();
    updateHud();
  }
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const cardW = 55;
  const cardH = 80;
  
  // Row positioning
  // Calculate relative layout positions
  const startY = 30;
  const rowGapY = 48;
  
  // Render Pyramid
  pyramidCards.forEach((c, idx) => {
    if (c.cleared) return;
    const pos = getCardCoord(idx, cardW, cardH, startY, rowGapY);
    if (c.faceUp) {
      drawHoloCard(pos.x, pos.y, cardW, cardH, c);
    } else {
      drawHoloCardBack(pos.x, pos.y, cardW, cardH);
    }
  });
  
  // Render Bottom Base: Stock & Waste
  const bottomY = canvas.height - cardH - 25;
  const centerX = canvas.width / 2;
  
  // Stock
  const stockX = centerX - cardW - 20;
  if (stock.length > 0) {
    drawHoloCardBack(stockX, bottomY, cardW, cardH);
    ctx.fillStyle = '#fff';
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('STOCK (' + stock.length + ')', stockX + cardW/2, bottomY + cardH/2 + 4);
  } else {
    ctx.strokeStyle = '#444';
    ctx.strokeRect(stockX, bottomY, cardW, cardH);
  }
  
  // Waste
  const wasteX = centerX + 20;
  if (waste) {
    drawHoloCard(wasteX, bottomY, cardW, cardH, waste, true);
  }
  
  requestAnimationFrame(render);
}

function getCardCoord(i, w, h, startY, rowGapY) {
  const cw = canvas.width;
  const colGap = w + 8;
  
  if (i < 3) { // Row 0
    // Peaks at col offsets 1.5, 4.5, 7.5
    const offsets = [cw/2 - colGap * 3, cw/2, cw/2 + colGap * 3];
    return { x: offsets[i] - w/2, y: startY };
  } else if (i < 9) { // Row 1
    const rIdx = i - 3;
    const startX = cw/2 - (5.5 * colGap) / 2;
    // 2 cards under each peak
    const colMap = [0.5, 1.5, 3.5, 4.5, 6.5, 7.5];
    return { x: cw/2 + (colMap[rIdx] - 4) * colGap - w/2, y: startY + rowGapY };
  } else if (i < 18) { // Row 2
    const rIdx = i - 9;
    return { x: cw/2 + (rIdx - 4) * colGap - w/2, y: startY + rowGapY * 2 };
  } else { // Row 3
    const rIdx = i - 18;
    return { x: cw/2 + (rIdx - 4.5) * colGap - w/2, y: startY + rowGapY * 3 };
  }
}

function drawHoloCardBack(x, y, w, h) {
  ctx.fillStyle = '#060d21';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);
  ctx.strokeStyle = currentTheme.secondary;
  ctx.strokeRect(x + 6, y + 6, w - 12, h - 12);
}

function drawHoloCard(x, y, w, h, card, isWaste = false) {
  ctx.fillStyle = '#040d1e';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = isWaste ? '#ff007f' : (SUIT_COLORS[card.suit] || currentTheme.primary);
  ctx.lineWidth = isWaste ? 2.5 : 1.5;
  ctx.strokeRect(x, y, w, h);
  
  const color = SUIT_COLORS[card.suit] || '#fff';
  ctx.fillStyle = color;
  ctx.font = 'bold 13px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(card.rankStr, x + 5, y + 15);
  
  ctx.font = '12px sans-serif';
  ctx.fillText(card.suit, x + 5, y + 30);
  
  ctx.font = '22px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(card.suit, x + w/2, y + h * 0.68);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const cardW = 55;
  const cardH = 80;
  const startY = 30;
  const rowGapY = 48;
  
  // Check Stock Click
  const centerX = canvas.width / 2;
  const stockX = centerX - cardW - 20;
  const bottomY = canvas.height - cardH - 25;
  if (mx >= stockX && mx <= stockX + cardW && my >= bottomY && my <= bottomY + cardH) {
    drawStock();
    return;
  }
  
  // Check Pyramid clicks (search in reverse order so top overlapping click hits face-up card)
  for (let i = pyramidCards.length - 1; i >= 0; i--) {
    const c = pyramidCards[i];
    if (c.cleared || !c.faceUp) continue;
    const pos = getCardCoord(i, cardW, cardH, startY, rowGapY);
    if (mx >= pos.x && mx <= pos.x + cardW && my >= pos.y && my <= pos.y + cardH) {
      handlePyramidCardClick(i);
      return;
    }
  }
});

document.getElementById('drawBtn').addEventListener('click', drawStock);
document.getElementById('restartBtn').addEventListener('click', () => initPyramid(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initPyramid(currentLevel + 1);
});

// Modal Setup
const levelGrid = document.getElementById('levelGrid');
THEMES.forEach((t, i) => {
  const btn = document.createElement('button');
  btn.className = 'lvl-btn' + (i === 0 ? ' active' : '');
  btn.innerText = t.id;
  btn.title = t.name;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initPyramid(t.id);
    document.getElementById('levelModal').style.display = 'none';
  });
  levelGrid.appendChild(btn);
});
document.getElementById('levelSelectBtn').addEventListener('click', () => {
  document.getElementById('levelModal').style.display = 'flex';
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  document.getElementById('levelModal').style.display = 'none';
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    drawStock();
  }
});

resizeCanvas();
initPyramid(1);
render();
`;

writeFile(path.join(tpDir, 'index.html'), tpHtml);
writeFile(path.join(tpDir, 'style.css'), tpCss);
writeFile(path.join(tpDir, 'audio.js'), tpAudio);
writeFile(path.join(tpDir, 'game.js'), tpGame);
copyThumbnailToIcon('tri-peaks-cyber-pyramid');
console.log('Game 65 (tri-peaks-cyber-pyramid) built successfully.');

// ============================================================================
// GAME 66: FREECELL NEO: QUANTUM CASCADE
// ============================================================================
console.log('Building Game 66: freecell-neo...');
const fcDir = path.join(gamesDir, 'freecell-neo');

const fcHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>FreeCell Neo: Quantum Cascade - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Quantum Deal</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Foundations</div><div id="foundVal" class="hud-val" style="color:#00ff88;">0 / 52 CARDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Free Cells</div><div id="freeCellsVal" class="hud-val" style="color:#00f0ff;">4 OPEN</div></div>
      <div class="hud-box"><div class="hud-lbl">Moves Made</div><div id="movesVal" class="hud-val" style="color:#ffd600;">0 MOVES</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">DEALS (1-45)</button>
      <button id="autoBtn" class="action-btn">AUTO FINISH</button>
      <button id="restartBtn" class="action-btn">RETRY DEAL</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT DEAL &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">FREECELL NEO</h1>
        <p id="overlayDesc">Solve open-card solitaire puzzles using four temporary free reserve cells across 45 numbered quantum challenge deals!</p>
        <button id="startBtn" class="glow-btn">INITIALIZE DEAL</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT FREECELL DEAL (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const fcCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #030a17; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(3,10,24,0.92); padding: 8px 16px; border-bottom: 2px solid #00e5ff; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #00e5ff; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(3,10,24,0.92); padding: 8px; border-top: 1px solid #142848; flex-wrap: wrap; }
.action-btn { background: #0c1c38; color: #00e5ff; border: 1px solid #00e5ff; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #00e5ff; color: #000; box-shadow: 0 0 10px #00e5ff; }
.next-btn { background: #76ff03; color: #000; border-color: #76ff03; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #76ff03; }
.overlay { position: absolute; inset: 0; background: rgba(2,5,15,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #07152d; border: 2px solid #00e5ff; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(0,229,255,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #00e5ff; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #b2ebf2; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #00e5ff; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #00e5ff; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #0f2244; border: 1px solid #1c3d75; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #00e5ff; color: #00e5ff; }
.lvl-btn.active { background: #00e5ff; color: #000; }`;

const fcAudio = `// Web Audio API procedural sound synthesis for FreeCell Neo
class SoundFx {
  constructor() {
    this.ctx = null;
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
  playMove() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(280, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(140, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playFoundationPing(rank = 1) {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    const f = 440 + rank * 45;
    osc.frequency.setValueAtTime(f, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.16, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.22);
  }
  playWinFanfare() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.1);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.1);
      osc.stop(this.ctx.currentTime + idx * 0.1 + 0.35);
    });
  }
}
window.sfx = new SoundFx();`;

const fcGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let moves = 0;
let freeCells = [null, null, null, null];
let foundations = [[], [], [], []];
let tableau = [[], [], [], [], [], [], [], []]; // 8 cascades
let invulnerable = true; // protection buffer against instant failure

const SUITS = ['♠', '♥', '♦', '♣'];
const SUIT_COLORS = { '♠': '#00e5ff', '♣': '#00e5ff', '♥': '#ff007f', '♦': '#ffd600' };
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let isDragging = false;
let dragCard = null;
let dragSource = null; // { type: 'cell'|'cascade', index: number }
let dragOffset = { x: 0, y: 0 };
let mouseX = 0, mouseY = 0;

let layout = {
  cardW: 70,
  cardH: 100,
  gap: 12,
  topY: 20,
  cascadeY: 145
};

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  
  layout.cardW = Math.min(75, Math.floor((canvas.width - 9 * 10) / 8));
  layout.cardH = Math.floor(layout.cardW * 1.4);
  layout.gap = Math.floor((canvas.width - 8 * layout.cardW) / 9);
  layout.topY = 20;
  layout.cascadeY = layout.topY + layout.cardH + 25;
}
window.addEventListener('resize', resizeCanvas);

function createDeck(seed) {
  const deck = [];
  for (let s of SUITS) {
    for (let r = 0; r < RANKS.length; r++) {
      deck.push({
        suit: s,
        rankVal: r + 1,
        rankStr: RANKS[r],
        id: s + RANKS[r]
      });
    }
  }
  let m = deck.length, t, i;
  let sVal = seed * 8901 + 45231;
  while (m) {
    sVal = (sVal * 8901 + 45231) % 233280;
    i = Math.floor((sVal / 233280) * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }
  return deck;
}

function initDeal(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  const deck = createDeck(lvl * 1337);
  freeCells = [null, null, null, null];
  foundations = [[], [], [], []];
  tableau = [[], [], [], [], [], [], [], []];
  moves = 0;
  document.getElementById('nextBtn').style.display = 'none';
  
  // Deal 52 cards across 8 cascades
  let col = 0;
  while (deck.length > 0) {
    tableau[col].push(deck.pop());
    col = (col + 1) % 8;
  }
  
  updateHud();
}

function updateHud() {
  const totalFound = foundations.reduce((acc, f) => acc + f.length, 0);
  document.getElementById('foundVal').innerText = totalFound + ' / 52 CARDS';
  const openCells = freeCells.filter(c => c === null).length;
  document.getElementById('freeCellsVal').innerText = openCells + ' OPEN';
  document.getElementById('movesVal').innerText = moves + ' MOVES';
  
  if (totalFound === 52) {
    window.sfx.playWinFanfare();
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function autoFinish() {
  let moved = false;
  // Try to move from free cells to foundation
  for (let i = 0; i < 4; i++) {
    const card = freeCells[i];
    if (card && tryMoveToFoundation(card, () => { freeCells[i] = null; })) {
      moved = true;
      break;
    }
  }
  // Try to move from cascade tops to foundation
  if (!moved) {
    for (let c = 0; c < 8; c++) {
      const col = tableau[c];
      if (col.length > 0) {
        const card = col[col.length - 1];
        if (tryMoveToFoundation(card, () => { col.pop(); })) {
          moved = true;
          break;
        }
      }
    }
  }
  if (moved) {
    moves++;
    updateHud();
  }
}

function tryMoveToFoundation(card, removeCallback) {
  for (let f = 0; f < 4; f++) {
    const found = foundations[f];
    if (found.length === 0) {
      if (card.rankVal === 1) { // Ace
        removeCallback();
        found.push(card);
        window.sfx.playFoundationPing(card.rankVal);
        return true;
      }
    } else {
      const top = found[found.length - 1];
      if (top.suit === card.suit && card.rankVal === top.rankVal + 1) {
        removeCallback();
        found.push(card);
        window.sfx.playFoundationPing(card.rankVal);
        return true;
      }
    }
  }
  return false;
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const w = layout.cardW;
  const h = layout.cardH;
  const g = layout.gap;
  
  // 4 Free Cells on Top-Left
  for (let i = 0; i < 4; i++) {
    const cx = g + i * (w + g);
    const cy = layout.topY;
    ctx.strokeStyle = currentTheme.primary;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(cx, cy, w, h);
    
    if (freeCells[i] && !(isDragging && dragSource?.type === 'cell' && dragSource?.index === i)) {
      drawCard(cx, cy, w, h, freeCells[i]);
    } else {
      ctx.fillStyle = 'rgba(0,229,255,0.1)';
      ctx.fillRect(cx, cy, w, h);
      ctx.fillStyle = '#668';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CELL ' + (i + 1), cx + w/2, cy + h/2);
    }
  }
  
  // 4 Foundations on Top-Right
  for (let f = 0; f < 4; f++) {
    const fx = canvas.width - (4 - f) * (w + g);
    const fy = layout.topY;
    ctx.strokeStyle = currentTheme.secondary;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(fx, fy, w, h);
    
    if (foundations[f].length > 0) {
      const card = foundations[f][foundations[f].length - 1];
      drawCard(fx, fy, w, h, card);
    } else {
      ctx.fillStyle = 'rgba(255,0,127,0.1)';
      ctx.fillRect(fx, fy, w, h);
      ctx.fillStyle = currentTheme.secondary;
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(SUITS[f], fx + w/2, fy + h/2 + 7);
    }
  }
  
  // 8 Tableau Cascades
  const cardOverlap = Math.min(26, Math.floor(h * 0.26));
  for (let c = 0; c < 8; c++) {
    const colX = g + c * (w + g);
    const colY = layout.cascadeY;
    
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.strokeRect(colX, colY, w, h);
    
    for (let r = 0; r < tableau[c].length; r++) {
      const card = tableau[c][r];
      if (isDragging && dragSource?.type === 'cascade' && dragSource?.col === c && dragSource?.card === card) continue;
      
      const cy = colY + r * cardOverlap;
      drawCard(colX, cy, w, h, card);
    }
  }
  
  // Render Dragging Card
  if (isDragging && dragCard) {
    drawCard(mouseX - dragOffset.x, mouseY - dragOffset.y, w, h, dragCard, true);
  }
  
  requestAnimationFrame(render);
}

function drawCard(x, y, w, h, card, dragging = false) {
  ctx.fillStyle = '#060f24';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = dragging ? '#ffffff' : (SUIT_COLORS[card.suit] || currentTheme.primary);
  ctx.lineWidth = dragging ? 2.5 : 1.5;
  ctx.strokeRect(x, y, w, h);
  
  const color = SUIT_COLORS[card.suit] || '#fff';
  ctx.fillStyle = color;
  ctx.font = 'bold ' + Math.floor(h * 0.16) + 'px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(card.rankStr, x + 5, y + h * 0.18);
  
  ctx.font = Math.floor(h * 0.15) + 'px sans-serif';
  ctx.fillText(card.suit, x + 5, y + h * 0.35);
  
  ctx.font = Math.floor(h * 0.3) + 'px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(card.suit, x + w/2, y + h * 0.65);
}

// Interaction
canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
  
  const w = layout.cardW;
  const h = layout.cardH;
  const g = layout.gap;
  
  // Check Free Cell Pick
  for (let i = 0; i < 4; i++) {
    const cx = g + i * (w + g);
    const cy = layout.topY;
    if (freeCells[i] && mouseX >= cx && mouseX <= cx + w && mouseY >= cy && mouseY <= cy + h) {
      isDragging = true;
      dragCard = freeCells[i];
      dragSource = { type: 'cell', index: i };
      dragOffset = { x: mouseX - cx, y: mouseY - cy };
      return;
    }
  }
  
  // Check Tableau Pick (bottom-most card of cascade)
  const cardOverlap = Math.min(26, Math.floor(h * 0.26));
  for (let c = 0; c < 8; c++) {
    const col = tableau[c];
    if (col.length === 0) continue;
    const colX = g + c * (w + g);
    const topIdx = col.length - 1;
    const cy = layout.cascadeY + topIdx * cardOverlap;
    
    if (mouseX >= colX && mouseX <= colX + w && mouseY >= cy && mouseY <= cy + h) {
      isDragging = true;
      dragCard = col[topIdx];
      dragSource = { type: 'cascade', col: c, card: dragCard };
      dragOffset = { x: mouseX - colX, y: mouseY - cy };
      return;
    }
  }
});

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

canvas.addEventListener('mouseup', () => {
  if (isDragging && dragCard) {
    handleDrop();
  }
  isDragging = false;
  dragCard = null;
  dragSource = null;
});

function handleDrop() {
  const w = layout.cardW;
  const h = layout.cardH;
  const g = layout.gap;
  
  // 1. Check drop to Foundation
  for (let f = 0; f < 4; f++) {
    const fx = canvas.width - (4 - f) * (w + g);
    const fy = layout.topY;
    if (mouseX >= fx && mouseX <= fx + w && mouseY >= fy && mouseY <= fy + h) {
      const found = foundations[f];
      let valid = false;
      if (found.length === 0 && dragCard.rankVal === 1) valid = true;
      else if (found.length > 0) {
        const top = found[found.length - 1];
        if (top.suit === dragCard.suit && dragCard.rankVal === top.rankVal + 1) valid = true;
      }
      if (valid) {
        removeCardFromSource();
        found.push(dragCard);
        moves++;
        window.sfx.playFoundationPing(dragCard.rankVal);
        updateHud();
        return;
      }
    }
  }
  
  // 2. Check drop to Free Cell
  for (let i = 0; i < 4; i++) {
    const cx = g + i * (w + g);
    const cy = layout.topY;
    if (mouseX >= cx && mouseX <= cx + w && mouseY >= cy && mouseY <= cy + h) {
      if (freeCells[i] === null) {
        removeCardFromSource();
        freeCells[i] = dragCard;
        moves++;
        window.sfx.playMove();
        updateHud();
        return;
      }
    }
  }
  
  // 3. Check drop to Tableau Cascades
  const cardOverlap = Math.min(26, Math.floor(h * 0.26));
  for (let c = 0; c < 8; c++) {
    const colX = g + c * (w + g);
    const col = tableau[c];
    const topY = layout.cascadeY + (col.length > 0 ? (col.length - 1) * cardOverlap : 0);
    
    if (mouseX >= colX && mouseX <= colX + w && mouseY >= layout.cascadeY && mouseY <= topY + h + 20) {
      if (dragSource.type === 'cascade' && dragSource.col === c) return; // Same
      
      let valid = false;
      if (col.length === 0) valid = true; // Any card can go to empty cascade
      else {
        const targetTop = col[col.length - 1];
        const isRed1 = dragCard.suit === '♥' || dragCard.suit === '♦';
        const isRed2 = targetTop.suit === '♥' || targetTop.suit === '♦';
        if (isRed1 !== isRed2 && targetTop.rankVal === dragCard.rankVal + 1) valid = true;
      }
      
      if (valid) {
        removeCardFromSource();
        col.push(dragCard);
        moves++;
        window.sfx.playMove();
        updateHud();
        return;
      }
    }
  }
}

function removeCardFromSource() {
  if (dragSource.type === 'cell') {
    freeCells[dragSource.index] = null;
  } else if (dragSource.type === 'cascade') {
    tableau[dragSource.col].pop();
  }
}

document.getElementById('autoBtn').addEventListener('click', autoFinish);
document.getElementById('restartBtn').addEventListener('click', () => initDeal(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initDeal(currentLevel + 1);
});

// Modal Setup
const levelGrid = document.getElementById('levelGrid');
THEMES.forEach((t, i) => {
  const btn = document.createElement('button');
  btn.className = 'lvl-btn' + (i === 0 ? ' active' : '');
  btn.innerText = t.id;
  btn.title = t.name;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    initDeal(t.id);
    document.getElementById('levelModal').style.display = 'none';
  });
  levelGrid.appendChild(btn);
});
document.getElementById('levelSelectBtn').addEventListener('click', () => {
  document.getElementById('levelModal').style.display = 'flex';
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  document.getElementById('levelModal').style.display = 'none';
});

resizeCanvas();
initDeal(1);
render();
`;

writeFile(path.join(fcDir, 'index.html'), fcHtml);
writeFile(path.join(fcDir, 'style.css'), fcCss);
writeFile(path.join(fcDir, 'audio.js'), fcAudio);
writeFile(path.join(fcDir, 'game.js'), fcGame);
copyThumbnailToIcon('freecell-neo');
console.log('Game 66 (freecell-neo) built successfully.');
