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

// Hex Honeycombs: Center letter (golden) + 6 outer letters
const HONEYCOMBS = [
  { center: 'A', outer: ['B', 'I', 'N', 'R', 'Y', 'T'], pangram: 'BINARY' },
  { center: 'E', outer: ['C', 'Y', 'B', 'R', 'S', 'P'], pangram: 'CYBERS' },
  { center: 'O', outer: ['P', 'R', 'T', 'C', 'L', 'S'], pangram: 'PROTOCOL' },
  { center: 'U', outer: ['Q', 'A', 'N', 'T', 'M', 'S'], pangram: 'QUANTUMS' },
  { center: 'I', outer: ['M', 'A', 'T', 'R', 'X', 'C'], pangram: 'MATRIX' }
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let currentHoneycomb = HONEYCOMBS[0];
let currentInput = "";
let foundWords = [];
let score = 0;
let targetScore = 120;
let invulnerable = true; // protection buffer against instant failure

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initForge(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  currentHoneycomb = HONEYCOMBS[(lvl - 1) % HONEYCOMBS.length];
  currentInput = "";
  foundWords = [];
  score = 0;
  targetScore = 100 + lvl * 15;
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('pangramVal').innerText = 'NO PANGRAM YET';
  updateHud();
}

function updateHud() {
  document.getElementById('scoreVal').innerText = score + ' / ' + targetScore + ' PTS';
  document.getElementById('currentSpellingVal').innerText = currentInput || 'TYPE WORDS';
  
  if (score >= targetScore) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function submitWord() {
  const word = currentInput;
  if (word.length < 4) {
    window.sfx.playErrorBuzz();
    currentInput = "";
    updateHud();
    return;
  }
  if (!word.includes(currentHoneycomb.center)) {
    window.sfx.playErrorBuzz();
    currentInput = "";
    updateHud();
    return;
  }
  if (foundWords.includes(word)) {
    window.sfx.playErrorBuzz();
    currentInput = "";
    updateHud();
    return;
  }
  
  // Accept word
  foundWords.push(word);
  let pts = (word.length === 4) ? 10 : word.length * 15;
  
  // Check Pangram
  const allLetters = [currentHoneycomb.center, ...currentHoneycomb.outer];
  const isPangram = allLetters.every(l => word.includes(l));
  if (isPangram) {
    pts += 50;
    document.getElementById('pangramVal').innerText = 'PANGRAM: ' + word + ' ★';
  }
  
  score += pts;
  window.sfx.playWordReward();
  currentInput = "";
  updateHud();
}

function deleteLetter() {
  if (currentInput.length > 0) {
    currentInput = currentInput.slice(0, -1);
    window.sfx.playHexTap();
    updateHud();
  }
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const cx = canvas.width / 2;
  const cy = canvas.height * 0.55;
  const hexR = 35;
  
  // Draw Center Golden Hexagon
  drawHex(cx, cy, hexR, '#ffd700', '#fff', currentHoneycomb.center, true);
  
  // Draw 6 Outer Hexagons
  const dist = hexR * 1.8;
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI / 3) - Math.PI / 2;
    const hx = cx + dist * Math.cos(angle);
    const hy = cy + dist * Math.sin(angle);
    drawHex(hx, hy, hexR, '#1a1204', '#ffab00', currentHoneycomb.outer[i]);
  }
  
  // Render Found Words Bar at Top
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.fillRect(20, 15, canvas.width - 40, 50);
  ctx.strokeStyle = currentTheme.primary;
  ctx.strokeRect(20, 15, canvas.width - 40, 50);
  
  ctx.fillStyle = '#ffd700';
  ctx.font = '12px monospace';
  ctx.textAlign = 'center';
  const foundStr = foundWords.length > 0 ? foundWords.join(', ') : 'MIN 4 LETTERS (MUST INCLUDE CENTER LETTER)';
  ctx.fillText('ACCEPTED WORDS: ' + foundStr, canvas.width / 2, 45);
  
  requestAnimationFrame(render);
}

function drawHex(x, y, r, fill, stroke, text, isCenter = false) {
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = isCenter ? 3 : 1.5;
  
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI / 3) - Math.PI / 6;
    const hx = x + r * Math.cos(a);
    const hy = y + r * Math.sin(a);
    if (i === 0) ctx.moveTo(hx, hy);
    else ctx.lineTo(hx, hy);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = isCenter ? '#000' : '#fff';
  ctx.font = 'bold 22px monospace';
  ctx.textAlign = 'center';
  ctx.fillText(text, x, y + 8);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const cx = canvas.width / 2;
  const cy = canvas.height * 0.55;
  const hexR = 35;
  const dist = hexR * 1.8;
  
  // Check Center
  if (Math.hypot(mx - cx, my - cy) <= hexR) {
    currentInput += currentHoneycomb.center;
    window.sfx.playHexTap();
    updateHud();
    return;
  }
  
  // Check 6 Outer
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI / 3) - Math.PI / 2;
    const hx = cx + dist * Math.cos(angle);
    const hy = cy + dist * Math.sin(angle);
    if (Math.hypot(mx - hx, my - hy) <= hexR) {
      currentInput += currentHoneycomb.outer[i];
      window.sfx.playHexTap();
      updateHud();
      return;
    }
  }
});

document.getElementById('submitBtn').addEventListener('click', submitWord);
document.getElementById('deleteBtn').addEventListener('click', deleteLetter);
document.getElementById('restartBtn').addEventListener('click', () => initForge(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initForge(currentLevel + 1);
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
    initForge(t.id);
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
  if (e.key === 'Enter') submitWord();
  else if (e.key === 'Backspace') deleteLetter();
  else {
    const k = e.key.toUpperCase();
    const all = [currentHoneycomb.center, ...currentHoneycomb.outer];
    if (all.includes(k)) {
      currentInput += k;
      window.sfx.playHexTap();
      updateHud();
    }
  }
});

resizeCanvas();
initForge(1);
render();
