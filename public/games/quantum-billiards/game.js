(() => {
  const THEMES = [
  { id: 1, name: "CERN Particle Collider", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Tokamak Fusion Ring", bg: "#140402", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 3, name: "Quantum Graviton Well", bg: "#050114", primary: "#b388ff", secondary: "#7c4dff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 4, name: "Solar Core Chamber", bg: "#170a01", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 5, name: "Dark Matter Singularity", bg: "#020208", primary: "#7986cb", secondary: "#3f51b5", accent: "#ff4081", text: "#e8eaf6" },
  { id: 6, name: "Cryo-Superconductor Loop", bg: "#01121a", primary: "#80d8ff", secondary: "#00b0ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 7, name: "Antimatter Containment", bg: "#14010e", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 8, name: "Tachyon Accelerator Chute", bg: "#0d0217", primary: "#ea80fc", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 9, name: "Neutron Star Horizon", bg: "#0c0217", primary: "#e040fb", secondary: "#7c4dff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 10, name: "Magnetic Flux Matrix", bg: "#021609", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 11, name: "Helios Plasma Funnel", bg: "#170601", primary: "#ff6d00", secondary: "#ff9100", accent: "#ffd600", text: "#fff3e0" },
  { id: 12, name: "Laser Interferometer", bg: "#021217", primary: "#18ffff", secondary: "#00e5ff", accent: "#ff007f", text: "#e0f7fa" },
  { id: 13, name: "Higgs Boson Laboratory", bg: "#0b051c", primary: "#7c4dff", secondary: "#651fff", accent: "#ffd600", text: "#ede7f6" },
  { id: 14, name: "Radioactive Ion Trap", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 15, name: "Prismatic Waveform Basin", bg: "#011210", primary: "#1de9b6", secondary: "#00bfa5", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 16, name: "Relativistic Spacetime Grid", bg: "#081014", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 17, name: "Photon Resonance Vault", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 18, name: "Hadron Beam Siphon", bg: "#1c0206", primary: "#ff1744", secondary: "#f50057", accent: "#ff9100", text: "#ffebee" },
  { id: 19, name: "Zero-Point Energy Conduit", bg: "#03101c", primary: "#40c4ff", secondary: "#0091ea", accent: "#39ff14", text: "#e1f5fe" },
  { id: 20, name: "Stellar Wind Ionizer", bg: "#141103", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fffde7" },
  { id: 21, name: "Synchrotron Arc Ring", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 22, name: "Magnetic Mirror Trap", bg: "#011409", primary: "#00e676", secondary: "#1de9b6", accent: "#ff007f", text: "#e8f5e9" },
  { id: 23, name: "Pulsar Emission Cone", bg: "#070c0c", primary: "#64ffda", secondary: "#1de9b6", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 24, name: "Bose-Einstein Condensate", bg: "#01071c", primary: "#2979ff", secondary: "#2962ff", accent: "#00e5ff", text: "#e3f2fd" },
  { id: 25, name: "Quark-Gluon Plasma Vat", bg: "#1c0502", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffd600", text: "#fbe9e7" },
  { id: 26, name: "Casimir Cavity Chamber", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 27, name: "Superfluid Helium Basin", bg: "#02121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#69f0ae", text: "#e1f5fe" },
  { id: 28, name: "Titanium Shock Tunnel", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#ff1744", text: "#eceff1" },
  { id: 29, name: "Electrostatic Bell Jar", bg: "#0e031c", primary: "#d500f9", secondary: "#aa00ff", accent: "#ffd600", text: "#f3e5f5" },
  { id: 30, name: "Geothermal Kinetic Well", bg: "#170802", primary: "#ff6d00", secondary: "#ff3d00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 31, name: "Gravitational Lens Array", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ea80fc", text: "#e1f5fe" },
  { id: 32, name: "Ferrofluid Vortex Tank", bg: "#03140a", primary: "#00c853", secondary: "#64dd17", accent: "#00e5ff", text: "#e8f5e9" },
  { id: 33, name: "Wormhole Metric Anchor", bg: "#0b0217", primary: "#b388ff", secondary: "#7c4dff", accent: "#ff007f", text: "#ede7f6" },
  { id: 34, name: "Hypervelocity Rail Chute", bg: "#140a00", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffd600", text: "#fff8e1" },
  { id: 35, name: "Piezoelectric Spark Bay", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 36, name: "Aerogel Impact Buffer", bg: "#050d17", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ffea00", text: "#e1f5fe" },
  { id: 37, name: "Cavitation Bubble Array", bg: "#001014", primary: "#18ffff", secondary: "#00e5ff", accent: "#ff4081", text: "#e0f7fa" },
  { id: 38, name: "Magnetohydrodynamic Vent", bg: "#160501", primary: "#ff5722", secondary: "#e64a19", accent: "#ffeb3b", text: "#fbe9e7" },
  { id: 39, name: "Quantum Hall Edge State", bg: "#090217", primary: "#ea80fc", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 40, name: "Superradiant Scattering", bg: "#170c01", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 41, name: "Kerr Singularity Ring", bg: "#060312", primary: "#9c27b0", secondary: "#673ab7", accent: "#00e5ff", text: "#ede7f6" },
  { id: 42, name: "Dirac String Filament", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 43, name: "Hawking Flux Horizon", bg: "#030209", primary: "#5c6bc0", secondary: "#3949ab", accent: "#ff1744", text: "#e8eaf6" },
  { id: 44, name: "Quantum Chromodynamic Void", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 45, name: "Grand Unified Field Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const ballsVal = document.getElementById('ballsVal');
  const strokesVal = document.getElementById('strokesVal');
  const shieldVal = document.getElementById('shieldVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let strokesLeft = 6;
  let cueLives = 3;
  let targetBalls = [];
  let cueBall = { x: 260, y: 300, vx: 0, vy: 0, radius: 12, invulnTimer: 0 };
  let pockets = [];
  let isAiming = false;
  let dragStart = { x: 0, y: 0 };
  let currentDrag = { x: 0, y: 0 };
  let particles = [];

  const TABLE = {
    x: 120,
    y: 80,
    w: 760,
    h: 440,
    friction: 0.988
  };

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

    const ballCount = 3 + (lvl % 4);
    strokesLeft = ballCount + 3;
    cueLives = 3;

    cueBall = {
      x: 240,
      y: 300,
      vx: 0,
      vy: 0,
      radius: 12,
      invulnTimer: 60 // invulnerable grace on spawn
    };

    // Pockets on table perimeter
    pockets = [
      { x: TABLE.x + 20, y: TABLE.y + 20, radius: 22 },
      { x: TABLE.x + TABLE.w / 2, y: TABLE.y + 15, radius: 22 },
      { x: TABLE.x + TABLE.w - 20, y: TABLE.y + 20, radius: 22 },
      { x: TABLE.x + 20, y: TABLE.y + TABLE.h - 20, radius: 22 },
      { x: TABLE.x + TABLE.w / 2, y: TABLE.y + TABLE.h - 15, radius: 22 },
      { x: TABLE.x + TABLE.w - 20, y: TABLE.y + TABLE.h - 20, radius: 22 }
    ];

    // Seed target balls
    targetBalls = [];
    const seed = lvl * 19;
    for (let i = 0; i < ballCount; i++) {
      targetBalls.push({
        x: 550 + ((seed + i * 40) % 220),
        y: 160 + ((seed * 3 + i * 65) % 260),
        vx: 0,
        vy: 0,
        radius: 12,
        color: i % 2 === 0 ? activeTheme.accent : activeTheme.secondary,
        sunk: false
      });
    }

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    const sunkCount = targetBalls.filter(b => b.sunk).length;
    ballsVal.textContent = sunkCount + ' / ' + targetBalls.length + ' BALLS';
    strokesVal.textContent = strokesLeft + ' STROKES';
    strokesVal.style.color = strokesLeft > 1 ? '#00ff88' : '#ff3d00';
    shieldVal.textContent = cueLives + ' LIVES';
    shieldVal.style.color = cueLives > 1 ? '#ffd600' : '#ff1744';
  }

  function areBallsMoving() {
    if (Math.hypot(cueBall.vx, cueBall.vy) > 0.05) return true;
    return targetBalls.some(b => !b.sunk && Math.hypot(b.vx, b.vy) > 0.05);
  }

  function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (1000 / rect.width),
      y: (clientY - rect.top) * (600 / rect.height)
    };
  }

  canvas.addEventListener('mousedown', (e) => {
    if (!isPlaying || areBallsMoving() || strokesLeft <= 0) return;
    const pos = getCanvasPos(e);
    const dist = Math.hypot(pos.x - cueBall.x, pos.y - cueBall.y);
    if (dist < 35) {
      isAiming = true;
      dragStart = { x: cueBall.x, y: cueBall.y };
      currentDrag = pos;
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isAiming) return;
    currentDrag = getCanvasPos(e);
  });

  window.addEventListener('mouseup', () => {
    if (!isAiming) return;
    isAiming = false;
    const dx = cueBall.x - currentDrag.x;
    const dy = cueBall.y - currentDrag.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 10) {
      const power = Math.min(18, dist * 0.14);
      cueBall.vx = (dx / dist) * power;
      cueBall.vy = (dy / dist) * power;
      strokesLeft--;
      window.soundFX.playHit();
      updateHUD();
    }
  });

  // Touch Support
  canvas.addEventListener('touchstart', (e) => {
    if (!isPlaying || areBallsMoving() || strokesLeft <= 0) return;
    const pos = getCanvasPos(e);
    const dist = Math.hypot(pos.x - cueBall.x, pos.y - cueBall.y);
    if (dist < 35) {
      isAiming = true;
      dragStart = { x: cueBall.x, y: cueBall.y };
      currentDrag = pos;
    }
  });
  window.addEventListener('touchmove', (e) => {
    if (!isAiming) return;
    currentDrag = getCanvasPos(e);
  });
  window.addEventListener('touchend', () => {
    if (!isAiming) return;
    isAiming = false;
    const dx = cueBall.x - currentDrag.x;
    const dy = cueBall.y - currentDrag.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 10) {
      const power = Math.min(18, dist * 0.14);
      cueBall.vx = (dx / dist) * power;
      cueBall.vy = (dy / dist) * power;
      strokesLeft--;
      window.soundFX.playHit();
      updateHUD();
    }
  });

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

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

  function spawnParticles(x, y, color) {
    for (let i = 0; i < 12; i++) {
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

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (cueBall.invulnTimer > 0) cueBall.invulnTimer--;

    // Update Cue Ball
    cueBall.x += cueBall.vx;
    cueBall.y += cueBall.vy;
    cueBall.vx *= TABLE.friction;
    cueBall.vy *= TABLE.friction;

    // Table cushion bounce for Cue Ball
    if (cueBall.x - cueBall.radius < TABLE.x) {
      cueBall.x = TABLE.x + cueBall.radius;
      cueBall.vx = -cueBall.vx * 0.9;
    }
    if (cueBall.x + cueBall.radius > TABLE.x + TABLE.w) {
      cueBall.x = TABLE.x + TABLE.w - cueBall.radius;
      cueBall.vx = -cueBall.vx * 0.9;
    }
    if (cueBall.y - cueBall.radius < TABLE.y) {
      cueBall.y = TABLE.y + cueBall.radius;
      cueBall.vy = -cueBall.vy * 0.9;
    }
    if (cueBall.y + cueBall.radius > TABLE.y + TABLE.h) {
      cueBall.y = TABLE.y + TABLE.h - cueBall.radius;
      cueBall.vy = -cueBall.vy * 0.9;
    }

    // Check Cue Ball pocketing (scratch)
    pockets.forEach(p => {
      const dist = Math.hypot(cueBall.x - p.x, cueBall.y - p.y);
      if (dist < p.radius) {
        cueLives--;
        cueBall.x = 240;
        cueBall.y = 300;
        cueBall.vx = 0;
        cueBall.vy = 0;
        spawnParticles(p.x, p.y, '#ffffff');
        updateHUD();
        if (cueLives <= 0) {
          isGameOver = true;
          overlayTitle.textContent = "SCRATCH OUT";
          overlayDesc.textContent = "Cue sphere sank into gravitational pockets too many times. Retry table!";
          overlay.style.display = 'flex';
        }
      }
    });

    // Update Target Balls
    targetBalls.forEach(tb => {
      if (!tb.sunk) {
        tb.x += tb.vx;
        tb.y += tb.vy;
        tb.vx *= TABLE.friction;
        tb.vy *= TABLE.friction;

        // Cushion bounce
        if (tb.x - tb.radius < TABLE.x) {
          tb.x = TABLE.x + tb.radius;
          tb.vx = -tb.vx * 0.9;
        }
        if (tb.x + tb.radius > TABLE.x + TABLE.w) {
          tb.x = TABLE.x + TABLE.w - tb.radius;
          tb.vx = -tb.vx * 0.9;
        }
        if (tb.y - tb.radius < TABLE.y) {
          tb.y = TABLE.y + tb.radius;
          tb.vy = -tb.vy * 0.9;
        }
        if (tb.y + tb.radius > TABLE.y + TABLE.h) {
          tb.y = TABLE.y + TABLE.h - tb.radius;
          tb.vy = -tb.vy * 0.9;
        }

        // Pocket check
        pockets.forEach(p => {
          const dist = Math.hypot(tb.x - p.x, tb.y - p.y);
          if (dist < p.radius) {
            tb.sunk = true;
            window.soundFX.playPocket();
            spawnParticles(p.x, p.y, tb.color);
            updateHUD();

            // Win condition check
            if (targetBalls.every(b => b.sunk)) {
              isVictory = true;
              window.soundFX.playClear();
              overlayTitle.textContent = "TABLE " + currentLevel + " CLEARED!";
              overlayDesc.textContent = "All quantum spheres pocketed with perfect geometry! Advance to next table.";
              nextBtn.style.display = 'inline-block';
              overlay.style.display = 'flex';
            }
          }
        });

        // Cue to Target Collision
        const distCue = Math.hypot(cueBall.x - tb.x, cueBall.y - tb.y);
        if (distCue < cueBall.radius + tb.radius) {
          // Elastic sphere collision
          const nx = (tb.x - cueBall.x) / distCue;
          const ny = (tb.y - cueBall.y) / distCue;
          const kx = cueBall.vx - tb.vx;
          const ky = cueBall.vy - tb.vy;
          const p = 2 * (nx * kx + ny * ky) / 2;
          cueBall.vx -= p * nx * 0.95;
          cueBall.vy -= p * ny * 0.95;
          tb.vx += p * nx * 0.95;
          tb.vy += p * ny * 0.95;
          window.soundFX.playHit();
        }
      }
    });

    // Check Stroke Out Condition
    if (!areBallsMoving() && strokesLeft === 0 && !targetBalls.every(b => b.sunk)) {
      isGameOver = true;
      overlayTitle.textContent = "STROKES EXHAUSTED";
      overlayDesc.textContent = "Failed to pocket all quantum spheres within the stroke limit. Practice bank angles and retry!";
      overlay.style.display = 'flex';
    }

    // Update Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Billiard Table Cushion Frame
    ctx.fillStyle = '#101726';
    ctx.fillRect(TABLE.x - 24, TABLE.y - 24, TABLE.w + 48, TABLE.h + 48);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(TABLE.x - 24, TABLE.y - 24, TABLE.w + 48, TABLE.h + 48);

    // Inner Felt
    ctx.fillStyle = '#061a24';
    ctx.fillRect(TABLE.x, TABLE.y, TABLE.w, TABLE.h);

    // Draw Pockets
    pockets.forEach(p => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.shadowColor = activeTheme.secondary;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.strokeStyle = activeTheme.secondary;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    });

    // Draw Aim Line
    if (isAiming) {
      ctx.save();
      const dx = cueBall.x - currentDrag.x;
      const dy = cueBall.y - currentDrag.y;
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(cueBall.x, cueBall.y);
      ctx.lineTo(cueBall.x + dx * 2.5, cueBall.y + dy * 2.5);
      ctx.stroke();
      ctx.restore();
    }

    // Draw Target Balls
    targetBalls.forEach(tb => {
      if (!tb.sunk) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(tb.x, tb.y, tb.radius, 0, Math.PI * 2);
        ctx.fillStyle = tb.color;
        ctx.shadowColor = tb.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }
    });

    // Draw Cue Ball
    ctx.save();
    ctx.beginPath();
    ctx.arc(cueBall.x, cueBall.y, cueBall.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 14;
    ctx.fill();
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    ctx.stroke();
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

    ctx.restore();
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