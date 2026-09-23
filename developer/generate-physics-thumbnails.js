/**
 * Next Games/Game — Physics SVG Thumbnail Generator
 * Generates 10 futuristic cyber physics thumbnails for Category 6 (Games 51–60)
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const thumbsDir = path.join(rootDir, 'assets', 'thumbnails');

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true });
}

const thumbnails = [
  {
    id: 'graviton-pinball',
    title: 'Graviton Pinball',
    accent: '#00f0ff',
    secondary: '#ff007f',
    iconPath: `
      <!-- Pinball table outline -->
      <polygon points="180,60 420,60 460,320 140,320" fill="#0b1124" stroke="#00f0ff" stroke-width="5"/>
      <!-- Flippers -->
      <polygon points="200,290 270,305 200,310" fill="#ff007f" filter="url(#glow)"/>
      <polygon points="400,290 330,305 400,310" fill="#ff007f" filter="url(#glow)"/>
      <!-- Magnetic Bumpers -->
      <circle cx="300" cy="130" r="32" fill="#ffea00" stroke="#ff007f" stroke-width="4" filter="url(#glow)"/>
      <circle cx="230" cy="190" r="24" fill="#00f0ff" stroke="#39ff14" stroke-width="4"/>
      <circle cx="370" cy="190" r="24" fill="#00f0ff" stroke="#39ff14" stroke-width="4"/>
      <!-- Glowing pinball -->
      <circle cx="280" cy="240" r="14" fill="#ffffff" filter="url(#glow)"/>
      <path d="M280,240 Q300,160 300,130" stroke="#00f0ff" stroke-width="3" stroke-dasharray="6,4" fill="none"/>
    `
  },
  {
    id: 'cyber-ragdoll-demolition',
    title: 'Cyber Ragdoll Demolition',
    accent: '#ff3d00',
    secondary: '#ffd600',
    iconPath: `
      <!-- Slope Ramp -->
      <polygon points="120,80 180,80 480,310 120,310" fill="#1b2838" stroke="#ff3d00" stroke-width="4"/>
      <!-- Multi-joint Ragdoll Figure -->
      <circle cx="250" cy="130" r="16" fill="#ffd600" filter="url(#glow)"/>
      <!-- Torso & Limbs -->
      <line x1="250" y1="146" x2="280" y2="190" stroke="#00f0ff" stroke-width="8" stroke-linecap="round"/>
      <line x1="250" y1="155" x2="220" y2="180" stroke="#00f0ff" stroke-width="6" stroke-linecap="round"/>
      <line x1="220" y1="180" x2="195" y2="160" stroke="#00f0ff" stroke-width="5" stroke-linecap="round"/>
      <line x1="250" y1="155" x2="290" y2="160" stroke="#00f0ff" stroke-width="6" stroke-linecap="round"/>
      <line x1="280" y1="190" x2="310" y2="230" stroke="#ff3d00" stroke-width="6" stroke-linecap="round"/>
      <line x1="280" y1="190" x2="260" y2="240" stroke="#ff3d00" stroke-width="6" stroke-linecap="round"/>
      <!-- Impact Explosive Barrel -->
      <rect x="420" y="240" width="40" height="55" rx="5" fill="#ff1744" stroke="#ffd600" stroke-width="3"/>
      <polygon points="440,225 450,240 430,240" fill="#ffd600"/>
    `
  },
  {
    id: 'neon-elastic-sling',
    title: 'Neon Elastic Sling',
    accent: '#39ff14',
    secondary: '#d500f9',
    iconPath: `
      <!-- Slingshot fork -->
      <path d="M160,260 L160,190 L130,120 M160,190 L190,120" stroke="#00f0ff" stroke-width="8" stroke-linecap="round" fill="none"/>
      <!-- Elastic Band -->
      <line x1="130" y1="120" x2="200" y2="160" stroke="#39ff14" stroke-width="4"/>
      <line x1="190" y1="120" x2="200" y2="160" stroke="#39ff14" stroke-width="4"/>
      <!-- Slung Quantum Probe -->
      <circle cx="200" cy="160" r="14" fill="#d500f9" filter="url(#glow)"/>
      <!-- Gravitational Orbit Curve -->
      <path d="M200,160 Q280,100 370,140 T460,250" stroke="#ffd600" stroke-width="3" stroke-dasharray="8,6" fill="none"/>
      <!-- Gravity Planet Well -->
      <circle cx="370" cy="190" r="32" fill="#1a237e" stroke="#39ff14" stroke-width="4" filter="url(#glow)"/>
      <circle cx="370" cy="190" r="48" fill="none" stroke="#39ff14" stroke-width="1" stroke-dasharray="4,4"/>
    `
  },
  {
    id: 'plasma-ballistics',
    title: 'Plasma Ballistics',
    accent: '#ff9100',
    secondary: '#ff1744',
    iconPath: `
      <!-- Destructible Hills -->
      <path d="M100,300 Q180,210 260,270 Q340,320 420,220 Q470,180 500,260 L500,330 L100,330 Z" fill="#1b2838" stroke="#ff9100" stroke-width="4"/>
      <!-- Plasma Tank -->
      <rect x="150" y="240" width="50" height="24" rx="4" fill="#2e7d32" stroke="#39ff14" stroke-width="3"/>
      <!-- Tank Wheels -->
      <circle cx="162" cy="266" r="6" fill="#111" stroke="#39ff14" stroke-width="2"/>
      <circle cx="175" cy="266" r="6" fill="#111" stroke="#39ff14" stroke-width="2"/>
      <circle cx="188" cy="266" r="6" fill="#111" stroke="#39ff14" stroke-width="2"/>
      <!-- Cannon Turret -->
      <line x1="175" y1="240" x2="215" y2="210" stroke="#00f0ff" stroke-width="6" stroke-linecap="round"/>
      <!-- Ballistic Arc -->
      <path d="M215,210 Q320,80 430,220" stroke="#ff1744" stroke-width="4" stroke-dasharray="8,5" fill="none"/>
      <!-- Plasma Blast Explosion Crater -->
      <circle cx="430" cy="220" r="22" fill="#ffd600" filter="url(#glow)"/>
      <polygon points="430,195 440,215 455,220 440,230 430,245 420,230 405,220 420,215" fill="#ff1744"/>
    `
  },
  {
    id: 'quantum-billiards',
    title: 'Zero-G Billiards',
    accent: '#00e5ff',
    secondary: '#ea80fc',
    iconPath: `
      <!-- Octagonal Billiard Arena -->
      <polygon points="190,80 410,80 480,150 480,250 410,320 190,320 120,250 120,150" fill="#04121a" stroke="#00e5ff" stroke-width="6"/>
      <!-- Gravitational Pockets -->
      <circle cx="190" cy="80" r="16" fill="#000" stroke="#ea80fc" stroke-width="3"/>
      <circle cx="410" cy="80" r="16" fill="#000" stroke="#ea80fc" stroke-width="3"/>
      <circle cx="410" cy="320" r="16" fill="#000" stroke="#ea80fc" stroke-width="3"/>
      <circle cx="190" cy="320" r="16" fill="#000" stroke="#ea80fc" stroke-width="3"/>
      <!-- Glowing Quantum Balls -->
      <circle cx="260" cy="200" r="16" fill="#00e5ff" filter="url(#glow)"/>
      <circle cx="340" cy="180" r="16" fill="#ff1744" filter="url(#glow)"/>
      <circle cx="360" cy="230" r="16" fill="#ffd600" filter="url(#glow)"/>
      <!-- Cue Aim Line -->
      <line x1="160" y1="230" x2="245" y2="205" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
    `
  },
  {
    id: 'structural-bridge-engineer',
    title: 'Structural Bridge',
    accent: '#ffd600',
    secondary: '#00e676',
    iconPath: `
      <!-- Canyon Cliffs -->
      <polygon points="80,180 160,180 160,330 80,330" fill="#263238" stroke="#ff9100" stroke-width="3"/>
      <polygon points="440,180 520,180 520,330 440,330" fill="#263238" stroke="#ff9100" stroke-width="3"/>
      <!-- Truss Bridge Roadway -->
      <line x1="160" y1="190" x2="440" y2="190" stroke="#00e676" stroke-width="6"/>
      <!-- Truss Beams & Nodes -->
      <polygon points="160,190 230,130 300,190 370,130 440,190" fill="none" stroke="#ffd600" stroke-width="4"/>
      <line x1="230" y1="130" x2="370" y2="130" stroke="#ffd600" stroke-width="4"/>
      <line x1="230" y1="130" x2="230" y2="190" stroke="#00e676" stroke-width="3"/>
      <line x1="370" y1="130" x2="370" y2="190" stroke="#00e676" stroke-width="3"/>
      <!-- Heavy Cyber Truck Crossing -->
      <rect x="250" y="165" width="50" height="20" rx="3" fill="#ff1744"/>
      <circle cx="260" cy="188" r="4" fill="#fff"/>
      <circle cx="290" cy="188" r="4" fill="#fff"/>
    `
  },
  {
    id: 'fluid-particle-diverter',
    title: 'Fluid Lab Diverter',
    accent: '#18ffff',
    secondary: '#651fff',
    iconPath: `
      <!-- Fluid Emitter Nozzle -->
      <polygon points="270,60 330,60 315,95 285,95" fill="#37474f" stroke="#18ffff" stroke-width="3"/>
      <!-- Fluid Stream of Particles -->
      <circle cx="300" cy="115" r="7" fill="#18ffff" filter="url(#glow)"/>
      <circle cx="295" cy="135" r="8" fill="#18ffff" filter="url(#glow)"/>
      <circle cx="280" cy="165" r="7" fill="#18ffff"/>
      <circle cx="250" cy="195" r="8" fill="#18ffff"/>
      <!-- Angled Deflector Paddle -->
      <line x1="240" y1="180" x2="330" y2="210" stroke="#ffd600" stroke-width="8" stroke-linecap="round"/>
      <!-- Flow into Flask -->
      <circle cx="380" cy="240" r="7" fill="#18ffff"/>
      <circle cx="410" cy="265" r="8" fill="#18ffff"/>
      <!-- Chemical Flask Container -->
      <path d="M390,260 L390,280 L360,330 L460,330 L430,280 L430,260 Z" fill="none" stroke="#651fff" stroke-width="4"/>
      <!-- Fluid filled in base -->
      <polygon points="368,324 452,324 438,300 382,300" fill="#18ffff" filter="url(#glow)"/>
    `
  },
  {
    id: 'pendulum-wrecking-bot',
    title: 'Pendulum Wrecking Bot',
    accent: '#ff007f',
    secondary: '#ffea00',
    iconPath: `
      <!-- Pivot Mount -->
      <circle cx="300" cy="80" r="14" fill="#37474f" stroke="#ff007f" stroke-width="4"/>
      <!-- Swinging Cable -->
      <line x1="300" y1="80" x2="200" y2="230" stroke="#00f0ff" stroke-width="4"/>
      <!-- Heavy Electromagnetic Ball -->
      <circle cx="190" cy="245" r="30" fill="#263238" stroke="#ff007f" stroke-width="6" filter="url(#glow)"/>
      <!-- Magnetic Spikes on Ball -->
      <polygon points="155,245 140,245 150,235" fill="#ffea00"/>
      <polygon points="190,280 190,295 180,285" fill="#ffea00"/>
      <!-- Target Data Server Tower Smashing -->
      <rect x="360" y="160" width="60" height="150" fill="#101826" stroke="#00f0ff" stroke-width="3"/>
      <!-- Server Shatter Debris -->
      <rect x="380" y="140" width="16" height="16" fill="#ffea00" transform="rotate(25 380 140)"/>
      <rect x="420" y="150" width="14" height="14" fill="#00f0ff" transform="rotate(45 420 150)"/>
      <!-- Impact Shockwave Arc -->
      <path d="M230,210 Q280,240 230,270" stroke="#ffea00" stroke-width="4" stroke-linecap="round" fill="none"/>
    `
  },
  {
    id: 'magnetic-polarity-balancer',
    title: 'Magnetic Levitator',
    accent: '#00ff88',
    secondary: '#00b0ff',
    iconPath: `
      <!-- Top Magnetic Coil -->
      <rect x="230" y="70" width="140" height="35" rx="6" fill="#1b2838" stroke="#00b0ff" stroke-width="4"/>
      <line x1="250" y1="105" x2="250" y2="120" stroke="#00b0ff" stroke-width="3"/>
      <line x1="350" y1="105" x2="350" y2="120" stroke="#00b0ff" stroke-width="3"/>
      <!-- Bottom Magnetic Coil -->
      <rect x="230" y="270" width="140" height="35" rx="6" fill="#1b2838" stroke="#00b0ff" stroke-width="4"/>
      <!-- Magnetic Flux Lines -->
      <path d="M250,110 Q220,190 250,270" stroke="#00ff88" stroke-width="2" stroke-dasharray="6,4" fill="none"/>
      <path d="M350,110 Q380,190 350,270" stroke="#00ff88" stroke-width="2" stroke-dasharray="6,4" fill="none"/>
      <!-- Levitating Magnetic Core -->
      <polygon points="300,155 335,190 300,225 265,190" fill="#ffd600" stroke="#00ff88" stroke-width="5" filter="url(#glow)"/>
      <circle cx="300" cy="190" r="10" fill="#ffffff"/>
      <!-- Equilibrium Balance indicator bar -->
      <line x1="220" y1="190" x2="380" y2="190" stroke="#ff007f" stroke-width="2" stroke-dasharray="4,4"/>
    `
  },
  {
    id: 'orbital-trebuchet',
    title: 'Orbital Trebuchet',
    accent: '#ffab00',
    secondary: '#7c4dff',
    iconPath: `
      <!-- Trebuchet A-Frame Chassis -->
      <polygon points="200,280 260,150 280,150 340,280" fill="#1a2332" stroke="#ffab00" stroke-width="4"/>
      <!-- Counterweight Beam (Rotating Arm) -->
      <line x1="210" y1="210" x2="380" y2="110" stroke="#7c4dff" stroke-width="8" stroke-linecap="round"/>
      <!-- Heavy Counterweight Box -->
      <rect x="180" y="195" width="45" height="45" rx="4" fill="#b71c1c" stroke="#ffab00" stroke-width="3"/>
      <!-- Pivot Axle Pin -->
      <circle cx="270" cy="150" r="10" fill="#ffd600"/>
      <!-- Sling & Payload release -->
      <line x1="380" y1="110" x2="420" y2="80" stroke="#fff" stroke-width="3"/>
      <circle cx="425" cy="75" r="14" fill="#00f0ff" filter="url(#glow)"/>
      <!-- High Orbit Trajectory -->
      <path d="M425,75 Q470,40 510,120" stroke="#39ff14" stroke-width="4" stroke-dasharray="6,4" fill="none"/>
    `
  }
];

function generateThumbnail(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#04020f"/>
      <stop offset="60%" stop-color="#0d0824"/>
      <stop offset="100%" stop-color="#020108"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="600" height="380" rx="16" fill="url(#bgGrad)"/>

  <!-- High-Tech Coordinate Grid -->
  <g stroke="${item.accent}" stroke-opacity="0.12" stroke-width="1">
    <line x1="50" y1="0" x2="50" y2="380"/>
    <line x1="150" y1="0" x2="150" y2="380"/>
    <line x1="250" y1="0" x2="250" y2="380"/>
    <line x1="350" y1="0" x2="350" y2="380"/>
    <line x1="450" y1="0" x2="450" y2="380"/>
    <line x1="550" y1="0" x2="550" y2="380"/>
    <line x1="0" y1="60" x2="600" y2="60"/>
    <line x1="0" y1="140" x2="600" y2="140"/>
    <line x1="0" y1="220" x2="600" y2="220"/>
    <line x1="0" y1="300" x2="600" y2="300"/>
  </g>

  <!-- Outer Neon Trim -->
  <rect x="8" y="8" width="584" height="364" rx="12" fill="none" stroke="${item.accent}" stroke-width="2" stroke-opacity="0.4"/>
  <rect x="14" y="14" width="572" height="352" rx="8" fill="none" stroke="${item.secondary}" stroke-width="1" stroke-opacity="0.2"/>

  <!-- Category Watermark Banner -->
  <text x="32" y="44" font-family="'Segoe UI', monospace" font-size="12" font-weight="900" fill="${item.accent}" letter-spacing="3" opacity="0.85">PHYSICS ENGINE 45-THEME LAB</text>

  <!-- Graphic Icon Payload -->
  <g>
    ${item.iconPath}
  </g>

  <!-- Game Title Bottom Bar -->
  <rect x="24" y="318" width="552" height="42" rx="8" fill="#060214" fill-opacity="0.9" stroke="${item.accent}" stroke-width="1" stroke-opacity="0.5"/>
  <text x="42" y="345" font-family="'Segoe UI', system-ui, sans-serif" font-size="17" font-weight="800" fill="#ffffff" letter-spacing="1">${item.title.toUpperCase()}</text>
  <text x="550" y="344" text-anchor="end" font-family="monospace" font-size="11" font-weight="700" fill="${item.accent}" letter-spacing="1">45 STAGES</text>
</svg>`;
}

thumbnails.forEach(t => {
  const filePath = path.join(thumbsDir, `${t.id}.svg`);
  fs.writeFileSync(filePath, generateThumbnail(t), 'utf-8');
  console.log(`Generated thumbnail: assets/thumbnails/${t.id}.svg`);
});

console.log('All 10 Category 6 Physics thumbnails generated successfully.');
