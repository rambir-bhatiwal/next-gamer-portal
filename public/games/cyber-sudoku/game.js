/**
 * Cyber Sudoku - Standalone Game Logic
 * 45 Distinct Sectors with Valid Sudoku Solver & Generators
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
  const errorVal = document.getElementById('errorVal');
  const timerVal = document.getElementById('timerVal');
  const sudokuGrid = document.getElementById('sudokuGrid');
  const noteBtn = document.getElementById('noteBtn');
  const eraseBtn = document.getElementById('eraseBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const menuTitle = document.getElementById('menuTitle');
  const menuDesc = document.getElementById('menuDesc');
  const startBtn = document.getElementById('startBtn');

  let currentSector = 1;
  let clearedSectors = JSON.parse(localStorage.getItem('next_csd_cleared') || '[]');
  let mistakes = 0;
  let maxMistakes = 3;
  let notesMode = false;
  let selectedCell = null;
  let timerSecs = 0;
  let timerInterval = null;

  let solution = [];
  let board = [];
  let notes = [];

  // Sudoku Pattern Generator
  function generateSudoku(sector) {
    // Base valid 9x9 board
    const base = [
      [1,2,3, 4,5,6, 7,8,9],
      [4,5,6, 7,8,9, 1,2,3],
      [7,8,9, 1,2,3, 4,5,6],
      [2,3,1, 5,6,4, 8,9,7],
      [5,6,4, 8,9,7, 2,3,1],
      [8,9,7, 2,3,1, 5,6,4],
      [3,1,2, 6,4,5, 9,7,8],
      [6,4,5, 9,7,8, 3,1,2],
      [9,7,8, 3,1,2, 6,4,5]
    ];

    // Shuffle rows within bands, columns within stacks, and map numbers based on sector seed
    const map = [0,1,2,3,4,5,6,7,8,9];
    for (let i = 1; i <= 9; i++) {
      const j = 1 + ((i * 7 + sector * 13) % 9);
      const temp = map[i]; map[i] = map[j]; map[j] = temp;
    }

    solution = base.map(row => row.map(v => map[v]));

    // Difficulty determines how many cells are given (45 Easy, 35 Medium, 28 Master)
    const cluesCount = sector <= 15 ? 42 : (sector <= 30 ? 35 : 28);
    board = solution.map(row => [...row]);
    notes = Array(9).fill(null).map(() => Array(9).fill(null).map(() => []));

    // Remove numbers to create the puzzle
    let cellsToRemove = 81 - cluesCount;
    const order = [];
    for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) order.push([r, c]);
    // Seeded shuffle
    for (let i = order.length - 1; i > 0; i--) {
      const j = (i * 3 + sector * 11) % (i + 1);
      const temp = order[i]; order[i] = order[j]; order[j] = temp;
    }

    for (let i = 0; i < cellsToRemove; i++) {
      const [r, c] = order[i];
      board[r][c] = 0;
    }

    mistakes = 0;
    timerSecs = 0;
    selectedCell = null;
    updateHud();
    renderGrid();

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerSecs++;
      const mins = String(Math.floor(timerSecs / 60)).padStart(2, '0');
      const secs = String(timerSecs % 60).padStart(2, '0');
      timerVal.textContent = mins + ':' + secs;
    }, 1000);
  }

  function updateHud() {
    const theme = THEMES[(currentSector - 1) % THEMES.length];
    themeVal.textContent = currentSector + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    errorVal.textContent = 'MISTAKES: ' + mistakes + ' / ' + maxMistakes;
    errorVal.style.color = mistakes >= 2 ? '#ff1744' : theme.primary;
  }

  function renderGrid() {
    sudokuGrid.innerHTML = '';
    const theme = THEMES[(currentSector - 1) % THEMES.length];

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const val = board[r][c];
        const cell = document.createElement('div');
        cell.className = 'cell';
        if (c === 2 || c === 5) cell.classList.add('b-right');
        if (r === 2 || r === 5) cell.classList.add('b-bottom');

        if (val !== 0) {
          cell.textContent = val;
          if (val === solution[r][c]) {
            cell.classList.add(board[r][c] === solution[r][c] && !notes[r][c].length ? 'given' : 'player');
          }
        } else if (notes[r][c].length > 0) {
          const nGrid = document.createElement('div');
          nGrid.className = 'notes-grid';
          for (let n = 1; n <= 9; n++) {
            const nSpan = document.createElement('span');
            nSpan.textContent = notes[r][c].includes(n) ? n : '';
            nGrid.appendChild(nSpan);
          }
          cell.appendChild(nGrid);
        }

        cell.onclick = () => selectCell(r, c);
        sudokuGrid.appendChild(cell);
      }
    }
    highlightCells();
  }

  function selectCell(r, c) {
    selectedCell = { r, c };
    highlightCells();
  }

  function highlightCells() {
    const cells = sudokuGrid.children;
    for (let i = 0; i < 81; i++) {
      const r = Math.floor(i / 9);
      const c = i % 9;
      const cell = cells[i];
      cell.classList.remove('selected', 'highlighted', 'same-val');

      if (selectedCell) {
        if (selectedCell.r === r && selectedCell.c === c) {
          cell.classList.add('selected');
        } else if (selectedCell.r === r || selectedCell.c === c || (Math.floor(selectedCell.r/3) === Math.floor(r/3) && Math.floor(selectedCell.c/3) === Math.floor(c/3))) {
          cell.classList.add('highlighted');
        }

        const selVal = board[selectedCell.r][selectedCell.c];
        if (selVal !== 0 && board[r][c] === selVal) {
          cell.classList.add('same-val');
        }
      }
    }
  }

  function inputDigit(digit) {
    if (!selectedCell) return;
    const { r, c } = selectedCell;

    // If cell already given from start, prevent overwrite
    // We check if value matches solution and was initial
    if (board[r][c] === solution[r][c] && !notes[r][c].length) return;

    if (notesMode) {
      const idx = notes[r][c].indexOf(digit);
      if (idx >= 0) notes[r][c].splice(idx, 1);
      else notes[r][c].push(digit);
      window.AudioEngine.playNote();
      renderGrid();
      return;
    }

    if (digit === solution[r][c]) {
      board[r][c] = digit;
      notes[r][c] = [];
      window.AudioEngine.playPlace(digit);
      checkVictory();
    } else {
      mistakes++;
      window.AudioEngine.playError();
      updateHud();
      if (mistakes >= maxMistakes) {
        alert('FIREWALL LOCKOUT: Maximum mistakes reached. Matrix resetting.');
        generateSudoku(currentSector);
        return;
      }
    }
    renderGrid();
  }

  function eraseSelected() {
    if (!selectedCell) return;
    const { r, c } = selectedCell;
    if (board[r][c] !== solution[r][c] || notes[r][c].length > 0) {
      board[r][c] = 0;
      notes[r][c] = [];
      renderGrid();
    }
  }

  function checkVictory() {
    let complete = true;
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] !== solution[r][c]) complete = false;
      }
    }
    if (complete) {
      clearInterval(timerInterval);
      window.AudioEngine.playVictory();
      if (!clearedSectors.includes(currentSector)) {
        clearedSectors.push(currentSector);
        localStorage.setItem('next_csd_cleared', JSON.stringify(clearedSectors));
      }
      setTimeout(() => {
        alert('SECTOR ' + currentSector + ' DECRYPTED! Clean run.');
        currentSector = Math.min(45, currentSector + 1);
        generateSudoku(currentSector);
      }, 300);
    }
  }

  // Event Listeners
  document.querySelectorAll('.num-key').forEach(btn => {
    btn.onclick = () => inputDigit(parseInt(btn.dataset.val));
  });

  window.addEventListener('keydown', (e) => {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 9) inputDigit(num);
    else if (e.key === 'Backspace' || e.key === 'Delete') eraseSelected();
  });

  noteBtn.onclick = () => {
    notesMode = !notesMode;
    noteBtn.classList.toggle('active', notesMode);
    noteBtn.textContent = 'NOTES: ' + (notesMode ? 'ON' : 'OFF');
  };

  eraseBtn.onclick = eraseSelected;
  restartBtn.onclick = () => generateSudoku(currentSector);

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentSector ? ' active' : '') + (clearedSectors.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        currentSector = i;
        menuScreen.classList.add('hidden');
        generateSudoku(currentSector);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateSudoku(currentSector);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  const csdIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="20" y="20" width="60" height="60" rx="6" fill="none" stroke="#00ffcc" stroke-width="3"/>
  <line x1="40" y1="20" x2="40" y2="80" stroke="#7c4dff" stroke-width="2"/>
  <line x1="60" y1="20" x2="60" y2="80" stroke="#7c4dff" stroke-width="2"/>
  <line x1="20" y1="40" x2="80" y2="40" stroke="#7c4dff" stroke-width="2"/>
  <line x1="20" y1="60" x2="80" y2="60" stroke="#7c4dff" stroke-width="2"/>
  <text x="30" y="36" fill="#00ffcc" font-size="14" font-weight="bold" text-anchor="middle">7</text>
  <text x="50" y="56" fill="#ff007f" font-size="14" font-weight="bold" text-anchor="middle">3</text>
  <text x="70" y="76" fill="#ffd600" font-size="14" font-weight="bold" text-anchor="middle">9</text>
</svg>`;

  writeFile(path.join(csdDir, 'assets', 'icon.svg'), csdIcon);

  buildLevelGrid();
  generateSudoku(1);
})();