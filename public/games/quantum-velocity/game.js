/**
 * Standalone Game Engine & Canvas Renderer
 * Module: quantum-velocity
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * QUANTUM VELOCITY: SUB-ATOMIC GP - 45 UNIQUE PARTICLE CHAMBER THEMES
     * Features: Relativistic particle slalom, polarity inversion mechanics,
     * magnetic coil flux fields, procedural Web Audio API resonance chirps.
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

      // 45 Unique Sub-Atomic Thematic Environments
      const THEMES = [
        { name: "Hadron Ring", bg: "#02010c", flux: "#00f0ff", posColor: "#ff007f", negColor: "#00f0ff", wave: 180 },
        { name: "Quark-Gluon Plasma", bg: "#140300", flux: "#ffaa00", posColor: "#ff3300", negColor: "#ffea00", wave: 220 },
        { name: "Dark Matter Singularity", bg: "#030008", flux: "#9d4edd", posColor: "#e040fb", negColor: "#7b2cbf", wave: 140 },
        { name: "Tachyon Field", bg: "#020a14", flux: "#00e5ff", posColor: "#ff00aa", negColor: "#00ffcc", wave: 310 },
        { name: "Bose-Einstein Condensate", bg: "#01121c", flux: "#64dfdf", posColor: "#48cae4", negColor: "#caf0f8", wave: 260 },
        { name: "Higgs Boson Chamber", bg: "#0d021c", flux: "#d500f9", posColor: "#ff007f", negColor: "#00f0ff", wave: 200 },
        { name: "Muon Resonance Cavity", bg: "#011c12", flux: "#00ff88", posColor: "#ff5500", negColor: "#00ffcc", wave: 190 },
        { name: "Photon Laser Waveguide", bg: "#1c1401", flux: "#ffd166", posColor: "#ff6b6b", negColor: "#4ecdc4", wave: 280 },
        { name: "Neutrino Flux Tunnel", bg: "#090909", flux: "#adb5bd", posColor: "#f72585", negColor: "#4cc9f0", wave: 160 },
        { name: "Antimatter Trap", bg: "#17010a", flux: "#ff1744", posColor: "#ff5252", negColor: "#651fff", wave: 240 },
        { name: "Quantum Hall Nexus", bg: "#011c1b", flux: "#1de9b6", posColor: "#ffd166", negColor: "#00b4d8", wave: 210 },
        { name: "Superstring Manifold", bg: "#05021a", flux: "#3d5afe", posColor: "#ff4081", negColor: "#00e5ff", wave: 330 },
        { name: "Chiral Symmetry Rift", bg: "#1a041c", flux: "#f72585", posColor: "#7209b7", negColor: "#48cae4", wave: 175 },
        { name: "Feynman Path Integral", bg: "#081017", flux: "#48cae4", posColor: "#ff9f1c", negColor: "#2ec4b6", wave: 230 },
        { name: "Relativistic Ion Core", bg: "#1f0900", flux: "#ff6d00", posColor: "#ff3d00", negColor: "#ffab40", wave: 150 },
        { name: "Casimir Vacuum Void", bg: "#000000", flux: "#ffffff", posColor: "#ff0055", negColor: "#00ffff", wave: 120 },
        { name: "Synchrotron Arc", bg: "#021226", flux: "#2979ff", posColor: "#ff1744", negColor: "#00e5ff", wave: 290 },
        { name: "Spinor Lattice", bg: "#0f021c", flux: "#aa00ff", posColor: "#ff007f", negColor: "#00ff88", wave: 225 },
        { name: "Graviton Resonator", bg: "#080b12", flux: "#5390d9", posColor: "#e63946", negColor: "#48cae4", wave: 170 },
        { name: "Gluon Color Conduit", bg: "#1a1200", flux: "#ffd60a", posColor: "#d90429", negColor: "#00b4d8", wave: 250 },
        { name: "Cherenkov Radiation Pool", bg: "#001824", flux: "#00b4d8", posColor: "#7209b7", negColor: "#90e0ef", wave: 340 },
        { name: "Zeeman Splitting Chamber", bg: "#170217", flux: "#ff007f", posColor: "#ff5400", negColor: "#b5179e", wave: 195 },
        { name: "Planck Scale Micro-Tear", bg: "#06010d", flux: "#c77dff", posColor: "#ff0055", negColor: "#00f0ff", wave: 320 },
        { name: "Magnetar Micro-Field", bg: "#0d0221", flux: "#00f5d4", posColor: "#7b2cbf", negColor: "#3a0ca3", wave: 215 },
        { name: "Baryon Acoustic Wave", bg: "#140a02", flux: "#f4a261", posColor: "#e76f51", negColor: "#2a9d8f", wave: 185 },
        { name: "Quantum Entanglement Link", bg: "#040217", flux: "#7209b7", posColor: "#f72585", negColor: "#4cc9f0", wave: 300 },
        { name: "Positron Beam Collider", bg: "#1c040e", flux: "#e63946", posColor: "#ff758f", negColor: "#00f0ff", wave: 265 },
        { name: "Superconducting SQUID", bg: "#011a0c", flux: "#2dc653", posColor: "#ffaa00", negColor: "#80ed99", wave: 165 },
        { name: "Neutron Cross-Section", bg: "#101010", flux: "#e0e1dd", posColor: "#e63946", negColor: "#457b9d", wave: 145 },
        { name: "Top Quark Decay Cell", bg: "#1a0800", flux: "#fb8500", posColor: "#d62828", negColor: "#ffb703", wave: 245 },
        { name: "Relativistic Jet Core", bg: "#1f0514", flux: "#ff0055", posColor: "#ffaa00", negColor: "#ff007f", wave: 285 },
        { name: "Tachyon Cherenkov Field", bg: "#010e1c", flux: "#00b4d8", posColor: "#e040fb", negColor: "#00ffff", wave: 350 },
        { name: "Quantum Dot Array", bg: "#14021a", flux: "#bf55ec", posColor: "#00f0ff", negColor: "#be90d4", wave: 205 },
        { name: "Fermion Gas Trap", bg: "#021217", flux: "#48cae4", posColor: "#ff006e", negColor: "#a0e426", wave: 235 },
        { name: "Superfluid Helium Void", bg: "#011c18", flux: "#00ff87", posColor: "#60efff", negColor: "#00b4d8", wave: 275 },
        { name: "Axion Cloud Conduit", bg: "#080112", flux: "#9d4edd", posColor: "#ff007f", negColor: "#c77dff", wave: 155 },
        { name: "Spacetime Foam Ring", bg: "#020202", flux: "#651fff", posColor: "#00e5ff", negColor: "#d500f9", wave: 315 },
        { name: "Pseudoscalar Vortex", bg: "#170217", flux: "#f72585", posColor: "#3a0ca3", negColor: "#4cc9f0", wave: 295 },
        { name: "Cosmic Ray Shower", bg: "#03141f", flux: "#4cc9f0", posColor: "#f72585", negColor: "#7209b7", wave: 240 },
        { name: "Lepton Sector Grid", bg: "#011708", flux: "#00c853", posColor: "#b9f6ca", negColor: "#00f0ff", wave: 190 },
        { name: "Vector Boson Field", bg: "#1c1402", flux: "#ffd166", posColor: "#ef476f", negColor: "#06d6a0", wave: 220 },
        { name: "Color Confinement Basin", bg: "#170410", flux: "#e040fb", posColor: "#ff0055", negColor: "#00e5ff", wave: 260 },
        { name: "Hawking Radiation Horizon", bg: "#05000a", flux: "#bf55ec", posColor: "#ffffff", negColor: "#7b2cbf", wave: 340 },
        { name: "Supergravity Gateway", bg: "#0a0314", flux: "#3d5afe", posColor: "#ff4081", negColor: "#00f0ff", wave: 300 },
        { name: "Universal Singularity Chamber", bg: "#000000", flux: "#00f0ff", posColor: "#ff007f", negColor: "#ffffff", wave: 360 }
      ];

      // Procedural Audio Resonance
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playChirp(freq, duration = 0.08, type = 'sine') {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, actx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(freq * 1.5, actx.currentTime + duration);
          gain.gain.setValueAtTime(0.1, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + duration);
        } catch(e) {}
      }

      // Game Variables
      let currentLevel = parseInt(localStorage.getItem('qv_saved_level') || '1', 10);
      let isPlaying = false;
      let particleX = 0; // -1 to 1
      let polarity = 1; // +1 or -1
      let speedC = 0.92;
      let coherence = 100;
      let electrons = 0;
      let targetElectrons = 15;
      let invulnTimer = 0;
      let particles = [];
      let coils = [];
      let keys = { left: false, right: false };

      // Input Handlers
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === ' ' || e.key === 'Enter') invertPolarity();
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
      });

      // Touch & Click
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        if (t.clientY > height * 0.75) {
          invertPolarity();
        } else {
          particleX = (t.clientX / width) * 2 - 1;
        }
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        particleX = (t.clientX / width) * 2 - 1;
      }, { passive: true });

      function invertPolarity() {
        if (!isPlaying) return;
        polarity *= -1;
        updateUI();
        playChirp(polarity > 0 ? 520 : 380, 0.1, 'triangle');
      }

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
        themeVal.style.color = t.flux;
        targetElectrons = 15 + Math.floor(currentLevel * 0.4);
        speedC = (0.85 + (currentLevel * 0.003)).toFixed(3);
        speedVal.textContent = `${Math.floor(coherence)}% | ${speedC}c`;
        quotaVal.textContent = `${electrons} / ${targetElectrons} | [${polarity > 0 ? '+ CYAN' : '- MAGENTA'}]`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('qv_saved_level', currentLevel);
        particles = [];
        coils = [];
        particleX = 0;
        coherence = 100;
        electrons = 0;
        polarity = 1;
        invulnTimer = 0;
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playChirp(440, 0.2, 'sine');
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        playChirp(win ? 880 : 120, 0.35, win ? 'sine' : 'sawtooth');
        menuTitle.textContent = win ? "COHERENCE ACHIEVED!" : "QUANTUM DECOHERENCE";
        menuDesc.textContent = win ?
          `Particle successfully stabilized at ${speedC}c! Captured ${electrons} sub-atomic quantum charges.` :
          `Quantum containment rupture! Coherence reduced to zero. Realign your magnetic trajectory.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT CHAMBER" : "RETRY LEVEL";
        startBtn.onclick = () => {
          if (win && currentLevel < 45) currentLevel++;
          startLevel(currentLevel);
        };
        menuScreen.classList.remove('hidden');
        renderLevelSelector();
      }

      // Spawner - Paced for human reaction
      function spawnSubParticles() {
        if (Math.random() < 0.045) {
          const isPos = Math.random() > 0.5;
          particles.push({
            x: (Math.random() * 1.5) - 0.75,
            y: -20,
            polarity: isPos ? 1 : -1,
            radius: 8 + Math.random() * 4
          });
        }
      }

      // Update Loop
      function update() {
        if (!isPlaying) return;

        if (invulnTimer > 0) invulnTimer--;

        if (keys.left) particleX -= 0.04;
        if (keys.right) particleX += 0.04;
        if (particleX < -1) particleX = -1;
        if (particleX > 1) particleX = 1;

        spawnSubParticles();

        const theme = THEMES[(currentLevel - 1) % THEMES.length];
        const pScreenX = width / 2 + particleX * (width * 0.4);
        const pScreenY = height * 0.8;

        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.y += 4.5 + (currentLevel * 0.04);

          // Collision detection with player particle
          const px = width / 2 + p.x * (width * 0.4);
          const dist = Math.hypot(px - pScreenX, p.y - pScreenY);

          if (dist < p.radius + 18) {
            if (p.polarity === polarity) {
              // Matching polarity: absorb energy!
              electrons++;
              coherence = Math.min(100, coherence + 5);
              playChirp(600 + electrons * 15, 0.06, 'sine');
              updateUI();
              if (electrons >= targetElectrons) {
                endLevel(true);
                return;
              }
            } else {
              // Opposite polarity: collision damage with 1s invulnerability
              if (invulnTimer <= 0) {
                coherence -= 16;
                invulnTimer = 60;
                playChirp(140, 0.15, 'sawtooth');
                updateUI();
                if (coherence <= 0) {
                  coherence = 0;
                  endLevel(false);
                  return;
                }
              }
            }
            particles.splice(i, 1);
            continue;
          }

          if (p.y > height + 50) particles.splice(i, 1);
        }

        speedVal.textContent = `${Math.floor(coherence)}% | ${speedC}c`;
      }

      // Render Loop
      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = theme.bg;
        ctx.fillRect(0, 0, width, height);

        // Accelerator Ring Tunnel / Radial Lines
        ctx.strokeStyle = theme.flux;
        ctx.lineWidth = 1.5;
        const centerX = width / 2;
        const centerY = height / 2;

        // Tunnel Concentric Magnetic Rings
        for (let r = 50; r < Math.max(width, height); r += 90) {
          ctx.beginPath();
          ctx.ellipse(centerX, centerY, r, r * 0.5, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 240, 255, ${Math.max(0.05, 0.3 - r / 1200)})`;
          ctx.stroke();
        }

        // Particle Accelerator Slalom Lanes
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 2;
        for (let lane = -1; lane <= 1; lane += 0.5) {
          const lx = centerX + lane * (width * 0.4);
          ctx.beginPath();
          ctx.moveTo(lx, 0);
          ctx.lineTo(lx, height);
          ctx.stroke();
        }

        // Draw In-Flight Sub-Atomic Particles
        for (let p of particles) {
          const px = centerX + p.x * (width * 0.4);
          const col = p.polarity > 0 ? theme.posColor : theme.negColor;
          ctx.fillStyle = col;
          ctx.shadowColor = col;
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(px, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          // Charge sign indicator (+ / -)
          ctx.fillStyle = '#fff';
          ctx.font = 'bold 12px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(p.polarity > 0 ? '+' : '-', px, p.y);
          ctx.shadowBlur = 0;
        }

        // Draw Player's Charged Particle Core
        const pScreenX = centerX + particleX * (width * 0.4);
        const pScreenY = height * 0.8;
        const activeColor = polarity > 0 ? theme.posColor : theme.negColor;

        // Particle Probability Wave Rings
        ctx.strokeStyle = activeColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(pScreenX, pScreenY, 26 + Math.sin(performance.now() * 0.01) * 4, 0, Math.PI * 2);
        ctx.stroke();

        // Inner Core Glow
        ctx.fillStyle = activeColor;
        ctx.shadowColor = activeColor;
        ctx.shadowBlur = 25;
        ctx.beginPath();
        ctx.arc(pScreenX, pScreenY, 16, 0, Math.PI * 2);
        ctx.fill();

        // Polarity Symbol
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowBlur = 0;
        ctx.fillText(polarity > 0 ? '+' : '-', pScreenX, pScreenY);

        // Defensive Containment Barrier when Invulnerable
        if (invulnTimer > 0 && Math.floor(invulnTimer / 6) % 2 === 0) {
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2.5;
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 15;
          ctx.beginPath();
          ctx.arc(pScreenX, pScreenY, 34, 0, Math.PI * 2);
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
      updateUI();
      draw();
    })();
