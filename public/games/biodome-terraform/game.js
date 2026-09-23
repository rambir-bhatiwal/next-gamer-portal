/**
 * Bio-Dome Terraform Protocol: Ecosystem Sim - 45 Thematic Levels
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
  const tempVal = document.getElementById('tempVal');
  const gasVal = document.getElementById('gasVal');
  const stabilityVal = document.getElementById('stabilityVal');
  const biomassVal = document.getElementById('biomassVal');
  const overlay = document.getElementById('overlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayDesc = document.getElementById('overlayDesc');
  const startBtn = document.getElementById('startBtn');
  const nextBtn = document.getElementById('nextBtn');
  const restartBtn = document.getElementById('restartBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  const heatUpBtn = document.getElementById('heatUpBtn');
  const coolDownBtn = document.getElementById('coolDownBtn');
  const mistBtn = document.getElementById('mistBtn');
  const microbeBtn = document.getElementById('microbeBtn');

  let width = 0, height = 0;
  function resize() {
    width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let currentLevel = 1;
  let isPlaying = false;
  let temp = 22; // ideal 20-25
  let moisture = 50; // ideal 40-60
  let oxygen = 21;
  let biomass = 0;
  const targetBiomass = 100;
  let stability = 85;
  let tick = 0;
  let floraNodes = [];
  let gasParticles = [];
  let invulnerable = 0; // human speed fair defense

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
    temp = 15 + (lvl % 12);
    moisture = 30 + (lvl % 25);
    oxygen = 18;
    biomass = 0;
    stability = 75;
    floraNodes = [];
    gasParticles = [];
    invulnerable = 60;

    for (let i = 0; i < 40; i++) {
      gasParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 2 + 1,
        color: '#00f0ff'
      });
    }

    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;
    biomassVal.textContent = '0 / ' + targetBiomass;
    nextBtn.style.display = 'none';
    isPlaying = true;
    updateHUD();
  }

  function updateHUD() {
    // Calculate stability
    let tempDiff = Math.abs(temp - 22);
    let moistDiff = Math.abs(moisture - 50);
    stability = Math.max(10, Math.min(100, Math.round(100 - tempDiff * 3 - moistDiff * 0.8)));

    tempVal.textContent = Math.round(temp) + '°C (' + (tempDiff < 4 ? 'STABLE' : (temp > 22 ? 'HOT' : 'COLD')) + ')';
    tempVal.style.color = tempDiff < 4 ? '#39ff14' : (temp > 22 ? '#ff1744' : '#00f0ff');

    gasVal.textContent = Math.round(oxygen) + '% / 0.04%';
    stabilityVal.textContent = stability + '%';
    stabilityVal.style.color = stability > 70 ? '#39ff14' : (stability > 40 ? '#ffd600' : '#ff1744');
    biomassVal.textContent = Math.round(biomass) + ' / ' + targetBiomass;

    if (biomass >= targetBiomass && isPlaying) {
      isPlaying = false;
      if (window.soundEngine) window.soundEngine.playWin();
      nextBtn.style.display = 'inline-block';
      overlayTitle.textContent = 'TERRAFORM PROTOCOL COMPLETE!';
      overlayDesc.textContent = 'Sector ' + currentLevel + ' (' + THEMES[(currentLevel - 1) % THEMES.length].name + ') has established an autonomous, thriving biological envelope!';
      startBtn.textContent = 'PROCEED TO NEXT BIOSPHERE';
      overlay.style.display = 'flex';
    }
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    const theme = THEMES[(currentLevel - 1) % THEMES.length];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2 + 40;
    const domeR = Math.min(width, height) * 0.42;

    // Dome Arc Glow
    const dGlow = ctx.createRadialGradient(cx, cy, domeR * 0.2, cx, cy, domeR);
    dGlow.addColorStop(0, theme.primary + '22');
    dGlow.addColorStop(0.9, theme.primary + '11');
    dGlow.addColorStop(1, theme.accent + '44');
    ctx.fillStyle = dGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, domeR, Math.PI, 0);
    ctx.fill();

    // Dome Glass Arc
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, domeR, Math.PI, 0);
    ctx.stroke();

    // Ground Basin
    ctx.fillStyle = '#10141b';
    ctx.fillRect(cx - domeR - 20, cy, (domeR + 20) * 2, 80);
    ctx.strokeStyle = theme.secondary;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - domeR, cy);
    ctx.lineTo(cx + domeR, cy);
    ctx.stroke();

    // Draw Flora Nodes
    floraNodes.forEach(f => {
      ctx.fillStyle = f.color;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();

      // Stem
      ctx.strokeStyle = '#00e676';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(f.x, cy);
      ctx.lineTo(f.x, f.y);
      ctx.stroke();
    });

    // Draw Gas Particles
    gasParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < cx - domeR + 10 || p.x > cx + domeR - 10) p.vx *= -1;
      if (p.y < cy - domeR + 10 || p.y > cy - 5) p.vy *= -1;

      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    if (!isPlaying) return;

    // Simulation Tick
    tick++;
    if (tick >= 45) {
      tick = 0;
      // Slight environmental drift
      temp += (Math.random() - 0.48) * 0.4;
      moisture += (Math.random() - 0.48) * 0.5;

      if (stability >= 75) {
        biomass = Math.min(targetBiomass, biomass + 1.8);
        if (Math.random() < 0.35 && floraNodes.length < 35) {
          const fx = cx + (Math.random() - 0.5) * domeR * 1.6;
          const maxH = Math.sqrt(Math.max(0, domeR * domeR - Math.pow(fx - cx, 2))) * 0.7;
          const fy = cy - Math.random() * maxH;
          floraNodes.push({
            x: fx,
            y: fy,
            r: Math.random() * 5 + 3,
            color: Math.random() < 0.6 ? '#39ff14' : theme.accent
          });
          if (window.soundEngine) window.soundEngine.playGrow();
        }
      } else if (stability < 40) {
        biomass = Math.max(0, biomass - 0.5);
      }
      updateHUD();
    }
  }

  // Controls
  heatUpBtn.addEventListener('click', () => {
    temp += 1.8;
    if (window.soundEngine) window.soundEngine.playValve();
    updateHUD();
  });

  coolDownBtn.addEventListener('click', () => {
    temp -= 1.8;
    if (window.soundEngine) window.soundEngine.playValve();
    updateHUD();
  });

  mistBtn.addEventListener('click', () => {
    moisture = Math.min(100, moisture + 5);
    if (window.soundEngine) window.soundEngine.playValve();
    updateHUD();
  });

  microbeBtn.addEventListener('click', () => {
    if (stability >= 60) {
      biomass = Math.min(targetBiomass, biomass + 4);
      if (window.soundEngine) window.soundEngine.playGrow();
      updateHUD();
    }
  });

  startBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    if (biomass >= targetBiomass) {
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
    overlayTitle.textContent = 'BIOSPHERE SECTOR CATALOG (1-45)';
    overlayDesc.textContent = 'Select target atmospheric dome:';
    startBtn.textContent = 'RESUME TERRAFORMING';
    overlay.style.display = 'flex';
  });

  initLevelSelect();
  loadLevel(1);
  gameLoop();
})();