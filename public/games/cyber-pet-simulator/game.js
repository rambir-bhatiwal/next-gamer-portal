const THEMES = [
  {
    "id": 1,
    "name": "Sector 1: Mars Orbital Hangar",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 2,
    "name": "Sector 2: Titan Methane Refinery",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 3,
    "name": "Sector 3: Asteroid Pirate Den",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 4,
    "name": "Sector 4: Deep Space Citadel",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 5,
    "name": "Sector 5: Europa Ice Outpost",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  },
  {
    "id": 6,
    "name": "Sector 6: Sirius Hyper-Gate",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 7,
    "name": "Sector 7: Nebula Salvage Station",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 8,
    "name": "Sector 8: Proxima Centauri Beacon",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 9,
    "name": "Sector 9: Solar Flare Relay",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 10,
    "name": "Sector 10: Kuiper Belt Smuggler Port",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  },
  {
    "id": 11,
    "name": "Sector 11: Orion Constellation Hub",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 12,
    "name": "Sector 12: Black Hole Event Horizon",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 13,
    "name": "Sector 13: Pleiades Trade Station",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 14,
    "name": "Sector 14: Andromeda Void Station",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 15,
    "name": "Sector 15: Alpha Centauri Dock",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  },
  {
    "id": 16,
    "name": "Sector 16: Cygnus Star Foundry",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 17,
    "name": "Sector 17: Vela Supernova Outpost",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 18,
    "name": "Sector 18: Antares Red Giant Depot",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 19,
    "name": "Sector 19: Betelgeuse Fusion Core",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 20,
    "name": "Sector 20: Vega Prism Hangar",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  },
  {
    "id": 21,
    "name": "Sector 21: Polaris Navigation Node",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 22,
    "name": "Sector 22: Centaurus Mining Platform",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 23,
    "name": "Sector 23: Cassiopeia Luxury Spire",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 24,
    "name": "Sector 24: Draco Dark Matter Bay",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 25,
    "name": "Sector 25: Phoenix Rebirth Hangar",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  },
  {
    "id": 26,
    "name": "Sector 26: Aquila Communications Hub",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 27,
    "name": "Sector 27: Pegasus Starship Yard",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 28,
    "name": "Sector 28: Ursa Major Frontier",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 29,
    "name": "Sector 29: Taurus Heavy Hauler Base",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 30,
    "name": "Sector 30: Leo Stellar Fortress",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  },
  {
    "id": 31,
    "name": "Sector 31: Scorpius Strike Outpost",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 32,
    "name": "Sector 32: Sagittarius Galactic Core",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 33,
    "name": "Sector 33: Capricorn Dyson Swarm",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 34,
    "name": "Sector 34: Aquarius Water World Bay",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 35,
    "name": "Sector 35: Pisces Twin Moon Base",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  },
  {
    "id": 36,
    "name": "Sector 36: Aries Plasma Forge",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 37,
    "name": "Sector 37: Gemini Binary Star Hub",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 38,
    "name": "Sector 38: Cancer Coral Station",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 39,
    "name": "Sector 39: Virgo Crystal Observatory",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 40,
    "name": "Sector 40: Libra Balance Outpost",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  },
  {
    "id": 41,
    "name": "Sector 41: Ophiuchus Secret Sanctuary",
    "bg": "#060914",
    "primary": "#ff8800",
    "secondary": "#00f0ff",
    "accent": "#ffd600"
  },
  {
    "id": 42,
    "name": "Sector 42: Eridanus Cosmic Void",
    "bg": "#0d051f",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14"
  },
  {
    "id": 43,
    "name": "Sector 43: Bootes Supercluster Beacon",
    "bg": "#041412",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f"
  },
  {
    "id": 44,
    "name": "Sector 44: Hydra Deep Space Array",
    "bg": "#190804",
    "primary": "#ff3d00",
    "secondary": "#ffd600",
    "accent": "#00f0ff"
  },
  {
    "id": 45,
    "name": "Sector 45: Century Omega Space Gate",
    "bg": "#09041a",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff"
  }
];

