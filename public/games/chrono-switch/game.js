/**
 * Chrono Switch - Standalone Game Logic
 * 45 Phase Horizons with Dual-Polarity Gate Absorption
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
  const quotaVal = document.getElementById('quotaVal');
  const phaseVal = document.getElementById('phaseVal');
  const shiftBtn = document.getElementById('shiftBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');

  canvas.width = 440;
  canvas.height = 440;

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_cs_cleared') || '[]');
  let targetGates = 20;
  let passedGates = 0;
  let shields = 3;
  let isInvulnerable = false; // invulnerable grace period timer prevents instant KO
  let invulnTimer = 0;
  let isPlaying = false;
  let currentPolarity = 0; // 0 = Cyan, 1 = Magenta
  let barriers = [];
  let stars = [];

  function loadLevel(lvl) {
    currentLevel = lvl;
    targetGates = 15 + lvl;
    passedGates = 0;
    shields = 3;
    isInvulnerable = false;
    currentPolarity = 0;
    barriers = [];
    nextBtn.style.display = 'none';

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    // Background stars
    stars = [];
    for (let i = 0; i < 40; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: 1 + Math.random() * 2,
        speed: 1 + Math.random() * 2
      });
    }

    updateHud();
    isPlaying = true;
  }

  function updateHud() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    quotaVal.textContent = passedGates + ' / ' + targetGates + ' GATES | SHIELDS: ' + shields;
    quotaVal.style.color = shields <= 1 ? '#ff1744' : theme.primary;
    phaseVal.textContent = currentPolarity === 0 ? 'CYAN POLARITY' : 'MAGENTA POLARITY';
    phaseVal.style.color = currentPolarity === 0 ? '#00f0ff' : '#ff007f';
  }

  function togglePolarity() {
    currentPolarity = currentPolarity === 0 ? 1 : 0;
    window.AudioEngine.playShift();
    updateHud();
  }

  function spawnBarrier() {
    const polarity = Math.random() < 0.5 ? 0 : 1;
    barriers.push({
      y: -20,
      polarity,
      passed: false
    });
  }

  let frameCount = 0;
  function update() {
    if (!isPlaying) return;

    frameCount++;
    // Human-speed fair spawn interval: ~60-75 frames (1.0-1.2s per gate)
    if (frameCount % 65 === 0 && passedGates + barriers.length < targetGates + 2) {
      spawnBarrier();
    }

    // Move stars
    stars.forEach(s => {
      s.y += s.speed;
      if (s.y > canvas.height) s.y = 0;
    });

    // Move barriers (fair human reaction speed: ~2.8px/f)
    const playerY = canvas.height - 70;
    const playerX = canvas.width / 2;

    for (let i = barriers.length - 1; i >= 0; i--) {
      const b = barriers[i];
      b.y += 2.8;

      // Collision check with player
      if (!b.passed && Math.abs(b.y - playerY) < 18) {
        b.passed = true;
        if (b.polarity === currentPolarity) {
          // Successful absorption
          passedGates++;
          window.AudioEngine.playAbsorb();
          updateHud();
          if (passedGates >= targetGates) {
            triggerVictory();
          }
        } else {
          // Mismatch collision!
          if (!isInvulnerable) {
            shields--;
            window.AudioEngine.playDamage();
            isInvulnerable = true;
            setTimeout(() => isInvulnerable = false, 1200);
            updateHud();

            if (shields <= 0) {
              isPlaying = false;
              alert('POLARITY COLLAPSE: Shields depleted in Sector ' + currentLevel);
              loadLevel(currentLevel);
              return;
            }
          }
        }
      }

      if (b.y > canvas.height + 40) {
        barriers.splice(i, 1);
      }
    }

    draw();
    requestAnimationFrame(update);
  }

  function triggerVictory() {
    isPlaying = false;
    window.AudioEngine.playVictory();
    nextBtn.style.display = 'inline-block';
    if (!clearedLevels.includes(currentLevel)) {
      clearedLevels.push(currentLevel);
      localStorage.setItem('next_cs_cleared', JSON.stringify(clearedLevels));
    }
  }

  function draw() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Stars
    ctx.fillStyle = theme.primary + '55';
    stars.forEach(s => {
      ctx.fillRect(s.x, s.y, s.s, s.s);
    });

    // Barriers
    barriers.forEach(b => {
      const color = b.polarity === 0 ? '#00f0ff' : '#ff007f';
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 10;
      ctx.shadowColor = color;
      ctx.shadowBlur = 12;

      // Barrier with center aperture
      ctx.beginPath();
      ctx.moveTo(20, b.y);
      ctx.lineTo(canvas.width / 2 - 30, b.y);
      ctx.moveTo(canvas.width / 2 + 30, b.y);
      ctx.lineTo(canvas.width - 20, b.y);
      ctx.stroke();

      // Glowing gate core
      ctx.fillStyle = color;
      ctx.fillRect(canvas.width / 2 - 12, b.y - 4, 24, 8);
      ctx.restore();
    });

    // Player Quantum Core
    const px = canvas.width / 2;
    const py = canvas.height - 70;
    const pColor = currentPolarity === 0 ? '#00f0ff' : '#ff007f';

    ctx.save();
    if (!isInvulnerable || frameCount % 6 < 3) {
      ctx.shadowColor = pColor;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(px, py, 18, 0, Math.PI * 2);
      ctx.fillStyle = pColor;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Outer polarity ring
      ctx.beginPath();
      ctx.arc(px, py, 26, 0, Math.PI * 2);
      ctx.strokeStyle = pColor + '88';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.restore();
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      togglePolarity();
    }
  });

  shiftBtn.onclick = togglePolarity;
  canvas.onclick = togglePolarity;

  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    loadLevel(currentLevel);
    isPlaying = true;
    requestAnimationFrame(update);
  };

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '') + (clearedLevels.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        currentLevel = i;
        menuScreen.classList.add('hidden');
        loadLevel(currentLevel);
        requestAnimationFrame(update);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    loadLevel(currentLevel);
    requestAnimationFrame(update);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  buildLevelGrid();
  loadLevel(1);
  requestAnimationFrame(update);
})();