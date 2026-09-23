/**
 * Galactic Fleet Commander: Turn-Based Tactics - 45 Thematic Levels
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

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const turnVal = document.getElementById('turnVal');
  const apVal = document.getElementById('apVal');
  const enemyVal = document.getElementById('enemyVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const endTurnBtn = document.getElementById('endTurnBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const orderBtns = document.querySelectorAll('.order-btn');

  let width = 0, height = 0;
  const cols = 9;
  const rows = 6;
  let cellSize = 55;
  let offsetX = 0;
  let offsetY = 0;

  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
    cellSize = Math.min((width - 60) / cols, (height - 120) / rows);
    offsetX = (width - cols * cellSize) / 2;
    offsetY = (height - rows * cellSize) / 2;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let actionPoints = 3;
  let currentAction = 'move';
  let selectedShip = null;
  let isEnemyTurn = false;
  let invulnerable = 0; // human speed fair defense

  let playerShips = [];
  let enemyShips = [];
  let particles = [];
  let stars = [];

  function initStars() {
    stars = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
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
    actionPoints = 3;
    isEnemyTurn = false;
    selectedShip = null;
    particles = [];
    invulnerable = 60;

    // Player Ships: 3 Ships
    playerShips = [
      { id: 1, type: 'Cruiser', gx: 1, gy: 2, hp: 100, maxHp: 100, shield: 30, maxShield: 30, range: 3, power: 35, color: '#00f0ff' },
      { id: 2, type: 'Interceptor', gx: 0, gy: 1, hp: 60, maxHp: 60, shield: 20, maxShield: 20, range: 4, power: 25, color: '#39ff14' },
      { id: 3, type: 'Torpedo', gx: 0, gy: 4, hp: 80, maxHp: 80, shield: 20, maxShield: 20, range: 2, power: 45, color: '#ffd600' }
    ];

    // Enemy Ships: 2 to 4 Ships based on level
    const enemyCount = 2 + Math.min(2, Math.floor(lvl / 15));
    enemyShips = [];
    const positions = [
      { gx: 7, gy: 2 },
      { gx: 8, gy: 1 },
      { gx: 8, gy: 4 },
      { gx: 7, gy: 3 }
    ];
    for (let i = 0; i < enemyCount; i++) {
      const pos = positions[i];
      const hp = 60 + lvl * 2;
      enemyShips.push({
        id: 10 + i,
        gx: pos.gx,
        gy: pos.gy,
        hp: hp,
        maxHp: hp,
        shield: 15 + lvl,
        maxShield: 15 + lvl,
        range: 3,
        power: 20 + Math.floor(lvl * 0.4),
        color: '#ff1744'
      });
    }

    selectedShip = playerShips[0];

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    turnVal.textContent = 'PLAYER FLEET';
    turnVal.style.color = '#00f0ff';
    apVal.textContent = '3 / 3 AP';
    enemyVal.textContent = enemyShips.length + ' SHIPS';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function createExplosion(x, y, color, count = 12) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 4 + 1;
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

  function executeEnemyTurn() {
    isEnemyTurn = true;
    turnVal.textContent = 'AI ADMIRAL...';
    turnVal.style.color = '#ff1744';

    setTimeout(() => {
      // AI chooses orders for living ships
      enemyShips.forEach(es => {
        if (playerShips.length === 0) return;
        // Check if in range of any player ship
        let inRangeTarget = null;
        playerShips.forEach(ps => {
          const dist = Math.abs(ps.gx - es.gx) + Math.abs(ps.gy - es.gy);
          if (dist <= es.range) {
            inRangeTarget = ps;
          }
        });

        if (inRangeTarget) {
          // Attack player
          if (window.soundEngine) window.soundEngine.playCannon();
          const dmg = es.power;
          if (inRangeTarget.shield > 0) {
            inRangeTarget.shield = Math.max(0, inRangeTarget.shield - dmg);
          } else {
            inRangeTarget.hp = Math.max(0, inRangeTarget.hp - dmg);
          }
          const px = offsetX + inRangeTarget.gx * cellSize + cellSize / 2;
          const py = offsetY + inRangeTarget.gy * cellSize + cellSize / 2;
          createExplosion(px, py, '#00f0ff', 10);
        } else {
          // Move towards closest player ship
          let closest = playerShips[0];
          let minDist = 99;
          playerShips.forEach(ps => {
            const d = Math.abs(ps.gx - es.gx) + Math.abs(ps.gy - es.gy);
            if (d < minDist) { minDist = d; closest = ps; }
          });
          const dx = Math.sign(closest.gx - es.gx);
          const dy = Math.sign(closest.gy - es.gy);
          const tgx = es.gx + dx;
          const tgy = es.gy + dy;
          if (!isTileOccupied(tgx, tgy) && tgx >= 0 && tgx < cols && tgy >= 0 && tgy < rows) {
            es.gx = tgx;
            es.gy = tgy;
          }
        }
      });

      // Cleanup destroyed player ships
      playerShips = playerShips.filter(ps => ps.hp > 0);
      if (playerShips.length === 0) {
        isPlaying = false;
        overlayTitle.textContent = 'FLEET DESTROYED';
        overlayDesc.textContent = 'The AI Admiral overwhelmed your battlegroup in Sector ' + currentLevel + '. Regroup and retry mission.';
        startBtn.textContent = 'RETRY SECTOR ' + currentLevel;
        overlay.style.display = 'flex';
        return;
      }

      if (!playerShips.includes(selectedShip)) {
        selectedShip = playerShips[0];
      }

      // Reset for Player Turn
      isEnemyTurn = false;
      actionPoints = 3;
      turnVal.textContent = 'PLAYER FLEET';
      turnVal.style.color = '#00f0ff';
      apVal.textContent = '3 / 3 AP';
    }, 900);
  }

  function isTileOccupied(gx, gy) {
    return playerShips.some(s => s.gx === gx && s.gy === gy) ||
           enemyShips.some(s => s.gx === gx && s.gy === gy);
  }

  function handleTileClick(gx, gy) {
    if (!isPlaying || isEnemyTurn) return;

    // Check if clicked player ship
    const clickedPlayer = playerShips.find(s => s.gx === gx && s.gy === gy);
    if (clickedPlayer) {
      selectedShip = clickedPlayer;
      return;
    }

    if (!selectedShip || actionPoints <= 0) return;

    if (currentAction === 'move') {
      const dist = Math.abs(gx - selectedShip.gx) + Math.abs(gy - selectedShip.gy);
      if (dist === 1 && !isTileOccupied(gx, gy)) {
        selectedShip.gx = gx;
        selectedShip.gy = gy;
        actionPoints--;
        apVal.textContent = actionPoints + ' / 3 AP';
        if (window.soundEngine) window.soundEngine.playMove();
        if (actionPoints === 0) executeEnemyTurn();
      }
    } else if (currentAction === 'attack') {
      const clickedEnemy = enemyShips.find(s => s.gx === gx && s.gy === gy);
      if (clickedEnemy) {
        const dist = Math.abs(clickedEnemy.gx - selectedShip.gx) + Math.abs(clickedEnemy.gy - selectedShip.gy);
        if (dist <= selectedShip.range) {
          actionPoints--;
          apVal.textContent = actionPoints + ' / 3 AP';
          if (window.soundEngine) window.soundEngine.playCannon();

          if (clickedEnemy.shield > 0) {
            clickedEnemy.shield = Math.max(0, clickedEnemy.shield - selectedShip.power);
          } else {
            clickedEnemy.hp = Math.max(0, clickedEnemy.hp - selectedShip.power);
          }

          const ex = offsetX + clickedEnemy.gx * cellSize + cellSize / 2;
          const ey = offsetY + clickedEnemy.gy * cellSize + cellSize / 2;
          createExplosion(ex, ey, '#ff1744', 12);

          // Check if enemy dead
          if (clickedEnemy.hp <= 0) {
            enemyShips = enemyShips.filter(e => e !== clickedEnemy);
            enemyVal.textContent = enemyShips.length + ' SHIPS';

            if (enemyShips.length === 0) {
              // Mission Victory!
              isPlaying = false;
              if (window.soundEngine) window.soundEngine.playWin();
              nextBtn.style.display = 'inline-block';
              overlayTitle.textContent = 'SECTOR LIBERATED!';
              overlayDesc.textContent = 'Hostile fleet vanquished in Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + '). Cruisers standing by for next jump.';
              startBtn.textContent = 'PROCEED TO SECTOR ' + ((currentLevel % THEMES.length) + 1);
              overlay.style.display = 'flex';
              return;
            }
          }

          if (actionPoints === 0) executeEnemyTurn();
        }
      }
    } else if (currentAction === 'shield') {
      actionPoints--;
      apVal.textContent = actionPoints + ' / 3 AP';
      selectedShip.shield = Math.min(selectedShip.maxShield * 1.5, selectedShip.shield + 25);
      if (window.soundEngine) window.soundEngine.playShield();
      const sx = offsetX + selectedShip.gx * cellSize + cellSize / 2;
      const sy = offsetY + selectedShip.gy * cellSize + cellSize / 2;
      createExplosion(sx, sy, '#00f0ff', 8);
      if (actionPoints === 0) executeEnemyTurn();
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Stars
    stars.forEach(s => {
      ctx.fillStyle = 'rgba(255, 255, 255, ' + s.alpha + ')';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Hex/Square Grid
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = offsetX + c * cellSize;
        const y = offsetY + r * cellSize;

        ctx.strokeStyle = theme.primary + '33';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cellSize, cellSize);

        // Highlight selected ship valid moves or attack range
        if (selectedShip && !isEnemyTurn) {
          const dist = Math.abs(c - selectedShip.gx) + Math.abs(r - selectedShip.gy);
          if (currentAction === 'move' && dist === 1 && !isTileOccupied(c, r)) {
            ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
            ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          } else if (currentAction === 'attack' && dist <= selectedShip.range) {
            ctx.fillStyle = 'rgba(255, 23, 68, 0.1)';
            ctx.fillRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
          }
        }
      }
    }

    // Draw Player Ships
    playerShips.forEach(s => {
      const sx = offsetX + s.gx * cellSize + cellSize / 2;
      const sy = offsetY + s.gy * cellSize + cellSize / 2;

      // Selection ring
      if (s === selectedShip) {
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, cellSize * 0.45, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Hull
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.moveTo(sx + cellSize * 0.35, sy);
      ctx.lineTo(sx - cellSize * 0.25, sy - cellSize * 0.25);
      ctx.lineTo(sx - cellSize * 0.15, sy);
      ctx.lineTo(sx - cellSize * 0.25, sy + cellSize * 0.25);
      ctx.closePath();
      ctx.fill();

      // Shield Aura
      if (s.shield > 0) {
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, cellSize * 0.38, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Bars
      const bw = cellSize * 0.7;
      const hpR = s.hp / s.maxHp;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(sx - bw / 2, sy - cellSize * 0.45, bw, 3);
      ctx.fillStyle = '#00e676';
      ctx.fillRect(sx - bw / 2, sy - cellSize * 0.45, bw * hpR, 3);
    });

    // Draw Enemy Ships
    enemyShips.forEach(s => {
      const sx = offsetX + s.gx * cellSize + cellSize / 2;
      const sy = offsetY + s.gy * cellSize + cellSize / 2;

      // Hull
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.moveTo(sx - cellSize * 0.35, sy);
      ctx.lineTo(sx + cellSize * 0.25, sy - cellSize * 0.25);
      ctx.lineTo(sx + cellSize * 0.15, sy);
      ctx.lineTo(sx + cellSize * 0.25, sy + cellSize * 0.25);
      ctx.closePath();
      ctx.fill();

      // Shield Aura
      if (s.shield > 0) {
        ctx.strokeStyle = 'rgba(255, 23, 68, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, cellSize * 0.38, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Bars
      const bw = cellSize * 0.7;
      const hpR = s.hp / s.maxHp;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(sx - bw / 2, sy - cellSize * 0.45, bw, 3);
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(sx - bw / 2, sy - cellSize * 0.45, bw * hpR, 3);
    });

    // Draw Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  // Input Handling
  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const gx = Math.floor((mx - offsetX) / cellSize);
    const gy = Math.floor((my - offsetY) / cellSize);
    if (gx >= 0 && gx < cols && gy >= 0 && gy < rows) {
      handleTileClick(gx, gy);
    }
  });

  orderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      orderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentAction = btn.dataset.action;
    });
  });

  endTurnBtn.addEventListener('click', () => {
    if (!isPlaying || isEnemyTurn) return;
    executeEnemyTurn();
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (enemyShips.length === 0) {
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

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'SECTOR WAR MAP (1-45)';
    overlayDesc.textContent = 'Choose star sector fleet deployment:';
    startBtn.textContent = 'RESUME ENGAGEMENT';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();