(function() {
  const canvas = document.getElementById('petCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const evoDisplay = document.getElementById('evoDisplay');
  const xpDisplay = document.getElementById('xpDisplay');
  const petThought = document.getElementById('petThought');
  const energyBar = document.getElementById('energyBar');
  const cleanBar = document.getElementById('cleanBar');
  const happyBar = document.getElementById('happyBar');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let currentTier = 1;
  let xp = 0;
  let maxXp = 100;

  let pet = {
    energy: 80,
    cleanliness: 80,
    happiness: 80,
    bounce: 0,
    bounceDir: 1
  };

  const EVOS = [
    "Nano-Spore", "Micro-Blob", "Silicon Tadpole", "Scout Drone", "Bit-Hound",
    "Cyber-Kitten", "Logic Sprite", "Graphene Golem", "Quantum Falcon", "Mecha-Titan",
    "Omni-Deity"
  ];

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 40; i++) {
      const theme = THEMES[i - 1];
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentTier ? ' active' : '');
      btn.textContent = i;
      btn.title = theme.name;
      btn.addEventListener('click', () => {
        loadTier(i);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadTier(tierNum) {
    currentTier = Math.max(1, Math.min(40, tierNum));
    const theme = THEMES[currentTier - 1];

    levelDisplay.textContent = `${currentTier}/40`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    const evoIdx = Math.min(EVOS.length - 1, Math.floor((currentTier - 1) / 4));
    evoDisplay.textContent = EVOS[evoIdx];

    pet.energy = 85;
    pet.cleanliness = 85;
    pet.happiness = 85;

    petThought.textContent = `"Beep! Arrived at ${theme.name.split(':')[1] || theme.name}!"`;
    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    energyBar.style.width = `${Math.max(0, pet.energy)}%`;
    cleanBar.style.width = `${Math.max(0, pet.cleanliness)}%`;
    happyBar.style.width = `${Math.max(0, pet.happiness)}%`;
    xpDisplay.textContent = `${xp}/${maxXp}`;
  }

  function feed() {
    pet.energy = Math.min(100, pet.energy + 25);
    xp += 15;
    window.audio.playEat();
    petThought.textContent = '"Yum! Fresh data packets ingested!"';
    checkEvolve();
    updateHud();
  }

  function train() {
    pet.energy = Math.max(10, pet.energy - 15);
    pet.happiness = Math.min(100, pet.happiness + 20);
    xp += 25;
    window.audio.playChirp();
    petThought.textContent = '"Neural networks weights updated!"';
    checkEvolve();
    updateHud();
  }

  function clean() {
    pet.cleanliness = 100;
    xp += 10;
    window.audio.playChirp();
    petThought.textContent = '"Defragmented and polished memory!"';
    checkEvolve();
    updateHud();
  }

  function play() {
    pet.happiness = 100;
    pet.cleanliness = Math.max(10, pet.cleanliness - 10);
    xp += 20;
    window.audio.playChirp();
    petThought.textContent = '"Yay! That mini-game was awesome!"';
    checkEvolve();
    updateHud();
  }

  function checkEvolve() {
    if (xp >= maxXp) {
      xp = 0;
      maxXp = Math.floor(maxXp * 1.25);
      if (currentTier < 40) {
        window.audio.playEvolve();
        loadTier(currentTier + 1);
        petThought.textContent = '"EVOLUTION COMPLETE! I have upgraded!"';
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Habitat background grid
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Bounce pet animation
    pet.bounce += 0.05 * pet.bounceDir;
    if (pet.bounce > 6 || pet.bounce < -6) pet.bounceDir *= -1;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2 + pet.bounce;

    // Pet Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(cx, canvas.height / 2 + 55, 45, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Pet Body
    ctx.fillStyle = '#00e5ff';
    ctx.beginPath();
    ctx.arc(cx, cy, 38, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Antenna
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 38);
    ctx.lineTo(cx, cy - 58);
    ctx.stroke();
    ctx.fillStyle = '#ff4081';
    ctx.beginPath();
    ctx.arc(cx, cy - 58, 6, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(cx - 14, cy - 6, 6, 0, Math.PI * 2);
    ctx.arc(cx + 14, cy - 6, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(cx - 12, cy - 8, 2, 0, Math.PI * 2);
    ctx.arc(cx + 16, cy - 8, 2, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy + 10, 10, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();

    requestAnimationFrame(render);
  }

  document.getElementById('btnFeed').onclick = feed;
  document.getElementById('btnTrain').onclick = train;
  document.getElementById('btnClean').onclick = clean;
  document.getElementById('btnPlay').onclick = play;

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadTier(1);
  requestAnimationFrame(render);
})();