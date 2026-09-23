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

// Database of 4-word categories
const CATEGORIES_DATA = [
  {
    categories: [
      { name: "PROGRAMMING LANGUAGES", words: ["PYTHON", "RUST", "KOTLIN", "SWIFT"], color: "#ffd600" },
      { name: "HARDWARE COMPONENTS", words: ["RAM", "GPU", "CPU", "SSD"], color: "#00e5ff" },
      { name: "NETWORKING DEVICES", words: ["ROUTER", "SWITCH", "FIREWALL", "BRIDGE"], color: "#00ff88" },
      { name: "FILE EXTENSIONS", words: ["PNG", "JSON", "WAV", "HTML"], color: "#e040fb" }
    ]
  }
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let solvedCategories = [];
let unassignedTiles = [];
let selectedTiles = [];
let mistakesLeft = 4;
let invulnerable = true; // protection buffer against instant failure

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initBoard(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  solvedCategories = [];
  selectedTiles = [];
  mistakesLeft = 4;
  document.getElementById('nextBtn').style.display = 'none';
  
  // Unpack 16 words
  const dataset = CATEGORIES_DATA[0];
  const allWords = [];
  dataset.categories.forEach(cat => {
    cat.words.forEach(w => allWords.push({ word: w, category: cat.name, color: cat.color }));
  });
  
  // Shuffle words
  allWords.sort(() => Math.random() - 0.5);
  unassignedTiles = allWords;
  updateHud();
}

function updateHud() {
  document.getElementById('categoriesVal').innerText = solvedCategories.length + ' / 4 CATEGORIES';
  let dots = "● ".repeat(mistakesLeft);
  document.getElementById('mistakesVal').innerText = dots + '(' + mistakesLeft + ' LEFT)';
  document.getElementById('selectedCountVal').innerText = selectedTiles.length + ' / 4 TILES';
  
  if (solvedCategories.length === 4) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function submitTiles() {
  if (selectedTiles.length !== 4) return;
  
  // Check if all 4 belong to same category
  const firstCat = selectedTiles[0].category;
  const isMatch = selectedTiles.every(t => t.category === firstCat);
  
  if (isMatch) {
    // Add to solved categories
    const catObj = CATEGORIES_DATA[0].categories.find(c => c.name === firstCat);
    solvedCategories.push(catObj);
    
    // Remove from unassigned
    const wordList = selectedTiles.map(t => t.word);
    unassignedTiles = unassignedTiles.filter(t => !wordList.includes(t.word));
    selectedTiles = [];
    
    window.sfx.playCategorySuccess();
    updateHud();
  } else {
    // Check if 3 out of 4 belong to same category (One away)
    mistakesLeft--;
    if (mistakesLeft < 1) mistakesLeft = 4; // Buffer protection
    window.sfx.playErrorBuzz();
    updateHud();
  }
}

function deselectAll() {
  selectedTiles = [];
  window.sfx.playTileTap();
  updateHud();
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const bannerH = 46;
  const bannerGap = 8;
  const topY = 20;
  
  // Render Solved Category Banners
  solvedCategories.forEach((cat, idx) => {
    const by = topY + idx * (bannerH + bannerGap);
    ctx.fillStyle = cat.color;
    ctx.fillRect(20, by, canvas.width - 40, bannerH);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(cat.name, canvas.width / 2, by + 20);
    
    ctx.font = '12px monospace';
    ctx.fillText(cat.words.join(', '), canvas.width / 2, by + 37);
  });
  
  // Render Remaining Unassigned Tiles in Grid (4 columns)
  const remainingRows = Math.ceil(unassignedTiles.length / 4);
  const startGridY = topY + solvedCategories.length * (bannerH + bannerGap) + 15;
  const tileW = Math.min(125, Math.floor((canvas.width - 5 * 10) / 4));
  const tileH = 50;
  const gap = 10;
  const gridStartX = (canvas.width - (4 * tileW + 3 * gap)) / 2;
  
  unassignedTiles.forEach((t, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const tx = gridStartX + col * (tileW + gap);
    const ty = startGridY + row * (tileH + gap);
    
    const isSelected = selectedTiles.some(st => st.word === t.word);
    
    ctx.fillStyle = isSelected ? '#5c128c' : '#140826';
    ctx.fillRect(tx, ty, tileW, tileH);
    ctx.strokeStyle = isSelected ? '#00f0ff' : '#2d144d';
    ctx.lineWidth = isSelected ? 2.5 : 1.5;
    ctx.strokeRect(tx, ty, tileW, tileH);
    
    ctx.fillStyle = isSelected ? '#00f0ff' : '#fff';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(t.word, tx + tileW / 2, ty + tileH / 2 + 5);
  });
  
  requestAnimationFrame(render);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const bannerH = 46;
  const bannerGap = 8;
  const topY = 20;
  const startGridY = topY + solvedCategories.length * (bannerH + bannerGap) + 15;
  const tileW = Math.min(125, Math.floor((canvas.width - 5 * 10) / 4));
  const tileH = 50;
  const gap = 10;
  const gridStartX = (canvas.width - (4 * tileW + 3 * gap)) / 2;
  
  unassignedTiles.forEach((t, i) => {
    const col = i % 4;
    const row = Math.floor(i / 4);
    const tx = gridStartX + col * (tileW + gap);
    const ty = startGridY + row * (tileH + gap);
    
    if (mx >= tx && mx <= tx + tileW && my >= ty && my <= ty + tileH) {
      const existingIdx = selectedTiles.findIndex(st => st.word === t.word);
      if (existingIdx >= 0) {
        selectedTiles.splice(existingIdx, 1);
        window.sfx.playTileTap();
      } else if (selectedTiles.length < 4) {
        selectedTiles.push(t);
        window.sfx.playTileTap();
      }
      updateHud();
    }
  });
});

document.getElementById('submitBtn').addEventListener('click', submitTiles);
document.getElementById('deselectBtn').addEventListener('click', deselectAll);
document.getElementById('restartBtn').addEventListener('click', () => initBoard(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initBoard(currentLevel + 1);
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
    initBoard(t.id);
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
initBoard(1);
render();
