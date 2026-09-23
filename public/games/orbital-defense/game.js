/**
 * Orbital Defense: Sentinel - 45 Thematic Levels
 */
(function() {
  'use strict';

  const THEMES = [
  { id: 1, name: "Earth Orbital Alpha", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Mars Dust Plains", bg: "#160505", primary: "#ff5722", secondary: "#ff9800", accent: "#ffeb3b", text: "#fbe9e7" },
  { id: 3, name: "Titan Methane Ocean", bg: "#02120e", primary: "#00ffcc", secondary: "#00bcd4", accent: "#76ff03", text: "#e0f2f1" },
  { id: 4, name: "Europa Sub-Surface Core", bg: "#02121a", primary: "#80d8ff", secondary: "#00b0ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 5, name: "Venusian Acid Highlands", bg: "#140e02", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fff8e1" },
  { id: 6, name: "Jovian Magnetic Vortex", bg: "#0d0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 7, name: "Saturnian Ice Ring 7", bg: "#081017", primary: "#00e5ff", secondary: "#40c4ff", accent: "#b388ff", text: "#e0f7fa" },
  { id: 8, name: "Kuiper Belt Relay", bg: "#04050d", primary: "#5c6bc0", secondary: "#3f51b5", accent: "#00f0ff", text: "#e8eaf6" },
  { id: 9, name: "Solar Corona Outpost", bg: "#170a01", primary: "#ff6d00", secondary: "#ff3d00", accent: "#ffd600", text: "#fff3e0" },
  { id: 10, name: "Oort Cloud Perimeter", bg: "#03020a", primary: "#7c4dff", secondary: "#651fff", accent: "#ff4081", text: "#ede7f6" },
  { id: 11, name: "Proxima Centauri Foundry", bg: "#14010a", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 12, name: "Sirius A Thermal Forge", bg: "#021218", primary: "#00e5ff", secondary: "#00b0ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 13, name: "Orion Nebula Spire", bg: "#120317", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 14, name: "Cygnus X-1 Event Horizon", bg: "#05010a", primary: "#9575cd", secondary: "#512da8", accent: "#00f0ff", text: "#ede7f6" },
  { id: 15, name: "Tachyon Star Bridge", bg: "#0a0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 16, name: "Silicon Wafer Megacity", bg: "#061214", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Dark Matter Bastion", bg: "#020308", primary: "#7986cb", secondary: "#3949ab", accent: "#ff4081", text: "#e8eaf6" },
  { id: 18, name: "Antimatter Containment Hub", bg: "#170308", primary: "#ff1744", secondary: "#c51162", accent: "#00f0ff", text: "#ffebee" },
  { id: 19, name: "Emerald Nanite Colony", bg: "#021708", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 20, name: "Obsidian Deep Subnet", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 21, name: "Neutron Star Pulsar Hub", bg: "#0f0217", primary: "#e040fb", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 22, name: "Heliosphere Beacon", bg: "#170e02", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffff00", text: "#fff8e1" },
  { id: 23, name: "Cryo-Stasis Vault", bg: "#01121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e676", text: "#e1f5fe" },
  { id: 24, name: "Molten Magma Shelf", bg: "#170402", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 25, name: "Galactic Trade Nexus", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ffd600", text: "#e1f5fe" },
  { id: 26, name: "Asteroid Mining Belt V", bg: "#141103", primary: "#ffd600", secondary: "#ff9100", accent: "#ff3d00", text: "#fffde7" },
  { id: 27, name: "Quantum Supercluster", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 28, name: "Plasma Shield Line Alpha", bg: "#14010e", primary: "#ff007f", secondary: "#d50000", accent: "#00f0ff", text: "#ffebee" },
  { id: 29, name: "Hyper-Relay Terminal", bg: "#021217", primary: "#18ffff", secondary: "#00b0ff", accent: "#76ff03", text: "#e0f7fa" },
  { id: 30, name: "Starlight Dreadnought Yard", bg: "#090614", primary: "#b388ff", secondary: "#7c4dff", accent: "#ffd600", text: "#ede7f6" },
  { id: 31, name: "Supernova Remnant M-1", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 32, name: "Sub-Atomic Slalom Gate", bg: "#01140e", primary: "#00e676", secondary: "#1de9b6", accent: "#00f0ff", text: "#e8f5e9" },
  { id: 33, name: "Geothermal Power Basin", bg: "#160902", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffd600", text: "#fff3e0" },
  { id: 34, name: "Dark Nebula Veil", bg: "#04020a", primary: "#7e57c2", secondary: "#4527a0", accent: "#ea80fc", text: "#ede7f6" },
  { id: 35, name: "Solar Wind Sail Station", bg: "#170c01", primary: "#ffd600", secondary: "#ffab00", accent: "#ff3d00", text: "#fff8e1" },
  { id: 36, name: "Cyber-Bunker Quarantine", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 37, name: "Vaporwave Orbital Arcade", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 38, name: "Titanium Asteroid Bastion", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 39, name: "Phosphor Command Bunker", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 40, name: "Krypton Atmospheric Station", bg: "#021714", primary: "#26a69a", secondary: "#00897b", accent: "#80cbc4", text: "#e0f2f1" },
  { id: 41, name: "Quantum Horizon Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 42, name: "Singularity Defense Ring", bg: "#030208", primary: "#3f51b5", secondary: "#1a237e", accent: "#ff1744", text: "#e8eaf6" },
  { id: 43, name: "Bioluminescent Biosphere", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 44, name: "Tesseract Command Core", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Galactic Apex Citadel", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('defenseCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const scoreVal = document.getElementById('scoreVal');
  const shieldVal = document.getElementById('shieldVal');
  const empVal = document.getElementById('empVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const empBtn = document.getElementById('empBtn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let score = 0;
  let targetScore = 20;
  let shield = 100;
  let empReady = true;
  let turretAngle = 0;
  let invulnerable = 0; // human speed fair defense

  const planetRadius = 45;
  const orbitRadius = 75;

  let missiles = [];
  let meteors = [];
  let particles = [];
  let shockwaves = [];
  let stars = [];
  let spawnCooldown = 0;

  function initStars() {
    stars = [];
    for (let i = 0; i < 90; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2
      });
    }
  }
  initStars();

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentLevel ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        currentLevel = t.id;
        document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadLevel(currentLevel);
        overlay.style.display = 'none';
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    const theme = THEMES[(lvl - 1) % THEMES.length];
    targetScore = 15 + lvl;
    score = 0;
    shield = 100;
    empReady = true;
    missiles = [];
    meteors = [];
    particles = [];
    shockwaves = [];
    spawnCooldown = 60;
    invulnerable = 60;

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    scoreVal.textContent = '0 / ' + targetScore;
    shieldVal.textContent = '100%';
    shieldVal.style.color = '#00ff88';
    empVal.textContent = 'READY [E]';
    empVal.style.color = theme.primary;
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function triggerEmp() {
    if (!empReady || !isPlaying) return;
    empReady = false;
    empVal.textContent = 'RECHARGING...';
    empVal.style.color = '#78909c';
    if (window.soundEngine) window.soundEngine.playEmp();

    shockwaves.push({
      x: width / 2,
      y: height / 2,
      radius: orbitRadius,
      maxRadius: Math.max(width, height) * 0.7,
      color: THEMES[(currentLevel - 1) % THEMES.length].primary
    });

    meteors.forEach(m => {
      score++;
      createExplosion(m.x, m.y, m.color, 12);
    });
    meteors = [];
    scoreVal.textContent = score + ' / ' + targetScore;
    checkProgress();

    setTimeout(() => {
      empReady = true;
      empVal.textContent = 'READY [E]';
      empVal.style.color = THEMES[(currentLevel - 1) % THEMES.length].primary;
    }, 8000);
  }

  function fireMissile() {
    if (!isPlaying) return;
    const cx = width / 2;
    const cy = height / 2;
    const sx = cx + Math.cos(turretAngle) * orbitRadius;
    const sy = cy + Math.sin(turretAngle) * orbitRadius;
    const speed = 7.5;

    missiles.push({
      x: sx,
      y: sy,
      vx: Math.cos(turretAngle) * speed,
      vy: Math.sin(turretAngle) * speed,
      life: 90,
      color: THEMES[(currentLevel - 1) % THEMES.length].accent
    });
    if (window.soundEngine) window.soundEngine.playLaunch();
  }

  function createExplosion(x, y, color, count = 14) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 4.5 + 1;
      particles.push({
        x, y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 30,
        maxLife: 30,
        color
      });
    }
  }

  function spawnMeteor() {
    const angle = Math.random() * Math.PI * 2;
    const spawnDist = Math.max(width, height) * 0.65;
    const cx = width / 2;
    const cy = height / 2;
    const x = cx + Math.cos(angle) * spawnDist;
    const y = cy + Math.sin(angle) * spawnDist;

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const speed = 1.0 + Math.min(2.2, currentLevel * 0.04);
    const targetAngle = Math.atan2(cy - y, cx - x) + (Math.random() - 0.5) * 0.2;

    meteors.push({
      x, y,
      vx: Math.cos(targetAngle) * speed,
      vy: Math.sin(targetAngle) * speed,
      radius: Math.random() * 10 + 12,
      hp: Math.random() < 0.25 ? 2 : 1,
      color: Math.random() < 0.5 ? theme.secondary : theme.primary
    });
  }

  function checkProgress() {
    if (score >= targetScore) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'SECTOR SECURED!';
      overlayDesc.textContent = 'You have defended Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + '). Advance to the next celestial waypoint.';
      startBtn.textContent = 'COMMENCE NEXT SECTOR';
      overlay.style.display = 'flex';
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Starfield
    stars.forEach(s => {
      ctx.fillStyle = 'rgba(255, 255, 255, ' + s.alpha + ')';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    const cx = width / 2;
    const cy = height / 2;

    // Atmospheric halo
    const glow = ctx.createRadialGradient(cx, cy, planetRadius, cx, cy, orbitRadius + 40);
    glow.addColorStop(0, theme.primary + '33');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, orbitRadius + 40, 0, Math.PI * 2);
    ctx.fill();

    // Orbit Ring
    ctx.strokeStyle = theme.primary + '55';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.arc(cx, cy, orbitRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Central Planet
    const pGrad = ctx.createRadialGradient(cx - 10, cy - 10, 5, cx, cy, planetRadius);
    pGrad.addColorStop(0, theme.primary);
    pGrad.addColorStop(0.8, theme.secondary);
    pGrad.addColorStop(1, '#000000');
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, planetRadius, 0, Math.PI * 2);
    ctx.fill();

    // Planet details
    ctx.strokeStyle = theme.accent + '66';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, planetRadius - 6, 0, Math.PI * 2);
    ctx.stroke();

    // Defense Turret Station
    const tx = cx + Math.cos(turretAngle) * orbitRadius;
    const ty = cy + Math.sin(turretAngle) * orbitRadius;

    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(turretAngle);

    // Turret Base
    ctx.fillStyle = theme.accent;
    ctx.beginPath();
    ctx.arc(0, 0, 9, 0, Math.PI * 2);
    ctx.fill();

    // Turret Cannon
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(16, 0);
    ctx.stroke();
    ctx.restore();

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    // Spawning
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnMeteor();
      spawnCooldown = Math.max(35, 75 - currentLevel);
    }

    // Update & draw missiles
    for (let i = missiles.length - 1; i >= 0; i--) {
      const m = missiles[i];
      m.x += m.vx;
      m.y += m.vy;
      m.life--;

      ctx.fillStyle = m.color;
      ctx.beginPath();
      ctx.arc(m.x, m.y, 4, 0, Math.PI * 2);
      ctx.fill();

      if (m.life <= 0 || m.x < 0 || m.x > width || m.y < 0 || m.y > height) {
        missiles.splice(i, 1);
      }
    }

    // Update & draw shockwaves
    for (let i = shockwaves.length - 1; i >= 0; i--) {
      const sw = shockwaves[i];
      sw.radius += 12;
      ctx.strokeStyle = sw.color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.stroke();
      if (sw.radius >= sw.maxRadius) {
        shockwaves.splice(i, 1);
      }
    }

    // Update & draw meteors
    for (let i = meteors.length - 1; i >= 0; i--) {
      const met = meteors[i];
      met.x += met.vx;
      met.y += met.vy;

      ctx.fillStyle = met.color;
      ctx.beginPath();
      ctx.arc(met.x, met.y, met.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(met.x, met.y, met.radius * 0.6, 0, Math.PI * 2);
      ctx.stroke();

      // Check collision with missiles
      for (let j = missiles.length - 1; j >= 0; j--) {
        const mis = missiles[j];
        const dist = Math.hypot(met.x - mis.x, met.y - mis.y);
        if (dist < met.radius + 4) {
          missiles.splice(j, 1);
          met.hp--;
          if (window.soundEngine) window.soundEngine.playExplode();
          createExplosion(met.x, met.y, met.color, 12);
          if (met.hp <= 0) {
            meteors.splice(i, 1);
            score++;
            scoreVal.textContent = score + ' / ' + targetScore;
            checkProgress();
            break;
          }
        }
      }

      // Check collision with planet
      const distToPlanet = Math.hypot(met.x - cx, met.y - cy);
      if (distToPlanet < planetRadius + met.radius) {
        meteors.splice(i, 1);
        if (invulnerable <= 0) {
          shield = Math.max(0, shield - 18);
          shieldVal.textContent = shield + '%';
          shieldVal.style.color = shield > 50 ? '#00ff88' : (shield > 25 ? '#ffaa00' : '#ff1744');
          if (window.soundEngine) window.soundEngine.playHit();
          createExplosion(cx, cy, '#ff1744', 20);

          if (shield <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'PLANETARY DEFENSE COLLAPSED';
            overlayDesc.textContent = 'The planetary shield was breached in Sector ' + currentLevel + '. Recalibrate defense grid and retry.';
            startBtn.textContent = 'RETRY SECTOR ' + currentLevel;
            overlay.style.display = 'flex';
          }
        }
      }
    }

    // Update & draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      const alpha = p.life / p.maxLife;

      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;

      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  // Input Handling
  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    turretAngle = Math.atan2(my - height / 2, mx - width / 2);
  });

  window.addEventListener('mousedown', e => {
    if (e.target === canvas) {
      fireMissile();
    }
  });

  window.addEventListener('keydown', e => {
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      fireMissile();
    } else if (e.key === 'e' || e.key === 'E') {
      e.preventDefault();
      triggerEmp();
    } else if (e.key === 'ArrowLeft') {
      turretAngle -= 0.12;
    } else if (e.key === 'ArrowRight') {
      turretAngle += 0.12;
    }
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (score >= targetScore) {
      currentLevel = (currentLevel % THEMES.length) + 1;
    }
    loadLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = (currentLevel % THEMES.length) + 1;
    loadLevel(currentLevel);
  });

  restartBtn.addEventListener('click', () => {
    loadLevel(currentLevel);
  });

  empBtn.addEventListener('click', () => {
    triggerEmp();
  });

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'CELESTIAL SECTORS (1-45)';
    overlayDesc.textContent = 'Select any planetary orbit to defend with rotational turret batteries:';
    startBtn.textContent = 'RESUME DEFENSE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();