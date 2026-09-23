/**
 * Standalone Game Engine & Canvas Renderer
 * Module: hyper-maglev
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * HYPER MAGLEV: MONORAIL BLITZ - 45 UNIQUE SKYWAY TRANSIT THEMES
     * Features: 4-rail parallel switching mechanics, maintenance drone avoidance,
     * magnetic battery collection, procedural Web Audio API rail hum & switch clacks.
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

      // 45 Unique Transit Biomes
      const THEMES = [
        { name: "Skyway Spire Heights", bgTop: "#020714", bgBot: "#00f0ff", railColor: "#00f0ff", droneColor: "#ff007f", cellColor: "#00ff88" },
        { name: "Sub-Oceanic Glass Tunnel", bgTop: "#01101c", bgBot: "#0077b6", railColor: "#48cae4", droneColor: "#ffaa00", cellColor: "#90e0ef" },
        { name: "Desert Canyon Viaduct", bgTop: "#170e02", bgBot: "#f59e0b", railColor: "#fbbf24", droneColor: "#ef4444", cellColor: "#38bdf8" },
        { name: "Volcanic Geothermal Bridge", bgTop: "#170300", bgBot: "#ff3300", railColor: "#ffaa00", droneColor: "#ffffff", cellColor: "#00f0ff" },
        { name: "Glacial Mountain Pass", bgTop: "#02121c", bgBot: "#caf0f8", railColor: "#64dfdf", droneColor: "#ff1744", cellColor: "#a7ffeb" },
        { name: "Orbital Space Elevator Base", bgTop: "#0a0117", bgBot: "#7209b7", railColor: "#b5179e", droneColor: "#f72585", cellColor: "#4cc9f0" },
        { name: "Emerald Nanite Forest Skyway", bgTop: "#01170d", bgBot: "#10b981", railColor: "#34d399", droneColor: "#f43f5e", cellColor: "#67e8f9" },
        { name: "Acid Rain Mega-Slums", bgTop: "#12021a", bgBot: "#d946ef", railColor: "#f0abfc", droneColor: "#00ff88", cellColor: "#00f0ff" },
        { name: "Titan Methane Viaduct", bgTop: "#011717", bgBot: "#14b8a6", railColor: "#2dd4bf", droneColor: "#f59e0b", cellColor: "#f472b6" },
        { name: "Silicon Dunes Transit Hub", bgTop: "#171401", bgBot: "#eab308", railColor: "#facc15", droneColor: "#dc2626", cellColor: "#22d3ee" },
        { name: "Cobalt Foundry Sky-Bridge", bgTop: "#010e1f", bgBot: "#2563eb", railColor: "#60a5fa", droneColor: "#fb923c", cellColor: "#4ade80" },
        { name: "Starlight Cathedral Monorail", bgTop: "#120117", bgBot: "#c026d3", railColor: "#e879f9", droneColor: "#38bdf8", cellColor: "#fde047" },
        { name: "Asteroid Mining Transit Belt", bgTop: "#0d0d0f", bgBot: "#94a3b8", railColor: "#cbd5e1", droneColor: "#f43f5e", cellColor: "#38bdf8" },
        { name: "Prismatic Aurora Viaduct", bgTop: "#001412", bgBot: "#2dd4bf", railColor: "#5eead4", droneColor: "#f43f5e", cellColor: "#facc15" },
        { name: "Radioactive Wasteland Sky-Line", bgTop: "#101700", bgBot: "#84cc16", railColor: "#a3e635", droneColor: "#ea580c", cellColor: "#00f0ff" },
        { name: "Pulsar Magnetosphere Artery", bgTop: "#140114", bgBot: "#db2777", railColor: "#f472b6", droneColor: "#8b5cf6", cellColor: "#34d399" },
        { name: "Copper Steampunk Aqueduct", bgTop: "#170a01", bgBot: "#d97706", railColor: "#fbbf24", droneColor: "#b91c1c", cellColor: "#67e8f9" },
        { name: "Zero-G Habitat Skyway", bgTop: "#02121f", bgBot: "#0284c7", railColor: "#38bdf8", droneColor: "#f59e0b", cellColor: "#a7f3d0" },
        { name: "Krypton Atmospheric Causeway", bgTop: "#001712", bgBot: "#059669", railColor: "#34d399", droneColor: "#ec4899", cellColor: "#38bdf8" },
        { name: "Hyper-Space Warp Monorail", bgTop: "#09001f", bgBot: "#7c3aed", railColor: "#a78bfa", droneColor: "#00f0ff", cellColor: "#f43f5e" },
        { name: "Crimson Eclipse Skyway", bgTop: "#1c0101", bgBot: "#dc2626", railColor: "#ef4444", droneColor: "#fde047", cellColor: "#38bdf8" },
        { name: "Bismuth Hexagonal Viaduct", bgTop: "#12001c", bgBot: "#a21caf", railColor: "#c084fc", droneColor: "#22c55e", cellColor: "#38bdf8" },
        { name: "Thermal Steam Causeway", bgTop: "#121214", bgBot: "#ea580c", railColor: "#fb923c", droneColor: "#38bdf8", cellColor: "#fde047" },
        { name: "Exoplanet Bio-Canopy Bridge", bgTop: "#00140a", bgBot: "#15803d", railColor: "#4ade80", droneColor: "#e11d48", cellColor: "#67e8f9" },
        { name: "Tachyon Mirror Highline", bgTop: "#0a0117", bgBot: "#9333ea", railColor: "#c084fc", droneColor: "#00f0ff", cellColor: "#f472b6" },
        { name: "Gamma Ray Flare Way", bgTop: "#141400", bgBot: "#ca8a04", railColor: "#facc15", droneColor: "#84cc16", cellColor: "#38bdf8" },
        { name: "Vaporwave Pastel Causeway", bgTop: "#17081c", bgBot: "#f472b6", railColor: "#fbcfe8", droneColor: "#38bdf8", cellColor: "#fde047" },
        { name: "Dark Energy Monolith Track", bgTop: "#020205", bgBot: "#4f46e5", railColor: "#818cf8", droneColor: "#00f0ff", cellColor: "#f43f5e" },
        { name: "Quasar Relativistic Sky-Artery", bgTop: "#17020e", bgBot: "#be185d", railColor: "#fb7185", droneColor: "#facc15", cellColor: "#38bdf8" },
        { name: "Heliosphere Peripheral Rails", bgTop: "#010e1c", bgBot: "#0369a1", railColor: "#38bdf8", droneColor: "#f97316", cellColor: "#4ade80" },
        { name: "Synthetic Reef Skyway", bgTop: "#001715", bgBot: "#0d9488", railColor: "#2dd4bf", droneColor: "#ec4899", cellColor: "#fde047" },
        { name: "Chrono-Stasis Viaduct", bgTop: "#0d021c", bgBot: "#7e22ce", railColor: "#a855f7", droneColor: "#06b6d4", cellColor: "#f43f5e" },
        { name: "Cosmic String Super-Rail", bgTop: "#030317", bgBot: "#4338ca", railColor: "#6366f1", droneColor: "#f43f5e", cellColor: "#38bdf8" },
        { name: "Omega Point Infinite Skyway", bgTop: "#080010", bgBot: "#00f0ff", railColor: "#ffffff", droneColor: "#ff007f", cellColor: "#00ff88" },
        { name: "Hadron Accelerator Rail", bgTop: "#010512", bgBot: "#00f0ff", railColor: "#38bdf8", droneColor: "#ff007f", cellColor: "#a7f3d0" },
        { name: "Superfluid Void Conduit", bgTop: "#001214", bgBot: "#0f766e", railColor: "#2dd4bf", droneColor: "#f59e0b", cellColor: "#f472b6" },
        { name: "Silicon Nanite High-Speed Hub", bgTop: "#141000", bgBot: "#ca8a04", railColor: "#facc15", droneColor: "#ef4444", cellColor: "#38bdf8" },
        { name: "Neutron Core Sky-Ramp", bgTop: "#0a011a", bgBot: "#6d28d9", railColor: "#8b5cf6", droneColor: "#10b981", cellColor: "#fde047" },
        { name: "Holographic Ruins Overpass", bgTop: "#00140c", bgBot: "#16a34a", railColor: "#4ade80", droneColor: "#8b5cf6", cellColor: "#67e8f9" },
        { name: "Dark Nebula Express Line", bgTop: "#05000a", bgBot: "#a21caf", railColor: "#c084fc", droneColor: "#00f0ff", cellColor: "#f43f5e" },
        { name: "Obsidian Badlands Sky-Spur", bgTop: "#0a0a0c", bgBot: "#e11d48", railColor: "#fb7185", droneColor: "#f97316", cellColor: "#38bdf8" },
        { name: "Atmospheric Stratosphere Express", bgTop: "#041426", bgBot: "#0284c7", railColor: "#38bdf8", droneColor: "#f43f5e", cellColor: "#ffffff" },
        { name: "Supernova Dust Sky-Bridge", bgTop: "#17020a", bgBot: "#e11d48", railColor: "#f43f5e", droneColor: "#facc15", cellColor: "#38bdf8" },
        { name: "Singularity Event Viaduct", bgTop: "#020005", bgBot: "#7c3aed", railColor: "#a78bfa", droneColor: "#00f0ff", cellColor: "#fde047" },
        { name: "Ascendant Celestial Sky-Grid", bgTop: "#0a0314", bgBot: "#ffd700", railColor: "#ffffff", droneColor: "#ff007f", cellColor: "#00f0ff" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playClack() {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(240, actx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(120, actx.currentTime + 0.05);
          gain.gain.setValueAtTime(0.15, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.05);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + 0.05);
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
      let currentLevel = parseInt(localStorage.getItem('hm_saved_level') || '1', 10);
      let isPlaying = false;
      let currentTrack = 1; // 0, 1, 2, 3
      let trainX = 0; // Visual interpolation
      let speed = 600;
      let battery = 100;
      let distance = 0;
      let targetDist = 2500;
      let obstacles = []; // Maintenance drones
      let batteries = []; // Magnetic power cells
      let keys = { left: false, right: false, brake: false };
      let shields = 3;
      let invulnerableTimer = 0;

      // Input Handlers
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') switchTrack(-1);
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') switchTrack(1);
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.brake = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.brake = false;
      });

      // Touch Controls
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const x = e.touches[0].clientX;
        if (x < width / 2) switchTrack(-1);
        else switchTrack(1);
      }, { passive: true });

      function switchTrack(dir) {
        if (!isPlaying) return;
        const next = currentTrack + dir;
        if (next >= 0 && next < 4) {
          currentTrack = next;
          playClack();
        }
      }

      // Spawner
      function spawnObjects() {
        if (Math.random() < 0.04) {
          obstacles.push({
            track: Math.floor(Math.random() * 4),
            y: -40,
            size: 28
          });
        }
        if (Math.random() < 0.02) {
          batteries.push({
            track: Math.floor(Math.random() * 4),
            y: -40,
            size: 20
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
        themeVal.style.color = t.railColor;
        targetDist = 1000 + currentLevel * 50;
        speedVal.textContent = `${Math.floor(speed)} KM/H | ${'🛡️'.repeat(Math.max(0, shields))} | ${Math.floor(battery)}%`;
        distVal.textContent = `${Math.floor(distance)} / ${targetDist}M`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('hm_saved_level', currentLevel);
        obstacles = [];
        batteries = [];
        currentTrack = 1;
        speed = 600;
        battery = 100;
        distance = 0;
        shields = 3;
        invulnerableTimer = 0;
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
        menuTitle.textContent = win ? "STATION ARRIVAL CONFIRMED!" : "MAGLEV COLLISION CRITICAL";
        menuDesc.textContent = win ?
          `Supersonic bullet train reached terminal right on schedule! Traversed ${Math.floor(distance)}M.` :
          `Impact with maintenance drone ruptured magnetic guidance field! Battery failure.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT TRANSIT SECTOR" : "RETRY SECTOR";
        startBtn.onclick = () => {
          if (win && currentLevel < 45) currentLevel++;
          startLevel(currentLevel);
        };
        menuScreen.classList.remove('hidden');
        renderLevelSelector();
      }

      // Track X positions (4 rails across screen)
      function getTrackX(trackIdx) {
        const span = Math.min(width * 0.7, 500);
        return width / 2 - span / 2 + (trackIdx / 3) * span;
      }

      // Update Loop
      function update() {
        if (!isPlaying) return;

        speed = keys.brake ? 380 : 600 + (currentLevel * 3);
        distance += 0.55; // ~30-40 seconds to reach 1000-1200M station

        if (invulnerableTimer > 0) invulnerableTimer--;

        // Visual train interpolation
        const targetX = getTrackX(currentTrack);
        trainX += (targetX - trainX) * 0.25;

        // Drain battery slowly
        battery -= 0.02;
        if (battery <= 0) {
          battery = 0;
          endLevel(false);
          return;
        }

        if (distance >= targetDist) {
          endLevel(true);
          return;
        }

        spawnObjects();

        const fallSpeed = (speed / 60) * 0.9;
        const trainY = height * 0.8;

        // Obstacles (Maintenance Drones with 3-shield buffer)
        for (let i = obstacles.length - 1; i >= 0; i--) {
          const obs = obstacles[i];
          obs.y += fallSpeed;

          if (obs.y > trainY - 30 && obs.y < trainY + 30) {
            if (obs.track === currentTrack) {
              if (invulnerableTimer <= 0) {
                shields--;
                invulnerableTimer = 90;
                battery = Math.max(20, battery - 25);
                playTone(130, 'sawtooth', 0.25);
                updateUI();
                if (shields <= 0) {
                  endLevel(false);
                  return;
                }
              }
            }
          }
          if (obs.y > height + 50) obstacles.splice(i, 1);
        }

        // Batteries
        for (let i = batteries.length - 1; i >= 0; i--) {
          const b = batteries[i];
          b.y += fallSpeed;

          if (b.y > trainY - 30 && b.y < trainY + 30) {
            if (b.track === currentTrack) {
              battery = Math.min(100, battery + 18);
              playTone(660, 'sine', 0.1);
              batteries.splice(i, 1);
              continue;
            }
          }
          if (b.y > height + 50) batteries.splice(i, 1);
        }

        updateUI();
      }

      // Draw
      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];

        // Background Skyway
        const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
        bgGrad.addColorStop(0, theme.bgTop);
        bgGrad.addColorStop(1, '#020208');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // 4 Parallel Maglev Skyway Rails
        for (let i = 0; i < 4; i++) {
          const rx = getTrackX(i);

          // Track bed
          ctx.fillStyle = 'rgba(255,255,255,0.03)';
          ctx.fillRect(rx - 24, 0, 48, height);

          // Center magnetic guide rail
          ctx.strokeStyle = theme.railColor;
          ctx.lineWidth = 4;
          ctx.shadowColor = theme.railColor;
          ctx.shadowBlur = 10;
          ctx.beginPath();
          ctx.moveTo(rx, 0);
          ctx.lineTo(rx, height);
          ctx.stroke();

          // High-voltage rail ties
          ctx.fillStyle = 'rgba(255,255,255,0.15)';
          const tieOffset = (distance * 3) % 40;
          for (let y = -40 + tieOffset; y < height; y += 40) {
            ctx.fillRect(rx - 16, y, 32, 3);
          }
          ctx.shadowBlur = 0;
        }

        // Draw Obstacles (Drones)
        for (let obs of obstacles) {
          const ox = getTrackX(obs.track);
          ctx.fillStyle = theme.droneColor;
          ctx.shadowColor = theme.droneColor;
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.roundRect(ox - 18, obs.y - 12, 36, 24, 6);
          ctx.fill();

          // Drone warning flash
          ctx.fillStyle = '#fff';
          ctx.beginPath();
          ctx.arc(ox, obs.y, 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw Battery Cells
        for (let b of batteries) {
          const bx = getTrackX(b.track);
          ctx.fillStyle = theme.cellColor;
          ctx.shadowColor = theme.cellColor;
          ctx.shadowBlur = 16;
          ctx.beginPath();
          ctx.arc(bx, b.y, 10, 0, Math.PI * 2);
          ctx.fill();

          // Inner spark
          ctx.fillStyle = '#fff';
          ctx.fillRect(bx - 3, b.y - 7, 6, 14);
          ctx.shadowBlur = 0;
        }

        // Draw Supersonic Maglev Bullet Train (with invulnerability blinking)
        if (!(invulnerableTimer > 0 && Math.floor(invulnerableTimer / 6) % 2 === 0)) {
          const trainY = height * 0.8;
          ctx.save();
          ctx.translate(trainX, trainY);

          // Magnetic Levitation Glow
          ctx.fillStyle = theme.railColor;
          ctx.shadowColor = theme.railColor;
          ctx.shadowBlur = 24;
          ctx.fillRect(-18, -48, 36, 96);

          // Train Sleek Aerodynamic Nose & Body
          ctx.fillStyle = '#060a1a';
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.roundRect(-16, -45, 32, 90, [16, 16, 6, 6]);
          ctx.fill();
          ctx.stroke();

          // Cockpit Panoramic Visor
          ctx.fillStyle = '#00f0ff';
          ctx.fillRect(-10, -36, 20, 18);
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
      trainX = getTrackX(currentTrack);
      draw();
    })();
