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
  const volumeVal = document.getElementById('volumeVal');
  const shieldVal = document.getElementById('shieldVal');
  const paddlesVal = document.getElementById('paddlesVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const streamBtn = document.getElementById('streamBtn');
  const clearPaddlesBtn = document.getElementById('clearPaddlesBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let streamActive = true;
  let filledVolume = 0;
  let targetVolume = 60;
  let maxPaddles = 4;
  let particles = [];
  let paddles = [];
  let isDrawingPaddle = false;
  let paddleStart = { x: 0, y: 0 };
  let paddleCurrent = { x: 0, y: 0 };

  // Emitter Nozzle
  const nozzle = { x: 250, y: 60 };

  // Collection Flask
  const flask = {
    x: 750,
    y: 480,
    w: 90,
    h: 80
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

    filledVolume = 0;
    targetVolume = 50 + (lvl % 5) * 5;
    maxPaddles = 3 + (lvl % 2);
    streamActive = true;
    particles = [];
    paddles = [];

    // Reposition flask based on level
    const seed = lvl * 27;
    flask.x = 650 + (seed % 150);
    flask.y = 450;

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    volumeVal.textContent = filledVolume + ' / ' + targetVolume + ' ML';
    volumeVal.style.color = filledVolume >= targetVolume ? '#39ff14' : '#00f0ff';
    paddlesVal.textContent = (maxPaddles - paddles.length) + ' PADDLES';
    paddlesVal.style.color = (maxPaddles - paddles.length) > 0 ? '#ffd600' : '#ff1744';
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
    if (!isPlaying || paddles.length >= maxPaddles) return;
    isDrawingPaddle = true;
    paddleStart = getCanvasPos(e);
    paddleCurrent = paddleStart;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDrawingPaddle) return;
    paddleCurrent = getCanvasPos(e);
  });

  window.addEventListener('mouseup', () => {
    if (!isDrawingPaddle) return;
    isDrawingPaddle = false;
    const len = Math.hypot(paddleCurrent.x - paddleStart.x, paddleCurrent.y - paddleStart.y);
    if (len > 30) {
      paddles.push({
        x1: paddleStart.x,
        y1: paddleStart.y,
        x2: paddleCurrent.x,
        y2: paddleCurrent.y
      });
      updateHUD();
    }
  });

  streamBtn.onclick = () => streamActive = !streamActive;
  clearPaddlesBtn.onclick = () => {
    paddles = [];
    updateHUD();
  };

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

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    // Emit fluid particles
    if (streamActive && particles.length < 150) {
      particles.push({
        x: nozzle.x + Math.random() * 8 - 4,
        y: nozzle.y,
        vx: Math.random() * 0.8 - 0.4,
        vy: 3.5 + Math.random(),
        radius: 4,
        invulnTimer: 45
      });
    }

    // Update Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      if (p.invulnTimer > 0) p.invulnTimer--;

      p.vy += 0.22; // gravity
      p.x += p.vx;
      p.y += p.vy;

      // Deflector paddle collisions
      paddles.forEach(pad => {
        const ldx = pad.x2 - pad.x1;
        const ldy = pad.y2 - pad.y1;
        const len = Math.hypot(ldx, ldy);
        const u = Math.max(0, Math.min(1, ((p.x - pad.x1) * ldx + (p.y - pad.y1) * ldy) / (len * len)));
        const nearX = pad.x1 + u * ldx;
        const nearY = pad.y1 + u * ldy;
        const dist = Math.hypot(p.x - nearX, p.y - nearY);

        if (dist < p.radius + 6) {
          // Bounce off normal
          const nx = -(pad.y2 - pad.y1) / len;
          const ny = (pad.x2 - pad.x1) / len;
          const dot = p.vx * nx + p.vy * ny;
          p.vx = (p.vx - 1.8 * dot * nx) * 0.85;
          p.vy = (p.vy - 1.8 * dot * ny) * 0.85;
          p.x = nearX + nx * (p.radius + 7);
          p.y = nearY + ny * (p.radius + 7);
          if (Math.random() < 0.15) window.soundFX.playDrop();
        }
      });

      // Check Flask collection
      if (p.x > flask.x && p.x < flask.x + flask.w && p.y > flask.y && p.y < flask.y + flask.h) {
        particles.splice(i, 1);
        filledVolume++;
        if (filledVolume % 5 === 0) window.soundFX.playFlaskFill();
        updateHUD();

        if (filledVolume >= targetVolume) {
          isVictory = true;
          window.soundFX.playClear();
          overlayTitle.textContent = "FLUID LAB " + currentLevel + " COMPLETE!";
          overlayDesc.textContent = "Chemical flask filled to required specification! Proceed to next fluid lab.";
          nextBtn.style.display = 'inline-block';
          overlay.style.display = 'flex';
          return;
        }
        continue;
      }

      // Out of screen bounds
      if (p.y > 600 || p.x < 0 || p.x > 1000) {
        particles.splice(i, 1);
      }
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

    // Draw Nozzle Emitter
    ctx.fillStyle = '#37474f';
    ctx.fillRect(nozzle.x - 16, nozzle.y - 40, 32, 40);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.strokeRect(nozzle.x - 16, nozzle.y - 40, 32, 40);

    // Draw Paddles
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    paddles.forEach(pad => {
      ctx.beginPath();
      ctx.moveTo(pad.x1, pad.y1);
      ctx.lineTo(pad.x2, pad.y2);
      ctx.stroke();
    });

    // Draw active drawing paddle preview
    if (isDrawingPaddle) {
      ctx.strokeStyle = '#ff007f';
      ctx.setLineDash([6, 6]);
      ctx.beginPath();
      ctx.moveTo(paddleStart.x, paddleStart.y);
      ctx.lineTo(paddleCurrent.x, paddleCurrent.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw Flask Container
    ctx.fillStyle = '#101626';
    ctx.fillRect(flask.x, flask.y, flask.w, flask.h);
    ctx.strokeStyle = activeTheme.secondary;
    ctx.lineWidth = 4;
    ctx.strokeRect(flask.x, flask.y, flask.w, flask.h);

    // Fill level
    const fillH = (filledVolume / targetVolume) * (flask.h - 6);
    ctx.fillStyle = activeTheme.primary;
    ctx.shadowColor = activeTheme.primary;
    ctx.shadowBlur = 12;
    ctx.fillRect(flask.x + 4, flask.y + flask.h - fillH - 4, flask.w - 8, fillH);
    ctx.shadowBlur = 0;

    // Flask graduation lines
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    for (let y = flask.y + 10; y < flask.y + flask.h - 10; y += 15) {
      ctx.beginPath();
      ctx.moveTo(flask.x + flask.w - 14, y);
      ctx.lineTo(flask.x + flask.w - 4, y);
      ctx.stroke();
    }

    // Draw Fluid Particles
    ctx.fillStyle = '#18ffff';
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
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