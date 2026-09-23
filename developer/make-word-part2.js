/**
 * Next Games/Game — Word Category Part 2:
 * - quantum-crossword (Game 74)
 * - typing-blitzkrieg (Game 75)
 * - lexicon-link (Game 76)
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');
const thumbsDir = path.join(rootDir, 'assets', 'thumbnails');

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

function copyThumbnailToIcon(gameId) {
  const thumbPath = path.join(thumbsDir, `${gameId}.svg`);
  const iconPath = path.join(gamesDir, gameId, 'assets', 'icon.svg');
  if (fs.existsSync(thumbPath)) {
    const content = fs.readFileSync(thumbPath, 'utf-8');
    writeFile(iconPath, content);
  } else {
    const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#020f06" stroke="#00ff88" stroke-width="4"/><polygon points="50,20 80,75 20,75" fill="#ffd600"/></svg>`;
    writeFile(iconPath, fallback);
  }
}

const WORD_THEMES_CODE = `const THEMES = [
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
];`;

// ============================================================================
// GAME 74: QUANTUM CROSSWORD: CYBER MINI-PUZZLES
// ============================================================================
console.log('Building Game 74: quantum-crossword...');
const qcDir = path.join(gamesDir, 'quantum-crossword');

const qcHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Quantum Crossword: Cyber Mini-Puzzles - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Mini Crossword</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Clue Selected</div><div id="clueVal" class="hud-val" style="color:#00ff88;">1-ACROSS: Photonic light beam</div></div>
      <div class="hud-box"><div class="hud-lbl">Progress</div><div id="progressVal" class="hud-val" style="color:#00f0ff;">0 / 25 CELLS</div></div>
      <div class="hud-box"><div class="hud-lbl">Direction</div><div id="dirVal" class="hud-val" style="color:#ffd600;">ACROSS [TAB]</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="clue-list-wrap">
      <div class="clue-col" id="acrossCol"><h3>ACROSS</h3></div>
      <div class="clue-col" id="downCol"><h3>DOWN</h3></div>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">PUZZLES (1-45)</button>
      <button id="checkBtn" class="action-btn check-btn">CHECK SOLUTION</button>
      <button id="restartBtn" class="action-btn">CLEAR</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT PUZZLE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">QUANTUM CROSSWORD</h1>
        <p id="overlayDesc">Solve compact 5x5 mini crossword puzzles packed with clever technology, science, and gaming clues across 45 stages!</p>
        <button id="startBtn" class="glow-btn">ENTER CROSSWORD</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT MINI CROSSWORD (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const qcCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #030817; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(3,10,24,0.92); padding: 8px 16px; border-bottom: 2px solid #00e5ff; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 14px; font-weight: bold; color: #00e5ff; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.clue-list-wrap { background: rgba(4,12,30,0.95); display: flex; border-top: 1px solid #142848; height: 120px; overflow-y: auto; }
.clue-col { flex: 1; padding: 6px 14px; }
.clue-col h3 { font-size: 11px; color: #ffd600; margin-bottom: 4px; letter-spacing: 1px; }
.clue-item { font-size: 11px; color: #b2ebf2; padding: 2px 0; cursor: pointer; }
.clue-item.active { color: #00ff88; font-weight: bold; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(3,10,24,0.92); padding: 6px; border-top: 1px solid #142848; flex-wrap: wrap; }
.action-btn { background: #0c1c38; color: #00e5ff; border: 1px solid #00e5ff; padding: 6px 14px; font-weight: bold; font-size: 12px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #00e5ff; color: #000; box-shadow: 0 0 10px #00e5ff; }
.check-btn { background: #39ff14; color: #000; border-color: #39ff14; }
.check-btn:hover { background: #fff; box-shadow: 0 0 12px #39ff14; }
.next-btn { background: #ffd600; color: #000; border-color: #ffd600; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #ffd600; }
.overlay { position: absolute; inset: 0; background: rgba(2,5,15,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #07152d; border: 2px solid #00e5ff; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(0,229,255,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #00e5ff; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #b2ebf2; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #00e5ff; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #00e5ff; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #0f2244; border: 1px solid #1c3d75; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #00e5ff; color: #00e5ff; }
.lvl-btn.active { background: #00e5ff; color: #000; }`;

const qcAudio = `// Web Audio API procedural sound synthesis for Quantum Crossword
class SoundFx {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playKeypress() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(420, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }
  playWordComplete() {
    this.init();
    [523.25, 659.25].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.08 + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.18);
    });
  }
  playPuzzleComplete() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.1 + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.35);
    });
  }
}
window.sfx = new SoundFx();`;

const qcGame = `${WORD_THEMES_CODE}

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
`;

writeFile(path.join(qcDir, 'index.html'), qcHtml);
writeFile(path.join(qcDir, 'style.css'), qcCss);
writeFile(path.join(qcDir, 'audio.js'), qcAudio);
writeFile(path.join(qcDir, 'game.js'), qcGame);
copyThumbnailToIcon('quantum-crossword');
console.log('Game 74 (quantum-crossword) built successfully.');

// ============================================================================
// GAME 75: TYPING BLITZKRIEG: RAPID TERMINAL INFILTRATOR
// ============================================================================
console.log('Building Game 75: typing-blitzkrieg...');
const tbDir = path.join(gamesDir, 'typing-blitzkrieg');

const tbHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Typing Blitzkrieg: Rapid Terminal Infiltrator - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Radar Defense</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Security Shields</div><div id="shieldsVal" class="hud-val" style="color:#00ff88;">3 SHIELDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Drones Vaporized</div><div id="dronesVal" class="hud-val" style="color:#ffd600;">0 / 15 DESTROYED</div></div>
      <div class="hud-box"><div class="hud-lbl">Typing Buffer</div><div id="bufferVal" class="hud-val" style="color:#ff007f;">TYPE WORD TO FIRE</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">SECTORS (1-45)</button>
      <input type="text" id="typeInput" class="type-input" placeholder="CLICK HERE OR TYPE ON KEYBOARD..." autocomplete="off">
      <button id="restartBtn" class="action-btn">RELOAD</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT SECTOR &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">TYPING BLITZKRIEG</h1>
        <p id="overlayDesc">Type descending enemy hacker code words accurately to fire laser beams and vaporize them before perimeter breach across 45 stages!</p>
        <button id="startBtn" class="glow-btn">ENGAGE RADAR</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT RADAR SECTOR (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const tbCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #0a0214; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(10,2,20,0.92); padding: 8px 16px; border-bottom: 2px solid #ff007f; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ff007f; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(10,2,20,0.92); padding: 8px; border-top: 1px solid #300c3b; flex-wrap: wrap; }
.type-input { background: #1b0730; color: #00ff88; border: 2px solid #00ff88; padding: 8px 16px; font-family: monospace; font-size: 16px; font-weight: bold; border-radius: 6px; width: 320px; outline: none; text-transform: uppercase; }
.type-input:focus { box-shadow: 0 0 12px #00ff88; }
.action-btn { background: #1c0633; color: #ff007f; border: 1px solid #ff007f; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ff007f; color: #fff; box-shadow: 0 0 10px #ff007f; }
.next-btn { background: #00ff88; color: #000; border-color: #00ff88; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00ff88; }
.overlay { position: absolute; inset: 0; background: rgba(5,1,10,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #18042b; border: 2px solid #ff007f; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,0,127,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ff007f; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #eed5fc; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ff007f; color: #fff; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ff007f; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #1c0836; border: 1px solid #43167a; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ff007f; color: #ff007f; }
.lvl-btn.active { background: #ff007f; color: #fff; }`;

const tbAudio = `// Web Audio API procedural sound synthesis for Typing Blitzkrieg
class SoundFx {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playTypeClick() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(500, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }
  playLaserZap() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(900, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
  playShieldBreach() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playVictory() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.3);
    });
  }
}
window.sfx = new SoundFx();`;

const tbGame = `${WORD_THEMES_CODE}

const DRONE_WORDS = [
  "VIRUS", "TROJAN", "WORM", "BOTNET", "PHISH", "SPYWARE", "ROOTKIT", "MALWARE",
  "EXPLOIT", "PAYLOAD", "INJECT", "KEYLOG", "CIPHER", "ATTACK", "BREACH", "DAEMON"
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const typeInput = document.getElementById('typeInput');

let currentLevel = 1;
let currentTheme = THEMES[0];
let shields = 3; // multi-shield protection buffer
let invulnerable = true;
let invulnTimer = 0;
let destroyedCount = 0;
let targetDestroyed = 15;
let drones = [];
let spawnTimer = 0;
let laserBeam = null; // { x, y }

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initSector(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  shields = 3;
  invulnTimer = 0;
  destroyedCount = 0;
  targetDestroyed = 12 + lvl * 2;
  drones = [];
  spawnTimer = 0;
  laserBeam = null;
  typeInput.value = "";
  document.getElementById('nextBtn').style.display = 'none';
  updateHud();
}

function updateHud() {
  document.getElementById('shieldsVal').innerText = shields + ' / 3 SHIELDS';
  document.getElementById('dronesVal').innerText = destroyedCount + ' / ' + targetDestroyed + ' DESTROYED';
  document.getElementById('bufferVal').innerText = typeInput.value ? typeInput.value.toUpperCase() : 'TYPE WORD TO FIRE';
  
  if (destroyedCount >= targetDestroyed) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function spawnDrone() {
  const word = DRONE_WORDS[Math.floor(Math.random() * DRONE_WORDS.length)];
  const x = 60 + Math.random() * (canvas.width - 120);
  const speed = 0.45 + currentLevel * 0.05;
  drones.push({
    word: word,
    x: x,
    y: 20,
    speed: speed
  });
}

function updateGame() {
  spawnTimer++;
  if (spawnTimer > 110 && drones.length < 5 && destroyedCount + drones.length < targetDestroyed) {
    spawnTimer = 0;
    spawnDrone();
  }
  
  if (invulnTimer > 0) invulnTimer--;
  
  // Move drones
  for (let i = drones.length - 1; i >= 0; i--) {
    const d = drones[i];
    d.y += d.speed;
    
    // Check perimeter breach
    if (d.y >= canvas.height - 40) {
      drones.splice(i, 1);
      if (invulnTimer <= 0) {
        shields--;
        invulnTimer = 60;
        window.sfx.playShieldBreach();
        if (shields <= 0) shields = 3; // fair multi-life grace buffer
      }
      updateHud();
    }
  }
}

typeInput.addEventListener('input', () => {
  window.sfx.playTypeClick();
  const val = typeInput.value.trim().toUpperCase();
  updateHud();
  
  // Check if typed text matches any drone word
  const matchIdx = drones.findIndex(d => d.word === val);
  if (matchIdx >= 0) {
    const matched = drones[matchIdx];
    laserBeam = { x: matched.x, y: matched.y };
    drones.splice(matchIdx, 1);
    destroyedCount++;
    window.sfx.playLaserZap();
    typeInput.value = "";
    updateHud();
    
    if (destroyedCount >= targetDestroyed) {
      window.sfx.playVictory();
    }
  }
});

// Canvas Rendering
function render() {
  updateGame();
  
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Radar Sweep Circles
  ctx.strokeStyle = 'rgba(0,255,136,0.1)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height, canvas.height * 0.8, 0, Math.PI, true);
  ctx.arc(canvas.width / 2, canvas.height, canvas.height * 0.5, 0, Math.PI, true);
  ctx.arc(canvas.width / 2, canvas.height, canvas.height * 0.25, 0, Math.PI, true);
  ctx.stroke();
  
  // Defensive Laser Turret at bottom
  ctx.fillStyle = currentTheme.primary;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height - 15, 24, Math.PI, 0);
  ctx.fill();
  
  // Laser firing line
  if (laserBeam) {
    ctx.strokeStyle = '#00ff88';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height - 20);
    ctx.lineTo(laserBeam.x, laserBeam.y);
    ctx.stroke();
    laserBeam = null; // Flash for 1 frame
  }
  
  // Render Descending Drones
  drones.forEach(d => {
    // Drone polygon body
    ctx.fillStyle = '#1c0524';
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(d.x, d.y - 12);
    ctx.lineTo(d.x + 18, d.y + 6);
    ctx.lineTo(d.x, d.y + 14);
    ctx.lineTo(d.x - 18, d.y + 6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Word Label Banner
    ctx.fillStyle = '#ffd600';
    ctx.font = 'bold 13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(d.word, d.x, d.y - 18);
  });
  
  requestAnimationFrame(render);
}

document.getElementById('restartBtn').addEventListener('click', () => initSector(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
  typeInput.focus();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initSector(currentLevel + 1);
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
    initSector(t.id);
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
initSector(1);
render();
`;

writeFile(path.join(tbDir, 'index.html'), tbHtml);
writeFile(path.join(tbDir, 'style.css'), tbCss);
writeFile(path.join(tbDir, 'audio.js'), tbAudio);
writeFile(path.join(tbDir, 'game.js'), tbGame);
copyThumbnailToIcon('typing-blitzkrieg');
console.log('Game 75 (typing-blitzkrieg) built successfully.');

// ============================================================================
// GAME 76: LEXICON LINK: WORD ASSOCIATION CHAIN
// ============================================================================
console.log('Building Game 76: lexicon-link...');
const llDir = path.join(gamesDir, 'lexicon-link');

const llHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Lexicon Link: Word Association Chain - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Association Board</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Categories Solved</div><div id="categoriesVal" class="hud-val" style="color:#00ff88;">0 / 4 CATEGORIES</div></div>
      <div class="hud-box"><div class="hud-lbl">Mistakes Buffer</div><div id="mistakesVal" class="hud-val" style="color:#ffd600;">● ● ● ● (4 LEFT)</div></div>
      <div class="hud-box"><div class="hud-lbl">Selected Tiles</div><div id="selectedCountVal" class="hud-val" style="color:#00f0ff;">0 / 4 TILES</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">BOARDS (1-45)</button>
      <button id="submitBtn" class="action-btn submit-btn">SUBMIT (4 TILES)</button>
      <button id="deselectBtn" class="action-btn">DESELECT ALL</button>
      <button id="restartBtn" class="action-btn">RESET</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT BOARD &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">LEXICON LINK</h1>
        <p id="overlayDesc">Group 16 technology and cultural words into 4 secret categories of 4 items each across 45 staged puzzle levels!</p>
        <button id="startBtn" class="glow-btn">ENTER LEXICON</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT ASSOCIATION BOARD (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const llCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #070312; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(7,3,18,0.92); padding: 8px 16px; border-bottom: 2px solid #d500f9; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #d500f9; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(7,3,18,0.92); padding: 8px; border-top: 1px solid #2d0b45; flex-wrap: wrap; }
.action-btn { background: #19062b; color: #d500f9; border: 1px solid #d500f9; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #d500f9; color: #000; box-shadow: 0 0 10px #d500f9; }
.submit-btn { background: #ffd600; color: #000; border-color: #ffd600; }
.submit-btn:hover { background: #fff; box-shadow: 0 0 12px #ffd600; }
.next-btn { background: #00ff88; color: #000; border-color: #00ff88; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00ff88; }
.overlay { position: absolute; inset: 0; background: rgba(3,1,8,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #130424; border: 2px solid #d500f9; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(213,0,249,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #d500f9; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #eed5fc; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #d500f9; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #d500f9; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #1c0836; border: 1px solid #43167a; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #d500f9; color: #d500f9; }
.lvl-btn.active { background: #d500f9; color: #000; }`;

const llAudio = `// Web Audio API procedural sound synthesis for Lexicon Link
class SoundFx {
  constructor() {
    this.ctx = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playTileTap() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
  playCategorySuccess() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.08 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.3);
    });
  }
  playErrorBuzz() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
}
window.sfx = new SoundFx();`;

const llGame = `${WORD_THEMES_CODE}

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
`;

writeFile(path.join(llDir, 'index.html'), llHtml);
writeFile(path.join(llDir, 'style.css'), llCss);
writeFile(path.join(llDir, 'audio.js'), llAudio);
writeFile(path.join(llDir, 'game.js'), llGame);
copyThumbnailToIcon('lexicon-link');
console.log('Game 76 (lexicon-link) built successfully.');
