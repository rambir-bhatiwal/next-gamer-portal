/**
 * Quantum Matrix Hacker - Standalone Game Logic
 * 45 Thematic Security Sectors with Match-3 Cryptographic Cascades
 */
(function () {
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

  const ROWS = 6;
  const COLS = 6;
  const NODE_TYPES = 5;
  const SYMBOLS = ['◈', '⬡', '▲', '◆', '✦'];

  const gridEl = document.getElementById('matrixGrid');
  const themeVal = document.getElementById('themeVal');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const timeDisplay = document.getElementById('timeDisplay');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_qm_cleared') || '[]');
  let targetScore = 800;
  let board = [];
  let selectedTile = null;
  let score = 0;
  let timeLeft = 60;
  let timerInterval = null;
  let isPlaying = false;

  function createBoard() {
    board = [];
    for (let r = 0; r < ROWS; r++) {
      board[r] = [];
      for (let c = 0; c < COLS; c++) {
        let type;
        do {
          type = Math.floor(Math.random() * NODE_TYPES);
        } while (
          (c >= 2 && board[r][c - 1] === type && board[r][c - 2] === type) ||
          (r >= 2 && board[r - 1][c] === type && board[r - 2][c] === type)
        );
        board[r][c] = type;
      }
    }
  }

  function renderBoard() {
    gridEl.innerHTML = '';
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const type = board[r][c];
        const tile = document.createElement('div');
        tile.className = 'tile t-' + type;
        tile.textContent = SYMBOLS[type];
        tile.dataset.r = r;
        tile.dataset.c = c;

        if (selectedTile && selectedTile.r === r && selectedTile.c === c) {
          tile.classList.add('selected');
        }

        tile.addEventListener('click', () => onTileClick(r, c));
        gridEl.appendChild(tile);
      }
    }
  }

  function onTileClick(r, c) {
    if (!isPlaying) return;
    if (!selectedTile) {
      selectedTile = { r, c };
      window.AudioEngine.playClick();
      renderBoard();
      return;
    }

    const dr = Math.abs(selectedTile.r - r);
    const dc = Math.abs(selectedTile.c - c);

    if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
      swap(selectedTile.r, selectedTile.c, r, c);
      selectedTile = null;
      renderBoard();

      setTimeout(() => {
        const matches = findMatches();
        if (matches.length > 0) {
          resolveMatches();
        } else {
          // Revert swap if no match
          swap(selectedTile ? selectedTile.r : r, selectedTile ? selectedTile.c : c, r, c);
          window.AudioEngine.playError();
          renderBoard();
        }
      }, 150);
    } else {
      selectedTile = { r, c };
      window.AudioEngine.playClick();
      renderBoard();
    }
  }

  function swap(r1, c1, r2, c2) {
    const temp = board[r1][c1];
    board[r1][c1] = board[r2][c2];
    board[r2][c2] = temp;
  }

  function findMatches() {
    const matched = [];
    // Horizontal
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS - 2; c++) {
        const val = board[r][c];
        if (val !== -1 && val === board[r][c + 1] && val === board[r][c + 2]) {
          matched.push({ r, c }, { r, c: c + 1 }, { r, c: c + 2 });
        }
      }
    }
    // Vertical
    for (let c = 0; c < COLS; c++) {
      for (let r = 0; r < ROWS - 2; r++) {
        const val = board[r][c];
        if (val !== -1 && val === board[r + 1][c] && val === board[r + 2][c]) {
          matched.push({ r, c }, { r: r + 1, c }, { r: r + 2, c });
        }
      }
    }
    return matched;
  }

  function resolveMatches() {
    const matches = findMatches();
    if (matches.length === 0) return;

    const unique = new Set(matches.map(m => m.r + ',' + m.c));
    const count = unique.size;

    score += count * 50;
    timeLeft = Math.min(99, timeLeft + Math.floor(count / 2));
    updateHud();
    window.AudioEngine.playCascade();

    unique.forEach(key => {
      const [r, c] = key.split(',').map(Number);
      board[r][c] = -1;
    });

    // Drop down
    for (let c = 0; c < COLS; c++) {
      let emptyRow = ROWS - 1;
      for (let r = ROWS - 1; r >= 0; r--) {
        if (board[r][c] !== -1) {
          board[emptyRow][c] = board[r][c];
          if (emptyRow !== r) board[r][c] = -1;
          emptyRow--;
        }
      }
      while (emptyRow >= 0) {
        board[emptyRow][c] = Math.floor(Math.random() * NODE_TYPES);
        emptyRow--;
      }
    }

    renderBoard();
    setTimeout(resolveMatches, 220);

    if (score >= targetScore) {
      triggerVictory();
    }
  }

  function updateHud() {
    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    scoreDisplay.textContent = score + ' / ' + targetScore + ' PTS';
    scoreDisplay.style.color = score >= targetScore ? '#39ff14' : theme.primary;
    timeDisplay.textContent = timeLeft + 's';
  }

  function triggerVictory() {
    if (!clearedLevels.includes(currentLevel)) {
      clearedLevels.push(currentLevel);
      localStorage.setItem('next_qm_cleared', JSON.stringify(clearedLevels));
    }
    nextBtn.style.display = 'inline-block';
    window.AudioEngine.playVictory();
  }

  function startSession(lvl) {
    currentLevel = lvl;
    targetScore = 600 + (lvl * 150);
    score = 0;
    timeLeft = 60;
    selectedTile = null;
    nextBtn.style.display = 'none';

    createBoard();
    renderBoard();
    updateHud();
    isPlaying = true;
    overlay.classList.add('hidden');

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!isPlaying) return;
      timeLeft--;
      timeDisplay.textContent = timeLeft + 's';
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endSession();
      }
    }, 1000);
  }

  function endSession() {
    isPlaying = false;
    window.AudioEngine.playError();
    overlayTitle.textContent = 'FIREWALL LOCKED';
    overlayDesc.textContent = 'Breach window expired! Total score: ' + score + ' points. Target was ' + targetScore + ' PTS.';
    startBtn.textContent = 'RE-INFILTRATE';
    overlay.classList.remove('hidden');
  }

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '') + (clearedLevels.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        startSession(i);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => startSession(currentLevel);
  restartBtn.onclick = () => startSession(currentLevel);
  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    startSession(currentLevel);
  };
  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    overlay.classList.remove('hidden');
  };

  buildLevelGrid();
  startSession(1);
})();