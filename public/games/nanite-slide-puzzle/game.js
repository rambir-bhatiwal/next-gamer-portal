/**
 * Nanite Slide Puzzle - Standalone Game Logic
 * 45 Sliding Tile Core Configurations with Solvable Permutations
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

  const themeVal = document.getElementById('themeVal');
  const statusVal = document.getElementById('statusVal');
  const movesVal = document.getElementById('movesVal');
  const slideGrid = document.getElementById('slideGrid');
  const startBtn = document.getElementById('startBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_nsp_cleared') || '[]');
  let size = 4; // 3x3 for lvl 1-15, 4x4 for lvl 16-45
  let board = [];
  let moves = 0;

  function generateLevel(lvl) {
    moves = 0;
    nextBtn.style.display = 'none';
    statusVal.textContent = 'UNSTABLE (' + size + 'x' + size + ')';
    statusVal.style.color = '#ff1744';

    size = lvl <= 12 ? 3 : 4;

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    // Start with solved state
    board = [];
    const total = size * size;
    for (let i = 1; i < total; i++) board.push(i);
    board.push(0); // 0 = empty slot

    // Perform N valid random sliding moves from solved state to guarantee 100% solvability
    const shuffleSteps = 20 + lvl * 4;
    let emptyIdx = total - 1;

    for (let s = 0; s < shuffleSteps; s++) {
      const er = Math.floor(emptyIdx / size);
      const ec = emptyIdx % size;
      const neighbors = [];
      if (er > 0) neighbors.push(emptyIdx - size);
      if (er < size - 1) neighbors.push(emptyIdx + size);
      if (ec > 0) neighbors.push(emptyIdx - 1);
      if (ec < size - 1) neighbors.push(emptyIdx + 1);

      const targetIdx = neighbors[(s * 7 + lvl * 11) % neighbors.length];
      board[emptyIdx] = board[targetIdx];
      board[targetIdx] = 0;
      emptyIdx = targetIdx;
    }

    renderGrid();
    updateHud();
  }

  function renderGrid() {
    slideGrid.innerHTML = '';
    slideGrid.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    slideGrid.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';

    const theme = THEMES[(currentLevel - 1) % THEMES.length];

    board.forEach((val, idx) => {
      const tile = document.createElement('div');
      tile.className = 'slide-tile';
      if (val === 0) {
        tile.classList.add('empty');
      } else {
        tile.textContent = val;
        tile.style.borderColor = theme.primary + '88';
        tile.style.color = theme.primary;
        tile.onclick = () => trySlide(idx);
      }
      slideGrid.appendChild(tile);
    });
  }

  function trySlide(idx) {
    const emptyIdx = board.indexOf(0);
    const tr = Math.floor(idx / size);
    const tc = idx % size;
    const er = Math.floor(emptyIdx / size);
    const ec = emptyIdx % size;

    const isAdjacent = (Math.abs(tr - er) === 1 && tc === ec) || (Math.abs(tc - ec) === 1 && tr === er);
    if (!isAdjacent) return;

    board[emptyIdx] = board[idx];
    board[idx] = 0;
    moves++;
    window.AudioEngine.playSlide();
    renderGrid();
    updateHud();
    checkVictory();
  }

  function updateHud() {
    movesVal.textContent = moves + ' MOVES';
  }

  function checkVictory() {
    let isSolved = true;
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i] !== i + 1) isSolved = false;
    }

    if (isSolved && board[board.length - 1] === 0) {
      statusVal.textContent = 'CORE STABILIZED!';
      statusVal.style.color = '#39ff14';
      nextBtn.style.display = 'inline-block';
      window.AudioEngine.playVictory();
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_nsp_cleared', JSON.stringify(clearedLevels));
      }
    }
  }

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

  const nspIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="20" y="20" width="26" height="26" rx="4" fill="#180e29" stroke="#ea80fc" stroke-width="2"/>
  <text x="33" y="38" fill="#ea80fc" font-size="14" font-weight="bold" text-anchor="middle">1</text>
  <rect x="52" y="20" width="26" height="26" rx="4" fill="#180e29" stroke="#00f0ff" stroke-width="2"/>
  <text x="65" y="38" fill="#00f0ff" font-size="14" font-weight="bold" text-anchor="middle">2</text>
  <rect x="20" y="52" width="26" height="26" rx="4" fill="#180e29" stroke="#00f0ff" stroke-width="2"/>
  <text x="33" y="70" fill="#00f0ff" font-size="14" font-weight="bold" text-anchor="middle">3</text>
</svg>`;

  writeFile(path.join(nspDir, 'assets', 'icon.svg'), nspIcon);

  buildLevelGrid();
  generateLevel(1);
})();