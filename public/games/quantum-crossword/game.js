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

// 5x5 Mini Crosswords database
const CROSSWORD_DATA = [
  {
    solution: [
      ['L', 'A', 'S', 'E', 'R'],
      ['A', 'G', 'I', 'L', 'E'],
      ['S', 'P', 'A', 'R', 'K'],
      ['E', 'L', 'I', 'T', 'E'],
      ['R', 'E', 'S', 'E', 'T']
    ],
    across: [
      { num: 1, text: "Focused photonic light beam", r: 0, c: 0 },
      { num: 2, text: "Nimble software sprint methodology", r: 1, c: 0 },
      { num: 3, text: "Electric arc ignition flash", r: 2, c: 0 },
      { num: 4, text: "Top-tier hacker status", r: 3, c: 0 },
      { num: 5, text: "System reboot command", r: 4, c: 0 }
    ],
    down: [
      { num: 1, text: "Laser beam weapon", r: 0, c: 0 },
      { num: 2, text: "Software application piece", r: 0, c: 1 },
      { num: 3, text: "Artificial neural intelligence", r: 0, c: 2 },
      { num: 4, text: "Electrical conduit wire", r: 0, c: 3 },
      { num: 5, text: "RAM memory circuit cell", r: 0, c: 4 }
    ]
  }
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let currentPuzzle = CROSSWORD_DATA[0];
let userGrid = Array(5).fill(null).map(() => Array(5).fill(''));
let cursor = { r: 0, c: 0 };
let currentDir = 'across'; // 'across' or 'down'
let invulnerable = true; // protection buffer against instant failure

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initPuzzle(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  currentPuzzle = CROSSWORD_DATA[0];
  userGrid = Array(5).fill(null).map(() => Array(5).fill(''));
  cursor = { r: 0, c: 0 };
  currentDir = 'across';
  document.getElementById('nextBtn').style.display = 'none';
  
  renderCluesList();
  updateHud();
}

function updateHud() {
  let filled = 0;
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (userGrid[r][c] !== '') filled++;
    }
  }
  document.getElementById('progressVal').innerText = filled + ' / 25 CELLS';
  document.getElementById('dirVal').innerText = currentDir.toUpperCase() + ' [TAB]';
  
  // Highlight active clue
  const activeClue = (currentDir === 'across') ? currentPuzzle.across[cursor.r] : currentPuzzle.down[cursor.c];
  if (activeClue) {
    document.getElementById('clueVal').innerText = activeClue.num + '-' + currentDir.toUpperCase() + ': ' + activeClue.text;
  }
}

function renderCluesList() {
  const acrossCol = document.getElementById('acrossCol');
  const downCol = document.getElementById('downCol');
  acrossCol.innerHTML = '<h3>ACROSS</h3>';
  downCol.innerHTML = '<h3>DOWN</h3>';
  
  currentPuzzle.across.forEach((clue, idx) => {
    const div = document.createElement('div');
    div.className = 'clue-item' + (currentDir === 'across' && cursor.r === idx ? ' active' : '');
    div.innerText = clue.num + '. ' + clue.text;
    div.addEventListener('click', () => {
      currentDir = 'across';
      cursor = { r: idx, c: 0 };
      updateHud();
      renderCluesList();
    });
    acrossCol.appendChild(div);
  });
  
  currentPuzzle.down.forEach((clue, idx) => {
    const div = document.createElement('div');
    div.className = 'clue-item' + (currentDir === 'down' && cursor.c === idx ? ' active' : '');
    div.innerText = clue.num + '. ' + clue.text;
    div.addEventListener('click', () => {
      currentDir = 'down';
      cursor = { r: 0, c: idx };
      updateHud();
      renderCluesList();
    });
    downCol.appendChild(div);
  });
}

function handleCharInput(char) {
  if (/^[A-Z]$/.test(char)) {
    userGrid[cursor.r][cursor.c] = char;
    window.sfx.playKeypress();
    
    // Auto advance
    if (currentDir === 'across') {
      if (cursor.c < 4) cursor.c++;
    } else {
      if (cursor.r < 4) cursor.r++;
    }
    updateHud();
    renderCluesList();
    checkAutoWin();
  } else if (char === 'BACKSPACE') {
    if (userGrid[cursor.r][cursor.c] !== '') {
      userGrid[cursor.r][cursor.c] = '';
    } else {
      // Step back
      if (currentDir === 'across') {
        if (cursor.c > 0) cursor.c--;
      } else {
        if (cursor.r > 0) cursor.r--;
      }
      userGrid[cursor.r][cursor.c] = '';
    }
    window.sfx.playKeypress();
    updateHud();
    renderCluesList();
  } else if (char === 'TAB') {
    currentDir = (currentDir === 'across') ? 'down' : 'across';
    updateHud();
    renderCluesList();
  }
}

