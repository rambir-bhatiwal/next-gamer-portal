/**
 * Standalone Game Engine & Canvas Renderer
 * Module: vortex-missile-command
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * VORTEX MISSILE COMMAND: DEFENSE 2090 - 45 UNIQUE CAPITAL THEMES
     * Features: Ballistic trajectory calculation, lingering flak blast clouds,
     * chain reactions, procedural Web Audio API whistle launches & flak booms.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const missileVal = document.getElementById('missileVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Global Capital Themes
      const THEMES = [
        { name: "Neo-Tokyo Skyline", sky: "#080112", domeCol: "#00f0ff", flakCol: "#00ffff", trailCol: "#ff1744" },
        { name: "Cyber-London Thames", sky: "#020a14", domeCol: "#38bdf8", flakCol: "#ffd700", trailCol: "#f43f5e" },
        { name: "Neo-Cairo Pyramids", sky: "#140a01", domeCol: "#ffd166", flakCol: "#ff5400", trailCol: "#ff1744" },
        { name: "Arctic Defense Base", sky: "#010e1c", domeCol: "#caf0f8", flakCol: "#64dfdf", trailCol: "#ff007f" },
        { name: "Neo-Berlin Spree", sky: "#08080f", domeCol: "#adb5bd", flakCol: "#facc15", trailCol: "#ef4444" },
        { name: "Shanghai Nanite Port", sky: "#051214", domeCol: "#2dd4bf", flakCol: "#ff007f", trailCol: "#f43f5e" },
        { name: "Cyber-Seoul Gangnam", sky: "#100214", domeCol: "#d946ef", flakCol: "#00f0ff", trailCol: "#ff0055" },
        { name: "Neo-Paris Seine", sky: "#140c06", domeCol: "#fbbf24", flakCol: "#38bdf8", trailCol: "#e11d48" },
        { name: "Brasilia Solar Domes", sky: "#02140a", domeCol: "#10b981", flakCol: "#facc15", trailCol: "#f43f5e" },
        { name: "Sydney Quantum Harbor", sky: "#020f1f", domeCol: "#0284c7", flakCol: "#ff80bf", trailCol: "#ffd700" },
        { name: "Neo-Manhattan Spire", sky: "#0c0617", domeCol: "#8b5cf6", flakCol: "#00ff88", trailCol: "#ff1744" },
        { name: "Singapore Biome Dome", sky: "#01170d", domeCol: "#34d399", flakCol: "#ff007f", trailCol: "#fbbf24" },
        { name: "Mumbai Monsoon Highline", sky: "#06121f", domeCol: "#4cc9f0", flakCol: "#f72585", trailCol: "#facc15" },
        { name: "Dubai Prismatic Towers", sky: "#171001", domeCol: "#f59e0b", flakCol: "#00f0ff", trailCol: "#ef4444" },
        { name: "Moscow Red Star Shield", sky: "#170205", domeCol: "#ef4444", flakCol: "#ffd700", trailCol: "#ffffff" },
        { name: "San Francisco Bay Arc", sky: "#03101c", domeCol: "#38bdf8", flakCol: "#ff758f", trailCol: "#f97316" },
        { name: "Nairobi Geothermal Spires", sky: "#170801", domeCol: "#ea580c", flakCol: "#34d399", trailCol: "#f43f5e" },
        { name: "Reykjavik Aurora Fort", sky: "#001715", domeCol: "#14b8a6", flakCol: "#a0e426", trailCol: "#ff007f" },
        { name: "Toronto CN Quantum Spire", sky: "#050b17", domeCol: "#60a5fa", flakCol: "#f43f5e", trailCol: "#fde047" },
        { name: "Santiago Andean Wall", sky: "#140510", domeCol: "#c026d3", flakCol: "#38bdf8", trailCol: "#facc15" },
        { name: "Helsinki Solar Glade", sky: "#021217", domeCol: "#06b6d4", flakCol: "#f472b6", trailCol: "#ffd700" },
        { name: "Taipei 101 Laser Spire", sky: "#04140b", domeCol: "#22c55e", flakCol: "#00f0ff", trailCol: "#f43f5e" },
        { name: "Bangkok Canal Vault", sky: "#140a02", domeCol: "#f59e0b", flakCol: "#a855f7", trailCol: "#ef4444" },
        { name: "Rome Colosseum Matrix", sky: "#1a0802", domeCol: "#ef4444", flakCol: "#fbbf24", trailCol: "#ffffff" },
        { name: "Istanbul Bosphorus Gate", sky: "#03141f", domeCol: "#0ea5e9", flakCol: "#f43f5e", trailCol: "#facc15" },
        { name: "Vienna Imperial Siphon", sky: "#140e04", domeCol: "#eab308", flakCol: "#2dd4bf", trailCol: "#e11d48" },
        { name: "Hong Kong Neon Bay", sky: "#120217", domeCol: "#d946ef", flakCol: "#00ff88", trailCol: "#00f0ff" },
        { name: "Kyoto Digital Shrine", sky: "#1c040b", domeCol: "#f43f5e", flakCol: "#ffd700", trailCol: "#38bdf8" },
        { name: "Oslo Fjord Battery", sky: "#010e1c", domeCol: "#0284c7", flakCol: "#80ed99", trailCol: "#ff007f" },
        { name: "Mexico City Calzada", sky: "#170b02", domeCol: "#ea580c", flakCol: "#22d3ee", trailCol: "#f43f5e" },
        { name: "Cape Town Ocean Peak", sky: "#02121a", domeCol: "#00b4d8", flakCol: "#ffd166", trailCol: "#ef4444" },
        { name: "Athens Acropolis Grid", sky: "#140e03", domeCol: "#ffd700", flakCol: "#38bdf8", trailCol: "#f43f5e" },
        { name: "Stockholm Baltic Hub", sky: "#020b17", domeCol: "#3b82f6", flakCol: "#facc15", trailCol: "#f43f5e" },
        { name: "Buenos Aires Pampas", sky: "#05101a", domeCol: "#38bdf8", flakCol: "#facc15", trailCol: "#ff007f" },
        { name: "Warsaw Vistula Bastion", sky: "#0a0a0f", domeCol: "#94a3b8", flakCol: "#ef4444", trailCol: "#fde047" },
        { name: "Jakarta Java Trench", sky: "#001712", domeCol: "#10b981", flakCol: "#f472b6", trailCol: "#38bdf8" },
        { name: "Vancouver Pacific Sky", sky: "#01121c", domeCol: "#00e5ff", flakCol: "#4ade80", trailCol: "#f43f5e" },
        { name: "Budapest Danube Span", sky: "#140902", domeCol: "#f59e0b", flakCol: "#38bdf8", trailCol: "#e11d48" },
        { name: "Kuala Lumpur Twin Spire", sky: "#011409", domeCol: "#00ff88", flakCol: "#ffd700", trailCol: "#ff007f" },
        { name: "Dublin Emerald Vault", sky: "#00170a", domeCol: "#22c55e", flakCol: "#38bdf8", trailCol: "#facc15" },
        { name: "Prague Bohemian Crown", sky: "#140b04", domeCol: "#fbbf24", flakCol: "#c084fc", trailCol: "#ef4444" },
        { name: "Bogota Andean Spires", sky: "#0e0214", domeCol: "#c026d3", flakCol: "#facc15", trailCol: "#38bdf8" },
        { name: "Geneva Quantum Lab", sky: "#020f1a", domeCol: "#0284c7", flakCol: "#f43f5e", trailCol: "#ffffff" },
        { name: "Copenhagen Wind Array", sky: "#001715", domeCol: "#2dd4bf", flakCol: "#fde047", trailCol: "#f43f5e" },
        { name: "Global Apex Prime Capital", bg: "#000000", domeCol: "#00f0ff", flakCol: "#ffd700", trailCol: "#ff1744" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playBoom() {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(140, actx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(30, actx.currentTime + 0.35);
          gain.gain.setValueAtTime(0.2, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.35);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + 0.35);
        } catch(e) {}
      }
      function playLaunch() {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(220, actx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(750, actx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.12, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.15);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + 0.15);
        } catch(e) {}
      }

      // Game State
      let currentLevel = parseInt(localStorage.getItem('vmc_saved_level') || '1', 10);
      let isPlaying = false;
      let score = 0;
      let ammo = 30;
      let warheadsToSpawn = 15;
      let warheadsSpawned = 0;

      let warheads = [];
      let flakExplosions = [];
      let interceptors = [];
      let cities = [];

      function setupDefense(lvl) {
        warheads = [];
        flakExplosions = [];
        interceptors = [];
        warheadsSpawned = 0;
        warheadsToSpawn = 12 + Math.floor(lvl * 1.2);
        ammo = Math.floor(warheadsToSpawn * 1.8);

        // 4 Metropolitan Domes
        cities = [];
        for (let i = 0; i < 4; i++) {
          cities.push({
            x: width / 2 - 210 + i * 140,
            y: height - 40,
            radius: 28,
            alive: true
          });
        }
      }

      // Input: Target Flak Click / Touch
      canvas.addEventListener('click', e => {
        if (!isPlaying || ammo <= 0) return;
        const rect = canvas.getBoundingClientRect();
        const tx = e.clientX - rect.left;
        const ty = e.clientY - rect.top;

        if (ty < height - 60) {
          ammo--;
          interceptors.push({
            startX: width / 2,
            startY: height - 50,
            x: width / 2,
            y: height - 50,
            targetX: tx,
            targetY: ty,
            speed: 14
          });
          playLaunch();
          updateUI();
        }
      });

      // Spawner
      function spawnWarhead() {
        if (warheadsSpawned < warheadsToSpawn && Math.random() < 0.04) {
          warheadsSpawned++;
          const startX = Math.random() * width;
          // Target a live city or random ground
          const liveCities = cities.filter(c => c.alive);
          const target = liveCities.length > 0 && Math.random() > 0.3 ?
            liveCities[Math.floor(Math.random() * liveCities.length)].x :
            Math.random() * width;

          const speed = 1.2 + (currentLevel * 0.05);
          warheads.push({
            startX,
            startY: 0,
            x: startX,
            y: 0,
            targetX: target,
            targetY: height - 40,
            speed
          });
        }
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
        themeVal.style.color = t.domeCol;
        scoreVal.textContent = `${score} PTS | AMMO: ${ammo}`;
        missileVal.textContent = `${warheads.length} In-Flight / ${warheadsToSpawn - warheadsSpawned} Left`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('vmc_saved_level', currentLevel);
        setupDefense(currentLevel);
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playLaunch();
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        playBoom();
        menuTitle.textContent = win ? "METROPOLIS SECURED!" : "DEFENSE GRID COLLAPSED";
        menuDesc.textContent = win ?
          `All incoming warheads neutralized! Cities preserved. Sector ${currentLevel} victory score: ${score} pts.` :
          `All metropolitan defense domes destroyed! Warhead impact critical. Score: ${score} pts.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT CAPITAL SECTOR" : "RETRY DEFENSE";
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

        spawnWarhead();

        // Update Interceptors in flight
        for (let i = interceptors.length - 1; i >= 0; i--) {
          const inc = interceptors[i];
          const dx = inc.targetX - inc.x;
          const dy = inc.targetY - inc.y;
          const dist = Math.hypot(dx, dy);

          if (dist < inc.speed) {
            // Detonate Flak Cloud
            flakExplosions.push({
              x: inc.targetX,
              y: inc.targetY,
              radius: 4,
              maxRadius: 36,
              growing: true
            });
            playBoom();
            interceptors.splice(i, 1);
          } else {
            inc.x += (dx / dist) * inc.speed;
            inc.y += (dy / dist) * inc.speed;
          }
        }

        // Update Flak Explosions
        for (let i = flakExplosions.length - 1; i >= 0; i--) {
          const flak = flakExplosions[i];
          if (flak.growing) {
            flak.radius += 1.8;
            if (flak.radius >= flak.maxRadius) flak.growing = false;
          } else {
            flak.radius -= 0.8;
            if (flak.radius <= 0) flakExplosions.splice(i, 1);
          }
        }

        // Update Warheads
        for (let i = warheads.length - 1; i >= 0; i--) {
          const w = warheads[i];
          const dx = w.targetX - w.startX;
          const dy = w.targetY - w.startY;
          const dist = Math.hypot(dx, dy);

          w.x += (dx / dist) * w.speed;
          w.y += (dy / dist) * w.speed;

          // Check hit by flak clouds
          let destroyed = false;
          for (let flak of flakExplosions) {
            if (Math.hypot(w.x - flak.x, w.y - flak.y) < flak.radius) {
              score += 100;
              playBoom();
              warheads.splice(i, 1);
              destroyed = true;
              break;
            }
          }
          if (destroyed) continue;

          // Check impact with ground / domes
          if (w.y >= height - 45) {
            for (let c of cities) {
              if (c.alive && Math.hypot(w.x - c.x, w.y - c.y) < c.radius + 10) {
                c.alive = false;
                playBoom();
              }
            }
            warheads.splice(i, 1);

            // Check if all cities destroyed
            if (cities.every(c => !c.alive)) {
              endLevel(false);
              return;
            }
          }
        }

        // Victory check
        if (warheadsSpawned >= warheadsToSpawn && warheads.length === 0) {
          endLevel(true);
          return;
        }

        updateUI();
      }

      // Draw
      function draw() {
        const t = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = t.sky;
        ctx.fillRect(0, 0, width, height);

        // Ground Baseline
        ctx.fillStyle = '#06020c';
        ctx.fillRect(0, height - 40, width, 40);
        ctx.strokeStyle = t.domeCol;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, height - 40); ctx.lineTo(width, height - 40);
        ctx.stroke();

        // Draw Cities / Domes
        for (let c of cities) {
          if (c.alive) {
            ctx.fillStyle = t.domeCol;
            ctx.shadowColor = t.domeCol;
            ctx.shadowBlur = 14;
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.radius, Math.PI, 0, false);
            ctx.fill();
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = '#331111';
            ctx.fillRect(c.x - 20, c.y - 6, 40, 6);
          }
        }

        // Defense Battery Cannon in Center
        ctx.fillStyle = t.domeCol;
        ctx.beginPath();
        ctx.moveTo(width / 2, height - 60);
        ctx.lineTo(width / 2 + 16, height - 40);
        ctx.lineTo(width / 2 - 16, height - 40);
        ctx.closePath();
        ctx.fill();

        // Draw Warheads & Trajectory Streaks
        for (let w of warheads) {
          ctx.strokeStyle = t.trailCol;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(w.startX, w.startY);
          ctx.lineTo(w.x, w.y);
          ctx.stroke();

          // Warhead tip
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(w.x, w.y, 3.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw Interceptors in flight
        for (let inc of interceptors) {
          ctx.strokeStyle = '#00f0ff';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(inc.startX, inc.startY);
          ctx.lineTo(inc.x, inc.y);
          ctx.stroke();

          // Reticle mark
          ctx.strokeStyle = '#ffffff';
          ctx.strokeRect(inc.targetX - 4, inc.targetY - 4, 8, 8);
        }

        // Draw Flak Explosions
        for (let flak of flakExplosions) {
          ctx.fillStyle = `rgba(0, 240, 255, 0.4)`;
          ctx.strokeStyle = t.flakCol;
          ctx.lineWidth = 2;
          ctx.shadowColor = t.flakCol;
          ctx.shadowBlur = 18;
          ctx.beginPath();
          ctx.arc(flak.x, flak.y, flak.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      setupDefense(currentLevel);
      updateUI();
      draw();
    })();
