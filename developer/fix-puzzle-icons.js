const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const gamesDir = path.join(rootDir, 'public', 'games');

const games = [
  'laser-circuit-reflector',
  'cyber-sudoku',
  'holographic-pipe-fusion',
  'neuro-link-sokobot',
  'quantum-nonogram',
  'hexa-tile-polarity',
  'cryptographic-word-cipher',
  'nanite-slide-puzzle'
];

games.forEach(g => {
  const iconDir = path.join(gamesDir, g, 'assets');
  if (!fs.existsSync(iconDir)) fs.mkdirSync(iconDir, { recursive: true });
  
  const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <circle cx="50" cy="50" r="30" fill="none" stroke="#00f0ff" stroke-width="3"/>
  <circle cx="50" cy="50" r="10" fill="#ff007f"/>
</svg>`;

  fs.writeFileSync(path.join(iconDir, 'icon.svg'), iconSvg, 'utf-8');
  console.log('Written icon for ' + g);
});