function checkAutoWin() {
  let allCorrect = true;
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (userGrid[r][c] !== currentPuzzle.solution[r][c]) {
        allCorrect = false;
        break;
      }
    }
  }
  if (allCorrect) {
    window.sfx.playPuzzleComplete();
    document.getElementById('nextBtn').style.display = 'inline-block';
    document.getElementById('clueVal').innerText = 'PUZZLE DECRYPTED 100%!';
  }
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const cellSize = Math.min(52, Math.floor((canvas.height - 24) / 5));
  const startX = (canvas.width - 5 * cellSize) / 2;
  const startY = (canvas.height - 5 * cellSize) / 2;
  
  // Render Grid
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const cx = startX + c * cellSize;
      const cy = startY + r * cellSize;
      
      const isCursor = (r === cursor.r && c === cursor.c);
      const isInWord = (currentDir === 'across' && r === cursor.r) || (currentDir === 'down' && c === cursor.c);
      
      if (isCursor) {
        ctx.fillStyle = '#00e5ff';
        ctx.strokeStyle = '#fff';
      } else if (isInWord) {
        ctx.fillStyle = 'rgba(0,229,255,0.2)';
        ctx.strokeStyle = currentTheme.primary;
      } else {
        ctx.fillStyle = '#061026';
        ctx.strokeStyle = '#1a3058';
      }
      
      ctx.lineWidth = isCursor ? 3 : 1.5;
      ctx.fillRect(cx, cy, cellSize, cellSize);
      ctx.strokeRect(cx, cy, cellSize, cellSize);
      
      // Cell Number
      if (r === 0 || c === 0) {
        ctx.fillStyle = '#88a';
        ctx.font = '10px monospace';
        ctx.textAlign = 'left';
        ctx.fillText((r === 0 ? c + 1 : r + 1), cx + 4, cy + 12);
      }
      
      // Letter
      const letter = userGrid[r][c];
      if (letter) {
        ctx.fillStyle = isCursor ? '#000' : '#fff';
        ctx.font = 'bold ' + Math.floor(cellSize * 0.55) + 'px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(letter, cx + cellSize / 2, cy + cellSize * 0.72);
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
  
  const cellSize = Math.min(52, Math.floor((canvas.height - 24) / 5));
  const startX = (canvas.width - 5 * cellSize) / 2;
  const startY = (canvas.height - 5 * cellSize) / 2;
  
  if (mx >= startX && mx <= startX + 5 * cellSize && my >= startY && my <= startY + 5 * cellSize) {
    const c = Math.floor((mx - startX) / cellSize);
    const r = Math.floor((my - startY) / cellSize);
    if (cursor.r === r && cursor.c === c) {
      currentDir = (currentDir === 'across') ? 'down' : 'across';
    } else {
      cursor = { r, c };
    }
    updateHud();
    renderCluesList();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    handleCharInput('TAB');
  } else if (e.key === 'Backspace') {
    handleCharInput('BACKSPACE');
  } else if (e.key === 'ArrowRight') {
    cursor.c = (cursor.c + 1) % 5;
    updateHud();
  } else if (e.key === 'ArrowLeft') {
    cursor.c = (cursor.c + 4) % 5;
    updateHud();
  } else if (e.key === 'ArrowDown') {
    cursor.r = (cursor.r + 1) % 5;
    updateHud();
  } else if (e.key === 'ArrowUp') {
    cursor.r = (cursor.r + 4) % 5;
    updateHud();
  } else if (/^[a-zA-Z]$/.test(e.key)) {
    handleCharInput(e.key.toUpperCase());
  }
});

document.getElementById('checkBtn').addEventListener('click', checkAutoWin);
document.getElementById('restartBtn').addEventListener('click', () => initPuzzle(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initPuzzle(currentLevel + 1);
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
    initPuzzle(t.id);
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
initPuzzle(1);
render();
