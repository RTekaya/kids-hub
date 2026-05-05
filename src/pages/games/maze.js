import { generateMaze, canMove, stepFor, findPath } from '../../games/maze-gen.js';
import { renderConfetti } from '../../games/confetti.js';
import { pick } from '../../games/shuffle.js';
import { MAZE_THEMES } from '../../data/maze-themes.js';
import { t } from '../../i18n.js';

const LEVEL_SIZES = [5, 7, 9, 11];
const STEP_MS = 110;

const wallClasses = (walls) => {
  const classes = [];
  if (walls.N) classes.push('wall-n');
  if (walls.S) classes.push('wall-s');
  if (walls.E) classes.push('wall-e');
  if (walls.W) classes.push('wall-w');
  return classes.join(' ');
};

const renderBoard = (state, lang) => {
  const { size, grid, pos, theme, trail } = state;
  const cells = [];
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const cls = wallClasses(grid[r][c].walls);
      const isPlayer = pos[0] === r && pos[1] === c;
      const isGoal = r === size - 1 && c === size - 1;
      const isTrail = !isPlayer && !isGoal && trail.has(`${r}-${c}`);
      const content = isPlayer ? theme.char : isGoal ? theme.goal : '';
      cells.push(
        `<div class="maze-cell ${cls} ${isGoal && !isPlayer ? 'is-goal' : ''} ${isTrail ? 'is-trail' : ''}" data-r="${r}" data-c="${c}" role="button" aria-label="cell-${r}-${c}">${content}</div>`,
      );
    }
  }
  return `
    <section class="max-w-3xl mx-auto px-3 sm:px-4 pt-3 pb-12">
      <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
        <a href="#/games" class="btn-ghost text-sm">${t(lang, 'backToGames')}</a>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="chip">${t(lang, 'level')} ${state.levelIndex + 1}/${LEVEL_SIZES.length}</span>
          <span class="chip" data-moves-chip>${t(lang, 'memoryMoves')}: <span data-moves>${state.moves}</span></span>
          <button data-action="restart" class="btn-ghost text-sm" title="${t(lang, 'memoryRestart')}">↻</button>
        </div>
      </div>

      <h2 class="font-display text-lg sm:text-xl text-center mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
        <span class="mr-1">${theme.char}</span>${theme.title[lang]}<span class="ml-1">${theme.goal}</span>
      </h2>

      <div
        class="maze-board"
        style="grid-template-columns: repeat(${size}, minmax(0, 1fr)); grid-template-rows: repeat(${size}, minmax(0, 1fr));"
        data-board
        dir="ltr"
      >
        ${cells.join('')}
      </div>

      <p class="text-center text-xs text-islam-night/50 mt-3 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'mazeHint')}
      </p>
    </section>
  `;
};

