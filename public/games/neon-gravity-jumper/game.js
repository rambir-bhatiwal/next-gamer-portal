/**
 * Neon Gravity Jumper: Dual-Floor Flip - 45 Thematic Levels
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
  const distVal = document.getElementById('distVal');
  const shieldVal = document.getElementById('shieldVal');
  const orbsVal = document.getElementById('orbsVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const flipBtn = document.getElementById('flipBtn');
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
  let distance = 0;
  const targetDistance = 1000;
  let shields = 3;
  let orbs = 0;
  let invulnerable = 0; // fair human-speed pacing

  const player = {
    x: 120,
    y: 0,
    w: 24,
    h: 30,
    vy: 0,
    gravityDir: 1 // 1 for down, -1 for up
  };

  let floorY = 0;
  let ceilY = 0;
  let obstacles = [];
  let energyOrbs = [];
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
    distance = 0;
    shields = 3;
    orbs = 0;
    invulnerable = 60;
    obstacles = [];
    energyOrbs = [];
    particles = [];
    spawnCooldown = 50;

    floorY = height * 0.82;
    ceilY = height * 0.18;
    player.y = floorY - player.h;
    player.vy = 0;
    player.gravityDir = 1;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    distVal.textContent = '0 / ' + targetDistance + 'm';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    orbsVal.textContent = '0 ORBS';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function invertGravity() {
    if (!isPlaying) return;
    player.gravityDir *= -1;
    player.vy = player.gravityDir * 4;
    if (window.soundEngine) window.soundEngine.playFlip();

    createExplosion(player.x + player.w / 2, player.y + player.h / 2, '#00f0ff', 8);
  }

  function createExplosion(x, y, color, count = 12) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 3.5 + 1;
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

  function spawnObstacle() {
    const isCeil = Math.random() < 0.5;
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const obY = isCeil ? ceilY : floorY - 32;

    obstacles.push({
      x: width + 20,
      y: obY,
      w: 22,
      h: 32,
      isCeil,
      color: theme.secondary
    });

    if (Math.random() < 0.6) {
      energyOrbs.push({
        x: width + 60,
        y: isCeil ? floorY - 35 : ceilY + 25,
        r: 8,
        color: theme.accent
      });
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    floorY = height * 0.82;
    ceilY = height * 0.18;

    // Draw Ceiling Track
    ctx.fillStyle = theme.primary + '33';
    ctx.fillRect(0, 0, width, ceilY);
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, ceilY);
    ctx.lineTo(width, ceilY);
    ctx.stroke();

    // Draw Floor Track
    ctx.fillStyle = theme.primary + '33';
    ctx.fillRect(0, floorY, width, height - floorY);
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, floorY);
    ctx.lineTo(width, floorY);
    ctx.stroke();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Update Distance Pacing (calibrated ~35s per level)
    distance += 0.55;
    distVal.textContent = Math.floor(distance) + ' / ' + targetDistance + 'm';

    if (distance >= targetDistance) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'COURSE CONQUERED!';
      overlayDesc.textContent = 'You conquered Course ' + currentLevel + ' (' + theme.name + ') with ' + orbs + ' energy orbs!';
      startBtn.textContent = 'ENTER NEXT COURSE';
      overlay.style.display = 'flex';
      return;
    }

    // Player Physics
    const gravityAccel = 0.52 * player.gravityDir;
    player.vy += gravityAccel;
    player.y += player.vy;

    // Floor Collision
    if (player.gravityDir === 1 && player.y + player.h >= floorY) {
      player.y = floorY - player.h;
      player.vy = 0;
    }
    // Ceiling Collision
    if (player.gravityDir === -1 && player.y <= ceilY) {
      player.y = ceilY;
      player.vy = 0;
    }

    // Spawning Hazards
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnObstacle();
      spawnCooldown = Math.max(38, 70 - currentLevel);
    }

    // Obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const ob = obstacles[i];
      ob.x -= 4.2 + Math.min(2.5, currentLevel * 0.05);

      // Draw Spike
      ctx.fillStyle = ob.color;
      ctx.beginPath();
      if (ob.isCeil) {
        ctx.moveTo(ob.x, ob.y);
        ctx.lineTo(ob.x + ob.w / 2, ob.y + ob.h);
        ctx.lineTo(ob.x + ob.w, ob.y);
      } else {
        ctx.moveTo(ob.x, ob.y + ob.h);
        ctx.lineTo(ob.x + ob.w / 2, ob.y);
        ctx.lineTo(ob.x + ob.w, ob.y + ob.h);
      }
      ctx.closePath();
      ctx.fill();

      // Check Collision with player
      if (
        player.x < ob.x + ob.w &&
        player.x + player.w > ob.x &&
        player.y < ob.y + ob.h &&
        player.y + player.h > ob.y
      ) {
        if (invulnerable <= 0) {
          shields--;
          invulnerable = 60; // 1s invulnerability blinking
          if (window.soundEngine) window.soundEngine.playHit();
          createExplosion(player.x, player.y, '#ff1744', 15);

          shieldVal.textContent = shields + ' SHIELDS';
          shieldVal.style.color = shields > 1 ? '#00ff88' : (shields === 1 ? '#ffaa00' : '#ff1744');

          if (shields <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'GRAVITY MATRIX DESTABILIZED';
            overlayDesc.textContent = 'Shields failed during Course ' + currentLevel + '. Recalibrate jump timing and retry.';
            startBtn.textContent = 'RETRY COURSE ' + currentLevel;
            overlay.style.display = 'flex';
          }
        }
      }

      if (ob.x < -50) obstacles.splice(i, 1);
    }

    // Energy Orbs
    for (let i = energyOrbs.length - 1; i >= 0; i--) {
      const orb = energyOrbs[i];
      orb.x -= 4.2;

      ctx.fillStyle = orb.color;
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
      ctx.fill();

      // Collection check
      if (Math.hypot((player.x + player.w / 2) - orb.x, (player.y + player.h / 2) - orb.y) < player.w / 2 + orb.r) {
        orbs++;
        orbsVal.textContent = orbs + ' ORBS';
        if (window.soundEngine) window.soundEngine.playOrb();
        createExplosion(orb.x, orb.y, orb.color, 8);
        energyOrbs.splice(i, 1);
        continue;
      }

      if (orb.x < -30) energyOrbs.splice(i, 1);
    }

    // Draw Player
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.primary;
      ctx.fillRect(player.x, player.y, player.w, player.h);

      // Player Visor
      ctx.fillStyle = '#ffffff';
      const visorY = player.gravityDir === 1 ? player.y + 6 : player.y + player.h - 10;
      ctx.fillRect(player.x + player.w - 8, visorY, 6, 4);
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
  window.addEventListener('keydown', e => {
    if (e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      invertGravity();
    }
  });

  canvas.addEventListener('click', invertGravity);
  flipBtn.addEventListener('click', invertGravity);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (distance >= targetDistance) {
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
    overlayTitle.textContent = 'GRAVITY COURSE SELECTOR (1-45)';
    overlayDesc.textContent = 'Select any course track to attempt:';
    startBtn.textContent = 'RESUME COURSE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();