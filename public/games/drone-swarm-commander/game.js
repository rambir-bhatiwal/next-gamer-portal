/**
 * Drone Swarm Commander: Tactical Patrol - 45 Thematic Levels
 */
(function() {
  'use strict';

  const THEMES = [
  { id: 1, name: "Earth Orbital Alpha", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Mars Dust Plains", bg: "#160505", primary: "#ff5722", secondary: "#ff9800", accent: "#ffeb3b", text: "#fbe9e7" },
  { id: 3, name: "Titan Methane Ocean", bg: "#02120e", primary: "#00ffcc", secondary: "#00bcd4", accent: "#76ff03", text: "#e0f2f1" },
  { id: 4, name: "Europa Sub-Surface Core", bg: "#02121a", primary: "#80d8ff", secondary: "#00b0ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 5, name: "Venusian Acid Highlands", bg: "#140e02", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fff8e1" },
  { id: 6, name: "Jovian Magnetic Vortex", bg: "#0d0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 7, name: "Saturnian Ice Ring 7", bg: "#081017", primary: "#00e5ff", secondary: "#40c4ff", accent: "#b388ff", text: "#e0f7fa" },
  { id: 8, name: "Kuiper Belt Relay", bg: "#04050d", primary: "#5c6bc0", secondary: "#3f51b5", accent: "#00f0ff", text: "#e8eaf6" },
  { id: 9, name: "Solar Corona Outpost", bg: "#170a01", primary: "#ff6d00", secondary: "#ff3d00", accent: "#ffd600", text: "#fff3e0" },
  { id: 10, name: "Oort Cloud Perimeter", bg: "#03020a", primary: "#7c4dff", secondary: "#651fff", accent: "#ff4081", text: "#ede7f6" },
  { id: 11, name: "Proxima Centauri Foundry", bg: "#14010a", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 12, name: "Sirius A Thermal Forge", bg: "#021218", primary: "#00e5ff", secondary: "#00b0ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 13, name: "Orion Nebula Spire", bg: "#120317", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 14, name: "Cygnus X-1 Event Horizon", bg: "#05010a", primary: "#9575cd", secondary: "#512da8", accent: "#00f0ff", text: "#ede7f6" },
  { id: 15, name: "Tachyon Star Bridge", bg: "#0a0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 16, name: "Silicon Wafer Megacity", bg: "#061214", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Dark Matter Bastion", bg: "#020308", primary: "#7986cb", secondary: "#3949ab", accent: "#ff4081", text: "#e8eaf6" },
  { id: 18, name: "Antimatter Containment Hub", bg: "#170308", primary: "#ff1744", secondary: "#c51162", accent: "#00f0ff", text: "#ffebee" },
  { id: 19, name: "Emerald Nanite Colony", bg: "#021708", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 20, name: "Obsidian Deep Subnet", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 21, name: "Neutron Star Pulsar Hub", bg: "#0f0217", primary: "#e040fb", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 22, name: "Heliosphere Beacon", bg: "#170e02", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffff00", text: "#fff8e1" },
  { id: 23, name: "Cryo-Stasis Vault", bg: "#01121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e676", text: "#e1f5fe" },
  { id: 24, name: "Molten Magma Shelf", bg: "#170402", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 25, name: "Galactic Trade Nexus", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ffd600", text: "#e1f5fe" },
  { id: 26, name: "Asteroid Mining Belt V", bg: "#141103", primary: "#ffd600", secondary: "#ff9100", accent: "#ff3d00", text: "#fffde7" },
  { id: 27, name: "Quantum Supercluster", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 28, name: "Plasma Shield Line Alpha", bg: "#14010e", primary: "#ff007f", secondary: "#d50000", accent: "#00f0ff", text: "#ffebee" },
  { id: 29, name: "Hyper-Relay Terminal", bg: "#021217", primary: "#18ffff", secondary: "#00b0ff", accent: "#76ff03", text: "#e0f7fa" },
  { id: 30, name: "Starlight Dreadnought Yard", bg: "#090614", primary: "#b388ff", secondary: "#7c4dff", accent: "#ffd600", text: "#ede7f6" },
  { id: 31, name: "Supernova Remnant M-1", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 32, name: "Sub-Atomic Slalom Gate", bg: "#01140e", primary: "#00e676", secondary: "#1de9b6", accent: "#00f0ff", text: "#e8f5e9" },
  { id: 33, name: "Geothermal Power Basin", bg: "#160902", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffd600", text: "#fff3e0" },
  { id: 34, name: "Dark Nebula Veil", bg: "#04020a", primary: "#7e57c2", secondary: "#4527a0", accent: "#ea80fc", text: "#ede7f6" },
  { id: 35, name: "Solar Wind Sail Station", bg: "#170c01", primary: "#ffd600", secondary: "#ffab00", accent: "#ff3d00", text: "#fff8e1" },
  { id: 36, name: "Cyber-Bunker Quarantine", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 37, name: "Vaporwave Orbital Arcade", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 38, name: "Titanium Asteroid Bastion", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 39, name: "Phosphor Command Bunker", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 40, name: "Krypton Atmospheric Station", bg: "#021714", primary: "#26a69a", secondary: "#00897b", accent: "#80cbc4", text: "#e0f2f1" },
  { id: 41, name: "Quantum Horizon Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 42, name: "Singularity Defense Ring", bg: "#030208", primary: "#3f51b5", secondary: "#1a237e", accent: "#ff1744", text: "#e8eaf6" },
  { id: 43, name: "Bioluminescent Biosphere", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 44, name: "Tesseract Command Core", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Galactic Apex Citadel", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const droneVal = document.getElementById('droneVal');
  const stanceVal = document.getElementById('stanceVal');
  const scoreVal = document.getElementById('scoreVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const stanceBtns = document.querySelectorAll('.stance-btn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let stance = 'intercept';
  let score = 0;
  let targetScore = 20;
  let beaconX = width / 2;
  let beaconY = height / 2;
  let invulnerable = 0; // human speed fair defense

  let drones = [];
  let enemies = [];
  let lasers = [];
  let particles = [];
  let spawnCooldown = 0;

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
    targetScore = 15 + lvl;
    score = 0;
    beaconX = width / 2;
    beaconY = height / 2;
    enemies = [];
    lasers = [];
    particles = [];
    spawnCooldown = 40;
    invulnerable = 60;

    // Initialize 40 Micro-Drones
    drones = [];
    for (let i = 0; i < 40; i++) {
      drones.push({
        x: beaconX + (Math.random() - 0.5) * 80,
        y: beaconY + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        cooldown: Math.floor(Math.random() * 20)
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    droneVal.textContent = drones.length + ' DRONES';
    scoreVal.textContent = '0 / ' + targetScore;
    nextBtn.style.display = 'none';
    isPlaying = true;
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

  function spawnEnemy() {
    const side = Math.floor(Math.random() * 4);
    let x = 0, y = 0;
    if (side === 0) { x = Math.random() * width; y = -20; }
    else if (side === 1) { x = width + 20; y = Math.random() * height; }
    else if (side === 2) { x = Math.random() * width; y = height + 20; }
    else { x = -20; y = Math.random() * height; }

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const speed = 1.0 + Math.min(2.0, currentLevel * 0.04);
    const targetAngle = Math.atan2(height / 2 - y, width / 2 - x);

    enemies.push({
      x, y,
      vx: Math.cos(targetAngle) * speed,
      vy: Math.sin(targetAngle) * speed,
      hp: 15 + currentLevel,
      maxHp: 15 + currentLevel,
      r: 12,
      color: '#ff1744'
    });
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Grid Radar Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 60) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Swarm Beacon Indicator
    ctx.strokeStyle = theme.primary + '66';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(beaconX, beaconY, 24, 0, Math.PI * 2);
    ctx.stroke();

    if (!isPlaying) return;

    // Spawning Enemies
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnEnemy();
      spawnCooldown = Math.max(30, 80 - currentLevel);
    }

    // Update Drones (Flocking to Beacon)
    drones.forEach(d => {
      // Pull to beacon
      const dx = beaconX - d.x;
      const dy = beaconY - d.y;
      const dist = Math.hypot(dx, dy);

      let force = 0.08;
      if (stance === 'scatter') force = 0.03;
      if (stance === 'orbit') {
        // Tangential swirl
        d.vx += -dy * 0.001;
        d.vy += dx * 0.001;
      }

      d.vx += (dx / Math.max(20, dist)) * force;
      d.vy += (dy / Math.max(20, dist)) * force;

      // Damping
      d.vx *= 0.94;
      d.vy *= 0.94;

      d.x += d.vx;
      d.y += d.vy;

      // Draw Drone
      ctx.fillStyle = theme.primary;
      ctx.beginPath();
      ctx.arc(d.x, d.y, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Drone Targeting
      d.cooldown--;
      if (d.cooldown <= 0) {
        // Find enemy in range
        let target = null;
        let minDist = 140;
        enemies.forEach(e => {
          const ed = Math.hypot(e.x - d.x, e.y - d.y);
          if (ed < minDist) {
            minDist = ed;
            target = e;
          }
        });

        if (target) {
          d.cooldown = 35;
          lasers.push({
            x1: d.x, y1: d.y,
            x2: target.x, y2: target.y,
            life: 6,
            color: theme.accent
          });
          target.hp -= 4;
          if (window.soundEngine && Math.random() < 0.2) window.soundEngine.playChirp();

          if (target.hp <= 0) {
            createExplosion(target.x, target.y, '#ff1744', 12);
            enemies = enemies.filter(e => e !== target);
            score++;
            scoreVal.textContent = score + ' / ' + targetScore;
            if (window.soundEngine) window.soundEngine.playPop();

            if (score >= targetScore) {
              isPlaying = false;
              if (window.soundEngine) window.soundEngine.playWin();
              nextBtn.style.display = 'inline-block';
              overlayTitle.textContent = 'SECTOR SECURED!';
              overlayDesc.textContent = 'All hostile stealth drones neutralized in Sector ' + currentLevel + ' (' + theme.name + ').';
              startBtn.textContent = 'PATROL NEXT SECTOR';
              overlay.style.display = 'flex';
            }
          }
        }
      }
    });

    // Draw Lasers
    for (let i = lasers.length - 1; i >= 0; i--) {
      const l = lasers[i];
      l.life--;
      ctx.strokeStyle = l.color;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
      if (l.life <= 0) lasers.splice(i, 1);
    }

    // Update Enemies
    enemies.forEach(e => {
      e.x += e.vx;
      e.y += e.vy;

      ctx.fillStyle = e.color;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fill();

      // Health ring
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r * (e.hp / e.maxHp), 0, Math.PI * 2);
      ctx.stroke();
    });

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

  // Input Handling
  canvas.addEventListener('mousemove', e => {
    if (isPlaying) {
      const rect = canvas.getBoundingClientRect();
      beaconX = e.clientX - rect.left;
      beaconY = e.clientY - rect.top;
    }
  });

  stanceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stanceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      stance = btn.dataset.stance;
      stanceVal.textContent = stance.toUpperCase();
    });
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (score >= targetScore) {
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
    overlayTitle.textContent = 'PATROL SECTOR MAP (1-45)';
    overlayDesc.textContent = 'Select autonomous drone patrol zone:';
    startBtn.textContent = 'RESUME PATROL';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();