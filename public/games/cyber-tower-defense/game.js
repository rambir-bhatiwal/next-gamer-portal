/**
 * Cyber Tower Defense: Subnet Guardian - 45 Thematic Levels
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
  const bitsVal = document.getElementById('bitsVal');
  const coreVal = document.getElementById('coreVal');
  const waveVal = document.getElementById('waveVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const startWaveBtn = document.getElementById('startWaveBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const towerBtns = document.querySelectorAll('.tower-btn');

  let width = 0, height = 0;
  const cols = 16;
  const rows = 10;
  let cellSize = 40;
  let offsetX = 0;
  let offsetY = 0;

  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    cellSize = Math.min((width - 40) / cols, (height - 120) / rows);
    offsetX = (width - cols * cellSize) / 2;
    offsetY = (height - rows * cellSize) / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedTowerType = 'pulse';
  let bits = 120;
  let coreHealth = 100;
  let currentWave = 1;
  const totalWaves = 5;
  let waveInProgress = false;
  let invulnerable = 0; // human reaction pacing

  const TOWER_COSTS = {
    pulse: 40,
    cryo: 60,
    emp: 80,
    railgun: 120
  };

  let grid = [];
  let pathWay = [];
  let towers = [];
  let enemies = [];
  let projectiles = [];
  let particles = [];
  let spawnQueue = [];
  let spawnTimer = 0;

  function generatePath(lvl) {
    pathWay = [];
    const seed = lvl % 5;
    if (seed === 0) {
      for (let x = 0; x < 6; x++) pathWay.push({ x, y: 2 });
      for (let y = 3; y < 8; y++) pathWay.push({ x: 5, y });
      for (let x = 6; x < 12; x++) pathWay.push({ x, y: 7 });
      for (let y = 6; y >= 3; y--) pathWay.push({ x: 11, y });
      for (let x = 12; x < cols; x++) pathWay.push({ x, y: 3 });
    } else if (seed === 1) {
      for (let x = 0; x < 8; x++) pathWay.push({ x, y: 3 });
      for (let y = 4; y < 7; y++) pathWay.push({ x: 7, y });
      for (let x = 8; x < cols; x++) pathWay.push({ x, y: 6 });
    } else if (seed === 2) {
      for (let x = 0; x < 4; x++) pathWay.push({ x, y: 7 });
      for (let y = 6; y >= 2; y--) pathWay.push({ x: 3, y });
      for (let x = 4; x < 13; x++) pathWay.push({ x, y: 2 });
      for (let y = 3; y < 8; y++) pathWay.push({ x: 12, y });
      for (let x = 13; x < cols; x++) pathWay.push({ x, y: 7 });
    } else {
      for (let x = 0; x < 5; x++) pathWay.push({ x, y: 4 });
      for (let y = 5; y < 8; y++) pathWay.push({ x: 4, y });
      for (let x = 5; x < 10; x++) pathWay.push({ x, y: 7 });
      for (let y = 6; y >= 2; y--) pathWay.push({ x: 9, y });
      for (let x = 10; x < cols; x++) pathWay.push({ x, y: 2 });
    }
  }

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
    generatePath(lvl);
    bits = 120 + lvl * 10;
    coreHealth = 100;
    currentWave = 1;
    waveInProgress = false;
    towers = [];
    enemies = [];
    projectiles = [];
    particles = [];
    spawnQueue = [];
    invulnerable = 60;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    bitsVal.textContent = bits + ' BITS';
    coreVal.textContent = '100%';
    coreVal.style.color = '#00ff88';
    waveVal.textContent = '1 / ' + totalWaves;
    startWaveBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function startWave() {
    if (waveInProgress || !isPlaying) return;
    waveInProgress = true;
    startWaveBtn.style.display = 'none';
    const count = 8 + currentWave * 4 + currentLevel * 2;
    spawnQueue = [];
    for (let i = 0; i < count; i++) {
      spawnQueue.push({
        type: i % 5 === 0 ? 'trojan' : (i % 8 === 0 ? 'rootkit' : 'worm'),
        delay: i * 35
      });
    }
    spawnTimer = 0;
  }

  function spawnEnemy(type) {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const hpMult = 1 + (currentLevel - 1) * 0.15 + (currentWave - 1) * 0.3;
    let hp = 30 * hpMult;
    let speed = 1.2;
    let reward = 12;
    let color = theme.secondary;
    let size = cellSize * 0.28;

    if (type === 'trojan') {
      hp = 70 * hpMult;
      speed = 0.85;
      reward = 25;
      color = '#ff1744';
      size = cellSize * 0.38;
    } else if (type === 'rootkit') {
      hp = 180 * hpMult;
      speed = 0.55;
      reward = 50;
      color = '#ffd600';
      size = cellSize * 0.45;
    }

    enemies.push({
      type,
      pathIndex: 0,
      subDist: 0,
      hp,
      maxHp: hp,
      speed,
      reward,
      color,
      size,
      slowTimer: 0
    });
  }

  function buildTower(gx, gy) {
    if (!isPlaying) return;
    // Check if on path
    const onPath = pathWay.some(p => p.x === gx && p.y === gy);
    if (onPath) return;

    // Check if tower exists
    const exists = towers.some(t => t.gx === gx && t.gy === gy);
    if (exists) return;

    const cost = TOWER_COSTS[selectedTowerType];
    if (bits < cost) return;

    bits -= cost;
    bitsVal.textContent = bits + ' BITS';
    if (window.soundEngine) window.soundEngine.playBuild();

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    let range = cellSize * 2.5;
    let fireRate = 25;
    let damage = 12;
    let color = theme.primary;

    if (selectedTowerType === 'cryo') {
      range = cellSize * 2.2;
      fireRate = 45;
      damage = 4;
      color = '#80d8ff';
    } else if (selectedTowerType === 'emp') {
      range = cellSize * 2.0;
      fireRate = 60;
      damage = 25;
      color = '#e040fb';
    } else if (selectedTowerType === 'railgun') {
      range = cellSize * 3.8;
      fireRate = 75;
      damage = 50;
      color = '#ffd600';
    }

    towers.push({
      type: selectedTowerType,
      gx, gy,
      x: offsetX + gx * cellSize + cellSize / 2,
      y: offsetY + gy * cellSize + cellSize / 2,
      range,
      fireRate,
      cooldown: 0,
      damage,
      color
    });
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

    // Draw Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let r = 0; r <= rows; r++) {
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY + r * cellSize);
      ctx.lineTo(offsetX + cols * cellSize, offsetY + r * cellSize);
      ctx.stroke();
    }
    for (let c = 0; c <= cols; c++) {
      ctx.beginPath();
      ctx.moveTo(offsetX + c * cellSize, offsetY);
      ctx.lineTo(offsetX + c * cellSize, offsetY + rows * cellSize);
      ctx.stroke();
    }

    // Draw Pathway
    for (let i = 0; i < pathWay.length; i++) {
      const pt = pathWay[i];
      const px = offsetX + pt.x * cellSize;
      const py = offsetY + pt.y * cellSize;

      ctx.fillStyle = 'rgba(0, 240, 255, 0.12)';
      ctx.fillRect(px, py, cellSize, cellSize);

      ctx.strokeStyle = theme.primary + '55';
      ctx.strokeRect(px + 2, py + 2, cellSize - 4, cellSize - 4);

      if (i === 0) {
        ctx.fillStyle = '#00e676';
        ctx.font = 'bold 10px monospace';
        ctx.fillText('ENTRY', px + 4, py + cellSize / 2 + 3);
      } else if (i === pathWay.length - 1) {
        ctx.fillStyle = '#ff1744';
        ctx.font = 'bold 10px monospace';
        ctx.fillText('CORE', px + 6, py + cellSize / 2 + 3);
      }
    }

    // Draw Towers
    towers.forEach(t => {
      // Range indicator subtle
      ctx.strokeStyle = t.color + '22';
      ctx.beginPath();
      ctx.arc(t.x, t.y, t.range, 0, Math.PI * 2);
      ctx.stroke();

      // Node Body
      ctx.fillStyle = t.color;
      ctx.beginPath();
      ctx.arc(t.x, t.y, cellSize * 0.35, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Tower Core
      ctx.fillStyle = '#04020f';
      ctx.beginPath();
      ctx.arc(t.x, t.y, cellSize * 0.15, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!isPlaying) return;

    // Spawning Queue
    if (waveInProgress && spawnQueue.length > 0) {
      spawnTimer++;
      if (spawnTimer >= 25) {
        spawnTimer = 0;
        const next = spawnQueue.shift();
        spawnEnemy(next.type);
      }
    }

    // Towers Targeting & Firing
    towers.forEach(t => {
      if (t.cooldown > 0) t.cooldown--;
      if (t.cooldown <= 0) {
        // Find nearest enemy in range
        let target = null;
        let minDist = t.range;
        enemies.forEach(e => {
          const pt = pathWay[e.pathIndex];
          if (!pt) return;
          const ex = offsetX + pt.x * cellSize + cellSize / 2;
          const ey = offsetY + pt.y * cellSize + cellSize / 2;
          const dist = Math.hypot(ex - t.x, ey - t.y);
          if (dist <= minDist) {
            minDist = dist;
            target = { enemy: e, x: ex, y: ey };
          }
        });

        if (target) {
          t.cooldown = t.fireRate;
          if (t.type === 'emp') {
            if (window.soundEngine) window.soundEngine.playEmp();
            enemies.forEach(e => {
              const pt = pathWay[e.pathIndex];
              if (!pt) return;
              const ex = offsetX + pt.x * cellSize + cellSize / 2;
              const ey = offsetY + pt.y * cellSize + cellSize / 2;
              if (Math.hypot(ex - t.x, ey - t.y) <= t.range) {
                e.hp -= t.damage;
                e.slowTimer = 40;
                createExplosion(ex, ey, t.color, 4);
              }
            });
          } else {
            if (window.soundEngine) window.soundEngine.playZap();
            projectiles.push({
              x: t.x,
              y: t.y,
              target: target.enemy,
              speed: 9,
              damage: t.damage,
              type: t.type,
              color: t.color
            });
          }
        }
      }
    });

    // Update Projectiles
    for (let i = projectiles.length - 1; i >= 0; i--) {
      const p = projectiles[i];
      if (!enemies.includes(p.target)) {
        projectiles.splice(i, 1);
        continue;
      }
      const pt = pathWay[p.target.pathIndex];
      if (!pt) {
        projectiles.splice(i, 1);
        continue;
      }
      const tx = offsetX + pt.x * cellSize + cellSize / 2;
      const ty = offsetY + pt.y * cellSize + cellSize / 2;
      const angle = Math.atan2(ty - p.y, tx - p.x);
      p.x += Math.cos(angle) * p.speed;
      p.y += Math.sin(angle) * p.speed;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fill();

      if (Math.hypot(tx - p.x, ty - p.y) < 8) {
        p.target.hp -= p.damage;
        if (p.type === 'cryo') p.target.slowTimer = 90;
        createExplosion(p.x, p.y, p.color, 6);
        projectiles.splice(i, 1);
      }
    }

    // Update Enemies
    for (let i = enemies.length - 1; i >= 0; i--) {
      const e = enemies[i];
      let spd = e.speed;
      if (e.slowTimer > 0) {
        e.slowTimer--;
        spd *= 0.5;
      }
      e.subDist += spd;
      if (e.subDist >= cellSize) {
        e.subDist = 0;
        e.pathIndex++;
      }

      if (e.pathIndex >= pathWay.length) {
        // Reached Core
        enemies.splice(i, 1);
        coreHealth = Math.max(0, coreHealth - 12);
        coreVal.textContent = coreHealth + '%';
        coreVal.style.color = coreHealth > 50 ? '#00ff88' : (coreHealth > 25 ? '#ffaa00' : '#ff1744');
        if (coreHealth <= 0) {
          isPlaying = false;
          overlayTitle.textContent = 'SUBNET CORE COMPROMISED';
          overlayDesc.textContent = 'Hostile malware breached the central router in Sector ' + currentLevel + '. Reinforce defensive nodes and retry.';
          startBtn.textContent = 'RETRY SUBNET ' + currentLevel;
          overlay.style.display = 'flex';
        }
        continue;
      }

      if (e.hp <= 0) {
        bits += e.reward;
        bitsVal.textContent = bits + ' BITS';
        if (window.soundEngine) window.soundEngine.playKill();
        const pt = pathWay[e.pathIndex];
        const ex = offsetX + pt.x * cellSize + cellSize / 2;
        const ey = offsetY + pt.y * cellSize + cellSize / 2;
        createExplosion(ex, ey, e.color, 12);
        enemies.splice(i, 1);
        continue;
      }

      // Draw Enemy
      const pt = pathWay[e.pathIndex];
      const ex = offsetX + pt.x * cellSize + cellSize / 2;
      const ey = offsetY + pt.y * cellSize + cellSize / 2;

      ctx.fillStyle = e.color;
      ctx.beginPath();
      ctx.arc(ex, ey, e.size, 0, Math.PI * 2);
      ctx.fill();

      // Health bar
      const barW = cellSize * 0.7;
      const barH = 3;
      const hpRatio = Math.max(0, e.hp / e.maxHp);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(ex - barW / 2, ey - e.size - 6, barW, barH);
      ctx.fillStyle = e.color;
      ctx.fillRect(ex - barW / 2, ey - e.size - 6, barW * hpRatio, barH);
    }

    // Check Wave Completion
    if (waveInProgress && spawnQueue.length === 0 && enemies.length === 0) {
      waveInProgress = false;
      if (currentWave < totalWaves) {
        currentWave++;
        waveVal.textContent = currentWave + ' / ' + totalWaves;
        startWaveBtn.style.display = 'inline-block';
      } else {
        // Sector Cleared!
        isPlaying = false;
        if (window.soundEngine) window.soundEngine.playWin();
        nextBtn.style.display = 'inline-block';
        overlayTitle.textContent = 'SUBNET SECURED!';
        overlayDesc.textContent = 'You have neutralized all malware waves in Sector ' + currentLevel + ' (' + theme.name + '). Ready for the next network deployment.';
        startBtn.textContent = 'ADVANCE TO SECTOR ' + ((currentLevel % THEMES.length) + 1);
        overlay.style.display = 'flex';
      }
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

  // Input Handling
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const gx = Math.floor((mx - offsetX) / cellSize);
    const gy = Math.floor((my - offsetY) / cellSize);
    if (gx >= 0 && gx < cols && gy >= 0 && gy < rows) {
      buildTower(gx, gy);
    }
  });

  towerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      towerBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTowerType = btn.dataset.type;
    });
  });

  startWaveBtn.addEventListener('click', startWave);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (currentWave >= totalWaves && enemies.length === 0) {
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
    overlayTitle.textContent = 'SUBNET SECTOR SELECTION (1-45)';
    overlayDesc.textContent = 'Select any network node infrastructure to defend:';
    startBtn.textContent = 'RESUME DEFENSE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();