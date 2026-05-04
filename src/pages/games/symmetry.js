import { renderConfetti } from '../../games/confetti.js';
import { t } from '../../i18n.js';

const LEVELS = [
  { size: 4, density: 4,  color: '#3F8E5C' }, // green
  { size: 6, density: 7,  color: '#D4A24C' }, // gold
  { size: 8, density: 12, color: '#7CC0E8' }, // sky
];

const generatePattern = (size, density) => {
  const half = size / 2;
  const filled = new Set();
  let guard = 0;
  while (filled.size < density && guard < 200) {
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * half);
    filled.add(`${row}-${col}`);
    guard += 1;
  }
  return filled;
};

const mirrorCol = (size, col) => size - 1 - col;

const renderCell = (size, row, col, opts) => {
  const { isLeft, filled, color, status } = opts;
  const half = size / 2;
  const axisBorder = col === half ? 'border-l-2 border-dashed border-islam-gold' : '';
  const cursor = isLeft ? 'cursor-default' : 'cursor-pointer';
  const ringClass = status === 'correct'
    ? 'ring-2 ring-emerald-500'
    : status === 'wrong'
      ? 'ring-2 ring-rose-500'
      : '';
  const fill = filled
    ? `<span class="absolute inset-1 rounded-md" style="background:${color}"></span>`
    : '';
  return `
    <button
      data-row="${row}"
      data-col="${col}"
      data-side="${isLeft ? 'left' : 'right'}"
      class="symmetry-cell relative aspect-square rounded-md bg-white/70 hover:bg-white ${axisBorder} ${cursor} transition ${ringClass}"
      ${isLeft ? 'disabled' : ''}
      aria-label="${isLeft ? 'cell-left' : 'cell-right'}-${row}-${col}"
    >${fill}</button>
  `;
};

const renderGrid = (state) => {
  const lvl = LEVELS[state.levelIndex];
  const cells = [];
  for (let row = 0; row < lvl.size; row++) {
    for (let col = 0; col < lvl.size; col++) {
      const isLeft = col < lvl.size / 2;
      const filled = isLeft
        ? state.pattern.has(`${row}-${col}`)
        : state.userFilled.has(`${row}-${col}`);
      const status = isLeft ? null : state.statuses.get(`${row}-${col}`) || null;
      cells.push(renderCell(lvl.size, row, col, { isLeft, filled, color: lvl.color, status }));
    }
  }
  return cells.join('');
};

const renderBoard = (state, lang) => {
  const lvl = LEVELS[state.levelIndex];
  return `
    <section class="max-w-3xl mx-auto px-4 pt-3 pb-12">
      <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <a href="#/games" class="btn-ghost text-sm">${t(lang, 'backToGames')}</a>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="chip">${t(lang, 'level')} ${state.levelIndex + 1}/${LEVELS.length}</span>
          <button data-action="restart" class="btn-ghost text-sm" title="${t(lang, 'memoryRestart')}">↻</button>
          <button data-action="verify" class="btn-primary text-sm">${t(lang, 'symmetryVerify')}</button>
        </div>
      </div>

      <p class="text-center text-islam-night/70 mb-4 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'symmetrySubtitle')}
      </p>

      <div class="mx-auto p-2 rounded-2xl bg-cream/60 shadow-soft" style="max-width:min(90vw, 65vh);">
        <div
          class="grid gap-1 sm:gap-1.5"
          style="grid-template-columns: repeat(${lvl.size}, minmax(0, 1fr));"
          data-grid
        >
          ${renderGrid(state)}
        </div>
      </div>

      <div class="mt-4 text-center min-h-[2rem]" data-feedback>
        ${state.feedback ? `<span class="chip ${state.feedbackType === 'success' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}">${state.feedback}</span>` : `<span class="text-sm text-islam-night/60 ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'symmetryHint')}</span>`}
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
      <div class="relative rounded-3xl bg-gradient-to-br from-pink-500 to-rose-700 p-12 shadow-soft text-white text-center">
        <div class="text-7xl mb-4">${isLast ? '🏆' : '🎉'}</div>
        <h2 class="font-display text-3xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
          ${heading}
        </h2>
        <div class="flex flex-wrap justify-center gap-3 mt-4">
          <button data-action="${primaryAction}" class="btn bg-white text-rose-700 hover:brightness-105">
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

export const initSymmetry = (container, lang) => {
  let state = null;

  const startLevel = (levelIndex) => {
    const lvl = LEVELS[levelIndex];
    state = {
      phase: 'playing',
      levelIndex,
      pattern: generatePattern(lvl.size, lvl.density),
      userFilled: new Set(),
      statuses: new Map(),
      feedback: null,
      feedbackType: null,
      locked: false,
    };
    render();
  };

  const handleCellClick = (row, col) => {
    if (state.locked) return;
    const lvl = LEVELS[state.levelIndex];
    if (col < lvl.size / 2) return; // left side is read-only
    const key = `${row}-${col}`;
    if (state.userFilled.has(key)) state.userFilled.delete(key);
    else state.userFilled.add(key);
    state.statuses.delete(key);
    state.feedback = null;
    render();
  };

  const handleVerify = () => {
    if (state.locked) return;
    const lvl = LEVELS[state.levelIndex];
    let allCorrect = true;
    state.statuses = new Map();
    for (let row = 0; row < lvl.size; row++) {
      for (let col = lvl.size / 2; col < lvl.size; col++) {
        const key = `${row}-${col}`;
        const expected = state.pattern.has(`${row}-${mirrorCol(lvl.size, col)}`);
        const actual = state.userFilled.has(key);
        if (expected === actual) {
          if (expected) state.statuses.set(key, 'correct');
          // empty + empty: no marker needed
        } else {
          state.statuses.set(key, 'wrong');
          allCorrect = false;
        }
      }
    }
    if (allCorrect) {
      state.feedback = t(lang, 'symmetryPerfect');
      state.feedbackType = 'success';
      state.locked = true;
      render();
      setTimeout(() => {
        state.phase = 'levelDone';
        render();
      }, 1100);
    } else {
      state.feedback = t(lang, 'symmetryAlmost');
      state.feedbackType = 'error';
      render();
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
    container.querySelectorAll('.symmetry-cell').forEach((el) => {
      el.addEventListener('click', () => {
        handleCellClick(Number(el.dataset.row), Number(el.dataset.col));
      });
    });
    const verify = container.querySelector('[data-action="verify"]');
    if (verify) verify.addEventListener('click', handleVerify);
    const restart = container.querySelector('[data-action="restart"]');
    if (restart) restart.addEventListener('click', () => startLevel(state.levelIndex));
  };

  startLevel(0);
};
