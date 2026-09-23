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
