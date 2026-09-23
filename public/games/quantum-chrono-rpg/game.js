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
  const canvas = document.getElementById('chronoCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const eraDisplay = document.getElementById('eraDisplay');
  const partyHpDisplay = document.getElementById('partyHpDisplay');
  const chronoLog = document.getElementById('chronoLog');
  const atb1 = document.getElementById('atb1');
  const atb2 = document.getElementById('atb2');
  const atb3 = document.getElementById('atb3');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentEra = 1;
  const ERAS = ["PAST (Primordial)", "PRESENT (Neo-Tokyo)", "FUTURE (Singularity)"];
  let eraIdx = 1;

  let party = {
    hp: 300, maxHp: 300,
    atb: [100, 80, 60]
  };

  let entropyCore = {
    name: "Entropy Anomaly Core",
    hp: 180, maxHp: 180,
    windup: 160
  };

  let particles = [];
  let isActionActive = true;

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentEra ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadEra(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadEra(num) {
    currentEra = Math.max(1, Math.min(45, num));
    const theme = THEMES[currentEra - 1];

    levelDisplay.textContent = `${currentEra}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;
    eraDisplay.textContent = ERAS[eraIdx];

    party.hp = party.maxHp;
    party.atb = [100, 100, 100];

    const baseHp = 150 + currentEra * 15;
    entropyCore = {
      name: currentEra === 45 ? "★ 100TH CENTURY MASTER ENTROPY TITAN ★" : `Entropy Core Anomaly-${currentEra}`,
      hp: baseHp,
      maxHp: baseHp,
      windup: 140
    };

    chronoLog.textContent = `Paradox battle started in ${theme.name}! ATB gauge active.`;
    isActionActive = true;
    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    partyHpDisplay.textContent = `${Math.max(0, party.hp)}/${party.maxHp}`;
    atb1.style.width = `${party.atb[0]}%`;
    atb2.style.width = `${party.atb[1]}%`;
    atb3.style.width = `${party.atb[2]}%`;
  }

  function chronoStrike() {
    if (party.atb[0] < 50 || entropyCore.hp <= 0) return;
    party.atb[0] = 0;
    window.audio.playChronoStrike();
    const dmg = 35 + Math.floor(Math.random() * 15);
    entropyCore.hp -= dmg;
    addParticles(450, 200, '#ffd600');
    chronoLog.textContent = `Chrono Knight executes Chrono Strike for ${dmg} damage!`;
    checkVictory();
    updateHud();
  }

  function timeWarp() {
    if (party.atb[1] < 60 || entropyCore.hp <= 0) return;
    party.atb[1] = 0;
    window.audio.playTimeWarp();
    party.hp = Math.min(party.maxHp, party.hp + 45);
    entropyCore.windup += 80; // Delay enemy turn
    addParticles(150, 200, '#00e5ff');
    chronoLog.textContent = "Time Warp casts Haste on party (+45 HP) and slows the Entropy Core!";
    updateHud();
  }

  function quantumTech() {
    if (party.atb[2] < 70 || entropyCore.hp <= 0) return;
    party.atb[2] = 0;
    window.audio.playChronoStrike();
    const dmg = 65 + Math.floor(Math.random() * 20);
    entropyCore.hp -= dmg;
    addParticles(450, 200, '#d500f9');
    chronoLog.textContent = `Quantum Tech Discharge inflicts ${dmg} massive temporal damage!`;
    checkVictory();
    updateHud();
  }

  function shiftEra() {
    eraIdx = (eraIdx + 1) % ERAS.length;
    window.audio.playTimeWarp();
    eraDisplay.textContent = ERAS[eraIdx];
    chronoLog.textContent = `Timeline shifted to ${ERAS[eraIdx]}! Enemy temporal resistance altered!`;
    addParticles(300, 200, '#ff007f');
  }

  function checkVictory() {
    if (entropyCore.hp <= 0) {
      entropyCore.hp = 0;
      window.audio.playGrandFanfare();
      setTimeout(() => {
        if (currentEra >= 45) {
          showOverlay("★ CENTURY MILESTONE CONQUERED! ★", "All 100 Games in Next Games/Game Complete! You have saved all timelines!", () => {
            loadEra(1);
            gameOverlay.classList.add('hidden');
          });
        } else {
          showOverlay("TIMELINE RESTORED!", `Advancing to Timeline Era ${currentEra + 1}...`, () => {
            loadEra(currentEra + 1);
            gameOverlay.classList.add('hidden');
          });
        }
      }, 600);
    }
  }

  function showOverlay(title, msg, btnAction) {
    overlayTitle.textContent = title;
    overlayMessage.textContent = msg;
    overlayBtn.onclick = btnAction;
    gameOverlay.classList.remove('hidden');
  }

  function addParticles(x, y, color) {
    for (let i = 0; i < 14; i++) {
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
    // Fill ATB gauges
    for (let i = 0; i < 3; i++) {
      if (party.atb[i] < 100) party.atb[i] = Math.min(100, party.atb[i] + 0.35);
    }
    updateHud();

    // Enemy turn countdown
    if (entropyCore.hp > 0 && party.hp > 0) {
      entropyCore.windup--;
      if (entropyCore.windup <= 0) {
        entropyCore.windup = 150 - Math.min(50, currentEra);
        const dmg = 25 + Math.floor(currentEra * 1.5);
        party.hp -= dmg;
        window.audio.playChronoStrike();
        addParticles(150, 200, '#ff0055');
        chronoLog.textContent = `${entropyCore.name} releases Temporal Blast for ${dmg} damage!`;
        updateHud();

        if (party.hp <= 0) {
          showOverlay("TIMELINE COLLAPSE", "Paradox overwhelmed the party...", () => {
            loadEra(currentEra);
            gameOverlay.classList.add('hidden');
          });
        }
      }
    }
  }

  function render() {
    update();
    const theme = THEMES[currentEra - 1];

    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Singularity Core Vortex in Center
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(450, 200, 65, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#ffd600';
    ctx.beginPath();
    ctx.arc(450, 200, 28, 0, Math.PI * 2);
    ctx.fill();

    // Party Members (3 Hero Nodes)
    const partyColors = ['#ffd600', '#00e5ff', '#d500f9'];
    for (let i = 0; i < 3; i++) {
      const py = 120 + i * 80;
      ctx.fillStyle = partyColors[i];
      ctx.beginPath();
      ctx.arc(140, py, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Entropy Core HP Bar
    ctx.fillStyle = '#300';
    ctx.fillRect(380, 50, 140, 12);
    ctx.fillStyle = '#ff0055';
    ctx.fillRect(380, 50, 140 * (entropyCore.hp / entropyCore.maxHp), 12);

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

  document.getElementById('btnAtk').onclick = chronoStrike;
  document.getElementById('btnWarp').onclick = timeWarp;
  document.getElementById('btnTech').onclick = quantumTech;
  document.getElementById('btnEra').onclick = shiftEra;

  window.addEventListener('keydown', e => {
    if (e.key === '1') chronoStrike();
    if (e.key === '2') timeWarp();
    if (e.key === '3') quantumTech();
    if (e.key === '4') shiftEra();
  });

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadEra(1);
  requestAnimationFrame(render);
})();