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
  const canvas = document.getElementById('samuraiCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const hpDisplay = document.getElementById('hpDisplay');
  const stanceDisplay = document.getElementById('stanceDisplay');
  const honorDisplay = document.getElementById('honorDisplay');
  const duelLog = document.getElementById('duelLog');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentDuel = 1;
  let honor = 0;
  let stanceIndex = 0; // 0: Fire, 1: Water, 2: Wind
  const STANCES = [
    { name: "FIRE STANCE (+Damage)", color: "#ff0055" },
    { name: "WATER STANCE (+Parry Window)", color: "#00f0ff" },
    { name: "WIND STANCE (+Speed)", color: "#ffd600" }
  ];

  let ronin = {
    hp: 100, maxHp: 100,
    parryActive: false
  };

  let opponent = {
    name: "Corporate Bladesman",
    hp: 100, maxHp: 100,
    windup: 0, // countdown to attack
    isStaggered: false
  };

  let particles = [];
  let isActionActive = true;

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentDuel ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadDuel(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadDuel(num) {
    currentDuel = Math.max(1, Math.min(45, num));
    const theme = THEMES[currentDuel - 1];

    levelDisplay.textContent = `${currentDuel}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    ronin.hp = ronin.maxHp;
    ronin.parryActive = false;

    const baseHp = 90 + currentDuel * 10;
    opponent = {
      name: currentDuel % 5 === 0 ? `Grand Daimyo Apex-${currentDuel}` : `Corporate Samurai ${currentDuel}`,
      hp: baseHp,
      maxHp: baseHp,
      windup: 120,
      isStaggered: false
    };

    duelLog.textContent = `Duel ${currentDuel} commenced against ${opponent.name}!`;
    isActionActive = true;
    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    hpDisplay.textContent = `${Math.max(0, ronin.hp)}/${ronin.maxHp}`;
    stanceDisplay.textContent = STANCES[stanceIndex].name;
    stanceDisplay.style.color = STANCES[stanceIndex].color;
    honorDisplay.textContent = honor;
  }

  function slash() {
    if (!isActionActive || ronin.hp <= 0 || opponent.hp <= 0) return;
    window.audio.playClash();

    const mult = stanceIndex === 0 ? 1.5 : (opponent.isStaggered ? 2.0 : 1.0);
    const dmg = Math.floor((25 + Math.random() * 10) * mult);
    opponent.hp -= dmg;
    addParticles(420, 200, '#ff0055');
    duelLog.textContent = `You slashed for ${dmg} damage!`;

    if (opponent.hp <= 0) {
      opponent.hp = 0;
      honor += 100 * currentDuel;
      window.audio.playTaiko();
      updateHud();
      setTimeout(() => {
        if (currentDuel >= 45) {
          showOverlay("SUPREME SHOGUN OF CYBERSPACE!", "All 45 corporate duels mastered with bushido honor!", () => {
            loadDuel(1);
            gameOverlay.classList.add('hidden');
          });
        } else {
          showOverlay("DUEL CONQUERED!", `Advancing to Duel ${currentDuel + 1}...`, () => {
            loadDuel(currentDuel + 1);
            gameOverlay.classList.add('hidden');
          });
        }
      }, 600);
    }
    updateHud();
  }

  function parry() {
    ronin.parryActive = true;
    window.audio.playParry();
    duelLog.textContent = "Defensive blade raised for precision parry!";
    setTimeout(() => {
      ronin.parryActive = false;
    }, stanceIndex === 1 ? 900 : 500);
  }

  function switchStance() {
    stanceIndex = (stanceIndex + 1) % STANCES.length;
    window.audio.playTaiko();
    duelLog.textContent = `Switched to ${STANCES[stanceIndex].name}.`;
    updateHud();
  }

  function showOverlay(title, msg, btnAction) {
    overlayTitle.textContent = title;
    overlayMessage.textContent = msg;
    overlayBtn.onclick = btnAction;
    gameOverlay.classList.remove('hidden');
  }

  function addParticles(x, y, color) {
    for (let i = 0; i < 12; i++) {
      particles.push({
        x: x, y: y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        color: color,
        life: 25
      });
    }
  }

  function update() {
    if (opponent.hp > 0 && ronin.hp > 0) {
      opponent.windup--;
      if (opponent.windup <= 0) {
        opponent.windup = 140 - Math.min(60, currentDuel);

        if (ronin.parryActive) {
          // Successful parry!
          window.audio.playParry();
          opponent.isStaggered = true;
          duelLog.textContent = "PERFECT PARRY! Opponent is STAGGERED!";
          addParticles(280, 200, '#00f0ff');
          setTimeout(() => opponent.isStaggered = false, 1500);
        } else {
          // Hit player
          const dmg = 15 + Math.floor(currentDuel * 1.5);
          ronin.hp -= dmg;
          window.audio.playClash();
          addParticles(180, 200, '#ff0055');
          duelLog.textContent = `${opponent.name} struck you for ${dmg} damage!`;
          updateHud();

          if (ronin.hp <= 0) {
            showOverlay("FALLEN IN BATTLE", "Honor calls for a rematch...", () => {
              loadDuel(currentDuel);
              gameOverlay.classList.add('hidden');
            });
          }
        }
      }
    }
  }

  function render() {
    update();
    const theme = THEMES[currentDuel - 1];

    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Blood Moon
    ctx.fillStyle = '#ff0055';
    ctx.beginPath();
    ctx.arc(300, 120, 55, 0, Math.PI * 2);
    ctx.fill();

    // Torii Gate Silhouette
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(220, 260);
    ctx.lineTo(220, 160);
    ctx.lineTo(380, 160);
    ctx.lineTo(380, 260);
    ctx.stroke();

    // Player Ronin
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(180, 220, 24, 0, Math.PI * 2);
    ctx.fill();

    // Ronin Katana Blade
    ctx.strokeStyle = STANCES[stanceIndex].color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(180, 210);
    ctx.lineTo(240, ronin.parryActive ? 170 : 230);
    ctx.stroke();

    // Opponent
    ctx.fillStyle = opponent.isStaggered ? '#ffd600' : theme.secondary;
    ctx.beginPath();
    ctx.arc(420, 220, 26, 0, Math.PI * 2);
    ctx.fill();

    // Opponent Blade
    ctx.strokeStyle = '#ff0055';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(420, 210);
    ctx.lineTo(360, 220);
    ctx.stroke();

    // Opponent HP Bar
    ctx.fillStyle = '#300';
    ctx.fillRect(350, 60, 140, 10);
    ctx.fillStyle = '#ff0055';
    ctx.fillRect(350, 60, 140 * (opponent.hp / opponent.maxHp), 10);

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 4, 4);
      if (p.life <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(render);
  }

  document.getElementById('btnSlash').onclick = slash;
  document.getElementById('btnParry').onclick = parry;
  document.getElementById('btnStance').onclick = switchStance;

  window.addEventListener('keydown', e => {
    if (e.key === '1') slash();
    if (e.key === '2') parry();
    if (e.key === '3') switchStance();
  });

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadDuel(1);
  requestAnimationFrame(render);
})();