class AudioManager {
  constructor() {
    this.ctx = null;
    this.tempo = 125;
    this.isPlaying = false;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playTone(freq, type = 'sine', dur = 0.15, gainVal = 0.2) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + dur);
    } catch(e) {}
  }
  playNoteHit(accuracy = 'perfect', lane = 0) {
    this.init();
    const lanePitches = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    const baseFreq = lanePitches[lane % 4];
    if (accuracy === 'perfect') {
      this.playTone(baseFreq * 1.5, 'triangle', 0.18, 0.25);
      this.playTone(baseFreq * 2, 'sine', 0.12, 0.15);
    } else if (accuracy === 'great') {
      this.playTone(baseFreq, 'triangle', 0.15, 0.2);
    } else if (accuracy === 'good') {
      this.playTone(baseFreq * 0.8, 'sawtooth', 0.12, 0.15);
    }
  }
  playMiss() {
    this.init();
    this.playTone(110, 'sawtooth', 0.2, 0.25);
    this.playTone(82.4, 'square', 0.25, 0.15);
  }
  playBassNote(freq) {
    this.init();
    this.playTone(freq, 'sawtooth', 0.22, 0.12);
  }
  playStageWin() {
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((n, i) => {
      setTimeout(() => this.playTone(n, 'triangle', 0.3, 0.3), i * 100);
    });
  }
}