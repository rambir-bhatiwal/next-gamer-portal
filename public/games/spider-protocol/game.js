const THEMES = [
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
];

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
