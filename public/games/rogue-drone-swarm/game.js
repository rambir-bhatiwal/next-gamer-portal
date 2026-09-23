const THEMES = [
  {
    "id": 1,
    "name": "Stage 1: Scrap City Gateway",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 2,
    "name": "Stage 2: Salt Flat Bazaar",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 3,
    "name": "Stage 3: Oasis Outpost",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 4,
    "name": "Stage 4: Bunker 101 Market",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 5,
    "name": "Stage 5: Rust Valley Depot",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  },
  {
    "id": 6,
    "name": "Stage 6: Radioactive Crater Post",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 7,
    "name": "Stage 7: Solar Ridge Station",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 8,
    "name": "Stage 8: Derelict Highway Camp",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 9,
    "name": "Stage 9: Toxic River Crossing",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 10,
    "name": "Stage 10: Ironclad Citadel",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  },
  {
    "id": 11,
    "name": "Stage 11: Dustbowl Trading Hub",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 12,
    "name": "Stage 12: Silo Alpha Exchange",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 13,
    "name": "Stage 13: Ashfall Nomad Market",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 14,
    "name": "Stage 14: Canyon Wind Camp",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 15,
    "name": "Stage 15: Geothermal Vent Settlement",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  },
  {
    "id": 16,
    "name": "Stage 16: Scavenger Junk Ridge",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 17,
    "name": "Stage 17: Neon Oasis Haven",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 18,
    "name": "Stage 18: Subway Ruins Den",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 19,
    "name": "Stage 19: Radar Tower Outpost",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 20,
    "name": "Stage 20: Old World Mall Ruins",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  },
  {
    "id": 21,
    "name": "Stage 21: Copper Mine Colony",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 22,
    "name": "Stage 22: Pipeline Junction Camp",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 23,
    "name": "Stage 23: Guzzler Gas Haven",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 24,
    "name": "Stage 24: Irradiated Forest Edge",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 25,
    "name": "Stage 25: Dry Lakebed Camp",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  },
  {
    "id": 26,
    "name": "Stage 26: Obsidian Quarry Exchange",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 27,
    "name": "Stage 27: Thunder Peak Fort",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 28,
    "name": "Stage 28: Chemical Basin Camp",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 29,
    "name": "Stage 29: Forgotten Runway Depot",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 30,
    "name": "Stage 30: Monorail Terminal Haven",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  },
  {
    "id": 31,
    "name": "Stage 31: Titanium Scraps Depot",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 32,
    "name": "Stage 32: Underground Sump Bazaar",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 33,
    "name": "Stage 33: Red Rock Encampment",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 34,
    "name": "Stage 34: Glass Desert Trading Post",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 35,
    "name": "Stage 35: Sulphur Spring Settlement",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  },
  {
    "id": 36,
    "name": "Stage 36: Barren Plateau Outpost",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 37,
    "name": "Stage 37: Wind Turbine Citadel",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 38,
    "name": "Stage 38: Submerged Freeway Camp",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 39,
    "name": "Stage 39: Vault 42 Market",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 40,
    "name": "Stage 40: Crater Rim Station",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  },
  {
    "id": 41,
    "name": "Stage 41: Dust Devil Trading Caravan",
    "bg": "#140a04",
    "primary": "#ffb300",
    "secondary": "#ff3d00",
    "accent": "#00e5ff"
  },
  {
    "id": 42,
    "name": "Stage 42: Spire Lookout Settlement",
    "bg": "#06130b",
    "primary": "#00e676",
    "secondary": "#00e5ff",
    "accent": "#ffd600"
  },
  {
    "id": 43,
    "name": "Stage 43: Boneyard Vehicle Exchange",
    "bg": "#16030c",
    "primary": "#ff0055",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 44,
    "name": "Stage 44: Apex Wastes Trading Hub",
    "bg": "#0e0524",
    "primary": "#ffd600",
    "secondary": "#7c4dff",
    "accent": "#00f0ff"
  },
  {
    "id": 45,
    "name": "Stage 45: Century Promised Land Oasis",
    "bg": "#030d1a",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#39ff14"
  }
];

