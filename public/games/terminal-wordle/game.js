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
