/**
 * Cyber Ninja Climb: Shadow Shuriken Dash - 45 Thematic Levels
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
  const altVal = document.getElementById('altVal');
  const shieldVal = document.getElementById('shieldVal');
  const killsVal = document.getElementById('killsVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const shurikenBtn = document.getElementById('shurikenBtn');
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
  let altitude = 0;
  const targetAltitude = 800;
  let shields = 3;
  let kills = 0;
  let invulnerable = 0;

  let leftWallX = 0;
  let rightWallX = 0;

  const ninja = {
    x: 0,
    y: 0,
    w: 22,
    h: 30,
    vx: 0,
    vy: 0,
    onWall: false,
    wallSide: 0 // -1 left, 1 right
  };

  let shurikens = [];
  let drones = [];
  let particles = [];
  let spawnCooldown = 0;

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
    altitude = 0;
    shields = 3;
    kills = 0;
    invulnerable = 60;
    shurikens = [];
    drones = [];
    particles = [];
    spawnCooldown = 40;

    leftWallX = Math.max(40, width * 0.2);
    rightWallX = Math.min(width - 40, width * 0.8);

    ninja.x = leftWallX;
    ninja.y = height * 0.7;
    ninja.vx = 0;
    ninja.vy = 0;
    ninja.onWall = true;
    ninja.wallSide = -1;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    altVal.textContent = '0 / ' + targetAltitude + 'm';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    killsVal.textContent = '0 KILLS';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function throwShuriken() {
    if (!isPlaying) return;
    const dir = ninja.wallSide === -1 ? 1 : (ninja.wallSide === 1 ? -1 : (ninja.vx >= 0 ? 1 : -1));
    shurikens.push({
      x: ninja.x + ninja.w / 2,
      y: ninja.y + ninja.h / 2,
      vx: dir * 9,
      vy: -1.5,
      r: 6
    });
    if (window.soundEngine) window.soundEngine.playShuriken();
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

  function spawnDrone() {
    const x = leftWallX + 30 + Math.random() * (rightWallX - leftWallX - 60);
    drones.push({
      x,
      y: -30,
      vy: 1.8 + Math.min(2.0, currentLevel * 0.04),
      vx: (Math.random() - 0.5) * 1.5,
      hp: 1,
      r: 14,
      color: '#ff1744'
    });
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    leftWallX = Math.max(40, width * 0.2);
    rightWallX = Math.min(width - 40, width * 0.8);

    // Draw Spire Walls
    ctx.fillStyle = '#10141d';
    ctx.fillRect(0, 0, leftWallX, height);
    ctx.fillRect(rightWallX, 0, width - rightWallX, height);

    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(leftWallX, 0);
    ctx.lineTo(leftWallX, height);
    ctx.moveTo(rightWallX, 0);
    ctx.lineTo(rightWallX, height);
    ctx.stroke();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Spire climb progress
    altitude += 0.5;
    altVal.textContent = Math.floor(altitude) + ' / ' + targetAltitude + 'm';

    if (altitude >= targetAltitude) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'SPIRE CONQUERED!';
      overlayDesc.textContent = 'You scaled the summit of Spire ' + currentLevel + ' (' + theme.name + ') with ' + kills + ' drone purges!';
      startBtn.textContent = 'ENTER NEXT SPIRE';
      overlay.style.display = 'flex';
      return;
    }

    // Input Movement
    if (keys['ArrowLeft'] || keys['KeyA']) {
      ninja.vx -= 0.6;
    }
    if (keys['ArrowRight'] || keys['KeyD']) {
      ninja.vx += 0.6;
    }

    // Gravity
    ninja.vy += 0.42;

    // Apply Wall Slide friction
    if (ninja.onWall) {
      if (ninja.vy > 1.8) ninja.vy = 1.8;
    }

    ninja.x += ninja.vx;
    ninja.y += ninja.vy;
    ninja.vx *= 0.9;

    // Wall Collisions
    if (ninja.x <= leftWallX) {
      ninja.x = leftWallX;
      ninja.vx = 0;
      ninja.onWall = true;
      ninja.wallSide = -1;
    } else if (ninja.x + ninja.w >= rightWallX) {
      ninja.x = rightWallX - ninja.w;
      ninja.vx = 0;
      ninja.onWall = true;
      ninja.wallSide = 1;
    } else {
      ninja.onWall = false;
      ninja.wallSide = 0;
    }

    // Keep on screen vertical
    if (ninja.y > height - 40) {
      ninja.y = height - 40;
      ninja.vy = -10;
    }
    if (ninja.y < 40) ninja.y = 40;

    // Spawning Drones
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnDrone();
      spawnCooldown = Math.max(35, 75 - currentLevel);
    }

    // Update Shurikens
    for (let i = shurikens.length - 1; i >= 0; i--) {
      const s = shurikens[i];
      s.x += s.vx;
      s.y += s.vy;

      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();

      // Check collision with drones
      drones.forEach(d => {
        if (Math.hypot(d.x - s.x, d.y - s.y) < d.r + s.r) {
          d.hp = 0;
          kills++;
          killsVal.textContent = kills + ' KILLS';
          createExplosion(d.x, d.y, '#ff1744', 12);
        }
      });

      if (s.x < leftWallX || s.x > rightWallX || s.y < 0) {
        shurikens.splice(i, 1);
      }
    }

    // Update Drones
    for (let i = drones.length - 1; i >= 0; i--) {
      const d = drones[i];
      d.y += d.vy;
      d.x += d.vx;
      if (d.x < leftWallX + 20 || d.x > rightWallX - 20) d.vx *= -1;

      ctx.fillStyle = d.color;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();

      // Collision with ninja
      if (Math.hypot((ninja.x + ninja.w / 2) - d.x, (ninja.y + ninja.h / 2) - d.y) < ninja.w / 2 + d.r) {
        if (invulnerable <= 0) {
          shields--;
          invulnerable = 60;
          if (window.soundEngine) window.soundEngine.playHit();
          createExplosion(ninja.x, ninja.y, '#ff1744', 15);

          shieldVal.textContent = shields + ' SHIELDS';
          shieldVal.style.color = shields > 1 ? '#00ff88' : (shields === 1 ? '#ffaa00' : '#ff1744');

          if (shields <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'SHINOBI FALLEN';
            overlayDesc.textContent = 'Security drones brought down the ninja in Spire ' + currentLevel + '. Regroup and retry.';
            startBtn.textContent = 'RETRY SPIRE ' + currentLevel;
            overlay.style.display = 'flex';
          }
        }
      }

      if (d.hp <= 0 || d.y > height + 30) drones.splice(i, 1);
    }

    // Draw Ninja
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.accent;
      ctx.fillRect(ninja.x, ninja.y, ninja.w, ninja.h);

      // Scarf trailing
      ctx.fillStyle = '#ff1744';
      const scarfX = ninja.wallSide === -1 ? ninja.x - 8 : (ninja.wallSide === 1 ? ninja.x + ninja.w + 2 : ninja.x);
      ctx.fillRect(scarfX, ninja.y + 4, 6, 12);
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
      if (ninja.onWall) {
        ninja.vy = -9.5;
        ninja.vx = ninja.wallSide === -1 ? 7.5 : -7.5;
        if (window.soundEngine) window.soundEngine.playJump();
        createExplosion(ninja.x + ninja.w / 2, ninja.y + ninja.h, '#00f0ff', 6);
      }
    } else if (e.code === 'KeyZ') {
      throwShuriken();
    }
  });

  window.addEventListener('keyup', e => {
    keys[e.code] = false;
  });

  canvas.addEventListener('click', throwShuriken);
  shurikenBtn.addEventListener('click', throwShuriken);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (altitude >= targetAltitude) {
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
    overlayTitle.textContent = 'SPIRE MAP REGISTER (1-45)';
    overlayDesc.textContent = 'Select target vertical climbing spire:';
    startBtn.textContent = 'RESUME ASCENT';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();