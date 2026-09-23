/**
 * Skyward Spire: Endless Cyber Ascender - 45 Thematic Levels
 */
(function() {
  'use strict';

  const THEMES = [
  { id: 1, name: "Neon Cyber-Grid", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Bioluminescent Crystal Cave", bg: "#02120e", primary: "#00ffcc", secondary: "#0099ff", accent: "#76ff03", text: "#e0f2f1" },
  { id: 3, name: "Molten Core", bg: "#160303", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 4, name: "Clockwork Sky-Fortress", bg: "#120e06", primary: "#ffd700", secondary: "#d4af37", accent: "#ff8c00", text: "#fff8e1" },
  { id: 5, name: "Quantum Void", bg: "#05010d", primary: "#b388ff", secondary: "#7c4dff", accent: "#ea80fc", text: "#ede7f6" },
  { id: 6, name: "Submerged Hydro-Lab", bg: "#010e1a", primary: "#00b0ff", secondary: "#00e5ff", accent: "#1de9b6", text: "#e1f5fe" },
  { id: 7, name: "Solar Flare Wasteland", bg: "#170a01", primary: "#ff6d00", secondary: "#ffab00", accent: "#ffd600", text: "#fff3e0" },
  { id: 8, name: "Emerald Nanite Spire", bg: "#021609", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 9, name: "Frozen Cryo-Tundra", bg: "#02121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 10, name: "Gravity Inversion Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 11, name: "Dark Matter Singularity", bg: "#030308", primary: "#7986cb", secondary: "#3f51b5", accent: "#ff4081", text: "#e8eaf6" },
  { id: 12, name: "Antimatter Reactor", bg: "#14010e", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 13, name: "Prismatic Aurora", bg: "#011210", primary: "#1de9b6", secondary: "#00bfa5", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 14, name: "Tachyon Warp Conduit", bg: "#0e0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 15, name: "Supernova Nebula", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 16, name: "Silicon Wafer Cleanroom", bg: "#081014", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 17, name: "Vaporwave Sunset Highway", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 18, name: "Radioactive Fallout Vault", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 19, name: "Obsidian Hex Matrix", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 20, name: "Cyber-Gothic Cathedral", bg: "#0d020d", primary: "#ea80fc", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 21, name: "Plasma Discharge Canal", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 22, name: "Golden Asteroid Belt", bg: "#141103", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fffde7" },
  { id: 23, name: "Krypton Laser Array", bg: "#011409", primary: "#00e676", secondary: "#1de9b6", accent: "#ff007f", text: "#e8f5e9" },
  { id: 24, name: "Acid Rain Megacity", bg: "#070c0c", primary: "#64ffda", secondary: "#1de9b6", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 25, name: "Cobalt Deep Subnet", bg: "#01071c", primary: "#2979ff", secondary: "#2962ff", accent: "#00e5ff", text: "#e3f2fd" },
  { id: 26, name: "Crimson Sector 9", bg: "#1c0206", primary: "#ff1744", secondary: "#f50057", accent: "#ff9100", text: "#ffebee" },
  { id: 27, name: "Galactic Star Forge", bg: "#0b051c", primary: "#7c4dff", secondary: "#651fff", accent: "#ffd600", text: "#ede7f6" },
  { id: 28, name: "Hyper-Space Monolith", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ff4081", text: "#e1f5fe" },
  { id: 29, name: "Bio-Synthetic Jungle", bg: "#02170a", primary: "#00c853", secondary: "#64dd17", accent: "#ffea00", text: "#e8f5e9" },
  { id: 30, name: "Volcanic Basalt Shelf", bg: "#170404", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 31, name: "Starlight Ionosphere", bg: "#06091c", primary: "#448aff", secondary: "#2979ff", accent: "#e040fb", text: "#e8eaf6" },
  { id: 32, name: "Amber CRT Mainframe", bg: "#140a00", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffd600", text: "#fff8e1" },
  { id: 33, name: "Phosphor Terminal 1978", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 34, name: "Titanium Orbital Dock", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 35, name: "Superconductor Loop", bg: "#03101c", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ff4081", text: "#e1f5fe" },
  { id: 36, name: "Magnetic Flux Funnel", bg: "#10031c", primary: "#b388ff", secondary: "#7c4dff", accent: "#00e676", text: "#ede7f6" },
  { id: 37, name: "Photon Wave Chamber", bg: "#021217", primary: "#18ffff", secondary: "#00e5ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 38, name: "Neutron Star Horizon", bg: "#0c0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 39, name: "Helios Solar Sail", bg: "#170c01", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 40, name: "Cryo-Containment Ring", bg: "#01121a", primary: "#80d8ff", secondary: "#0091ea", accent: "#69f0ae", text: "#e1f5fe" },
  { id: 41, name: "Cyber-Zen Sanctuary", bg: "#080210", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 42, name: "Nanoscale Bio-Chip", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 43, name: "Dark Energy Singularity", bg: "#020208", primary: "#5c6bc0", secondary: "#3949ab", accent: "#ff1744", text: "#e8eaf6" },
  { id: 44, name: "Tesseract Hyperspace", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Quantum Singularity Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const heightVal = document.getElementById('heightVal');
  const shieldVal = document.getElementById('shieldVal');
  const boostVal = document.getElementById('boostVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const boostBtn = document.getElementById('boostBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let climbHeight = 0;
  const targetHeight = 1200;
  let shields = 3;
  let boostCooldown = 0;
  let invulnerable = 0;

  const player = {
    x: 0,
    y: 0,
    w: 24,
    h: 28,
    vx: 0,
    vy: 0
  };

  let platforms = [];
  let particles = [];
  const keys = {};

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
    climbHeight = 0;
    shields = 3;
    boostCooldown = 0;
    invulnerable = 60;
    particles = [];
    platforms = [];

    player.x = width / 2;
    player.y = height * 0.7;
    player.vx = 0;
    player.vy = -8;

    // Generate vertical platform ladder
    const platCount = 12;
    for (let i = 0; i < platCount; i++) {
      platforms.push({
        x: Math.random() * (width - 120) + 40,
        y: height - (i * 65) - 40,
        w: 90,
        h: 14,
        isMoving: Math.random() < 0.3,
        dir: Math.random() < 0.5 ? 1 : -1
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    heightVal.textContent = '0 / ' + targetHeight + 'm';
    shieldVal.textContent = '3 SHIELDS';
    shieldVal.style.color = '#00ff88';
    boostVal.textContent = 'READY';
    boostVal.style.color = '#ffd600';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function triggerBoost() {
    if (!isPlaying || boostCooldown > 0) return;
    player.vy = -14;
    boostCooldown = 90;
    boostVal.textContent = 'CHARGING';
    boostVal.style.color = '#78909c';
    if (window.soundEngine) window.soundEngine.playBoost();
    createExplosion(player.x + player.w / 2, player.y + player.h, '#ffd600', 15);
  }

  function createExplosion(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 3.5 + 1;
      particles.push({
        x, y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 25,
        maxLife: 25,
        color
      });
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw Spire Scaffolding
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 60; x < width; x += 100) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw Platforms
    platforms.forEach(p => {
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
    });

    if (!isPlaying) return;

    if (invulnerable > 0) invulnerable--;

    if (boostCooldown > 0) {
      boostCooldown--;
      if (boostCooldown === 0) {
        boostVal.textContent = 'READY';
        boostVal.style.color = '#ffd600';
      }
    }

    // Input Movement
    if (keys['ArrowLeft'] || keys['KeyA']) player.vx -= 0.7;
    if (keys['ArrowRight'] || keys['KeyD']) player.vx += 0.7;

    // Gravity
    player.vy += 0.42;
    player.x += player.vx;
    player.y += player.vy;
    player.vx *= 0.88;

    // Wrap screen sides
    if (player.x < -player.w) player.x = width;
    if (player.x > width) player.x = -player.w;

    // Scroll Camera Upwards when player ascends above mid-screen
    if (player.y < height * 0.4) {
      const diff = (height * 0.4) - player.y;
      player.y = height * 0.4;
      climbHeight += diff * 0.5;
      heightVal.textContent = Math.floor(climbHeight) + ' / ' + targetHeight + 'm';

      // Move platforms down
      platforms.forEach(p => {
        p.y += diff;
        if (p.y > height) {
          p.y = 0;
          p.x = Math.random() * (width - 120) + 40;
        }
      });

      if (climbHeight >= targetHeight) {
        isPlaying = false;
        if (window.soundEngine) window.soundEngine.playWin();
        nextBtn.style.display = 'inline-block';
        overlayTitle.textContent = 'SUMMIT REACHED!';
        overlayDesc.textContent = 'You scaled Altitude Sector ' + currentLevel + ' (' + theme.name + ') to the summit pinnacle!';
        startBtn.textContent = 'ASCEND TO NEXT ALTITUDE';
        overlay.style.display = 'flex';
        return;
      }
    }

    // Update Moving Platforms & Collision
    platforms.forEach(p => {
      if (p.isMoving) {
        p.x += p.dir * 1.5;
        if (p.x < 30 || p.x + p.w > width - 30) p.dir *= -1;
      }

      // Check downward landing collision
      if (
        player.vy > 0 &&
        player.x + player.w > p.x &&
        player.x < p.x + p.w &&
        player.y + player.h >= p.y &&
        player.y + player.h <= p.y + p.h + player.vy + 2
      ) {
        player.y = p.y - player.h;
        player.vy = -10.5; // automatic spring bounce
        if (window.soundEngine) window.soundEngine.playBounce();
        createExplosion(player.x + player.w / 2, player.y + player.h, theme.primary, 6);
      }
    });

    // Fall below screen check
    if (player.y > height) {
      if (invulnerable <= 0) {
        shields--;
        invulnerable = 60;
        shieldVal.textContent = shields + ' SHIELDS';
        shieldVal.style.color = shields > 1 ? '#00ff88' : '#ff1744';
        player.x = width / 2;
        player.y = height * 0.5;
        player.vy = -12;

        if (shields <= 0) {
          isPlaying = false;
          overlayTitle.textContent = 'PLUMMETED FROM SPIRE';
          overlayDesc.textContent = 'You lost footing at ' + Math.floor(climbHeight) + 'm in Sector ' + currentLevel + '. Recalibrate ascent bounce timing.';
          startBtn.textContent = 'RETRY SPIRE ' + currentLevel;
          overlay.style.display = 'flex';
        }
      }
    }

    // Draw Player
    if (invulnerable % 8 < 4) {
      ctx.fillStyle = theme.accent;
      ctx.fillRect(player.x, player.y, player.w, player.h);

      // Jetpack Thruster nozzle
      ctx.fillStyle = '#ffd600';
      ctx.fillRect(player.x + player.w / 2 - 4, player.y + player.h, 8, 4);
    }

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  // Inputs
  window.addEventListener('keydown', e => {
    keys[e.code] = true;
    if (e.code === 'Space') {
      e.preventDefault();
      triggerBoost();
    }
  });

  window.addEventListener('keyup', e => {
    keys[e.code] = false;
  });

  boostBtn.addEventListener('click', triggerBoost);
  canvas.addEventListener('click', triggerBoost);

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    loadLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = (currentLevel % THEMES.length) + 1;
    loadLevel(currentLevel);
  });

  restartBtn.addEventListener('click', () => {
    loadLevel(currentLevel);
  });

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'SPIRE ALTITUDE CATALOG (1-45)';
    overlayDesc.textContent = 'Select target tower altitude:';
    startBtn.textContent = 'RESUME ASCENT';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();