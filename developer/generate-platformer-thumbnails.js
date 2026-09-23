/**
 * Next Games/Game — Platformer SVG Thumbnail Generator
 * Generates 10 futuristic cyber platformer thumbnails for Category 5 (Games 41–50)
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
    id: 'neon-gravity-jumper',
    title: 'Neon Gravity Jumper',
    accent: '#00f0ff',
    secondary: '#ff007f',
    iconPath: `
      <!-- Dual rails -->
      <line x1="100" y1="120" x2="500" y2="120" stroke="#00f0ff" stroke-width="8" stroke-dasharray="16,8"/>
      <line x1="100" y1="280" x2="500" y2="280" stroke="#ff007f" stroke-width="8" stroke-dasharray="16,8"/>
      <!-- Jumper Runner -->
      <rect x="270" y="80" width="60" height="40" rx="8" fill="#00f0ff" filter="url(#glow)"/>
      <path d="M300,120 L300,280" stroke="#39ff14" stroke-width="4" stroke-dasharray="8,8"/>
      <circle cx="300" cy="200" r="16" fill="#ffd600" filter="url(#glow)"/>
      <!-- Invert arrows -->
      <polygon points="200,160 220,180 180,180" fill="#00f0ff"/>
      <polygon points="400,240 380,220 420,220" fill="#ff007f"/>
    `
  },
  {
    id: 'cyber-ninja-climb',
    title: 'Cyber Ninja Climb',
    accent: '#39ff14',
    secondary: '#00e5ff',
    iconPath: `
      <!-- Vertical Spire Walls -->
      <rect x="140" y="60" width="30" height="280" fill="#1b2838" stroke="#39ff14" stroke-width="4"/>
      <rect x="430" y="60" width="30" height="280" fill="#1b2838" stroke="#39ff14" stroke-width="4"/>
      <!-- Shinobi figure wall jumping -->
      <polygon points="170,220 220,190 200,250" fill="#00e5ff" filter="url(#glow)"/>
      <!-- Dash trajectory & Shurikens -->
      <path d="M220,190 Q300,140 430,170" stroke="#39ff14" stroke-width="4" stroke-dasharray="8,6" fill="none"/>
      <polygon points="300,140 315,130 310,150 325,140 310,130" fill="#ffd600" filter="url(#glow)"/>
      <polygon points="370,160 385,150 380,170 395,160 380,150" fill="#ffd600" filter="url(#glow)"/>
    `
  },
  {
    id: 'nanotech-crawler',
    title: 'Nanotech Crawler',
    accent: '#ff9100',
    secondary: '#00ffcc',
    iconPath: `
      <!-- Circular Conduit Track -->
      <circle cx="300" cy="200" r="110" fill="none" stroke="#263238" stroke-width="24"/>
      <circle cx="300" cy="200" r="110" fill="none" stroke="#ff9100" stroke-width="6" stroke-dasharray="20,10"/>
      <!-- Magnetic Nanobot Body -->
      <circle cx="300" cy="90" r="28" fill="#00ffcc" filter="url(#glow)"/>
      <!-- Multi-legs on surface -->
      <path d="M280,90 L260,82 M320,90 L340,82 M275,105 L260,115 M325,105 L340,115" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
      <circle cx="300" cy="90" r="10" fill="#04020f"/>
    `
  },
  {
    id: 'quantum-teleport-hopper',
    title: 'Quantum Teleport Hopper',
    accent: '#b388ff',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Portals -->
      <ellipse cx="180" cy="200" rx="35" ry="85" fill="none" stroke="#00f0ff" stroke-width="8" filter="url(#glow)"/>
      <ellipse cx="420" cy="200" rx="35" ry="85" fill="none" stroke="#ff007f" stroke-width="8" filter="url(#glow)"/>
      <!-- Teleport trajectory arc -->
      <path d="M180,200 Q300,100 420,200" fill="none" stroke="#b388ff" stroke-width="6" stroke-dasharray="10,8"/>
      <!-- Particle Beacon -->
      <circle cx="300" cy="145" r="18" fill="#ffd600" filter="url(#glow)"/>
      <polygon points="410,185 450,200 410,215" fill="#00f0ff"/>
    `
  },
  {
    id: 'skyward-spire',
    title: 'Skyward Spire',
    accent: '#ffd600',
    secondary: '#ff3d00',
    iconPath: `
      <!-- Stepped Platforms bouncing upwards -->
      <rect x="220" y="290" width="160" height="16" rx="6" fill="#37474f" stroke="#ffd600" stroke-width="3"/>
      <rect x="160" y="220" width="140" height="16" rx="6" fill="#37474f" stroke="#00e5ff" stroke-width="3"/>
      <rect x="300" y="150" width="140" height="16" rx="6" fill="#37474f" stroke="#ff007f" stroke-width="3"/>
      <rect x="230" y="80" width="140" height="16" rx="6" fill="#37474f" stroke="#39ff14" stroke-width="3"/>
      <!-- Bounce Arc -->
      <path d="M300,290 Q220,230 230,220 Q360,170 370,150 Q300,90 300,80" fill="none" stroke="#ffd600" stroke-width="5" stroke-dasharray="8,6"/>
      <circle cx="300" cy="80" r="16" fill="#ffd600" filter="url(#glow)"/>
    `
  },
  {
    id: 'silicon-cave-explorer',
    title: 'Silicon Cave Explorer',
    accent: '#00e676',
    secondary: '#ffab00',
    iconPath: `
      <!-- Stalactites & Cavern Silhouette -->
      <polygon points="100,60 160,160 210,60 280,180 340,60 410,170 500,60 500,340 100,340" fill="#121824" stroke="#00e676" stroke-width="4"/>
      <!-- Glowing Crystals -->
      <polygon points="220,290 235,240 250,290" fill="#00f0ff" filter="url(#glow)"/>
      <polygon points="260,300 270,255 285,300" fill="#ea80fc" filter="url(#glow)"/>
      <polygon points="360,290 375,230 390,290" fill="#ffd600" filter="url(#glow)"/>
      <!-- Flashlight beam -->
      <polygon points="180,240 320,220 320,270" fill="rgba(255, 235, 59, 0.25)"/>
      <circle cx="180" cy="240" r="14" fill="#00e676"/>
    `
  },
  {
    id: 'jetpack-salvager',
    title: 'Jetpack Salvager',
    accent: '#ff5722',
    secondary: '#00e5ff',
    iconPath: `
      <!-- Tunnel Hazards -->
      <line x1="120" y1="80" x2="480" y2="80" stroke="#ff5722" stroke-width="6"/>
      <line x1="120" y1="320" x2="480" y2="320" stroke="#ff5722" stroke-width="6"/>
      <!-- Pilot with Jetpack Thruster Flame -->
      <rect x="270" y="170" width="35" height="50" rx="8" fill="#00e5ff" filter="url(#glow)"/>
      <rect x="250" y="175" width="20" height="40" rx="4" fill="#78909c"/>
      <!-- Flame plume -->
      <polygon points="260,215 250,265 270,265" fill="#ff5722" filter="url(#glow)"/>
      <polygon points="260,215 255,245 265,245" fill="#ffd600"/>
      <!-- Cargo pod -->
      <circle cx="340" cy="195" r="16" fill="#ffd600" stroke="#ff9100" stroke-width="3"/>
    `
  },
  {
    id: 'pulse-runner',
    title: 'Pulse Runner',
    accent: '#ea80fc',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Equalizer Visualizer Bars as Platforms -->
      <rect x="140" y="240" width="40" height="90" fill="#3f51b5" stroke="#00f0ff" stroke-width="3"/>
      <rect x="200" y="180" width="40" height="150" fill="#3f51b5" stroke="#ea80fc" stroke-width="3"/>
      <rect x="260" y="130" width="40" height="200" fill="#3f51b5" stroke="#00f0ff" stroke-width="3"/>
      <rect x="320" y="200" width="40" height="130" fill="#3f51b5" stroke="#39ff14" stroke-width="3"/>
      <rect x="380" y="160" width="40" height="170" fill="#3f51b5" stroke="#ffd600" stroke-width="3"/>
      <!-- Pulse Runner jumping -->
      <circle cx="280" cy="90" r="18" fill="#00f0ff" filter="url(#glow)"/>
      <path d="M200,170 Q240,80 280,90 Q310,100 340,190" fill="none" stroke="#ea80fc" stroke-width="4" stroke-dasharray="6,4"/>
    `
  },
  {
    id: 'hologram-glitcher',
    title: 'Hologram Glitcher',
    accent: '#00f0ff',
    secondary: '#ff007f',
    iconPath: `
      <!-- Dual-Phase Platforms -->
      <rect x="150" y="160" width="130" height="20" rx="4" fill="#00f0ff" filter="url(#glow)"/>
      <rect x="320" y="220" width="130" height="20" rx="4" fill="none" stroke="#ff007f" stroke-width="4" stroke-dasharray="10,6"/>
      <rect x="210" y="280" width="130" height="20" rx="4" fill="#00f0ff" filter="url(#glow)"/>
      <!-- Glitch displacement lines -->
      <line x1="120" y1="180" x2="480" y2="180" stroke="#00f0ff" stroke-width="2" opacity="0.6"/>
      <line x1="140" y1="205" x2="460" y2="205" stroke="#ff007f" stroke-width="2" opacity="0.6"/>
      <!-- Shifter avatar -->
      <circle cx="215" cy="130" r="18" fill="#ffd600" filter="url(#glow)"/>
    `
  },
  {
    id: 'robo-escape-9',
    title: 'Robo-Escape 9',
    accent: '#39ff14',
    secondary: '#ff1744',
    iconPath: `
      <!-- High-security Facility corridor -->
      <rect x="100" y="100" width="400" height="200" fill="#141a24" stroke="#37474f" stroke-width="4"/>
      <!-- Security Camera Spotlight cone -->
      <polygon points="460,110 320,300 440,300" fill="rgba(255, 23, 68, 0.25)"/>
      <circle cx="460" cy="110" r="12" fill="#ff1744" filter="url(#glow)"/>
      <!-- Rogue Infiltrator Robot crouching in shadows -->
      <rect x="160" y="240" width="36" height="40" rx="8" fill="#39ff14" filter="url(#glow)"/>
      <circle cx="178" cy="230" r="10" fill="#00f0ff"/>
      <line x1="178" y1="218" x2="178" y2="210" stroke="#00f0ff" stroke-width="3"/>
    `
  }
];

function generateThumbnailSvg(thumb) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#04020f"/>
      <stop offset="60%" stop-color="#0a091e"/>
      <stop offset="100%" stop-color="#140b28"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background Layer -->
  <rect width="600" height="400" fill="url(#bgGrad)"/>

  <!-- Cybernetic Grid Overlay -->
  <g stroke="rgba(0, 240, 255, 0.08)" stroke-width="1">
    <line x1="0" y1="80" x2="600" y2="80"/>
    <line x1="0" y1="160" x2="600" y2="160"/>
    <line x1="0" y1="240" x2="600" y2="240"/>
    <line x1="0" y1="320" x2="600" y2="320"/>
    <line x1="120" y1="0" x2="120" y2="400"/>
    <line x1="240" y1="0" x2="240" y2="400"/>
    <line x1="360" y1="0" x2="360" y2="400"/>
    <line x1="480" y1="0" x2="480" y2="400"/>
  </g>

  <!-- Graphic Elements -->
  ${thumb.iconPath}

  <!-- Outer Neon Border -->
  <rect x="8" y="8" width="584" height="384" rx="12" fill="none" stroke="${thumb.accent}" stroke-width="2" opacity="0.4"/>
  <circle cx="20" cy="20" r="4" fill="${thumb.accent}"/>
  <circle cx="580" cy="20" r="4" fill="${thumb.secondary}"/>
  <circle cx="20" cy="380" r="4" fill="${thumb.secondary}"/>
  <circle cx="580" cy="380" r="4" fill="${thumb.accent}"/>

  <!-- Bottom Title Banner -->
  <rect x="24" y="336" width="552" height="42" rx="8" fill="rgba(4, 2, 15, 0.85)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
  <text x="40" y="362" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="${thumb.accent}" letter-spacing="1.5">${thumb.title.toUpperCase()}</text>
  <text x="560" y="362" font-family="'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="600" fill="#b0bec5" text-anchor="end" letter-spacing="1">45 THEMES</text>
</svg>`;
}

console.log('Generating SVG thumbnails for Category 5: Platformer...');
thumbnails.forEach(t => {
  const filePath = path.join(thumbsDir, `${t.id}.svg`);
  fs.writeFileSync(filePath, generateThumbnailSvg(t), 'utf-8');
  console.log(`  ✓ Generated thumbnail: assets/thumbnails/${t.id}.svg`);
});

console.log('\nAll Category 5 SVG thumbnails generated successfully!\n');
