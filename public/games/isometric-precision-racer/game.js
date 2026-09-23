/**
 * Standalone Game Engine & Canvas Renderer
 * Module: isometric-precision-racer
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * ISOMETRIC PRECISION RACER - 45 UNIQUE THEMES & LEVELS
     * Features: Isometric 2:1 projection track rendering, drift physics,
     * ghost racer recording, Web Audio API procedural synthesis, localStorage progression.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const timeVal = document.getElementById('timeVal');
      const checkVal = document.getElementById('checkVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Themes
      const THEMES = [
        { name: "Neon Metropolitan Roof", sky: "#070314", grid: "#140b2e", track: "#1b103b", border: "#00f0ff", accent: "#ff007f", ambient: 220 },
        { name: "Bioluminescent Jungle Track", sky: "#02120b", grid: "#052617", track: "#083620", border: "#00ff88", accent: "#38ef7d", ambient: 180 },
        { name: "Molten Foundry", sky: "#170501", grid: "#2e0d04", track: "#3b1408", border: "#ff5500", accent: "#ffbb00", ambient: 140 },
        { name: "Clockwork Aerodrome", sky: "#161106", grid: "#2e230e", track: "#3b2e14", border: "#d4a373", accent: "#e9c46a", ambient: 260 },
        { name: "Glacial Iceway", sky: "#03111c", grid: "#072338", track: "#0c3252", border: "#64dfdf", accent: "#caf0f8", ambient: 320 },
        { name: "Desert Solar Farm", sky: "#1a1304", grid: "#33260a", track: "#423210", border: "#ffb703", accent: "#fb8500", ambient: 200 },
        { name: "Underwater Glass Tunnel", sky: "#01131c", grid: "#03283b", track: "#053954", border: "#00b4d8", accent: "#90e0ef", ambient: 160 },
        { name: "Orbital Station Rim", sky: "#0a0a0f", grid: "#151524", track: "#1e1e36", border: "#b5179e", accent: "#7209b7", ambient: 240 },
        { name: "Cyber Canyon", sky: "#14041a", grid: "#290936", track: "#3d0f4f", border: "#f72585", accent: "#4cc9f0", ambient: 290 },
        { name: "Titan Methane Shore", sky: "#011717", grid: "#032e2e", track: "#064242", border: "#2ec4b6", accent: "#cbf3f0", ambient: 170 },
        { name: "Emerald Nanite Spire", sky: "#021c0e", grid: "#063b1d", track: "#0a5229", border: "#2dc653", accent: "#80ed99", ambient: 210 },
        { name: "Supernova Dust Basin", sky: "#1c040e", grid: "#36091c", track: "#4d0e28", border: "#e63946", accent: "#ff758f", ambient: 190 },
        { name: "Silicon Sand Dunes", sky: "#171402", grid: "#302b06", track: "#423b0a", border: "#ffd166", accent: "#f4a261", ambient: 250 },
        { name: "Cobalt Foundry", sky: "#020d1c", grid: "#061d3b", track: "#0a2a54", border: "#118ab2", accent: "#06d6a0", ambient: 150 },
        { name: "Starlight Cathedral", sky: "#0e021a", grid: "#1d0636", track: "#2b0a4f", border: "#9d4edd", accent: "#e0aaff", ambient: 280 },
        { name: "Asteroid Mining Belt", sky: "#0d0d0d", grid: "#1c1c1c", track: "#292929", border: "#adb5bd", accent: "#f8f9fa", ambient: 130 },
        { name: "Prismatic Aurora", sky: "#01171a", grid: "#033136", track: "#06464d", border: "#48cae4", accent: "#a0e426", ambient: 310 },
        { name: "Radioactive Wasteland", sky: "#0f1701", grid: "#203003", track: "#2d4205", border: "#aacc00", accent: "#ffff3f", ambient: 175 },
        { name: "Pulsar Beam Nexus", sky: "#170217", grid: "#310531", track: "#450845", border: "#ff007f", accent: "#b5179e", ambient: 270 },
        { name: "Copper Steampunk Trench", sky: "#170a02", grid: "#311606", track: "#472109", border: "#bc6c25", accent: "#dda15e", ambient: 230 },
        { name: "Zero-G Crystal Core", sky: "#02121c", grid: "#06263b", track: "#0a3854", border: "#00f5d4", accent: "#7b2cbf", ambient: 300 },
        { name: "Krypton Gas Skyway", sky: "#011c16", grid: "#033b2e", track: "#064f3e", border: "#00ff87", accent: "#60efff", ambient: 195 },
        { name: "Hyper-Space Gridway", sky: "#09011f", grid: "#150442", track: "#1f075c", border: "#00f0ff", accent: "#ff007f", ambient: 245 },
        { name: "Crimson Eclipse", sky: "#1a0101", grid: "#360404", track: "#4a0606", border: "#ff1744", accent: "#ff5252", ambient: 135 },
        { name: "Bismuth Polyhedron", sky: "#12021c", grid: "#26063b", track: "#380a54", border: "#e040fb", accent: "#00e676", ambient: 330 },
        { name: "Thermal Steam Circuit", sky: "#121212", grid: "#242424", track: "#333333", border: "#ff6d00", accent: "#ffab40", ambient: 215 },
        { name: "Exoplanet Canopy", sky: "#01170a", grid: "#033116", track: "#06451f", border: "#00c853", accent: "#69f0ae", ambient: 185 },
        { name: "Tachyon Mirror", sky: "#09011a", grid: "#150336", track: "#20064f", border: "#d500f9", accent: "#00b0ff", ambient: 340 },
        { name: "Gamma Burst Crater", sky: "#171701", grid: "#333303", track: "#474706", border: "#ffff00", accent: "#ccff00", ambient: 265 },
        { name: "Vaporwave Lagoon", sky: "#1c0b1f", grid: "#38173d", track: "#4f2257", border: "#ff80bf", accent: "#80dfff", ambient: 225 },
        { name: "Dark Energy Monoliths", sky: "#030303", grid: "#0a0a0a", track: "#121212", border: "#651fff", accent: "#00e5ff", ambient: 120 },
        { name: "Quasar Relativistic Track", sky: "#1a0311", grid: "#360824", track: "#4d0d34", border: "#ff0055", accent: "#ffaa00", ambient: 275 },
        { name: "Heliosphere Fringe", sky: "#010e1c", grid: "#031e3b", track: "#062c54", border: "#2979ff", accent: "#00e5ff", ambient: 165 },
        { name: "Synthetic Coral Reef", sky: "#011c19", grid: "#033b35", track: "#055249", border: "#1de9b6", accent: "#00b4d8", ambient: 205 },
        { name: "Chrono-Stasis Void", sky: "#0f031c", grid: "#1f083b", track: "#2e0d54", border: "#e040fb", accent: "#7c4dff", ambient: 295 },
        { name: "Cosmic String Conduit", sky: "#030317", grid: "#080833", track: "#0e0e4a", border: "#3d5afe", accent: "#ff4081", ambient: 235 },
        { name: "Omega Point Arena", sky: "#0a0012", grid: "#170126", track: "#24033b", border: "#00f0ff", accent: "#ff007f", ambient: 350 },
        { name: "Quantum Foam Track", sky: "#011417", grid: "#032a31", track: "#063c45", border: "#48cae4", accent: "#0077b6", ambient: 190 },
        { name: "Plasma Flare Spire", sky: "#1c0701", grid: "#360f04", track: "#4d1607", border: "#ff7b00", accent: "#ffea00", ambient: 145 },
        { name: "Magellanic Cloud Path", sky: "#08031c", grid: "#120838", track: "#1b0d4f", border: "#a564d3", accent: "#fca311", ambient: 255 },
        { name: "Titanium Skyscraper Ridge", sky: "#0b0e14", grid: "#171c26", track: "#222938", border: "#4ea8de", accent: "#74c69d", ambient: 210 },
        { name: "Dark Nebula Slipway", sky: "#05000a", grid: "#0d011a", track: "#17022e", border: "#bf55ec", accent: "#00f0ff", ambient: 285 },
        { name: "Obsidian Badlands Raceway", sky: "#0a0a0a", grid: "#171717", track: "#242424", border: "#ff0055", accent: "#ff5500", ambient: 130 },
        { name: "Singularity Overpass", sky: "#020005", grid: "#070012", track: "#100126", border: "#9d4edd", accent: "#00f0ff", ambient: 315 },
        { name: "Ascendant Celestial Nexus", sky: "#0e031a", grid: "#1f0936", track: "#2f104f", border: "#ffd700", accent: "#00f0ff", ambient: 360 }
      ];

      // Procedural Audio Synthesizer
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playSynth(freq, type = 'sine', duration = 0.1, gainVal = 0.1) {
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

      // Game Variables
      let currentLevel = parseInt(localStorage.getItem('ipr_saved_level') || '1', 10);
      let isPlaying = false;
      let car = { x: 0, y: 0, angle: 0, speed: 0, maxSpeed: 6.5, accel: 0.18, friction: 0.96, drift: false };
      let keys = { up: false, down: false, left: false, right: false, space: false };
      let checkpoints = [];
      let currentCheck = 0;
      let startTime = 0;
      let lapTime = 0;
      let targetTime = 30.0;
      let ghost = [];
      let bestTime = parseFloat(localStorage.getItem(`ipr_best_${currentLevel}`) || '0');

      // Isometric Transformation Utilities (2:1 Projection)
      function toIso(x, y) {
        return {
          isoX: (x - y) * Math.cos(Math.PI / 6),
          isoY: (x + y) * Math.sin(Math.PI / 6)
        };
      }

      // Track Generation per Level
      let trackPoints = [];
      let currentLap = 1;
      const totalLaps = 2;
      function buildTrack(level) {
        trackPoints = [];
        checkpoints = [];
        currentCheck = 0;
        currentLap = 1;
        const pts = 16;
        const radiusX = 520 + (level * 6);
        const radiusY = 340 + (level * 4);
        for (let i = 0; i < pts; i++) {
          const a = (i / pts) * Math.PI * 2;
          const wobble = Math.sin(a * 3 + level) * 60;
          const px = Math.cos(a) * (radiusX + wobble);
          const py = Math.sin(a) * (radiusY + wobble);
          trackPoints.push({ x: px, y: py });
        }
        // Set checkpoints spaced ahead around track (so checkpoint 0 is NOT at the spawn point)
        for (let i = 0; i < 6; i++) {
          const idx = Math.floor(((i + 1) / 6) * trackPoints.length) % trackPoints.length;
          checkpoints.push(trackPoints[idx]);
        }
        // Start position
        car.x = trackPoints[0].x;
        car.y = trackPoints[0].y;
        car.angle = Math.atan2(trackPoints[1].y - trackPoints[0].y, trackPoints[1].x - trackPoints[0].x);
        car.speed = 0;
        targetTime = 36.0 + Math.max(0, 8 - (level * 0.15));
      }

      // Input Handlers
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = true;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = true;
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === ' ' || e.key === 'Shift') keys.space = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = false;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = false;
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
        if (e.key === ' ' || e.key === 'Shift') keys.space = false;
      });

      // Touch Steering
      let touchStartX = 0, touchStartY = 0;
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        touchStartX = t.clientX; touchStartY = t.clientY;
        keys.up = true;
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        const dx = t.clientX - touchStartX;
        keys.left = dx < -20;
        keys.right = dx > 20;
      }, { passive: true });
      window.addEventListener('touchend', () => { keys.up = false; keys.left = false; keys.right = false; });

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
        themeVal.textContent = `${currentLevel}: ${t.name}`;
        themeVal.style.color = t.border;
        bestTime = parseFloat(localStorage.getItem(`ipr_best_${currentLevel}`) || '0');
        timeVal.textContent = `00.00s / ${bestTime ? bestTime.toFixed(2) + 's' : targetTime.toFixed(0) + 's target'}`;
        checkVal.textContent = `Lap 1/2 | Gate 0/6`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('ipr_saved_level', currentLevel);
        buildTrack(currentLevel);
        updateUI();
        ghost = [];
        startTime = performance.now();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playSynth(300, 'triangle', 0.2, 0.15);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      // Game Over / Win
      function completeLevel() {
        isPlaying = false;
        const timeSec = (lapTime / 1000);
        if (!bestTime || timeSec < bestTime) {
          bestTime = timeSec;
          localStorage.setItem(`ipr_best_${currentLevel}`, bestTime.toFixed(2));
        }
        playSynth(587, 'sine', 0.15, 0.2);
        setTimeout(() => playSynth(880, 'sine', 0.35, 0.25), 150);

        menuTitle.textContent = timeSec <= targetTime ? "STAGE CLEAR!" : "TIME ATTACK FAILED";
        menuDesc.textContent = `Lap Time: ${timeSec.toFixed(2)}s (Target: ${targetTime.toFixed(1)}s). ${timeSec <= targetTime ? "Exemplary apex drift!" : "Refine your counter-steering lines to beat the clock."}`;
        startBtn.textContent = timeSec <= targetTime && currentLevel < 45 ? "NEXT LEVEL" : "RETRY STAGE";
        startBtn.onclick = () => {
          if (timeSec <= targetTime && currentLevel < 45) currentLevel++;
          startLevel(currentLevel);
        };
        menuScreen.classList.remove('hidden');
        renderLevelSelector();
      }

      // Main Loop
      function update() {
        if (!isPlaying) return;

        // Vehicle Dynamics
        const turnSpeed = keys.space ? 0.08 : 0.05;
        if (keys.left) car.angle -= turnSpeed;
        if (keys.right) car.angle += turnSpeed;

        if (keys.up) {
          car.speed += car.accel;
          if (car.speed > car.maxSpeed) car.speed = car.maxSpeed;
        } else if (keys.down) {
          car.speed -= car.accel * 0.8;
          if (car.speed < -car.maxSpeed * 0.4) car.speed = -car.maxSpeed * 0.4;
        } else {
          car.speed *= car.friction;
        }

        // Drift friction damping
        if (keys.space && Math.abs(car.speed) > 1.5) {
          car.drift = true;
          car.speed *= 0.985;
          if (Math.random() < 0.3) playSynth(THEMES[(currentLevel - 1) % THEMES.length].ambient + 150, 'sawtooth', 0.04, 0.03);
        } else {
          car.drift = false;
        }

        car.x += Math.cos(car.angle) * car.speed;
        car.y += Math.sin(car.angle) * car.speed;

        // Lap Timer
        lapTime = performance.now() - startTime;
        const curSec = (lapTime / 1000).toFixed(2);
        timeVal.textContent = `${curSec}s / ${targetTime.toFixed(1)}s`;

        // Checkpoints Check
        const target = checkpoints[currentCheck];
        const dist = Math.hypot(car.x - target.x, car.y - target.y);
        if (dist < 90) {
          currentCheck++;
          checkVal.textContent = `Lap ${currentLap}/2 | Gate ${currentCheck}/6`;
          playSynth(440 + currentCheck * 70, 'sine', 0.08, 0.12);
          if (currentCheck >= 6) {
            if (currentLap < totalLaps) {
              currentLap++;
              currentCheck = 0;
              playSynth(880, 'triangle', 0.15, 0.2);
            } else {
              completeLevel();
            }
          }
        }
      }

      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = theme.sky;
        ctx.fillRect(0, 0, width, height);

        // Center on car in isometric space
        const centerIso = toIso(car.x, car.y);
        const offsetX = width / 2 - centerIso.isoX;
        const offsetY = height / 2 - centerIso.isoY;

        // Background isometric grid
        ctx.strokeStyle = theme.grid;
        ctx.lineWidth = 1;
        const gridSize = 100;
        const startGX = Math.floor((car.x - 700) / gridSize) * gridSize;
        const endGX = startGX + 1400;
        const startGY = Math.floor((car.y - 700) / gridSize) * gridSize;
        const endGY = startGY + 1400;

        ctx.beginPath();
        for (let gx = startGX; gx <= endGX; gx += gridSize) {
          const p1 = toIso(gx, startGY);
          const p2 = toIso(gx, endGY);
          ctx.moveTo(p1.isoX + offsetX, p1.isoY + offsetY);
          ctx.lineTo(p2.isoX + offsetX, p2.isoY + offsetY);
        }
        for (let gy = startGY; gy <= endGY; gy += gridSize) {
          const p1 = toIso(startGX, gy);
          const p2 = toIso(endGX, gy);
          ctx.moveTo(p1.isoX + offsetX, p1.isoY + offsetY);
          ctx.lineTo(p2.isoX + offsetX, p2.isoY + offsetY);
        }
        ctx.stroke();

        // Draw Isometric Track Ribbon
        if (trackPoints.length > 1) {
          ctx.beginPath();
          const first = toIso(trackPoints[0].x, trackPoints[0].y);
          ctx.moveTo(first.isoX + offsetX, first.isoY + offsetY);
          for (let i = 1; i < trackPoints.length; i++) {
            const p = toIso(trackPoints[i].x, trackPoints[i].y);
            ctx.lineTo(p.isoX + offsetX, p.isoY + offsetY);
          }
          ctx.closePath();
          ctx.strokeStyle = theme.track;
          ctx.lineWidth = 55;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();

          // Neon Curbs
          ctx.strokeStyle = theme.border;
          ctx.lineWidth = 4;
          ctx.shadowColor = theme.border;
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Draw Checkpoint Gates
        for (let i = 0; i < checkpoints.length; i++) {
          const cp = checkpoints[i];
          const iso = toIso(cp.x, cp.y);
          const isNext = i === currentCheck;
          ctx.fillStyle = isNext ? theme.accent : 'rgba(255,255,255,0.2)';
          ctx.beginPath();
          ctx.arc(iso.isoX + offsetX, iso.isoY + offsetY, isNext ? 22 : 14, 0, Math.PI * 2);
          ctx.fill();
          if (isNext) {
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }

        // Draw Player Car in Isometric Orientation
        const carIso = toIso(car.x, car.y);
        ctx.save();
        ctx.translate(carIso.isoX + offsetX, carIso.isoY + offsetY);

        // Compute isometric angle
        const isoAngle = car.angle - Math.PI / 6;
        ctx.rotate(isoAngle);

        // Drift smoke
        if (car.drift) {
          ctx.fillStyle = 'rgba(255,255,255,0.4)';
          ctx.beginPath();
          ctx.arc(-18, -6, 5 + Math.random() * 4, 0, Math.PI * 2);
          ctx.arc(-18, 6, 5 + Math.random() * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Vehicle Chassis
        ctx.fillStyle = theme.accent;
        ctx.shadowColor = theme.border;
        ctx.shadowBlur = 15;
        ctx.fillRect(-15, -9, 30, 18);
        // Cockpit canopy
        ctx.fillStyle = '#060212';
        ctx.fillRect(-6, -6, 14, 12);
        // Headlight glow
        ctx.fillStyle = theme.border;
        ctx.fillRect(13, -8, 3, 5);
        ctx.fillRect(13, 3, 3, 5);
        ctx.restore();

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Initialize
      renderLevelSelector();
      updateUI();
      buildTrack(currentLevel);
      draw();
    })();
