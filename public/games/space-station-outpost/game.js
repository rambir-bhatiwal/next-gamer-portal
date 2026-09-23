/**
 * Space Station Outpost: Resource Balancer - 45 Thematic Levels
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
  const creditsVal = document.getElementById('creditsVal');
  const fuelVal = document.getElementById('fuelVal');
  const quotaVal = document.getElementById('quotaVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const tradeBtns = document.querySelectorAll('.trade-btn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let selectedCargo = 'ore';
  let credits = 100;
  let revenue = 0;
  let targetRevenue = 500;
  let fuel = 100;
  let selectedStation = null;
  let invulnerable = 0; // human speed fair defense

  let stations = [];
  let freighters = [];
  let particles = [];
  let stars = [];

  function initStars() {
    stars = [];
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2
      });
    }
  }
  initStars();

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
    targetRevenue = 400 + lvl * 25;
    credits = 120 + lvl * 10;
    revenue = 0;
    fuel = 100;
    selectedStation = null;
    freighters = [];
    particles = [];
    invulnerable = 60;

    const cx = width / 2;
    const cy = height / 2;
    const rad = Math.min(width, height) * 0.35;

    stations = [
      { id: 1, name: 'Mining Hub', type: 'ore', x: cx - rad * 0.8, y: cy - rad * 0.4, r: 26, color: '#ff9100' },
      { id: 2, name: 'Hydrogen Siphon', type: 'fuel', x: cx + rad * 0.8, y: cy - rad * 0.4, r: 26, color: '#00ffcc' },
      { id: 3, name: 'Tech Foundry', type: 'tech', x: cx - rad * 0.5, y: cy + rad * 0.6, r: 26, color: '#e040fb' },
      { id: 4, name: 'Orbital Citadel', type: 'hub', x: cx + rad * 0.5, y: cy + rad * 0.6, r: 32, color: theme.primary }
    ];

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    creditsVal.textContent = credits + ' CR';
    fuelVal.textContent = '100%';
    quotaVal.textContent = '0 / ' + targetRevenue + ' CR';
    nextBtn.style.display = 'none';
    isPlaying = true;
  }

  function createExplosion(x, y, color, count = 10) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 3 + 1;
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

  function dispatchFreighter(fromSt, toSt) {
    if (fromSt === toSt || !isPlaying) return;

    const cost = selectedCargo === 'ore' ? 15 : (selectedCargo === 'fuel' ? 25 : 40);
    if (credits < cost) return;

    credits -= cost;
    fuel = Math.max(0, fuel - 5);
    creditsVal.textContent = credits + ' CR';
    fuelVal.textContent = Math.round(fuel) + '%';
    if (window.soundEngine) window.soundEngine.playLaunch();

    const payout = cost * 2.2;
    freighters.push({
      x: fromSt.x,
      y: fromSt.y,
      target: toSt,
      speed: 2.2,
      payout,
      cargo: selectedCargo,
      color: selectedCargo === 'ore' ? '#ff9100' : (selectedCargo === 'fuel' ? '#00ffcc' : '#e040fb')
    });
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    // Stars
    stars.forEach(s => {
      ctx.fillStyle = 'rgba(255, 255, 255, ' + s.alpha + ')';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Orbital Shipping Lanes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    for (let i = 0; i < stations.length; i++) {
      for (let j = i + 1; j < stations.length; j++) {
        ctx.beginPath();
        ctx.moveTo(stations[i].x, stations[i].y);
        ctx.lineTo(stations[j].x, stations[j].y);
        ctx.stroke();
      }
    }
    ctx.setLineDash([]);

    // Draw Stations
    stations.forEach(st => {
      if (st === selectedStation) {
        ctx.strokeStyle = '#ffd600';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r + 6, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = st.color;
      ctx.beginPath();
      ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Station Label
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(st.name, st.x, st.y + st.r + 14);
    });

    if (!isPlaying) return;

    // Passive fuel recovery
    if (fuel < 100) {
      fuel = Math.min(100, fuel + 0.03);
      fuelVal.textContent = Math.round(fuel) + '%';
    }

    // Update Freighters
    for (let i = freighters.length - 1; i >= 0; i--) {
      const f = freighters[i];
      const dx = f.target.x - f.x;
      const dy = f.target.y - f.y;
      const dist = Math.hypot(dx, dy);

      if (dist < f.target.r) {
        // Arrived at destination!
        credits += Math.round(f.payout);
        revenue += Math.round(f.payout);
        creditsVal.textContent = credits + ' CR';
        quotaVal.textContent = revenue + ' / ' + targetRevenue + ' CR';
        if (window.soundEngine) window.soundEngine.playCash();
        createExplosion(f.x, f.y, f.color, 12);
        freighters.splice(i, 1);

        if (revenue >= targetRevenue) {
          isPlaying = false;
          if (window.soundEngine) window.soundEngine.playWin();
          nextBtn.style.display = 'inline-block';
          overlayTitle.textContent = 'COMMERCE QUOTA ACHIEVED!';
          overlayDesc.textContent = 'Commercial hub ' + currentLevel + ' (' + theme.name + ') achieved target volume. Prepare warp route.';
          startBtn.textContent = 'OPEN NEXT SOLAR SECTOR';
          overlay.style.display = 'flex';
        }
        continue;
      }

      f.x += (dx / dist) * f.speed;
      f.y += (dy / dist) * f.speed;

      ctx.fillStyle = f.color;
      ctx.beginPath();
      ctx.arc(f.x, f.y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

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
    const clicked = stations.find(s => Math.hypot(s.x - mx, s.y - my) <= s.r);

    if (clicked) {
      if (!selectedStation) {
        selectedStation = clicked;
      } else {
        dispatchFreighter(selectedStation, clicked);
        selectedStation = null;
      }
    } else {
      selectedStation = null;
    }
  });

  tradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tradeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCargo = btn.dataset.cargo;
    });
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (revenue >= targetRevenue) {
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
    overlayTitle.textContent = 'SOLAR SECTOR REGISTER (1-45)';
    overlayDesc.textContent = 'Select target trade corridor:';
    startBtn.textContent = 'RESUME COMMERCE';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();