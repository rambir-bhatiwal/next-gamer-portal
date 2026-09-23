/**
 * Standalone Web Audio API Sound Engine
 * Module: turbo-pac-grid
 * Next Games/Game Isolated Micro-Environment
 * 100% royalty-free, native procedural audio synthesis.
 */
(function(window) {
  'use strict';

  let audioCtx = null;

  function getAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  // Fallback playTone if not defined specifically
  function defaultPlayTone(freq, type = 'sine', duration = 0.1, gainVal = 0.1) {
    try {
      const actx = getAudio();
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, actx.currentTime);
      gain.gain.setValueAtTime(gainVal, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + duration);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start();
      osc.stop(actx.currentTime + duration);
    } catch (e) {}
  }

  function initAudio() {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
      }

  function playPelletChime() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(chompToggle ? 480 : 380, audioCtx.currentTime);
          chompToggle = !chompToggle;
          gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.08);
        } catch(e) {}
      }

  function playPowerPellet() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, audioCtx.currentTime);
          osc.frequency.linearRampToValueAtTime(880, audioCtx.currentTime + 0.35);
          gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.35);
        } catch(e) {}
      }

  function playGhostEaten() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'square';
          osc.frequency.setValueAtTime(400, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.25);
          gain.gain.setValueAtTime(0.18, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.25);
        } catch(e) {}
      }

  function playPlayerDied() {
        if (!audioCtx) return;
        try {
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(600, audioCtx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.6);
          gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start();
          osc.stop(audioCtx.currentTime + 0.6);
        } catch(e) {}
      }

  function playLevelWin() {
        if (!audioCtx) return;
        try {
          const notes = [523.25, 659.25, 783.99, 1046.50];
          notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.12);
            gain.gain.setValueAtTime(0.15, audioCtx.currentTime + idx * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.12 + 0.3);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + idx * 0.12);
            osc.stop(audioCtx.currentTime + idx * 0.12 + 0.3);
          });
        } catch(e) {}
      }

  // Export clean API to window for game.js consumption
  window.getAudio = getAudio;
  window.getAudioCtx = getAudio;
  window.initAudio = getAudio;
  if (typeof playTone !== 'undefined') window.playTone = playTone;
  else window.playTone = defaultPlayTone;

  // Export specific functions if declared
  if (typeof playTone !== 'undefined') window.playTone = playTone;
  if (typeof playBlip !== 'undefined') window.playBlip = playBlip;
  if (typeof playSynth !== 'undefined') window.playSynth = playSynth;
  if (typeof playChime !== 'undefined') window.playChime = playChime;
  if (typeof playSqueal !== 'undefined') window.playSqueal = playSqueal;
  if (typeof playSplash !== 'undefined') window.playSplash = playSplash;
  if (typeof playBeep !== 'undefined') window.playBeep = playBeep;
  if (typeof playPing !== 'undefined') window.playPing = playPing;
  if (typeof playClack !== 'undefined') window.playClack = playClack;
  if (typeof playChirp !== 'undefined') window.playChirp = playChirp;
  if (typeof playRewindSound !== 'undefined') window.playRewindSound = playRewindSound;
  if (typeof playBoom !== 'undefined') window.playBoom = playBoom;
  if (typeof playLaunch !== 'undefined') window.playLaunch = playLaunch;
  if (typeof playLaserSound !== 'undefined') window.playLaserSound = playLaserSound;
  if (typeof playMushroomPop !== 'undefined') window.playMushroomPop = playMushroomPop;
  if (typeof playCentipedeHit !== 'undefined') window.playCentipedeHit = playCentipedeHit;
  if (typeof playBuggyHit !== 'undefined') window.playBuggyHit = playBuggyHit;
  if (typeof playStageClear !== 'undefined') window.playStageClear = playStageClear;
  if (typeof playPelletChime !== 'undefined') window.playPelletChime = playPelletChime;
  if (typeof playPowerPellet !== 'undefined') window.playPowerPellet = playPowerPellet;
  if (typeof playGhostEaten !== 'undefined') window.playGhostEaten = playGhostEaten;
  if (typeof playPlayerDied !== 'undefined') window.playPlayerDied = playPlayerDied;
  if (typeof playLevelWin !== 'undefined') window.playLevelWin = playLevelWin;

})(window);
