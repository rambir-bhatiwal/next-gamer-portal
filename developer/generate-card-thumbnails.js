/**
 * Next Games/Game — Card SVG Thumbnail Generator
 * Generates 10 futuristic cyber card & casino thumbnails for Category 7 (Games 61–70)
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
    id: 'cyber-solitaire',
    title: 'Cyber Solitaire: Data Deck',
    accent: '#00f0ff',
    secondary: '#ff007f',
    iconPath: `
      <!-- Solitaire Tableau Stacks -->
      <!-- Foundation Outline -->
      <rect x="360" y="80" width="70" height="95" rx="6" fill="#0c102b" stroke="#00f0ff" stroke-width="2" stroke-dasharray="4,4"/>
      <rect x="445" y="80" width="70" height="95" rx="6" fill="#0c102b" stroke="#ff007f" stroke-width="2" stroke-dasharray="4,4"/>
      <text x="395" y="135" font-family="sans-serif" font-size="28" fill="#00f0ff" text-anchor="middle" opacity="0.6">♠</text>
      <text x="480" y="135" font-family="sans-serif" font-size="28" fill="#ff007f" text-anchor="middle" opacity="0.6">♥</text>
      <!-- Stock & Waste Piles -->
      <rect x="85" y="80" width="70" height="95" rx="6" fill="#151b3b" stroke="#00f0ff" stroke-width="3"/>
      <rect x="95" y="90" width="50" height="75" rx="4" fill="#080c1f" stroke="#39ff14" stroke-width="1"/>
      <circle cx="120" cy="127" r="16" fill="none" stroke="#00f0ff" stroke-width="2"/>
      <rect x="170" y="80" width="70" height="95" rx="6" fill="#0f1738" stroke="#ffd600" stroke-width="3" filter="url(#glow)"/>
      <text x="185" y="105" font-family="monospace" font-weight="bold" font-size="18" fill="#ffd600">A</text>
      <text x="205" y="138" font-family="sans-serif" font-size="30" fill="#ffd600" text-anchor="middle">♦</text>
      <!-- Cascading Tableau Stack -->
      <g transform="translate(230, 110)">
        <rect x="0" y="0" width="70" height="95" rx="6" fill="#101738" stroke="#ff007f" stroke-width="2"/>
        <text x="15" y="25" font-family="monospace" font-weight="bold" font-size="16" fill="#ff007f">K</text>
        <text x="35" y="55" font-family="sans-serif" font-size="24" fill="#ff007f" text-anchor="middle">♥</text>
        <rect x="0" y="35" width="70" height="95" rx="6" fill="#0f1738" stroke="#00f0ff" stroke-width="2"/>
        <text x="15" y="60" font-family="monospace" font-weight="bold" font-size="16" fill="#00f0ff">Q</text>
        <text x="35" y="90" font-family="sans-serif" font-size="24" fill="#00f0ff" text-anchor="middle">♠</text>
        <rect x="0" y="70" width="70" height="95" rx="6" fill="#0d1430" stroke="#ff007f" stroke-width="2" filter="url(#glow)"/>
        <text x="15" y="95" font-family="monospace" font-weight="bold" font-size="16" fill="#ff007f">J</text>
        <text x="35" y="125" font-family="sans-serif" font-size="24" fill="#ff007f" text-anchor="middle">♦</text>
      </g>
    `
  },
  {
    id: 'neon-blackjack-2099',
    title: 'Neon Blackjack 2099: High Roller',
    accent: '#39ff14',
    secondary: '#ffd600',
    iconPath: `
      <!-- Blackjack Table Arc -->
      <path d="M120,70 Q300,160 480,70 L510,290 Q300,320 90,290 Z" fill="#081e14" stroke="#39ff14" stroke-width="4"/>
      <!-- Dealer Cards (Face Down & Face Up) -->
      <rect x="230" y="90" width="60" height="85" rx="6" fill="#14021a" stroke="#ff007f" stroke-width="2"/>
      <rect x="240" y="100" width="40" height="65" rx="4" fill="#2d0a3d"/>
      <rect x="300" y="90" width="60" height="85" rx="6" fill="#0d261e" stroke="#00f0ff" stroke-width="2"/>
      <text x="312" y="115" font-family="monospace" font-weight="bold" font-size="18" fill="#00f0ff">10</text>
      <text x="330" y="145" font-family="sans-serif" font-size="24" fill="#00f0ff" text-anchor="middle">♠</text>
      <!-- Player Cards (Ace & Jack = 21 BLACKJACK) -->
      <g filter="url(#glow)">
        <rect x="200" y="195" width="68" height="95" rx="6" fill="#072018" stroke="#39ff14" stroke-width="3"/>
        <text x="215" y="222" font-family="monospace" font-weight="bold" font-size="20" fill="#39ff14">A</text>
        <text x="234" y="255" font-family="sans-serif" font-size="30" fill="#39ff14" text-anchor="middle">♠</text>
        <rect x="275" y="195" width="68" height="95" rx="6" fill="#072018" stroke="#ffd600" stroke-width="3"/>
        <text x="290" y="222" font-family="monospace" font-weight="bold" font-size="20" fill="#ffd600">J</text>
        <text x="309" y="255" font-family="sans-serif" font-size="30" fill="#ffd600" text-anchor="middle">♣</text>
      </g>
      <!-- Casino Betting Chips -->
      <circle cx="395" cy="220" r="22" fill="#ffd600" stroke="#000" stroke-width="4" stroke-dasharray="8,5"/>
      <text x="395" y="226" font-family="monospace" font-weight="bold" font-size="14" fill="#000" text-anchor="middle">500</text>
      <circle cx="430" cy="245" r="20" fill="#ff007f" stroke="#fff" stroke-width="4" stroke-dasharray="6,4"/>
      <text x="430" y="251" font-family="monospace" font-weight="bold" font-size="13" fill="#fff" text-anchor="middle">100</text>
    `
  },
  {
    id: 'quantum-deckbuilder',
    title: 'Quantum Deckbuilder: Rogue Cyber',
    accent: '#b388ff',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Holographic Combat HUD & Enemy Daemon -->
      <polygon points="300,70 340,110 300,150 260,110" fill="#2a0845" stroke="#ff007f" stroke-width="3" filter="url(#glow)"/>
      <circle cx="300" cy="110" r="15" fill="#ff1744"/>
      <text x="300" y="168" font-family="monospace" font-size="12" fill="#ff007f" text-anchor="middle">DAEMON HP: 120</text>
      <!-- 3 Hero Combat Cards Floating -->
      <!-- Card 1: Overclock Beam -->
      <g transform="translate(130, 180)">
        <rect x="0" y="0" width="95" height="130" rx="8" fill="#120a2e" stroke="#ff007f" stroke-width="3"/>
        <circle cx="18" cy="18" r="11" fill="#ff007f"/>
        <text x="18" y="23" font-family="monospace" font-weight="bold" font-size="13" fill="#fff" text-anchor="middle">2</text>
        <text x="48" y="23" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ff007f">BEAM</text>
        <line x1="20" y1="65" x2="75" y2="65" stroke="#ff007f" stroke-width="4" stroke-dasharray="6,3"/>
        <text x="48" y="110" font-family="monospace" font-size="10" fill="#ff80ab" text-anchor="middle">DMG: 16</text>
      </g>
      <!-- Card 2: Quantum Shield -->
      <g transform="translate(250, 160)" filter="url(#glow)">
        <rect x="0" y="0" width="100" height="140" rx="8" fill="#081735" stroke="#00f0ff" stroke-width="3"/>
        <circle cx="18" cy="18" r="11" fill="#00f0ff"/>
        <text x="18" y="23" font-family="monospace" font-weight="bold" font-size="13" fill="#000" text-anchor="middle">1</text>
        <text x="52" y="23" font-family="sans-serif" font-size="10" font-weight="bold" fill="#00f0ff">SHIELD</text>
        <polygon points="50,45 75,55 75,85 50,100 25,85 25,55" fill="#0a2a4a" stroke="#00f0ff" stroke-width="2"/>
        <text x="50" y="122" font-family="monospace" font-size="10" fill="#80d8ff" text-anchor="middle">BLOCK: 12</text>
      </g>
      <!-- Card 3: Cyber Virus -->
      <g transform="translate(375, 180)">
        <rect x="0" y="0" width="95" height="130" rx="8" fill="#132408" stroke="#39ff14" stroke-width="3"/>
        <circle cx="18" cy="18" r="11" fill="#39ff14"/>
        <text x="18" y="23" font-family="monospace" font-weight="bold" font-size="13" fill="#000" text-anchor="middle">1</text>
        <text x="48" y="23" font-family="sans-serif" font-size="10" font-weight="bold" fill="#39ff14">VIRUS</text>
        <circle cx="48" cy="65" r="16" fill="none" stroke="#39ff14" stroke-width="3"/>
        <text x="48" y="110" font-family="monospace" font-size="10" fill="#b9f6ca" text-anchor="middle">POISON: 5</text>
      </g>
    `
  },
  {
    id: 'neural-memory-match',
    title: 'Neural Memory Match: Glyphs',
    accent: '#ffd600',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Holographic Memory Card Grid -->
      <g transform="translate(140, 75)">
        <!-- Row 1 -->
        <rect x="0" y="0" width="65" height="85" rx="6" fill="#091b2e" stroke="#00f0ff" stroke-width="2"/>
        <text x="32" y="52" font-family="sans-serif" font-size="28" fill="#00f0ff" text-anchor="middle">⚡</text>

        <rect x="85" y="0" width="65" height="85" rx="6" fill="#1b1233" stroke="#ff007f" stroke-width="2"/>
        <text x="117" y="52" font-family="sans-serif" font-size="28" fill="#ff007f" text-anchor="middle">🧬</text>

        <!-- Matched Pair Glow -->
        <g filter="url(#glow)">
          <rect x="170" y="0" width="65" height="85" rx="6" fill="#262103" stroke="#ffd600" stroke-width="3"/>
          <text x="202" y="52" font-family="sans-serif" font-size="28" fill="#ffd600" text-anchor="middle">⚛️</text>

          <rect x="255" y="0" width="65" height="85" rx="6" fill="#262103" stroke="#ffd600" stroke-width="3"/>
          <text x="287" y="52" font-family="sans-serif" font-size="28" fill="#ffd600" text-anchor="middle">⚛️</text>
        </g>

        <!-- Row 2 -->
        <rect x="0" y="105" width="65" height="85" rx="6" fill="#0f2615" stroke="#39ff14" stroke-width="2"/>
        <text x="32" y="157" font-family="sans-serif" font-size="28" fill="#39ff14" text-anchor="middle">🛡️</text>

        <!-- Face Down Card Backs with Glowing Microchips -->
        <rect x="85" y="105" width="65" height="85" rx="6" fill="#090d24" stroke="#00f0ff" stroke-width="2"/>
        <polygon points="117,132 132,147 117,162 102,147" fill="none" stroke="#00f0ff" stroke-width="2"/>

        <rect x="170" y="105" width="65" height="85" rx="6" fill="#090d24" stroke="#ff007f" stroke-width="2"/>
        <circle cx="202" cy="147" r="14" fill="none" stroke="#ff007f" stroke-width="2"/>

        <rect x="255" y="105" width="65" height="85" rx="6" fill="#091b2e" stroke="#00f0ff" stroke-width="2"/>
        <text x="287" y="157" font-family="sans-serif" font-size="28" fill="#00f0ff" text-anchor="middle">⚡</text>
      </g>
      <!-- Combo Streak Counter -->
      <text x="300" y="295" font-family="monospace" font-weight="bold" font-size="14" fill="#ffd600" text-anchor="middle" letter-spacing="2">SYNAPSE MATCH: 6x COMBO</text>
    `
  },
  {
    id: 'tri-peaks-cyber-pyramid',
    title: 'Tri-Peaks Cyber Pyramid',
    accent: '#ff007f',
    secondary: '#00f0ff',
    iconPath: `
      <!-- Tri-Peaks Pyramid Layout -->
      <!-- Peak 1 -->
      <rect x="160" y="70" width="55" height="75" rx="5" fill="#09142b" stroke="#00f0ff" stroke-width="2"/>
      <text x="187" y="115" font-family="monospace" font-weight="bold" font-size="16" fill="#00f0ff" text-anchor="middle">7♠</text>
      <!-- Peak 2 -->
      <rect x="270" y="70" width="55" height="75" rx="5" fill="#09142b" stroke="#ff007f" stroke-width="2"/>
      <text x="297" y="115" font-family="monospace" font-weight="bold" font-size="16" fill="#ff007f" text-anchor="middle">J♥</text>
      <!-- Peak 3 -->
      <rect x="380" y="70" width="55" height="75" rx="5" fill="#09142b" stroke="#39ff14" stroke-width="2"/>
      <text x="407" y="115" font-family="monospace" font-weight="bold" font-size="16" fill="#39ff14" text-anchor="middle">3♣</text>
      <!-- Middle Row Overlapping -->
      <rect x="135" y="115" width="55" height="75" rx="5" fill="#0c1936" stroke="#ffd600" stroke-width="2"/>
      <rect x="190" y="115" width="55" height="75" rx="5" fill="#0c1936" stroke="#ffd600" stroke-width="2"/>
      <rect x="245" y="115" width="55" height="75" rx="5" fill="#0c1936" stroke="#00f0ff" stroke-width="2"/>
      <rect x="300" y="115" width="55" height="75" rx="5" fill="#0c1936" stroke="#00f0ff" stroke-width="2"/>
      <rect x="355" y="115" width="55" height="75" rx="5" fill="#0c1936" stroke="#ff007f" stroke-width="2"/>
      <rect x="410" y="115" width="55" height="75" rx="5" fill="#0c1936" stroke="#ff007f" stroke-width="2"/>
      <!-- Active Base & Waste Pile -->
      <rect x="220" y="215" width="65" height="85" rx="6" fill="#080c1f" stroke="#555" stroke-width="2"/>
      <text x="252" y="260" font-family="monospace" font-size="11" fill="#888" text-anchor="middle">STOCK</text>
      <!-- Glowing Waste Card (Rank 8) -->
      <g filter="url(#glow)">
        <rect x="310" y="215" width="65" height="85" rx="6" fill="#180424" stroke="#ff007f" stroke-width="3"/>
        <text x="323" y="240" font-family="monospace" font-weight="bold" font-size="18" fill="#ff007f">8</text>
        <text x="342" y="272" font-family="sans-serif" font-size="26" fill="#ff007f" text-anchor="middle">♦</text>
      </g>
    `
  },
  {
    id: 'freecell-neo',
    title: 'FreeCell Neo: Quantum Cascade',
    accent: '#00e5ff',
    secondary: '#76ff03',
    iconPath: `
      <!-- 4 Free Cells (Left) -->
      <rect x="110" y="75" width="50" height="70" rx="4" fill="#0b172a" stroke="#00e5ff" stroke-width="2"/>
      <text x="135" y="115" font-family="monospace" font-size="14" fill="#00e5ff" text-anchor="middle">Q♥</text>
      <rect x="168" y="75" width="50" height="70" rx="4" fill="#0b172a" stroke="#00e5ff" stroke-width="2"/>
      <text x="193" y="115" font-family="monospace" font-size="14" fill="#00e5ff" text-anchor="middle">7♣</text>
      <rect x="226" y="75" width="50" height="70" rx="4" fill="#060c17" stroke="#00e5ff" stroke-dasharray="3,3"/>
      <rect x="284" y="75" width="50" height="70" rx="4" fill="#060c17" stroke="#00e5ff" stroke-dasharray="3,3"/>
      <!-- 4 Foundations (Right) -->
      <rect x="350" y="75" width="50" height="70" rx="4" fill="#0b172a" stroke="#76ff03" stroke-width="2"/>
      <text x="375" y="115" font-family="monospace" font-size="14" fill="#76ff03" text-anchor="middle">3♠</text>
      <rect x="408" y="75" width="50" height="70" rx="4" fill="#0b172a" stroke="#76ff03" stroke-width="2"/>
      <text x="433" y="115" font-family="monospace" font-size="14" fill="#76ff03" text-anchor="middle">5♥</text>
      <rect x="466" y="75" width="50" height="70" rx="4" fill="#060c17" stroke="#76ff03" stroke-dasharray="3,3"/>
      <!-- Cascading FreeCell Tableau Columns -->
      <g transform="translate(190, 160)">
        <rect x="0" y="0" width="60" height="80" rx="5" fill="#131b38" stroke="#ff007f" stroke-width="2"/>
        <text x="12" y="22" font-family="monospace" font-weight="bold" font-size="14" fill="#ff007f">10</text>
        <rect x="0" y="25" width="60" height="80" rx="5" fill="#101730" stroke="#00e5ff" stroke-width="2"/>
        <text x="12" y="47" font-family="monospace" font-weight="bold" font-size="14" fill="#00e5ff">9</text>
        <rect x="0" y="50" width="60" height="80" rx="5" fill="#0d1428" stroke="#ff007f" stroke-width="2" filter="url(#glow)"/>
        <text x="12" y="72" font-family="monospace" font-weight="bold" font-size="14" fill="#ff007f">8</text>
      </g>
      <g transform="translate(290, 160)">
        <rect x="0" y="0" width="60" height="80" rx="5" fill="#131b38" stroke="#00e5ff" stroke-width="2"/>
        <text x="12" y="22" font-family="monospace" font-weight="bold" font-size="14" fill="#00e5ff">K</text>
        <rect x="0" y="25" width="60" height="80" rx="5" fill="#101730" stroke="#ff007f" stroke-width="2"/>
        <text x="12" y="47" font-family="monospace" font-weight="bold" font-size="14" fill="#ff007f">Q</text>
      </g>
    `
  },
  {
    id: 'spider-protocol',
    title: 'Spider Protocol: Data Sorter',
    accent: '#e040fb',
    secondary: '#00e5ff',
    iconPath: `
      <!-- Cyber Spider Emblem -->
      <circle cx="300" cy="110" r="18" fill="#2d0542" stroke="#e040fb" stroke-width="3" filter="url(#glow)"/>
      <circle cx="300" cy="110" r="8" fill="#e040fb"/>
      <!-- Spider Legs Linking Columns -->
      <path d="M285,105 Q220,70 170,120 M285,115 Q210,120 160,170" stroke="#e040fb" stroke-width="2" fill="none"/>
      <path d="M315,105 Q380,70 430,120 M315,115 Q390,120 440,170" stroke="#e040fb" stroke-width="2" fill="none"/>
      <!-- Full Suit Cascade K down to A -->
      <g transform="translate(255, 140)" filter="url(#glow)">
        <rect x="0" y="0" width="90" height="35" rx="4" fill="#1a0428" stroke="#00e5ff" stroke-width="2"/>
        <text x="15" y="24" font-family="monospace" font-weight="bold" font-size="15" fill="#00e5ff">K ♠</text>
        <rect x="0" y="25" width="90" height="35" rx="4" fill="#1a0428" stroke="#00e5ff" stroke-width="2"/>
        <text x="15" y="49" font-family="monospace" font-weight="bold" font-size="15" fill="#00e5ff">Q ♠</text>
        <rect x="0" y="50" width="90" height="35" rx="4" fill="#1a0428" stroke="#00e5ff" stroke-width="2"/>
        <text x="15" y="74" font-family="monospace" font-weight="bold" font-size="15" fill="#00e5ff">J ♠</text>
        <rect x="0" y="75" width="90" height="35" rx="4" fill="#1a0428" stroke="#00e5ff" stroke-width="2"/>
        <text x="15" y="99" font-family="monospace" font-weight="bold" font-size="15" fill="#00e5ff">10 ♠</text>
        <rect x="0" y="100" width="90" height="35" rx="4" fill="#1a0428" stroke="#e040fb" stroke-width="2"/>
        <text x="15" y="124" font-family="monospace" font-weight="bold" font-size="15" fill="#e040fb">... A ♠</text>
      </g>
      <!-- Complete Suit Extracted Animation Pulse -->
      <circle cx="300" cy="285" r="16" fill="#00e5ff" filter="url(#glow)"/>
      <text x="300" y="291" font-family="monospace" font-weight="bold" font-size="13" fill="#000" text-anchor="middle">DONE</text>
    `
  },
  {
    id: 'cyber-baccarat',
    title: 'Cyber Baccarat: High Stakes',
    accent: '#ffd700',
    secondary: '#ff1744',
    iconPath: `
      <!-- VIP Baccarat Table Oval Felt -->
      <ellipse cx="300" cy="185" rx="220" ry="115" fill="#0c1824" stroke="#ffd700" stroke-width="4"/>
      <!-- Player & Banker Betting Areas -->
      <rect x="150" y="120" width="120" height="70" rx="8" fill="#091b30" stroke="#00f0ff" stroke-width="2"/>
      <text x="210" y="150" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="14" fill="#00f0ff" text-anchor="middle">PLAYER</text>
      <text x="210" y="175" font-family="monospace" font-size="18" fill="#fff" text-anchor="middle">SCORE: 8</text>

      <rect x="330" y="120" width="120" height="70" rx="8" fill="#2d0818" stroke="#ff1744" stroke-width="2"/>
      <text x="390" y="150" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="14" fill="#ff1744" text-anchor="middle">BANKER</text>
      <text x="390" y="175" font-family="monospace" font-size="18" fill="#fff" text-anchor="middle">SCORE: 7</text>

      <!-- Center TIE Betting Box -->
      <rect x="250" y="200" width="100" height="40" rx="6" fill="#1b2408" stroke="#39ff14" stroke-width="2"/>
      <text x="300" y="225" font-family="monospace" font-weight="bold" font-size="13" fill="#39ff14" text-anchor="middle">TIE 8:1</text>

      <!-- Golden VIP Chips -->
      <circle cx="210" cy="245" r="22" fill="#ffd700" stroke="#fff" stroke-width="3" filter="url(#glow)"/>
      <text x="210" y="251" font-family="monospace" font-weight="bold" font-size="12" fill="#000" text-anchor="middle">$10K</text>
    `
  },
  {
    id: 'elemental-card-duel',
    title: 'Elemental Card Duel: Nano Battler',
    accent: '#ff3d00',
    secondary: '#00e5ff',
    iconPath: `
      <!-- 3x3 Tactical Card Grid -->
      <g transform="translate(195, 75)">
        <!-- Grid slots -->
        <rect x="0" y="0" width="65" height="65" rx="5" fill="#0e1726" stroke="#334155" stroke-width="2"/>
        <rect x="75" y="0" width="65" height="65" rx="5" fill="#0e1726" stroke="#334155" stroke-width="2"/>
        <rect x="150" y="0" width="65" height="65" rx="5" fill="#0e1726" stroke="#334155" stroke-width="2"/>

        <!-- Fire Element Card Placed -->
        <g transform="translate(0, 75)" filter="url(#glow)">
          <rect x="0" y="0" width="65" height="65" rx="5" fill="#2d0a06" stroke="#ff3d00" stroke-width="3"/>
          <text x="32" y="16" font-family="monospace" font-weight="bold" font-size="12" fill="#ffd600" text-anchor="middle">8</text>
          <text x="12" y="38" font-family="monospace" font-weight="bold" font-size="12" fill="#ffd600" text-anchor="middle">6</text>
          <text x="52" y="38" font-family="monospace" font-weight="bold" font-size="12" fill="#ffd600" text-anchor="middle">9</text>
          <text x="32" y="58" font-family="monospace" font-weight="bold" font-size="12" fill="#ffd600" text-anchor="middle">4</text>
          <text x="32" y="40" font-family="sans-serif" font-size="16" fill="#ff3d00" text-anchor="middle">🔥</text>
        </g>

        <!-- Water Element Card Placed -->
        <g transform="translate(75, 75)">
          <rect x="0" y="0" width="65" height="65" rx="5" fill="#061a2b" stroke="#00e5ff" stroke-width="2"/>
          <text x="32" y="16" font-family="monospace" font-weight="bold" font-size="12" fill="#80d8ff" text-anchor="middle">5</text>
          <text x="12" y="38" font-family="monospace" font-weight="bold" font-size="12" fill="#80d8ff" text-anchor="middle">7</text>
          <text x="52" y="38" font-family="monospace" font-weight="bold" font-size="12" fill="#80d8ff" text-anchor="middle">3</text>
          <text x="32" y="58" font-family="monospace" font-weight="bold" font-size="12" fill="#80d8ff" text-anchor="middle">8</text>
          <text x="32" y="40" font-family="sans-serif" font-size="16" fill="#00e5ff" text-anchor="middle">💧</text>
        </g>

        <rect x="150" y="75" width="65" height="65" rx="5" fill="#0e1726" stroke="#334155" stroke-width="2"/>
        <rect x="0" y="150" width="65" height="65" rx="5" fill="#0e1726" stroke="#334155" stroke-width="2"/>
        <rect x="75" y="150" width="65" height="65" rx="5" fill="#0e1726" stroke="#334155" stroke-width="2"/>
        <rect x="150" y="150" width="65" height="65" rx="5" fill="#0e1726" stroke="#334155" stroke-width="2"/>
      </g>
      <!-- Directional Clash Vector -->
      <path d="M260,110 L270,110" stroke="#ffd600" stroke-width="4"/>
    `
  },
  {
    id: 'cyber-poker',
    title: 'Cyber Poker: Holographic Draw',
    accent: '#ff007f',
    secondary: '#ffd600',
    iconPath: `
      <!-- Video Poker CRT Screen Bezel -->
      <rect x="90" y="65" width="420" height="235" rx="12" fill="#060418" stroke="#ff007f" stroke-width="4"/>
      <!-- Royal Flush Hand -->
      <!-- Card 1: 10 Spades -->
      <g transform="translate(110, 115)">
        <rect x="0" y="0" width="68" height="95" rx="5" fill="#0c1228" stroke="#00f0ff" stroke-width="2"/>
        <text x="12" y="22" font-family="monospace" font-weight="bold" font-size="14" fill="#00f0ff">10</text>
        <text x="34" y="55" font-family="sans-serif" font-size="24" fill="#00f0ff" text-anchor="middle">♠</text>
        <rect x="5" y="72" width="58" height="18" rx="3" fill="#ff007f"/>
        <text x="34" y="85" font-family="monospace" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">HELD</text>
      </g>
      <!-- Card 2: Jack Spades -->
      <g transform="translate(190, 115)">
        <rect x="0" y="0" width="68" height="95" rx="5" fill="#0c1228" stroke="#00f0ff" stroke-width="2"/>
        <text x="12" y="22" font-family="monospace" font-weight="bold" font-size="14" fill="#00f0ff">J</text>
        <text x="34" y="55" font-family="sans-serif" font-size="24" fill="#00f0ff" text-anchor="middle">♠</text>
        <rect x="5" y="72" width="58" height="18" rx="3" fill="#ff007f"/>
        <text x="34" y="85" font-family="monospace" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">HELD</text>
      </g>
      <!-- Card 3: Queen Spades -->
      <g transform="translate(270, 115)">
        <rect x="0" y="0" width="68" height="95" rx="5" fill="#0c1228" stroke="#00f0ff" stroke-width="2"/>
        <text x="12" y="22" font-family="monospace" font-weight="bold" font-size="14" fill="#00f0ff">Q</text>
        <text x="34" y="55" font-family="sans-serif" font-size="24" fill="#00f0ff" text-anchor="middle">♠</text>
        <rect x="5" y="72" width="58" height="18" rx="3" fill="#ff007f"/>
        <text x="34" y="85" font-family="monospace" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">HELD</text>
      </g>
      <!-- Card 4: King Spades -->
      <g transform="translate(350, 115)">
        <rect x="0" y="0" width="68" height="95" rx="5" fill="#0c1228" stroke="#00f0ff" stroke-width="2"/>
        <text x="12" y="22" font-family="monospace" font-weight="bold" font-size="14" fill="#00f0ff">K</text>
        <text x="34" y="55" font-family="sans-serif" font-size="24" fill="#00f0ff" text-anchor="middle">♠</text>
        <rect x="5" y="72" width="58" height="18" rx="3" fill="#ff007f"/>
        <text x="34" y="85" font-family="monospace" font-size="10" font-weight="bold" fill="#fff" text-anchor="middle">HELD</text>
      </g>
      <!-- Card 5: Ace Spades (Highlighted) -->
      <g transform="translate(430, 115)" filter="url(#glow)">
        <rect x="0" y="0" width="68" height="95" rx="5" fill="#1b082e" stroke="#ffd600" stroke-width="3"/>
        <text x="12" y="22" font-family="monospace" font-weight="bold" font-size="14" fill="#ffd600">A</text>
        <text x="34" y="55" font-family="sans-serif" font-size="24" fill="#ffd600" text-anchor="middle">♠</text>
        <rect x="5" y="72" width="58" height="18" rx="3" fill="#ffd600"/>
        <text x="34" y="85" font-family="monospace" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">HELD</text>
      </g>
      <!-- Top Payline Indicator -->
      <text x="300" y="95" font-family="monospace" font-weight="bold" font-size="14" fill="#ffd600" text-anchor="middle">ROYAL FLUSH PAYS 800:1</text>
    `
  }
];

function generateThumbnail(item) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050314"/>
      <stop offset="60%" stop-color="#0c0721"/>
      <stop offset="100%" stop-color="#02010a"/>
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
  <text x="32" y="44" font-family="'Segoe UI', monospace" font-size="12" font-weight="900" fill="${item.accent}" letter-spacing="3" opacity="0.85">CYBER CARD &amp; CASINO 45-THEME DECK</text>

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

console.log('All 10 Category 7 Card thumbnails generated successfully.');
