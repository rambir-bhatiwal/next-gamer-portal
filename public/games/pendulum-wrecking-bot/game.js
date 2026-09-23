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
  const rubbleVal = document.getElementById('rubbleVal');
  const swingsVal = document.getElementById('swingsVal');
  const impulseVal = document.getElementById('impulseVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const shortenBtn = document.getElementById('shortenBtn');
  const lengthenBtn = document.getElementById('lengthenBtn');
  const releaseBtn = document.getElementById('releaseBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let swingsLeft = 4;
  let destroyedBlocks = 0;
  let totalBlocks = 12;

  // Pendulum setup
  const pivot = { x: 300, y: 70 };
  let cableLength = 260;
  let angle = -1.2; // initial release angle
  let angleVel = 0;
  let isSwinging = false;

  let blocks = [];
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

    swingsLeft = 4;
    destroyedBlocks = 0;
    isSwinging = false;
    cableLength = 260;
    angle = -1.2;
    angleVel = 0;

    // Build tower of blocks
    blocks = [];
    const rows = 4 + (lvl % 3);
    const cols = 3;
    totalBlocks = rows * cols;
    const startX = 600;
    const startY = 480;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        blocks.push({
          x: startX + c * 38,
          y: startY - r * 38,
          w: 34,
          h: 34,
          vx: 0,
          vy: 0,
          destroyed: false
        });
      }
    }

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    const pct = Math.round((destroyedBlocks / totalBlocks) * 100);
    rubbleVal.textContent = pct + '% / 70% SMASHED';
    rubbleVal.style.color = pct >= 70 ? '#39ff14' : '#00f0ff';
    swingsVal.textContent = swingsLeft + ' SWINGS';
    swingsVal.style.color = swingsLeft > 1 ? '#00ff88' : '#ff3d00';
  }

  function releasePendulum() {
    if (isSwinging || swingsLeft <= 0) return;
    isSwinging = true;
    swingsLeft--;
    angle = -1.35;
    angleVel = 0;
    updateHUD();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') {
      cableLength = Math.max(160, cableLength - 8);
      window.soundFX.playWinch();
    }
    if (e.code === 'KeyS' || e.code === 'ArrowDown') {
      cableLength = Math.min(320, cableLength + 8);
      window.soundFX.playWinch();
    }
    if (e.code === 'Space') {
      e.preventDefault();
      releasePendulum();
    }
  });

  shortenBtn.onclick = () => { cableLength = Math.max(160, cableLength - 8); window.soundFX.playWinch(); };
  lengthenBtn.onclick = () => { cableLength = Math.min(320, cableLength + 8); window.soundFX.playWinch(); };
  releaseBtn.onclick = () => releasePendulum();

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
    for (let i = 0; i < 14; i++) {
      const spd = 2 + Math.random() * 5;
      const a = Math.random() * Math.PI * 2;
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

    // Harmonic Pendulum equation: theta'' = -(g / L) * sin(theta) - damping * theta'
    if (isSwinging) {
      const g = 9.8;
      const damping = 0.003;
      const angleAcc = -(g / cableLength) * Math.sin(angle) - damping * angleVel;
      angleVel += angleAcc;
      angle += angleVel;

      const ballX = pivot.x + Math.sin(angle) * cableLength;
      const ballY = pivot.y + Math.cos(angle) * cableLength;
      const ballRadius = 26;

      impulseVal.textContent = Math.round(Math.abs(angleVel) * 1500) + ' KN';

      // Check block collisions
      blocks.forEach(b => {
        if (!b.destroyed) {
          const dist = Math.hypot(ballX - (b.x + b.w / 2), ballY - (b.y + b.h / 2));
          if (dist < ballRadius + 18) {
            b.destroyed = true;
            destroyedBlocks++;
            window.soundFX.playImpact();
            spawnParticles(b.x + b.w / 2, b.y + b.h / 2, activeTheme.accent);
            updateHUD();

            // Win condition (70% destroyed)
            if ((destroyedBlocks / totalBlocks) >= 0.70) {
              isVictory = true;
              window.soundFX.playClear();
              overlayTitle.textContent = "SITE " + currentLevel + " DEMOLISHED!";
              overlayDesc.textContent = "Over 70% of server structures pulverized! Advance to next demolition site.";
              nextBtn.style.display = 'inline-block';
              overlay.style.display = 'flex';
            }
          }
        }
      });

      // Stop swing after energy dissipates
      if (Math.abs(angleVel) < 0.005 && Math.abs(angle) < 0.05) {
        isSwinging = false;
        angle = -1.2;
        angleVel = 0;
        if ((destroyedBlocks / totalBlocks) < 0.70 && swingsLeft === 0) {
          isGameOver = true;
          overlayTitle.textContent = "SWINGS EXHAUSTED";
          overlayDesc.textContent = "Failed to smash 70% of server towers. Adjust cable length and release timing!";
          overlay.style.display = 'flex';
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

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Ground Floor
    ctx.fillStyle = '#101626';
    ctx.fillRect(0, 514, 1000, 90);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 514, 1000, 90);

    // Pivot mount
    ctx.fillStyle = '#37474f';
    ctx.beginPath();
    ctx.arc(pivot.x, pivot.y, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Pendulum Ball & Cable
    const ballX = pivot.x + Math.sin(angle) * cableLength;
    const ballY = pivot.y + Math.cos(angle) * cableLength;

    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pivot.x, pivot.y);
    ctx.lineTo(ballX, ballY);
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    ctx.arc(ballX, ballY, 26, 0, Math.PI * 2);
    ctx.fillStyle = '#263238';
    ctx.shadowColor = '#ff007f';
    ctx.shadowBlur = 14;
    ctx.fill();
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    // Draw Blocks
    blocks.forEach(b => {
      if (!b.destroyed) {
        ctx.fillStyle = '#152238';
        ctx.fillRect(b.x, b.y, b.w, b.h);
        ctx.strokeStyle = activeTheme.primary;
        ctx.lineWidth = 2;
        ctx.strokeRect(b.x, b.y, b.w, b.h);
        // Server blinker light
        ctx.fillStyle = '#39ff14';
        ctx.fillRect(b.x + 4, b.y + 4, 6, 6);
      }
    });

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