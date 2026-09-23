/**
 * Next Games/Game — Category 4 (Strategy) SVG Thumbnail Generator
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const thumbsDir = path.join(rootDir, 'assets', 'thumbnails');

function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

console.log('Generating SVG thumbnails for Category 4: Strategy...');

const STRATEGY_THUMBS = [
  {
    id: 'cyber-tower-defense',
    title: 'TOWER DEFENSE',
    subtitle: 'SUBNET GUARDIAN',
    color1: '#00f0ff',
    color2: '#ff007f',
    iconPath: `<path d="M 80 240 L 220 240 L 220 140 L 360 140 L 360 340 L 420 340" fill="none" stroke="#1c2850" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M 80 240 L 220 240 L 220 140 L 360 140 L 360 340 L 420 340" fill="none" stroke="#00f0ff" stroke-width="4" stroke-dasharray="10 10"/>
               <!-- Pulse Tower -->
               <polygon points="170,180 190,140 210,180" fill="#00f0ff" filter="url(#glow)"/>
               <circle cx="190" cy="140" r="8" fill="#ffffff"/>
               <!-- Railgun Tower -->
               <rect x="290" y="200" width="30" height="40" rx="4" fill="#ff007f" filter="url(#glow)"/>
               <line x1="305" y1="200" x2="305" y2="170" stroke="#ffd600" stroke-width="5"/>
               <!-- Malware Enemy -->
               <circle cx="220" cy="190" r="10" fill="#ff1744" filter="url(#glow)"/>`
  },
  {
    id: 'galactic-fleet-commander',
    title: 'FLEET COMMANDER',
    subtitle: 'HEX SPACE TACTICS',
    color1: '#7c4dff',
    color2: '#00e5ff',
    iconPath: `<polygon points="200,160 280,160 320,230 280,300 200,300 160,230" fill="none" stroke="#7c4dff" stroke-width="3" stroke-dasharray="6 4"/>
               <!-- Flagship Cruiser -->
               <polygon points="240,190 265,260 240,245 215,260" fill="#00e5ff" filter="url(#glow)"/>
               <line x1="240" y1="180" x2="240" y2="150" stroke="#ffd600" stroke-width="4"/>
               <!-- Interceptors -->
               <polygon points="180,220 195,250 180,242 165,250" fill="#39ff14"/>
               <polygon points="300,220 315,250 300,242 285,250" fill="#ff007f"/>`
  },
  {
    id: 'micro-colony-automaton',
    title: 'BASE ARCHITECT',
    subtitle: 'LUNAR MICRO-COLONY',
    color1: '#ffd700',
    color2: '#00e676',
    iconPath: `<path d="M 120 320 Q 240 180 360 320 Z" fill="#0a192f" stroke="#00e676" stroke-width="4" filter="url(#glow)"/>
               <line x1="160" y1="260" x2="320" y2="260" stroke="#00e676" stroke-width="2" opacity="0.6"/>
               <line x1="240" y1="200" x2="240" y2="320" stroke="#00e676" stroke-width="2" opacity="0.6"/>
               <!-- Solar Collector Array -->
               <rect x="140" y="330" width="40" height="24" rx="2" fill="#ffd700"/>
               <!-- Mining Rig -->
               <polygon points="320,310 330,340 310,340" fill="#00f0ff"/>
               <!-- Worker Drone -->
               <circle cx="240" cy="150" r="10" fill="#ff007f"/>
               <circle cx="240" cy="150" r="18" fill="none" stroke="#ff007f" stroke-width="2" stroke-dasharray="4 4"/>`
  },
  {
    id: 'hacker-node-conquest',
    title: 'NODE CONQUEST',
    subtitle: 'SUBNET DOMINANCE',
    color1: '#00f0ff',
    color2: '#39ff14',
    iconPath: `<line x1="140" y1="240" x2="240" y2="160" stroke="#00f0ff" stroke-width="3"/>
               <line x1="140" y1="240" x2="240" y2="320" stroke="#00f0ff" stroke-width="3"/>
               <line x1="240" y1="160" x2="340" y2="240" stroke="#ff007f" stroke-width="3"/>
               <line x1="240" y1="320" x2="340" y2="240" stroke="#ff007f" stroke-width="3"/>
               <!-- Player Node -->
               <circle cx="140" cy="240" r="30" fill="#061826" stroke="#00f0ff" stroke-width="4" filter="url(#glow)"/>
               <text x="140" y="246" fill="#00f0ff" font-size="18" font-family="monospace" font-weight="bold" text-anchor="middle">50</text>
               <!-- Neutral Node -->
               <circle cx="240" cy="160" r="22" fill="#141a24" stroke="#ffd600" stroke-width="3"/>
               <circle cx="240" cy="320" r="22" fill="#141a24" stroke="#ffd600" stroke-width="3"/>
               <!-- Enemy Node -->
               <circle cx="340" cy="240" r="30" fill="#260614" stroke="#ff007f" stroke-width="4" filter="url(#glow)"/>
               <text x="340" y="246" fill="#ff007f" font-size="18" font-family="monospace" font-weight="bold" text-anchor="middle">35</text>`
  },
  {
    id: 'cyberpunk-mech-tactics',
    title: 'MECH TACTICS',
    subtitle: 'GRID SKIRMISH',
    color1: '#ff3d00',
    color2: '#ffd600',
    iconPath: `<rect x="140" y="160" width="200" height="160" rx="8" fill="#0e1322" stroke="#ff3d00" stroke-width="2"/>
               <!-- Grid Cells -->
               <line x1="190" y1="160" x2="190" y2="320" stroke="#253255" stroke-width="2"/>
               <line x1="240" y1="160" x2="240" y2="320" stroke="#253255" stroke-width="2"/>
               <line x1="290" y1="160" x2="290" y2="320" stroke="#253255" stroke-width="2"/>
               <!-- Heavy Combat Mech Silhouette -->
               <rect x="200" y="220" width="30" height="36" rx="4" fill="#ff3d00" filter="url(#glow)"/>
               <rect x="195" y="226" width="6" height="24" fill="#ffd600"/>
               <rect x="229" y="226" width="6" height="24" fill="#ffd600"/>
               <!-- Targeting Reticle -->
               <circle cx="290" cy="240" r="16" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4 2"/>
               <circle cx="290" cy="240" r="3" fill="#ff1744"/>`
  },
  {
    id: 'biodome-terraform',
    title: 'BIODOME PROTOCOL',
    subtitle: 'ECOSYSTEM TERRAFORM',
    color1: '#00e676',
    color2: '#00b0ff',
    iconPath: `<circle cx="240" cy="240" r="100" fill="#02140a" stroke="#00e676" stroke-width="4" filter="url(#glow)"/>
               <!-- Planetary Ring -->
               <ellipse cx="240" cy="240" rx="140" ry="40" fill="none" stroke="#00b0ff" stroke-width="3" opacity="0.8"/>
               <!-- Sprout Leaf Vector -->
               <path d="M 240 280 C 210 240 210 180 240 160 C 270 180 270 240 240 280 Z" fill="#00e676" opacity="0.8"/>
               <line x1="240" y1="280" x2="240" y2="180" stroke="#ffffff" stroke-width="2"/>`
  },
  {
    id: 'drone-swarm-commander',
    title: 'DRONE SWARM',
    subtitle: 'TACTICAL PATROL',
    color1: '#00e5ff',
    color2: '#e040fb',
    iconPath: `<circle cx="240" cy="240" r="110" fill="none" stroke="#00e5ff" stroke-width="2" opacity="0.3"/>
               <circle cx="240" cy="240" r="70" fill="none" stroke="#00e5ff" stroke-width="2" stroke-dasharray="6 6" opacity="0.5"/>
               <!-- Radar Sweep Line -->
               <line x1="240" y1="240" x2="330" y2="170" stroke="#00e5ff" stroke-width="3" filter="url(#glow)"/>
               <!-- Drone Boids Flock -->
               <polygon points="260,190 268,205 252,205" fill="#00e5ff"/>
               <polygon points="280,180 288,195 272,195" fill="#00e5ff"/>
               <polygon points="290,210 298,225 282,225" fill="#00e5ff"/>
               <polygon points="310,195 318,210 302,210" fill="#00e5ff"/>
               <!-- Hostile Target -->
               <circle cx="180" cy="280" r="8" fill="#ff1744" filter="url(#glow)"/>`
  },
  {
    id: 'ai-defense-matrix',
    title: 'AI DEFENSE',
    subtitle: 'NEURAL FIREWALL WAR',
    color1: '#ea80fc',
    color2: '#00f0ff',
    iconPath: `<polygon points="240,140 320,190 320,290 240,340 160,290 160,190" fill="#090514" stroke="#ea80fc" stroke-width="4" filter="url(#glow)"/>
               <!-- Sentient AI Core -->
               <circle cx="240" cy="240" r="28" fill="#00f0ff" filter="url(#glow)"/>
               <circle cx="240" cy="240" r="14" fill="#ffffff"/>
               <!-- Encryption Shield Vectors -->
               <line x1="240" y1="140" x2="240" y2="212" stroke="#ea80fc" stroke-width="3"/>
               <line x1="320" y1="190" x2="264" y2="226" stroke="#ea80fc" stroke-width="3"/>
               <line x1="320" y1="290" x2="264" y2="254" stroke="#ea80fc" stroke-width="3"/>
               <line x1="240" y1="340" x2="240" y2="268" stroke="#ea80fc" stroke-width="3"/>
               <line x1="160" y1="290" x2="216" y2="254" stroke="#ea80fc" stroke-width="3"/>
               <line x1="160" y1="190" x2="216" y2="226" stroke="#ea80fc" stroke-width="3"/>`
  },
  {
    id: 'space-station-outpost',
    title: 'STATION OUTPOST',
    subtitle: 'RESOURCE BALANCER',
    color1: '#ffd600',
    color2: '#ff4081',
    iconPath: `<circle cx="240" cy="240" r="40" fill="#121422" stroke="#ffd600" stroke-width="4" filter="url(#glow)"/>
               <line x1="140" y1="240" x2="340" y2="240" stroke="#ffd600" stroke-width="6"/>
               <!-- Solar Wings -->
               <rect x="120" y="210" width="30" height="60" rx="3" fill="#00f0ff"/>
               <rect x="330" y="210" width="30" height="60" rx="3" fill="#00f0ff"/>
               <!-- Orbital Shuttle Transit -->
               <polygon points="240,130 250,150 230,150" fill="#ff4081" filter="url(#glow)"/>
               <circle cx="240" cy="240" r="8" fill="#ffffff"/>`
  }
];

STRATEGY_THUMBS.forEach(item => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#0e1328"/>
      <stop offset="100%" stop-color="#04060d"/>
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="480" height="480" fill="url(#bgGrad)"/>
  
  <!-- Grid Matrix -->
  <g opacity="0.15" stroke="${item.color1}" stroke-width="1">
    <line x1="0" y1="80" x2="480" y2="80"/>
    <line x1="0" y1="160" x2="480" y2="160"/>
    <line x1="0" y1="240" x2="480" y2="240"/>
    <line x1="0" y1="320" x2="480" y2="320"/>
    <line x1="0" y1="400" x2="480" y2="400"/>
    <line x1="80" y1="0" x2="80" y2="480"/>
    <line x1="160" y1="0" x2="160" y2="480"/>
    <line x1="240" y1="0" x2="240" y2="480"/>
    <line x1="320" y1="0" x2="320" y2="480"/>
    <line x1="400" y1="0" x2="400" y2="480"/>
  </g>

  <!-- Graphic Icon Elements -->
  <g>
    ${item.iconPath}
  </g>

  <!-- Typography & Badge -->
  <rect x="40" y="390" width="400" height="60" rx="8" fill="#080c1cd0" stroke="${item.color1}" stroke-width="1.5"/>
  <text x="240" y="420" fill="#ffffff" font-family="'Orbitron', sans-serif, monospace" font-size="20" font-weight="900" text-anchor="middle" letter-spacing="2" filter="url(#glow)">${item.title}</text>
  <text x="240" y="440" fill="${item.color2}" font-family="'Rajdhani', sans-serif, monospace" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="3">${item.subtitle}</text>

  <!-- Corner Brackets -->
  <path d="M 10 30 L 10 10 L 30 10" fill="none" stroke="${item.color1}" stroke-width="3"/>
  <path d="M 450 10 L 470 10 L 470 30" fill="none" stroke="${item.color1}" stroke-width="3"/>
  <path d="M 470 450 L 470 470 L 450 470" fill="none" stroke="${item.color2}" stroke-width="3"/>
  <path d="M 30 470 L 10 470 L 10 450" fill="none" stroke="${item.color2}" stroke-width="3"/>
</svg>`;

  writeFile(path.join(thumbsDir, `${item.id}.svg`), svg);
  console.log(`  ✓ Generated thumbnail: assets/thumbnails/${item.id}.svg`);
});

console.log('\nAll Category 4 SVG thumbnails generated successfully!');
