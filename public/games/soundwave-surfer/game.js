/**
 * Soundwave Surfer — Game Engine (40 Biomes, Waveform Physics, Shields)
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

const audio = new SurferAudio();
const canvas = document.getElementById('surfCanvas');
const ctx = canvas.getContext('2d');
const surfMsg = document.getElementById('surfMsg');

let currentLevel = 1;
let score = 0;
let ringsCollected = 0;
let targetRings = 15;
let shields = 3;
let invulnerable = true;

let waveOffset = 0;
let waveSpeed = 2.5;

let surfer = {
  x: 100,
  y: 280,
  vy: 0,
  isJumping: false
};

let rings = [];
let obstacles = [];
let spawnTimer = 0;

function getWaveY(x, time) {
  const base = canvas.height * 0.65;
  const freq1 = 0.012 + (currentLevel * 0.0003);
  const freq2 = 0.024;
  const amp1 = 45 + Math.sin(time * 0.02) * 15;
  const amp2 = 25;
  return base + Math.sin(x * freq1 + time) * amp1 + Math.cos(x * freq2 - time * 0.5) * amp2;
}

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  ringsCollected = 0;
  targetRings = 10 + Math.floor(lvl * 0.5);
  waveSpeed = 2.5 + (lvl * 0.08);
  rings = [];
  obstacles = [];
  spawnTimer = 0;
  surfer.vy = 0;
  surfer.isJumping = false;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = `${lvl}/40`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('ringsDisplay').textContent = `${ringsCollected}/${targetRings}`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function jump() {
  audio.init();
  if (!surfer.isJumping) {
    surfer.isJumping = true;
    surfer.vy = -12;
    audio.playJump();
  }
}

function showMsg(text, color) {
  surfMsg.textContent = text;
  surfMsg.style.color = color;
  surfMsg.classList.remove('show');
  void surfMsg.offsetWidth;
  surfMsg.classList.add('show');
  setTimeout(() => surfMsg.classList.remove('show'), 700);
}

function update(dt) {
  waveOffset += waveSpeed * (dt * 60) * 0.015;

  // Surfer physics
  const waveY = getWaveY(surfer.x, waveOffset);

  if (surfer.isJumping) {
    surfer.y += surfer.vy;
    surfer.vy += 0.6; // gravity
    if (surfer.y >= waveY - 10) {
      surfer.y = waveY - 10;
      surfer.isJumping = false;
      surfer.vy = 0;
    }
  } else {
    surfer.y = waveY - 10;
  }

  // Spawners
  spawnTimer += dt;
  if (spawnTimer > 1.2) {
    spawnTimer = 0;
    const isRing = Math.random() > 0.4;
    const spawnX = canvas.width + 40;
    const itemWaveY = getWaveY(spawnX, waveOffset);

    if (isRing) {
      rings.push({
        x: spawnX,
        y: itemWaveY - 45 - Math.random() * 40,
        radius: 12
      });
    } else {
      obstacles.push({
        x: spawnX,
        y: itemWaveY,
        width: 22,
        height: 32
      });
    }
  }

  // Update Rings
  for (let i = rings.length - 1; i >= 0; i--) {
    const r = rings[i];
    r.x -= waveSpeed * (dt * 60) * 2;

    // Collision with surfer
    const dist = Math.hypot(surfer.x - r.x, surfer.y - r.y);
    if (dist < 26) {
      ringsCollected++;
      score += 200;
      audio.playRing();
      showMsg('+RHYTHM RING!', '#ffd600');
      updateHud();
      rings.splice(i, 1);

      if (ringsCollected >= targetRings) {
        audio.playWin();
        showMsg('STAGE COMPLETED!', '#39ff14');
        setTimeout(() => {
          if (currentLevel < 40) initLevel(currentLevel + 1);
          else showMsg('ALL 40 WAVEFORMS CONQUERED!', '#ffd600');
        }, 1200);
      }
      continue;
    }

    if (r.x < -30) rings.splice(i, 1);
  }

  // Update Obstacles
  for (let i = obstacles.length - 1; i >= 0; i--) {
    const o = obstacles[i];
    o.x -= waveSpeed * (dt * 60) * 2;

    // Recalculate obstacle Y so it rides the wave
    o.y = getWaveY(o.x, waveOffset) - o.height;

    // Collision with surfer
    if (!invulnerable && Math.abs(surfer.x - o.x) < 20 && Math.abs(surfer.y - o.y) < 26) {
      shields--;
      audio.playCrash();
      showMsg('HARMONIC SPIKE HIT!', '#ff0055');
      updateHud();
      obstacles.splice(i, 1);

      if (shields <= 0) {
        showMsg('SURFER WIPEOUT - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
      continue;
    }

    if (o.x < -40) obstacles.splice(i, 1);
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Background FFT equalizer bars
  ctx.fillStyle = theme.primary;
  ctx.globalAlpha = 0.15;
  for (let i = 0; i < 20; i++) {
    const barW = 18;
    const barH = 50 + Math.sin(i * 0.8 + waveOffset) * 60;
    ctx.fillRect(i * 26 + 10, canvas.height * 0.45 - barH, barW, barH);
  }
  ctx.globalAlpha = 1;

  // Draw Audio Waveform Ribbon
  ctx.strokeStyle = theme.secondary;
  ctx.lineWidth = 6;
  ctx.shadowColor = theme.secondary;
  ctx.shadowBlur = 15;
  ctx.beginPath();
  for (let x = 0; x <= canvas.width; x += 10) {
    const y = getWaveY(x, waveOffset);
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;

  // Draw Rings
  for (let r of rings) {
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#ffd600';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  // Draw Obstacles (Audio Spikes)
  for (let o of obstacles) {
    ctx.fillStyle = '#ff0055';
    ctx.shadowColor = '#ff0055';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.moveTo(o.x, o.y);
    ctx.lineTo(o.x + o.width / 2, o.y - 20);
    ctx.lineTo(o.x + o.width, o.y);
    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Draw Surfer Hoverboard & Figure
  ctx.save();
  ctx.translate(surfer.x, surfer.y);

  // Hoverboard
  ctx.fillStyle = '#00f0ff';
  ctx.shadowColor = '#00f0ff';
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.ellipse(0, 4, 22, 6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;

  // Surfer Silhouette
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(0, -18, 6, 0, Math.PI * 2); // Head
  ctx.fill();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, -12);
  ctx.lineTo(0, 0); // Body
  ctx.moveTo(-8, -6);
  ctx.lineTo(8, -6); // Arms
  ctx.stroke();

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
