/**
 * Next Games/Game — Card Category Part 3:
 * - spider-protocol (Game 67)
 * - cyber-baccarat (Game 68)
 * - elemental-card-duel (Game 69)
 * - cyber-poker (Game 70)
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
// GAME 67: SPIDER PROTOCOL: EIGHT-LEGGED DATA SORTER
// ============================================================================
console.log('Building Game 67: spider-protocol...');
const spDir = path.join(gamesDir, 'spider-protocol');

const spHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Spider Protocol: Eight-Legged Data Sorter - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Spider Protocol</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Suits Cleared</div><div id="suitsVal" class="hud-val" style="color:#00ff88;">0 / 8 SUITS</div></div>
      <div class="hud-box"><div class="hud-lbl">Stock Rows</div><div id="stockVal" class="hud-val" style="color:#00f0ff;">5 DEALS REMAINING</div></div>
      <div class="hud-box"><div class="hud-lbl">Moves Made</div><div id="movesVal" class="hud-val" style="color:#ffd600;">0 MOVES</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">PROTOCOLS (1-45)</button>
      <button id="dealBtn" class="action-btn deal-btn">DEAL NEW ROW [SPACE]</button>
      <button id="restartBtn" class="action-btn">RESET</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT PROTOCOL &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">SPIDER PROTOCOL</h1>
        <p id="overlayDesc">Sort cascading card sequences from King down to Ace to assemble full suits across 45 stages scaling from 1 to 4 suits!</p>
        <button id="startBtn" class="glow-btn">INITIATE SORTER</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT SPIDER PROTOCOL (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const spCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #070114; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(9,2,24,0.92); padding: 8px 16px; border-bottom: 2px solid #e040fb; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #e040fb; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(9,2,24,0.92); padding: 8px; border-top: 1px solid #380d4f; flex-wrap: wrap; }
.action-btn { background: #1c0636; color: #e040fb; border: 1px solid #e040fb; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #e040fb; color: #000; box-shadow: 0 0 10px #e040fb; }
.deal-btn { background: #00f0ff; color: #000; border-color: #00f0ff; }
.deal-btn:hover { background: #fff; box-shadow: 0 0 12px #00f0ff; }
.next-btn { background: #39ff14; color: #000; border-color: #39ff14; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #39ff14; }
.overlay { position: absolute; inset: 0; background: rgba(3,1,10,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #140428; border: 2px solid #e040fb; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(224,64,251,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #e040fb; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #eed5fc; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #e040fb; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #e040fb; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #1c0836; border: 1px solid #43167a; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #e040fb; color: #e040fb; }
.lvl-btn.active { background: #e040fb; color: #000; }`;

const spAudio = `// Web Audio API procedural sound synthesis for Spider Protocol
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
  playCardMove() {
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
  playSuitComplete() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.3);
    });
  }
}
window.sfx = new SoundFx();`;

const spGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let moves = 0;
let suitsCompleted = 0;
let stock = [];
let columns = [[], [], [], [], [], [], [], [], [], []]; // 10 columns
let invulnerable = true; // protection buffer against instant failure

const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const SUIT_COLORS = { '♠': '#00f0ff', '♣': '#00f0ff', '♥': '#ff007f', '♦': '#ffd600' };

let isDragging = false;
let dragCards = [];
let dragSourceCol = -1;
let dragOffset = { x: 0, y: 0 };
let mouseX = 0, mouseY = 0;

let layout = {
  cardW: 55,
  cardH: 80,
  gap: 8,
  topY: 20
};

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  
  layout.cardW = Math.min(60, Math.floor((canvas.width - 11 * 6) / 10));
  layout.cardH = Math.floor(layout.cardW * 1.4);
  layout.gap = Math.floor((canvas.width - 10 * layout.cardW) / 11);
}
window.addEventListener('resize', resizeCanvas);

function createSpiderDeck(lvl) {
  // 1-15: 1 suit (♠)
  // 16-30: 2 suits (♠, ♥)
  // 31-45: 4 suits (♠, ♥, ♦, ♣)
  let activeSuits = ['♠'];
  if (lvl > 15 && lvl <= 30) activeSuits = ['♠', '♥'];
  else if (lvl > 30) activeSuits = ['♠', '♥', '♦', '♣'];
  
  const deck = [];
  // 104 cards total = 8 full decks of 13 ranks
  for (let i = 0; i < 8; i++) {
    const s = activeSuits[i % activeSuits.length];
    for (let r = 0; r < 13; r++) {
      deck.push({
        suit: s,
        rankVal: r + 1,
        rankStr: RANKS[r],
        faceUp: false,
        id: s + RANKS[r] + '_' + i
      });
    }
  }
  
  // Seeded shuffle
  for (let m = deck.length - 1; m > 0; m--) {
    const j = Math.floor(Math.random() * (m + 1));
    [deck[m], deck[j]] = [deck[j], deck[m]];
  }
  return deck;
}

function initProtocol(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  const deck = createSpiderDeck(lvl);
  columns = [[], [], [], [], [], [], [], [], [], []];
  suitsCompleted = 0;
  moves = 0;
  document.getElementById('nextBtn').style.display = 'none';
  
  // Deal initial 54 cards across 10 columns:
  // First 4 columns get 6 cards (5 down, 1 up), other 6 columns get 5 cards (4 down, 1 up)
  for (let c = 0; c < 10; c++) {
    const count = (c < 4) ? 6 : 5;
    for (let r = 0; r < count; r++) {
      const card = deck.pop();
      if (r === count - 1) card.faceUp = true;
      columns[c].push(card);
    }
  }
  
  // Remaining 50 cards in stock (5 deals of 10 cards each)
  stock = deck;
  updateHud();
}

function updateHud() {
  document.getElementById('suitsVal').innerText = suitsCompleted + ' / 8 SUITS';
  document.getElementById('stockVal').innerText = Math.floor(stock.length / 10) + ' DEALS REMAINING';
  document.getElementById('movesVal').innerText = moves + ' MOVES';
  
  if (suitsCompleted === 8) {
    window.sfx.playSuitComplete();
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function dealRow() {
  if (stock.length < 10) return;
  for (let c = 0; c < 10; c++) {
    const card = stock.pop();
    card.faceUp = true;
    columns[c].push(card);
  }
  moves++;
  window.sfx.playCardMove();
  checkCompletedSuits();
  updateHud();
}

function checkCompletedSuits() {
  for (let c = 0; c < 10; c++) {
    const col = columns[c];
    if (col.length < 13) continue;
    
    // Check if the last 13 cards form K down to A of same suit
    let isComplete = true;
    const targetSuit = col[col.length - 1].suit;
    for (let i = 0; i < 13; i++) {
      const card = col[col.length - 1 - i];
      if (!card.faceUp || card.suit !== targetSuit || card.rankVal !== i + 1) {
        isComplete = false;
        break;
      }
    }
    
    if (isComplete) {
      // Remove 13 cards
      col.splice(col.length - 13, 13);
      suitsCompleted++;
      window.sfx.playSuitComplete();
      
      // Reveal new top card if needed
      if (col.length > 0 && !col[col.length - 1].faceUp) {
        col[col.length - 1].faceUp = true;
      }
    }
  }
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const w = layout.cardW;
  const h = layout.cardH;
  const g = layout.gap;
  const overlap = Math.min(22, Math.floor(h * 0.24));
  
  for (let c = 0; c < 10; c++) {
    const colX = g + c * (w + g);
    const colY = layout.topY;
    
    // Slot outline
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.strokeRect(colX, colY, w, h);
    
    for (let r = 0; r < columns[c].length; r++) {
      const card = columns[c][r];
      if (isDragging && dragSourceCol === c && dragCards.includes(card)) continue;
      
      const cy = colY + r * overlap;
      if (card.faceUp) {
        drawCard(colX, cy, w, h, card);
      } else {
        drawCardBack(colX, cy, w, h);
      }
    }
  }
  
  // Render Dragging Cards
  if (isDragging && dragCards.length > 0) {
    dragCards.forEach((c, idx) => {
      const dx = mouseX - dragOffset.x;
      const dy = mouseY - dragOffset.y + idx * overlap;
      drawCard(dx, dy, w, h, c, true);
    });
  }
  
  requestAnimationFrame(render);
}

function drawCardBack(x, y, w, h) {
  ctx.fillStyle = '#060d21';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(x, y, w, h);
  ctx.strokeStyle = currentTheme.secondary;
  ctx.strokeRect(x + 5, y + 5, w - 10, h - 10);
}

function drawCard(x, y, w, h, card, dragging = false) {
  ctx.fillStyle = '#050f24';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = dragging ? '#ffffff' : (SUIT_COLORS[card.suit] || currentTheme.primary);
  ctx.lineWidth = dragging ? 2.5 : 1.5;
  ctx.strokeRect(x, y, w, h);
  
  const color = SUIT_COLORS[card.suit] || '#fff';
  ctx.fillStyle = color;
  ctx.font = 'bold ' + Math.floor(h * 0.16) + 'px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(card.rankStr, x + 4, y + h * 0.18);
  
  ctx.font = Math.floor(h * 0.15) + 'px sans-serif';
  ctx.fillText(card.suit, x + 4, y + h * 0.35);
  
  ctx.font = Math.floor(h * 0.32) + 'px sans-serif';
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
  const overlap = Math.min(22, Math.floor(h * 0.24));
  
  for (let c = 0; c < 10; c++) {
    const col = columns[c];
    if (col.length === 0) continue;
    const colX = g + c * (w + g);
    
    for (let r = col.length - 1; r >= 0; r--) {
      const cy = layout.topY + r * overlap;
      if (mouseX >= colX && mouseX <= colX + w && mouseY >= cy && mouseY <= cy + h) {
        const card = col[r];
        if (!card.faceUp) return;
        
        // Verify that all cards below 'r' in this column form a valid same-suit sequence descending by 1
        let validSeq = true;
        for (let k = r; k < col.length - 1; k++) {
          if (col[k].suit !== col[k + 1].suit || col[k].rankVal !== col[k + 1].rankVal + 1) {
            validSeq = false;
            break;
          }
        }
        if (validSeq) {
          isDragging = true;
          dragSourceCol = c;
          dragCards = col.slice(r);
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
  dragSourceCol = -1;
});

function handleDrop() {
  const w = layout.cardW;
  const h = layout.cardH;
  const g = layout.gap;
  const overlap = Math.min(22, Math.floor(h * 0.24));
  
  for (let c = 0; c < 10; c++) {
    const colX = g + c * (w + g);
    const col = columns[c];
    const topY = layout.topY + (col.length > 0 ? (col.length - 1) * overlap : 0);
    
    if (mouseX >= colX && mouseX <= colX + w && mouseY >= layout.topY && mouseY <= topY + h + 20) {
      if (dragSourceCol === c) return; // Dropped on self
      
      let valid = false;
      const movingTop = dragCards[0];
      if (col.length === 0) {
        valid = true; // Any sequence can go to empty column
      } else {
        const targetCard = col[col.length - 1];
        if (targetCard.rankVal === movingTop.rankVal + 1) {
          valid = true;
        }
      }
      
      if (valid) {
        // Move cards
        const sourceCol = columns[dragSourceCol];
        sourceCol.splice(sourceCol.length - dragCards.length, dragCards.length);
        dragCards.forEach(card => col.push(card));
        moves++;
        window.sfx.playCardMove();
        
        // Reveal uncovered top card in source
        if (sourceCol.length > 0 && !sourceCol[sourceCol.length - 1].faceUp) {
          sourceCol[sourceCol.length - 1].faceUp = true;
        }
        
        checkCompletedSuits();
        updateHud();
        return;
      }
    }
  }
}

document.getElementById('dealBtn').addEventListener('click', dealRow);
document.getElementById('restartBtn').addEventListener('click', () => initProtocol(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initProtocol(currentLevel + 1);
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
    initProtocol(t.id);
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
    dealRow();
  }
});

resizeCanvas();
initProtocol(1);
render();
`;

writeFile(path.join(spDir, 'index.html'), spHtml);
writeFile(path.join(spDir, 'style.css'), spCss);
writeFile(path.join(spDir, 'audio.js'), spAudio);
writeFile(path.join(spDir, 'game.js'), spGame);
copyThumbnailToIcon('spider-protocol');
console.log('Game 67 (spider-protocol) built successfully.');

// ============================================================================
// GAME 68: CYBER BACCARAT: QUANTUM HIGH STAKES
// ============================================================================
console.log('Building Game 68: cyber-baccarat...');
const cbDir = path.join(gamesDir, 'cyber-baccarat');

const cbHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyber Baccarat: Quantum High Stakes - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">VIP Salon</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Bankroll Target</div><div id="bankrollVal" class="hud-val">$2,000 / $5,000</div></div>
      <div class="hud-box"><div class="hud-lbl">Current Wager</div><div id="wagerVal" class="hud-val" style="color:#ffd700;">$100 (PLAYER)</div></div>
      <div class="hud-box"><div class="hud-lbl">Shoe Outcome</div><div id="outcomeVal" class="hud-val" style="color:#00ff88;">PLACE BET</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SALONS (1-45)</button>
      <button id="betPlayerBtn" class="action-btn bet-btn active" data-side="player">BET PLAYER (1:1)</button>
      <button id="betBankerBtn" class="action-btn bet-btn" data-side="banker">BET BANKER (0.95:1)</button>
      <button id="betTieBtn" class="action-btn bet-btn" data-side="tie">BET TIE (8:1)</button>
      <button id="dealBtn" class="action-btn deal-btn">DEAL HAND [SPACE]</button>
      <button id="restartBtn" class="action-btn">CLEAR</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SALON &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBER BACCARAT</h1>
        <p id="overlayDesc">High-roller Punto Banco baccarat in 45 luxurious futuristic VIP salons. Bet on Player, Banker, or Tie and reach bankroll targets!</p>
        <button id="startBtn" class="glow-btn">ENTER VIP SALON</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT VIP SALON (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const cbCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #080d1a; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(5,11,24,0.92); padding: 8px 16px; border-bottom: 2px solid #ffd700; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ffd700; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 8px; background: rgba(5,11,24,0.92); padding: 8px; border-top: 1px solid #1c3258; flex-wrap: wrap; }
.action-btn { background: #0f1d38; color: #ffd700; border: 1px solid #ffd700; padding: 8px 14px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ffd700; color: #000; box-shadow: 0 0 10px #ffd700; }
.bet-btn.active { background: #ffd700; color: #000; box-shadow: 0 0 12px #ffd700; }
.deal-btn { background: #00f0ff; color: #000; border-color: #00f0ff; }
.deal-btn:hover { background: #fff; box-shadow: 0 0 12px #00f0ff; }
.next-btn { background: #39ff14; color: #000; border-color: #39ff14; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #39ff14; }
.overlay { position: absolute; inset: 0; background: rgba(2,6,15,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #0c1833; border: 2px solid #ffd700; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,215,0,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ffd700; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #d0e1fd; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ffd700; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ffd700; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #0f2244; border: 1px solid #1c3d75; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ffd700; color: #ffd700; }
.lvl-btn.active { background: #ffd700; color: #000; }`;

const cbAudio = `// Web Audio API procedural sound synthesis for Cyber Baccarat
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
  playCardDeal() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(350, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playWin() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.3);
    });
  }
  playLoss() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
}
window.sfx = new SoundFx();`;

const cbGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let bankroll = 2000;
let targetBankroll = 5000;
let betAmount = 100;
let chosenSide = 'player'; // 'player', 'banker', 'tie'
let statusOutcome = 'SELECT SIDE & DEAL';
let invulnerable = true; // protection buffer against instant failure

let playerCards = [];
let bankerCards = [];

const SUITS = ['♠', '♥', '♦', '♣'];
const SUIT_COLORS = { '♠': '#00f0ff', '♣': '#00f0ff', '♥': '#ff007f', '♦': '#ffd600' };
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function createCard() {
  const s = SUITS[Math.floor(Math.random() * SUITS.length)];
  const rIdx = Math.floor(Math.random() * RANKS.length);
  let val = rIdx + 1;
  if (val >= 10) val = 0; // 10, J, Q, K = 0 points in Baccarat
  return {
    suit: s,
    rankStr: RANKS[rIdx],
    val: val
  };
}

function calculateHandScore(hand) {
  const total = hand.reduce((acc, c) => acc + c.val, 0);
  return total % 10;
}

function initSalon(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  targetBankroll = 2000 + lvl * 2000;
  bankroll = Math.max(1500, bankroll);
  betAmount = 100 * lvl;
  playerCards = [];
  bankerCards = [];
  statusOutcome = 'PLACE WAGER & DEAL';
  document.getElementById('nextBtn').style.display = 'none';
  updateHud();
}

function updateHud() {
  document.getElementById('bankrollVal').innerText = '$' + bankroll.toLocaleString() + ' / $' + targetBankroll.toLocaleString();
  document.getElementById('wagerVal').innerText = '$' + betAmount.toLocaleString() + ' (' + chosenSide.toUpperCase() + ')';
  document.getElementById('outcomeVal').innerText = statusOutcome;
  
  if (bankroll >= targetBankroll) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function dealBaccarat() {
  if (betAmount > bankroll) {
    betAmount = Math.max(100, Math.floor(bankroll / 2));
  }
  window.sfx.playCardDeal();
  
  playerCards = [createCard(), createCard()];
  bankerCards = [createCard(), createCard()];
  
  let pScore = calculateHandScore(playerCards);
  let bScore = calculateHandScore(bankerCards);
  
  // Standard Punto Banco Rules
  // 1. Natural 8 or 9
  if (pScore >= 8 || bScore >= 8) {
    finalizeBaccarat(pScore, bScore, 'NATURAL!');
    return;
  }
  
  // 2. Player 3rd card
  let pThird = null;
  if (pScore <= 5) {
    pThird = createCard();
    playerCards.push(pThird);
    pScore = calculateHandScore(playerCards);
  }
  
  // 3. Banker 3rd card rule
  if (!pThird) {
    if (bScore <= 5) {
      bankerCards.push(createCard());
      bScore = calculateHandScore(bankerCards);
    }
  } else {
    const p3Val = pThird.val;
    let bDraw = false;
    if (bScore <= 2) bDraw = true;
    else if (bScore === 3 && p3Val !== 8) bDraw = true;
    else if (bScore === 4 && [2,3,4,5,6,7].includes(p3Val)) bDraw = true;
    else if (bScore === 5 && [4,5,6,7].includes(p3Val)) bDraw = true;
    else if (bScore === 6 && [6,7].includes(p3Val)) bDraw = true;
    
    if (bDraw) {
      bankerCards.push(createCard());
      bScore = calculateHandScore(bankerCards);
    }
  }
  
  finalizeBaccarat(pScore, bScore, '');
}

function finalizeBaccarat(pScore, bScore, note) {
  let winner = 'tie';
  if (pScore > bScore) winner = 'player';
  else if (bScore > pScore) winner = 'banker';
  
  let netGain = 0;
  let resultStr = '';
  
  if (winner === chosenSide) {
    window.sfx.playWin();
    if (chosenSide === 'player') netGain = betAmount;
    else if (chosenSide === 'banker') netGain = Math.floor(betAmount * 0.95);
    else if (chosenSide === 'tie') netGain = betAmount * 8;
    resultStr = 'YOU WIN (+' + netGain + ')! ';
  } else {
    window.sfx.playLoss();
    netGain = -betAmount;
    resultStr = 'YOU LOST (-' + betAmount + ')! ';
  }
  
  bankroll += netGain;
  if (bankroll <= 0) bankroll = 500; // Multi-life protection buffer
  
  statusOutcome = resultStr + winner.toUpperCase() + ' WON (' + pScore + ' vs ' + bScore + ') ' + note;
  updateHud();
}

// Controls
document.querySelectorAll('.bet-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bet-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    chosenSide = btn.dataset.side;
    updateHud();
  });
});

document.getElementById('dealBtn').addEventListener('click', dealBaccarat);
document.getElementById('restartBtn').addEventListener('click', () => initSalon(currentLevel));
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

// Canvas Render
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Baccarat Oval Table
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(canvas.width / 2, canvas.height * 0.46, canvas.width * 0.44, canvas.height * 0.36, 0, 0, Math.PI * 2);
  ctx.stroke();
  
  const cardW = 65;
  const cardH = 95;
  
  // Player Side (Left)
  const pScore = calculateHandScore(playerCards);
  ctx.fillStyle = '#00f0ff';
  ctx.font = 'bold 15px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('PLAYER HAND [' + pScore + ']', canvas.width * 0.32, 70);
  
  playerCards.forEach((c, idx) => {
    const cx = canvas.width * 0.32 - (playerCards.length * (cardW + 10))/2 + idx * (cardW + 10);
    const cy = 90;
    drawCard(cx, cy, cardW, cardH, c);
  });
  
  // Banker Side (Right)
  const bScore = calculateHandScore(bankerCards);
  ctx.fillStyle = '#ff1744';
  ctx.fillText('BANKER HAND [' + bScore + ']', canvas.width * 0.68, 70);
  
  bankerCards.forEach((c, idx) => {
    const cx = canvas.width * 0.68 - (bankerCards.length * (cardW + 10))/2 + idx * (cardW + 10);
    const cy = 90;
    drawCard(cx, cy, cardW, cardH, c);
  });
  
  requestAnimationFrame(render);
}

function drawCard(x, y, w, h, card) {
  ctx.fillStyle = '#050e24';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = SUIT_COLORS[card.suit] || currentTheme.primary;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, w, h);
  
  const color = SUIT_COLORS[card.suit] || '#fff';
  ctx.fillStyle = color;
  ctx.font = 'bold 14px monospace';
  ctx.textAlign = 'left';
  ctx.fillText(card.rankStr, x + 5, y + 17);
  
  ctx.font = '13px sans-serif';
  ctx.fillText(card.suit, x + 5, y + 33);
  
  ctx.font = '26px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(card.suit, x + w/2, y + h * 0.68);
}

resizeCanvas();
initSalon(1);
render();
`;

writeFile(path.join(cbDir, 'index.html'), cbHtml);
writeFile(path.join(cbDir, 'style.css'), cbCss);
writeFile(path.join(cbDir, 'audio.js'), cbAudio);
writeFile(path.join(cbDir, 'game.js'), cbGame);
copyThumbnailToIcon('cyber-baccarat');
console.log('Game 68 (cyber-baccarat) built successfully.');

// ============================================================================
// GAME 69: ELEMENTAL CARD DUEL: NANO ELEMENTALISTS
// ============================================================================
console.log('Building Game 69: elemental-card-duel...');
const edDir = path.join(gamesDir, 'elemental-card-duel');

const edHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Elemental Card Duel: Nano Elementalists - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Tactical Arena</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Player Cards</div><div id="playerVal" class="hud-val" style="color:#00e5ff;">5 BLUE CARDS</div></div>
      <div class="hud-box"><div class="hud-lbl">AI Cards</div><div id="aiVal" class="hud-val" style="color:#ff3d00;">5 RED CARDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Turn / Status</div><div id="statusVal" class="hud-val" style="color:#ffd600;">YOUR TURN</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">ARENAS (1-45)</button>
      <button id="restartBtn" class="action-btn">REMATCH</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT ARENA &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">ELEMENTAL CARD DUEL</h1>
        <p id="overlayDesc">Place directional cards on a 3x3 tactical grid to capture adjacent enemy cards across 45 elemental arena matches!</p>
        <button id="startBtn" class="glow-btn">ENTER DUEL</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT TACTICAL ARENA (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const edCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #060914; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(5,9,22,0.92); padding: 8px 16px; border-bottom: 2px solid #ff3d00; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ff3d00; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(5,9,22,0.92); padding: 8px; border-top: 1px solid #281432; flex-wrap: wrap; }
.action-btn { background: #180a22; color: #ff3d00; border: 1px solid #ff3d00; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ff3d00; color: #000; box-shadow: 0 0 10px #ff3d00; }
.next-btn { background: #00e5ff; color: #000; border-color: #00e5ff; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00e5ff; }
.overlay { position: absolute; inset: 0; background: rgba(2,4,12,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #12071f; border: 2px solid #ff3d00; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,61,0,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ff3d00; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #fbe9e7; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ff3d00; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ff3d00; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #1a0a2a; border: 1px solid #4a1570; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ff3d00; color: #ff3d00; }
.lvl-btn.active { background: #ff3d00; color: #000; }`;

const edAudio = `// Web Audio API procedural sound synthesis for Elemental Card Duel
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
  playPlaceCard() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(260, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  playCardFlip() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
  playWin() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.3);
    });
  }
}
window.sfx = new SoundFx();`;

const edGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let board = Array(9).fill(null); // 3x3 board
let playerHand = [];
let aiHand = [];
let selectedPlayerCardIdx = 0;
let currentTurn = 'player'; // 'player' or 'ai'
let duelState = 'playing'; // 'playing' or 'ended'
let invulnerable = true; // protection buffer against instant failure

const ELEMENTS = ['🔥', '💧', '⚡', '🌿', '🌪️'];

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function generateCard(owner) {
  // 4 directional values: top, right, bottom, left (1 to 9)
  const elem = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
  return {
    owner: owner, // 'player' or 'ai'
    top: Math.floor(Math.random() * 8) + 2,
    right: Math.floor(Math.random() * 8) + 2,
    bottom: Math.floor(Math.random() * 8) + 2,
    left: Math.floor(Math.random() * 8) + 2,
    elem: elem
  };
}

function initArena(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  board = Array(9).fill(null);
  playerHand = [];
  aiHand = [];
  for (let i = 0; i < 5; i++) {
    playerHand.push(generateCard('player'));
    aiHand.push(generateCard('ai'));
  }
  selectedPlayerCardIdx = 0;
  currentTurn = 'player';
  duelState = 'playing';
  document.getElementById('nextBtn').style.display = 'none';
  updateHud();
}

function updateHud() {
  let pCount = playerHand.length + board.filter(c => c && c.owner === 'player').length;
  let aiCount = aiHand.length + board.filter(c => c && c.owner === 'ai').length;
  
  document.getElementById('playerVal').innerText = pCount + ' BLUE CARDS';
  document.getElementById('aiVal').innerText = aiCount + ' RED CARDS';
  document.getElementById('statusVal').innerText = (currentTurn === 'player') ? 'YOUR TURN (SELECT & PLACE)' : 'AI THINKING...';
  
  // Check board full
  if (!board.includes(null) && duelState === 'playing') {
    duelState = 'ended';
    if (pCount > aiCount) {
      window.sfx.playWin();
      document.getElementById('statusVal').innerText = 'VICTORY! ' + pCount + ' vs ' + aiCount;
      document.getElementById('nextBtn').style.display = 'inline-block';
    } else if (pCount < aiCount) {
      document.getElementById('statusVal').innerText = 'DEFEAT! ' + pCount + ' vs ' + aiCount;
    } else {
      document.getElementById('statusVal').innerText = 'DRAW MATCH! 5 vs 5';
    }
  }
}

function placeCardOnBoard(slotIdx, card) {
  board[slotIdx] = card;
  window.sfx.playPlaceCard();
  
  // Adjacent neighbor comparison
  // Row = Math.floor(slotIdx / 3), Col = slotIdx % 3
  const r = Math.floor(slotIdx / 3);
  const c = slotIdx % 3;
  
  // Top neighbor (r - 1)
  if (r > 0) {
    const nIdx = (r - 1) * 3 + c;
    const nCard = board[nIdx];
    if (nCard && nCard.owner !== card.owner && card.top > nCard.bottom) {
      nCard.owner = card.owner;
      window.sfx.playCardFlip();
    }
  }
  // Bottom neighbor (r + 1)
  if (r < 2) {
    const nIdx = (r + 1) * 3 + c;
    const nCard = board[nIdx];
    if (nCard && nCard.owner !== card.owner && card.bottom > nCard.top) {
      nCard.owner = card.owner;
      window.sfx.playCardFlip();
    }
  }
  // Left neighbor (c - 1)
  if (c > 0) {
    const nIdx = r * 3 + (c - 1);
    const nCard = board[nIdx];
    if (nCard && nCard.owner !== card.owner && card.left > nCard.right) {
      nCard.owner = card.owner;
      window.sfx.playCardFlip();
    }
  }
  // Right neighbor (c + 1)
  if (c < 2) {
    const nIdx = r * 3 + (c + 1);
    const nCard = board[nIdx];
    if (nCard && nCard.owner !== card.owner && card.right > nCard.left) {
      nCard.owner = card.owner;
      window.sfx.playCardFlip();
    }
  }
}

function handlePlayerPlace(slotIdx) {
  if (duelState !== 'playing' || currentTurn !== 'player' || board[slotIdx] !== null) return;
  if (selectedPlayerCardIdx < 0 || selectedPlayerCardIdx >= playerHand.length) return;
  
  const card = playerHand.splice(selectedPlayerCardIdx, 1)[0];
  placeCardOnBoard(slotIdx, card);
  selectedPlayerCardIdx = Math.min(selectedPlayerCardIdx, playerHand.length - 1);
  
  currentTurn = 'ai';
  updateHud();
  
  if (board.includes(null) && aiHand.length > 0) {
    setTimeout(executeAiTurn, 700);
  }
}

function executeAiTurn() {
  if (duelState !== 'playing' || aiHand.length === 0) return;
  
  // Find empty slots
  const emptySlots = [];
  board.forEach((slot, i) => { if (slot === null) emptySlots.push(i); });
  if (emptySlots.length === 0) return;
  
  // AI picks random card and best slot
  const cardIdx = Math.floor(Math.random() * aiHand.length);
  const card = aiHand.splice(cardIdx, 1)[0];
  const chosenSlot = emptySlots[Math.floor(Math.random() * emptySlots.length)];
  
  placeCardOnBoard(chosenSlot, card);
  currentTurn = 'player';
  updateHud();
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const bSize = Math.min(canvas.height * 0.7, canvas.width * 0.45);
  const slotW = bSize / 3;
  const slotH = bSize / 3;
  const bx = (canvas.width - bSize) / 2;
  const by = (canvas.height - bSize) / 2;
  
  // 3x3 Board Grid
  for (let i = 0; i < 9; i++) {
    const r = Math.floor(i / 3);
    const c = i % 3;
    const sx = bx + c * slotW;
    const sy = by + r * slotH;
    
    ctx.fillStyle = '#081126';
    ctx.fillRect(sx, sy, slotW, slotH);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2;
    ctx.strokeRect(sx, sy, slotW, slotH);
    
    if (board[i]) {
      drawTacticalCard(sx + 4, sy + 4, slotW - 8, slotH - 8, board[i]);
    }
  }
  
  // Player Hand on Left
  const cardW = 60;
  const cardH = 85;
  const pStartY = (canvas.height - playerHand.length * (cardH + 10)) / 2;
  playerHand.forEach((c, idx) => {
    const cx = 20;
    const cy = pStartY + idx * (cardH + 10);
    drawTacticalCard(cx, cy, cardW, cardH, c, (idx === selectedPlayerCardIdx));
  });
  
  // AI Hand on Right (Face Down Backs)
  const aiStartY = (canvas.height - aiHand.length * (cardH + 10)) / 2;
  aiHand.forEach((c, idx) => {
    const cx = canvas.width - cardW - 20;
    const cy = aiStartY + idx * (cardH + 10);
    ctx.fillStyle = '#220814';
    ctx.fillRect(cx, cy, cardW, cardH);
    ctx.strokeStyle = '#ff3d00';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(cx, cy, cardW, cardH);
  });
  
  requestAnimationFrame(render);
}

function drawTacticalCard(x, y, w, h, card, selected = false) {
  ctx.fillStyle = card.owner === 'player' ? '#092147' : '#420b12';
  ctx.fillRect(x, y, w, h);
  ctx.strokeStyle = selected ? '#ffd600' : (card.owner === 'player' ? '#00e5ff' : '#ff3d00');
  ctx.lineWidth = selected ? 3 : 1.5;
  ctx.strokeRect(x, y, w, h);
  
  // Element Icon in Center
  ctx.font = Math.floor(h * 0.28) + 'px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(card.elem, x + w/2, y + h/2 + 8);
  
  // 4 Directional Numbers
  ctx.fillStyle = '#fff';
  ctx.font = 'bold ' + Math.floor(h * 0.16) + 'px monospace';
  ctx.fillText(card.top, x + w/2, y + 16);
  ctx.fillText(card.bottom, x + w/2, y + h - 6);
  ctx.fillText(card.left, x + 12, y + h/2 + 5);
  ctx.fillText(card.right, x + w - 12, y + h/2 + 5);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  // Check Player Hand Selection
  const cardW = 60;
  const cardH = 85;
  const pStartY = (canvas.height - playerHand.length * (cardH + 10)) / 2;
  playerHand.forEach((c, idx) => {
    const cx = 20;
    const cy = pStartY + idx * (cardH + 10);
    if (mx >= cx && mx <= cx + cardW && my >= cy && my <= cy + cardH) {
      selectedPlayerCardIdx = idx;
    }
  });
  
  // Check Board Slot Click
  const bSize = Math.min(canvas.height * 0.7, canvas.width * 0.45);
  const slotW = bSize / 3;
  const slotH = bSize / 3;
  const bx = (canvas.width - bSize) / 2;
  const by = (canvas.height - bSize) / 2;
  
  for (let i = 0; i < 9; i++) {
    const r = Math.floor(i / 3);
    const c = i % 3;
    const sx = bx + c * slotW;
    const sy = by + r * slotH;
    if (mx >= sx && mx <= sx + slotW && my >= sy && my <= sy + slotH) {
      handlePlayerPlace(i);
      return;
    }
  }
});

document.getElementById('restartBtn').addEventListener('click', () => initArena(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initArena(currentLevel + 1);
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
    initArena(t.id);
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
initArena(1);
render();
`;

writeFile(path.join(edDir, 'index.html'), edHtml);
writeFile(path.join(edDir, 'style.css'), edCss);
writeFile(path.join(edDir, 'audio.js'), edAudio);
writeFile(path.join(edDir, 'game.js'), edGame);
copyThumbnailToIcon('elemental-card-duel');
console.log('Game 69 (elemental-card-duel) built successfully.');

// ============================================================================
// GAME 70: CYBER POKER: HOLOGRAPHIC VIDEO DRAW
// ============================================================================
console.log('Building Game 70: cyber-poker...');
const cpDir = path.join(gamesDir, 'cyber-poker');

const cpHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyber Poker: Holographic Video Draw - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Video Terminal</div><div id="themeVal" class="hud-val">1: Cyber Cyan Felt</div></div>
      <div class="hud-box"><div class="hud-lbl">Credits Target</div><div id="creditsVal" class="hud-val">$1,000 / $3,000</div></div>
      <div class="hud-box"><div class="hud-lbl">Hand Outcome</div><div id="handResultVal" class="hud-val" style="color:#ffd600;">JACKS OR BETTER</div></div>
      <div class="hud-box"><div class="hud-lbl">Current Bet</div><div id="betVal" class="hud-val" style="color:#00ff88;">$50 CREDITS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">TERMINALS (1-45)</button>
      <button id="betBtn" class="action-btn">BET +$25</button>
      <button id="dealBtn" class="action-btn deal-btn">DEAL / DRAW [SPACE]</button>
      <button id="restartBtn" class="action-btn">RESET</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT TERMINAL &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBER POKER</h1>
        <p id="overlayDesc">Classic 5-card draw Video Poker with authentic paytables and card holding toggles across 45 futuristic casino stages!</p>
        <button id="startBtn" class="glow-btn">PLAY VIDEO POKER</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT VIDEO TERMINAL (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const cpCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #050212; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(8,2,24,0.92); padding: 8px 16px; border-bottom: 2px solid #ff007f; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ff007f; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(8,2,24,0.92); padding: 8px; border-top: 1px solid #320c42; flex-wrap: wrap; }
.action-btn { background: #1c0633; color: #ff007f; border: 1px solid #ff007f; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ff007f; color: #fff; box-shadow: 0 0 10px #ff007f; }
.deal-btn { background: #ffd600; color: #000; border-color: #ffd600; }
.deal-btn:hover { background: #fff; box-shadow: 0 0 12px #ffd600; }
.next-btn { background: #00f0ff; color: #000; border-color: #00f0ff; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00f0ff; }
.overlay { position: absolute; inset: 0; background: rgba(3,1,10,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #140428; border: 2px solid #ff007f; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,0,127,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ff007f; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #f3d2f9; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ff007f; color: #fff; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ff007f; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #1c0836; border: 1px solid #43167a; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ff007f; color: #ff007f; }
.lvl-btn.active { background: #ff007f; color: #fff; }`;

const cpAudio = `// Web Audio API procedural sound synthesis for Cyber Poker
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
  playCardBeep() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }
  playHoldClick() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
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
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.3);
    });
  }
}
window.sfx = new SoundFx();`;

const cpGame = `${CARD_THEMES_CODE}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let credits = 1000;
let targetCredits = 3000;
let bet = 50;
let handState = 'deal'; // 'deal' or 'draw'
let hand = [];
let held = [false, false, false, false, false];
let lastPayoutResult = 'JACKS OR BETTER';
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

function createRandomDeck() {
  const deck = [];
  for (let s of SUITS) {
    for (let r = 0; r < 13; r++) {
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

let deck = [];

function initTerminal(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  targetCredits = 1000 + lvl * 1500;
  credits = Math.max(1000, credits);
  bet = 25 * lvl;
  handState = 'deal';
  held = [false, false, false, false, false];
  deck = createRandomDeck();
  hand = [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
  lastPayoutResult = 'TAP DEAL TO PLAY';
  document.getElementById('nextBtn').style.display = 'none';
  updateHud();
}

function updateHud() {
  document.getElementById('creditsVal').innerText = '$' + credits.toLocaleString() + ' / $' + targetCredits.toLocaleString();
  document.getElementById('betVal').innerText = '$' + bet.toLocaleString() + ' CREDITS';
  document.getElementById('handResultVal').innerText = lastPayoutResult;
  
  if (credits >= targetCredits) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function handleDealDraw() {
  if (handState === 'deal') {
    if (bet > credits) bet = Math.max(10, Math.floor(credits / 2));
    credits -= bet;
    deck = createRandomDeck();
    hand = [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
    held = [false, false, false, false, false];
    handState = 'draw';
    lastPayoutResult = 'SELECT CARDS TO HOLD';
    window.sfx.playCardBeep();
    updateHud();
  } else {
    // Draw replacement for non-held cards
    for (let i = 0; i < 5; i++) {
      if (!held[i]) {
        hand[i] = deck.pop();
      }
    }
    handState = 'deal';
    window.sfx.playCardBeep();
    evaluateHand();
  }
}

function evaluateHand() {
  // Sort hand by rankVal
  const sorted = [...hand].sort((a, b) => a.rankVal - b.rankVal);
  const ranks = sorted.map(c => c.rankVal);
  const suits = sorted.map(c => c.suit);
  
  const isFlush = suits.every(s => s === suits[0]);
  
  // Straight check (including Ace-high 10, J, Q, K, A)
  let isStraight = false;
  if (ranks[4] - ranks[0] === 4 && new Set(ranks).size === 5) isStraight = true;
  if (ranks[0] === 1 && ranks[1] === 10 && ranks[2] === 11 && ranks[3] === 12 && ranks[4] === 13) isStraight = true;
  
  // Counts
  const counts = {};
  ranks.forEach(r => { counts[r] = (counts[r] || 0) + 1; });
  const freq = Object.values(counts).sort((a, b) => b - a);
  
  let multiplier = 0;
  let label = 'GAME OVER (NO WIN)';
  
  if (isFlush && isStraight && ranks[1] === 10) {
    multiplier = 800; label = 'ROYAL FLUSH!';
  } else if (isFlush && isStraight) {
    multiplier = 50; label = 'STRAIGHT FLUSH!';
  } else if (freq[0] === 4) {
    multiplier = 25; label = 'FOUR OF A KIND!';
  } else if (freq[0] === 3 && freq[1] === 2) {
    multiplier = 9; label = 'FULL HOUSE!';
  } else if (isFlush) {
    multiplier = 6; label = 'FLUSH!';
  } else if (isStraight) {
    multiplier = 4; label = 'STRAIGHT!';
  } else if (freq[0] === 3) {
    multiplier = 3; label = 'THREE OF A KIND!';
  } else if (freq[0] === 2 && freq[1] === 2) {
    multiplier = 2; label = 'TWO PAIR!';
  } else if (freq[0] === 2) {
    // Check if pair is Jacks or higher (11, 12, 13, or 1/Ace)
    const pairRank = parseInt(Object.keys(counts).find(r => counts[r] === 2), 10);
    if (pairRank === 1 || pairRank >= 11) {
      multiplier = 1; label = 'JACKS OR BETTER!';
    }
  }
  
  if (multiplier > 0) {
    const winCredits = bet * multiplier;
    credits += winCredits;
    lastPayoutResult = label + ' (+' + winCredits + ')';
    window.sfx.playWinFanfare();
  } else {
    lastPayoutResult = label;
  }
  
  if (credits <= 0) credits = 500; // Multi-life protection buffer
  updateHud();
}

function toggleHold(idx) {
  if (handState === 'draw') {
    held[idx] = !held[idx];
    window.sfx.playHoldClick();
  }
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.felt;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Paytable Banner on Top
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.fillRect(20, 20, canvas.width - 40, 60);
  ctx.strokeStyle = currentTheme.primary;
  ctx.strokeRect(20, 20, canvas.width - 40, 60);
  
  ctx.fillStyle = '#ffd600';
  ctx.font = 'bold 12px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('ROYAL FLUSH: 800x  |  STRAIGHT FLUSH: 50x  |  4 OF A KIND: 25x  |  FULL HOUSE: 9x', canvas.width / 2, 42);
  ctx.fillStyle = '#00f0ff';
  ctx.fillText('FLUSH: 6x  |  STRAIGHT: 4x  |  3 OF A KIND: 3x  |  2 PAIR: 2x  |  JACKS+: 1x', canvas.width / 2, 62);
  
  // 5 Cards in Hand
  const cardW = Math.min(90, Math.floor((canvas.width - 6 * 15) / 5));
  const cardH = Math.floor(cardW * 1.4);
  const gap = Math.floor((canvas.width - 5 * cardW) / 6);
  const cy = canvas.height * 0.45;
  
  hand.forEach((card, idx) => {
    const cx = gap + idx * (cardW + gap);
    
    ctx.fillStyle = '#060f24';
    ctx.fillRect(cx, cy, cardW, cardH);
    ctx.strokeStyle = held[idx] ? '#ffd600' : (SUIT_COLORS[card.suit] || currentTheme.primary);
    ctx.lineWidth = held[idx] ? 3 : 1.5;
    ctx.strokeRect(cx, cy, cardW, cardH);
    
    const color = SUIT_COLORS[card.suit] || '#fff';
    ctx.fillStyle = color;
    ctx.font = 'bold ' + Math.floor(cardH * 0.16) + 'px monospace';
    ctx.textAlign = 'left';
    ctx.fillText(card.rankStr, cx + 6, cy + cardH * 0.18);
    
    ctx.font = Math.floor(cardH * 0.15) + 'px sans-serif';
    ctx.fillText(card.suit, cx + 6, cy + cardH * 0.35);
    
    ctx.font = Math.floor(cardH * 0.32) + 'px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(card.suit, cx + cardW/2, cy + cardH * 0.65);
    
    // HELD Badge
    if (held[idx]) {
      ctx.fillStyle = '#ffd600';
      ctx.fillRect(cx + 6, cy + cardH - 24, cardW - 12, 18);
      ctx.fillStyle = '#000';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('HELD', cx + cardW/2, cy + cardH - 11);
    }
  });
  
  requestAnimationFrame(render);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const cardW = Math.min(90, Math.floor((canvas.width - 6 * 15) / 5));
  const cardH = Math.floor(cardW * 1.4);
  const gap = Math.floor((canvas.width - 5 * cardW) / 6);
  const cy = canvas.height * 0.45;
  
  for (let i = 0; i < 5; i++) {
    const cx = gap + i * (cardW + gap);
    if (mx >= cx && mx <= cx + cardW && my >= cy && my <= cy + cardH) {
      toggleHold(i);
      return;
    }
  }
});

document.getElementById('dealBtn').addEventListener('click', handleDealDraw);
document.getElementById('betBtn').addEventListener('click', () => {
  if (handState === 'deal') {
    bet = (bet % 200) + 25;
    updateHud();
  }
});

document.getElementById('restartBtn').addEventListener('click', () => initTerminal(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initTerminal(currentLevel + 1);
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
    initTerminal(t.id);
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
    handleDealDraw();
  }
});

resizeCanvas();
initTerminal(1);
render();
`;

writeFile(path.join(cpDir, 'index.html'), cpHtml);
writeFile(path.join(cpDir, 'style.css'), cpCss);
writeFile(path.join(cpDir, 'audio.js'), cpAudio);
writeFile(path.join(cpDir, 'game.js'), cpGame);
copyThumbnailToIcon('cyber-poker');
console.log('Game 70 (cyber-poker) built successfully.');
