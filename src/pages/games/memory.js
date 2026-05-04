import { stories } from '../../data/stories.js';
import { getIllustration } from '../../illustrations.js';
import { shuffle, sample } from '../../games/shuffle.js';
import { renderConfetti } from '../../games/confetti.js';
import { t } from '../../i18n.js';

// Niveaux progressifs : nombre de paires + grille mobile (portrait) et desktop.
const LEVELS = [
  { pairs: 4,  colsM: 4, rowsM: 2, colsD: 4, rowsD: 2 },  //  8 cartes
  { pairs: 6,  colsM: 3, rowsM: 4, colsD: 4, rowsD: 3 },  // 12 cartes
  { pairs: 8,  colsM: 4, rowsM: 4, colsD: 4, rowsD: 4 },  // 16 cartes
  { pairs: 10, colsM: 4, rowsM: 5, colsD: 5, rowsD: 4 },  // 20 cartes
  { pairs: 12, colsM: 4, rowsM: 6, colsD: 6, rowsD: 4 },  // 24 cartes
];

const buildDeck = (pairCount) => {
  const picked = sample(stories, pairCount);
  const cards = picked.flatMap((s) => [
    { uid: `${s.id}-a`, key: s.id, illustration: s.illustration, palette: s.palette },
    { uid: `${s.id}-b`, key: s.id, illustration: s.illustration, palette: s.palette },
  ]);
  return shuffle(cards);
};

const renderCard = (card, idx) => `
  <div class="flip-card" data-index="${idx}" data-key="${card.key}">
    <div class="flip-card-inner">
      <div class="flip-card-face flip-card-front bg-gradient-to-br from-islam-green to-emerald-700 text-white shadow-soft">
        <svg viewBox="0 0 24 24" class="h-1/2 max-h-12 w-auto opacity-90" fill="currentColor">
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
  const lvl = LEVELS[state.levelIndex];
  const styleVars = `--cols-m:${lvl.colsM};--rows-m:${lvl.rowsM};--cols-d:${lvl.colsD};--rows-d:${lvl.rowsD}`;
  return `
    <section class="memory-page max-w-5xl mx-auto px-3 sm:px-4 pt-3 pb-3">
      <div class="flex items-center justify-between gap-2 mb-3 flex-shrink-0 flex-wrap">
        <a href="#/games" class="btn-ghost text-sm">${t(lang, 'backToGames')}</a>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="chip">${t(lang, 'level')} ${state.levelIndex + 1}/${LEVELS.length}</span>
          <span class="chip">${t(lang, 'memoryMoves')}: <span data-moves>${state.moves}</span></span>
          <button data-action="restart" class="btn-ghost text-sm" title="${t(lang, 'memoryRestart')}">↻</button>
        </div>
      </div>

      <div class="memory-board" style="${styleVars}" data-board>
        ${state.deck.map((c, i) => renderCard(c, i)).join('')}
      </div>
    </section>
  `;
};

const renderLevelCompleteScreen = (state, lang) => {
  const isLast = state.levelIndex >= LEVELS.length - 1;
  const heading = isLast
    ? t(lang, 'allLevelsComplete')
    : t(lang, 'levelComplete').replace('{n}', String(state.levelIndex + 1));
  const primaryLabel = isLast ? t(lang, 'memoryRestart') : t(lang, 'nextLevel');
  const primaryAction = isLast ? 'restart-all' : 'next';
  return `
    <section class="max-w-3xl mx-auto px-4 pt-10 pb-20 relative">
      ${renderConfetti(48)}
      <div class="relative rounded-3xl bg-gradient-to-br from-islam-green to-emerald-700 p-12 shadow-soft text-white text-center">
        <div class="text-7xl mb-4">${isLast ? '🏆' : '🎉'}</div>
        <h2 class="font-display text-3xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
          ${heading}
        </h2>
        <p class="text-white/90 mb-6">
          ${t(lang, 'memoryMoves')}: <strong>${state.moves}</strong>
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <button data-action="${primaryAction}" class="btn bg-white text-islam-green hover:brightness-105">
            ${primaryLabel}
          </button>
          <button data-action="back" class="btn bg-white/20 text-white hover:bg-white/30">
            ${t(lang, 'backToGames')}
          </button>
        </div>
      </div>
    </section>
  `;
};

export const initMemory = (container, lang) => {
  let state = {
    phase: 'playing',
    levelIndex: 0,
    deck: [],
    flipped: [],
    matched: new Set(),
    moves: 0,
    locked: false,
  };

  const startLevel = (levelIndex) => {
    state = {
      phase: 'playing',
      levelIndex,
      deck: buildDeck(LEVELS[levelIndex].pairs),
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
          state.phase = 'levelDone';
          setTimeout(render, 600);
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

  const render = () => {
    if (state.phase === 'levelDone') {
      container.innerHTML = renderLevelCompleteScreen(state, lang);
      const next = container.querySelector('[data-action="next"]');
      if (next) next.addEventListener('click', () => startLevel(state.levelIndex + 1));
      const restartAll = container.querySelector('[data-action="restart-all"]');
      if (restartAll) restartAll.addEventListener('click', () => startLevel(0));
      const back = container.querySelector('[data-action="back"]');
      if (back) back.addEventListener('click', () => { window.location.hash = '#/games'; });
      return;
    }

    container.innerHTML = renderBoard(state, lang);
    container.querySelectorAll('.flip-card').forEach((el) => {
      el.addEventListener('click', () => handleCardClick(Number(el.dataset.index)));
    });
    const restart = container.querySelector('[data-action="restart"]');
    if (restart) restart.addEventListener('click', () => startLevel(state.levelIndex));
  };

  startLevel(0);
};
