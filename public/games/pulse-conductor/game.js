/**
 * Pulse Conductor — Game Engine (40 Stages, Metronome Timing, Shields)
 */
const THEMES = [
  { id: 1, name: "Sunset Synthwave Wave", bg: "#14052b", road: "#220a44", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 2, name: "Neon Tokyo Equalizer", bg: "#060919", road: "#0d1533", primary: "#00f0ff", secondary: "#39ff14", accent: "#ff007f", text: "#e0f7fa" },
  { id: 3, name: "Cyberpunk Sub-Bass Crypt", bg: "#0d0417", road: "#190a2e", primary: "#7c4dff", secondary: "#ff0055", accent: "#00e5ff", text: "#ede7f6" },
  { id: 4, name: "Cosmic Audio Superhighway", bg: "#03020c", road: "#0a0724", primary: "#651fff", secondary: "#00e5ff", accent: "#ffd600", text: "#e8eaf6" },
  { id: 5, name: "Glacial Aurora Harmonic", bg: "#02131c", road: "#052638", primary: "#80d8ff", secondary: "#00e676", accent: "#ff4081", text: "#e1f5fe" },
  { id: 6, name: "Obsidian Bassline Core", bg: "#070709", road: "#13141a", primary: "#b0bec5", secondary: "#00f0ff", accent: "#39ff14", text: "#eceff1" },
  { id: 7, name: "Solar Flare Beat Flare", bg: "#190700", road: "#361002", primary: "#ff3d00", secondary: "#ffab00", accent: "#ffff00", text: "#fbe9e7" },
  { id: 8, name: "Toxic Electro Circuit", bg: "#0a1702", road: "#162e05", primary: "#76ff03", secondary: "#00e5ff", accent: "#ffd600", text: "#f1f8e9" },
  { id: 9, name: "Cobalt Pulse Matrix", bg: "#020a1c", road: "#06183d", primary: "#2979ff", secondary: "#00f0ff", accent: "#ff1744", text: "#e3f2fd" },
  { id: 10, name: "Amethyst Trance Temple", bg: "#12021c", road: "#26063b", primary: "#d500f9", secondary: "#aa00ff", accent: "#00e5ff", text: "#f3e5f5" },
  { id: 11, name: "Hyperdrive Laser Grid", bg: "#030817", road: "#091738", primary: "#00b0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e1f5fe" },
  { id: 12, name: "Molten Dubstep Chasm", bg: "#170401", road: "#360e03", primary: "#ff5722", secondary: "#ff1744", accent: "#ffd600", text: "#fbe9e7" },
  { id: 13, name: "Prism Wave Spectrum", bg: "#0a0417", road: "#1c0d38", primary: "#ea80fc", secondary: "#00f0ff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 14, name: "Titanium Club Mainframe", bg: "#08090d", road: "#151821", primary: "#cfd8dc", secondary: "#00e676", accent: "#00b0ff", text: "#ffffff" },
  { id: 15, name: "Electric Lavender Field", bg: "#0a0317", road: "#1a0b36", primary: "#b388ff", secondary: "#ff80ab", accent: "#00f0ff", text: "#ede7f6" },
  { id: 16, name: "Emerald Glitch Runway", bg: "#011409", road: "#042914", primary: "#00e676", secondary: "#69f0ae", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Helios Gold Philharmonic", bg: "#171201", road: "#332804", primary: "#ffd700", secondary: "#ff9100", accent: "#ff007f", text: "#fffde7" },
  { id: 18, name: "Aquamarine Vapor Bay", bg: "#011214", road: "#05262c", primary: "#18ffff", secondary: "#7c4dff", accent: "#ff007f", text: "#e0f7fa" },
  { id: 19, name: "Void Singularity Tunnel", bg: "#010108", road: "#06061c", primary: "#651fff", secondary: "#3d5afe", accent: "#00f0ff", text: "#ede7f6" },
  { id: 20, name: "Crimson Industrial Beat", bg: "#170305", road: "#33080c", primary: "#ff1744", secondary: "#ff5252", accent: "#ffd600", text: "#ffebee" },
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
  { id: 38, name: "Sunburst Electro Disco", bg: "#190b01", road: "#381a04", primary: "#ff6d00", secondary: "#ffd600", accent: "#00f0ff", text: "#fff3e0" },
  { id: 39, name: "Vortex Synthesizer Well", bg: "#030514", road: "#090d2e", primary: "#3d5afe", secondary: "#ff007f", accent: "#39ff14", text: "#e8eaf6" },
  { id: 40, name: "Future Funk Skyway", bg: "#140417", road: "#2b0a33", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 41, name: "Bioluminescent Lagoon", bg: "#01140e", road: "#042b20", primary: "#00bfa5", secondary: "#64ffda", accent: "#ff4081", text: "#e0f2f1" },
  { id: 42, name: "Orbital Satellite Relay", bg: "#030919", road: "#091738", primary: "#00b0ff", secondary: "#7c4dff", accent: "#ffd600", text: "#e1f5fe" },
  { id: 43, name: "Tokyo Drift Eurobeat", bg: "#170308", road: "#330913", primary: "#ff1744", secondary: "#ff9100", accent: "#00f0ff", text: "#ffebee" },
  { id: 44, name: "Cyber Gothic Cathedral", bg: "#080414", road: "#130a2e", primary: "#651fff", secondary: "#ff0055", accent: "#ffd600", text: "#ede7f6" },
  { id: 45, name: "Infinite Resonance Apex", bg: "#04020a", road: "#0a061a", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#ffffff" }
];

const audio = new ConductorAudio();
const canvas = document.getElementById('metronomeCanvas');
const ctx = canvas.getContext('2d');
const accuracyMsg = document.getElementById('accuracyMsg');

let currentLevel = 1;
let bpm = 100;
let shields = 3;
let invulnerable = true;
let harmony = 0;
let angle = 0;
let prevAngle = 0;
let swingPhase = 0;

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  harmony = 0;
  bpm = 85 + Math.floor(lvl * 2.2);
  swingPhase = 0;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = `${lvl}/40`;
  document.getElementById('themeDisplay').textContent = theme.name;
  document.getElementById('bpmDisplay').textContent = bpm;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('harmonyDisplay').textContent = `${Math.floor(harmony)}%`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function tapBeat() {
  audio.init();
  const distFromCenter = Math.abs(angle); // Center angle is 0
  const tolerance = 0.18; // radian threshold

  if (distFromCenter <= tolerance) {
    let pts = 10;
    let text = 'GOOD CONDUCT!';
    let color = '#ffd600';

    if (distFromCenter <= 0.06) {
      pts = 20;
      text = 'PERFECT TEMPO!';
      color = '#39ff14';
    }

    harmony = Math.min(100, harmony + pts);
    audio.playHarmonicChord(harmony);
    showMsg(text, color);
    updateHud();

    if (harmony >= 100) {
      showMsg('SYMPHONY COMPLETE!', '#39ff14');
      setTimeout(() => {
        if (currentLevel < 40) initLevel(currentLevel + 1);
        else showMsg('ALL 40 CONCERT HALLS MASTERED!', '#ffd600');
      }, 1200);
    }
  } else {
    shields--;
    harmony = Math.max(0, harmony - 10);
    audio.playDissonantBuzzer();
    showMsg('DISSONANT MISS!', '#ff0055');
    updateHud();

    if (shields <= 0) {
      showMsg('ORCHESTRA COLLAPSE - RETRYING', '#ff0055');
      setTimeout(() => initLevel(currentLevel), 1000);
    }
  }
}

function showMsg(text, color) {
  accuracyMsg.textContent = text;
  accuracyMsg.style.color = color;
  accuracyMsg.classList.remove('show');
  void accuracyMsg.offsetWidth;
  accuracyMsg.classList.add('show');
  setTimeout(() => accuracyMsg.classList.remove('show'), 600);
}

function update(dt) {
  const beatsPerSecond = bpm / 60;
  swingPhase += dt * beatsPerSecond * Math.PI;
  prevAngle = angle;
  angle = Math.sin(swingPhase) * 0.55; // Swing amplitude

  // Trigger tick sound on crossing center
  if ((prevAngle < 0 && angle >= 0) || (prevAngle > 0 && angle <= 0)) {
    audio.playMetronomeTick();
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Metronome Pyramid Base
  const cx = canvas.width / 2;
  const pivotY = canvas.height * 0.75;
  const topY = canvas.height * 0.2;

  ctx.fillStyle = '#170c36';
  ctx.strokeStyle = theme.primary;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, topY);
  ctx.lineTo(cx + 120, pivotY + 40);
  ctx.lineTo(cx - 120, pivotY + 40);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Central Golden Tempo Target Mark
  ctx.strokeStyle = '#ffd600';
  ctx.lineWidth = 3;
  ctx.shadowColor = '#ffd600';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(cx, topY + 40);
  ctx.lineTo(cx, pivotY + 20);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Swinging Pendulum Rod
  const rodLength = canvas.height * 0.45;
  const tipX = cx + Math.sin(angle) * rodLength;
  const tipY = pivotY - Math.cos(angle) * rodLength;

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx, pivotY);
  ctx.lineTo(tipX, tipY);
  ctx.stroke();

  // Sliding Weight
  const weightDist = rodLength * 0.65;
  const weightX = cx + Math.sin(angle) * weightDist;
  const weightY = pivotY - Math.cos(angle) * weightDist;

  ctx.fillStyle = '#ff007f';
  ctx.shadowColor = '#ff007f';
  ctx.shadowBlur = 10;
  ctx.fillRect(weightX - 12, weightY - 10, 24, 20);
  ctx.shadowBlur = 0;

  // Pivot Base Circle
  ctx.fillStyle = theme.primary;
  ctx.beginPath();
  ctx.arc(cx, pivotY, 14, 0, Math.PI * 2);
  ctx.fill();
}

let lastTime = performance.now();
function gameLoop(now) {
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(gameLoop);
}

// Controls
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    tapBeat();
    const btn = document.getElementById('tapBatonBtn');
    btn.classList.add('active');
    setTimeout(() => btn.classList.remove('active'), 100);
  }
});

document.getElementById('tapBatonBtn').addEventListener('click', tapBeat);

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
requestAnimationFrame(gameLoop);
