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
