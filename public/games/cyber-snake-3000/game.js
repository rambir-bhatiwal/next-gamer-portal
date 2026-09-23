/**
 * Standalone Game Engine & Canvas Renderer
 * Module: cyber-snake-3000
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * CYBER SNAKE 3000: QUANTUM FEED - 45 UNIQUE PCB THEMES
     * Features: Grid navigation, labyrinth walls, target length quotas,
     * procedural Web Audio API data packet feed pings & arpeggios.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const lengthVal = document.getElementById('lengthVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Motherboard Themes
      const THEMES = [
        { name: "Classic Green PCB", bg: "#021208", grid: "#042410", snake: "#00ff88", food: "#ff007f", wall: "#00f0ff" },
        { name: "Cyber Cyan Fiber", bg: "#010e17", grid: "#031c2e", snake: "#00f0ff", food: "#ffd700", wall: "#0077b6" },
        { name: "Dark Matter Obsidian", bg: "#020202", grid: "#0d0d0d", snake: "#651fff", food: "#00e5ff", wall: "#7b2cbf" },
        { name: "Gold Nanotube Array", bg: "#140e01", grid: "#261a02", snake: "#ffd700", food: "#ff3d00", wall: "#ffa500" },
        { name: "Amethyst Quantum Circuit", bg: "#0a0114", grid: "#1c0338", snake: "#c77dff", food: "#00ffcc", wall: "#9d4edd" },
        { name: "Cryo Superconductor", bg: "#02121c", grid: "#05263b", snake: "#64dfdf", food: "#f43f5e", wall: "#caf0f8" },
        { name: "Magma Heat-Sink", bg: "#140300", grid: "#290600", snake: "#ff5400", food: "#ffea00", wall: "#ff1744" },
        { name: "Steampunk Copper Bus", bg: "#140c03", grid: "#291806", snake: "#d4a373", food: "#00f0ff", wall: "#bc6c25" },
        { name: "Acid Coolant Grid", bg: "#0f1400", grid: "#1e2900", snake: "#ccff00", food: "#ff0055", wall: "#70e000" },
        { name: "Titanium Chassis Hub", bg: "#0a0a0f", grid: "#171721", snake: "#adb5bd", food: "#38bdf8", wall: "#e0e1dd" },
        { name: "Atmospheric Cloud Matrix", bg: "#041426", grid: "#09294d", snake: "#66b3ff", food: "#ff80bf", wall: "#ffffff" },
        { name: "Supernova Dust Core", bg: "#1a030d", grid: "#33061a", snake: "#ff3366", food: "#ffd700", wall: "#ff99aa" },
        { name: "Cobalt Nanowire Grid", bg: "#000f26", grid: "#001e4d", snake: "#0077b6", food: "#00ffff", wall: "#90e0ef" },
        { name: "Bioluminescent Spore Bus", bg: "#01170d", grid: "#032e1a", snake: "#10b981", food: "#f43f5e", wall: "#34d399" },
        { name: "Dark Nebula Trace", bg: "#05000a", grid: "#120024", snake: "#bf55ec", food: "#00f0ff", wall: "#e0aaff" },
        { name: "Titan Methane Siphon", bg: "#001a1a", grid: "#003333", snake: "#20b2aa", food: "#f59e0b", wall: "#48d1cc" },
        { name: "Silicon Dunes Bus", bg: "#171401", grid: "#2e2902", snake: "#f59e0b", food: "#22d3ee", wall: "#fbbf24" },
        { name: "Neutron Core Flux", bg: "#080117", grid: "#150236", snake: "#00f5d4", food: "#ff007f", wall: "#7b2cbf" },
        { name: "Hologram Ruins Trace", bg: "#00170f", grid: "#002e1e", snake: "#38b000", food: "#ffd700", wall: "#70e000" },
        { name: "Starlight Rose Substrate", bg: "#17001c", grid: "#2e0038", snake: "#f72585", food: "#00f0ff", wall: "#ff758f" },
        { name: "Asteroid Rig Board", bg: "#0d0d0d", grid: "#1c1c1c", snake: "#adb5bd", food: "#f43f5e", wall: "#f8f9fa" },
        { name: "Prismatic Aurora Bus", bg: "#001715", grid: "#002e2a", snake: "#48cae4", food: "#ff007f", wall: "#a0e426" },
        { name: "Radioactive Tracer", bg: "#0d1400", grid: "#1a2900", snake: "#aacc00", food: "#00f0ff", wall: "#ffff3f" },
        { name: "Pulsar Nexus Trace", bg: "#140114", grid: "#290229", snake: "#ff006e", food: "#ffd700", wall: "#8338ec" },
        { name: "Copper Boiler Grid", bg: "#1a0c02", grid: "#331804", snake: "#bc6c25", food: "#00ff88", wall: "#dda15e" },
        { name: "Zero-G Crystal Bus", bg: "#01121f", grid: "#02243d", snake: "#00e5ff", food: "#ff00aa", wall: "#69f0ae" },
        { name: "Krypton Flare Board", bg: "#001c16", grid: "#00382c", snake: "#00ff87", food: "#ffffff", wall: "#60efff" },
        { name: "Hyper-Space Warp Grid", bg: "#09001f", grid: "#17003d", snake: "#ff007f", food: "#ffd700", wall: "#00f0ff" },
        { name: "Crimson Eclipse Substrate", bg: "#1c0101", grid: "#380202", snake: "#ff1744", food: "#00ff88", wall: "#ff8a80" },
        { name: "Bismuth Matrix Board", bg: "#12001c", grid: "#240038", snake: "#e040fb", food: "#00f0ff", wall: "#00e676" },
        { name: "Thermal Steam Trace", bg: "#121214", grid: "#242429", snake: "#ff6d00", food: "#ffd700", wall: "#ffab40" },
        { name: "Exoplanet Canopy Circuit", bg: "#00170a", grid: "#002e14", snake: "#00c853", food: "#ff007f", wall: "#b9f6ca" },
        { name: "Tachyon Mirror Substrate", bg: "#0a001a", grid: "#140033", snake: "#d500f9", food: "#00ff88", wall: "#00b0ff" },
        { name: "Gamma Burst Array", bg: "#171700", grid: "#2e2e00", snake: "#ffff00", food: "#ff0055", wall: "#76ff03" },
        { name: "Vaporwave Pastel PCB", bg: "#1c0b1f", grid: "#36163d", snake: "#ff80bf", food: "#ffd700", wall: "#80dfff" },
        { name: "Dark Monolith Substrate", bg: "#020202", grid: "#0a0a0a", snake: "#651fff", food: "#ffffff", wall: "#00e5ff" },
        { name: "Quasar Relativistic Grid", bg: "#17020d", grid: "#2e041a", snake: "#ff0055", food: "#00ff88", wall: "#ffaa00" },
        { name: "Heliosphere Fringe Trace", bg: "#000e1f", grid: "#001c3d", snake: "#2979ff", food: "#ff007f", wall: "#00e5ff" },
        { name: "Synthetic Coral Array", bg: "#001a17", grid: "#00332e", snake: "#1de9b6", food: "#ffd700", wall: "#00b4d8" },
        { name: "Chrono Stasis Circuit", bg: "#0f0117", grid: "#1e022e", snake: "#e040fb", food: "#00f0ff", wall: "#7c4dff" },
        { name: "Cosmic Filament PCB", bg: "#030317", grid: "#06062e", snake: "#3d5afe", food: "#00ff88", wall: "#ff4081" },
        { name: "Supercluster Trace", bg: "#0a0014", grid: "#140029", snake: "#c026d3", food: "#ffd700", wall: "#e879f9" },
        { name: "Big Bang Echo Board", bg: "#05000a", grid: "#0d001a", snake: "#ffd700", food: "#00f0ff", wall: "#ff007f" },
        { name: "Hadron Collision Grid", bg: "#010814", grid: "#02122b", snake: "#00f0ff", food: "#ff1744", wall: "#a5f3fc" },
        { name: "Omega Point Infinite Core", bg: "#000000", grid: "#0d0d0d", snake: "#00f0ff", food: "#ffffff", wall: "#ff007f" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playBeep(freq, duration = 0.06) {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, actx.currentTime);
          gain.gain.setValueAtTime(0.12, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + duration);
        } catch(e) {}
      }

      // Game Variables
      const gridSize = 20;
      let gridCols = 25;
      let gridRows = 20;

      let currentLevel = parseInt(localStorage.getItem('cs_saved_level') || '1', 10);
      let isPlaying = false;
      let score = 0;
      let targetLength = 15;

      let snake = [];
      let dir = { x: 1, y: 0 };
      let nextDir = { x: 1, y: 0 };
      let food = { x: 0, y: 0 };
      let walls = [];
      let gameInterval = null;

      // Input
      window.addEventListener('keydown', e => {
        if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && dir.y === 0) nextDir = { x: 0, y: -1 };
        if ((e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') && dir.y === 0) nextDir = { x: 0, y: 1 };
        if ((e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') && dir.x === 0) nextDir = { x: -1, y: 0 };
        if ((e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') && dir.x === 0) nextDir = { x: 1, y: 0 };
      });

      // Touch
      let touchStartX = 0, touchStartY = 0;
      window.addEventListener('touchstart', e => {
        const t = e.touches[0];
        touchStartX = t.clientX; touchStartY = t.clientY;
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        const dx = t.clientX - touchStartX;
        const dy = t.clientY - touchStartY;
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx > 20 && dir.x === 0) nextDir = { x: 1, y: 0 };
          else if (dx < -20 && dir.x === 0) nextDir = { x: -1, y: 0 };
        } else {
          if (dy > 20 && dir.y === 0) nextDir = { x: 0, y: 1 };
          else if (dy < -20 && dir.y === 0) nextDir = { x: 0, y: -1 };
        }
      }, { passive: true });

      function spawnFood() {
        let valid = false;
        while (!valid) {
          food.x = Math.floor(Math.random() * (gridCols - 2)) + 1;
          food.y = Math.floor(Math.random() * (gridRows - 2)) + 1;
          const onSnake = snake.some(s => s.x === food.x && s.y === food.y);
          const onWall = walls.some(w => w.x === food.x && w.y === food.y);
          if (!onSnake && !onWall) valid = true;
        }
      }

      function setupLevel(lvl) {
        gridCols = Math.floor((width * 0.8) / gridSize);
        gridRows = Math.floor((height * 0.75) / gridSize);

        snake = [
          { x: 5, y: 5 },
          { x: 4, y: 5 },
          { x: 3, y: 5 }
        ];
        dir = { x: 1, y: 0 };
        nextDir = { x: 1, y: 0 };

        // Labyrinth Walls per level
        walls = [];
        const wallCount = Math.min(18, 4 + Math.floor(lvl / 4));
        for (let i = 0; i < wallCount; i++) {
          const wx = Math.floor(Math.random() * (gridCols - 4)) + 2;
          const wy = Math.floor(Math.random() * (gridRows - 4)) + 2;
          if (Math.hypot(wx - 5, wy - 5) > 4) {
            walls.push({ x: wx, y: wy });
          }
        }

        targetLength = 10 + Math.floor(lvl * 0.8);
        spawnFood();
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
        themeVal.style.color = t.snake;
        lengthVal.textContent = `${snake.length} / ${targetLength} Nodes`;
        scoreVal.textContent = `${score} PTS`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('cs_saved_level', currentLevel);
        setupLevel(currentLevel);
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playBeep(440, 0.2);

        if (gameInterval) clearInterval(gameInterval);
        const tickSpeed = Math.max(85, 130 - (currentLevel * 0.9));
        gameInterval = setInterval(gameStep, tickSpeed);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        if (gameInterval) clearInterval(gameInterval);
        playBeep(win ? 880 : 110, 0.4);
        menuTitle.textContent = win ? "DATA PACKET QUOTA ACHIEVED!" : "CIRCUIT SHORT-CIRCUIT";
        menuDesc.textContent = win ?
          `Congratulations! Snake length reached ${snake.length} quantum nodes. Board ${currentLevel} cleared!` :
          `Crash with motherboard wall or self-segment! Final Score: ${score} pts.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT MOTHERBOARD" : "RETRY LEVEL";
        startBtn.onclick = () => {
          if (win && currentLevel < 45) currentLevel++;
          startLevel(currentLevel);
        };
        menuScreen.classList.remove('hidden');
        renderLevelSelector();
      }

      // Step
      function gameStep() {
        if (!isPlaying) return;

        dir = nextDir;
        const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

        // Wall collisions (Outer Grid Border)
        if (head.x < 0 || head.x >= gridCols || head.y < 0 || head.y >= gridRows) {
          endLevel(false);
          return;
        }

        // Labyrinth wall collisions
        if (walls.some(w => w.x === head.x && w.y === head.y)) {
          endLevel(false);
          return;
        }

        // Self collision
        if (snake.some(s => s.x === head.x && s.y === head.y)) {
          endLevel(false);
          return;
        }

        snake.unshift(head);

        // Food collision
        if (head.x === food.x && head.y === food.y) {
          score += 100;
          playBeep(520 + (snake.length % 8) * 50);
          updateUI();
          if (snake.length >= targetLength) {
            endLevel(true);
            return;
          }
          spawnFood();
        } else {
          snake.pop();
        }

        updateUI();
      }

      // Draw
      function draw() {
        const t = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = t.bg;
        ctx.fillRect(0, 0, width, height);

        // Center grid
        const boardW = gridCols * gridSize;
        const boardH = gridRows * gridSize;
        const offsetX = (width - boardW) / 2;
        const offsetY = (height - boardH) / 2 + 10;

        ctx.save();
        ctx.translate(offsetX, offsetY);

        // Board background
        ctx.fillStyle = t.grid;
        ctx.fillRect(0, 0, boardW, boardH);

        // Outer glow border
        ctx.strokeStyle = t.wall;
        ctx.lineWidth = 3;
        ctx.shadowColor = t.wall;
        ctx.shadowBlur = 10;
        ctx.strokeRect(0, 0, boardW, boardH);
        ctx.shadowBlur = 0;

        // Draw Walls
        ctx.fillStyle = t.wall;
        for (let w of walls) {
          ctx.fillRect(w.x * gridSize + 2, w.y * gridSize + 2, gridSize - 4, gridSize - 4);
        }

        // Draw Food
        ctx.fillStyle = t.food;
        ctx.shadowColor = t.food;
        ctx.shadowBlur = 12;
        ctx.fillRect(food.x * gridSize + 2, food.y * gridSize + 2, gridSize - 4, gridSize - 4);
        ctx.shadowBlur = 0;

        // Draw Snake
        for (let i = 0; i < snake.length; i++) {
          const s = snake[i];
          ctx.fillStyle = i === 0 ? '#ffffff' : t.snake;
          ctx.shadowColor = t.snake;
          ctx.shadowBlur = i === 0 ? 14 : 6;
          ctx.beginPath();
          ctx.roundRect(s.x * gridSize + 1, s.y * gridSize + 1, gridSize - 2, gridSize - 2, 4);
          ctx.fill();
        }
        ctx.shadowBlur = 0;

        ctx.restore();

        requestAnimationFrame(draw);
      }

      // Init
      renderLevelSelector();
      setupLevel(currentLevel);
      updateUI();
      draw();
    })();
