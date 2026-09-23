/**
 * Next Games/Game — Word SVG Thumbnail Generator
 * Generates 10 futuristic cyber word & decryption thumbnails for Category 8 (Games 71–80)
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
    id: 'terminal-wordle',
    title: 'Terminal Wordle: 5-Letter Hacking',
    accent: '#00ff88',
    secondary: '#ffd600',
    iconPath: `
      <!-- Wordle Grid (5 Columns x 3 Rows shown) -->
      <g transform="translate(135, 75)">
        <!-- Row 1: Mixed tiles -->
        <rect x="0" y="0" width="55" height="55" rx="6" fill="#1b5e20" stroke="#00ff88" stroke-width="2"/>
        <text x="27" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#fff" text-anchor="middle">C</text>
        <rect x="65" y="0" width="55" height="55" rx="6" fill="#f57f17" stroke="#ffd600" stroke-width="2"/>
        <text x="92" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#fff" text-anchor="middle">Y</text>
        <rect x="130" y="0" width="55" height="55" rx="6" fill="#263238" stroke="#455a64" stroke-width="2"/>
        <text x="157" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#90a4ae" text-anchor="middle">B</text>
        <rect x="195" y="0" width="55" height="55" rx="6" fill="#263238" stroke="#455a64" stroke-width="2"/>
        <text x="222" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#90a4ae" text-anchor="middle">E</text>
        <rect x="260" y="0" width="55" height="55" rx="6" fill="#1b5e20" stroke="#00ff88" stroke-width="2"/>
        <text x="287" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#fff" text-anchor="middle">R</text>

        <!-- Row 2: All Green Solved Password -->
        <g transform="translate(0, 65)" filter="url(#glow)">
          <rect x="0" y="0" width="55" height="55" rx="6" fill="#00e676" stroke="#fff" stroke-width="2"/>
          <text x="27" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#000" text-anchor="middle">P</text>
          <rect x="65" y="0" width="55" height="55" rx="6" fill="#00e676" stroke="#fff" stroke-width="2"/>
          <text x="92" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#000" text-anchor="middle">R</text>
          <rect x="130" y="0" width="55" height="55" rx="6" fill="#00e676" stroke="#fff" stroke-width="2"/>
          <text x="157" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#000" text-anchor="middle">O</text>
          <rect x="195" y="0" width="55" height="55" rx="6" fill="#00e676" stroke="#fff" stroke-width="2"/>
          <text x="222" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#000" text-anchor="middle">X</text>
          <rect x="260" y="0" width="55" height="55" rx="6" fill="#00e676" stroke="#fff" stroke-width="2"/>
          <text x="287" y="38" font-family="monospace" font-weight="bold" font-size="28" fill="#000" text-anchor="middle">Y</text>
        </g>
      </g>
      <!-- Access Granted Decrypted Banner -->
      <text x="300" y="235" font-family="monospace" font-weight="bold" font-size="15" fill="#00ff88" text-anchor="middle" letter-spacing="3">&gt; ACCESS GRANTED: 100%</text>
    `
  },
  {
    id: 'cyber-word-search',
    title: 'Cyber Word Search: Matrix Hunter',
    accent: '#00f0ff',
    secondary: '#ff007f',
    iconPath: `
      <!-- Matrix Grid 5x5 sample -->
      <g transform="translate(160, 65)">
        <rect x="0" y="0" width="280" height="175" rx="8" fill="#071224" stroke="#00f0ff" stroke-width="2"/>
        <!-- Matrix letters -->
        <text x="30" y="35" font-family="monospace" font-size="20" fill="#4dd0e1">N</text>
        <text x="85" y="35" font-family="monospace" font-size="20" fill="#4dd0e1">E</text>
        <text x="140" y="35" font-family="monospace" font-size="20" fill="#4dd0e1">U</text>
        <text x="195" y="35" font-family="monospace" font-size="20" fill="#4dd0e1">R</text>
        <text x="250" y="35" font-family="monospace" font-size="20" fill="#4dd0e1">O</text>

        <!-- Highlighted Word Capsule: "QUANTUM" -->
        <rect x="15" y="55" width="250" height="36" rx="18" fill="rgba(255,0,127,0.3)" stroke="#ff007f" stroke-width="2" filter="url(#glow)"/>
        <text x="30" y="80" font-family="monospace" font-weight="bold" font-size="20" fill="#fff">Q</text>
        <text x="70" y="80" font-family="monospace" font-weight="bold" font-size="20" fill="#fff">U</text>
        <text x="110" y="80" font-family="monospace" font-weight="bold" font-size="20" fill="#fff">A</text>
        <text x="150" y="80" font-family="monospace" font-weight="bold" font-size="20" fill="#fff">N</text>
        <text x="190" y="80" font-family="monospace" font-weight="bold" font-size="20" fill="#fff">T</text>
        <text x="230" y="80" font-family="monospace" font-weight="bold" font-size="20" fill="#fff">U</text>

        <text x="30" y="125" font-family="monospace" font-size="20" fill="#4dd0e1">C</text>
        <text x="85" y="125" font-family="monospace" font-size="20" fill="#4dd0e1">Y</text>
        <text x="140" y="125" font-family="monospace" font-size="20" fill="#4dd0e1">B</text>
        <text x="195" y="125" font-family="monospace" font-size="20" fill="#4dd0e1">E</text>
        <text x="250" y="125" font-family="monospace" font-size="20" fill="#4dd0e1">R</text>

        <text x="30" y="160" font-family="monospace" font-size="20" fill="#4dd0e1">D</text>
        <text x="85" y="160" font-family="monospace" font-size="20" fill="#4dd0e1">A</text>
        <text x="140" y="160" font-family="monospace" font-size="20" fill="#4dd0e1">T</text>
        <text x="195" y="160" font-family="monospace" font-size="20" fill="#4dd0e1">A</text>
        <text x="250" y="160" font-family="monospace" font-size="20" fill="#4dd0e1">S</text>
      </g>
      <!-- Found Checkmark Tag -->
      <text x="300" y="275" font-family="monospace" font-weight="bold" font-size="14" fill="#00f0ff" text-anchor="middle">FOUND: QUANTUM ✓  CYBER ✓</text>
    `
  },
  {
    id: 'syntax-anagram-scrambler',
    title: 'Syntax Anagram Scrambler',
    accent: '#ff9100',
    secondary: '#ffd600',
    iconPath: `
      <!-- Rotating Circular Wheel of Letters -->
      <g transform="translate(300, 160)">
        <circle cx="0" cy="0" r="85" fill="#140902" stroke="#ff9100" stroke-width="3"/>
        <circle cx="0" cy="0" r="65" fill="none" stroke="#ffd600" stroke-width="1" stroke-dasharray="6,4"/>
        <!-- Radial Letter Nodes -->
        <!-- Center submit hub -->
        <circle cx="0" cy="0" r="22" fill="#ff9100" filter="url(#glow)"/>
        <text x="0" y="6" font-family="monospace" font-weight="bold" font-size="16" fill="#000" text-anchor="middle">GO</text>

        <!-- 6 Outer Letters: S Y N T A X -->
        <circle cx="0" cy="-60" r="18" fill="#2d1204" stroke="#ffd600" stroke-width="2"/>
        <text x="0" y="-53" font-family="monospace" font-weight="bold" font-size="18" fill="#ffd600" text-anchor="middle">S</text>

        <circle cx="52" cy="-30" r="18" fill="#2d1204" stroke="#ffd600" stroke-width="2"/>
        <text x="52" y="-23" font-family="monospace" font-weight="bold" font-size="18" fill="#ffd600" text-anchor="middle">Y</text>

        <circle cx="52" cy="30" r="18" fill="#2d1204" stroke="#ffd600" stroke-width="2"/>
        <text x="52" y="37" font-family="monospace" font-weight="bold" font-size="18" fill="#ffd600" text-anchor="middle">N</text>

        <circle cx="0" cy="60" r="18" fill="#2d1204" stroke="#ffd600" stroke-width="2"/>
        <text x="0" y="67" font-family="monospace" font-weight="bold" font-size="18" fill="#ffd600" text-anchor="middle">T</text>

        <circle cx="-52" cy="30" r="18" fill="#2d1204" stroke="#ffd600" stroke-width="2"/>
        <text x="-52" y="37" font-family="monospace" font-weight="bold" font-size="18" fill="#ffd600" text-anchor="middle">A</text>

        <circle cx="-52" cy="-30" r="18" fill="#2d1204" stroke="#ffd600" stroke-width="2"/>
        <text x="-52" y="-23" font-family="monospace" font-weight="bold" font-size="18" fill="#ffd600" text-anchor="middle">X</text>
      </g>
      <text x="300" y="280" font-family="monospace" font-weight="bold" font-size="14" fill="#ff9100" text-anchor="middle">SOLVED: "SYNTAX" (+150 PTS)</text>
    `
  },
  {
    id: 'quantum-crossword',
    title: 'Quantum Crossword: Mini Puzzles',
    accent: '#00e5ff',
    secondary: '#39ff14',
    iconPath: `
      <!-- 5x5 Mini Crossword Grid -->
      <g transform="translate(195, 70)">
        <!-- Grid Cells -->
        <rect x="0" y="0" width="40" height="40" fill="#0a1a36" stroke="#00e5ff" stroke-width="2"/>
        <text x="4" y="12" font-family="monospace" font-size="9" fill="#00e5ff">1</text>
        <text x="20" y="28" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">L</text>

        <rect x="42" y="0" width="40" height="40" fill="#0a1a36" stroke="#00e5ff" stroke-width="2"/>
        <text x="62" y="28" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">A</text>

        <rect x="84" y="0" width="40" height="40" fill="#0a1a36" stroke="#00e5ff" stroke-width="2"/>
        <text x="104" y="28" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">S</text>

        <rect x="126" y="0" width="40" height="40" fill="#0a1a36" stroke="#00e5ff" stroke-width="2"/>
        <text x="146" y="28" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">E</text>

        <rect x="168" y="0" width="40" height="40" fill="#0a1a36" stroke="#00e5ff" stroke-width="2"/>
        <text x="188" y="28" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">R</text>

        <!-- Black Block Cells -->
        <rect x="0" y="42" width="40" height="40" fill="#0a1a36" stroke="#00e5ff" stroke-width="2"/>
        <text x="20" y="70" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">O</text>

        <rect x="42" y="42" width="40" height="40" fill="#030612" stroke="#1e293b"/>

        <rect x="84" y="42" width="40" height="40" fill="#0a1a36" stroke="#00e5ff" stroke-width="2"/>
        <text x="104" y="70" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">C</text>

        <rect x="126" y="42" width="40" height="40" fill="#030612" stroke="#1e293b"/>

        <rect x="168" y="42" width="40" height="40" fill="#0a1a36" stroke="#00e5ff" stroke-width="2"/>
        <text x="188" y="70" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">A</text>

        <!-- Row 3 Active Selection -->
        <g filter="url(#glow)">
          <rect x="0" y="84" width="208" height="40" rx="4" fill="rgba(57,255,20,0.2)" stroke="#39ff14" stroke-width="2"/>
          <text x="20" y="112" font-family="monospace" font-weight="bold" font-size="20" fill="#39ff14" text-anchor="middle">G</text>
          <text x="62" y="112" font-family="monospace" font-weight="bold" font-size="20" fill="#39ff14" text-anchor="middle">A</text>
          <text x="104" y="112" font-family="monospace" font-weight="bold" font-size="20" fill="#39ff14" text-anchor="middle">A</text>
          <text x="146" y="112" font-family="monospace" font-weight="bold" font-size="20" fill="#39ff14" text-anchor="middle">T</text>
          <text x="188" y="112" font-family="monospace" font-weight="bold" font-size="20" fill="#39ff14" text-anchor="middle">E</text>
        </g>
      </g>
      <text x="300" y="255" font-family="'Segoe UI', monospace" font-size="12" fill="#00e5ff" text-anchor="middle">CLUE 1-ACROSS: Focused photonic beam</text>
    `
  },
  {
    id: 'typing-blitzkrieg',
    title: 'Typing Blitzkrieg: Speedrun',
    accent: '#ff007f',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Radar Screen Display with Descending Drone Words -->
      <circle cx="300" cy="150" r="100" fill="#0a0314" stroke="#ff007f" stroke-width="2"/>
      <circle cx="300" cy="150" r="60" fill="none" stroke="#ff007f" stroke-width="1" stroke-opacity="0.4"/>
      <!-- Radar Sweep Line -->
      <line x1="300" y1="150" x2="380" y2="90" stroke="#00f0ff" stroke-width="2"/>
      <!-- Descending Word Drones -->
      <g transform="translate(240, 80)" filter="url(#glow)">
        <polygon points="60,0 75,15 60,30 45,15" fill="#2d051e" stroke="#ff007f" stroke-width="2"/>
        <text x="60" y="-8" font-family="monospace" font-weight="bold" font-size="15" fill="#ff007f" text-anchor="middle">VIRUS</text>
      </g>
      <g transform="translate(180, 130)">
        <polygon points="50,0 65,15 50,30 35,15" fill="#08172d" stroke="#00f0ff" stroke-width="2"/>
        <text x="50" y="-8" font-family="monospace" font-weight="bold" font-size="14" fill="#00f0ff" text-anchor="middle">TROJAN</text>
      </g>
      <!-- Defensive Laser Blast from Bottom -->
      <polygon points="300,230 290,260 310,260" fill="#00f0ff"/>
      <line x1="300" y1="230" x2="300" y2="110" stroke="#00f0ff" stroke-width="4" stroke-dasharray="8,4" filter="url(#glow)"/>
      <text x="300" y="290" font-family="monospace" font-weight="bold" font-size="14" fill="#ffd600" text-anchor="middle">SPEED: 95 WPM (100% ACCURACY)</text>
    `
  },
  {
    id: 'lexicon-link',
    title: 'Lexicon Link: Word Association',
    accent: '#d500f9',
    secondary: '#00e5ff',
    iconPath: `
      <!-- 4 Categories Grouped Banner Rows -->
      <g transform="translate(140, 75)">
        <!-- Solved Category 1 (Yellow Banner) -->
        <rect x="0" y="0" width="320" height="42" rx="6" fill="#ffd600" filter="url(#glow)"/>
        <text x="160" y="20" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="13" fill="#000" text-anchor="middle">PROGRAMMING LANGUAGES</text>
        <text x="160" y="34" font-family="monospace" font-size="11" fill="#222" text-anchor="middle">Python, Rust, Java, Kotlin</text>

        <!-- Solved Category 2 (Cyan Banner) -->
        <rect x="0" y="50" width="320" height="42" rx="6" fill="#00e5ff"/>
        <text x="160" y="70" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="13" fill="#000" text-anchor="middle">HARDWARE COMPONENTS</text>
        <text x="160" y="84" font-family="monospace" font-size="11" fill="#003" text-anchor="middle">RAM, GPU, CPU, SSD</text>

        <!-- Unsolved 4x2 Tile Grid Sample -->
        <g transform="translate(0, 100)">
          <rect x="0" y="0" width="75" height="42" rx="6" fill="#140828" stroke="#d500f9" stroke-width="1.5"/>
          <text x="37" y="26" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">FIREWALL</text>

          <rect x="82" y="0" width="75" height="42" rx="6" fill="#140828" stroke="#d500f9" stroke-width="1.5"/>
          <text x="119" y="26" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">ROUTER</text>

          <rect x="164" y="0" width="75" height="42" rx="6" fill="#140828" stroke="#d500f9" stroke-width="1.5"/>
          <text x="201" y="26" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">SWITCH</text>

          <rect x="246" y="0" width="75" height="42" rx="6" fill="#140828" stroke="#d500f9" stroke-width="1.5"/>
          <text x="283" y="26" font-family="monospace" font-size="11" fill="#fff" text-anchor="middle">BRIDGE</text>
        </g>
      </g>
      <text x="300" y="275" font-family="monospace" font-weight="bold" font-size="13" fill="#d500f9" text-anchor="middle">MISTAKES REMAINING: ● ● ● ●</text>
    `
  },
  {
    id: 'cyber-hangman',
    title: 'Cyber Hangman: AI Rescue',
    accent: '#ff1744',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Holographic Containment Pod & Disintegrating AI Avatar -->
      <g transform="translate(170, 70)">
        <!-- Pod Frame -->
        <rect x="0" y="0" width="260" height="150" rx="10" fill="#12040b" stroke="#ff1744" stroke-width="3"/>
        <line x1="20" y1="130" x2="240" y2="130" stroke="#ff1744" stroke-width="2"/>
        <!-- Gantry Arc -->
        <line x1="60" y1="130" x2="60" y2="20" stroke="#00f0ff" stroke-width="4"/>
        <line x1="60" y1="20" x2="160" y2="20" stroke="#00f0ff" stroke-width="4"/>
        <line x1="160" y1="20" x2="160" y2="45" stroke="#ff1744" stroke-width="2" stroke-dasharray="4,2"/>
        <!-- AI Robot Avatar -->
        <circle cx="160" cy="55" r="12" fill="#ff007f" filter="url(#glow)"/>
        <line x1="160" y1="67" x2="160" y2="95" stroke="#00f0ff" stroke-width="3"/>
        <line x1="160" y1="75" x2="140" y2="90" stroke="#00f0ff" stroke-width="2"/>
        <line x1="160" y1="75" x2="180" y2="90" stroke="#00f0ff" stroke-width="2"/>
        <line x1="160" y1="95" x2="145" y2="120" stroke="#00f0ff" stroke-width="2"/>
        <line x1="160" y1="95" x2="175" y2="120" stroke="#00f0ff" stroke-width="2"/>
      </g>
      <!-- Decryption Word Blanks -->
      <text x="300" y="255" font-family="monospace" font-weight="bold" font-size="22" fill="#fff" text-anchor="middle" letter-spacing="8">_ Y _ E R N E T</text>
      <text x="300" y="285" font-family="monospace" font-size="12" fill="#00ff88" text-anchor="middle">SHIELDS: 5/6 REMAINING</text>
    `
  },
  {
    id: 'boggle-terminal',
    title: 'Boggle Terminal: 4x4 Word Grid',
    accent: '#ffd600',
    secondary: '#00e5ff',
    iconPath: `
      <!-- 4x4 Dice Boggle Grid with Tracer Path -->
      <g transform="translate(190, 65)">
        <rect x="0" y="0" width="220" height="175" rx="8" fill="#141103" stroke="#ffd600" stroke-width="2"/>
        <!-- Dice Cells -->
        <!-- Row 1 -->
        <rect x="15" y="12" width="38" height="34" rx="4" fill="#2d2204" stroke="#ffd600"/>
        <text x="34" y="36" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">C</text>
        <rect x="65" y="12" width="38" height="34" rx="4" fill="#2d2204" stroke="#ffd600"/>
        <text x="84" y="36" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">O</text>
        <rect x="115" y="12" width="38" height="34" rx="4" fill="#2d2204" stroke="#ffd600"/>
        <text x="134" y="36" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">D</text>
        <rect x="165" y="12" width="38" height="34" rx="4" fill="#2d2204" stroke="#ffd600"/>
        <text x="184" y="36" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">E</text>

        <!-- Tracing path through adjacent letters -->
        <path d="M34,36 L84,36 L134,36 L184,36" stroke="#00f0ff" stroke-width="4" stroke-linecap="round" filter="url(#glow)"/>

        <!-- Row 2 -->
        <rect x="15" y="52" width="38" height="34" rx="4" fill="#2d2204" stroke="#ffd600"/>
        <text x="34" y="76" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">H</text>
        <rect x="65" y="52" width="38" height="34" rx="4" fill="#2d2204" stroke="#ffd600"/>
        <text x="84" y="76" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">A</text>
        <rect x="115" y="52" width="38" height="34" rx="4" fill="#2d2204" stroke="#ffd600"/>
        <text x="134" y="76" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">C</text>
        <rect x="165" y="52" width="38" height="34" rx="4" fill="#2d2204" stroke="#ffd600"/>
        <text x="184" y="76" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">K</text>
      </g>
      <text x="300" y="275" font-family="monospace" font-weight="bold" font-size="14" fill="#ffd600" text-anchor="middle">WORD: "CODE" (+100 PTS) | WORDS: 14</text>
    `
  },
  {
    id: 'binary-spelling-bee',
    title: 'Binary Spelling Bee: Hex Forge',
    accent: '#ffd700',
    secondary: '#ff9100',
    iconPath: `
      <!-- Hexagonal Honeycomb Cell Cluster -->
      <g transform="translate(300, 160)">
        <!-- Center Golden Hexagon (Mandatory letter 'A') -->
        <polygon points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16" fill="#ffd700" stroke="#fff" stroke-width="2" filter="url(#glow)"/>
        <text x="0" y="8" font-family="monospace" font-weight="bold" font-size="24" fill="#000" text-anchor="middle">A</text>

        <!-- 6 Surrounding Hexagons -->
        <!-- Top -->
        <polygon points="0,-92 28,-76 28,-44 0,-28 -28,-44 -28,-76" fill="#140a02" stroke="#ff9100" stroke-width="2"/>
        <text x="0" y="-52" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">B</text>

        <!-- Top Right -->
        <polygon points="52,-62 80,-46 80,-14 52,2 24,-14 24,-46" fill="#140a02" stroke="#ff9100" stroke-width="2"/>
        <text x="52" y="-22" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">I</text>

        <!-- Bottom Right -->
        <polygon points="52,2 80,18 80,50 52,66 24,50 24,18" fill="#140a02" stroke="#ff9100" stroke-width="2"/>
        <text x="52" y="42" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">N</text>

        <!-- Bottom -->
        <polygon points="0,32 28,48 28,80 0,96 -28,80 -28,48" fill="#140a02" stroke="#ff9100" stroke-width="2"/>
        <text x="0" y="72" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">R</text>

        <!-- Bottom Left -->
        <polygon points="-52,2 -24,18 -24,50 -52,66 -80,50 -80,18" fill="#140a02" stroke="#ff9100" stroke-width="2"/>
        <text x="-52" y="42" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">Y</text>

        <!-- Top Left -->
        <polygon points="-52,-62 -24,-46 -24,-14 -52,2 -80,-14 -80,-46" fill="#140a02" stroke="#ff9100" stroke-width="2"/>
        <text x="-52" y="-22" font-family="monospace" font-weight="bold" font-size="20" fill="#fff" text-anchor="middle">T</text>
      </g>
      <text x="300" y="285" font-family="monospace" font-weight="bold" font-size="14" fill="#ffd700" text-anchor="middle">PANGRAM FOUND: "BINARY" ★★★</text>
    `
  },
  {
    id: 'word-drop',
    title: 'Word Drop: Letter Tetris Well',
    accent: '#39ff14',
    secondary: '#ff007f',
    iconPath: `
      <!-- Falling Letter Well Chamber -->
      <g transform="translate(190, 60)">
        <polygon points="0,0 0,190 220,190 220,0" fill="#041209" stroke="#39ff14" stroke-width="3"/>
        <!-- Falling Cube Group -->
        <rect x="85" y="20" width="32" height="32" rx="4" fill="#2d051e" stroke="#ff007f" stroke-width="2" filter="url(#glow)"/>
        <text x="101" y="43" font-family="monospace" font-weight="bold" font-size="18" fill="#ff007f" text-anchor="middle">Z</text>
        <path d="M101,55 L101,90" stroke="#ff007f" stroke-width="2" stroke-dasharray="4,2"/>

        <!-- Settled letter blocks at bottom -->
        <!-- Row 1 -->
        <rect x="25" y="150" width="32" height="32" rx="4" fill="#0f2615" stroke="#39ff14"/>
        <text x="41" y="173" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">W</text>
        <rect x="60" y="150" width="32" height="32" rx="4" fill="#0f2615" stroke="#39ff14"/>
        <text x="76" y="173" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">O</text>
        <rect x="95" y="150" width="32" height="32" rx="4" fill="#0f2615" stroke="#39ff14"/>
        <text x="111" y="173" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">R</text>
        <rect x="130" y="150" width="32" height="32" rx="4" fill="#0f2615" stroke="#39ff14"/>
        <text x="146" y="173" font-family="monospace" font-weight="bold" font-size="18" fill="#fff" text-anchor="middle">D</text>

        <!-- Connected word clear line -->
        <line x1="25" y1="166" x2="162" y2="166" stroke="#ffd600" stroke-width="4" filter="url(#glow)"/>
      </g>
      <text x="300" y="280" font-family="monospace" font-weight="bold" font-size="14" fill="#39ff14" text-anchor="middle">LINE CLEARED: "WORD" (+80 PTS)</text>
    `
  }
];

function generateThumbnail(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020512"/>
      <stop offset="60%" stop-color="#070c24"/>
      <stop offset="100%" stop-color="#01020a"/>
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
  <text x="32" y="44" font-family="'Segoe UI', monospace" font-size="12" font-weight="900" fill="${item.accent}" letter-spacing="3" opacity="0.85">CYBER WORD &amp; DECRYPTION 45-THEME LAB</text>

  <!-- Graphic Icon Payload -->
  <g>
    ${item.iconPath}
  </g>

  <!-- Game Title Bottom Bar -->
  <rect x="24" y="318" width="552" height="42" rx="8" fill="#040618" fill-opacity="0.9" stroke="${item.accent}" stroke-width="1" stroke-opacity="0.5"/>
  <text x="42" y="345" font-family="'Segoe UI', system-ui, sans-serif" font-size="17" font-weight="800" fill="#ffffff" letter-spacing="1">${item.title.toUpperCase()}</text>
  <text x="550" y="344" text-anchor="end" font-family="monospace" font-size="11" font-weight="700" fill="${item.accent}" letter-spacing="1">45 STAGES</text>
</svg>`;
}

thumbnails.forEach(t => {
  const filePath = path.join(thumbsDir, `${t.id}.svg`);
  fs.writeFileSync(filePath, generateThumbnail(t), 'utf-8');
  console.log(`Generated thumbnail: assets/thumbnails/${t.id}.svg`);
});

console.log('All 10 Category 8 Word thumbnails generated successfully.');
