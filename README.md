# Next Games/Game — Instant-Play HTML5 Web Games Portal

[![Deploy to InfinityFree via FTP](https://github.com/rambir-bhatiwal/next-gamer-portal/actions/workflows/deploy.yml/badge.svg)](https://github.com/rambir-bhatiwal/next-gamer-portal/actions/workflows/deploy.yml)

> **Live Production URL**: [https://next.gamer.free/](https://next.gamer.free/)

Next Games/Game is a high-octane, zero-installation HTML5 web gaming portal featuring **101 completely self-contained games** across 10 diverse categories. Built entirely using vanilla Canvas 2D/WebGL, CSS3, and the browser's native Web Audio API, the portal delivers silky 60 FPS performance on both desktop and mobile devices without external third-party dependencies or game engines.

---

## 🎮 Game Catalog Overview (101 Total Games)

All games are fully self-contained micro-environments located in `public/games/<game-id>/` featuring 40–45 unique procedural themes per game:

1. **Racing (Games 1–10)**: `cosmic-gate-runner`, `isometric-precision-racer`, `tachyon-overdrive`, `solar-wind-sprint`, `quantum-velocity`, `neon-horizon`, `hyper-maglev`, `plasma-hydrofoil`, `graviton-loop`, `cyber-drift`
2. **Arcade & Action (Games 11–20)**: `cyber-runner`, `neon-pong`, `quantum-matrix`, `hyper-space-drift`, `orbital-defense`, `retro-grid-invaders`, `asteroid-shatter`, `turbo-pac-grid`, `neon-centipede`, `vortex-missile-command`
3. **Puzzle & Logic (Games 21–30)**: `laser-circuit-reflector`, `quantum-nonogram`, `cyber-sudoku`, `gravity-pipe-flow`, `hex-tile-polarity`, `nanite-slide-puzzle`, `neuro-link-sokobot`, `holographic-pipe-fusion`, `plasma-light-prism`, `binary-logic-gates`
4. **Strategy & Tactics (Games 31–40)**: `cyber-tower-defense`, `drone-swarm-commander`, `micro-colony-automaton`, `quantum-orbit-tactics`, `grid-defense-protocol`, `cyberpunk-mech-tactics`, `hacker-node-conquest`, `galactic-fleet-commander`, `ai-defense-matrix`, `nanotech-crawler`
5. **Platformer & Precision (Games 41–50)**: `gravity-shift-runner`, `neon-shadow-ninja`, `quantum-teleport-hopper`, `magnetic-repulsion-bot`, `plasma-rope-swinger`, `cyber-ninja-climb`, `robo-escape-9`, `skyward-spire`, `neon-gravity-jumper`, `silicon-cave-explorer`
6. **Physics & Simulation (Games 51–60)**: `graviton-pinball`, `cyber-ragdoll-demolition`, `neon-elastic-sling`, `plasma-ballistics`, `quantum-billiards`, `structural-bridge-engineer`, `fluid-particle-diverter`, `pendulum-wrecking-bot`, `magnetic-polarity-balancer`, `orbital-trebuchet`
7. **Card & Casino (Games 61–70)**: `cyber-solitaire`, `neon-blackjack-2099`, `quantum-deckbuilder`, `neural-memory-match`, `tri-peaks-cyber-pyramid`, `freecell-neo`, `spider-protocol`, `cyber-baccarat`, `elemental-card-duel`, `cyber-poker`
8. **Word & Decryption (Games 71–80)**: `terminal-wordle`, `cyber-word-search`, `syntax-anagram-scrambler`, `quantum-crossword`, `typing-blitzkrieg`, `lexicon-link`, `cyber-hangman`, `boggle-terminal`, `binary-spelling-bee`, `word-drop`
9. **Rhythm & Beat (Games 81–90)**: `beat-highway`, `neon-drum-machine`, `frequency-slicer`, `soundwave-surfer`, `pulse-conductor`, `tempo-runner`, `neon-dance-floor`, `bassline-defender`, `chiptune-piano-tiles`, `rhythm-revolver`
10. **Cyber RPG & Adventures (Games 91–100)**: `cyber-dungeon-crawler`, `turn-based-cyberpunk-arena`, `text-terminal-hacker-quest`, `space-mercenary-outpost`, `neon-wizard`, `cyber-pet-simulator`, `post-apocalyptic-barterer`, `rogue-drone-swarm`, `neon-samurai`, `quantum-chrono-rpg`
11. **Baseline**: `chrono-switch`

---

## 🚀 Automated Deployment to InfinityFree (via FTP)

This repository includes a GitHub Actions CI/CD workflow (`.github/workflows/deploy.yml`) configured to automatically deploy production code to an **InfinityFree** hosting server over FTP upon every push to the `main` branch.

### Prerequisites & GitHub Secrets Setup

To enable automated FTP deployment, configure the following secrets in your GitHub repository:

1. Navigate to: **GitHub Repository → Settings → Secrets and variables → Actions**
2. Click **New repository secret** and add:

| Secret Name | Value Description | Example / Typical InfinityFree Value |
| :--- | :--- | :--- |
| `FTP_SERVER` | FTP Hostname provided by InfinityFree | `ftpupload.net` |
| `FTP_USERNAME` | InfinityFree FTP Username (from vPanel / Client Area) | `epiz_12345678` |
| `FTP_PASSWORD` | InfinityFree Account Password / vPanel Password | `YourAccountPassword` |
| `FTP_DIR` | *(Optional)* Target directory on server | `htdocs/` *(or `next.gamer.free/htdocs/`)* |

### How the Workflow Works

- **Trigger**: Automatic on `git push` to `main`, or manual trigger via `workflow_dispatch`.
- **Engine**: Powered by `SamKirkland/FTP-Deploy-Action@v4.3.5`.
- **Target**: Deploys root static files (`index.html`, `robots.txt`, `sitemap.xml`, `css/`, `js/`, `assets/`, `config/`, `public/`) directly into your server's web directory (`htdocs/`).
- **Exclusions**: Automatically omits developer test suites (`developer/**`), git metadata, agent logs, and README from uploading to keep your hosting quota lean.

---

## 🛠️ Local Development & Testing

```bash
# Clone the repository
git clone https://github.com/rambir-bhatiwal/next-gamer-portal.git
cd next-gamer-portal

# Run tests
node developer/test-portal.js               # Validates all 101 games & portal assets
node developer/test-isolation.js            # Audits micro-environment sandbox isolation
node developer/test-human-speed.js          # Verifies human-speed reaction fairness
node developer/test-inplace-modification.js # Audits Rule 11 in-place function integrity
node developer/test-runner.js               # Runs 20-cycle automated QA simulation
```

---

## 📄 License & Standards

- Zero copyrighted assets — all procedural canvas vectors, CSS art, and Web Audio API synthesis.
- Strict English-Only policy across all titles and UI elements.
- Clean in-place function modification with zero dead code.
