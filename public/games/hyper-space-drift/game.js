/**
 * Standalone Game Engine & Canvas Renderer
 * Module: hyper-space-drift
 * Next Games/Game Isolated Micro-Environment
 */
/**
     * ============================================================================
     * HYPERSPACE DRIFT: ZERO-G
     * Meticulously commented standalone space shooter for Next Games/Game Portal.
     * Features: Newtonian vector physics, asteroid splitting, particle explosions,
     * Web Audio sound effects, and screen wrapping.
     * ============================================================================
     */
    (function () {
      'use strict';

      const canvas = document.getElementById('spaceCanvas');
      const ctx = canvas.getContext('2d');
      const scoreVal = document.getElementById('scoreVal');
      const livesVal = document.getElementById('livesVal');
      const highScoreVal = document.getElementById('highScoreVal');
      const overlay = document.getElementById('overlay');
      const overlayTitle = document.getElementById('overlayTitle');
      const overlayDesc = document.getElementById('overlayDesc');
      const startBtn = document.getElementById('startBtn');

      let width = window.innerWidth;
      let height = window.innerHeight;

      function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', resize);
      resize();

      // Audio Synthesis
      let audioCtx = null;
      function playTone(freq, duration, type = 'sine') {
        try {
          if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
          if (audioCtx.state === 'suspended') audioCtx.resume();
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
          gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + duration);
        } catch (e) {}
      }

      // Game States
      let isPlaying = false;
      let score = 0;
      let lives = 3;
      let highScore = parseInt(localStorage.getItem('next_games_hyperspace_hs') || '0', 10);
      highScoreVal.textContent = highScore;

      // Ship Object
      const ship = {
        x: width / 2,
        y: height / 2,
        r: 15,
        angle: -Math.PI / 2,
        rotation: 0,
        thrusting: false,
        vx: 0,
        vy: 0,
        invulnerable: 0
      };

      let lasers = [];
      let asteroids = [];
      let particles = [];
      let stars = [];

      // Generate background stars
      for (let i = 0; i < 70; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.7 + 0.3
        });
      }

      // Key Inputs
      const keys = { left: false, right: false, up: false };

      window.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
        if (e.code === 'ArrowUp' || e.code === 'KeyW') keys.up = true;
        if (e.code === 'Space') {
          e.preventDefault();
          fireLaser();
        }
      });

      window.addEventListener('keyup', (e) => {
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
        if (e.code === 'ArrowUp' || e.code === 'KeyW') keys.up = false;
      });

      function fireLaser() {
        if (!isPlaying) return;
        if (lasers.length >= 10) return;
        lasers.push({
          x: ship.x + Math.cos(ship.angle) * ship.r,
          y: ship.y + Math.sin(ship.angle) * ship.r,
          vx: Math.cos(ship.angle) * 12 + ship.vx * 0.5,
          vy: Math.sin(ship.angle) * 12 + ship.vy * 0.5,
          life: 45
        });
        playTone(784, 0.08, 'sawtooth');
      }

      function spawnAsteroid(x, y, r, tier = 3) {
        const angle = Math.random() * Math.PI * 2;
        const speed = (4 - tier) * 1.2 + Math.random();
        asteroids.push({
          x: x !== undefined ? x : Math.random() * width,
          y: y !== undefined ? y : Math.random() * height,
          r: r || 42,
          tier,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          verts: Math.floor(Math.random() * 4 + 7),
          offsets: Array.from({ length: 11 }, () => Math.random() * 0.4 + 0.8)
        });
      }

      function createExplosion(x, y, color, count = 16) {
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const spd = Math.random() * 5 + 1;
          particles.push({
            x,
            y,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            color,
            life: 1,
            size: Math.random() * 3 + 2
          });
        }
      }

      function startMission() {
        score = 0;
        lives = 3;
        scoreVal.textContent = '0';
        livesVal.textContent = '♥♥♥';
        ship.x = width / 2;
        ship.y = height / 2;
        ship.vx = 0;
        ship.vy = 0;
        ship.angle = -Math.PI / 2;
        ship.invulnerable = 120;
        lasers = [];
        asteroids = [];
        particles = [];

        // Spawn initial asteroid wave
        for (let i = 0; i < 5; i++) {
          let ax = Math.random() * width;
          let ay = Math.random() * height;
          while (Math.hypot(ax - ship.x, ay - ship.y) < 140) {
            ax = Math.random() * width;
            ay = Math.random() * height;
          }
          spawnAsteroid(ax, ay, 40, 3);
        }

        isPlaying = true;
        overlay.classList.add('hidden');
        playTone(523.25, 0.2);
      }

      function gameOver() {
        isPlaying = false;
        playTone(164.81, 0.5, 'sawtooth');
        if (score > highScore) {
          highScore = score;
          localStorage.setItem('next_games_hyperspace_hs', highScore.toString());
          highScoreVal.textContent = highScore;
        }
        overlayTitle.textContent = 'VESSEL DESTROYED';
        overlayDesc.textContent = `Hull collapsed! Final Sector Score: ${score} points. High Score: ${highScore}.`;
        startBtn.textContent = 'RELAUNCH FIGHTER';
        overlay.classList.remove('hidden');
      }

      startBtn.addEventListener('click', startMission);

      // --- Main Render & Physics Loop ---
      function loop() {
        requestAnimationFrame(loop);
        ctx.clearRect(0, 0, width, height);

        // Draw Starfield
        ctx.fillStyle = '#ffffff';
        for (let s of stars) {
          ctx.globalAlpha = s.alpha;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;

        if (isPlaying) {
          // Ship Controls & Inertia
          if (keys.left) ship.angle -= 0.07;
          if (keys.right) ship.angle += 0.07;

          if (keys.up) {
            ship.vx += Math.cos(ship.angle) * 0.22;
            ship.vy += Math.sin(ship.angle) * 0.22;
            // Thruster particle
            particles.push({
              x: ship.x - Math.cos(ship.angle) * ship.r,
              y: ship.y - Math.sin(ship.angle) * ship.r,
              vx: -Math.cos(ship.angle) * 3 + (Math.random() - 0.5) * 2,
              vy: -Math.sin(ship.angle) * 3 + (Math.random() - 0.5) * 2,
              color: '#00f0ff',
              life: 0.6,
              size: 3
            });
          }

          // Friction damping
          ship.vx *= 0.988;
          ship.vy *= 0.988;

          ship.x += ship.vx;
          ship.y += ship.vy;

          if (ship.invulnerable > 0) ship.invulnerable--;

          // Screen Wrap Ship
          if (ship.x < 0) ship.x = width;
          else if (ship.x > width) ship.x = 0;
          if (ship.y < 0) ship.y = height;
          else if (ship.y > height) ship.y = 0;

          // Lasers Update
          for (let i = lasers.length - 1; i >= 0; i--) {
            const l = lasers[i];
            l.x += l.vx;
            l.y += l.vy;
            l.life--;

            if (l.x < 0) l.x = width;
            else if (l.x > width) l.x = 0;
            if (l.y < 0) l.y = height;
            else if (l.y > height) l.y = 0;

            if (l.life <= 0) {
              lasers.splice(i, 1);
            }
          }

          // Asteroids Update & Collision with Lasers & Ship
          for (let i = asteroids.length - 1; i >= 0; i--) {
            const a = asteroids[i];
            a.x += a.vx;
            a.y += a.vy;

            if (a.x < -a.r) a.x = width + a.r;
            else if (a.x > width + a.r) a.x = -a.r;
            if (a.y < -a.r) a.y = height + a.r;
            else if (a.y > height + a.r) a.y = -a.r;

            // Laser vs Asteroid
            for (let j = lasers.length - 1; j >= 0; j--) {
              const l = lasers[j];
              const dist = Math.hypot(l.x - a.x, l.y - a.y);
              if (dist < a.r) {
                createExplosion(a.x, a.y, a.tier === 3 ? '#00f0ff' : '#ff007f', 18);
                playTone(280 + a.tier * 80, 0.15);
                score += (4 - a.tier) * 100;
                scoreVal.textContent = score;

                // Split
                if (a.tier > 1) {
                  spawnAsteroid(a.x, a.y, a.r * 0.6, a.tier - 1);
                  spawnAsteroid(a.x, a.y, a.r * 0.6, a.tier - 1);
                }

                asteroids.splice(i, 1);
                lasers.splice(j, 1);
                break;
              }
            }

            // Ship vs Asteroid Collision
            if (isPlaying && ship.invulnerable <= 0) {
              const shipDist = Math.hypot(ship.x - a.x, ship.y - a.y);
              if (shipDist < a.r + ship.r) {
                createExplosion(ship.x, ship.y, '#ff007f', 24);
                playTone(180, 0.3, 'sawtooth');
                lives--;
                livesVal.textContent = '♥'.repeat(lives) || 'NONE';
                ship.invulnerable = 120;
                ship.vx = 0;
                ship.vy = 0;

                if (lives <= 0) {
                  gameOver();
                  return;
                }
              }
            }
          }

          // Respawn wave if cleared
          if (asteroids.length === 0) {
            for (let i = 0; i < 6; i++) {
              spawnAsteroid(undefined, undefined, 42, 3);
            }
          }
        }

        // --- Render Lasers ---
        ctx.fillStyle = '#00f0ff';
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 10;
        for (let l of lasers) {
          ctx.beginPath();
          ctx.arc(l.x, l.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;

        // --- Render Asteroids ---
        for (let a of asteroids) {
          ctx.strokeStyle = a.tier === 3 ? '#00f0ff' : a.tier === 2 ? '#ff007f' : '#00ff88';
          ctx.shadowColor = ctx.strokeStyle;
          ctx.shadowBlur = 8;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          for (let k = 0; k < a.verts; k++) {
            const angle = (k / a.verts) * Math.PI * 2;
            const r = a.r * a.offsets[k];
            const px = a.x + Math.cos(angle) * r;
            const py = a.y + Math.sin(angle) * r;
            if (k === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // --- Render Ship ---
        if (isPlaying) {
          if (ship.invulnerable % 8 < 4) {
            ctx.save();
            ctx.translate(ship.x, ship.y);
            ctx.rotate(ship.angle);

            ctx.strokeStyle = '#ffffff';
            ctx.shadowColor = '#00f0ff';
            ctx.shadowBlur = 14;
            ctx.lineWidth = 2;
            ctx.fillStyle = '#0a1428';

            ctx.beginPath();
            ctx.moveTo(ship.r, 0);
            ctx.lineTo(-ship.r * 0.8, -ship.r * 0.7);
            ctx.lineTo(-ship.r * 0.4, 0);
            ctx.lineTo(-ship.r * 0.8, ship.r * 0.7);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Cockpit
            ctx.fillStyle = '#00f0ff';
            ctx.beginPath();
            ctx.arc(0, 0, 3.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
            ctx.shadowBlur = 0;
          }
        }

        // --- Render Particles ---
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.03;
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life;
          ctx.fillRect(p.x, p.y, p.size, p.size);
          ctx.globalAlpha = 1.0;
        }
      }

      requestAnimationFrame(loop);
    })();