const renderLevelCompleteScreen = (state, lang) => {
  const isLast = state.levelIndex >= LEVEL_SIZES.length - 1;
  const heading = isLast
    ? t(lang, 'allLevelsComplete')
    : state.theme.won[lang];
  const primaryLabel = isLast ? t(lang, 'memoryRestart') : t(lang, 'nextLevel');
  const primaryAction = isLast ? 'restart-all' : 'next';
  return `
    <section class="max-w-3xl mx-auto px-4 pt-10 pb-20 relative">
      ${renderConfetti(48)}
      <div class="relative rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-12 shadow-soft text-white text-center">
        <div class="text-7xl mb-4">${isLast ? '🏆' : '🎉'}</div>
        <h2 class="font-display text-2xl sm:text-3xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
          ${heading}
        </h2>
        <p class="text-white/90 mb-4">
          ${t(lang, 'memoryMoves')}: <strong>${state.moves}</strong>
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <button data-action="${primaryAction}" class="btn bg-white text-orange-700 hover:brightness-105">
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

export const initMaze = (container, lang) => {
  let state = null;
  let abortCtl = null;

  const cellEl = (r, c) => container.querySelector(`.maze-cell[data-r="${r}"][data-c="${c}"]`);

  // Apply a single step in-place via DOM mutation (no full re-render → grid stays perfectly stable).
  const applyStep = (fromR, fromC, toR, toC) => {
    const fromEl = cellEl(fromR, fromC);
    const toEl = cellEl(toR, toC);
    if (fromEl) {
      fromEl.textContent = '';
      const isStartCell = fromR === 0 && fromC === 0;
      // The departed cell becomes part of the trail (unless it's the goal — but goal is bottom-right, can't be left)
      fromEl.classList.add('is-trail');
      // start cell gets trail too — that's fine
      void isStartCell;
    }
    if (toEl) {
      toEl.classList.remove('is-trail');
      const isGoal = toR === state.size - 1 && toC === state.size - 1;
      toEl.textContent = isGoal ? state.theme.char : state.theme.char;
      // hide the goal emoji while player stands on it
      if (isGoal) toEl.classList.remove('is-goal');
    }
    state.trail.add(`${fromR}-${fromC}`);
    state.pos = [toR, toC];
    state.moves += 1;
    const movesEl = container.querySelector('[data-moves]');
    if (movesEl) movesEl.textContent = String(state.moves);
  };

  const finishLevelIfReached = () => {
    if (state.pos[0] === state.size - 1 && state.pos[1] === state.size - 1) {
      state.phase = 'levelDone';
      setTimeout(render, 350);
      return true;
    }
    return false;
  };

  const move = (dir) => {
    if (!state || state.phase !== 'playing' || state.locked) return;
    const [r, c] = state.pos;
    if (!canMove(state.grid, r, c, dir)) return;
    const [dr, dc] = stepFor(dir);
    applyStep(r, c, r + dr, c + dc);
    finishLevelIfReached();
  };

  const animatePath = async (path) => {
    if (!path || path.length === 0) return;
    state.locked = true;
    for (const dir of path) {
      if (state.phase !== 'playing') break;
      const [r, c] = state.pos;
      const [dr, dc] = stepFor(dir);
      applyStep(r, c, r + dr, c + dc);
      if (finishLevelIfReached()) {
        state.locked = false;
        return;
      }
      await new Promise((res) => setTimeout(res, STEP_MS));
    }
    state.locked = false;
  };

  const handleCellClick = (r, c) => {
    if (!state || state.phase !== 'playing' || state.locked) return;
    const path = findPath(state.grid, state.pos, [r, c]);
    if (!path || path.length === 0) return;
    animatePath(path);
  };

  const attachGlobalControls = () => {
    abortCtl?.abort();
    abortCtl = new AbortController();
    const { signal } = abortCtl;

    window.addEventListener('keydown', (e) => {
      if (!container.isConnected) return;
      if (state?.phase !== 'playing') return;
      switch (e.key) {
        case 'ArrowUp':    move('N'); e.preventDefault(); break;
        case 'ArrowDown':  move('S'); e.preventDefault(); break;
        case 'ArrowLeft':  move('W'); e.preventDefault(); break;
        case 'ArrowRight': move('E'); e.preventDefault(); break;
      }
    }, { signal });

    let startX = 0, startY = 0, tracking = false;
    container.addEventListener('touchstart', (e) => {
      const tch = e.touches[0];
      if (!tch) return;
      startX = tch.clientX;
      startY = tch.clientY;
      tracking = true;
    }, { signal, passive: true });
    container.addEventListener('touchend', (e) => {
      if (!tracking) return;
      tracking = false;
      const tch = e.changedTouches[0];
      if (!tch) return;
      const dx = tch.clientX - startX;
      const dy = tch.clientY - startY;
      // Only treat as swipe if it's a real gesture (>32px). Otherwise let the click handler take over.
      if (Math.abs(dx) < 32 && Math.abs(dy) < 32) return;
      if (Math.abs(dx) > Math.abs(dy)) {
        move(dx > 0 ? 'E' : 'W');
      } else {
        move(dy > 0 ? 'S' : 'N');
      }
    }, { signal });
  };

  const startLevel = (levelIndex) => {
    const size = LEVEL_SIZES[levelIndex];
    state = {
      phase: 'playing',
      levelIndex,
      size,
      grid: generateMaze(size),
      theme: pick(MAZE_THEMES),
      pos: [0, 0],
      moves: 0,
      trail: new Set(),
      locked: false,
    };
    render();
    attachGlobalControls();
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
    container.querySelectorAll('.maze-cell').forEach((el) => {
      el.addEventListener('click', () => handleCellClick(Number(el.dataset.r), Number(el.dataset.c)));
    });
    const restart = container.querySelector('[data-action="restart"]');
    if (restart) restart.addEventListener('click', () => startLevel(state.levelIndex));
  };

  startLevel(0);
};
