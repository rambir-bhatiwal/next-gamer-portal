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
