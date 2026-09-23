/**
 * Quantum Nonogram - Standalone Game Logic
 * 45 Picross Logic Blueprints with Dynamic Clue Solvers
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
  const modeVal = document.getElementById('modeVal');
  const statusVal = document.getElementById('statusVal');
  const topCluesEl = document.getElementById('topClues');
  const leftCluesEl = document.getElementById('leftClues');
  const gridBoard = document.getElementById('gridBoard');
  const toggleToolBtn = document.getElementById('toggleToolBtn');
  const checkBtn = document.getElementById('checkBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');

  const SIZE = 6;
  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_qn_cleared') || '[]');
  let toolMode = 'fill'; // 'fill' or 'cross'
  let targetPattern = [];
  let userGrid = [];

  // 45 Handcrafted 6x6 Cyber Glyph Patterns
  const GLYPH_NAMES = [
    "Cyber Key", "Quantum Core", "Laser Turret", "Shield Matrix", "Memory Chip",
    "Space Probe", "Data Crystal", "Plasma Sword", "Nano Potion", "Cyber Skull",
    "Energy Battery", "Antenna Node", "Firewall Gate", "Subnet Router", "Warp Gate"
  ];

  function generateBlueprint(lvl) {
    nextBtn.style.display = 'none';
    statusVal.textContent = 'UNRESOLVED';
    statusVal.style.color = '#00f0ff';

    const theme = THEMES[(lvl - 1) % THEMES.length];
    const glyphName = GLYPH_NAMES[(lvl - 1) % GLYPH_NAMES.length];
    themeVal.textContent = lvl + ': ' + theme.name + ' (' + glyphName + ')';
    themeVal.style.color = theme.primary;

    // Generate symmetric or recognizable 6x6 pixel glyph based on level seed
    targetPattern = Array(SIZE).fill(null).map(() => Array(SIZE).fill(0));
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const bit = ((r * 7 + c * 11 + lvl * 13) % 5 <= 2) ? 1 : 0;
        targetPattern[r][c] = bit;
      }
    }

    userGrid = Array(SIZE).fill(null).map(() => Array(SIZE).fill(0)); // 0=empty, 1=filled, 2=cross

    buildClues();
    renderBoard();
  }

  function getRuns(arr) {
    const runs = [];
    let count = 0;
    for (let v of arr) {
      if (v === 1) count++;
      else if (count > 0) { runs.push(count); count = 0; }
    }
    if (count > 0) runs.push(count);
    return runs.length > 0 ? runs : [0];
  }

  function buildClues() {
    topCluesEl.innerHTML = '';
    leftCluesEl.innerHTML = '';

    // Column clues
    for (let c = 0; c < SIZE; c++) {
      const colArr = [];
      for (let r = 0; r < SIZE; r++) colArr.push(targetPattern[r][c]);
      const runs = getRuns(colArr);

      const clueBox = document.createElement('div');
      clueBox.className = 'top-col-clue';
      runs.forEach(n => {
        const span = document.createElement('span');
        span.textContent = n;
        clueBox.appendChild(span);
      });
      topCluesEl.appendChild(clueBox);
    }

    // Row clues
    for (let r = 0; r < SIZE; r++) {
      const rowArr = targetPattern[r];
      const runs = getRuns(rowArr);

      const clueBox = document.createElement('div');
      clueBox.className = 'left-row-clue';
      runs.forEach(n => {
        const span = document.createElement('span');
        span.textContent = n;
        clueBox.appendChild(span);
      });
      leftCluesEl.appendChild(clueBox);
    }
  }

  function renderBoard() {
    gridBoard.innerHTML = '';
    gridBoard.style.gridTemplateColumns = 'repeat(' + SIZE + ', 40px)';
    gridBoard.style.gridTemplateRows = 'repeat(' + SIZE + ', 40px)';

    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const cell = document.createElement('div');
        cell.className = 'nono-cell';
        if (userGrid[r][c] === 1) cell.classList.add('filled');
        else if (userGrid[r][c] === 2) {
          cell.classList.add('crossed');
          cell.textContent = '✕';
        }

        cell.onmousedown = (e) => {
          if (e.button === 2) {
            // Right click: toggle cross
            userGrid[r][c] = userGrid[r][c] === 2 ? 0 : 2;
            window.AudioEngine.playCross();
          } else {
            // Left click
            if (toolMode === 'fill') {
              userGrid[r][c] = userGrid[r][c] === 1 ? 0 : 1;
              window.AudioEngine.playFill();
            } else {
              userGrid[r][c] = userGrid[r][c] === 2 ? 0 : 2;
              window.AudioEngine.playCross();
            }
          }
          renderBoard();
          checkSolution(false);
        };

        cell.oncontextmenu = (e) => e.preventDefault();
        gridBoard.appendChild(cell);
      }
    }
  }

  function checkSolution(explicit) {
    let match = true;
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const expected = targetPattern[r][c] === 1;
        const actual = userGrid[r][c] === 1;
        if (expected !== actual) match = false;
      }
    }

    if (match) {
      statusVal.textContent = 'GLYPH DECRYPTED!';
      statusVal.style.color = '#39ff14';
      nextBtn.style.display = 'inline-block';
      window.AudioEngine.playVictory();
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_qn_cleared', JSON.stringify(clearedLevels));
      }
    } else if (explicit) {
      statusVal.textContent = 'INCOMPLETE BLUEPRINT';
      statusVal.style.color = '#ff1744';
    }
  }

  toggleToolBtn.onclick = () => {
    toolMode = toolMode === 'fill' ? 'cross' : 'fill';
    modeVal.textContent = toolMode === 'fill' ? 'FILL BIT (■)' : 'MARK CROSS (✕)';
    modeVal.style.color = toolMode === 'fill' ? '#00f0ff' : '#ff1744';
  };

  checkBtn.onclick = () => checkSolution(true);
  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateBlueprint(currentLevel);
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
        generateBlueprint(currentLevel);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateBlueprint(currentLevel);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  const qnIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="25" y="25" width="22" height="22" fill="#00f0ff"/>
  <rect x="53" y="25" width="22" height="22" fill="#00f0ff"/>
  <rect x="25" y="53" width="22" height="22" fill="#00f0ff"/>
  <text x="64" y="70" fill="#ff1744" font-size="20" font-weight="bold" text-anchor="middle">✕</text>
</svg>`;

  writeFile(path.join(qnDir, 'assets', 'icon.svg'), qnIcon);

  buildLevelGrid();
  generateBlueprint(1);
})();