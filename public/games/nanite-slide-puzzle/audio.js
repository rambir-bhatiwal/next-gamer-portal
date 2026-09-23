/**
 * Web Audio API Engine for Nanite Slide Puzzle
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
    playSlide() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(360, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(540, c.currentTime + 0.05);
        g.gain.setValueAtTime(0.12, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.05);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.05);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
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