/**
 * Nanotech Crawler: Magnetic Surface Climb - 45 Thematic Levels
 */
(function() {
  'use strict';

  const THEMES = [
  { id: 1, name: "Neon Cyber-Grid", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Bioluminescent Crystal Cave", bg: "#02120e", primary: "#00ffcc", secondary: "#0099ff", accent: "#76ff03", text: "#e0f2f1" },
  { id: 3, name: "Molten Core", bg: "#160303", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 4, name: "Clockwork Sky-Fortress", bg: "#120e06", primary: "#ffd700", secondary: "#d4af37", accent: "#ff8c00", text: "#fff8e1" },
  { id: 5, name: "Quantum Void", bg: "#05010d", primary: "#b388ff", secondary: "#7c4dff", accent: "#ea80fc", text: "#ede7f6" },
  { id: 6, name: "Submerged Hydro-Lab", bg: "#010e1a", primary: "#00b0ff", secondary: "#00e5ff", accent: "#1de9b6", text: "#e1f5fe" },
  { id: 7, name: "Solar Flare Wasteland", bg: "#170a01", primary: "#ff6d00", secondary: "#ffab00", accent: "#ffd600", text: "#fff3e0" },
  { id: 8, name: "Emerald Nanite Spire", bg: "#021609", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 9, name: "Frozen Cryo-Tundra", bg: "#02121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 10, name: "Gravity Inversion Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 11, name: "Dark Matter Singularity", bg: "#030308", primary: "#7986cb", secondary: "#3f51b5", accent: "#ff4081", text: "#e8eaf6" },
  { id: 12, name: "Antimatter Reactor", bg: "#14010e", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 13, name: "Prismatic Aurora", bg: "#011210", primary: "#1de9b6", secondary: "#00bfa5", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 14, name: "Tachyon Warp Conduit", bg: "#0e0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 15, name: "Supernova Nebula", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 16, name: "Silicon Wafer Cleanroom", bg: "#081014", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 17, name: "Vaporwave Sunset Highway", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 18, name: "Radioactive Fallout Vault", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 19, name: "Obsidian Hex Matrix", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 20, name: "Cyber-Gothic Cathedral", bg: "#0d020d", primary: "#ea80fc", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 21, name: "Plasma Discharge Canal", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 22, name: "Golden Asteroid Belt", bg: "#141103", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fffde7" },
  { id: 23, name: "Krypton Laser Array", bg: "#011409", primary: "#00e676", secondary: "#1de9b6", accent: "#ff007f", text: "#e8f5e9" },
  { id: 24, name: "Acid Rain Megacity", bg: "#070c0c", primary: "#64ffda", secondary: "#1de9b6", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 25, name: "Cobalt Deep Subnet", bg: "#01071c", primary: "#2979ff", secondary: "#2962ff", accent: "#00e5ff", text: "#e3f2fd" },
  { id: 26, name: "Crimson Sector 9", bg: "#1c0206", primary: "#ff1744", secondary: "#f50057", accent: "#ff9100", text: "#ffebee" },
  { id: 27, name: "Galactic Star Forge", bg: "#0b051c", primary: "#7c4dff", secondary: "#651fff", accent: "#ffd600", text: "#ede7f6" },
  { id: 28, name: "Hyper-Space Monolith", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ff4081", text: "#e1f5fe" },
  { id: 29, name: "Bio-Synthetic Jungle", bg: "#02170a", primary: "#00c853", secondary: "#64dd17", accent: "#ffea00", text: "#e8f5e9" },
  { id: 30, name: "Volcanic Basalt Shelf", bg: "#170404", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 31, name: "Starlight Ionosphere", bg: "#06091c", primary: "#448aff", secondary: "#2979ff", accent: "#e040fb", text: "#e8eaf6" },
  { id: 32, name: "Amber CRT Mainframe", bg: "#140a00", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffd600", text: "#fff8e1" },
  { id: 33, name: "Phosphor Terminal 1978", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 34, name: "Titanium Orbital Dock", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 35, name: "Superconductor Loop", bg: "#03101c", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ff4081", text: "#e1f5fe" },
  { id: 36, name: "Magnetic Flux Funnel", bg: "#10031c", primary: "#b388ff", secondary: "#7c4dff", accent: "#00e676", text: "#ede7f6" },
  { id: 37, name: "Photon Wave Chamber", bg: "#021217", primary: "#18ffff", secondary: "#00e5ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 38, name: "Neutron Star Horizon", bg: "#0c0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 39, name: "Helios Solar Sail", bg: "#170c01", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 40, name: "Cryo-Containment Ring", bg: "#01121a", primary: "#80d8ff", secondary: "#0091ea", accent: "#69f0ae", text: "#e1f5fe" },
  { id: 41, name: "Cyber-Zen Sanctuary", bg: "#080210", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 42, name: "Nanoscale Bio-Chip", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 43, name: "Dark Energy Singularity", bg: "#020208", primary: "#5c6bc0", secondary: "#3949ab", accent: "#ff1744", text: "#e8eaf6" },
  { id: 44, name: "Tesseract Hyperspace", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Quantum Singularity Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const energyVal = document.getElementById('energyVal');
  const shieldVal = document.getElementById('shieldVal');
  const nanitesVal = document.getElementById('nanitesVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const leapBtn = document.getElementById('leapBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let nanites = 0;
  let targetNanites = 15;
  let shields = 3;
  let invulnerable = 0;

  // 360-degree cylindrical track radii
  let innerRadius = 120;
  let outerRadius = 200;
  let currentRing = 'inner'; // 'inner' or 'outer'
  let angle = 0;
  let leapProgress = 0;
  let isLeaping = false;

  let hazards = [];
  let pickups = [];
  let particles = [];
  const keys = {};

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentLevel ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        currentLevel = t.id;
        document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadLevel(currentLevel);
        overlay.style.display = 'none';
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    const theme = THEMES[(lvl - 1) % THEMES.length];
    targetNanites = 12 + lvl;
    nanites = 0;
    shields = 3;
    invulnerable = 60;
    angle = 0;
    currentRing = 'inner';
    isLeaping = false;
    leapProgress = 0;
    hazards = [];
    pickups = [];
    particles = [];

    innerRadius = Math.min(width, height) * 0.22;
    outerRadius = Math.min(width, height) * 0.38;

    // Place Hazards along both rings
    const hazardCount = 3 + Math.min(4, Math.floor(lvl / 10));
    for (let i = 0; i < hazardCount; i++) {
      hazards.push({
        ring: i % 2 === 0 ? 'inner' : 'outer',
        angle: (i / hazardCount) * Math.PI * 2 + 0.5,
        speed: (Math.random() < 0.5 ? 1 : -1) * (0.01 + currentLevel * 0.0005)
      });
    }

    // Place Nanite Pickups
    for (let i = 0; i < 8; i++) {
      spawnPickup();
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    energyVal.textContent = '100%';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    nanitesVal.textContent = '0 / ' + targetNanites;
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function spawnPickup() {
    pickups.push({
      ring: Math.random() < 0.5 ? 'inner' : 'outer',
      angle: Math.random() * Math.PI * 2,
      r: 7
    });
  }

  function executeLeap() {
    if (!isPlaying || isLeaping) return;
    isLeaping = true;
    leapProgress = 0;
    if (window.soundEngine) window.soundEngine.playLeap();
  }

  function createExplosion(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 3 + 1;
      particles.push({
        x, y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 25,
        maxLife: 25,
        color
      });
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    innerRadius = Math.min(width, height) * 0.22;
    outerRadius = Math.min(width, height) * 0.38;

    // Draw Inner Ring
    ctx.strokeStyle = theme.primary + '66';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(cx, cy, innerRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Draw Outer Ring
    ctx.strokeStyle = theme.primary + '66';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.arc(cx, cy, outerRadius, 0, Math.PI * 2);
    ctx.stroke();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Movement controls
    if (keys['ArrowLeft'] || keys['KeyA']) {
      angle -= 0.035;
      if (Math.random() < 0.2 && window.soundEngine) window.soundEngine.playStep();
    }
    if (keys['ArrowRight'] || keys['KeyD']) {
      angle += 0.035;
      if (Math.random() < 0.2 && window.soundEngine) window.soundEngine.playStep();
    }

    // Leap transition
    let currentR = currentRing === 'inner' ? innerRadius : outerRadius;
    if (isLeaping) {
      leapProgress += 0.08;
      const startR = currentRing === 'inner' ? innerRadius : outerRadius;
      const endR = currentRing === 'inner' ? outerRadius : innerRadius;
      currentR = startR + (endR - startR) * leapProgress;

      if (leapProgress >= 1.0) {
        isLeaping = false;
        leapProgress = 0;
        currentRing = currentRing === 'inner' ? 'outer' : 'inner';
      }
    }

    const botX = cx + Math.cos(angle) * currentR;
    const botY = cy + Math.sin(angle) * currentR;

    // Update & Draw Hazards
    hazards.forEach(h => {
      h.angle += h.speed;
      const hr = h.ring === 'inner' ? innerRadius : outerRadius;
      const hx = cx + Math.cos(h.angle) * hr;
      const hy = cy + Math.sin(h.angle) * hr;

      ctx.fillStyle = '#ff1744';
      ctx.beginPath();
      ctx.arc(hx, hy, 12, 0, Math.PI * 2);
      ctx.fill();

      // Check collision
      if (Math.hypot(botX - hx, botY - hy) < 18) {
        if (invulnerable <= 0) {
          shields--;
          invulnerable = 60;
          createExplosion(botX, botY, '#ff1744', 15);
          shieldVal.textContent = shields + ' SHIELDS';
          shieldVal.style.color = shields > 1 ? '#00ff88' : (shields === 1 ? '#ffaa00' : '#ff1744');

          if (shields <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'NANOBOT OVERCHARGED';
            overlayDesc.textContent = 'Laser hazard purged the crawler in Circuit ' + currentLevel + '. Recalibrate leap timing and retry.';
            startBtn.textContent = 'RETRY CIRCUIT ' + currentLevel;
            overlay.style.display = 'flex';
          }
        }
      }
    });

    // Update & Draw Pickups
    for (let i = pickups.length - 1; i >= 0; i--) {
      const p = pickups[i];
      const pr = p.ring === 'inner' ? innerRadius : outerRadius;
      const px = cx + Math.cos(p.angle) * pr;
      const py = cy + Math.sin(p.angle) * pr;

      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fill();

      // Collect
      if (Math.hypot(botX - px, botY - py) < 16) {
        nanites++;
        nanitesVal.textContent = nanites + ' / ' + targetNanites;
        if (window.soundEngine) window.soundEngine.playCollect();
        createExplosion(px, py, '#ffd600', 8);
        pickups.splice(i, 1);
        spawnPickup();

        if (nanites >= targetNanites) {
          isPlaying = false;
          if (window.soundEngine) window.soundEngine.playWin();
          nextBtn.style.display = 'inline-block';
          overlayTitle.textContent = 'CIRCUIT HARVEST COMPLETE!';
          overlayDesc.textContent = 'Nanite extraction quota reached for Circuit ' + currentLevel + ' (' + theme.name + ')!';
          startBtn.textContent = 'ENTER NEXT SUBSTRATE';
          overlay.style.display = 'flex';
        }
      }
    }

    // Draw Crawler Bot
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.accent;
      ctx.beginPath();
      ctx.arc(botX, botY, 10, 0, Math.PI * 2);
      ctx.fill();

      // Bot Core
      ctx.fillStyle = '#04020f';
      ctx.beginPath();
      ctx.arc(botX, botY, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  // Inputs
  window.addEventListener('keydown', e => {
    keys[e.code] = true;
    if (e.code === 'Space') {
      e.preventDefault();
      executeLeap();
    }
  });

  window.addEventListener('keyup', e => {
    keys[e.code] = false;
  });

  leapBtn.addEventListener('click', executeLeap);
  canvas.addEventListener('click', executeLeap);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (nanites >= targetNanites) {
      currentLevel = (currentLevel % THEMES.length) + 1;
    }
    loadLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = (currentLevel % THEMES.length) + 1;
    loadLevel(currentLevel);
  });

  restartBtn.addEventListener('click', () => {
    loadLevel(currentLevel);
  });

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'SUBSTRATE CIRCUITS (1-45)';
    overlayDesc.textContent = 'Select microscopic magnetic circuit:';
    startBtn.textContent = 'RESUME CRAWL';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();