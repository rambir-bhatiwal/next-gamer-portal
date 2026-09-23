/**
 * Web Audio API Engine for Neuro-Link Soko-Bot
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
    playStep() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, c.currentTime);
        g.gain.setValueAtTime(0.08, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.04);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.04);
      } catch(e) {}
    },
    playPush() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(160, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(240, c.currentTime + 0.08);
        g.gain.setValueAtTime(0.15, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.08);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.08);
      } catch(e) {}
    },
    playDock() {
      try {
        const c = getCtx();
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, c.currentTime);
        g.gain.setValueAtTime(0.2, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
        osc.connect(g); g.connect(c.destination);
        osc.start(); osc.stop(c.currentTime + 0.15);
      } catch(e) {}
    },
    playVictory() {
      try {
        const c = getCtx();
        [440, 554.37, 659.25, 880].forEach((freq, i) => {
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