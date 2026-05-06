import { ARABIC_LETTERS } from '../../data/letters.js';
import { t } from '../../i18n.js';
import { cancelAllSpeech } from '../../audio/reader.js';

const speak = (text) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  cancelAllSpeech();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ar-SA';
  u.rate = 0.8;
  setTimeout(() => window.speechSynthesis.speak(u), 50);
};

const renderPage = (state, lang) => {
  const item = ARABIC_LETTERS[state.idx];
  return `
    <section class="max-w-3xl mx-auto px-4 pt-4 pb-12">
      <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <a href="#/learn" class="btn-ghost text-sm">${t(lang, 'back')}</a>
        <span class="chip">${state.idx + 1} / ${ARABIC_LETTERS.length}</span>
      </div>

      <h1 class="font-display text-3xl font-bold text-center text-islam-night mb-2 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'calligraphyTitle')}
      </h1>
      <p class="text-center text-islam-night/70 mb-4 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'calligraphyHint')}
      </p>

      <div class="calligraphy-stage relative mx-auto rounded-3xl bg-white shadow-soft border-2 border-sand">
        <div class="calligraphy-guide absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span dir="rtl">${item.letter}</span>
        </div>
        <canvas class="calligraphy-canvas absolute inset-0 w-full h-full" data-canvas></canvas>
      </div>

      <div class="mt-5 text-center">
        <div class="text-2xl font-bold mb-1">
          <span dir="rtl" class="arabic-text">${item.name.ar}</span>
          <span class="mx-2 text-islam-night/40">·</span>
          <span>${item.name.fr}</span>
        </div>
      </div>

      <div class="flex items-center justify-center gap-2 mt-6 flex-wrap">
        <button data-action="prev" class="btn-ghost">←</button>
        <button data-action="speak" class="btn-ghost">🔊 ${t(lang, 'audioListen')}</button>
        <button data-action="clear" class="btn-ghost">↻ ${t(lang, 'calligraphyClear')}</button>
        <button data-action="next" class="btn-primary">→</button>
      </div>
    </section>
  `;
};

export const initCalligraphy = (container, lang) => {
  let state = { idx: 0 };
  let ctx = null;
  let canvas = null;

  const setupCanvas = () => {
    canvas = container.querySelector('[data-canvas]');
    if (!canvas) return;
    // Match canvas internal pixel size to its visual size for crisp lines
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#3F8E5C';

    let drawing = false;
    let lastX = 0, lastY = 0;

    const getPos = (e) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    canvas.addEventListener('pointerdown', (e) => {
      drawing = true;
      const { x, y } = getPos(e);
      lastX = x; lastY = y;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#3F8E5C';
      ctx.fill();
      try { canvas.setPointerCapture(e.pointerId); } catch (_) {}
    });
    canvas.addEventListener('pointermove', (e) => {
      if (!drawing) return;
      const { x, y } = getPos(e);
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastX = x; lastY = y;
    });
    const stop = () => { drawing = false; };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
    canvas.addEventListener('pointerleave', stop);
  };

  const clearCanvas = () => {
    if (!ctx || !canvas) return;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  };

  const goTo = (i) => {
    state.idx = (i + ARABIC_LETTERS.length) % ARABIC_LETTERS.length;
    render();
    speak(ARABIC_LETTERS[state.idx].name.ar);
  };

  const render = () => {
    container.innerHTML = renderPage(state, lang);
    setupCanvas();
    container.querySelector('[data-action="prev"]')?.addEventListener('click', () => goTo(state.idx - 1));
    container.querySelector('[data-action="next"]')?.addEventListener('click', () => goTo(state.idx + 1));
    container.querySelector('[data-action="clear"]')?.addEventListener('click', clearCanvas);
    container.querySelector('[data-action="speak"]')?.addEventListener('click', () => speak(ARABIC_LETTERS[state.idx].name.ar));
  };

  render();
  setTimeout(() => speak(ARABIC_LETTERS[state.idx].name.ar), 200);
};
