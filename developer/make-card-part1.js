/**
 * Next Games/Game — Card Category Part 1:
 * - cyber-solitaire (Game 61)
 * - neon-blackjack-2099 (Game 62)
 * - quantum-deckbuilder (Game 63)
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
// GAME 61: CYBER SOLITAIRE: DATA DECK STACKER
// ============================================================================
console.log('Building Game 61: cyber-solitaire...');
const csDir = path.join(gamesDir, 'cyber-solitaire');

const csHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyber Solitaire: Data Deck Stacker - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Cyber Table</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Score Target</div><div id="scoreVal" class="hud-val">0 / 500 PTS</div></div>
      <div class="hud-box"><div class="hud-lbl">Foundations</div><div id="foundVal" class="hud-val" style="color:#00ff88;">0 / 52 CARDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Moves / Time</div><div id="timeVal" class="hud-val" style="color:#ffd600;">00:00 (0 MOVES)</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">TABLES (1-45)</button>
      <button id="drawBtn" class="action-btn">DRAW [SPACE]</button>
      <button id="autoBtn" class="action-btn">AUTO FINISH</button>
      <button id="restartBtn" class="action-btn">NEW DEAL</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT TABLE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBER SOLITAIRE</h1>
        <p id="overlayDesc">Klondike Solitaire played with a 52-card holographic data deck across 45 staged tables. Stack all 4 foundations from Ace to King!</p>
        <button id="startBtn" class="glow-btn">ENTER CYBER TABLE</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT CYBER TABLE (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const csCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #040817; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(5,8,25,0.92); padding: 8px 16px; border-bottom: 2px solid #00f0ff; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #00f0ff; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; gap: 10px; background: rgba(5,8,25,0.92); padding: 8px; border-top: 1px solid #1a2a50; flex-wrap: wrap; }
.action-btn { background: #0b1530; color: #00f0ff; border: 1px solid #00f0ff; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #00f0ff; color: #000; box-shadow: 0 0 10px #00f0ff; }
.next-btn { background: #ff007f; color: #fff; border-color: #ff007f; }
.next-btn:hover { background: #fff; color: #ff007f; box-shadow: 0 0 12px #ff007f; }
.overlay { position: absolute; inset: 0; background: rgba(2,4,14,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #08122c; border: 2px solid #00f0ff; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(0,240,255,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #00f0ff; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #b0c4de; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #00f0ff; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #00f0ff; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #0c1836; border: 1px solid #1a3268; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #00f0ff; color: #00f0ff; }
.lvl-btn.active { background: #00f0ff; color: #000; }`;

const csAudio = `// Web Audio API procedural sound synthesis for Cyber Solitaire
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
  playCardSlide() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(300, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playCardFlip() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  playFoundationPing(note = 0) {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    const freqs = [523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5];
    const f = freqs[note % freqs.length];
    osc.frequency.setValueAtTime(f, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playWinFanfare() {
    this.init();
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.12);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.12 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.12);
      osc.stop(this.ctx.currentTime + idx * 0.12 + 0.35);
    });
  }
}
window.sfx = new SoundFx();`;

const csGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let score = 0;
let moves = 0;
let startTime = Date.now();
let timerInterval = null;
let gameWon = false;
let invulnerable = true; // protection buffer against instant failure

// Klondike card structures
const SUITS = ['♠', '♥', '♦', '♣'];
const SUIT_COLORS = { '♠': '#00f0ff', '♣': '#00f0ff', '♥': '#ff007f', '♦': '#ffd600' };
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

let stock = [];
let waste = [];
let foundations = [[], [], [], []];
let tableau = [[], [], [], [], [], [], []];

let dragCard = null;
let dragSource = null;
let dragCards = [];
let dragOffset = { x: 0, y: 0 };
let mouseX = 0, mouseY = 0;
let isDragging = false;

// Layout coordinates
let layout = {
  cardW: 80,
  cardH: 115,
  gap: 15,
  topY: 20,
  tableauY: 160
};

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  
  layout.cardW = Math.min(80, Math.floor((canvas.width - 8 * 12) / 7));
  layout.cardH = Math.floor(layout.cardW * 1.44);
  layout.gap = Math.floor((canvas.width - 7 * layout.cardW) / 8);
  layout.topY = 20;
  layout.tableauY = layout.topY + layout.cardH + 25;
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
        faceUp: false,
        id: s + RANKS[r]
      });
    }
  }
  // Deterministic seeded shuffle
  let m = deck.length, t, i;
  let sVal = seed * 9301 + 49297;
  while (m) {
    sVal = (sVal * 9301 + 49297) % 233280;
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
  document.getElementById('themeVal').innerText = currentTheme.id + ': ' + currentTheme.name;
  
  const deck = createDeck(lvl * 777);
  stock = [];
  waste = [];
  foundations = [[], [], [], []];
  tableau = [[], [], [], [], [], [], []];
  
  // Tableau deal (1 to 7 cards)
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row <= col; row++) {
      const card = deck.pop();
      if (row === col) card.faceUp = true;
      tableau[col].push(card);
    }
  }
  
  // Remaining into stock
  while (deck.length > 0) {
    stock.push(deck.pop());
  }
  
  score = 0;
  moves = 0;
  gameWon = false;
  startTime = Date.now();
  updateHud();
  document.getElementById('nextBtn').style.display = 'none';
}

function updateHud() {
  const target = 500;
  document.getElementById('scoreVal').innerText = score + ' / ' + target + ' PTS';
  let totalInFound = foundations.reduce((acc, f) => acc + f.length, 0);
  document.getElementById('foundVal').innerText = totalInFound + ' / 52 CARDS';
  
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');
  document.getElementById('timeVal').innerText = m + ':' + s + ' (' + moves + ' MOVES)';
  
  if (totalInFound === 52 || score >= target) {
    if (!gameWon) {
      gameWon = true;
      window.sfx.playWinFanfare();
      document.getElementById('nextBtn').style.display = 'inline-block';
    }
  }
}

function drawCard() {
  if (stock.length > 0) {
    const card = stock.pop();
    card.faceUp = true;
    waste.push(card);
    moves++;
    window.sfx.playCardSlide();
  } else {
    // Reset stock from waste
    while (waste.length > 0) {
      const card = waste.pop();
      card.faceUp = false;
      stock.push(card);
    }
    moves++;
    window.sfx.playCardSlide();
  }
  updateHud();
}

function autoFinish() {
  let moved = false;
  // Try to move top cards to foundations
  for (let c = 0; c < 7; c++) {
    if (tableau[c].length > 0) {
      const card = tableau[c][tableau[c].length - 1];
      if (card.faceUp && tryMoveToFoundation(card, tableau[c])) {
        moved = true;
        break;
      }
    }
  }
  if (!moved && waste.length > 0) {
    const card = waste[waste.length - 1];
    if (tryMoveToFoundation(card, waste)) {
      moved = true;
    }
  }
  if (moved) {
    moves++;
    score += 15;
    updateHud();
  }
}

function tryMoveToFoundation(card, sourceArr) {
  for (let f = 0; f < 4; f++) {
    const found = foundations[f];
    if (found.length === 0) {
      if (card.rankVal === 1) { // Ace
        sourceArr.pop();
        found.push(card);
        window.sfx.playFoundationPing(card.rankVal);
        revealTableauTop();
        return true;
      }
    } else {
      const top = found[found.length - 1];
      if (top.suit === card.suit && card.rankVal === top.rankVal + 1) {
        sourceArr.pop();
        found.push(card);
        window.sfx.playFoundationPing(card.rankVal);
        revealTableauTop();
        return true;
      }
    }
  }
  return false;
}

function revealTableauTop() {
  for (let c = 0; c < 7; c++) {
    if (tableau[c].length > 0) {
      const top = tableau[c][tableau[c].length - 1];
      if (!top.faceUp) {
        top.faceUp = true;
        score += 5;
        window.sfx.playCardFlip();
      }
    }
  }
}

// Canvas rendering
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Neon Table Edge Glow
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
  
  // Render Stock Slot
  const stockX = layout.gap;
  const stockY = layout.topY;
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 1.5;
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.strokeRect(stockX, stockY, layout.cardW, layout.cardH);
  ctx.fillRect(stockX, stockY, layout.cardW, layout.cardH);
  
  if (stock.length > 0) {
    drawCardBack(stockX, stockY, layout.cardW, layout.cardH);
  } else {
    ctx.fillStyle = '#666';
    ctx.font = '12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('RELOAD', stockX + layout.cardW/2, stockY + layout.cardH/2);
  }
  
  // Render Waste Slot
  const wasteX = stockX + layout.cardW + layout.gap;
  const wasteY = layout.topY;
  ctx.strokeRect(wasteX, wasteY, layout.cardW, layout.cardH);
  ctx.fillRect(wasteX, wasteY, layout.cardW, layout.cardH);
  if (waste.length > 0) {
    const card = waste[waste.length - 1];
    drawCardFront(wasteX, wasteY, layout.cardW, layout.cardH, card);
  }
  
  // Render 4 Foundations
  for (let f = 0; f < 4; f++) {
    const fx = canvas.width - (4 - f) * (layout.cardW + layout.gap);
    const fy = layout.topY;
    ctx.strokeStyle = currentTheme.secondary;
    ctx.strokeRect(fx, fy, layout.cardW, layout.cardH);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(fx, fy, layout.cardW, layout.cardH);
    
    if (foundations[f].length > 0) {
      const card = foundations[f][foundations[f].length - 1];
      drawCardFront(fx, fy, layout.cardW, layout.cardH, card);
    } else {
      ctx.fillStyle = currentTheme.secondary;
      ctx.font = '22px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(SUITS[f], fx + layout.cardW/2, fy + layout.cardH/2 + 8);
    }
  }
  
  // Render Tableau Columns
  const cardOverlap = Math.min(28, Math.floor(layout.cardH * 0.28));
  for (let col = 0; col < 7; col++) {
    const colX = layout.gap + col * (layout.cardW + layout.gap);
    const colY = layout.tableauY;
    
    // Empty slot border
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.strokeRect(colX, colY, layout.cardW, layout.cardH);
    
    for (let r = 0; r < tableau[col].length; r++) {
      const card = tableau[col][r];
      // If this card is currently being dragged, don't draw in column
      if (dragCards.includes(card)) continue;
      
      const cy = colY + r * cardOverlap;
      if (card.faceUp) {
        drawCardFront(colX, cy, layout.cardW, layout.cardH, card);
      } else {
        drawCardBack(colX, cy, layout.cardW, layout.cardH);
      }
    }
  }
  
  // Render Dragging Cards
  if (isDragging && dragCards.length > 0) {
    for (let i = 0; i < dragCards.length; i++) {
      const card = dragCards[i];
      const dx = mouseX - dragOffset.x;
      const dy = mouseY - dragOffset.y + i * cardOverlap;
      drawCardFront(dx, dy, layout.cardW, layout.cardH, card, true);
    }
  }
  
  requestAnimationFrame(render);
}

function drawCardBack(x, y, w, h) {
  ctx.fillStyle = '#0a1226';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);
  
  // Neon Cyber Pattern on Back
  ctx.strokeStyle = currentTheme.secondary;
  ctx.beginPath();
  ctx.moveTo(x + 10, y + 10);
  ctx.lineTo(x + w - 10, y + h - 10);
  ctx.moveTo(x + w - 10, y + 10);
  ctx.lineTo(x + 10, y + h - 10);
  ctx.stroke();
  
  ctx.strokeRect(x + w/4, y + h/4, w/2, h/2);
}

function drawCardFront(x, y, w, h, card, dragging = false) {
  ctx.fillStyle = '#060d1f';
  ctx.fillRect(x, y, w, h);
  
  ctx.strokeStyle = dragging ? '#ffffff' : (SUIT_COLORS[card.suit] || currentTheme.primary);
  ctx.lineWidth = dragging ? 2.5 : 1.5;
  ctx.strokeRect(x, y, w, h);
  
  const color = SUIT_COLORS[card.suit] || '#fff';
  ctx.fillStyle = color;
  ctx.font = 'bold ' + Math.floor(h * 0.16) + 'px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(card.rankStr, x + 6, y + h * 0.18);
  
  ctx.font = Math.floor(h * 0.15) + 'px sans-serif';
  ctx.fillText(card.suit, x + 6, y + h * 0.35);
  
  // Center Emblem
  ctx.font = Math.floor(h * 0.32) + 'px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(card.suit, x + w/2, y + h * 0.65);
}

// Interaction handling
canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
  
  // Check Stock Click
  const stockX = layout.gap;
  const stockY = layout.topY;
  if (mouseX >= stockX && mouseX <= stockX + layout.cardW && mouseY >= stockY && mouseY <= stockY + layout.cardH) {
    drawCard();
    return;
  }
  
  // Check Waste Drag
  const wasteX = stockX + layout.cardW + layout.gap;
  const wasteY = layout.topY;
  if (waste.length > 0 && mouseX >= wasteX && mouseX <= wasteX + layout.cardW && mouseY >= wasteY && mouseY <= wasteY + layout.cardH) {
    isDragging = true;
    dragSource = waste;
    dragCards = [waste[waste.length - 1]];
    dragOffset = { x: mouseX - wasteX, y: mouseY - wasteY };
    return;
  }
  
  // Check Tableau Drag
  const cardOverlap = Math.min(28, Math.floor(layout.cardH * 0.28));
  for (let c = 0; c < 7; c++) {
    const colX = layout.gap + c * (layout.cardW + layout.gap);
    const colY = layout.tableauY;
    const colArr = tableau[c];
    for (let r = colArr.length - 1; r >= 0; r--) {
      const cy = colY + r * cardOverlap;
      if (mouseX >= colX && mouseX <= colX + layout.cardW && mouseY >= cy && mouseY <= cy + layout.cardH) {
        const card = colArr[r];
        if (card.faceUp) {
          isDragging = true;
          dragSource = colArr;
          dragCards = colArr.slice(r);
          dragOffset = { x: mouseX - colX, y: mouseY - cy };
          return;
        }
      }
    }
  }
});

canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
});

canvas.addEventListener('mouseup', () => {
  if (isDragging && dragCards.length > 0) {
    handleDrop();
  }
  isDragging = false;
  dragCards = [];
  dragSource = null;
});

function handleDrop() {
  const movingCard = dragCards[0];
  
  // Check drop onto foundation (single card only)
  if (dragCards.length === 1) {
    for (let f = 0; f < 4; f++) {
      const fx = canvas.width - (4 - f) * (layout.cardW + layout.gap);
      const fy = layout.topY;
      if (mouseX >= fx && mouseX <= fx + layout.cardW && mouseY >= fy && mouseY <= fy + layout.cardH) {
        const found = foundations[f];
        let valid = false;
        if (found.length === 0 && movingCard.rankVal === 1) valid = true;
        else if (found.length > 0) {
          const top = found[found.length - 1];
          if (top.suit === movingCard.suit && movingCard.rankVal === top.rankVal + 1) valid = true;
        }
        if (valid) {
          dragSource.pop();
          found.push(movingCard);
          moves++;
          score += 20;
          window.sfx.playFoundationPing(movingCard.rankVal);
          revealTableauTop();
          updateHud();
          return;
        }
      }
    }
  }
  
  // Check drop onto Tableau columns
  const cardOverlap = Math.min(28, Math.floor(layout.cardH * 0.28));
  for (let c = 0; c < 7; c++) {
    const colX = layout.gap + c * (layout.cardW + layout.gap);
    const colY = layout.tableauY;
    const colArr = tableau[c];
    const topY = colY + (colArr.length > 0 ? (colArr.length - 1) * cardOverlap : 0);
    
    if (mouseX >= colX && mouseX <= colX + layout.cardW && mouseY >= colY && mouseY <= topY + layout.cardH + 20) {
      if (colArr === dragSource) return; // Dropped on same column
      
      let valid = false;
      if (colArr.length === 0) {
        if (movingCard.rankVal === 13) valid = true; // King on empty
      } else {
        const targetTop = colArr[colArr.length - 1];
        const isRed1 = movingCard.suit === '♥' || movingCard.suit === '♦';
        const isRed2 = targetTop.suit === '♥' || targetTop.suit === '♦';
        if (isRed1 !== isRed2 && targetTop.rankVal === movingCard.rankVal + 1) {
          valid = true;
        }
      }
      
      if (valid) {
        // Remove from source
        const removeCount = dragCards.length;
        dragSource.splice(dragSource.length - removeCount, removeCount);
        // Append to target
        dragCards.forEach(card => colArr.push(card));
        moves++;
        score += 10;
        window.sfx.playCardSlide();
        revealTableauTop();
        updateHud();
        return;
      }
    }
  }
}

// Controls
document.getElementById('drawBtn').addEventListener('click', drawCard);
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

// Keyboard
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    drawCard();
  }
});

resizeCanvas();
initDeal(1);
render();
`;

writeFile(path.join(csDir, 'index.html'), csHtml);
writeFile(path.join(csDir, 'style.css'), csCss);
writeFile(path.join(csDir, 'audio.js'), csAudio);
writeFile(path.join(csDir, 'game.js'), csGame);
copyThumbnailToIcon('cyber-solitaire');
console.log('Game 61 (cyber-solitaire) built successfully.');

// ============================================================================
// GAME 62: NEON BLACKJACK 2099: HIGH ROLLER MATRIX
// ============================================================================
console.log('Building Game 62: neon-blackjack-2099...');
const bjDir = path.join(gamesDir, 'neon-blackjack-2099');

const bjHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Neon Blackjack 2099: High Roller Matrix - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Casino Salon</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Bankroll Target</div><div id="bankrollVal" class="hud-val">$1,000 / $2,500</div></div>
      <div class="hud-box"><div class="hud-lbl">Current Bet</div><div id="betVal" class="hud-val" style="color:#ffd600;">$50</div></div>
      <div class="hud-box"><div class="hud-lbl">Streak / Status</div><div id="statusVal" class="hud-val" style="color:#00ff88;">PLACE BET</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SALONS (1-45)</button>
      <button id="chip10" class="chip-btn" data-val="10">$10</button>
      <button id="chip50" class="chip-btn" data-val="50">$50</button>
      <button id="chip100" class="chip-btn" data-val="100">$100</button>
      <button id="chip500" class="chip-btn" data-val="500">$500</button>
      <button id="dealBtn" class="action-btn deal-btn">DEAL</button>
      <button id="hitBtn" class="action-btn" disabled>HIT</button>
      <button id="standBtn" class="action-btn" disabled>STAND</button>
      <button id="doubleBtn" class="action-btn" disabled>DOUBLE</button>
      <button id="clearBtn" class="action-btn">CLEAR</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SALON &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">NEON BLACKJACK 2099</h1>
        <p id="overlayDesc">Challenge the high-roller dealer AI across 45 futuristic casino salons. Hit bankroll milestones to advance to higher stake VIP lounges!</p>
        <button id="startBtn" class="glow-btn">ENTER CASINO</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT CASINO SALON (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const bjCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #020914; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(3,10,24,0.92); padding: 8px 16px; border-bottom: 2px solid #39ff14; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #39ff14; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 8px; background: rgba(3,10,24,0.92); padding: 8px; border-top: 1px solid #1a3248; flex-wrap: wrap; }
.action-btn { background: #0a1f33; color: #39ff14; border: 1px solid #39ff14; padding: 8px 14px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover:not(:disabled) { background: #39ff14; color: #000; box-shadow: 0 0 10px #39ff14; }
.action-btn:disabled { opacity: 0.35; cursor: not-allowed; }
.chip-btn { background: #12243d; color: #ffd600; border: 2px dashed #ffd600; padding: 6px 12px; font-weight: bold; border-radius: 20px; cursor: pointer; font-size: 12px; }
.chip-btn:hover { background: #ffd600; color: #000; }
.deal-btn { background: #ffd600; color: #000; border-color: #ffd600; }
.deal-btn:hover { background: #fff; box-shadow: 0 0 12px #ffd600; }
.next-btn { background: #ff007f; color: #fff; border-color: #ff007f; }
.next-btn:hover { background: #fff; color: #ff007f; box-shadow: 0 0 12px #ff007f; }
.overlay { position: absolute; inset: 0; background: rgba(2,6,15,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #061628; border: 2px solid #39ff14; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(57,255,20,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #39ff14; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #b0d4c8; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #39ff14; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #39ff14; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #0c1f33; border: 1px solid #1a3c5e; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #39ff14; color: #39ff14; }
.lvl-btn.active { background: #39ff14; color: #000; }`;

const bjAudio = `// Web Audio API procedural sound synthesis for Neon Blackjack
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
  playChipClink() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
  playCardDeal() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.09);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.09);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }
  playWin() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
    });
  }
  playBust() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.28);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.28);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.28);
  }
}
window.sfx = new SoundFx();`;

const bjGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let bankroll = 1000;
let targetBankroll = 2500;
let currentBet = 50;
let dealerHand = [];
let playerHand = [];
let gameState = 'betting'; // 'betting', 'player_turn', 'dealer_turn', 'round_end'
let statusMsg = 'PLACE BET';
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

function initSalon(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  targetBankroll = 1000 + lvl * 1500;
  bankroll = Math.max(1000, bankroll);
  currentBet = Math.min(bankroll, 50 * lvl);
  dealerHand = [];
  playerHand = [];
  gameState = 'betting';
  statusMsg = 'PLACE YOUR BET & DEAL';
  updateControls();
  updateHud();
}

function updateHud() {
  document.getElementById('bankrollVal').innerText = '$' + bankroll.toLocaleString() + ' / $' + targetBankroll.toLocaleString();
  document.getElementById('betVal').innerText = '$' + currentBet.toLocaleString();
  document.getElementById('statusVal').innerText = statusMsg;
  
  if (bankroll >= targetBankroll) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  } else {
    document.getElementById('nextBtn').style.display = 'none';
  }
}

function updateControls() {
  const isBetting = gameState === 'betting';
  const isPlayer = gameState === 'player_turn';
  
  document.getElementById('dealBtn').disabled = !isBetting || currentBet <= 0 || currentBet > bankroll;
  document.getElementById('clearBtn').disabled = !isBetting;
  document.querySelectorAll('.chip-btn').forEach(b => b.disabled = !isBetting);
  
  document.getElementById('hitBtn').disabled = !isPlayer;
  document.getElementById('standBtn').disabled = !isPlayer;
  document.getElementById('doubleBtn').disabled = !isPlayer || playerHand.length !== 2 || bankroll < currentBet * 2;
}

function createRandomCard() {
  const s = SUITS[Math.floor(Math.random() * SUITS.length)];
  const rIdx = Math.floor(Math.random() * RANKS.length);
  let val = rIdx + 1;
  if (val > 10) val = 10;
  return {
    suit: s,
    rankStr: RANKS[rIdx],
    val: val,
    isAce: (val === 1)
  };
}

function getHandScore(hand) {
  let score = 0;
  let aces = 0;
  for (let c of hand) {
    if (c.isAce) {
      aces++;
      score += 11;
    } else {
      score += c.val;
    }
  }
  while (score > 21 && aces > 0) {
    score -= 10;
    aces--;
  }
  return score;
}

function deal() {
  if (currentBet > bankroll || currentBet <= 0) return;
  window.sfx.playCardDeal();
  
  dealerHand = [createRandomCard(), createRandomCard()];
  playerHand = [createRandomCard(), createRandomCard()];
  
  gameState = 'player_turn';
  statusMsg = 'HIT OR STAND?';
  
  const playerScore = getHandScore(playerHand);
  const dealerScore = getHandScore(dealerHand);
  
  // Natural Blackjack check
  if (playerScore === 21) {
    if (dealerScore === 21) {
      endRound('PUSH! BOTH HAVE BLACKJACK', 0);
    } else {
      endRound('BLACKJACK! 3:2 PAYOUT', Math.floor(currentBet * 1.5));
    }
    return;
  }
  
  updateControls();
  updateHud();
}

function hit() {
  if (gameState !== 'player_turn') return;
  playerHand.push(createRandomCard());
  window.sfx.playCardDeal();
  
  const pScore = getHandScore(playerHand);
  if (pScore > 21) {
    window.sfx.playBust();
    endRound('BUST! OVER 21 (-$' + currentBet + ')', -currentBet);
  } else if (pScore === 21) {
    stand();
  } else {
    updateControls();
    updateHud();
  }
}

function doubleDown() {
  if (gameState !== 'player_turn') return;
  currentBet *= 2;
  playerHand.push(createRandomCard());
  window.sfx.playCardDeal();
  
  const pScore = getHandScore(playerHand);
  if (pScore > 21) {
    window.sfx.playBust();
    endRound('BUST ON DOUBLE (-$' + currentBet + ')', -currentBet);
  } else {
    stand();
  }
}

function stand() {
  if (gameState !== 'player_turn') return;
  gameState = 'dealer_turn';
  updateControls();
  
  // Dealer hits soft 17
  const dealerInterval = setInterval(() => {
    let dScore = getHandScore(dealerHand);
    if (dScore < 17) {
      dealerHand.push(createRandomCard());
      window.sfx.playCardDeal();
    } else {
      clearInterval(dealerInterval);
      evaluateWinner();
    }
  }, 450);
}

function evaluateWinner() {
  const pScore = getHandScore(playerHand);
  const dScore = getHandScore(dealerHand);
  
  if (dScore > 21) {
    window.sfx.playWin();
    endRound('DEALER BUST! YOU WIN (+$' + currentBet + ')', currentBet);
  } else if (pScore > dScore) {
    window.sfx.playWin();
    endRound('YOU WIN! ' + pScore + ' vs ' + dScore + ' (+$' + currentBet + ')', currentBet);
  } else if (pScore < dScore) {
    window.sfx.playBust();
    endRound('DEALER WINS ' + dScore + ' vs ' + pScore + ' (-$' + currentBet + ')', -currentBet);
  } else {
    endRound('PUSH! BOTH SCORED ' + pScore, 0);
  }
}

function endRound(msg, netChange) {
  gameState = 'round_end';
  statusMsg = msg;
  bankroll += netChange;
  if (bankroll <= 0) {
    bankroll = 500; // Bailout protection
    statusMsg += ' [CASINO RECHARGED +$500]';
  }
  updateControls();
  updateHud();
  
  setTimeout(() => {
    if (gameState === 'round_end') {
      gameState = 'betting';
      updateControls();
      updateHud();
    }
  }, 1800);
}

// Chip management
document.querySelectorAll('.chip-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = parseInt(btn.dataset.val, 10);
    if (currentBet + val <= bankroll) {
      currentBet += val;
      window.sfx.playChipClink();
      updateHud();
      updateControls();
    }
  });
});

document.getElementById('clearBtn').addEventListener('click', () => {
  currentBet = 0;
  updateHud();
  updateControls();
});

document.getElementById('dealBtn').addEventListener('click', deal);
document.getElementById('hitBtn').addEventListener('click', hit);
document.getElementById('standBtn').addEventListener('click', stand);
document.getElementById('doubleBtn').addEventListener('click', doubleDown);

document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initSalon(currentLevel + 1);
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
    initSalon(t.id);
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

// Render function
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Neon Blackjack Arc
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(canvas.width / 2, canvas.height * 0.48, canvas.width * 0.42, canvas.height * 0.38, 0, Math.PI * 0.1, Math.PI * 0.9);
  ctx.stroke();
  
  const cardW = 70;
  const cardH = 100;
  
  // Dealer Section
  ctx.fillStyle = currentTheme.secondary;
  ctx.font = 'bold 14px monospace';
  ctx.textAlign = 'center';
  const dealerScoreStr = (gameState === 'player_turn') ? '?' : getHandScore(dealerHand);
  ctx.fillText('CYBER DEALER AI: [' + dealerScoreStr + ']', canvas.width / 2, 45);
  
  const dStartX = canvas.width / 2 - (dealerHand.length * (cardW + 12)) / 2;
  dealerHand.forEach((card, idx) => {
    const cx = dStartX + idx * (cardW + 12);
    const cy = 60;
    if (idx === 1 && gameState === 'player_turn') {
      drawHoloCardBack(cx, cy, cardW, cardH);
    } else {
      drawHoloCard(cx, cy, cardW, cardH, card);
    }
  });
  
  // Player Section
  const pScoreStr = getHandScore(playerHand);
  ctx.fillStyle = currentTheme.accent;
  ctx.fillText('PLAYER HAND: [' + pScoreStr + ']', canvas.width / 2, canvas.height * 0.52);
  
  const pStartX = canvas.width / 2 - (playerHand.length * (cardW + 12)) / 2;
  playerHand.forEach((card, idx) => {
    const cx = pStartX + idx * (cardW + 12);
    const cy = canvas.height * 0.56;
    drawHoloCard(cx, cy, cardW, cardH, card);
  });
  
  requestAnimationFrame(render);
}

function drawHoloCardBack(x, y, w, h) {
  ctx.fillStyle = '#061026';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, w, h);
  
  ctx.strokeStyle = currentTheme.secondary;
  ctx.strokeRect(x + 10, y + 10, w - 20, h - 20);
  ctx.fillStyle = currentTheme.secondary;
  ctx.font = '11px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('AI', x + w/2, y + h/2 + 4);
}

function drawHoloCard(x, y, w, h, card) {
  ctx.fillStyle = '#040d1e';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = SUIT_COLORS[card.suit] || currentTheme.primary;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, w, h);
  
  const color = SUIT_COLORS[card.suit] || '#fff';
  ctx.fillStyle = color;
  ctx.font = 'bold 15px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(card.rankStr, x + 6, y + 18);
  
  ctx.font = '14px sans-serif';
  ctx.fillText(card.suit, x + 6, y + 36);
  
  ctx.font = '28px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(card.suit, x + w/2, y + h * 0.68);
}

resizeCanvas();
initSalon(1);
render();
`;

writeFile(path.join(bjDir, 'index.html'), bjHtml);
writeFile(path.join(bjDir, 'style.css'), bjCss);
writeFile(path.join(bjDir, 'audio.js'), bjAudio);
writeFile(path.join(bjDir, 'game.js'), bjGame);
copyThumbnailToIcon('neon-blackjack-2099');
console.log('Game 62 (neon-blackjack-2099) built successfully.');

// ============================================================================
// GAME 63: QUANTUM DECKBUILDER: ROGUE CYBERPUNK CARDS
// ============================================================================
console.log('Building Game 63: quantum-deckbuilder...');
const qdDir = path.join(gamesDir, 'quantum-deckbuilder');

const qdHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Quantum Deckbuilder: Rogue Cyberpunk Cards - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Mainframe Floor</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Operative HP</div><div id="hpVal" class="hud-val" style="color:#00ff88;">50 / 50 HP (0 BLOCK)</div></div>
      <div class="hud-box"><div class="hud-lbl">Daemon Core HP</div><div id="bossHpVal" class="hud-val" style="color:#ff007f;">45 / 45 HP</div></div>
      <div class="hud-box"><div class="hud-lbl">Energy / Turn</div><div id="energyVal" class="hud-val" style="color:#ffd600;">3 / 3 EN</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">FLOORS (1-45)</button>
      <button id="endTurnBtn" class="action-btn end-btn">END TURN [SPACE]</button>
      <button id="restartBtn" class="action-btn">REBOOT</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT FLOOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">QUANTUM DECKBUILDER</h1>
        <p id="overlayDesc">Draft attack, defense, and utility programs into your deck to defeat rogue AI daemons across 45 procedural mainframe floor encounters!</p>
        <button id="startBtn" class="glow-btn">INFILTRATE MAINFRAME</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT MAINFRAME FLOOR (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const qdCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #060214; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(8,2,24,0.92); padding: 8px 16px; border-bottom: 2px solid #b388ff; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #b388ff; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(8,2,24,0.92); padding: 8px; border-top: 1px solid #281452; flex-wrap: wrap; }
.action-btn { background: #180838; color: #b388ff; border: 1px solid #b388ff; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #b388ff; color: #000; box-shadow: 0 0 10px #b388ff; }
.end-btn { background: #ffd600; color: #000; border-color: #ffd600; }
.end-btn:hover { background: #fff; box-shadow: 0 0 12px #ffd600; }
.next-btn { background: #ff007f; color: #fff; border-color: #ff007f; }
.next-btn:hover { background: #fff; color: #ff007f; box-shadow: 0 0 12px #ff007f; }
.overlay { position: absolute; inset: 0; background: rgba(4,1,14,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #12052b; border: 2px solid #b388ff; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(179,136,255,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #b388ff; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #d1c4e9; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #b388ff; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #b388ff; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #160738; border: 1px solid #331572; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #b388ff; color: #b388ff; }
.lvl-btn.active { background: #b388ff; color: #000; }`;

const qdAudio = `// Web Audio API procedural sound synthesis for Quantum Deckbuilder
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
  playLaserZap() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
  playShieldClank() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(520, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  playBossExplosion() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }
}
window.sfx = new SoundFx();`;

const qdGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let playerHp = 50;
let maxPlayerHp = 50;
let playerShield = 0; // shield buffer protection
let energy = 3;
let maxEnergy = 3;
let invulnerable = true; // protection buffer against instant failure

let bossHp = 45;
let maxBossHp = 45;
let bossShield = 0;
let bossIntent = { type: 'attack', val: 8 }; // 'attack', 'defend', 'buff'

// Card Templates
const CARD_TYPES = [
  { id: 'beam', name: 'Laser Beam', cost: 1, type: 'attack', val: 7, desc: 'Deal 7 DMG', color: '#ff007f' },
  { id: 'shield', name: 'Nano Barrier', cost: 1, type: 'defend', val: 6, desc: 'Gain 6 BLOCK', color: '#00f0ff' },
  { id: 'overclock', name: 'Overclock Strike', cost: 2, type: 'attack', val: 15, desc: 'Deal 15 DMG', color: '#ff3d00' },
  { id: 'patch', name: 'Firewall Patch', cost: 2, type: 'heal', val: 5, desc: 'Heal 5 & 5 BLOCK', color: '#39ff14' },
  { id: 'drain', name: 'Data Leech', cost: 1, type: 'drain', val: 5, desc: '5 DMG + Draw 1', color: '#b388ff' }
];

let drawPile = [];
let hand = [];
let discardPile = [];
let floorWon = false;

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initFloor(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  maxBossHp = 40 + lvl * 15;
  bossHp = maxBossHp;
  bossShield = 0;
  playerHp = Math.max(30, playerHp);
  playerShield = 0;
  energy = maxEnergy;
  floorWon = false;
  document.getElementById('nextBtn').style.display = 'none';
  
  // Build standard deck
  drawPile = [];
  discardPile = [];
  for (let i = 0; i < 4; i++) drawPile.push({ ...CARD_TYPES[0] }); // 4 Beams
  for (let i = 0; i < 4; i++) drawPile.push({ ...CARD_TYPES[1] }); // 4 Shields
  for (let i = 0; i < 2; i++) drawPile.push({ ...CARD_TYPES[2] }); // 2 Overclocks
  for (let i = 0; i < 2; i++) drawPile.push({ ...CARD_TYPES[3] }); // 2 Patches
  
  shuffle(drawPile);
  dealHand(5);
  planBossTurn();
  updateHud();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function dealHand(count) {
  hand = [];
  for (let i = 0; i < count; i++) {
    if (drawPile.length === 0) {
      drawPile = [...discardPile];
      discardPile = [];
      shuffle(drawPile);
    }
    if (drawPile.length > 0) {
      hand.push(drawPile.pop());
    }
  }
}

function updateHud() {
  document.getElementById('hpVal').innerText = playerHp + ' / ' + maxPlayerHp + ' HP (' + playerShield + ' BLOCK)';
  document.getElementById('bossHpVal').innerText = bossHp + ' / ' + maxBossHp + ' HP (' + bossShield + ' BLOCK)';
  document.getElementById('energyVal').innerText = energy + ' / ' + maxEnergy + ' EN';
  
  if (bossHp <= 0 && !floorWon) {
    floorWon = true;
    window.sfx.playBossExplosion();
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function planBossTurn() {
  const r = Math.random();
  if (r < 0.6) {
    bossIntent = { type: 'attack', val: 6 + Math.floor(currentLevel * 1.5) };
  } else if (r < 0.85) {
    bossIntent = { type: 'defend', val: 8 + currentLevel };
  } else {
    bossIntent = { type: 'buff', val: 12 + Math.floor(currentLevel * 1.8) };
  }
}

function playCard(index) {
  if (floorWon || index < 0 || index >= hand.length) return;
  const card = hand[index];
  if (energy < card.cost) return;
  
  energy -= card.cost;
  hand.splice(index, 1);
  discardPile.push(card);
  
  if (card.type === 'attack') {
    let dmg = card.val;
    if (bossShield > 0) {
      const absorbed = Math.min(bossShield, dmg);
      bossShield -= absorbed;
      dmg -= absorbed;
    }
    bossHp = Math.max(0, bossHp - dmg);
    window.sfx.playLaserZap();
  } else if (card.type === 'defend') {
    playerShield += card.val;
    window.sfx.playShieldClank();
  } else if (card.type === 'heal') {
    playerHp = Math.min(maxPlayerHp, playerHp + card.val);
    playerShield += card.val;
    window.sfx.playShieldClank();
  } else if (card.type === 'drain') {
    let dmg = card.val;
    if (bossShield > 0) {
      const absorbed = Math.min(bossShield, dmg);
      bossShield -= absorbed;
      dmg -= absorbed;
    }
    bossHp = Math.max(0, bossHp - dmg);
    window.sfx.playLaserZap();
    // Draw 1
    if (drawPile.length > 0) hand.push(drawPile.pop());
  }
  
  updateHud();
}

function endTurn() {
  if (floorWon) return;
  
  // Boss executes planned turn
  if (bossIntent.type === 'attack' || bossIntent.type === 'buff') {
    let dmg = bossIntent.val;
    if (playerShield > 0) {
      const absorbed = Math.min(playerShield, dmg);
      playerShield -= absorbed;
      dmg -= absorbed;
    }
    playerHp = Math.max(1, playerHp - dmg); // Multi-life grace buffer prevents 0 instant failure
    window.sfx.playLaserZap();
  } else if (bossIntent.type === 'defend') {
    bossShield += bossIntent.val;
    window.sfx.playShieldClank();
  }
  
  // Reset turn state
  energy = maxEnergy;
  playerShield = 0; // Shield resets at start of turn
  bossShield = 0;
  
  // Discard remaining hand & redraw 5
  while (hand.length > 0) discardPile.push(hand.pop());
  dealHand(5);
  planBossTurn();
  updateHud();
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Boss Daemon Avatar in Center
  const bX = canvas.width / 2;
  const bY = canvas.height * 0.28;
  
  ctx.fillStyle = '#1c0529';
  ctx.strokeStyle = currentTheme.secondary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.polygon = [[bX, bY - 45], [bX + 50, bY], [bX, bY + 45], [bX - 50, bY]];
  ctx.moveTo(bX, bY - 45);
  ctx.lineTo(bX + 50, bY);
  ctx.lineTo(bX, bY + 45);
  ctx.lineTo(bX - 50, bY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Boss Eye
  ctx.fillStyle = '#ff007f';
  ctx.beginPath();
  ctx.arc(bX, bY, 14, 0, Math.PI * 2);
  ctx.fill();
  
  // Boss Intent Indicator
  ctx.fillStyle = '#ffd600';
  ctx.font = 'bold 13px monospace';
  ctx.textAlign = 'center';
  let intentStr = 'INTENT: ' + bossIntent.type.toUpperCase() + ' (' + bossIntent.val + ')';
  ctx.fillText(intentStr, bX, bY + 68);
  
  // Cards in Hand
  const cardW = 90;
  const cardH = 135;
  const totalW = hand.length * (cardW + 12);
  const startX = (canvas.width - totalW) / 2;
  const startY = canvas.height - cardH - 20;
  
  hand.forEach((card, idx) => {
    const cx = startX + idx * (cardW + 12);
    const cy = startY;
    
    ctx.fillStyle = '#081026';
    ctx.fillRect(cx, cy, cardW, cardH);
    ctx.strokeStyle = card.color;
    ctx.lineWidth = 2;
    ctx.strokeRect(cx, cy, cardW, cardH);
    
    // Energy cost badge
    ctx.fillStyle = card.color;
    ctx.beginPath();
    ctx.arc(cx + 16, cy + 16, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(card.cost, cx + 16, cy + 20);
    
    // Card Title
    ctx.fillStyle = card.color;
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText(card.name, cx + cardW/2, cy + 42);
    
    // Card Desc
    ctx.fillStyle = '#e0f7fa';
    ctx.font = '10px monospace';
    ctx.fillText(card.desc, cx + cardW/2, cy + cardH - 24);
  });
  
  requestAnimationFrame(render);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const cardW = 90;
  const cardH = 135;
  const totalW = hand.length * (cardW + 12);
  const startX = (canvas.width - totalW) / 2;
  const startY = canvas.height - cardH - 20;
  
  hand.forEach((card, idx) => {
    const cx = startX + idx * (cardW + 12);
    const cy = startY;
    if (mx >= cx && mx <= cx + cardW && my >= cy && my <= cy + cardH) {
      playCard(idx);
    }
  });
});

document.getElementById('endTurnBtn').addEventListener('click', endTurn);
document.getElementById('restartBtn').addEventListener('click', () => initFloor(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initFloor(currentLevel + 1);
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
    initFloor(t.id);
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
    endTurn();
  }
});

resizeCanvas();
initFloor(1);
render();
`;

writeFile(path.join(qdDir, 'index.html'), qdHtml);
writeFile(path.join(qdDir, 'style.css'), qdCss);
writeFile(path.join(qdDir, 'audio.js'), qdAudio);
writeFile(path.join(qdDir, 'game.js'), qdGame);
copyThumbnailToIcon('quantum-deckbuilder');
console.log('Game 63 (quantum-deckbuilder) built successfully.');
