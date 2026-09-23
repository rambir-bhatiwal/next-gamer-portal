/**
 * Hacker Node Conquest: Subnet Dominance - 45 Thematic Levels
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
  const playerVal = document.getElementById('playerVal');
  const enemyVal = document.getElementById('enemyVal');
  const controlVal = document.getElementById('controlVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedNode = null;
  let dragTarget = null;
  let aiTimer = 0;
  let tickTimer = 0;
  let invulnerable = 0; // human speed fair defense

  let nodes = [];
  let packets = [];
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
    selectedNode = null;
    dragTarget = null;
    packets = [];
    particles = [];
    nodes = [];
    invulnerable = 60;

    const nodeCount = 6 + Math.min(6, Math.floor(lvl / 8));
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.38;

    // Player Root Node
    nodes.push({
      id: 0,
      x: cx - radius * 0.8,
      y: cy,
      r: 28,
      owner: 'player',
      count: 40,
      maxCount: 100,
      color: '#00f0ff'
    });

    // Enemy Root Node
    nodes.push({
      id: 1,
      x: cx + radius * 0.8,
      y: cy,
      r: 28,
      owner: 'enemy',
      count: 35 + lvl,
      maxCount: 100,
      color: '#ff1744'
    });

    // Neutral Nodes
    for (let i = 2; i < nodeCount; i++) {
      const ang = ((i - 2) / (nodeCount - 2)) * Math.PI * 2 + Math.PI / 4;
      const dist = radius * (0.45 + (i % 3) * 0.2);
      nodes.push({
        id: i,
        x: cx + Math.cos(ang) * dist,
        y: cy + Math.sin(ang) * dist,
        r: 20 + (i % 3) * 4,
        owner: 'neutral',
        count: 10 + (i % 4) * 5,
        maxCount: 60,
        color: '#78909c'
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    nextBtn.style.display = 'none';
    isPlaying = true;
    updateHUD();
  }

  function sendPackets(fromNode, toNode) {
    if (fromNode === toNode || fromNode.count <= 1) return;
    const amount = Math.floor(fromNode.count * 0.5);
    fromNode.count -= amount;

    if (window.soundEngine) window.soundEngine.playDispatch();

    for (let i = 0; i < amount; i++) {
      packets.push({
        x: fromNode.x,
        y: fromNode.y,
        target: toNode,
        owner: fromNode.owner,
        color: fromNode.owner === 'player' ? '#00f0ff' : '#ff1744',
        speed: 3.5 + Math.random() * 0.8,
        delay: i * 4
      });
    }
  }

  function updateHUD() {
    let pBits = 0, eBits = 0, pNodes = 0, total = nodes.length;
    nodes.forEach(n => {
      if (n.owner === 'player') { pBits += n.count; pNodes++; }
      else if (n.owner === 'enemy') { eBits += n.count; }
    });
    playerVal.textContent = pBits + ' BITS';
    enemyVal.textContent = eBits + ' BITS';
    const pct = Math.round((pNodes / total) * 100);
    controlVal.textContent = pct + '% / 100%';
    controlVal.style.color = pct > 50 ? '#39ff14' : '#ff1744';

    // Check Victory / Defeat
    if (pNodes === total && total > 0) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'SUBNET CONQUERED!';
      overlayDesc.textContent = '100% network capture verified in Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + ').';
      startBtn.textContent = 'COMMENCE NEXT INVASION';
      overlay.style.display = 'flex';
    } else if (pNodes === 0 && total > 0) {
      isPlaying = false;
      overlayTitle.textContent = 'NETWORK PURGED';
      overlayDesc.textContent = 'Your cyber nodes were completely quarantined by the rival botnet. Recalibrate and retry.';
      startBtn.textContent = 'RETRY SUBNET ' + currentLevel;
      overlay.style.display = 'flex';
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Network Grid Links
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }

    // Drag Line
    if (selectedNode && dragTarget) {
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(selectedNode.x, selectedNode.y);
      ctx.lineTo(dragTarget.x, dragTarget.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Draw Nodes
    nodes.forEach(n => {
      // Glow
      const glow = ctx.createRadialGradient(n.x, n.y, n.r * 0.5, n.x, n.y, n.r * 1.5);
      glow.addColorStop(0, n.color + '44');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Node Body
      ctx.fillStyle = n.owner === 'player' ? '#00f0ff' : (n.owner === 'enemy' ? '#ff1744' : '#263238');
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = n === selectedNode ? '#ffd600' : '#ffffff';
      ctx.lineWidth = n === selectedNode ? 3 : 1.5;
      ctx.stroke();

      // Bit Count
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(Math.floor(n.count), n.x, n.y);
    });

    if (!isPlaying) return;

    // Simulation Tick: Nodes produce bits
    tickTimer++;
    if (tickTimer >= 40) {
      tickTimer = 0;
      nodes.forEach(n => {
        if (n.owner !== 'neutral' && n.count < n.maxCount) {
          n.count += 1;
        }
      });
      updateHUD();
    }

    // AI Botnet Logic
    aiTimer++;
    if (aiTimer >= 90) {
      aiTimer = 0;
      const enemyNodes = nodes.filter(n => n.owner === 'enemy' && n.count >= 15);
      if (enemyNodes.length > 0) {
        const source = enemyNodes[Math.floor(Math.random() * enemyNodes.length)];
        const nonEnemy = nodes.filter(n => n.owner !== 'enemy');
        if (nonEnemy.length > 0) {
          const target = nonEnemy[Math.floor(Math.random() * nonEnemy.length)];
          sendPackets(source, target);
        }
      }
    }

    // Update Packets
    for (let i = packets.length - 1; i >= 0; i--) {
      const p = packets[i];
      if (p.delay > 0) {
        p.delay--;
        continue;
      }
      const dx = p.target.x - p.x;
      const dy = p.target.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < p.target.r) {
        // Arrived at target
        packets.splice(i, 1);
        if (p.target.owner === p.owner) {
          p.target.count += 1;
        } else {
          p.target.count -= 1;
          if (p.target.count <= 0) {
            p.target.owner = p.owner;
            p.target.count = 2;
            p.target.color = p.owner === 'player' ? '#00f0ff' : '#ff1744';
            if (window.soundEngine) window.soundEngine.playCapture();
          }
        }
        updateHUD();
        continue;
      }

      p.x += (dx / dist) * p.speed;
      p.y += (dy / dist) * p.speed;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Input Handling
  canvas.addEventListener('mousedown', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const clicked = nodes.find(n => Math.hypot(n.x - mx, n.y - my) <= n.r);
    if (clicked && clicked.owner === 'player') {
      selectedNode = clicked;
      dragTarget = { x: mx, y: my };
    }
  });

  window.addEventListener('mousemove', e => {
    if (selectedNode) {
      const rect = canvas.getBoundingClientRect();
      dragTarget = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  });

  window.addEventListener('mouseup', e => {
    if (selectedNode) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const target = nodes.find(n => Math.hypot(n.x - mx, n.y - my) <= n.r);
      if (target && target !== selectedNode) {
        sendPackets(selectedNode, target);
      }
      selectedNode = null;
      dragTarget = null;
    }
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    const allPlayer = nodes.every(n => n.owner === 'player');
    if (allPlayer) {
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
    overlayTitle.textContent = 'NETWORK SUBNET MAP (1-45)';
    overlayDesc.textContent = 'Select target node cluster topology:';
    startBtn.textContent = 'RESUME ATTACK';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();