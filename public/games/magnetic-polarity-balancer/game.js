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
  const stableVal = document.getElementById('stableVal');
  const shieldVal = document.getElementById('shieldVal');
  const voltageVal = document.getElementById('voltageVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const pwrDownBtn = document.getElementById('pwrDownBtn');
  const pwrUpBtn = document.getElementById('pwrUpBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let voltage = 50; // 0 to 100%
  let stableTimer = 0;
  let requiredTime = 12 * 60; // 12 seconds @ 60fps
  let shields = 3;
  let invulnTimer = 0;

  // Magnetic Core Object
  const core = {
    x: 500,
    y: 300,
    vy: 0,
    radius: 16
  };

  const chamber = {
    topCoilY: 100,
    bottomCoilY: 500,
    targetY: 300,
    targetRange: 75
  };

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

    voltage = 50;
    stableTimer = 0;
    requiredTime = (10 + (lvl % 5)) * 60;
    shields = 3;
    invulnTimer = 90; // invulnerable grace on spawn

    core.x = 500;
    core.y = 300;
    core.vy = 0;

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    const sec = (stableTimer / 60).toFixed(1);
    const reqSec = (requiredTime / 60).toFixed(0);
    stableVal.textContent = sec + ' / ' + reqSec + ' SEC';
    stableVal.style.color = stableTimer > 0 ? '#39ff14' : '#00f0ff';
    shieldVal.textContent = shields + ' SHIELDS';
    shieldVal.style.color = shields > 1 ? '#00ff88' : '#ff3d00';
    voltageVal.textContent = Math.round(voltage) + '% FLUX';
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      voltage = Math.min(100, voltage + 3);
      window.soundFX.playHum(voltage);
      updateHUD();
    }
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      voltage = Math.max(0, voltage - 3);
      window.soundFX.playHum(voltage);
      updateHUD();
    }
  });

  pwrUpBtn.onclick = () => { voltage = Math.min(100, voltage + 4); window.soundFX.playHum(voltage); updateHUD(); };
  pwrDownBtn.onclick = () => { voltage = Math.max(0, voltage - 4); window.soundFX.playHum(voltage); updateHUD(); };

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
      const a = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 4;
      particles.push({
        x, y,
        vx: Math.cos(a) * spd,
        vy: Math.sin(a) * spd,
        life: 1,
        decay: 0.04,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (invulnTimer > 0) invulnTimer--;

    // Magnetic force: Top coil pulls upward proportional to voltage
    const topPull = (voltage / 50) * 0.38;
    const gravity = 0.36;
    const turbulence = (Math.sin(Date.now() * 0.005) * 0.08);

    core.vy += (gravity - topPull + turbulence);
    core.vy *= 0.97; // air resistance damping
    core.y += core.vy;

    // Boundary check with coils
    if (core.y - core.radius <= chamber.topCoilY + 15 || core.y + core.radius >= chamber.bottomCoilY - 15) {
      if (invulnTimer <= 0) {
        shields--;
        invulnTimer = 60; // invulnerable grace period
        window.soundFX.playSpark();
        spawnParticles(core.x, core.y, '#ff1744');
        updateHUD();

        if (shields <= 0) {
          isGameOver = true;
          overlayTitle.textContent = "CORE DISCHARGE FAILURE";
          overlayDesc.textContent = "The quantum core touched electromagnetic coils and discharged completely. Retry chamber!";
          overlay.style.display = 'flex';
        } else {
          // Re-center core
          core.y = chamber.targetY;
          core.vy = 0;
        }
      }
    }

    // Equilibrium target zone check
    if (Math.abs(core.y - chamber.targetY) < chamber.targetRange) {
      stableTimer++;
      updateHUD();
      if (stableTimer >= requiredTime) {
        isVictory = true;
        window.soundFX.playClear();
        overlayTitle.textContent = "CHAMBER " + currentLevel + " STABILIZED!";
        overlayDesc.textContent = "Core equilibrium successfully maintained for required duration! Proceed to next chamber.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }
    } else {
      if (stableTimer > 0) stableTimer = Math.max(0, stableTimer - 2);
      updateHUD();
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

    // Draw Top Coil
    ctx.fillStyle = '#263238';
    ctx.fillRect(350, chamber.topCoilY - 40, 300, 40);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(350, chamber.topCoilY - 40, 300, 40);

    // Draw Bottom Coil
    ctx.fillStyle = '#263238';
    ctx.fillRect(350, chamber.bottomCoilY, 300, 40);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 4;
    ctx.strokeRect(350, chamber.bottomCoilY, 300, 40);

    // Target Equilibrium Zone
    ctx.fillStyle = 'rgba(0, 255, 136, 0.08)';
    ctx.fillRect(360, chamber.targetY - chamber.targetRange, 280, chamber.targetRange * 2);
    ctx.strokeStyle = 'rgba(0, 255, 136, 0.3)';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 6]);
    ctx.strokeRect(360, chamber.targetY - chamber.targetRange, 280, chamber.targetRange * 2);
    ctx.setLineDash([]);

    // Magnetic Flux Field Lines
    ctx.strokeStyle = activeTheme.accent + '22';
    ctx.lineWidth = 2;
    for (let x = 400; x <= 600; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, chamber.topCoilY);
      ctx.lineTo(x, chamber.bottomCoilY);
      ctx.stroke();
    }

    // Draw Magnetic Core
    ctx.save();
    ctx.translate(core.x, core.y);
    if (invulnTimer > 0 && Math.floor(invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    ctx.beginPath();
    ctx.arc(0, 0, core.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffd600';
    ctx.shadowColor = activeTheme.accent;
    ctx.shadowBlur = 18;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();

    if (shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, core.radius + 6, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

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