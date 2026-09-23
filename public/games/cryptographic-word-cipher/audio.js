/**
 * Web Audio API Engine for Cryptographic Word Cipher
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
    playKey() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(700, c.currentTime);
        g.gain.setValueAtTime(0.08, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.04);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.04);
      } catch(e) {}
    },
    playHint() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, c.currentTime);
        osc.frequency.setValueAtTime(659.25, c.currentTime + 0.08);
        g.gain.setValueAtTime(0.15, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.2);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.2);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = c.createOscillator();
          const g = c.createGain();
          osc.frequency.setValueAtTime(freq, c.currentTime + i * 0.08);
          g.gain.setValueAtTime(0.2, c.currentTime + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + i * 0.08 + 0.3);
          osc.connect(g); g.connect(c.destination);
          osc.start(c.currentTime + i * 0.08);
          osc.stop(c.currentTime + i * 0.08 + 0.3);
        });
      } catch(e) {}
    }
  };
})(window);