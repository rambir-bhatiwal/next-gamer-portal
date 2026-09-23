/**
 * Next Games/Game — Category 3 (Puzzle) Generator Script
 * Full automated generation of all 10 puzzle games, SVG thumbnails, and portal config updates.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');
const thumbsDir = path.join(rootDir, 'assets', 'thumbnails');
const configJsonPath = path.join(rootDir, 'config', 'site-config.json');
const configJsPath = path.join(rootDir, 'config', 'site-config.js');

// 45 Thematic Environments for Puzzle Games
const PUZZLE_THEMES = [
  { id: 1, name: "Neon Cyber-Grid", bg: "#04020f", primary: "#00f0ff", secondary: "#ff007f", accent: "#39ff14", text: "#e0f7fa" },
  { id: 2, name: "Bioluminescent Crystal Cave", bg: "#02120e", primary: "#00ffcc", secondary: "#0099ff", accent: "#76ff03", text: "#e0f2f1" },
  { id: 3, name: "Molten Core", bg: "#160303", primary: "#ff3d00", secondary: "#ff9100", accent: "#ffd600", text: "#fbe9e7" },
  { id: 4, name: "Clockwork Sky-Fortress", bg: "#120e06", primary: "#ffd700", secondary: "#d4af37", accent: "#ff8c00", text: "#fff8e1" },
  { id: 5, name: "Quantum Void", bg: "#05010d", primary: "#b388ff", secondary: "#7c4dff", accent: "#ea80fc", text: "#ede7f6" },
  { id: 6, name: "Submerged Hydro-Lab", bg: "#010e1a", primary: "#00b0ff", secondary: "#00e5ff", accent: "#1de9b6", text: "#e1f5fe" },
  { id: 7, name: "Solar Flare Wasteland", bg: "#170a01", primary: "#ff6d00", secondary: "#ffab00", accent: "#ffd600", text: "#fff3e0" },
  { id: 8, name: "Emerald Nanite Spire", bg: "#021609", primary: "#00e676", secondary: "#00c853", accent: "#69f0ae", text: "#e8f5e9" },
  { id: 9, name: "Frozen Cryo-Tundra", bg: "#02121a", primary: "#80d8ff", secondary: "#40c4ff", accent: "#00e5ff", text: "#e1f5fe" },
  { id: 10, name: "Gravity Inversion Nexus", bg: "#0c0117", primary: "#e040fb", secondary: "#d500f9", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 11, name: "Dark Matter Singularity", bg: "#030308", primary: "#7986cb", secondary: "#3f51b5", accent: "#ff4081", text: "#e8eaf6" },
  { id: 12, name: "Antimatter Reactor", bg: "#14010e", primary: "#ff1744", secondary: "#d50000", accent: "#00e676", text: "#ffebee" },
  { id: 13, name: "Prismatic Aurora", bg: "#011210", primary: "#1de9b6", secondary: "#00bfa5", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 14, name: "Tachyon Warp Conduit", bg: "#0e0217", primary: "#d500f9", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 15, name: "Supernova Nebula", bg: "#17050a", primary: "#ff4081", secondary: "#f50057", accent: "#ffd600", text: "#fce4ec" },
  { id: 16, name: "Silicon Wafer Cleanroom", bg: "#081014", primary: "#26c6da", secondary: "#00acc1", accent: "#ffea00", text: "#e0f7fa" },
  { id: 17, name: "Vaporwave Sunset Highway", bg: "#120517", primary: "#ff77ff", secondary: "#00ffff", accent: "#ffff00", text: "#fdf0ff" },
  { id: 18, name: "Radioactive Fallout Vault", bg: "#0e1402", primary: "#76ff03", secondary: "#64dd17", accent: "#c6ff00", text: "#f1f8e9" },
  { id: 19, name: "Obsidian Hex Matrix", bg: "#060608", primary: "#90a4ae", secondary: "#607d8b", accent: "#00f0ff", text: "#eceff1" },
  { id: 20, name: "Cyber-Gothic Cathedral", bg: "#0d020d", primary: "#ea80fc", secondary: "#8e24aa", accent: "#ffd700", text: "#f8bbd0" },
  { id: 21, name: "Plasma Discharge Canal", bg: "#08011c", primary: "#651fff", secondary: "#3d5afe", accent: "#00e5ff", text: "#ede7f6" },
  { id: 22, name: "Golden Asteroid Belt", bg: "#141103", primary: "#ffd600", secondary: "#ffab00", accent: "#ff6d00", text: "#fffde7" },
  { id: 23, name: "Krypton Laser Array", bg: "#011409", primary: "#00e676", secondary: "#1de9b6", accent: "#ff007f", text: "#e8f5e9" },
  { id: 24, name: "Acid Rain Megacity", bg: "#070c0c", primary: "#64ffda", secondary: "#1de9b6", accent: "#a7ffeb", text: "#e0f2f1" },
  { id: 25, name: "Cobalt Deep Subnet", bg: "#01071c", primary: "#2979ff", secondary: "#2962ff", accent: "#00e5ff", text: "#e3f2fd" },
  { id: 26, name: "Crimson Sector 9", bg: "#1c0206", primary: "#ff1744", secondary: "#f50057", accent: "#ff9100", text: "#ffebee" },
  { id: 27, name: "Galactic Star Forge", bg: "#0b051c", primary: "#7c4dff", secondary: "#651fff", accent: "#ffd600", text: "#ede7f6" },
  { id: 28, name: "Hyper-Space Monolith", bg: "#040914", primary: "#00b0ff", secondary: "#0091ea", accent: "#ff4081", text: "#e1f5fe" },
  { id: 29, name: "Bio-Synthetic Jungle", bg: "#02170a", primary: "#00c853", secondary: "#64dd17", accent: "#ffea00", text: "#e8f5e9" },
  { id: 30, name: "Volcanic Basalt Shelf", bg: "#170404", primary: "#ff3d00", secondary: "#dd2c00", accent: "#ffab00", text: "#fbe9e7" },
  { id: 31, name: "Starlight Ionosphere", bg: "#06091c", primary: "#448aff", secondary: "#2979ff", accent: "#e040fb", text: "#e8eaf6" },
  { id: 32, name: "Amber CRT Mainframe", bg: "#140a00", primary: "#ffab00", secondary: "#ff6d00", accent: "#ffd600", text: "#fff8e1" },
  { id: 33, name: "Phosphor Terminal 1978", bg: "#011404", primary: "#00e676", secondary: "#00b300", accent: "#b9f6ca", text: "#e8f8f5" },
  { id: 34, name: "Titanium Orbital Dock", bg: "#0a0c10", primary: "#b0bec5", secondary: "#78909c", accent: "#00e5ff", text: "#eceff1" },
  { id: 35, name: "Superconductor Loop", bg: "#03101c", primary: "#40c4ff", secondary: "#00b0ff", accent: "#ff4081", text: "#e1f5fe" },
  { id: 36, name: "Magnetic Flux Funnel", bg: "#10031c", primary: "#b388ff", secondary: "#7c4dff", accent: "#00e676", text: "#ede7f6" },
  { id: 37, name: "Photon Wave Chamber", bg: "#021217", primary: "#18ffff", secondary: "#00e5ff", accent: "#ffd600", text: "#e0f7fa" },
  { id: 38, name: "Neutron Star Horizon", bg: "#0c0217", primary: "#e040fb", secondary: "#aa00ff", accent: "#00f0ff", text: "#f3e5f5" },
  { id: 39, name: "Helios Solar Sail", bg: "#170c01", primary: "#ff9100", secondary: "#ff6d00", accent: "#ffff00", text: "#fff3e0" },
  { id: 40, name: "Cryo-Containment Ring", bg: "#01121a", primary: "#80d8ff", secondary: "#0091ea", accent: "#69f0ae", text: "#e1f5fe" },
  { id: 41, name: "Cyber-Zen Sanctuary", bg: "#080210", primary: "#ea80fc", secondary: "#ba68c8", accent: "#64ffda", text: "#f3e5f5" },
  { id: 42, name: "Nanoscale Bio-Chip", bg: "#01170d", primary: "#00e676", secondary: "#00bfa5", accent: "#ffd600", text: "#e0f2f1" },
  { id: 43, name: "Dark Energy Singularity", bg: "#020208", primary: "#5c6bc0", secondary: "#3949ab", accent: "#ff1744", text: "#e8eaf6" },
  { id: 44, name: "Tesseract Hyperspace", bg: "#0a0117", primary: "#d500f9", secondary: "#651fff", accent: "#00e5ff", text: "#ede7f6" },
  { id: 45, name: "Quantum Singularity Apex", bg: "#000005", primary: "#00f0ff", secondary: "#ff007f", accent: "#ffd700", text: "#ffffff" }
];

// Helper to write file safely
function writeFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf-8');
}

// ----------------------------------------------------------------------------
// 1. GENERATE SVG THUMBNAILS FOR CATEGORY 3
// ----------------------------------------------------------------------------
console.log('Generating SVG thumbnails for Category 3: Puzzle...');

const THUMB_SPECS = [
  {
    id: 'laser-circuit-reflector',
    title: 'LASER CIRCUIT',
    subtitle: 'PRISM GRID',
    color1: '#00f0ff',
    color2: '#ff007f',
    iconPath: `<line x1="80" y1="200" x2="320" y2="200" stroke="#00f0ff" stroke-width="6" stroke-dasharray="10 5" filter="url(#glow)"/>
               <line x1="320" y1="200" x2="320" y2="380" stroke="#ff007f" stroke-width="6" filter="url(#glow)"/>
               <polygon points="300,180 340,220 320,240 280,200" fill="#39ff14" opacity="0.8"/>
               <circle cx="80" cy="200" r="16" fill="#00f0ff" filter="url(#glow)"/>
               <circle cx="320" cy="380" r="20" fill="none" stroke="#ff007f" stroke-width="6" filter="url(#glow)"/>`
  },
  {
    id: 'cyber-sudoku',
    title: 'CYBER SUDOKU',
    subtitle: 'NODE MATRIX 9X9',
    color1: '#00ffcc',
    color2: '#7c4dff',
    iconPath: `<rect x="100" y="120" width="280" height="280" rx="12" fill="none" stroke="#00ffcc" stroke-width="4" filter="url(#glow)"/>
               <line x1="193" y1="120" x2="193" y2="400" stroke="#7c4dff" stroke-width="3"/>
               <line x1="286" y1="120" x2="286" y2="400" stroke="#7c4dff" stroke-width="3"/>
               <line x1="100" y1="213" x2="380" y2="213" stroke="#7c4dff" stroke-width="3"/>
               <line x1="100" y1="306" x2="380" y2="306" stroke="#7c4dff" stroke-width="3"/>
               <text x="145" y="180" fill="#00ffcc" font-size="36" font-family="monospace" font-weight="bold" text-anchor="middle">7</text>
               <text x="240" y="270" fill="#ff007f" font-size="36" font-family="monospace" font-weight="bold" text-anchor="middle">3</text>
               <text x="335" y="360" fill="#ffd600" font-size="36" font-family="monospace" font-weight="bold" text-anchor="middle">9</text>`
  },
  {
    id: 'holographic-pipe-fusion',
    title: 'PIPE FUSION',
    subtitle: 'FLUX ROUTER',
    color1: '#ff3d00',
    color2: '#00e5ff',
    iconPath: `<path d="M 80 160 L 240 160 Q 280 160 280 200 L 280 320 Q 280 360 320 360 L 400 360" fill="none" stroke="#00e5ff" stroke-width="16" stroke-linecap="round" filter="url(#glow)"/>
               <path d="M 160 400 L 160 280 Q 160 240 200 240 L 400 240" fill="none" stroke="#ff3d00" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
               <circle cx="80" cy="160" r="14" fill="#00e5ff"/>
               <circle cx="400" cy="360" r="18" fill="#ffd600" filter="url(#glow)"/>`
  },
  {
    id: 'neuro-link-sokobot',
    title: 'SOKO-BOT',
    subtitle: 'MEMORY MOVER',
    color1: '#ffd700',
    color2: '#00e676',
    iconPath: `<rect x="180" y="200" width="80" height="80" rx="10" fill="#162238" stroke="#ffd700" stroke-width="5" filter="url(#glow)"/>
               <rect x="200" y="220" width="40" height="40" fill="#ffd700" opacity="0.8"/>
               <circle cx="120" cy="240" r="28" fill="#00e676" filter="url(#glow)"/>
               <circle cx="112" cy="232" r="6" fill="#050510"/>
               <circle cx="128" cy="232" r="6" fill="#050510"/>
               <rect x="300" y="200" width="80" height="80" rx="10" fill="none" stroke="#ff007f" stroke-width="4" stroke-dasharray="8 6"/>
               <circle cx="340" cy="240" r="12" fill="#ff007f"/>`
  },
  {
    id: 'quantum-nonogram',
    title: 'QUANTUM PICROSS',
    subtitle: 'NONOGRAM MATRIX',
    color1: '#b388ff',
    color2: '#00f0ff',
    iconPath: `<rect x="120" y="140" width="240" height="240" rx="8" fill="#090a18" stroke="#b388ff" stroke-width="4"/>
               <rect x="140" y="160" width="40" height="40" fill="#00f0ff" filter="url(#glow)"/>
               <rect x="190" y="160" width="40" height="40" fill="#00f0ff" filter="url(#glow)"/>
               <rect x="290" y="160" width="40" height="40" fill="#00f0ff" filter="url(#glow)"/>
               <rect x="140" y="210" width="40" height="40" fill="#00f0ff" filter="url(#glow)"/>
               <rect x="240" y="210" width="40" height="40" fill="#00f0ff" filter="url(#glow)"/>
               <rect x="290" y="210" width="40" height="40" fill="#00f0ff" filter="url(#glow)"/>
               <rect x="190" y="260" width="40" height="40" fill="#00f0ff" filter="url(#glow)"/>
               <rect x="240" y="260" width="40" height="40" fill="#00f0ff" filter="url(#glow)"/>
               <text x="240" y="350" fill="#ff007f" font-size="28" font-family="monospace" font-weight="bold" text-anchor="middle">■ ■ ■ ■</text>`
  },
  {
    id: 'hexa-tile-polarity',
    title: 'HEXA POLARITY',
    subtitle: 'CHAIN BRIDGE',
    color1: '#00e5ff',
    color2: '#ff1744',
    iconPath: `<polygon points="180,180 220,155 260,180 260,230 220,255 180,230" fill="#00e5ff" opacity="0.8" filter="url(#glow)"/>
               <polygon points="260,230 300,205 340,230 340,280 300,305 260,280" fill="#ff1744" opacity="0.8" filter="url(#glow)"/>
               <polygon points="180,280 220,255 260,280 260,330 220,355 180,330" fill="#39ff14" opacity="0.8" filter="url(#glow)"/>
               <circle cx="220" cy="205" r="8" fill="#ffffff"/>
               <circle cx="300" cy="255" r="8" fill="#ffffff"/>
               <circle cx="220" cy="305" r="8" fill="#ffffff"/>`
  },
  {
    id: 'cryptographic-word-cipher',
    title: 'WORD CIPHER',
    subtitle: 'INTELLIGENCE DECRYPTOR',
    color1: '#00e676',
    color2: '#ffd600',
    iconPath: `<rect x="100" y="160" width="280" height="180" rx="10" fill="#051208" stroke="#00e676" stroke-width="4" filter="url(#glow)"/>
               <text x="130" y="210" fill="#00e676" font-size="20" font-family="monospace">&gt; ENCRYPTED://</text>
               <text x="130" y="250" fill="#ffd600" font-size="26" font-family="monospace" letter-spacing="4">QXZ WLOV</text>
               <text x="130" y="290" fill="#00f0ff" font-size="26" font-family="monospace" letter-spacing="4">THE CODE</text>
               <rect x="270" y="268" width="16" height="24" fill="#00e676"/>`
  },
  {
    id: 'nanite-slide-puzzle',
    title: 'NANITE SLIDE',
    subtitle: '15-CORE REASSEMBLY',
    color1: '#ea80fc',
    color2: '#00f0ff',
    iconPath: `<rect x="120" y="140" width="70" height="70" rx="8" fill="#180e29" stroke="#ea80fc" stroke-width="3"/>
               <text x="155" y="185" fill="#ea80fc" font-size="28" font-family="monospace" font-weight="bold" text-anchor="middle">1</text>
               <rect x="200" y="140" width="70" height="70" rx="8" fill="#180e29" stroke="#ea80fc" stroke-width="3"/>
               <text x="235" y="185" fill="#ea80fc" font-size="28" font-family="monospace" font-weight="bold" text-anchor="middle">2</text>
               <rect x="280" y="140" width="70" height="70" rx="8" fill="#180e29" stroke="#00f0ff" stroke-width="3"/>
               <text x="315" y="185" fill="#00f0ff" font-size="28" font-family="monospace" font-weight="bold" text-anchor="middle">3</text>
               <rect x="120" y="220" width="70" height="70" rx="8" fill="#180e29" stroke="#00f0ff" stroke-width="3"/>
               <text x="155" y="265" fill="#00f0ff" font-size="28" font-family="monospace" font-weight="bold" text-anchor="middle">4</text>
               <rect x="280" y="220" width="70" height="70" rx="8" fill="none" stroke="#ff007f" stroke-width="2" stroke-dasharray="6 4"/>`
  }
];

THUMB_SPECS.forEach(item => {
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
  
  <!-- Cyber Grid Lines -->
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

  <!-- Neon Corner Accents -->
  <path d="M 10 30 L 10 10 L 30 10" fill="none" stroke="${item.color1}" stroke-width="3"/>
  <path d="M 450 10 L 470 10 L 470 30" fill="none" stroke="${item.color1}" stroke-width="3"/>
  <path d="M 470 450 L 470 470 L 450 470" fill="none" stroke="${item.color2}" stroke-width="3"/>
  <path d="M 30 470 L 10 470 L 10 450" fill="none" stroke="${item.color2}" stroke-width="3"/>
</svg>`;

  writeFile(path.join(thumbsDir, `${item.id}.svg`), svg);
  console.log(`  ✓ Generated thumbnail: assets/thumbnails/${item.id}.svg`);
});

console.log('\nAll Category 3 SVG thumbnails generated successfully!');
