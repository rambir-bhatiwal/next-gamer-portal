const THEMES = [
  {
    "id": 1,
    "name": "Floor 1: Guest Network Corridor",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 2,
    "name": "Floor 2: Encrypted Storage Vault",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 3,
    "name": "Floor 3: Overclocked Reactor Floor",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 4,
    "name": "Floor 4: Sub-Zero Nitrogen Core",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 5,
    "name": "Floor 5: Quantum Core Sanctum",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 6,
    "name": "Floor 6: Silicon Labyrinth",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 7,
    "name": "Floor 7: Hologram Projection Bay",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 8,
    "name": "Floor 8: Bio-Nanite Research Lab",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 9,
    "name": "Floor 9: Deep Archive Catacombs",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  },
  {
    "id": 10,
    "name": "Floor 10: Neural Mesh Foundry",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 11,
    "name": "Floor 11: Orbital Uplink Spire",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 12,
    "name": "Floor 12: Plasma Exhaust Conduits",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 13,
    "name": "Floor 13: Mainframe Power Grid",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 14,
    "name": "Floor 14: Cryptographic Cipher Depths",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 15,
    "name": "Floor 15: Autonomous Assembly Plant",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 16,
    "name": "Floor 16: Black Market Data Haven",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 17,
    "name": "Floor 17: Firewall Defense Citadel",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 18,
    "name": "Floor 18: Void Matrix Abyss",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  },
  {
    "id": 19,
    "name": "Floor 19: Synthesizer Soundstage",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 20,
    "name": "Floor 20: Optical Fiber Nexus",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 21,
    "name": "Floor 21: Robotic Maintenance Yard",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 22,
    "name": "Floor 22: Tachyon Accelerator Ring",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 23,
    "name": "Floor 23: Cybernetic Hospital Ward",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 24,
    "name": "Floor 24: Subterranean Server Vault",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 25,
    "name": "Floor 25: Corporate Executive Penthouse",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 26,
    "name": "Floor 26: Solar Arrays Outpost",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 27,
    "name": "Floor 27: Gravity Distortion Chamber",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  },
  {
    "id": 28,
    "name": "Floor 28: Hydraulic Sump Sector",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 29,
    "name": "Floor 29: Graphene Lattice Foundry",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 30,
    "name": "Floor 30: Memory Leak Wasteland",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 31,
    "name": "Floor 31: Electromagnetic Shield Hub",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 32,
    "name": "Floor 32: Dark Fiber Underpass",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 33,
    "name": "Floor 33: Cryo-Stasis Chamber",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 34,
    "name": "Floor 34: Laser Beam Crossroad",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 35,
    "name": "Floor 35: Algorithmic Trading Floor",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 36,
    "name": "Floor 36: Superconductor Core",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  },
  {
    "id": 37,
    "name": "Floor 37: Nanotech Swarm Hive",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 38,
    "name": "Floor 38: High-Voltage Relay Station",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 39,
    "name": "Floor 39: Thermal Dissipation Sink",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 40,
    "name": "Floor 40: Satellite Command Bunker",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 41,
    "name": "Floor 41: AI Training Simulator",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 42,
    "name": "Floor 42: Zero-Day Exploit Breach",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 43,
    "name": "Floor 43: Holographic Museum Wing",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 44,
    "name": "Floor 44: Quantum Singularity Well",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 45,
    "name": "Floor 45: Century Matrix Master Core",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  }
];

