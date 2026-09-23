/**
 * Next Games/Game — RPG Category Part 2:
 * - space-mercenary-outpost (Game 94)
 * - neon-wizard (Game 95)
 * - cyber-pet-simulator (Game 96)
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
    "Mars Orbital Hangar", "Titan Methane Refinery", "Asteroid Pirate Den", "Deep Space Citadel",
    "Europa Ice Outpost", "Sirius Hyper-Gate", "Nebula Salvage Station", "Proxima Centauri Beacon",
    "Solar Flare Relay", "Kuiper Belt Smuggler Port", "Orion Constellation Hub", "Black Hole Event Horizon",
    "Pleiades Trade Station", "Andromeda Void Station", "Alpha Centauri Dock", "Cygnus Star Foundry",
    "Vela Supernova Outpost", "Antares Red Giant Depot", "Betelgeuse Fusion Core", "Vega Prism Hangar",
    "Polaris Navigation Node", "Centaurus Mining Platform", "Cassiopeia Luxury Spire", "Draco Dark Matter Bay",
    "Phoenix Rebirth Hangar", "Aquila Communications Hub", "Pegasus Starship Yard", "Ursa Major Frontier",
    "Taurus Heavy Hauler Base", "Leo Stellar Fortress", "Scorpius Strike Outpost", "Sagittarius Galactic Core",
    "Capricorn Dyson Swarm", "Aquarius Water World Bay", "Pisces Twin Moon Base", "Aries Plasma Forge",
    "Gemini Binary Star Hub", "Cancer Coral Station", "Virgo Crystal Observatory", "Libra Balance Outpost",
    "Ophiuchus Secret Sanctuary", "Eridanus Cosmic Void", "Bootes Supercluster Beacon", "Hydra Deep Space Array",
    "Century Omega Space Gate"
  ];

  const colorPalettes = [
    { bg: "#060914", primary: "#ff8800", secondary: "#00f0ff", accent: "#ffd600" },
    { bg: "#0d051f", primary: "#d500f9", secondary: "#00e5ff", accent: "#39ff14" },
    { bg: "#041412", primary: "#00e5ff", secondary: "#76ff03", accent: "#ff007f" },
    { bg: "#190804", primary: "#ff3d00", secondary: "#ffd600", accent: "#00f0ff" },
    { bg: "#09041a", primary: "#7c4dff", secondary: "#ff007f", accent: "#00e5ff" }
  ];

  return themeNames.map((name, i) => {
    const pal = colorPalettes[i % colorPalettes.length];
    return {
      id: i + 1,
      name: `Sector ${i + 1}: ${name}`,
      bg: pal.bg,
      primary: pal.primary,
      secondary: pal.secondary,
      accent: pal.accent
    };
  });
}

const RPG_THEMES_CODE = `const THEMES = ${JSON.stringify(generateRPGThemes(), null, 2)};\n`;

// ============================================================================
// GAME 94: SPACE MERCENARY OUTPOST: SECTOR BOUNTY HUNTER
// ============================================================================
function buildGame94() {
  const gameId = 'space-mercenary-outpost';
  console.log(`Building Game 94: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Space Mercenary Outpost: Sector Bounty Hunter - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">SECTOR</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">OUTPOST</span><span id="themeDisplay" class="value">Mars Hangar</span></div>
      <div class="hud-item"><span class="label">HULL</span><span id="hullDisplay" class="value">100%</span></div>
      <div class="hud-item"><span class="label">SHIELDS</span><span id="shieldDisplay" class="value">🛡️🛡️🛡️</span></div>
      <div class="hud-item"><span class="label">BOUNTY</span><span id="bountyDisplay" class="value">0 CR</span></div>
      <button id="levelSelectBtn" class="btn-level-select">SECTORS</button>
    </header>

    <main class="canvas-wrapper">
      <canvas id="spaceCanvas" width="600" height="420"></canvas>
      <div id="gameOverlay" class="game-overlay hidden">
        <h2 id="overlayTitle">SECTOR SECURED!</h2>
        <p id="overlayMessage">All pirate targets eliminated. Claim bounty!</p>
        <button id="overlayBtn" class="btn-action">NEXT SECTOR</button>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="flight-controls">
        <button class="flight-btn" id="btnLeft">◀ STEER</button>
        <button class="flight-btn" id="btnThrust">▲ THRUST</button>
        <button class="flight-btn" id="btnRight">STEER ▶</button>
        <button class="flight-btn fire" id="btnFire">🔥 FIRE LASER</button>
      </div>
      <div class="controls-hint">Fly gunship with Arrow Keys/WASD. Spacebar to fire photon lasers. Hunt pirate bounties!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT STAR OUTPOST SECTOR (1–45)</h2>
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
  background: #02040a;
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
  background: radial-gradient(circle at center, #091124 0%, #02040a 100%);
  border: 1px solid rgba(255, 136, 0, 0.3);
  box-shadow: 0 0 35px rgba(255, 136, 0, 0.15);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(8, 14, 28, 0.85);
  border-bottom: 1px solid rgba(255, 136, 0, 0.25);
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  color: #ffb74d;
  letter-spacing: 1px;
}
.hud-item .value {
  font-size: 14px;
  font-weight: 800;
  color: #ff8800;
  font-family: monospace;
}
.btn-level-select {
  background: #ff8800;
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
  background: #030610;
  border: 1px solid rgba(255, 136, 0, 0.2);
  width: 100%;
  max-width: 600px;
  height: 420px;
}
.hud-footer {
  padding: 10px 14px;
  background: rgba(6, 11, 22, 0.95);
  border-top: 1px solid rgba(255, 136, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.flight-controls {
  display: flex;
  gap: 8px;
}
.flight-btn {
  background: #14223d;
  border: 1px solid #ff8800;
  color: #ff8800;
  padding: 8px 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
}
.flight-btn.fire {
  background: #ff3d00;
  color: #fff;
  border-color: #ffd600;
}
.controls-hint {
  font-size: 10px;
  color: #ffb74d;
  opacity: 0.8;
}
.game-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(3, 6, 14, 0.9);
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
  color: #ff8800;
  text-shadow: 0 0 12px #ff8800;
}
.btn-action {
  background: #ff8800;
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
  background: rgba(2, 4, 10, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
.modal-overlay.hidden { display: none; }
.modal-content {
  background: #091326;
  border: 1px solid #ff8800;
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
  color: #ff8800;
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
  background: #14223d;
  border: 1px solid #ff8800;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ff8800;
  color: #000;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #ff8800;
  color: #000;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Space Mercenary Outpost
class SpaceAudio {
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
  playLaser() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(880, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }
  playExplode() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(140, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.35);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.35);
  }
  playThrust() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(80, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }
  playWarp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }
}
window.audio = new SpaceAudio();`;

  const game = `${RPG_THEMES_CODE}
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

    levelDisplay.textContent = \`\${currentSector}/45\`;
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
    hullDisplay.textContent = \`\${Math.max(0, ship.hull)}%\`;
    shieldDisplay.textContent = '🛡️'.repeat(Math.max(0, ship.shields));
    bountyDisplay.textContent = \`\${bountyCredits} CR\`;
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
                showOverlay("SECTOR CLEAR!", \`Warping to Sector \${currentSector + 1}...\`, () => {
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
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 94 (${gameId}) built successfully.`);
}

// ============================================================================
// GAME 95: NEON WIZARD: SPELL-CRAFTING GRIMOIRE
// ============================================================================
function buildGame95() {
  const gameId = 'neon-wizard';
  console.log(`Building Game 95: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Neon Wizard: Spell Grimoire - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">SANCTUM</span><span id="levelDisplay" class="value">1/45</span></div>
      <div class="hud-item"><span class="label">REALM</span><span id="themeDisplay" class="value">Arcane Library</span></div>
      <div class="hud-item"><span class="label">HP</span><span id="hpDisplay" class="value">100/100</span></div>
      <div class="hud-item"><span class="label">MANA</span><span id="manaDisplay" class="value">100/100</span></div>
      <div class="hud-item"><span class="label">SCORE</span><span id="scoreDisplay" class="value">0</span></div>
      <button id="levelSelectBtn" class="btn-level-select">SANCTUMS</button>
    </header>

    <main class="canvas-wrapper">
      <canvas id="wizardCanvas" width="600" height="420"></canvas>
      <div id="gameOverlay" class="game-overlay hidden">
        <h2 id="overlayTitle">SANCTUM PURIFIED!</h2>
        <p id="overlayMessage">All mythical glitched monsters banished.</p>
        <button id="overlayBtn" class="btn-action">NEXT SANCTUM</button>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="rune-spells">
        <button class="rune-btn fire" data-spell="fire">🔥 FIRE RUNES [1]</button>
        <button class="rune-btn ice" data-spell="ice">❄️ FROST SHARD [2]</button>
        <button class="rune-btn shock" data-spell="shock">⚡ SHOCK WAVE [3]</button>
        <button class="rune-btn shield" data-spell="shield">🛡️ ARCANE WARD [4]</button>
      </div>
      <div class="controls-hint">Click spells or press [1] [2] [3] [4] to cast runes and destroy incoming mythical monsters!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT ARCANE SANCTUM (1–45)</h2>
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
  background: #090214;
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
  background: radial-gradient(circle at center, #1b0736 0%, #090214 100%);
  border: 1px solid rgba(213, 0, 249, 0.3);
  box-shadow: 0 0 35px rgba(213, 0, 249, 0.2);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(14, 4, 30, 0.85);
  border-bottom: 1px solid rgba(213, 0, 249, 0.25);
}
.hud-item {
  display: flex;
  flex-direction: column;
}
.hud-item .label {
  font-size: 9px;
  color: #ea80fc;
  letter-spacing: 1px;
}
.hud-item .value {
  font-size: 14px;
  font-weight: 800;
  color: #d500f9;
  font-family: monospace;
}
.btn-level-select {
  background: #d500f9;
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
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
canvas {
  background: #0d031e;
  border: 1px solid rgba(213, 0, 249, 0.2);
  width: 100%;
  max-width: 600px;
  height: 420px;
}
.hud-footer {
  padding: 10px 14px;
  background: rgba(11, 3, 26, 0.95);
  border-top: 1px solid rgba(213, 0, 249, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.rune-spells {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 480px;
}
.rune-btn {
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
}
.rune-btn.fire { background: #ff3d00; color: #fff; }
.rune-btn.ice { background: #00e5ff; color: #000; }
.rune-btn.shock { background: #ffd600; color: #000; }
.rune-btn.shield { background: #d500f9; color: #fff; }
.controls-hint {
  font-size: 10px;
  color: #ea80fc;
  opacity: 0.8;
}
.game-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(7, 2, 16, 0.9);
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
  color: #d500f9;
  text-shadow: 0 0 12px #d500f9;
}
.btn-action {
  background: #00e5ff;
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
  background: #15052b;
  border: 1px solid #d500f9;
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
  color: #d500f9;
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
  background: #230847;
  border: 1px solid #d500f9;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #d500f9;
  color: #fff;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #d500f9;
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Neon Wizard
class WizardAudio {
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
  playSpell(type) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    if (type === 'fire') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.2);
    } else if (type === 'ice') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.15);
    } else if (type === 'shock') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.setValueAtTime(200, this.ctx.currentTime + 0.08);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.25);
    }
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }
  playHit() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  playWin() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.09);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.09);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.09 + 0.18);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.09);
      osc.stop(this.ctx.currentTime + i * 0.09 + 0.18);
    });
  }
}
window.audio = new WizardAudio();`;

  const game = `${RPG_THEMES_CODE}
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

    levelDisplay.textContent = \`\${currentSanctum}/45\`;
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
    hpDisplay.textContent = \`\${Math.max(0, wizard.hp)}/\${wizard.maxHp}\`;
    manaDisplay.textContent = \`\${Math.floor(wizard.mana)}/\${wizard.maxMana}\`;
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
                showOverlay("SANCTUM PURIFIED!", \`Entering Sanctum \${currentSanctum + 1}...\`, () => {
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
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 95 (${gameId}) built successfully.`);
}

// ============================================================================
// GAME 96: CYBER PET SIMULATOR: VIRTUAL TAMAGOTCHI BOT
// ============================================================================
function buildGame96() {
  const gameId = 'cyber-pet-simulator';
  console.log(`Building Game 96: ${gameId}...`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cyber Pet Simulator: Virtual Tamagotchi - Next Games/Game</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="game-container">
    <header class="hud-header">
      <div class="hud-item"><span class="label">STAGE</span><span id="levelDisplay" class="value">1/40</span></div>
      <div class="hud-item"><span class="label">HABITAT</span><span id="themeDisplay" class="value">Cleanroom</span></div>
      <div class="hud-item"><span class="label">EVOLUTION</span><span id="evoDisplay" class="value">Nano-Spore</span></div>
      <div class="hud-item"><span class="label">XP</span><span id="xpDisplay" class="value">0/100</span></div>
      <button id="levelSelectBtn" class="btn-level-select">STAGES</button>
    </header>

    <main class="tamagotchi-body">
      <div class="lcd-screen">
        <canvas id="petCanvas" width="320" height="260"></canvas>
        <div id="petThought" class="pet-thought">"Beep boop! Ready to learn!"</div>
      </div>
      <div class="stats-row">
        <div class="stat"><span class="stat-lbl">ENERGY</span><div class="bar-outer"><div id="energyBar" class="bar-fill" style="width: 80%"></div></div></div>
        <div class="stat"><span class="stat-lbl">CLEAN</span><div class="bar-outer"><div id="cleanBar" class="bar-fill" style="width: 80%"></div></div></div>
        <div class="stat"><span class="stat-lbl">HAPPY</span><div class="bar-outer"><div id="happyBar" class="bar-fill" style="width: 80%"></div></div></div>
      </div>
    </main>

    <footer class="hud-footer">
      <div class="care-buttons">
        <button class="care-btn" id="btnFeed">🍎 FEED DATA</button>
        <button class="care-btn" id="btnTrain">🧠 TRAIN NET</button>
        <button class="care-btn" id="btnClean">🧹 DEFRAG</button>
        <button class="care-btn" id="btnPlay">🎮 PLAY MINI</button>
      </div>
      <div class="controls-hint">Care for your nanobot companion across 40 evolutionary growth tiers!</div>
    </footer>
  </div>

  <div id="levelModal" class="modal-overlay hidden">
    <div class="modal-content">
      <h2>SELECT EVOLUTION STAGE (1–40)</h2>
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
  background: #090617;
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
  background: radial-gradient(circle at center, #1b0e36 0%, #090617 100%);
  border: 1px solid rgba(0, 229, 255, 0.3);
  box-shadow: 0 0 35px rgba(0, 229, 255, 0.15);
  position: relative;
}
.hud-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(14, 8, 32, 0.85);
  border-bottom: 1px solid rgba(0, 229, 255, 0.25);
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
  color: #00e5ff;
  font-family: monospace;
}
.btn-level-select {
  background: #ff4081;
  border: none;
  color: #fff;
  font-weight: 800;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.tamagotchi-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px;
}
.lcd-screen {
  background: #041417;
  border: 4px solid #ff4081;
  border-radius: 16px;
  box-shadow: inset 0 0 15px rgba(0,0,0,0.8), 0 0 20px rgba(255, 64, 129, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
}
canvas {
  background: #061e22;
  border-radius: 8px;
  display: block;
}
.pet-thought {
  margin-top: 6px;
  color: #00e5ff;
  font-size: 12px;
  font-family: monospace;
  font-weight: bold;
}
.stats-row {
  display: flex;
  gap: 14px;
  width: 320px;
}
.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.stat-lbl {
  font-size: 9px;
  color: #80d8ff;
}
.bar-outer {
  background: #112830;
  border: 1px solid #00e5ff;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
}
.bar-fill {
  background: #00e5ff;
  height: 100%;
}
.hud-footer {
  padding: 10px 14px;
  background: rgba(12, 6, 26, 0.95);
  border-top: 1px solid rgba(0, 229, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.care-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 440px;
}
.care-btn {
  background: #1a1638;
  border: 1px solid #00e5ff;
  color: #00e5ff;
  padding: 10px;
  font-weight: bold;
  font-size: 11px;
  border-radius: 4px;
  cursor: pointer;
}
.care-btn:hover {
  background: #00e5ff;
  color: #000;
}
.controls-hint {
  font-size: 10px;
  color: #80d8ff;
  opacity: 0.8;
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
  background: #15092a;
  border: 1px solid #ff4081;
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
  color: #ff4081;
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
  background: #250f44;
  border: 1px solid #ff4081;
  color: #fff;
  font-size: 10px;
  padding: 8px 4px;
  border-radius: 4px;
  cursor: pointer;
}
.lvl-btn.active {
  background: #ff4081;
  color: #fff;
  font-weight: bold;
}
.btn-close {
  margin-top: 12px;
  background: #00e5ff;
  color: #000;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}`;

  const audio = `// Web Audio API Sound Synthesizer for Cyber Pet Simulator
class PetAudio {
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
  playChirp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  playEat() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.setValueAtTime(600, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  playEvolve() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime + i * 0.09);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.09);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + i * 0.09 + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + i * 0.09);
      osc.stop(this.ctx.currentTime + i * 0.09 + 0.15);
    });
  }
}
window.audio = new PetAudio();`;

  const game = `${RPG_THEMES_CODE}
(function() {
  const canvas = document.getElementById('petCanvas');
  const ctx = canvas.getContext('2d');

  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const evoDisplay = document.getElementById('evoDisplay');
  const xpDisplay = document.getElementById('xpDisplay');
  const petThought = document.getElementById('petThought');
  const energyBar = document.getElementById('energyBar');
  const cleanBar = document.getElementById('cleanBar');
  const happyBar = document.getElementById('happyBar');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let currentTier = 1;
  let xp = 0;
  let maxXp = 100;

  let pet = {
    energy: 80,
    cleanliness: 80,
    happiness: 80,
    bounce: 0,
    bounceDir: 1
  };

  const EVOS = [
    "Nano-Spore", "Micro-Blob", "Silicon Tadpole", "Scout Drone", "Bit-Hound",
    "Cyber-Kitten", "Logic Sprite", "Graphene Golem", "Quantum Falcon", "Mecha-Titan",
    "Omni-Deity"
  ];

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 40; i++) {
      const theme = THEMES[i - 1];
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentTier ? ' active' : '');
      btn.textContent = i;
      btn.title = theme.name;
      btn.addEventListener('click', () => {
        loadTier(i);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    }
  }

  function loadTier(tierNum) {
    currentTier = Math.max(1, Math.min(40, tierNum));
    const theme = THEMES[currentTier - 1];

    levelDisplay.textContent = \`\${currentTier}/40\`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;

    const evoIdx = Math.min(EVOS.length - 1, Math.floor((currentTier - 1) / 4));
    evoDisplay.textContent = EVOS[evoIdx];

    pet.energy = 85;
    pet.cleanliness = 85;
    pet.happiness = 85;

    petThought.textContent = \`"Beep! Arrived at \${theme.name.split(':')[1] || theme.name}!"\`;
    updateHud();
    initLevelGrid();
  }

  function updateHud() {
    energyBar.style.width = \`\${Math.max(0, pet.energy)}%\`;
    cleanBar.style.width = \`\${Math.max(0, pet.cleanliness)}%\`;
    happyBar.style.width = \`\${Math.max(0, pet.happiness)}%\`;
    xpDisplay.textContent = \`\${xp}/\${maxXp}\`;
  }

  function feed() {
    pet.energy = Math.min(100, pet.energy + 25);
    xp += 15;
    window.audio.playEat();
    petThought.textContent = '"Yum! Fresh data packets ingested!"';
    checkEvolve();
    updateHud();
  }

  function train() {
    pet.energy = Math.max(10, pet.energy - 15);
    pet.happiness = Math.min(100, pet.happiness + 20);
    xp += 25;
    window.audio.playChirp();
    petThought.textContent = '"Neural networks weights updated!"';
    checkEvolve();
    updateHud();
  }

  function clean() {
    pet.cleanliness = 100;
    xp += 10;
    window.audio.playChirp();
    petThought.textContent = '"Defragmented and polished memory!"';
    checkEvolve();
    updateHud();
  }

  function play() {
    pet.happiness = 100;
    pet.cleanliness = Math.max(10, pet.cleanliness - 10);
    xp += 20;
    window.audio.playChirp();
    petThought.textContent = '"Yay! That mini-game was awesome!"';
    checkEvolve();
    updateHud();
  }

  function checkEvolve() {
    if (xp >= maxXp) {
      xp = 0;
      maxXp = Math.floor(maxXp * 1.25);
      if (currentTier < 40) {
        window.audio.playEvolve();
        loadTier(currentTier + 1);
        petThought.textContent = '"EVOLUTION COMPLETE! I have upgraded!"';
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Habitat background grid
    ctx.strokeStyle = 'rgba(0, 229, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Bounce pet animation
    pet.bounce += 0.05 * pet.bounceDir;
    if (pet.bounce > 6 || pet.bounce < -6) pet.bounceDir *= -1;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2 + pet.bounce;

    // Pet Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(cx, canvas.height / 2 + 55, 45, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Pet Body
    ctx.fillStyle = '#00e5ff';
    ctx.beginPath();
    ctx.arc(cx, cy, 38, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Antenna
    ctx.strokeStyle = '#ffd600';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 38);
    ctx.lineTo(cx, cy - 58);
    ctx.stroke();
    ctx.fillStyle = '#ff4081';
    ctx.beginPath();
    ctx.arc(cx, cy - 58, 6, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(cx - 14, cy - 6, 6, 0, Math.PI * 2);
    ctx.arc(cx + 14, cy - 6, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(cx - 12, cy - 8, 2, 0, Math.PI * 2);
    ctx.arc(cx + 16, cy - 8, 2, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy + 10, 10, 0.2 * Math.PI, 0.8 * Math.PI);
    ctx.stroke();

    requestAnimationFrame(render);
  }

  document.getElementById('btnFeed').onclick = feed;
  document.getElementById('btnTrain').onclick = train;
  document.getElementById('btnClean').onclick = clean;
  document.getElementById('btnPlay').onclick = play;

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadTier(1);
  requestAnimationFrame(render);
})();`;

  writeFile(path.join(gamesDir, gameId, 'index.html'), html);
  writeFile(path.join(gamesDir, gameId, 'style.css'), css);
  writeFile(path.join(gamesDir, gameId, 'audio.js'), audio);
  writeFile(path.join(gamesDir, gameId, 'game.js'), game);
  copyThumbnailToIcon(gameId);
  console.log(`Game 96 (${gameId}) built successfully.`);
}

buildGame94();
buildGame95();
buildGame96();
console.log('RPG Category Part 2 build complete.');
