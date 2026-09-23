/**
 * Laser Circuit Reflector - Standalone Game Logic
 * 45 Optical Breadboard Puzzles with Real-Time Beam Tracing
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
  const targetsVal = document.getElementById('targetsVal');
  const movesVal = document.getElementById('movesVal');
  const menuScreen = document.getElementById('menuScreen');
  const menuTitle = document.getElementById('menuTitle');
  const menuDesc = document.getElementById('menuDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const resetBtn = document.getElementById('resetBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  const GRID_SIZE = 7;
  let CELL_SIZE = 60;
  canvas.width = 420;
  canvas.height = 420;

  let currentLevel = 1;
  let moves = 0;
  let clearedLevels = JSON.parse(localStorage.getItem('next_lcr_cleared') || '[]');
  let board = [];
  let emitter = { x: 0, y: 3, dir: 'right', color: '#00f0ff' };
  let targets = [];
  let laserPaths = [];
  let isLevelComplete = false;

  // Directions: right=0, down=1, left=2, up=3
  // Mirror angle types:
  // type '/' (angle 0 or 2): reflects right->up, down->left, left->down, up->right
  // type '\' (angle 1 or 3): reflects right->down, down->right, left->up, up->left

  function generateLevel(lvl) {
    moves = 0;
    isLevelComplete = false;
    nextBtn.style.display = 'none';
    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    board = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(null));

    // Place emitter on left edge
    const startY = (lvl * 3) % (GRID_SIZE - 2) + 1;
    emitter = { x: 0, y: startY, dir: 'right', color: theme.primary };

    // Procedurally place mirrors and targets based on level seed
    // Hand-guaranteed solvable layout: create a path from emitter to target
    let cx = emitter.x;
    let cy = emitter.y;
    let cdir = emitter.dir; // 'right'
    let stepCount = Math.min(6, 2 + Math.floor(lvl / 8));
    let pathPoints = [{ x: cx, y: cy }];

    for (let s = 0; s < stepCount; s++) {
      let turnDist = 1 + ((lvl * 7 + s * 11) % (GRID_SIZE - 3));
      if (cdir === 'right') cx = Math.min(GRID_SIZE - 1, cx + turnDist);
      else if (cdir === 'left') cx = Math.max(0, cx - turnDist);
      else if (cdir === 'down') cy = Math.min(GRID_SIZE - 1, cy + turnDist);
      else if (cdir === 'up') cy = Math.max(0, cy - turnDist);

      pathPoints.push({ x: cx, y: cy });
      
      if (s < stepCount - 1) {
        // Choose reflection mirror orientation
        const newDir = (cdir === 'right' || cdir === 'left') ? ((s % 2 === 0) ? 'down' : 'up') : ((s % 2 === 0) ? 'left' : 'right');
        const mType = ((cdir === 'right' && newDir === 'up') || (cdir === 'down' && newDir === 'left') || (cdir === 'left' && newDir === 'down') || (cdir === 'up' && newDir === 'right')) ? 0 : 1;
        
        // Randomly scramble initial rotation so player has to solve it!
        const initialAngle = (mType + (s % 3) + 1) % 4;
        board[cy][cx] = { type: 'mirror', angle: initialAngle, targetAngle: mType, solved: false };
        cdir = newDir;
      }
    }

    // Place target at final destination
    targets = [{ x: cx, y: cy, hit: false, color: theme.secondary }];
    board[cy][cx] = { type: 'target', color: theme.secondary, hit: false };

    // Add 2-3 decoy rotatable mirrors to increase puzzle challenge
    for (let i = 0; i < 3; i++) {
      const rx = (lvl * 13 + i * 17) % GRID_SIZE;
      const ry = (lvl * 19 + i * 23) % GRID_SIZE;
      if (!board[ry][rx] && (rx !== emitter.x || ry !== emitter.y)) {
        board[ry][rx] = { type: 'mirror', angle: (i * 2) % 4, decoy: true };
      }
    }

    traceLaser();
    updateHud();
    draw();
  }

  function traceLaser() {
    laserPaths = [];
    targets.forEach(t => t.hit = false);

    let x = emitter.x;
    let y = emitter.y;
    let dx = 1, dy = 0; // moving right
    let path = [{ x: x * CELL_SIZE + CELL_SIZE / 2, y: y * CELL_SIZE + CELL_SIZE / 2 }];
    let steps = 0;

    while (steps < 40) {
      steps++;
      x += dx;
      y += dy;

      if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) {
        // Laser left the board
        path.push({ x: (x - dx) * CELL_SIZE + CELL_SIZE / 2 + dx * (CELL_SIZE / 2), y: (y - dy) * CELL_SIZE + CELL_SIZE / 2 + dy * (CELL_SIZE / 2) });
        break;
      }

      const hitX = x * CELL_SIZE + CELL_SIZE / 2;
      const hitY = y * CELL_SIZE + CELL_SIZE / 2;
      path.push({ x: hitX, y: hitY });

      const cell = board[y][x];
      if (!cell) continue;

      if (cell.type === 'target') {
        cell.hit = true;
        targets.forEach(t => { if (t.x === x && t.y === y) t.hit = true; });
        break;
      }

      if (cell.type === 'mirror') {
        // Mirror angle 0 or 2 acts as /
        // Mirror angle 1 or 3 acts as \
        const isSlash = (cell.angle % 2 === 0);
        if (isSlash) {
          // / reflection: right(1,0)->up(0,-1), down(0,1)->left(-1,0), left(-1,0)->down(0,1), up(0,-1)->right(1,0)
          const ndx = -dy;
          const ndy = -dx;
          dx = ndx;
          dy = ndy;
        } else {
          // \ reflection: right(1,0)->down(0,1), down(0,1)->right(1,0), left(-1,0)->up(0,-1), up(0,-1)->left(-1,0)
          const ndx = dy;
          const ndy = dx;
          dx = ndx;
          dy = ndy;
        }
      }
    }

    laserPaths.push(path);

    // Check level completion
    const allHit = targets.length > 0 && targets.every(t => t.hit);
    if (allHit && !isLevelComplete) {
      isLevelComplete = true;
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_lcr_cleared', JSON.stringify(clearedLevels));
      }
      window.AudioEngine.playVictory();
      nextBtn.style.display = 'inline-block';
    }
  }

  function updateHud() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    const hitCount = targets.filter(t => t.hit).length;
    targetsVal.textContent = hitCount + ' / ' + targets.length;
    targetsVal.style.color = hitCount === targets.length ? '#39ff14' : theme.primary;
    movesVal.textContent = moves + ' MOVES';
  }

  function draw() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid lines
    ctx.strokeStyle = theme.primary + '22';
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0); ctx.lineTo(i * CELL_SIZE, canvas.height);
      ctx.moveTo(0, i * CELL_SIZE); ctx.lineTo(canvas.width, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw Laser Emitter
    const ex = emitter.x * CELL_SIZE + CELL_SIZE / 2;
    const ey = emitter.y * CELL_SIZE + CELL_SIZE / 2;
    ctx.fillStyle = emitter.color;
    ctx.beginPath();
    ctx.arc(ex, ey, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Board Items (Mirrors & Targets)
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const item = board[r][c];
        if (!item) continue;
        const cx = c * CELL_SIZE + CELL_SIZE / 2;
        const cy = r * CELL_SIZE + CELL_SIZE / 2;

        if (item.type === 'mirror') {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate((item.angle * 90) * Math.PI / 180);

          // Mirror Base Frame
          ctx.strokeStyle = theme.primary;
          ctx.lineWidth = 2;
          ctx.strokeRect(-20, -20, 40, 40);

          // Diagonal Reflective Glass
          ctx.beginPath();
          ctx.moveTo(-18, 18);
          ctx.lineTo(18, -18);
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 4;
          ctx.stroke();

          // Neon sheen
          ctx.beginPath();
          ctx.moveTo(-14, 14);
          ctx.lineTo(14, -14);
          ctx.strokeStyle = theme.accent;
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.restore();
        } else if (item.type === 'target') {
          ctx.save();
          ctx.translate(cx, cy);
          ctx.beginPath();
          ctx.arc(0, 0, item.hit ? 18 : 14, 0, Math.PI * 2);
          ctx.fillStyle = item.hit ? theme.accent : theme.secondary;
          ctx.fill();
          ctx.strokeStyle = item.hit ? '#fff' : theme.accent;
          ctx.lineWidth = 3;
          ctx.stroke();

          if (item.hit) {
            ctx.strokeStyle = theme.accent + '66';
            ctx.beginPath();
            ctx.arc(0, 0, 24, 0, Math.PI * 2);
            ctx.stroke();
          }
          ctx.restore();
        }
      }
    }

    // Draw Laser Beams
    ctx.save();
    laserPaths.forEach(path => {
      if (path.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);
      for (let p = 1; p < path.length; p++) {
        ctx.lineTo(path[p].x, path[p].y);
      }
      // Glowing Core
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 5;
      ctx.shadowColor = theme.primary;
      ctx.shadowBlur = 12;
      ctx.stroke();

      // White Center Beam
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
    ctx.restore();
  }

  // Click interaction on canvas
  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const scale = canvas.width / rect.width;
    const clickX = (e.clientX - rect.left) * scale;
    const clickY = (e.clientY - rect.top) * scale;
    const col = Math.floor(clickX / CELL_SIZE);
    const row = Math.floor(clickY / CELL_SIZE);

    if (row >= 0 && row < GRID_SIZE && col >= 0 && col < GRID_SIZE) {
      const cell = board[row][col];
      if (cell && cell.type === 'mirror') {
        cell.angle = (cell.angle + 1) % 4;
        moves++;
        window.AudioEngine.playClick();
        traceLaser();
        updateHud();
        draw();
      }
    }
  });

  // Setup Level Select Grid
  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '') + (clearedLevels.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        currentLevel = i;
        menuScreen.classList.add('hidden');
        generateLevel(currentLevel);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.addEventListener('click', () => {
    menuScreen.classList.add('hidden');
    generateLevel(currentLevel);
  });

  levelSelectBtn.addEventListener('click', () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  });

  resetBtn.addEventListener('click', () => {
    generateLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateLevel(currentLevel);
  });

  buildLevelGrid();
  generateLevel(1);
})();