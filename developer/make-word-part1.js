/**
 * Next Games/Game — Word Category Part 1:
 * - terminal-wordle (Game 71)
 * - cyber-word-search (Game 72)
 * - syntax-anagram-scrambler (Game 73)
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
// GAME 71: TERMINAL WORDLE: 5-LETTER HACKING GUESS
// ============================================================================
console.log('Building Game 71: terminal-wordle...');
const twDir = path.join(gamesDir, 'terminal-wordle');

const twHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Terminal Wordle: 5-Letter Hacking Guess - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Security Terminal</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Breach Target</div><div id="targetVal" class="hud-val">5-LETTER PASSWORD</div></div>
      <div class="hud-box"><div class="hud-lbl">Attempts Remaining</div><div id="attemptsVal" class="hud-val" style="color:#00ff88;">6 / 6 ATTEMPTS</div></div>
      <div class="hud-box"><div class="hud-lbl">System Status</div><div id="statusVal" class="hud-val" style="color:#ffd600;">READY FOR INPUT</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="keyboard-wrap" id="keyboardWrap"></div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">TERMINALS (1-45)</button>
      <button id="restartBtn" class="action-btn">RESET</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT TERMINAL &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">TERMINAL WORDLE</h1>
        <p id="overlayDesc">Deduce 5-letter cryptographic passwords in 6 attempts with color-coded feedback across 45 unique security breach stages!</p>
        <button id="startBtn" class="glow-btn">ENTER TERMINAL</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT SECURITY TERMINAL (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const twCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #020f06; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(2,15,6,0.92); padding: 8px 16px; border-bottom: 2px solid #00ff88; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #00ff88; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.keyboard-wrap { background: rgba(3,18,8,0.95); padding: 6px; display: flex; flex-direction: column; align-items: center; gap: 5px; border-top: 1px solid #134020; }
.kb-row { display: flex; gap: 4px; }
.key-btn { background: #092612; color: #e8f5e9; border: 1px solid #1a5228; min-width: 32px; height: 42px; border-radius: 4px; font-family: monospace; font-weight: bold; font-size: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0 6px; }
.key-btn:hover { background: #00ff88; color: #000; }
.key-btn.correct { background: #00e676; color: #000; border-color: #00e676; }
.key-btn.present { background: #ffd600; color: #000; border-color: #ffd600; }
.key-btn.absent { background: #263238; color: #78909c; border-color: #37474f; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(2,15,6,0.92); padding: 6px; border-top: 1px solid #134020; flex-wrap: wrap; }
.action-btn { background: #092612; color: #00ff88; border: 1px solid #00ff88; padding: 6px 14px; font-weight: bold; font-size: 12px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #00ff88; color: #000; box-shadow: 0 0 10px #00ff88; }
.next-btn { background: #ffd600; color: #000; border-color: #ffd600; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #ffd600; }
.overlay { position: absolute; inset: 0; background: rgba(1,8,3,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #07210e; border: 2px solid #00ff88; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(0,255,136,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #00ff88; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #c8e6c9; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #00ff88; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #00ff88; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #092612; border: 1px solid #1a5228; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #00ff88; color: #00ff88; }
.lvl-btn.active { background: #00ff88; color: #000; }`;

const twAudio = `// Web Audio API procedural sound synthesis for Terminal Wordle
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
  playKeyClick() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }
  playTileFlip(col = 0, isCorrect = false) {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = isCorrect ? 'sine' : 'triangle';
    const baseFreq = isCorrect ? 520 : 320;
    osc.frequency.setValueAtTime(baseFreq + col * 75, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
  playWinFanfare() {
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
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
}
window.sfx = new SoundFx();`;

const twGame = `${WORD_THEMES_CODE}

const PASSWORDS = [
  "CYBER", "PROXY", "LOGIC", "LASER", "CLOUD", "SHIFT", "VIRUS", "RADAR", "FIBER", "CRANE",
  "GHOST", "ORBIT", "SOLAR", "CHIPS", "DRIVE", "FLASH", "PIXEL", "INTEL", "STACK", "ARRAY",
  "MODEM", "PATCH", "RESET", "POWER", "SPEED", "TOWER", "TRACE", "ROBOT", "AUDIO", "VIDEO",
  "SMART", "MICRO", "MACRO", "BLOCK", "CHAIN", "SPARK", "ALPHA", "OMEGA", "DELTA", "GAMMA",
  "PULSE", "SONAR", "SYNTH", "QUANT", "NEXUS"
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let targetWord = "CYBER";
let guesses = []; // array of 5-letter strings
let currentGuess = "";
let gameOver = false;
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
  
  targetWord = PASSWORDS[(lvl - 1) % PASSWORDS.length];
  guesses = [];
  currentGuess = "";
  gameOver = false;
  document.getElementById('nextBtn').style.display = 'none';
  
  resetKeyboardUI();
  updateHud();
}

function updateHud() {
  const attemptsLeft = 6 - guesses.length;
  document.getElementById('attemptsVal').innerText = attemptsLeft + ' / 6 ATTEMPTS';
  
  if (gameOver) {
    if (guesses.includes(targetWord)) {
      document.getElementById('statusVal').innerText = 'BREACH SUCCESS! PASSWORD: ' + targetWord;
      document.getElementById('nextBtn').style.display = 'inline-block';
    } else {
      document.getElementById('statusVal').innerText = 'BREACH FAILED! PASSWORD: ' + targetWord;
    }
  } else {
    document.getElementById('statusVal').innerText = 'DECRYPTING PASSWORD...';
  }
}

function handleKeyPress(char) {
  if (gameOver) return;
  
  if (char === 'ENTER') {
    if (currentGuess.length === 5) {
      submitGuess();
    } else {
      window.sfx.playErrorBuzz();
    }
  } else if (char === 'BACK' || char === 'BACKSPACE') {
    if (currentGuess.length > 0) {
      currentGuess = currentGuess.slice(0, -1);
      window.sfx.playKeyClick();
    }
  } else if (/^[A-Z]$/.test(char)) {
    if (currentGuess.length < 5) {
      currentGuess += char;
      window.sfx.playKeyClick();
    }
  }
}

function submitGuess() {
  const guess = currentGuess;
  guesses.push(guess);
  currentGuess = "";
  
  // Audio flips
  for (let i = 0; i < 5; i++) {
    const isCorrect = (guess[i] === targetWord[i]);
    setTimeout(() => {
      window.sfx.playTileFlip(i, isCorrect);
    }, i * 100);
  }
  
  updateKeyboardStatuses(guess);
  
  if (guess === targetWord) {
    gameOver = true;
    setTimeout(() => {
      window.sfx.playWinFanfare();
      updateHud();
    }, 600);
  } else if (guesses.length === 6) {
    gameOver = true;
    setTimeout(() => {
      window.sfx.playErrorBuzz();
      updateHud();
    }, 600);
  } else {
    updateHud();
  }
}

function evaluateTile(guess, idx) {
  const letter = guess[idx];
  if (targetWord[idx] === letter) return 'correct'; // Green
  if (targetWord.includes(letter)) return 'present'; // Yellow
  return 'absent'; // Gray
}

// Render Wordle Grid on Canvas
function render() {
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const cols = 5;
  const rows = 6;
  const tileSize = Math.min(48, Math.floor((canvas.height - 7 * 8) / rows));
  const gap = 8;
  const startX = (canvas.width - (cols * tileSize + (cols - 1) * gap)) / 2;
  const startY = (canvas.height - (rows * tileSize + (rows - 1) * gap)) / 2;
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const tx = startX + c * (tileSize + gap);
      const ty = startY + r * (tileSize + gap);
      
      let letter = "";
      let status = "empty";
      
      if (r < guesses.length) {
        letter = guesses[r][c];
        status = evaluateTile(guesses[r], c);
      } else if (r === guesses.length && c < currentGuess.length) {
        letter = currentGuess[c];
        status = "typing";
      }
      
      // Draw Tile Box
      if (status === 'correct') {
        ctx.fillStyle = '#00e676';
        ctx.strokeStyle = '#fff';
      } else if (status === 'present') {
        ctx.fillStyle = '#ffd600';
        ctx.strokeStyle = '#fff';
      } else if (status === 'absent') {
        ctx.fillStyle = '#263238';
        ctx.strokeStyle = '#37474f';
      } else if (status === 'typing') {
        ctx.fillStyle = '#0a2215';
        ctx.strokeStyle = currentTheme.primary;
      } else {
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.strokeStyle = '#1e3828';
      }
      
      ctx.lineWidth = (status === 'typing' || status === 'correct') ? 2 : 1;
      ctx.fillRect(tx, ty, tileSize, tileSize);
      ctx.strokeRect(tx, ty, tileSize, tileSize);
      
      // Draw Letter
      if (letter) {
        ctx.fillStyle = (status === 'correct' || status === 'present') ? '#000' : '#fff';
        ctx.font = 'bold ' + Math.floor(tileSize * 0.55) + 'px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(letter, tx + tileSize / 2, ty + tileSize * 0.7);
      }
    }
  }
  
  requestAnimationFrame(render);
}

// Build Virtual Keyboard
const KB_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
];

const keyboardWrap = document.getElementById('keyboardWrap');

function buildKeyboard() {
  keyboardWrap.innerHTML = "";
  KB_ROWS.forEach(row => {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'kb-row';
    row.forEach(key => {
      const btn = document.createElement('button');
      btn.className = 'key-btn';
      btn.id = 'key-' + key;
      btn.innerText = (key === 'BACK') ? '⌫' : key;
      btn.addEventListener('click', () => handleKeyPress(key));
      rowDiv.appendChild(btn);
    });
    keyboardWrap.appendChild(rowDiv);
  });
}

function updateKeyboardStatuses(guess) {
  for (let i = 0; i < 5; i++) {
    const letter = guess[i];
    const keyBtn = document.getElementById('key-' + letter);
    if (!keyBtn) continue;
    
    const status = evaluateTile(guess, i);
    if (status === 'correct') {
      keyBtn.className = 'key-btn correct';
    } else if (status === 'present' && !keyBtn.classList.contains('correct')) {
      keyBtn.className = 'key-btn present';
    } else if (status === 'absent' && !keyBtn.classList.contains('correct') && !keyBtn.classList.contains('present')) {
      keyBtn.className = 'key-btn absent';
    }
  }
}

function resetKeyboardUI() {
  document.querySelectorAll('.key-btn').forEach(b => {
    b.className = 'key-btn';
  });
}

// Physical Keyboard Listener
window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleKeyPress('ENTER');
  else if (e.key === 'Backspace') handleKeyPress('BACK');
  else if (/^[a-zA-Z]$/.test(e.key)) handleKeyPress(e.key.toUpperCase());
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

buildKeyboard();
resizeCanvas();
initTerminal(1);
render();
`;

writeFile(path.join(twDir, 'index.html'), twHtml);
writeFile(path.join(twDir, 'style.css'), twCss);
writeFile(path.join(twDir, 'audio.js'), twAudio);
writeFile(path.join(twDir, 'game.js'), twGame);
copyThumbnailToIcon('terminal-wordle');
console.log('Game 71 (terminal-wordle) built successfully.');

// ============================================================================
// GAME 72: CYBER WORD SEARCH: MATRIX GRID HUNTER
// ============================================================================
console.log('Building Game 72: cyber-word-search...');
const wsDir = path.join(gamesDir, 'cyber-word-search');

const wsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyber Word Search: Matrix Grid Hunter - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Matrix Theme</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Words Found</div><div id="wordsVal" class="hud-val" style="color:#00ff88;">0 / 5 FOUND</div></div>
      <div class="hud-box"><div class="hud-lbl">Time Elapsed</div><div id="timeVal" class="hud-val" style="color:#00f0ff;">00:00</div></div>
      <div class="hud-box"><div class="hud-lbl">Target Checklist</div><div id="checklistVal" class="hud-val" style="color:#ffd600;">CYBER, LASER...</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="word-list-bar" id="wordListBar"></div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">MATRICES (1-45)</button>
      <button id="restartBtn" class="action-btn">RESET</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT MATRIX &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBER WORD SEARCH</h1>
        <p id="overlayDesc">Drag across letter grids to locate hidden sci-fi and cybersecurity terms across 45 matrix puzzle levels!</p>
        <button id="startBtn" class="glow-btn">ENTER MATRIX</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT MATRIX PUZZLE (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const wsCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #030a17; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(3,10,24,0.92); padding: 8px 16px; border-bottom: 2px solid #00f0ff; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #00f0ff; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; cursor: crosshair; }
.word-list-bar { background: rgba(4,12,28,0.95); padding: 8px 12px; display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; border-top: 1px solid #142a48; }
.word-chip { background: #0c1c38; color: #80d8ff; padding: 4px 10px; border-radius: 4px; font-family: monospace; font-size: 12px; font-weight: bold; border: 1px solid #1c3b70; }
.word-chip.found { background: #00ff88; color: #000; text-decoration: line-through; border-color: #00ff88; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(3,10,24,0.92); padding: 8px; border-top: 1px solid #142a48; flex-wrap: wrap; }
.action-btn { background: #0c1c38; color: #00f0ff; border: 1px solid #00f0ff; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #00f0ff; color: #000; box-shadow: 0 0 10px #00f0ff; }
.next-btn { background: #ff007f; color: #fff; border-color: #ff007f; }
.next-btn:hover { background: #fff; color: #ff007f; box-shadow: 0 0 12px #ff007f; }
.overlay { position: absolute; inset: 0; background: rgba(2,5,15,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #07152d; border: 2px solid #00f0ff; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(0,240,255,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #00f0ff; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #b2ebf2; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #00f0ff; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #00f0ff; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #0f2244; border: 1px solid #1c3d75; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #00f0ff; color: #00f0ff; }
.lvl-btn.active { background: #00f0ff; color: #000; }`;

const wsAudio = `// Web Audio API procedural sound synthesis for Cyber Word Search
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
  playDragTick() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.03);
    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.03);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.03);
  }
  playWordFound() {
    this.init();
    [523.25, 659.25, 783.99].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.07);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.07 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.07);
      osc.stop(this.ctx.currentTime + i * 0.07 + 0.2);
    });
  }
  playLevelComplete() {
    this.init();
    [440, 554.37, 659.25, 880].forEach((f, i) => {
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

const wsGame = `${WORD_THEMES_CODE}

const WORD_POOLS = [
  ["CYBER", "LASER", "QUANTUM", "PROXY", "PIXEL"],
  ["NEXUS", "ROBOT", "CHIPS", "FIBER", "SOLAR"],
  ["RADAR", "MODEM", "STACK", "ARRAY", "PATCH"],
  ["VIRUS", "DRIVE", "POWER", "SPEED", "TOWER"],
  ["ALPHA", "OMEGA", "DELTA", "GAMMA", "SONAR"],
  ["SYNTH", "BLOCK", "CHAIN", "SPARK", "TRACE"]
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let grid = [];
let gridSize = 10;
let targetWords = [];
let foundWords = [];
let startTime = Date.now();
let invulnerable = true; // protection buffer against instant failure

let isDragging = false;
let dragStart = null; // { r, c }
let dragEnd = null;   // { r, c }

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
  
  targetWords = WORD_POOLS[(lvl - 1) % WORD_POOLS.length];
  foundWords = [];
  gridSize = (lvl > 25) ? 11 : 10;
  startTime = Date.now();
  document.getElementById('nextBtn').style.display = 'none';
  
  generateWordGrid();
  renderWordListUI();
  updateHud();
}

function generateWordGrid() {
  grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));
  
  // Directions: [dr, dc] (horizontal, vertical, diagonal down-right)
  const DIRS = [
    [0, 1],   // H
    [1, 0],   // V
    [1, 1]    // D
  ];
  
  targetWords.forEach(word => {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 150) {
      attempts++;
      const dir = DIRS[Math.floor(Math.random() * DIRS.length)];
      const maxR = gridSize - dir[0] * (word.length - 1);
      const maxC = gridSize - dir[1] * (word.length - 1);
      
      if (maxR > 0 && maxC > 0) {
        const startR = Math.floor(Math.random() * maxR);
        const startC = Math.floor(Math.random() * maxC);
        
        // Check collision
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const r = startR + dir[0] * i;
          const c = startC + dir[1] * i;
          if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            canPlace = false;
            break;
          }
        }
        
        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            grid[startR + dir[0] * i][startC + dir[1] * i] = word[i];
          }
          placed = true;
        }
      }
    }
  });
  
  // Fill blanks with random letters
  const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (grid[r][c] === '') {
        grid[r][c] = LETTERS[Math.floor(Math.random() * LETTERS.length)];
      }
    }
  }
}

function updateHud() {
  document.getElementById('wordsVal').innerText = foundWords.length + ' / ' + targetWords.length + ' FOUND';
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const m = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const s = String(elapsed % 60).padStart(2, '0');
  document.getElementById('timeVal').innerText = m + ':' + s;
  
  if (foundWords.length === targetWords.length) {
    window.sfx.playLevelComplete();
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function renderWordListUI() {
  const bar = document.getElementById('wordListBar');
  bar.innerHTML = "";
  targetWords.forEach(w => {
    const chip = document.createElement('div');
    chip.className = 'word-chip' + (foundWords.includes(w) ? ' found' : '');
    chip.id = 'chip-' + w;
    chip.innerText = w;
    bar.appendChild(chip);
  });
}

function getGridCellFromPos(mx, my) {
  const cellSize = Math.min(42, Math.floor((canvas.height - 20) / gridSize));
  const startX = (canvas.width - gridSize * cellSize) / 2;
  const startY = (canvas.height - gridSize * cellSize) / 2;
  
  if (mx >= startX && mx <= startX + gridSize * cellSize && my >= startY && my <= startY + gridSize * cellSize) {
    const c = Math.floor((mx - startX) / cellSize);
    const r = Math.floor((my - startY) / cellSize);
    return { r, c };
  }
  return null;
}

function checkSelectedWord(start, end) {
  const dr = end.r - start.r;
  const dc = end.c - start.c;
  
  const stepR = dr === 0 ? 0 : (dr > 0 ? 1 : -1);
  const stepC = dc === 0 ? 0 : (dc > 0 ? 1 : -1);
  
  // Must be strictly horizontal, vertical, or 45-deg diagonal
  if (stepR !== 0 && stepC !== 0 && Math.abs(dr) !== Math.abs(dc)) return;
  if (stepR === 0 && stepC === 0) return;
  
  const len = Math.max(Math.abs(dr), Math.abs(dc)) + 1;
  let word = "";
  for (let i = 0; i < len; i++) {
    const r = start.r + stepR * i;
    const c = start.c + stepC * i;
    word += grid[r][c];
  }
  
  const revWord = word.split('').reverse().join('');
  let matched = null;
  if (targetWords.includes(word) && !foundWords.includes(word)) matched = word;
  else if (targetWords.includes(revWord) && !foundWords.includes(revWord)) matched = revWord;
  
  if (matched) {
    foundWords.push(matched);
    window.sfx.playWordFound();
    const chip = document.getElementById('chip-' + matched);
    if (chip) chip.classList.add('found');
    updateHud();
  }
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const cellSize = Math.min(42, Math.floor((canvas.height - 20) / gridSize));
  const startX = (canvas.width - gridSize * cellSize) / 2;
  const startY = (canvas.height - gridSize * cellSize) / 2;
  
  // Outer matrix frame
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 2;
  ctx.strokeRect(startX - 4, startY - 4, gridSize * cellSize + 8, gridSize * cellSize + 8);
  
  // Render Cells
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const cx = startX + c * cellSize;
      const cy = startY + r * cellSize;
      
      ctx.strokeStyle = 'rgba(0,240,255,0.12)';
      ctx.strokeRect(cx, cy, cellSize, cellSize);
      
      ctx.fillStyle = currentTheme.text;
      ctx.font = 'bold ' + Math.floor(cellSize * 0.48) + 'px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(grid[r][c], cx + cellSize / 2, cy + cellSize * 0.68);
    }
  }
  
  // Render Selection Drag Capsule
  if (isDragging && dragStart && dragEnd) {
    const x1 = startX + dragStart.c * cellSize + cellSize / 2;
    const y1 = startY + dragStart.r * cellSize + cellSize / 2;
    const x2 = startX + dragEnd.c * cellSize + cellSize / 2;
    const y2 = startY + dragEnd.r * cellSize + cellSize / 2;
    
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = cellSize * 0.75;
    ctx.lineCap = 'round';
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.globalAlpha = 1.0;
  }
  
  requestAnimationFrame(render);
}

// Mouse interaction
canvas.addEventListener('mousedown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const cell = getGridCellFromPos(e.clientX - rect.left, e.clientY - rect.top);
  if (cell) {
    isDragging = true;
    dragStart = cell;
    dragEnd = cell;
    window.sfx.playDragTick();
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const rect = canvas.getBoundingClientRect();
  const cell = getGridCellFromPos(e.clientX - rect.left, e.clientY - rect.top);
  if (cell && (cell.r !== dragEnd.r || cell.c !== dragEnd.c)) {
    dragEnd = cell;
    window.sfx.playDragTick();
  }
});

canvas.addEventListener('mouseup', () => {
  if (isDragging && dragStart && dragEnd) {
    checkSelectedWord(dragStart, dragEnd);
  }
  isDragging = false;
  dragStart = null;
  dragEnd = null;
});

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

writeFile(path.join(wsDir, 'index.html'), wsHtml);
writeFile(path.join(wsDir, 'style.css'), wsCss);
writeFile(path.join(wsDir, 'audio.js'), wsAudio);
writeFile(path.join(wsDir, 'game.js'), wsGame);
copyThumbnailToIcon('cyber-word-search');
console.log('Game 72 (cyber-word-search) built successfully.');

// ============================================================================
// GAME 73: SYNTAX ANAGRAM SCRAMBLER: CODE BREAKER
// ============================================================================
console.log('Building Game 73: syntax-anagram-scrambler...');
const saDir = path.join(gamesDir, 'syntax-anagram-scrambler');

const saHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Syntax Anagram Scrambler: Code Breaker - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Compiler Engine</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Target Score</div><div id="scoreVal" class="hud-val">0 / 200 PTS</div></div>
      <div class="hud-box"><div class="hud-lbl">Master Word Length</div><div id="masterVal" class="hud-val" style="color:#00ff88;">6 LETTERS</div></div>
      <div class="hud-box"><div class="hud-lbl">Current Spelling</div><div id="currentVal" class="hud-val" style="color:#ffd600;">_ _ _ _ _ _</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">ENGINES (1-45)</button>
      <button id="submitBtn" class="action-btn submit-btn">SUBMIT WORD [ENTER]</button>
      <button id="clearBtn" class="action-btn">CLEAR [BACK]</button>
      <button id="restartBtn" class="action-btn">SHUFFLE</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT ENGINE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">SYNTAX ANAGRAM SCRAMBLER</h1>
        <p id="overlayDesc">Unscramble rotating letter wheels to discover code syntax words before the mainframe clock expires across 45 stages!</p>
        <button id="startBtn" class="glow-btn">ENTER COMPILER</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT COMPILER ENGINE (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const saCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #0e0501; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(14,5,1,0.92); padding: 8px 16px; border-bottom: 2px solid #ff9100; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ff9100; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(14,5,1,0.92); padding: 8px; border-top: 1px solid #3d1604; flex-wrap: wrap; }
.action-btn { background: #260d03; color: #ff9100; border: 1px solid #ff9100; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ff9100; color: #000; box-shadow: 0 0 10px #ff9100; }
.submit-btn { background: #ffd600; color: #000; border-color: #ffd600; }
.submit-btn:hover { background: #fff; box-shadow: 0 0 12px #ffd600; }
.next-btn { background: #00ff88; color: #000; border-color: #00ff88; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00ff88; }
.overlay { position: absolute; inset: 0; background: rgba(6,2,1,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #1c0902; border: 2px solid #ff9100; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,145,0,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ff9100; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #ffe0b2; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ff9100; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ff9100; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #260d03; border: 1px solid #541d06; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ff9100; color: #ff9100; }
.lvl-btn.active { background: #ff9100; color: #000; }`;

const saAudio = `// Web Audio API procedural sound synthesis for Syntax Anagram Scrambler
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
  playLetterTap() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(540, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(720, this.ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.06);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.06);
  }
  playWordSuccess() {
    this.init();
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.07);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.07 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.07);
      osc.stop(this.ctx.currentTime + i * 0.07 + 0.25);
    });
  }
  playErrorBuzz() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
}
window.sfx = new SoundFx();`;

const saGame = `${WORD_THEMES_CODE}

const MASTER_WORDS = [
  "SYNTAX", "PYTHON", "CODING", "KERNEL", "DOCKER", "SYSTEM", "BINARY", "BUFFER", "VECTOR", "PARSER",
  "THREAD", "SOCKET", "STRING", "OBJECT", "MEMORY", "ROUTER", "CIPHER", "DRIVER", "PACKET", "BRANCH",
  "IMPORT", "EXPORT", "MODULE", "NATIVE", "RANDOM", "RETURN", "LAMBDA", "SWITCH", "STATIC", "STRUCT",
  "SCHEMA", "SCRIPT", "SECURE", "SERVER", "SIGNAL", "SOURCE", "STREAM", "STATUS", "STABLE", "TARGET",
  "OUTPUT", "UPDATE", "UPLOAD", "VERIFY", "WINDOW"
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let masterWord = "SYNTAX";
let letters = [];
let selectedIndices = [];
let foundWords = [];
let score = 0;
let targetScore = 200;
let invulnerable = true; // protection buffer against instant failure

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initEngine(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  masterWord = MASTER_WORDS[(lvl - 1) % MASTER_WORDS.length];
  letters = masterWord.split('').sort(() => Math.random() - 0.5);
  selectedIndices = [];
  foundWords = [];
  score = 0;
  targetScore = 150 + lvl * 20;
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('masterVal').innerText = masterWord.length + ' LETTERS';
  updateHud();
}

function updateHud() {
  document.getElementById('scoreVal').innerText = score + ' / ' + targetScore + ' PTS';
  
  const currentSpelling = selectedIndices.map(i => letters[i]).join('');
  document.getElementById('currentVal').innerText = currentSpelling || '_ _ _ _ _ _';
  
  if (score >= targetScore || foundWords.includes(masterWord)) {
    document.getElementById('nextBtn').style.display = 'inline-block';
  }
}

function submitWord() {
  const word = selectedIndices.map(i => letters[i]).join('');
  if (word.length >= 3 && !foundWords.includes(word)) {
    // Valid word discovered
    foundWords.push(word);
    let pts = word.length * 25;
    if (word === masterWord) pts += 100;
    score += pts;
    window.sfx.playWordSuccess();
    selectedIndices = [];
    updateHud();
  } else {
    window.sfx.playErrorBuzz();
    selectedIndices = [];
    updateHud();
  }
}

function clearCurrent() {
  selectedIndices = [];
  window.sfx.playLetterTap();
  updateHud();
}

function shuffleLetters() {
  letters = letters.sort(() => Math.random() - 0.5);
  selectedIndices = [];
  window.sfx.playLetterTap();
  updateHud();
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height * 0.55;
  const radius = Math.min(canvas.width, canvas.height) * 0.28;
  
  // Wheel circle backdrop
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();
  
  // Center Submit Node
  ctx.fillStyle = '#ff9100';
  ctx.beginPath();
  ctx.arc(centerX, centerY, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#000';
  ctx.font = 'bold 15px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('ENTER', centerX, centerY + 5);
  
  // Outer Letter Nodes
  const total = letters.length;
  for (let i = 0; i < total; i++) {
    const angle = (i * 2 * Math.PI / total) - Math.PI / 2;
    const nx = centerX + radius * Math.cos(angle);
    const ny = centerY + radius * Math.sin(angle);
    
    const isSelected = selectedIndices.includes(i);
    ctx.fillStyle = isSelected ? '#ffd600' : '#1e0c03';
    ctx.strokeStyle = currentTheme.accent;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(nx, ny, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = isSelected ? '#000' : '#fff';
    ctx.font = 'bold 22px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(letters[i], nx, ny + 8);
  }
  
  // Found Words Cloud at Top
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.fillRect(20, 15, canvas.width - 40, 50);
  ctx.strokeStyle = currentTheme.primary;
  ctx.strokeRect(20, 15, canvas.width - 40, 50);
  
  ctx.fillStyle = currentTheme.accent;
  ctx.font = '12px monospace';
  ctx.textAlign = 'center';
  const foundStr = foundWords.length > 0 ? foundWords.join(', ') : 'FIND 3+ LETTER WORDS (TARGET: ' + masterWord.length + ' LETTERS)';
  ctx.fillText('DISCOVERED WORDS: ' + foundStr, canvas.width / 2, 45);
  
  requestAnimationFrame(render);
}

// Interaction
canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  const centerX = canvas.width / 2;
  const centerY = canvas.height * 0.55;
  const radius = Math.min(canvas.width, canvas.height) * 0.28;
  
  // Check Center Enter Click
  const distCenter = Math.hypot(mx - centerX, my - centerY);
  if (distCenter <= 32) {
    submitWord();
    return;
  }
  
  // Check Letter Node Clicks
  const total = letters.length;
  for (let i = 0; i < total; i++) {
    const angle = (i * 2 * Math.PI / total) - Math.PI / 2;
    const nx = centerX + radius * Math.cos(angle);
    const ny = centerY + radius * Math.sin(angle);
    
    if (Math.hypot(mx - nx, my - ny) <= 26) {
      if (!selectedIndices.includes(i)) {
        selectedIndices.push(i);
        window.sfx.playLetterTap();
        updateHud();
      }
      return;
    }
  }
});

document.getElementById('submitBtn').addEventListener('click', submitWord);
document.getElementById('clearBtn').addEventListener('click', clearCurrent);
document.getElementById('restartBtn').addEventListener('click', shuffleLetters);
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initEngine(currentLevel + 1);
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
    initEngine(t.id);
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
  else if (e.key === 'Backspace') clearCurrent();
});

resizeCanvas();
initEngine(1);
render();
`;

writeFile(path.join(saDir, 'index.html'), saHtml);
writeFile(path.join(saDir, 'style.css'), saCss);
writeFile(path.join(saDir, 'audio.js'), saAudio);
writeFile(path.join(saDir, 'game.js'), saGame);
copyThumbnailToIcon('syntax-anagram-scrambler');
console.log('Game 73 (syntax-anagram-scrambler) built successfully.');
