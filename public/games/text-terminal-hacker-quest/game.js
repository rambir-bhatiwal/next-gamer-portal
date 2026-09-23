const THEMES = [
  {
    "id": 1,
    "name": "Floor 1: Guest Network Corridor",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 2,
    "name": "Floor 2: Encrypted Storage Vault",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 3,
    "name": "Floor 3: Overclocked Reactor Floor",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 4,
    "name": "Floor 4: Sub-Zero Nitrogen Core",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 5,
    "name": "Floor 5: Quantum Core Sanctum",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 6,
    "name": "Floor 6: Silicon Labyrinth",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 7,
    "name": "Floor 7: Hologram Projection Bay",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 8,
    "name": "Floor 8: Bio-Nanite Research Lab",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 9,
    "name": "Floor 9: Deep Archive Catacombs",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  },
  {
    "id": 10,
    "name": "Floor 10: Neural Mesh Foundry",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 11,
    "name": "Floor 11: Orbital Uplink Spire",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 12,
    "name": "Floor 12: Plasma Exhaust Conduits",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 13,
    "name": "Floor 13: Mainframe Power Grid",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 14,
    "name": "Floor 14: Cryptographic Cipher Depths",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 15,
    "name": "Floor 15: Autonomous Assembly Plant",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 16,
    "name": "Floor 16: Black Market Data Haven",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 17,
    "name": "Floor 17: Firewall Defense Citadel",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 18,
    "name": "Floor 18: Void Matrix Abyss",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  },
  {
    "id": 19,
    "name": "Floor 19: Synthesizer Soundstage",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 20,
    "name": "Floor 20: Optical Fiber Nexus",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 21,
    "name": "Floor 21: Robotic Maintenance Yard",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 22,
    "name": "Floor 22: Tachyon Accelerator Ring",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 23,
    "name": "Floor 23: Cybernetic Hospital Ward",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 24,
    "name": "Floor 24: Subterranean Server Vault",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 25,
    "name": "Floor 25: Corporate Executive Penthouse",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 26,
    "name": "Floor 26: Solar Arrays Outpost",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 27,
    "name": "Floor 27: Gravity Distortion Chamber",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  },
  {
    "id": 28,
    "name": "Floor 28: Hydraulic Sump Sector",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 29,
    "name": "Floor 29: Graphene Lattice Foundry",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 30,
    "name": "Floor 30: Memory Leak Wasteland",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 31,
    "name": "Floor 31: Electromagnetic Shield Hub",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 32,
    "name": "Floor 32: Dark Fiber Underpass",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 33,
    "name": "Floor 33: Cryo-Stasis Chamber",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 34,
    "name": "Floor 34: Laser Beam Crossroad",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 35,
    "name": "Floor 35: Algorithmic Trading Floor",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 36,
    "name": "Floor 36: Superconductor Core",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  },
  {
    "id": 37,
    "name": "Floor 37: Nanotech Swarm Hive",
    "bg": "#090d1f",
    "primary": "#00f0ff",
    "secondary": "#ff007f",
    "accent": "#ffd600",
    "wall": "#ff007f",
    "floor": "#090d1f",
    "fog": "#090d1f"
  },
  {
    "id": 38,
    "name": "Floor 38: High-Voltage Relay Station",
    "bg": "#130826",
    "primary": "#d500f9",
    "secondary": "#00e5ff",
    "accent": "#39ff14",
    "wall": "#00e5ff",
    "floor": "#130826",
    "fog": "#130826"
  },
  {
    "id": 39,
    "name": "Floor 39: Thermal Dissipation Sink",
    "bg": "#06140b",
    "primary": "#39ff14",
    "secondary": "#00f0ff",
    "accent": "#ffd600",
    "wall": "#00f0ff",
    "floor": "#06140b",
    "fog": "#06140b"
  },
  {
    "id": 40,
    "name": "Floor 40: Satellite Command Bunker",
    "bg": "#19080b",
    "primary": "#ff1744",
    "secondary": "#ff9100",
    "accent": "#00f0ff",
    "wall": "#ff9100",
    "floor": "#19080b",
    "fog": "#19080b"
  },
  {
    "id": 41,
    "name": "Floor 41: AI Training Simulator",
    "bg": "#07131a",
    "primary": "#00e5ff",
    "secondary": "#76ff03",
    "accent": "#ff007f",
    "wall": "#76ff03",
    "floor": "#07131a",
    "fog": "#07131a"
  },
  {
    "id": 42,
    "name": "Floor 42: Zero-Day Exploit Breach",
    "bg": "#140f04",
    "primary": "#ffab00",
    "secondary": "#ff3d00",
    "accent": "#00f0ff",
    "wall": "#ff3d00",
    "floor": "#140f04",
    "fog": "#140f04"
  },
  {
    "id": 43,
    "name": "Floor 43: Holographic Museum Wing",
    "bg": "#080614",
    "primary": "#7c4dff",
    "secondary": "#ff007f",
    "accent": "#00e5ff",
    "wall": "#ff007f",
    "floor": "#080614",
    "fog": "#080614"
  },
  {
    "id": 44,
    "name": "Floor 44: Quantum Singularity Well",
    "bg": "#051117",
    "primary": "#18ffff",
    "secondary": "#651fff",
    "accent": "#ffd600",
    "wall": "#651fff",
    "floor": "#051117",
    "fog": "#051117"
  },
  {
    "id": 45,
    "name": "Floor 45: Century Matrix Master Core",
    "bg": "#12081f",
    "primary": "#ea80fc",
    "secondary": "#00f0ff",
    "accent": "#76ff03",
    "wall": "#00f0ff",
    "floor": "#12081f",
    "fog": "#12081f"
  }
];

