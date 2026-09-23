/**
 * Bassline Defender — Game Engine (45 Stages, BPM Turret Sync, Shields)
 */
const THEMES = [
  { id: 1, name: "Sunset Synthwave Club", bg: "#14052b", road: "#220a44", primary: "#ff007f", secondary: "#00f0ff", accent: "#ffd600", text: "#fce4ec" },
  { id: 2, name: "Neon Tokyo Disco", bg: "#060919", road: "#0d1533", primary: "#00f0ff", secondary: "#39ff14", accent: "#ff007f", text: "#e0f7fa" },
  { id: 3, name: "Cyberpunk Underground Sub", bg: "#0d0417", road: "#190a2e", primary: "#7c4dff", secondary: "#ff0055", accent: "#00e5ff", text: "#ede7f6" },
  { id: 4, name: "Cosmic Dancefloor", bg: "#03020c", road: "#0a0724", primary: "#651fff", secondary: "#00e5ff", accent: "#ffd600", text: "#e8eaf6" },
  { id: 5, name: "Glacial Aurora Lounge", bg: "#02131c", road: "#052638", primary: "#80d8ff", secondary: "#00e676", accent: "#ff4081", text: "#e1f5fe" },
  { id: 6, name: "Obsidian Bass Chamber", bg: "#070709", road: "#13141a", primary: "#b0bec5", secondary: "#00f0ff", accent: "#39ff14", text: "#eceff1" },
  { id: 7, name: "Solar Flare Rave", bg: "#190700", road: "#361002", primary: "#ff3d00", secondary: "#ffab00", accent: "#ffff00", text: "#fbe9e7" },
  { id: 8, name: "Toxic Electro Core", bg: "#0a1702", road: "#162e05", primary: "#76ff03", secondary: "#00e5ff", accent: "#ffd600", text: "#f1f8e9" },
  { id: 9, name: "Cobalt Pulse Matrix", bg: "#020a1c", road: "#06183d", primary: "#2979ff", secondary: "#00f0ff", accent: "#ff1744", text: "#e3f2fd" },
  { id: 10, name: "Amethyst Trance Temple", bg: "#12021c", road: "#26063b", primary: "#d500f9", secondary: "#aa00ff", accent: "#00e5ff", text: "#f3e5f5" },
  { id: 11, name: "Hyperdrive Laser Grid", bg: "#030817", road: "#091738", primary: "#00b0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e1f5fe" },
  { id: 12, name: "Molten Dubstep Chasm", bg: "#170401", road: "#360e03", primary: "#ff5722", secondary: "#ff1744", accent: "#ffd600", text: "#fbe9e7" },
  { id: 13, name: "Prism Wave Spectrum", bg: "#0a0417", road: "#1c0d38", primary: "#ea80fc", secondary: "#00f0ff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 14, name: "Titanium Club Mainframe", bg: "#08090d", road: "#151821", primary: "#cfd8dc", secondary: "#00e676", accent: "#00b0ff", text: "#ffffff" },
  { id: 15, name: "Electric Lavender Field", bg: "#0a0317", road: "#1a0b36", primary: "#b388ff", secondary: "#ff80ab", accent: "#00f0ff", text: "#ede7f6" },
  { id: 16, name: "Emerald Glitch Runway", bg: "#011409", road: "#042914", primary: "#00e676", secondary: "#69f0ae", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Helios Gold Discoteca", bg: "#171201", road: "#332804", primary: "#ffd700", secondary: "#ff9100", accent: "#ff007f", text: "#fffde7" },
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

const audio = new DefenderAudio();
const canvas = document.getElementById('defenderCanvas');
const ctx = canvas.getContext('2d');
const defMsg = document.getElementById('defMsg');

let currentLevel = 1;
let score = 0;
let enemiesDefeated = 0;
let targetEnemies = 20;
let shields = 3;
let invulnerable = true;

let bpm = 120;
let beatTimer = 0;
let beatPulse = 0;

let turret = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  angle: 0
};

let bullets = [];
let enemies = [];
let enemyTimer = 0;

function initLevel(lvl) {
  currentLevel = lvl;
  shields = 3;
  invulnerable = false;
  enemiesDefeated = 0;
  targetEnemies = 15 + lvl * 2;
  bpm = 110 + lvl * 1.5;
  beatTimer = 0;
  beatPulse = 0;
  bullets = [];
  enemies = [];
  enemyTimer = 0;

  const theme = THEMES[(lvl - 1) % THEMES.length];
  document.getElementById('levelDisplay').textContent = `${lvl}/45`;
  document.getElementById('themeDisplay').textContent = theme.name;
  updateHud();
  renderLevelGrid();
}

function updateHud() {
  document.getElementById('scoreDisplay').textContent = score;
  document.getElementById('waveDisplay').textContent = `${enemiesDefeated}/${targetEnemies}`;
  document.getElementById('shieldDisplay').textContent = '🛡️'.repeat(Math.max(0, shields));
}

function fireTurret() {
  audio.init();
  const beatInterval = 60 / bpm;
  const timeSinceBeat = beatTimer % beatInterval;
  const onBeat = timeSinceBeat < 0.12 || timeSinceBeat > (beatInterval - 0.12);

  const bSpeed = onBeat ? 9 : 6;
  const bRadius = onBeat ? 8 : 4;
  const bDmg = onBeat ? 3 : 1;

  bullets.push({
    x: turret.x + Math.cos(turret.angle) * 25,
    y: turret.y + Math.sin(turret.angle) * 25,
    vx: Math.cos(turret.angle) * bSpeed,
    vy: Math.sin(turret.angle) * bSpeed,
    radius: bRadius,
    damage: bDmg,
    onBeat
  });

  audio.playBlast(onBeat);
  if (onBeat) {
    showMsg('ON-BEAT BASS BLAST!', '#39ff14');
  }
}

function spawnEnemy() {
  const angle = Math.random() * Math.PI * 2;
  const dist = canvas.width * 0.7;
  enemies.push({
    x: turret.x + Math.cos(angle) * dist,
    y: turret.y + Math.sin(angle) * dist,
    hp: 1 + Math.floor(currentLevel * 0.1),
    speed: 1.2 + (currentLevel * 0.03)
  });
}

function showMsg(text, color) {
  defMsg.textContent = text;
  defMsg.style.color = color;
  defMsg.classList.remove('show');
  void defMsg.offsetWidth;
  defMsg.classList.add('show');
  setTimeout(() => defMsg.classList.remove('show'), 600);
}

function update(dt) {
  const beatInterval = 60 / bpm;
  beatTimer += dt;
  if (beatTimer >= beatInterval) {
    beatTimer -= beatInterval;
    audio.playBeatKick();
    beatPulse = 40;
  }
  if (beatPulse > 0) beatPulse -= dt * 60;

  // Spawn enemies
  enemyTimer += dt;
  if (enemyTimer > 1.2 - Math.min(0.6, currentLevel * 0.015)) {
    enemyTimer = 0;
    spawnEnemy();
  }

  // Update Bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    const b = bullets[i];
    b.x += b.vx;
    b.y += b.vy;

    // Check collision with enemies
    for (let j = enemies.length - 1; j >= 0; j--) {
      const e = enemies[j];
      const dist = Math.hypot(b.x - e.x, b.y - e.y);
      if (dist < b.radius + 15) {
        e.hp -= b.damage;
        audio.playEnemyHit();
        bullets.splice(i, 1);

        if (e.hp <= 0) {
          enemies.splice(j, 1);
          enemiesDefeated++;
          score += 150;
          updateHud();

          if (enemiesDefeated >= targetEnemies) {
            audio.playWin();
            showMsg('PERIMETER SECURED!', '#39ff14');
            setTimeout(() => {
              if (currentLevel < 45) initLevel(currentLevel + 1);
              else showMsg('ALL 45 PERIMETERS DEFENDED!', '#ffd600');
            }, 1200);
          }
        }
        break;
      }
    }

    if (b.x < 0 || b.x > canvas.width || b.y < 0 || b.y > canvas.height) {
      bullets.splice(i, 1);
    }
  }

  // Update Enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    const angleToTurret = Math.atan2(turret.y - e.y, turret.x - e.x);
    e.x += Math.cos(angleToTurret) * e.speed;
    e.y += Math.sin(angleToTurret) * e.speed;

    // Core collision
    const dist = Math.hypot(turret.x - e.x, turret.y - e.y);
    if (dist < 30) {
      shields--;
      enemies.splice(i, 1);
      showMsg('CORE BREACH!', '#ff0055');
      updateHud();

      if (shields <= 0) {
        showMsg('DEFENSE OVERRUN - RETRYING', '#ff0055');
        setTimeout(() => initLevel(currentLevel), 1000);
      }
    }
  }
}

