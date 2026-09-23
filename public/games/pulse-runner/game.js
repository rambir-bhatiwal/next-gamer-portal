(() => {
  const THEMES = [
  { id: 1, name: "Neon Cyber-Grid", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Bioluminescent Crystal Cave", bg: "#02120e", primary: "#00ffcc", secondary: "#0099ff", accent: "#76ff03", text: "#e0f2f1" },
  { id: 3, name: "Molten Core", bg: "#160303", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 4, name: "Clockwork Sky-Fortress", bg: "#120e06", primary: "#ffd700", secondary: "#d4af37", accent: "#ff8c00", text: "#fff8e1" },
  { id: 5, name: "Quantum Void", bg: "#05010d", primary: "#b388ff", secondary: "#7c4dff", accent: "#ea80fc", text: "#ede7f6" },
  { id: 6, name: "Submerged Hydro-Lab", bg: "#010e1a", primary: "#00b0ff", secondary: "#00e5ff", accent: "#1de9b6", text: "#e1f5fe" },
  { id: 7, name: "Solar Flare Wasteland", bg: "#170a01", primary: "#ff6d00", secondary: "#ffab00", accent: "#ffd600", text: "#fff3e0" },
  { id: 8, name: "Emerald Nanite Spire", bg: "#021609", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 9, name: "Frozen Cryo-Tundra", bg: "#02121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 10, name: "Gravity Inversion Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 11, name: "Dark Matter Singularity", bg: "#030308", primary: "#7986cb", secondary: "#3f51b5", accent: "#ff4081", text: "#e8eaf6" },
  { id: 12, name: "Antimatter Reactor", bg: "#14010e", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 13, name: "Prismatic Aurora", bg: "#011210", primary: "#1de9b6", secondary: "#00bfa5", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 14, name: "Tachyon Warp Conduit", bg: "#0e0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 15, name: "Supernova Nebula", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 16, name: "Silicon Wafer Cleanroom", bg: "#081014", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 17, name: "Vaporwave Sunset Highway", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 18, name: "Radioactive Fallout Vault", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 19, name: "Obsidian Hex Matrix", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 20, name: "Cyber-Gothic Cathedral", bg: "#0d020d", primary: "#ea80fc", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 21, name: "Plasma Discharge Canal", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 22, name: "Golden Asteroid Belt", bg: "#141103", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fffde7" },
  { id: 23, name: "Krypton Laser Array", bg: "#011409", primary: "#00e676", secondary: "#1de9b6", accent: "#ff007f", text: "#e8f5e9" },
  { id: 24, name: "Acid Rain Megacity", bg: "#070c0c", primary: "#64ffda", secondary: "#1de9b6", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 25, name: "Cobalt Deep Subnet", bg: "#01071c", primary: "#2979ff", secondary: "#2962ff", accent: "#00e5ff", text: "#e3f2fd" },
  { id: 26, name: "Crimson Sector 9", bg: "#1c0206", primary: "#ff1744", secondary: "#f50057", accent: "#ff9100", text: "#ffebee" },
  { id: 27, name: "Galactic Star Forge", bg: "#0b051c", primary: "#7c4dff", secondary: "#651fff", accent: "#ffd600", text: "#ede7f6" },
  { id: 28, name: "Hyper-Space Monolith", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ff4081", text: "#e1f5fe" },
  { id: 29, name: "Bio-Synthetic Jungle", bg: "#02170a", primary: "#00c853", secondary: "#64dd17", accent: "#ffea00", text: "#e8f5e9" },
  { id: 30, name: "Volcanic Basalt Shelf", bg: "#170404", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 31, name: "Starlight Ionosphere", bg: "#06091c", primary: "#448aff", secondary: "#2979ff", accent: "#e040fb", text: "#e8eaf6" },
  { id: 32, name: "Amber CRT Mainframe", bg: "#140a00", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffd600", text: "#fff8e1" },
  { id: 33, name: "Phosphor Terminal 1978", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 34, name: "Titanium Orbital Dock", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 35, name: "Superconductor Loop", bg: "#03101c", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ff4081", text: "#e1f5fe" },
  { id: 36, name: "Magnetic Flux Funnel", bg: "#10031c", primary: "#b388ff", secondary: "#7c4dff", accent: "#00e676", text: "#ede7f6" },
  { id: 37, name: "Photon Wave Chamber", bg: "#021217", primary: "#18ffff", secondary: "#00e5ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 38, name: "Neutron Star Horizon", bg: "#0c0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 39, name: "Helios Solar Sail", bg: "#170c01", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 40, name: "Cryo-Containment Ring", bg: "#01121a", primary: "#80d8ff", secondary: "#0091ea", accent: "#69f0ae", text: "#e1f5fe" },
  { id: 41, name: "Cyber-Zen Sanctuary", bg: "#080210", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 42, name: "Nanoscale Bio-Chip", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 43, name: "Dark Energy Singularity", bg: "#020208", primary: "#5c6bc0", secondary: "#3949ab", accent: "#ff1744", text: "#e8eaf6" },
  { id: 44, name: "Tesseract Hyperspace", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 45, name: "Quantum Singularity Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const distVal = document.getElementById('distVal');
  const shieldVal = document.getElementById('shieldVal');
  const comboVal = document.getElementById('comboVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const jumpBtn = document.getElementById('jumpBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  const player = {
    x: 100,
    y: 350,
    vy: 0,
    w: 26,
    h: 36,
    isGrounded: false,
    jumpCount: 0,
    maxJumps: 2,
    shields: 3,
    invulnTimer: 0,
    combo: 1,
    score: 0
  };

  const GRAVITY = 0.55;
  const JUMP_FORCE = -11.5;
  let bpm = 120;
  let courseDistance = 0;
  const TARGET_DISTANCE = 1000;
  let scrollSpeed = 4.2;

  let platforms = [];
  let obstacles = [];
  let rhythmRings = [];
  let floatingTexts = [];
  let eqBars = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    // Init audio visualizer bars
    eqBars = [];
    const count = 32;
    for (let i = 0; i < count; i++) {
      eqBars.push({ h: 10, targetH: 10 });
    }
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => {
        loadLevel(i);
        overlay.style.display = 'none';
        startGame();
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    bpm = 110 + Math.min(65, (lvl - 1) * 1.5);
    themeVal.textContent = Math.round(bpm) + 'BPM: ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    scrollSpeed = 3.8 + (lvl * 0.04);
    courseDistance = 0;

    player.x = 100;
    player.y = 350;
    player.vy = 0;
    player.shields = 3;
    player.invulnTimer = 90; // invulnerability grace timer on spawn
    player.combo = 1;
    player.score = 0;
    player.jumpCount = 0;

    // Build procedural track platforms
    platforms = [];
    obstacles = [];
    rhythmRings = [];
    floatingTexts = [];

    // Continuous starting runway
    platforms.push({ x: 0, y: 400, w: 800, h: 60 });

    // Procedurally seed platforms and rhythm gates up to target distance
    let currentX = 800;
    const seed = lvl * 31;
    while (currentX < 4500) {
      const gap = 120 + ((seed + currentX) % 130);
      const platW = 280 + ((seed * 3 + currentX) % 200);
      const platY = 320 + ((seed + currentX * 7) % 120);

      currentX += gap;
      platforms.push({ x: currentX, y: platY, w: platW, h: 60 });

      // Add rhythm ring on platform
      rhythmRings.push({
        x: currentX + platW * 0.4,
        y: platY - 45,
        radius: 18,
        collected: false
      });

      // Add obstacle (spike or laser gate)
      if (Math.random() > 0.35) {
        obstacles.push({
          x: currentX + platW * 0.75,
          y: platY - 24,
          w: 20,
          h: 24,
          type: 'spike'
        });
      }

      currentX += platW;
    }

    window.soundFX.setBPM(bpm);
    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    distVal.textContent = Math.min(TARGET_DISTANCE, Math.floor(courseDistance)) + ' / ' + TARGET_DISTANCE + 'm';
    shieldVal.textContent = player.shields + ' SHIELDS';
    shieldVal.style.color = player.shields > 1 ? '#00ff88' : '#ff3d00';
    comboVal.textContent = 'x' + player.combo + ' COMBO (' + player.score + ' PTS)';
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
    window.soundFX.startBeatTrack();
  }

  function doJump() {
    if (!isPlaying || isGameOver || isVictory) return;
    if (player.isGrounded || player.jumpCount < player.maxJumps) {
      player.vy = JUMP_FORCE;
      player.isGrounded = false;
      player.jumpCount++;
      window.soundFX.playJump();
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
      e.preventDefault();
      doJump();
    }
  });

  jumpBtn.onclick = () => doJump();
  startBtn.onclick = () => {
    overlay.style.display = 'none';
    loadLevel(currentLevel);
    startGame();
  };
  restartBtn.onclick = () => {
    loadLevel(currentLevel);
    startGame();
  };
  nextBtn.onclick = () => {
    loadLevel(currentLevel < 45 ? currentLevel + 1 : 1);
    startGame();
  };
  levelSelectBtn.onclick = () => {
    overlay.style.display = 'flex';
    isPlaying = false;
    window.soundFX.stopBeatTrack();
  };

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Progress distance
    courseDistance += (scrollSpeed / 60) * 13;
    if (courseDistance >= TARGET_DISTANCE) {
      isVictory = true;
      window.soundFX.playClear();
      window.soundFX.stopBeatTrack();
      overlayTitle.textContent = "TRACK " + currentLevel + " MASTERED!";
      overlayDesc.textContent = "Flawless rhythm sprint across " + activeTheme.name + "! Final Score: " + player.score;
      nextBtn.style.display = 'inline-block';
      overlay.style.display = 'flex';
      return;
    }

    // Move world left
    platforms.forEach(p => p.x -= scrollSpeed);
    obstacles.forEach(o => o.x -= scrollSpeed);
    rhythmRings.forEach(r => r.x -= scrollSpeed);

    // Apply player physics
    player.vy += GRAVITY;
    player.y += player.vy;

    // Platform collision
    player.isGrounded = false;
    platforms.forEach(p => {
      if (player.x + player.w > p.x && player.x < p.x + p.w) {
        if (player.y + player.h >= p.y && player.y + player.h <= p.y + p.h + player.vy + 4 && player.vy >= 0) {
          player.y = p.y - player.h;
          player.vy = 0;
          player.isGrounded = true;
          player.jumpCount = 0;
        }
      }
    });

    // Pit fall check (buffer reset instead of instant loss)
    if (player.y > 600) {
      player.shields--;
      player.invulnTimer = 90; // invulnerable grace period
      window.soundFX.playHit();
      if (player.shields <= 0) {
        isGameOver = true;
        window.soundFX.stopBeatTrack();
        overlayTitle.textContent = "TRACK DESYNC";
        overlayDesc.textContent = "Fell into the sonic void. Practice the jump cadence and retry!";
        overlay.style.display = 'flex';
        return;
      } else {
        // Respawn on nearest platform
        const nextPlat = platforms.find(p => p.x + p.w > player.x) || platforms[0];
        player.y = nextPlat.y - player.h - 10;
        player.vy = 0;
        player.combo = 1;
      }
    }

    // Check Obstacles
    obstacles.forEach(obs => {
      if (player.x + player.w > obs.x && player.x < obs.x + obs.w &&
          player.y + player.h > obs.y && player.y < obs.y + obs.h) {
        if (player.invulnTimer <= 0) {
          player.shields--;
          player.invulnTimer = 75; // invulnerable grace
          player.combo = 1;
          window.soundFX.playHit();
          floatingTexts.push({ x: player.x, y: player.y - 20, text: "MISS!", color: "#ff1744", life: 1 });
          if (player.shields <= 0) {
            isGameOver = true;
            window.soundFX.stopBeatTrack();
            overlayTitle.textContent = "SYNTH MATRIX OVERLOAD";
            overlayDesc.textContent = "Struck acoustic spikes too many times. Retry the rhythm course!";
            overlay.style.display = 'flex';
          }
        }
      }
    });

    // Check Rhythm Rings
    rhythmRings.forEach(ring => {
      if (!ring.collected) {
        const rx = ring.x;
        const ry = ring.y;
        const dist = Math.hypot((player.x + player.w / 2) - rx, (player.y + player.h / 2) - ry);
        if (dist < ring.radius + 15) {
          ring.collected = true;
          player.combo++;
          player.score += 200 * player.combo;
          window.soundFX.playBeatBonus();
          floatingTexts.push({ x: rx, y: ry - 20, text: "PERFECT! x" + player.combo, color: activeTheme.accent, life: 1 });
        }
      }
    });

    // Update floating texts
    for (let i = floatingTexts.length - 1; i >= 0; i--) {
      const ft = floatingTexts[i];
      ft.y -= 1.2;
      ft.life -= 0.025;
      if (ft.life <= 0) floatingTexts.splice(i, 1);
    }

    // Update equalizer visualizer bars
    eqBars.forEach((bar, idx) => {
      if (Math.random() < 0.15) {
        bar.targetH = 20 + Math.random() * 120;
      }
      bar.h += (bar.targetH - bar.h) * 0.2;
    });

    updateHUD();
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render Procedural Sound Equalizer in Background
    ctx.save();
    const barW = canvas.width / eqBars.length;
    eqBars.forEach((bar, i) => {
      ctx.fillStyle = activeTheme.primary + '22';
      ctx.fillRect(i * barW + 2, canvas.height - bar.h - 80, barW - 4, bar.h);
      ctx.fillStyle = activeTheme.accent + '44';
      ctx.fillRect(i * barW + 2, canvas.height - bar.h - 84, barW - 4, 3);
    });
    ctx.restore();

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 550;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Platforms
    platforms.forEach(p => {
      ctx.fillStyle = '#0e1428';
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = activeTheme.primary;
      ctx.lineWidth = 3;
      ctx.strokeRect(p.x, p.y, p.w, p.h);

      // Top neon neon line
      ctx.fillStyle = activeTheme.primary;
      ctx.shadowColor = activeTheme.primary;
      ctx.shadowBlur = 10;
      ctx.fillRect(p.x, p.y, p.w, 4);
      ctx.shadowBlur = 0;
    });

    // Draw Obstacles
    obstacles.forEach(o => {
      ctx.fillStyle = '#ff1744';
      ctx.beginPath();
      ctx.moveTo(o.x, o.y + o.h);
      ctx.lineTo(o.x + o.w / 2, o.y);
      ctx.lineTo(o.x + o.w, o.y + o.h);
      ctx.fill();
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Draw Rhythm Rings
    rhythmRings.forEach(r => {
      if (!r.collected) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = activeTheme.accent;
        ctx.lineWidth = 4;
        ctx.shadowColor = activeTheme.accent;
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
        ctx.restore();
      }
    });

    // Draw Floating Texts
    floatingTexts.forEach(ft => {
      ctx.save();
      ctx.globalAlpha = ft.life;
      ctx.fillStyle = ft.color;
      ctx.font = 'bold 16px monospace';
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    });

    // Draw Player
    ctx.save();
    ctx.translate(player.x, player.y);
    if (player.invulnTimer > 0 && Math.floor(player.invulnTimer / 6) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    // Runner body
    ctx.fillStyle = activeTheme.secondary;
    ctx.shadowColor = activeTheme.secondary;
    ctx.shadowBlur = 12;
    ctx.fillRect(0, 0, player.w, player.h);

    // Visor
    ctx.fillStyle = '#fff';
    ctx.fillRect(player.w - 10, 6, 8, 6);

    // Shield outline
    if (player.shields > 1) {
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.strokeRect(-4, -4, player.w + 8, player.h + 8);
    }
    ctx.restore();

    ctx.restore(); // scale
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  initLevelSelect();
  loadLevel(1);
  loop();
})();