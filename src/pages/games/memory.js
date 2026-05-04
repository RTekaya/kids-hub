import { stories } from '../../data/stories.js';
import { getIllustration } from '../../illustrations.js';
import { shuffle, sample } from '../../games/shuffle.js';
import { renderConfetti } from '../../games/confetti.js';
import { t } from '../../i18n.js';

const DIFFICULTIES = {
  easy: { pairs: 6, cols: 'grid-cols-3 sm:grid-cols-4' },
  medium: { pairs: 10, cols: 'grid-cols-4 sm:grid-cols-5' },
  hard: { pairs: 12, cols: 'grid-cols-4 sm:grid-cols-6' },
};

const buildDeck = (pairCount) => {
  const picked = sample(stories, pairCount);
  const cards = picked.flatMap((s) => [
    { uid: `${s.id}-a`, key: s.id, illustration: s.illustration, palette: s.palette },
    { uid: `${s.id}-b`, key: s.id, illustration: s.illustration, palette: s.palette },
  ]);
  return shuffle(cards);
};

const renderDifficultyScreen = (lang) => `
  <section class="max-w-3xl mx-auto px-4 pt-6 pb-12">
    <a href="#/games" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
      ${t(lang, 'backToGames')}
    </a>
    <header class="text-center mb-8">
      <h1 class="font-display text-4xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'memoryTitle')}
      </h1>
      <p class="mt-2 text-lg text-islam-night/70 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'memorySubtitle')}
      </p>
    </header>

    <h2 class="font-display text-xl font-semibold text-center mb-4 ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'chooseDifficulty')}
    </h2>
    <div class="grid gap-4 sm:grid-cols-3">
      <button data-difficulty="easy" class="card text-center p-6 hover:bg-emerald-50">
        <div class="text-5xl mb-2">😊</div>
        <div class="font-display text-lg font-bold ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'easy')}</div>
        <div class="text-sm text-islam-night/60">6</div>
      </button>
      <button data-difficulty="medium" class="card text-center p-6 hover:bg-amber-50">
        <div class="text-5xl mb-2">🤔</div>
        <div class="font-display text-lg font-bold ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'medium')}</div>
        <div class="text-sm text-islam-night/60">10</div>
      </button>
      <button data-difficulty="hard" class="card text-center p-6 hover:bg-rose-50">
        <div class="text-5xl mb-2">🔥</div>
        <div class="font-display text-lg font-bold ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'hard')}</div>
        <div class="text-sm text-islam-night/60">12</div>
      </button>
    </div>
  </section>
`;

const renderCard = (card, idx) => `
  <div class="flip-card aspect-[4/5]" data-index="${idx}" data-key="${card.key}">
    <div class="flip-card-inner">
      <div class="flip-card-face flip-card-front bg-gradient-to-br from-islam-green to-emerald-700 text-white shadow-soft">
        <svg viewBox="0 0 24 24" class="h-12 w-12 opacity-90" fill="currentColor">
          <path d="M12 2l2.6 6.5L22 9l-5.5 4.4L18.5 21 12 17l-6.5 4 2-7.6L2 9l7.4-.5L12 2z"/>
        </svg>
      </div>
      <div class="flip-card-face flip-card-back bg-gradient-to-br ${card.palette} shadow-soft">
        ${getIllustration(card.illustration)}
      </div>
    </div>
  </div>
`;

const renderBoard = (state, lang) => {
  const diff = DIFFICULTIES[state.difficulty];
  return `
    <section class="max-w-5xl mx-auto px-4 pt-6 pb-12">
      <div class="flex items-center justify-between gap-3 mb-4">
        <button data-action="back" class="btn-ghost text-sm">
          ${t(lang, 'backToGames')}
        </button>
        <div class="flex items-center gap-3">
          <span class="chip">${t(lang, 'memoryMoves')}: <span data-moves>${state.moves}</span></span>
          <button data-action="restart" class="btn-ghost text-sm">↻ ${t(lang, 'memoryRestart')}</button>
        </div>
      </div>

      <div class="grid ${diff.cols} gap-3 sm:gap-4" data-board>
        ${state.deck.map((c, i) => renderCard(c, i)).join('')}
      </div>
    </section>
  `;
};