function draw() {
  const theme = THEMES[(currentLevel - 1) % THEMES.length];
  ctx.fillStyle = theme.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Concentric Radar Rings
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(turret.x, turret.y, 80, 0, Math.PI * 2);
  ctx.arc(turret.x, turret.y, 160, 0, Math.PI * 2);
  ctx.arc(turret.x, turret.y, 240, 0, Math.PI * 2);
  ctx.stroke();

  // Pulsing Basswave Ring
  if (beatPulse > 0) {
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(turret.x, turret.y, 35 + (40 - beatPulse) * 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Draw Enemies
  for (let e of enemies) {
    ctx.fillStyle = '#ff0055';
    ctx.shadowColor = '#ff0055';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(e.x, e.y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Draw Bullets
  for (let b of bullets) {
    ctx.fillStyle = b.onBeat ? '#39ff14' : '#00f0ff';
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = b.onBeat ? 15 : 6;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  // Turret Base & Barrel
  ctx.save();
  ctx.translate(turret.x, turret.y);
  ctx.rotate(turret.angle);

  ctx.fillStyle = '#00f0ff';
  ctx.fillRect(0, -5, 30, 10); // Barrel

  ctx.fillStyle = '#1b2038';
  ctx.strokeStyle = '#00f0ff';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, 20, 0, Math.PI * 2);
  ctx.fill();
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

// Aiming & Firing
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const px = (e.clientX - rect.left) * scaleX;
  const py = (e.clientY - rect.top) * scaleY;
  turret.angle = Math.atan2(py - turret.y, px - turret.x);
});

canvas.addEventListener('click', fireTurret);
document.getElementById('fireBtn').addEventListener('click', fireTurret);

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    fireTurret();
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
