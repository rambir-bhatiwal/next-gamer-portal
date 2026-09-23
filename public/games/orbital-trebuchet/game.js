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
  const hitsVal = document.getElementById('hitsVal');
  const shellsVal = document.getElementById('shellsVal');
  const weightVal = document.getElementById('weightVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const weightDownBtn = document.getElementById('weightDownBtn');
  const weightUpBtn = document.getElementById('weightUpBtn');
  const launchBtn = document.getElementById('launchBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let shellsLeft = 3;
  let fortressHits = 0;
  let neededHits = 2;
  let counterweight = 85; // tons

  // Trebuchet Beam state
  const trebuchet = {
    x: 180,
    y: 360,
    beamAngle: 0.6,
    beamAngleVel: 0,
    isFiring: false
  };

  let activePayload = null;
  let fortress = { x: 780, y: 320, w: 90, h: 120, health: 100 };
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

    shellsLeft = 3;
    fortressHits = 0;
    neededHits = 1 + (lvl % 2);
    counterweight = 70 + (lvl * 2);

    trebuchet.beamAngle = 0.6;
    trebuchet.beamAngleVel = 0;
    trebuchet.isFiring = false;
    activePayload = null;

    fortress.x = 750 + ((lvl * 17) % 100);
    fortress.health = 100;

    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    hitsVal.textContent = fortressHits + ' / ' + neededHits + ' HITS';
    hitsVal.style.color = fortressHits >= neededHits ? '#39ff14' : '#00f0ff';
    shellsVal.textContent = shellsLeft + ' SHELLS';
    shellsVal.style.color = shellsLeft > 1 ? '#00ff88' : '#ff3d00';
    weightVal.textContent = counterweight + ' TONS';
  }

  function triggerTrebuchet() {
    if (trebuchet.isFiring || activePayload || shellsLeft <= 0) return;
    trebuchet.isFiring = true;
    trebuchet.beamAngle = 0.6;
    trebuchet.beamAngleVel = -0.05 * (counterweight / 75);
    shellsLeft--;
    window.soundFX.playRelease();
    updateHUD();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') {
      counterweight = Math.max(40, counterweight - 5);
      updateHUD();
    }
    if (e.code === 'KeyD' || e.code === 'ArrowRight') {
      counterweight = Math.min(180, counterweight + 5);
      updateHUD();
    }
    if (e.code === 'Space') {
      e.preventDefault();
      triggerTrebuchet();
    }
  });

  weightDownBtn.onclick = () => { counterweight = Math.max(40, counterweight - 5); updateHUD(); };
  weightUpBtn.onclick = () => { counterweight = Math.min(180, counterweight + 5); updateHUD(); };
  launchBtn.onclick = () => triggerTrebuchet();

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

  function spawnExplosion(x, y, color) {
    window.soundFX.playImpact();
    for (let i = 0; i < 24; i++) {
      const a = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 6;
      particles.push({
        x, y,
        vx: Math.cos(a) * spd,
        vy: Math.sin(a) * spd,
        life: 1,
        decay: 0.035,
        color
      });
    }
  }

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    // Trebuchet Beam Swing Physics
    if (trebuchet.isFiring) {
      trebuchet.beamAngleVel -= 0.008 * (counterweight / 75);
      trebuchet.beamAngle += trebuchet.beamAngleVel;

      // Release Payload at release pin angle
      if (trebuchet.beamAngle <= -0.55 && !activePayload) {
        const armLen = 95;
        const tipX = trebuchet.x + Math.cos(trebuchet.beamAngle) * armLen;
        const tipY = trebuchet.y + Math.sin(trebuchet.beamAngle) * armLen;
        const speed = Math.abs(trebuchet.beamAngleVel) * armLen * 0.9;

        activePayload = {
          x: tipX,
          y: tipY,
          vx: Math.cos(-0.7) * speed,
          vy: Math.sin(-0.7) * speed,
          radius: 9,
          invulnTimer: 45
        };
      }

      // Stop beam
      if (trebuchet.beamAngle <= -1.1) {
        trebuchet.beamAngle = -1.1;
        trebuchet.beamAngleVel = 0;
        trebuchet.isFiring = false;
      }
    }

    // Update active payload
    if (activePayload) {
      if (activePayload.invulnTimer > 0) activePayload.invulnTimer--;

      activePayload.vy += 0.25; // gravity
      activePayload.x += activePayload.vx;
      activePayload.y += activePayload.vy;

      // Check Fortress Hit
      if (activePayload.x > fortress.x && activePayload.x < fortress.x + fortress.w &&
          activePayload.y > fortress.y && activePayload.y < fortress.y + fortress.h) {
        fortressHits++;
        spawnExplosion(activePayload.x, activePayload.y, '#ffd600');
        activePayload = null;
        updateHUD();

        if (fortressHits >= neededHits) {
          isVictory = true;
          window.soundFX.playClear();
          overlayTitle.textContent = "SECTOR " + currentLevel + " OBLITERATED!";
          overlayDesc.textContent = "Hostile orbital bastion reduced to space rubble! Advance to next siege sector.";
          nextBtn.style.display = 'inline-block';
          overlay.style.display = 'flex';
          return;
        }
      }

      // Ground or Out of bounds hit
      if (activePayload && (activePayload.y > 480 || activePayload.x > 1050)) {
        spawnExplosion(activePayload.x, Math.min(480, activePayload.y), '#ff1744');
        activePayload = null;

        // Reset beam for next shell
        trebuchet.beamAngle = 0.6;

        if (fortressHits < neededHits && shellsLeft === 0) {
          isGameOver = true;
          overlayTitle.textContent = "PAYLOADS EXHAUSTED";
          overlayDesc.textContent = "All orbital trebuchet shells expended before destroying bastion. Adjust counterweight mass and retry!";
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

    // Surface Terrain Floor
    ctx.fillStyle = '#101626';
    ctx.fillRect(0, 480, 1000, 120);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 480, 1000, 120);

    // Trebuchet Frame Chassis
    ctx.strokeStyle = '#455a64';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(trebuchet.x - 35, 480);
    ctx.lineTo(trebuchet.x, trebuchet.y);
    ctx.lineTo(trebuchet.x + 35, 480);
    ctx.stroke();

    // Pivot Axle
    ctx.fillStyle = '#ffd600';
    ctx.beginPath();
    ctx.arc(trebuchet.x, trebuchet.y, 8, 0, Math.PI * 2);
    ctx.fill();

    // Rotating Arm & Counterweight
    ctx.save();
    ctx.translate(trebuchet.x, trebuchet.y);
    ctx.rotate(trebuchet.beamAngle);

    // Beam
    ctx.strokeStyle = activeTheme.secondary;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-45, 0); // counterweight side
    ctx.lineTo(95, 0);  // sling payload side
    ctx.stroke();

    // Counterweight Mass
    ctx.fillStyle = '#b71c1c';
    ctx.fillRect(-65, -15, 30, 30);
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 2;
    ctx.strokeRect(-65, -15, 30, 30);

    // Ready Payload in sling
    if (!activePayload && !trebuchet.isFiring && shellsLeft > 0) {
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(95, 0, 9, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Draw Fortress Bastion
    ctx.fillStyle = '#1b2838';
    ctx.fillRect(fortress.x, fortress.y, fortress.w, fortress.h);
    ctx.strokeStyle = '#ff1744';
    ctx.lineWidth = 3;
    ctx.strokeRect(fortress.x, fortress.y, fortress.w, fortress.h);
    ctx.fillStyle = '#ff1744';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('BASTION', fortress.x + 16, fortress.y + fortress.h / 2);

    // Draw Flying Payload
    if (activePayload) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(activePayload.x, activePayload.y, activePayload.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#00f0ff';
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