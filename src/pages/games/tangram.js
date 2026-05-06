import { shuffle, pick } from '../../games/shuffle.js';
import { renderConfetti } from '../../games/confetti.js';
import { t } from '../../i18n.js';

const COLOR_HEX = {
  green: '#3F8E5C',
  gold:  '#D4A24C',
  sky:   '#7CC0E8',
  rose:  '#EC4899',
};

const renderShape = (shape, color) => {
  const c = COLOR_HEX[color];
  switch (shape) {
    case 'square':
      return `<svg viewBox="0 0 64 64" class="w-full h-full"><rect x="10" y="10" width="44" height="44" rx="4" fill="${c}"/></svg>`;
    case 'circle':
      return `<svg viewBox="0 0 64 64" class="w-full h-full"><circle cx="32" cy="32" r="22" fill="${c}"/></svg>`;
    case 'diamond':
      return `<svg viewBox="0 0 64 64" class="w-full h-full"><path d="M32 6 L58 32 L32 58 L6 32 Z" fill="${c}"/></svg>`;
    case 'triangle-up':
      return `<svg viewBox="0 0 64 64" class="w-full h-full"><path d="M32 8 L58 56 L6 56 Z" fill="${c}"/></svg>`;
    case 'triangle-down':
      return `<svg viewBox="0 0 64 64" class="w-full h-full"><path d="M32 56 L58 8 L6 8 Z" fill="${c}"/></svg>`;
    case 'star':
      return `<svg viewBox="0 0 64 64" class="w-full h-full"><path d="M32 6 L39 25 L60 26 L43 39 L49 59 L32 47 L15 59 L21 39 L4 26 L25 25 Z" fill="${c}"/></svg>`;
    default:
      return '';
  }
};

const LEVELS = [
  { size: 3, shapes: ['square', 'circle', 'triangle-up'],                                        colors: ['green', 'gold'] },
  { size: 3, shapes: ['square', 'circle', 'triangle-up', 'triangle-down'],                       colors: ['green', 'gold', 'sky'] },
  { size: 4, shapes: ['square', 'circle', 'triangle-up', 'triangle-down', 'diamond', 'star'],    colors: ['green', 'gold', 'sky', 'rose'] },
];

const generatePattern = (lvl) => {
  const cells = [];
  for (let i = 0; i < lvl.size * lvl.size; i++) {
    cells.push({ shape: pick(lvl.shapes), color: pick(lvl.colors) });
  }
  return cells;
};

const renderTargetGrid = (state) => {
  const lvl = LEVELS[state.levelIndex];
  return state.target.map((p) => `
    <div class="tangram-cell">
      ${renderShape(p.shape, p.color)}
    </div>
  `).join('');
};

const renderPlayerGrid = (state) => {
  const lvl = LEVELS[state.levelIndex];
  return state.player.map((p, i) => {
    if (!p) {
      return `<div class="tangram-cell tangram-empty" data-cell="${i}" role="button"></div>`;
    }
    const status = state.statuses[i];
    const ringClass = status === 'correct'
      ? 'ring-4 ring-emerald-500'
      : status === 'wrong'
        ? 'ring-4 ring-rose-500'
        : '';
    return `
      <div class="tangram-cell ${ringClass}" data-cell="${i}" data-placed="1" role="button">
        ${renderShape(p.shape, p.color)}
      </div>
    `;
  }).join('');
};

const renderPalette = (state) => {
  return state.palette.map((p, i) => {
    if (!p) return `<div class="tangram-piece-slot opacity-30"></div>`;
    const sel = state.selectedPaletteIdx === i ? 'ring-4 ring-islam-gold scale-105' : '';
    return `
      <button class="tangram-piece-slot ${sel}" data-palette="${i}">
        ${renderShape(p.shape, p.color)}
      </button>
    `;
  }).join('');
};

