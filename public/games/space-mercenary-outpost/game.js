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
  const canvas = document.getElementById('spaceCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const hullDisplay = document.getElementById('hullDisplay');
  const shieldDisplay = document.getElementById('shieldDisplay');
  const bountyDisplay = document.getElementById('bountyDisplay');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentSector = 1;
  let bountyCredits = 0;

  let ship = {
    x: 300, y: 210,
    vx: 0, vy: 0,
    angle: 0,
    hull: 100,
    shields: 3,
    invulnTimer: 0
  };

  let lasers = [];
  let pirates = [];
  let stars = [];
  let particles = [];
  let keys = {};

  // Init stars
  for (let i = 0; i < 70; i++) {
    stars.push({
      x: Math.random() * 600,
      y: Math.random() * 420,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.4 + 0.1
    });
  }

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

  function loadSector(sectorNum) {
    currentSector = Math.max(1, Math.min(45, sectorNum));
    const theme = THEMES[currentSector - 1];

    levelDisplay.textContent = `${currentSector}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    ship.x = 300;
    ship.y = 210;
    ship.vx = 0;
    ship.vy = 0;
    ship.angle = 0;
    ship.hull = 100;
    ship.shields = 3;
    ship.invulnTimer = 60; // 1s invulnerability grace

    lasers = [];
    pirates = [];

    const pirateCount = 4 + Math.floor(currentSector / 5);
    for (let i = 0; i < pirateCount; i++) {
      pirates.push({
        x: Math.random() * 540 + 30,
        y: Math.random() * 120 + 20,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        hp: 20 + currentSector * 5,
        maxHp: 20 + currentSector * 5,
        isBoss: i === 0 && currentSector % 5 === 0
      });
    }

    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    hullDisplay.textContent = `${Math.max(0, ship.hull)}%`;
    shieldDisplay.textContent = '🛡️'.repeat(Math.max(0, ship.shields));
    bountyDisplay.textContent = `${bountyCredits} CR`;
  }

  function fireLaser() {
    window.audio.playLaser();
    const speed = 7;
    lasers.push({
      x: ship.x + Math.cos(ship.angle) * 16,
      y: ship.y + Math.sin(ship.angle) * 16,
      vx: Math.cos(ship.angle) * speed,
      vy: Math.sin(ship.angle) * speed,
      life: 50
    });
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
        vx: (Math.random() - 0.5) * 5,
        vy: (Math.random() - 0.5) * 5,
        color: color,
        life: 25
      });
    }
  }

  function update() {
    // Steer & thrust
    if (keys['ArrowLeft'] || keys['a'] || keys['A']) ship.angle -= 0.06;
    if (keys['ArrowRight'] || keys['d'] || keys['D']) ship.angle += 0.06;
    if (keys['ArrowUp'] || keys['w'] || keys['W']) {
      ship.vx += Math.cos(ship.angle) * 0.18;
      ship.vy += Math.sin(ship.angle) * 0.18;
      window.audio.playThrust();
    }

    // Velocity & friction
    ship.vx *= 0.98;
    ship.vy *= 0.98;
    ship.x += ship.vx;
    ship.y += ship.vy;

    // Wrap around screen
    if (ship.x < 0) ship.x = 600;
    if (ship.x > 600) ship.x = 0;
    if (ship.y < 0) ship.y = 420;
    if (ship.y > 420) ship.y = 0;

    if (ship.invulnTimer > 0) ship.invulnTimer--;

    // Update lasers
    for (let i = lasers.length - 1; i >= 0; i--) {
      const l = lasers[i];
      l.x += l.vx;
      l.y += l.vy;
      l.life--;

      // Check collision with pirates
      for (let j = pirates.length - 1; j >= 0; j--) {
        const p = pirates[j];
        const dist = Math.hypot(l.x - p.x, l.y - p.y);
        if (dist < (p.isBoss ? 24 : 16)) {
          p.hp -= 20;
          lasers.splice(i, 1);
          addParticles(p.x, p.y, '#ffd600');
          if (p.hp <= 0) {
            window.audio.playExplode();
            addParticles(p.x, p.y, '#ff3d00');
            bountyCredits += p.isBoss ? 500 : 150;
            pirates.splice(j, 1);
            updateHud();

            if (pirates.length === 0) {
              window.audio.playWarp();
              if (currentSector >= 45) {
                showOverlay("GALAXY PACIFIED!", "All 45 mercenary bounty sectors secured!", () => {
                  loadSector(1);
                  gameOverlay.classList.add('hidden');
                });
              } else {
                showOverlay("SECTOR CLEAR!", `Warping to Sector ${currentSector + 1}...`, () => {
                  loadSector(currentSector + 1);
                  gameOverlay.classList.add('hidden');
                });
              }
            }
          }
          break;
        }
      }

      if (l && l.life <= 0) lasers.splice(i, 1);
    }

    // Update pirates
    pirates.forEach(p => {
      // Swarm gently toward player
      const angle = Math.atan2(ship.y - p.y, ship.x - p.x);
      p.vx += Math.cos(angle) * 0.04;
      p.vy += Math.sin(angle) * 0.04;
      p.vx *= 0.98;
      p.vy *= 0.98;
      p.x += p.vx;
      p.y += p.vy;

      // Check pirate collision with player
      const dist = Math.hypot(ship.x - p.x, ship.y - p.y);
      if (dist < 22 && ship.invulnTimer <= 0) {
        if (ship.shields > 0) {
          ship.shields--;
        } else {
          ship.hull -= 25;
        }
        ship.invulnTimer = 40; // 0.66s invulnerability grace
        window.audio.playExplode();
        addParticles(ship.x, ship.y, '#ff0055');
        updateHud();

        if (ship.hull <= 0) {
          showOverlay("VESSEL DESTROYED", "Ejecting escape pod back to outpost hangar...", () => {
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

    // Stars
    ctx.fillStyle = '#ffffff';
    stars.forEach(s => {
      ctx.fillRect(s.x, s.y, s.size, s.size);
    });

    // Space station outpost silhouette
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(520, 80, 45, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(460, 80);
    ctx.lineTo(580, 80);
    ctx.stroke();

    // Lasers
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 3;
    lasers.forEach(l => {
      ctx.beginPath();
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x - l.vx * 1.5, l.y - l.vy * 1.5);
      ctx.stroke();
    });

    // Pirates
    pirates.forEach(p => {
      ctx.fillStyle = p.isBoss ? '#ffd600' : '#ff0055';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.isBoss ? 20 : 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // HP bar
      const bw = p.isBoss ? 30 : 20;
      ctx.fillStyle = '#300';
      ctx.fillRect(p.x - bw / 2, p.y - 18, bw, 3);
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(p.x - bw / 2, p.y - 18, bw * (p.hp / p.maxHp), 3);
    });

    // Player Gunship
    ctx.save();
    ctx.translate(ship.x, ship.y);
    ctx.rotate(ship.angle);

    if (ship.invulnTimer > 0 && Math.floor(ship.invulnTimer / 4) % 2 === 0) {
      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
    } else {
      ctx.fillStyle = '#00f0ff';
    }

    ctx.beginPath();
    ctx.moveTo(18, 0);
    ctx.lineTo(-12, -10);
    ctx.lineTo(-6, 0);
    ctx.lineTo(-12, 10);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Thruster flame
    if (keys['ArrowUp'] || keys['w'] || keys['W']) {
      ctx.fillStyle = '#ff8800';
      ctx.beginPath();
      ctx.moveTo(-6, 0);
      ctx.lineTo(-20, -5);
      ctx.lineTo(-24, 0);
      ctx.lineTo(-20, 5);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();

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
    if (e.key === ' ' || e.key === 'Spacebar') fireLaser();
  });
  window.addEventListener('keyup', e => {
    keys[e.key] = false;
  });

  document.getElementById('btnLeft').onmousedown = () => keys['ArrowLeft'] = true;
  document.getElementById('btnLeft').onmouseup = () => keys['ArrowLeft'] = false;
  document.getElementById('btnRight').onmousedown = () => keys['ArrowRight'] = true;
  document.getElementById('btnRight').onmouseup = () => keys['ArrowRight'] = false;
  document.getElementById('btnThrust').onmousedown = () => keys['ArrowUp'] = true;
  document.getElementById('btnThrust').onmouseup = () => keys['ArrowUp'] = false;
  document.getElementById('btnFire').onclick = fireLaser;

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadSector(1);
  requestAnimationFrame(render);
})();