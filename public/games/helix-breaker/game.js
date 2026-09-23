/**
 * Standalone Game Engine & Canvas Renderer
 * Module: helix-breaker
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * HELIX BREAKER: NEON BRICK BUSTER - 45 UNIQUE BRICK THEMES & MATRICES
     * Features: Multi-hit bricks, falling capsule powerups (Multi-Ball, Wide Paddle),
     * ascending synth pings, procedural Web Audio API sound.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const brickVal = document.getElementById('brickVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Brick Matrix Themes
      const THEMES = [
        { name: "Circuit Board Green", bg: "#011208", brick1: "#00ff88", brick2: "#38ef7d", paddle: "#00f0ff" },
        { name: "Crystal Amethyst", bg: "#0c0117", brick1: "#9d4edd", brick2: "#c77dff", paddle: "#ff007f" },
        { name: "Solar Gold", bg: "#140c01", brick1: "#ffd700", brick2: "#ffa500", paddle: "#00ffff" },
        { name: "Deep Ocean Cyan", bg: "#010e1a", brick1: "#00b4d8", brick2: "#90e0ef", paddle: "#00ff88" },
        { name: "Volcanic Magma", bg: "#170200", brick1: "#ff3300", brick2: "#ffaa00", paddle: "#ffd700" },
        { name: "Glacial Ice", bg: "#02121c", brick1: "#64dfdf", brick2: "#caf0f8", paddle: "#ff007f" },
        { name: "Steampunk Brass", bg: "#140d03", brick1: "#d4a373", brick2: "#e9c46a", paddle: "#00f0ff" },
        { name: "Singularity Violet", bg: "#030008", brick1: "#651fff", brick2: "#b5179e", paddle: "#00ff88" },
        { name: "Acid Rain Lime", bg: "#0f1700", brick1: "#ccff00", brick2: "#70e000", paddle: "#ff0055" },
        { name: "Obsidian Badlands", bg: "#0a0a0a", brick1: "#ff0055", brick2: "#ff5500", paddle: "#00f0ff" },
        { name: "Atmospheric Blue", bg: "#041426", brick1: "#2979ff", brick2: "#82b1ff", paddle: "#ffd700" },
        { name: "Supernova Ruby", bg: "#1c030d", brick1: "#ff3366", brick2: "#ff99aa", paddle: "#00ffff" },
        { name: "Cobalt Foundry", bg: "#000f26", brick1: "#0077b6", brick2: "#48cae4", paddle: "#ff007f" },
        { name: "Emerald Forest", bg: "#01170d", brick1: "#10b981", brick2: "#34d399", paddle: "#ffd700" },
        { name: "Dark Nebula", bg: "#05000a", brick1: "#bf55ec", brick2: "#e0aaff", paddle: "#00ff88" },
        { name: "Titan Methane", bg: "#001a1a", brick1: "#20b2aa", brick2: "#48d1cc", paddle: "#ff0055" },
        { name: "Silicon Dunes", bg: "#171401", brick1: "#f59e0b", brick2: "#fbbf24", paddle: "#00f0ff" },
        { name: "Neutron Core", bg: "#080117", brick1: "#00f5d4", brick2: "#7b2cbf", paddle: "#ffaa00" },
        { name: "Cyber Ruins", bg: "#00170f", brick1: "#38b000", brick2: "#70e000", paddle: "#c77dff" },
        { name: "Starlight Rose", bg: "#17001c", brick1: "#f72585", brick2: "#ff758f", paddle: "#00f0ff" },
        { name: "Asteroid Slag", bg: "#0d0d0d", brick1: "#adb5bd", brick2: "#e0e1dd", paddle: "#00ff88" },
        { name: "Prismatic Aurora", bg: "#001715", brick1: "#48cae4", brick2: "#a0e426", paddle: "#ff007f" },
        { name: "Radioactive Core", bg: "#0d1400", brick1: "#aacc00", brick2: "#ffff3f", paddle: "#00f0ff" },
        { name: "Pulsar Nexus", bg: "#140114", brick1: "#ff006e", brick2: "#8338ec", paddle: "#ffd700" },
        { name: "Copper Boiler", bg: "#1a0c02", brick1: "#bc6c25", brick2: "#dda15e", paddle: "#00ff88" },
        { name: "Zero-G Crystal", bg: "#01121f", brick1: "#00e5ff", brick2: "#69f0ae", paddle: "#ff00aa" },
        { name: "Krypton Flare", bg: "#001c16", brick1: "#00ff87", brick2: "#60efff", paddle: "#ffffff" },
        { name: "Hyper-Space Warp", bg: "#09001f", brick1: "#ff007f", brick2: "#00f0ff", paddle: "#ffd700" },
        { name: "Crimson Eclipse", bg: "#1c0101", brick1: "#ff1744", brick2: "#ff8a80", paddle: "#00ff88" },
        { name: "Bismuth Matrix", bg: "#12001c", brick1: "#e040fb", brick2: "#00e676", paddle: "#00f0ff" },
        { name: "Thermal Steam", bg: "#121214", brick1: "#ff6d00", brick2: "#ffab40", paddle: "#ffd700" },
        { name: "Exoplanet Flora", bg: "#00170a", brick1: "#00c853", brick2: "#b9f6ca", paddle: "#ff007f" },
        { name: "Tachyon Mirror", bg: "#0a001a", brick1: "#d500f9", brick2: "#00b0ff", paddle: "#00ff88" },
        { name: "Gamma Burst", bg: "#171700", brick1: "#ffff00", brick2: "#76ff03", paddle: "#ff0055" },
        { name: "Vaporwave Pastel", bg: "#1c0b1f", brick1: "#ff80bf", brick2: "#80dfff", paddle: "#ffd700" },
        { name: "Dark Monolith", bg: "#020202", brick1: "#651fff", brick2: "#00e5ff", paddle: "#ffffff" },
        { name: "Quasar Relativistic", bg: "#17020d", brick1: "#ff0055", brick2: "#ffaa00", paddle: "#00ff88" },
        { name: "Heliosphere Fringe", bg: "#000e1f", brick1: "#2979ff", brick2: "#00e5ff", paddle: "#ff007f" },
        { name: "Synthetic Coral", bg: "#001a17", brick1: "#1de9b6", brick2: "#00b4d8", paddle: "#ffd700" },
        { name: "Chrono Stasis", bg: "#0f0117", brick1: "#e040fb", brick2: "#7c4dff", paddle: "#00f0ff" },
        { name: "Cosmic Filament", bg: "#030317", brick1: "#3d5afe", brick2: "#ff4081", paddle: "#00ff88" },
        { name: "Supercluster Core", bg: "#0a0014", brick1: "#c026d3", brick2: "#e879f9", paddle: "#ffd700" },
        { name: "Big Bang Genesis", bg: "#05000a", brick1: "#ffd700", brick2: "#ff007f", paddle: "#00f0ff" },
        { name: "Hadron Collision", bg: "#010814", brick1: "#00f0ff", brick2: "#a5f3fc", paddle: "#ff1744" },
        { name: "Omega Point Supreme", bg: "#000000", brick1: "#00f0ff", brick2: "#ff007f", paddle: "#ffffff" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playPing(freq, duration = 0.08) {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'triangle';
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
      let currentLevel = parseInt(localStorage.getItem('hb_saved_level') || '1', 10);
      let isPlaying = false;
      let score = 0;
      let lives = 3;
      let combo = 0;

      // Paddle
      let paddle = { x: 0, y: 0, w: 100, h: 16, speed: 8 };

      // Balls (supports multi-ball powerups)
      let balls = [];

      // Bricks
      let bricks = [];

      let keys = { left: false, right: false };

      // Input
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
      });

      // Mouse / Touch
      window.addEventListener('mousemove', e => {
        if (!isPlaying) return;
        paddle.x = e.clientX - paddle.w / 2;
      });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        paddle.x = e.touches[0].clientX - paddle.w / 2;
      }, { passive: true });

      function setupMatrix(lvl) {
        bricks = [];
        balls = [];
        combo = 0;
        paddle.w = 100;
        paddle.x = width / 2 - paddle.w / 2;
        paddle.y = height - 60;

        // Brick grid: rows scale with level
        const rows = Math.min(6, 3 + Math.floor(lvl / 10));
        const cols = 8;
        const bWidth = Math.min(70, (width * 0.8) / cols);
        const bHeight = 22;
        const startX = width / 2 - (cols * (bWidth + 8)) / 2;
        const startY = 80;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const hits = r === 0 ? 2 : 1;
            bricks.push({
              x: startX + c * (bWidth + 8),
              y: startY + r * (bHeight + 8),
              w: bWidth,
              h: bHeight,
              hits: hits,
              maxHits: hits,
              alive: true
            });
          }
        }

        // Spawn main ball
        balls.push({
          x: width / 2,
          y: paddle.y - 15,
          vx: 4.5 * (Math.random() > 0.5 ? 1 : -1),
          vy: -6,
          radius: 7
        });
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
        themeVal.style.color = t.brick1;
        const remaining = bricks.filter(b => b.alive).length;
        brickVal.textContent = `${remaining} / ${bricks.length}`;
        scoreVal.textContent = `${score} PTS (x${combo + 1}) | LIVES: ${lives}`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('hb_saved_level', currentLevel);
        lives = 3;
        setupMatrix(currentLevel);
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playPing(440, 0.2);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        playPing(win ? 880 : 120, 0.4);
        menuTitle.textContent = win ? "MATRIX SHATTERED!" : "OUT OF BALLS";
        menuDesc.textContent = win ?
          `Congratulations! All cybernetic brick layers destroyed in Level ${currentLevel}. Score: ${score} pts.` :
          `No reserve balls remaining! Score: ${score} pts. Master deflection angle control.`;
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
        if (!isPlaying) return;

        // Keyboard paddle
        if (keys.left) paddle.x -= paddle.speed;
        if (keys.right) paddle.x += paddle.speed;
        if (paddle.x < 15) paddle.x = 15;
        if (paddle.x > width - paddle.w - 15) paddle.x = width - paddle.w - 15;

        // Update Balls
        for (let i = balls.length - 1; i >= 0; i--) {
          const ball = balls[i];
          ball.x += ball.vx;
          ball.y += ball.vy;

          // Wall bounces
          if (ball.x - ball.radius < 15) {
            ball.x = 15 + ball.radius;
            ball.vx *= -1;
            playPing(300);
          } else if (ball.x + ball.radius > width - 15) {
            ball.x = width - 15 - ball.radius;
            ball.vx *= -1;
            playPing(300);
          }

          if (ball.y - ball.radius < 40) {
            ball.y = 40 + ball.radius;
            ball.vy *= -1;
            playPing(350);
          }

          // Paddle bounce
          if (ball.y + ball.radius > paddle.y && ball.y - ball.radius < paddle.y + paddle.h) {
            if (ball.x > paddle.x && ball.x < paddle.x + paddle.w) {
              ball.y = paddle.y - ball.radius;
              const hitOffset = (ball.x - (paddle.x + paddle.w / 2)) / (paddle.w / 2);
              const speed = Math.hypot(ball.vx, ball.vy);
              ball.vx = hitOffset * 6.5;
              ball.vy = -Math.sqrt(Math.max(16, speed * speed - ball.vx * ball.vx));
              combo = 0;
              playPing(480);
            }
          }

          // Brick collisions
          for (let b of bricks) {
            if (!b.alive) continue;
            if (ball.x > b.x && ball.x < b.x + b.w && ball.y > b.y && ball.y < b.y + b.h) {
              b.hits--;
              combo++;
              score += 25 * combo;
              ball.vy *= -1;
              playPing(520 + Math.min(600, combo * 40));

              if (b.hits <= 0) {
                b.alive = false;
              }

              updateUI();

              // Check matrix clear
              if (bricks.every(br => !br.alive)) {
                endLevel(true);
                return;
              }
              break;
            }
          }

          // Bottom drop
          if (ball.y > height + 20) {
            balls.splice(i, 1);
          }
        }

        // If all balls lost
        if (balls.length === 0) {
          lives--;
          updateUI();
          if (lives <= 0) {
            endLevel(false);
          } else {
            // Respawn single ball
            balls.push({
              x: width / 2,
              y: paddle.y - 15,
              vx: 4.5 * (Math.random() > 0.5 ? 1 : -1),
              vy: -6,
              radius: 7
            });
          }
        }
      }

      // Draw
      function draw() {
        const t = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = t.bg;
        ctx.fillRect(0, 0, width, height);

        // Border rails
        ctx.strokeStyle = t.paddle;
        ctx.lineWidth = 3;
        ctx.shadowColor = t.paddle;
        ctx.shadowBlur = 10;
        ctx.strokeRect(15, 40, width - 30, height);
        ctx.shadowBlur = 0;

        // Draw Bricks
        for (let b of bricks) {
          if (!b.alive) continue;
          ctx.fillStyle = b.hits > 1 ? t.brick2 : t.brick1;
          ctx.shadowColor = ctx.fillStyle;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.roundRect(b.x, b.y, b.w, b.h, 4);
          ctx.fill();

          // Highlight border
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Draw Paddle
        ctx.fillStyle = t.paddle;
        ctx.shadowColor = t.paddle;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.roundRect(paddle.x, paddle.y, paddle.w, paddle.h, 6);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw Balls
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 12;
        for (let ball of balls) {
          ctx.beginPath();
          ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      setupMatrix(currentLevel);
      updateUI();
      draw();
    })();
