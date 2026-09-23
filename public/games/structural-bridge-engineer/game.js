(() => {
  const THEMES = [
  { id: 1, name: "CERN Particle Collider", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Tokamak Fusion Ring", bg: "#140402", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 3, name: "Quantum Graviton Well", bg: "#050114", primary: "#b388ff", secondary: "#7c4dff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 4, name: "Solar Core Chamber", bg: "#170a01", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 5, name: "Dark Matter Singularity", bg: "#020208", primary: "#7986cb", secondary: "#3f51b5", accent: "#ff4081", text: "#e8eaf6" },
  { id: 6, name: "Cryo-Superconductor Loop", bg: "#01121a", primary: "#80d8ff", secondary: "#00b0ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 7, name: "Antimatter Containment", bg: "#14010e", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 8, name: "Tachyon Accelerator Chute", bg: "#0d0217", primary: "#ea80fc", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 9, name: "Neutron Star Horizon", bg: "#0c0217", primary: "#e040fb", secondary: "#7c4dff", accent: "#39ff14", text: "#f3e5f5" },
  { id: 10, name: "Magnetic Flux Matrix", bg: "#021609", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 11, name: "Helios Plasma Funnel", bg: "#170601", primary: "#ff6d00", secondary: "#ff9100", accent: "#ffd600", text: "#fff3e0" },
  { id: 12, name: "Laser Interferometer", bg: "#021217", primary: "#18ffff", secondary: "#00e5ff", accent: "#ff007f", text: "#e0f7fa" },
  { id: 13, name: "Higgs Boson Laboratory", bg: "#0b051c", primary: "#7c4dff", secondary: "#651fff", accent: "#ffd600", text: "#ede7f6" },
  { id: 14, name: "Radioactive Ion Trap", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 15, name: "Prismatic Waveform Basin", bg: "#011210", primary: "#1de9b6", secondary: "#00bfa5", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 16, name: "Relativistic Spacetime Grid", bg: "#081014", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 17, name: "Photon Resonance Vault", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 18, name: "Hadron Beam Siphon", bg: "#1c0206", primary: "#ff1744", secondary: "#f50057", accent: "#ff9100", text: "#ffebee" },
  { id: 19, name: "Zero-Point Energy Conduit", bg: "#03101c", primary: "#40c4ff", secondary: "#0091ea", accent: "#39ff14", text: "#e1f5fe" },
  { id: 20, name: "Stellar Wind Ionizer", bg: "#141103", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fffde7" },
  { id: 21, name: "Synchrotron Arc Ring", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 22, name: "Magnetic Mirror Trap", bg: "#011409", primary: "#00e676", secondary: "#1de9b6", accent: "#ff007f", text: "#e8f5e9" },
  { id: 23, name: "Pulsar Emission Cone", bg: "#070c0c", primary: "#64ffda", secondary: "#1de9b6", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 24, name: "Bose-Einstein Condensate", bg: "#01071c", primary: "#2979ff", secondary: "#2962ff", accent: "#00e5ff", text: "#e3f2fd" },
  { id: 25, name: "Quark-Gluon Plasma Vat", bg: "#1c0502", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffd600", text: "#fbe9e7" },
  { id: 26, name: "Casimir Cavity Chamber", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 27, name: "Superfluid Helium Basin", bg: "#02121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#69f0ae", text: "#e1f5fe" },
  { id: 28, name: "Titanium Shock Tunnel", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#ff1744", text: "#eceff1" },
  { id: 29, name: "Electrostatic Bell Jar", bg: "#0e031c", primary: "#d500f9", secondary: "#aa00ff", accent: "#ffd600", text: "#f3e5f5" },
  { id: 30, name: "Geothermal Kinetic Well", bg: "#170802", primary: "#ff6d00", secondary: "#ff3d00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 31, name: "Gravitational Lens Array", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ea80fc", text: "#e1f5fe" },
  { id: 32, name: "Ferrofluid Vortex Tank", bg: "#03140a", primary: "#00c853", secondary: "#64dd17", accent: "#00e5ff", text: "#e8f5e9" },
  { id: 33, name: "Wormhole Metric Anchor", bg: "#0b0217", primary: "#b388ff", secondary: "#7c4dff", accent: "#ff007f", text: "#ede7f6" },
  { id: 34, name: "Hypervelocity Rail Chute", bg: "#140a00", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffd600", text: "#fff8e1" },
  { id: 35, name: "Piezoelectric Spark Bay", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 36, name: "Aerogel Impact Buffer", bg: "#050d17", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ffea00", text: "#e1f5fe" },
  { id: 37, name: "Cavitation Bubble Array", bg: "#001014", primary: "#18ffff", secondary: "#00e5ff", accent: "#ff4081", text: "#e0f7fa" },
  { id: 38, name: "Magnetohydrodynamic Vent", bg: "#160501", primary: "#ff5722", secondary: "#e64a19", accent: "#ffeb3b", text: "#fbe9e7" },
  { id: 39, name: "Quantum Hall Edge State", bg: "#090217", primary: "#ea80fc", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 40, name: "Superradiant Scattering", bg: "#170c01", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 41, name: "Kerr Singularity Ring", bg: "#060312", primary: "#9c27b0", secondary: "#673ab7", accent: "#00e5ff", text: "#ede7f6" },
  { id: 42, name: "Dirac String Filament", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 43, name: "Hawking Flux Horizon", bg: "#030209", primary: "#5c6bc0", secondary: "#3949ab", accent: "#ff1744", text: "#e8eaf6" },
  { id: 44, name: "Quantum Chromodynamic Void", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00f0ff", text: "#ede7f6" },
  { id: 45, name: "Grand Unified Field Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const themeVal = document.getElementById('themeVal');
  const budgetVal = document.getElementById('budgetVal');
  const convoyVal = document.getElementById('convoyVal');
  const stressVal = document.getElementById('stressVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const startBtn = document.getElementById('startBtn');
  const restartBtn = document.getElementById('restartBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const testBtn = document.getElementById('testBtn');
  const clearBtn = document.getElementById('clearBtn');

  let currentLevel = 1;
  let activeTheme = THEMES[0];
  let isPlaying = false;
  let isGameOver = false;
  let isVictory = false;

  let totalBudget = 16000;
  let usedBudget = 0;
  let maxStress = 0;
  let isTesting = false;

  // Nodes & Beams
  let nodes = [];
  let beams = [];
  let selectedNode = null;

  // Convoy Truck
  const truck = {
    x: 60,
    y: 280,
    w: 55,
    h: 22,
    vx: 0,
    invulnTimer: 60,
    active: false
  };

  const chasm = {
    leftX: 180,
    rightX: 820,
    depth: 550,
    deckY: 280
  };

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function initLevelSelect() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '');
      btn.textContent = i;
      btn.onclick = () => {
        loadLevel(i);
        overlay.style.display = 'none';
        startGame();
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadLevel(lvl) {
    currentLevel = lvl;
    activeTheme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = currentLevel + ': ' + activeTheme.name;
    themeVal.style.color = activeTheme.primary;

    totalBudget = 16000 + (lvl * 800);
    usedBudget = 0;
    maxStress = 0;
    isTesting = false;
    selectedNode = null;

    truck.x = 60;
    truck.y = chasm.deckY;
    truck.vx = 0;
    truck.invulnTimer = 60;
    truck.active = false;

    // Chasm fixed anchor nodes
    nodes = [
      { id: 0, x: chasm.leftX, y: chasm.deckY, fixed: true },
      { id: 1, x: chasm.leftX, y: chasm.deckY + 90, fixed: true },
      { id: 2, x: chasm.rightX, y: chasm.deckY, fixed: true },
      { id: 3, x: chasm.rightX, y: chasm.deckY + 90, fixed: true }
    ];

    // Sub-divided deck points across gap
    const stepCount = 5;
    const stepW = (chasm.rightX - chasm.leftX) / stepCount;
    for (let i = 1; i < stepCount; i++) {
      nodes.push({
        id: 3 + i,
        x: chasm.leftX + stepW * i,
        y: chasm.deckY,
        fixed: false
      });
      // Lower truss node
      nodes.push({
        id: 3 + stepCount + i,
        x: chasm.leftX + stepW * i,
        y: chasm.deckY + 80,
        fixed: false
      });
    }

    beams = [];
    updateHUD();
    document.querySelectorAll('.lvl-btn').forEach((b, idx) => {
      b.className = 'lvl-btn' + (idx + 1 === currentLevel ? ' active' : '');
    });
  }

  function updateHUD() {
    budgetVal.textContent = '$' + (totalBudget - usedBudget).toLocaleString() + ' / $' + totalBudget.toLocaleString();
    budgetVal.style.color = (totalBudget - usedBudget) > 2000 ? '#00f0ff' : '#ff1744';
    stressVal.textContent = Math.round(maxStress) + '% STRESS';
    stressVal.style.color = maxStress < 70 ? '#00ff88' : '#ff1744';
    convoyVal.textContent = isTesting ? (truck.active ? 'TRANSITING SPAN...' : 'COMPLETED') : 'READY AT DOCK';
  }

  function addBeam(n1, n2) {
    if (n1.id === n2.id) return;
    const exists = beams.some(b => (b.n1.id === n1.id && b.n2.id === n2.id) || (b.n1.id === n2.id && b.n2.id === n1.id));
    if (exists) return;

    const len = Math.hypot(n2.x - n1.x, n2.y - n1.y);
    const cost = Math.round(len * 8);

    if (usedBudget + cost > totalBudget) return;

    usedBudget += cost;
    beams.push({ n1, n2, len, cost, stress: 0, broken: false });
    window.soundFX.playBeamClick();
    updateHUD();
  }

  function startTesting() {
    if (isTesting || beams.length < 3) return;
    isTesting = true;
    truck.x = 60;
    truck.vx = 2.4;
    truck.active = true;
    updateHUD();
  }

  function startGame() {
    isPlaying = true;
    isGameOver = false;
    isVictory = false;
    nextBtn.style.display = 'none';
  }

  // Pointer interactions for building beams
  function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (1000 / rect.width),
      y: (clientY - rect.top) * (600 / rect.height)
    };
  }

  canvas.addEventListener('click', (e) => {
    if (!isPlaying || isTesting) return;
    const pos = getCanvasPos(e);
    const clickedNode = nodes.find(n => Math.hypot(n.x - pos.x, n.y - pos.y) < 22);

    if (clickedNode) {
      if (!selectedNode) {
        selectedNode = clickedNode;
      } else {
        addBeam(selectedNode, clickedNode);
        selectedNode = null;
      }
    } else {
      selectedNode = null;
    }
  });

  testBtn.onclick = () => startTesting();
  clearBtn.onclick = () => {
    if (isTesting) return;
    beams = [];
    usedBudget = 0;
    updateHUD();
  };

  startBtn.onclick = () => {
    overlay.style.display = 'none';
    loadLevel(currentLevel);
    startGame();
  };
  restartBtn.onclick = () => {
    loadLevel(currentLevel);
    startGame();
  };
  nextBtn.onclick = () => {
    loadLevel(currentLevel < 45 ? currentLevel + 1 : 1);
    startGame();
  };
  levelSelectBtn.onclick = () => {
    overlay.style.display = 'flex';
    isPlaying = false;
  };

  function update() {
    if (!isPlaying || isGameOver || isVictory) return;

    if (truck.invulnTimer > 0) truck.invulnTimer--;

    // Update Truck transit
    if (isTesting && truck.active) {
      truck.x += truck.vx;

      // Calculate beam load & stress
      maxStress = 0;
      beams.forEach(b => {
        if (!b.broken) {
          const midX = (b.n1.x + b.n2.x) / 2;
          const distToTruck = Math.abs(midX - truck.x);
          if (distToTruck < 140) {
            b.stress = Math.min(120, (140 - distToTruck) * 0.75 + (b.cost * 0.02));
          } else {
            b.stress = 0;
          }
          if (b.stress > maxStress) maxStress = b.stress;

          // Structural break if stress exceeds 100%
          if (b.stress >= 100) {
            b.broken = true;
            window.soundFX.playSnap();
          }
        }
      });

      // Check if bridge collapsed beneath truck
      const activeDecks = beams.filter(b => !b.broken && Math.abs(b.n1.y - chasm.deckY) < 10 && Math.abs(b.n2.y - chasm.deckY) < 10);
      const isSupported = (truck.x < chasm.leftX || truck.x > chasm.rightX) || activeDecks.some(b => truck.x >= Math.min(b.n1.x, b.n2.x) - 10 && truck.x <= Math.max(b.n1.x, b.n2.x) + 10);

      if (!isSupported) {
        // Truck falls into chasm
        truck.y += 6;
        if (truck.y > chasm.depth) {
          truck.active = false;
          isGameOver = true;
          overlayTitle.textContent = "STRUCTURAL COLLAPSE";
          overlayDesc.textContent = "The bridge failed to withstand convoy stress loads. Strengthen your truss geometry!";
          overlay.style.display = 'flex';
        }
      }

      // Reached far bank
      if (truck.x >= chasm.rightX + 60) {
        truck.active = false;
        isVictory = true;
        window.soundFX.playClear();
        overlayTitle.textContent = "CHASM " + currentLevel + " CONQUERED!";
        overlayDesc.textContent = "Convoy safely transited the span! Advance to next chasm crossing.";
        nextBtn.style.display = 'inline-block';
        overlay.style.display = 'flex';
      }

      updateHUD();
    }
  }

  function render() {
    ctx.fillStyle = activeTheme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Scale coordinates
    const scaleX = canvas.width / 1000;
    const scaleY = canvas.height / 600;
    ctx.save();
    ctx.scale(scaleX, scaleY);

    // Draw Canyon Cliffs
    ctx.fillStyle = '#101626';
    ctx.fillRect(0, chasm.deckY, chasm.leftX, 320);
    ctx.fillRect(chasm.rightX, chasm.deckY, 1000 - chasm.rightX, 320);

    ctx.strokeStyle = activeTheme.primary;
    ctx.lineWidth = 3;
    ctx.strokeRect(0, chasm.deckY, chasm.leftX, 320);
    ctx.strokeRect(chasm.rightX, chasm.deckY, 1000 - chasm.rightX, 320);

    // Draw Beams
    beams.forEach(b => {
      if (!b.broken) {
        ctx.save();
        // Color code stress from green to red
        let beamColor = '#39ff14';
        if (b.stress > 50) beamColor = '#ffd600';
        if (b.stress > 80) beamColor = '#ff1744';

        ctx.strokeStyle = beamColor;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(b.n1.x, b.n1.y);
        ctx.lineTo(b.n2.x, b.n2.y);
        ctx.stroke();
        ctx.restore();
      }
    });

    // Draw Nodes
    nodes.forEach(n => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(n.x, n.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = n.fixed ? '#ffab00' : '#00f0ff';
      if (selectedNode && selectedNode.id === n.id) {
        ctx.shadowColor = '#ff007f';
        ctx.shadowBlur = 15;
        ctx.fillStyle = '#ff007f';
      }
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    });

    // Draw Truck
    ctx.save();
    ctx.translate(truck.x, truck.y - truck.h);
    ctx.fillStyle = '#ff3d00';
    ctx.fillRect(0, 0, truck.w, truck.h);
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, truck.w, truck.h);

    // Wheels
    ctx.fillStyle = '#111';
    ctx.beginPath();
    ctx.arc(12, truck.h + 2, 6, 0, Math.PI * 2);
    ctx.arc(42, truck.h + 2, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.restore();
  }

  function loop() {
    update();
    render();
    requestAnimationFrame(loop);
  }

  initLevelSelect();
  loadLevel(1);
  loop();
})();