const renderWinScreen = (state, lang) => `
  <section class="max-w-3xl mx-auto px-4 pt-10 pb-20 relative">
    ${renderConfetti(48)}
    <div class="relative rounded-3xl bg-gradient-to-br from-islam-green to-emerald-700 p-12 shadow-soft text-white text-center">
      <div class="text-7xl mb-4">🎉</div>
      <h2 class="font-display text-3xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'memoryWin')}
      </h2>
      <p class="text-white/90 mb-6">
        ${t(lang, 'memoryMoves')}: <strong>${state.moves}</strong>
      </p>
      <div class="flex flex-wrap justify-center gap-3">
        <button data-action="restart" class="btn bg-white text-islam-green hover:brightness-105">
          ↻ ${t(lang, 'memoryRestart')}
        </button>
        <button data-action="back" class="btn bg-white/20 text-white hover:bg-white/30">
          ${t(lang, 'backToGames')}
        </button>
      </div>
    </div>
  </section>
`;

export const initMemory = (container, lang) => {
  let state = {
    phase: 'difficulty',
    difficulty: null,
    deck: [],
    flipped: [],
    matched: new Set(),
    moves: 0,
    locked: false,
  };

  const startGame = (difficulty) => {
    state = {
      phase: 'playing',
      difficulty,
      deck: buildDeck(DIFFICULTIES[difficulty].pairs),
      flipped: [],
      matched: new Set(),
      moves: 0,
      locked: false,
    };
    render();
  };

  const handleCardClick = (idx) => {
    if (state.locked) return;
    if (state.flipped.includes(idx)) return;
    if (state.matched.has(idx)) return;
    if (state.flipped.length === 2) return;

    state.flipped = [...state.flipped, idx];
    const cardEl = container.querySelector(`[data-index="${idx}"]`);
    if (cardEl) cardEl.classList.add('is-flipped');

    if (state.flipped.length === 2) {
      state.moves += 1;
      const movesEl = container.querySelector('[data-moves]');
      if (movesEl) movesEl.textContent = String(state.moves);

      const [a, b] = state.flipped;
      if (state.deck[a].key === state.deck[b].key) {
        state.matched.add(a);
        state.matched.add(b);
        const aEl = container.querySelector(`[data-index="${a}"]`);
        const bEl = container.querySelector(`[data-index="${b}"]`);
        if (aEl) aEl.classList.add('is-matched');
        if (bEl) bEl.classList.add('is-matched');
        state.flipped = [];
        if (state.matched.size === state.deck.length) {
          state.phase = 'won';
          setTimeout(render, 500);
        }
      } else {
        state.locked = true;
        setTimeout(() => {
          const aEl = container.querySelector(`[data-index="${a}"]`);
          const bEl = container.querySelector(`[data-index="${b}"]`);
          if (aEl) aEl.classList.remove('is-flipped');
          if (bEl) bEl.classList.remove('is-flipped');
          state.flipped = [];
          state.locked = false;
        }, 800);
      }
    }
  };

  const goToDifficulty = () => {
    state.phase = 'difficulty';
    render();
  };

  const render = () => {
    if (state.phase === 'difficulty') {
      container.innerHTML = renderDifficultyScreen(lang);
      container.querySelectorAll('[data-difficulty]').forEach((btn) => {
        btn.addEventListener('click', () => startGame(btn.dataset.difficulty));
      });
      return;
    }

    if (state.phase === 'won') {
      container.innerHTML = renderWinScreen(state, lang);
    } else {
      container.innerHTML = renderBoard(state, lang);
      container.querySelectorAll('.flip-card').forEach((el) => {
        el.addEventListener('click', () => handleCardClick(Number(el.dataset.index)));
      });
    }

    const restartBtn = container.querySelector('[data-action="restart"]');
    if (restartBtn) restartBtn.addEventListener('click', () => startGame(state.difficulty));
    const backBtn = container.querySelector('[data-action="back"]');
    if (backBtn) backBtn.addEventListener('click', goToDifficulty);
  };

  render();
};
