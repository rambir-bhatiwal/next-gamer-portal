/**
 * Neon Drum Machine — Game Engine (40 Stages, Pattern Replication, Shields)
 */
const THEMES = [
  { id: 1, name: "Sunset Synthwave Highway", bg: "#14052b", road: "#220a44", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 2, name: "Neon Tokyo Express", bg: "#060919", road: "#0d1533", primary: "#00f0ff", secondary: "#39ff14", accent: "#ff007f", text: "#e0f7fa" },
  { id: 3, name: "Cyberpunk Underground Sub", bg: "#0d0417", road: "#190a2e", primary: "#7c4dff", secondary: "#ff0055", accent: "#00e5ff", text: "#ede7f6" },
  { id: 4, name: "Cosmic Superhighway", bg: "#03020c", road: "#0a0724", primary: "#651fff", secondary: "#00e5ff", accent: "#ffd600", text: "#e8eaf6" },
  { id: 5, name: "Glacial Aurora Freeway", bg: "#02131c", road: "#052638", primary: "#80d8ff", secondary: "#00e676", accent: "#ff4081", text: "#e1f5fe" },
  { id: 6, name: "Obsidian Bass Chamber", bg: "#070709", road: "#13141a", primary: "#b0bec5", secondary: "#00f0ff", accent: "#39ff14", text: "#eceff1" },
  { id: 7, name: "Solar Flare Speedway", bg: "#190700", road: "#361002", primary: "#ff3d00", secondary: "#ffab00", accent: "#ffff00", text: "#fbe9e7" },
  { id: 8, name: "Toxic Electro Core", bg: "#0a1702", road: "#162e05", primary: "#76ff03", secondary: "#00e5ff", accent: "#ffd600", text: "#f1f8e9" },
  { id: 9, name: "Cobalt Pulse Matrix", bg: "#020a1c", road: "#06183d", primary: "#2979ff", secondary: "#00f0ff", accent: "#ff1744", text: "#e3f2fd" },
  { id: 10, name: "Amethyst Trance Portal", bg: "#12021c", road: "#26063b", primary: "#d500f9", secondary: "#aa00ff", accent: "#00e5ff", text: "#f3e5f5" },
  { id: 11, name: "Hyperdrive Laser Grid", bg: "#030817", road: "#091738", primary: "#00b0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e1f5fe" },
  { id: 12, name: "Molten Dubstep Chasm", bg: "#170401", road: "#360e03", primary: "#ff5722", secondary: "#ff1744", accent: "#ffd600", text: "#fbe9e7" },
  { id: 13, name: "Prism Laser Symphony", bg: "#0a0417", road: "#1c0d38", primary: "#ea80fc", secondary: "#00f0ff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 14, name: "Titanium Club Mainframe", bg: "#08090d", road: "#151821", primary: "#cfd8dc", secondary: "#00e676", accent: "#00b0ff", text: "#ffffff" },
  { id: 15, name: "Electric Lavender Boulevard", bg: "#0a0317", road: "#1a0b36", primary: "#b388ff", secondary: "#ff80ab", accent: "#00f0ff", text: "#ede7f6" },
  { id: 16, name: "Emerald Glitch Runway", bg: "#011409", road: "#042914", primary: "#00e676", secondary: "#69f0ae", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Helios Gold Discoteca", bg: "#171201", road: "#332804", primary: "#ffd700", secondary: "#ff9100", accent: "#ff007f", text: "#fffde7" },
  { id: 18, name: "Aquamarine Vaporwave Bay", bg: "#011214", road: "#05262c", primary: "#18ffff", secondary: "#7c4dff", accent: "#ff007f", text: "#e0f7fa" },
  { id: 19, name: "Void Singularity Tunnel", bg: "#010108", road: "#06061c", primary: "#651fff", secondary: "#3d5afe", accent: "#00f0ff", text: "#ede7f6" },
  { id: 20, name: "Crimson Industrial Foundry", bg: "#170305", road: "#33080c", primary: "#ff1744", secondary: "#ff5252", accent: "#ffd600", text: "#ffebee" },
  { id: 21, name: "Quantum Hologram Deck", bg: "#040b17", road: "#0c1d3b", primary: "#00e5ff", secondary: "#76ff03", accent: "#ff007f", text: "#e0f7fa" },
  { id: 22, name: "Bismuth Polyrhythm Lab", bg: "#0d071a", road: "#1f123b", primary: "#e040fb", secondary: "#18ffff", accent: "#ffd600", text: "#f3e5f5" },
  { id: 23, name: "Deep Reef Sub-Bass Zone", bg: "#010e14", road: "#041e2b", primary: "#00b4d8", secondary: "#06d6a0", accent: "#ffbe0b", text: "#e0f7fa" },
  { id: 24, name: "Acid Jazz High-Rise", bg: "#0d0e02", road: "#1c1f06", primary: "#c6ff00", secondary: "#00e5ff", accent: "#ff007f", text: "#f9fbe7" },
  { id: 25, name: "Starlight Arpeggio Skyway", bg: "#050314", road: "#0e092e", primary: "#b388ff", secondary: "#3d5afe", accent: "#ffd600", text: "#ede7f6" },
  { id: 26, name: "Plasma Rave Reactor", bg: "#170212", road: "#330629", primary: "#ff007f", secondary: "#ff3d00", accent: "#00f0ff", text: "#fce4ec" },
  { id: 27, name: "Chrono Tempo Accelerator", bg: "#070317", road: "#130936", primary: "#7c4dff", secondary: "#00e5ff", accent: "#39ff14", text: "#ede7f6" },
  { id: 28, name: "Dark Nebula Soundclash", bg: "#04020f", road: "#0a0526", primary: "#536dfe", secondary: "#e040fb", accent: "#ffd600", text: "#e8eaf6" },
  { id: 29, name: "Amber Vinyl Lounge", bg: "#140a02", road: "#291605", primary: "#ff9100", secondary: "#ffd600", accent: "#ff1744", text: "#fff8e1" },
  { id: 30, name: "Cyber Jungle Breakdown", bg: "#031405", road: "#082b0d", primary: "#00e676", secondary: "#00f0ff", accent: "#ff007f", text: "#e8f5e9" },
  { id: 31, name: "Zero Gravity Dance Dome", bg: "#06061c", road: "#0e0e3b", primary: "#651fff", secondary: "#00e5ff", accent: "#39ff14", text: "#ede7f6" },
  { id: 32, name: "Maglev Sonic Track", bg: "#021217", road: "#07242e", primary: "#00f0ff", secondary: "#ffd600", accent: "#ff007f", text: "#e0f7fa" },
  { id: 33, name: "Neon Cyberpunk Alley", bg: "#120317", road: "#260933", primary: "#ff007f", secondary: "#7c4dff", accent: "#00f0ff", text: "#fce4ec" },
  { id: 34, name: "Spectral Audio Mirage", bg: "#09041a", road: "#170c38", primary: "#e040fb", secondary: "#00e5ff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 35, name: "Hyper Pop Supernova", bg: "#170417", road: "#330c33", primary: "#ff4081", secondary: "#ffd600", accent: "#00f0ff", text: "#fdf0ff" },
  { id: 36, name: "Carbon Fiber Beatbox", bg: "#060608", road: "#121216", primary: "#90a4ae", secondary: "#00e676", accent: "#ff007f", text: "#eceff1" },
  { id: 37, name: "Tachyon Harmonic Rift", bg: "#08021a", road: "#140638", primary: "#7c4dff", secondary: "#ff1744", accent: "#00f0ff", text: "#ede7f6" },
  { id: 38, name: "Sunburst Electro Disco", bg: "#190b01", road: "#381a04", primary: "#ff6d00", secondary: "#ffd600", accent: "#00e5ff", text: "#fff3e0" },
  { id: 39, name: "Vortex Synthesizer Well", bg: "#030514", road: "#090d2e", primary: "#3d5afe", secondary: "#ff007f", accent: "#39ff14", text: "#e8eaf6" },
  { id: 40, name: "Future Funk Skyway", bg: "#140417", road: "#2b0a33", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 41, name: "Bioluminescent Lagoon", bg: "#01140e", road: "#042b20", primary: "#00bfa5", secondary: "#64ffda", accent: "#ff4081", text: "#e0f2f1" },
  { id: 42, name: "Orbital Satellite Relay", bg: "#030919", road: "#091738", primary: "#00b0ff", secondary: "#7c4dff", accent: "#ffd600", text: "#e1f5fe" },
  { id: 43, name: "Tokyo Drift Eurobeat", bg: "#170308", road: "#330913", primary: "#ff1744", secondary: "#ff9100", accent: "#00f0ff", text: "#ffebee" },
  { id: 44, name: "Cyber Gothic Cathedral", bg: "#080414", road: "#130a2e", primary: "#651fff", secondary: "#ff0055", accent: "#ffd600", text: "#ede7f6" },
  { id: 45, name: "Infinite Resonance Apex", bg: "#04020a", road: "#0a061a", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#ffffff" }
];

const audio = new DrumAudio();
const scopeCanvas = document.getElementById('scopeCanvas');
const scopeCtx = scopeCanvas.getContext('2d');
const statusPrompt = document.getElementById('statusPrompt');

let currentLevel = 1;
let score = 0;
let shields = 3;
let invulnerable = true;
let targetPattern = [];
let playerStep = 0;
let isPlayingPattern = false;

const padKeyMap = {
  '1': 0, '2': 1, '3': 2, '4': 3,
  'q': 4, 'w': 5, 'e': 6, 'r': 7,
  'a': 8, 's': 9, 'd': 10, 'f': 11,
  'z': 12, 'x': 13, 'c': 14, 'v': 15
};

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  playerStep = 0;
  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = `${lvl}/40`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();

  // Generate sequence pattern for this stage
  const patternLength = 4 + Math.floor(lvl * 0.3);
  targetPattern = [];
  for (let i = 0; i < patternLength; i++) {
    // Pick from pool of pads
    const pad = Math.floor(Math.random() * Math.min(16, 4 + Math.floor(lvl * 0.3)));
    targetPattern.push(pad);
  }

  statusPrompt.textContent = 'PRESS "PLAY PATTERN" OR SPACE TO LISTEN';
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function playPatternDemo() {
  if (isPlayingPattern) return;
  isPlayingPattern = true;
  playerStep = 0;
  statusPrompt.textContent = 'LISTENING TO PATTERN...';

  targetPattern.forEach((pad, idx) => {
    setTimeout(() => {
      triggerPad(pad, false);
      if (idx === targetPattern.length - 1) {
        isPlayingPattern = false;
        statusPrompt.textContent = 'YOUR TURN: REPEAT THE BEAT!';
      }
    }, idx * 450);
  });
}

function triggerPad(padIndex, isPlayer = true) {
  audio.playPad(padIndex);

  // Flash pad UI
  const padBtn = document.querySelector(`.pad-btn[data-pad="${padIndex}"]`);
  if (padBtn) {
    padBtn.classList.add('active');
    setTimeout(() => padBtn.classList.remove('active'), 150);
  }

  if (isPlayer && !isPlayingPattern && targetPattern.length > 0) {
    if (padIndex === targetPattern[playerStep]) {
      playerStep++;
      score += 100 * currentLevel;
      updateHud();
      statusPrompt.textContent = `HIT! ${playerStep}/${targetPattern.length}`;

      if (playerStep >= targetPattern.length) {
        statusPrompt.textContent = 'PERFECT BEAT! STAGE CLEARED!';
        score += 500;
        updateHud();
        setTimeout(() => {
          if (currentLevel < 40) initLevel(currentLevel + 1);
          else statusPrompt.textContent = 'ALL 40 DRUM STAGES MASTERED!';
        }, 1200);
      }
    } else {
      shields--;
      updateHud();
      statusPrompt.textContent = `OFF BEAT! SHIELDS: ${shields}`;
      if (shields <= 0) {
        statusPrompt.textContent = 'FAILED BEAT - RETRYING PATTERN';
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }
  }
}

// Oscilloscope Loop
function drawScope() {
  requestAnimationFrame(drawScope);
  scopeCtx.fillStyle = '#030408';
  scopeCtx.fillRect(0, 0, scopeCanvas.width, scopeCanvas.height);

  if (!audio.analyser) {
    // Idle flat line
    scopeCtx.strokeStyle = '#00f0ff';
    scopeCtx.lineWidth = 2;
    scopeCtx.beginPath();
    scopeCtx.moveTo(0, scopeCanvas.height / 2);
    scopeCtx.lineTo(scopeCanvas.width, scopeCanvas.height / 2);
    scopeCtx.stroke();
    return;
  }

  audio.analyser.getByteFrequencyData(audio.dataArray);
  const barWidth = (scopeCanvas.width / audio.dataArray.length) * 1.5;
  let x = 0;

  for (let i = 0; i < audio.dataArray.length; i++) {
    const barHeight = (audio.dataArray[i] / 255) * scopeCanvas.height;
    scopeCtx.fillStyle = `hsl(${i * 12 + 160}, 100%, 50%)`;
    scopeCtx.fillRect(x, scopeCanvas.height - barHeight, barWidth - 1, barHeight);
    x += barWidth;
  }
}

// Key & Pad Events
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    playPatternDemo();
    return;
  }
  const key = e.key.toLowerCase();
  if (padKeyMap[key] !== undefined) {
    triggerPad(padKeyMap[key], true);
  }
});

document.querySelectorAll('.pad-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const pad = parseInt(btn.getAttribute('data-pad'), 10);
    triggerPad(pad, true);
  });
});

document.getElementById('playDemoBtn').addEventListener('click', playPatternDemo);

// Level Modal
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => modal.classList.remove('hidden'));
document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));

function renderLevelGrid() {
  const grid = document.getElementById('levelSelectGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 40; i++) {
    const btn = document.createElement('button');
    btn.className = `lvl-btn ${i === currentLevel ? 'active' : ''}`;
    btn.textContent = i;
    btn.addEventListener('click', () => {
      initLevel(i);
      modal.classList.add('hidden');
    });
    grid.appendChild(btn);
  }
}

initLevel(1);
drawScope();