(function() {
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalInput = document.getElementById('terminalInput');
  const levelDisplay = document.getElementById('levelDisplay');
  const themeDisplay = document.getElementById('themeDisplay');
  const creditsDisplay = document.getElementById('creditsDisplay');
  const secDisplay = document.getElementById('secDisplay');
  const levelModal = document.getElementById('levelModal');
  const levelSelectBtn = document.getElementById('levelSelectBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const levelSelectGrid = document.getElementById('levelSelectGrid');

  let currentNode = 1;
  let credits = 500;
  let secLevel = 1;
  let nodeHacked = false;

  function initLevelGrid() {
    levelSelectGrid.innerHTML = '';
    THEMES.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'lvl-btn' + (t.id === currentNode ? ' active' : '');
      btn.textContent = t.id;
      btn.title = t.name;
      btn.addEventListener('click', () => {
        loadNode(t.id);
        levelModal.classList.add('hidden');
      });
      levelSelectGrid.appendChild(btn);
    });
  }

  function printLine(text, className = '') {
    const p = document.createElement('div');
    if (className) p.className = className;
    p.textContent = text;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function loadNode(nodeNum) {
    currentNode = Math.max(1, Math.min(45, nodeNum));
    const theme = THEMES[currentNode - 1];

    levelDisplay.textContent = `${currentNode}/45`;
    themeDisplay.textContent = theme.name.split(':')[1] ? theme.name.split(':')[1].trim() : theme.name;
    secLevel = 1 + Math.floor(currentNode / 10);
    secDisplay.textContent = `LVL ${secLevel}`;
    nodeHacked = false;

    terminalOutput.innerHTML = '';
    printLine(`=======================================================`, 'system');
    printLine(`[CONNECTING TO MAINFRAME NODE ${currentNode}/45]`, 'system');
    printLine(`SYSTEM HOST: ${theme.name.toUpperCase()}`, 'system');
    printLine(`SECURITY PROTOCOL: AES-512 / ICE LEVEL ${secLevel}`, 'alert');
    printLine(`Type 'help' for command listing or 'scan' to inspect node.`);
    printLine(`=======================================================`, 'system');

    initLevelGrid();
  }

  function handleCommand(cmd) {
    const raw = cmd.trim().toLowerCase();
    printLine(`> ${cmd}`);
    window.audio.playKey();

    if (!raw) return;

    if (raw === 'help') {
      printLine(`AVAILABLE COMMANDS:`);
      printLine(`  ls          - List data files on current node`);
      printLine(`  cat <file>  - Read file contents`);
      printLine(`  scan        - Scan node vulnerabilities and encryption key`);
      printLine(`  hack        - Attempt security clearance bypass`);
      printLine(`  decrypt     - Decrypt encrypted credentials`);
      printLine(`  next        - Advance to next mission node`);
      printLine(`  clear       - Clear terminal screen`);
    } else if (raw === 'ls') {
      printLine(`FILES IN /usr/local/mainframe/node_${currentNode}:`);
      printLine(`  - system_manifest.dat`);
      printLine(`  - security_keys.enc`);
      printLine(`  - corporate_payroll.db`);
      printLine(`  - root_access_token.key`);
    } else if (raw === 'scan') {
      printLine(`[SCANNING PORT 443 &amp; MEMORY BUFFERS...]`, 'system');
      setTimeout(() => {
        printLine(`[RESULT]: Vulnerability detected in buffer 0x7F4A.`, 'success');
        printLine(`Execute 'hack' to inject exploit payload.`, 'system');
        window.audio.playSuccess();
      }, 300);
    } else if (raw === 'hack') {
      printLine(`[INJECTING ZERO-DAY BUFFER OVERFLOW...]`, 'system');
      setTimeout(() => {
        if (Math.random() < 0.9) {
          nodeHacked = true;
          const reward = 150 + currentNode * 25;
          credits += reward;
          creditsDisplay.textContent = `${credits} CR`;
          printLine(`ACCESS GRANTED! Root privileges acquired.`, 'success');
          printLine(`Transferred +${reward} CR to cryptocurrency wallet.`, 'success');
          printLine(`Type 'next' or click NEXT NODE to proceed!`, 'system');
          window.audio.playSuccess();
        } else {
          printLine(`INTRUSION DETECTED! ICE firewall counter-attacked.`, 'alert');
          window.audio.playAlarm();
        }
      }, 400);
    } else if (raw.startsWith('cat')) {
      const parts = raw.split(' ');
      const fname = parts[1] || '';
      if (fname.includes('payroll')) {
        printLine(`PAYROLL DUMP: Executive slush fund: 4,500,000 CR transferred to off-grid vault.`);
      } else if (fname.includes('manifest')) {
        printLine(`MANIFEST: Node ${currentNode} controls local sector orbital defense grid.`);
      } else {
        printLine(`CONTENTS OF ${fname}: Encrypted binary payload [0x41 0x59 0x99 ...]`);
      }
    } else if (raw === 'decrypt') {
      printLine(`Decrypting cipher keys with quantum coprocessor...`, 'system');
      setTimeout(() => {
        printLine(`Cipher decoded: PASSKEY = CIPHER_NODE_${currentNode}_OVERRIDE`, 'success');
        window.audio.playSuccess();
      }, 300);
    } else if (raw === 'next') {
      if (currentNode >= 45) {
        printLine(`CONGRATULATIONS! ALL 45 CORPORATE NODES INFILTRATED!`, 'success');
        printLine(`You are the Century Master Hacker!`, 'success');
      } else {
        loadNode(currentNode + 1);
      }
    } else if (raw === 'clear') {
      terminalOutput.innerHTML = '';
    } else {
      printLine(`Unknown command: '${raw}'. Type 'help' for options.`, 'alert');
    }
  }

  terminalInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      handleCommand(terminalInput.value);
      terminalInput.value = '';
    }
  });

  document.querySelectorAll('.cmd-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      handleCommand(cmd);
    });
  });

  levelSelectBtn.onclick = () => levelModal.classList.remove('hidden');
  closeModalBtn.onclick = () => levelModal.classList.add('hidden');

  loadNode(1);
})();