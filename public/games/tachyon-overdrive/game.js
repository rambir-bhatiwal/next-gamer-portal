/**
 * Standalone Game Engine & Canvas Renderer
 * Module: tachyon-overdrive
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * TACHYON OVERDRIVE: TEMPORAL TIME-TRIAL - 45 UNIQUE ERA THEMES
     * Features: 3-second temporal rewind ring buffer, chronological countdown,
     * reversed audio envelope synthesis, Web Audio API procedural sound.
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

      // 45 Unique Temporal Eras
      const THEMES = [
        { name: "Neo-Kyoto 2099", road: "#150926", border: "#d500f9", accent: "#00f0ff", eraTag: "2099 AD" },
        { name: "Jurassic Bioluminescence", road: "#03170e", border: "#00ff88", accent: "#38ef7d", eraTag: "150M BC" },
        { name: "Steampunk London 1888", road: "#170f05", border: "#d4a373", accent: "#bc6c25", eraTag: "1888 AD" },
        { name: "Dying Cosmos 5000", road: "#020005", border: "#9d4edd", accent: "#ff007f", eraTag: "5000 AD" },
        { name: "Cretaceous Volcanic Rift", road: "#1c0500", border: "#ff3d00", accent: "#ffaa00", eraTag: "66M BC" },
        { name: "Ancient Alexandria Digital", road: "#140f02", border: "#ffd166", accent: "#06d6a0", eraTag: "48 BC" },
        { name: "Ice Age Mammoth Tundra", road: "#02121c", border: "#64dfdf", accent: "#caf0f8", eraTag: "20K BC" },
        { name: "Cyber Renaissance Florence", road: "#170817", border: "#f72585", accent: "#7209b7", eraTag: "1504 AD" },
        { name: "Submerged Atlantis Mainframe", road: "#01121c", border: "#00b4d8", accent: "#90e0ef", eraTag: "9600 BC" },
        { name: "Industrial Revolution 1840", road: "#121212", border: "#adb5bd", accent: "#f8f9fa", eraTag: "1840 AD" },
        { name: "Viking Runestone Shore", road: "#051217", border: "#38bdf8", accent: "#a3e635", eraTag: "980 AD" },
        { name: "Atomic Age Nevada 1955", road: "#141402", border: "#eab308", accent: "#84cc16", eraTag: "1955 AD" },
        { name: "Edo Period Neon Shogunate", road: "#1c040b", border: "#ff0055", accent: "#ff5500", eraTag: "1603 AD" },
        { name: "Cambrian Explosion Deep", road: "#011c1b", border: "#1de9b6", accent: "#00b4d8", eraTag: "540M BC" },
        { name: "Babylonian Hanging Spires", road: "#1a1202", border: "#f59e0b", accent: "#fbbf24", eraTag: "600 BC" },
        { name: "Bronze Age Megalith Core", road: "#140e06", border: "#d97706", accent: "#fde047", eraTag: "2500 BC" },
        { name: "Disco Synthesizer 1984", road: "#1a0217", border: "#ff007f", accent: "#00f0ff", eraTag: "1984 AD" },
        { name: "Solar Expansion 3 Billion AD", road: "#1c0701", border: "#ff7b00", accent: "#ffea00", eraTag: "3B AD" },
        { name: "Maya Holo-Pyramid Basin", road: "#021c10", border: "#00c853", accent: "#b9f6ca", eraTag: "800 AD" },
        { name: "Triassic Dune Valley", road: "#171002", border: "#eab308", accent: "#f97316", eraTag: "230M BC" },
        { name: "Cyberpunk Berlin 2049", road: "#0a0a14", border: "#4cc9f0", accent: "#f72585", eraTag: "2049 AD" },
        { name: "Golden Age of Piracy 1715", road: "#041417", border: "#00b4d8", accent: "#facc15", eraTag: "1715 AD" },
        { name: "Roman Colosseum Vector Grid", road: "#1a0802", border: "#ef4444", accent: "#fbbf24", eraTag: "80 AD" },
        { name: "Neolithic Stone Circle", road: "#0d0d0f", border: "#94a3b8", accent: "#4ade80", eraTag: "4000 BC" },
        { name: "Space Race Orbital 1969", road: "#020814", border: "#0284c7", accent: "#ffffff", eraTag: "1969 AD" },
        { name: "Devonian Coral Basin", road: "#011714", border: "#2dd4bf", accent: "#f472b6", eraTag: "400M BC" },
        { name: "Tang Dynasty Silk Highline", road: "#1c0808", border: "#f43f5e", accent: "#facc15", eraTag: "750 AD" },
        { name: "Cold War Cyber Bunker 1977", road: "#091409", border: "#22c55e", accent: "#ef4444", eraTag: "1977 AD" },
        { name: "Proterozoic Ice Snowball", road: "#021526", border: "#38bdf8", accent: "#e0f2fe", eraTag: "700M BC" },
        { name: "Ming Dynasty Porcelain City", road: "#040e1a", border: "#3b82f6", accent: "#ffffff", eraTag: "1420 AD" },
        { name: "Belle Epoque Paris 1900", road: "#170f08", border: "#fbbf24", accent: "#f43f5e", eraTag: "1900 AD" },
        { name: "Hadean Molten Earth", road: "#1f0300", border: "#ff3300", accent: "#ffaa00", eraTag: "4.5B BC" },
        { name: "Age of Exploration 1492", road: "#01121c", border: "#0ea5e9", accent: "#facc15", eraTag: "1492 AD" },
        { name: "Silicon Valley DotCom 1999", road: "#02170c", border: "#10b981", accent: "#06b6d4", eraTag: "1999 AD" },
        { name: "Carboniferous Giant Forest", road: "#00170a", border: "#16a34a", accent: "#a3e635", eraTag: "320M BC" },
        { name: "Futurism Milan 1913", road: "#170308", border: "#e11d48", accent: "#38bdf8", eraTag: "1913 AD" },
        { name: "Permian Great Dying Rift", road: "#1a0404", border: "#dc2626", accent: "#f59e0b", eraTag: "252M BC" },
        { name: "Golden Twenties Jazz 1925", road: "#141003", border: "#facc15", accent: "#ffffff", eraTag: "1925 AD" },
        { name: "Silurian Reef Highway", road: "#011a18", border: "#14b8a6", accent: "#f472b6", eraTag: "440M BC" },
        { name: "Post-Human Era 10,000 AD", road: "#080112", border: "#8b5cf6", accent: "#00f0ff", eraTag: "10K AD" },
        { name: "Singularity Overwrite 9999 AD", road: "#020005", border: "#c084fc", accent: "#f43f5e", eraTag: "9999 AD" },
        { name: "Dark Age Abbey Sanctuary", road: "#0f0f12", border: "#94a3b8", accent: "#fbbf24", eraTag: "650 AD" },
        { name: "Neo-Alexandria Data Spire", road: "#020e17", border: "#06b6d4", accent: "#f472b6", eraTag: "2150 AD" },
        { name: "Big Bang Genesis 13.8B BC", road: "#000000", border: "#ffffff", accent: "#ffd700", eraTag: "13.8B BC" },
        { name: "Omega Point Time Zero", road: "#05000a", border: "#d500f9", accent: "#00f0ff", eraTag: "TIME OMEGA" }
      ];

      // Web Audio API
      let audioCtx = null;
      function getAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }
      function playChirp(freq, duration = 0.08) {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, actx.currentTime);
          gain.gain.setValueAtTime(0.1, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + duration);
        } catch(e) {}
      }
      function playRewindSound() {
        try {
          const actx = getAudio();
          const osc = actx.createOscillator();
          const gain = actx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(800, actx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(200, actx.currentTime + 0.06);
          gain.gain.setValueAtTime(0.12, actx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.06);
          osc.connect(gain);
          gain.connect(actx.destination);
          osc.start();
          osc.stop(actx.currentTime + 0.06);
        } catch(e) {}
      }

      // Game State
      let currentLevel = parseInt(localStorage.getItem('to_saved_level') || '1', 10);
      let isPlaying = false;
      let car = { x: 0, y: 0, vx: 0, vy: 0, angle: 0, speed: 0, maxSpeed: 7.2 };
      let keys = { left: false, right: false, up: false, down: false, rewind: false };
      let checkpoints = [];
      let currentCheck = 0;
      let timeLeft = 30.0;
      let rewindBuffer = []; // 3 seconds at 60fps = 180 frames
      let rewindEnergy = 100;
      let trackPoints = [];

      let currentLap = 1;
      const totalLaps = 2;

      function buildCircuit(lvl) {
        trackPoints = [];
        checkpoints = [];
        currentCheck = 0;
        currentLap = 1;
        const pts = 16;
        const rx = Math.min(width * 0.42, 520);
        const ry = Math.min(height * 0.38, 340);
        for (let i = 0; i < pts; i++) {
          const a = (i / pts) * Math.PI * 2;
          const wobble = Math.sin(a * 2 + lvl) * 50;
          trackPoints.push({
            x: width / 2 + Math.cos(a) * (rx + wobble),
            y: height / 2 + Math.sin(a) * (ry + wobble)
          });
        }
        for (let i = 0; i < 6; i++) {
          const idx = Math.floor(((i + 1) / 6) * trackPoints.length) % trackPoints.length;
          checkpoints.push(trackPoints[idx]);
        }
        car.x = trackPoints[0].x;
        car.y = trackPoints[0].y;
        car.angle = Math.atan2(trackPoints[1].y - trackPoints[0].y, trackPoints[1].x - trackPoints[0].x);
        car.speed = 0;
        car.vx = 0; car.vy = 0;
        timeLeft = 36.0 + Math.max(0, 8 - (lvl * 0.15));
        rewindBuffer = [];
        rewindEnergy = 100;
      }

      // Input Handlers
      window.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = true;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = true;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = true;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = true;
        if (e.key === ' ') keys.rewind = true;
      });
      window.addEventListener('keyup', e => {
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') keys.left = false;
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') keys.right = false;
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') keys.up = false;
        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') keys.down = false;
        if (e.key === ' ') keys.rewind = false;
      });

      // Touch & Rewind Button
      let touchStartX = 0;
      window.addEventListener('touchstart', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        if (t.clientY < height * 0.3) {
          keys.rewind = true;
        } else {
          touchStartX = t.clientX;
          keys.up = true;
        }
      }, { passive: true });
      window.addEventListener('touchmove', e => {
        if (!isPlaying) return;
        const t = e.touches[0];
        const dx = t.clientX - touchStartX;
        keys.left = dx < -20;
        keys.right = dx > 20;
      }, { passive: true });
      window.addEventListener('touchend', () => { keys.up = false; keys.left = false; keys.right = false; keys.rewind = false; });

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
        themeVal.textContent = `${currentLevel}: ${t.name} [${t.eraTag}]`;
        themeVal.style.color = t.border;
        timeVal.textContent = `${Math.max(0, timeLeft).toFixed(1)}s | ${Math.floor(rewindEnergy)}% REWIND`;
        checkVal.textContent = `Lap ${currentLap}/2 | Gate ${currentCheck}/6`;
      }

      function startLevel(lvl) {
        currentLevel = lvl;
        localStorage.setItem('to_saved_level', currentLevel);
        buildCircuit(currentLevel);
        updateUI();
        isPlaying = true;
        menuScreen.classList.add('hidden');
        playChirp(440, 0.2);
      }

      startBtn.addEventListener('click', () => {
        getAudio();
        startLevel(currentLevel);
      });

      function endLevel(win) {
        isPlaying = false;
        playChirp(win ? 880 : 140, 0.35);
        menuTitle.textContent = win ? "TEMPORAL HORIZON BREACHED!" : "TEMPORAL COLLAPSE";
        menuDesc.textContent = win ?
          `Time-trial complete with ${timeLeft.toFixed(1)}s remaining! Tachyon rewind preserved causal loop.` :
          `Chronometer ran out! Hold Spacebar during race to reverse temporal trajectory.`;
        startBtn.textContent = win && currentLevel < 45 ? "NEXT TEMPORAL ERA" : "RETRY LEVEL";
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

        // TACHYON REWIND MECHANISM
        if (keys.rewind && rewindEnergy > 0 && rewindBuffer.length > 0) {
          const snapshot = rewindBuffer.pop();
          car.x = snapshot.x;
          car.y = snapshot.y;
          car.angle = snapshot.angle;
          car.speed = snapshot.speed;
          currentCheck = snapshot.check;
          timeLeft += 1 / 60; // Restore clock during rewind
          rewindEnergy -= 1.0;
          playRewindSound();
          updateUI();
          return;
        }

        // Clean driving refills rewind buffer energy
        rewindEnergy = Math.min(100, rewindEnergy + 0.2);

        // Record history snapshot for past 3s (180 frames)
        rewindBuffer.push({
          x: car.x,
          y: car.y,
          angle: car.angle,
          speed: car.speed,
          check: currentCheck
        });
        if (rewindBuffer.length > 180) rewindBuffer.shift();

        timeLeft -= 1 / 60;
        if (timeLeft <= 0) {
          timeLeft = 0;
          endLevel(false);
          return;
        }

        // Car Physics
        if (keys.left) car.angle -= 0.055;
        if (keys.right) car.angle += 0.055;

        if (keys.up) {
          car.speed += 0.22;
          if (car.speed > car.maxSpeed) car.speed = car.maxSpeed;
        } else if (keys.down) {
          car.speed -= 0.3;
          if (car.speed < -2) car.speed = -2;
        } else {
          car.speed *= 0.97;
        }

        car.x += Math.cos(car.angle) * car.speed;
        car.y += Math.sin(car.angle) * car.speed;

        // Checkpoint verification
        const target = checkpoints[currentCheck];
        const dist = Math.hypot(car.x - target.x, car.y - target.y);
        if (dist < 75) {
          currentCheck++;
          timeLeft = Math.min(45, timeLeft + 3.0); // Reward clean racing with temporal boost
          playChirp(520 + currentCheck * 70, 0.1);
          if (currentCheck >= 6) {
            if (currentLap < totalLaps) {
              currentLap++;
              currentCheck = 0;
              playChirp(880, 0.2);
            } else {
              endLevel(true);
              return;
            }
          }
        }

        updateUI();
      }

      // Draw
      function draw() {
        const theme = THEMES[(currentLevel - 1) % THEMES.length];
        ctx.fillStyle = '#06020c';
        ctx.fillRect(0, 0, width, height);

        // Chromatic Glitch effect when rewinding
        if (keys.rewind && rewindEnergy > 0) {
          ctx.fillStyle = 'rgba(213, 0, 249, 0.15)';
          ctx.fillRect(0, 0, width, height);
        }

        // Draw Circuit Track Ribbon
        if (trackPoints.length > 1) {
          ctx.beginPath();
          ctx.moveTo(trackPoints[0].x, trackPoints[0].y);
          for (let i = 1; i < trackPoints.length; i++) {
            ctx.lineTo(trackPoints[i].x, trackPoints[i].y);
          }
          ctx.closePath();
          ctx.strokeStyle = theme.road;
          ctx.lineWidth = 60;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();

          // Outer Neon Border
          ctx.strokeStyle = theme.border;
          ctx.lineWidth = 3;
          ctx.shadowColor = theme.border;
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Draw Checkpoints
        for (let i = 0; i < checkpoints.length; i++) {
          const cp = checkpoints[i];
          const isNext = i === currentCheck;
          ctx.fillStyle = isNext ? theme.accent : 'rgba(255,255,255,0.15)';
          ctx.beginPath();
          ctx.arc(cp.x, cp.y, isNext ? 24 : 14, 0, Math.PI * 2);
          ctx.fill();
          if (isNext) {
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }

        // Draw Player Tachyon Racer
        ctx.save();
        ctx.translate(car.x, car.y);
        ctx.rotate(car.angle);

        // Tachyon warp trail
        if (keys.rewind && rewindEnergy > 0) {
          ctx.fillStyle = '#00f0ff';
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = 20;
          ctx.fillRect(-28, -12, 56, 24);
        }

        // Car Body
        ctx.fillStyle = '#080414';
        ctx.strokeStyle = theme.border;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-18, -10, 36, 20, 4);
        ctx.fill();
        ctx.stroke();

        // Cockpit
        ctx.fillStyle = theme.accent;
        ctx.fillRect(-4, -6, 12, 12);
        ctx.restore();

        requestAnimationFrame(() => {
          update();
          draw();
        });
      }

      // Init
      renderLevelSelector();
      buildCircuit(currentLevel);
      updateUI();
      draw();
    })();
