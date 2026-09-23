/**
 * Standalone Game Engine & Canvas Renderer
 * Module: pixel-drop
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * PIXEL DROP: NEON TETROMINO COLLAPSE - 45 UNIQUE MATRIX THEMES
     * Features: 7 geometric tetrominoes, line-clear chords, gravity scaling,
     * procedural Web Audio API rotation ticks and clear chords.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const linesVal = document.getElementById('linesVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Tetromino Themes
      const THEMES = [
        { name: "Cyber Neon Matrix", bg: "#02010c", grid: "#08041c", border: "#00f0ff", primary: "#ff007f" },
        { name: "Glacial Crystal Blocks", bg: "#010e1a", grid: "#031c2e", border: "#64dfdf", primary: "#caf0f8" },
        { name: "Molten Rock Blocks", bg: "#140300", grid: "#260600", border: "#ff3300", primary: "#ffaa00" },
        { name: "Steampunk Brass Blocks", bg: "#140c03", grid: "#291806", border: "#d4a373", primary: "#e9c46a" },
        { name: "Quantum Singularity", bg: "#000000", grid: "#0d0014", border: "#651fff", primary: "#00e5ff" },
        { name: "Acid Rain Matrix", bg: "#0f1700", grid: "#1c2b00", border: "#ccff00", primary: "#70e000" },
        { name: "Obsidian Badlands", bg: "#0a0a0a", grid: "#1c1c1c", border: "#ff0055", primary: "#ff5500" },
        { name: "Cloud City Towers", bg: "#041426", grid: "#082647", border: "#66b3ff", primary: "#ffffff" },
        { name: "Supernova Flare", bg: "#1c030d", grid: "#36061a", border: "#ff3366", primary: "#ffd700" },
        { name: "Cobalt Basin", bg: "#000f26", grid: "#001e4d", border: "#0077b6", primary: "#48cae4" },
        { name: "Emerald Nanite Hex", bg: "#01170d", grid: "#032e1a", border: "#10b981", primary: "#34d399" },
        { name: "Dark Nebula Hollow", bg: "#05000a", grid: "#120024", border: "#bf55ec", primary: "#e0aaff" },
        { name: "Titan Methane", bg: "#001a1a", grid: "#003333", border: "#20b2aa", primary: "#48d1cc" },
        { name: "Silicon Sand Matrix", bg: "#171401", grid: "#2e2902", border: "#f59e0b", primary: "#fbbf24" },
        { name: "Neutron Core Flux", bg: "#080117", grid: "#150236", border: "#00f5d4", primary: "#7b2cbf" },
        { name: "Holographic Ruins", bg: "#00170f", grid: "#002e1e", border: "#38b000", primary: "#70e000" },
        { name: "Starlight Rose", bg: "#17001c", grid: "#2e0038", border: "#f72585", primary: "#ff758f" },
        { name: "Asteroid Slag", bg: "#0d0d0d", grid: "#1c1c1c", border: "#adb5bd", primary: "#e0e1dd" },
        { name: "Prismatic Aurora", bg: "#001715", grid: "#002e2a", border: "#48cae4", primary: "#a0e426" },
        { name: "Radioactive Tracer", bg: "#0d1400", grid: "#1a2900", border: "#aacc00", primary: "#ffff3f" },
        { name: "Pulsar Nexus", bg: "#140114", grid: "#290229", border: "#ff006e", primary: "#8338ec" },
        { name: "Copper Boiler", bg: "#1a0c02", grid: "#331804", border: "#bc6c25", primary: "#dda15e" },
        { name: "Zero-G Crystal", bg: "#01121f", grid: "#02243d", border: "#00e5ff", primary: "#69f0ae" },
        { name: "Krypton Flare", bg: "#001c16", grid: "#00382c", border: "#00ff87", primary: "#60efff" },
        { name: "Hyper-Space Warp", bg: "#09001f", grid: "#17003d", border: "#ff007f", primary: "#00f0ff" },
        { name: "Crimson Eclipse", bg: "#1c0101", grid: "#380202", border: "#ff1744", primary: "#ff8a80" },
        { name: "Bismuth Matrix", bg: "#12001c", grid: "#240038", border: "#e040fb", primary: "#00e676" },
        { name: "Thermal Steam", bg: "#121214", grid: "#242429", border: "#ff6d00", primary: "#ffab40" },
        { name: "Exoplanet Flora", bg: "#00170a", grid: "#002e14", border: "#00c853", primary: "#b9f6ca" },
        { name: "Tachyon Mirror", bg: "#0a001a", grid: "#140033", border: "#d500f9", primary: "#00b0ff" },
        { name: "Gamma Burst", bg: "#171700", grid: "#2e2e00", border: "#ffff00", primary: "#76ff03" },
        { name: "Vaporwave Pastel", bg: "#1c0b1f", grid: "#36163d", border: "#ff80bf", primary: "#80dfff" },
        { name: "Dark Monolith", bg: "#020202", grid: "#0a0a0a", border: "#651fff", primary: "#00e5ff" },
        { name: "Quasar Relativistic", bg: "#17020d", grid: "#2e041a", border: "#ff0055", primary: "#ffaa00" },
        { name: "Heliosphere Fringe", bg: "#000e1f", grid: "#001c3d", border: "#2979ff", primary: "#00e5ff" },
        { name: "Synthetic Coral", bg: "#001a17", grid: "#00332e", border: "#1de9b6", primary: "#00b4d8" },
        { name: "Chrono Stasis", bg: "#0f0117", grid: "#1e022e", border: "#e040fb", primary: "#7c4dff" },
        { name: "Cosmic Filament", bg: "#030317", grid: "#06062e", border: "#3d5afe", primary: "#ff4081" },
        { name: "Supercluster Core", bg: "#0a0014", grid: "#140029", border: "#c026d3", primary: "#e879f9" },
        { name: "Big Bang Echo", bg: "#05000a", grid: "#0d001a", border: "#ffd700", primary: "#ff007f" },
        { name: "Hadron Collider", bg: "#010814", grid: "#02122b", border: "#00f0ff", primary: "#a5f3fc" },
        { name: "Ascendant Celestial", bg: "#080010", grid: "#12001f", border: "#ffffff", primary: "#ffd700" },
        { name: "Omega Point Infinite", bg: "#000000", grid: "#0a0a0a", border: "#00f0ff", primary: "#ff007f" },
        { name: "Solar Wind Flare", bg: "#140800", grid: "#2b1000", border: "#ff9100", primary: "#ffea00" },
        { name: "Omega Genesis Apex", bg: "#020202", grid: "#0d0d0d", border: "#ffffff", primary: "#00f0ff" }
      ];

      // Tetromino Shapes
      const SHAPES = [
        [[1, 1, 1, 1]], // I
        [[1, 1], [1, 1]], // O
        [[0, 1, 0], [1, 1, 1]], // T
        [[1, 0, 0], [1, 1, 1]], // L
        [[0, 0, 1], [1, 1, 1]], // J
        [[0, 1, 1], [1, 1, 0]], // S
        [[1, 1, 0], [0, 1, 1]]  // Z
      ];
      const COLORS = ["#00f0ff", "#ffd700", "#d500f9", "#ff9100", "#2979ff", "#00ff88", "#ff0055"];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playTone(freq, type = 'sine', duration = 0.08) {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, actx.currentTime);
          gain.gain.setValueAtTime(0.12, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + duration);
        } catch(e) {}
      }

      // Matrix State: 10 cols x 20 rows
      const COLS = 10;
      const ROWS = 20;
      const blockSize = 24;

      let board = [];
      let currentLevel = parseInt(localStorage.getItem('pd_saved_level') || '1', 10);
      let isPlaying = false;
      let score = 0;
      let linesCleared = 0;
      let targetLines = 6;
      let currentPiece = null;
      let pieceX = 0;
      let pieceY = 0;
      let dropTimer = 0;
      let dropInterval = 40; // Frames per drop

      function resetBoard() {
        board = [];
        for (let r = 0; r < ROWS; r++) {
          board.push(new Array(COLS).fill(0));
        }
      }

      function spawnPiece() {
        const idx = Math.floor(Math.random() * SHAPES.length);
        currentPiece = {
          matrix: SHAPES[idx],
          color: COLORS[idx]
        };
        pieceX = Math.floor(COLS / 2) - Math.floor(currentPiece.matrix[0].length / 2);
        pieceY = 0;

        if (checkCollision(pieceX, pieceY, currentPiece.matrix)) {
          endLevel(false);
        }
      }

      function checkCollision(x, y, matrix) {
        for (let r = 0; r < matrix.length; r++) {
          for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] !== 0) {
              const newX = x + c;
              const newY = y + r;
              if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
              if (newY >= 0 && board[newY][newX] !== 0) return true;
            }
          }
        }
        return false;
      }

      function rotate(matrix) {
        return matrix[0].map((_, i) => matrix.map(row => row[i]).reverse());
      }

      // Input
      window.addEventListener('keydown', e => {
        if (!isPlaying || !currentPiece) return;
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
          if (!checkCollision(pieceX - 1, pieceY, currentPiece.matrix)) {
            pieceX--;
            playTone(300, 'sine', 0.04);
          }
        }
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
          if (!checkCollision(pieceX + 1, pieceY, currentPiece.matrix)) {
            pieceX++;
            playTone(300, 'sine', 0.04);
          }
        }
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
          const rotated = rotate(currentPiece.matrix);
          if (!checkCollision(pieceX, pieceY, rotated)) {
            currentPiece.matrix = rotated;
            playTone(480, 'triangle', 0.05);
          }
        }
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
          if (!checkCollision(pieceX, pieceY + 1, currentPiece.matrix)) {
            pieceY++;
            score += 1;
            updateUI();
          }
        }
        if (e.key === ' ') {
          // Hard Drop
          while (!checkCollision(pieceX, pieceY + 1, currentPiece.matrix)) {
            pieceY++;
            score += 2;
          }
          lockPiece();
          playTone(200, 'square', 0.06);
        }
      });

      // Touch
      let touchStartX = 0, touchStartY = 0;
      window.addEventListener('touchstart', e => {
        const t = e.touches[0];
        touchStartX = t.clientX; touchStartY = t.clientY;
      }, { passive: true });
      window.addEventListener('touchend', e => {
        if (!isPlaying || !currentPiece) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - touchStartX;
        const dy = t.clientY - touchStartY;
        if (Math.abs(dx) < 15 && Math.abs(dy) < 15) {
          // Tap to rotate
          const rotated = rotate(currentPiece.matrix);
          if (!checkCollision(pieceX, pieceY, rotated)) {
            currentPiece.matrix = rotated;
            playTone(480, 'triangle', 0.05);
          }
        } else if (Math.abs(dx) > Math.abs(dy)) {
          if (dx > 25 && !checkCollision(pieceX + 1, pieceY, currentPiece.matrix)) pieceX++;
          else if (dx < -25 && !checkCollision(pieceX - 1, pieceY, currentPiece.matrix)) pieceX--;
        } else {
          if (dy > 30) {
            while (!checkCollision(pieceX, pieceY + 1, currentPiece.matrix)) pieceY++;
            lockPiece();
          }
        }
      }, { passive: true });

      function lockPiece() {
        for (let r = 0; r < currentPiece.matrix.length; r++) {
          for (let c = 0; c < currentPiece.matrix[r].length; c++) {
            if (currentPiece.matrix[r][c] !== 0) {
              board[pieceY + r][pieceX + c] = currentPiece.color;
            }
          }
        }

        // Line clears
        let cleared = 0;
        for (let r = ROWS - 1; r >= 0; r--) {
          if (board[r].every(cell => cell !== 0)) {
            board.splice(r, 1);
            board.unshift(new Array(COLS).fill(0));
            cleared++;
            r++;
          }
        }

        if (cleared > 0) {
          linesCleared += cleared;
          score += [0, 100, 300, 500, 800][cleared] * currentLevel;
          playTone(520 + cleared * 120, 'sine', 0.2);
          updateUI();

          if (linesCleared >= targetLines) {
            endLevel(true);
            return;
          }
        }

        spawnPiece();
      }

      // UI
      function renderLevelSelector() {
        levelSelectGrid.innerHTML = '';
        for (let i = 1; i <= 45; i++) {
          const btn = document.createElement('button');
          btn.className = `lvl-btn ${i === currentLevel ? 'active' : ''}`;
          btn.textContent = i;
          btn.onclick = () => {
            currentLevel = i;
            document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateUI();
          };
          levelSelectGrid.appendChild(btn);
        }
      }

      function updateUI() {
        const t = THEMES[(currentLevel - 1) % THEMES.length];
        themeVal.textContent = `${currentLevel}: ${t.name}`;
        themeVal.style.color = t.border;
        linesVal.textContent = `${linesCleared} / ${targetLines} Lines`;
        scoreVal.textContent = `${score} PTS | ${(1.0 + currentLevel * 0.05).toFixed(1)}G`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('pd_saved_level', currentLevel);
        resetBoard();
        linesCleared = 0;
        targetLines = 5 + Math.floor(lvl * 0.5);
        dropInterval = Math.max(22, 48 - Math.floor(lvl * 0.5));
        dropTimer = 0;
        updateUI();
        spawnPiece();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playTone(330, 'triangle', 0.2);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        playTone(win ? 880 : 120, 0.4);
        menuTitle.textContent = win ? "MATRIX STABILIZED!" : "MATRIX OVERFLOW";
        menuDesc.textContent = win ?
          `Cleared ${linesCleared} tetromino lines in Stage ${currentLevel}! Final Score: ${score} pts.` :
          `Blocks reached the upper boundary limit! Score: ${score} pts. Clear lines faster to avoid matrix lock.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT MATRIX" : "RETRY LEVEL";
        startBtn.onclick = () => {
          if (win && currentLevel < 45) currentLevel++;
          startLevel(currentLevel);
        };
        menuScreen.classList.remove('hidden');
        renderLevelSelector();
      }

      // Update Loop
      function update() {
        if (!isPlaying || !currentPiece) return;

        dropTimer++;
        if (dropTimer >= dropInterval) {
          dropTimer = 0;
          if (!checkCollision(pieceX, pieceY + 1, currentPiece.matrix)) {
            pieceY++;
          } else {
            lockPiece();
          }
        }
      }

      // Draw
      function draw() {
        const t = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = t.bg;
        ctx.fillRect(0, 0, width, height);

        const boardW = COLS * blockSize;
        const boardH = ROWS * blockSize;
        const offsetX = (width - boardW) / 2;
        const offsetY = (height - boardH) / 2 + 10;

        ctx.save();
        ctx.translate(offsetX, offsetY);

        // Matrix Board Background
        ctx.fillStyle = t.grid;
        ctx.fillRect(0, 0, boardW, boardH);

        // Grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        ctx.lineWidth = 1;
        for (let c = 0; c <= COLS; c++) {
          ctx.beginPath();
          ctx.moveTo(c * blockSize, 0);
          ctx.lineTo(c * blockSize, boardH);
          ctx.stroke();
        }
        for (let r = 0; r <= ROWS; r++) {
          ctx.beginPath();
          ctx.moveTo(0, r * blockSize);
          ctx.lineTo(boardW, r * blockSize);
          ctx.stroke();
        }

        // Board Outer Glow Border
        ctx.strokeStyle = t.border;
        ctx.lineWidth = 3;
        ctx.shadowColor = t.border;
        ctx.shadowBlur = 12;
        ctx.strokeRect(0, 0, boardW, boardH);
        ctx.shadowBlur = 0;

        // Draw Placed Blocks
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            if (board[r][c] !== 0) {
              ctx.fillStyle = board[r][c];
              ctx.fillRect(c * blockSize + 1, r * blockSize + 1, blockSize - 2, blockSize - 2);
              ctx.strokeStyle = '#fff';
              ctx.lineWidth = 1;
              ctx.strokeRect(c * blockSize + 1, r * blockSize + 1, blockSize - 2, blockSize - 2);
            }
          }
        }

        // Draw Falling Piece
        if (currentPiece) {
          ctx.fillStyle = currentPiece.color;
          ctx.shadowColor = currentPiece.color;
          ctx.shadowBlur = 10;
          for (let r = 0; r < currentPiece.matrix.length; r++) {
            for (let c = 0; c < currentPiece.matrix[r].length; c++) {
              if (currentPiece.matrix[r][c] !== 0) {
                const px = (pieceX + c) * blockSize;
                const py = (pieceY + r) * blockSize;
                ctx.fillRect(px + 1, py + 1, blockSize - 2, blockSize - 2);
              }
            }
          }
          ctx.shadowBlur = 0;
        }

        ctx.restore();

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      resetBoard();
      updateUI();
      draw();
    })();
