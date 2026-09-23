/**
 * Hexa-Tile Polarity Match - Standalone Game Logic
 * 45 Distinct Honeycomb Boards with Graph Bridge Pathfinding
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
  const targetVal = document.getElementById('targetVal');
  const statusVal = document.getElementById('statusVal');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  canvas.width = 460;
  canvas.height = 420;

  const HEX_RADIUS = 28;
  const COLS = 7;
  const ROWS = 6;
  const COLORS = ['#00f0ff', '#ff007f', '#39ff14'];
  const COLOR_NAMES = ['CYAN FLUX', 'MAGENTA SURGE', 'EMERALD PULSE'];

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_htp_cleared') || '[]');
  let targetColorIdx = 0;
  let grid = [];
  let isBridgeComplete = false;

  function hexCenter(col, row) {
    const x = 50 + col * (HEX_RADIUS * 1.6);
    const y = 50 + row * (HEX_RADIUS * 1.73) + (col % 2 === 1 ? HEX_RADIUS * 0.86 : 0);
    return { x, y };
  }

  function generateLevel(lvl) {
    isBridgeComplete = false;
    nextBtn.style.display = 'none';

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    targetColorIdx = (lvl - 1) % 3;
    targetVal.textContent = COLOR_NAMES[targetColorIdx];
    targetVal.style.color = COLORS[targetColorIdx];

    grid = [];
    for (let r = 0; r < ROWS; r++) {
      grid[r] = [];
      for (let c = 0; c < COLS; c++) {
        // Scramble colors based on level seed
        const initialColor = (r * 3 + c * 5 + lvl * 7) % 3;
        grid[r][c] = {
          col: c,
          row: r,
          colorIdx: initialColor,
          inBridge: false
        };
      }
    }

    // Ensure a solvable bridge path exists on left-to-right walk
    let r = Math.floor(ROWS / 2);
    for (let c = 0; c < COLS; c++) {
      // Set to another color initially so player must click to match target color
      grid[r][c].solutionColor = targetColorIdx;
      // Slight random variation in path row
      if (c < COLS - 1) {
        r = Math.max(0, Math.min(ROWS - 1, r + (((lvl * 3 + c) % 3) - 1)));
      }
    }

    checkBridge();
    draw();
  }

  function getNeighbors(c, r) {
    const isOdd = c % 2 === 1;
    const deltas = isOdd ?
      [[0, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]] :
      [[0, -1], [1, -1], [1, 0], [0, 1], [-1, 0], [-1, -1]];
    const res = [];
    deltas.forEach(([dc, dr]) => {
      const nc = c + dc;
      const nr = r + dr;
      if (nc >= 0 && nc < COLS && nr >= 0 && nr < ROWS) {
        res.push(grid[nr][nc]);
      }
    });
    return res;
  }

  function checkBridge() {
    // Reset inBridge
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        grid[r][c].inBridge = false;
      }
    }

    // BFS starting from col 0 matching targetColorIdx
    const q = [];
    for (let r = 0; r < ROWS; r++) {
      if (grid[r][0].colorIdx === targetColorIdx) {
        grid[r][0].inBridge = true;
        q.push(grid[r][0]);
      }
    }

    while (q.length > 0) {
      const curr = q.shift();
      const neighbors = getNeighbors(curr.col, curr.row);
      neighbors.forEach(n => {
        if (n.colorIdx === targetColorIdx && !n.inBridge) {
          n.inBridge = true;
          q.push(n);
        }
      });
    }

    // Check if any node in last column is inBridge
    isBridgeComplete = false;
    for (let r = 0; r < ROWS; r++) {
      if (grid[r][COLS - 1].inBridge) isBridgeComplete = true;
    }

    if (isBridgeComplete) {
      statusVal.textContent = 'BRIDGE COMPLETE!';
      statusVal.style.color = '#39ff14';
      nextBtn.style.display = 'inline-block';
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_htp_cleared', JSON.stringify(clearedLevels));
      }
      window.AudioEngine.playVictory();
    } else {
      statusVal.textContent = 'SECTOR ISOLATED';
      statusVal.style.color = '#ff1744';
      nextBtn.style.display = 'none';
    }
  }

  function drawHex(x, y, radius, fillColor, strokeColor, lineWidth = 2) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const hx = x + radius * Math.cos(angle);
      const hy = y + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  function draw() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Hex Tiles
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const { x, y } = hexCenter(c, r);
        const tile = grid[r][c];
        const hexColor = COLORS[tile.colorIdx];

        ctx.save();
        if (tile.inBridge) {
          ctx.shadowColor = hexColor;
          ctx.shadowBlur = 14;
        }

        drawHex(x, y, HEX_RADIUS - 2, tile.inBridge ? hexColor + 'bb' : hexColor + '44', tile.inBridge ? '#ffffff' : hexColor, tile.inBridge ? 3 : 1.5);
        ctx.restore();

        // Inner marker dot
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = tile.inBridge ? '#ffffff' : hexColor;
        ctx.fill();

        // Column indicators
        if (c === 0) {
          ctx.fillStyle = COLORS[targetColorIdx];
          ctx.font = 'bold 9px Rajdhani, sans-serif';
          ctx.fillText('IN', x - 26, y + 3);
        } else if (c === COLS - 1) {
          ctx.fillStyle = COLORS[targetColorIdx];
          ctx.font = 'bold 9px Rajdhani, sans-serif';
          ctx.fillText('OUT', x + 16, y + 3);
        }
      }
    }
  }

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const scale = canvas.width / rect.width;
    const mx = (e.clientX - rect.left) * scale;
    const my = (e.clientY - rect.top) * scale;

    let closest = null;
    let minDist = 99999;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const { x, y } = hexCenter(c, r);
        const dist = Math.hypot(mx - x, my - y);
        if (dist < HEX_RADIUS && dist < minDist) {
          minDist = dist;
          closest = grid[r][c];
        }
      }
    }

    if (closest) {
      closest.colorIdx = (closest.colorIdx + 1) % 3;
      window.AudioEngine.playToggle(closest.colorIdx);
      checkBridge();
      draw();
    }
  });

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

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateLevel(currentLevel);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  resetBtn.onclick = () => generateLevel(currentLevel);
  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateLevel(currentLevel);
  };

  const htpIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <polygon points="35,35 55,25 75,35 75,60 55,70 35,60" fill="#00e5ff" opacity="0.8"/>
  <circle cx="55" cy="47" r="6" fill="#ffffff"/>
</svg>`;

  writeFile(path.join(htpDir, 'assets', 'icon.svg'), htpIcon);

  buildLevelGrid();
  generateLevel(1);
})();