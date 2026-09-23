/**
 * Frequency Slicer — Game Engine (45 Levels, Dual Saber Detection, Shields)
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

const audio = new SlicerAudio();
const canvas = document.getElementById('slicerCanvas');
const ctx = canvas.getContext('2d');
const sliceMsg = document.getElementById('sliceMsg');

let currentLevel = 1;
let score = 0;
let combo = 0;
let shields = 3;
let invulnerable = true;
let cubes = [];
let particles = [];
let cubeTimer = 0;
let cubesCleared = 0;
let targetCubes = 25;
let speed = 3.5;

let isMouseDown = false;
let mouseTrail = [];

const directions = ['UP', 'DOWN', 'LEFT', 'RIGHT'];

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  combo = 0;
  cubesCleared = 0;
  targetCubes = 20 + lvl * 2;
  speed = 3.0 + (lvl * 0.12);
  cubes = [];
  particles = [];
  cubeTimer = 0;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = `${lvl}/45`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('comboDisplay').textContent = `${combo}x`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function spawnCube() {
  const side = Math.random() > 0.5 ? 'left' : 'right';
  const dir = directions[Math.floor(Math.random() * directions.length)];
  const x = side === 'left' ? canvas.width * 0.32 : canvas.width * 0.68;
  cubes.push({
    x,
    y: 0,
    side,
    dir,
    hit: false,
    color: side === 'left' ? '#00f0ff' : '#ff0055'
  });
}

function sliceCube(c) {
  c.hit = true;
  combo++;
  cubesCleared++;
  score += 150 * Math.min(8, Math.floor(combo / 4) + 1);
  audio.playSlice(c.side);
  showMsg('PERFECT SLICE!', c.color);
  updateHud();

  // Create explosion particles
  for (let i = 0; i < 16; i++) {
    particles.push({
      x: c.x,
      y: c.y,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.5) * 8,
      color: c.color,
      alpha: 1
    });
  }

  if (cubesCleared >= targetCubes) {
    audio.playWin();
    showMsg('STAGE COMPLETED!', '#39ff14');
    setTimeout(() => {
      if (currentLevel < 45) initLevel(currentLevel + 1);
      else showMsg('ALL 45 SLICER ARENAS MASTERED!', '#ffd600');
    }, 1200);
  }
}

function showMsg(text, color) {
  sliceMsg.textContent = text;
  sliceMsg.style.color = color;
  sliceMsg.classList.remove('show');
  void sliceMsg.offsetWidth;
  sliceMsg.classList.add('show');
  setTimeout(() => sliceMsg.classList.remove('show'), 600);
}

function update(dt) {
  cubeTimer += dt;
  if (cubeTimer > 1.2 - Math.min(0.7, currentLevel * 0.015)) {
    cubeTimer = 0;
    spawnCube();
  }

  const hitZoneY = canvas.height * 0.85;

  for (let i = cubes.length - 1; i >= 0; i--) {
    const c = cubes[i];
    c.y += speed * (dt * 60);

    // Auto-miss
    if (!c.hit && c.y > hitZoneY + 40) {
      c.hit = true;
      combo = 0;
      shields--;
      audio.playMiss();
      showMsg('MISS!', '#ff0055');
      updateHud();
      if (shields <= 0) {
        showMsg('PERIMETER BREACH - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }

    if (c.y > canvas.height + 60) {
      cubes.splice(i, 1);
    }
  }

  // Update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= dt * 2;
    if (p.alpha <= 0) particles.splice(i, 1);
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Perspective Runway
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(canvas.width * 0.4, 0);
  ctx.lineTo(canvas.width * 0.1, canvas.height);
  ctx.moveTo(canvas.width * 0.6, 0);
  ctx.lineTo(canvas.width * 0.9, canvas.height);
  ctx.stroke();

  // Hit Zone Arc
  const hitZoneY = canvas.height * 0.85;
  ctx.strokeStyle = '#ffd600';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(50, hitZoneY);
  ctx.lineTo(canvas.width - 50, hitZoneY);
  ctx.stroke();

  // Draw Cubes
  for (let c of cubes) {
    if (c.hit) continue;
    const size = 32 + (c.y / canvas.height) * 36;
    ctx.fillStyle = c.color;
    ctx.shadowColor = c.color;
    ctx.shadowBlur = 12;
    ctx.fillRect(c.x - size / 2, c.y - size / 2, size, size);
    ctx.shadowBlur = 0;

    // Arrow indicator
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(size * 0.6)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let arrowGlyph = '▲';
    if (c.dir === 'DOWN') arrowGlyph = '▼';
    if (c.dir === 'LEFT') arrowGlyph = '◀';
    if (c.dir === 'RIGHT') arrowGlyph = '▶';
    ctx.fillText(arrowGlyph, c.x, c.y);
  }

  // Draw Particles
  for (let p of particles) {
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Draw Mouse Saber Trail
  if (mouseTrail.length > 1) {
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    for (let i = 0; i < mouseTrail.length; i++) {
      const pt = mouseTrail[i];
      if (i === 0) ctx.moveTo(pt.x, pt.y);
      else ctx.lineTo(pt.x, pt.y);
    }
    ctx.stroke();
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

// Mouse / Touch Gesture Slicing
canvas.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  mouseTrail = [];
  handlePointer(e);
});

window.addEventListener('mouseup', () => {
  isMouseDown = false;
  mouseTrail = [];
});

canvas.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  handlePointer(e);
});

function handlePointer(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const px = (e.clientX - rect.left) * scaleX;
  const py = (e.clientY - rect.top) * scaleY;

  mouseTrail.push({ x: px, y: py });
  if (mouseTrail.length > 6) mouseTrail.shift();

  // Check collision with cubes near hitZone
  const hitZoneY = canvas.height * 0.85;
  for (let c of cubes) {
    if (!c.hit && Math.abs(c.y - hitZoneY) < 55) {
      const dist = Math.hypot(px - c.x, py - c.y);
      if (dist < 40) {
        sliceCube(c);
      }
    }
  }
}

// Keyboard controls [Arrow keys / WASD]
window.addEventListener('keydown', (e) => {
  const hitZoneY = canvas.height * 0.85;
  let targetDir = null;
  if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') targetDir = 'UP';
  if (e.key === 'ArrowDown' || e.key.toLowerCase() === 's') targetDir = 'DOWN';
  if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') targetDir = 'LEFT';
  if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') targetDir = 'RIGHT';

  if (targetDir) {
    for (let c of cubes) {
      if (!c.hit && Math.abs(c.y - hitZoneY) < 50 && c.dir === targetDir) {
        sliceCube(c);
        break;
      }
    }
  }
});

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
