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
  const windVal = document.getElementById('windVal');
  const shieldVal = document.getElementById('shieldVal');
  const enemyVal = document.getElementById('enemyVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const aimUpBtn = document.getElementById('aimUpBtn');
  const aimDownBtn = document.getElementById('aimDownBtn');
  const powerDownBtn = document.getElementById('powerDownBtn');
  const powerUpBtn = document.getElementById('powerUpBtn');
  const fireBtn = document.getElementById('fireBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let wind = 0; // -0.05 to +0.05 horizontal acceleration
  const GRAVITY = 0.24;

  // Player tank
  const player = {
    x: 140,
    y: 350,
    angle: -0.65, // radians
    power: 14,
    shields: 3,
    invulnTimer: 0
  };

  // Enemy tank
  const enemy = {
    x: 820,
    y: 350,
    angle: Math.PI + 0.65,
    power: 14,
    health: 100
  };

  let activeShell = null;
  let enemyTurnTimer = 0;
  let terrainHeights = [];
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

  function generateTerrain(lvl) {
    terrainHeights = new Array(1000);
    const baseHeight = 380;
    const seed = lvl * 23;
    for (let x = 0; x < 1000; x++) {
      const hill1 = Math.sin((x + seed) * 0.008) * 60;
      const hill2 = Math.cos((x * 2 + seed) * 0.015) * 35;
      terrainHeights[x] = baseHeight + hill1 + hill2;
    }
    // Level ground at player and enemy positions
    const pY = terrainHeights[player.x];
    for (let x = player.x - 30; x <= player.x + 30; x++) terrainHeights[x] = pY;
    const eY = terrainHeights[enemy.x];
    for (let x = enemy.x - 30; x <= enemy.x + 30; x++) terrainHeights[x] = eY;

    player.y = pY;
    enemy.y = eY;
  }

  function carveCrater(cx, cy, radius) {
    const minX = Math.max(0, Math.floor(cx - radius));
    const maxX = Math.min(999, Math.floor(cx + radius));
    for (let x = minX; x <= maxX; x++) {
      const dx = x - cx;
      const dy = Math.sqrt(Math.max(0, radius * radius - dx * dx));
      terrainHeights[x] = Math.max(terrainHeights[x], cy + dy);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    wind = (Math.sin(lvl * 11) * 0.04);
    player.x = 140;
    player.angle = -0.65;
    player.power = 14;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace period on spawn

    enemy.x = 820;
    enemy.health = 100;
    enemy.power = 13 + (lvl % 5);

    activeShell = null;
    enemyTurnTimer = 0;

    generateTerrain(lvl);
    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    windVal.textContent = (wind * 100).toFixed(1) + ' M/S ' + (wind >= 0 ? '>' : '<');
    windVal.style.color = wind >= 0 ? '#39ff14' : '#ff007f';
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    enemyVal.textContent = Math.max(0, enemy.health) + '% ARMOR';
    enemyVal.style.color = enemy.health > 40 ? '#ff1744' : '#ffd600';
  }

  function firePlayerShell() {
    if (activeShell || enemyTurnTimer > 0) return;
    const barrelLen = 32;
    const startX = player.x + Math.cos(player.angle) * barrelLen;
    const startY = player.y - 12 + Math.sin(player.angle) * barrelLen;

    activeShell = {
      x: startX,
      y: startY,
      vx: Math.cos(player.angle) * player.power,
      vy: Math.sin(player.angle) * player.power,
      isPlayer: true,
      radius: 5
    };
    window.soundFX.playCannon();
  }

  function fireEnemyShell() {
    const barrelLen = 32;
    const startX = enemy.x + Math.cos(enemy.angle) * barrelLen;
    const startY = enemy.y - 12 + Math.sin(enemy.angle) * barrelLen;

    // AI calculates trajectory
    const dx = player.x - enemy.x;
    const aimAngle = Math.PI - 0.75 + (Math.random() * 0.1 - 0.05);
    enemy.angle = aimAngle;
    const aiPower = 14 + (Math.random() * 2 - 1);

    activeShell = {
      x: startX,
      y: startY,
      vx: Math.cos(enemy.angle) * aiPower,
      vy: Math.sin(enemy.angle) * aiPower,
      isPlayer: false,
      radius: 5
    };
    window.soundFX.playCannon();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Key controls
  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW' || e.code === 'ArrowUp') player.angle = Math.max(-1.4, player.angle - 0.05);
    if (e.code === 'KeyS' || e.code === 'ArrowDown') player.angle = Math.min(-0.1, player.angle + 0.05);
    if (e.code === 'KeyA' || e.code === 'ArrowLeft') player.power = Math.max(6, player.power - 0.5);
    if (e.code === 'KeyD' || e.code === 'ArrowRight') player.power = Math.min(22, player.power + 0.5);
    if (e.code === 'Space') {
      e.preventDefault();
      firePlayerShell();
    }
  });

  aimUpBtn.onclick = () => player.angle = Math.max(-1.4, player.angle - 0.05);
  aimDownBtn.onclick = () => player.angle = Math.min(-0.1, player.angle + 0.05);
  powerDownBtn.onclick = () => player.power = Math.max(6, player.power - 0.5);
  powerUpBtn.onclick = () => player.power = Math.min(22, player.power + 0.5);
  fireBtn.onclick = () => firePlayerShell();

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
    window.soundFX.playExplosion();
    carveCrater(x, y, 28);
    for (let i = 0; i < 24; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = 2 + Math.random() * 6;
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

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Update active artillery shell
    if (activeShell) {
      activeShell.vx += wind;
      activeShell.vy += GRAVITY;
      activeShell.x += activeShell.vx;
      activeShell.y += activeShell.vy;

      // Check Enemy Tank Hit
      if (activeShell.isPlayer) {
        const distToEnemy = Math.hypot(activeShell.x - enemy.x, activeShell.y - (enemy.y - 10));
        if (distToEnemy < 28) {
          enemy.health -= 50;
          spawnExplosion(activeShell.x, activeShell.y, '#ffd600');
          activeShell = null;
          updateHUD();

          if (enemy.health <= 0) {
            isVictory = true;
            window.soundFX.playClear();
            overlayTitle.textContent = "BATTLEGROUND " + currentLevel + " LIBERATED!";
            overlayDesc.textContent = "Hostile artillery battery pulverized! Advance to next combat sector.";
            nextBtn.style.display = 'inline-block';
            overlay.style.display = 'flex';
            return;
          }
          // Shift wind
          wind = (Math.random() * 0.08 - 0.04);
          enemyTurnTimer = 60;
          return;
        }
      } else {
        // Enemy Shell check Player Hit
        const distToPlayer = Math.hypot(activeShell.x - player.x, activeShell.y - (player.y - 10));
        if (distToPlayer < 28) {
          if (player.invulnTimer <= 0) {
            player.shields--;
            player.invulnTimer = 60; // invulnerable grace period
            updateHUD();
            if (player.shields <= 0) {
              isGameOver = true;
              overlayTitle.textContent = "TANK DESTROYED";
              overlayDesc.textContent = "Enemy counter-battery fire pierced your hull armor. Calibrate your trajectory and retry!";
              overlay.style.display = 'flex';
            }
          }
          spawnExplosion(activeShell.x, activeShell.y, '#ff1744');
          activeShell = null;
          wind = (Math.random() * 0.08 - 0.04);
          return;
        }
      }

      // Check Terrain Hit
      const curX = Math.floor(activeShell.x);
      if (curX >= 0 && curX < 1000) {
        if (activeShell.y >= terrainHeights[curX]) {
          spawnExplosion(activeShell.x, activeShell.y, activeTheme.accent);
          const wasPlayer = activeShell.isPlayer;
          activeShell = null;
          if (wasPlayer) {
            enemyTurnTimer = 60;
          }
        }
      } else if (activeShell.y > 600) {
        activeShell = null;
      }
    }

    // AI Counter-Attack Timer
    if (enemyTurnTimer > 0) {
      enemyTurnTimer--;
      if (enemyTurnTimer === 0 && !isGameOver && !isVictory) {
        fireEnemyShell();
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

    // Draw Terrain
    ctx.fillStyle = '#151e2e';
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 600);
    for (let x = 0; x < 1000; x++) {
      ctx.lineTo(x, terrainHeights[x]);
    }
    ctx.lineTo(1000, 600);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw Player Tank
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    // Turret Barrel
    ctx.save();
    ctx.translate(0, -12);
    ctx.rotate(player.angle);
    ctx.fillStyle = activeTheme.primary;
    ctx.fillRect(0, -4, 32, 8);
    ctx.restore();

    // Hull & Treads
    ctx.fillStyle = '#263238';
    ctx.fillRect(-22, -14, 44, 16);
    ctx.fillStyle = '#111';
    ctx.fillRect(-26, 0, 52, 10);
    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 2;
    ctx.strokeRect(-22, -14, 44, 16);

    // Shield Aura
    if (player.shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.strokeRect(-30, -20, 60, 32);
    }
    ctx.restore();

    // Draw Enemy Tank
    ctx.save();
    ctx.translate(enemy.x, enemy.y);
    // Turret Barrel
    ctx.save();
    ctx.translate(0, -12);
    ctx.rotate(enemy.angle);
    ctx.fillStyle = '#ff1744';
    ctx.fillRect(0, -4, 32, 8);
    ctx.restore();

    // Hull & Treads
    ctx.fillStyle = '#3e2723';
    ctx.fillRect(-22, -14, 44, 16);
    ctx.fillStyle = '#111';
    ctx.fillRect(-26, 0, 52, 10);
    ctx.strokeStyle = '#ff1744';
    ctx.lineWidth = 2;
    ctx.strokeRect(-22, -14, 44, 16);
    ctx.restore();

    // Draw Active Shell
    if (activeShell) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(activeShell.x, activeShell.y, activeShell.radius, 0, Math.PI * 2);
      ctx.fillStyle = activeShell.isPlayer ? '#00f0ff' : '#ff1744';
      ctx.shadowColor = ctx.fillStyle;
      ctx.shadowBlur = 12;
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