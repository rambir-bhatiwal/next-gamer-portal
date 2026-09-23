/**
 * Standalone Game Engine & Canvas Renderer
 * Module: neon-horizon
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * NEON HORIZON - 45 UNIQUE SYNTHWAVE HIGHWAY THEMES
     * Features: Outrun-style curved pseudo-3D road math, traffic AI dodging,
     * near-miss multiplier, procedural Web Audio API synthwave soundtrack.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const speedVal = document.getElementById('speedVal');
      const scoreVal = document.getElementById('scoreVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Highway Themes
      const THEMES = [
        { name: "Miami Cyber-Coast", skyTop: "#120024", skyBot: "#ff007f", road1: "#1b0933", road2: "#140726", curb1: "#ff007f", curb2: "#00f0ff", sun: "#ffdd00", decor: "palms" },
        { name: "Bioluminescent Rainforest Highway", skyTop: "#011a10", skyBot: "#00ff88", road1: "#062b1a", road2: "#041f13", curb1: "#00ff88", curb2: "#00ffff", sun: "#38ef7d", decor: "ferns" },
        { name: "Magma Trench Freeway", skyTop: "#1f0300", skyBot: "#ff4400", road1: "#330800", road2: "#240600", curb1: "#ff3300", curb2: "#ffcc00", sun: "#ff2200", decor: "volcano" },
        { name: "Victorian Clockwork Viaduct", skyTop: "#171204", skyBot: "#d4a373", road1: "#2b2207", road2: "#1f1805", curb1: "#d4a373", curb2: "#e9c46a", sun: "#faedcd", decor: "cogs" },
        { name: "Aurora Borealis Arctic", skyTop: "#01121f", skyBot: "#48cae4", road1: "#06253d", road2: "#041b2c", curb1: "#48cae4", curb2: "#a0e426", sun: "#caf0f8", decor: "glaciers" },
        { name: "Silicon Valley Server Highway", skyTop: "#00140a", skyBot: "#00ff66", road1: "#002412", road2: "#001a0d", curb1: "#00ff66", curb2: "#00f0ff", sun: "#69f0ae", decor: "servers" },
        { name: "Hyper-Desert Solar Ring", skyTop: "#1f1401", skyBot: "#ffb703", road1: "#362202", road2: "#261801", curb1: "#ffb703", curb2: "#fb8500", sun: "#ffd166", decor: "solar" },
        { name: "Orbital Ringway", skyTop: "#0a001a", skyBot: "#7209b7", road1: "#190038", road2: "#120029", curb1: "#b5179e", curb2: "#4cc9f0", sun: "#f72585", decor: "satellites" },
        { name: "Submerged Glass Aqueduct", skyTop: "#00121a", skyBot: "#00b4d8", road1: "#002433", road2: "#001a24", curb1: "#00b4d8", curb2: "#90e0ef", sun: "#48cae4", decor: "bubbles" },
        { name: "Acid Rain Neo-Tokyo", skyTop: "#12021a", skyBot: "#cc00ff", road1: "#240433", road2: "#190324", curb1: "#cc00ff", curb2: "#00f0ff", sun: "#f72585", decor: "pylons" },
        { name: "Antimatter Void Expressway", skyTop: "#020005", skyBot: "#4a148c", road1: "#10001f", road2: "#0a0014", curb1: "#e040fb", curb2: "#7c4dff", sun: "#ea80fc", decor: "void" },
        { name: "Obsidian Badlands Turnpike", skyTop: "#0d0d0d", skyBot: "#ff0055", road1: "#212121", road2: "#141414", curb1: "#ff0055", curb2: "#ff5500", sun: "#ff1744", decor: "spires" },
        { name: "Atmospheric Cloudway", skyTop: "#081b38", skyBot: "#66b3ff", road1: "#102d57", road2: "#0b203d", curb1: "#66b3ff", curb2: "#ffffff", sun: "#e0f2fe", decor: "clouds" },
        { name: "Supernova Dust Expressway", skyTop: "#240410", skyBot: "#ff3366", road1: "#3b071a", road2: "#290512", curb1: "#ff3366", curb2: "#ff99aa", sun: "#ff0055", decor: "dust" },
        { name: "Singularity Beltway", skyTop: "#030008", skyBot: "#9d4edd", road1: "#120026", road2: "#0b0017", curb1: "#9d4edd", curb2: "#c77dff", sun: "#ffffff", decor: "lensing" },
        { name: "Plasma Forge Raceway", skyTop: "#210800", skyBot: "#ff9100", road1: "#3d1000", road2: "#290b00", curb1: "#ff9100", curb2: "#ff5400", sun: "#ffea00", decor: "forge" },
        { name: "Titan Methane Turnpike", skyTop: "#001f1f", skyBot: "#20b2aa", road1: "#003b3b", road2: "#002929", curb1: "#20b2aa", curb2: "#48d1cc", sun: "#80cbc4", decor: "oil" },
        { name: "Silicon Dunes Skyway", skyTop: "#211a00", skyBot: "#ffd700", road1: "#3b2e00", road2: "#292000", curb1: "#ffd700", curb2: "#ffa500", sun: "#ffe082", decor: "dunes" },
        { name: "Neutron Magnetar Conduit", skyTop: "#0d0221", skyBot: "#00f5d4", road1: "#1b053d", road2: "#120329", curb1: "#00f5d4", curb2: "#7b2cbf", sun: "#70e000", decor: "flux" },
        { name: "Cyber Ruins Overpass", skyTop: "#001a14", skyBot: "#38b000", road1: "#003326", road2: "#00241a", curb1: "#38b000", curb2: "#70e000", sun: "#b5e48c", decor: "ruins" },
        { name: "Dark Nebula Driftway", skyTop: "#05000a", skyBot: "#bf55ec", road1: "#120024", road2: "#0a0014", curb1: "#bf55ec", curb2: "#be90d4", sun: "#9b5de5", decor: "nebula" },
        { name: "Cobalt Basin Freeway", skyTop: "#001026", skyBot: "#0077b6", road1: "#00244d", road2: "#001733", curb1: "#0077b6", curb2: "#90e0ef", sun: "#00b4d8", decor: "towers" },
        { name: "Starlight Cathedral Skyway", skyTop: "#1a0026", skyBot: "#f72585", road1: "#33004a", road2: "#240033", curb1: "#f72585", curb2: "#7209b7", sun: "#ff4d6d", decor: "arches" },
        { name: "Asteroid Mining Trench", skyTop: "#121212", skyBot: "#adb5bd", road1: "#262626", road2: "#1a1a1a", curb1: "#e0e1dd", curb2: "#778da9", sun: "#ffffff", decor: "miners" },
        { name: "Prismatic Aurora Ring", skyTop: "#001a18", skyBot: "#48cae4", road1: "#003630", road2: "#002420", curb1: "#48cae4", curb2: "#a0e426", sun: "#80ed99", decor: "aurora" },
        { name: "Radioactive Wasteway", skyTop: "#121a00", skyBot: "#ccff00", road1: "#263600", road2: "#192400", curb1: "#ccff00", curb2: "#70e000", sun: "#e9ff70", decor: "waste" },
        { name: "Pulsar Beam Freeway", skyTop: "#1a0521", skyBot: "#ff006e", road1: "#360b45", road2: "#24072e", curb1: "#ff006e", curb2: "#8338ec", sun: "#ff5400", decor: "pulsar" },
        { name: "Copper Steampunk Viaduct", skyTop: "#1f0f00", skyBot: "#d4a373", road1: "#3b1c00", road2: "#291400", curb1: "#d4a373", curb2: "#bc6c25", sun: "#f5ebe0", decor: "pipes" },
        { name: "Zero-G Habitat Speedway", skyTop: "#021526", skyBot: "#00e5ff", road1: "#042c4d", road2: "#031d33", curb1: "#00e5ff", curb2: "#69f0ae", sun: "#a7ffeb", decor: "domes" },
        { name: "Krypton Sky Corridor", skyTop: "#00211b", skyBot: "#00ff87", road1: "#003d33", road2: "#002b24", curb1: "#00ff87", curb2: "#60efff", sun: "#64ffda", decor: "gas" },
        { name: "Hyper-Space Warp Belt", skyTop: "#09001f", skyBot: "#ff007f", road1: "#1d003d", road2: "#130029", curb1: "#ff007f", curb2: "#00f0ff", sun: "#ff4081", decor: "warp" },
        { name: "Crimson Eclipse Highway", skyTop: "#1f0000", skyBot: "#ff1744", road1: "#380000", road2: "#260000", curb1: "#ff1744", curb2: "#ff8a80", sun: "#ff5252", decor: "eclipse" },
        { name: "Bismuth Prism Freeway", skyTop: "#170024", skyBot: "#e040fb", road1: "#33004d", road2: "#210033", curb1: "#e040fb", curb2: "#00e676", sun: "#ea80fc", decor: "crystals" },
        { name: "Thermal Steam Causeway", skyTop: "#141414", skyBot: "#ff6d00", road1: "#292929", road2: "#1c1c1c", curb1: "#ff6d00", curb2: "#ffab40", sun: "#ffd180", decor: "steam" },
        { name: "Exoplanet Bio-Artery", skyTop: "#001a0e", skyBot: "#00c853", road1: "#00331c", road2: "#002414", curb1: "#00c853", curb2: "#b9f6ca", sun: "#69f0ae", decor: "biomass" },
        { name: "Tachyon Mirror Slipway", skyTop: "#0a001a", skyBot: "#d500f9", road1: "#1c0038", road2: "#120024", curb1: "#d500f9", curb2: "#00b0ff", sun: "#e040fb", decor: "mirrors" },
        { name: "Gamma Burst Speedway", skyTop: "#1f1f00", skyBot: "#ffff00", road1: "#3d3d00", road2: "#292900", curb1: "#ffff00", curb2: "#76ff03", sun: "#ffff8d", decor: "burst" },
        { name: "Vaporwave Pastel Strip", skyTop: "#241026", skyBot: "#ff80bf", road1: "#47204c", road2: "#311636", curb1: "#ff80bf", curb2: "#80dfff", sun: "#ffc2d1", decor: "statues" },
        { name: "Dark Monolith Turnpike", skyTop: "#020202", skyBot: "#651fff", road1: "#0f0f0f", road2: "#080808", curb1: "#651fff", curb2: "#00e5ff", sun: "#d500f9", decor: "monoliths" },
        { name: "Quasar Jet Skyway", skyTop: "#1f0514", skyBot: "#ff0055", road1: "#3d0a29", road2: "#29071c", curb1: "#ff0055", curb2: "#ffcc00", sun: "#ff5400", decor: "jets" },
        { name: "Heliosphere Perimeter", skyTop: "#001026", skyBot: "#2979ff", road1: "#00244f", road2: "#001736", curb1: "#2979ff", curb2: "#00e5ff", sun: "#82b1ff", decor: "halo" },
        { name: "Synthetic Reef Conduit", skyTop: "#001f1c", skyBot: "#1de9b6", road1: "#003b35", road2: "#002622", curb1: "#1de9b6", curb2: "#00b4d8", sun: "#a7ffeb", decor: "coral" },
        { name: "Chrono-Stasis Highway", skyTop: "#140521", skyBot: "#e040fb", road1: "#2a0a45", road2: "#1d0730", curb1: "#e040fb", curb2: "#7c4dff", sun: "#b388ff", decor: "stasis" },
        { name: "Cosmic String Super-Highway", skyTop: "#05051a", skyBot: "#3d5afe", road1: "#0e0e3b", road2: "#090926", curb1: "#3d5afe", curb2: "#ff4081", sun: "#8c9eff", decor: "strings" },
        { name: "Omega Point Infinite Horizon", skyTop: "#0d0014", skyBot: "#00f0ff", road1: "#1a0029", road2: "#12001c", curb1: "#00f0ff", curb2: "#ff007f", sun: "#ffffff", decor: "omega" }
      ];

      // Procedural Web Audio Synthwave Music
      let audioCtx = null;
      let synthInterval = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.08) {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, actx.currentTime);
          gain.gain.setValueAtTime(gainVal, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + duration);
        } catch(e) {}
      }

      function startSynthwaveLoop() {
        if (synthInterval) clearInterval(synthInterval);
        const notes = [130.81, 164.81, 196.00, 246.94, 174.61, 220.00, 261.63];
        let step = 0;
        synthInterval = setInterval(() => {
          if (!isPlaying) return;
          const bass = notes[step % notes.length] * (1 + (currentLevel % 3) * 0.25);
          playTone(bass, 'sawtooth', 0.12, 0.04);
          if (step % 2 === 0) playTone(bass * 2, 'triangle', 0.08, 0.03);
          step++;
        }, 160);
      }

      // Game State
      let currentLevel = parseInt(localStorage.getItem('nh_saved_level') || '1', 10);
      let isPlaying = false;
      let speed = 0;
      let maxSpeed = 380;
      let distance = 0;
      let targetDistance = 2500;
      let playerX = 0; // -1 to 1
      let score = 0;
      let multiplier = 1.0;
      let traffic = [];
      let roadCurve = 0;
      let curveTimer = 0;
      let keys = { left: false, right: false, up: false, down: false };
      let shields = 3;
      let invulnerableTimer = 0;

      // Input Listeners
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = true;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = false;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = false;
      });

      // Touch Input
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        playerX = (t.clientX / width) * 2 - 1;
        keys.up = true;
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        playerX = (t.clientX / width) * 2 - 1;
      }, { passive: true });
      window.addEventListener('touchend', () => { keys.up = false; });

      // Spawn Traffic
      function spawnTraffic() {
        if (traffic.length < 3 + Math.floor(currentLevel / 8) && Math.random() < 0.025) {
          traffic.push({
            x: (Math.random() * 1.5) - 0.75,
            z: 1000,
            speed: 100 + Math.random() * 80,
            color: Math.random() > 0.5 ? '#ff007f' : '#00f0ff'
          });
        }
      }

      // UI Builder
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
        themeVal.style.color = t.curb1;
        targetDistance = 900 + currentLevel * 50;
        speedVal.textContent = `${Math.floor(speed)} KM/H | ${'🛡️'.repeat(Math.max(0, shields))}`;
        distVal.textContent = `${Math.floor(distance)} / ${targetDistance}M`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('nh_saved_level', currentLevel);
        traffic = [];
        speed = 0;
        distance = 0;
        playerX = 0;
        score = 0;
        multiplier = 1.0;
        shields = 3;
        invulnerableTimer = 0;
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        startSynthwaveLoop();
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function finishLevel(win) {
        isPlaying = false;
        if (synthInterval) clearInterval(synthInterval);
        playTone(win ? 660 : 150, 'sawtooth', 0.4, 0.2);

        menuTitle.textContent = win ? "HIGHWAY CONQUERED!" : "CRASHED ON HORIZON";
        menuDesc.textContent = win ?
          `Magnificent driving! Score: ${score}. Highway completed in record time.` :
          `Traffic collision! Score: ${score}. Shields depleted. Distance reached: ${Math.floor(distance)}M.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT HIGHWAY" : "RETRY LEVEL";
        startBtn.onclick = () => {
          if (win && currentLevel < 45) currentLevel++;
          startLevel(currentLevel);
        };
        menuScreen.classList.remove('hidden');
        renderLevelSelector();
      }

      // Loop
      function update() {
        if (!isPlaying) return;

        // Throttle & Steer
        if (keys.up) {
          speed += 3.5;
          if (speed > maxSpeed) speed = maxSpeed;
        } else if (keys.down) {
          speed -= 5.0;
          if (speed < 0) speed = 0;
        } else {
          speed *= 0.985;
        }

        if (keys.left) playerX -= 0.035 * (speed / maxSpeed + 0.3);
        if (keys.right) playerX += 0.035 * (speed / maxSpeed + 0.3);

        // Clamping to road shoulder
        if (playerX < -1.3 || playerX > 1.3) {
          speed *= 0.95; // Off-road slow
        }

        distance += 0.55; // ~30-40 seconds of gameplay to reach 900-1100M horizon
        score += Math.floor((speed / 100) * multiplier);
        speedVal.textContent = `${Math.floor(speed)} KM/H | ${'🛡️'.repeat(Math.max(0, shields))}`;
        distVal.textContent = `${Math.floor(distance)} / ${targetDistance}M`;
        scoreVal.textContent = `${score} (x${multiplier.toFixed(1)})`;

        if (invulnerableTimer > 0) invulnerableTimer--;

        // Check Stage Clear
        if (distance >= targetDistance) {
          finishLevel(true);
          return;
        }

        // Road curvature oscillator
        curveTimer += 0.02;
        roadCurve = Math.sin(curveTimer) * 1.5;

        // Traffic update (Fair human reaction speed and 3-shield health system)
        spawnTraffic();
        for (let i = traffic.length - 1; i >= 0; i--) {
          const car = traffic[i];
          car.z -= (speed - car.speed) * 0.035;

          // Check collision with 3-shield system
          if (car.z < 60 && car.z > -20 && Math.abs(playerX - car.x) < 0.28) {
            if (invulnerableTimer <= 0) {
              shields--;
              invulnerableTimer = 90;
              speed = Math.max(80, speed * 0.5);
              playTone(140, 'sawtooth', 0.25, 0.25);
              updateUI();
              if (shields <= 0) {
                finishLevel(false);
                return;
              }
            }
          }
          // Near miss bonus
          if (car.z < 0 && !car.passed) {
            car.passed = true;
            multiplier += 0.1;
            playTone(880, 'sine', 0.06, 0.1);
          }
          if (car.z < -100) traffic.splice(i, 1);
        }
      }

      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];

        // Sky gradient
        const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.55);
        skyGrad.addColorStop(0, theme.skyTop);
        skyGrad.addColorStop(1, theme.skyBot);
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, width, height * 0.55);

        // Synthwave Sun on Horizon
        const horizonY = height * 0.55;
        const sunRadius = Math.min(width, height) * 0.18;
        ctx.fillStyle = theme.sun;
        ctx.shadowColor = theme.sun;
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.arc(width / 2, horizonY, sunRadius, Math.PI, 0, false);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Sun scanlines
        ctx.fillStyle = theme.skyTop;
        for (let i = 0; i < 7; i++) {
          const sy = horizonY - sunRadius * (0.2 + i * 0.12);
          ctx.fillRect(width / 2 - sunRadius, sy, sunRadius * 2, 3 + i * 1.2);
        }

        // Ground / Road Perspective Projection
        ctx.fillStyle = theme.road2;
        ctx.fillRect(0, horizonY, width, height - horizonY);

        const segments = 45;
        for (let i = segments; i >= 0; i--) {
          const z = i / segments;
          const y = horizonY + Math.pow(z, 2.2) * (height - horizonY);
          const nextZ = (i + 1) / segments;
          const nextY = horizonY + Math.pow(nextZ, 2.2) * (height - horizonY);

          const roadW = width * 0.06 + Math.pow(z, 1.8) * width * 0.85;
          const nextRoadW = width * 0.06 + Math.pow(nextZ, 1.8) * width * 0.85;

          const cx = width / 2 + (roadCurve * (1 - z) * 120);
          const nextCX = width / 2 + (roadCurve * (1 - nextZ) * 120);

          const isStripe = (Math.floor(distance / 20) + i) % 2 === 0;

          // Road Asphalt
          ctx.fillStyle = isStripe ? theme.road1 : theme.road2;
          ctx.beginPath();
          ctx.moveTo(cx - roadW / 2, y);
          ctx.lineTo(cx + roadW / 2, y);
          ctx.lineTo(nextCX + nextRoadW / 2, nextY);
          ctx.lineTo(nextCX - nextRoadW / 2, nextY);
          ctx.fill();

          // Curbs
          const curbW = roadW * 0.08;
          ctx.fillStyle = isStripe ? theme.curb1 : theme.curb2;
          ctx.fillRect(cx - roadW / 2 - curbW, y, curbW, nextY - y + 1);
          ctx.fillRect(cx + roadW / 2, y, curbW, nextY - y + 1);

          // Center dashed line
          if (isStripe) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(cx - roadW * 0.01, y, roadW * 0.02, nextY - y + 1);
          }
        }

        // Draw Traffic Vehicles
        for (let car of traffic) {
          if (car.z <= 0 || car.z > 900) continue;
          const zNorm = 1 - (car.z / 1000);
          const cy = horizonY + Math.pow(zNorm, 2.2) * (height - horizonY);
          const roadW = width * 0.06 + Math.pow(zNorm, 1.8) * width * 0.85;
          const cx = width / 2 + (roadCurve * (1 - zNorm) * 120) + (car.x * roadW * 0.4);
          const carW = 40 * zNorm;
          const carH = 24 * zNorm;

          ctx.fillStyle = car.color;
          ctx.shadowColor = car.color;
          ctx.shadowBlur = 10;
          ctx.fillRect(cx - carW / 2, cy - carH, carW, carH);
          // Taillights
          ctx.fillStyle = '#ff1100';
          ctx.fillRect(cx - carW * 0.45, cy - carH * 0.35, carW * 0.25, carH * 0.3);
          ctx.fillRect(cx + carW * 0.2, cy - carH * 0.35, carW * 0.25, carH * 0.3);
          ctx.shadowBlur = 0;
        }

        // Draw Player Cyber Sports Car (with invulnerability blinking)
        if (!(invulnerableTimer > 0 && Math.floor(invulnerableTimer / 6) % 2 === 0)) {
          const playerScreenX = width / 2 + playerX * (width * 0.38);
          const playerScreenY = height - 55;
          const pWidth = 84;
          const pHeight = 44;

          ctx.save();
          ctx.translate(playerScreenX, playerScreenY);

          // Afterburner exhaust glow
          if (speed > 50) {
            ctx.fillStyle = theme.curb1;
            ctx.shadowColor = theme.curb1;
            ctx.shadowBlur = 20;
            ctx.fillRect(-22, pHeight * 0.15, 12, 16);
            ctx.fillRect(10, pHeight * 0.15, 12, 16);
            ctx.shadowBlur = 0;
          }

          // Car Body
          ctx.fillStyle = '#0a0314';
          ctx.strokeStyle = theme.curb2;
          ctx.lineWidth = 3;
          ctx.shadowColor = theme.curb2;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.roundRect(-pWidth / 2, -pHeight / 2, pWidth, pHeight, 8);
          ctx.fill();
          ctx.stroke();

          // Neon spoiler & cockpit
          ctx.fillStyle = theme.curb1;
          ctx.fillRect(-pWidth * 0.4, -pHeight * 0.45, pWidth * 0.8, 6);
          ctx.fillStyle = '#00f0ff';
          ctx.fillRect(-pWidth * 0.25, -pHeight * 0.25, pWidth * 0.5, pHeight * 0.4);
          ctx.restore();
        }

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
