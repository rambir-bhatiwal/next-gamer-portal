/**
 * Beat Highway — Game Engine (45 Levels & Multi-Shield Pacing)
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

const audio = new AudioManager();
const canvas = document.getElementById('highwayCanvas');
const ctx = canvas.getContext('2d');
const hitFeedback = document.getElementById('hitFeedback');

let currentLevel = 1;
let score = 0;
let streak = 0;
let shields = 3;
let invulnerable = true;
let isGameOver = false;
let notes = [];
let noteSpawnTimer = 0;
let notesCleared = 0;
let targetNotes = 25;
let bpm = 120;
let speed = 4;
let beatIndex = 0;

const laneXFactors = [0.2, 0.4, 0.6, 0.8];
const laneColors = ['#00f0ff', '#ff007f', '#ffd600', '#39ff14'];
const laneKeys = ['d', 'f', 'j', 'k'];

function initLevel(lvl) {
  currentLevel = lvl;
  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = `${lvl}/45`;
  document.getElementById('themeDisplay').textContent = theme.name;
  
  shields = 3;
  invulnerable = false;
  score = 0;
  streak = 0;
  notesCleared = 0;
  targetNotes = 20 + lvl * 2;
  bpm = 110 + (lvl * 1.5);
  speed = 3.5 + (lvl * 0.15);
  notes = [];
  noteSpawnTimer = 0;
  beatIndex = 0;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('streakDisplay').textContent = `${streak}x`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function spawnNote() {
  const lane = Math.floor(Math.random() * 4);
  notes.push({
    lane,
    y: 0,
    hit: false,
    color: laneColors[lane]
  });
  // Procedural bass accompaniment on note spawn
  const bassPitches = [65.4, 82.4, 98.0, 110.0];
  audio.playBassNote(bassPitches[beatIndex % bassPitches.length]);
  beatIndex++;
}

function triggerHit(lane) {
  audio.init();
  const hitLineY = canvas.height * 0.85;
  const hitWindow = 45; // pixel tolerance

  // Find the lowest unhit note in this lane
  let candidate = null;
  let minDist = 999;
  for (let n of notes) {
    if (n.lane === lane && !n.hit) {
      const dist = Math.abs(n.y - hitLineY);
      if (dist < minDist) {
        minDist = dist;
        candidate = n;
      }
    }
  }

  if (candidate && minDist <= hitWindow) {
    candidate.hit = true;
    streak++;
    notesCleared++;

    let feedbackText = 'GOOD';
    let feedbackColor = '#ffd600';
    let pts = 100;

    if (minDist <= 15) {
      feedbackText = 'PERFECT!';
      feedbackColor = '#39ff14';
      pts = 300;
      audio.playNoteHit('perfect', lane);
    } else if (minDist <= 30) {
      feedbackText = 'GREAT!';
      feedbackColor = '#00f0ff';
      pts = 200;
      audio.playNoteHit('great', lane);
    } else {
      audio.playNoteHit('good', lane);
    }

    score += pts * Math.min(8, Math.floor(streak / 5) + 1);
    showFeedback(feedbackText, feedbackColor);
    updateHud();

    if (notesCleared >= targetNotes) {
      audio.playStageWin();
      showFeedback('STAGE CLEARED!', '#39ff14');
      setTimeout(() => {
        if (currentLevel < 45) {
          initLevel(currentLevel + 1);
        } else {
          showFeedback('ALL 45 STAGES BEATEN!', '#ffd600');
        }
      }, 1200);
    }
  } else {
    // Miss penalty with shield buffer
    streak = 0;
    shields--;
    audio.playMiss();
    showFeedback('MISS', '#ff0055');
    updateHud();

    if (shields <= 0) {
      showFeedback('SHIELDS DEPLETED - RETRYING', '#ff0055');
      setTimeout(() => initLevel(currentLevel), 1200);
    }
  }
}

function showFeedback(text, color) {
  hitFeedback.textContent = text;
  hitFeedback.style.color = color;
  hitFeedback.classList.remove('show');
  void hitFeedback.offsetWidth; // trigger reflow
  hitFeedback.classList.add('show');
  setTimeout(() => hitFeedback.classList.remove('show'), 600);
}

function update(dt) {
  noteSpawnTimer += dt;
  const interval = 60 / bpm;
  if (noteSpawnTimer >= interval && notesCleared + notes.length < targetNotes + 10) {
    noteSpawnTimer = 0;
    spawnNote();
  }

  const hitLineY = canvas.height * 0.85;
  for (let i = notes.length - 1; i >= 0; i--) {
    const n = notes[i];
    n.y += speed * (dt * 60);

    // Auto-miss if passed hitline
    if (!n.hit && n.y > hitLineY + 50) {
      n.hit = true;
      streak = 0;
      shields--;
      audio.playMiss();
      showFeedback('MISS', '#ff0055');
      updateHud();
      if (shields <= 0) {
        showFeedback('SHIELDS DEPLETED - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }

    if (n.y > canvas.height + 40) {
      notes.splice(i, 1);
    }
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Perspective 4-Lane Highway
  const vpX = canvas.width / 2;
  const vpY = 60;
  const bottomW = canvas.width * 0.9;
  const topW = canvas.width * 0.3;

  ctx.fillStyle = theme.road;
  ctx.beginPath();
  ctx.moveTo(vpX - topW / 2, vpY);
  ctx.lineTo(vpX + topW / 2, vpY);
  ctx.lineTo(vpX + bottomW / 2, canvas.height);
  ctx.lineTo(vpX - bottomW / 2, canvas.height);
  ctx.closePath();
  ctx.fill();

  // Lane Dividers
  for (let i = 0; i <= 4; i++) {
    const topX = (vpX - topW / 2) + (topW / 4) * i;
    const botX = (vpX - bottomW / 2) + (bottomW / 4) * i;
    ctx.strokeStyle = i === 0 || i === 4 ? theme.primary : 'rgba(255,255,255,0.15)';
    ctx.lineWidth = i === 0 || i === 4 ? 3 : 1.5;
    ctx.beginPath();
    ctx.moveTo(topX, vpY);
    ctx.lineTo(botX, canvas.height);
    ctx.stroke();
  }

  // Hit Zone Line
  const hitLineY = canvas.height * 0.85;
  ctx.strokeStyle = '#39ff14';
  ctx.lineWidth = 4;
  ctx.shadowColor = '#39ff14';
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.moveTo((vpX - bottomW / 2), hitLineY);
  ctx.lineTo((vpX + bottomW / 2), hitLineY);
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Hit Target Receptors
  for (let l = 0; l < 4; l++) {
    const botX1 = (vpX - bottomW / 2) + (bottomW / 4) * l;
    const botX2 = (vpX - bottomW / 2) + (bottomW / 4) * (l + 1);
    const targetX = (botX1 + botX2) / 2;
    ctx.fillStyle = laneColors[l];
    ctx.beginPath();
    ctx.arc(targetX, hitLineY, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Render Descending Notes
  for (let n of notes) {
    if (n.hit) continue;
    const progress = Math.max(0, Math.min(1, (n.y - vpY) / (canvas.height - vpY)));
    const curTopW = topW + (bottomW - topW) * progress;
    const curBotLeft = vpX - curTopW / 2;
    const laneWidth = curTopW / 4;
    const noteX = curBotLeft + laneWidth * (n.lane + 0.5);
    const noteRadius = 8 + progress * 10;

    ctx.fillStyle = n.color;
    ctx.shadowColor = n.color;
    ctx.shadowBlur = 12;
    ctx.beginPath();
    ctx.arc(noteX, n.y, noteRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(noteX, n.y, noteRadius * 0.4, 0, Math.PI * 2);
    ctx.fill();
  }
}

let lastTime = performance.now();
function gameLoop(now) {
  const dt = Math.min(0.1, (now - lastTime) / 1000);
  lastTime = now;
  update(dt);
  draw();
  requestAnimationFrame(gameLoop);
}

// Input Handlers
window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  const laneIndex = laneKeys.indexOf(key);
  if (laneIndex !== -1) {
    triggerHit(laneIndex);
    const btn = document.querySelector(`.key-btn[data-lane="${laneIndex}"]`);
    if (btn) {
      btn.classList.add('active');
      setTimeout(() => btn.classList.remove('active'), 100);
    }
  }
});

document.querySelectorAll('.key-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lane = parseInt(btn.getAttribute('data-lane'), 10);
    triggerHit(lane);
  });
});

// Modal Setup
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => {
  modal.classList.remove('hidden');
});
document.getElementById('closeModalBtn').addEventListener('click', () => {
  modal.classList.add('hidden');
});

function renderLevelGrid() {
  const grid = document.getElementById('levelSelectGrid');
  grid.innerHTML = '';
  for (let i = 1; i <= 45; i++) {
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

// Start
initLevel(1);
requestAnimationFrame(gameLoop);
