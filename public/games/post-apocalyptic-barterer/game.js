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
  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const capsDisplay = document.getElementById('capsDisplay');
  const waterDisplay = document.getElementById('waterDisplay');
  const fuelDisplay = document.getElementById('fuelDisplay');
  const eventLog = document.getElementById('eventLog');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const btnTravel = document.getElementById('btnTravel');

  let currentStage = 1;
  let caps = 300;
  let inv = {
    water: 20,
    scrap: 5,
    fuel: 15,
    stims: 2
  };

  let prices = {
    water: 10,
    scrap: 25,
    fuel: 18,
    stims: 40
  };

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentStage ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadStage(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadStage(num) {
    currentStage = Math.max(1, Math.min(45, num));
    const theme = THEMES[currentStage - 1];

    levelDisplay.textContent = `${currentStage}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    // Shift market prices based on stage
    prices.water = Math.max(5, Math.floor(10 + Math.sin(currentStage * 1.5) * 6));
    prices.scrap = Math.max(12, Math.floor(25 + Math.cos(currentStage * 1.2) * 12));
    prices.fuel = Math.max(10, Math.floor(18 + Math.sin(currentStage * 2.1) * 8));
    prices.stims = Math.max(20, Math.floor(40 + Math.cos(currentStage * 0.9) * 18));

    eventLog.textContent = `Arrived at ${theme.name}! Market commodities updated for local region.`;
    updateDisplay();
    initLevelGrid();
  }

  function updateDisplay() {
    capsDisplay.textContent = `${caps} CAPS`;
    waterDisplay.textContent = `${inv.water} GAL`;
    fuelDisplay.textContent = `${inv.fuel} GAL`;

    document.getElementById('priceWater').textContent = `${prices.water} Caps`;
    document.getElementById('priceScrap').textContent = `${prices.scrap} Caps`;
    document.getElementById('priceFuel').textContent = `${prices.fuel} Caps`;
    document.getElementById('priceStims').textContent = `${prices.stims} Caps`;

    document.getElementById('invWater').textContent = `Stock: ${inv.water}`;
    document.getElementById('invScrap').textContent = `Stock: ${inv.scrap}`;
    document.getElementById('invFuel').textContent = `Stock: ${inv.fuel}`;
    document.getElementById('invStims').textContent = `Stock: ${inv.stims}`;
  }

  function buy(comm) {
    const cost = prices[comm];
    if (caps >= cost) {
      caps -= cost;
      inv[comm]++;
      window.audio.playCoin();
      eventLog.textContent = `Bought 1 ${comm.toUpperCase()} for ${cost} Caps.`;
      updateDisplay();
    } else {
      eventLog.textContent = "Not enough Caps to purchase this commodity!";
    }
  }

  function sell(comm) {
    if (inv[comm] > 0) {
      const payout = prices[comm];
      inv[comm]--;
      caps += payout;
      window.audio.playCoin();
      eventLog.textContent = `Sold 1 ${comm.toUpperCase()} for ${payout} Caps.`;
      updateDisplay();
    } else {
      eventLog.textContent = `No ${comm.toUpperCase()} left in caravan inventory to sell!`;
    }
  }

  function travel() {
    if (inv.water < 3 || inv.fuel < 2) {
      eventLog.textContent = "CARAVAN STRANDED! Need at least 3 Water and 2 Fuel to travel!";
      return;
    }

    inv.water -= 3;
    inv.fuel -= 2;
    window.audio.playTravel();

    // Random road encounter
    const roll = Math.random();
    if (roll < 0.25) {
      window.audio.playRaiders();
      const loss = Math.min(caps, 40);
      caps -= loss;
      eventLog.textContent = `RAIDER AMBUSH on the dunes! Fended off bandits, paid ${loss} Caps in damages.`;
    } else if (roll < 0.5) {
      caps += 50;
      eventLog.textContent = "Discovered abandoned fallout bunker! Salvaged +50 Caps.";
    }

    if (currentStage >= 45) {
      eventLog.textContent = "PROMISED LAND REACHED! You established the Century Wasteland Trade Empire!";
    } else {
      loadStage(currentStage + 1);
    }
    updateDisplay();
  }

  document.querySelectorAll('.buy-btn').forEach(b => {
    b.onclick = () => buy(b.getAttribute('data-comm'));
  });
  document.querySelectorAll('.sell-btn').forEach(b => {
    b.onclick = () => sell(b.getAttribute('data-comm'));
  });

  btnTravel.onclick = travel;

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadStage(1);
})();