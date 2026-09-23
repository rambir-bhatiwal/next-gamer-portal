const THEMES = [
  { id: 1, name: "Green Phosphor CRT", bg: "#020f06", board: "#061a0c", primary: "#00ff88", secondary: "#39ff14", accent: "#ffd600", text: "#e8f5e9" },
  { id: 2, name: "Amber Decryption Shell", bg: "#140902", board: "#241304", primary: "#ffab00", secondary: "#ff9100", accent: "#ffd600", text: "#fff8e1" },
  { id: 3, name: "Cyber Blue NSA Mainframe", bg: "#020d1c", board: "#061a36", primary: "#00f0ff", secondary: "#00b0ff", accent: "#ff007f", text: "#e0f7fa" },
  { id: 4, name: "Crimson Red Alert Breach", bg: "#170305", board: "#2d080c", primary: "#ff1744", secondary: "#f50057", accent: "#ffd600", text: "#ffebee" },
  { id: 5, name: "Obsidian Matrix Terminal", bg: "#070709", board: "#131418", primary: "#b0bec5", secondary: "#78909c", accent: "#00f0ff", text: "#eceff1" },
  { id: 6, name: "Neon Violet Synthesizer", bg: "#0d021c", board: "#1c0738", primary: "#e040fb", secondary: "#aa00ff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 7, name: "Deep Space Quantum Hub", bg: "#02030d", board: "#080b26", primary: "#7c4dff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 8, name: "Solar Flare Terminal", bg: "#190801", board: "#3b1304", primary: "#ff5722", secondary: "#ff3d00", accent: "#ffd600", text: "#fbe9e7" },
  { id: 9, name: "Glacial Ice Terminal", bg: "#01121c", board: "#05263b", primary: "#80d8ff", secondary: "#00e5ff", accent: "#ff007f", text: "#e1f5fe" },
  { id: 10, name: "Toxic Nanite Cleanroom", bg: "#0a1702", board: "#192e05", primary: "#76ff03", secondary: "#64dd17", accent: "#ffff00", text: "#f1f8e9" },
  { id: 11, name: "Cobalt Cipher Vault", bg: "#030a1c", board: "#09193d", primary: "#2979ff", secondary: "#536dfe", accent: "#ffea00", text: "#e3f2fd" },
  { id: 12, name: "Synthwave Sunset BBS", bg: "#170216", board: "#330830", primary: "#ff007f", secondary: "#7c4dff", accent: "#00f0ff", text: "#fdf0ff" },
  { id: 13, name: "Magma Core Decryptor", bg: "#170401", board: "#360e05", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffd600", text: "#fbe9e7" },
  { id: 14, name: "Titanium Executive Console", bg: "#08090d", board: "#161921", primary: "#cfd8dc", secondary: "#90a4ae", accent: "#00e676", text: "#ffffff" },
  { id: 15, name: "Hologram Lavender Node", bg: "#090317", board: "#190a36", primary: "#b388ff", secondary: "#ea80fc", accent: "#00f0ff", text: "#ede7f6" },
  { id: 16, name: "Dark Carbon Telnet", bg: "#050507", board: "#111114", primary: "#78909c", secondary: "#607d8b", accent: "#39ff14", text: "#eceff1" },
  { id: 17, name: "Helios Gold Terminal", bg: "#171201", board: "#332904", primary: "#ffd700", secondary: "#ffab00", accent: "#ff1744", text: "#fffde7" },
  { id: 18, name: "Aquamarine Bay Subnet", bg: "#011214", board: "#05292e", primary: "#18ffff", secondary: "#00e5ff", accent: "#ffea00", text: "#e0f7fa" },
  { id: 19, name: "Void Singularity Shell", bg: "#010108", board: "#050517", primary: "#651fff", secondary: "#304ffe", accent: "#00f0ff", text: "#ede7f6" },
  { id: 20, name: "Tokamak Fusion Log", bg: "#170304", board: "#360b0f", primary: "#ff3d00", secondary: "#d50000", accent: "#ffd600", text: "#fbe9e7" },
  { id: 21, name: "Hyperdrive Orbital Net", bg: "#030817", board: "#0a193b", primary: "#00b0ff", secondary: "#2979ff", accent: "#39ff14", text: "#e1f5fe" },
  { id: 22, name: "Prism Spectrum Core", bg: "#0a0417", board: "#1e0e3d", primary: "#d500f9", secondary: "#00f0ff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 23, name: "Bismuth Crystal Bus", bg: "#0c0817", board: "#1e1438", primary: "#ea80fc", secondary: "#64ffda", accent: "#ffd600", text: "#f3e5f5" },
  { id: 24, name: "Subnet Hacker Root", bg: "#020f08", board: "#072615", primary: "#00c853", secondary: "#69f0ae", accent: "#00e5ff", text: "#e8f5e9" },
  { id: 25, name: "Glitch Glade Port", bg: "#120217", board: "#290833", primary: "#f50057", secondary: "#7c4dff", accent: "#39ff14", text: "#fce4ec" },
  { id: 26, name: "Aero Sky Telemetry", bg: "#030f17", board: "#0a2436", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ffd600", text: "#e1f5fe" },
  { id: 27, name: "Chrono Time Warp Node", bg: "#070417", board: "#140c38", primary: "#7c4dff", secondary: "#b388ff", accent: "#ff007f", text: "#ede7f6" },
  { id: 28, name: "Starlight Deep Array", bg: "#080814", board: "#14142e", primary: "#c5cae9", secondary: "#9fa8da", accent: "#ffd700", text: "#e8eaf6" },
  { id: 29, name: "Nanite Hive Command", bg: "#02120e", board: "#062b21", primary: "#1de9b6", secondary: "#00bfa5", accent: "#ea80fc", text: "#e0f2f1" },
  { id: 30, name: "Zero-G Quantum Link", bg: "#04091a", board: "#0b1a40", primary: "#00e5ff", secondary: "#651fff", accent: "#ffd600", text: "#e1f5fe" },
  { id: 31, name: "Tachyon VIP Port", bg: "#0e0217", board: "#240738", primary: "#e040fb", secondary: "#00f0ff", accent: "#76ff03", text: "#f3e5f5" },
  { id: 32, name: "Copper Kilovolt Bus", bg: "#140902", board: "#2e1707", primary: "#ffab00", secondary: "#ff6d00", accent: "#00f0ff", text: "#fff8e1" },
  { id: 33, name: "Bio-Luminescent Core", bg: "#011412", board: "#042e2b", primary: "#64ffda", secondary: "#1de9b6", accent: "#ff4081", text: "#e0f2f1" },
  { id: 34, name: "Infrared Optical Trap", bg: "#170202", board: "#360606", primary: "#ff1744", secondary: "#d50000", accent: "#ffd600", text: "#ffebee" },
  { id: 35, name: "Aurora Polar Station", bg: "#010e14", board: "#052433", primary: "#18ffff", secondary: "#00e676", accent: "#e040fb", text: "#e0f7fa" },
  { id: 36, name: "Zenith Executive AI", bg: "#080812", board: "#151529", primary: "#b0bec5", secondary: "#78909c", accent: "#ffd700", text: "#eceff1" },
  { id: 37, name: "Pulsar Emission Log", bg: "#0c0217", board: "#22073d", primary: "#d500f9", secondary: "#3d5afe", accent: "#39ff14", text: "#f3e5f5" },
  { id: 38, name: "Neutron Star Core", bg: "#060214", board: "#140833", primary: "#7c4dff", secondary: "#651fff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 39, name: "Antimatter Containment", bg: "#14010a", board: "#2e051a", primary: "#ff007f", secondary: "#f50057", accent: "#ffd600", text: "#fdf0ff" },
  { id: 40, name: "Cosmic Horizon Uplink", bg: "#020717", board: "#071638", primary: "#2979ff", secondary: "#00e5ff", accent: "#ff007f", text: "#e3f2fd" },
  { id: 41, name: "Quantum Mirage Gateway", bg: "#080117", board: "#180536", primary: "#ea80fc", secondary: "#b388ff", accent: "#00e676", text: "#f3e5f5" },
  { id: 42, name: "Radioactive Ion Terminal", bg: "#0e1402", board: "#212e06", primary: "#76ff03", secondary: "#64dd17", accent: "#ffff00", text: "#f1f8e9" },
  { id: 43, name: "Silicon Crystal Foundry", bg: "#0d0d12", board: "#1c1c24", primary: "#90a4ae", secondary: "#607d8b", accent: "#00e5ff", text: "#eceff1" },
  { id: 44, name: "Relativistic Vector Node", bg: "#050b14", board: "#0e1e33", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 45, name: "Apex Neural Singularity", bg: "#000005", board: "#08081a", primary: "#00ff88", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

const DICE_SETS = [
  ['A','A','E','E','G','N'], ['E','L','R','T','T','Y'], ['A','O','O','T','T','W'], ['A','B','B','J','O','O'],
  ['E','H','R','T','V','W'], ['C','I','M','O','T','U'], ['D','I','S','T','T','Y'], ['E','I','O','S','S','T'],
  ['D','E','L','R','V','Y'], ['A','C','H','O','P','S'], ['H','I','M','N','Q','U'], ['E','E','I','N','S','U'],
  ['E','E','G','H','N','W'], ['A','F','F','K','P','S'], ['H','L','N','N','R','Z'], ['D','E','I','L','R','X']
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let board = Array(4).fill(null).map(() => Array(4).fill(''));
let tracedCells = []; // array of { r, c }
let foundWords = [];
let score = 0;
let targetScore = 150;
let invulnerable = true; // protection buffer against instant failure

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initTerminal(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  targetScore = 120 + lvl * 20;
  score = 0;
  foundWords = [];
  tracedCells = [];
  document.getElementById('nextBtn').style.display = 'none';
  
  // Roll 16 dice
  const shuffledDice = [...DICE_SETS].sort(() => Math.random() - 0.5);
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const die = shuffledDice[r * 4 + c];
      board[r][c] = die[Math.floor(Math.random() * die.length)];
    }
  }
  updateHud();
}

function updateHud() {
  document.getElementById('scoreVal').innerText = score + ' / ' + targetScore + ' PTS';
  document.getElementById('wordsVal').innerText = foundWords.length + ' WORDS';
  
  const currentWord = tracedCells.map(pos => board[pos.r][pos.c]).join('');
  document.getElementById('currentTraceVal').innerText = currentWord || '_ _ _ _';
  
  if (score >= targetScore) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function isAdjacent(p1, p2) {
  return Math.abs(p1.r - p2.r) <= 1 && Math.abs(p1.c - p2.c) <= 1;
}

function handleCellClick(r, c) {
  const alreadyIdx = tracedCells.findIndex(p => p.r === r && p.c === c);
  if (alreadyIdx >= 0) {
    // If clicking last cell, remove it
    if (alreadyIdx === tracedCells.length - 1) {
      tracedCells.pop();
      window.sfx.playTraceStep(tracedCells.length);
      updateHud();
    }
    return;
  }
  
  if (tracedCells.length === 0 || isAdjacent(tracedCells[tracedCells.length - 1], { r, c })) {
    tracedCells.push({ r, c });
    window.sfx.playTraceStep(tracedCells.length);
    updateHud();
  }
}

function submitTrace() {
  const word = tracedCells.map(pos => board[pos.r][pos.c]).join('');
  if (word.length >= 3 && !foundWords.includes(word)) {
    foundWords.push(word);
    score += word.length * 20;
    window.sfx.playWordAccepted();
    tracedCells = [];
    updateHud();
  } else {
    window.sfx.playErrorBuzz();
    tracedCells = [];
    updateHud();
  }
}

function clearTrace() {
  tracedCells = [];
  updateHud();
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const cellSize = Math.min(62, Math.floor((canvas.height - 30) / 4));
  const startX = (canvas.width - 4 * cellSize) / 2;
  const startY = (canvas.height - 4 * cellSize) / 2;
  
  // Outer frame
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 2;
  ctx.strokeRect(startX - 4, startY - 4, 4 * cellSize + 8, 4 * cellSize + 8);
  
  // Render Cells
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const cx = startX + c * cellSize;
      const cy = startY + r * cellSize;
      
      const isTraced = tracedCells.some(p => p.r === r && p.c === c);
      
      ctx.fillStyle = isTraced ? '#3d2604' : '#140c03';
      ctx.fillRect(cx, cy, cellSize, cellSize);
      ctx.strokeStyle = isTraced ? '#ffd600' : '#422805';
      ctx.lineWidth = isTraced ? 2.5 : 1.5;
      ctx.strokeRect(cx, cy, cellSize, cellSize);
      
      ctx.fillStyle = isTraced ? '#ffd600' : '#fff';
      ctx.font = 'bold ' + Math.floor(cellSize * 0.48) + 'px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(board[r][c], cx + cellSize / 2, cy + cellSize * 0.68);
    }
  }
  
  // Render Tracer Path Lines
  if (tracedCells.length > 1) {
    ctx.strokeStyle = '#00e5ff';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    tracedCells.forEach((p, idx) => {
      const px = startX + p.c * cellSize + cellSize / 2;
      const py = startY + p.r * cellSize + cellSize / 2;
      if (idx === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();
  }
  
  requestAnimationFrame(render);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const cellSize = Math.min(62, Math.floor((canvas.height - 30) / 4));
  const startX = (canvas.width - 4 * cellSize) / 2;
  const startY = (canvas.height - 4 * cellSize) / 2;
  
  if (mx >= startX && mx <= startX + 4 * cellSize && my >= startY && my <= startY + 4 * cellSize) {
    const c = Math.floor((mx - startX) / cellSize);
    const r = Math.floor((my - startY) / cellSize);
    handleCellClick(r, c);
  }
});

document.getElementById('submitBtn').addEventListener('click', submitTrace);
document.getElementById('clearBtn').addEventListener('click', clearTrace);
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
  if (e.key === 'Enter') submitTrace();
  else if (e.key === 'Backspace') clearTrace();
});

resizeCanvas();
initTerminal(1);
render();
