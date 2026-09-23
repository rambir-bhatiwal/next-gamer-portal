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
  const alertVal = document.getElementById('alertVal');
  const shieldVal = document.getElementById('shieldVal');
  const termVal = document.getElementById('termVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const leftBtn = document.getElementById('leftBtn');
  const crouchBtn = document.getElementById('crouchBtn');
  const jumpBtn = document.getElementById('jumpBtn');
  const rightBtn = document.getElementById('rightBtn');
  const hackBtn = document.getElementById('hackBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  const player = {
    x: 60,
    y: 420,
    vx: 0,
    vy: 0,
    w: 22,
    h: 36,
    isCrouching: false,
    isGrounded: false,
    shields: 3,
    invulnTimer: 0,
    hackedTerminals: 0,
    neededTerminals: 2,
    alertTimer: 0
  };

  const GRAVITY = 0.48;
  const MOVE_SPEED = 3.6;
  const JUMP_FORCE = -10.8;

  let platforms = [];
  let crates = []; // crouching behind crates hides from cameras
  let cameras = []; // sweeping vision cones
  let drones = []; // patrol drones
  let terminals = []; // hack to disable exit lock
  let exitHatch = { x: 960, y: 140, radius: 26, unlocked: false };
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

    player.x = 60;
    player.y = 420;
    player.vx = 0;
    player.vy = 0;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace timer on spawn
    player.hackedTerminals = 0;
    player.neededTerminals = 2 + (lvl % 2);
    player.alertTimer = 0;

    // Build facility architecture
    platforms = [
      { x: 0, y: 480, w: 1100, h: 40 }, // ground floor
      { x: 200, y: 360, w: 220, h: 20 },
      { x: 480, y: 260, w: 220, h: 20 },
      { x: 760, y: 180, w: 260, h: 20 }
    ];

    // Crates for stealth cover
    crates = [
      { x: 260, y: 440, w: 35, h: 40 },
      { x: 540, y: 440, w: 40, h: 40 },
      { x: 320, y: 320, w: 30, h: 40 },
      { x: 600, y: 220, w: 35, h: 40 }
    ];

    // Security Cameras (sweeping angle)
    cameras = [
      { x: 300, y: 40, angle: 0, minAngle: -0.5, maxAngle: 0.5, dir: 1, speed: 0.01 + (lvl * 0.001) },
      { x: 600, y: 40, angle: 0, minAngle: -0.6, maxAngle: 0.6, dir: -1, speed: 0.012 + (lvl * 0.001) },
      { x: 900, y: 40, angle: 0, minAngle: -0.5, maxAngle: 0.5, dir: 1, speed: 0.015 }
    ];

    // Patrol Drones
    drones = [];
    for (let i = 1; i <= Math.min(3, 1 + Math.floor(lvl / 15)); i++) {
      drones.push({
        x: 350 + i * 200,
        y: 430 - i * 80,
        minX: 250 + i * 180,
        maxX: 500 + i * 180,
        speed: 1.8 + (lvl * 0.03),
        dir: 1
      });
    }

    // Terminals
    terminals = [
      { x: 380, y: 330, w: 22, h: 30, hacked: false },
      { x: 660, y: 230, w: 22, h: 30, hacked: false }
    ];
    if (player.neededTerminals > 2) {
      terminals.push({ x: 860, y: 150, w: 22, h: 30, hacked: false });
    }

    exitHatch = {
      x: 980,
      y: 140,
      radius: 26,
      unlocked: false
    };

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    if (player.alertTimer > 0) {
      alertVal.textContent = 'ALARM! DETECTED';
      alertVal.style.color = '#ff1744';
    } else {
      alertVal.textContent = player.isCrouching ? 'HIDDEN IN SHADOW' : 'STEALTH ACTIVE';
      alertVal.style.color = player.isCrouching ? '#ffd600' : '#00ff88';
    }
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    termVal.textContent = player.hackedTerminals + ' / ' + player.neededTerminals + ' HACKED';
    if (player.hackedTerminals >= player.neededTerminals) {
      exitHatch.unlocked = true;
      termVal.textContent += ' [EXIT OPEN]';
    }
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  function doHack() {
    if (!isPlaying || isGameOver || isVictory) return;
    terminals.forEach(t => {
      if (!t.hacked) {
        const dist = Math.hypot((player.x + player.w / 2) - (t.x + t.w / 2), (player.y + player.h / 2) - (t.y + t.h / 2));
        if (dist < 40) {
          t.hacked = true;
          player.hackedTerminals++;
          window.soundFX.playHack();
          spawnParticles(t.x + t.w / 2, t.y, '#39ff14', 16);
          updateHUD();
        }
      }
    });
  }

  function doJump() {
    if (!isPlaying || isGameOver || isVictory) return;
    if (player.isGrounded && !player.isCrouching) {
      player.vy = JUMP_FORCE;
      player.isGrounded = false;
    }
  }

  function spawnParticles(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 1 + Math.random() * 3;
      particles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.04,
        color
      });
    }
  }

  // Key listeners
  const keys = {};
  window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'KeyE' || e.code === 'Space') {
      e.preventDefault();
      doHack();
    }
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      e.preventDefault();
      doJump();
    }
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      player.isCrouching = true;
      player.h = 22;
    }
  });

  window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      player.isCrouching = false;
      player.h = 36;
    }
  });

  hackBtn.onclick = () => doHack();
  jumpBtn.onclick = () => doJump();
  crouchBtn.addEventListener('mousedown', () => { player.isCrouching = true; player.h = 22; });
  crouchBtn.addEventListener('mouseup', () => { player.isCrouching = false; player.h = 36; });
  crouchBtn.addEventListener('touchstart', (e) => { e.preventDefault(); player.isCrouching = true; player.h = 22; });
  crouchBtn.addEventListener('touchend', () => { player.isCrouching = false; player.h = 36; });

  leftBtn.addEventListener('mousedown', () => keys['KeyA'] = true);
  leftBtn.addEventListener('mouseup', () => keys['KeyA'] = false);
  leftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); keys['KeyA'] = true; });
  leftBtn.addEventListener('touchend', () => keys['KeyA'] = false);

  rightBtn.addEventListener('mousedown', () => keys['KeyD'] = true);
  rightBtn.addEventListener('mouseup', () => keys['KeyD'] = false);
  rightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); keys['KeyD'] = true; });
  rightBtn.addEventListener('touchend', () => keys['KeyD'] = false);

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
  };

  function isBehindCrate() {
    if (!player.isCrouching) return false;
    return crates.some(c => {
      return player.x + player.w >= c.x && player.x <= c.x + c.w &&
             player.y + player.h >= c.y;
    });
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;
    if (player.alertTimer > 0) player.alertTimer--;

    // Lateral movement
    player.vx = 0;
    const speed = player.isCrouching ? MOVE_SPEED * 0.55 : MOVE_SPEED;
    if (keys['KeyA'] || keys['ArrowLeft']) player.vx = -speed;
    if (keys['KeyD'] || keys['ArrowRight']) player.vx = speed;

    player.x += player.vx;

    // Apply gravity
    player.vy += GRAVITY;
    player.y += player.vy;

    // Platform collisions
    player.isGrounded = false;
    platforms.forEach(p => {
      if (player.x + player.w > p.x && player.x < p.x + p.w) {
        if (player.y + player.h >= p.y && player.y + player.h <= p.y + p.h + player.vy + 4 && player.vy >= 0) {
          player.y = p.y - player.h;
          player.vy = 0;
          player.isGrounded = true;
        }
      }
    });

    // Camera sweeping
    cameras.forEach(cam => {
      cam.angle += cam.speed * cam.dir;
      if (cam.angle >= cam.maxAngle || cam.angle <= cam.minAngle) cam.dir *= -1;

      // Detection cone check
      if (!isBehindCrate()) {
        const dx = (player.x + player.w / 2) - cam.x;
        const dy = (player.y + player.h / 2) - cam.y;
        const angleToPlayer = Math.atan2(dx, dy); // angle from vertical downward
        const diff = Math.abs(angleToPlayer - cam.angle);
        const dist = Math.hypot(dx, dy);

        if (diff < 0.28 && dist < 450) {
          if (player.alertTimer === 0) window.soundFX.playAlarm();
          player.alertTimer = 60;
        }
      }
    });

    // Patrol Drones
    drones.forEach(d => {
      d.x += d.speed * d.dir;
      if (d.x >= d.maxX || d.x <= d.minX) d.dir *= -1;

      // Drone collision
      const dist = Math.hypot((player.x + player.w / 2) - d.x, (player.y + player.h / 2) - d.y);
      if (dist < 28) {
        if (player.invulnTimer <= 0) {
          player.shields--;
          player.invulnTimer = 75; // invulnerable grace
          window.soundFX.playHit();
          spawnParticles(player.x, player.y, '#ff1744', 14);
          if (player.shields <= 0) {
            isGameOver = true;
            overlayTitle.textContent = "UNIT 9 NEUTRALIZED";
            overlayDesc.textContent = "Security drones terminated rogue escape attempt. Utilize shadows and retry!";
            overlay.style.display = 'flex';
          }
        }
      }
    });

    // Exit hatch
    if (exitHatch.unlocked) {
      const exitDist = Math.hypot((player.x + player.w / 2) - exitHatch.x, (player.y + player.h / 2) - exitHatch.y);
      if (exitDist < exitHatch.radius + 15) {
        isVictory = true;
        window.soundFX.playClear();
        overlayTitle.textContent = "SECTOR " + currentLevel + " INFILTRATED!";
        overlayDesc.textContent = "Security lockdown bypassed and exit ventilation reached! Advance to next sector.";
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

    // Factory pipes & girder background
    ctx.save();
    ctx.strokeStyle = activeTheme.primary + '18';
    ctx.lineWidth = 2;
    for (let x = 60; x < canvas.width; x += 120) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    ctx.restore();

    // Scale coordinates
    const scaleX = canvas.width / 1100;
    const scaleY = canvas.height / 560;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Camera Vision Cones
    cameras.forEach(cam => {
      ctx.save();
      ctx.translate(cam.x, cam.y);
      ctx.rotate(cam.angle);

      // Light cone
      ctx.fillStyle = (player.alertTimer > 0) ? 'rgba(255, 23, 68, 0.25)' : 'rgba(255, 214, 0, 0.15)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-90, 420);
      ctx.lineTo(90, 420);
      ctx.closePath();
      ctx.fill();

      // Camera body
      ctx.fillStyle = '#455a64';
      ctx.fillRect(-10, -6, 20, 12);
      ctx.fillStyle = (player.alertTimer > 0) ? '#ff1744' : '#00e676';
      ctx.beginPath();
      ctx.arc(0, 4, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // Draw Platforms
    platforms.forEach(p => {
      ctx.fillStyle = '#101626';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = activeTheme.primary;
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
    });

    // Draw Crates
    crates.forEach(c => {
      ctx.fillStyle = '#37474f';
      ctx.fillRect(c.x, c.y, c.w, c.h);
      ctx.strokeStyle = '#78909c';
      ctx.lineWidth = 2;
      ctx.strokeRect(c.x, c.y, c.w, c.h);
      // X pattern on crate
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(c.x + c.w, c.y + c.h);
      ctx.moveTo(c.x + c.w, c.y);
      ctx.lineTo(c.x, c.y + c.h);
      ctx.stroke();
    });

    // Draw Terminals
    terminals.forEach(t => {
      ctx.fillStyle = t.hacked ? '#1b5e20' : '#b71c1c';
      ctx.fillRect(t.x, t.y, t.w, t.h);
      ctx.strokeStyle = t.hacked ? '#39ff14' : '#ff1744';
      ctx.lineWidth = 2;
      ctx.strokeRect(t.x, t.y, t.w, t.h);
      // Screen glow
      ctx.fillStyle = t.hacked ? '#69f0ae' : '#ff8a80';
      ctx.fillRect(t.x + 3, t.y + 4, t.w - 6, 12);
    });

    // Draw Patrol Drones
    drones.forEach(d => {
      ctx.save();
      ctx.translate(d.x, d.y);
      ctx.fillStyle = '#ff1744';
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Drone rotors
      ctx.strokeStyle = '#ff9100';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-22, -10);
      ctx.lineTo(22, -10);
      ctx.stroke();
      ctx.restore();
    });

    // Draw Exit Hatch
    ctx.save();
    ctx.translate(exitHatch.x, exitHatch.y);
    ctx.beginPath();
    ctx.arc(0, 0, exitHatch.radius, 0, Math.PI * 2);
    ctx.fillStyle = exitHatch.unlocked ? '#39ff14' : '#37474f';
    ctx.shadowColor = exitHatch.unlocked ? '#39ff14' : '#000';
    ctx.shadowBlur = exitHatch.unlocked ? 25 : 0;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(exitHatch.unlocked ? 'VENT OPEN' : 'LOCKED', 0, 3);
    ctx.restore();

    // Draw Particles
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 3, 3);
      ctx.restore();
    });

    // Draw Robot Player (Unit 9)
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    ctx.fillStyle = '#90a4ae';
    ctx.fillRect(0, 0, player.w, player.h);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, player.w, player.h);

    // Robot eye/visor
    ctx.fillStyle = isBehindCrate() ? '#ffd600' : (player.alertTimer > 0 ? '#ff1744' : '#00f0ff');
    ctx.fillRect(player.w - 8, 4, 6, 6);

    // Shield aura
    if (player.shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.strokeRect(-3, -3, player.w + 6, player.h + 6);
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