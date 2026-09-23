/**
 * Standalone Game Engine & Canvas Renderer
 * Module: turbo-pac-grid
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * TURBO PAC-GRID: CYBER MAZE RUN - 45 THEMATIC ARCHITECTURES
     * Procedural Web Audio API sound synthesis, classic 4-way pathfinding,
     * 4 autonomous AI ghost routines, power pellet frightened overdrive,
     * and multi-level localStorage persistence.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const pelletVal = document.getElementById('pelletVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      // 45 Unique Thematic Environments across Cyber Mainframes
      const THEMES = [
        { name: "Neon Blue Core", bg: "#04010c", wall: "#00f0ff", glow: "rgba(0,240,255,0.6)", pellet: "#ffd700", power: "#ff007f", ghosts: ["#ff0055", "#ff80bf", "#00f0ff", "#ffaa00"] },
        { name: "Emerald Logic Grid", bg: "#010e08", wall: "#00ff88", glow: "rgba(0,255,136,0.6)", pellet: "#ffffff", power: "#ffd700", ghosts: ["#ef4444", "#a855f7", "#38bdf8", "#fbbf24"] },
        { name: "Molten Firewall", bg: "#120202", wall: "#ff3b30", glow: "rgba(255,59,48,0.6)", pellet: "#ffcc00", power: "#00f0ff", ghosts: ["#ff5400", "#ff758f", "#22d3ee", "#facc15"] },
        { name: "Amethyst Cyber Vault", bg: "#0a0114", wall: "#b5179e", glow: "rgba(181,23,158,0.6)", pellet: "#4cc9f0", power: "#f72585", ghosts: ["#f72585", "#7209b7", "#4361ee", "#4cc9f0"] },
        { name: "Solar Flare Subnet", bg: "#140a01", wall: "#ff9500", glow: "rgba(255,149,0,0.6)", pellet: "#ffff55", power: "#ff0055", ghosts: ["#ff2200", "#ff88ff", "#00ffff", "#ffdd00"] },
        { name: "Glacial Cryo-Array", bg: "#010c14", wall: "#caf0f8", glow: "rgba(202,240,248,0.6)", pellet: "#90e0ef", power: "#ff007f", ghosts: ["#0077b6", "#0096c7", "#48cae4", "#ade8f4"] },
        { name: "Bioluminescent Spore", bg: "#02120b", wall: "#10b981", glow: "rgba(16,185,129,0.6)", pellet: "#6ee7b7", power: "#f43f5e", ghosts: ["#e11d48", "#c084fc", "#38bdf8", "#fbbf24"] },
        { name: "Dark Web Proxy", bg: "#050508", wall: "#6366f1", glow: "rgba(99,102,241,0.6)", pellet: "#a5b4fc", power: "#f59e0b", ghosts: ["#dc2626", "#ec4899", "#06b6d4", "#eab308"] },
        { name: "Tachyon Accelerator", bg: "#080112", wall: "#e0aaff", glow: "rgba(224,170,255,0.6)", pellet: "#c77dff", power: "#00ff88", ghosts: ["#9d4edd", "#7b2cbf", "#5a189a", "#ff9e00"] },
        { name: "Nanite Hivemind", bg: "#011414", wall: "#2dd4bf", glow: "rgba(45,212,191,0.6)", pellet: "#99f6e4", power: "#f43f5e", ghosts: ["#f43f5e", "#d946ef", "#0284c7", "#facc15"] },
        { name: "Quantum Superconductor", bg: "#040817", wall: "#38bdf8", glow: "rgba(56,189,248,0.6)", pellet: "#bae6fd", power: "#ff0055", ghosts: ["#ff1744", "#f472b6", "#22d3ee", "#fbbf24"] },
        { name: "Volcanic Geothermal Core", bg: "#170401", wall: "#ea580c", glow: "rgba(234,88,12,0.6)", pellet: "#fed7aa", power: "#00f0ff", ghosts: ["#ef4444", "#fb7185", "#38bdf8", "#fde047"] },
        { name: "Prismatic Crystal Matrix", bg: "#0a0314", wall: "#ec4899", glow: "rgba(236,72,153,0.6)", pellet: "#fbcfe8", power: "#00ff88", ghosts: ["#f43f5e", "#a855f7", "#06b6d4", "#eab308"] },
        { name: "Aurora Ionosphere", bg: "#011210", wall: "#14b8a6", glow: "rgba(20,184,166,0.6)", pellet: "#ccfbf1", power: "#f59e0b", ghosts: ["#e11d48", "#d946ef", "#0ea5e9", "#facc15"] },
        { name: "Titanium Cyber Citadel", bg: "#08080c", wall: "#94a3b8", glow: "rgba(148,163,184,0.6)", pellet: "#f1f5f9", power: "#ff007f", ghosts: ["#dc2626", "#c084fc", "#0284c7", "#f59e0b"] },
        { name: "Crimson Security Zone", bg: "#140105", wall: "#e11d48", glow: "rgba(225,29,72,0.6)", pellet: "#fecdd3", power: "#00f0ff", ghosts: ["#be123c", "#f472b6", "#38bdf8", "#fde047"] },
        { name: "Vortex Black Hole Horizon", bg: "#020205", wall: "#8b5cf6", glow: "rgba(139,92,246,0.6)", pellet: "#ddd6fe", power: "#ff0055", ghosts: ["#ef4444", "#ec4899", "#06b6d4", "#eab308"] },
        { name: "Plasma Discharge Conduit", bg: "#0e0214", wall: "#d946ef", glow: "rgba(217,70,239,0.6)", pellet: "#fae8ff", power: "#00ff88", ghosts: ["#f43f5e", "#a855f7", "#0ea5e9", "#fbbf24"] },
        { name: "Obsidian Crypt", bg: "#050505", wall: "#475569", glow: "rgba(71,85,105,0.6)", pellet: "#e2e8f0", power: "#ff007f", ghosts: ["#dc2626", "#e879f9", "#38bdf8", "#facc15"] },
        { name: "Amber Terminal 1982", bg: "#120a01", wall: "#d97706", glow: "rgba(217,119,6,0.6)", pellet: "#fde68a", power: "#00f0ff", ghosts: ["#b45309", "#f472b6", "#0284c7", "#fde047"] },
        { name: "Matrix Phosphor Sector", bg: "#011204", wall: "#22c55e", glow: "rgba(34,197,94,0.6)", pellet: "#bbf7d0", power: "#ff007f", ghosts: ["#ef4444", "#c084fc", "#38bdf8", "#eab308"] },
        { name: "Hyperion Orbital Ring", bg: "#020914", wall: "#0284c7", glow: "rgba(2,132,199,0.6)", pellet: "#bae6fd", power: "#ff5400", ghosts: ["#e11d48", "#ec4899", "#22d3ee", "#fde047"] },
        { name: "Starlight Deep Subnet", bg: "#060212", wall: "#a855f7", glow: "rgba(168,85,247,0.6)", pellet: "#f3e8ff", power: "#00ff88", ghosts: ["#dc2626", "#f472b6", "#06b6d4", "#facc15"] },
        { name: "Radioactive Waste Line", bg: "#0d1401", wall: "#84cc16", glow: "rgba(132,204,22,0.6)", pellet: "#ecfccb", power: "#ff0055", ghosts: ["#ef4444", "#d946ef", "#0ea5e9", "#fbbf24"] },
        { name: "Cobalt Magnetic Vault", bg: "#010714", wall: "#2563eb", glow: "rgba(37,99,235,0.6)", pellet: "#bfdbfe", power: "#ffd700", ghosts: ["#dc2626", "#c084fc", "#38bdf8", "#f59e0b"] },
        { name: "Solar Wind Array", bg: "#140e02", wall: "#f59e0b", glow: "rgba(245,158,11,0.6)", pellet: "#fef3c7", power: "#00f0ff", ghosts: ["#b45309", "#ec4899", "#22d3ee", "#fde047"] },
        { name: "Bio-Synthetic Lab", bg: "#01140e", wall: "#059669", glow: "rgba(5,150,105,0.6)", pellet: "#a7f3d0", power: "#f43f5e", ghosts: ["#e11d48", "#a855f7", "#06b6d4", "#eab308"] },
        { name: "Nebula Veil", bg: "#0c0114", wall: "#c026d3", glow: "rgba(192,38,211,0.6)", pellet: "#f5d0fe", power: "#00ff88", ghosts: ["#ef4444", "#f472b6", "#0284c7", "#facc15"] },
        { name: "Galactic Gate Node", bg: "#020e17", wall: "#06b6d4", glow: "rgba(6,182,212,0.6)", pellet: "#cffafe", power: "#ff007f", ghosts: ["#dc2626", "#e879f9", "#38bdf8", "#fde047"] },
        { name: "Cyber-Dojo Sanctum", bg: "#140103", wall: "#f43f5e", glow: "rgba(244,63,94,0.6)", pellet: "#ffe4e6", power: "#ffd700", ghosts: ["#be123c", "#c084fc", "#22d3ee", "#fbbf24"] },
        { name: "Photon Waveguide", bg: "#021217", wall: "#0ea5e9", glow: "rgba(14,165,233,0.6)", pellet: "#e0f2fe", power: "#ff5400", ghosts: ["#e11d48", "#ec4899", "#06b6d4", "#facc15"] },
        { name: "Laser Diffraction Grid", bg: "#100114", wall: "#d946ef", glow: "rgba(217,70,239,0.6)", pellet: "#fdf4ff", power: "#00f0ff", ghosts: ["#ef4444", "#a855f7", "#38bdf8", "#fde047"] },
        { name: "Hyper-Grid Dimension", bg: "#030814", wall: "#3b82f6", glow: "rgba(59,130,246,0.6)", pellet: "#dbeafe", power: "#ff007f", ghosts: ["#dc2626", "#f472b6", "#0284c7", "#f59e0b"] },
        { name: "Krypton Luminescence", bg: "#011409", wall: "#10b981", glow: "rgba(16,185,129,0.6)", pellet: "#d1fae5", power: "#ffd700", ghosts: ["#b45309", "#c084fc", "#22d3ee", "#facc15"] },
        { name: "Cosmic String Conduit", bg: "#0c0214", wall: "#9333ea", glow: "rgba(147,51,234,0.6)", pellet: "#f3e8ff", power: "#00ff88", ghosts: ["#ef4444", "#ec4899", "#06b6d4", "#fde047"] },
        { name: "Supernova Remnant", bg: "#170306", wall: "#fb7185", glow: "rgba(251,113,133,0.6)", pellet: "#ffe4e6", power: "#00f0ff", ghosts: ["#e11d48", "#a855f7", "#38bdf8", "#fbbf24"] },
        { name: "Synapse Neural Net", bg: "#031214", wall: "#14b8a6", glow: "rgba(20,184,166,0.6)", pellet: "#ccfbf1", power: "#f59e0b", ghosts: ["#dc2626", "#f472b6", "#0284c7", "#facc15"] },
        { name: "Zenith Satellite Hub", bg: "#010817", wall: "#60a5fa", glow: "rgba(96,165,250,0.6)", pellet: "#eff6ff", power: "#ff007f", ghosts: ["#ef4444", "#c084fc", "#22d3ee", "#fde047"] },
        { name: "Gold Standard Foundry", bg: "#140d01", wall: "#fbbf24", glow: "rgba(251,191,36,0.6)", pellet: "#fef3c7", power: "#00f0ff", ghosts: ["#b45309", "#ec4899", "#06b6d4", "#eab308"] },
        { name: "Cyber-Rain Highway", bg: "#020f14", wall: "#38bdf8", glow: "rgba(56,189,248,0.6)", pellet: "#e0f2fe", power: "#00ff88", ghosts: ["#dc2626", "#a855f7", "#38bdf8", "#facc15"] },
        { name: "Overclocked Liquid Nitro", bg: "#011217", wall: "#22d3ee", glow: "rgba(34,211,238,0.6)", pellet: "#cffafe", power: "#ff0055", ghosts: ["#e11d48", "#f472b6", "#0284c7", "#fde047"] },
        { name: "Wormhole Singularity", bg: "#090117", wall: "#7c3aed", glow: "rgba(124,58,237,0.6)", pellet: "#ede9fe", power: "#ffd700", ghosts: ["#ef4444", "#c084fc", "#22d3ee", "#fbbf24"] },
        { name: "Genesis Quantum Seed", bg: "#01140c", wall: "#34d399", glow: "rgba(52,211,153,0.6)", pellet: "#ecfdf5", power: "#f43f5e", ghosts: ["#dc2626", "#ec4899", "#06b6d4", "#facc15"] },
        { name: "Prism Void Nexus", bg: "#0e0314", wall: "#f43f5e", glow: "rgba(244,63,94,0.6)", pellet: "#fff1f2", power: "#00f0ff", ghosts: ["#b45309", "#a855f7", "#38bdf8", "#fde047"] },
        { name: "Grand Master Mainframe", bg: "#000000", wall: "#00f0ff", glow: "rgba(0,240,255,0.8)", pellet: "#ffffff", power: "#ffd700", ghosts: ["#ff0055", "#ff80bf", "#00f0ff", "#ffaa00"] }
      ];

      // Web Audio API Procedural Synthesis
      let audioCtx = null;
      function initAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
      }

      let chompToggle = false;
      function playPelletChime() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(chompToggle ? 480 : 380, audioCtx.currentTime);
          chompToggle = !chompToggle;
          gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.08);
        } catch(e) {}
      }

      function playPowerPellet() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, audioCtx.currentTime);
          osc.frequency.linearRampToValueAtTime(880, audioCtx.currentTime + 0.35);
          gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.35);
        } catch(e) {}
      }

      function playGhostEaten() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(400, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.25);
          gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.25);
        } catch(e) {}
      }

      function playPlayerDied() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(600, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.6);
          gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.6);
        } catch(e) {}
      }

      function playLevelWin() {
        if (!audioCtx) return;
        try {
          const notes = [523.25, 659.25, 783.99, 1046.50];
          notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.12);
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime + idx * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.12 + 0.3);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + idx * 0.12);
            osc.stop(audioCtx.currentTime + idx * 0.12 + 0.3);
          });
        } catch(e) {}
      }

      // Maze Layout: 19 cols x 21 rows
      // 1 = Wall, 0 = Normal Pellet, 2 = Empty / House / Path, 3 = Power Pellet
      const BASE_MAZE = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,3,1],
        [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
        [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
        [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
        [1,1,1,1,0,1,1,1,2,1,2,1,1,1,0,1,1,1,1],
        [2,2,2,1,0,1,2,2,2,2,2,2,2,1,0,1,2,2,2],
        [1,1,1,1,0,1,2,1,1,2,1,1,2,1,0,1,1,1,1],
        [2,2,2,2,0,2,2,1,2,2,2,1,2,2,0,2,2,2,2],
        [1,1,1,1,0,1,2,1,1,1,1,1,2,1,0,1,1,1,1],
        [2,2,2,1,0,1,2,2,2,2,2,2,2,1,0,1,2,2,2],
        [1,1,1,1,0,1,2,1,1,1,1,1,2,1,0,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
        [1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
        [1,3,0,1,0,0,0,0,0,2,0,0,0,0,0,1,0,3,1],
        [1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1],
        [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
        [1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ];

      const ROWS = BASE_MAZE.length;
      const COLS = BASE_MAZE[0].length;
      let tileSize = 24;
      let maze = [];
      let totalPellets = 0;
      let eatenPellets = 0;

      let currentLevel = 0;
      let maxUnlocked = parseInt(localStorage.getItem('nextgames_turbo_pac_level') || '0', 10);
      let score = 0;
      let highScore = parseInt(localStorage.getItem('nextgames_turbo_pac_hi') || '0', 10);
      let lives = 3;
      let gameState = 'MENU'; // MENU, PLAYING, GAMEOVER, WIN
      let frightenedTimer = 0;
      let frightenedChain = 0;
      let respawnTimer = 0;

      // Player State
      const player = {
        x: 9,
        y: 16,
        pixelX: 0,
        pixelY: 0,
        dirX: 0,
        dirY: 0,
        nextDirX: 0,
        nextDirY: 0,
        speed: 2.5,
        mouthAngle: 0.2,
        mouthDir: 1,
        angle: 0
      };

      // 4 AI Ghosts
      const GHOST_NAMES = ['Blinky', 'Pinky', 'Inky', 'Clyde'];
      let ghosts = [];

      function initGhosts() {
        ghosts = [
          { name: 'Blinky', x: 9, y: 8, pixelX: 0, pixelY: 0, dirX: 1, dirY: 0, targetX: 9, targetY: 8, state: 'ACTIVE', colorIdx: 0 },
          { name: 'Pinky',  x: 8, y: 10, pixelX: 0, pixelY: 0, dirX: 0, dirY: -1, targetX: 8, targetY: 10, state: 'ACTIVE', colorIdx: 1 },
          { name: 'Inky',   x: 9, y: 10, pixelX: 0, pixelY: 0, dirX: 0, dirY: -1, targetX: 9, targetY: 10, state: 'ACTIVE', colorIdx: 2 },
          { name: 'Clyde',  x: 10, y: 10, pixelX: 0, pixelY: 0, dirX: -1, dirY: 0, targetX: 10, targetY: 10, state: 'ACTIVE', colorIdx: 3 }
        ];
        ghosts.forEach(g => {
          g.pixelX = g.x * tileSize + tileSize / 2;
          g.pixelY = g.y * tileSize + tileSize / 2;
        });
      }

      function setupLevel(lvl) {
        currentLevel = Math.max(0, Math.min(lvl, THEMES.length - 1));
        const theme = THEMES[currentLevel];
        themeVal.textContent = `${currentLevel + 1}: ${theme.name}`;

        // Clone base maze
        maze = BASE_MAZE.map(row => [...row]);
        totalPellets = 0;
        eatenPellets = 0;
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            if (maze[r][c] === 0 || maze[r][c] === 3) totalPellets++;
          }
        }

        // Reset player
        player.x = 9;
        player.y = 16;
        player.pixelX = player.x * tileSize + tileSize / 2;
        player.pixelY = player.y * tileSize + tileSize / 2;
        player.dirX = 0;
        player.dirY = 0;
        player.nextDirX = 0;
        player.nextDirY = 0;
        player.speed = 2.4 + (currentLevel * 0.02);

        frightenedTimer = 0;
        frightenedChain = 0;
        initGhosts();
        updateHUD();
      }

      function resize() {
        const availableW = window.innerWidth;
        const availableH = window.innerHeight;
        const maxTileW = Math.floor((availableW - 32) / COLS);
        const maxTileH = Math.floor((availableH - 140) / ROWS);
        tileSize = Math.max(16, Math.min(32, Math.min(maxTileW, maxTileH)));

        canvas.width = COLS * tileSize;
        canvas.height = ROWS * tileSize;

        if (player) {
          player.pixelX = player.x * tileSize + tileSize / 2;
          player.pixelY = player.y * tileSize + tileSize / 2;
        }
        if (ghosts && ghosts.length) {
          ghosts.forEach(g => {
            g.pixelX = g.x * tileSize + tileSize / 2;
            g.pixelY = g.y * tileSize + tileSize / 2;
          });
        }
      }
      window.addEventListener('resize', resize);

      function updateHUD() {
        scoreVal.textContent = `${score} | HIGH: ${highScore}`;
        const hearts = "❤️".repeat(Math.max(0, lives));
        pelletVal.textContent = `${eatenPellets} / ${totalPellets} | ${hearts}`;
      }

      function buildLevelGrid() {
        levelSelectGrid.innerHTML = '';
        THEMES.forEach((theme, idx) => {
          const btn = document.createElement('button');
          btn.className = `lvl-btn ${idx === currentLevel ? 'active' : ''}`;
          btn.textContent = idx + 1;
          btn.title = theme.name;
          if (idx > maxUnlocked) {
            btn.style.opacity = '0.35';
            btn.style.cursor = 'not-allowed';
          }
          btn.addEventListener('click', () => {
            if (idx <= maxUnlocked) {
              document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              currentLevel = idx;
            }
          });
          levelSelectGrid.appendChild(btn);
        });
      }

      function isPassable(tileX, tileY, isGhost = false) {
        // Warp tunnels
        if (tileY === 10 && (tileX < 0 || tileX >= COLS)) return true;
        if (tileX < 0 || tileX >= COLS || tileY < 0 || tileY >= ROWS) return false;
        const cell = maze[tileY][tileX];
        if (cell === 1) return false;
        return true;
      }

      function update() {
        if (gameState !== 'PLAYING') return;

        if (respawnTimer > 0) respawnTimer--;

        // Frightened timer countdown
        if (frightenedTimer > 0) {
          frightenedTimer--;
          if (frightenedTimer === 0) {
            frightenedChain = 0;
            ghosts.forEach(g => { if (g.state === 'FRIGHTENED') g.state = 'ACTIVE'; });
          }
        }

        // Animate Pac mouth
        player.mouthAngle += 0.035 * player.mouthDir;
        if (player.mouthAngle > 0.35 || player.mouthAngle < 0.05) player.mouthDir *= -1;

        // Handle Player Turning when aligned with grid
        const currentTileX = Math.floor(player.pixelX / tileSize);
        const currentTileY = Math.floor(player.pixelY / tileSize);
        const centerDistX = (currentTileX * tileSize + tileSize / 2) - player.pixelX;
        const centerDistY = (currentTileY * tileSize + tileSize / 2) - player.pixelY;

        // If turn requested
        if (player.nextDirX !== 0 || player.nextDirY !== 0) {
          // Direct 180 reversal can happen anytime
          if ((player.nextDirX === -player.dirX && player.nextDirX !== 0) ||
              (player.nextDirY === -player.dirY && player.nextDirY !== 0)) {
            player.dirX = player.nextDirX;
            player.dirY = player.nextDirY;
          } else if (Math.abs(centerDistX) < player.speed && Math.abs(centerDistY) < player.speed) {
            // Check if next tile in requested direction is passable
            const targetTileX = currentTileX + player.nextDirX;
            const targetTileY = currentTileY + player.nextDirY;
            if (isPassable(targetTileX, targetTileY)) {
              player.pixelX = currentTileX * tileSize + tileSize / 2;
              player.pixelY = currentTileY * tileSize + tileSize / 2;
              player.dirX = player.nextDirX;
              player.dirY = player.nextDirY;
            }
          }
        }

        // Move Player
        if (player.dirX !== 0 || player.dirY !== 0) {
          const nextPixelX = player.pixelX + player.dirX * player.speed;
          const nextPixelY = player.pixelY + player.dirY * player.speed;
          const lookAheadTileX = Math.floor((nextPixelX + player.dirX * (tileSize / 2)) / tileSize);
          const lookAheadTileY = Math.floor((nextPixelY + player.dirY * (tileSize / 2)) / tileSize);

          // Warp tunnel
          if (currentTileY === 10 && lookAheadTileX < 0) {
            player.pixelX = (COLS - 1) * tileSize + tileSize / 2;
          } else if (currentTileY === 10 && lookAheadTileX >= COLS) {
            player.pixelX = tileSize / 2;
          } else if (isPassable(lookAheadTileX, lookAheadTileY)) {
            player.pixelX = nextPixelX;
            player.pixelY = nextPixelY;
          } else {
            // Snap to center
            if (player.dirX !== 0) player.pixelX = currentTileX * tileSize + tileSize / 2;
            if (player.dirY !== 0) player.pixelY = currentTileY * tileSize + tileSize / 2;
          }
        }

        // Update player heading angle
        if (player.dirX === 1) player.angle = 0;
        else if (player.dirX === -1) player.angle = Math.PI;
        else if (player.dirY === 1) player.angle = Math.PI / 2;
        else if (player.dirY === -1) player.angle = -Math.PI / 2;

        player.x = Math.floor(player.pixelX / tileSize);
        player.y = Math.floor(player.pixelY / tileSize);

        // Consume Pellets
        if (player.x >= 0 && player.x < COLS && player.y >= 0 && player.y < ROWS) {
          const cell = maze[player.y][player.x];
          if (cell === 0) {
            maze[player.y][player.x] = 2;
            score += 10;
            eatenPellets++;
            playPelletChime();
            updateHUD();
          } else if (cell === 3) {
            maze[player.y][player.x] = 2;
            score += 50;
            eatenPellets++;
            frightenedTimer = 450; // ~7.5 seconds
            frightenedChain = 0;
            ghosts.forEach(g => { if (g.state === 'ACTIVE') g.state = 'FRIGHTENED'; });
            playPowerPellet();
            updateHUD();
          }
        }

        // Check Victory
        if (eatenPellets >= totalPellets) {
          playLevelWin();
          gameState = 'WIN';
          score += 1000;
          if (score > highScore) {
            highScore = score;
            localStorage.setItem('nextgames_turbo_pac_hi', highScore);
          }
          if (currentLevel >= maxUnlocked && maxUnlocked < THEMES.length - 1) {
            maxUnlocked = currentLevel + 1;
            localStorage.setItem('nextgames_turbo_pac_level', maxUnlocked);
          }
          setTimeout(() => {
            if (currentLevel < THEMES.length - 1) {
              currentLevel++;
              setupLevel(currentLevel);
              gameState = 'PLAYING';
            } else {
              showMenu('CYBER MAZE MASTER!', `Incredible! You have cleared all 45 mainframe sectors with a final score of ${score} PTS!`, 'RESTART PRIME RUN');
            }
          }, 1200);
          return;
        }

        // Update Ghosts - Fair human arcade reaction speed
        const ghostSpeed = (1.4 + currentLevel * 0.012) * (frightenedTimer > 0 ? 0.6 : 1.0);
        ghosts.forEach(ghost => {
          const gx = Math.floor(ghost.pixelX / tileSize);
          const gy = Math.floor(ghost.pixelY / tileSize);
          const gDistX = (gx * tileSize + tileSize / 2) - ghost.pixelX;
          const gDistY = (gy * tileSize + tileSize / 2) - ghost.pixelY;

          // If close to center of cell, evaluate next direction
          if (Math.abs(gDistX) < ghostSpeed && Math.abs(gDistY) < ghostSpeed) {
            ghost.pixelX = gx * tileSize + tileSize / 2;
            ghost.pixelY = gy * tileSize + tileSize / 2;
            ghost.x = gx;
            ghost.y = gy;

            // Determine Target Tile based on Ghost Personality
            let tx = player.x;
            let ty = player.y;

            if (ghost.state === 'EATEN') {
              // Return to spawn house
              tx = 9; ty = 10;
              if (gx === 9 && (gy === 9 || gy === 10)) {
                ghost.state = 'ACTIVE';
              }
            } else if (ghost.state === 'FRIGHTENED') {
              // Flee away from player
              tx = (COLS - 1) - player.x;
              ty = (ROWS - 1) - player.y;
            } else {
              // Active Hunting AI
              if (ghost.name === 'Pinky') {
                tx = player.x + player.dirX * 4;
                ty = player.y + player.dirY * 4;
              } else if (ghost.name === 'Inky') {
                tx = player.x + (player.x - ghosts[0].x);
                ty = player.y + (player.y - ghosts[0].y);
              } else if (ghost.name === 'Clyde') {
                const dist = Math.hypot(gx - player.x, gy - player.y);
                if (dist < 6) { tx = 0; ty = ROWS - 1; }
              }
            }

            // Available valid moves (no reversing unless dead end)
            const moves = [
              { dx: 0, dy: -1 }, // Up
              { dx: -1, dy: 0 }, // Left
              { dx: 0, dy: 1 },  // Down
              { dx: 1, dy: 0 }   // Right
            ];

            const validMoves = moves.filter(m => {
              if (m.dx === -ghost.dirX && m.dy === -ghost.dirY) return false; // Don't reverse
              return isPassable(gx + m.dx, gy + m.dy, true);
            });

            if (validMoves.length > 0) {
              // Choose move minimizing distance to target
              let bestMove = validMoves[0];
              let minDist = Infinity;
              validMoves.forEach(m => {
                const nx = gx + m.dx;
                const ny = gy + m.dy;
                const d = Math.hypot(nx - tx, ny - ty);
                if (d < minDist) {
                  minDist = d;
                  bestMove = m;
                }
              });
              ghost.dirX = bestMove.dx;
              ghost.dirY = bestMove.dy;
            } else {
              // Reverse if dead end
              ghost.dirX = -ghost.dirX;
              ghost.dirY = -ghost.dirY;
            }
          }

          // Move Ghost
          const moveSpeed = ghost.state === 'EATEN' ? ghostSpeed * 2 : ghostSpeed;
          ghost.pixelX += ghost.dirX * moveSpeed;
          ghost.pixelY += ghost.dirY * moveSpeed;

          // Warp tunnel
          if (gy === 10 && ghost.pixelX < 0) ghost.pixelX = (COLS - 1) * tileSize + tileSize / 2;
          else if (gy === 10 && ghost.pixelX > COLS * tileSize) ghost.pixelX = tileSize / 2;

          // Collision with Player
          const pDist = Math.hypot(player.pixelX - ghost.pixelX, player.pixelY - ghost.pixelY);
          if (pDist < tileSize * 0.7) {
            if (ghost.state === 'FRIGHTENED') {
              // Eat Ghost!
              ghost.state = 'EATEN';
              frightenedChain++;
              const pts = 200 * Math.pow(2, frightenedChain - 1);
              score += pts;
              playGhostEaten();
              updateHUD();
            } else if (ghost.state === 'ACTIVE') {
              if (respawnTimer <= 0) {
                // Player caught!
                playPlayerDied();
                lives--;
                updateHUD();
                if (lives <= 0) {
                  gameState = 'GAMEOVER';
                  if (score > highScore) {
                    highScore = score;
                    localStorage.setItem('nextgames_turbo_pac_hi', highScore);
                  }
                  showMenu('CONNECTION TERMINATED', `Security subroutines overwhelmed your core. Final Score: ${score} PTS. High Score: ${highScore} PTS.`, 'RETRY SECTOR');
                } else {
                  // Soft reset positions with 1.5s grace period
                  respawnTimer = 90;
                  player.x = 9; player.y = 16;
                  player.pixelX = player.x * tileSize + tileSize / 2;
                  player.pixelY = player.y * tileSize + tileSize / 2;
                  player.dirX = 0; player.dirY = 0;
                  player.nextDirX = 0; player.nextDirY = 0;
                  initGhosts();
                }
              }
            }
          }
        });
      }

      function draw() {
        const theme = THEMES[currentLevel];
        ctx.fillStyle = theme.bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw Walls & Corridors
        ctx.lineWidth = Math.max(2, tileSize * 0.12);
        ctx.strokeStyle = theme.wall;
        ctx.shadowColor = theme.glow;
        ctx.shadowBlur = 10;

        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            const cell = maze[r][c];
            const px = c * tileSize;
            const py = r * tileSize;

            if (cell === 1) {
              // Wall block with neon borders
              ctx.fillStyle = "rgba(10, 2, 20, 0.9)";
              ctx.fillRect(px + 1, py + 1, tileSize - 2, tileSize - 2);
              ctx.strokeRect(px + 2, py + 2, tileSize - 4, tileSize - 4);
            } else if (cell === 0) {
              // Normal Pellet
              ctx.shadowColor = theme.pellet;
              ctx.shadowBlur = 6;
              ctx.fillStyle = theme.pellet;
              ctx.beginPath();
              ctx.arc(px + tileSize / 2, py + tileSize / 2, tileSize * 0.14, 0, Math.PI * 2);
              ctx.fill();
            } else if (cell === 3) {
              // Quantum Overcharge Power Pellet (pulsing)
              const pulse = Math.sin(Date.now() * 0.008) * 0.15 + 0.35;
              ctx.shadowColor = theme.power;
              ctx.shadowBlur = 15;
              ctx.fillStyle = theme.power;
              ctx.beginPath();
              ctx.arc(px + tileSize / 2, py + tileSize / 2, tileSize * pulse, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Draw Player (Pac-Man Neon Core)
        ctx.save();
        ctx.translate(player.pixelX, player.pixelY);
        ctx.rotate(player.angle);
        ctx.fillStyle = "#ffff00";
        ctx.shadowColor = "#ffff00";
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(0, 0, tileSize * 0.42, player.mouthAngle * Math.PI, (2 - player.mouthAngle) * Math.PI);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();

        // Respawn Protection Aura
        if (respawnTimer > 0 && Math.floor(respawnTimer / 6) % 2 === 0) {
          ctx.strokeStyle = "#00f0ff";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, tileSize * 0.6, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();

        // Draw Ghosts
        ghosts.forEach(ghost => {
          ctx.save();
          ctx.translate(ghost.pixelX, ghost.pixelY);

          if (ghost.state === 'EATEN') {
            // Just eyes returning to base
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(-4, -2, 3, 0, Math.PI * 2);
            ctx.arc(4, -2, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#00f0ff";
            ctx.beginPath();
            ctx.arc(-4 + ghost.dirX * 1.5, -2 + ghost.dirY * 1.5, 1.5, 0, Math.PI * 2);
            ctx.arc(4 + ghost.dirX * 1.5, -2 + ghost.dirY * 1.5, 1.5, 0, Math.PI * 2);
            ctx.fill();
          } else {
            let ghostColor = theme.ghosts[ghost.colorIdx];
            if (ghost.state === 'FRIGHTENED') {
              ghostColor = (frightenedTimer < 120 && Math.floor(Date.now() / 150) % 2 === 0) ? '#ffffff' : '#00f0ff';
            }

            ctx.fillStyle = ghostColor;
            ctx.shadowColor = ghostColor;
            ctx.shadowBlur = 14;

            // Ghost dome & skirt
            const r = tileSize * 0.4;
            ctx.beginPath();
            ctx.arc(0, -2, r, Math.PI, 0, false);
            ctx.lineTo(r, r);
            // Wavy tentacle skirt
            ctx.lineTo(r * 0.5, r * 0.7);
            ctx.lineTo(0, r);
            ctx.lineTo(-r * 0.5, r * 0.7);
            ctx.lineTo(-r, r);
            ctx.closePath();
            ctx.fill();

            // Eyes
            ctx.fillStyle = "#ffffff";
            ctx.shadowBlur = 0;
            ctx.beginPath();
            ctx.arc(-r * 0.35, -2, r * 0.28, 0, Math.PI * 2);
            ctx.arc(r * 0.35, -2, r * 0.28, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = ghost.state === 'FRIGHTENED' ? '#ff0055' : '#000000';
            ctx.beginPath();
            ctx.arc(-r * 0.35 + ghost.dirX * 2, -2 + ghost.dirY * 2, r * 0.14, 0, Math.PI * 2);
            ctx.arc(r * 0.35 + ghost.dirX * 2, -2 + ghost.dirY * 2, r * 0.14, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        });
      }

      function gameLoop() {
        update();
        draw();
        requestAnimationFrame(gameLoop);
      }

      function showMenu(title, desc, btnText) {
        menuTitle.textContent = title;
        menuDesc.textContent = desc;
        startBtn.textContent = btnText;
        buildLevelGrid();
        menuScreen.classList.remove('hidden');
      }

      // Direction Input Handler
      function setDirection(dx, dy) {
        initAudio();
        player.nextDirX = dx;
        player.nextDirY = dy;
      }

      // Keyboard Controls
      window.addEventListener('keydown', e => {
        if (['ArrowUp', 'KeyW'].includes(e.code)) { setDirection(0, -1); e.preventDefault(); }
        else if (['ArrowDown', 'KeyS'].includes(e.code)) { setDirection(0, 1); e.preventDefault(); }
        else if (['ArrowLeft', 'KeyA'].includes(e.code)) { setDirection(-1, 0); e.preventDefault(); }
        else if (['ArrowRight', 'KeyD'].includes(e.code)) { setDirection(1, 0); e.preventDefault(); }
      });

      // Virtual D-Pad buttons
      document.getElementById('btnUp').addEventListener('touchstart', (e) => { e.preventDefault(); setDirection(0, -1); });
      document.getElementById('btnDown').addEventListener('touchstart', (e) => { e.preventDefault(); setDirection(0, 1); });
      document.getElementById('btnLeft').addEventListener('touchstart', (e) => { e.preventDefault(); setDirection(-1, 0); });
      document.getElementById('btnRight').addEventListener('touchstart', (e) => { e.preventDefault(); setDirection(1, 0); });
      document.getElementById('btnUp').addEventListener('mousedown', () => setDirection(0, -1));
      document.getElementById('btnDown').addEventListener('mousedown', () => setDirection(0, 1));
      document.getElementById('btnLeft').addEventListener('mousedown', () => setDirection(-1, 0));
      document.getElementById('btnRight').addEventListener('mousedown', () => setDirection(1, 0));

      // Touch Swipes
      let touchStartX = 0;
      let touchStartY = 0;
      window.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }, { passive: true });

      window.addEventListener('touchend', e => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(dx) > 30 || Math.abs(dy) > 30) {
          if (Math.abs(dx) > Math.abs(dy)) {
            setDirection(dx > 0 ? 1 : -1, 0);
          } else {
            setDirection(0, dy > 0 ? 1 : -1);
          }
        }
      }, { passive: true });

      // Start Game Button
      startBtn.addEventListener('click', () => {
        initAudio();
        menuScreen.classList.add('hidden');
        score = 0;
        lives = 3;
        setupLevel(currentLevel);
        gameState = 'PLAYING';
      });

      // Initialize
      resize();
      buildLevelGrid();
      setupLevel(0);
      requestAnimationFrame(gameLoop);
    })();
