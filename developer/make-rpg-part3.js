/**
 * Next Games/Game — RPG Category Part 3:
 * - post-apocalyptic-barterer (Game 97)
 * - rogue-drone-swarm (Game 98)
 * - neon-samurai (Game 99)
 * - quantum-chrono-rpg (Game 100) — THE CENTURY FINALE!
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');
const thumbsDir = path.join(rootDir, 'assets', 'thumbnails');

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

function copyThumbnailToIcon(gameId) {
  const thumbPath = path.join(thumbsDir, `${gameId}.svg`);
  const iconPath = path.join(gamesDir, gameId, 'assets', 'icon.svg');
  if (fs.existsSync(thumbPath)) {
    const content = fs.readFileSync(thumbPath, 'utf-8');
    writeFile(iconPath, content);
  } else {
    const fallback = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#0c0724" stroke="#00f0ff" stroke-width="4"/><polygon points="50,20 80,75 20,75" fill="#ff007f"/></svg>`;
    writeFile(iconPath, fallback);
  }
}

// 45 THEMES GENERATOR HELPER
function generateRPGThemes() {
  const themeNames = [
    "Scrap City Gateway", "Salt Flat Bazaar", "Oasis Outpost", "Bunker 101 Market",
    "Rust Valley Depot", "Radioactive Crater Post", "Solar Ridge Station", "Derelict Highway Camp",
    "Toxic River Crossing", "Ironclad Citadel", "Dustbowl Trading Hub", "Silo Alpha Exchange",
    "Ashfall Nomad Market", "Canyon Wind Camp", "Geothermal Vent Settlement", "Scavenger Junk Ridge",
    "Neon Oasis Haven", "Subway Ruins Den", "Radar Tower Outpost", "Old World Mall Ruins",
    "Copper Mine Colony", "Pipeline Junction Camp", "Guzzler Gas Haven", "Irradiated Forest Edge",
    "Dry Lakebed Camp", "Obsidian Quarry Exchange", "Thunder Peak Fort", "Chemical Basin Camp",
    "Forgotten Runway Depot", "Monorail Terminal Haven", "Titanium Scraps Depot", "Underground Sump Bazaar",
    "Red Rock Encampment", "Glass Desert Trading Post", "Sulphur Spring Settlement", "Barren Plateau Outpost",
    "Wind Turbine Citadel", "Submerged Freeway Camp", "Vault 42 Market", "Crater Rim Station",
    "Dust Devil Trading Caravan", "Spire Lookout Settlement", "Boneyard Vehicle Exchange", "Apex Wastes Trading Hub",
    "Century Promised Land Oasis"
  ];

  const colorPalettes = [
    { bg: "#140a04", primary: "#ffb300", secondary: "#ff3d00", accent: "#00e5ff" },
    { bg: "#06130b", primary: "#00e676", secondary: "#00e5ff", accent: "#ffd600" },
    { bg: "#16030c", primary: "#ff0055", secondary: "#00f0ff", accent: "#ffd600" },
    { bg: "#0e0524", primary: "#ffd600", secondary: "#7c4dff", accent: "#00f0ff" },
    { bg: "#030d1a", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14" }
  ];

  return themeNames.map((name, i) => {
    const pal = colorPalettes[i % colorPalettes.length];
    return {
      id: i + 1,
      name: `Stage ${i + 1}: ${name}`,
      bg: pal.bg,
      primary: pal.primary,
      secondary: pal.secondary,
      accent: pal.accent
    };
  });
}

const RPG_THEMES_CODE = `const THEMES = ${JSON.stringify(generateRPGThemes(), null, 2)};\n`;

// ============================================================================
// GAME 97: POST-APOCALYPTIC BARTERER: WASTELAND MERCHANT
// ============================================================================
function buildGame97() {
  const gameId = 'post-apocalyptic-barterer';
  console.log(`Building Game 97: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Post-Apocalyptic Barterer: Wasteland Merchant - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">STAGE</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">SETTLEMENT</span><span id="themeDisplay" class="value">Scrap City</span></div>
      <div class="hud-item"><span class="label">CAPS</span><span id="capsDisplay" class="value">300 CAPS</span></div>
      <div class="hud-item"><span class="label">WATER</span><span id="waterDisplay" class="value">20 GAL</span></div>
      <div class="hud-item"><span class="label">FUEL</span><span id="fuelDisplay" class="value">15 GAL</span></div>
      <button id="levelSelectBtn" class="btn-level-select">STAGES</button>
    </header>

    <main class="trading-board">
      <div id="eventLog" class="event-log">Welcome to the settlement. Buy low, sell high, and manage caravan supplies!</div>
      
      <div class="market-grid">
        <div class="market-card">
          <span class="comm-title">💧 Purified Water</span>
          <span id="priceWater" class="comm-price">10 Caps</span>
          <div class="comm-btn-row">
            <button class="buy-btn" data-comm="water">BUY</button>
            <button class="sell-btn" data-comm="water">SELL</button>
          </div>
          <span id="invWater" class="comm-inv">Stock: 20</span>
        </div>

        <div class="market-card">
          <span class="comm-title">⚙️ Scrap Metal</span>
          <span id="priceScrap" class="comm-price">25 Caps</span>
          <div class="comm-btn-row">
            <button class="buy-btn" data-comm="scrap">BUY</button>
            <button class="sell-btn" data-comm="scrap">SELL</button>
          </div>
          <span id="invScrap" class="comm-inv">Stock: 5</span>
        </div>

        <div class="market-card">
          <span class="comm-title">⛽ Bio-Fuel</span>
          <span id="priceFuel" class="comm-price">18 Caps</span>
          <div class="comm-btn-row">
            <button class="buy-btn" data-comm="fuel">BUY</button>
            <button class="sell-btn" data-comm="fuel">SELL</button>
          </div>
          <span id="invFuel" class="comm-inv">Stock: 15</span>
        </div>

        <div class="market-card">
          <span class="comm-title">💉 Medical Stims</span>
          <span id="priceStims" class="comm-price">40 Caps</span>
          <div class="comm-btn-row">
            <button class="buy-btn" data-comm="stims">BUY</button>
            <button class="sell-btn" data-comm="stims">SELL</button>
          </div>
          <span id="invStims" class="comm-inv">Stock: 2</span>
        </div>
      </div>
    </main>

    <footer class="hud-footer">
      <button id="btnTravel" class="btn-travel">🚚 TRAVEL TO NEXT SETTLEMENT (-3 Water, -2 Fuel)</button>
      <div class="controls-hint">Navigate trade routes across 45 wasteland settlements! Survive raider ambushes!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT WASTELAND SETTLEMENT (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

  const css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #0f0802;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.game-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 680px;
  height: 100vh;
  max-height: 720px;
  background: radial-gradient(circle at center, #241407 0%, #0f0802 100%);
  border: 1px solid rgba(255, 179, 0, 0.3);
  box-shadow: 0 0 35px rgba(255, 179, 0, 0.15);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(22, 12, 4, 0.85);
  border-bottom: 1px solid rgba(255, 179, 0, 0.25);
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  color: #ffe082;
  letter-spacing: 1px;
}
.hud-item .value {
  font-size: 13px;
  font-weight: 800;
  color: #ffb300;
  font-family: monospace;
}
.btn-level-select {
  background: #ffb300;
  border: none;
  color: #000;
  font-weight: 800;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.trading-board {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 14px;
  gap: 12px;
  overflow-y: auto;
}
.event-log {
  background: rgba(14, 7, 2, 0.9);
  border: 1px solid rgba(255, 179, 0, 0.2);
  padding: 10px 14px;
  font-family: monospace;
  font-size: 12px;
  color: #ffb300;
  min-height: 52px;
  border-radius: 4px;
}
.market-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.market-card {
  background: #1e1106;
  border: 1px solid #ffb300;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.comm-title {
  font-size: 12px;
  font-weight: bold;
  color: #fff;
}
.comm-price {
  font-size: 14px;
  font-weight: 900;
  color: #ffd600;
  font-family: monospace;
}
.comm-btn-row {
  display: flex;
  gap: 6px;
}
.buy-btn {
  flex: 1;
  background: #39ff14;
  color: #000;
  border: none;
  padding: 6px;
  font-weight: bold;
  font-size: 11px;
  border-radius: 3px;
  cursor: pointer;
}
.sell-btn {
  flex: 1;
  background: #ff3d00;
  color: #fff;
  border: none;
  padding: 6px;
  font-weight: bold;
  font-size: 11px;
  border-radius: 3px;
  cursor: pointer;
}
.comm-inv {
  font-size: 10px;
  color: #ffe082;
  font-family: monospace;
}
.hud-footer {
  padding: 12px;
  background: rgba(18, 9, 3, 0.95);
  border-top: 1px solid rgba(255, 179, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.btn-travel {
  width: 100%;
  max-width: 480px;
  background: #ffb300;
  color: #000;
  border: none;
  padding: 12px;
  font-weight: 900;
  font-size: 13px;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 0.5px;
}
.controls-hint {
  font-size: 10px;
  color: #ffe082;
  opacity: 0.8;
}
.modal-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(6, 3, 1, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-content {
  background: #1c0e04;
  border: 1px solid #ffb300;
  border-radius: 8px;
  padding: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-content h2 {
  color: #ffb300;
  font-size: 16px;
  margin-bottom: 12px;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  width: 100%;
  overflow-y: auto;
  max-height: 50vh;
}
.lvl-btn {
  background: #2e1706;
  border: 1px solid #ffb300;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ffb300;
  color: #000;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #ffb300;
  color: #000;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Wasteland Merchant
class MerchantAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playCoin() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, this.ctx.currentTime);
    osc.frequency.setValueAtTime(2200, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
  playTravel() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(60, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }
  playRaiders() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(250, this.ctx.currentTime);
    osc.frequency.setValueAtTime(100, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }
}
window.audio = new MerchantAudio();`;

  const game = `${RPG_THEMES_CODE}
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

    levelDisplay.textContent = \`\${currentStage}/45\`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    // Shift market prices based on stage
    prices.water = Math.max(5, Math.floor(10 + Math.sin(currentStage * 1.5) * 6));
    prices.scrap = Math.max(12, Math.floor(25 + Math.cos(currentStage * 1.2) * 12));
    prices.fuel = Math.max(10, Math.floor(18 + Math.sin(currentStage * 2.1) * 8));
    prices.stims = Math.max(20, Math.floor(40 + Math.cos(currentStage * 0.9) * 18));

    eventLog.textContent = \`Arrived at \${theme.name}! Market commodities updated for local region.\`;
    updateDisplay();
    initLevelGrid();
  }

  function updateDisplay() {
    capsDisplay.textContent = \`\${caps} CAPS\`;
    waterDisplay.textContent = \`\${inv.water} GAL\`;
    fuelDisplay.textContent = \`\${inv.fuel} GAL\`;

    document.getElementById('priceWater').textContent = \`\${prices.water} Caps\`;
    document.getElementById('priceScrap').textContent = \`\${prices.scrap} Caps\`;
    document.getElementById('priceFuel').textContent = \`\${prices.fuel} Caps\`;
    document.getElementById('priceStims').textContent = \`\${prices.stims} Caps\`;

    document.getElementById('invWater').textContent = \`Stock: \${inv.water}\`;
    document.getElementById('invScrap').textContent = \`Stock: \${inv.scrap}\`;
    document.getElementById('invFuel').textContent = \`Stock: \${inv.fuel}\`;
    document.getElementById('invStims').textContent = \`Stock: \${inv.stims}\`;
  }

  function buy(comm) {
    const cost = prices[comm];
    if (caps >= cost) {
      caps -= cost;
      inv[comm]++;
      window.audio.playCoin();
      eventLog.textContent = \`Bought 1 \${comm.toUpperCase()} for \${cost} Caps.\`;
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
      eventLog.textContent = \`Sold 1 \${comm.toUpperCase()} for \${payout} Caps.\`;
      updateDisplay();
    } else {
      eventLog.textContent = \`No \${comm.toUpperCase()} left in caravan inventory to sell!\`;
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
      eventLog.textContent = \`RAIDER AMBUSH on the dunes! Fended off bandits, paid \${loss} Caps in damages.\`;
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
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 97 (${gameId}) built successfully.`);
}

// ============================================================================
// GAME 98: ROGUE DRONE SWARM: CRAFT & EVOLVE
// ============================================================================
function buildGame98() {
  const gameId = 'rogue-drone-swarm';
  console.log(`Building Game 98: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rogue Drone Swarm: Craft & Evolve - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">SECTOR</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">PROVING GROUND</span><span id="themeDisplay" class="value">Junkyard Alpha</span></div>
      <div class="hud-item"><span class="label">HULL</span><span id="hullDisplay" class="value">100/100</span></div>
      <div class="hud-item"><span class="label">MODULES</span><span id="modDisplay" class="value">1/4</span></div>
      <div class="hud-item"><span class="label">SCRAP</span><span id="scrapDisplay" class="value">0</span></div>
      <button id="levelSelectBtn" class="btn-level-select">SECTORS</button>
    </header>

    <main class="canvas-wrapper">
      <canvas id="droneCanvas" width="600" height="420"></canvas>
      <div id="gameOverlay" class="game-overlay hidden">
        <h2 id="overlayTitle">SECTOR HARVEST COMPLETE!</h2>
        <p id="overlayMessage">All rogue drones dismantled.</p>
        <button id="overlayBtn" class="btn-action">NEXT SECTOR</button>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="drone-controls">
        <button class="ctrl-btn" id="btnUp">▲</button>
        <div class="ctrl-row">
          <button class="ctrl-btn" id="btnLeft">◀</button>
          <button class="ctrl-btn fire" id="btnFire">FIRE</button>
          <button class="ctrl-btn" id="btnRight">▶</button>
        </div>
        <button class="ctrl-btn" id="btnDown">▼</button>
      </div>
      <div class="controls-hint">Move drone with Arrow Keys/WASD. Space/Click to fire. Collect scrap to evolve module arms!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT PROVING GROUND SECTOR (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

  const css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #040e07;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.game-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 680px;
  height: 100vh;
  max-height: 720px;
  background: radial-gradient(circle at center, #0b1f13 0%, #040e07 100%);
  border: 1px solid rgba(0, 230, 118, 0.3);
  box-shadow: 0 0 35px rgba(0, 230, 118, 0.15);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(6, 20, 11, 0.85);
  border-bottom: 1px solid rgba(0, 230, 118, 0.25);
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  color: #b9f6ca;
  letter-spacing: 1px;
}
.hud-item .value {
  font-size: 13px;
  font-weight: 800;
  color: #00e676;
  font-family: monospace;
}
.btn-level-select {
  background: #00e676;
  border: none;
  color: #000;
  font-weight: 800;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.canvas-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
canvas {
  background: #05140a;
  border: 1px solid rgba(0, 230, 118, 0.2);
  width: 100%;
  max-width: 600px;
  height: 420px;
}
.hud-footer {
  padding: 8px 12px;
  background: rgba(5, 17, 9, 0.95);
  border-top: 1px solid rgba(0, 230, 118, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.drone-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}
.ctrl-row {
  display: flex;
  gap: 3px;
}
.ctrl-btn {
  background: #0e2917;
  border: 1px solid #00e676;
  color: #00e676;
  width: 44px;
  height: 32px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}
.ctrl-btn.fire {
  background: #00e676;
  color: #000;
}
.controls-hint {
  font-size: 10px;
  color: #b9f6ca;
  opacity: 0.8;
}
.game-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(3, 10, 5, 0.9);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 20;
}
.game-overlay.hidden { display: none; }
.game-overlay h2 {
  font-size: 26px;
  font-weight: 900;
  color: #00e676;
  text-shadow: 0 0 12px #00e676;
}
.btn-action {
  background: #00e676;
  color: #000;
  font-weight: 800;
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.modal-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(2, 8, 4, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-content {
  background: #0c2413;
  border: 1px solid #00e676;
  border-radius: 8px;
  padding: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-content h2 {
  color: #00e676;
  font-size: 16px;
  margin-bottom: 12px;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  width: 100%;
  overflow-y: auto;
  max-height: 50vh;
}
.lvl-btn {
  background: #14361c;
  border: 1px solid #00e676;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #00e676;
  color: #000;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #00e676;
  color: #000;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Rogue Drone Swarm
class DroneAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playShot() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  playSnap() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.setValueAtTime(800, this.ctx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  playHit() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
}
window.audio = new DroneAudio();`;

  const game = `${RPG_THEMES_CODE}
(function() {
  const canvas = document.getElementById('droneCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const hullDisplay = document.getElementById('hullDisplay');
  const modDisplay = document.getElementById('modDisplay');
  const scrapDisplay = document.getElementById('scrapDisplay');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentSector = 1;
  let scrapCount = 0;

  let player = {
    x: 300, y: 210,
    speed: 3.5,
    hull: 100, maxHull: 100,
    modules: 1, // 1 to 4 attached module weapons
    invulnTimer: 0
  };

  let bullets = [];
  let enemies = [];
  let scraps = [];
  let particles = [];
  let keys = {};

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

  function loadSector(num) {
    currentSector = Math.max(1, Math.min(45, num));
    const theme = THEMES[currentSector - 1];

    levelDisplay.textContent = \`\${currentSector}/45\`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    player.x = 300;
    player.y = 210;
    player.hull = 100;
    player.modules = 1 + Math.floor(currentSector / 15);
    player.invulnTimer = 60; // 1s spawn grace

    bullets = [];
    enemies = [];
    scraps = [];

    const eCount = 6 + Math.floor(currentSector / 4);
    for (let i = 0; i < eCount; i++) {
      enemies.push({
        x: Math.random() * 540 + 30,
        y: Math.random() < 0.5 ? 40 : 380,
        hp: 20 + currentSector * 4,
        maxHp: 20 + currentSector * 4,
        speed: 1.0 + Math.random() * 0.5,
        isBoss: i === 0 && currentSector % 5 === 0
      });
    }

    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    hullDisplay.textContent = \`\${Math.max(0, player.hull)}/\${player.maxHull}\`;
    modDisplay.textContent = \`\${player.modules}/4\`;
    scrapDisplay.textContent = scrapCount;
  }

  function fireWeapon() {
    window.audio.playShot();
    bullets.push({ x: player.x, y: player.y - 15, vx: 0, vy: -7 });
    if (player.modules >= 2) bullets.push({ x: player.x, y: player.y + 15, vx: 0, vy: 7 });
    if (player.modules >= 3) bullets.push({ x: player.x - 15, y: player.y, vx: -7, vy: 0 });
    if (player.modules >= 4) bullets.push({ x: player.x + 15, y: player.y, vx: 7, vy: 0 });
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
    if (keys['ArrowUp'] || keys['w'] || keys['W']) player.y -= player.speed;
    if (keys['ArrowDown'] || keys['s'] || keys['S']) player.y += player.speed;
    if (keys['ArrowLeft'] || keys['a'] || keys['A']) player.x -= player.speed;
    if (keys['ArrowRight'] || keys['d'] || keys['D']) player.x += player.speed;

    player.x = Math.max(20, Math.min(580, player.x));
    player.y = Math.max(20, Math.min(400, player.y));

    if (player.invulnTimer > 0) player.invulnTimer--;

    // Update bullets
    for (let i = bullets.length - 1; i >= 0; i--) {
      const b = bullets[i];
      b.x += b.vx;
      b.y += b.vy;

      for (let j = enemies.length - 1; j >= 0; j--) {
        const e = enemies[j];
        if (Math.hypot(b.x - e.x, b.y - e.y) < (e.isBoss ? 24 : 16)) {
          e.hp -= 20;
          bullets.splice(i, 1);
          addParticles(e.x, e.y, '#00e676');

          if (e.hp <= 0) {
            window.audio.playHit();
            scraps.push({ x: e.x, y: e.y });
            enemies.splice(j, 1);
            addParticles(e.x, e.y, '#ffd600');

            if (enemies.length === 0) {
              window.audio.playSnap();
              if (currentSector >= 45) {
                showOverlay("SWARM MATRIX DOMINATED!", "Core drone achieved Apex Form across all 45 sectors!", () => {
                  loadSector(1);
                  gameOverlay.classList.add('hidden');
                });
              } else {
                showOverlay("SECTOR HARVEST COMPLETE!", \`Proceeding to Sector \${currentSector + 1}...\`, () => {
                  loadSector(currentSector + 1);
                  gameOverlay.classList.add('hidden');
                });
              }
            }
          }
          break;
        }
      }

      if (b && (b.x < 0 || b.x > 600 || b.y < 0 || b.y > 420)) bullets.splice(i, 1);
    }

    // Update scraps
    for (let i = scraps.length - 1; i >= 0; i--) {
      const sc = scraps[i];
      if (Math.hypot(player.x - sc.x, player.y - sc.y) < 26) {
        scraps.splice(i, 1);
        scrapCount += 5;
        if (player.modules < 4 && scrapCount >= player.modules * 15) {
          player.modules++;
          window.audio.playSnap();
        }
        updateHud();
      }
    }

    // Update enemies
    enemies.forEach(e => {
      const angle = Math.atan2(player.y - e.y, player.x - e.x);
      e.x += Math.cos(angle) * e.speed;
      e.y += Math.sin(angle) * e.speed;

      if (Math.hypot(player.x - e.x, player.y - e.y) < 22 && player.invulnTimer <= 0) {
        player.hull -= 18;
        player.invulnTimer = 35; // 0.6s grace
        window.audio.playHit();
        addParticles(player.x, player.y, '#ff0055');
        updateHud();

        if (player.hull <= 0) {
          showOverlay("DRONE DISMANTLED", "Re-synthesizing core frame...", () => {
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

    // Bullets
    ctx.fillStyle = '#00e676';
    bullets.forEach(b => {
      ctx.beginPath();
      ctx.arc(b.x, b.y, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // Scraps
    scraps.forEach(sc => {
      ctx.fillStyle = '#ffd600';
      ctx.fillRect(sc.x - 4, sc.y - 4, 8, 8);
    });

    // Enemies
    enemies.forEach(e => {
      ctx.fillStyle = e.isBoss ? '#ffd600' : '#ff0055';
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.isBoss ? 20 : 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Player Drone Core
    ctx.fillStyle = player.invulnTimer > 0 && Math.floor(player.invulnTimer / 4) % 2 === 0 ? 'rgba(0, 230, 118, 0.4)' : '#00e676';
    ctx.beginPath();
    ctx.arc(player.x, player.y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Module Arms
    ctx.fillStyle = '#00e5ff';
    if (player.modules >= 2) ctx.fillRect(player.x - 4, player.y + 14, 8, 10);
    if (player.modules >= 3) ctx.fillRect(player.x - 24, player.y - 4, 10, 8);
    if (player.modules >= 4) ctx.fillRect(player.x + 14, player.y - 4, 10, 8);

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
    if (e.key === ' ' || e.key === 'Spacebar') fireWeapon();
  });
  window.addEventListener('keyup', e => {
    keys[e.key] = false;
  });

  document.getElementById('btnUp').onmousedown = () => keys['ArrowUp'] = true;
  document.getElementById('btnUp').onmouseup = () => keys['ArrowUp'] = false;
  document.getElementById('btnDown').onmousedown = () => keys['ArrowDown'] = true;
  document.getElementById('btnDown').onmouseup = () => keys['ArrowDown'] = false;
  document.getElementById('btnLeft').onmousedown = () => keys['ArrowLeft'] = true;
  document.getElementById('btnLeft').onmouseup = () => keys['ArrowLeft'] = false;
  document.getElementById('btnRight').onmousedown = () => keys['ArrowRight'] = true;
  document.getElementById('btnRight').onmouseup = () => keys['ArrowRight'] = false;
  document.getElementById('btnFire').onclick = fireWeapon;

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadSector(1);
  requestAnimationFrame(render);
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 98 (${gameId}) built successfully.`);
}

// ============================================================================
// GAME 99: NEON SAMURAI: BUSHIDO CYBER ODYSSEY
// ============================================================================
function buildGame99() {
  const gameId = 'neon-samurai';
  console.log(`Building Game 99: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Samurai: Bushido Odyssey - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">DUEL</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">STAGE</span><span id="themeDisplay" class="value">Rain Alley</span></div>
      <div class="hud-item"><span class="label">HP</span><span id="hpDisplay" class="value">100/100</span></div>
      <div class="hud-item"><span class="label">STANCE</span><span id="stanceDisplay" class="value">FIRE STANCE</span></div>
      <div class="hud-item"><span class="label">HONOR</span><span id="honorDisplay" class="value">0</span></div>
      <button id="levelSelectBtn" class="btn-level-select">DUELS</button>
    </header>

    <main class="canvas-wrapper">
      <canvas id="samuraiCanvas" width="600" height="420"></canvas>
      <div id="duelLog" class="duel-log">Corporate Ronin draws blade. Switch stances and execute precision parries!</div>
      <div id="gameOverlay" class="game-overlay hidden">
        <h2 id="overlayTitle">DUEL CONQUERED!</h2>
        <p id="overlayMessage">Corporate swordsman yielded with honor.</p>
        <button id="overlayBtn" class="btn-action">NEXT DUEL</button>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="samurai-actions">
        <button class="sam-btn slash" id="btnSlash">⚔️ KATANA SLASH [1]</button>
        <button class="sam-btn parry" id="btnParry">🛡️ PARRY CLASH [2]</button>
        <button class="sam-btn stance" id="btnStance">🔄 SWITCH STANCE [3]</button>
      </div>
      <div class="controls-hint">Time parry clash as opponent strikes to stagger them for critical damage!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT BUSHIDO DUEL STAGE (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

  const css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #0d0107;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.game-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 680px;
  height: 100vh;
  max-height: 720px;
  background: radial-gradient(circle at center, #240513 0%, #0d0107 100%);
  border: 1px solid rgba(255, 0, 85, 0.3);
  box-shadow: 0 0 35px rgba(255, 0, 85, 0.2);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(18, 2, 9, 0.85);
  border-bottom: 1px solid rgba(255, 0, 85, 0.25);
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  color: #ff80ab;
  letter-spacing: 1px;
}
.hud-item .value {
  font-size: 13px;
  font-weight: 800;
  color: #ff0055;
  font-family: monospace;
}
.btn-level-select {
  background: #ff0055;
  border: none;
  color: #fff;
  font-weight: 800;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.canvas-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
canvas {
  background: #0d0208;
  border: 1px solid rgba(255, 0, 85, 0.2);
  width: 100%;
  max-width: 600px;
  height: 380px;
}
.duel-log {
  width: 100%;
  max-width: 600px;
  padding: 6px 12px;
  background: rgba(14, 2, 7, 0.9);
  color: #00f0ff;
  font-size: 12px;
  font-family: monospace;
  text-align: center;
  border-top: 1px solid rgba(255, 0, 85, 0.2);
}
.hud-footer {
  padding: 10px 14px;
  background: rgba(16, 2, 9, 0.95);
  border-top: 1px solid rgba(255, 0, 85, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.samurai-actions {
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 480px;
}
.sam-btn {
  flex: 1;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 11px;
  border-radius: 4px;
  cursor: pointer;
}
.sam-btn.slash { background: #ff0055; color: #fff; }
.sam-btn.parry { background: #00f0ff; color: #000; }
.sam-btn.stance { background: #ffd600; color: #000; }
.controls-hint {
  font-size: 10px;
  color: #ff80ab;
  opacity: 0.8;
}
.game-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(8, 1, 4, 0.9);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 20;
}
.game-overlay.hidden { display: none; }
.game-overlay h2 {
  font-size: 26px;
  font-weight: 900;
  color: #ff0055;
  text-shadow: 0 0 12px #ff0055;
}
.btn-action {
  background: #00f0ff;
  color: #000;
  font-weight: 800;
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.modal-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(6, 1, 3, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-content {
  background: #1c030d;
  border: 1px solid #ff0055;
  border-radius: 8px;
  padding: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-content h2 {
  color: #ff0055;
  font-size: 16px;
  margin-bottom: 12px;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  width: 100%;
  overflow-y: auto;
  max-height: 50vh;
}
.lvl-btn {
  background: #2b0615;
  border: 1px solid #ff0055;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ff0055;
  color: #fff;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #ff0055;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Neon Samurai
class SamuraiAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playClash() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  playParry() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(2200, this.ctx.currentTime);
    osc.frequency.setValueAtTime(3300, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playTaiko() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(100, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
}
window.audio = new SamuraiAudio();`;

  const game = `${RPG_THEMES_CODE}
(function() {
  const canvas = document.getElementById('samuraiCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const hpDisplay = document.getElementById('hpDisplay');
  const stanceDisplay = document.getElementById('stanceDisplay');
  const honorDisplay = document.getElementById('honorDisplay');
  const duelLog = document.getElementById('duelLog');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentDuel = 1;
  let honor = 0;
  let stanceIndex = 0; // 0: Fire, 1: Water, 2: Wind
  const STANCES = [
    { name: "FIRE STANCE (+Damage)", color: "#ff0055" },
    { name: "WATER STANCE (+Parry Window)", color: "#00f0ff" },
    { name: "WIND STANCE (+Speed)", color: "#ffd600" }
  ];

  let ronin = {
    hp: 100, maxHp: 100,
    parryActive: false
  };

  let opponent = {
    name: "Corporate Bladesman",
    hp: 100, maxHp: 100,
    windup: 0, // countdown to attack
    isStaggered: false
  };

  let particles = [];
  let isActionActive = true;

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentDuel ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadDuel(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadDuel(num) {
    currentDuel = Math.max(1, Math.min(45, num));
    const theme = THEMES[currentDuel - 1];

    levelDisplay.textContent = \`\${currentDuel}/45\`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    ronin.hp = ronin.maxHp;
    ronin.parryActive = false;

    const baseHp = 90 + currentDuel * 10;
    opponent = {
      name: currentDuel % 5 === 0 ? \`Grand Daimyo Apex-\${currentDuel}\` : \`Corporate Samurai \${currentDuel}\`,
      hp: baseHp,
      maxHp: baseHp,
      windup: 120,
      isStaggered: false
    };

    duelLog.textContent = \`Duel \${currentDuel} commenced against \${opponent.name}!\`;
    isActionActive = true;
    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    hpDisplay.textContent = \`\${Math.max(0, ronin.hp)}/\${ronin.maxHp}\`;
    stanceDisplay.textContent = STANCES[stanceIndex].name;
    stanceDisplay.style.color = STANCES[stanceIndex].color;
    honorDisplay.textContent = honor;
  }

  function slash() {
    if (!isActionActive || ronin.hp <= 0 || opponent.hp <= 0) return;
    window.audio.playClash();

    const mult = stanceIndex === 0 ? 1.5 : (opponent.isStaggered ? 2.0 : 1.0);
    const dmg = Math.floor((25 + Math.random() * 10) * mult);
    opponent.hp -= dmg;
    addParticles(420, 200, '#ff0055');
    duelLog.textContent = \`You slashed for \${dmg} damage!\`;

    if (opponent.hp <= 0) {
      opponent.hp = 0;
      honor += 100 * currentDuel;
      window.audio.playTaiko();
      updateHud();
      setTimeout(() => {
        if (currentDuel >= 45) {
          showOverlay("SUPREME SHOGUN OF CYBERSPACE!", "All 45 corporate duels mastered with bushido honor!", () => {
            loadDuel(1);
            gameOverlay.classList.add('hidden');
          });
        } else {
          showOverlay("DUEL CONQUERED!", \`Advancing to Duel \${currentDuel + 1}...\`, () => {
            loadDuel(currentDuel + 1);
            gameOverlay.classList.add('hidden');
          });
        }
      }, 600);
    }
    updateHud();
  }

  function parry() {
    ronin.parryActive = true;
    window.audio.playParry();
    duelLog.textContent = "Defensive blade raised for precision parry!";
    setTimeout(() => {
      ronin.parryActive = false;
    }, stanceIndex === 1 ? 900 : 500);
  }

  function switchStance() {
    stanceIndex = (stanceIndex + 1) % STANCES.length;
    window.audio.playTaiko();
    duelLog.textContent = \`Switched to \${STANCES[stanceIndex].name}.\`;
    updateHud();
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

  function update() {
    if (opponent.hp > 0 && ronin.hp > 0) {
      opponent.windup--;
      if (opponent.windup <= 0) {
        opponent.windup = 140 - Math.min(60, currentDuel);

        if (ronin.parryActive) {
          // Successful parry!
          window.audio.playParry();
          opponent.isStaggered = true;
          duelLog.textContent = "PERFECT PARRY! Opponent is STAGGERED!";
          addParticles(280, 200, '#00f0ff');
          setTimeout(() => opponent.isStaggered = false, 1500);
        } else {
          // Hit player
          const dmg = 15 + Math.floor(currentDuel * 1.5);
          ronin.hp -= dmg;
          window.audio.playClash();
          addParticles(180, 200, '#ff0055');
          duelLog.textContent = \`\${opponent.name} struck you for \${dmg} damage!\`;
          updateHud();

          if (ronin.hp <= 0) {
            showOverlay("FALLEN IN BATTLE", "Honor calls for a rematch...", () => {
              loadDuel(currentDuel);
              gameOverlay.classList.add('hidden');
            });
          }
        }
      }
    }
  }

  function render() {
    update();
    const theme = THEMES[currentDuel - 1];

    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Blood Moon
    ctx.fillStyle = '#ff0055';
    ctx.beginPath();
    ctx.arc(300, 120, 55, 0, Math.PI * 2);
    ctx.fill();

    // Torii Gate Silhouette
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(220, 260);
    ctx.lineTo(220, 160);
    ctx.lineTo(380, 160);
    ctx.lineTo(380, 260);
    ctx.stroke();

    // Player Ronin
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(180, 220, 24, 0, Math.PI * 2);
    ctx.fill();

    // Ronin Katana Blade
    ctx.strokeStyle = STANCES[stanceIndex].color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(180, 210);
    ctx.lineTo(240, ronin.parryActive ? 170 : 230);
    ctx.stroke();

    // Opponent
    ctx.fillStyle = opponent.isStaggered ? '#ffd600' : theme.secondary;
    ctx.beginPath();
    ctx.arc(420, 220, 26, 0, Math.PI * 2);
    ctx.fill();

    // Opponent Blade
    ctx.strokeStyle = '#ff0055';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(420, 210);
    ctx.lineTo(360, 220);
    ctx.stroke();

    // Opponent HP Bar
    ctx.fillStyle = '#300';
    ctx.fillRect(350, 60, 140, 10);
    ctx.fillStyle = '#ff0055';
    ctx.fillRect(350, 60, 140 * (opponent.hp / opponent.maxHp), 10);

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

  document.getElementById('btnSlash').onclick = slash;
  document.getElementById('btnParry').onclick = parry;
  document.getElementById('btnStance').onclick = switchStance;

  window.addEventListener('keydown', e => {
    if (e.key === '1') slash();
    if (e.key === '2') parry();
    if (e.key === '3') switchStance();
  });

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadDuel(1);
  requestAnimationFrame(render);
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 99 (${gameId}) built successfully.`);
}

// ============================================================================
// GAME 100: QUANTUM CHRONO RPG: TIMELINE PARADOX SAVIOR — THE CENTURY FINALE!
// ============================================================================
function buildGame100() {
  const gameId = 'quantum-chrono-rpg';
  console.log(`Building Game 100: ${gameId}... THE CENTURY FINALE!`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quantum Chrono RPG: Timeline Paradox Savior - Next Games/Game (GAME 100 FINALE)</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">ERA</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">TIMELINE</span><span id="themeDisplay" class="value">Neo-Kyoto 2099</span></div>
      <div class="hud-item"><span class="label">ERA SHIFT</span><span id="eraDisplay" class="value">PRESENT</span></div>
      <div class="hud-item"><span class="label">PARTY HP</span><span id="partyHpDisplay" class="value">300/300</span></div>
      <button id="levelSelectBtn" class="btn-level-select">TIMELINES</button>
    </header>

    <main class="canvas-wrapper">
      <canvas id="chronoCanvas" width="600" height="400"></canvas>
      <div id="chronoLog" class="chrono-log">Active Time Battle initiated against the Entropy Core! Select action.</div>
      <div id="gameOverlay" class="game-overlay hidden">
        <h2 id="overlayTitle">TIMELINE RESTORED!</h2>
        <p id="overlayMessage">Paradox anomaly neutralized across all eras.</p>
        <button id="overlayBtn" class="btn-action">NEXT ERA</button>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="atb-bars-row">
        <div class="atb-meter"><span class="atb-lbl">CHRONO KNIGHT</span><div class="atb-outer"><div id="atb1" class="atb-fill" style="width: 100%"></div></div></div>
        <div class="atb-meter"><span class="atb-lbl">QUANTUM MAGE</span><div class="atb-outer"><div id="atb2" class="atb-fill" style="width: 80%"></div></div></div>
        <div class="atb-meter"><span class="atb-lbl">TECH SPECIALIST</span><div class="atb-outer"><div id="atb3" class="atb-fill" style="width: 60%"></div></div></div>
      </div>
      <div class="battle-actions">
        <button class="bat-btn atk" id="btnAtk">⚔️ CHRONO STRIKE [1]</button>
        <button class="bat-btn warp" id="btnWarp">⌛ TIME WARP [2]</button>
        <button class="bat-btn tech" id="btnTech">⚡ QUANTUM TECH [3]</button>
        <button class="bat-btn era" id="btnEra">🌀 SHIFT ERA [4]</button>
      </div>
      <div class="controls-hint">Master the Active Time Battle (ATB) gauge to restore history across 45 timeline eras!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT TIMELINE ERA (1–45)</h2>
      <div id="levelSelectGrid" class="level-grid"></div>
      <button id="closeModalBtn" class="btn-close">RESUME</button>
    </div>
  </div>

  <script src="./audio.js"></script>
  <script src="./game.js"></script>
</body>
</html>`;

  const css = `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  user-select: none;
}
body {
  background: #060212;
  color: #fff;
  font-family: 'Segoe UI', system-ui, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.game-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 680px;
  height: 100vh;
  max-height: 720px;
  background: radial-gradient(circle at center, #1b0a3d 0%, #060212 100%);
  border: 1px solid rgba(255, 214, 0, 0.4);
  box-shadow: 0 0 40px rgba(255, 214, 0, 0.2);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(12, 4, 28, 0.85);
  border-bottom: 1px solid rgba(255, 214, 0, 0.3);
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  color: #ffe57f;
  letter-spacing: 1px;
}
.hud-item .value {
  font-size: 13px;
  font-weight: 800;
  color: #ffd600;
  font-family: monospace;
}
.btn-level-select {
  background: #ffd600;
  border: none;
  color: #000;
  font-weight: 800;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.canvas-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
canvas {
  background: #08031a;
  border: 1px solid rgba(255, 214, 0, 0.2);
  width: 100%;
  max-width: 600px;
  height: 380px;
}
.chrono-log {
  width: 100%;
  max-width: 600px;
  padding: 6px 12px;
  background: rgba(10, 3, 24, 0.9);
  color: #ffd600;
  font-size: 12px;
  font-family: monospace;
  text-align: center;
  border-top: 1px solid rgba(255, 214, 0, 0.2);
}
.hud-footer {
  padding: 10px 14px;
  background: rgba(10, 3, 24, 0.95);
  border-top: 1px solid rgba(255, 214, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.atb-bars-row {
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 520px;
}
.atb-meter {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.atb-lbl {
  font-size: 8px;
  color: #ffe57f;
}
.atb-outer {
  background: #190a36;
  border: 1px solid #ffd600;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
}
.atb-fill {
  background: #ffd600;
  height: 100%;
}
.battle-actions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 520px;
}
.bat-btn {
  border: none;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 11px;
  border-radius: 4px;
  cursor: pointer;
}
.bat-btn.atk { background: #ffd600; color: #000; }
.bat-btn.warp { background: #00e5ff; color: #000; }
.bat-btn.tech { background: #d500f9; color: #fff; }
.bat-btn.era { background: #ff007f; color: #fff; }
.controls-hint {
  font-size: 10px;
  color: #ffe57f;
  opacity: 0.8;
}
.game-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(6, 2, 16, 0.9);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  z-index: 20;
}
.game-overlay.hidden { display: none; }
.game-overlay h2 {
  font-size: 26px;
  font-weight: 900;
  color: #ffd600;
  text-shadow: 0 0 12px #ffd600;
}
.btn-action {
  background: #ffd600;
  color: #000;
  font-weight: 800;
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.modal-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(4, 2, 10, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-content {
  background: #170732;
  border: 1px solid #ffd600;
  border-radius: 8px;
  padding: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-content h2 {
  color: #ffd600;
  font-size: 16px;
  margin-bottom: 12px;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  width: 100%;
  overflow-y: auto;
  max-height: 50vh;
}
.lvl-btn {
  background: #2b0e52;
  border: 1px solid #ffd600;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ffd600;
  color: #000;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #ffd600;
  color: #000;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Quantum Chrono RPG
class ChronoAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playChronoStrike() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(130, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }
  playTimeWarp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.35);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }
  playGrandFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime + i * 0.1);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.1 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.1);
      osc.stop(this.ctx.currentTime + i * 0.1 + 0.25);
    });
  }
}
window.audio = new ChronoAudio();`;

  const game = `${RPG_THEMES_CODE}
(function() {
  const canvas = document.getElementById('chronoCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const eraDisplay = document.getElementById('eraDisplay');
  const partyHpDisplay = document.getElementById('partyHpDisplay');
  const chronoLog = document.getElementById('chronoLog');
  const atb1 = document.getElementById('atb1');
  const atb2 = document.getElementById('atb2');
  const atb3 = document.getElementById('atb3');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  let currentEra = 1;
  const ERAS = ["PAST (Primordial)", "PRESENT (Neo-Tokyo)", "FUTURE (Singularity)"];
  let eraIdx = 1;

  let party = {
    hp: 300, maxHp: 300,
    atb: [100, 80, 60]
  };

  let entropyCore = {
    name: "Entropy Anomaly Core",
    hp: 180, maxHp: 180,
    windup: 160
  };

  let particles = [];
  let isActionActive = true;

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentEra ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadEra(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadEra(num) {
    currentEra = Math.max(1, Math.min(45, num));
    const theme = THEMES[currentEra - 1];

    levelDisplay.textContent = \`\${currentEra}/45\`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;
    eraDisplay.textContent = ERAS[eraIdx];

    party.hp = party.maxHp;
    party.atb = [100, 100, 100];

    const baseHp = 150 + currentEra * 15;
    entropyCore = {
      name: currentEra === 45 ? "★ 100TH CENTURY MASTER ENTROPY TITAN ★" : \`Entropy Core Anomaly-\${currentEra}\`,
      hp: baseHp,
      maxHp: baseHp,
      windup: 140
    };

    chronoLog.textContent = \`Paradox battle started in \${theme.name}! ATB gauge active.\`;
    isActionActive = true;
    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    partyHpDisplay.textContent = \`\${Math.max(0, party.hp)}/\${party.maxHp}\`;
    atb1.style.width = \`\${party.atb[0]}%\`;
    atb2.style.width = \`\${party.atb[1]}%\`;
    atb3.style.width = \`\${party.atb[2]}%\`;
  }

  function chronoStrike() {
    if (party.atb[0] < 50 || entropyCore.hp <= 0) return;
    party.atb[0] = 0;
    window.audio.playChronoStrike();
    const dmg = 35 + Math.floor(Math.random() * 15);
    entropyCore.hp -= dmg;
    addParticles(450, 200, '#ffd600');
    chronoLog.textContent = \`Chrono Knight executes Chrono Strike for \${dmg} damage!\`;
    checkVictory();
    updateHud();
  }

  function timeWarp() {
    if (party.atb[1] < 60 || entropyCore.hp <= 0) return;
    party.atb[1] = 0;
    window.audio.playTimeWarp();
    party.hp = Math.min(party.maxHp, party.hp + 45);
    entropyCore.windup += 80; // Delay enemy turn
    addParticles(150, 200, '#00e5ff');
    chronoLog.textContent = "Time Warp casts Haste on party (+45 HP) and slows the Entropy Core!";
    updateHud();
  }

  function quantumTech() {
    if (party.atb[2] < 70 || entropyCore.hp <= 0) return;
    party.atb[2] = 0;
    window.audio.playChronoStrike();
    const dmg = 65 + Math.floor(Math.random() * 20);
    entropyCore.hp -= dmg;
    addParticles(450, 200, '#d500f9');
    chronoLog.textContent = \`Quantum Tech Discharge inflicts \${dmg} massive temporal damage!\`;
    checkVictory();
    updateHud();
  }

  function shiftEra() {
    eraIdx = (eraIdx + 1) % ERAS.length;
    window.audio.playTimeWarp();
    eraDisplay.textContent = ERAS[eraIdx];
    chronoLog.textContent = \`Timeline shifted to \${ERAS[eraIdx]}! Enemy temporal resistance altered!\`;
    addParticles(300, 200, '#ff007f');
  }

  function checkVictory() {
    if (entropyCore.hp <= 0) {
      entropyCore.hp = 0;
      window.audio.playGrandFanfare();
      setTimeout(() => {
        if (currentEra >= 45) {
          showOverlay("★ CENTURY MILESTONE CONQUERED! ★", "All 100 Games in Next Games/Game Complete! You have saved all timelines!", () => {
            loadEra(1);
            gameOverlay.classList.add('hidden');
          });
        } else {
          showOverlay("TIMELINE RESTORED!", \`Advancing to Timeline Era \${currentEra + 1}...\`, () => {
            loadEra(currentEra + 1);
            gameOverlay.classList.add('hidden');
          });
        }
      }, 600);
    }
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
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        color: color,
        life: 25
      });
    }
  }

  function update() {
    // Fill ATB gauges
    for (let i = 0; i < 3; i++) {
      if (party.atb[i] < 100) party.atb[i] = Math.min(100, party.atb[i] + 0.35);
    }
    updateHud();

    // Enemy turn countdown
    if (entropyCore.hp > 0 && party.hp > 0) {
      entropyCore.windup--;
      if (entropyCore.windup <= 0) {
        entropyCore.windup = 150 - Math.min(50, currentEra);
        const dmg = 25 + Math.floor(currentEra * 1.5);
        party.hp -= dmg;
        window.audio.playChronoStrike();
        addParticles(150, 200, '#ff0055');
        chronoLog.textContent = \`\${entropyCore.name} releases Temporal Blast for \${dmg} damage!\`;
        updateHud();

        if (party.hp <= 0) {
          showOverlay("TIMELINE COLLAPSE", "Paradox overwhelmed the party...", () => {
            loadEra(currentEra);
            gameOverlay.classList.add('hidden');
          });
        }
      }
    }
  }

  function render() {
    update();
    const theme = THEMES[currentEra - 1];

    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Singularity Core Vortex in Center
    ctx.strokeStyle = theme.primary;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(450, 200, 65, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#ffd600';
    ctx.beginPath();
    ctx.arc(450, 200, 28, 0, Math.PI * 2);
    ctx.fill();

    // Party Members (3 Hero Nodes)
    const partyColors = ['#ffd600', '#00e5ff', '#d500f9'];
    for (let i = 0; i < 3; i++) {
      const py = 120 + i * 80;
      ctx.fillStyle = partyColors[i];
      ctx.beginPath();
      ctx.arc(140, py, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    // Entropy Core HP Bar
    ctx.fillStyle = '#300';
    ctx.fillRect(380, 50, 140, 12);
    ctx.fillStyle = '#ff0055';
    ctx.fillRect(380, 50, 140 * (entropyCore.hp / entropyCore.maxHp), 12);

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

  document.getElementById('btnAtk').onclick = chronoStrike;
  document.getElementById('btnWarp').onclick = timeWarp;
  document.getElementById('btnTech').onclick = quantumTech;
  document.getElementById('btnEra').onclick = shiftEra;

  window.addEventListener('keydown', e => {
    if (e.key === '1') chronoStrike();
    if (e.key === '2') timeWarp();
    if (e.key === '3') quantumTech();
    if (e.key === '4') shiftEra();
  });

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadEra(1);
  requestAnimationFrame(render);
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 100 (${gameId}) built successfully! Century Finale achieved!`);
}

buildGame97();
buildGame98();
buildGame99();
buildGame100();
console.log('RPG Category Part 3 build complete.');
