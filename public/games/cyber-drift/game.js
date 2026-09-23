/**
 * Standalone Game Engine & Canvas Renderer
 * Module: cyber-drift
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * CYBER DRIFT: TOKYO NEO-ALLEY - 45 UNIQUE DISTRICT THEMES
     * Features: 2D vehicle physics with slip angles, inertia, tire smoke particles,
     * combo drift scoring, Web Audio API tire squeal synthesis, localStorage progression.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const scoreVal = document.getElementById('scoreVal');
      const quotaVal = document.getElementById('quotaVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Urban District Themes
      const THEMES = [
        { name: "Akihabara Neon Alley", asphalt: "#120b1f", curb: "#00f0ff", neon: "#ff007f", building: "#08040f", sign: "NEON" },
        { name: "Shinjuku Rain Alley", asphalt: "#0b121a", curb: "#00b4d8", neon: "#90e0ef", building: "#04090d", sign: "RAIN" },
        { name: "Industrial Harbor Slums", asphalt: "#1a1306", curb: "#ffaa00", neon: "#ff5500", building: "#0f0b04", sign: "HARBOR" },
        { name: "Underground Maglev Hub", asphalt: "#09120e", curb: "#00ff88", neon: "#38ef7d", building: "#040b07", sign: "MAGLEV" },
        { name: "Imperial Rooftop Gardens", asphalt: "#14061a", curb: "#f72585", neon: "#7209b7", building: "#0a030d", sign: "ROOFTOP" },
        { name: "Cyberpunk Fish Market", asphalt: "#06131c", curb: "#48cae4", neon: "#0077b6", building: "#030a0f", sign: "MARKET" },
        { name: "Shibuya Crossing Sector", asphalt: "#1a0410", curb: "#ff006e", neon: "#8338ec", building: "#0d0208", sign: "CROSS" },
        { name: "Roppongi Luxury Spire", asphalt: "#141414", curb: "#ffd700", neon: "#ffa500", building: "#0a0a0a", sign: "SPIRE" },
        { name: "Odaiba Neon Boardwalk", asphalt: "#03141f", curb: "#00f5d4", neon: "#7b2cbf", building: "#020a10", sign: "BOARD" },
        { name: "Ginza Quantum Arcade", asphalt: "#170217", curb: "#e040fb", neon: "#00e5ff", building: "#0d010d", sign: "ARCADE" },
        { name: "Ikebukuro Rail Yard", asphalt: "#140e04", curb: "#d4a373", neon: "#e9c46a", building: "#0a0702", sign: "RAIL" },
        { name: "Asakusa Lantern Canal", asphalt: "#1f0502", curb: "#ff1744", neon: "#ff8a80", building: "#0f0201", sign: "CANAL" },
        { name: "Ueno Hologram Park", asphalt: "#021c10", curb: "#00c853", neon: "#b9f6ca", building: "#010e08", sign: "PARK" },
        { name: "Shinagawa Nanite Depot", asphalt: "#0a0d14", curb: "#4ea8de", neon: "#74c69d", building: "#05070a", sign: "NANITE" },
        { name: "Kabukicho Red-Light Strip", asphalt: "#24040a", curb: "#ff0055", neon: "#ff5500", building: "#120205", sign: "RED" },
        { name: "Meguro Sakura Viaduct", asphalt: "#1a081a", curb: "#ff80bf", neon: "#80dfff", building: "#0d040d", sign: "VIADUCT" },
        { name: "Harajuku Synth Fashion Way", asphalt: "#12021a", curb: "#cc00ff", neon: "#00f0ff", building: "#09010d", sign: "SYNTH" },
        { name: "Nakano Broadway Vaults", asphalt: "#141400", curb: "#ccff00", neon: "#70e000", building: "#0a0a00", sign: "VAULT" },
        { name: "Chiba Industrial Refinery", asphalt: "#1c0900", curb: "#ff6d00", neon: "#ffab40", building: "#0e0500", sign: "REFINERY" },
        { name: "Yokohama Neon Bayport", asphalt: "#01121c", curb: "#2979ff", neon: "#00e5ff", building: "#01090f", sign: "BAYPORT" },
        { name: "Tsukuba Science Matrix", asphalt: "#021714", curb: "#1de9b6", neon: "#00b4d8", building: "#010c0a", sign: "MATRIX" },
        { name: "Mitaka Animation Circuit", asphalt: "#170a1a", curb: "#d500f9", neon: "#ff4081", building: "#0c050d", sign: "CIRCUIT" },
        { name: "Kawasaki Chemical Pipeline", asphalt: "#1a1701", curb: "#ffff00", neon: "#76ff03", building: "#0d0c01", sign: "CHEMICAL" },
        { name: "Saitama Cyber Speedway", asphalt: "#0f0217", curb: "#b5179e", neon: "#4cc9f0", building: "#08010c", sign: "SPEED" },
        { name: "Hachioji Mountain Pass", asphalt: "#061706", curb: "#2dc653", neon: "#80ed99", building: "#030c03", sign: "PASS" },
        { name: "Sumida Tower Overpass", asphalt: "#08081c", curb: "#3d5afe", neon: "#ff4081", building: "#04040e", sign: "TOWER" },
        { name: "Koto Delta Canal", asphalt: "#021417", curb: "#00b4d8", neon: "#90e0ef", building: "#010a0c", sign: "DELTA" },
        { name: "Arakawa Neon Drainage", asphalt: "#120a02", curb: "#bc6c25", neon: "#dda15e", building: "#090501", sign: "DRAIN" },
        { name: "Edogawa Floodway Barrier", asphalt: "#011c1c", curb: "#20b2aa", neon: "#48d1cc", building: "#010e0e", sign: "FLOOD" },
        { name: "Taito Antique Street", asphalt: "#1c0d06", curb: "#e76f51", neon: "#2a9d8f", building: "#0e0703", sign: "ANTIQUE" },
        { name: "Bunkyo University Grid", asphalt: "#040f1a", curb: "#0077b6", neon: "#48cae4", building: "#02080d", sign: "UNIV" },
        { name: "Toshima Underground Market", asphalt: "#140417", curb: "#9d4edd", neon: "#c77dff", building: "#0a020c", sign: "UNDER" },
        { name: "Kita Warehouse Complex", asphalt: "#121212", curb: "#adb5bd", neon: "#f8f9fa", building: "#090909", sign: "COMPLEX" },
        { name: "Itabashi Thermal Sector", asphalt: "#1f0902", curb: "#ff3d00", neon: "#ffaa00", building: "#0f0501", sign: "THERMAL" },
        { name: "Nerima Holo-Farm Way", asphalt: "#081704", curb: "#70e000", neon: "#ccff00", building: "#040c02", sign: "FARM" },
        { name: "Ota Airfield Expressway", asphalt: "#090e17", curb: "#4ea8de", neon: "#5390d9", building: "#05070c", sign: "AIRFIELD" },
        { name: "Setagaya Residential Spires", asphalt: "#170817", curb: "#f72585", neon: "#7209b7", building: "#0c040c", sign: "SPIRES" },
        { name: "Suginami Anime Studio Way", asphalt: "#140212", curb: "#ff007f", neon: "#00f0ff", building: "#0a0109", sign: "STUDIO" },
        { name: "Kiyosumi Garden Viaduct", asphalt: "#01170e", curb: "#00ff88", neon: "#60efff", building: "#010c07", sign: "GARDEN" },
        { name: "Yoyogi Arena Promenade", asphalt: "#0b051a", curb: "#7c4dff", neon: "#00e5ff", building: "#06030d", sign: "ARENA" },
        { name: "Tsukishima Monja Alley", asphalt: "#1a0802", curb: "#ff5400", neon: "#ffea00", building: "#0d0401", sign: "ALLEY" },
        { name: "Monzennakacho Shrine Gate", asphalt: "#1c0208", curb: "#ff1744", neon: "#ffd700", building: "#0e0104", sign: "SHRINE" },
        { name: "Toranomon Tech Hills", asphalt: "#04121c", curb: "#00f0ff", neon: "#ff007f", building: "#02090e", sign: "HILLS" },
        { name: "Marunouchi Financial Core", asphalt: "#0d0d17", curb: "#4361ee", neon: "#4cc9f0", building: "#07070c", sign: "CORE" },
        { name: "Neo-Tokyo Apex Ring", asphalt: "#05000d", curb: "#00f0ff", neon: "#ff007f", building: "#020005", sign: "APEX" }
      ];

      // Web Audio API Synthesizer
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playSqueal(slip) {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(400 + Math.random() * 300, actx.currentTime);
          gain.gain.setValueAtTime(Math.min(0.12, slip * 0.08), actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.08);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + 0.08);
        } catch(e) {}
      }
      function playChime(freq) {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, actx.currentTime);
          gain.gain.setValueAtTime(0.12, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.2);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + 0.2);
        } catch(e) {}
      }

      // Game Variables
      let currentLevel = parseInt(localStorage.getItem('cd_saved_level') || '1', 10);
      let isPlaying = false;
      let car = { x: 0, y: 0, vx: 0, vy: 0, angle: 0, speed: 0, maxSpeed: 7.5, driftAngle: 0 };
      let keys = { left: false, right: false, up: false, down: false, space: false };
      let driftScore = 0;
      let targetScore = 2500;
      let multiplier = 1.0;
      let timeLeft = 45.0;
      let tireParticles = [];
      let obstacles = [];

      // Track / Alley Boundary
      const trackWidth = 1400;
      const trackHeight = 1000;

      function setupTrack(lvl) {
        obstacles = [];
        const numObs = 6 + (lvl % 8);
        for (let i = 0; i < numObs; i++) {
          obstacles.push({
            x: (Math.random() - 0.5) * (trackWidth * 0.7),
            y: (Math.random() - 0.5) * (trackHeight * 0.7),
            w: 40 + Math.random() * 40,
            h: 40 + Math.random() * 40
          });
        }
        car.x = 0; car.y = 0; car.vx = 0; car.vy = 0; car.angle = 0; car.speed = 0;
        targetScore = 3200 + lvl * 200;
        timeLeft = 45.0;
        driftScore = 0;
        multiplier = 1.0;
      }

      // Input
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = true;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = true;
        if (e.key === ' ') keys.space = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = false;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = false;
        if (e.key === ' ') keys.space = false;
      });

      // Touch & Drag
      let touchX = 0, touchY = 0;
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        touchX = t.clientX; touchY = t.clientY;
        keys.up = true;
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        const dx = t.clientX - touchX;
        keys.left = dx < -20;
        keys.right = dx > 20;
        keys.space = Math.abs(dx) > 50;
      }, { passive: true });
      window.addEventListener('touchend', () => { keys.up = false; keys.left = false; keys.right = false; keys.space = false; });

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
        themeVal.textContent = `${currentLevel}: ${t.name} [${t.sign}]`;
        themeVal.style.color = t.curb;
        scoreVal.textContent = `${Math.floor(driftScore)} PTS (x${multiplier.toFixed(1)})`;
        quotaVal.textContent = `${Math.floor(driftScore)} / ${targetScore} | ${timeLeft.toFixed(1)}s`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('cd_saved_level', currentLevel);
        setupTrack(currentLevel);
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playChime(520);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        playChime(win ? 880 : 180);
        menuTitle.textContent = win ? "DRIFT KING OF THE ALLEY!" : "TIME ATTACK EXPIRED";
        menuDesc.textContent = win ?
          `Incredible drift combo! Final Score: ${Math.floor(driftScore)} pts (Target: ${targetScore}). Alley mastered.` :
          `Time ran out! Reached ${Math.floor(driftScore)} pts. Chain tighter drifts to build high multipliers.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT DISTRICT" : "RETRY LEVEL";
        startBtn.onclick = () => {
          if (win && currentLevel < 45) currentLevel++;
          startLevel(currentLevel);
        };
        menuScreen.classList.remove('hidden');
        renderLevelSelector();
      }

      // Update
      function update() {
        if (!isPlaying) return;

        timeLeft -= 1 / 60;
        if (timeLeft <= 0) {
          timeLeft = 0;
          endLevel(driftScore >= targetScore);
          return;
        }

        // Steer & Throttle
        const steerSpeed = keys.space ? 0.08 : 0.05;
        if (keys.left) car.angle -= steerSpeed;
        if (keys.right) car.angle += steerSpeed;

        if (keys.up) {
          car.speed += 0.2;
          if (car.speed > car.maxSpeed) car.speed = car.maxSpeed;
        } else if (keys.down) {
          car.speed -= 0.3;
          if (car.speed < -car.maxSpeed * 0.4) car.speed = -car.maxSpeed * 0.4;
        } else {
          car.speed *= 0.97;
        }

        // Velocity vector with lateral drift slip
        const forwardX = Math.cos(car.angle) * car.speed;
        const forwardY = Math.sin(car.angle) * car.speed;

        const slipFriction = keys.space ? 0.88 : 0.94;
        car.vx = car.vx * slipFriction + forwardX * (1 - slipFriction);
        car.vy = car.vy * slipFriction + forwardY * (1 - slipFriction);

        car.x += car.vx;
        car.y += car.vy;

        // Boundaries
        if (car.x < -trackWidth / 2) { car.x = -trackWidth / 2; car.vx *= -0.5; }
        if (car.x > trackWidth / 2) { car.x = trackWidth / 2; car.vx *= -0.5; }
        if (car.y < -trackHeight / 2) { car.y = -trackHeight / 2; car.vy *= -0.5; }
        if (car.y > trackHeight / 2) { car.y = trackHeight / 2; car.vy *= -0.5; }

        // Obstacle Collisions
        for (let obs of obstacles) {
          if (Math.abs(car.x - obs.x) < obs.w / 2 + 12 && Math.abs(car.y - obs.y) < obs.h / 2 + 12) {
            car.speed *= -0.5;
            car.vx *= -0.5;
            car.vy *= -0.5;
            multiplier = 1.0;
            playChime(150);
          }
        }

        // Slip Angle & Drift Points
        const velAngle = Math.atan2(car.vy, car.vx);
        let slipAngle = Math.abs(car.angle - velAngle);
        while (slipAngle > Math.PI) slipAngle = Math.abs(slipAngle - Math.PI * 2);

        const isDrifting = slipAngle > 0.4 && Math.hypot(car.vx, car.vy) > 2.5;
        if (isDrifting) {
          multiplier = Math.min(4.0, multiplier + 0.005);
          const pts = Math.floor(slipAngle * 2.2 * multiplier);
          driftScore += pts;
          playSqueal(slipAngle);

          // Spawn tire smoke
          tireParticles.push({
            x: car.x - Math.cos(car.angle) * 16,
            y: car.y - Math.sin(car.angle) * 16,
            alpha: 0.6,
            radius: 4 + Math.random() * 6
          });

          if (driftScore >= targetScore) {
            endLevel(true);
            return;
          }
        } else {
          multiplier = Math.max(1.0, multiplier - 0.005);
        }

        // Fade tire smoke
        for (let i = tireParticles.length - 1; i >= 0; i--) {
          tireParticles[i].alpha -= 0.03;
          tireParticles[i].radius += 0.3;
          if (tireParticles[i].alpha <= 0) tireParticles.splice(i, 1);
        }

        updateUI();
      }

      // Draw
      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = theme.building;
        ctx.fillRect(0, 0, width, height);

        // Camera follow
        const camX = width / 2 - car.x;
        const camY = height / 2 - car.y;

        ctx.save();
        ctx.translate(camX, camY);

        // Alley Asphalt Ground
        ctx.fillStyle = theme.asphalt;
        ctx.fillRect(-trackWidth / 2, -trackHeight / 2, trackWidth, trackHeight);

        // Neon Alley Curbs & Borders
        ctx.strokeStyle = theme.curb;
        ctx.lineWidth = 8;
        ctx.shadowColor = theme.curb;
        ctx.shadowBlur = 18;
        ctx.strokeRect(-trackWidth / 2, -trackHeight / 2, trackWidth, trackHeight);
        ctx.shadowBlur = 0;

        // Alley Skid Marks / Smoke
        for (let p of tireParticles) {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.4})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Obstacles (Delivery Pods / Kiosks)
        for (let obs of obstacles) {
          ctx.fillStyle = '#0e0417';
          ctx.strokeStyle = theme.neon;
          ctx.lineWidth = 2;
          ctx.shadowColor = theme.neon;
          ctx.shadowBlur = 10;
          ctx.fillRect(obs.x - obs.w / 2, obs.y - obs.h / 2, obs.w, obs.h);
          ctx.strokeRect(obs.x - obs.w / 2, obs.y - obs.h / 2, obs.w, obs.h);

          // Hologram Sign Text
          ctx.fillStyle = theme.curb;
          ctx.font = 'bold 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.shadowBlur = 0;
          ctx.fillText(theme.sign, obs.x, obs.y);
        }

        // Draw Player Drift Car
        ctx.save();
        ctx.translate(car.x, car.y);
        ctx.rotate(car.angle);

        // Underglow neon
        ctx.fillStyle = theme.neon;
        ctx.shadowColor = theme.neon;
        ctx.shadowBlur = 20;
        ctx.fillRect(-22, -12, 44, 24);

        // Body shell
        ctx.fillStyle = '#06010a';
        ctx.strokeStyle = theme.curb;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-20, -10, 40, 20, 4);
        ctx.fill();
        ctx.stroke();

        // Windshield
        ctx.fillStyle = '#00f0ff';
        ctx.fillRect(-4, -7, 10, 14);

        // Headlights
        ctx.fillStyle = '#fff';
        ctx.fillRect(18, -8, 3, 4);
        ctx.fillRect(18, 4, 3, 4);

        ctx.restore();
        ctx.restore();

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      setupTrack(currentLevel);
      updateUI();
      draw();
    })();
