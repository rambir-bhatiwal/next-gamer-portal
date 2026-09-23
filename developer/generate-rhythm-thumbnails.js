/**
 * Next Games/Game — Rhythm SVG Thumbnail Generator
 * Generates 10 futuristic cyber rhythm & beat thumbnails for Category 9 (Games 81–90)
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
    id: 'beat-highway',
    title: 'Beat Highway: Synthwave Tap',
    accent: '#00f0ff',
    secondary: '#ff007f',
    iconPath: `
      <!-- Perspective 4-Lane Highway -->
      <polygon points="260,80 340,80 500,280 100,280" fill="#0c0724" stroke="#ff007f" stroke-width="2"/>
      <!-- Lane Dividers -->
      <line x1="280" y1="80" x2="200" y2="280" stroke="#00f0ff" stroke-width="2" stroke-dasharray="8,6"/>
      <line x1="300" y1="80" x2="300" y2="280" stroke="#ffd600" stroke-width="2"/>
      <line x1="320" y1="80" x2="400" y2="280" stroke="#00f0ff" stroke-width="2" stroke-dasharray="8,6"/>
      <!-- Hit Zone Line -->
      <line x1="120" y1="250" x2="480" y2="250" stroke="#39ff14" stroke-width="4" filter="url(#glow)"/>
      <!-- Hit Targets -->
      <circle cx="165" cy="250" r="14" fill="#00f0ff" fill-opacity="0.8"/>
      <circle cx="255" cy="250" r="14" fill="#ff007f" fill-opacity="0.8"/>
      <circle cx="345" cy="250" r="14" fill="#ffd600" fill-opacity="0.8"/>
      <circle cx="435" cy="250" r="14" fill="#39ff14" fill-opacity="0.8"/>
      <!-- Descending Notes -->
      <polygon points="275,130 295,130 290,145 270,145" fill="#ff007f" filter="url(#glow)"/>
      <polygon points="310,160 340,160 335,178 305,178" fill="#ffd600" filter="url(#glow)"/>
      <polygon points="200,200 240,200 235,222 195,222" fill="#00f0ff" filter="url(#glow)"/>
    `
  },
  {
    id: 'neon-drum-machine',
    title: 'Neon Drum Machine: Rhythm Hero',
    accent: '#ff8800',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Drum Machine Housing -->
      <rect x="130" y="70" width="340" height="210" rx="12" fill="#0f111a" stroke="#ff8800" stroke-width="3"/>
      <!-- Display Screen / Waveform -->
      <rect x="150" y="85" width="300" height="45" rx="6" fill="#06080e" stroke="#00f0ff" stroke-width="1.5"/>
      <path d="M160,107 Q190,88 220,107 T280,107 T340,107 T400,107 T430,107" fill="none" stroke="#39ff14" stroke-width="2.5" filter="url(#glow)"/>
      <!-- 4x4 Silicone Pads Grid -->
      <g transform="translate(155, 145)">
        <rect x="0" y="0" width="60" height="30" rx="4" fill="#ff8800" filter="url(#glow)"/>
        <rect x="75" y="0" width="60" height="30" rx="4" fill="#1b2038" stroke="#ff8800" stroke-width="1"/>
        <rect x="150" y="0" width="60" height="30" rx="4" fill="#00f0ff" filter="url(#glow)"/>
        <rect x="225" y="0" width="60" height="30" rx="4" fill="#1b2038" stroke="#00f0ff" stroke-width="1"/>

        <rect x="0" y="40" width="60" height="30" rx="4" fill="#1b2038" stroke="#ff8800" stroke-width="1"/>
        <rect x="75" y="40" width="60" height="30" rx="4" fill="#ff007f" filter="url(#glow)"/>
        <rect x="150" y="40" width="60" height="30" rx="4" fill="#1b2038" stroke="#ff007f" stroke-width="1"/>
        <rect x="225" y="40" width="60" height="30" rx="4" fill="#39ff14" filter="url(#glow)"/>

        <rect x="0" y="80" width="60" height="30" rx="4" fill="#ffd600" filter="url(#glow)"/>
        <rect x="75" y="80" width="60" height="30" rx="4" fill="#1b2038" stroke="#ffd600" stroke-width="1"/>
        <rect x="150" y="80" width="60" height="30" rx="4" fill="#ff8800" filter="url(#glow)"/>
        <rect x="225" y="80" width="60" height="30" rx="4" fill="#1b2038" stroke="#ff8800" stroke-width="1"/>
      </g>
    `
  },
  {
    id: 'frequency-slicer',
    title: 'Frequency Slicer: Cyber Saber',
    accent: '#00f0ff',
    secondary: '#ff0055',
    iconPath: `
      <!-- Perspective Arena Horizon -->
      <line x1="80" y1="260" x2="520" y2="260" stroke="#331144" stroke-width="3"/>
      <!-- Sliced Cube (Left - Cyan) -->
      <g transform="translate(180, 110)">
        <polygon points="0,0 40,-15 70,0 30,15" fill="#00f0ff" opacity="0.9"/>
        <polygon points="0,0 0,40 30,55 30,15" fill="#00a0cc"/>
        <polygon points="70,0 70,40 30,55 30,15" fill="#007799"/>
        <!-- Arrow direction -->
        <path d="M20,15 L40,15 L35,5" stroke="#ffffff" stroke-width="3" fill="none"/>
      </g>
      <!-- Sliced Cube (Right - Magenta) -->
      <g transform="translate(350, 130)">
        <polygon points="0,0 40,-15 70,0 30,15" fill="#ff0055" opacity="0.9"/>
        <polygon points="0,0 0,40 30,55 30,15" fill="#cc0044"/>
        <polygon points="70,0 70,40 30,55 30,15" fill="#990033"/>
        <path d="M35,35 L35,10 L45,18" stroke="#ffffff" stroke-width="3" fill="none"/>
      </g>
      <!-- Left Cyber Saber Blade (Cyan) -->
      <line x1="100" y1="280" x2="260" y2="90" stroke="#00f0ff" stroke-width="7" stroke-linecap="round" filter="url(#glow)"/>
      <line x1="100" y1="280" x2="260" y2="90" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Right Cyber Saber Blade (Red/Magenta) -->
      <line x1="500" y1="280" x2="340" y2="80" stroke="#ff0055" stroke-width="7" stroke-linecap="round" filter="url(#glow)"/>
      <line x1="500" y1="280" x2="340" y2="80" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Slash Energy Burst -->
      <circle cx="280" cy="140" r="16" fill="#ffffaa" filter="url(#glow)"/>
    `
  },
  {
    id: 'soundwave-surfer',
    title: 'Soundwave Surfer: Amplitude Rider',
    accent: '#7b2cbf',
    secondary: '#00f0ff',
    iconPath: `
      <!-- FFT Equalizer Spectrum Background -->
      <g fill="#7b2cbf" opacity="0.25">
        <rect x="100" y="160" width="14" height="110"/>
        <rect x="130" y="130" width="14" height="140"/>
        <rect x="160" y="90" width="14" height="180"/>
        <rect x="190" y="140" width="14" height="130"/>
        <rect x="220" y="110" width="14" height="160"/>
        <rect x="250" y="70" width="14" height="200"/>
        <rect x="280" y="120" width="14" height="150"/>
        <rect x="310" y="150" width="14" height="120"/>
        <rect x="340" y="80" width="14" height="190"/>
        <rect x="370" y="100" width="14" height="170"/>
        <rect x="400" y="130" width="14" height="140"/>
        <rect x="430" y="90" width="14" height="180"/>
        <rect x="460" y="150" width="14" height="120"/>
      </g>
      <!-- Undulating Neon Audio Wave Ribbon -->
      <path d="M80,220 C140,260 180,120 250,140 C320,160 360,260 420,170 C460,110 500,190 530,160" fill="none" stroke="#00f0ff" stroke-width="6" filter="url(#glow)"/>
      <path d="M80,220 C140,260 180,120 250,140 C320,160 360,260 420,170 C460,110 500,190 530,160" fill="none" stroke="#ffffff" stroke-width="2"/>
      <!-- Futuristic Surfer Hoverboard Rider -->
      <g transform="translate(240, 110) rotate(-15)">
        <ellipse cx="25" cy="20" rx="30" ry="7" fill="#ffd600" filter="url(#glow)"/>
        <!-- Surfer Figure Silhouette -->
        <circle cx="20" cy="-5" r="7" fill="#ffffff"/>
        <path d="M20,2 L25,18 M15,10 L30,5 M20,2 L10,18" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      </g>
      <!-- Floating Collectible Rhythm Rings -->
      <circle cx="420" cy="140" r="12" fill="none" stroke="#ffd600" stroke-width="3" filter="url(#glow)"/>
      <circle cx="340" cy="190" r="10" fill="none" stroke="#ff007f" stroke-width="3" filter="url(#glow)"/>
    `
  },
  {
    id: 'pulse-conductor',
    title: 'Pulse Conductor: Orchestral Duel',
    accent: '#e0aaff',
    secondary: '#ff007f',
    iconPath: `
      <!-- Metronome Body -->
      <polygon points="300,70 240,260 360,260" fill="#100a26" stroke="#e0aaff" stroke-width="3"/>
      <!-- Metronome Face Plate -->
      <polygon points="300,95 255,250 345,250" fill="#1c123d"/>
      <line x1="300" y1="95" x2="300" y2="250" stroke="#7b2cbf" stroke-width="2"/>
      <!-- Swinging Pendulum Wand -->
      <line x1="300" y1="240" x2="260" y2="90" stroke="#ffd600" stroke-width="4" filter="url(#glow)"/>
      <rect x="250" y="125" width="20" height="15" rx="3" fill="#ff007f" filter="url(#glow)"/>
      <!-- Musical Arc Waves (Conductor Harmonics) -->
      <path d="M160,160 Q220,100 290,120" fill="none" stroke="#00f0ff" stroke-width="3" stroke-dasharray="4,4"/>
      <path d="M440,160 Q380,100 310,120" fill="none" stroke="#ff007f" stroke-width="3" stroke-dasharray="4,4"/>
      <!-- Musical Note Glyphs -->
      <text x="140" y="140" font-family="sans-serif" font-size="34" fill="#00f0ff" filter="url(#glow)">♪</text>
      <text x="440" y="130" font-family="sans-serif" font-size="38" fill="#ff007f" filter="url(#glow)">♫</text>
      <!-- Orchestral Spotlight Radial -->
      <circle cx="300" cy="180" r="75" fill="none" stroke="#e0aaff" stroke-width="1.5" stroke-opacity="0.3"/>
    `
  },
  {
    id: 'tempo-runner',
    title: 'Tempo Runner: Platform Sprint',
    accent: '#39ff14',
    secondary: '#00f0ff',
    iconPath: `
      <!-- City Equalizer Skyline -->
      <g fill="#0c1724" stroke="#00f0ff" stroke-width="1" stroke-opacity="0.4">
        <rect x="90" y="120" width="35" height="160"/>
        <rect x="135" y="90" width="40" height="190"/>
        <rect x="185" y="140" width="30" height="140"/>
        <rect x="380" y="100" width="35" height="180"/>
        <rect x="425" y="70" width="45" height="210"/>
        <rect x="480" y="130" width="35" height="150"/>
      </g>
      <!-- Pulsing Beat Stepping Platforms -->
      <rect x="100" y="240" width="90" height="16" rx="4" fill="#00f0ff" filter="url(#glow)"/>
      <rect x="220" y="210" width="90" height="16" rx="4" fill="#39ff14" filter="url(#glow)"/>
      <rect x="340" y="180" width="90" height="16" rx="4" fill="#ff007f" filter="url(#glow)"/>
      <rect x="450" y="230" width="80" height="16" rx="4" fill="#ffd600" filter="url(#glow)"/>
      <!-- Dynamic Beat Sine Waves -->
      <path d="M90,260 Q220,290 350,250 T530,270" fill="none" stroke="#39ff14" stroke-width="2" stroke-opacity="0.5"/>
      <!-- Running Cyber Figure -->
      <g transform="translate(260, 160)">
        <circle cx="15" cy="5" r="7" fill="#ffffff"/>
        <!-- Limbs dynamically sprinting -->
        <path d="M15,12 L15,28 L30,42 M15,28 L0,40" stroke="#39ff14" stroke-width="4" stroke-linecap="round"/>
        <path d="M15,18 L32,15 M15,18 L-2,24" stroke="#00f0ff" stroke-width="4" stroke-linecap="round"/>
        <!-- Motion lines -->
        <line x1="-15" y1="15" x2="-5" y2="15" stroke="#ffffff" stroke-width="2"/>
        <line x1="-25" y1="25" x2="-8" y2="25" stroke="#ffffff" stroke-width="2"/>
      </g>
    `
  },
  {
    id: 'neon-dance-floor',
    title: 'Neon Dance Floor: Grid DDR',
    accent: '#ff007f',
    secondary: '#ffd600',
    iconPath: `
      <!-- Isometric 3x3 Dance Floor Tiles -->
      <g transform="translate(300, 185)">
        <!-- Center Tile -->
        <polygon points="0,-20 40,0 0,20 -40,0" fill="#ff007f" stroke="#ffffff" stroke-width="2" filter="url(#glow)"/>
        <!-- Top Tile -->
        <polygon points="0,-60 40,-40 0,-20 -40,-40" fill="#00f0ff" stroke="#00f0ff" stroke-width="2"/>
        <text x="0" y="-36" font-family="sans-serif" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">▲</text>
        <!-- Bottom Tile -->
        <polygon points="0,20 40,40 0,60 -40,40" fill="#ffd600" stroke="#ffd600" stroke-width="2"/>
        <text x="0" y="44" font-family="sans-serif" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">▼</text>
        <!-- Left Tile -->
        <polygon points="-40,-40 0,-20 -40,0 -80,-20" fill="#39ff14" stroke="#39ff14" stroke-width="2"/>
        <text x="-40" y="-16" font-family="sans-serif" font-size="16" fill="#000000" text-anchor="middle" font-weight="bold">◀</text>
        <!-- Right Tile -->
        <polygon points="40,-40 80,-20 40,0 0,-20" fill="#ff8800" stroke="#ff8800" stroke-width="2"/>
        <text x="40" y="-16" font-family="sans-serif" font-size="16" fill="#ffffff" text-anchor="middle" font-weight="bold">▶</text>
        <!-- Corner Tiles -->
        <polygon points="-80,-20 -40,0 -80,20 -120,0" fill="#140d2b" stroke="#7b2cbf" stroke-width="1"/>
        <polygon points="40,0 80,20 40,40 0,20" fill="#140d2b" stroke="#7b2cbf" stroke-width="1"/>
        <polygon points="-40,0 0,20 -40,40 -80,20" fill="#140d2b" stroke="#7b2cbf" stroke-width="1"/>
        <polygon points="80,-20 120,0 80,20 40,0" fill="#140d2b" stroke="#7b2cbf" stroke-width="1"/>
      </g>
      <!-- Disco Light Beams -->
      <polygon points="300,40 180,240 210,240" fill="#ff007f" opacity="0.25"/>
      <polygon points="300,40 390,240 420,240" fill="#00f0ff" opacity="0.25"/>
    `
  },
  {
    id: 'bassline-defender',
    title: 'Bassline Defender: Turret Sync',
    accent: '#00f0ff',
    secondary: '#ff3300',
    iconPath: `
      <!-- Center Sonic Cannon Turret -->
      <circle cx="300" cy="180" r="32" fill="#12182b" stroke="#00f0ff" stroke-width="3"/>
      <circle cx="300" cy="180" r="18" fill="#00f0ff" filter="url(#glow)"/>
      <line x1="300" y1="180" x2="360" y2="120" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
      <!-- Concentric Bass Shockwave Rings -->
      <circle cx="300" cy="180" r="60" fill="none" stroke="#00f0ff" stroke-width="3" stroke-dasharray="10,8" opacity="0.8" filter="url(#glow)"/>
      <circle cx="300" cy="180" r="100" fill="none" stroke="#ff007f" stroke-width="2.5" stroke-dasharray="14,10" opacity="0.6"/>
      <circle cx="300" cy="180" r="140" fill="none" stroke="#ffd600" stroke-width="2" stroke-dasharray="18,12" opacity="0.4"/>
      <!-- Incoming Alien Sound Drones -->
      <g transform="translate(420, 90)">
        <polygon points="0,-12 12,12 -12,12" fill="#ff3300" stroke="#ffffff" stroke-width="1.5" filter="url(#glow)"/>
      </g>
      <g transform="translate(170, 100)">
        <polygon points="0,-10 10,10 -10,10" fill="#ff3300" stroke="#ffffff" stroke-width="1.5"/>
      </g>
      <g transform="translate(410, 240)">
        <polygon points="0,-12 12,12 -12,12" fill="#ff3300" stroke="#ffffff" stroke-width="1.5"/>
      </g>
      <!-- Sonic Laser Salvo -->
      <line x1="360" y1="120" x2="415" y2="95" stroke="#00f0ff" stroke-width="4" filter="url(#glow)"/>
    `
  },
  {
    id: 'chiptune-piano-tiles',
    title: 'Chiptune Piano Tiles: Virtuoso',
    accent: '#00f0ff',
    secondary: '#8a2be2',
    iconPath: `
      <!-- 4 Piano Key Lanes -->
      <g stroke="#1a2038" stroke-width="2">
        <rect x="180" y="60" width="60" height="230" fill="#0a0e1c"/>
        <rect x="240" y="60" width="60" height="230" fill="#0d1224"/>
        <rect x="300" y="60" width="60" height="230" fill="#0a0e1c"/>
        <rect x="360" y="60" width="60" height="230" fill="#0d1224"/>
      </g>
      <!-- Hit Line at Bottom -->
      <line x1="180" y1="250" x2="420" y2="250" stroke="#ff007f" stroke-width="3" filter="url(#glow)"/>
      <!-- Active Falling Neon Tiles -->
      <rect x="182" y="80" width="56" height="70" rx="4" fill="#00f0ff" filter="url(#glow)"/>
      <rect x="302" y="120" width="56" height="70" rx="4" fill="#8a2be2" filter="url(#glow)"/>
      <rect x="242" y="190" width="56" height="60" rx="4" fill="#39ff14" filter="url(#glow)"/>
      <rect x="362" y="70" width="56" height="65" rx="4" fill="#ffd600" filter="url(#glow)"/>
      <!-- Tap Sparks -->
      <circle cx="270" cy="250" r="15" fill="none" stroke="#39ff14" stroke-width="3" filter="url(#glow)"/>
      <text x="210" y="275" font-family="monospace" font-size="12" fill="#888" text-anchor="middle">D</text>
      <text x="270" y="275" font-family="monospace" font-size="12" fill="#fff" text-anchor="middle">F</text>
      <text x="330" y="275" font-family="monospace" font-size="12" fill="#888" text-anchor="middle">J</text>
      <text x="390" y="275" font-family="monospace" font-size="12" fill="#888" text-anchor="middle">K</text>
    `
  },
  {
    id: 'rhythm-revolver',
    title: 'Rhythm Revolver: Radial Catcher',
    accent: '#ff007f',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Radar Sweep Background Grid -->
      <circle cx="300" cy="180" r="110" fill="none" stroke="#1f1838" stroke-width="1.5"/>
      <circle cx="300" cy="180" r="70" fill="none" stroke="#2a1f4d" stroke-width="1.5"/>
      <circle cx="300" cy="180" r="30" fill="#0c081f" stroke="#00f0ff" stroke-width="2"/>
      <!-- Radial Axis Lines -->
      <line x1="180" y1="180" x2="420" y2="180" stroke="#2a1f4d" stroke-width="1"/>
      <line x1="300" y1="60" x2="300" y2="300" stroke="#2a1f4d" stroke-width="1"/>
      <!-- Rotating Shield Arc (Catching zone) -->
      <path d="M260,110 A70,70 0 0,1 350,130" fill="none" stroke="#00f0ff" stroke-width="8" stroke-linecap="round" filter="url(#glow)"/>
      <path d="M260,110 A70,70 0 0,1 350,130" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <!-- Converging Rhythm Sparks from 360 degrees -->
      <circle cx="330" cy="122" r="8" fill="#ffd600" filter="url(#glow)"/>
      <line x1="355" y1="90" x2="330" y2="122" stroke="#ffd600" stroke-width="2"/>

      <circle cx="210" cy="220" r="7" fill="#ff007f" filter="url(#glow)"/>
      <line x1="180" y1="240" x2="210" y2="220" stroke="#ff007f" stroke-width="2"/>

      <circle cx="380" cy="230" r="7" fill="#39ff14" filter="url(#glow)"/>
      <line x1="410" y1="250" x2="380" y2="230" stroke="#39ff14" stroke-width="2"/>
      <!-- Center Core Pulsing Dot -->
      <circle cx="300" cy="180" r="10" fill="#ff007f" filter="url(#glow)"/>
    `
  }
];

function generateThumbnail(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="600" height="380">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180a2b"/>
      <stop offset="60%" stop-color="#0a0517"/>
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
  <text x="32" y="44" font-family="'Segoe UI', monospace" font-size="12" font-weight="900" fill="${item.accent}" letter-spacing="3" opacity="0.85">CYBER RHYTHM &amp; BEAT 45-TRACK SYNTH</text>

  <!-- Graphic Icon Payload -->
  <g>
    ${item.iconPath}
  </g>

  <!-- Game Title Bottom Bar -->
  <rect x="24" y="318" width="552" height="42" rx="8" fill="#060214" fill-opacity="0.9" stroke="${item.accent}" stroke-width="1" stroke-opacity="0.5"/>
  <text x="42" y="345" font-family="'Segoe UI', system-ui, sans-serif" font-size="17" font-weight="800" fill="#ffffff" letter-spacing="1">${item.title.toUpperCase()}</text>
  <text x="550" y="344" text-anchor="end" font-family="monospace" font-size="11" font-weight="700" fill="${item.accent}" letter-spacing="1">45 TRACKS</text>
</svg>`;
}

thumbnails.forEach(t => {
  const filePath = path.join(thumbsDir, `${t.id}.svg`);
  fs.writeFileSync(filePath, generateThumbnail(t), 'utf-8');
  console.log(`Generated thumbnail: assets/thumbnails/${t.id}.svg`);
});

console.log('All 10 Category 9 Rhythm thumbnails generated successfully.');
