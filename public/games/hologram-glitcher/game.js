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
  const layerVal = document.getElementById('layerVal');
  const shieldVal = document.getElementById('shieldVal');
  const shardsVal = document.getElementById('shardsVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const leftBtn = document.getElementById('leftBtn');
  const jumpBtn = document.getElementById('jumpBtn');
  const rightBtn = document.getElementById('rightBtn');
  const shiftBtn = document.getElementById('shiftBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  // 'alpha' (cyan) or 'beta' (amber/magenta)
  let activeReality = 'alpha';

  const player = {
    x: 60,
    y: 400,
    vx: 0,
    vy: 0,
    w: 24,
    h: 36,
    isGrounded: false,
    shields: 3,
    invulnTimer: 0,
    shards: 0,
    neededShards: 3
  };

  const GRAVITY = 0.48;
  const MOVE_SPEED = 4.2;
  const JUMP_FORCE = -11.2;

  let platforms = [];
  let shards = [];
  let hazards = [];
  let exitPortal = { x: 920, y: 140, radius: 26, active: false };
  let glitchParticles = [];

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

    activeReality = 'alpha';
    player.x = 60;
    player.y = 420;
    player.vx = 0;
    player.vy = 0;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace timer on spawn
    player.shards = 0;
    player.neededShards = 3 + (lvl % 3);

    // Build stage platforms (both universal, alpha-only, and beta-only)
    platforms = [
      // Base floors
      { x: 0, y: 500, w: 200, h: 40, layer: 'universal' },
      { x: 800, y: 500, w: 250, h: 40, layer: 'universal' },
      // Alpha platforms
      { x: 220, y: 440, w: 120, h: 20, layer: 'alpha' },
      { x: 480, y: 340, w: 120, h: 20, layer: 'alpha' },
      { x: 740, y: 240, w: 120, h: 20, layer: 'alpha' },
      // Beta platforms
      { x: 350, y: 390, w: 120, h: 20, layer: 'beta' },
      { x: 610, y: 290, w: 120, h: 20, layer: 'beta' },
      { x: 860, y: 190, w: 140, h: 20, layer: 'beta' }
    ];

    // Procedural platforms per level
    const seed = lvl * 29;
    for (let i = 1; i <= 4; i++) {
      const px = 180 + i * 160;
      const py = 200 + ((seed + i * 50) % 180);
      platforms.push({
        x: px,
        y: py,
        w: 90,
        h: 18,
        layer: i % 2 === 0 ? 'alpha' : 'beta'
      });
    }

    // Shards scattered across realities
    shards = [];
    const shardSlots = [
      { x: 280, y: 400, layer: 'alpha' },
      { x: 410, y: 350, layer: 'beta' },
      { x: 540, y: 300, layer: 'alpha' },
      { x: 670, y: 250, layer: 'beta' },
      { x: 800, y: 200, layer: 'alpha' }
    ];
    for (let i = 0; i < player.neededShards; i++) {
      const slot = shardSlots[i % shardSlots.length];
      shards.push({
        x: slot.x,
        y: slot.y,
        layer: slot.layer,
        collected: false
      });
    }

    // Hazards
    hazards = [
      { x: 200, y: 520, w: 600, h: 20, layer: 'universal' } // pit of lasers
    ];

    exitPortal = {
      x: 930,
      y: 150,
      radius: 28,
      active: false
    };

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    layerVal.textContent = activeReality === 'alpha' ? 'LAYER ALPHA' : 'LAYER BETA';
    layerVal.style.color = activeReality === 'alpha' ? '#00f0ff' : '#ff007f';
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    shardsVal.textContent = player.shards + ' / ' + player.neededShards + ' SHARDS';
    if (player.shards >= player.neededShards) {
      exitPortal.active = true;
      shardsVal.textContent += ' [PORTAL OPEN]';
    }
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  function toggleReality() {
    if (!isPlaying || isGameOver || isVictory) return;
    activeReality = activeReality === 'alpha' ? 'beta' : 'alpha';
    window.soundFX.playShift();
    spawnGlitchBurst(player.x + player.w / 2, player.y + player.h / 2, activeReality === 'alpha' ? '#00f0ff' : '#ff007f');
    updateHUD();
  }

  function doJump() {
    if (!isPlaying || isGameOver || isVictory) return;
    if (player.isGrounded) {
      player.vy = JUMP_FORCE;
      player.isGrounded = false;
      window.soundFX.playJump();
    }
  }

  function spawnGlitchBurst(x, y, color) {
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 4;
      glitchParticles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.04 + Math.random() * 0.04,
        color
      });
    }
  }

  // Key listeners
  const keys = {};
  window.addEventListener('keydown', (e) => {
    keys[e.code] = true;
    if (e.code === 'Space' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      e.preventDefault();
      toggleReality();
    }
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      e.preventDefault();
      doJump();
    }
  });

  window.addEventListener('keyup', (e) => {
    keys[e.code] = false;
  });

  // Touch controls
  shiftBtn.onclick = () => toggleReality();
  jumpBtn.onclick = () => doJump();
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

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Lateral movement
    player.vx = 0;
    if (keys['KeyA'] || keys['ArrowLeft']) player.vx = -MOVE_SPEED;
    if (keys['KeyD'] || keys['ArrowRight']) player.vx = MOVE_SPEED;

    player.x += player.vx;

    // Apply gravity
    player.vy += GRAVITY;
    player.y += player.vy;

    // Platform collisions (only solid if universal or matching activeReality)
    player.isGrounded = false;
    platforms.forEach(p => {
      const isSolid = (p.layer === 'universal' || p.layer === activeReality);
      if (isSolid) {
        if (player.x + player.w > p.x && player.x < p.x + p.w) {
          if (player.y + player.h >= p.y && player.y + player.h <= p.y + p.h + player.vy + 4 && player.vy >= 0) {
            player.y = p.y - player.h;
            player.vy = 0;
            player.isGrounded = true;
          }
        }
      }
    });

    // Check Pit / Hazards
    hazards.forEach(h => {
      const isActiveHazard = (h.layer === 'universal' || h.layer === activeReality);
      if (isActiveHazard) {
        if (player.x + player.w > h.x && player.x < h.x + h.w &&
            player.y + player.h > h.y && player.y < h.y + h.h) {
          if (player.invulnTimer <= 0) {
            player.shields--;
            player.invulnTimer = 75; // invulnerable grace period
            window.soundFX.playHit();
            spawnGlitchBurst(player.x, player.y, '#ff1744');
            if (player.shields <= 0) {
              isGameOver = true;
              overlayTitle.textContent = "REALITY ANCHOR COLLAPSE";
              overlayDesc.textContent = "Quantum destabilization in spatial rift. Shift realities to cross over hazards!";
              overlay.style.display = 'flex';
            } else {
              // Reset to stage spawn
              player.x = 60;
              player.y = 420;
              player.vx = 0;
              player.vy = 0;
            }
          }
        }
      }
    });

    // Fall below screen reset buffer
    if (player.y > 580) {
      if (player.invulnTimer <= 0) {
        player.shields--;
        player.invulnTimer = 80;
        window.soundFX.playHit();
        if (player.shields <= 0) {
          isGameOver = true;
          overlayTitle.textContent = "LOST TO THE VOID";
          overlayDesc.textContent = "You fell out of sync with all holographic realities. Retry stage!";
          overlay.style.display = 'flex';
        } else {
          player.x = 60;
          player.y = 420;
          player.vy = 0;
        }
      }
    }

    // Collect Shards
    shards.forEach(s => {
      if (!s.collected && (s.layer === 'universal' || s.layer === activeReality)) {
        const sx = s.x;
        const sy = s.y;
        const dist = Math.hypot((player.x + player.w / 2) - sx, (player.y + player.h / 2) - sy);
        if (dist < 24) {
          s.collected = true;
          player.shards++;
          window.soundFX.playShard();
          spawnGlitchBurst(sx, sy, activeReality === 'alpha' ? '#00f0ff' : '#ff007f');
          updateHUD();
        }
      }
    });

    // Exit portal
    if (exitPortal.active) {
      const portalDist = Math.hypot((player.x + player.w / 2) - exitPortal.x, (player.y + player.h / 2) - exitPortal.y);
      if (portalDist < exitPortal.radius + 15) {
        isVictory = true;
        window.soundFX.playClear();
        overlayTitle.textContent = "REALITY " + currentLevel + " STABILIZED!";
        overlayDesc.textContent = "All quantum shards collected and dimensional rift opened successfully! Advance to next reality.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }
    }

    // Update glitch particles
    for (let i = glitchParticles.length - 1; i >= 0; i--) {
      const p = glitchParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) glitchParticles.splice(i, 1);
    }
  }

  function render() {
    // Shifting reality background
    ctx.fillStyle = activeReality === 'alpha' ? activeTheme.bg : '#120214';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scanline & reality overlay grid
    ctx.save();
    ctx.strokeStyle = (activeReality === 'alpha' ? '#00f0ff' : '#ff007f') + '15';
    ctx.lineWidth = 1;
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Scale coordinates
    const scaleX = canvas.width / 1050;
    const scaleY = canvas.height / 560;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Platforms
    platforms.forEach(p => {
      const isCurrent = (p.layer === 'universal' || p.layer === activeReality);
      ctx.save();
      if (!isCurrent) {
        // Ethereal dashed ghost outline
        ctx.globalAlpha = 0.25;
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = p.layer === 'alpha' ? '#00f0ff' : '#ff007f';
        ctx.lineWidth = 2;
        ctx.strokeRect(p.x, p.y, p.w, p.h);
      } else {
        // Solid luminous platform
        ctx.fillStyle = p.layer === 'universal' ? '#1a2238' : (p.layer === 'alpha' ? '#041e2e' : '#2e0420');
        ctx.fillRect(p.x, p.y, p.w, p.h);
        ctx.strokeStyle = p.layer === 'universal' ? '#fff' : (p.layer === 'alpha' ? '#00f0ff' : '#ff007f');
        ctx.lineWidth = 2;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 8;
        ctx.strokeRect(p.x, p.y, p.w, p.h);
      }
      ctx.restore();
    });

    // Draw Hazards
    hazards.forEach(h => {
      ctx.save();
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(h.x, h.y, h.w, h.h);
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 2;
      ctx.strokeRect(h.x, h.y, h.w, h.h);
      ctx.restore();
    });

    // Draw Quantum Shards
    shards.forEach(s => {
      if (!s.collected) {
        ctx.save();
        const isCurrent = (s.layer === 'universal' || s.layer === activeReality);
        ctx.globalAlpha = isCurrent ? 1 : 0.25;
        ctx.translate(s.x, s.y);
        ctx.rotate(Date.now() * 0.002);
        ctx.fillStyle = s.layer === 'alpha' ? '#00f0ff' : '#ff007f';
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = isCurrent ? 12 : 0;
        ctx.fillRect(-8, -8, 16, 16);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.strokeRect(-5, -5, 10, 10);
        ctx.restore();
      }
    });

    // Draw Exit Portal
    ctx.save();
    ctx.translate(exitPortal.x, exitPortal.y);
    ctx.beginPath();
    ctx.arc(0, 0, exitPortal.radius, 0, Math.PI * 2);
    ctx.fillStyle = exitPortal.active ? '#39ff14' : '#444';
    ctx.shadowColor = exitPortal.active ? '#39ff14' : '#000';
    ctx.shadowBlur = exitPortal.active ? 25 : 0;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 9px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(exitPortal.active ? 'RIFT OPEN' : 'SEALED', 0, 3);
    ctx.restore();

    // Draw Glitch Particles
    glitchParticles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
      ctx.restore();
    });

    // Draw Player
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    ctx.fillStyle = activeReality === 'alpha' ? '#00f0ff' : '#ff007f';
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 12;
    ctx.fillRect(0, 0, player.w, player.h);

    // Holographic visor
    ctx.fillStyle = '#fff';
    ctx.fillRect(player.w - 8, 4, 6, 6);

    // Reality aura
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