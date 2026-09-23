/**
 * Standalone Game Engine & Canvas Renderer
 * Module: graviton-loop
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * GRAVITON LOOP: ORBITAL ROLLER - 45 UNIQUE PIPE CONDUIT THEMES
     * Features: 360-degree circumference tunnel perspective, rotating laser gates,
     * sub-bass thruster audio synthesis, Web Audio API procedural sound.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
      const ctx = canvas.getContext('2d');
      const themeVal = document.getElementById('themeVal');
      const speedVal = document.getElementById('speedVal');
      const quotaVal = document.getElementById('quotaVal');
      const menuScreen = document.getElementById('menuScreen');
      const menuTitle = document.getElementById('menuTitle');
      const menuDesc = document.getElementById('menuDesc');
      const startBtn = document.getElementById('startBtn');
      const levelSelectGrid = document.getElementById('levelSelectGrid');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;
      window.addEventListener('resize', () => { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; });

      // 45 Unique Pipeline Thematic Environments
      const THEMES = [
        { name: "Clear Glass Stellar View", pipeWall: "#09031c", ringColor: "#c77dff", laserColor: "#ff007f", orbColor: "#00f0ff", bgStar: "#ffffff" },
        { name: "Hydroponic Moss Pipe", pipeWall: "#021a0f", ringColor: "#00ff88", laserColor: "#ffaa00", orbColor: "#38ef7d", bgStar: "#69f0ae" },
        { name: "Geothermal Magma Conduit", pipeWall: "#1f0500", ringColor: "#ff4400", laserColor: "#ffea00", orbColor: "#ff9100", bgStar: "#ff6600" },
        { name: "Cryogenic Nitrogen Tube", pipeWall: "#011221", ringColor: "#00b4d8", laserColor: "#caf0f8", orbColor: "#48cae4", bgStar: "#90e0ef" },
        { name: "Tachyon Super-Conducting Loop", pipeWall: "#0a011a", ringColor: "#d500f9", laserColor: "#00f0ff", orbColor: "#ff007f", bgStar: "#e040fb" },
        { name: "Titanium Asteroid Siphon", pipeWall: "#141414", ringColor: "#adb5bd", laserColor: "#ff0055", orbColor: "#f8f9fa", bgStar: "#e0e1dd" },
        { name: "Solar Wind Vacuum Duct", pipeWall: "#1c1401", ringColor: "#ffd166", laserColor: "#ff6b6b", orbColor: "#ffea00", bgStar: "#ffe082" },
        { name: "Bioluminescent Coral Siphon", pipeWall: "#011a18", ringColor: "#1de9b6", laserColor: "#ff4081", orbColor: "#64ffda", bgStar: "#00b4d8" },
        { name: "Antimatter Containment Tube", pipeWall: "#0f0017", ringColor: "#9d4edd", laserColor: "#ff1744", orbColor: "#7b2cbf", bgStar: "#c77dff" },
        { name: "Singularity Core Drainage", pipeWall: "#030008", ringColor: "#651fff", laserColor: "#00e5ff", orbColor: "#ffffff", bgStar: "#3c096c" },
        { name: "Acid Slag Discharge Loop", pipeWall: "#141701", ringColor: "#ccff00", laserColor: "#ff5500", orbColor: "#70e000", bgStar: "#e9ff70" },
        { name: "Atmospheric Cloud Tunnel", pipeWall: "#06152b", ringColor: "#66b3ff", laserColor: "#ff80bf", orbColor: "#caf0f8", bgStar: "#ffffff" },
        { name: "Cobalt Foundry Conduit", pipeWall: "#010e24", ringColor: "#0077b6", laserColor: "#00ffff", orbColor: "#90e0ef", bgStar: "#2979ff" },
        { name: "Dark Energy Monolith Siphon", pipeWall: "#000000", ringColor: "#7b2cbf", laserColor: "#00f0ff", orbColor: "#ff007f", bgStar: "#48cae4" },
        { name: "Prismatic Aurora Pipe", pipeWall: "#001a16", ringColor: "#48cae4", laserColor: "#a0e426", orbColor: "#80ed99", bgStar: "#00ff87" },
        { name: "Radioactive Coolant Loop", pipeWall: "#0f1700", ringColor: "#aacc00", laserColor: "#ff3d00", orbColor: "#ffff3f", bgStar: "#70e000" },
        { name: "Pulsar Magnetosphere Ring", pipeWall: "#170217", ringColor: "#ff006e", laserColor: "#8338ec", orbColor: "#3a86ff", bgStar: "#ff5400" },
        { name: "Copper Steam Boiler Pipe", pipeWall: "#1c0d02", ringColor: "#d4a373", laserColor: "#bc6c25", orbColor: "#dda15e", bgStar: "#faedcd" },
        { name: "Zero-G Crystal Siphon", pipeWall: "#03141f", ringColor: "#00f5d4", laserColor: "#7b2cbf", orbColor: "#4cc9f0", bgStar: "#cbf3f0" },
        { name: "Krypton Gas Arterial", pipeWall: "#011c16", ringColor: "#00ff87", laserColor: "#60efff", orbColor: "#00b4d8", bgStar: "#64ffda" },
        { name: "Hyper-Space Warp Shunt", pipeWall: "#09001f", ringColor: "#ff007f", laserColor: "#00f0ff", orbColor: "#7000ff", bgStar: "#ff4081" },
        { name: "Crimson Eclipse Conduit", pipeWall: "#1c0000", ringColor: "#ff1744", laserColor: "#ff8a80", orbColor: "#ff5252", bgStar: "#ff8a80" },
        { name: "Bismuth Hexagonal Siphon", pipeWall: "#140021", ringColor: "#e040fb", laserColor: "#00e676", orbColor: "#651fff", bgStar: "#ea80fc" },
        { name: "Thermal Steam Shaft", pipeWall: "#141414", ringColor: "#ff6d00", laserColor: "#ffab40", orbColor: "#ffd180", bgStar: "#ff9100" },
        { name: "Exoplanet Bio-Root Tube", pipeWall: "#001a0e", ringColor: "#00c853", laserColor: "#b9f6ca", orbColor: "#69f0ae", bgStar: "#2dc653" },
        { name: "Tachyon Mirror Conduit", pipeWall: "#0a001a", ringColor: "#d500f9", laserColor: "#00b0ff", orbColor: "#e040fb", bgStar: "#d500f9" },
        { name: "Gamma Burst Funnel", pipeWall: "#1c1c01", ringColor: "#ffff00", laserColor: "#76ff03", orbColor: "#ffff8d", bgStar: "#ccff00" },
        { name: "Vaporwave Neon Aqueduct", pipeWall: "#210d24", ringColor: "#ff80bf", laserColor: "#80dfff", orbColor: "#ffc2d1", bgStar: "#f72585" },
        { name: "Quasar Relativistic Vent", pipeWall: "#1c0514", ringColor: "#ff0055", laserColor: "#ffaa00", orbColor: "#ff5400", bgStar: "#ffd60a" },
        { name: "Heliosphere Magnetic Line", pipeWall: "#001026", ringColor: "#2979ff", laserColor: "#00e5ff", orbColor: "#82b1ff", bgStar: "#00b4d8" },
        { name: "Synthetic Coral Tube", pipeWall: "#001c19", ringColor: "#1de9b6", laserColor: "#00b4d8", orbColor: "#a7ffeb", bgStar: "#48cae4" },
        { name: "Chrono-Stasis Duct", pipeWall: "#12031c", ringColor: "#e040fb", laserColor: "#7c4dff", orbColor: "#b388ff", bgStar: "#9d4edd" },
        { name: "Cosmic String Conduit", pipeWall: "#040417", ringColor: "#3d5afe", laserColor: "#ff4081", orbColor: "#8c9eff", bgStar: "#3a0ca3" },
        { name: "Omega Point Singularity Loop", pipeWall: "#0a0014", ringColor: "#00f0ff", laserColor: "#ff007f", orbColor: "#ffffff", bgStar: "#ff007f" },
        { name: "Hadron Collision Pipeline", pipeWall: "#02010c", ringColor: "#00f0ff", laserColor: "#ff007f", orbColor: "#7928ca", bgStar: "#00ffff" },
        { name: "Superfluid Void Shunt", pipeWall: "#011717", ringColor: "#20b2aa", laserColor: "#48d1cc", orbColor: "#00ffff", bgStar: "#80cbc4" },
        { name: "Silicon Nanite Artery", pipeWall: "#1a1600", ringColor: "#ffd700", laserColor: "#ffa500", orbColor: "#ffe082", bgStar: "#ffd60a" },
        { name: "Neutron Core Siphon", pipeWall: "#0d0221", ringColor: "#00f5d4", laserColor: "#7b2cbf", orbColor: "#3a0ca3", bgStar: "#70e000" },
        { name: "Holographic Ruins Duct", pipeWall: "#001710", ringColor: "#38b000", laserColor: "#70e000", orbColor: "#b5e48c", bgStar: "#00ff88" },
        { name: "Dark Nebula Slipstream", pipeWall: "#05000a", ringColor: "#bf55ec", laserColor: "#be90d4", orbColor: "#9b5de5", bgStar: "#d500f9" },
        { name: "Obsidian Core Channel", pipeWall: "#0a0a0a", ringColor: "#ff0055", laserColor: "#ff5500", orbColor: "#ff1744", bgStar: "#ff8a80" },
        { name: "Atmospheric Skyway Loop", pipeWall: "#061a33", ringColor: "#66b3ff", laserColor: "#cce6ff", orbColor: "#ffffff", bgStar: "#caf0f8" },
        { name: "Supernova Dust Pipeline", pipeWall: "#1f030d", ringColor: "#ff3366", laserColor: "#ff99aa", orbColor: "#ff0055", bgStar: "#ff758f" },
        { name: "Singularity Event Duct", pipeWall: "#020005", ringColor: "#9d4edd", laserColor: "#c77dff", orbColor: "#ffffff", bgStar: "#e0aaff" },
        { name: "Ascendant Celestial Conduit", pipeWall: "#0a0214", ringColor: "#ffd700", laserColor: "#00f0ff", orbColor: "#ff007f", bgStar: "#ffffff" }
      ];

      // Procedural Audio Engine
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.1) {
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
      let currentLevel = parseInt(localStorage.getItem('gl_saved_level') || '1', 10);
      let isPlaying = false;
      let angle = 0; // Pod angle on circumference
      let speed = 520;
      let hull = 100;
      let invulnTimer = 0;
      let distance = 0;
      let targetDist = 2000;
      let orbsCollected = 0;
      let barriers = [];
      let orbs = [];
      let keys = { left: false, right: false, boost: false };

      // Input Handlers
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w') keys.boost = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
        if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w') keys.boost = false;
      });

      // Touch & Drag Controls
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        const cx = width / 2;
        const cy = height / 2;
        angle = Math.atan2(t.clientY - cy, t.clientX - cx);
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        const cx = width / 2;
        const cy = height / 2;
        angle = Math.atan2(t.clientY - cy, t.clientX - cx);
      }, { passive: true });

      // Spawn Elements in Depth (Z-space from 1000 down to 0)
      function spawnElements() {
        if (Math.random() < 0.04) {
          barriers.push({
            angle: Math.random() * Math.PI * 2,
            span: 1.0 + Math.random() * 0.8,
            z: 1000
          });
        }
        if (Math.random() < 0.05) {
          orbs.push({
            angle: Math.random() * Math.PI * 2,
            z: 1000
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
        themeVal.style.color = t.ringColor;
        targetDist = 1800 + currentLevel * 100;
        speedVal.textContent = `${Math.floor(hull)}% | ${Math.floor(speed)} KM/H`;
        quotaVal.textContent = `${Math.floor(distance)} / ${targetDist}M | ${orbsCollected} Orbs`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('gl_saved_level', currentLevel);
        barriers = [];
        orbs = [];
        hull = 100;
        distance = 0;
        orbsCollected = 0;
        angle = Math.PI / 2;
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playTone(320, 'sine', 0.2, 0.15);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        playTone(win ? 784 : 110, 'sawtooth', 0.35, 0.2);
        menuTitle.textContent = win ? "CONDUIT CLEARED!" : "HULL BREACH DETECTED";
        menuDesc.textContent = win ?
          `Reached orbital terminal! Distance: ${Math.floor(distance)}M. Collected ${orbsCollected} plasma orbs.` :
          `Laser collision destroyed pod hull integrity! Maintain 360-degree rotation clearance.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT CONDUIT" : "RETRY LEVEL";
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

        const rotSpeed = 0.05;
        if (keys.left) angle -= rotSpeed;
        if (keys.right) angle += rotSpeed;

        speed = keys.boost ? 700 : 520;
        distance += 0.65; // ~30-40 seconds of gameplay to clear sector

        if (distance >= targetDist) {
          endLevel(true);
          return;
        }

        spawnElements();

        if (invulnTimer > 0) invulnTimer--;

        // Update Barriers (fair human reaction speed)
        for (let i = barriers.length - 1; i >= 0; i--) {
          const b = barriers[i];
          b.z -= speed * 0.015;

          // Check hit
          if (b.z < 60 && b.z > 0) {
            let diff = Math.abs(angle - b.angle);
            while (diff > Math.PI) diff = Math.abs(diff - Math.PI * 2);
            if (diff < b.span / 2) {
              if (invulnTimer <= 0) {
                hull -= 20;
                invulnTimer = 60; // 1s invulnerability grace
                playTone(120, 'sawtooth', 0.15, 0.2);
                if (hull <= 0) {
                  hull = 0;
                  endLevel(false);
                  return;
                }
              }
              barriers.splice(i, 1);
              continue;
            }
          }
          if (b.z <= 0) barriers.splice(i, 1);
        }

        // Update Orbs
        for (let i = orbs.length - 1; i >= 0; i--) {
          const o = orbs[i];
          o.z -= speed * 0.015;
          if (o.z < 60 && o.z > 0) {
            let diff = Math.abs(angle - o.angle);
            while (diff > Math.PI) diff = Math.abs(diff - Math.PI * 2);
            if (diff < 0.35) {
              orbsCollected++;
              hull = Math.min(100, hull + 8);
              playTone(600 + (orbsCollected % 8) * 60, 'sine', 0.08, 0.15);
              orbs.splice(i, 1);
              continue;
            }
          }
          if (o.z <= 0) orbs.splice(i, 1);
        }

        updateUI();
      }

      // Draw
      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = theme.pipeWall;
        ctx.fillRect(0, 0, width, height);

        const cx = width / 2;
        const cy = height / 2;
        const maxRadius = Math.min(width, height) * 0.44;

        // Concentric depth rings of the pipe
        const rings = 14;
        for (let i = rings; i >= 1; i--) {
          const zNorm = i / rings;
          const r = maxRadius * Math.pow(zNorm, 1.8);
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = theme.ringColor;
          ctx.lineWidth = 1 + zNorm * 2;
          ctx.stroke();
        }

        // Radial pipe seam ribs
        for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(a) * (maxRadius * 0.15), cy + Math.sin(a) * (maxRadius * 0.15));
          ctx.lineTo(cx + Math.cos(a) * maxRadius, cy + Math.sin(a) * maxRadius);
          ctx.strokeStyle = 'rgba(255,255,255,0.08)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Draw Barriers
        for (let b of barriers) {
          const zNorm = 1 - (b.z / 1000);
          if (zNorm <= 0) continue;
          const r = maxRadius * Math.pow(zNorm, 1.8);

          ctx.beginPath();
          ctx.arc(cx, cy, r, b.angle - b.span / 2, b.angle + b.span / 2);
          ctx.strokeStyle = theme.laserColor;
          ctx.lineWidth = 6 * zNorm + 2;
          ctx.shadowColor = theme.laserColor;
          ctx.shadowBlur = 15;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Draw Energy Orbs
        for (let o of orbs) {
          const zNorm = 1 - (o.z / 1000);
          if (zNorm <= 0) continue;
          const r = maxRadius * Math.pow(zNorm, 1.8);
          const ox = cx + Math.cos(o.angle) * r;
          const oy = cy + Math.sin(o.angle) * r;

          ctx.fillStyle = theme.orbColor;
          ctx.shadowColor = theme.orbColor;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(ox, oy, 8 * zNorm + 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw Player Mag-Lev Pod on Circumference
        const podX = cx + Math.cos(angle) * maxRadius;
        const podY = cy + Math.sin(angle) * maxRadius;

        ctx.save();
        ctx.translate(podX, podY);
        ctx.rotate(angle + Math.PI / 2);

        // Thruster glow
        ctx.fillStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 18;
        ctx.fillRect(-12, 12, 24, 8);

        // Pod body
        ctx.fillStyle = '#0a0314';
        ctx.strokeStyle = theme.ringColor;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(-16, -12, 32, 24, 6);
        ctx.fill();
        ctx.stroke();

        // Cockpit
        ctx.fillStyle = theme.orbColor;
        ctx.fillRect(-6, -6, 12, 12);
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
