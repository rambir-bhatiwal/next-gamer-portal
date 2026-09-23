/**
 * Next Games/Game — RPG SVG Thumbnail Generator
 * Generates 10 futuristic cyber RPG & adventure thumbnails for Category 10 (Games 91–100) — THE CENTURY FINALE!
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
    id: 'cyber-dungeon-crawler',
    title: 'Cyber Dungeon Crawler: Matrix',
    accent: '#00f0ff',
    secondary: '#ff007f',
    iconPath: `
      <!-- Isometric Dungeon Room Grid -->
      <polygon points="300,70 480,150 300,230 120,150" fill="#090d21" stroke="#00f0ff" stroke-width="2.5"/>
      <!-- Grid Floor Tiles -->
      <polygon points="300,100 420,150 300,200 180,150" fill="#11183c" stroke="#00f0ff" stroke-width="1" stroke-opacity="0.4"/>
      <polygon points="300,130 360,150 300,170 240,150" fill="#1b2454" stroke="#ff007f" stroke-width="1.5"/>
      <!-- Cyber Warrior Hero -->
      <circle cx="300" cy="145" r="14" fill="#00f0ff" filter="url(#glow)"/>
      <polygon points="295,145 305,145 300,128" fill="#ffffff"/>
      <!-- Security Daemon Enemy -->
      <rect x="375" y="130" width="22" height="22" rx="4" fill="#ff0055" filter="url(#glow)" stroke="#ffd600" stroke-width="1"/>
      <line x1="380" y1="137" x2="384" y2="137" stroke="#ffffff" stroke-width="2"/>
      <line x1="392" y1="137" x2="396" y2="137" stroke="#ffffff" stroke-width="2"/>
      <!-- Dungeon Pillars -->
      <rect x="150" y="90" width="16" height="50" rx="3" fill="#1e2240" stroke="#00f0ff" stroke-width="1.5"/>
      <rect x="434" y="90" width="16" height="50" rx="3" fill="#1e2240" stroke="#00f0ff" stroke-width="1.5"/>
      <!-- Stairs Down Portal -->
      <circle cx="210" cy="160" r="12" fill="none" stroke="#ffd600" stroke-width="2" stroke-dasharray="4,2"/>
    `
  },
  {
    id: 'turn-based-cyberpunk-arena',
    title: 'Neon Gladiator: Cyber Arena',
    accent: '#ff007f',
    secondary: '#ffd600',
    iconPath: `
      <!-- Arena Octagon Base -->
      <polygon points="300,75 440,110 470,210 370,270 230,270 130,210 160,110" fill="#130626" stroke="#ff007f" stroke-width="3"/>
      <!-- Center Hologram Ring -->
      <circle cx="300" cy="180" r="50" fill="none" stroke="#ffd600" stroke-width="2" stroke-dasharray="6,4"/>
      <!-- Player Cyborg Gladiator -->
      <g transform="translate(220, 150)">
        <circle cx="20" cy="15" r="12" fill="#00f0ff" filter="url(#glow)"/>
        <!-- Plasma Blade -->
        <line x1="28" y1="20" x2="55" y2="-5" stroke="#00f0ff" stroke-width="4" stroke-linecap="round" filter="url(#glow)"/>
        <!-- Energy Shield -->
        <ellipse cx="6" cy="22" rx="6" ry="16" fill="#ff007f" fill-opacity="0.8"/>
      </g>
      <!-- Boss Rival Mech -->
      <g transform="translate(340, 140)">
        <polygon points="20,0 40,25 0,25" fill="#ff0055" filter="url(#glow)"/>
        <rect x="5" y="25" width="30" height="25" rx="3" fill="#300517" stroke="#ffd600" stroke-width="2"/>
        <!-- Heavy Laser Lance -->
        <line x1="-15" y1="35" x2="10" y2="35" stroke="#ffd600" stroke-width="4" stroke-linecap="round" filter="url(#glow)"/>
      </g>
      <!-- Crowd Banners -->
      <rect x="180" y="70" width="70" height="15" fill="#ff007f" fill-opacity="0.6"/>
      <rect x="350" y="70" width="70" height="15" fill="#00f0ff" fill-opacity="0.6"/>
    `
  },
  {
    id: 'text-terminal-hacker-quest',
    title: 'Text Terminal Hacker Quest',
    accent: '#39ff14',
    secondary: '#00f0ff',
    iconPath: `
      <!-- CRT Terminal Monitor Shell -->
      <rect x="130" y="65" width="340" height="225" rx="14" fill="#09140b" stroke="#39ff14" stroke-width="3"/>
      <!-- Monitor Stand -->
      <polygon points="260,290 340,290 360,308 240,308" fill="#132616" stroke="#39ff14" stroke-width="1.5"/>
      <!-- CRT Screen Bezel -->
      <rect x="150" y="80" width="300" height="185" rx="8" fill="#040b05" stroke="#1d4022" stroke-width="2"/>
      <!-- Terminal Prompt Lines -->
      <text x="170" y="110" font-family="monospace" font-size="13" font-weight="700" fill="#39ff14">&gt; CONNECT corporate_intranet</text>
      <text x="170" y="132" font-family="monospace" font-size="11" fill="#00f0ff">[SEC_LEVEL 4]: BYPASSING FIREWALL...</text>
      <text x="170" y="152" font-family="monospace" font-size="11" fill="#39ff14">[NODE_45]: ACCESS GRANTED</text>
      <text x="170" y="176" font-family="monospace" font-size="11" fill="#ff007f">&gt; EXECUTING DECRYPT_CIPHER.SH</text>
      <!-- Memory Hex Dump -->
      <text x="170" y="200" font-family="monospace" font-size="10" fill="#39ff14" opacity="0.65">0x7F4A 0x88BC 0x90A1 0xFEED</text>
      <text x="170" y="218" font-family="monospace" font-size="10" fill="#39ff14" opacity="0.65">0x00FF 0xCAFE 0xBEEF 0x4500</text>
      <!-- Blinking Cursor -->
      <rect x="170" y="234" width="10" height="15" fill="#39ff14" filter="url(#glow)"/>
      <text x="190" y="246" font-family="monospace" font-size="12" font-weight="700" fill="#39ff14">_ READY</text>
    `
  },
  {
    id: 'space-mercenary-outpost',
    title: 'Space Mercenary: Star Outpost',
    accent: '#ff8800',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Deep Space Starfield -->
      <circle cx="160" cy="100" r="2" fill="#ffffff"/>
      <circle cx="440" cy="90" r="1.5" fill="#ffd600"/>
      <circle cx="210" cy="240" r="2" fill="#00f0ff"/>
      <circle cx="490" cy="220" r="1" fill="#ffffff"/>
      <!-- Giant Orbital Dock Station -->
      <ellipse cx="400" cy="170" rx="90" ry="35" fill="#111828" stroke="#ff8800" stroke-width="2.5"/>
      <line x1="400" y1="110" x2="400" y2="230" stroke="#00f0ff" stroke-width="3" filter="url(#glow)"/>
      <circle cx="400" cy="170" r="24" fill="#1b2840" stroke="#ffd600" stroke-width="2"/>
      <rect x="330" y="162" width="140" height="16" rx="4" fill="#ff8800" fill-opacity="0.3"/>
      <!-- Player Mercenary Gunship -->
      <g transform="translate(180, 160) rotate(-25)">
        <polygon points="40,0 -15,-16 -5,0 -15,16" fill="#00f0ff" stroke="#ffffff" stroke-width="1.5" filter="url(#glow)"/>
        <!-- Thruster Plume -->
        <polygon points="-5,0 -30,-6 -20,0 -30,6" fill="#ff8800" filter="url(#glow)"/>
        <!-- Photon Lasers -->
        <line x1="40" y1="-8" x2="110" y2="-8" stroke="#ffd600" stroke-width="2.5" filter="url(#glow)"/>
        <line x1="40" y1="8" x2="110" y2="8" stroke="#ffd600" stroke-width="2.5" filter="url(#glow)"/>
      </g>
    `
  },
  {
    id: 'neon-wizard',
    title: 'Neon Wizard: Spell Grimoire',
    accent: '#d500f9',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Glowing Arcane Circle Base -->
      <circle cx="300" cy="175" r="95" fill="none" stroke="#d500f9" stroke-width="2.5" filter="url(#glow)"/>
      <circle cx="300" cy="175" r="70" fill="none" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="8,5"/>
      <!-- Inner Magic Runes Star -->
      <polygon points="300,90 355,235 210,145 390,145 245,235" fill="none" stroke="#ffd600" stroke-width="2" filter="url(#glow)"/>
      <!-- Glowing Drawn Arcane Rune -->
      <path d="M260,150 L300,110 L340,150 L300,210 Z" fill="#d500f9" fill-opacity="0.4" stroke="#ffffff" stroke-width="3" filter="url(#glow)"/>
      <circle cx="300" cy="160" r="10" fill="#00f0ff" filter="url(#glow)"/>
      <!-- Grimoire Book Base -->
      <polygon points="230,265 300,250 370,265 300,285" fill="#1c0936" stroke="#d500f9" stroke-width="2"/>
      <line x1="300" y1="250" x2="300" y2="285" stroke="#ffd600" stroke-width="2"/>
    `
  },
  {
    id: 'cyber-pet-simulator',
    title: 'Cyber Pet: Virtual Tamagotchi',
    accent: '#00e5ff',
    secondary: '#ff4081',
    iconPath: `
      <!-- Tamagotchi Oval Device Body -->
      <ellipse cx="300" cy="175" rx="140" ry="120" fill="#140d2b" stroke="#ff4081" stroke-width="4"/>
      <!-- Keyring Loop -->
      <circle cx="300" cy="45" r="14" fill="none" stroke="#ffd600" stroke-width="3"/>
      <!-- LCD Screen Inset -->
      <rect x="200" y="95" width="200" height="135" rx="12" fill="#071b1e" stroke="#00e5ff" stroke-width="3"/>
      <!-- Pixel Nanobot Companion -->
      <g transform="translate(265, 125)">
        <!-- Pet Body -->
        <rect x="15" y="10" width="40" height="35" rx="8" fill="#00e5ff" filter="url(#glow)"/>
        <!-- Eyes -->
        <circle cx="27" cy="24" r="4" fill="#000000"/>
        <circle cx="43" cy="24" r="4" fill="#000000"/>
        <circle cx="28" cy="23" r="1.5" fill="#ffffff"/>
        <circle cx="44" cy="23" r="1.5" fill="#ffffff"/>
        <!-- Antenna -->
        <line x1="35" y1="10" x2="35" y2="0" stroke="#ffd600" stroke-width="3"/>
        <circle cx="35" cy="0" r="3.5" fill="#ff4081"/>
        <!-- Heart Emote -->
        <path d="M58,5 C55,-2 46,-2 46,6 C46,14 58,22 58,22 C58,22 70,14 70,6 C70,-2 61,-2 58,5 Z" fill="#ff4081" filter="url(#glow)"/>
      </g>
      <!-- 3 Navigation Buttons -->
      <circle cx="240" cy="255" r="12" fill="#ffd600" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="300" cy="262" r="13" fill="#ff4081" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="360" cy="255" r="12" fill="#00e5ff" stroke="#ffffff" stroke-width="1.5"/>
    `
  },
  {
    id: 'post-apocalyptic-barterer',
    title: 'Wasteland Barterer: Caravan',
    accent: '#ffb300',
    secondary: '#ff3d00',
    iconPath: `
      <!-- Desert Wasteland Dunes Silhouette -->
      <path d="M80,240 Q180,180 300,220 T520,200 L520,285 L80,285 Z" fill="#261706" stroke="#ffb300" stroke-width="1.5"/>
      <!-- Radioactive Sunset Sun -->
      <circle cx="300" cy="140" r="50" fill="#ff3d00" fill-opacity="0.8" filter="url(#glow)"/>
      <line x1="220" y1="140" x2="380" y2="140" stroke="#ffb300" stroke-width="2"/>
      <line x1="300" y1="60" x2="300" y2="220" stroke="#ffb300" stroke-width="2"/>
      <!-- Armored Scrap Caravan Wagon -->
      <g transform="translate(210, 180)">
        <rect x="0" y="0" width="110" height="45" rx="5" fill="#3d2c14" stroke="#ffb300" stroke-width="2"/>
        <rect x="110" y="10" width="55" height="35" rx="4" fill="#241a0c" stroke="#ff3d00" stroke-width="2"/>
        <!-- Spiked Wheels -->
        <circle cx="30" cy="45" r="16" fill="#140f07" stroke="#ffb300" stroke-width="3"/>
        <circle cx="85" cy="45" r="16" fill="#140f07" stroke="#ffb300" stroke-width="3"/>
        <circle cx="140" cy="45" r="16" fill="#140f07" stroke="#ff3d00" stroke-width="3"/>
        <!-- Cargo Barrels & Crates -->
        <rect x="15" y="-14" width="22" height="15" rx="2" fill="#ffb300"/>
        <rect x="42" y="-18" width="28" height="19" rx="2" fill="#ff3d00"/>
        <circle cx="88" cy="-8" r="9" fill="#00e5ff" filter="url(#glow)"/>
      </g>
    `
  },
  {
    id: 'rogue-drone-swarm',
    title: 'Rogue Drone Swarm: Evolve',
    accent: '#00e676',
    secondary: '#00e5ff',
    iconPath: `
      <!-- Hexagonal Proving Ground Grid -->
      <polygon points="300,80 390,130 390,230 300,280 210,230 210,130" fill="#081c10" stroke="#00e676" stroke-width="2"/>
      <!-- Core Drone Unit -->
      <circle cx="300" cy="180" r="28" fill="#103620" stroke="#00e676" stroke-width="3" filter="url(#glow)"/>
      <circle cx="300" cy="180" r="12" fill="#00e5ff" filter="url(#glow)"/>
      <!-- 4 Attached Modular Upgrade Arms -->
      <!-- Top Gatling Cannons -->
      <rect x="294" y="115" width="12" height="36" rx="2" fill="#00e676"/>
      <line x1="297" y1="115" x2="297" y2="90" stroke="#ffd600" stroke-width="3" filter="url(#glow)"/>
      <line x1="303" y1="115" x2="303" y2="90" stroke="#ffd600" stroke-width="3" filter="url(#glow)"/>
      <!-- Left Shield Wing -->
      <polygon points="265,160 215,180 265,200" fill="#00e5ff" fill-opacity="0.8"/>
      <!-- Right Plasma Launcher -->
      <polygon points="335,160 385,180 335,200" fill="#ff007f" fill-opacity="0.8"/>
      <!-- Bottom High-Output Thruster -->
      <polygon points="288,210 312,210 300,245" fill="#ffd600" filter="url(#glow)"/>
      <!-- Swarm Mini Drones -->
      <circle cx="170" cy="120" r="8" fill="#00e676" filter="url(#glow)"/>
      <circle cx="430" cy="120" r="8" fill="#00e5ff" filter="url(#glow)"/>
      <circle cx="450" cy="230" r="7" fill="#ff007f" filter="url(#glow)"/>
    `
  },
  {
    id: 'neon-samurai',
    title: 'Neon Samurai: Bushido Odyssey',
    accent: '#ff0055',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Rain Streak Backdrop -->
      <line x1="120" y1="70" x2="100" y2="150" stroke="#00f0ff" stroke-width="1" stroke-opacity="0.4"/>
      <line x1="220" y1="60" x2="200" y2="140" stroke="#00f0ff" stroke-width="1" stroke-opacity="0.4"/>
      <line x1="480" y1="75" x2="460" y2="155" stroke="#00f0ff" stroke-width="1" stroke-opacity="0.4"/>
      <line x1="380" y1="55" x2="360" y2="135" stroke="#00f0ff" stroke-width="1" stroke-opacity="0.4"/>
      <!-- Giant Crimson Moon -->
      <circle cx="300" cy="155" r="75" fill="#ff0055" fill-opacity="0.85" filter="url(#glow)"/>
      <!-- Rooftop Torii Gate & Pagoda Silhouette -->
      <polygon points="300,210 490,265 110,265" fill="#12020a" stroke="#ff0055" stroke-width="2"/>
      <!-- Neon Katana Blade Slash Arc -->
      <path d="M170,225 Q300,90 430,135" fill="none" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M170,225 Q300,90 430,135" fill="none" stroke="#00f0ff" stroke-width="2" stroke-linecap="round"/>
      <!-- Ronin Silhouette Ready Stance -->
      <circle cx="240" cy="180" r="10" fill="#ffffff"/>
      <polygon points="230,187 250,187 255,225 225,225" fill="#ffffff"/>
      <!-- Scabbard & Sheath Spark -->
      <circle cx="260" cy="205" r="4" fill="#ffd600" filter="url(#glow)"/>
    `
  },
  {
    id: 'quantum-chrono-rpg',
    title: 'Quantum Chrono RPG: Paradox',
    accent: '#ffd600',
    secondary: '#7c4dff',
    iconPath: `
      <!-- Grand Hourglass / Timeline Warp Vortex -->
      <polygon points="210,80 390,80 210,270 390,270" fill="none" stroke="#ffd600" stroke-width="3" filter="url(#glow)"/>
      <!-- Center Chrono Singularity Core -->
      <circle cx="300" cy="175" r="38" fill="#12052b" stroke="#7c4dff" stroke-width="3"/>
      <circle cx="300" cy="175" r="16" fill="#00f0ff" filter="url(#glow)"/>
      <!-- Rotating Clockwork Gear Rings -->
      <circle cx="300" cy="175" r="85" fill="none" stroke="#7c4dff" stroke-width="1.5" stroke-dasharray="12,6"/>
      <circle cx="300" cy="175" r="110" fill="none" stroke="#00f0ff" stroke-width="1" stroke-dasharray="6,4" stroke-opacity="0.6"/>
      <!-- ATB Gauge Bars (3 Party Members) -->
      <rect x="180" y="295" width="65" height="8" rx="2" fill="#00e5ff" filter="url(#glow)"/>
      <rect x="267" y="295" width="65" height="8" rx="2" fill="#ffd600" filter="url(#glow)"/>
      <rect x="355" y="295" width="65" height="8" rx="2" fill="#ff007f" filter="url(#glow)"/>
      <!-- 100 Games Milestone Banner Star -->
      <polygon points="300,55 306,70 322,70 309,80 314,95 300,85 286,95 291,80 278,70 294,70" fill="#ffd600" filter="url(#glow)"/>
    `
  }
];

function generateThumbnail(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="600" height="380">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#140824"/>
      <stop offset="60%" stop-color="#0a0414"/>
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
  <text x="32" y="44" font-family="'Segoe UI', monospace" font-size="12" font-weight="900" fill="${item.accent}" letter-spacing="3" opacity="0.85">CYBER RPG &amp; ADVENTURES 45-THEME</text>

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

console.log('All 10 Category 10 RPG thumbnails generated successfully.');
