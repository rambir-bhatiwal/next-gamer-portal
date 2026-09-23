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
