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
  const dmgVal = document.getElementById('dmgVal');
  const unitsVal = document.getElementById('unitsVal');
  const velVal = document.getElementById('velVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const launchBtn = document.getElementById('launchBtn');
  const angleUpBtn = document.getElementById('angleUpBtn');
  const angleDownBtn = document.getElementById('angleDownBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let totalDamage = 0;
  let targetDamage = 8000;
  let dummiesRemaining = 3;
  let launchAngle = -0.4; // radians
  let launchPower = 18;

  // Verlet Integration Ragdoll
  let ragdoll = null;
  let slopeLines = [];
  let barrels = [];
  let pinwheels = [];
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

  function createRagdoll(startX, startY, vx, vy) {
    // 8 points: Head, Chest, Hips, LHand, RHand, LKnee, RKnee, LFoot, RFoot
    const points = [
      { x: startX, y: startY - 24, oldX: startX - vx, oldY: startY - 24 - vy, radius: 10, name: 'head' },
      { x: startX, y: startY, oldX: startX - vx, oldY: startY - vy, radius: 12, name: 'chest' },
      { x: startX, y: startY + 24, oldX: startX - vx, oldY: startY + 24 - vy, radius: 10, name: 'hips' },
      { x: startX - 20, y: startY + 10, oldX: startX - 20 - vx, oldY: startY + 10 - vy, radius: 6, name: 'lhand' },
      { x: startX + 20, y: startY + 10, oldX: startX + 20 - vx, oldY: startY + 10 - vy, radius: 6, name: 'rhand' },
      { x: startX - 12, y: startY + 50, oldX: startX - 12 - vx, oldY: startY + 50 - vy, radius: 7, name: 'lfoot' },
      { x: startX + 12, y: startY + 50, oldX: startX + 12 - vx, oldY: startY + 50 - vy, radius: 7, name: 'rfoot' }
    ];

    // Distance constraints
    const sticks = [
      { p0: 0, p1: 1, len: 24 }, // Head to chest
      { p0: 1, p1: 2, len: 24 }, // Chest to hips
      { p0: 1, p1: 3, len: 24 }, // Chest to LHand
      { p0: 1, p1: 4, len: 24 }, // Chest to RHand
      { p0: 2, p1: 5, len: 28 }, // Hips to LFoot
      { p0: 2, p1: 6, len: 28 }  // Hips to RFoot
    ];

    return { points, sticks, active: true, invulnTimer: 60 };
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    totalDamage = 0;
    targetDamage = 6000 + (lvl * 1200);
    dummiesRemaining = 3;
    ragdoll = null;

    // Generate procedural slopes and obstacles
    slopeLines = [
      { x1: 50, y1: 180, x2: 300, y2: 300 },
      { x1: 300, y1: 300, x2: 600, y2: 440 },
      { x1: 600, y1: 440, x2: 950, y2: 520 },
      { x1: 950, y1: 520, x2: 1200, y2: 520 } // flat finish
    ];

    // Explosive barrels
    barrels = [
      { x: 380, y: 320, w: 26, h: 36, exploded: false },
      { x: 550, y: 400, w: 26, h: 36, exploded: false },
      { x: 780, y: 470, w: 26, h: 36, exploded: false }
    ];

    // Pinwheels
    pinwheels = [
      { x: 480, y: 360, radius: 45, angle: 0, speed: 0.05 + (lvl * 0.002) },
      { x: 700, y: 440, radius: 45, angle: 0, speed: -0.06 }
    ];

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    dmgVal.textContent = Math.floor(totalDamage).toLocaleString() + ' / ' + targetDamage.toLocaleString() + ' PTS';
    unitsVal.textContent = dummiesRemaining + ' DUMMIES';
    unitsVal.style.color = dummiesRemaining > 1 ? '#00ff88' : '#ff3d00';
  }

  function launchDummy() {
    if (ragdoll && ragdoll.active) return;
    if (dummiesRemaining <= 0) return;

    const vx = Math.cos(launchAngle) * launchPower;
    const vy = Math.sin(launchAngle) * launchPower;
    ragdoll = createRagdoll(80, 140, vx, vy);
    dummiesRemaining--;
    window.soundFX.playLaunch();
    updateHUD();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Key controls
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') launchAngle = Math.max(-1.1, launchAngle - 0.08);
    if (e.code === 'KeyS' || e.code === 'ArrowDown') launchAngle = Math.min(0.2, launchAngle + 0.08);
    if (e.code === 'Space') {
      e.preventDefault();
      launchDummy();
    }
  });

  angleUpBtn.onclick = () => launchAngle = Math.max(-1.1, launchAngle - 0.08);
  angleDownBtn.onclick = () => launchAngle = Math.min(0.2, launchAngle + 0.08);
  launchBtn.onclick = () => launchDummy();

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

  function spawnParticles(x, y, color, count = 10, speed = 4) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = Math.random() * speed;
      particles.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        life: 1,
        decay: 0.035,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    // Pinwheels rotate
    pinwheels.forEach(pw => pw.angle += pw.speed);

    // Update Ragdoll (Verlet Integration)
    if (ragdoll && ragdoll.active) {
      if (ragdoll.invulnTimer > 0) ragdoll.invulnTimer--;

      let maxVel = 0;

      // Update positions
      ragdoll.points.forEach(p => {
        const vx = (p.x - p.oldX) * 0.985;
        const vy = (p.y - p.oldY) * 0.985 + 0.35; // gravity
        p.oldX = p.x;
        p.oldY = p.y;
        p.x += vx;
        p.y += vy;

        const currentSpd = Math.hypot(vx, vy);
        if (currentSpd > maxVel) maxVel = currentSpd;

        // Collision with slopes
        slopeLines.forEach(line => {
          // Line segment distance
          const ldx = line.x2 - line.x1;
          const ldy = line.y2 - line.y1;
          const len = Math.hypot(ldx, ldy);
          const u = Math.max(0, Math.min(1, ((p.x - line.x1) * ldx + (p.y - line.y1) * ldy) / (len * len)));
          const nearX = line.x1 + u * ldx;
          const nearY = line.y1 + u * ldy;
          const dist = Math.hypot(p.x - nearX, p.y - nearY);

          if (dist < p.radius + 3) {
            // Push out
            const nx = (p.x - nearX) / dist;
            const ny = (p.y - nearY) / dist;
            p.x = nearX + nx * (p.radius + 3);
            p.y = nearY + ny * (p.radius + 3);

            // Friction & damage impact
            if (currentSpd > 2.5) {
              const impactScore = currentSpd * 18;
              totalDamage += impactScore;
              window.soundFX.playImpact(currentSpd);
              spawnParticles(p.x, p.y, activeTheme.accent, 4, 3);
              updateHUD();
            }
          }
        });

        // Pinwheel Collision
        pinwheels.forEach(pw => {
          const dist = Math.hypot(p.x - pw.x, p.y - pw.y);
          if (dist < pw.radius + p.radius) {
            const pushAngle = pw.angle + Math.PI;
            p.x += Math.cos(pushAngle) * 8;
            p.y += Math.sin(pushAngle) * 8;
            totalDamage += 120;
            window.soundFX.playImpact(4);
            spawnParticles(p.x, p.y, '#ffd600', 8, 4);
          }
        });

        // Explosive Barrels
        barrels.forEach(bar => {
          if (!bar.exploded) {
            if (p.x > bar.x && p.x < bar.x + bar.w && p.y > bar.y && p.y < bar.y + bar.h) {
              bar.exploded = true;
              totalDamage += 1500;
              window.soundFX.playExplosion();
              spawnParticles(bar.x + bar.w / 2, bar.y + bar.h / 2, '#ff1744', 30, 8);
              // Launch ragdoll outward
              ragdoll.points.forEach(pt => {
                pt.oldX = pt.x - (Math.random() * 14 - 7);
                pt.oldY = pt.y + 16;
              });
              updateHUD();
            }
          }
        });
      });

      // Solve Distance Constraints (3 iterations)
      for (let iter = 0; iter < 3; iter++) {
        ragdoll.sticks.forEach(st => {
          const p0 = ragdoll.points[st.p0];
          const p1 = ragdoll.points[st.p1];
          const dx = p1.x - p0.x;
          const dy = p1.y - p0.y;
          const dist = Math.hypot(dx, dy);
          const diff = (dist - st.len) / (dist || 1);
          const offsetX = dx * 0.5 * diff;
          const offsetY = dy * 0.5 * diff;
          p0.x += offsetX;
          p0.y += offsetY;
          p1.x -= offsetX;
          p1.y -= offsetY;
        });
      }

      velVal.textContent = Math.round(maxVel * 12) + ' KM/H';

      // Check if settled (rest)
      if (maxVel < 0.25 && ragdoll.invulnTimer <= 0) {
        ragdoll.active = false;
        if (totalDamage >= targetDamage) {
          isVictory = true;
          window.soundFX.playClear();
          overlayTitle.textContent = "SLOPE " + currentLevel + " DEMOLISHED!";
          overlayDesc.textContent = "Target kinetic impact damage surpassed! Advance to next demolition slope.";
          nextBtn.style.display = 'inline-block';
          overlay.style.display = 'flex';
        } else if (dummiesRemaining === 0) {
          isGameOver = true;
          overlayTitle.textContent = "DEMOLITION TEST FAILED";
          overlayDesc.textContent = "Failed to reach the target damage threshold with allocated crash dummies. Adjust launch angle and retry!";
          overlay.style.display = 'flex';
        }
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
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scale coordinates
    const scaleX = canvas.width / 1100;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Slopes
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 6;
    slopeLines.forEach(l => {
      ctx.beginPath();
      ctx.moveTo(l.x1, l.y1);
      ctx.lineTo(l.x2, l.y2);
      ctx.stroke();
    });

    // Draw Launch Catapult Tube
    ctx.save();
    ctx.translate(80, 140);
    ctx.rotate(launchAngle);
    ctx.fillStyle = '#37474f';
    ctx.fillRect(-10, -12, 50, 24);
    ctx.strokeStyle = activeTheme.secondary;
    ctx.lineWidth = 3;
    ctx.strokeRect(-10, -12, 50, 24);
    ctx.restore();

    // Draw Explosive Barrels
    barrels.forEach(bar => {
      if (!bar.exploded) {
        ctx.fillStyle = '#ff1744';
        ctx.fillRect(bar.x, bar.y, bar.w, bar.h);
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 2;
        ctx.strokeRect(bar.x, bar.y, bar.w, bar.h);
        ctx.fillStyle = '#ffd600';
        ctx.font = 'bold 8px monospace';
        ctx.fillText('TNT', bar.x + 4, bar.y + bar.h / 2 + 3);
      }
    });

    // Draw Pinwheels
    pinwheels.forEach(pw => {
      ctx.save();
      ctx.translate(pw.x, pw.y);
      ctx.rotate(pw.angle);
      ctx.strokeStyle = activeTheme.secondary;
      ctx.lineWidth = 5;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(pw.radius, 0);
        ctx.stroke();
        ctx.rotate(Math.PI / 2);
      }
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.restore();
    });

    // Draw Particles
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
      ctx.restore();
    });

    // Draw Ragdoll
    if (ragdoll) {
      // Draw Sticks (Limbs)
      ctx.strokeStyle = activeTheme.primary;
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ragdoll.sticks.forEach(st => {
        const p0 = ragdoll.points[st.p0];
        const p1 = ragdoll.points[st.p1];
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.stroke();
      });

      // Draw Points (Joints / Head)
      ragdoll.points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.name === 'head' ? '#ffd600' : '#e0f7fa';
        ctx.shadowColor = activeTheme.accent;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    }

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