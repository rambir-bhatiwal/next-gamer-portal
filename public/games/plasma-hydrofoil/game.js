/**
 * Standalone Game Engine & Canvas Renderer
 * Module: plasma-hydrofoil
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * PLASMA HYDROFOIL: CYBERPUNK WATERWAY - 45 UNIQUE CANAL THEMES
     * Features: Water buoyancy & wave displacement physics, wake ramp jumping,
     * mid-air stunt scoring, Web Audio API procedural water splash noise.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const speedVal = document.getElementById('speedVal');
      const distVal = document.getElementById('distVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Waterway Environments
      const THEMES = [
        { name: "Neo-Venice Neon Canals", waterDeep: "#021221", waterSurface: "#00b4d8", foam: "#90e0ef", bank: "#062b47", neon: "#00f0ff" },
        { name: "Bioluminescent Mangrove Swamp", waterDeep: "#01170d", waterSurface: "#00ff88", foam: "#69f0ae", bank: "#042617", neon: "#38ef7d" },
        { name: "Industrial Acid Drainage", waterDeep: "#141700", waterSurface: "#ccff00", foam: "#ffff8d", bank: "#242b02", neon: "#70e000" },
        { name: "Glacial Meltwater Fjord", waterDeep: "#02182b", waterSurface: "#64dfdf", foam: "#ffffff", bank: "#0c3b61", neon: "#caf0f8" },
        { name: "Volcanic Caldera Lake", waterDeep: "#1a0400", waterSurface: "#ff4400", foam: "#ffaa00", bank: "#380a00", neon: "#ffaa00" },
        { name: "Subterranean Crystal Grotto", waterDeep: "#0e021a", waterSurface: "#9d4edd", foam: "#e0aaff", bank: "#23063d", neon: "#c77dff" },
        { name: "Titan Liquid Methane Canal", waterDeep: "#001a1a", waterSurface: "#20b2aa", foam: "#a7ffeb", bank: "#003333", neon: "#48d1cc" },
        { name: "Submerged Highway Channel", waterDeep: "#0a0a14", waterSurface: "#3d5afe", foam: "#8c9eff", bank: "#141429", neon: "#ff4081" },
        { name: "Cyberpunk Harbor Locks", waterDeep: "#05121a", waterSurface: "#0077b6", foam: "#48cae4", bank: "#0d2636", neon: "#ffd700" },
        { name: "Acid Rain Riverway", waterDeep: "#12021a", waterSurface: "#cc00ff", foam: "#f0abfc", bank: "#240433", neon: "#00f0ff" },
        { name: "Obsidian Badlands Wash", waterDeep: "#0a0a0a", waterSurface: "#ff0055", foam: "#ff8a80", bank: "#1a1a1a", neon: "#ff5500" },
        { name: "Atmospheric Cloud Aqueduct", waterDeep: "#061b36", waterSurface: "#66b3ff", foam: "#ffffff", bank: "#0f3366", neon: "#caf0f8" },
        { name: "Supernova Dust Delta", waterDeep: "#1f0410", waterSurface: "#ff3366", foam: "#ff99aa", bank: "#3d0821", neon: "#ff0055" },
        { name: "Singularity Horizon Canal", waterDeep: "#020005", waterSurface: "#7b2cbf", foam: "#c77dff", bank: "#080014", neon: "#00f0ff" },
        { name: "Plasma Forge Spillway", waterDeep: "#1a0800", waterSurface: "#ff9100", foam: "#ffe082", bank: "#381200", neon: "#ff5400" },
        { name: "Silicon Sand Estuary", waterDeep: "#171400", waterSurface: "#ffd700", foam: "#ffffff", bank: "#332c00", neon: "#ffa500" },
        { name: "Neutron Core Rapids", waterDeep: "#090117", waterSurface: "#00f5d4", foam: "#7b2cbf", bank: "#17033b", neon: "#3a0ca3" },
        { name: "Holographic Coral Atoll", waterDeep: "#001a14", waterSurface: "#38b000", foam: "#b5e48c", bank: "#00382b", neon: "#70e000" },
        { name: "Dark Nebula Waterway", waterDeep: "#05000a", waterSurface: "#bf55ec", foam: "#e0aaff", bank: "#120024", neon: "#00f0ff" },
        { name: "Cobalt Basin Aqueduct", waterDeep: "#000f26", waterSurface: "#0077b6", foam: "#caf0f8", bank: "#00204d", neon: "#90e0ef" },
        { name: "Starlight Cathedral Moat", waterDeep: "#170024", waterSurface: "#f72585", foam: "#ff80bf", bank: "#33004d", neon: "#7209b7" },
        { name: "Asteroid Mining Slurry", waterDeep: "#0d0d0d", waterSurface: "#e0e1dd", foam: "#ffffff", bank: "#1f1f1f", neon: "#778da9" },
        { name: "Prismatic Aurora Rapids", waterDeep: "#001a18", waterSurface: "#48cae4", foam: "#a0e426", bank: "#003630", neon: "#80ed99" },
        { name: "Radioactive Lagoon", waterDeep: "#101700", waterSurface: "#ccff00", foam: "#ffff3f", bank: "#263600", neon: "#70e000" },
        { name: "Pulsar Stream Channel", waterDeep: "#170217", waterSurface: "#ff006e", foam: "#ffffff", bank: "#360b45", neon: "#8338ec" },
        { name: "Copper Steampunk Flume", waterDeep: "#1c0d00", waterSurface: "#d4a373", foam: "#faedcd", bank: "#3b1c00", neon: "#bc6c25" },
        { name: "Zero-G Aquarium Conduit", waterDeep: "#011221", waterSurface: "#00e5ff", foam: "#caf0f8", bank: "#032847", neon: "#69f0ae" },
        { name: "Krypton Sea Trench", waterDeep: "#001c16", waterSurface: "#00ff87", foam: "#a7ffeb", bank: "#003b2e", neon: "#60efff" },
        { name: "Hyper-Space Warp Canal", waterDeep: "#09001f", waterSurface: "#ff007f", foam: "#00f0ff", bank: "#1d003d", neon: "#7000ff" },
        { name: "Crimson Eclipse Waterway", waterDeep: "#1c0000", waterSurface: "#ff1744", foam: "#ff8a80", bank: "#380000", neon: "#ff5252" },
        { name: "Bismuth Prismatic Flume", waterDeep: "#140021", waterSurface: "#e040fb", foam: "#00e676", bank: "#33004d", neon: "#651fff" },
        { name: "Thermal Geyser Run", waterDeep: "#141414", waterSurface: "#ff6d00", foam: "#ffd180", bank: "#292929", neon: "#ffab40" },
        { name: "Exoplanet Mangrove Delta", waterDeep: "#00170b", waterSurface: "#00c853", foam: "#b9f6ca", bank: "#003319", neon: "#69f0ae" },
        { name: "Tachyon Fluid Slipway", waterDeep: "#0a001a", waterSurface: "#d500f9", foam: "#00b0ff", bank: "#1c0038", neon: "#e040fb" },
        { name: "Gamma Ray Lake Flume", waterDeep: "#171700", waterSurface: "#ffff00", foam: "#ffff8d", bank: "#3d3d00", neon: "#76ff03" },
        { name: "Vaporwave Pastel Coastway", waterDeep: "#1f0c24", waterSurface: "#ff80bf", foam: "#ffffff", bank: "#421a4d", neon: "#80dfff" },
        { name: "Dark Energy Abyss Canal", waterDeep: "#020202", waterSurface: "#651fff", foam: "#d500f9", bank: "#0d0d0d", neon: "#00e5ff" },
        { name: "Quasar Jet Basin", waterDeep: "#1a0412", waterSurface: "#ff0055", foam: "#ffaa00", bank: "#3d0a29", neon: "#ff5400" },
        { name: "Heliosphere Water Barrier", waterDeep: "#000f26", waterSurface: "#2979ff", foam: "#82b1ff", bank: "#00204f", neon: "#00e5ff" },
        { name: "Synthetic Coral Delta", waterDeep: "#001c19", waterSurface: "#1de9b6", foam: "#a7ffeb", bank: "#003b35", neon: "#00b4d8" },
        { name: "Chrono-Stasis Lagoon", waterDeep: "#12031c", waterSurface: "#e040fb", foam: "#ffffff", bank: "#2a0a45", neon: "#7c4dff" },
        { name: "Cosmic String Waterway", waterDeep: "#030317", waterSurface: "#3d5afe", foam: "#8c9eff", bank: "#0e0e3b", neon: "#ff4081" },
        { name: "Omega Point Infinite Canal", waterDeep: "#05000a", waterSurface: "#00f0ff", foam: "#ffffff", bank: "#12001c", neon: "#ff007f" },
        { name: "Hadron Coolant River", waterDeep: "#010814", waterSurface: "#00f0ff", foam: "#a5f3fc", bank: "#021a36", neon: "#7928ca" },
        { name: "Ascendant Celestial Ocean", waterDeep: "#0a0314", waterSurface: "#ffd700", foam: "#ffffff", bank: "#1f0936", neon: "#00f0ff" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playSplash() {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(320, actx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(100, actx.currentTime + 0.1);
          gain.gain.setValueAtTime(0.12, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.1);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + 0.1);
        } catch(e) {}
      }
      function playTone(freq, type = 'sine', duration = 0.1) {
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
      let currentLevel = parseInt(localStorage.getItem('ph_saved_level') || '1', 10);
      let isPlaying = false;
      let hydrofoilX = 0; // -1 to 1
      let speed = 65; // Knots
      let stuntPoints = 0;
      let distance = 0;
      let targetDist = 2200;
      let isAirborne = false;
      let airTimer = 0;
      let ramps = [];
      let buoys = [];
      let foamRipples = [];
      let keys = { left: false, right: false, up: false, drift: false };

      // Input
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = true;
        if (e.key === ' ') keys.drift = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = false;
        if (e.key === ' ') keys.drift = false;
      });

      // Touch
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        hydrofoilX = (t.clientX / width) * 2 - 1;
        keys.up = true;
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        hydrofoilX = (t.clientX / width) * 2 - 1;
      }, { passive: true });
      window.addEventListener('touchend', () => { keys.up = false; });

      // Spawner
      function spawnObjects() {
        if (Math.random() < 0.03) {
          ramps.push({
            x: (Math.random() * 1.4) - 0.7,
            y: -50,
            width: 70
          });
        }
        if (Math.random() < 0.04) {
          buoys.push({
            x: (Math.random() * 1.6) - 0.8,
            y: -40,
            radius: 12
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
        themeVal.style.color = t.waterSurface;
        targetDist = 850 + currentLevel * 50;
        const shieldIcons = '🛡️'.repeat(Math.max(0, shields));
        speedVal.textContent = `${Math.floor(speed)} KTS | ${shieldIcons} | ${stuntPoints} PTS`;
        distVal.textContent = `${Math.floor(distance)} / ${targetDist}M`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('ph_saved_level', currentLevel);
        ramps = [];
        buoys = [];
        foamRipples = [];
        hydrofoilX = 0;
        speed = 65;
        stuntPoints = 0;
        distance = 0;
        shields = 3;
        invulnerableTimer = 0;
        isAirborne = false;
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
        playTone(win ? 880 : 130, win ? 'sine' : 'sawtooth', 0.35);
        menuTitle.textContent = win ? "CANAL RUN COMPLETED!" : "HYDROFOIL CAPSIZED";
        menuDesc.textContent = win ?
          `Reached open water terminus! Traversed ${Math.floor(distance)}M. Stunt Score: ${stuntPoints} pts.` :
          `Impact with canal buoys damaged hydrofoil hull! Shields depleted. Maintain clear lines through the waterway.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT WATERWAY" : "RETRY LEVEL";
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

        // Throttle & Turn
        const steerSpeed = keys.drift ? 0.05 : 0.035;
        if (keys.left) hydrofoilX -= steerSpeed;
        if (keys.right) hydrofoilX += steerSpeed;
        if (hydrofoilX < -1) hydrofoilX = -1;
        if (hydrofoilX > 1) hydrofoilX = 1;

        speed = keys.up ? 95 + (currentLevel * 0.5) : 65;
        if (isAirborne) speed *= 1.1; // Aerial momentum

        distance += 0.55; // ~30-40 seconds of gameplay to complete canal run

        if (invulnerableTimer > 0) invulnerableTimer--;

        if (distance >= targetDist) {
          endLevel(true);
          return;
        }

        // Air timer from ramp jump
        if (isAirborne) {
          airTimer -= 1 / 60;
          stuntPoints += 10;
          if (airTimer <= 0) {
            isAirborne = false;
            playSplash();
          }
        }

        spawnObjects();

        const fallSpeed = 4.8 + (currentLevel * 0.03);
        const craftScreenX = width / 2 + hydrofoilX * (width * 0.4);
        const craftScreenY = height * 0.8;

        // Foam wake generation
        foamRipples.push({
          x: craftScreenX,
          y: craftScreenY + 20,
          radius: 6,
          alpha: 0.8
        });
        for (let i = foamRipples.length - 1; i >= 0; i--) {
          foamRipples[i].y += fallSpeed * 0.5;
          foamRipples[i].radius += 0.5;
          foamRipples[i].alpha -= 0.03;
          if (foamRipples[i].alpha <= 0) foamRipples.splice(i, 1);
        }

        // Ramps
        for (let i = ramps.length - 1; i >= 0; i--) {
          const r = ramps[i];
          r.y += fallSpeed;

          if (r.y > craftScreenY - 20 && r.y < craftScreenY + 20) {
            const rx = width / 2 + r.x * (width * 0.4);
            if (Math.abs(craftScreenX - rx) < r.width / 2 && !isAirborne) {
              isAirborne = true;
              airTimer = 0.8;
              stuntPoints += 250;
              playTone(660, 'sine', 0.2);
            }
          }
          if (r.y > height + 50) ramps.splice(i, 1);
        }

        // Buoys (Fair human reaction speed and 3-shield health system)
        for (let i = buoys.length - 1; i >= 0; i--) {
          const b = buoys[i];
          b.y += fallSpeed;

          if (!isAirborne && b.y > craftScreenY - 20 && b.y < craftScreenY + 20) {
            const bx = width / 2 + b.x * (width * 0.4);
            if (Math.hypot(craftScreenX - bx, craftScreenY - b.y) < b.radius + 18) {
              if (invulnerableTimer <= 0) {
                shields--;
                invulnerableTimer = 90;
                playTone(140, 'sawtooth', 0.25);
                updateUI();
                if (shields <= 0) {
                  endLevel(false);
                  return;
                }
              }
            }
          }
          if (b.y > height + 50) buoys.splice(i, 1);
        }

        updateUI();
      }

      // Draw
      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];

        // Deep water canal base
        ctx.fillStyle = theme.waterDeep;
        ctx.fillRect(0, 0, width, height);

        // Canal Banks
        const bankW = width * 0.12;
        ctx.fillStyle = theme.bank;
        ctx.fillRect(0, 0, bankW, height);
        ctx.fillRect(width - bankW, 0, bankW, height);

        // Neon Canal Embankment Edges
        ctx.strokeStyle = theme.neon;
        ctx.lineWidth = 4;
        ctx.shadowColor = theme.neon;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.moveTo(bankW, 0); ctx.lineTo(bankW, height);
        ctx.moveTo(width - bankW, 0); ctx.lineTo(width - bankW, height);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Animated Water Waves / Caustics
        ctx.strokeStyle = `rgba(0, 240, 255, 0.15)`;
        ctx.lineWidth = 2;
        const waveOffset = (distance * 2) % 60;
        for (let y = -60 + waveOffset; y < height; y += 40) {
          ctx.beginPath();
          for (let x = bankW; x < width - bankW; x += 30) {
            ctx.lineTo(x, y + Math.sin(x * 0.05 + performance.now() * 0.003) * 6);
          }
          ctx.stroke();
        }

        // Foam ripples
        for (let f of foamRipples) {
          ctx.fillStyle = `rgba(255, 255, 255, ${f.alpha * 0.5})`;
          ctx.beginPath();
          ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw Ramps
        for (let r of ramps) {
          const rx = width / 2 + r.x * (width * 0.4);
          ctx.fillStyle = '#ffaa00';
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.shadowColor = '#ffaa00';
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.roundRect(rx - r.width / 2, r.y - 14, r.width, 28, 4);
          ctx.fill();
          ctx.stroke();

          // Chevrons
          ctx.fillStyle = '#000';
          ctx.font = 'bold 12px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('>>> JUMP >>>', rx, r.y);
          ctx.shadowBlur = 0;
        }

        // Draw Buoys
        for (let b of buoys) {
          const bx = width / 2 + b.x * (width * 0.4);
          ctx.fillStyle = '#ff1744';
          ctx.shadowColor = '#ff1744';
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(bx, b.y, b.radius, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#fff';
          ctx.beginPath();
          ctx.arc(bx, b.y, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw Player Hydrofoil
        const craftScreenX = width / 2 + hydrofoilX * (width * 0.4);
        const craftScreenY = height * 0.8;
        const scale = isAirborne ? 1.25 : 1.0;

        ctx.save();
        ctx.translate(craftScreenX, craftScreenY);
        ctx.scale(scale, scale);

        // Water Wake Spray
        if (!isAirborne) {
          ctx.fillStyle = theme.foam;
          ctx.beginPath();
          ctx.arc(-14, 20, 6, 0, Math.PI * 2);
          ctx.arc(14, 20, 6, 0, Math.PI * 2);
          ctx.fill();
        }

        // Jet-Ski Hydrofoil Body
        ctx.fillStyle = '#0a1426';
        ctx.strokeStyle = theme.waterSurface;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = theme.waterSurface;
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.moveTo(0, -28);
        ctx.lineTo(16, 18);
        ctx.lineTo(-16, 18);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Pilot Cockpit
        ctx.fillStyle = theme.neon;
        ctx.beginPath();
        ctx.arc(0, 0, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

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
