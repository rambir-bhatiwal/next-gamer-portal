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
  const scoreVal = document.getElementById('scoreVal');
  const ballsVal = document.getElementById('ballsVal');
  const multVal = document.getElementById('multVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const flipLeftBtn = document.getElementById('flipLeftBtn');
  const flipRightBtn = document.getElementById('flipRightBtn');
  const plungerBtn = document.getElementById('plungerBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let score = 0;
  let targetScore = 20000;
  let ballsRemaining = 3;
  let comboCount = 0;
  let comboResetTimer = 0;

  // Rigid-body balls
  let balls = [];

  // Table geometry & flippers
  const table = {
    w: 520,
    h: 700,
    gravity: 0.22
  };

  const leftFlipper = {
    x: 180,
    y: 620,
    length: 65,
    angle: 0.4,
    restAngle: 0.4,
    activeAngle: -0.4,
    isPressed: false
  };

  const rightFlipper = {
    x: 340,
    y: 620,
    length: 65,
    angle: Math.PI - 0.4,
    restAngle: Math.PI - 0.4,
    activeAngle: Math.PI + 0.4,
    isPressed: false
  };

  let bumpers = [];
  let slingshots = [];
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

    score = 0;
    targetScore = 15000 + (lvl * 1500);
    ballsRemaining = 3;
    comboCount = 0;
    comboResetTimer = 0;

    // Reset Balls with invulnerability grace timer
    balls = [];
    spawnBall();

    // Bumpers
    bumpers = [
      { x: 260, y: 190, radius: 28, value: 500 },
      { x: 170, y: 270, radius: 24, value: 350 },
      { x: 350, y: 270, radius: 24, value: 350 }
    ];

    // Additional bumpers for higher levels
    if (lvl > 10) {
      bumpers.push({ x: 260, y: 350, radius: 22, value: 400 });
    }
    if (lvl > 25) {
      bumpers.push({ x: 190, y: 130, radius: 20, value: 600 });
      bumpers.push({ x: 330, y: 130, radius: 20, value: 600 });
    }

    // Slingshot walls above flippers
    slingshots = [
      { x1: 120, y1: 480, x2: 150, y2: 570 },
      { x1: 400, y1: 480, x2: 370, y2: 570 }
    ];

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function spawnBall() {
    balls.push({
      x: 480,
      y: 580,
      vx: 0,
      vy: 0,
      radius: 11,
      invulnTimer: 90, // invulnerable grace period on spawn to prevent instant drain
      active: true
    });
  }

  function launchBall() {
    const launchBallObj = balls.find(b => b.x > 450 && b.y > 500);
    if (launchBallObj) {
      launchBallObj.vy = -16 - Math.random() * 2;
      launchBallObj.vx = -1.2;
      window.soundFX.playPlunger();
      spawnParticles(launchBallObj.x, launchBallObj.y, '#ffd600', 14);
    }
  }

  function updateHUD() {
    scoreVal.textContent = score.toLocaleString() + ' / ' + targetScore.toLocaleString() + ' PTS';
    ballsVal.textContent = ballsRemaining + ' BALLS';
    ballsVal.style.color = ballsRemaining > 1 ? '#00ff88' : '#ff3d00';
    multVal.textContent = 'x' + Math.max(1, comboCount) + ' COMBO';
    multVal.style.color = comboCount > 3 ? '#ff007f' : '#ffd600';
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Key controls
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
      leftFlipper.isPressed = true;
      window.soundFX.playFlipper();
    }
    if (e.code === 'KeyD' || e.code === 'ArrowRight') {
      rightFlipper.isPressed = true;
      window.soundFX.playFlipper();
    }
    if (e.code === 'Space' || e.code === 'ArrowDown') {
      e.preventDefault();
      launchBall();
    }
  });

  window.addEventListener('keyup', (e) => {
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') leftFlipper.isPressed = false;
    if (e.code === 'KeyD' || e.code === 'ArrowRight') rightFlipper.isPressed = false;
  });

  // Touch controls
  flipLeftBtn.addEventListener('mousedown', () => { leftFlipper.isPressed = true; window.soundFX.playFlipper(); });
  flipLeftBtn.addEventListener('mouseup', () => leftFlipper.isPressed = false);
  flipLeftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); leftFlipper.isPressed = true; window.soundFX.playFlipper(); });
  flipLeftBtn.addEventListener('touchend', () => leftFlipper.isPressed = false);

  flipRightBtn.addEventListener('mousedown', () => { rightFlipper.isPressed = true; window.soundFX.playFlipper(); });
  flipRightBtn.addEventListener('mouseup', () => rightFlipper.isPressed = false);
  flipRightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); rightFlipper.isPressed = true; window.soundFX.playFlipper(); });
  flipRightBtn.addEventListener('touchend', () => rightFlipper.isPressed = false);

  plungerBtn.onclick = () => launchBall();
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

  function spawnParticles(x, y, color, count = 8) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 4;
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

    if (comboResetTimer > 0) {
      comboResetTimer--;
      if (comboResetTimer === 0) comboCount = 0;
    }

    // Animate Flippers
    leftFlipper.angle += ((leftFlipper.isPressed ? leftFlipper.activeAngle : leftFlipper.restAngle) - leftFlipper.angle) * 0.45;
    rightFlipper.angle += ((rightFlipper.isPressed ? rightFlipper.activeAngle : rightFlipper.restAngle) - rightFlipper.angle) * 0.45;

    // Update Balls
    for (let bIdx = balls.length - 1; bIdx >= 0; bIdx--) {
      const b = balls[bIdx];
      if (b.invulnTimer > 0) b.invulnTimer--;

      // Gravity & Velocity
      b.vy += table.gravity;
      b.x += b.vx;
      b.y += b.vy;

      // Table Boundary Collisions (Walls)
      // Left Wall
      if (b.x - b.radius < 50) {
        b.x = 50 + b.radius;
        b.vx = Math.abs(b.vx) * 0.75;
      }
      // Right Chute Outer Wall
      if (b.x + b.radius > 500) {
        b.x = 500 - b.radius;
        b.vx = -Math.abs(b.vx) * 0.75;
      }
      // Top Curved Arch
      if (b.y - b.radius < 50) {
        b.y = 50 + b.radius;
        b.vy = Math.abs(b.vy) * 0.8;
      }
      // Chute Divider Wall (x: 450, from y: 150 to y: 650)
      if (b.x + b.radius > 450 && b.x - b.radius < 455 && b.y > 150 && b.y < 650) {
        if (b.vx > 0) {
          b.x = 450 - b.radius;
          b.vx = -b.vx * 0.75;
        } else {
          b.x = 455 + b.radius;
          b.vx = -b.vx * 0.75;
        }
      }

      // Check Bumper Collisions
      bumpers.forEach(bm => {
        const dist = Math.hypot(b.x - bm.x, b.y - bm.y);
        if (dist < b.radius + bm.radius) {
          // Bounce normal
          const nx = (b.x - bm.x) / dist;
          const ny = (b.y - bm.y) / dist;
          b.vx = nx * 8.5;
          b.vy = ny * 8.5;
          comboCount++;
          comboResetTimer = 180;
          score += bm.value * comboCount;
          window.soundFX.playBumper(comboCount);
          spawnParticles(b.x, b.y, activeTheme.accent, 12);
          updateHUD();

          // Target reached check
          if (score >= targetScore) {
            isVictory = true;
            window.soundFX.playClear();
            overlayTitle.textContent = "COLLIDER " + currentLevel + " CONQUERED!";
            overlayDesc.textContent = "Target particle score reached! Advance to next collider stage.";
            nextBtn.style.display = 'inline-block';
            overlay.style.display = 'flex';
          }
        }
      });

      // Left Flipper Collision
      const lTipX = leftFlipper.x + Math.cos(leftFlipper.angle) * leftFlipper.length;
      const lTipY = leftFlipper.y + Math.sin(leftFlipper.angle) * leftFlipper.length;
      if (b.x > leftFlipper.x - 10 && b.x < lTipX + 10 && b.y + b.radius > Math.min(leftFlipper.y, lTipY) && b.y - b.radius < Math.max(leftFlipper.y, lTipY)) {
        b.vy = leftFlipper.isPressed ? -12 : -5;
        b.vx += (leftFlipper.isPressed ? 3 : 1);
        spawnParticles(b.x, b.y, '#ff007f', 6);
      }

      // Right Flipper Collision
      const rTipX = rightFlipper.x + Math.cos(rightFlipper.angle) * rightFlipper.length;
      const rTipY = rightFlipper.y + Math.sin(rightFlipper.angle) * rightFlipper.length;
      if (b.x < rightFlipper.x + 10 && b.x > rTipX - 10 && b.y + b.radius > Math.min(rightFlipper.y, rTipY) && b.y - b.radius < Math.max(rightFlipper.y, rTipY)) {
        b.vy = rightFlipper.isPressed ? -12 : -5;
        b.vx -= (rightFlipper.isPressed ? 3 : 1);
        spawnParticles(b.x, b.y, '#ff007f', 6);
      }

      // Drain Pit Check (Below flippers: y > 680)
      if (b.y > 690) {
        if (b.invulnTimer <= 0) {
          balls.splice(bIdx, 1);
          window.soundFX.playDrain();
          if (balls.length === 0) {
            ballsRemaining--;
            updateHUD();
            if (ballsRemaining > 0) {
              spawnBall();
            } else {
              isGameOver = true;
              overlayTitle.textContent = "PARTICLES DRAINED";
              overlayDesc.textContent = "All subatomic spheres exhausted before reaching the score quota. Retry collider!";
              overlay.style.display = 'flex';
            }
          }
        } else {
          // Bounced back by drain saver barrier
          b.y = 660;
          b.vy = -10;
        }
      }
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

    // Scale to fit pinball dimensions
    const scale = Math.min(canvas.width / 540, canvas.height / 740);
    const offsetX = (canvas.width - 520 * scale) / 2;
    const offsetY = (canvas.height - 700 * scale) / 2;

    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);

    // Table Frame & Rails
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(50, 50, 450, 640);

    // Chute divider
    ctx.beginPath();
    ctx.moveTo(450, 150);
    ctx.lineTo(450, 650);
    ctx.stroke();

    // Top Curve Arch
    ctx.beginPath();
    ctx.arc(260, 100, 180, Math.PI, 0);
    ctx.strokeStyle = activeTheme.secondary;
    ctx.stroke();

    // Draw Bumpers
    bumpers.forEach(bm => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(bm.x, bm.y, bm.radius, 0, Math.PI * 2);
      ctx.fillStyle = activeTheme.accent;
      ctx.shadowColor = activeTheme.accent;
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#000';
      ctx.font = 'bold 11px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(bm.value, bm.x, bm.y + 4);
      ctx.restore();
    });

    // Draw Flippers
    // Left Flipper
    ctx.save();
    ctx.translate(leftFlipper.x, leftFlipper.y);
    ctx.rotate(leftFlipper.angle);
    ctx.fillStyle = '#ff007f';
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 10;
    ctx.fillRect(0, -6, leftFlipper.length, 12);
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.arc(leftFlipper.length, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Right Flipper
    ctx.save();
    ctx.translate(rightFlipper.x, rightFlipper.y);
    ctx.rotate(rightFlipper.angle);
    ctx.fillStyle = '#ff007f';
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 10;
    ctx.fillRect(0, -6, rightFlipper.length, 12);
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.arc(rightFlipper.length, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Draw Slingshots
    slingshots.forEach(s => {
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
      ctx.stroke();
    });

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

    // Draw Balls
    balls.forEach(b => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = activeTheme.primary;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.strokeStyle = activeTheme.primary;
      ctx.lineWidth = 2;
      ctx.stroke();
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