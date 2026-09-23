/**
 * Web Audio API Engine for Hexa-Tile Polarity Match
 */
(function(window) {
  'use strict';
  let ctx = null;
  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }
  window.AudioEngine = {
    playToggle(colorIdx) {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        const freqs = [440, 554.37, 659.25, 783.99];
        osc.frequency.setValueAtTime(freqs[colorIdx % freqs.length], c.currentTime);
        g.gain.setValueAtTime(0.12, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.08);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [440, 554.37, 659.25, 880].forEach((freq, i) => {
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.09);
          g.gain.setValueAtTime(0.2, c.currentTime + i * 0.09);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.09 + 0.35);
          osc.connect(g); g.connect(c.destination);
          osc.start(c.currentTime + i * 0.09);
          osc.stop(c.currentTime + i * 0.09 + 0.35);
        });
      } catch(e) {}
    }
  };
})(window);