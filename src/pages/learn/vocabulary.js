import { VOCABULARY, VOCAB_CATEGORIES } from '../../data/vocabulary.js';
import { t } from '../../i18n.js';
import { cancelAllSpeech } from '../../audio/reader.js';

const CATEGORY_LABEL = {
  all:     'vocabAll',
  animals: 'vocabAnimals',
  family:  'vocabFamily',
  body:    'vocabBody',
  nature:  'vocabNature',
  food:    'vocabFood',
  colors:  'vocabColors',
};

const filterFor = (cat) => cat === 'all' ? VOCABULARY : VOCABULARY.filter((w) => w.category === cat);

const speak = (text, lang) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  cancelAllSpeech();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'ar' ? 'ar-SA' : 'fr-FR';
  u.rate = 0.85;
  u.pitch = 1.05;
  setTimeout(() => window.speechSynthesis.speak(u), 50);
};

const renderCategoryChips = (current, lang) => {
  const cats = ['all', ...VOCAB_CATEGORIES];
  return cats
    .map((cat) => {
      const active = cat === current;
      return `
        <button data-category="${cat}" class="chip ${active ? 'bg-islam-green text-white' : 'hover:bg-emerald-100'}">
          ${t(lang, CATEGORY_LABEL[cat])}
        </button>
      `;
    })
    .join('');
};

const renderCard = (word, state, lang) => {
  const front = state.flipped ? (lang === 'ar' ? 'fr' : 'ar') : lang;
  const text = word[front];
  const isAr = front === 'ar';
  return `
    <div class="vocab-card relative w-full max-w-sm mx-auto rounded-3xl bg-white shadow-soft p-8 cursor-pointer select-none" data-flip>
      <div class="text-center">
        <div class="text-8xl mb-6">${word.emoji}</div>
        <div class="font-display text-3xl sm:text-4xl font-bold text-islam-night ${isAr ? 'arabic-text' : ''}" dir="${isAr ? 'rtl' : 'ltr'}">
          ${text}
        </div>
        <button data-speak class="mt-5 inline-flex items-center gap-2 text-islam-green font-semibold hover:brightness-90" aria-label="${t(lang, 'audioListen')}">
          🔊 <span>${t(lang, 'audioListen')}</span>
        </button>
        <p class="mt-4 text-xs text-islam-night/40 ${lang === 'ar' ? 'arabic-text' : ''}">
          ${t(lang, 'vocabFlipHint')}
        </p>
      </div>
    </div>
  `;
};

const renderPage = (state, lang) => {
  const list = filterFor(state.category);
  const word = list[state.idx];
  if (!word) {
    return `
      <section class="max-w-3xl mx-auto px-4 pt-6 pb-12 text-center">
        <a href="#/learn" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
          ${t(lang, 'back')}
        </a>
        <p>—</p>
      </section>
    `;
  }
  return `
    <section class="max-w-3xl mx-auto px-4 pt-4 pb-12">
      <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <a href="#/learn" class="btn-ghost text-sm">${t(lang, 'back')}</a>
        <span class="chip">${state.idx + 1} / ${list.length}</span>
      </div>

      <h1 class="font-display text-3xl font-bold text-center text-islam-night mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'vocabularyTitle')}
      </h1>

      <div class="flex flex-wrap justify-center gap-2 mb-6" data-categories>
        ${renderCategoryChips(state.category, lang)}
      </div>

      <div class="mb-6">
        ${renderCard(word, state, lang)}
      </div>

      <div class="flex items-center justify-center gap-3">
        <button data-action="prev" class="btn-ghost">←</button>
        <span class="text-sm text-islam-night/60 ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'vocabNav')}</span>
        <button data-action="next" class="btn-primary">→</button>
      </div>
    </section>
  `;
};

export const initVocabulary = (container, lang) => {
  let state = {
    category: 'all',
    idx: 0,
    flipped: false,
  };

  const list = () => filterFor(state.category);

  const speakCurrent = () => {
    const w = list()[state.idx];
    if (!w) return;
    const front = state.flipped ? (lang === 'ar' ? 'fr' : 'ar') : lang;
    speak(w[front], front);
  };

  const render = () => {
    container.innerHTML = renderPage(state, lang);
    container.querySelectorAll('[data-category]').forEach((el) => {
      el.addEventListener('click', () => {
        state.category = el.dataset.category;
        state.idx = 0;
        state.flipped = false;
        render();
      });
    });
    const flipEl = container.querySelector('[data-flip]');
    if (flipEl) {
      flipEl.addEventListener('click', (e) => {
        // Avoid firing when clicking the inner speaker button
        if (e.target.closest('[data-speak]')) return;
        state.flipped = !state.flipped;
        render();
        speakCurrent();
      });
    }
    const speakBtn = container.querySelector('[data-speak]');
    if (speakBtn) speakBtn.addEventListener('click', (e) => { e.stopPropagation(); speakCurrent(); });
    const prev = container.querySelector('[data-action="prev"]');
    const next = container.querySelector('[data-action="next"]');
    if (prev) prev.addEventListener('click', () => {
      const items = list();
      state.idx = (state.idx - 1 + items.length) % items.length;
      state.flipped = false;
      render();
      speakCurrent();
    });
    if (next) next.addEventListener('click', () => {
      const items = list();
      state.idx = (state.idx + 1) % items.length;
      state.flipped = false;
      render();
      speakCurrent();
    });
  };

  render();
  // Auto-speak the first card on entry
  setTimeout(speakCurrent, 200);
};
