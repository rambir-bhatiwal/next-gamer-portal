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
  const canvas = document.getElementById('arenaCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const purseDisplay = document.getElementById('purseDisplay');
  const recordDisplay = document.getElementById('recordDisplay');
  const battleLog = document.getElementById('battleLog');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentBout = 1;
  let wins = 0;
  let losses = 0;
  let credits = 0;

  let player = {
    hp: 120, maxHp: 120,
    energy: 50, maxEnergy: 50,
    defense: 0,
    anim: 'idle'
  };

  let enemy = {
    name: 'Gladiator Cyber-9',
    hp: 100, maxHp: 100,
    defense: 0,
    anim: 'idle'
  };

  let particles = [];
  let isTurnActive = true;

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentBout ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadBout(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadBout(boutNum) {
    currentBout = Math.max(1, Math.min(45, boutNum));
    const theme = THEMES[currentBout - 1];

    levelDisplay.textContent = `${currentBout}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    player.hp = player.maxHp;
    player.energy = player.maxEnergy;
    player.defense = 0;

    const baseHp = 90 + currentBout * 12;
    enemy = {
      name: currentBout % 5 === 0 ? `Grand Champion Apex-${currentBout}` : `Cyber Gladiator MK-${currentBout}`,
      hp: baseHp,
      maxHp: baseHp,
      defense: 0,
      anim: 'idle'
    };

    battleLog.textContent = `Championship Bout ${currentBout} started against ${enemy.name}!`;
    isTurnActive = true;
    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    purseDisplay.textContent = `${credits} CR`;
    recordDisplay.textContent = `${wins}W - ${losses}L`;
  }

  function playerAction(action) {
    if (!isTurnActive || player.hp <= 0 || enemy.hp <= 0) return;
    isTurnActive = false;

    player.defense = 0; // reset active shield

    if (action === 'slash') {
      const dmg = 24 + Math.floor(Math.random() * 8);
      const actualDmg = Math.max(5, dmg - enemy.defense);
      enemy.hp -= actualDmg;
      window.audio.playClash();
      battleLog.textContent = `You execute Plasma Slash for ${actualDmg} damage!`;
      addParticles(450, 200, '#00f0ff');
      player.energy = Math.min(player.maxEnergy, player.energy + 8);
    } else if (action === 'heavy') {
      if (player.energy >= 15) {
        player.energy -= 15;
        const dmg = 42 + Math.floor(Math.random() * 12);
        const actualDmg = Math.max(10, dmg - enemy.defense);
        enemy.hp -= actualDmg;
        window.audio.playHeavy();
        battleLog.textContent = `CRITICAL HEAVY STRIKE! Deals ${actualDmg} heavy plasma damage!`;
        addParticles(450, 200, '#ff007f');
      } else {
        battleLog.textContent = `Not enough energy for Heavy Strike! Standard attack performed.`;
        enemy.hp -= 15;
        window.audio.playClash();
      }
    } else if (action === 'shield') {
      player.defense = 25;
      window.audio.playShield();
      battleLog.textContent = `Defense Matrix engaged! Shielding next attack.`;
      addParticles(150, 200, '#ffd600');
    } else if (action === 'heal') {
      player.hp = Math.min(player.maxHp, player.hp + 35);
      window.audio.playHeal();
      battleLog.textContent = `Nanite repair injection restored +35 HP!`;
      addParticles(150, 200, '#39ff14');
    }

    if (enemy.hp <= 0) {
      enemy.hp = 0;
      wins++;
      credits += 100 * currentBout;
      window.audio.playFanfare();
      updateHud();
      setTimeout(() => {
        if (currentBout >= 45) {
          showOverlay("ARENA CHAMPION OF THE CENTURY!", "You defeated all 45 arena champions!", () => {
            loadBout(1);
            gameOverlay.classList.add('hidden');
          });
        } else {
          showOverlay("BOUT WON!", `Advancing to Bout ${currentBout + 1}...`, () => {
            loadBout(currentBout + 1);
            gameOverlay.classList.add('hidden');
          });
        }
      }, 700);
      return;
    }

    // Enemy turn after delay
    setTimeout(enemyTurn, 600);
  }

  function enemyTurn() {
    if (enemy.hp <= 0) return;
    const aiChoice = Math.random();

    if (aiChoice < 0.6) {
      // Attack
      const baseDmg = 15 + Math.floor(currentBout * 1.8);
      const actualDmg = Math.max(3, baseDmg - player.defense);
      player.hp -= actualDmg;
      window.audio.playClash();
      battleLog.textContent = `${enemy.name} strikes back for ${actualDmg} damage!`;
      addParticles(150, 200, '#ff0055');
    } else if (aiChoice < 0.85) {
      // Heavy Attack
      const baseDmg = 25 + Math.floor(currentBout * 2.2);
      const actualDmg = Math.max(5, baseDmg - player.defense);
      player.hp -= actualDmg;
      window.audio.playHeavy();
      battleLog.textContent = `${enemy.name} fires HEAVY OVERLOAD for ${actualDmg} damage!`;
      addParticles(150, 200, '#ffd600');
    } else {
      // Heal / Nanite
      enemy.hp = Math.min(enemy.maxHp, enemy.hp + 20);
      window.audio.playHeal();
      battleLog.textContent = `${enemy.name} repairs cyberware chassis (+20 HP)!`;
      addParticles(450, 200, '#00e5ff');
    }

    player.defense = 0; // Shield expires after turn
    isTurnActive = true;

    if (player.hp <= 0) {
      player.hp = 0;
      losses++;
      updateHud();
      showOverlay("DEFEATED IN THE ARENA", "Rebooting cyborg chassis...", () => {
        loadBout(currentBout);
        gameOverlay.classList.add('hidden');
      });
    }
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

  function render() {
    const theme = THEMES[currentBout - 1];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Arena Floor
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(300, 260, 260, 90, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Player Gladiator
    ctx.fillStyle = '#00f0ff';
    ctx.beginPath();
    ctx.arc(150, 220, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Player Blade
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(170, 210);
    ctx.lineTo(210, 160);
    ctx.stroke();

    // Enemy Gladiator
    ctx.fillStyle = theme.secondary;
    ctx.beginPath();
    ctx.arc(450, 220, 32, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Enemy Weapon
    ctx.strokeStyle = '#ff0055';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(430, 210);
    ctx.lineTo(390, 160);
    ctx.stroke();

    // Player HP & Energy Bar
    ctx.fillStyle = '#fff';
    ctx.font = '12px monospace';
    ctx.fillText(`CYBORG PILOT: ${Math.max(0, player.hp)}/${player.maxHp} HP`, 60, 50);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(60, 60, 180, 12);
    ctx.fillStyle = '#39ff14';
    ctx.fillRect(60, 60, 180 * (player.hp / player.maxHp), 12);

    ctx.fillText(`ENERGY: ${player.energy}/${player.maxEnergy}`, 60, 90);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(60, 95, 180, 8);
    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(60, 95, 180 * (player.energy / player.maxEnergy), 8);

    // Enemy HP Bar
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.fillText(`${enemy.name}: ${Math.max(0, enemy.hp)}/${enemy.maxHp} HP`, 540, 50);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(360, 60, 180, 12);
    ctx.fillStyle = '#ff0055';
    ctx.fillRect(360 + 180 * (1 - enemy.hp / enemy.maxHp), 60, 180 * (enemy.hp / enemy.maxHp), 12);
    ctx.textAlign = 'left';

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

  document.getElementById('btnSlash').onclick = () => playerAction('slash');
  document.getElementById('btnHeavy').onclick = () => playerAction('heavy');
  document.getElementById('btnShield').onclick = () => playerAction('shield');
  document.getElementById('btnHeal').onclick = () => playerAction('heal');

  window.addEventListener('keydown', e => {
    if (e.key === '1') playerAction('slash');
    if (e.key === '2') playerAction('heavy');
    if (e.key === '3') playerAction('shield');
    if (e.key === '4') playerAction('heal');
  });

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadBout(1);
  requestAnimationFrame(render);
})();