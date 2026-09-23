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
  const targetVal = document.getElementById('targetVal');
  const probesVal = document.getElementById('probesVal');
  const gravVal = document.getElementById('gravVal');
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

  let destroyedTargets = 0;
  let totalTargets = 3;
  let probesRemaining = 3;

  const slingshot = {
    x: 140,
    y: 350,
    armL: { x: 120, y: 320 },
    armR: { x: 160, y: 320 }
  };

  let activeProbe = null;
  let isDragging = false;
  let dragPos = { x: 140, y: 350 };

  let planets = [];
  let targets = [];
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

    destroyedTargets = 0;
    totalTargets = 2 + (lvl % 3);
    probesRemaining = 3;
    activeProbe = null;
    isDragging = false;
    dragPos = { x: slingshot.x, y: slingshot.y };

    // Gravity bodies (Planets)
    planets = [
      { x: 450, y: 320, radius: 42, mass: 650, color: activeTheme.primary }
    ];
    if (lvl > 12) {
      planets.push({ x: 720, y: 180, radius: 32, mass: 450, color: activeTheme.secondary });
    }
    if (lvl > 28) {
      planets.push({ x: 620, y: 460, radius: 36, mass: 500, color: '#ffd600' });
    }

    // Hostile space stations / target cores
    targets = [];
    const targetSlots = [
      { x: 800, y: 320 },
      { x: 860, y: 220 },
      { x: 860, y: 420 },
      { x: 940, y: 320 }
    ];
    for (let i = 0; i < totalTargets; i++) {
      const slot = targetSlots[i % targetSlots.length];
      targets.push({
        x: slot.x + ((lvl * 13) % 40) - 20,
        y: slot.y + ((lvl * 29) % 40) - 20,
        radius: 20,
        destroyed: false
      });
    }

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    targetVal.textContent = destroyedTargets + ' / ' + totalTargets + ' CORES';
    targetVal.style.color = destroyedTargets >= totalTargets ? '#39ff14' : '#ffd600';
    probesVal.textContent = probesRemaining + ' PROBES';
    probesVal.style.color = probesRemaining > 1 ? '#00ff88' : '#ff3d00';
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Pointer / Mouse events for Slingshot Drag
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
    if (!isPlaying || activeProbe || probesRemaining <= 0) return;
    const pos = getCanvasPos(e);
    const dist = Math.hypot(pos.x - slingshot.x, pos.y - slingshot.y);
    if (dist < 60) {
      isDragging = true;
      dragPos = pos;
      window.soundFX.playStretch();
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const pos = getCanvasPos(e);
    // Limit drag radius
    const dx = pos.x - slingshot.x;
    const dy = pos.y - slingshot.y;
    const dist = Math.hypot(dx, dy);
    const maxDist = 90;
    if (dist > maxDist) {
      dragPos.x = slingshot.x + (dx / dist) * maxDist;
      dragPos.y = slingshot.y + (dy / dist) * maxDist;
    } else {
      dragPos = pos;
    }
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    const dx = slingshot.x - dragPos.x;
    const dy = slingshot.y - dragPos.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 15) {
      const power = dist * 0.16;
      activeProbe = {
        x: slingshot.x,
        y: slingshot.y,
        vx: (dx / dist) * power,
        vy: (dy / dist) * power,
        radius: 8,
        trail: [],
        invulnTimer: 45 // spawn protection
      };
      probesRemaining--;
      window.soundFX.playRelease();
      updateHUD();
    }
    dragPos = { x: slingshot.x, y: slingshot.y };
  });

  // Touch support
  canvas.addEventListener('touchstart', (e) => {
    if (!isPlaying || activeProbe || probesRemaining <= 0) return;
    const pos = getCanvasPos(e);
    const dist = Math.hypot(pos.x - slingshot.x, pos.y - slingshot.y);
    if (dist < 60) {
      isDragging = true;
      dragPos = pos;
      window.soundFX.playStretch();
    }
  });
  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const pos = getCanvasPos(e);
    const dx = pos.x - slingshot.x;
    const dy = pos.y - slingshot.y;
    const dist = Math.hypot(dx, dy);
    const maxDist = 90;
    if (dist > maxDist) {
      dragPos.x = slingshot.x + (dx / dist) * maxDist;
      dragPos.y = slingshot.y + (dy / dist) * maxDist;
    } else {
      dragPos = pos;
    }
  });
  window.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    const dx = slingshot.x - dragPos.x;
    const dy = slingshot.y - dragPos.y;
    const dist = Math.hypot(dx, dy);
    if (dist > 15) {
      const power = dist * 0.16;
      activeProbe = {
        x: slingshot.x,
        y: slingshot.y,
        vx: (dx / dist) * power,
        vy: (dy / dist) * power,
        radius: 8,
        trail: [],
        invulnTimer: 45
      };
      probesRemaining--;
      window.soundFX.playRelease();
      updateHUD();
    }
    dragPos = { x: slingshot.x, y: slingshot.y };
  });

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

  function spawnParticles(x, y, color, count = 12) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 1 + Math.random() * 4;
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

    if (activeProbe) {
      if (activeProbe.invulnTimer > 0) activeProbe.invulnTimer--;

      // N-body gravity attraction from planets
      planets.forEach(pl => {
        const dx = pl.x - activeProbe.x;
        const dy = pl.y - activeProbe.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 8) {
          const force = (pl.mass) / (dist * dist);
          activeProbe.vx += (dx / dist) * force;
          activeProbe.vy += (dy / dist) * force;
        }

        // Crash into planet surface
        if (dist < pl.radius + activeProbe.radius) {
          spawnParticles(activeProbe.x, activeProbe.y, pl.color, 16);
          window.soundFX.playShatter();
          activeProbe = null;
        }
      });

      if (activeProbe) {
        activeProbe.x += activeProbe.vx;
        activeProbe.y += activeProbe.vy;

        activeProbe.trail.push({ x: activeProbe.x, y: activeProbe.y });
        if (activeProbe.trail.length > 25) activeProbe.trail.shift();

        // Check target destruction
        targets.forEach(t => {
          if (!t.destroyed) {
            const dist = Math.hypot(activeProbe.x - t.x, activeProbe.y - t.y);
            if (dist < activeProbe.radius + t.radius) {
              t.destroyed = true;
              destroyedTargets++;
              window.soundFX.playShatter();
              spawnParticles(t.x, t.y, activeTheme.accent, 24);
              updateHUD();

              if (destroyedTargets >= totalTargets) {
                isVictory = true;
                window.soundFX.playClear();
                overlayTitle.textContent = "SYSTEM " + currentLevel + " LIBERATED!";
                overlayDesc.textContent = "All enemy orbital bunker cores annihilated! Proceed to next planetary sector.";
                nextBtn.style.display = 'inline-block';
                overlay.style.display = 'flex';
              }
            }
          }
        });

        // Out of bounds check
        if (activeProbe.x < -100 || activeProbe.x > 1150 || activeProbe.y < -100 || activeProbe.y > 700) {
          activeProbe = null;
        }
      }

      // Check failure condition
      if (!activeProbe && destroyedTargets < totalTargets && probesRemaining === 0) {
        isGameOver = true;
        overlayTitle.textContent = "PROBES DEPLETED";
        overlayDesc.textContent = "All quantum probe munitions exhausted before destroying bunker cores. Adjust trajectory slingshot and retry!";
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
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Deep space coordinate grid
    ctx.save();
    ctx.strokeStyle = activeTheme.primary + '12';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Planets & Gravity Wells
    planets.forEach(pl => {
      // Gravity field aura
      ctx.save();
      ctx.beginPath();
      ctx.arc(pl.x, pl.y, pl.radius * 2.2, 0, Math.PI * 2);
      ctx.strokeStyle = pl.color + '33';
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 6]);
      ctx.stroke();

      // Planet body
      ctx.beginPath();
      ctx.arc(pl.x, pl.y, pl.radius, 0, Math.PI * 2);
      ctx.fillStyle = pl.color;
      ctx.shadowColor = pl.color;
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    });

    // Draw Targets (Bunkers)
    targets.forEach(t => {
      if (!t.destroyed) {
        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.beginPath();
        ctx.arc(0, 0, t.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff1744';
        ctx.shadowColor = '#ff1744';
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('CORE', 0, 3);
        ctx.restore();
      }
    });

    // Draw Slingshot Pedestal & Elastic Bands
    ctx.save();
    ctx.strokeStyle = '#455a64';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(slingshot.x, slingshot.y + 70);
    ctx.lineTo(slingshot.x, slingshot.y);
    ctx.lineTo(slingshot.armL.x, slingshot.armL.y);
    ctx.moveTo(slingshot.x, slingshot.y);
    ctx.lineTo(slingshot.armR.x, slingshot.armR.y);
    ctx.stroke();

    // Elastic Bands
    ctx.strokeStyle = '#39ff14';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(slingshot.armL.x, slingshot.armL.y);
    ctx.lineTo(dragPos.x, dragPos.y);
    ctx.moveTo(slingshot.armR.x, slingshot.armR.y);
    ctx.lineTo(dragPos.x, dragPos.y);
    ctx.stroke();

    // Probe in sling
    if (!activeProbe && probesRemaining > 0) {
      ctx.beginPath();
      ctx.arc(dragPos.x, dragPos.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 12;
      ctx.fill();
    }
    ctx.restore();

    // Draw Active Probe & Trail
    if (activeProbe) {
      ctx.save();
      // Draw trail
      ctx.strokeStyle = '#00f0ff88';
      ctx.lineWidth = 3;
      ctx.beginPath();
      activeProbe.trail.forEach((pt, i) => {
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();

      // Probe head
      ctx.beginPath();
      ctx.arc(activeProbe.x, activeProbe.y, activeProbe.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.restore();
    }

    // Draw Particles
    particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
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