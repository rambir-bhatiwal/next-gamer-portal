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