(function() {
  const canvas = document.getElementById('dungeonCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const hpDisplay = document.getElementById('hpDisplay');
  const ramDisplay = document.getElementById('ramDisplay');
  const chipsDisplay = document.getElementById('chipsDisplay');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  const COLS = 15;
  const ROWS = 12;
  const TILE_SIZE = 40;

  let currentFloor = 1;
  let player = {
    x: 1, y: 1,
    hp: 100, maxHp: 100,
    ram: 50, maxRam: 50,
    chips: 0, atk: 18,
    invulnTimer: 0
  };

  let grid = []; // 0: floor, 1: wall, 2: stairs
  let enemies = [];
  let items = []; // {x, y, type: 'nanite' | 'ram' | 'chip'}
  let particles = [];
  let logMessages = [];

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentFloor ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadFloor(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadFloor(floorNum) {
    currentFloor = Math.max(1, Math.min(45, floorNum));
    const theme = THEMES[currentFloor - 1];

    levelDisplay.textContent = `${currentFloor}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    // Generate maze floor
    grid = [];
    for (let r = 0; r < ROWS; r++) {
      const row = [];
      for (let c = 0; c < COLS; c++) {
        if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) {
          row.push(1); // wall
        } else if (Math.random() < 0.18 && !(r === 1 && c === 1)) {
          row.push(1); // wall
        } else {
          row.push(0); // floor
        }
      }
      grid.push(row);
    }

    // Place stairs
    grid[ROWS - 2][COLS - 2] = 2;

    // Reset player position
    player.x = 1;
    player.y = 1;
    player.invulnTimer = 30; // 0.5s spawn grace

    // Spawn enemies
    enemies = [];
    const enemyCount = 3 + Math.floor(currentFloor / 8);
    for (let i = 0; i < enemyCount; i++) {
      let ex, ey;
      do {
        ex = Math.floor(Math.random() * (COLS - 2)) + 1;
        ey = Math.floor(Math.random() * (ROWS - 2)) + 1;
      } while (grid[ey][ex] !== 0 || (ex < 3 && ey < 3));
      
      enemies.push({
        x: ex, y: ey,
        hp: 20 + currentFloor * 4,
        maxHp: 20 + currentFloor * 4,
        atk: 6 + Math.floor(currentFloor / 3),
        name: i === 0 && currentFloor % 5 === 0 ? "Boss Daemon" : "Daemon",
        isBoss: i === 0 && currentFloor % 5 === 0
      });
    }

    // Spawn items
    items = [];
    for (let i = 0; i < 3; i++) {
      let ix, iy;
      do {
        ix = Math.floor(Math.random() * (COLS - 2)) + 1;
        iy = Math.floor(Math.random() * (ROWS - 2)) + 1;
      } while (grid[iy][ix] !== 0 || (ix === 1 && iy === 1));
      items.push({
        x: ix, y: iy,
        type: i === 0 ? 'nanite' : (i === 1 ? 'ram' : 'chip')
      });
    }

    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    hpDisplay.textContent = `${Math.max(0, player.hp)}/${player.maxHp}`;
    ramDisplay.textContent = `${player.ram}/${player.maxRam}`;
    chipsDisplay.textContent = player.chips;
  }

  function movePlayer(dx, dy) {
    if (player.hp <= 0) return;
    const nx = player.x + dx;
    const ny = player.y + dy;

    if (grid[ny][nx] === 1) return; // Wall

    // Check enemy bump attack
    const targetEnemy = enemies.find(e => e.x === nx && e.y === ny);
    if (targetEnemy) {
      // Attack enemy
      window.audio.playAttack();
      targetEnemy.hp -= player.atk;
      addParticles(nx * TILE_SIZE + 20, ny * TILE_SIZE + 20, '#00f0ff');
      
      if (targetEnemy.hp <= 0) {
        player.chips += targetEnemy.isBoss ? 5 : 1;
        enemies = enemies.filter(e => e !== targetEnemy);
      }
      takeEnemyTurns();
      updateHud();
      return;
    }

    // Walk to tile
    player.x = nx;
    player.y = ny;
    window.audio.playStep();

    // Check item pickup
    const itemIdx = items.findIndex(it => it.x === nx && it.y === ny);
    if (itemIdx !== -1) {
      const it = items[itemIdx];
      if (it.type === 'nanite') {
        player.hp = Math.min(player.maxHp, player.hp + 30);
      } else if (it.type === 'ram') {
        player.ram = Math.min(player.maxRam, player.ram + 25);
      } else {
        player.chips += 2;
      }
      items.splice(itemIdx, 1);
      window.audio.playPickup();
      addParticles(nx * TILE_SIZE + 20, ny * TILE_SIZE + 20, '#ffd600');
    }

    // Check stairs
    if (grid[ny][nx] === 2) {
      window.audio.playStairs();
      if (currentFloor >= 45) {
        showOverlay("MATRIX CONQUERED!", "You have breached all 45 server floors and salvaged the core!", () => {
          loadFloor(1);
          gameOverlay.classList.add('hidden');
        });
      } else {
        showOverlay("FLOOR CLEARED!", `Descending to Floor ${currentFloor + 1}...`, () => {
          loadFloor(currentFloor + 1);
          gameOverlay.classList.add('hidden');
        });
      }
      return;
    }

    takeEnemyTurns();
    updateHud();
  }

  function takeEnemyTurns() {
    enemies.forEach(e => {
      const dist = Math.abs(e.x - player.x) + Math.abs(e.y - player.y);
      if (dist === 1) {
        // Attack player
        if (player.invulnTimer <= 0) {
          player.hp -= e.atk;
          window.audio.playHit();
          addParticles(player.x * TILE_SIZE + 20, player.y * TILE_SIZE + 20, '#ff0055');
          player.invulnTimer = 20; // 0.33s invulnerability grace
        }
      } else if (dist < 6) {
        // Simple chase step
        let stepX = 0;
        let stepY = 0;
        if (Math.abs(player.x - e.x) > Math.abs(player.y - e.y)) {
          stepX = player.x > e.x ? 1 : -1;
        } else {
          stepY = player.y > e.y ? 1 : -1;
        }
        const nx = e.x + stepX;
        const ny = e.y + stepY;
        if (grid[ny][nx] === 0 && !enemies.some(other => other.x === nx && other.y === ny) && !(nx === player.x && ny === player.y)) {
          e.x = nx;
          e.y = ny;
        }
      }
    });

    if (player.hp <= 0) {
      showOverlay("CONNECTION TERMINATED", "Your cyber deck was fried by the daemons.", () => {
        player.hp = player.maxHp;
        loadFloor(currentFloor);
        gameOverlay.classList.add('hidden');
      });
    }
  }

  function healPlayer() {
    if (player.ram >= 15 && player.hp < player.maxHp) {
      player.ram -= 15;
      player.hp = Math.min(player.maxHp, player.hp + 35);
      window.audio.playPickup();
      addParticles(player.x * TILE_SIZE + 20, player.y * TILE_SIZE + 20, '#39ff14');
      updateHud();
    }
  }

  function castPulse() {
    if (player.ram >= 20) {
      player.ram -= 20;
      window.audio.playPulse();
      enemies.forEach(e => {
        const dist = Math.abs(e.x - player.x) + Math.abs(e.y - player.y);
        if (dist <= 3) {
          e.hp -= 25;
          addParticles(e.x * TILE_SIZE + 20, e.y * TILE_SIZE + 20, '#00f0ff');
        }
      });
      enemies = enemies.filter(e => e.hp > 0);
      updateHud();
    }
  }

  function showOverlay(title, msg, btnAction) {
    overlayTitle.textContent = title;
    overlayMessage.textContent = msg;
    overlayBtn.onclick = btnAction;
    gameOverlay.classList.remove('hidden');
  }

  function addParticles(x, y, color) {
    for (let i = 0; i < 8; i++) {
      particles.push({
        x: x, y: y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        color: color,
        life: 20
      });
    }
  }

  function render() {
    const theme = THEMES[currentFloor - 1];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = c * TILE_SIZE;
        const y = r * TILE_SIZE;
        if (grid[r][c] === 1) {
          ctx.fillStyle = theme.wall;
          ctx.fillRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
          ctx.strokeStyle = theme.primary;
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
        } else if (grid[r][c] === 2) {
          // Stairs
          ctx.fillStyle = '#1c1b33';
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = theme.accent;
          ctx.font = '20px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('▼', x + TILE_SIZE / 2, y + TILE_SIZE / 2);
        } else {
          ctx.fillStyle = 'rgba(255,255,255,0.03)';
          ctx.fillRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
        }
      }
    }

    // Draw Items
    items.forEach(it => {
      const cx = it.x * TILE_SIZE + TILE_SIZE / 2;
      const cy = it.y * TILE_SIZE + TILE_SIZE / 2;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '16px sans-serif';
      if (it.type === 'nanite') ctx.fillText('🧪', cx, cy);
      else if (it.type === 'ram') ctx.fillText('⚡', cx, cy);
      else ctx.fillText('💾', cx, cy);
    });

    // Draw Enemies
    enemies.forEach(e => {
      const cx = e.x * TILE_SIZE + TILE_SIZE / 2;
      const cy = e.y * TILE_SIZE + TILE_SIZE / 2;
      ctx.fillStyle = e.isBoss ? '#ffd600' : '#ff0055';
      ctx.beginPath();
      ctx.arc(cx, cy, e.isBoss ? 16 : 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Enemy HP Bar
      const barW = 24;
      const hpPct = Math.max(0, e.hp / e.maxHp);
      ctx.fillStyle = '#330000';
      ctx.fillRect(cx - barW / 2, cy - 18, barW, 4);
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(cx - barW / 2, cy - 18, barW * hpPct, 4);
    });

    // Draw Player
    const px = player.x * TILE_SIZE + TILE_SIZE / 2;
    const py = player.y * TILE_SIZE + TILE_SIZE / 2;
    ctx.fillStyle = player.invulnTimer > 0 && Math.floor(player.invulnTimer / 4) % 2 === 0 ? 'rgba(0,240,255,0.4)' : '#00f0ff';
    ctx.beginPath();
    ctx.arc(px, py, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 3, 3);
      if (p.life <= 0) particles.splice(i, 1);
    }

    if (player.invulnTimer > 0) player.invulnTimer--;
    requestAnimationFrame(render);
  }

  // Keyboard controls
  window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp': case 'w': case 'W': movePlayer(0, -1); break;
      case 'ArrowDown': case 's': case 'S': movePlayer(0, 1); break;
      case 'ArrowLeft': case 'a': case 'A': movePlayer(-1, 0); break;
      case 'ArrowRight': case 'd': case 'D': movePlayer(1, 0); break;
      case 'h': case 'H': healPlayer(); break;
      case ' ': castPulse(); break;
    }
  });

  // D-pad controls
  document.getElementById('btnUp').onclick = () => movePlayer(0, -1);
  document.getElementById('btnDown').onclick = () => movePlayer(0, 1);
  document.getElementById('btnLeft').onclick = () => movePlayer(-1, 0);
  document.getElementById('btnRight').onclick = () => movePlayer(1, 0);
  document.getElementById('btnWait').onclick = () => takeEnemyTurns();
  document.getElementById('btnHeal').onclick = healPlayer;
  document.getElementById('btnPulse').onclick = castPulse;

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadFloor(1);
  requestAnimationFrame(render);
})();