/**
 * Standalone Game Engine & Canvas Renderer
 * Module: retro-grid-invaders
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * RETRO GRID INVADERS: VECTOR SWARM - 45 UNIQUE ATMOSPHERIC SECTOR THEMES
     * Features: Marching alien swarm algorithms, destructible defense bunkers,
     * mystery mothership flybys, procedural Web Audio API descending bass pulse.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const waveVal = document.getElementById('waveVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Atmospheric Sector Themes
      const THEMES = [
        { name: "Moonbase Alpha", bg: "#020108", alien1: "#00ff88", alien2: "#00f0ff", bunker: "#38ef7d", player: "#00f0ff" },
        { name: "Martian Red Sky", bg: "#140300", alien1: "#ffaa00", alien2: "#ff3300", bunker: "#ffd700", player: "#00ff88" },
        { name: "Saturnian Ring Dust", bg: "#100d02", alien1: "#ffd166", alien2: "#f4a261", bunker: "#e9c46a", player: "#48cae4" },
        { name: "Europa Ice Crust", bg: "#01101c", alien1: "#64dfdf", alien2: "#caf0f8", bunker: "#90e0ef", player: "#ffffff" },
        { name: "Venusian Acid Shroud", bg: "#121400", alien1: "#ccff00", alien2: "#70e000", bunker: "#aacc00", player: "#00f0ff" },
        { name: "Neptune Methane Vortex", bg: "#000e1f", alien1: "#2979ff", alien2: "#00e5ff", bunker: "#82b1ff", player: "#ffd700" },
        { name: "Io Sulfur Caldera", bg: "#170a00", alien1: "#ff6d00", alien2: "#ffab40", bunker: "#ffa500", player: "#00ff88" },
        { name: "Titan Hydrocarbon Lake", bg: "#011717", alien1: "#20b2aa", alien2: "#48d1cc", bunker: "#a7ffeb", player: "#ff007f" },
        { name: "Orion Nebula Rim", bg: "#0f0117", alien1: "#d500f9", alien2: "#e040fb", bunker: "#c77dff", player: "#00f0ff" },
        { name: "Pluto Nitrogen Dunes", bg: "#0a0a0f", alien1: "#adb5bd", alien2: "#f8f9fa", bunker: "#e0e1dd", player: "#ff1744" },
        { name: "Ceres Asteroid Hub", bg: "#0d0d0d", alien1: "#778da9", alien2: "#e0e1dd", bunker: "#415a77", player: "#00ff88" },
        { name: "Kuiper Belt Darkness", bg: "#020205", alien1: "#4f46e5", alien2: "#818cf8", bunker: "#6366f1", player: "#facc15" },
        { name: "Heliosphere Terminus", bg: "#010814", alien1: "#0ea5e9", alien2: "#38bdf8", bunker: "#7dd3fc", player: "#ff007f" },
        { name: "Alpha Centauri Core", bg: "#170c01", alien1: "#f59e0b", alien2: "#fbbf24", bunker: "#d97706", player: "#00f0ff" },
        { name: "Proxima Dust Belt", bg: "#1a0408", alien1: "#f43f5e", alien2: "#fb7185", bunker: "#fda4af", player: "#2dd4bf" },
        { name: "Sirius Diamond Cloud", bg: "#030e17", alien1: "#06b6d4", alien2: "#a5f3fc", bunker: "#67e8f9", player: "#ffffff" },
        { name: "Betelgeuse Nova Zone", bg: "#1c0300", alien1: "#dc2626", alien2: "#ef4444", bunker: "#f87171", player: "#ffd700" },
        { name: "Rigel Supergiant Flare", bg: "#020d1c", alien1: "#38bdf8", alien2: "#bae6fd", bunker: "#0284c7", player: "#ff0055" },
        { name: "Crab Pulsar Filament", bg: "#140114", alien1: "#c026d3", alien2: "#e879f9", bunker: "#f0abfc", player: "#00ff88" },
        { name: "Tarantula Nebula Web", bg: "#17001c", alien1: "#a855f7", alien2: "#c084fc", bunker: "#d8b4fe", player: "#00f0ff" },
        { name: "Horsehead Void Wall", bg: "#030005", alien1: "#7c3aed", alien2: "#a78bfa", bunker: "#c4b5fd", player: "#4ade80" },
        { name: "Cygnus X-1 Accretion", bg: "#000000", alien1: "#651fff", alien2: "#00e5ff", bunker: "#ffffff", player: "#ff007f" },
        { name: "Andromeda Peripheral", bg: "#090317", alien1: "#9333ea", alien2: "#c084fc", bunker: "#e9d5ff", player: "#38bdf8" },
        { name: "Triangulum Spiral Arm", bg: "#011412", alien1: "#14b8a6", alien2: "#5eead4", bunker: "#99f6e4", player: "#f43f5e" },
        { name: "Sombrero Dust Rim", bg: "#140e02", alien1: "#eab308", alien2: "#facc15", bunker: "#fde047", player: "#38bdf8" },
        { name: "Whirlpool Bridge", bg: "#040b17", alien1: "#0284c7", alien2: "#38bdf8", bunker: "#7dd3fc", player: "#4ade80" },
        { name: "Centaurus A Relativistic Jet", bg: "#17030e", alien1: "#e11d48", alien2: "#fb7185", bunker: "#fda4af", player: "#fde047" },
        { name: "Pinwheel Gas Filament", bg: "#01170d", alien1: "#10b981", alien2: "#34d399", bunker: "#6ee7b7", player: "#00f0ff" },
        { name: "Cartwheel Collision Ring", bg: "#170500", alien1: "#ea580c", alien2: "#f97316", bunker: "#fdba74", player: "#38bdf8" },
        { name: "Sagittarius A* Event Horizon", bg: "#000000", alien1: "#ffffff", alien2: "#00f0ff", bunker: "#ff007f", player: "#ffd700" },
        { name: "Large Magellanic Stream", bg: "#0a0314", alien1: "#d946ef", alien2: "#f472b6", bunker: "#fbcfe8", player: "#00ff88" },
        { name: "Small Magellanic Cloud", bg: "#03121a", alien1: "#06b6d4", alien2: "#67e8f9", bunker: "#a5f3fc", player: "#facc15" },
        { name: "Tachyon Mirror Sector", bg: "#0d0117", alien1: "#c026d3", alien2: "#00b0ff", bunker: "#e879f9", player: "#ffffff" },
        { name: "Gamma Ray Burst Halo", bg: "#141400", alien1: "#ca8a04", alien2: "#eab308", bunker: "#fef08a", player: "#ec4899" },
        { name: "Supervoid Eridanus", bg: "#010103", alien1: "#4338ca", alien2: "#6366f1", bunker: "#a5b4fc", player: "#00ff88" },
        { name: "Vaporwave Cosmic Horizon", bg: "#1a081c", alien1: "#f472b6", alien2: "#80dfff", bunker: "#fbcfe8", player: "#ffd700" },
        { name: "Dark Energy Monolith Zone", bg: "#000000", alien1: "#651fff", alien2: "#d500f9", bunker: "#8b5cf6", player: "#00f0ff" },
        { name: "Quasar Core Flash", bg: "#1a000d", alien1: "#be185d", alien2: "#f43f5e", bunker: "#fda4af", player: "#facc15" },
        { name: "Heliosphere Terminus Gate", bg: "#000e1f", alien1: "#0369a1", alien2: "#38bdf8", bunker: "#7dd3fc", player: "#4ade80" },
        { name: "Synthetic Silicon Swarm", bg: "#001a17", alien1: "#0d9488", alien2: "#2dd4bf", bunker: "#99f6e4", player: "#f472b6" },
        { name: "Chrono-Stasis Matrix", bg: "#0e021a", alien1: "#7e22ce", alien2: "#a855f7", bunker: "#d8b4fe", player: "#38bdf8" },
        { name: "Cosmic String Filament", bg: "#020214", alien1: "#4338ca", alien2: "#6366f1", bunker: "#a5b4fc", player: "#ff007f" },
        { name: "Supercluster Laniakea", bg: "#0a0014", alien1: "#c026d3", alien2: "#e879f9", bunker: "#f0abfc", player: "#00f0ff" },
        { name: "Big Bang Echo Frontier", bg: "#05000a", alien1: "#ffd700", alien2: "#ff007f", bunker: "#ffffff", player: "#00ff88" },
        { name: "Omega Point Swarm Nexus", bg: "#000000", alien1: "#00f0ff", alien2: "#ff007f", bunker: "#00ff88", player: "#ffffff" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playTone(freq, type = 'square', duration = 0.08) {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, actx.currentTime);
          gain.gain.setValueAtTime(0.1, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + duration);
        } catch(e) {}
      }

      // Game State
      let currentLevel = parseInt(localStorage.getItem('rgi_saved_level') || '1', 10);
      let isPlaying = false;
      let score = 0;
      let lives = 3;

      // Cannon
      let cannon = { x: 0, y: 0, w: 32, h: 20, speed: 6.5 };
      let invulnTimer = 0;
      let bullets = [];
      let alienBullets = [];

      // Invaders grid: 4 rows x 6 cols = 24 aliens
      let aliens = [];
      let swarmDir = 1;
      let swarmSpeed = 1.0;
      let marchStep = 0;
      const marchNotes = [110, 98, 87, 78];

      // Bunkers
      let bunkers = [];

      let keys = { left: false, right: false, fire: false };

      // Input
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === ' ' || e.key === 'w' || e.key === 'ArrowUp') shoot();
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
      });

      // Touch
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        cannon.x = t.clientX - cannon.w / 2;
        shoot();
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        cannon.x = t.clientX - cannon.w / 2;
      }, { passive: true });

      function shoot() {
        if (!isPlaying) return;
        if (bullets.length < 2) {
          bullets.push({
            x: cannon.x + cannon.w / 2 - 2,
            y: cannon.y - 10,
            w: 4,
            h: 12
          });
          playTone(660, 'square', 0.05);
        }
      }

      function setupWave(lvl) {
        aliens = [];
        bullets = [];
        alienBullets = [];
        swarmDir = 1;
        swarmSpeed = 1.0 + (lvl * 0.06);

        const startX = width / 2 - 180;
        const startY = 90;
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 6; c++) {
            aliens.push({
              x: startX + c * 60,
              y: startY + r * 45,
              w: 32,
              h: 24,
              row: r,
              alive: true
            });
          }
        }

        // 3 Destructible Defense Bunkers
        bunkers = [];
        for (let i = 0; i < 3; i++) {
          bunkers.push({
            x: width / 2 - 160 + i * 140,
            y: height - 140,
            w: 50,
            h: 30,
            health: 8
          });
        }

        cannon.x = width / 2 - cannon.w / 2;
        cannon.y = height - 70;
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
        themeVal.style.color = t.alien1;
        const aliveCount = aliens.filter(a => a.alive).length;
        waveVal.textContent = `${aliveCount} / 24`;
        scoreVal.textContent = `${score} PTS | LIVES: ${lives}`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('rgi_saved_level', currentLevel);
        lives = 3;
        setupWave(currentLevel);
        updateUI();
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
        playTone(win ? 880 : 90, win ? 'sine' : 'sawtooth', 0.4);
        menuTitle.textContent = win ? "WAVE NEUTRALIZED!" : "BASE OVERRUN";
        menuDesc.textContent = win ?
          `All vector invaders eliminated in Sector ${currentLevel}! Score: ${score} pts.` :
          `Alien swarm reached planetary surface or bases destroyed! Final Score: ${score} pts.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT SECTOR" : "RETRY WAVE";
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

        // Cannon steering
        if (keys.left) cannon.x -= cannon.speed;
        if (keys.right) cannon.x += cannon.speed;
        if (cannon.x < 20) cannon.x = 20;
        if (cannon.x > width - cannon.w - 20) cannon.x = width - cannon.w - 20;

        // Player bullets
        for (let i = bullets.length - 1; i >= 0; i--) {
          const b = bullets[i];
          b.y -= 9;

          // Check hit on aliens
          for (let a of aliens) {
            if (a.alive && b.x > a.x && b.x < a.x + a.w && b.y > a.y && b.y < a.y + a.h) {
              a.alive = false;
              score += 50 + (3 - a.row) * 20;
              playTone(400, 'square', 0.06);
              bullets.splice(i, 1);
              updateUI();

              // Check Wave Win
              if (aliens.every(al => !al.alive)) {
                endLevel(true);
                return;
              }
              break;
            }
          }

          // Check hit on bunkers
          for (let bk of bunkers) {
            if (bk.health > 0 && b.x > bk.x && b.x < bk.x + bk.w && b.y > bk.y && b.y < bk.y + bk.h) {
              bk.health--;
              bullets.splice(i, 1);
              break;
            }
          }

          if (b.y < 10) bullets.splice(i, 1);
        }

        if (invulnTimer > 0) invulnTimer--;

        // Alien Swarm Marching
        let hitEdge = false;
        for (let a of aliens) {
          if (!a.alive) continue;
          a.x += swarmDir * swarmSpeed;
          if ((swarmDir > 0 && a.x + a.w >= width - 35) || (swarmDir < 0 && a.x <= 35)) {
            hitEdge = true;
          }

          // Invasion bottom check
          if (a.y + a.h >= height - 90) {
            endLevel(false);
            return;
          }
        }

        if (hitEdge) {
          swarmDir *= -1;
          for (let a of aliens) {
            a.y += 10;
            // Shift away from the boundary to prevent re-trigger loop
            a.x += swarmDir * (swarmSpeed + 5);
          }
          swarmSpeed = Math.min(4.5, swarmSpeed + 0.08);
          marchStep = (marchStep + 1) % marchNotes.length;
          playTone(marchNotes[marchStep], 'triangle', 0.06);
        }

        // Alien lasers fire
        if (Math.random() < 0.035) {
          const aliveAliens = aliens.filter(a => a.alive);
          if (aliveAliens.length > 0) {
            const shooter = aliveAliens[Math.floor(Math.random() * aliveAliens.length)];
            alienBullets.push({
              x: shooter.x + shooter.w / 2 - 2,
              y: shooter.y + shooter.h,
              w: 4,
              h: 12
            });
            playTone(200, 'sawtooth', 0.04);
          }
        }

        // Update alien lasers
        for (let i = alienBullets.length - 1; i >= 0; i--) {
          const ab = alienBullets[i];
          ab.y += 5.0;

          // Hit player cannon with invulnerability protection
          if (ab.x > cannon.x && ab.x < cannon.x + cannon.w && ab.y > cannon.y && ab.y < cannon.y + cannon.h) {
            if (invulnTimer <= 0) {
              lives--;
              invulnTimer = 75; // 1.25s invulnerability
              playTone(110, 'sawtooth', 0.2);
              updateUI();
              if (lives <= 0) {
                endLevel(false);
                return;
              }
            }
            alienBullets.splice(i, 1);
            continue;
          }

          // Hit bunkers
          for (let bk of bunkers) {
            if (bk.health > 0 && ab.x > bk.x && ab.x < bk.x + bk.w && ab.y > bk.y && ab.y < bk.y + bk.h) {
              bk.health--;
              alienBullets.splice(i, 1);
              break;
            }
          }

          if (ab.y > height + 20) alienBullets.splice(i, 1);
        }
      }

      // Draw
      function draw() {
        const t = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = t.bg;
        ctx.fillRect(0, 0, width, height);

        // Ground wireframe line
        ctx.strokeStyle = t.player;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(20, height - 50);
        ctx.lineTo(width - 20, height - 50);
        ctx.stroke();

        // Draw Bunkers
        for (let bk of bunkers) {
          if (bk.health <= 0) continue;
          ctx.fillStyle = t.bunker;
          ctx.globalAlpha = bk.health / 8;
          ctx.fillRect(bk.x, bk.y, bk.w, bk.h);
          ctx.globalAlpha = 1.0;
        }

        // Draw Player Bullets
        ctx.fillStyle = '#ffffff';
        for (let b of bullets) {
          ctx.fillRect(b.x, b.y, b.w, b.h);
        }

        // Draw Alien Bullets
        ctx.fillStyle = '#ff1744';
        for (let ab of alienBullets) {
          ctx.fillRect(ab.x, ab.y, ab.w, ab.h);
        }

        // Draw Aliens
        for (let a of aliens) {
          if (!a.alive) continue;
          const col = a.row % 2 === 0 ? t.alien1 : t.alien2;
          ctx.fillStyle = col;
          ctx.shadowColor = col;
          ctx.shadowBlur = 10;

          // Geometric vector alien body
          ctx.fillRect(a.x + 6, a.y, a.w - 12, a.h);
          ctx.fillRect(a.x, a.y + 6, a.w, a.h - 12);

          // Eyes
          ctx.fillStyle = '#000';
          ctx.fillRect(a.x + 8, a.y + 8, 4, 4);
          ctx.fillRect(a.x + a.w - 12, a.y + 8, 4, 4);
          ctx.shadowBlur = 0;
        }

        // Draw Player Laser Cannon
        ctx.fillStyle = t.player;
        ctx.shadowColor = t.player;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(cannon.x + cannon.w / 2, cannon.y);
        ctx.lineTo(cannon.x + cannon.w, cannon.y + cannon.h);
        ctx.lineTo(cannon.x, cannon.y + cannon.h);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 0;

        // Defensive Shield when Invulnerable
        if (invulnTimer > 0 && Math.floor(invulnTimer / 6) % 2 === 0) {
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cannon.x + cannon.w / 2, cannon.y + cannon.h / 2, cannon.w * 0.9, 0, Math.PI * 2);
          ctx.stroke();
        }

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      setupWave(currentLevel);
      updateUI();
      draw();
    })();
