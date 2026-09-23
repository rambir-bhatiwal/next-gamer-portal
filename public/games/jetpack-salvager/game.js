(() => {
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
  { id: 44, name: "Tesseract Hyperspace", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 45, name: "Quantum Singularity Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const fuelVal = document.getElementById('fuelVal');
  const shieldVal = document.getElementById('shieldVal');
  const salvageVal = document.getElementById('salvageVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const thrustLeftBtn = document.getElementById('thrustLeftBtn');
  const thrustUpBtn = document.getElementById('thrustUpBtn');
  const thrustRightBtn = document.getElementById('thrustRightBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  // Player state
  const player = {
    x: 80,
    y: 400,
    vx: 0,
    vy: 0,
    radius: 14,
    fuel: 100,
    maxFuel: 100,
    shields: 3,
    invulnTimer: 0,
    salvageCores: 0,
    neededCores: 4,
    thrustingUp: false,
    thrustingLeft: false,
    thrustingRight: false
  };

  const GRAVITY = 0.12;
  const THRUST_POWER = 0.28;
  const LATERAL_THRUST = 0.22;
  const DRAG = 0.985;

  let walls = [];
  let landingPads = [];
  let salvageItems = [];
  let hazards = [];
  let exitAirlock = { x: 900, y: 100, radius: 24, active: false };
  let particles = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => {
        loadLevel(i);
        overlay.style.display = 'none';
        startGame();
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    player.x = 80;
    player.y = 420;
    player.vx = 0;
    player.vy = 0;
    player.fuel = 100;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace timer on spawn
    player.salvageCores = 0;
    player.neededCores = 3 + (lvl % 3);

    // Build cavern walls & platforms
    walls = [
      { x: 0, y: 0, w: 1200, h: 25 },
      { x: 0, y: 550, w: 1200, h: 50 },
      { x: 0, y: 0, w: 25, h: 600 },
      { x: 1175, y: 0, w: 25, h: 600 }
    ];

    // Procedural inner corridors based on level
    const seed = lvl * 17;
    for (let i = 1; i <= 5; i++) {
      const wx = 180 * i;
      const wy = (i % 2 === 1) ? 25 : 260 + (seed % 120);
      const wh = 250;
      walls.push({ x: wx, y: wy, w: 30, h: wh });
    }

    // Landing pads (safe refuel zones)
    landingPads = [
      { x: 60, y: 440, w: 80, h: 12 },
      { x: 520, y: 500, w: 90, h: 12 },
      { x: 860, y: 380, w: 80, h: 12 }
    ];

    // Salvage cores
    salvageItems = [];
    const coreSlots = [
      { x: 260, y: 120 },
      { x: 440, y: 480 },
      { x: 620, y: 160 },
      { x: 800, y: 480 },
      { x: 980, y: 160 }
    ];
    for (let i = 0; i < player.neededCores; i++) {
      const pos = coreSlots[i % coreSlots.length];
      salvageItems.push({ x: pos.x, y: pos.y + ((lvl * 23) % 80) - 40, collected: false, pulse: Math.random() * Math.PI });
    }

    // Hazards (hydraulic crushers or laser bars)
    hazards = [];
    for (let i = 1; i <= 3; i++) {
      hazards.push({
        x: 220 + i * 220,
        y: 80,
        w: 16,
        h: 60,
        speed: 1.5 + (lvl * 0.05),
        dir: 1,
        minY: 40,
        maxY: 260
      });
    }

    exitAirlock = {
      x: 1080,
      y: 120,
      radius: 28,
      active: false
    };

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    fuelVal.textContent = Math.max(0, Math.floor(player.fuel)) + '%';
    fuelVal.style.color = player.fuel > 25 ? '#00f0ff' : '#ff1744';
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    salvageVal.textContent = player.salvageCores + ' / ' + player.neededCores + ' CORES';
    if (player.salvageCores >= player.neededCores) {
      exitAirlock.active = true;
      salvageVal.textContent += ' [AIRLOCK OPEN]';
    }
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Key listeners
  const keys = {};
  window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'KeyW' || e.code === 'ArrowUp' || e.code === 'Space') {
      player.thrustingUp = true;
      window.soundFX.startThruster();
    }
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') player.thrustingLeft = true;
    if (e.code === 'KeyD' || e.code === 'ArrowRight') player.thrustingRight = true;
  });

  window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
    if (e.code === 'KeyW' || e.code === 'ArrowUp' || e.code === 'Space') {
      player.thrustingUp = false;
      window.soundFX.stopThruster();
    }
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') player.thrustingLeft = false;
    if (e.code === 'KeyD' || e.code === 'ArrowRight') player.thrustingRight = false;
  });

  // Touch & on-screen buttons
  thrustUpBtn.addEventListener('mousedown', () => { player.thrustingUp = true; window.soundFX.startThruster(); });
  thrustUpBtn.addEventListener('mouseup', () => { player.thrustingUp = false; window.soundFX.stopThruster(); });
  thrustUpBtn.addEventListener('touchstart', (e) => { e.preventDefault(); player.thrustingUp = true; window.soundFX.startThruster(); });
  thrustUpBtn.addEventListener('touchend', () => { player.thrustingUp = false; window.soundFX.stopThruster(); });

  thrustLeftBtn.addEventListener('mousedown', () => player.thrustingLeft = true);
  thrustLeftBtn.addEventListener('mouseup', () => player.thrustingLeft = false);
  thrustLeftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); player.thrustingLeft = true; });
  thrustLeftBtn.addEventListener('touchend', () => player.thrustingLeft = false);

  thrustRightBtn.addEventListener('mousedown', () => player.thrustingRight = true);
  thrustRightBtn.addEventListener('mouseup', () => player.thrustingRight = false);
  thrustRightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); player.thrustingRight = true; });
  thrustRightBtn.addEventListener('touchend', () => player.thrustingRight = false);

  startBtn.onclick = () => {
    overlay.style.display = 'none';
    loadLevel(currentLevel);
    startGame();
  };
  restartBtn.onclick = () => {
    loadLevel(currentLevel);
    startGame();
  };
  nextBtn.onclick = () => {
    loadLevel(currentLevel < 45 ? currentLevel + 1 : 1);
    startGame();
  };
  levelSelectBtn.onclick = () => {
    overlay.style.display = 'flex';
    isPlaying = false;
    window.soundFX.stopThruster();
  };

  function spawnParticles(x, y, color, count, speed = 3) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = Math.random() * speed;
      particles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.03 + Math.random() * 0.04,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Thrust mechanics
    if (player.thrustingUp && player.fuel > 0) {
      player.vy -= THRUST_POWER;
      player.fuel = Math.max(0, player.fuel - 0.14);
      spawnParticles(player.x, player.y + player.radius, activeTheme.primary, 2, 2);
    }
    if (player.thrustingLeft && player.fuel > 0) {
      player.vx -= LATERAL_THRUST;
      player.fuel = Math.max(0, player.fuel - 0.08);
      spawnParticles(player.x + player.radius, player.y, activeTheme.secondary, 1, 1.5);
    }
    if (player.thrustingRight && player.fuel > 0) {
      player.vx += LATERAL_THRUST;
      player.fuel = Math.max(0, player.fuel - 0.08);
      spawnParticles(player.x - player.radius, player.y, activeTheme.secondary, 1, 1.5);
    }

    // Apply gravity and drag
    player.vy += GRAVITY;
    player.vx *= DRAG;
    player.vy *= DRAG;

    player.x += player.vx;
    player.y += player.vy;

    // Check landing pads (refuel)
    let onPad = false;
    landingPads.forEach(pad => {
      if (player.x >= pad.x && player.x <= pad.x + pad.w &&
          player.y + player.radius >= pad.y && player.y + player.radius <= pad.y + pad.h + 8 &&
          player.vy >= 0 && Math.abs(player.vy) < 2) {
        player.y = pad.y - player.radius;
        player.vy = 0;
        player.vx *= 0.8;
        onPad = true;
        if (player.fuel < player.maxFuel) {
          player.fuel = Math.min(player.maxFuel, player.fuel + 0.5);
          if (Math.random() < 0.1) window.soundFX.playRefuel();
        }
      }
    });

    // Check Wall Collisions
    walls.forEach(w => {
      if (player.x + player.radius > w.x && player.x - player.radius < w.x + w.w &&
          player.y + player.radius > w.y && player.y - player.radius < w.y + w.h) {
        // Bounce back with slight damage if high speed
        const speed = Math.hypot(player.vx, player.vy);
        if (speed > 4.5 && player.invulnTimer <= 0) {
          player.shields--;
          player.invulnTimer = 60; // invulnerable grace period
          window.soundFX.playHit();
          spawnParticles(player.x, player.y, '#ff1744', 12, 4);
          if (player.shields <= 0) {
            isGameOver = true;
            overlayTitle.textContent = "HULL BREACHED";
            overlayDesc.textContent = "Your salvage explorer suffered fatal kinetic impact. Retry this sector!";
            overlay.style.display = 'flex';
          }
        }
        // Nudge out
        player.vx = -player.vx * 0.4;
        player.vy = -player.vy * 0.4;
        player.x += player.vx * 2;
        player.y += player.vy * 2;
      }
    });

    // Update hazards
    hazards.forEach(h => {
      h.y += h.speed * h.dir;
      if (h.y >= h.maxY || h.y <= h.minY) h.dir *= -1;

      // Hazard collision
      if (player.x + player.radius > h.x && player.x - player.radius < h.x + h.w &&
          player.y + player.radius > h.y && player.y - player.radius < h.y + h.h) {
        if (player.invulnTimer <= 0) {
          player.shields--;
          player.invulnTimer = 75; // invulnerable grace
          window.soundFX.playHit();
          spawnParticles(player.x, player.y, '#ff3d00', 15, 5);
          if (player.shields <= 0) {
            isGameOver = true;
            overlayTitle.textContent = "CRUSHED BY HAZARD";
            overlayDesc.textContent = "Hydraulic hazard crushed your ship hull. Keep clear of moving pistons!";
            overlay.style.display = 'flex';
          }
        }
      }
    });

    // Collect salvage
    salvageItems.forEach(item => {
      if (!item.collected) {
        item.pulse += 0.05;
        const dist = Math.hypot(player.x - item.x, player.y - item.y);
        if (dist < player.radius + 16) {
          item.collected = true;
          player.salvageCores++;
          window.soundFX.playPickup();
          spawnParticles(item.x, item.y, activeTheme.accent, 16, 4);
          updateHUD();
        }
      }
    });

    // Exit airlock check
    if (exitAirlock.active) {
      const exitDist = Math.hypot(player.x - exitAirlock.x, player.y - exitAirlock.y);
      if (exitDist < player.radius + exitAirlock.radius) {
        isVictory = true;
        window.soundFX.playClear();
        window.soundFX.stopThruster();
        overlayTitle.textContent = "SECTOR " + currentLevel + " SALVAGED!";
        overlayDesc.textContent = "All salvage cores secured and airlock docked successfully! Proceed to next sector.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }
    }

    // Update particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) particles.splice(i, 1);
    }

    updateHUD();
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Derelict grid background
    ctx.save();
    ctx.strokeStyle = activeTheme.primary + '18';
    ctx.lineWidth = 1;
    const gridStep = 40;
    for (let x = 0; x < canvas.width; x += gridStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridStep) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Scale cavern coordinates to fit screen
    const scaleX = canvas.width / 1200;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw walls
    ctx.fillStyle = '#0a0d18';
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 2;
    walls.forEach(w => {
      ctx.fillRect(w.x, w.y, w.w, w.h);
      ctx.strokeRect(w.x, w.y, w.w, w.h);
    });

    // Draw landing pads
    landingPads.forEach(pad => {
      ctx.fillStyle = '#1de9b6';
      ctx.fillRect(pad.x, pad.y, pad.w, pad.h);
      ctx.fillStyle = '#000';
      ctx.font = 'bold 8px monospace';
      ctx.fillText('REFUEL PAD', pad.x + 12, pad.y + 9);
    });

    // Draw hazards
    hazards.forEach(h => {
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(h.x, h.y, h.w, h.h);
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 2;
      ctx.strokeRect(h.x, h.y, h.w, h.h);
      // Warning stripes
      ctx.fillStyle = '#ffd600';
      ctx.fillRect(h.x + 3, h.y + 10, h.w - 6, 8);
    });

    // Draw salvage cores
    salvageItems.forEach(item => {
      if (!item.collected) {
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.pulse);
        ctx.fillStyle = activeTheme.accent;
        ctx.shadowColor = activeTheme.accent;
        ctx.shadowBlur = 12;
        ctx.fillRect(-10, -10, 20, 20);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeRect(-6, -6, 12, 12);
        ctx.restore();
      }
    });

    // Draw Exit Airlock
    ctx.save();
    ctx.translate(exitAirlock.x, exitAirlock.y);
    ctx.beginPath();
    ctx.arc(0, 0, exitAirlock.radius, 0, Math.PI * 2);
    ctx.fillStyle = exitAirlock.active ? '#39ff14' : '#555';
    ctx.shadowColor = exitAirlock.active ? '#39ff14' : '#000';
    ctx.shadowBlur = exitAirlock.active ? 20 : 0;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(exitAirlock.active ? 'DOCK' : 'LOCKED', 0, 4);
    ctx.restore();

    // Draw Particles
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw Player
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    // Jetpack body
    ctx.fillStyle = '#cfd8dc';
    ctx.beginPath();
    ctx.arc(0, -2, player.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Visor
    ctx.fillStyle = '#00f0ff';
    ctx.beginPath();
    ctx.arc(3, -4, 6, 0, Math.PI * 2);
    ctx.fill();

    // Thruster nozzles
    ctx.fillStyle = '#37474f';
    ctx.fillRect(-12, 6, 6, 8);
    ctx.fillRect(6, 6, 6, 8);

    // Thruster flame animation
    if (player.thrustingUp && player.fuel > 0) {
      ctx.fillStyle = '#ff9100';
      ctx.beginPath();
      ctx.moveTo(-12, 14);
      ctx.lineTo(-9, 22 + Math.random() * 8);
      ctx.lineTo(-6, 14);
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(6, 14);
      ctx.lineTo(9, 22 + Math.random() * 8);
      ctx.lineTo(12, 14);
      ctx.fill();
    }

    // Shield aura
    if (player.shields > 1) {
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, player.radius + 6, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
    ctx.restore(); // scale
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  initLevelSelect();
  loadLevel(1);
  loop();
})();