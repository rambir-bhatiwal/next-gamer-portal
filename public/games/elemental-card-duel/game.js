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
