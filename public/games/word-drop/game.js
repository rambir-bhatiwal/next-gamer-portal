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

const VOWELS = ['A', 'E', 'I', 'O', 'U'];
const CONSONANTS = ['B', 'C', 'D', 'F', 'G', 'H', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W', 'Y'];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let grid = Array(10).fill(null).map(() => Array(6).fill(null)); // 10 rows x 6 cols
let selectedBlocks = []; // array of { r, c }
let score = 0;
let targetScore = 250;
let dropTimer = 0;
let shields = 3; // multi-shield protection buffer
let invulnerable = true;

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function getRandomLetter() {
  return (Math.random() < 0.4) 
    ? VOWELS[Math.floor(Math.random() * VOWELS.length)]
    : CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)];
}

function initWell(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  targetScore = 200 + lvl * 30;
  score = 0;
  dropTimer = 0;
  shields = 3;
  selectedBlocks = [];
  grid = Array(10).fill(null).map(() => Array(6).fill(null));
  document.getElementById('nextBtn').style.display = 'none';
  
  // Fill bottom 4 rows initially
  for (let r = 6; r < 10; r++) {
    for (let c = 0; c < 6; c++) {
      grid[r][c] = getRandomLetter();
    }
  }
  updateHud();
}

function updateHud() {
  document.getElementById('scoreVal').innerText = score + ' / ' + targetScore + ' PTS';
  const currentWord = selectedBlocks.map(p => grid[p.r][p.c]).join('');
  document.getElementById('wordVal').innerText = currentWord || 'CLICK BLOCKS';
  document.getElementById('shieldVal').innerText = '100% (' + shields + ' SHIELDS)';
  
  if (score >= targetScore) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function updateGame() {
  dropTimer++;
  const dropInterval = Math.max(120, 240 - currentLevel * 4);
  
  if (dropTimer >= dropInterval) {
    dropTimer = 0;
    // Drop 1 letter in a random column
    const col = Math.floor(Math.random() * 6);
    // Find lowest empty row in that column
    let targetRow = -1;
    for (let r = 9; r >= 0; r--) {
      if (grid[r][col] === null) {
        targetRow = r;
        break;
      }
    }
    if (targetRow >= 0) {
      grid[targetRow][col] = getRandomLetter();
    } else {
      // Stack topped out! Trigger shield buffer protection
      shields--;
      if (shields <= 0) shields = 3;
      // Clear top 2 rows to relief pressure
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 6; c++) grid[r][c] = null;
      }
    }
    updateHud();
  }
}

function handleBlockClick(r, c) {
  if (grid[r][c] === null) return;
  const existingIdx = selectedBlocks.findIndex(p => p.r === r && p.c === c);
  if (existingIdx >= 0) {
    selectedBlocks.splice(existingIdx, 1);
    window.sfx.playTileClick();
  } else {
    selectedBlocks.push({ r, c });
    window.sfx.playTileClick();
  }
  updateHud();
}

function vaporizeWord() {
  const word = selectedBlocks.map(p => grid[p.r][p.c]).join('');
  if (word.length >= 3) {
    score += word.length * 25;
    window.sfx.playVaporize();
    
    // Remove blocks from grid
    selectedBlocks.forEach(p => {
      grid[p.r][p.c] = null;
    });
    selectedBlocks = [];
    
    // Apply gravity collapse
    for (let c = 0; c < 6; c++) {
      let emptyRow = 9;
      for (let r = 9; r >= 0; r--) {
        if (grid[r][c] !== null) {
          if (r !== emptyRow) {
            grid[emptyRow][c] = grid[r][c];
            grid[r][c] = null;
          }
          emptyRow--;
        }
      }
    }
    
    updateHud();
    if (score >= targetScore) {
      window.sfx.playWinFanfare();
    }
  }
}

function deselect() {
  selectedBlocks = [];
  window.sfx.playTileClick();
  updateHud();
}

// Canvas Rendering
function render() {
  updateGame();
  
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const blockSize = Math.min(42, Math.floor((canvas.height - 20) / 10));
  const startX = (canvas.width - 6 * blockSize) / 2;
  const startY = (canvas.height - 10 * blockSize) / 2;
  
  // Well Chamber Outline
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 2;
  ctx.strokeRect(startX - 4, startY - 4, 6 * blockSize + 8, 10 * blockSize + 8);
  
  for (let r = 0; r < 10; r++) {
    for (let c = 0; c < 6; c++) {
      const bx = startX + c * blockSize;
      const by = startY + r * blockSize;
      
      const val = grid[r][c];
      const isSelected = selectedBlocks.some(p => p.r === r && p.c === c);
      
      if (val !== null) {
        ctx.fillStyle = isSelected ? '#ffd600' : '#0e2b17';
        ctx.fillRect(bx, by, blockSize, blockSize);
        ctx.strokeStyle = isSelected ? '#fff' : currentTheme.secondary;
        ctx.lineWidth = isSelected ? 2 : 1;
        ctx.strokeRect(bx, by, blockSize, blockSize);
        
        ctx.fillStyle = isSelected ? '#000' : '#fff';
        ctx.font = 'bold ' + Math.floor(blockSize * 0.52) + 'px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(val, bx + blockSize / 2, by + blockSize * 0.7);
      } else {
        ctx.strokeStyle = 'rgba(0,255,136,0.06)';
        ctx.strokeRect(bx, by, blockSize, blockSize);
      }
    }
  }
  
  requestAnimationFrame(render);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const blockSize = Math.min(42, Math.floor((canvas.height - 20) / 10));
  const startX = (canvas.width - 6 * blockSize) / 2;
  const startY = (canvas.height - 10 * blockSize) / 2;
  
  if (mx >= startX && mx <= startX + 6 * blockSize && my >= startY && my <= startY + 10 * blockSize) {
    const c = Math.floor((mx - startX) / blockSize);
    const r = Math.floor((my - startY) / blockSize);
    handleBlockClick(r, c);
  }
});

document.getElementById('clearWordBtn').addEventListener('click', vaporizeWord);
document.getElementById('deselectBtn').addEventListener('click', deselect);
document.getElementById('restartBtn').addEventListener('click', () => initWell(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initWell(currentLevel + 1);
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
    initWell(t.id);
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
  if (e.key === 'Enter') vaporizeWord();
});

resizeCanvas();
initWell(1);
render();
