/**
 * Cryptographic Word Cipher - Standalone Game Logic
 * 45 Intelligence Quotes with Real-Time Letter Substitution
 */
(function() {
  'use strict';
  const THEMES = [
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

  const themeVal = document.getElementById('themeVal');
  const progressVal = document.getElementById('progressVal');
  const cipherStream = document.getElementById('cipherStream');
  const selectedCipherBox = document.getElementById('selectedCipherBox');
  const alphabetKeyboard = document.getElementById('alphabetKeyboard');
  const hintBtn = document.getElementById('hintBtn');
  const resetBtn = document.getElementById('resetBtn');
  const nextBtn = document.getElementById('nextBtn');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');
  const menuScreen = document.getElementById('menuScreen');
  const startBtn = document.getElementById('startBtn');

  let currentLevel = 1;
  let clearedLevels = JSON.parse(localStorage.getItem('next_cwc_cleared') || '[]');
  let selectedCipherLetter = null;
  let cipherMapping = {}; // cipherChar -> plainChar
  let solutionMapping = {}; // cipherChar -> correct plainChar

  // 45 Authentic Cyberpunk & Computing Intelligence Quotes
  const QUOTES = [
    "CYBERSPACE IS A CONSENSUAL HALLUCINATION EXPERIENCED DAILY BY BILLIONS",
    "THE FUTURE IS ALREADY HERE IT IS JUST NOT EVENLY DISTRIBUTED",
    "ANY SUFFICIENTLY ADVANCED TECHNOLOGY IS INDISTINGUISHABLE FROM MAGIC",
    "DATA IS THE NEW CURRENCY OF THE DIGITAL INTERSTELLAR REALM",
    "WE SHAPE OUR TOOLS AND THEREAFTER OUR TOOLS SHAPE US",
    "NEURAL NETWORKS REWRITE THE ARCHITECTURE OF CONSCIOUSNESS",
    "THE CIPHER HOLDS SECRETS THAT THE SILICON MATRIX CANNOT ERASE",
    "QUANTUM LOGIC TRANSCENDS THE BINARY LIMITATIONS OF REALITY",
    "DEFEND THE CORE MAINFRAME AGAINST EXTERNAL INTRUSION PROTOCOLS",
    "INFORMATION WANTS TO BE FREE BUT CODE REQUIRES DISCIPLINE",
    "THE LIGHT THAT BURNS TWICE AS BRIGHT BURNS HALF AS LONG",
    "ACROSS THE FIBER HORIZON LIES THE UNKNOWN DIGITAL WILDERNESS",
    "NEON LIGHTS REFLECT ACROSS WET RAIN SLICKED METROPOLITAN STEEL",
    "REVOLUTION BEGINS WHEN THE CIRCUIT BREAKS FROM THE SOURCE",
    "EVERY ALGORITHM CARRIES THE ECHO OF ITS HUMAN CREATOR"
  ];

  let currentQuote = "";
  let encryptedText = "";

  function generateCipher(lvl) {
    nextBtn.style.display = 'none';
    selectedCipherLetter = null;
    cipherMapping = {};
    solutionMapping = {};

    const theme = THEMES[(lvl - 1) % THEMES.length];
    themeVal.textContent = lvl + ': ' + theme.name;
    themeVal.style.color = theme.primary;

    currentQuote = QUOTES[(lvl - 1) % QUOTES.length].toUpperCase();

    // Create a scrambled monoalphabetic substitution cipher
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const shuffled = [...letters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = (i * 7 + lvl * 13) % (i + 1);
      const temp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = temp;
    }

    letters.forEach((plain, idx) => {
      const cipher = shuffled[idx];
      solutionMapping[cipher] = plain;
    });

    // Invert mapping: plain to cipher
    const plainToCipher = {};
    for (let c in solutionMapping) plainToCipher[solutionMapping[c]] = c;

    encryptedText = "";
    for (let ch of currentQuote) {
      if (/[A-Z]/.test(ch)) encryptedText += plainToCipher[ch];
      else encryptedText += ch;
    }

    selectedCipherBox.textContent = 'SELECT A CIPHER LETTER ABOVE';
    renderStream();
    updateProgress();
  }

  function renderStream() {
    cipherStream.innerHTML = '';
    const words = encryptedText.split(' ');

    words.forEach(word => {
      const wGroup = document.createElement('div');
      wGroup.className = 'word-group';

      for (let ch of word) {
        if (/[A-Z]/.test(ch)) {
          const lBox = document.createElement('div');
          lBox.className = 'letter-box';

          const slot = document.createElement('div');
          slot.className = 'plain-slot';
          if (cipherMapping[ch]) slot.textContent = cipherMapping[ch];
          if (selectedCipherLetter === ch) slot.classList.add('selected');

          const cipherChar = document.createElement('div');
          cipherChar.className = 'cipher-char';
          cipherChar.textContent = ch;

          lBox.onclick = () => {
            selectedCipherLetter = ch;
            selectedCipherBox.textContent = 'MAPPING CIPHER: "' + ch + '" -> CHOOSE DECODED LETTER';
            renderStream();
          };

          lBox.appendChild(slot);
          lBox.appendChild(cipherChar);
          wGroup.appendChild(lBox);
        } else {
          // Punctuation
          const pBox = document.createElement('div');
          pBox.className = 'plain-slot';
          pBox.textContent = ch;
          wGroup.appendChild(pBox);
        }
      }

      cipherStream.appendChild(wGroup);
    });
  }

  function updateProgress() {
    const lettersInQuote = [...new Set(encryptedText.replace(/[^A-Z]/g, ''))];
    let correct = 0;
    lettersInQuote.forEach(c => {
      if (cipherMapping[c] === solutionMapping[c]) correct++;
    });

    const pct = Math.floor((correct / lettersInQuote.length) * 100);
    progressVal.textContent = pct + '% DECRYPTED';

    if (pct === 100) {
      window.AudioEngine.playVictory();
      nextBtn.style.display = 'inline-block';
      if (!clearedLevels.includes(currentLevel)) {
        clearedLevels.push(currentLevel);
        localStorage.setItem('next_cwc_cleared', JSON.stringify(clearedLevels));
      }
    }
  }

  function mapLetter(plainChar) {
    if (!selectedCipherLetter) return;
    cipherMapping[selectedCipherLetter] = plainChar;
    window.AudioEngine.playKey();
    renderStream();
    updateProgress();
  }

  // Keyboard mapping buttons
  alphabetKeyboard.innerHTML = '';
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(ch => {
    const btn = document.createElement('button');
    btn.className = 'key-btn';
    btn.textContent = ch;
    btn.onclick = () => mapLetter(ch);
    alphabetKeyboard.appendChild(btn);
  });

  window.addEventListener('keydown', (e) => {
    const ch = e.key.toUpperCase();
    if (/^[A-Z]$/.test(ch)) mapLetter(ch);
  });

  hintBtn.onclick = () => {
    // Reveal 1 unmapped letter
    const lettersInQuote = [...new Set(encryptedText.replace(/[^A-Z]/g, ''))];
    const unmapped = lettersInQuote.filter(c => cipherMapping[c] !== solutionMapping[c]);
    if (unmapped.length > 0) {
      const chosen = unmapped[0];
      cipherMapping[chosen] = solutionMapping[chosen];
      window.AudioEngine.playHint();
      renderStream();
      updateProgress();
    }
  };

  resetBtn.onclick = () => {
    cipherMapping = {};
    renderStream();
    updateProgress();
  };

  nextBtn.onclick = () => {
    currentLevel = Math.min(45, currentLevel + 1);
    generateCipher(currentLevel);
  };

  function buildLevelGrid() {
    levelSelectGrid.innerHTML = '';
    for (let i = 1; i <= 45; i++) {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (i === currentLevel ? ' active' : '') + (clearedLevels.includes(i) ? ' cleared' : '');
      btn.textContent = i;
      btn.onclick = () => {
        currentLevel = i;
        menuScreen.classList.add('hidden');
        generateCipher(currentLevel);
      };
      levelSelectGrid.appendChild(btn);
    }
  }

  startBtn.onclick = () => {
    menuScreen.classList.add('hidden');
    generateCipher(currentLevel);
  };

  levelSelectBtn.onclick = () => {
    buildLevelGrid();
    menuScreen.classList.remove('hidden');
  };

  const cwcIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#04020f"/>
  <rect x="20" y="25" width="60" height="50" rx="6" fill="#051208" stroke="#00e676" stroke-width="3"/>
  <text x="50" y="48" fill="#ffd600" font-size="14" font-weight="bold" text-anchor="middle">QXZ</text>
  <text x="50" y="65" fill="#00e676" font-size="14" font-weight="bold" text-anchor="middle">THE</text>
</svg>`;

  writeFile(path.join(cwcDir, 'assets', 'icon.svg'), cwcIcon);

  buildLevelGrid();
  generateCipher(1);
})();