(function() {
  const canvas = document.getElementById('droneCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const hullDisplay = document.getElementById('hullDisplay');
  const modDisplay = document.getElementById('modDisplay');
  const scrapDisplay = document.getElementById('scrapDisplay');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentSector = 1;
  let scrapCount = 0;

  let player = {
    x: 300, y: 210,
    speed: 3.5,
    hull: 100, maxHull: 100,
    modules: 1, // 1 to 4 attached module weapons
    invulnTimer: 0
  };

  let bullets = [];
  let enemies = [];
  let scraps = [];
  let particles = [];
  let keys = {};

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentSector ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadSector(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadSector(num) {
    currentSector = Math.max(1, Math.min(45, num));
    const theme = THEMES[currentSector - 1];

    levelDisplay.textContent = `${currentSector}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    player.x = 300;
    player.y = 210;
    player.hull = 100;
    player.modules = 1 + Math.floor(currentSector / 15);
    player.invulnTimer = 60; // 1s spawn grace

    bullets = [];
    enemies = [];
    scraps = [];

    const eCount = 6 + Math.floor(currentSector / 4);
    for (let i = 0; i < eCount; i++) {
      enemies.push({
        x: Math.random() * 540 + 30,
        y: Math.random() < 0.5 ? 40 : 380,
        hp: 20 + currentSector * 4,
        maxHp: 20 + currentSector * 4,
        speed: 1.0 + Math.random() * 0.5,
        isBoss: i === 0 && currentSector % 5 === 0
      });
    }

    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    hullDisplay.textContent = `${Math.max(0, player.hull)}/${player.maxHull}`;
    modDisplay.textContent = `${player.modules}/4`;
    scrapDisplay.textContent = scrapCount;
  }

  function fireWeapon() {
    window.audio.playShot();
    bullets.push({ x: player.x, y: player.y - 15, vx: 0, vy: -7 });
    if (player.modules >= 2) bullets.push({ x: player.x, y: player.y + 15, vx: 0, vy: 7 });
    if (player.modules >= 3) bullets.push({ x: player.x - 15, y: player.y, vx: -7, vy: 0 });
    if (player.modules >= 4) bullets.push({ x: player.x + 15, y: player.y, vx: 7, vy: 0 });
  }

  function showOverlay(title, msg, btnAction) {
    overlayTitle.textContent = title;
    overlayMessage.textContent = msg;
    overlayBtn.onclick = btnAction;
    gameOverlay.classList.remove('hidden');
  }

  function addParticles(x, y, color) {
    for (let i = 0; i < 10; i++) {
      particles.push({
        x: x, y: y,
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        color: color,
        life: 20
      });
    }
  }

  function update() {
    if (keys['ArrowUp'] || keys['w'] || keys['W']) player.y -= player.speed;
    if (keys['ArrowDown'] || keys['s'] || keys['S']) player.y += player.speed;
    if (keys['ArrowLeft'] || keys['a'] || keys['A']) player.x -= player.speed;
    if (keys['ArrowRight'] || keys['d'] || keys['D']) player.x += player.speed;

    player.x = Math.max(20, Math.min(580, player.x));
    player.y = Math.max(20, Math.min(400, player.y));

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      b.x += b.vx;
      b.y += b.vy;

      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j];
        if (Math.hypot(b.x - e.x, b.y - e.y) < (e.isBoss ? 24 : 16)) {
          e.hp -= 20;
          bullets.splice(i, 1);
          addParticles(e.x, e.y, '#00e676');

          if (e.hp <= 0) {
            window.audio.playHit();
            scraps.push({ x: e.x, y: e.y });
            enemies.splice(j, 1);
            addParticles(e.x, e.y, '#ffd600');

            if (enemies.length === 0) {
              window.audio.playSnap();
              if (currentSector >= 45) {
                showOverlay("SWARM MATRIX DOMINATED!", "Core drone achieved Apex Form across all 45 sectors!", () => {
                  loadSector(1);
                  gameOverlay.classList.add('hidden');
                });
              } else {
                showOverlay("SECTOR HARVEST COMPLETE!", `Proceeding to Sector ${currentSector + 1}...`, () => {
                  loadSector(currentSector + 1);
                  gameOverlay.classList.add('hidden');
                });
              }
            }
          }
          break;
        }
      }

      if (b && (b.x < 0 || b.x > 600 || b.y < 0 || b.y > 420)) bullets.splice(i, 1);
    }

    // Update scraps
    for (let i = scraps.length - 1; i >= 0; i--) {
      const sc = scraps[i];
      if (Math.hypot(player.x - sc.x, player.y - sc.y) < 26) {
        scraps.splice(i, 1);
        scrapCount += 5;
        if (player.modules < 4 && scrapCount >= player.modules * 15) {
          player.modules++;
          window.audio.playSnap();
        }
        updateHud();
      }
    }

    // Update enemies
    enemies.forEach(e => {
      const angle = Math.atan2(player.y - e.y, player.x - e.x);
      e.x += Math.cos(angle) * e.speed;
      e.y += Math.sin(angle) * e.speed;

      if (Math.hypot(player.x - e.x, player.y - e.y) < 22 && player.invulnTimer <= 0) {
        player.hull -= 18;
        player.invulnTimer = 35; // 0.6s grace
        window.audio.playHit();
        addParticles(player.x, player.y, '#ff0055');
        updateHud();

        if (player.hull <= 0) {
          showOverlay("DRONE DISMANTLED", "Re-synthesizing core frame...", () => {
            loadSector(currentSector);
            gameOverlay.classList.add('hidden');
          });
        }
      }
    });
  }

  function render() {
    update();
    const theme = THEMES[currentSector - 1];

    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Bullets
    ctx.fillStyle = '#00e676';
    bullets.forEach(b => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Scraps
    scraps.forEach(sc => {
      ctx.fillStyle = '#ffd600';
      ctx.fillRect(sc.x - 4, sc.y - 4, 8, 8);
    });

    // Enemies
    enemies.forEach(e => {
      ctx.fillStyle = e.isBoss ? '#ffd600' : '#ff0055';
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.isBoss ? 20 : 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Player Drone Core
    ctx.fillStyle = player.invulnTimer > 0 && Math.floor(player.invulnTimer / 4) % 2 === 0 ? 'rgba(0, 230, 118, 0.4)' : '#00e676';
    ctx.beginPath();
    ctx.arc(player.x, player.y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Module Arms
    ctx.fillStyle = '#00e5ff';
    if (player.modules >= 2) ctx.fillRect(player.x - 4, player.y + 14, 8, 10);
    if (player.modules >= 3) ctx.fillRect(player.x - 24, player.y - 4, 10, 8);
    if (player.modules >= 4) ctx.fillRect(player.x + 14, player.y - 4, 10, 8);

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 3, 3);
      if (p.life <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(render);
  }

  window.addEventListener('keydown', e => {
    keys[e.key] = true;
    if (e.key === ' ' || e.key === 'Spacebar') fireWeapon();
  });
  window.addEventListener('keyup', e => {
    keys[e.key] = false;
  });

  document.getElementById('btnUp').onmousedown = () => keys['ArrowUp'] = true;
  document.getElementById('btnUp').onmouseup = () => keys['ArrowUp'] = false;
  document.getElementById('btnDown').onmousedown = () => keys['ArrowDown'] = true;
  document.getElementById('btnDown').onmouseup = () => keys['ArrowDown'] = false;
  document.getElementById('btnLeft').onmousedown = () => keys['ArrowLeft'] = true;
  document.getElementById('btnLeft').onmouseup = () => keys['ArrowLeft'] = false;
  document.getElementById('btnRight').onmousedown = () => keys['ArrowRight'] = true;
  document.getElementById('btnRight').onmouseup = () => keys['ArrowRight'] = false;
  document.getElementById('btnFire').onclick = fireWeapon;

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadSector(1);
  requestAnimationFrame(render);
})();