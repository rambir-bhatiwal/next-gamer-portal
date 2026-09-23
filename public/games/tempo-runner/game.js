/**
 * Tempo Runner — Game Engine (45 Levels, Platform Gap Generator, Shields)
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

const audio = new RunnerAudio();
const canvas = document.getElementById('runnerCanvas');
const ctx = canvas.getContext('2d');
const runnerMsg = document.getElementById('runnerMsg');

let currentLevel = 1;
let distance = 0;
let targetDistance = 400;
let combo = 0;
let shields = 3;
let invulnerable = true;

let bpm = 120;
let beatTimer = 0;
let pulseRadius = 0;

let runner = {
  x: 80,
  y: 360,
  vy: 0,
  isJumping: false
};

let platforms = [];
let speed = 4;

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  distance = 0;
  targetDistance = 350 + lvl * 15;
  combo = 0;
  bpm = 115 + lvl * 1.2;
  speed = 3.5 + lvl * 0.1;
  beatTimer = 0;
  pulseRadius = 0;

  runner.y = 360;
  runner.vy = 0;
  runner.isJumping = false;

  platforms = [
    { x: 0, w: 250, y: 380 },
    { x: 280, w: 220, y: 380 },
    { x: 530, w: 200, y: 380 }
  ];

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = `${lvl}/45`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('distDisplay').textContent = `${Math.floor(distance)}/${targetDistance}m`;
  document.getElementById('comboDisplay').textContent = `${combo}x`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function jump() {
  audio.init();
  if (!runner.isJumping) {
    runner.isJumping = true;
    const beatInterval = 60 / bpm;
    const timeSinceBeat = beatTimer % beatInterval;
    const onBeat = timeSinceBeat < 0.12 || timeSinceBeat > (beatInterval - 0.12);

    if (onBeat) {
      runner.vy = -13.5; // Super jump!
      combo++;
      audio.playJump(true);
      showMsg('PERFECT BEAT JUMP!', '#39ff14');
    } else {
      runner.vy = -10.5; // Standard jump
      combo = 0;
      audio.playJump(false);
      showMsg('OFF-BEAT HOP', '#ffd600');
    }
    updateHud();
  }
}

function showMsg(text, color) {
  runnerMsg.textContent = text;
  runnerMsg.style.color = color;
  runnerMsg.classList.remove('show');
  void runnerMsg.offsetWidth;
  runnerMsg.classList.add('show');
  setTimeout(() => runnerMsg.classList.remove('show'), 600);
}

function update(dt) {
  const beatInterval = 60 / bpm;
  beatTimer += dt;
  if (beatTimer >= beatInterval) {
    beatTimer -= beatInterval;
    audio.playBeat();
    pulseRadius = 30; // Expanding ring
  }
  if (pulseRadius > 0) pulseRadius -= dt * 60;

  distance += speed * (dt * 10);
  updateHud();

  if (distance >= targetDistance) {
    audio.playWin();
    showMsg('TRACK COMPLETED!', '#39ff14');
    setTimeout(() => {
      if (currentLevel < 45) initLevel(currentLevel + 1);
      else showMsg('ALL 45 TEMPO TRACKS CONQUERED!', '#ffd600');
    }, 1200);
  }

  // Runner Physics
  runner.y += runner.vy;
  runner.vy += 0.65; // gravity

  let onPlatform = false;
  for (let p of platforms) {
    if (runner.x + 10 >= p.x && runner.x - 10 <= p.x + p.w) {
      if (runner.y >= p.y - 15 && runner.y <= p.y + 5 && runner.vy >= 0) {
        runner.y = p.y - 15;
        runner.vy = 0;
        runner.isJumping = false;
        onPlatform = true;
        break;
      }
    }
  }

  // Fall pit check
  if (runner.y > canvas.height + 20) {
    shields--;
    combo = 0;
    audio.playHurt();
    showMsg('CHASM FALL!', '#ff0055');
    updateHud();

    if (shields <= 0) {
      showMsg('SHIELDS DEPLETED - RETRYING', '#ff0055');
      setTimeout(() => initLevel(currentLevel), 1000);
    } else {
      // Respawn on nearest platform
      runner.y = 200;
      runner.vy = 0;
      runner.isJumping = false;
    }
  }

  // Move platforms
  for (let i = 0; i < platforms.length; i++) {
    platforms[i].x -= speed * (dt * 60);
  }

  if (platforms[0].x + platforms[0].w < 0) {
    platforms.shift();
    const lastP = platforms[platforms.length - 1];
    const gap = 80 + Math.random() * 80;
    const w = 180 + Math.random() * 120;
    platforms.push({ x: lastP.x + lastP.w + gap, w, y: 380 });
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Background Skyline
  ctx.fillStyle = theme.road;
  ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);

  // Platforms
  for (let p of platforms) {
    ctx.fillStyle = theme.primary;
    ctx.shadowColor = theme.primary;
    ctx.shadowBlur = 10;
    ctx.fillRect(p.x, p.y, p.w, 16);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(p.x, p.y, p.w, 3);
  }

  // Draw Runner
  ctx.save();
  ctx.translate(runner.x, runner.y);

  // Expanding Beat Pulse Ring
  if (pulseRadius > 0) {
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, pulseRadius, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Runner Body
  ctx.fillStyle = '#39ff14';
  ctx.shadowColor = '#39ff14';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.arc(0, -6, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(4, -7, 3, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
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
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    e.preventDefault();
    jump();
  }
});

document.getElementById('jumpBtn').addEventListener('click', jump);
canvas.addEventListener('click', jump);

// Level Modal
const modal = document.getElementById('levelModal');
document.getElementById('levelSelectBtn').addEventListener('click', () => modal.classList.remove('hidden'));
document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.add('hidden'));

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

initLevel(1);
requestAnimationFrame(gameLoop);
