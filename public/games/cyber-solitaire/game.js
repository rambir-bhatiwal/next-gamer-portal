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
