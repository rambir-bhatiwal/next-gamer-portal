/**
 * Next Games/Game — Word Category Part 3:
 * - cyber-hangman (Game 77)
 * - boggle-terminal (Game 78)
 * - binary-spelling-bee (Game 79)
 * - word-drop (Game 80)
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
// GAME 77: CYBER HANGMAN: AI SENTENCE RESCUE
// ============================================================================
console.log('Building Game 77: cyber-hangman...');
const chDir = path.join(gamesDir, 'cyber-hangman');

const chHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Cyber Hangman: AI Sentence Rescue - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Containment Chamber</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Rescue Status</div><div id="statusVal" class="hud-val" style="color:#00ff88;">6 SHIELDS INTACT</div></div>
      <div class="hud-box"><div class="hud-lbl">AI Phrase Clue</div><div id="clueVal" class="hud-val" style="color:#ffd600;">CYBERSECURITY TERM</div></div>
      <div class="hud-box"><div class="hud-lbl">Errors Allowed</div><div id="shieldDots" class="hud-val" style="color:#00e5ff;">● ● ● ● ● ●</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="keyboard-wrap" id="keyboardWrap"></div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">CHAMBERS (1-45)</button>
      <button id="restartBtn" class="action-btn">RELOAD</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT CHAMBER &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">CYBER HANGMAN</h1>
        <p id="overlayDesc">Prevent a rogue AI companion from memory purge by guessing letters to decode encrypted tech phrases across 45 rescue chambers!</p>
        <button id="startBtn" class="glow-btn">ENTER CHAMBER</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT RESCUE CHAMBER (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const chCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #08020d; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(8,2,14,0.92); padding: 8px 16px; border-bottom: 2px solid #ff1744; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 14px; font-weight: bold; color: #ff1744; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.keyboard-wrap { background: rgba(10,2,18,0.95); padding: 6px; display: flex; flex-direction: column; align-items: center; gap: 4px; border-top: 1px solid #360824; }
.kb-row { display: flex; gap: 4px; }
.key-btn { background: #1c0621; color: #e0f7fa; border: 1px solid #450f52; min-width: 30px; height: 38px; border-radius: 4px; font-family: monospace; font-weight: bold; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.key-btn:hover:not(:disabled) { background: #00e5ff; color: #000; }
.key-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(8,2,14,0.92); padding: 6px; border-top: 1px solid #360824; flex-wrap: wrap; }
.action-btn { background: #1c0621; color: #00e5ff; border: 1px solid #00e5ff; padding: 6px 14px; font-weight: bold; font-size: 12px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #00e5ff; color: #000; box-shadow: 0 0 10px #00e5ff; }
.next-btn { background: #00ff88; color: #000; border-color: #00ff88; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00ff88; }
.overlay { position: absolute; inset: 0; background: rgba(4,1,8,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #18031e; border: 2px solid #ff1744; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,23,68,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ff1744; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #fce4ec; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ff1744; color: #fff; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ff1744; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #1c0621; border: 1px solid #450f52; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ff1744; color: #ff1744; }
.lvl-btn.active { background: #ff1744; color: #fff; }`;

const chAudio = `// Web Audio API procedural sound synthesis for Cyber Hangman
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
  playLetterHit() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(660, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playShieldDischarge() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playRescueFanfare() {
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

const chGame = `${WORD_THEMES_CODE}

const PHRASES = [
  { phrase: "CYBERNETIC MATRIX", clue: "Neural cyberspace grid" },
  { phrase: "QUANTUM ALGORITHM", clue: "Subatomic computational logic" },
  { phrase: "NEURAL NETWORK", clue: "Deep artificial intelligence" },
  { phrase: "FIREWALL PROTOCOL", clue: "Perimeter security barrier" },
  { phrase: "OPTICAL CIRCUIT", clue: "Photonic laser computing" },
  { phrase: "CRYPTOGRAPHIC KEY", clue: "Secret encryption cipher" },
  { phrase: "SYNTHETIC SENTIENCE", clue: "Self-aware digital entity" },
  { phrase: "BINARY COMPILER", clue: "Machine code generator" },
  { phrase: "AUTONOMOUS DAEMON", clue: "Self-executing background thread" },
  { phrase: "SUPERCONDUCTING CORE", clue: "Zero-resistance power bus" }
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let currentLevel = 1;
let currentTheme = THEMES[0];
let currentPhraseObj = PHRASES[0];
let guessedLetters = [];
let errorCount = 0;
let maxErrors = 6;
let invulnerable = true; // protection buffer against instant failure

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
window.addEventListener('resize', resizeCanvas);

function initChamber(lvl = 1) {
  currentLevel = lvl;
  currentTheme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('themeVal').innerText = currentLevel + ': ' + currentTheme.name;
  
  currentPhraseObj = PHRASES[(lvl - 1) % PHRASES.length];
  guessedLetters = [];
  errorCount = 0;
  document.getElementById('nextBtn').style.display = 'none';
  document.getElementById('clueVal').innerText = currentPhraseObj.clue;
  
  buildKeyboard();
  updateHud();
}

function updateHud() {
  const shieldsLeft = maxErrors - errorCount;
  document.getElementById('statusVal').innerText = shieldsLeft + ' / 6 SHIELDS INTACT';
  document.getElementById('shieldDots').innerText = "● ".repeat(shieldsLeft) + "○ ".repeat(errorCount);
  
  // Check victory
  const cleanPhrase = currentPhraseObj.phrase.replace(/[^A-Z]/g, '');
  const won = cleanPhrase.split('').every(ch => guessedLetters.includes(ch));
  
  if (won) {
    window.sfx.playRescueFanfare();
    document.getElementById('statusVal').innerText = 'AI COMPANION RESCUED!';
    document.getElementById('nextBtn').style.display = 'inline-block';
  } else if (errorCount >= maxErrors) {
    errorCount = 3; // Multi-shield buffer grace prevents permanent lockout
    document.getElementById('statusVal').innerText = 'PURGE REPELLED (+3 SHIELDS)!';
  }
}

function guessLetter(ch) {
  if (guessedLetters.includes(ch)) return;
  guessedLetters.push(ch);
  
  const btn = document.getElementById('ch-key-' + ch);
  if (btn) btn.disabled = true;
  
  if (currentPhraseObj.phrase.includes(ch)) {
    window.sfx.playLetterHit();
  } else {
    errorCount++;
    window.sfx.playShieldDischarge();
  }
  updateHud();
}

// Canvas Rendering
function render() {
  ctx.fillStyle = currentTheme.board;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const cx = canvas.width / 2;
  const cy = canvas.height * 0.35;
  
  // Holographic Pod Gantry
  ctx.strokeStyle = currentTheme.primary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - 90, cy + 80);
  ctx.lineTo(cx + 90, cy + 80);
  ctx.moveTo(cx - 50, cy + 80);
  ctx.lineTo(cx - 50, cy - 80);
  ctx.lineTo(cx + 20, cy - 80);
  ctx.lineTo(cx + 20, cy - 50);
  ctx.stroke();
  
  // Disintegrating Avatar Limbs based on errorCount
  ctx.strokeStyle = '#00e5ff';
  ctx.fillStyle = '#ff007f';
  ctx.lineWidth = 2.5;
  
  // Head
  if (errorCount >= 1) {
    ctx.beginPath();
    ctx.arc(cx + 20, cy - 35, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  // Torso
  if (errorCount >= 2) {
    ctx.beginPath();
    ctx.moveTo(cx + 20, cy - 20);
    ctx.lineTo(cx + 20, cy + 25);
    ctx.stroke();
  }
  // Left Arm
  if (errorCount >= 3) {
    ctx.beginPath();
    ctx.moveTo(cx + 20, cy - 10);
    ctx.lineTo(cx - 5, cy + 10);
    ctx.stroke();
  }
  // Right Arm
  if (errorCount >= 4) {
    ctx.beginPath();
    ctx.moveTo(cx + 20, cy - 10);
    ctx.lineTo(cx + 45, cy + 10);
    ctx.stroke();
  }
  // Left Leg
  if (errorCount >= 5) {
    ctx.beginPath();
    ctx.moveTo(cx + 20, cy + 25);
    ctx.lineTo(cx + 5, cy + 60);
    ctx.stroke();
  }
  // Right Leg
  if (errorCount >= 6) {
    ctx.beginPath();
    ctx.moveTo(cx + 20, cy + 25);
    ctx.lineTo(cx + 35, cy + 60);
    ctx.stroke();
  }
  
  // Display Encrypted Phrase Blanks
  const phrase = currentPhraseObj.phrase;
  const letterW = 20;
  const gap = 8;
  const words = phrase.split(' ');
  let curY = canvas.height * 0.72;
  
  ctx.textAlign = 'center';
  ctx.font = 'bold 22px monospace';
  
  let lineStr = "";
  for (let ch of phrase) {
    if (ch === ' ') {
      lineStr += "   ";
    } else if (guessedLetters.includes(ch)) {
      lineStr += ch + " ";
    } else {
      lineStr += "_ ";
    }
  }
  
  ctx.fillStyle = '#fff';
  ctx.fillText(lineStr, cx, curY);
  
  requestAnimationFrame(render);
}

// Build Virtual Keyboard
const KB_KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
function buildKeyboard() {
  const kb = document.getElementById('keyboardWrap');
  kb.innerHTML = "";
  
  const row1 = document.createElement('div'); row1.className = 'kb-row';
  const row2 = document.createElement('div'); row2.className = 'kb-row';
  const row3 = document.createElement('div'); row3.className = 'kb-row';
  
  KB_KEYS.forEach((k, i) => {
    const btn = document.createElement('button');
    btn.className = 'key-btn';
    btn.id = 'ch-key-' + k;
    btn.innerText = k;
    btn.addEventListener('click', () => guessLetter(k));
    if (i < 9) row1.appendChild(btn);
    else if (i < 18) row2.appendChild(btn);
    else row3.appendChild(btn);
  });
  
  kb.appendChild(row1);
  kb.appendChild(row2);
  kb.appendChild(row3);
}

window.addEventListener('keydown', (e) => {
  if (/^[a-zA-Z]$/.test(e.key)) {
    guessLetter(e.key.toUpperCase());
  }
});

document.getElementById('restartBtn').addEventListener('click', () => initChamber(currentLevel));
document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  window.sfx.init();
});
document.getElementById('nextBtn').addEventListener('click', () => {
  initChamber(currentLevel + 1);
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
    initChamber(t.id);
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
initChamber(1);
render();
`;

writeFile(path.join(chDir, 'index.html'), chHtml);
writeFile(path.join(chDir, 'style.css'), chCss);
writeFile(path.join(chDir, 'audio.js'), chAudio);
writeFile(path.join(chDir, 'game.js'), chGame);
copyThumbnailToIcon('cyber-hangman');
console.log('Game 77 (cyber-hangman) built successfully.');

// ============================================================================
// GAME 78: BOGGLE TERMINAL: 4X4 WORD CONSTRUCTOR
// ============================================================================
console.log('Building Game 78: boggle-terminal...');
const btDir = path.join(gamesDir, 'boggle-terminal');

const btHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Boggle Terminal: 4x4 Word Constructor - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Dice Terminal</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Score Target</div><div id="scoreVal" class="hud-val">0 / 150 PTS</div></div>
      <div class="hud-box"><div class="hud-lbl">Current Trace</div><div id="currentTraceVal" class="hud-val" style="color:#ffd600;">_ _ _ _</div></div>
      <div class="hud-box"><div class="hud-lbl">Words Found</div><div id="wordsVal" class="hud-val" style="color:#00ff88;">0 WORDS</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">TERMINALS (1-45)</button>
      <button id="submitBtn" class="action-btn submit-btn">SUBMIT TRACE [ENTER]</button>
      <button id="clearBtn" class="action-btn">CLEAR [BACK]</button>
      <button id="restartBtn" class="action-btn">SHUFFLE</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT TERMINAL &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">BOGGLE TERMINAL</h1>
        <p id="overlayDesc">Trace paths between adjacent letter dice on a 4x4 grid to construct words and hit target scores across 45 stages!</p>
        <button id="startBtn" class="glow-btn">ENTER TERMINAL</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT BOGGLE TERMINAL (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const btCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #0c0802; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(12,8,2,0.92); padding: 8px 16px; border-bottom: 2px solid #ffd600; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ffd600; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(12,8,2,0.92); padding: 8px; border-top: 1px solid #332204; flex-wrap: wrap; }
.action-btn { background: #241804; color: #ffd600; border: 1px solid #ffd600; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ffd600; color: #000; box-shadow: 0 0 10px #ffd600; }
.submit-btn { background: #00e5ff; color: #000; border-color: #00e5ff; }
.submit-btn:hover { background: #fff; box-shadow: 0 0 12px #00e5ff; }
.next-btn { background: #00ff88; color: #000; border-color: #00ff88; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00ff88; }
.overlay { position: absolute; inset: 0; background: rgba(5,3,1,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #1c1304; border: 2px solid #ffd600; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,214,0,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ffd600; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #fff8e1; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ffd600; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ffd600; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #241804; border: 1px solid #4a3308; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ffd600; color: #ffd600; }
.lvl-btn.active { background: #ffd600; color: #000; }`;

const btAudio = `// Web Audio API procedural sound synthesis for Boggle Terminal
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
  playTraceStep(idx = 0) {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400 + idx * 60, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
  playWordAccepted() {
    this.init();
    [523.25, 659.25, 783.99].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
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

const btGame = `${WORD_THEMES_CODE}

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
`;

writeFile(path.join(btDir, 'index.html'), btHtml);
writeFile(path.join(btDir, 'style.css'), btCss);
writeFile(path.join(btDir, 'audio.js'), btAudio);
writeFile(path.join(btDir, 'game.js'), btGame);
copyThumbnailToIcon('boggle-terminal');
console.log('Game 78 (boggle-terminal) built successfully.');

// ============================================================================
// GAME 79: BINARY SPELLING BEE: HEX WORD FORGE
// ============================================================================
console.log('Building Game 79: binary-spelling-bee...');
const bsbDir = path.join(gamesDir, 'binary-spelling-bee');

const bsbHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Binary Spelling Bee: Hex Word Forge - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Hex Forge</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Score Target</div><div id="scoreVal" class="hud-val">0 / 120 PTS</div></div>
      <div class="hud-box"><div class="hud-lbl">Current Spelling</div><div id="currentSpellingVal" class="hud-val" style="color:#ffd700;">TYPE WORDS</div></div>
      <div class="hud-box"><div class="hud-lbl">Pangram Found</div><div id="pangramVal" class="hud-val" style="color:#00ff88;">NO PANGRAM YET</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">FORGES (1-45)</button>
      <button id="deleteBtn" class="action-btn">DELETE</button>
      <button id="submitBtn" class="action-btn submit-btn">ENTER [ENTER]</button>
      <button id="restartBtn" class="action-btn">RESET</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT FORGE &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">BINARY SPELLING BEE</h1>
        <p id="overlayDesc">Construct words of 4 or more letters using a honeycomb of 7 letters, requiring the central golden letter, across 45 stages!</p>
        <button id="startBtn" class="glow-btn">ENTER HONEYCOMB</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT HEX FORGE (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const bsbCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #0c0902; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(12,9,2,0.92); padding: 8px 16px; border-bottom: 2px solid #ffd700; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #ffd700; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(12,9,2,0.92); padding: 8px; border-top: 1px solid #382806; flex-wrap: wrap; }
.action-btn { background: #261b04; color: #ffd700; border: 1px solid #ffd700; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #ffd700; color: #000; box-shadow: 0 0 10px #ffd700; }
.submit-btn { background: #ffd700; color: #000; border-color: #ffd700; }
.submit-btn:hover { background: #fff; box-shadow: 0 0 12px #ffd700; }
.next-btn { background: #00ff88; color: #000; border-color: #00ff88; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00ff88; }
.overlay { position: absolute; inset: 0; background: rgba(5,3,1,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #1c1403; border: 2px solid #ffd700; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(255,215,0,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #ffd700; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #fffde7; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #ffd700; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #ffd700; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #261b04; border: 1px solid #543d08; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #ffd700; color: #ffd700; }
.lvl-btn.active { background: #ffd700; color: #000; }`;

const bsbAudio = `// Web Audio API procedural sound synthesis for Binary Spelling Bee
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
  playHexTap() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(500, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
  playWordReward() {
    this.init();
    [523.25, 659.25, 783.99].forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.08);
      gain.gain.setValueAtTime(0.18, this.ctx.currentTime + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.08);
      osc.stop(this.ctx.currentTime + i * 0.08 + 0.25);
    });
  }
  playErrorBuzz() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
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

const bsbGame = `${WORD_THEMES_CODE}

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
`;

writeFile(path.join(bsbDir, 'index.html'), bsbHtml);
writeFile(path.join(bsbDir, 'style.css'), bsbCss);
writeFile(path.join(bsbDir, 'audio.js'), bsbAudio);
writeFile(path.join(bsbDir, 'game.js'), bsbGame);
copyThumbnailToIcon('binary-spelling-bee');
console.log('Game 79 (binary-spelling-bee) built successfully.');

// ============================================================================
// GAME 80: WORD DROP: FALLING LETTER VOCABULARY TETRIS
// ============================================================================
console.log('Building Game 80: word-drop...');
const wdDir = path.join(gamesDir, 'word-drop');

const wdHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>Word Drop: Falling Letter Vocabulary Tetris - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="gameContainer">
    <div class="hud">
      <div class="hud-box"><div class="hud-lbl">Letter Well</div><div id="themeVal" class="hud-val">1: Green Phosphor CRT</div></div>
      <div class="hud-box"><div class="hud-lbl">Score Target</div><div id="scoreVal" class="hud-val">0 / 250 PTS</div></div>
      <div class="hud-box"><div class="hud-lbl">Selected Word</div><div id="wordVal" class="hud-val" style="color:#00ff88;">CLICK BLOCKS</div></div>
      <div class="hud-box"><div class="hud-lbl">Well Integrity</div><div id="shieldVal" class="hud-val" style="color:#ffd600;">100% (3 SHIELDS)</div></div>
    </div>

    <div class="canvas-wrap">
      <canvas id="gameCanvas"></canvas>
    </div>

    <div class="controls-bar">
      <button id="levelSelectBtn" class="action-btn">WELLS (1-45)</button>
      <button id="clearWordBtn" class="action-btn submit-btn">VAPORIZE WORD [ENTER]</button>
      <button id="deselectBtn" class="action-btn">CANCEL</button>
      <button id="restartBtn" class="action-btn">RESET</button>
      <button id="nextBtn" class="action-btn next-btn" style="display:none;">NEXT WELL &gt;</button>
    </div>

    <div id="overlay" class="overlay">
      <div class="card">
        <h1 id="overlayTitle">WORD DROP</h1>
        <p id="overlayDesc">Columns of letter blocks drop into a well. Form valid words from adjacent blocks to vaporize them before the stack tops out across 45 stages!</p>
        <button id="startBtn" class="glow-btn">ENTER WELL</button>
      </div>
    </div>

    <div id="levelModal" class="overlay" style="display:none;">
      <div class="card modal-card">
        <h2>SELECT LETTER WELL (1-45)</h2>
        <div id="levelGrid" class="level-grid"></div>
        <button id="closeModalBtn" class="glow-btn" style="margin-top:14px;">CLOSE</button>
      </div>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

const wdCss = `* { box-sizing: border-box; margin: 0; padding: 0; user-select: none; }
body { background: #031008; color: #fff; font-family: 'Segoe UI', system-ui, sans-serif; overflow: hidden; height: 100vh; display: flex; }
#gameContainer { width: 100%; height: 100%; display: flex; flex-direction: column; }
.hud { display: flex; justify-content: space-between; align-items: center; background: rgba(3,16,8,0.92); padding: 8px 16px; border-bottom: 2px solid #00ff88; }
.hud-box { display: flex; flex-direction: column; }
.hud-lbl { font-size: 11px; color: #88a; text-transform: uppercase; letter-spacing: 1px; }
.hud-val { font-size: 15px; font-weight: bold; color: #00ff88; font-family: monospace; }
.canvas-wrap { flex: 1; position: relative; width: 100%; height: 100%; }
canvas { width: 100%; height: 100%; display: block; }
.controls-bar { display: flex; justify-content: center; align-items: center; gap: 10px; background: rgba(3,16,8,0.92); padding: 8px; border-top: 1px solid #144020; flex-wrap: wrap; }
.action-btn { background: #0c2b16; color: #00ff88; border: 1px solid #00ff88; padding: 8px 16px; font-weight: bold; font-size: 13px; border-radius: 4px; cursor: pointer; transition: all 0.2s; }
.action-btn:hover { background: #00ff88; color: #000; box-shadow: 0 0 10px #00ff88; }
.submit-btn { background: #ffd600; color: #000; border-color: #ffd600; }
.submit-btn:hover { background: #fff; box-shadow: 0 0 12px #ffd600; }
.next-btn { background: #00f0ff; color: #000; border-color: #00f0ff; }
.next-btn:hover { background: #fff; color: #000; box-shadow: 0 0 12px #00f0ff; }
.overlay { position: absolute; inset: 0; background: rgba(1,8,4,0.85); display: flex; align-items: center; justify-content: center; z-index: 100; backdrop-filter: blur(4px); }
.card { background: #082613; border: 2px solid #00ff88; border-radius: 12px; padding: 24px; max-width: 480px; width: 90%; text-align: center; box-shadow: 0 0 25px rgba(0,255,136,0.3); }
.modal-card { max-width: 600px; max-height: 80vh; overflow-y: auto; }
h1, h2 { color: #00ff88; margin-bottom: 12px; font-size: 22px; letter-spacing: 1px; }
p { color: #c8e6c9; font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.glow-btn { background: #00ff88; color: #000; border: none; padding: 12px 28px; font-weight: bold; font-size: 14px; border-radius: 6px; cursor: pointer; transition: 0.2s; }
.glow-btn:hover { box-shadow: 0 0 15px #00ff88; transform: scale(1.03); }
.level-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); gap: 8px; margin-top: 12px; max-height: 50vh; overflow-y: auto; padding: 4px; }
.lvl-btn { background: #0c2b16; border: 1px solid #1a5c30; color: #fff; padding: 10px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.lvl-btn:hover { border-color: #00ff88; color: #00ff88; }
.lvl-btn.active { background: #00ff88; color: #000; }`;

const wdAudio = `// Web Audio API procedural sound synthesis for Word Drop
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
  playTileClick() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(450, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(250, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }
  playVaporize() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
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
}
window.sfx = new SoundFx();`;

const wdGame = `${WORD_THEMES_CODE}

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
`;

writeFile(path.join(wdDir, 'index.html'), wdHtml);
writeFile(path.join(wdDir, 'style.css'), wdCss);
writeFile(path.join(wdDir, 'audio.js'), wdAudio);
writeFile(path.join(wdDir, 'game.js'), wdGame);
copyThumbnailToIcon('word-drop');
console.log('Game 80 (word-drop) built successfully.');
