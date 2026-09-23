/**
 * Standalone Game Engine & Canvas Renderer
 * Module: asteroid-shatter
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * ASTEROID SHATTER: DEEP SPACE VECTOR - 45 UNIQUE DEEP SPACE THEMES
     * Features: Newtonian inertia, multi-tier asteroid splitting, hyperspace warp,
     * procedural Web Audio API thruster rumble & laser pulses.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const rockVal = document.getElementById('rockVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Deep Space Sector Themes
      const THEMES = [
        { name: "Orion Nebula Violet", bg: "#06010f", rockColor: "#48cae4", shipColor: "#00f0ff", thrust: "#ff007f" },
        { name: "Crab Nebula Amber", bg: "#120600", rockColor: "#ffd166", shipColor: "#ffaa00", thrust: "#ff3300" },
        { name: "Oort Cloud Ice Blue", bg: "#010e1a", rockColor: "#caf0f8", shipColor: "#64dfdf", thrust: "#00ffff" },
        { name: "Supernova Remnant Red", bg: "#170105", rockColor: "#ff758f", shipColor: "#ff1744", thrust: "#ffd700" },
        { name: "Andromeda Spiral Arm", bg: "#080114", rockColor: "#c77dff", shipColor: "#9d4edd", thrust: "#ff00aa" },
        { name: "Magellanic Stream", bg: "#021217", rockColor: "#2dd4bf", shipColor: "#14b8a6", thrust: "#facc15" },
        { name: "Cygnus Accretion Disc", bg: "#000000", rockColor: "#ffffff", shipColor: "#651fff", thrust: "#00e5ff" },
        { name: "Pulsar Magnetosphere", bg: "#100114", rockColor: "#f472b6", shipColor: "#d946ef", thrust: "#8b5cf6" },
        { name: "Dark Matter Void", bg: "#020005", rockColor: "#7c3aed", shipColor: "#a855f7", thrust: "#38bdf8" },
        { name: "Carina Nebula Core", bg: "#140700", rockColor: "#fb923c", shipColor: "#f97316", thrust: "#38bdf8" },
        { name: "Eagle Nebula Spire", bg: "#01140d", rockColor: "#34d399", shipColor: "#10b981", thrust: "#f43f5e" },
        { name: "Tarantula Web Void", bg: "#14001c", rockColor: "#c084fc", shipColor: "#a855f7", thrust: "#facc15" },
        { name: "Sombrero Dust Ring", bg: "#140e02", rockColor: "#facc15", shipColor: "#eab308", thrust: "#38bdf8" },
        { name: "Triangulum Basin", bg: "#011714", rockColor: "#5eead4", shipColor: "#0d9488", thrust: "#ff007f" },
        { name: "Centaurus Jet Ridge", bg: "#17020d", rockColor: "#fb7185", shipColor: "#e11d48", thrust: "#fde047" },
        { name: "Pinwheel Gas Arm", bg: "#01170d", rockColor: "#6ee7b7", shipColor: "#059669", thrust: "#00f0ff" },
        { name: "Cartwheel Impact Core", bg: "#170500", rockColor: "#fdba74", shipColor: "#ea580c", thrust: "#38bdf8" },
        { name: "Sagittarius Event Horizon", bg: "#000000", rockColor: "#00f0ff", shipColor: "#ffffff", thrust: "#ff007f" },
        { name: "Tachyon Mirror Sector", bg: "#0d0117", rockColor: "#00b0ff", shipColor: "#c026d3", thrust: "#e879f9" },
        { name: "Gamma Burst Ring", bg: "#141400", rockColor: "#fef08a", shipColor: "#ca8a04", thrust: "#ec4899" },
        { name: "Supervoid Eridanus", bg: "#010103", rockColor: "#a5b4fc", shipColor: "#4338ca", thrust: "#00ff88" },
        { name: "Vaporwave Pastel Dust", bg: "#1a081c", rockColor: "#80dfff", shipColor: "#f472b6", thrust: "#ffd700" },
        { name: "Dark Energy Abyss", bg: "#000000", rockColor: "#d500f9", shipColor: "#651fff", thrust: "#00e5ff" },
        { name: "Quasar Relativistic Flare", bg: "#1a000d", rockColor: "#fda4af", shipColor: "#be185d", thrust: "#facc15" },
        { name: "Heliosphere Boundary", bg: "#000e1f", rockColor: "#38bdf8", shipColor: "#0284c7", thrust: "#4ade80" },
        { name: "Synthetic Silicon Belt", bg: "#001a17", rockColor: "#2dd4bf", shipColor: "#0d9488", thrust: "#f472b6" },
        { name: "Chrono-Stasis Void", bg: "#0e021a", rockColor: "#a855f7", shipColor: "#7e22ce", thrust: "#38bdf8" },
        { name: "Cosmic String Conduit", bg: "#020214", rockColor: "#6366f1", shipColor: "#4338ca", thrust: "#ff007f" },
        { name: "Laniakea Gateway", bg: "#0a0014", rockColor: "#e879f9", shipColor: "#c026d3", thrust: "#00f0ff" },
        { name: "Big Bang Echo", bg: "#05000a", rockColor: "#ff007f", shipColor: "#ffd700", thrust: "#00ff88" },
        { name: "Omega Point Singularity", bg: "#000000", rockColor: "#ff007f", shipColor: "#00f0ff", thrust: "#ffffff" },
        { name: "Hadron Collision Zone", bg: "#010814", rockColor: "#a5f3fc", shipColor: "#00f0ff", thrust: "#ff1744" },
        { name: "Titan Methane Field", bg: "#001414", rockColor: "#48d1cc", shipColor: "#20b2aa", thrust: "#ffd700" },
        { name: "Silicon Sand Nebula", bg: "#141000", rockColor: "#facc15", shipColor: "#ca8a04", thrust: "#00e5ff" },
        { name: "Neutron Core Flare", bg: "#080114", rockColor: "#7b2cbf", shipColor: "#00f5d4", thrust: "#ff5400" },
        { name: "Obsidian Core Debris", bg: "#080808", rockColor: "#ff5500", shipColor: "#ff0055", thrust: "#ffffff" },
        { name: "Atmospheric Cloudway", bg: "#031221", rockColor: "#cce6ff", shipColor: "#2979ff", thrust: "#ffd700" },
        { name: "Supernova Dust Basin", bg: "#170208", rockColor: "#ff99aa", shipColor: "#ff3366", thrust: "#38bdf8" },
        { name: "Singularity Event Ridge", bg: "#010004", rockColor: "#c77dff", shipColor: "#651fff", thrust: "#00f0ff" },
        { name: "Plasma Forge Trench", bg: "#140500", rockColor: "#ffea00", shipColor: "#ff7b00", thrust: "#ff3300" },
        { name: "Glacial Ice Belt", bg: "#010f1c", rockColor: "#ffffff", shipColor: "#64dfdf", thrust: "#ff007f" },
        { name: "Clockwork Iron Cloud", bg: "#120c02", rockColor: "#e9c46a", shipColor: "#d4a373", thrust: "#00f0ff" },
        { name: "Bioluminescent Spore Void", bg: "#011208", rockColor: "#69f0ae", shipColor: "#00ff88", thrust: "#ffd700" },
        { name: "Neon Matrix Core", bg: "#06010f", rockColor: "#00f0ff", shipColor: "#ff007f", thrust: "#00ff88" },
        { name: "Celestial Ascendant Prime", bg: "#080010", rockColor: "#ffffff", shipColor: "#ffd700", thrust: "#00f0ff" }
      ];

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

      // Game Variables
      let currentLevel = parseInt(localStorage.getItem('as_saved_level') || '1', 10);
      let isPlaying = false;
      let score = 0;
      let lives = 3;

      // Ship
      let ship = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        angle: -Math.PI / 2,
        rotSpeed: 0.065,
        thrusting: false,
        invulnTimer: 120
      };

      let bullets = [];
      let asteroids = [];

      let keys = { left: false, right: false, up: false };

      // Input
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = true;
        if (e.key === ' ') shoot();
        if (e.key === 'Shift') hyperspace();
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = false;
      });

      // Touch
      let touchStartX = 0;
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        touchStartX = t.clientX;
        keys.up = true;
        shoot();
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        const dx = t.clientX - touchStartX;
        keys.left = dx < -20;
        keys.right = dx > 20;
      }, { passive: true });
      window.addEventListener('touchend', () => { keys.up = false; keys.left = false; keys.right = false; });

      function shoot() {
        if (!isPlaying) return;
        if (bullets.length < 4) {
          bullets.push({
            x: ship.x + Math.cos(ship.angle) * 18,
            y: ship.y + Math.sin(ship.angle) * 18,
            vx: Math.cos(ship.angle) * 10 + ship.vx,
            vy: Math.sin(ship.angle) * 10 + ship.vy,
            life: 60
          });
          playTone(880, 'square', 0.05);
        }
      }

      function hyperspace() {
        if (!isPlaying) return;
        ship.x = Math.random() * width;
        ship.y = Math.random() * height;
        ship.vx = 0;
        ship.vy = 0;
        ship.invulnTimer = 90; // 1.5s invulnerability grace
        playTone(300, 'sawtooth', 0.2);
      }

      function spawnAsteroids(lvl) {
        asteroids = [];
        bullets = [];
        ship.x = width / 2;
        ship.y = height / 2;
        ship.vx = 0;
        ship.vy = 0;
        ship.angle = -Math.PI / 2;

        const count = 4 + Math.floor(lvl / 8);
        for (let i = 0; i < count; i++) {
          let ax, ay;
          do {
            ax = Math.random() * width;
            ay = Math.random() * height;
          } while (Math.hypot(ax - width / 2, ay - height / 2) < 140);

          asteroids.push(createAsteroid(ax, ay, 3));
        }
      }

      function createAsteroid(x, y, tier) {
        const radius = tier === 3 ? 36 : tier === 2 ? 22 : 12;
        const speed = 1.0 + (currentLevel * 0.04) + (4 - tier) * 0.6;
        const a = Math.random() * Math.PI * 2;
        const pts = 8;
        const offsets = [];
        for (let i = 0; i < pts; i++) {
          offsets.push(radius * (0.8 + Math.random() * 0.4));
        }
        return {
          x, y,
          vx: Math.cos(a) * speed,
          vy: Math.sin(a) * speed,
          tier,
          radius,
          offsets,
          rot: 0,
          rotSpeed: (Math.random() - 0.5) * 0.04
        };
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
        themeVal.style.color = t.shipColor;
        rockVal.textContent = `${asteroids.length} Target Rocks`;
        scoreVal.textContent = `${score} PTS | SHIPS: ${lives}`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('as_saved_level', currentLevel);
        lives = 3;
        spawnAsteroids(currentLevel);
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
        playTone(win ? 880 : 120, win ? 'sine' : 'sawtooth', 0.4);
        menuTitle.textContent = win ? "SECTOR CLEARED!" : "SHIP DESTROYED";
        menuDesc.textContent = win ?
          `All asteroids shattered in Sector ${currentLevel}! Mission score: ${score} pts.` :
          `Hull shattered by asteroid collision! Score: ${score} pts. Use Newtonian inertia to evade.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT SECTOR" : "RETRY LEVEL";
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

        if (ship.invulnTimer > 0) ship.invulnTimer--;

        // Ship rotation & thrust
        if (keys.left) ship.angle -= ship.rotSpeed;
        if (keys.right) ship.angle += ship.rotSpeed;

        if (keys.up) {
          ship.vx += Math.cos(ship.angle) * 0.18;
          ship.vy += Math.sin(ship.angle) * 0.18;
          if (Math.random() < 0.25) playTone(90, 'sawtooth', 0.04);
        }

        ship.vx *= 0.985;
        ship.vy *= 0.985;
        ship.x += ship.vx;
        ship.y += ship.vy;

        // Screen wrap ship
        if (ship.x < 0) ship.x = width;
        if (ship.x > width) ship.x = 0;
        if (ship.y < 0) ship.y = height;
        if (ship.y > height) ship.y = 0;

        // Update Bullets
        for (let i = bullets.length - 1; i >= 0; i--) {
          const b = bullets[i];
          b.x += b.vx;
          b.y += b.vy;
          b.life--;

          // Screen wrap bullets
          if (b.x < 0) b.x = width;
          if (b.x > width) b.x = 0;
          if (b.y < 0) b.y = height;
          if (b.y > height) b.y = 0;

          // Check hit on asteroids
          for (let j = asteroids.length - 1; j >= 0; j--) {
            const rock = asteroids[j];
            if (Math.hypot(b.x - rock.x, b.y - rock.y) < rock.radius) {
              score += rock.tier * 20;
              playTone(220, 'square', 0.1);

              // Split asteroid
              if (rock.tier > 1) {
                asteroids.push(createAsteroid(rock.x, rock.y, rock.tier - 1));
                asteroids.push(createAsteroid(rock.x, rock.y, rock.tier - 1));
              }
              asteroids.splice(j, 1);
              bullets.splice(i, 1);
              updateUI();

              // Check sector clear
              if (asteroids.length === 0) {
                endLevel(true);
                return;
              }
              break;
            }
          }

          if (b.life <= 0) bullets.splice(i, 1);
        }

        // Update Asteroids
        for (let rock of asteroids) {
          rock.x += rock.vx;
          rock.y += rock.vy;
          rock.rot += rock.rotSpeed;

          // Wrap asteroids
          if (rock.x < -rock.radius) rock.x = width + rock.radius;
          if (rock.x > width + rock.radius) rock.x = -rock.radius;
          if (rock.y < -rock.radius) rock.y = height + rock.radius;
          if (rock.y > height + rock.radius) rock.y = -rock.radius;

          // Ship collision with invulnerability protection
          if (ship.invulnTimer <= 0 && Math.hypot(ship.x - rock.x, ship.y - rock.y) < rock.radius + 12) {
            lives--;
            ship.invulnTimer = 120; // 2s invulnerability grace
            playTone(110, 'sawtooth', 0.25);
            updateUI();
            if (lives <= 0) {
              endLevel(false);
              return;
            } else {
              hyperspace();
            }
          }
        }
      }

      // Draw
      function draw() {
        const t = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = t.bg;
        ctx.fillRect(0, 0, width, height);

        // Draw Asteroids
        ctx.strokeStyle = t.rockColor;
        ctx.lineWidth = 2;
        ctx.shadowColor = t.rockColor;
        ctx.shadowBlur = 10;
        for (let rock of asteroids) {
          ctx.save();
          ctx.translate(rock.x, rock.y);
          ctx.rotate(rock.rot);
          ctx.beginPath();
          const pts = rock.offsets.length;
          for (let i = 0; i < pts; i++) {
            const a = (i / pts) * Math.PI * 2;
            const r = rock.offsets[i];
            const px = Math.cos(a) * r;
            const py = Math.sin(a) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.restore();
        }
        ctx.shadowBlur = 0;

        // Draw Bullets
        ctx.fillStyle = '#ffffff';
        for (let b of bullets) {
          ctx.beginPath();
          ctx.arc(b.x, b.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw Vector Ship
        ctx.save();
        ctx.translate(ship.x, ship.y);
        ctx.rotate(ship.angle);

        // Thruster flame
        if (keys.up) {
          ctx.fillStyle = t.thrust;
          ctx.beginPath();
          ctx.moveTo(-10, -5);
          ctx.lineTo(-22 - Math.random() * 8, 0);
          ctx.lineTo(-10, 5);
          ctx.closePath();
          ctx.fill();
        }

        // Hull
        ctx.strokeStyle = t.shipColor;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = t.shipColor;
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.moveTo(18, 0);
        ctx.lineTo(-14, -10);
        ctx.lineTo(-8, 0);
        ctx.lineTo(-14, 10);
        ctx.closePath();
        ctx.stroke();

        // Defensive Shield when Invulnerable
        if (ship.invulnTimer > 0 && Math.floor(ship.invulnTimer / 6) % 2 === 0) {
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, 24, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
        ctx.shadowBlur = 0;

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      spawnAsteroids(currentLevel);
      updateUI();
      draw();
    })();
