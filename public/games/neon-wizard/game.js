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
  const canvas = document.getElementById('wizardCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const hpDisplay = document.getElementById('hpDisplay');
  const manaDisplay = document.getElementById('manaDisplay');
  const scoreDisplay = document.getElementById('scoreDisplay');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentSanctum = 1;
  let score = 0;

  let wizard = {
    x: 80, y: 210,
    hp: 100, maxHp: 100,
    mana: 100, maxMana: 100,
    shieldTimer: 0
  };

  let monsters = [];
  let spells = [];
  let particles = [];

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentSanctum ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadSanctum(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadSanctum(num) {
    currentSanctum = Math.max(1, Math.min(45, num));
    const theme = THEMES[currentSanctum - 1];

    levelDisplay.textContent = `${currentSanctum}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    wizard.hp = wizard.maxHp;
    wizard.mana = wizard.maxMana;
    wizard.shieldTimer = 0;

    monsters = [];
    spells = [];

    const mCount = 5 + Math.floor(currentSanctum / 4);
    for (let i = 0; i < mCount; i++) {
      monsters.push({
        x: 400 + i * 85,
        y: 120 + Math.random() * 180,
        hp: 30 + currentSanctum * 6,
        maxHp: 30 + currentSanctum * 6,
        speed: 0.6 + Math.random() * 0.4,
        type: ['fire', 'ice', 'shock'][i % 3]
      });
    }

    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    hpDisplay.textContent = `${Math.max(0, wizard.hp)}/${wizard.maxHp}`;
    manaDisplay.textContent = `${Math.floor(wizard.mana)}/${wizard.maxMana}`;
    scoreDisplay.textContent = score;
  }

  function castSpell(type) {
    if (wizard.mana < 20) return;
    wizard.mana -= 20;
    window.audio.playSpell(type);

    if (type === 'shield') {
      wizard.shieldTimer = 180; // 3 seconds
      addParticles(wizard.x, wizard.y, '#d500f9');
      updateHud();
      return;
    }

    spells.push({
      x: wizard.x + 20,
      y: wizard.y,
      vx: 6,
      type: type,
      color: type === 'fire' ? '#ff3d00' : (type === 'ice' ? '#00e5ff' : '#ffd600')
    });
    updateHud();
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
    // Regenerate mana slowly
    if (wizard.mana < wizard.maxMana) {
      wizard.mana = Math.min(wizard.maxMana, wizard.mana + 0.15);
      updateHud();
    }
    if (wizard.shieldTimer > 0) wizard.shieldTimer--;

    // Update spells
    for (let i = spells.length - 1; i >= 0; i--) {
      const sp = spells[i];
      sp.x += sp.vx;

      // Check collision with monsters
      for (let j = monsters.length - 1; j >= 0; j--) {
        const m = monsters[j];
        if (Math.hypot(sp.x - m.x, sp.y - m.y) < 24) {
          const bonus = (sp.type === 'fire' && m.type === 'ice') || (sp.type === 'ice' && m.type === 'fire') ? 1.8 : 1.0;
          m.hp -= 25 * bonus;
          addParticles(m.x, m.y, sp.color);
          spells.splice(i, 1);

          if (m.hp <= 0) {
            monsters.splice(j, 1);
            score += 200;
            addParticles(m.x, m.y, '#ffd600');
            updateHud();

            if (monsters.length === 0) {
              window.audio.playWin();
              if (currentSanctum >= 45) {
                showOverlay("SUPREME GRAND WIZARD!", "All 45 Arcane Sanctums cleansed of glitch corruption!", () => {
                  loadSanctum(1);
                  gameOverlay.classList.add('hidden');
                });
              } else {
                showOverlay("SANCTUM PURIFIED!", `Entering Sanctum ${currentSanctum + 1}...`, () => {
                  loadSanctum(currentSanctum + 1);
                  gameOverlay.classList.add('hidden');
                });
              }
            }
          }
          break;
        }
      }

      if (sp && sp.x > 600) spells.splice(i, 1);
    }

    // Update monsters
    monsters.forEach(m => {
      m.x -= m.speed;
      if (m.x < wizard.x + 30) {
        m.x = wizard.x + 30;
        if (wizard.shieldTimer <= 0) {
          wizard.hp -= 15;
          window.audio.playHit();
          addParticles(wizard.x, wizard.y, '#ff0055');
          updateHud();

          if (wizard.hp <= 0) {
            showOverlay("WIZARD OVERWHELMED", "Sanctum fell to chaos.", () => {
              loadSanctum(currentSanctum);
              gameOverlay.classList.add('hidden');
            });
          }
        }
      }
    });
  }

  function render() {
    update();
    const theme = THEMES[currentSanctum - 1];

    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Arcane circle rune ring
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(80, 210, 55, 0, Math.PI * 2);
    ctx.stroke();

    // Spells
    spells.forEach(sp => {
      ctx.fillStyle = sp.color;
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    // Monsters
    monsters.forEach(m => {
      ctx.fillStyle = m.type === 'fire' ? '#ff3d00' : (m.type === 'ice' ? '#00e5ff' : '#ffd600');
      ctx.beginPath();
      ctx.arc(m.x, m.y, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // HP bar
      ctx.fillStyle = '#300';
      ctx.fillRect(m.x - 14, m.y - 24, 28, 4);
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(m.x - 14, m.y - 24, 28 * (m.hp / m.maxHp), 4);
    });

    // Wizard
    ctx.fillStyle = wizard.shieldTimer > 0 ? '#d500f9' : '#00e5ff';
    ctx.beginPath();
    ctx.arc(wizard.x, wizard.y, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    if (wizard.shieldTimer > 0) {
      ctx.strokeStyle = '#ffd600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(wizard.x, wizard.y, 28, 0, Math.PI * 2);
      ctx.stroke();
    }

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

  document.querySelectorAll('.rune-btn').forEach(btn => {
    btn.onclick = () => castSpell(btn.getAttribute('data-spell'));
  });

  window.addEventListener('keydown', e => {
    if (e.key === '1') castSpell('fire');
    if (e.key === '2') castSpell('ice');
    if (e.key === '3') castSpell('shock');
    if (e.key === '4') castSpell('shield');
  });

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadSanctum(1);
  requestAnimationFrame(render);
})();