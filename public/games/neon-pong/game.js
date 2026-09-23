/**
 * Standalone Game Engine & Canvas Renderer
 * Module: neon-pong
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * NEON PONG: HYPER DUEL - 45 UNIQUE ARENAS & NEURAL AI PROGRESSION
     * Features: Deflection angle physics, ball spin acceleration,
     * progressive neural AI archetypes, Web Audio API procedural square-wave sound.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const speedVal = document.getElementById('speedVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Neon Arena Themes
      const THEMES = [
        { name: "Cyan/Magenta Void", bg: "#04020f", border: "#00f0ff", playerCol: "#00f0ff", aiCol: "#ff007f", aiSpeed: 4.5, aiName: "Novice Core" },
        { name: "Amber Laser Matrix", bg: "#120800", border: "#ffd700", playerCol: "#ffaa00", aiCol: "#ff3300", aiSpeed: 4.8, aiName: "Reflex Node" },
        { name: "Emerald Holographic Grid", bg: "#011409", border: "#00ff88", playerCol: "#38ef7d", aiCol: "#67e8f9", aiSpeed: 5.1, aiName: "Vector Drone" },
        { name: "Glacial Blue Arena", bg: "#010e1c", border: "#64dfdf", playerCol: "#caf0f8", aiCol: "#00b4d8", aiSpeed: 5.4, aiName: "Cryo Subroutine" },
        { name: "Volcanic Obsidian Court", bg: "#170200", border: "#ff3300", playerCol: "#ffaa00", aiCol: "#ff1744", aiSpeed: 5.7, aiName: "Magma Striker" },
        { name: "Clockwork Brass Chamber", bg: "#140f04", border: "#d4a373", playerCol: "#e9c46a", aiCol: "#bc6c25", aiSpeed: 6.0, aiName: "Chrono Bot" },
        { name: "Quantum Singularity Ring", bg: "#020008", border: "#9d4edd", playerCol: "#c77dff", aiCol: "#f72585", aiSpeed: 6.3, aiName: "Singularity AI" },
        { name: "Submerged Hydro-Court", bg: "#011417", border: "#00b4d8", playerCol: "#90e0ef", aiCol: "#2dd4bf", aiSpeed: 6.5, aiName: "Abyssal Sentinel" },
        { name: "Solar Flare Colosseum", bg: "#1c1001", border: "#ff9100", playerCol: "#ffd166", aiCol: "#ff5400", aiSpeed: 6.8, aiName: "Solar Archon" },
        { name: "Emerald Nanite Hexagon", bg: "#001a0e", border: "#10b981", playerCol: "#34d399", aiCol: "#a7f3d0", aiSpeed: 7.0, aiName: "Nanite Swarm" },
        { name: "Antimatter Containment Court", bg: "#0f0117", border: "#d500f9", playerCol: "#e040fb", aiCol: "#00f0ff", aiSpeed: 7.2, aiName: "Antimatter Mind" },
        { name: "Acid Rain Tokyo Arena", bg: "#12021a", border: "#cc00ff", playerCol: "#00f0ff", aiCol: "#ff0055", aiSpeed: 7.4, aiName: "Cyber Yakuza" },
        { name: "Obsidian Badlands Matrix", bg: "#0a0a0a", border: "#ff0055", playerCol: "#ff5500", aiCol: "#ffffff", aiSpeed: 7.6, aiName: "Dreadnought" },
        { name: "Atmospheric Cloud Coliseum", bg: "#061833", border: "#66b3ff", playerCol: "#ffffff", aiCol: "#38bdf8", aiSpeed: 7.8, aiName: "Strato Valkyrie" },
        { name: "Supernova Dust Arena", bg: "#1f030f", border: "#ff3366", playerCol: "#ff99aa", aiCol: "#ffd700", aiSpeed: 8.0, aiName: "Cosmic Pulsar" },
        { name: "Singularity Core Void", bg: "#000000", border: "#651fff", playerCol: "#00e5ff", aiCol: "#ffffff", aiSpeed: 8.2, aiName: "Singularity X" },
        { name: "Plasma Forge Crucible", bg: "#1a0800", border: "#ff6d00", playerCol: "#ffaa00", aiCol: "#ff3d00", aiSpeed: 8.4, aiName: "Ignition Engine" },
        { name: "Titan Methane Sector", bg: "#001a1a", border: "#20b2aa", playerCol: "#48d1cc", aiCol: "#f43f5e", aiSpeed: 8.6, aiName: "Hydrocarbon AI" },
        { name: "Silicon Sand Quad", bg: "#171400", border: "#ffd700", playerCol: "#ffa500", aiCol: "#22d3ee", aiSpeed: 8.8, aiName: "Desert Mirage" },
        { name: "Neutron Magnetar Ring", bg: "#080117", border: "#00f5d4", playerCol: "#7b2cbf", aiCol: "#3a0ca3", aiSpeed: 9.0, aiName: "Flux Master" },
        { name: "Holographic Cyber-Ruins", bg: "#00170f", border: "#38b000", playerCol: "#70e000", aiCol: "#facc15", aiSpeed: 9.2, aiName: "Ancient Cipher" },
        { name: "Dark Nebula Hollow", bg: "#05000a", border: "#bf55ec", playerCol: "#be90d4", aiCol: "#00f0ff", aiSpeed: 9.4, aiName: "Void Phantom" },
        { name: "Cobalt Basin Circuit", bg: "#000f26", border: "#0077b6", playerCol: "#90e0ef", aiCol: "#00ffff", aiSpeed: 9.6, aiName: "Cobalt Dynamo" },
        { name: "Starlight Cathedral Arena", bg: "#140021", border: "#f72585", playerCol: "#7209b7", aiCol: "#ff4d6d", aiSpeed: 9.8, aiName: "Seraphim V" },
        { name: "Asteroid Mining Court", bg: "#0d0d0d", border: "#adb5bd", playerCol: "#e0e1dd", aiCol: "#f87171", aiSpeed: 10.0, aiName: "Excavator Alpha" },
        { name: "Prismatic Aurora Basin", bg: "#001715", border: "#48cae4", playerCol: "#a0e426", aiCol: "#ff007f", aiSpeed: 10.2, aiName: "Prism Lord" },
        { name: "Radioactive Hot-Zone", bg: "#0f1700", border: "#ccff00", playerCol: "#70e000", aiCol: "#ff3d00", aiSpeed: 10.4, aiName: "Isotope Prime" },
        { name: "Pulsar Beam Nexus", bg: "#170217", border: "#ff006e", playerCol: "#8338ec", aiCol: "#3a86ff", aiSpeed: 10.6, aiName: "Pulsar Weaver" },
        { name: "Copper Steampunk Yard", bg: "#1a0d02", border: "#d4a373", playerCol: "#bc6c25", aiCol: "#faedcd", aiSpeed: 10.8, aiName: "Brass Golem" },
        { name: "Zero-G Habitat Quad", bg: "#01121f", border: "#00e5ff", playerCol: "#69f0ae", aiCol: "#ff00aa", aiSpeed: 11.0, aiName: "Orbital Ward" },
        { name: "Krypton Gas Dome", bg: "#001c16", border: "#00ff87", playerCol: "#60efff", aiCol: "#00b4d8", aiSpeed: 11.2, aiName: "Noble Gas Bot" },
        { name: "Hyper-Space Warp Arena", bg: "#09001f", border: "#ff007f", playerCol: "#00f0ff", aiCol: "#7000ff", aiSpeed: 11.4, aiName: "Warp Stalker" },
        { name: "Crimson Eclipse Court", bg: "#1c0000", border: "#ff1744", playerCol: "#ff8a80", aiCol: "#ffffff", aiSpeed: 11.6, aiName: "Blood Eclipse" },
        { name: "Bismuth Prism Court", bg: "#12001c", border: "#e040fb", playerCol: "#00e676", aiCol: "#651fff", aiSpeed: 11.8, aiName: "Polyhedral Core" },
        { name: "Thermal Steam Crucible", bg: "#121214", border: "#ff6d00", playerCol: "#ffab40", aiCol: "#ffd180", aiSpeed: 12.0, aiName: "Thermodynamic" },
        { name: "Exoplanet Canopy Arena", bg: "#00170a", border: "#00c853", playerCol: "#b9f6ca", aiCol: "#38bdf8", aiSpeed: 12.2, aiName: "Titan Arbor" },
        { name: "Tachyon Mirror Matrix", bg: "#0a001a", border: "#d500f9", playerCol: "#00b0ff", aiCol: "#ffffff", aiSpeed: 12.4, aiName: "Chronos Mirror" },
        { name: "Gamma Burst Coliseum", bg: "#171700", border: "#ffff00", playerCol: "#76ff03", aiCol: "#f43f5e", aiSpeed: 12.6, aiName: "Gamma Overlord" },
        { name: "Vaporwave Neon Plaza", bg: "#1c0b1f", border: "#ff80bf", playerCol: "#80dfff", aiCol: "#f72585", aiSpeed: 12.8, aiName: "Synth Aesthetic" },
        { name: "Dark Energy Monolith Court", bg: "#020202", border: "#651fff", playerCol: "#00e5ff", aiCol: "#ff007f", aiSpeed: 13.0, aiName: "Monolith Entity" },
        { name: "Quasar Relativistic Core", bg: "#17020d", border: "#ff0055", playerCol: "#ffaa00", aiCol: "#ffffff", aiSpeed: 13.2, aiName: "Relativistic God" },
        { name: "Heliosphere Outer Ring", bg: "#000e1f", border: "#2979ff", playerCol: "#00e5ff", aiCol: "#facc15", aiSpeed: 13.4, aiName: "Solar Boundary" },
        { name: "Synthetic Reef Atoll", bg: "#001a17", border: "#1de9b6", playerCol: "#00b4d8", aiCol: "#ff4081", aiSpeed: 13.6, aiName: "Polymer Kraken" },
        { name: "Chrono-Stasis Void", bg: "#0f0117", border: "#e040fb", playerCol: "#7c4dff", aiCol: "#00f0ff", aiSpeed: 13.8, aiName: "Stasis Archon" },
        { name: "Omega Point Supreme Grandmaster", bg: "#000000", border: "#00f0ff", playerCol: "#ffffff", aiCol: "#ff007f", aiSpeed: 14.2, aiName: "OMEGA AI" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playBlip(freq, duration = 0.05, type = 'square') {
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

      // Game Variables
      let currentLevel = parseInt(localStorage.getItem('np_saved_level') || '1', 10);
      let isPlaying = false;
      let playerScore = 0;
      let aiScore = 0;
      const targetScore = 5;

      // Paddles & Ball
      const paddleWidth = 14;
      const paddleHeight = 90;
      let playerY = 0;
      let aiY = 0;
      let ball = { x: 0, y: 0, vx: 7, vy: 3, radius: 8, speed: 7 };
      let trail = [];

      let keys = { up: false, down: false };

      // Input
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = true;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = false;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = false;
      });

      // Mouse & Touch Controls
      window.addEventListener('mousemove', e => {
        if (!isPlaying) return;
        playerY = e.clientY - paddleHeight / 2;
      });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        playerY = e.touches[0].clientY - paddleHeight / 2;
      }, { passive: true });

      function resetBall(direction) {
        ball.x = width / 2;
        ball.y = height / 2;
        ball.speed = 7 + (currentLevel * 0.15);
        const angle = (Math.random() - 0.5) * (Math.PI / 3);
        ball.vx = Math.cos(angle) * ball.speed * direction;
        ball.vy = Math.sin(angle) * ball.speed;
        trail = [];
      }

      // Level Select Builder
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
        themeVal.textContent = `${currentLevel}: ${t.name} [vs ${t.aiName}]`;
        themeVal.style.color = t.border;
        scoreVal.textContent = `YOU ${playerScore} - ${aiScore} AI (First to 5)`;
        speedVal.textContent = `${Math.abs(ball.vx).toFixed(1)} PX/F`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('np_saved_level', currentLevel);
        playerScore = 0;
        aiScore = 0;
        playerY = height / 2 - paddleHeight / 2;
        aiY = height / 2 - paddleHeight / 2;
        resetBall(1);
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playBlip(440, 0.2);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endMatch(win) {
        isPlaying = false;
        playBlip(win ? 880 : 120, 0.4, win ? 'triangle' : 'sawtooth');
        menuTitle.textContent = win ? "ARENA VICTORIOUS!" : "SYSTEM DEFEAT";
        menuDesc.textContent = win ?
          `You defeated ${THEMES[(currentLevel - 1) % THEMES.length].aiName} (${playerScore}-${aiScore})! Vector arena mastered.` :
          `Defeated by ${THEMES[(currentLevel - 1) % THEMES.length].aiName} (${playerScore}-${aiScore}). Hone your deflection spin angles!`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT ARENA" : "RETRY ARENA";
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

        const t = THEMES[(currentLevel - 1) % THEMES.length];

        // Player movement via keyboard
        const pSpeed = 10;
        if (keys.up) playerY -= pSpeed;
        if (keys.down) playerY += pSpeed;

        if (playerY < 20) playerY = 20;
        if (playerY > height - paddleHeight - 20) playerY = height - paddleHeight - 20;

        // Neural AI movement
        const aiCenter = aiY + paddleHeight / 2;
        const targetY = ball.y;
        if (aiCenter < targetY - 10) aiY += t.aiSpeed;
        else if (aiCenter > targetY + 10) aiY -= t.aiSpeed;

        if (aiY < 20) aiY = 20;
        if (aiY > height - paddleHeight - 20) aiY = height - paddleHeight - 20;

        // Ball movement
        ball.x += ball.vx;
        ball.y += ball.vy;

        // Ball Trail
        trail.push({ x: ball.x, y: ball.y });
        if (trail.length > 8) trail.shift();

        // Top/Bottom Wall Collisions
        if (ball.y - ball.radius < 20) {
          ball.y = 20 + ball.radius;
          ball.vy *= -1;
          playBlip(320);
        } else if (ball.y + ball.radius > height - 20) {
          ball.y = height - 20 - ball.radius;
          ball.vy *= -1;
          playBlip(320);
        }

        // Player Paddle Collision (Left)
        const pX = 50;
        if (ball.x - ball.radius < pX + paddleWidth && ball.x + ball.radius > pX) {
          if (ball.y > playerY && ball.y < playerY + paddleHeight) {
            ball.x = pX + paddleWidth + ball.radius;
            // Angular deflection
            const hitPos = (ball.y - (playerY + paddleHeight / 2)) / (paddleHeight / 2);
            ball.speed = Math.min(22, ball.speed + 0.4);
            ball.vx = Math.abs(Math.cos(hitPos * 1.1) * ball.speed);
            ball.vy = Math.sin(hitPos * 1.1) * ball.speed;
            playBlip(520 + Math.floor(hitPos * 100));
          }
        }

        // AI Paddle Collision (Right)
        const aiX = width - 50 - paddleWidth;
        if (ball.x + ball.radius > aiX && ball.x - ball.radius < aiX + paddleWidth) {
          if (ball.y > aiY && ball.y < aiY + paddleHeight) {
            ball.x = aiX - ball.radius;
            const hitPos = (ball.y - (aiY + paddleHeight / 2)) / (paddleHeight / 2);
            ball.speed = Math.min(22, ball.speed + 0.4);
            ball.vx = -Math.abs(Math.cos(hitPos * 1.1) * ball.speed);
            ball.vy = Math.sin(hitPos * 1.1) * ball.speed;
            playBlip(480);
          }
        }

        // Scoring
        if (ball.x < 0) {
          aiScore++;
          playBlip(160, 0.2);
          updateUI();
          if (aiScore >= targetScore) endMatch(false);
          else resetBall(1);
        } else if (ball.x > width) {
          playerScore++;
          playBlip(680, 0.2);
          updateUI();
          if (playerScore >= targetScore) endMatch(true);
          else resetBall(-1);
        }

        speedVal.textContent = `${Math.abs(ball.vx).toFixed(1)} PX/F`;
      }

      // Draw
      function draw() {
        const t = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = t.bg;
        ctx.fillRect(0, 0, width, height);

        // Arena Outer Glow Border
        ctx.strokeStyle = t.border;
        ctx.lineWidth = 4;
        ctx.shadowColor = t.border;
        ctx.shadowBlur = 18;
        ctx.strokeRect(20, 20, width - 40, height - 40);
        ctx.shadowBlur = 0;

        // Center dashed net
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 4;
        ctx.setLineDash([12, 12]);
        ctx.beginPath();
        ctx.moveTo(width / 2, 20);
        ctx.lineTo(width / 2, height - 20);
        ctx.stroke();
        ctx.setLineDash([]);

        // Ball Trail
        for (let i = 0; i < trail.length; i++) {
          const pt = trail[i];
          ctx.fillStyle = `rgba(0, 240, 255, ${(i / trail.length) * 0.4})`;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, ball.radius * (i / trail.length), 0, Math.PI * 2);
          ctx.fill();
        }

        // Ball
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = t.border;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Player Paddle (Left)
        ctx.fillStyle = t.playerCol;
        ctx.shadowColor = t.playerCol;
        ctx.shadowBlur = 15;
        ctx.fillRect(50, playerY, paddleWidth, paddleHeight);

        // AI Paddle (Right)
        ctx.fillStyle = t.aiCol;
        ctx.shadowColor = t.aiCol;
        ctx.shadowBlur = 15;
        ctx.fillRect(width - 50 - paddleWidth, aiY, paddleWidth, paddleHeight);
        ctx.shadowBlur = 0;

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      updateUI();
      draw();
    })();
