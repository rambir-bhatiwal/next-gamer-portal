/**
 * Next Games/Game — RPG Category Part 1:
 * - cyber-dungeon-crawler (Game 91)
 * - turn-based-cyberpunk-arena (Game 92)
 * - text-terminal-hacker-quest (Game 93)
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

// 45 RPG THEMES GENERATOR HELPER
function generateRPGThemes() {
  const themeNames = [
    "Guest Network Corridor", "Encrypted Storage Vault", "Overclocked Reactor Floor", "Sub-Zero Nitrogen Core",
    "Quantum Core Sanctum", "Silicon Labyrinth", "Hologram Projection Bay", "Bio-Nanite Research Lab",
    "Deep Archive Catacombs", "Neural Mesh Foundry", "Orbital Uplink Spire", "Plasma Exhaust Conduits",
    "Mainframe Power Grid", "Cryptographic Cipher Depths", "Autonomous Assembly Plant", "Black Market Data Haven",
    "Firewall Defense Citadel", "Void Matrix Abyss", "Synthesizer Soundstage", "Optical Fiber Nexus",
    "Robotic Maintenance Yard", "Tachyon Accelerator Ring", "Cybernetic Hospital Ward", "Subterranean Server Vault",
    "Corporate Executive Penthouse", "Solar Arrays Outpost", "Gravity Distortion Chamber", "Hydraulic Sump Sector",
    "Graphene Lattice Foundry", "Memory Leak Wasteland", "Electromagnetic Shield Hub", "Dark Fiber Underpass",
    "Cryo-Stasis Chamber", "Laser Beam Crossroad", "Algorithmic Trading Floor", "Superconductor Core",
    "Nanotech Swarm Hive", "High-Voltage Relay Station", "Thermal Dissipation Sink", "Satellite Command Bunker",
    "AI Training Simulator", "Zero-Day Exploit Breach", "Holographic Museum Wing", "Quantum Singularity Well",
    "Century Matrix Master Core"
  ];

  const colorPalettes = [
    { bg: "#090d1f", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd600" },
    { bg: "#130826", primary: "#d500f9", secondary: "#00e5ff", accent: "#39ff14" },
    { bg: "#06140b", primary: "#39ff14", secondary: "#00f0ff", accent: "#ffd600" },
    { bg: "#19080b", primary: "#ff1744", secondary: "#ff9100", accent: "#00f0ff" },
    { bg: "#07131a", primary: "#00e5ff", secondary: "#76ff03", accent: "#ff007f" },
    { bg: "#140f04", primary: "#ffab00", secondary: "#ff3d00", accent: "#00f0ff" },
    { bg: "#080614", primary: "#7c4dff", secondary: "#ff007f", accent: "#00e5ff" },
    { bg: "#051117", primary: "#18ffff", secondary: "#651fff", accent: "#ffd600" },
    { bg: "#12081f", primary: "#ea80fc", secondary: "#00f0ff", accent: "#76ff03" }
  ];

  return themeNames.map((name, i) => {
    const pal = colorPalettes[i % colorPalettes.length];
    return {
      id: i + 1,
      name: `Floor ${i + 1}: ${name}`,
      bg: pal.bg,
      primary: pal.primary,
      secondary: pal.secondary,
      accent: pal.accent,
      wall: pal.secondary,
      floor: pal.bg,
      fog: pal.bg
    };
  });
}

const RPG_THEMES_CODE = `const THEMES = ${JSON.stringify(generateRPGThemes(), null, 2)};\n`;

// ============================================================================
// GAME 91: CYBER DUNGEON CRAWLER: ROGUELIKE MATRIX
// ============================================================================
function buildGame91() {
  const gameId = 'cyber-dungeon-crawler';
  console.log(`Building Game 91: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyber Dungeon Crawler: Roguelike Matrix - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">FLOOR</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">THEME</span><span id="themeDisplay" class="value">Corridor</span></div>
      <div class="hud-item"><span class="label">HP</span><span id="hpDisplay" class="value">100/100</span></div>
      <div class="hud-item"><span class="label">RAM</span><span id="ramDisplay" class="value">50/50</span></div>
      <div class="hud-item"><span class="label">CHIPS</span><span id="chipsDisplay" class="value">0</span></div>
      <button id="levelSelectBtn" class="btn-level-select">FLOORS</button>
    </header>

    <main class="canvas-wrapper">
      <canvas id="dungeonCanvas" width="600" height="480"></canvas>
      <div id="gameOverlay" class="game-overlay hidden">
        <h2 id="overlayTitle">FLOOR CLEARED!</h2>
        <p id="overlayMessage">Descending to next server floor...</p>
        <button id="overlayBtn" class="btn-action">CONTINUE</button>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="dpad-controls">
        <button class="dpad-btn" id="btnUp">▲</button>
        <div class="dpad-row">
          <button class="dpad-btn" id="btnLeft">◀</button>
          <button class="dpad-btn" id="btnWait">WAIT</button>
          <button class="dpad-btn" id="btnRight">▶</button>
        </div>
        <button class="dpad-btn" id="btnDown">▼</button>
      </div>
      <div class="dpad-actions">
        <button class="action-btn" id="btnHeal">USE NANITE [H]</button>
        <button class="action-btn" id="btnPulse">EMP PULSE [Space]</button>
      </div>
      <div class="controls-hint">Move with Arrow Keys/WASD. Bump into daemons to attack. Step on Stairs (▼) to descend!</div>
    </footer>
  </div>

  <!-- Level Select Modal -->
  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT SERVER FLOOR (1–45)</h2>
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
  background: #05020c;
  color: #e0f7fa;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 680px;
  height: 100vh;
  max-height: 720px;
  background: radial-gradient(circle at center, #0f0b24 0%, #05020c 100%);
  border: 1px solid rgba(0, 240, 255, 0.25);
  box-shadow: 0 0 30px rgba(0, 240, 255, 0.15);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  background: rgba(10, 6, 26, 0.85);
  border-bottom: 1px solid rgba(0, 240, 255, 0.2);
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  color: #80d8ff;
  letter-spacing: 1px;
}
.hud-item .value {
  font-size: 14px;
  font-weight: 800;
  color: #00f0ff;
  font-family: monospace;
}
.btn-level-select {
  background: #ff007f;
  border: none;
  color: #fff;
  font-weight: 800;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1px;
}
.canvas-wrapper {
  position: relative;
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
canvas {
  background: #030108;
  border: 1px solid rgba(0, 240, 255, 0.3);
  box-shadow: 0 0 20px rgba(0,0,0,0.8);
  max-width: 100%;
  max-height: 100%;
}
.game-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(5, 2, 14, 0.88);
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
  color: #00f0ff;
  letter-spacing: 2px;
  text-shadow: 0 0 12px #00f0ff;
}
.btn-action {
  background: #00f0ff;
  color: #000;
  font-weight: 800;
  font-size: 14px;
  padding: 10px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.5);
}
.hud-footer {
  width: 100%;
  padding: 8px 12px;
  background: rgba(8, 4, 20, 0.9);
  border-top: 1px solid rgba(0, 240, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.dpad-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}
.dpad-row {
  display: flex;
  gap: 3px;
}
.dpad-btn {
  background: #140d30;
  border: 1px solid #00f0ff;
  color: #00f0ff;
  font-size: 12px;
  font-weight: bold;
  width: 44px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
}
.dpad-actions {
  display: flex;
  gap: 8px;
}
.action-btn {
  background: #ff007f;
  color: #fff;
  border: none;
  padding: 5px 12px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
}
.controls-hint {
  font-size: 10px;
  color: #80d8ff;
  text-align: center;
  opacity: 0.8;
}
.modal-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(4, 2, 12, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-content {
  background: #0d0822;
  border: 1px solid #00f0ff;
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
  color: #00f0ff;
  font-size: 16px;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.level-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  width: 100%;
  overflow-y: auto;
  max-height: 50vh;
  padding: 4px;
}
.lvl-btn {
  background: #160f38;
  border: 1px solid #7c4dff;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}
.lvl-btn.active {
  border-color: #00f0ff;
  background: #00f0ff;
  color: #000;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #ff007f;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Cyber Dungeon Crawler
class DungeonAudio {
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
  playStep() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playAttack() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.15);
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
    osc.type = 'square';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playPickup() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
    osc.frequency.setValueAtTime(659.25, this.ctx.currentTime + 0.08);
    osc.frequency.setValueAtTime(783.99, this.ctx.currentTime + 0.16);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playStairs() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(330, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.35);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }
  playPulse() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
}
window.audio = new DungeonAudio();`;

  const game = `${RPG_THEMES_CODE}
(function() {
  const canvas = document.getElementById('dungeonCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const hpDisplay = document.getElementById('hpDisplay');
  const ramDisplay = document.getElementById('ramDisplay');
  const chipsDisplay = document.getElementById('chipsDisplay');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const gameOverlay = document.getElementById('gameOverlay');
  const overlayTitle = document.getElementById('overlayTitle');
  const overlayMessage = document.getElementById('overlayMessage');
  const overlayBtn = document.getElementById('overlayBtn');

  const COLS = 15;
  const ROWS = 12;
  const TILE_SIZE = 40;

  let currentFloor = 1;
  let player = {
    x: 1, y: 1,
    hp: 100, maxHp: 100,
    ram: 50, maxRam: 50,
    chips: 0, atk: 18,
    invulnTimer: 0
  };

  let grid = []; // 0: floor, 1: wall, 2: stairs
  let enemies = [];
  let items = []; // {x, y, type: 'nanite' | 'ram' | 'chip'}
  let particles = [];
  let logMessages = [];

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentFloor ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadFloor(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function loadFloor(floorNum) {
    currentFloor = Math.max(1, Math.min(45, floorNum));
    const theme = THEMES[currentFloor - 1];

    levelDisplay.textContent = \`\${currentFloor}/45\`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    // Generate maze floor
    grid = [];
    for (let r = 0; r < ROWS; r++) {
      const row = [];
      for (let c = 0; c < COLS; c++) {
        if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) {
          row.push(1); // wall
        } else if (Math.random() < 0.18 && !(r === 1 && c === 1)) {
          row.push(1); // wall
        } else {
          row.push(0); // floor
        }
      }
      grid.push(row);
    }

    // Place stairs
    grid[ROWS - 2][COLS - 2] = 2;

    // Reset player position
    player.x = 1;
    player.y = 1;
    player.invulnTimer = 30; // 0.5s spawn grace

    // Spawn enemies
    enemies = [];
    const enemyCount = 3 + Math.floor(currentFloor / 8);
    for (let i = 0; i < enemyCount; i++) {
      let ex, ey;
      do {
        ex = Math.floor(Math.random() * (COLS - 2)) + 1;
        ey = Math.floor(Math.random() * (ROWS - 2)) + 1;
      } while (grid[ey][ex] !== 0 || (ex < 3 && ey < 3));
      
      enemies.push({
        x: ex, y: ey,
        hp: 20 + currentFloor * 4,
        maxHp: 20 + currentFloor * 4,
        atk: 6 + Math.floor(currentFloor / 3),
        name: i === 0 && currentFloor % 5 === 0 ? "Boss Daemon" : "Daemon",
        isBoss: i === 0 && currentFloor % 5 === 0
      });
    }

    // Spawn items
    items = [];
    for (let i = 0; i < 3; i++) {
      let ix, iy;
      do {
        ix = Math.floor(Math.random() * (COLS - 2)) + 1;
        iy = Math.floor(Math.random() * (ROWS - 2)) + 1;
      } while (grid[iy][ix] !== 0 || (ix === 1 && iy === 1));
      items.push({
        x: ix, y: iy,
        type: i === 0 ? 'nanite' : (i === 1 ? 'ram' : 'chip')
      });
    }

    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    hpDisplay.textContent = \`\${Math.max(0, player.hp)}/\${player.maxHp}\`;
    ramDisplay.textContent = \`\${player.ram}/\${player.maxRam}\`;
    chipsDisplay.textContent = player.chips;
  }

  function movePlayer(dx, dy) {
    if (player.hp <= 0) return;
    const nx = player.x + dx;
    const ny = player.y + dy;

    if (grid[ny][nx] === 1) return; // Wall

    // Check enemy bump attack
    const targetEnemy = enemies.find(e => e.x === nx && e.y === ny);
    if (targetEnemy) {
      // Attack enemy
      window.audio.playAttack();
      targetEnemy.hp -= player.atk;
      addParticles(nx * TILE_SIZE + 20, ny * TILE_SIZE + 20, '#00f0ff');
      
      if (targetEnemy.hp <= 0) {
        player.chips += targetEnemy.isBoss ? 5 : 1;
        enemies = enemies.filter(e => e !== targetEnemy);
      }
      takeEnemyTurns();
      updateHud();
      return;
    }

    // Walk to tile
    player.x = nx;
    player.y = ny;
    window.audio.playStep();

    // Check item pickup
    const itemIdx = items.findIndex(it => it.x === nx && it.y === ny);
    if (itemIdx !== -1) {
      const it = items[itemIdx];
      if (it.type === 'nanite') {
        player.hp = Math.min(player.maxHp, player.hp + 30);
      } else if (it.type === 'ram') {
        player.ram = Math.min(player.maxRam, player.ram + 25);
      } else {
        player.chips += 2;
      }
      items.splice(itemIdx, 1);
      window.audio.playPickup();
      addParticles(nx * TILE_SIZE + 20, ny * TILE_SIZE + 20, '#ffd600');
    }

    // Check stairs
    if (grid[ny][nx] === 2) {
      window.audio.playStairs();
      if (currentFloor >= 45) {
        showOverlay("MATRIX CONQUERED!", "You have breached all 45 server floors and salvaged the core!", () => {
          loadFloor(1);
          gameOverlay.classList.add('hidden');
        });
      } else {
        showOverlay("FLOOR CLEARED!", \`Descending to Floor \${currentFloor + 1}...\`, () => {
          loadFloor(currentFloor + 1);
          gameOverlay.classList.add('hidden');
        });
      }
      return;
    }

    takeEnemyTurns();
    updateHud();
  }

  function takeEnemyTurns() {
    enemies.forEach(e => {
      const dist = Math.abs(e.x - player.x) + Math.abs(e.y - player.y);
      if (dist === 1) {
        // Attack player
        if (player.invulnTimer <= 0) {
          player.hp -= e.atk;
          window.audio.playHit();
          addParticles(player.x * TILE_SIZE + 20, player.y * TILE_SIZE + 20, '#ff0055');
          player.invulnTimer = 20; // 0.33s invulnerability grace
        }
      } else if (dist < 6) {
        // Simple chase step
        let stepX = 0;
        let stepY = 0;
        if (Math.abs(player.x - e.x) > Math.abs(player.y - e.y)) {
          stepX = player.x > e.x ? 1 : -1;
        } else {
          stepY = player.y > e.y ? 1 : -1;
        }
        const nx = e.x + stepX;
        const ny = e.y + stepY;
        if (grid[ny][nx] === 0 && !enemies.some(other => other.x === nx && other.y === ny) && !(nx === player.x && ny === player.y)) {
          e.x = nx;
          e.y = ny;
        }
      }
    });

    if (player.hp <= 0) {
      showOverlay("CONNECTION TERMINATED", "Your cyber deck was fried by the daemons.", () => {
        player.hp = player.maxHp;
        loadFloor(currentFloor);
        gameOverlay.classList.add('hidden');
      });
    }
  }

  function healPlayer() {
    if (player.ram >= 15 && player.hp < player.maxHp) {
      player.ram -= 15;
      player.hp = Math.min(player.maxHp, player.hp + 35);
      window.audio.playPickup();
      addParticles(player.x * TILE_SIZE + 20, player.y * TILE_SIZE + 20, '#39ff14');
      updateHud();
    }
  }

  function castPulse() {
    if (player.ram >= 20) {
      player.ram -= 20;
      window.audio.playPulse();
      enemies.forEach(e => {
        const dist = Math.abs(e.x - player.x) + Math.abs(e.y - player.y);
        if (dist <= 3) {
          e.hp -= 25;
          addParticles(e.x * TILE_SIZE + 20, e.y * TILE_SIZE + 20, '#00f0ff');
        }
      });
      enemies = enemies.filter(e => e.hp > 0);
      updateHud();
    }
  }

  function showOverlay(title, msg, btnAction) {
    overlayTitle.textContent = title;
    overlayMessage.textContent = msg;
    overlayBtn.onclick = btnAction;
    gameOverlay.classList.remove('hidden');
  }

  function addParticles(x, y, color) {
    for (let i = 0; i < 8; i++) {
      particles.push({
        x: x, y: y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        color: color,
        life: 20
      });
    }
  }

  function render() {
    const theme = THEMES[currentFloor - 1];
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = c * TILE_SIZE;
        const y = r * TILE_SIZE;
        if (grid[r][c] === 1) {
          ctx.fillStyle = theme.wall;
          ctx.fillRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
          ctx.strokeStyle = theme.primary;
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
        } else if (grid[r][c] === 2) {
          // Stairs
          ctx.fillStyle = '#1c1b33';
          ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          ctx.fillStyle = theme.accent;
          ctx.font = '20px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('▼', x + TILE_SIZE / 2, y + TILE_SIZE / 2);
        } else {
          ctx.fillStyle = 'rgba(255,255,255,0.03)';
          ctx.fillRect(x + 1, y + 1, TILE_SIZE - 2, TILE_SIZE - 2);
        }
      }
    }

    // Draw Items
    items.forEach(it => {
      const cx = it.x * TILE_SIZE + TILE_SIZE / 2;
      const cy = it.y * TILE_SIZE + TILE_SIZE / 2;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '16px sans-serif';
      if (it.type === 'nanite') ctx.fillText('🧪', cx, cy);
      else if (it.type === 'ram') ctx.fillText('⚡', cx, cy);
      else ctx.fillText('💾', cx, cy);
    });

    // Draw Enemies
    enemies.forEach(e => {
      const cx = e.x * TILE_SIZE + TILE_SIZE / 2;
      const cy = e.y * TILE_SIZE + TILE_SIZE / 2;
      ctx.fillStyle = e.isBoss ? '#ffd600' : '#ff0055';
      ctx.beginPath();
      ctx.arc(cx, cy, e.isBoss ? 16 : 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Enemy HP Bar
      const barW = 24;
      const hpPct = Math.max(0, e.hp / e.maxHp);
      ctx.fillStyle = '#330000';
      ctx.fillRect(cx - barW / 2, cy - 18, barW, 4);
      ctx.fillStyle = '#ff1744';
      ctx.fillRect(cx - barW / 2, cy - 18, barW * hpPct, 4);
    });

    // Draw Player
    const px = player.x * TILE_SIZE + TILE_SIZE / 2;
    const py = player.y * TILE_SIZE + TILE_SIZE / 2;
    ctx.fillStyle = player.invulnTimer > 0 && Math.floor(player.invulnTimer / 4) % 2 === 0 ? 'rgba(0,240,255,0.4)' : '#00f0ff';
    ctx.beginPath();
    ctx.arc(px, py, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, 3, 3);
      if (p.life <= 0) particles.splice(i, 1);
    }

    if (player.invulnTimer > 0) player.invulnTimer--;
    requestAnimationFrame(render);
  }

  // Keyboard controls
  window.addEventListener('keydown', e => {
    switch (e.key) {
      case 'ArrowUp': case 'w': case 'W': movePlayer(0, -1); break;
      case 'ArrowDown': case 's': case 'S': movePlayer(0, 1); break;
      case 'ArrowLeft': case 'a': case 'A': movePlayer(-1, 0); break;
      case 'ArrowRight': case 'd': case 'D': movePlayer(1, 0); break;
      case 'h': case 'H': healPlayer(); break;
      case ' ': castPulse(); break;
    }
  });

  // D-pad controls
  document.getElementById('btnUp').onclick = () => movePlayer(0, -1);
  document.getElementById('btnDown').onclick = () => movePlayer(0, 1);
  document.getElementById('btnLeft').onclick = () => movePlayer(-1, 0);
  document.getElementById('btnRight').onclick = () => movePlayer(1, 0);
  document.getElementById('btnWait').onclick = () => takeEnemyTurns();
  document.getElementById('btnHeal').onclick = healPlayer;
  document.getElementById('btnPulse').onclick = castPulse;

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadFloor(1);
  requestAnimationFrame(render);
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 91 (${gameId}) built successfully.`);
}

// ============================================================================
// GAME 92: TURN-BASED CYBERPUNK ARENA: NEON GLADIATOR
// ============================================================================
function buildGame92() {
  const gameId = 'turn-based-cyberpunk-arena';
  console.log(`Building Game 92: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Turn-Based Cyberpunk Arena: Neon Gladiator - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">BOUT</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">ARENA</span><span id="themeDisplay" class="value">Underground Pit</span></div>
      <div class="hud-item"><span class="label">PURSE</span><span id="purseDisplay" class="value">0 CR</span></div>
      <div class="hud-item"><span class="label">RECORD</span><span id="recordDisplay" class="value">0W - 0L</span></div>
      <button id="levelSelectBtn" class="btn-level-select">BOUTS</button>
    </header>

    <main class="canvas-wrapper">
      <canvas id="arenaCanvas" width="600" height="420"></canvas>
      <div id="battleLog" class="battle-log">Welcome to the Neon Gladiator Arena. Select your combat action!</div>
      <div id="gameOverlay" class="game-overlay hidden">
        <h2 id="overlayTitle">VICTORY!</h2>
        <p id="overlayMessage">Gladiator defeated.</p>
        <button id="overlayBtn" class="btn-action">NEXT BOUT</button>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="action-grid">
        <button class="action-btn slash" id="btnSlash">⚡ PLASMA SLASH [1]</button>
        <button class="action-btn heavy" id="btnHeavy">💥 HEAVY STRIKE [2]</button>
        <button class="action-btn shield" id="btnShield">🛡️ DEFENSE MATRIX [3]</button>
        <button class="action-btn heal" id="btnHeal">🧪 NANITE INJECT [4]</button>
      </div>
      <div class="controls-hint">Turn-based tactical combat: manage energy, time blocks, and counter rivals!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT CHAMPIONSHIP BOUT (1–45)</h2>
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
  background: #06020f;
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
  background: radial-gradient(circle at center, #140728 0%, #06020f 100%);
  border: 1px solid rgba(255, 0, 127, 0.3);
  box-shadow: 0 0 35px rgba(255, 0, 127, 0.15);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(12, 4, 26, 0.85);
  border-bottom: 1px solid rgba(255, 0, 127, 0.25);
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
  font-size: 14px;
  font-weight: 800;
  color: #ff007f;
  font-family: monospace;
}
.btn-level-select {
  background: #00f0ff;
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
  align-items: center;
  overflow: hidden;
}
canvas {
  background: #090214;
  border: 1px solid rgba(255, 0, 127, 0.2);
  width: 100%;
  max-width: 600px;
  height: 380px;
}
.battle-log {
  width: 100%;
  max-width: 600px;
  padding: 6px 12px;
  background: rgba(8, 2, 18, 0.9);
  color: #00f0ff;
  font-size: 12px;
  font-family: monospace;
  text-align: center;
  border-top: 1px solid rgba(255, 0, 127, 0.2);
}
.hud-footer {
  padding: 12px;
  background: rgba(10, 3, 22, 0.95);
  border-top: 1px solid rgba(255, 0, 127, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.action-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 500px;
}
.action-btn {
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 0.5px;
}
.action-btn.slash { background: #00f0ff; color: #000; }
.action-btn.heavy { background: #ff007f; color: #fff; }
.action-btn.shield { background: #ffd600; color: #000; }
.action-btn.heal { background: #39ff14; color: #000; }
.controls-hint {
  font-size: 10px;
  color: #ff80ab;
  opacity: 0.8;
}
.game-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(6, 2, 14, 0.9);
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
  color: #ff007f;
  text-shadow: 0 0 12px #ff007f;
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
  background: rgba(4, 2, 12, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-content {
  background: #140528;
  border: 1px solid #ff007f;
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
  color: #ff007f;
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
  background: #240a44;
  border: 1px solid #ff007f;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ff007f;
  color: #fff;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #00f0ff;
  color: #000;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Neon Gladiator Arena
class ArenaAudio {
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
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.18);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.18);
  }
  playHeavy() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }
  playShield() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.setValueAtTime(880, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
  playHeal() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(261.63, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(523.25, this.ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playFanfare() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.1);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + idx * 0.1);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.1 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.1);
      osc.stop(this.ctx.currentTime + idx * 0.1 + 0.2);
    });
  }
}
window.audio = new ArenaAudio();`;

  const game = `${RPG_THEMES_CODE}
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

    levelDisplay.textContent = \`\${currentBout}/45\`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    player.hp = player.maxHp;
    player.energy = player.maxEnergy;
    player.defense = 0;

    const baseHp = 90 + currentBout * 12;
    enemy = {
      name: currentBout % 5 === 0 ? \`Grand Champion Apex-\${currentBout}\` : \`Cyber Gladiator MK-\${currentBout}\`,
      hp: baseHp,
      maxHp: baseHp,
      defense: 0,
      anim: 'idle'
    };

    battleLog.textContent = \`Championship Bout \${currentBout} started against \${enemy.name}!\`;
    isTurnActive = true;
    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    purseDisplay.textContent = \`\${credits} CR\`;
    recordDisplay.textContent = \`\${wins}W - \${losses}L\`;
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
      battleLog.textContent = \`You execute Plasma Slash for \${actualDmg} damage!\`;
      addParticles(450, 200, '#00f0ff');
      player.energy = Math.min(player.maxEnergy, player.energy + 8);
    } else if (action === 'heavy') {
      if (player.energy >= 15) {
        player.energy -= 15;
        const dmg = 42 + Math.floor(Math.random() * 12);
        const actualDmg = Math.max(10, dmg - enemy.defense);
        enemy.hp -= actualDmg;
        window.audio.playHeavy();
        battleLog.textContent = \`CRITICAL HEAVY STRIKE! Deals \${actualDmg} heavy plasma damage!\`;
        addParticles(450, 200, '#ff007f');
      } else {
        battleLog.textContent = \`Not enough energy for Heavy Strike! Standard attack performed.\`;
        enemy.hp -= 15;
        window.audio.playClash();
      }
    } else if (action === 'shield') {
      player.defense = 25;
      window.audio.playShield();
      battleLog.textContent = \`Defense Matrix engaged! Shielding next attack.\`;
      addParticles(150, 200, '#ffd600');
    } else if (action === 'heal') {
      player.hp = Math.min(player.maxHp, player.hp + 35);
      window.audio.playHeal();
      battleLog.textContent = \`Nanite repair injection restored +35 HP!\`;
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
          showOverlay("BOUT WON!", \`Advancing to Bout \${currentBout + 1}...\`, () => {
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
      battleLog.textContent = \`\${enemy.name} strikes back for \${actualDmg} damage!\`;
      addParticles(150, 200, '#ff0055');
    } else if (aiChoice < 0.85) {
      // Heavy Attack
      const baseDmg = 25 + Math.floor(currentBout * 2.2);
      const actualDmg = Math.max(5, baseDmg - player.defense);
      player.hp -= actualDmg;
      window.audio.playHeavy();
      battleLog.textContent = \`\${enemy.name} fires HEAVY OVERLOAD for \${actualDmg} damage!\`;
      addParticles(150, 200, '#ffd600');
    } else {
      // Heal / Nanite
      enemy.hp = Math.min(enemy.maxHp, enemy.hp + 20);
      window.audio.playHeal();
      battleLog.textContent = \`\${enemy.name} repairs cyberware chassis (+20 HP)!\`;
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
    ctx.fillText(\`CYBORG PILOT: \${Math.max(0, player.hp)}/\${player.maxHp} HP\`, 60, 50);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(60, 60, 180, 12);
    ctx.fillStyle = '#39ff14';
    ctx.fillRect(60, 60, 180 * (player.hp / player.maxHp), 12);

    ctx.fillText(\`ENERGY: \${player.energy}/\${player.maxEnergy}\`, 60, 90);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect(60, 95, 180, 8);
    ctx.fillStyle = '#00f0ff';
    ctx.fillRect(60, 95, 180 * (player.energy / player.maxEnergy), 8);

    // Enemy HP Bar
    ctx.textAlign = 'right';
    ctx.fillStyle = '#fff';
    ctx.fillText(\`\${enemy.name}: \${Math.max(0, enemy.hp)}/\${enemy.maxHp} HP\`, 540, 50);
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
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 92 (${gameId}) built successfully.`);
}

// ============================================================================
// GAME 93: TEXT TERMINAL HACKER QUEST: INTERACTIVE FICTION
// ============================================================================
function buildGame93() {
  const gameId = 'text-terminal-hacker-quest';
  console.log(`Building Game 93: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Terminal Hacker Quest - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">NODE</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">SYSTEM</span><span id="themeDisplay" class="value">Police Terminal</span></div>
      <div class="hud-item"><span class="label">CREDITS</span><span id="creditsDisplay" class="value">500 CR</span></div>
      <div class="hud-item"><span class="label">CLEARANCE</span><span id="secDisplay" class="value">LVL 1</span></div>
      <button id="levelSelectBtn" class="btn-level-select">NODES</button>
    </header>

    <main class="terminal-wrapper">
      <div id="terminalOutput" class="terminal-output"></div>
      <div class="terminal-input-row">
        <span class="prompt-sign">&gt;</span>
        <input type="text" id="terminalInput" placeholder="Type command (ls, cat, hack, bypass, help)..." autocomplete="off" autofocus>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="quick-cmd-row">
        <button class="cmd-btn" data-cmd="help">HELP</button>
        <button class="cmd-btn" data-cmd="ls">LS</button>
        <button class="cmd-btn" data-cmd="scan">SCAN</button>
        <button class="cmd-btn" data-cmd="hack">HACK</button>
        <button class="cmd-btn" data-cmd="decrypt">DECRYPT</button>
        <button class="cmd-btn" data-cmd="next">NEXT NODE</button>
      </div>
      <div class="controls-hint">Enter command or click buttons to infiltrate the 45 corporate mainframe nodes!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT MISSION NODE (1–45)</h2>
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
}
body {
  background: #020703;
  color: #39ff14;
  font-family: 'Courier New', Courier, monospace;
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
  background: #040d05;
  border: 1px solid #39ff14;
  box-shadow: 0 0 25px rgba(57, 255, 20, 0.2);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #061708;
  border-bottom: 1px solid #39ff14;
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  color: #80e27e;
  letter-spacing: 1px;
}
.hud-item .value {
  font-size: 13px;
  font-weight: 800;
  color: #39ff14;
}
.btn-level-select {
  background: #39ff14;
  border: none;
  color: #000;
  font-weight: 800;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
}
.terminal-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px;
  overflow: hidden;
  background: #020703;
}
.terminal-output {
  flex: 1;
  overflow-y: auto;
  font-size: 12px;
  line-height: 1.5;
  white-space: pre-wrap;
  padding-right: 8px;
}
.terminal-output .system { color: #00f0ff; }
.terminal-output .alert { color: #ff0055; font-weight: bold; }
.terminal-output .success { color: #ffd600; font-weight: bold; }
.terminal-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  border-top: 1px solid rgba(57, 255, 20, 0.3);
  padding-top: 8px;
}
.prompt-sign {
  color: #39ff14;
  font-weight: bold;
}
#terminalInput {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #39ff14;
  font-family: inherit;
  font-size: 13px;
}
.hud-footer {
  padding: 8px 12px;
  background: #061708;
  border-top: 1px solid #39ff14;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.quick-cmd-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
}
.cmd-btn {
  background: #0c2b10;
  border: 1px solid #39ff14;
  color: #39ff14;
  font-family: inherit;
  font-size: 11px;
  padding: 4px 10px;
  cursor: pointer;
}
.cmd-btn:hover {
  background: #39ff14;
  color: #000;
}
.controls-hint {
  font-size: 9px;
  color: #80e27e;
  opacity: 0.8;
}
.modal-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(2, 7, 3, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-content {
  background: #061708;
  border: 1px solid #39ff14;
  border-radius: 4px;
  padding: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-content h2 {
  color: #39ff14;
  font-size: 15px;
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
  background: #0c2b10;
  border: 1px solid #39ff14;
  color: #39ff14;
  font-family: inherit;
  font-size: 10px;
  padding: 8px 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #39ff14;
  color: #000;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #39ff14;
  color: #000;
  border: none;
  padding: 6px 16px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Text Terminal Hacker Quest
class TerminalAudio {
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
  playKey() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200 + Math.random() * 400, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.03);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.03);
  }
  playSuccess() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [440, 554.37, 659.25];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + idx * 0.08 + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.08);
      osc.stop(this.ctx.currentTime + idx * 0.08 + 0.15);
    });
  }
  playAlarm() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.setValueAtTime(400, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
}
window.audio = new TerminalAudio();`;

  const game = `${RPG_THEMES_CODE}
(function() {
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalInput = document.getElementById('terminalInput');
  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const creditsDisplay = document.getElementById('creditsDisplay');
  const secDisplay = document.getElementById('secDisplay');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let currentNode = 1;
  let credits = 500;
  let secLevel = 1;
  let nodeHacked = false;

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentNode ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadNode(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function printLine(text, className = '') {
    const p = document.createElement('div');
    if (className) p.className = className;
    p.textContent = text;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function loadNode(nodeNum) {
    currentNode = Math.max(1, Math.min(45, nodeNum));
    const theme = THEMES[currentNode - 1];

    levelDisplay.textContent = \`\${currentNode}/45\`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;
    secLevel = 1 + Math.floor(currentNode / 10);
    secDisplay.textContent = \`LVL \${secLevel}\`;
    nodeHacked = false;

    terminalOutput.innerHTML = '';
    printLine(\`=======================================================\`, 'system');
    printLine(\`[CONNECTING TO MAINFRAME NODE \${currentNode}/45]\`, 'system');
    printLine(\`SYSTEM HOST: \${theme.name.toUpperCase()}\`, 'system');
    printLine(\`SECURITY PROTOCOL: AES-512 / ICE LEVEL \${secLevel}\`, 'alert');
    printLine(\`Type 'help' for command listing or 'scan' to inspect node.\`);
    printLine(\`=======================================================\`, 'system');

    initLevelGrid();
  }

  function handleCommand(cmd) {
    const raw = cmd.trim().toLowerCase();
    printLine(\`> \${cmd}\`);
    window.audio.playKey();

    if (!raw) return;

    if (raw === 'help') {
      printLine(\`AVAILABLE COMMANDS:\`);
      printLine(\`  ls          - List data files on current node\`);
      printLine(\`  cat <file>  - Read file contents\`);
      printLine(\`  scan        - Scan node vulnerabilities and encryption key\`);
      printLine(\`  hack        - Attempt security clearance bypass\`);
      printLine(\`  decrypt     - Decrypt encrypted credentials\`);
      printLine(\`  next        - Advance to next mission node\`);
      printLine(\`  clear       - Clear terminal screen\`);
    } else if (raw === 'ls') {
      printLine(\`FILES IN /usr/local/mainframe/node_\${currentNode}:\`);
      printLine(\`  - system_manifest.dat\`);
      printLine(\`  - security_keys.enc\`);
      printLine(\`  - corporate_payroll.db\`);
      printLine(\`  - root_access_token.key\`);
    } else if (raw === 'scan') {
      printLine(\`[SCANNING PORT 443 &amp; MEMORY BUFFERS...]\`, 'system');
      setTimeout(() => {
        printLine(\`[RESULT]: Vulnerability detected in buffer 0x7F4A.\`, 'success');
        printLine(\`Execute 'hack' to inject exploit payload.\`, 'system');
        window.audio.playSuccess();
      }, 300);
    } else if (raw === 'hack') {
      printLine(\`[INJECTING ZERO-DAY BUFFER OVERFLOW...]\`, 'system');
      setTimeout(() => {
        if (Math.random() < 0.9) {
          nodeHacked = true;
          const reward = 150 + currentNode * 25;
          credits += reward;
          creditsDisplay.textContent = \`\${credits} CR\`;
          printLine(\`ACCESS GRANTED! Root privileges acquired.\`, 'success');
          printLine(\`Transferred +\${reward} CR to cryptocurrency wallet.\`, 'success');
          printLine(\`Type 'next' or click NEXT NODE to proceed!\`, 'system');
          window.audio.playSuccess();
        } else {
          printLine(\`INTRUSION DETECTED! ICE firewall counter-attacked.\`, 'alert');
          window.audio.playAlarm();
        }
      }, 400);
    } else if (raw.startsWith('cat')) {
      const parts = raw.split(' ');
      const fname = parts[1] || '';
      if (fname.includes('payroll')) {
        printLine(\`PAYROLL DUMP: Executive slush fund: 4,500,000 CR transferred to off-grid vault.\`);
      } else if (fname.includes('manifest')) {
        printLine(\`MANIFEST: Node \${currentNode} controls local sector orbital defense grid.\`);
      } else {
        printLine(\`CONTENTS OF \${fname}: Encrypted binary payload [0x41 0x59 0x99 ...]\`);
      }
    } else if (raw === 'decrypt') {
      printLine(\`Decrypting cipher keys with quantum coprocessor...\`, 'system');
      setTimeout(() => {
        printLine(\`Cipher decoded: PASSKEY = CIPHER_NODE_\${currentNode}_OVERRIDE\`, 'success');
        window.audio.playSuccess();
      }, 300);
    } else if (raw === 'next') {
      if (currentNode >= 45) {
        printLine(\`CONGRATULATIONS! ALL 45 CORPORATE NODES INFILTRATED!\`, 'success');
        printLine(\`You are the Century Master Hacker!\`, 'success');
      } else {
        loadNode(currentNode + 1);
      }
    } else if (raw === 'clear') {
      terminalOutput.innerHTML = '';
    } else {
      printLine(\`Unknown command: '\${raw}'. Type 'help' for options.\`, 'alert');
    }
  }

  terminalInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      handleCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  document.querySelectorAll('.cmd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      handleCommand(cmd);
    });
  });

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadNode(1);
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 93 (${gameId}) built successfully.`);
}

buildGame91();
buildGame92();
buildGame93();
console.log('RPG Category Part 1 build complete.');
