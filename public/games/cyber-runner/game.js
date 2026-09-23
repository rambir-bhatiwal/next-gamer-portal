/**
 * Standalone Game Engine & Canvas Renderer
 * Module: cyber-runner
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * CYBER RUNNER 2099 - 45 UNIQUE ROOFTOP SECTORS
     * Features: Jump & slide mechanics, procedural urban buildings,
     * energy cell collection, Web Audio API procedural synthesis, stage progression.
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

      // 45 Unique Rooftop Thematic Environments
      const THEMES = [
        { name: "Rooftop Cyber-Grid", skyTop: "#080214", skyBot: "#1b0933", building: "#0a041a", neon: "#00f0ff", obstacle: "#ff007f" },
        { name: "Bioluminescent Underground", skyTop: "#011409", skyBot: "#052e18", building: "#02170d", neon: "#00ff88", obstacle: "#ffd700" },
        { name: "Smoggy Factory District", skyTop: "#170800", skyBot: "#331200", building: "#1c0b02", neon: "#ffaa00", obstacle: "#ff3300" },
        { name: "Golden Skyscraper Spire", skyTop: "#171202", skyBot: "#332604", building: "#1c1505", neon: "#ffd700", obstacle: "#00f0ff" },
        { name: "Cryogenic Ice Spire", skyTop: "#010e1c", skyBot: "#052642", building: "#031424", neon: "#64dfdf", obstacle: "#f43f5e" },
        { name: "Antimatter Void Highline", skyTop: "#020005", skyBot: "#10001f", building: "#080010", neon: "#d500f9", obstacle: "#00f0ff" },
        { name: "Acid Rain Alleyway", skyTop: "#12021a", skyBot: "#2b053d", building: "#170321", neon: "#cc00ff", obstacle: "#ff0055" },
        { name: "Obsidian Badlands Wall", skyTop: "#0a0a0a", skyBot: "#1f1f1f", building: "#121212", neon: "#ff0055", obstacle: "#ffaa00" },
        { name: "Cloud City Promenade", skyTop: "#041426", skyBot: "#0d3663", building: "#08203b", neon: "#66b3ff", obstacle: "#ff80bf" },
        { name: "Supernova Dust Basin", skyTop: "#1f030f", skyBot: "#420922", building: "#260614", neon: "#ff3366", obstacle: "#ffd700" },
        { name: "Singularity Overpass", skyTop: "#000000", skyBot: "#0d001a", building: "#05000d", neon: "#651fff", obstacle: "#00e5ff" },
        { name: "Plasma Foundry Flume", skyTop: "#1a0800", skyBot: "#3d1200", building: "#240b00", neon: "#ff9100", obstacle: "#ff3d00" },
        { name: "Titan Methane Highline", skyTop: "#001a1a", skyBot: "#003b3b", building: "#002424", neon: "#20b2aa", obstacle: "#f43f5e" },
        { name: "Silicon Sand Viaduct", skyTop: "#171400", skyBot: "#362e00", building: "#241f00", neon: "#ffd700", obstacle: "#22d3ee" },
        { name: "Neutron Magnetar Nexus", skyTop: "#080117", skyBot: "#1f033d", building: "#120224", neon: "#00f5d4", obstacle: "#7b2cbf" },
        { name: "Hologram Cyber-Ruins", skyTop: "#00170f", skyBot: "#003824", building: "#002115", neon: "#38b000", obstacle: "#facc15" },
        { name: "Dark Nebula Bridge", skyTop: "#05000a", skyBot: "#170029", building: "#0d0017", neon: "#bf55ec", obstacle: "#00f0ff" },
        { name: "Cobalt Basin Overlook", skyTop: "#000f26", skyBot: "#002454", building: "#001736", neon: "#0077b6", obstacle: "#90e0ef" },
        { name: "Starlight Cathedral Roof", skyTop: "#140021", skyBot: "#38004d", building: "#240033", neon: "#f72585", obstacle: "#7209b7" },
        { name: "Asteroid Rig Overpass", skyTop: "#0d0d0d", skyBot: "#212121", building: "#141414", neon: "#adb5bd", obstacle: "#f87171" },
        { name: "Prismatic Aurora Skyline", skyTop: "#001715", skyBot: "#003833", building: "#00211e", neon: "#48cae4", obstacle: "#a0e426" },
        { name: "Radioactive Trench", skyTop: "#0f1700", skyBot: "#243600", building: "#172400", neon: "#ccff00", obstacle: "#ff3d00" },
        { name: "Pulsar Beam Highway", skyTop: "#170217", skyBot: "#3b053b", building: "#240324", neon: "#ff006e", obstacle: "#8338ec" },
        { name: "Copper Steam Viaduct", skyTop: "#1a0d02", skyBot: "#3d1e05", building: "#241203", neon: "#d4a373", obstacle: "#bc6c25" },
        { name: "Zero-G Habitat Spine", skyTop: "#01121f", skyBot: "#042c4d", building: "#031c30", neon: "#00e5ff", obstacle: "#ff00aa" },
        { name: "Krypton Gas Skyway", skyTop: "#001c16", skyBot: "#003d30", building: "#00261f", neon: "#00ff87", obstacle: "#60efff" },
        { name: "Hyper-Space Warp Ridge", skyTop: "#09001f", skyBot: "#1f0042", building: "#120026", neon: "#ff007f", obstacle: "#00f0ff" },
        { name: "Crimson Eclipse Spire", skyTop: "#1c0000", skyBot: "#3b0000", building: "#260000", neon: "#ff1744", obstacle: "#ff8a80" },
        { name: "Bismuth Crystal Towers", skyTop: "#12001c", skyBot: "#2e0047", building: "#1c002b", neon: "#e040fb", obstacle: "#00e676" },
        { name: "Thermal Steam Ridge", skyTop: "#121214", skyBot: "#262629", building: "#1c1c1f", neon: "#ff6d00", obstacle: "#ffab40" },
        { name: "Exoplanet Bio-Canopy", skyTop: "#00170a", skyBot: "#003617", building: "#00210e", neon: "#00c853", obstacle: "#38bdf8" },
        { name: "Tachyon Mirror Highline", skyTop: "#0a001a", skyBot: "#20003b", building: "#140024", neon: "#d500f9", obstacle: "#00b0ff" },
        { name: "Gamma Burst Rampart", skyTop: "#171700", skyBot: "#363600", building: "#242400", neon: "#ffff00", obstacle: "#76ff03" },
        { name: "Vaporwave Pastel Spire", skyTop: "#1c0b1f", skyBot: "#3b1742", building: "#260f2b", neon: "#ff80bf", obstacle: "#80dfff" },
        { name: "Dark Energy Monolith", skyTop: "#020202", skyBot: "#0a0a0a", building: "#050505", neon: "#651fff", obstacle: "#00e5ff" },
        { name: "Quasar Jet Rooftops", skyTop: "#17020d", skyBot: "#3b0521", building: "#240314", neon: "#ff0055", obstacle: "#ffaa00" },
        { name: "Heliosphere Peripheral", skyTop: "#000e1f", skyBot: "#00244f", building: "#001733", neon: "#2979ff", obstacle: "#00e5ff" },
        { name: "Synthetic Reef Artery", skyTop: "#001a17", skyBot: "#003833", building: "#002421", neon: "#1de9b6", obstacle: "#00b4d8" },
        { name: "Chrono-Stasis Spire", skyTop: "#0f0117", skyBot: "#26033b", building: "#170224", neon: "#e040fb", obstacle: "#7c4dff" },
        { name: "Cosmic String Highline", skyTop: "#030317", skyBot: "#0c0c42", building: "#080829", neon: "#3d5afe", obstacle: "#ff4081" },
        { name: "Omega Point Infinite Core", skyTop: "#000000", skyBot: "#0a0012", building: "#050008", neon: "#00f0ff", obstacle: "#ff007f" },
        { name: "Hadron Collider Ramp", skyTop: "#010512", skyBot: "#041538", building: "#020d24", neon: "#38bdf8", obstacle: "#f43f5e" },
        { name: "Superfluid Void Way", skyTop: "#001214", skyBot: "#002c30", building: "#001c1f", neon: "#2dd4bf", obstacle: "#f59e0b" },
        { name: "Silicon Nanite Spire", skyTop: "#141000", skyBot: "#2e2400", building: "#1f1800", neon: "#facc15", obstacle: "#ef4444" },
        { name: "Ascendant Celestial Apex", skyTop: "#0a0314", skyBot: "#21093d", building: "#140626", neon: "#ffd700", obstacle: "#00f0ff" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playTone(freq, type = 'sine', duration = 0.1) {
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
      let currentLevel = parseInt(localStorage.getItem('cr_saved_level') || '1', 10);
      let isPlaying = false;
      let speed = 240;
      let distance = 0;
      let targetDist = 900;
      let energy = 100;
      let shields = 3;
      let invulnerableTimer = 0;

      // Runner state
      const groundY = height - 90;
      let player = {
        x: 100,
        y: groundY,
        w: 32,
        h: 56,
        vy: 0,
        isJumping: false,
        isSliding: false,
        slideTimer: 0
      };

      let obstacles = [];
      let energyCells = [];
      let buildings = [];

      let keys = { up: false, down: false };

      // Input
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowUp' || e.key === ' ' || e.key === 'w') jump();
        if (e.key === 'ArrowDown' || e.key === 's') slide();
      });

      // Touch
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        if (t.clientY < height / 2) jump();
        else slide();
      }, { passive: true });

      function jump() {
        if (!player.isJumping) {
          player.vy = -16;
          player.isJumping = true;
          player.isSliding = false;
          playTone(420, 'triangle', 0.15);
        }
      }

      function slide() {
        if (!player.isJumping && !player.isSliding) {
          player.isSliding = true;
          player.slideTimer = 40;
          playTone(220, 'sawtooth', 0.1);
        }
      }

      // Init Buildings
      function initBuildings() {
        buildings = [];
        let bx = 0;
        while (bx < width * 2) {
          const bw = 80 + Math.random() * 90;
          const bh = 140 + Math.random() * 200;
          buildings.push({ x: bx, w: bw, h: bh });
          bx += bw + 15;
        }
      }

      // Spawner (fair human reaction spacing: minimum 320px between hazards)
      function spawnObjects() {
        const lastObs = obstacles[obstacles.length - 1];
        if ((!lastObs || lastObs.x < width - 340) && Math.random() < 0.02) {
          const isHigh = Math.random() > 0.5; // High laser = slide under; Low barrier = jump over
          obstacles.push({
            x: width + 40,
            y: isHigh ? groundY - 60 : groundY - 30,
            w: 26,
            h: isHigh ? 35 : 30,
            type: isHigh ? 'high' : 'low'
          });
        }
        if (Math.random() < 0.03) {
          energyCells.push({
            x: width + 40,
            y: groundY - 30 - (Math.random() > 0.5 ? 45 : 0),
            radius: 8
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
        themeVal.style.color = t.neon;
        targetDist = 750 + currentLevel * 45;
        const shieldIcons = '🛡️'.repeat(Math.max(0, shields));
        speedVal.textContent = `${Math.floor(speed)} KM/H | ${shieldIcons}`;
        distVal.textContent = `${Math.floor(distance)} / ${targetDist}M`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('cr_saved_level', currentLevel);
        obstacles = [];
        energyCells = [];
        initBuildings();
        distance = 0;
        energy = 100;
        shields = 3;
        invulnerableTimer = 0;
        player.y = groundY;
        player.vy = 0;
        player.isJumping = false;
        player.isSliding = false;
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
        menuTitle.textContent = win ? "EXTRACTION ACHIEVED!" : "COLLISION BREACH";
        menuDesc.textContent = win ?
          `Rooftop course cleared with 100% mission efficiency! Distance: ${Math.floor(distance)}M.` :
          `Runner collision with defense barrier! Shields depleted. Master jump and slide reaction timing.`;
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

        speed = 220 + (currentLevel * 2);
        distance += 0.5; // ~30-40 seconds of gameplay to reach 800-1000M target

        if (invulnerableTimer > 0) invulnerableTimer--;

        if (distance >= targetDist) {
          endLevel(true);
          return;
        }

        // Jump physics
        if (player.isJumping) {
          player.y += player.vy;
          player.vy += 0.85; // Gravity
          if (player.y >= groundY) {
            player.y = groundY;
            player.isJumping = false;
            player.vy = 0;
          }
        }

        // Slide timer
        if (player.isSliding) {
          player.slideTimer--;
          if (player.slideTimer <= 0) player.isSliding = false;
        }

        // Scroll buildings
        const scrollSpeed = 5.2 + (currentLevel * 0.04);
        for (let b of buildings) {
          b.x -= scrollSpeed * 0.4;
        }
        if (buildings[0].x + buildings[0].w < 0) {
          const first = buildings.shift();
          const last = buildings[buildings.length - 1];
          first.x = last.x + last.w + 15;
          buildings.push(first);
        }

        spawnObjects();

        const curH = player.isSliding ? 24 : 56;
        const curY = player.isSliding ? groundY - 24 : player.y - 56;

        // Update Obstacles
        for (let i = obstacles.length - 1; i >= 0; i--) {
          const obs = obstacles[i];
          obs.x -= scrollSpeed;

          // Hitbox test with 3-Shield System
          if (obs.x < player.x + player.w && obs.x + obs.w > player.x) {
            if (obs.y < curY + curH && obs.y + obs.h > curY) {
              if (invulnerableTimer <= 0) {
                shields--;
                invulnerableTimer = 90; // 1.5s invulnerability flash
                playTone(130, 'sawtooth', 0.2);
                updateUI();
                if (shields <= 0) {
                  endLevel(false);
                  return;
                }
              }
            }
          }
          if (obs.x < -40) obstacles.splice(i, 1);
        }

        // Update Energy Cells
        for (let i = energyCells.length - 1; i >= 0; i--) {
          const c = energyCells[i];
          c.x -= scrollSpeed;

          if (Math.hypot(c.x - (player.x + 16), c.y - (curY + curH / 2)) < c.radius + 20) {
            energy = Math.min(100, energy + 12);
            playTone(660, 'sine', 0.08);
            energyCells.splice(i, 1);
            continue;
          }
          if (c.x < -40) energyCells.splice(i, 1);
        }

        updateUI();
      }

      // Draw
      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];

        // Background Sky
        const sky = ctx.createLinearGradient(0, 0, 0, height);
        sky.addColorStop(0, theme.skyTop);
        sky.addColorStop(1, theme.skyBot);
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, width, height);

        // Skyline Buildings
        for (let b of buildings) {
          ctx.fillStyle = theme.building;
          ctx.fillRect(b.x, groundY - b.h, b.w, b.h);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.strokeRect(b.x, groundY - b.h, b.w, b.h);

          // Neon windows
          ctx.fillStyle = theme.neon;
          ctx.fillRect(b.x + 14, groundY - b.h + 20, 10, 14);
          ctx.fillRect(b.x + 38, groundY - b.h + 20, 10, 14);
        }

        // Rooftop Running Track
        ctx.fillStyle = '#060312';
        ctx.fillRect(0, groundY, width, height - groundY);

        ctx.strokeStyle = theme.neon;
        ctx.lineWidth = 3;
        ctx.shadowColor = theme.neon;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(0, groundY);
        ctx.lineTo(width, groundY);
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw Energy Cells
        for (let c of energyCells) {
          ctx.fillStyle = theme.neon;
          ctx.shadowColor = theme.neon;
          ctx.shadowBlur = 14;
          ctx.beginPath();
          ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw Obstacles
        for (let obs of obstacles) {
          ctx.fillStyle = theme.obstacle;
          ctx.shadowColor = theme.obstacle;
          ctx.shadowBlur = 14;
          ctx.fillRect(obs.x, obs.y, obs.w, obs.h);

          // Laser warning indicator
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(obs.x + 4, obs.y + 4, obs.w - 8, obs.h - 8);
          ctx.shadowBlur = 0;
        }

        // Draw Cyber Runner Sprite (with invulnerability blinking)
        if (!(invulnerableTimer > 0 && Math.floor(invulnerableTimer / 6) % 2 === 0)) {
          const curH = player.isSliding ? 24 : 56;
          const curY = player.isSliding ? groundY - 24 : player.y - 56;

          ctx.save();
          ctx.translate(player.x, curY);

          // Cyber Runner Neon Silhouette
          ctx.fillStyle = '#0a0314';
          ctx.strokeStyle = theme.neon;
          ctx.lineWidth = 2.5;
          ctx.shadowColor = theme.neon;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.roundRect(0, 0, player.w, curH, 4);
          ctx.fill();
          ctx.stroke();

          // Runner Visor
          ctx.fillStyle = theme.obstacle;
          ctx.fillRect(player.w - 10, 8, 8, 6);
          ctx.restore();
        }

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      initBuildings();
      updateUI();
      draw();
    })();