const renderBoard = (state, lang) => {
  const lvl = LEVELS[state.levelIndex];
  const allPlaced = state.player.every(Boolean);
  const cols = `repeat(${lvl.size}, minmax(0, 1fr))`;
  const paletteCols = lvl.size <= 3 ? 'grid-cols-5 sm:grid-cols-9' : 'grid-cols-4 sm:grid-cols-8';
  return `
    <section class="max-w-5xl mx-auto px-3 sm:px-4 pt-3 pb-12">
      <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <a href="#/games" class="btn-ghost text-sm">${t(lang, 'backToGames')}</a>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="chip">${t(lang, 'level')} ${state.levelIndex + 1}/${LEVELS.length}</span>
          <button data-action="restart" class="btn-ghost text-sm" title="${t(lang, 'memoryRestart')}">↻</button>
          <button data-action="verify" class="btn-primary text-sm ${allPlaced ? '' : 'opacity-40 cursor-not-allowed'}" ${allPlaced ? '' : 'disabled'}>
            ${t(lang, 'sortVerify')}
          </button>
        </div>
      </div>

      <p class="text-center text-islam-night/70 mb-4 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'tangramSubtitle')}
      </p>

      <div class="grid gap-4 sm:grid-cols-2 mb-6">
        <div>
          <h3 class="font-display font-semibold text-center text-islam-night/70 mb-2 ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'tangramTarget')}</h3>
          <div class="tangram-grid mx-auto" style="grid-template-columns: ${cols}; grid-template-rows: ${cols};">
            ${renderTargetGrid(state)}
          </div>
        </div>
        <div>
          <h3 class="font-display font-semibold text-center text-islam-night/70 mb-2 ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'tangramYours')}</h3>
          <div class="tangram-grid mx-auto" style="grid-template-columns: ${cols}; grid-template-rows: ${cols};" data-player>
            ${renderPlayerGrid(state)}
          </div>
        </div>
      </div>

      <div class="border-t-2 border-dashed border-sand pt-4">
        <h3 class="font-display font-semibold text-center text-islam-night/70 mb-2 ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'tangramPalette')}</h3>
        <div class="grid ${paletteCols} gap-2 max-w-2xl mx-auto" data-palette-grid>
          ${renderPalette(state)}
        </div>
      </div>

      <div class="mt-4 text-center min-h-[2rem]" data-feedback>
        ${state.feedback ? `<span class="chip ${state.feedbackType === 'success' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}">${state.feedback}</span>` : ''}
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
      <div class="relative rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-12 shadow-soft text-white text-center">
        <div class="text-7xl mb-4">${isLast ? '🏆' : '🎉'}</div>
        <h2 class="font-display text-3xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
          ${heading}
        </h2>
        <div class="flex flex-wrap justify-center gap-3 mt-4">
          <button data-action="${primaryAction}" class="btn bg-white text-blue-700 hover:brightness-105">
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

export const initTangram = (container, lang) => {
  let state = null;

  const startLevel = (levelIndex) => {
    const lvl = LEVELS[levelIndex];
    const target = generatePattern(lvl);
    const palette = shuffle(target.map((p) => ({ ...p })));
    state = {
      phase: 'playing',
      levelIndex,
      target,
      palette,
      player: new Array(target.length).fill(null),
      selectedPaletteIdx: null,
      statuses: {},
      feedback: null,
      feedbackType: null,
      locked: false,
    };
    render();
  };

  const handlePaletteClick = (idx) => {
    if (state.locked) return;
    if (!state.palette[idx]) return;
    state.selectedPaletteIdx = state.selectedPaletteIdx === idx ? null : idx;
    state.feedback = null;
    render();
  };

  const handleCellClick = (idx) => {
    if (state.locked) return;
    if (state.player[idx]) {
      // Tap placed → return to first empty palette slot
      const piece = state.player[idx];
      const slot = state.palette.findIndex((p) => p === null);
      if (slot >= 0) state.palette[slot] = piece;
      else state.palette.push(piece);
      state.player[idx] = null;
      delete state.statuses[idx];
      state.feedback = null;
      render();
      return;
    }
    if (state.selectedPaletteIdx === null) return;
    const piece = state.palette[state.selectedPaletteIdx];
    if (!piece) return;
    state.player[idx] = piece;
    state.palette[state.selectedPaletteIdx] = null;
    state.selectedPaletteIdx = null;
    state.feedback = null;
    render();
  };

  const handleVerify = () => {
    if (state.locked) return;
    if (!state.player.every(Boolean)) return;
    state.locked = true;
    let allCorrect = true;
    state.player.forEach((p, i) => {
      const target = state.target[i];
      const ok = p && p.shape === target.shape && p.color === target.color;
      state.statuses[i] = ok ? 'correct' : 'wrong';
      if (!ok) allCorrect = false;
    });
    state.feedback = allCorrect ? t(lang, 'sortAllCorrect') : t(lang, 'sortRetry');
    state.feedbackType = allCorrect ? 'success' : 'error';
    render();
    if (allCorrect) {
      setTimeout(() => {
        state.phase = 'levelDone';
        render();
      }, 1100);
    } else {
      setTimeout(() => {
        state.player.forEach((p, i) => {
          if (state.statuses[i] === 'wrong') {
            const slot = state.palette.findIndex((s) => s === null);
            if (slot >= 0) state.palette[slot] = p;
            else state.palette.push(p);
            state.player[i] = null;
            delete state.statuses[i];
          }
        });
        state.locked = false;
        render();
      }, 1500);
    }
  };

  const render = () => {
    if (state.phase === 'levelDone') {
      container.innerHTML = renderLevelCompleteScreen(state, lang);
      container.querySelector('[data-action="next"]')?.addEventListener('click', () => startLevel(state.levelIndex + 1));
      container.querySelector('[data-action="restart-all"]')?.addEventListener('click', () => startLevel(0));
      container.querySelector('[data-action="back"]')?.addEventListener('click', () => { window.location.hash = '#/games'; });
      return;
    }
    container.innerHTML = renderBoard(state, lang);
    container.querySelectorAll('[data-cell]').forEach((el) => {
      el.addEventListener('click', () => handleCellClick(Number(el.dataset.cell)));
    });
    container.querySelectorAll('[data-palette]').forEach((el) => {
      el.addEventListener('click', () => handlePaletteClick(Number(el.dataset.palette)));
    });
    container.querySelector('[data-action="verify"]')?.addEventListener('click', handleVerify);
    container.querySelector('[data-action="restart"]')?.addEventListener('click', () => startLevel(state.levelIndex));
  };

  startLevel(0);
};
