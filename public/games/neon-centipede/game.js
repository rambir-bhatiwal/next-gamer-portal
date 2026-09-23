/**
 * Standalone Game Engine & Canvas Renderer
 * Module: neon-centipede
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * NEON CENTIPEDE: BIOSPHERE PURGE - 45 UNIQUE GARDEN THEMES
     * Features: Segment splitting upon laser impact, erratic jumping spiders,
     * dropping spore fleas, procedural Web Audio API laser and step synthesis.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const statusVal = document.getElementById('statusVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      // 45 Unique Bio-Dome Environments
      const THEMES = [
        { name: "Cyber Fungal Grove", bg: "#020907", shroomCol: "#00ff88", centiHead: "#ff007f", centiBody: "#00f0ff", laserCol: "#ffd700", spiderCol: "#ff0055" },
        { name: "Bioluminescent Mangrove", bg: "#010e12", shroomCol: "#06b6d4", centiHead: "#f43f5e", centiBody: "#38bdf8", laserCol: "#a855f7", spiderCol: "#fbbf24" },
        { name: "Molten Magma Lichen", bg: "#140301", shroomCol: "#ff5400", centiHead: "#00f0ff", centiBody: "#ffaa00", laserCol: "#ff0055", spiderCol: "#ffff00" },
        { name: "Glacial Ice Spire Garden", bg: "#020d1c", shroomCol: "#90e0ef", centiHead: "#ff758f", centiBody: "#caf0f8", laserCol: "#00ff88", spiderCol: "#ff007f" },
        { name: "Amethyst Crystal Spore", bg: "#0a0114", shroomCol: "#c084fc", centiHead: "#34d399", centiBody: "#e879f9", laserCol: "#ffd700", spiderCol: "#f43f5e" },
        { name: "Toxic Slime Wetland", bg: "#061201", shroomCol: "#84cc16", centiHead: "#ec4899", centiBody: "#a3e635", laserCol: "#38bdf8", spiderCol: "#ff5400" },
        { name: "Solar Sand Dunes", bg: "#140e02", shroomCol: "#f59e0b", centiHead: "#00f0ff", centiBody: "#fbbf24", laserCol: "#ff1744", spiderCol: "#a855f7" },
        { name: "Deep Coral Trench", bg: "#011414", shroomCol: "#2dd4bf", centiHead: "#f43f5e", centiBody: "#5eead4", laserCol: "#fbbf24", spiderCol: "#ff00aa" },
        { name: "Radioactive Plant", bg: "#0a1402", shroomCol: "#a3e635", centiHead: "#38bdf8", centiBody: "#bef264", laserCol: "#f43f5e", spiderCol: "#ffd700" },
        { name: "Cobalt Blue Basin", bg: "#020717", shroomCol: "#3b82f6", centiHead: "#ff007f", centiBody: "#60a5fa", laserCol: "#00ff88", spiderCol: "#facc15" },
        { name: "Crimson Spore Canopy", bg: "#140206", shroomCol: "#f43f5e", centiHead: "#00f0ff", centiBody: "#fb7185", laserCol: "#ffd700", spiderCol: "#22c55e" },
        { name: "Quantum Nanite Flora", bg: "#070214", shroomCol: "#a855f7", centiHead: "#22c55e", centiBody: "#c084fc", laserCol: "#38bdf8", spiderCol: "#ff0055" },
        { name: "Emerald Amazonia 2099", bg: "#011409", shroomCol: "#10b981", centiHead: "#ff1744", centiBody: "#34d399", laserCol: "#facc15", spiderCol: "#d946ef" },
        { name: "Obsidian Ash Basin", bg: "#07070a", shroomCol: "#94a3b8", centiHead: "#ff5400", centiBody: "#cbd5e1", laserCol: "#00f0ff", spiderCol: "#ef4444" },
        { name: "Phosphor Valley", bg: "#02140a", shroomCol: "#4ade80", centiHead: "#f43f5e", centiBody: "#86efac", laserCol: "#60a5fa", spiderCol: "#facc15" },
        { name: "Vortex Black Forest", bg: "#04010a", shroomCol: "#818cf8", centiHead: "#34d399", centiBody: "#a5b4fc", laserCol: "#fb7185", spiderCol: "#f59e0b" },
        { name: "Prismatic Opal Mound", bg: "#0e0214", shroomCol: "#f472b6", centiHead: "#22d3ee", centiBody: "#fbcfe8", laserCol: "#00ff88", spiderCol: "#fbbf24" },
        { name: "Amber Resin Bog", bg: "#140a01", shroomCol: "#d97706", centiHead: "#38bdf8", centiBody: "#fde68a", laserCol: "#e11d48", spiderCol: "#00ff88" },
        { name: "Titanium Moss Quarry", bg: "#090c10", shroomCol: "#64748b", centiHead: "#f43f5e", centiBody: "#94a3b8", laserCol: "#ffd700", spiderCol: "#00f0ff" },
        { name: "Aurora Polar Understory", bg: "#011411", shroomCol: "#14b8a6", centiHead: "#ff007f", centiBody: "#2dd4bf", laserCol: "#facc15", spiderCol: "#c084fc" },
        { name: "Volcanic Caldera Flora", bg: "#170302", shroomCol: "#ea580c", centiHead: "#00f0ff", centiBody: "#fb923c", laserCol: "#34d399", spiderCol: "#ffff00" },
        { name: "Neon Meadow Zero", bg: "#031206", shroomCol: "#22c55e", centiHead: "#e11d48", centiBody: "#4ade80", laserCol: "#38bdf8", spiderCol: "#f59e0b" },
        { name: "Supernova Lichen Wall", bg: "#14010e", shroomCol: "#db2777", centiHead: "#00ff88", centiBody: "#f472b6", laserCol: "#ffd700", spiderCol: "#38bdf8" },
        { name: "Celestial Cloud Forest", bg: "#030c14", shroomCol: "#0ea5e9", centiHead: "#f43f5e", centiBody: "#7dd3fc", laserCol: "#a855f7", spiderCol: "#facc15" },
        { name: "Xenon Ionized Garden", bg: "#060314", shroomCol: "#9333ea", centiHead: "#22c55e", centiBody: "#c084fc", laserCol: "#38bdf8", spiderCol: "#ff0055" },
        { name: "Geothermal Lichen Vent", bg: "#140801", shroomCol: "#f97316", centiHead: "#06b6d4", centiBody: "#fed7aa", laserCol: "#ff007f", spiderCol: "#ffd700" },
        { name: "Cyanobacteria Lagoon", bg: "#011214", shroomCol: "#06b6d4", centiHead: "#f43f5e", centiBody: "#67e8f9", laserCol: "#fbbf24", spiderCol: "#a855f7" },
        { name: "Dark Nebula Fungi", bg: "#040208", shroomCol: "#7c3aed", centiHead: "#34d399", centiBody: "#a78bfa", laserCol: "#f43f5e", spiderCol: "#00f0ff" },
        { name: "Copper Rust Arboretum", bg: "#140702", shroomCol: "#c2410c", centiHead: "#38bdf8", centiBody: "#fb923c", laserCol: "#22c55e", spiderCol: "#facc15" },
        { name: "Starlight Permafrost", bg: "#020a17", shroomCol: "#60a5fa", centiHead: "#f472b6", centiBody: "#bfdbfe", laserCol: "#00ff88", spiderCol: "#ff1744" },
        { name: "Chlorophyll Battery Dome", bg: "#011405", shroomCol: "#15803d", centiHead: "#ff007f", centiBody: "#4ade80", laserCol: "#ffd700", spiderCol: "#38bdf8" },
        { name: "Magenta Spore Cluster", bg: "#12010c", shroomCol: "#be185d", centiHead: "#22d3ee", centiBody: "#f472b6", laserCol: "#00ff88", spiderCol: "#fbbf24" },
        { name: "Golden Mycelium Hub", bg: "#140d02", shroomCol: "#ca8a04", centiHead: "#00f0ff", centiBody: "#fde047", laserCol: "#e11d48", spiderCol: "#38bdf8" },
        { name: "Abyssal Hydrothermal Mound", bg: "#020d12", shroomCol: "#0891b2", centiHead: "#ff5400", centiBody: "#22d3ee", laserCol: "#a855f7", spiderCol: "#00ff88" },
        { name: "Plasma Spore Nexus", bg: "#0c0114", shroomCol: "#7e22ce", centiHead: "#34d399", centiBody: "#c084fc", laserCol: "#facc15", spiderCol: "#f43f5e" },
        { name: "Silicon Sand Bog", bg: "#140a04", shroomCol: "#d97706", centiHead: "#38bdf8", centiBody: "#fde68a", laserCol: "#00ff88", spiderCol: "#ef4444" },
        { name: "Emerald Canopy Apex", bg: "#011409", shroomCol: "#059669", centiHead: "#ff0055", centiBody: "#34d399", laserCol: "#fbbf24", spiderCol: "#00f0ff" },
        { name: "Tachyon Violet Wilds", bg: "#080112", shroomCol: "#6d28d9", centiHead: "#00ff88", centiBody: "#a78bfa", laserCol: "#38bdf8", spiderCol: "#ffd700" },
        { name: "Cyber Fern Underpass", bg: "#021207", shroomCol: "#16a34a", centiHead: "#f43f5e", centiBody: "#86efac", laserCol: "#60a5fa", spiderCol: "#facc15" },
        { name: "Arctic Glade Borealis", bg: "#010e14", shroomCol: "#0284c7", centiHead: "#ff007f", centiBody: "#38bdf8", laserCol: "#34d399", spiderCol: "#fde047" },
        { name: "Solar Wind Arboretum", bg: "#140b01", shroomCol: "#ea580c", centiHead: "#00f0ff", centiBody: "#fb923c", laserCol: "#ff007f", spiderCol: "#22c55e" },
        { name: "Orchid Synthetic Garden", bg: "#0e0114", shroomCol: "#c026d3", centiHead: "#38bdf8", centiBody: "#e879f9", laserCol: "#ffd700", spiderCol: "#00ff88" },
        { name: "Carbon Nano-Spore Field", bg: "#050709", shroomCol: "#475569", centiHead: "#ef4444", centiBody: "#94a3b8", laserCol: "#00f0ff", spiderCol: "#fbbf24" },
        { name: "Genesis Eden Matrix", bg: "#01140a", shroomCol: "#10b981", centiHead: "#ff1744", centiBody: "#6ee7b7", laserCol: "#facc15", spiderCol: "#d946ef" },
        { name: "Alpha Sovereign Biosphere", bg: "#000000", shroomCol: "#00ff88", centiHead: "#ff007f", centiBody: "#00f0ff", laserCol: "#ffd700", spiderCol: "#ff0055" }
      ];

      // Web Audio API Procedural Synthesis
      let audioCtx = null;
      function initAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
      }

      function playLaserSound() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(880, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 0.08);
          gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.08);
        } catch(e) {}
      }

      function playMushroomPop() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(260, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(520, audioCtx.currentTime + 0.06);
          gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.06);
        } catch(e) {}
      }

      function playCentipedeHit() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(450, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.12);
          gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.12);
        } catch(e) {}
      }

      function playBuggyHit() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(200, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.4);
          gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.4);
        } catch(e) {}
      }

      function playStageClear() {
        if (!audioCtx) return;
        try {
          const chords = [440, 554.37, 659.25, 880];
          chords.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.1);
            gain.gain.setValueAtTime(0.12, audioCtx.currentTime + idx * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.1 + 0.28);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + idx * 0.1);
            osc.stop(audioCtx.currentTime + idx * 0.1 + 0.28);
          });
        } catch(e) {}
      }

      // Grid System
      const COLS = 28;
      const ROWS = 32;
      let cellW = 16;
      let cellH = 16;

      let mushrooms = []; // { col, row, hp: 3 }
      let centipedes = []; // array of segments { x, y, dirX, dirY, isHead, speed }
      let bullets = []; // { x, y, vy }
      let spiders = []; // { x, y, vx, vy, jumpTimer }
      let fleas = []; // { x, y, vy }

      let currentLevel = 0;
      let maxUnlocked = parseInt(localStorage.getItem('nextgames_neon_centipede_lvl') || '0', 10);
      let score = 0;
      let highScore = parseInt(localStorage.getItem('nextgames_neon_centipede_hi') || '0', 10);
      let lives = 3;
      let gameState = 'MENU'; // MENU, PLAYING, GAMEOVER, WIN
      let invulnTimer = 0;

      // Player Blaster Buggy
      const player = {
        x: 0,
        y: 0,
        w: 22,
        h: 18,
        speed: 5.5,
        fireCooldown: 0,
        movingLeft: false,
        movingRight: false,
        movingUp: false,
        movingDown: false,
        firing: false
      };

      function resize() {
        const availableW = window.innerWidth;
        const availableH = window.innerHeight;
        const maxTileW = Math.floor((availableW - 24) / COLS);
        const maxTileH = Math.floor((availableH - 120) / ROWS);
        const sz = Math.max(12, Math.min(24, Math.min(maxTileW, maxTileH)));
        cellW = sz;
        cellH = sz;
        canvas.width = COLS * cellW;
        canvas.height = ROWS * cellH;

        player.w = cellW * 1.2;
        player.h = cellH * 1.0;
        player.x = canvas.width / 2;
        player.y = canvas.height - cellH * 3;
      }
      window.addEventListener('resize', resize);

      function setupLevel(lvl) {
        currentLevel = Math.max(0, Math.min(lvl, THEMES.length - 1));
        const theme = THEMES[currentLevel];
        themeVal.textContent = `${currentLevel + 1}: ${theme.name}`;

        // Generate Fungal Nodes (Mushrooms)
        mushrooms = [];
        const shroomCount = 35 + currentLevel * 2;
        for (let i = 0; i < shroomCount; i++) {
          const col = Math.floor(Math.random() * (COLS - 2)) + 1;
          const row = Math.floor(Math.random() * (ROWS - 8)) + 2; // Leave bottom 6 rows mostly clear
          if (!mushrooms.some(m => m.col === col && m.row === row)) {
            mushrooms.push({ col, row, hp: 3 });
          }
        }

        // Spawn Centipede Train
        bullets = [];
        spiders = [];
        fleas = [];
        centipedes = [];

        const segmentCount = 10 + Math.floor(currentLevel * 0.4);
        const baseSpeed = 2.0 + currentLevel * 0.05;

        for (let i = 0; i < segmentCount; i++) {
          centipedes.push({
            x: (COLS / 2 - i) * cellW,
            y: 1 * cellH,
            col: Math.floor(COLS / 2 - i),
            row: 1,
            dirX: 1,
            dirY: 0,
            isHead: (i === 0),
            speed: baseSpeed
          });
        }

        player.x = canvas.width / 2;
        player.y = canvas.height - cellH * 3;
        player.fireCooldown = 0;

        updateHUD();
      }

      function updateHUD() {
        scoreVal.textContent = `${score} | HIGH: ${highScore}`;
        const shields = "🛡️".repeat(Math.max(0, lives));
        statusVal.textContent = `${centipedes.length} SEGMENTS | ${shields}`;
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

      function fireBullet() {
        if (player.fireCooldown <= 0) {
          initAudio();
          bullets.push({
            x: player.x,
            y: player.y - player.h / 2,
            vy: -11
          });
          playLaserSound();
          player.fireCooldown = 9; // rapid fire rate
        }
      }

      function update() {
        if (gameState !== 'PLAYING') return;

        // Player Movement (restricted to bottom 22% of screen)
        const minY = canvas.height - (ROWS * 0.22 * cellH);
        const maxY = canvas.height - cellH;

        if (player.movingLeft) player.x -= player.speed;
        if (player.movingRight) player.x += player.speed;
        if (player.movingUp) player.y -= player.speed;
        if (player.movingDown) player.y += player.speed;

        player.x = Math.max(cellW, Math.min(canvas.width - cellW, player.x));
        player.y = Math.max(minY, Math.min(maxY, player.y));

        if (player.fireCooldown > 0) player.fireCooldown--;
        if (player.firing) fireBullet();
        if (invulnTimer > 0) invulnTimer--;

        // Update Bullets
        for (let i = bullets.length - 1; i >= 0; i--) {
          const b = bullets[i];
          b.y += b.vy;

          if (b.y < 0) {
            bullets.splice(i, 1);
            continue;
          }

          // Bullet vs Mushroom
          let bulletRemoved = false;
          const bCol = Math.floor(b.x / cellW);
          const bRow = Math.floor(b.y / cellH);

          for (let m = 0; m < mushrooms.length; m++) {
            const shroom = mushrooms[m];
            if (shroom.col === bCol && shroom.row === bRow) {
              shroom.hp--;
              playMushroomPop();
              score += 5;
              if (shroom.hp <= 0) {
                mushrooms.splice(m, 1);
                score += 15;
              }
              bullets.splice(i, 1);
              bulletRemoved = true;
              updateHUD();
              break;
            }
          }
          if (bulletRemoved) continue;

          // Bullet vs Centipede Segments
          for (let c = 0; c < centipedes.length; c++) {
            const seg = centipedes[c];
            const dist = Math.hypot(b.x - seg.x, b.y - seg.y);
            if (dist < cellW * 0.85) {
              playCentipedeHit();
              score += seg.isHead ? 200 : 100;
              // Transform hit segment into mushroom
              const sCol = Math.max(0, Math.min(COLS - 1, Math.floor(seg.x / cellW)));
              const sRow = Math.max(0, Math.min(ROWS - 1, Math.floor(seg.y / cellH)));
              if (!mushrooms.some(m => m.col === sCol && m.row === sRow)) {
                mushrooms.push({ col: sCol, row: sRow, hp: 3 });
              }

              // The subsequent segment behind this one becomes a new Head!
              if (c + 1 < centipedes.length) {
                centipedes[c + 1].isHead = true;
              }

              centipedes.splice(c, 1);
              bullets.splice(i, 1);
              updateHUD();
              break;
            }
          }
          if (bulletRemoved) continue;

          // Bullet vs Spiders
          for (let s = spiders.length - 1; s >= 0; s--) {
            const sp = spiders[s];
            if (Math.hypot(b.x - sp.x, b.y - sp.y) < cellW * 1.2) {
              score += 400;
              spiders.splice(s, 1);
              bullets.splice(i, 1);
              playCentipedeHit();
              updateHUD();
              break;
            }
          }
        }

        // Spawn Spiders periodically
        if (spiders.length === 0 && Math.random() < 0.008 + currentLevel * 0.0005) {
          spiders.push({
            x: Math.random() < 0.5 ? 0 : canvas.width,
            y: canvas.height - cellH * 4,
            vx: (Math.random() < 0.5 ? 1 : -1) * (2.2 + currentLevel * 0.04),
            vy: 0,
            jumpTimer: 0
          });
        }

        // Update Spiders
        for (let s = spiders.length - 1; s >= 0; s--) {
          const sp = spiders[s];
          sp.x += sp.vx;
          sp.jumpTimer++;
          sp.y += Math.sin(sp.jumpTimer * 0.12) * 3;

          // Check player collision with invulnerability protection
          if (invulnTimer <= 0 && Math.hypot(player.x - sp.x, player.y - sp.y) < cellW * 1.1) {
            handleBuggyDeath();
            return;
          }

          if (sp.x < -cellW * 2 || sp.x > canvas.width + cellW * 2) {
            spiders.splice(s, 1);
          }
        }

        // Update Centipede Segments
        centipedes.forEach(seg => {
          seg.x += seg.dirX * seg.speed;

          const curCol = Math.floor(seg.x / cellW);
          const curRow = Math.floor(seg.y / cellH);

          // Check obstacle hit (Wall or Mushroom)
          let hitObstacle = false;
          if (seg.dirX > 0 && seg.x + cellW / 2 >= canvas.width) {
            hitObstacle = true;
          } else if (seg.dirX < 0 && seg.x - cellW / 2 <= 0) {
            hitObstacle = true;
          } else {
            // Check mushroom collision ahead
            const nextCol = seg.dirX > 0 ? curCol + 1 : curCol;
            if (mushrooms.some(m => m.col === nextCol && m.row === curRow)) {
              hitObstacle = true;
            }
          }

          if (hitObstacle) {
            seg.dirX *= -1;
            seg.y += cellH; // Step down one row
            // If centipede hits the bottom player sector, wrap to upper boundary
            if (seg.y > canvas.height - cellH * 1.5) {
              seg.y = canvas.height - cellH * 7;
            }
          }

          // Player collision with Centipede with invulnerability protection
          if (invulnTimer <= 0 && Math.hypot(player.x - seg.x, player.y - seg.y) < cellW * 0.9) {
            handleBuggyDeath();
            return;
          }
        });

        // Stage Clear Victory condition
        if (centipedes.length === 0) {
          playStageClear();
          gameState = 'WIN';
          score += 1500;
          if (score > highScore) {
            highScore = score;
            localStorage.setItem('nextgames_neon_centipede_hi', highScore);
          }
          if (currentLevel >= maxUnlocked && maxUnlocked < THEMES.length - 1) {
            maxUnlocked = currentLevel + 1;
            localStorage.setItem('nextgames_neon_centipede_lvl', maxUnlocked);
          }
          setTimeout(() => {
            if (currentLevel < THEMES.length - 1) {
              currentLevel++;
              setupLevel(currentLevel);
              gameState = 'PLAYING';
            } else {
              showMenu('BIOSPHERE MASTER PURGED!', `Supreme victory! You defended all 45 bio-domes with a total score of ${score} PTS!`, 'RESTART PRIME CAMPAIGN');
            }
          }, 1200);
        }
      }

      function handleBuggyDeath() {
        playBuggyHit();
        lives--;
        updateHUD();
        if (lives <= 0) {
          gameState = 'GAMEOVER';
          if (score > highScore) {
            highScore = score;
            localStorage.setItem('nextgames_neon_centipede_hi', highScore);
          }
          showMenu('BUGGY HULL BREACHED', `Biological swarm overrun. Sector defended up to ${score} PTS. High Score: ${highScore} PTS.`, 'RETRY SECTOR');
        } else {
          // Soft reset player position with 1.5s invulnerability grace
          invulnTimer = 90;
          player.x = canvas.width / 2;
          player.y = canvas.height - cellH * 3;
          bullets = [];
        }
      }

      function draw() {
        const theme = THEMES[currentLevel];
        ctx.fillStyle = theme.bg;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Player Zone Boundary Guide Line
        const minY = canvas.height - (ROWS * 0.22 * cellH);
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(0, minY);
        ctx.lineTo(canvas.width, minY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw Mushrooms
        mushrooms.forEach(m => {
          const mx = m.col * cellW + cellW / 2;
          const my = m.row * cellH + cellH / 2;
          const r = cellW * 0.42;

          ctx.fillStyle = theme.shroomCol;
          ctx.shadowColor = theme.shroomCol;
          ctx.shadowBlur = 8;

          // Mushroom cap
          ctx.beginPath();
          ctx.arc(mx, my - 2, r, Math.PI, 0, false);
          ctx.closePath();
          ctx.fill();

          // Mushroom stem
          ctx.fillStyle = "rgba(255,255,255,0.7)";
          ctx.fillRect(mx - r * 0.3, my - 2, r * 0.6, r * 0.8);

          // Damage indicator cracks
          if (m.hp < 3) {
            ctx.fillStyle = "#000000";
            ctx.fillRect(mx - 2, my - 6, 4, 3);
          }
        });

        // Draw Centipede Segments
        centipedes.forEach(seg => {
          const r = cellW * 0.45;
          ctx.shadowBlur = 12;

          if (seg.isHead) {
            ctx.fillStyle = theme.centiHead;
            ctx.shadowColor = theme.centiHead;
            ctx.beginPath();
            ctx.arc(seg.x, seg.y, r, 0, Math.PI * 2);
            ctx.fill();

            // Head Antennae / Eyes
            ctx.fillStyle = "#ffffff";
            ctx.beginPath();
            ctx.arc(seg.x + seg.dirX * 3, seg.y - 3, 2.5, 0, Math.PI * 2);
            ctx.arc(seg.x + seg.dirX * 3, seg.y + 3, 2.5, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = theme.centiBody;
            ctx.shadowColor = theme.centiBody;
            ctx.beginPath();
            ctx.arc(seg.x, seg.y, r * 0.85, 0, Math.PI * 2);
            ctx.fill();

            // Little insect legs
            ctx.strokeStyle = theme.centiBody;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(seg.x, seg.y - r * 0.85);
            ctx.lineTo(seg.x, seg.y - r * 1.3);
            ctx.moveTo(seg.x, seg.y + r * 0.85);
            ctx.lineTo(seg.x, seg.y + r * 1.3);
            ctx.stroke();
          }
        });

        // Draw Spiders
        spiders.forEach(sp => {
          ctx.fillStyle = theme.spiderCol;
          ctx.shadowColor = theme.spiderCol;
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, cellW * 0.5, 0, Math.PI * 2);
          ctx.fill();

          // Spider 8 legs
          ctx.strokeStyle = theme.spiderCol;
          ctx.lineWidth = 2;
          for (let a = 0; a < 4; a++) {
            const ang = (a / 4) * Math.PI - Math.PI / 2;
            ctx.beginPath();
            ctx.moveTo(sp.x, sp.y);
            ctx.lineTo(sp.x + Math.cos(ang) * cellW * 1.1, sp.y + Math.sin(ang) * cellW * 1.1);
            ctx.stroke();
          }
        });

        // Draw Bullets
        ctx.fillStyle = theme.laserCol;
        ctx.shadowColor = theme.laserCol;
        ctx.shadowBlur = 10;
        bullets.forEach(b => {
          ctx.fillRect(b.x - 2, b.y - 8, 4, 12);
        });

        // Draw Player Buggy
        ctx.save();
        ctx.translate(player.x, player.y);
        ctx.fillStyle = "#00ff88";
        ctx.shadowColor = "#00ff88";
        ctx.shadowBlur = 15;

        // Buggy Hull
        ctx.beginPath();
        ctx.moveTo(0, -player.h / 2);
        ctx.lineTo(player.w / 2, player.h / 2);
        ctx.lineTo(player.w / 4, player.h / 3);
        ctx.lineTo(-player.w / 4, player.h / 3);
        ctx.lineTo(-player.w / 2, player.h / 2);
        ctx.closePath();
        ctx.fill();

        // Cockpit
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(0, 0, player.w * 0.2, 0, Math.PI * 2);
        ctx.fill();

        // Defensive Shield when Invulnerable
        if (invulnTimer > 0 && Math.floor(invulnTimer / 6) % 2 === 0) {
          ctx.strokeStyle = "#00f0ff";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, player.w * 0.85, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
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

      // Keyboard Listeners
      window.addEventListener('keydown', e => {
        if (['ArrowLeft', 'KeyA'].includes(e.code)) player.movingLeft = true;
        if (['ArrowRight', 'KeyD'].includes(e.code)) player.movingRight = true;
        if (['ArrowUp', 'KeyW'].includes(e.code)) player.movingUp = true;
        if (['ArrowDown', 'KeyS'].includes(e.code)) player.movingDown = true;
        if (['Space'].includes(e.code)) { player.firing = true; e.preventDefault(); }
      });

      window.addEventListener('keyup', e => {
        if (['ArrowLeft', 'KeyA'].includes(e.code)) player.movingLeft = false;
        if (['ArrowRight', 'KeyD'].includes(e.code)) player.movingRight = false;
        if (['ArrowUp', 'KeyW'].includes(e.code)) player.movingUp = false;
        if (['ArrowDown', 'KeyS'].includes(e.code)) player.movingDown = false;
        if (['Space'].includes(e.code)) player.firing = false;
      });

      // Mouse & Touch Controls
      canvas.addEventListener('mousemove', e => {
        const rect = canvas.getBoundingClientRect();
        player.x = e.clientX - rect.left;
        player.y = e.clientY - rect.top;
      });

      canvas.addEventListener('mousedown', () => { player.firing = true; });
      window.addEventListener('mouseup', () => { player.firing = false; });

      canvas.addEventListener('touchmove', e => {
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        player.x = e.touches[0].clientX - rect.left;
        player.y = e.touches[0].clientY - rect.top;
        player.firing = true;
      }, { passive: false });

      canvas.addEventListener('touchend', () => { player.firing = false; });

      // Start Button
      startBtn.addEventListener('click', () => {
        initAudio();
        menuScreen.classList.add('hidden');
        score = 0;
        lives = 3;
        setupLevel(currentLevel);
        gameState = 'PLAYING';
      });

      // Init
      resize();
      buildLevelGrid();
      setupLevel(0);
      requestAnimationFrame(gameLoop);
    })();
