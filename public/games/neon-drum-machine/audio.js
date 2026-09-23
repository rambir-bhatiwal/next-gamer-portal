class DrumAudio {
  constructor() {
    this.ctx = null;
    this.analyser = null;
    this.dataArray = null;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }
  playPad(padIndex) {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    switch(padIndex) {
      case 0: // Kick
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(0.01, now + 0.35);
        gain.gain.setValueAtTime(1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
        osc.connect(gain);
        gain.connect(this.analyser);
        osc.start(now);
        osc.stop(now + 0.35);
        break;
      case 1: // Snare
        this.playNoise(0.2, 800);
        this.playTone(180, 0.1, 'triangle');
        break;
      case 2: // Clap
        for (let i = 0; i < 3; i++) {
          setTimeout(() => this.playNoise(0.08, 1200), i * 20);
        }
        break;
      case 3: // Closed Hat
        this.playNoise(0.05, 5000);
        break;
      case 4: // Open Hat
        this.playNoise(0.35, 4500);
        break;
      case 5: // Hi Tom
        this.playTom(300);
        break;
      case 6: // Mid Tom
        this.playTom(220);
        break;
      case 7: // Lo Tom
        this.playTom(150);
        break;
      case 8: // Rimshot
        this.playTone(450, 0.04, 'square');
        break;
      case 9: // Cyber Zap
        const zap = this.ctx.createOscillator();
        const zapGain = this.ctx.createGain();
        zap.frequency.setValueAtTime(1200, now);
        zap.frequency.exponentialRampToValueAtTime(80, now + 0.2);
        zapGain.gain.setValueAtTime(0.4, now);
        zapGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        zap.connect(zapGain);
        zapGain.connect(this.analyser);
        zap.start(now);
        zap.stop(now + 0.2);
        break;
      case 10: // Laser
        this.playTone(880, 0.15, 'sawtooth');
        break;
      case 11: // Sub Drop
        const sub = this.ctx.createOscillator();
        const subG = this.ctx.createGain();
        sub.frequency.setValueAtTime(90, now);
        sub.frequency.exponentialRampToValueAtTime(30, now + 0.6);
        subG.gain.setValueAtTime(0.8, now);
        subG.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
        sub.connect(subG);
        subG.connect(this.analyser);
        sub.start(now);
        sub.stop(now + 0.6);
        break;
      case 12: // Shaker
        this.playNoise(0.08, 3000);
        break;
      case 13: // Cowbell
        this.playTone(560, 0.1, 'sine');
        this.playTone(845, 0.1, 'sine');
        break;
      case 14: // Cymbal
        this.playNoise(0.5, 6000);
        break;
      case 15: // Beep
        this.playTone(987.77, 0.1, 'sine');
        break;
    }
  }
  playNoise(dur, filterFreq) {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * dur;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = filterFreq;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + dur);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.analyser);
    noise.start();
  }
  playTone(freq, dur, type = 'sine') {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(this.analyser);
    osc.start();
    osc.stop(this.ctx.currentTime + dur);
  }
  playTom(freq) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.6, this.ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(this.analyser);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.2);
  }
}