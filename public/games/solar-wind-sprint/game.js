/**
 * Standalone Game Engine & Canvas Renderer
 * Module: solar-wind-sprint
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * SOLAR WIND SPRINT: ASTEROID SLALOM - 45 UNIQUE STELLAR BIOMES
     * Features: Photonic sail trimming physics, asteroid slalom gates,
     * solar flare particle storms, Web Audio API ambient resonance.
     */
    (function() {
      'use strict';
      const canvas = document.getElementById('gameCanvas');
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

      // 45 Unique Stellar Biomes
      const THEMES = [
        { name: "Yellow Dwarf Orbit", bg: "#04020a", starColor: "#ffd700", flareColor: "#ff9100", gateColor: "#00f0ff", windSpeed: 840 },
        { name: "Blue Supergiant Flare", bg: "#01081a", starColor: "#00b4d8", flareColor: "#90e0ef", gateColor: "#ffffff", windSpeed: 960 },
        { name: "Red Giant Nebular Dust", bg: "#140105", starColor: "#ff3366", flareColor: "#ff5400", gateColor: "#ffd700", windSpeed: 780 },
        { name: "Pulsar Magnetosphere", bg: "#0a0117", starColor: "#b5179e", flareColor: "#7209b7", gateColor: "#00ff88", windSpeed: 1050 },
        { name: "Binary Star Lagrangian", bg: "#120800", starColor: "#ffaa00", flareColor: "#ff4400", gateColor: "#00ffff", windSpeed: 880 },
        { name: "White Dwarf Corona", bg: "#030308", starColor: "#e0f2fe", flareColor: "#7dd3fc", gateColor: "#f43f5e", windSpeed: 920 },
        { name: "Wolf-Rayet Stellar Wind", bg: "#17020e", starColor: "#e11d48", flareColor: "#fb7185", gateColor: "#38bdf8", windSpeed: 1100 },
        { name: "Magnetar Shockwave", bg: "#060012", starColor: "#8b5cf6", flareColor: "#c084fc", gateColor: "#34d399", windSpeed: 1150 },
        { name: "Neutron Star Synchrotron", bg: "#020c14", starColor: "#06b6d4", flareColor: "#67e8f9", gateColor: "#facc15", windSpeed: 1020 },
        { name: "Protostellar Accretion Disk", bg: "#140b02", starColor: "#f59e0b", flareColor: "#d97706", gateColor: "#22d3ee", windSpeed: 800 },
        { name: "Oort Cloud Periphery", bg: "#020308", starColor: "#94a3b8", flareColor: "#cbd5e1", gateColor: "#a855f7", windSpeed: 750 },
        { name: "Gamma Ray Jet Corridor", bg: "#141400", starColor: "#eab308", flareColor: "#84cc16", gateColor: "#ec4899", windSpeed: 1200 },
        { name: "Heliosheath Barrier", bg: "#010b14", starColor: "#0284c7", flareColor: "#38bdf8", gateColor: "#4ade80", windSpeed: 860 },
        { name: "T-Tauri Flare System", bg: "#170500", starColor: "#ea580c", flareColor: "#f97316", gateColor: "#06b6d4", windSpeed: 890 },
        { name: "Carbon Star Soot Veil", bg: "#0f0505", starColor: "#dc2626", flareColor: "#ef4444", gateColor: "#fcd34d", windSpeed: 770 },
        { name: "Subdwarf B Flash Zone", bg: "#040c17", starColor: "#38bdf8", flareColor: "#bae6fd", gateColor: "#f43f5e", windSpeed: 980 },
        { name: "Cepheid Variable Pulse", bg: "#100214", starColor: "#d946ef", flareColor: "#f0abfc", gateColor: "#2dd4bf", windSpeed: 910 },
        { name: "Supernova Remnant Shell", bg: "#1a040b", starColor: "#f43f5e", flareColor: "#fb7185", gateColor: "#a3e635", windSpeed: 1080 },
        { name: "Quasar Relativistic Beam", bg: "#14001c", starColor: "#a855f7", flareColor: "#c084fc", gateColor: "#38bdf8", windSpeed: 1250 },
        { name: "Black Hole Ergosphere", bg: "#020005", starColor: "#6366f1", flareColor: "#818cf8", gateColor: "#facc15", windSpeed: 1300 },
        { name: "Bioluminescent Stellar Nursery", bg: "#01140e", starColor: "#10b981", flareColor: "#34d399", gateColor: "#f472b6", windSpeed: 820 },
        { name: "Magnetic Reconnection Loop", bg: "#170a00", starColor: "#f97316", flareColor: "#fb923c", gateColor: "#22d3ee", windSpeed: 940 },
        { name: "Interstellar Ribbon", bg: "#040b17", starColor: "#0ea5e9", flareColor: "#7dd3fc", gateColor: "#fbbf24", windSpeed: 850 },
        { name: "Stellar Wind Bubble", bg: "#0c0417", starColor: "#c084fc", flareColor: "#e879f9", gateColor: "#34d399", windSpeed: 930 },
        { name: "Silicon Vapor Star", bg: "#141001", starColor: "#eab308", flareColor: "#facc15", gateColor: "#38bdf8", windSpeed: 870 },
        { name: "Hypervelocity Star Wake", bg: "#1a0208", starColor: "#e11d48", flareColor: "#f43f5e", gateColor: "#a7f3d0", windSpeed: 1350 },
        { name: "Circumbinary Gas Torus", bg: "#0f0801", starColor: "#f59e0b", flareColor: "#fbbf24", gateColor: "#818cf8", windSpeed: 810 },
        { name: "Flare Star Active Zone", bg: "#1a0300", starColor: "#ef4444", flareColor: "#f87171", gateColor: "#2dd4bf", windSpeed: 970 },
        { name: "Diamond Exoplanet Orbit", bg: "#03121a", starColor: "#06b6d4", flareColor: "#a5f3fc", gateColor: "#f472b6", windSpeed: 890 },
        { name: "Iron Hail Corona", bg: "#0a0a0f", starColor: "#94a3b8", flareColor: "#cbd5e1", gateColor: "#f87171", windSpeed: 790 },
        { name: "Helium Flash Remnant", bg: "#170f00", starColor: "#facc15", flareColor: "#fde047", gateColor: "#38bdf8", windSpeed: 1010 },
        { name: "Cosmic String Gravity Well", bg: "#020214", starColor: "#4f46e5", flareColor: "#818cf8", gateColor: "#ec4899", windSpeed: 1180 },
        { name: "Dark Nebula Cavity", bg: "#030008", starColor: "#7c3aed", flareColor: "#a78bfa", gateColor: "#4ade80", windSpeed: 760 },
        { name: "Krypton Atmosphere Spill", bg: "#011712", starColor: "#059669", flareColor: "#34d399", gateColor: "#38bdf8", windSpeed: 830 },
        { name: "Methanogen Comet Cloud", bg: "#00141a", starColor: "#0891b2", flareColor: "#22d3ee", gateColor: "#facc15", windSpeed: 800 },
        { name: "Tachyon Solar Jet", bg: "#0d0117", starColor: "#c026d3", flareColor: "#e879f9", gateColor: "#22d3ee", windSpeed: 1400 },
        { name: "Gamma Burst Remnant", bg: "#141402", starColor: "#ca8a04", flareColor: "#eab308", gateColor: "#a855f7", windSpeed: 1120 },
        { name: "Vaporwave Pastel Solar Field", bg: "#17051a", starColor: "#f472b6", flareColor: "#fbcfe8", gateColor: "#38bdf8", windSpeed: 870 },
        { name: "Prismatic Aurora Nexus", bg: "#001715", starColor: "#14b8a6", flareColor: "#5eead4", gateColor: "#f43f5e", windSpeed: 950 },
        { name: "Supermassive Core Outflow", bg: "#14000a", starColor: "#be185d", flareColor: "#f472b6", gateColor: "#fde047", windSpeed: 1220 },
        { name: "Heliosphere Terminus", bg: "#010e1c", starColor: "#0284c7", flareColor: "#38bdf8", gateColor: "#4ade80", windSpeed: 890 },
        { name: "Chrono-Stasis Orbit", bg: "#0d021c", starColor: "#9333ea", flareColor: "#c084fc", gateColor: "#f43f5e", windSpeed: 910 },
        { name: "Starlight Cathedral System", bg: "#17011f", starColor: "#d946ef", flareColor: "#f472b6", gateColor: "#facc15", windSpeed: 940 },
        { name: "Singularity Horizon Flare", bg: "#020005", starColor: "#6366f1", flareColor: "#a5b4fc", gateColor: "#38bdf8", windSpeed: 1320 },
        { name: "Omega Point Solar Apex", bg: "#000000", starColor: "#ffffff", flareColor: "#ffd700", gateColor: "#ff007f", windSpeed: 1500 }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playChime(freq, type = 'sine', duration = 0.1) {
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
      let currentLevel = parseInt(localStorage.getItem('sws_saved_level') || '1', 10);
      let isPlaying = false;
      let craftX = 0; // -1 to 1
      let sailAngle = 0;
      let gatesCleared = 0;
      let targetGates = 15;
      let multiplier = 1.0;
      let shields = 3;
      let invulnerableTimer = 0;
      let gates = [];
      let asteroids = [];
      let windParticles = [];
      let keys = { left: false, right: false, boost: false };

      // Input Listeners
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

      // Touch Controls
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        craftX = (t.clientX / width) * 2 - 1;
        keys.boost = true;
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        craftX = (t.clientX / width) * 2 - 1;
      }, { passive: true });
      window.addEventListener('touchend', () => { keys.boost = false; });

      // Spawn Elements - Paced for fair human reaction (250-400ms)
      function spawnElements() {
        if (Math.random() < 0.032) {
          gates.push({
            x: (Math.random() * 1.4) - 0.7,
            y: -40,
            width: 100
          });
        }
        if (Math.random() < 0.02) {
          asteroids.push({
            x: (Math.random() * 1.6) - 0.8,
            y: -30,
            radius: 12 + Math.random() * 10
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
        themeVal.style.color = t.starColor;
        targetGates = 14 + Math.floor(currentLevel * 0.4);
        speedVal.textContent = `${Math.floor(t.windSpeed * (keys.boost ? 1.4 : 1.0))} KM/S (x${multiplier.toFixed(1)})`;
        const shieldIcons = "🛡️".repeat(Math.max(0, shields));
        gateVal.textContent = `${gatesCleared} / ${targetGates} | ${shieldIcons}`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('sws_saved_level', currentLevel);
        gates = [];
        asteroids = [];
        craftX = 0;
        sailAngle = 0;
        gatesCleared = 0;
        multiplier = 1.0;
        shields = 3;
        invulnerableTimer = 0;
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playChime(440, 'triangle', 0.2);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        playChime(win ? 880 : 160, win ? 'sine' : 'sawtooth', 0.35);
        menuTitle.textContent = win ? "SOLAR BOUNDARY CLEARED!" : "ASTEROID COLLISION";
        menuDesc.textContent = win ?
          `Photonic sail cleared all ${gatesCleared} slalom gates! Stellar wind speed: ${THEMES[(currentLevel - 1) % THEMES.length].windSpeed} KM/S.` :
          `Craft hull shattered on an asteroid fragment! Keep your sail trimmed within the gate pylons.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT STAR SYSTEM" : "RETRY LEVEL";
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

        if (invulnerableTimer > 0) invulnerableTimer--;

        if (keys.left) { craftX -= 0.035; sailAngle = -0.3; }
        else if (keys.right) { craftX += 0.035; sailAngle = 0.3; }
        else { sailAngle *= 0.8; }

        if (craftX < -1) craftX = -1;
        if (craftX > 1) craftX = 1;

        spawnElements();

        const theme = THEMES[(currentLevel - 1) % THEMES.length];
        const fallSpeed = (keys.boost ? 7.5 : 5.0) + (currentLevel * 0.035);

        // Wind particles
        if (windParticles.length < 50) {
          windParticles.push({
            x: Math.random() * width,
            y: -10,
            speed: fallSpeed * (1.2 + Math.random() * 0.8)
          });
        }
        for (let i = windParticles.length - 1; i >= 0; i--) {
          windParticles[i].y += windParticles[i].speed;
          if (windParticles[i].y > height + 20) windParticles.splice(i, 1);
        }

        const craftScreenX = width / 2 + craftX * (width * 0.4);
        const craftScreenY = height * 0.8;

        // Update Slalom Gates
        for (let i = gates.length - 1; i >= 0; i--) {
          const g = gates[i];
          g.y += fallSpeed;

          // Check if craft passed through gate
          if (g.y > craftScreenY - 15 && g.y < craftScreenY + 25) {
            const gx = width / 2 + g.x * (width * 0.4);
            if (Math.abs(craftScreenX - gx) < g.width / 2) {
              if (!g.scored) {
                g.scored = true;
                gatesCleared++;
                multiplier += 0.1;
                playChime(580 + (gatesCleared % 8) * 60, 'sine', 0.1);
                updateUI();
                if (gatesCleared >= targetGates) {
                  endLevel(true);
                  return;
                }
              }
            }
          }

          if (g.y > height + 50) gates.splice(i, 1);
        }

        // Update Asteroids with 3-Shield invulnerability system
        for (let i = asteroids.length - 1; i >= 0; i--) {
          const a = asteroids[i];
          a.y += fallSpeed;

          const ax = width / 2 + a.x * (width * 0.4);
          const dist = Math.hypot(ax - craftScreenX, a.y - craftScreenY);
          if (dist < a.radius + 18) {
            if (invulnerableTimer <= 0) {
              shields--;
              invulnerableTimer = 90; // 1.5s invulnerability grace
              playChime(140, 'sawtooth', 0.25);
              updateUI();
              if (shields <= 0) {
                endLevel(false);
                return;
              }
            }
            asteroids.splice(i, 1);
            continue;
          }

          if (a.y > height + 50) asteroids.splice(i, 1);
        }

        speedVal.textContent = `${Math.floor(theme.windSpeed * (keys.boost ? 1.4 : 1.0))} KM/S (x${multiplier.toFixed(1)})`;
      }

      // Draw
      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = theme.bg;
        ctx.fillRect(0, 0, width, height);

        // Giant Star on top horizon
        const starGrad = ctx.createRadialGradient(width / 2, 0, 10, width / 2, 0, Math.min(width, height) * 0.7);
        starGrad.addColorStop(0, theme.starColor);
        starGrad.addColorStop(0.3, theme.flareColor);
        starGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = starGrad;
        ctx.fillRect(0, 0, width, height * 0.6);

        // Stellar Wind Streamlines
        ctx.strokeStyle = `rgba(255, 255, 255, 0.25)`;
        ctx.lineWidth = 1;
        for (let wp of windParticles) {
          ctx.beginPath();
          ctx.moveTo(wp.x, wp.y);
          ctx.lineTo(wp.x, wp.y + 24);
          ctx.stroke();
        }

        // Slalom Track Corridor Guidelines
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width / 2 - width * 0.45, 0); ctx.lineTo(width / 2 - width * 0.45, height);
        ctx.moveTo(width / 2 + width * 0.45, 0); ctx.lineTo(width / 2 + width * 0.45, height);
        ctx.stroke();

        // Draw Slalom Gates
        for (let g of gates) {
          const gx = width / 2 + g.x * (width * 0.4);
          const leftPylon = gx - g.width / 2;
          const rightPylon = gx + g.width / 2;

          // Connecting laser wire
          ctx.strokeStyle = g.scored ? '#00ff88' : theme.gateColor;
          ctx.lineWidth = 3;
          ctx.shadowColor = ctx.strokeStyle;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.moveTo(leftPylon, g.y);
          ctx.lineTo(rightPylon, g.y);
          ctx.stroke();

          // Pylons
          ctx.fillStyle = '#fff';
          ctx.beginPath();
          ctx.arc(leftPylon, g.y, 6, 0, Math.PI * 2);
          ctx.arc(rightPylon, g.y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw Asteroids
        for (let a of asteroids) {
          const ax = width / 2 + a.x * (width * 0.4);
          ctx.fillStyle = '#3a3a44';
          ctx.strokeStyle = '#5a5a66';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(ax, a.y, a.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }

        // Draw Solar Sail Craft
        const craftScreenX = width / 2 + craftX * (width * 0.4);
        const craftScreenY = height * 0.8;

        ctx.save();
        ctx.translate(craftScreenX, craftScreenY);
        ctx.rotate(sailAngle);

        // Glowing Photon Sail (Diamond/Hexagon)
        ctx.fillStyle = `rgba(255, 215, 0, ${keys.boost ? 0.85 : 0.6})`;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.shadowColor = theme.starColor;
        ctx.shadowBlur = 20;

        ctx.beginPath();
        ctx.moveTo(0, -32);
        ctx.lineTo(28, 0);
        ctx.lineTo(0, 16);
        ctx.lineTo(-28, 0);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Craft Capsule Core
        ctx.fillStyle = '#0a0518';
        ctx.strokeStyle = theme.gateColor;
        // Defensive Shield Aura during Invulnerability
        if (invulnerableTimer > 0) {
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.85)';
          ctx.lineWidth = 2.5;
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(0, 0, 36, 0, Math.PI * 2);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

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
