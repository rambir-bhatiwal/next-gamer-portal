/**
 * Standalone Game Engine & Canvas Renderer
 * Module: cosmic-gate-runner
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * COSMIC GATE RUNNER - 45 UNIQUE THEMED LEVELS
     * Features: Pseudo-3D cockpit runner, 45 distinct environmental biomes,
     * Web Audio API procedural synthesis, localStorage progression.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('raceCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const speedVal = document.getElementById('speedVal');
      const gateVal = document.getElementById('gateVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Thematic Environments
      const THEMES = [
        { name: "Neon Cyber-Grid", sky: "#080214", road: "#0d0526", primary: "#00f0ff", accent: "#ff007f", horizon: "#7000ff" },
        { name: "Bioluminescent Crystal Cave", sky: "#021214", road: "#031c20", primary: "#00ffcc", accent: "#00ff88", horizon: "#004d40" },
        { name: "Molten Core", sky: "#1c0400", road: "#2a0800", primary: "#ffaa00", accent: "#ff3300", horizon: "#880000" },
        { name: "Clockwork Sky-Fortress", sky: "#1a1202", road: "#261a04", primary: "#ffcc66", accent: "#cc8833", horizon: "#553311" },
        { name: "Quantum Void", sky: "#000000", road: "#0a0a0a", primary: "#ffffff", accent: "#888888", horizon: "#333333" },
        { name: "Submerged Hydro-Lab", sky: "#011624", road: "#022033", primary: "#00aaff", accent: "#00ffff", horizon: "#003366" },
        { name: "Solar Flare Corona", sky: "#241500", road: "#362000", primary: "#ffea00", accent: "#ff6600", horizon: "#883300" },
        { name: "Emerald Nanite Spire", sky: "#011a08", road: "#02260c", primary: "#00ff66", accent: "#33ff99", horizon: "#004d1a" },
        { name: "Sub-Zero Glacial Rift", sky: "#041424", road: "#072038", primary: "#aae6ff", accent: "#55c2ff", horizon: "#0d4073" },
        { name: "Acid Rain Neo-Tokyo", sky: "#12021a", road: "#1c0429", primary: "#cc00ff", accent: "#00f0ff", horizon: "#590080" },
        { name: "Antimatter Nebula", sky: "#150024", road: "#22003b", primary: "#e600ff", accent: "#9900ff", horizon: "#4d0080" },
        { name: "Obsidian Badlands", sky: "#0d0d0d", road: "#1a1a1a", primary: "#ff0055", accent: "#ff5500", horizon: "#330011" },
        { name: "Atmospheric Stratosphere", sky: "#081b38", road: "#0c2854", primary: "#66b3ff", accent: "#cce6ff", horizon: "#004080" },
        { name: "Supernova Dust Basin", sky: "#240410", road: "#380619", primary: "#ff3366", accent: "#ff99aa", horizon: "#800020" },
        { name: "Singularity Horizon", sky: "#030008", road: "#070014", primary: "#9d4edd", accent: "#c77dff", horizon: "#3c096c" },
        { name: "Plasma Forge", sky: "#210800", road: "#330d00", primary: "#ff9100", accent: "#ff5400", horizon: "#661a00" },
        { name: "Titan Methane Ocean", sky: "#001f1f", road: "#003333", primary: "#20b2aa", accent: "#48d1cc", horizon: "#004d40" },
        { name: "Silicon Sand Dunes", sky: "#211a00", road: "#332900", primary: "#ffd700", accent: "#ffa500", horizon: "#665200" },
        { name: "Neutron Magnetar", sky: "#0d0221", road: "#19053d", primary: "#00f5d4", accent: "#7b2cbf", horizon: "#3a0ca3" },
        { name: "Holographic Cyber-Ruins", sky: "#001a14", road: "#002b20", primary: "#38b000", accent: "#70e000", horizon: "#004b23" },
        { name: "Dark Nebula Corridor", sky: "#05000a", road: "#0d001a", primary: "#bf55ec", accent: "#be90d4", horizon: "#2e0854" },
        { name: "Cobalt Foundry", sky: "#001026", road: "#001a3d", primary: "#0077b6", accent: "#90e0ef", horizon: "#03045e" },
        { name: "Starlight Cathedral", sky: "#1a0026", road: "#2b003d", primary: "#f72585", accent: "#7209b7", horizon: "#3f37c9" },
        { name: "Asteroid Mining Belt", sky: "#121212", road: "#1f1f1f", primary: "#e0e1dd", accent: "#778da9", horizon: "#415a77" },
        { name: "Prismatic Aurora", sky: "#001a18", road: "#002e2b", primary: "#48cae4", accent: "#a0e426", horizon: "#0077b6" },
        { name: "Radioactive Wasteland", sky: "#121a00", road: "#1e2b00", primary: "#ccff00", accent: "#70e000", horizon: "#386600" },
        { name: "Pulsar Beam Nexus", sky: "#1a0521", road: "#2b0936", primary: "#ff006e", accent: "#8338ec", horizon: "#3a86ff" },
        { name: "Copper Steampunk Cavern", sky: "#1f0f00", road: "#331900", primary: "#d4a373", accent: "#bc6c25", horizon: "#663300" },
        { name: "Zero-G Habitat Dome", sky: "#021526", road: "#042440", primary: "#00e5ff", accent: "#69f0ae", horizon: "#004d40" },
        { name: "Krypton Gas Giant", sky: "#00211b", road: "#00382e", primary: "#00ff87", accent: "#60efff", horizon: "#006652" },
        { name: "Hyper-Space Warp Tunnel", sky: "#09001f", road: "#13003d", primary: "#ff007f", accent: "#00f0ff", horizon: "#7000ff" },
        { name: "Crimson Eclipse", sky: "#1f0000", road: "#330000", primary: "#ff1744", accent: "#ff8a80", horizon: "#5c0000" },
        { name: "Bismuth Crystal Spire", sky: "#170024", road: "#26003b", primary: "#e040fb", accent: "#00e676", horizon: "#651fff" },
        { name: "Thermal Steam Trench", sky: "#141414", road: "#212121", primary: "#ff6d00", accent: "#ffab40", horizon: "#424242" },
        { name: "Exoplanet Bio-Canopy", sky: "#001a0e", road: "#002917", primary: "#00c853", accent: "#b9f6ca", horizon: "#004d20" },
        { name: "Tachyon Mirror Rift", sky: "#0a001a", road: "#140033", primary: "#d500f9", accent: "#00b0ff", horizon: "#4a148c" },
        { name: "Gamma Ray Burst Zone", sky: "#1f1f00", road: "#333300", primary: "#ffff00", accent: "#76ff03", horizon: "#666600" },
        { name: "Vaporwave Pastel Coast", sky: "#241026", road: "#38193b", primary: "#ff80bf", accent: "#80dfff", horizon: "#732673" },
        { name: "Dark Energy Monoliths", sky: "#020202", road: "#0d0d0d", primary: "#651fff", accent: "#00e5ff", horizon: "#1a1a1a" },
        { name: "Quasar Relativistic Jet", sky: "#1f0514", road: "#330921", primary: "#ff0055", accent: "#ffcc00", horizon: "#660022" },
        { name: "Heliosphere Boundary", sky: "#001026", road: "#001f4a", primary: "#2979ff", accent: "#00e5ff", horizon: "#0d47a1" },
        { name: "Synthetic Silicon Reef", sky: "#001f1c", road: "#00332e", primary: "#1de9b6", accent: "#00b4d8", horizon: "#004d40" },
        { name: "Chrono-Stasis Chamber", sky: "#140521", road: "#210836", primary: "#e040fb", accent: "#7c4dff", horizon: "#311b92" },
        { name: "Cosmic String Filament", sky: "#05051a", road: "#0a0a33", primary: "#3d5afe", accent: "#ff4081", horizon: "#1a237e" },
        { name: "Omega Point Singularity", sky: "#0d0014", road: "#190026", primary: "#00f0ff", accent: "#ff007f", horizon: "#ffffff" }
      ];

      // Audio Engine (Web Audio API)
      let audioCtx = null;
      function getAudioCtx() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playTone(freq, type = 'sine', duration = 0.15) {
        try {
          const actx = getAudioCtx();
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
        } catch (e) {}
      }

      // Game State
      let currentLevel = parseInt(localStorage.getItem('cgr_saved_level') || '1', 10);
      let isPlaying = false;
      let playerX = 0; // -1 to 1
      let speed = 280;
      let distance = 0;
      let gatesPassed = 0;
      let targetGates = 14;
      let shields = 3;
      let gates = [];
      let keys = { left: false, right: false };

      // Build Level Select UI (Levels 1 to 45)
      for (let i = 1; i <= 45; i++) {
        const btn = document.createElement('button');
        btn.className = `lvl-btn ${i === currentLevel ? 'active' : ''}`;
        btn.textContent = i;
        btn.onclick = () => {
          document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentLevel = i;
        };
        levelSelectGrid.appendChild(btn);
      }

      function loadLevel(lvl) {
        currentLevel = Math.max(1, Math.min(45, lvl));
        localStorage.setItem('cgr_saved_level', currentLevel.toString());
        const theme = THEMES[currentLevel - 1];
        themeVal.textContent = `${currentLevel}: ${theme.name}`;
        targetGates = 12 + Math.floor(currentLevel * 0.4);
        gatesPassed = 0;
        shields = 3;
        gateVal.textContent = `0 / ${targetGates} | 🛡️🛡️🛡️`;
        speed = 260 + currentLevel * 5;
        playerX = 0;
        distance = 0;
        gates = [];
        let curZ = 800;
        for (let i = 0; i < 7; i++) {
          curZ += 500;
          gates.push({ z: curZ, lane: (Math.random() * 1.4) - 0.7, passed: false, isBonus: Math.random() > 0.4 });
        }
      }

      function startLevel() {
        getAudioCtx();
        loadLevel(currentLevel);
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playTone(523.25, 'triangle', 0.2);
      }

      function gameOver() {
        isPlaying = false;
        playTone(130, 'sawtooth', 0.4);
        menuTitle.textContent = "HULL BREACH: RUN ABORTED";
        menuDesc.textContent = `Lost all navigation shields! Cleared ${gatesPassed} gates. Align your vector precisely inside the glowing gate pylons.`;
        startBtn.textContent = 'RETRY STAGE';
        menuScreen.classList.remove('hidden');
      }

      function levelComplete() {
        isPlaying = false;
        playTone(659.25, 'sine', 0.3);
        if (currentLevel < 45) {
          menuTitle.textContent = `LEVEL ${currentLevel} CONQUERED!`;
          menuDesc.textContent = `Stellar navigation confirmed! Advancing to Level ${currentLevel + 1}: ${THEMES[currentLevel].name}.`;
          currentLevel++;
          startBtn.textContent = 'PROCEED TO NEXT THEME';
        } else {
          menuTitle.textContent = "COSMIC GRANDMASTER!";
          menuDesc.textContent = "Incredible! You have cleared all 45 unique environmental levels across the galaxy!";
          currentLevel = 1;
          startBtn.textContent = 'REPLAY ODYSSEY';
        }
        menuScreen.classList.remove('hidden');
      }

      window.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
      });
      window.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
      });
      canvas.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        playerX = (touch.clientX / width) * 2 - 1;
      }, { passive: true });

      startBtn.addEventListener('click', startLevel);

      // Animation Loop
      function loop() {
        requestAnimationFrame(loop);
        const theme = THEMES[currentLevel - 1];

        // Background / Horizon Render
        ctx.fillStyle = theme.sky;
        ctx.fillRect(0, 0, width, height);

        // Pseudo-3D Horizon Sun
        const horizonY = height * 0.45;
        const grad = ctx.createRadialGradient(width / 2, horizonY, 10, width / 2, horizonY, 120);
        grad.addColorStop(0, theme.accent);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(width / 2, horizonY, 120, 0, Math.PI * 2);
        ctx.fill();

        // 3D Perspective Road
        ctx.fillStyle = theme.road;
        ctx.beginPath();
        ctx.moveTo(width * 0.4, horizonY);
        ctx.lineTo(width * 0.6, horizonY);
        ctx.lineTo(width * 0.95, height);
        ctx.lineTo(width * 0.05, height);
        ctx.closePath();
        ctx.fill();

        // Road Borders & Grid Lines
        ctx.strokeStyle = theme.primary;
        ctx.lineWidth = 3;
        ctx.stroke();

        if (isPlaying) {
          if (keys.left) playerX -= 0.045;
          if (keys.right) playerX += 0.045;
          playerX = Math.max(-0.85, Math.min(0.85, playerX));
          distance += speed * 0.016;
          speedVal.textContent = `${Math.round(speed)} KM/H`;

          // Gates
          for (let i = gates.length - 1; i >= 0; i--) {
            const g = gates[i];
            g.z -= speed * 0.018;
            if (g.z > 0 && g.z < 1200) {
              const scale = 300 / g.z;
              const gx = width / 2 + g.lane * width * 0.45 * scale;
              const gy = horizonY + (height - horizonY) * scale;
              const gw = 120 * scale;
              const gh = 90 * scale;

              ctx.strokeStyle = g.isBonus ? theme.primary : theme.accent;
              ctx.lineWidth = 4 * scale;
              ctx.strokeRect(gx - gw / 2, gy - gh, gw, gh);

              // Collision check
              if (g.z < 80 && !g.passed) {
                g.passed = true;
                if (Math.abs(playerX - g.lane) < 0.35) {
                  gatesPassed++;
                  const shieldIcons = "🛡️".repeat(Math.max(0, shields));
                  gateVal.textContent = `${gatesPassed} / ${targetGates} | ${shieldIcons}`;
                  playTone(g.isBonus ? 880 : 520, 'triangle', 0.1);
                  if (gatesPassed >= targetGates) {
                    levelComplete();
                    return;
                  }
                } else {
                  // Missed gate penalty with shield depletion
                  shields--;
                  playTone(140, 'sawtooth', 0.18);
                  const shieldIcons = "🛡️".repeat(Math.max(0, shields));
                  gateVal.textContent = `${gatesPassed} / ${targetGates} | ${shieldIcons}`;
                  if (shields <= 0) {
                    gameOver();
                    return;
                  }
                }
              }
            }
            if (g.z <= 20) {
              gates.splice(i, 1);
            }
          }

          // Continuously spawn gates ahead until target gates cleared
          while (gates.length < 7) {
            const maxZ = gates.length > 0 ? Math.max(...gates.map(g => g.z)) : 800;
            gates.push({
              z: maxZ + 500,
              lane: (Math.random() * 1.4) - 0.7,
              passed: false,
              isBonus: Math.random() > 0.4
            });
          }
        }

        // Cockpit Steering HUD Frame
        const px = width / 2 + playerX * (width * 0.35);
        ctx.fillStyle = theme.primary;
        ctx.beginPath();
        ctx.moveTo(px, height - 90);
        ctx.lineTo(px - 35, height - 30);
        ctx.lineTo(px + 35, height - 30);
        ctx.closePath();
        ctx.fill();
      }

      loadLevel(currentLevel);
      requestAnimationFrame(loop);
    })();
