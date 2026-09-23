/**
 * AI Defense Matrix: Neural Firewall War - 45 Thematic Levels
 */
(function() {
  'use strict';

  const THEMES = [
  { id: 1, name: "Earth Orbital Alpha", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Mars Dust Plains", bg: "#160505", primary: "#ff5722", secondary: "#ff9800", accent: "#ffeb3b", text: "#fbe9e7" },
  { id: 3, name: "Titan Methane Ocean", bg: "#02120e", primary: "#00ffcc", secondary: "#00bcd4", accent: "#76ff03", text: "#e0f2f1" },
  { id: 4, name: "Europa Sub-Surface Core", bg: "#02121a", primary: "#80d8ff", secondary: "#00b0ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 5, name: "Venusian Acid Highlands", bg: "#140e02", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fff8e1" },
  { id: 6, name: "Jovian Magnetic Vortex", bg: "#0d0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 7, name: "Saturnian Ice Ring 7", bg: "#081017", primary: "#00e5ff", secondary: "#40c4ff", accent: "#b388ff", text: "#e0f7fa" },
  { id: 8, name: "Kuiper Belt Relay", bg: "#04050d", primary: "#5c6bc0", secondary: "#3f51b5", accent: "#00f0ff", text: "#e8eaf6" },
  { id: 9, name: "Solar Corona Outpost", bg: "#170a01", primary: "#ff6d00", secondary: "#ff3d00", accent: "#ffd600", text: "#fff3e0" },
  { id: 10, name: "Oort Cloud Perimeter", bg: "#03020a", primary: "#7c4dff", secondary: "#651fff", accent: "#ff4081", text: "#ede7f6" },
  { id: 11, name: "Proxima Centauri Foundry", bg: "#14010a", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 12, name: "Sirius A Thermal Forge", bg: "#021218", primary: "#00e5ff", secondary: "#00b0ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 13, name: "Orion Nebula Spire", bg: "#120317", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 14, name: "Cygnus X-1 Event Horizon", bg: "#05010a", primary: "#9575cd", secondary: "#512da8", accent: "#00f0ff", text: "#ede7f6" },
  { id: 15, name: "Tachyon Star Bridge", bg: "#0a0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 16, name: "Silicon Wafer Megacity", bg: "#061214", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e8f5e9" },
  { id: 17, name: "Dark Matter Bastion", bg: "#020308", primary: "#7986cb", secondary: "#3949ab", accent: "#ff4081", text: "#e8eaf6" },
  { id: 18, name: "Antimatter Containment Hub", bg: "#170308", primary: "#ff1744", secondary: "#c51162", accent: "#00f0ff", text: "#ffebee" },
  { id: 19, name: "Emerald Nanite Colony", bg: "#021708", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 20, name: "Obsidian Deep Subnet", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 21, name: "Neutron Star Pulsar Hub", bg: "#0f0217", primary: "#e040fb", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 22, name: "Heliosphere Beacon", bg: "#170e02", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffff00", text: "#fff8e1" },
  { id: 23, name: "Cryo-Stasis Vault", bg: "#01121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e676", text: "#e1f5fe" },
  { id: 24, name: "Molten Magma Shelf", bg: "#170402", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 25, name: "Galactic Trade Nexus", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ffd600", text: "#e1f5fe" },
  { id: 26, name: "Asteroid Mining Belt V", bg: "#141103", primary: "#ffd600", secondary: "#ff9100", accent: "#ff3d00", text: "#fffde7" },
  { id: 27, name: "Quantum Supercluster", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 28, name: "Plasma Shield Line Alpha", bg: "#14010e", primary: "#ff007f", secondary: "#d50000", accent: "#00f0ff", text: "#ffebee" },
  { id: 29, name: "Hyper-Relay Terminal", bg: "#021217", primary: "#18ffff", secondary: "#00b0ff", accent: "#76ff03", text: "#e0f7fa" },
  { id: 30, name: "Starlight Dreadnought Yard", bg: "#090614", primary: "#b388ff", secondary: "#7c4dff", accent: "#ffd600", text: "#ede7f6" },
  { id: 31, name: "Supernova Remnant M-1", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 32, name: "Sub-Atomic Slalom Gate", bg: "#01140e", primary: "#00e676", secondary: "#1de9b6", accent: "#00f0ff", text: "#e8f5e9" },
  { id: 33, name: "Geothermal Power Basin", bg: "#160902", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffd600", text: "#fff3e0" },
  { id: 34, name: "Dark Nebula Veil", bg: "#04020a", primary: "#7e57c2", secondary: "#4527a0", accent: "#ea80fc", text: "#ede7f6" },
  { id: 35, name: "Solar Wind Sail Station", bg: "#170c01", primary: "#ffd600", secondary: "#ffab00", accent: "#ff3d00", text: "#fff8e1" },
  { id: 36, name: "Cyber-Bunker Quarantine", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 37, name: "Vaporwave Orbital Arcade", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 38, name: "Titanium Asteroid Bastion", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 39, name: "Phosphor Command Bunker", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 40, name: "Krypton Atmospheric Station", bg: "#021714", primary: "#26a69a", secondary: "#00897b", accent: "#80cbc4", text: "#e0f2f1" },
  { id: 41, name: "Quantum Horizon Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 42, name: "Singularity Defense Ring", bg: "#030208", primary: "#3f51b5", secondary: "#1a237e", accent: "#ff1744", text: "#e8eaf6" },
  { id: 43, name: "Bioluminescent Biosphere", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 44, name: "Tesseract Command Core", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Galactic Apex Citadel", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const cpuVal = document.getElementById('cpuVal');
  const coreVal = document.getElementById('coreVal');
  const scoreVal = document.getElementById('scoreVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const toolBtns = document.querySelectorAll('.tool-btn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedTool = 'firewall';
  let cpu = 100;
  let coreHealth = 100;
  let score = 0;
  let targetScore = 25;
  let spawnCooldown = 0;
  let invulnerable = 0; // human speed fair defense

  let nodes = [];
  let links = [];
  let intruders = [];
  let firewalls = [];
  let honeypots = [];
  let particles = [];

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentLevel ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        currentLevel = t.id;
        document.querySelectorAll('.lvl-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        loadLevel(currentLevel);
        overlay.style.display = 'none';
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    const theme = THEMES[(lvl - 1) % THEMES.length];
    targetScore = 20 + lvl;
    score = 0;
    cpu = 100 + lvl * 5;
    coreHealth = 100;
    intruders = [];
    firewalls = [];
    honeypots = [];
    particles = [];
    spawnCooldown = 50;
    invulnerable = 60;

    const cx = width / 2;
    const cy = height / 2;
    nodes = [];
    links = [];

    // Core Node (Center)
    nodes.push({ id: 0, x: cx, y: cy, r: 35, isCore: true });

    // Neural Ring Nodes
    const ringCount = 8;
    for (let i = 0; i < ringCount; i++) {
      const ang = (i / ringCount) * Math.PI * 2;
      const dist = Math.min(width, height) * 0.35;
      const nx = cx + Math.cos(ang) * dist;
      const ny = cy + Math.sin(ang) * dist;
      nodes.push({ id: i + 1, x: nx, y: ny, r: 16, isCore: false });
      links.push({ from: 0, to: i + 1 });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    cpuVal.textContent = cpu + ' MHz';
    coreVal.textContent = '100%';
    coreVal.style.color = '#00ff88';
    scoreVal.textContent = '0 / ' + targetScore;
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function createExplosion(x, y, color, count = 12) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 3.5 + 1;
      particles.push({
        x, y,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        life: 25,
        maxLife: 25,
        color
      });
    }
  }

  function spawnIntruder() {
    const outerNodes = nodes.filter(n => !n.isCore);
    const startNode = outerNodes[Math.floor(Math.random() * outerNodes.length)];
    const speed = 0.8 + Math.min(1.8, currentLevel * 0.03);

    intruders.push({
      x: startNode.x,
      y: startNode.y,
      currentNode: startNode,
      targetNode: nodes[0], // Moving toward core
      speed,
      hp: 12 + currentLevel,
      color: '#ff1744'
    });
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Draw Links
    links.forEach(l => {
      const n1 = nodes[l.from];
      const n2 = nodes[l.to];
      ctx.strokeStyle = theme.primary + '33';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);
      ctx.stroke();
    });

    // Draw Firewalls
    firewalls.forEach(fw => {
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.arc(fw.x, fw.y, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Honeypots
    honeypots.forEach(hp => {
      ctx.fillStyle = '#ffd600';
      ctx.beginPath();
      ctx.arc(hp.x, hp.y, 14, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Nodes
    nodes.forEach(n => {
      if (n.isCore) {
        const glow = ctx.createRadialGradient(n.x, n.y, 10, n.x, n.y, n.r * 1.5);
        glow.addColorStop(0, '#00ff8844');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#00ff88';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#04020f';
        ctx.font = 'bold 11px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('AI CORE', n.x, n.y);
      } else {
        ctx.fillStyle = theme.primary;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (!isPlaying) return;

    // Spawning Intruders
    spawnCooldown--;
    if (spawnCooldown <= 0) {
      spawnIntruder();
      spawnCooldown = Math.max(35, 75 - currentLevel);
      cpu = Math.min(200, cpu + 3);
      cpuVal.textContent = cpu + ' MHz';
    }

    // Update Intruders
    for (let i = intruders.length - 1; i >= 0; i--) {
      const intr = intruders[i];

      // Check if near honeypot
      let trapped = false;
      honeypots.forEach(hp => {
        if (Math.hypot(hp.x - intr.x, hp.y - intr.y) < 25) {
          trapped = true;
          intr.hp -= 0.5;
        }
      });

      if (!trapped) {
        const dx = intr.targetNode.x - intr.x;
        const dy = intr.targetNode.y - intr.y;
        const dist = Math.hypot(dx, dy);

        // Check firewall collision along path
        let blocked = false;
        firewalls.forEach(fw => {
          if (Math.hypot(fw.x - intr.x, fw.y - intr.y) < 14) {
            blocked = true;
            intr.hp -= 1.0;
            fw.hp = (fw.hp || 30) - 1;
          }
        });

        if (!blocked && dist > 10) {
          intr.x += (dx / dist) * intr.speed;
          intr.y += (dy / dist) * intr.speed;
        } else if (dist <= 10) {
          // Reached Core
          coreHealth = Math.max(0, coreHealth - 15);
          coreVal.textContent = coreHealth + '%';
          coreVal.style.color = coreHealth > 50 ? '#00ff88' : '#ff1744';
          createExplosion(intr.x, intr.y, '#ff1744', 15);
          intruders.splice(i, 1);

          if (coreHealth <= 0) {
            isPlaying = false;
            overlayTitle.textContent = 'NEURAL CORE QUARANTINED';
            overlayDesc.textContent = 'Intrusion packets overwhelmed the synthetic AI core in Sector ' + currentLevel + '. Reset firewall and retry.';
            startBtn.textContent = 'RETRY MATRIX ' + currentLevel;
            overlay.style.display = 'flex';
          }
          continue;
        }
      }

      // Draw Intruder
      ctx.fillStyle = intr.color;
      ctx.beginPath();
      ctx.arc(intr.x, intr.y, 6, 0, Math.PI * 2);
      ctx.fill();

      if (intr.hp <= 0) {
        createExplosion(intr.x, intr.y, '#ffd600', 10);
        intruders.splice(i, 1);
        score++;
        scoreVal.textContent = score + ' / ' + targetScore;

        if (score >= targetScore) {
          isPlaying = false;
          if (window.soundEngine) window.soundEngine.playWin();
          nextBtn.style.display = 'inline-block';
          overlayTitle.textContent = 'MATRIX SECURED!';
          overlayDesc.textContent = 'All malicious malware vectors purged in Sector ' + currentLevel + ' (' + theme.name + ').';
          startBtn.textContent = 'FORTIFY NEXT MATRIX';
          overlay.style.display = 'flex';
        }
      }
    }

    // Clean broken firewalls
    firewalls = firewalls.filter(f => (f.hp === undefined || f.hp > 0));

    // Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.life / p.maxLife;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1.0;
      if (p.life <= 0) particles.splice(i, 1);
    }
  }

  // Input Handling
  canvas.addEventListener('click', e => {
    if (!isPlaying) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (selectedTool === 'firewall' && cpu >= 25) {
      cpu -= 25;
      cpuVal.textContent = cpu + ' MHz';
      firewalls.push({ x: mx, y: my, hp: 45 });
      if (window.soundEngine) window.soundEngine.playLock();
    } else if (selectedTool === 'honeypot' && cpu >= 40) {
      cpu -= 40;
      cpuVal.textContent = cpu + ' MHz';
      honeypots.push({ x: mx, y: my });
      if (window.soundEngine) window.soundEngine.playLock();
    } else if (selectedTool === 'purge' && cpu >= 60) {
      cpu -= 60;
      cpuVal.textContent = cpu + ' MHz';
      if (window.soundEngine) window.soundEngine.playPurge();
      createExplosion(mx, my, '#00f0ff', 25);
      intruders.forEach(intr => {
        if (Math.hypot(intr.x - mx, intr.y - my) < 100) {
          intr.hp -= 20;
        }
      });
    }
  });

  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toolBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTool = btn.dataset.tool;
    });
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (score >= targetScore) {
      currentLevel = (currentLevel % THEMES.length) + 1;
    }
    loadLevel(currentLevel);
  });

  nextBtn.addEventListener('click', () => {
    currentLevel = (currentLevel % THEMES.length) + 1;
    loadLevel(currentLevel);
  });

  restartBtn.addEventListener('click', () => {
    loadLevel(currentLevel);
  });

  levelSelectBtn.addEventListener('click', () => {
    isPlaying = false;
    initLevelSelect();
    overlayTitle.textContent = 'NEURAL ARCHITECTURE MAP (1-45)';
    overlayDesc.textContent = 'Select target synthetic AI core:';
    startBtn.textContent = 'RESUME DEFENSE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();