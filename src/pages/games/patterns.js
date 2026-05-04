import { symbolKeys, renderSymbol } from '../../games/symbols.js';
import { shuffle, sample, pick } from '../../games/shuffle.js';
import { renderConfetti } from '../../games/confetti.js';
import { t } from '../../i18n.js';

const SETTINGS = {
  easy: { length: 4, units: [['A', 'B']], symbols: 2, rounds: 5, hideLast: true },
  medium: { length: 6, units: [['A', 'B'], ['A', 'A', 'B', 'B']], symbols: 3, rounds: 6, hideLast: false },
  hard: { length: 8, units: [['A', 'A', 'B'], ['A', 'B', 'C'], ['A', 'B', 'B', 'C']], symbols: 3, rounds: 7, hideLast: false },
};

const generateRound = (difficulty) => {
  const cfg = SETTINGS[difficulty];
  const pool = sample(symbolKeys, cfg.symbols);
  const unit = pick(cfg.units);
  const seq = [];
  for (let i = 0; i < cfg.length; i++) {
    const ch = unit[i % unit.length];
    const idx = ch.charCodeAt(0) - 65;
    seq.push(pool[idx % pool.length]);
  }
  const hiddenIdx = cfg.hideLast
    ? cfg.length - 1
    : Math.floor(Math.random() * (cfg.length - 1)) + 1;
  const correct = seq[hiddenIdx];
  const distractors = sample(pool.filter((s) => s !== correct), Math.min(2, pool.length - 1));
  const extra = symbolKeys.filter((s) => s !== correct && !distractors.includes(s));
  while (distractors.length < 2 && extra.length) {
    distractors.push(extra.shift());
  }
  return { seq, hiddenIdx, correct, options: shuffle([correct, ...distractors]) };
};

const renderDifficultyScreen = (lang) => `
  <section class="max-w-3xl mx-auto px-4 pt-6 pb-12">
    <a href="#/games" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
      ${t(lang, 'backToGames')}
    </a>
    <header class="text-center mb-8">
      <h1 class="font-display text-4xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'patternsTitle')}
      </h1>
      <p class="mt-2 text-lg text-islam-night/70 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'patternsSubtitle')}
      </p>
    </header>

    <h2 class="font-display text-xl font-semibold text-center mb-4 ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'chooseDifficulty')}
    </h2>
    <div class="grid gap-4 sm:grid-cols-3">
      <button data-difficulty="easy" class="card text-center p-6 hover:bg-emerald-50">
        <div class="text-5xl mb-2">😊</div>
        <div class="font-display text-lg font-bold ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'easy')}</div>
      </button>
      <button data-difficulty="medium" class="card text-center p-6 hover:bg-amber-50">
        <div class="text-5xl mb-2">🤔</div>
        <div class="font-display text-lg font-bold ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'medium')}</div>
      </button>
      <button data-difficulty="hard" class="card text-center p-6 hover:bg-rose-50">
        <div class="text-5xl mb-2">🔥</div>
        <div class="font-display text-lg font-bold ${lang === 'ar' ? 'arabic-text' : ''}">${t(lang, 'hard')}</div>
      </button>
    </div>
  </section>
`;

const cellClasses = 'aspect-square rounded-2xl bg-white shadow-soft flex items-center justify-center p-2';

const renderSequence = (round) => round.seq
  .map((sym, i) => {
    if (i === round.hiddenIdx) {
      return `<div class="${cellClasses} border-4 border-dashed border-islam-gold bg-cream">
        <span class="text-5xl text-islam-gold/70 font-bold">?</span>
      </div>`;
    }
    return `<div class="${cellClasses}"><div class="w-full h-full">${renderSymbol(sym)}</div></div>`;
  })
  .join('');

const renderOptions = (round) => round.options
  .map(
    (sym) => `
      <button data-option="${sym}" class="${cellClasses} hover:bg-emerald-50 transition cursor-pointer border-2 border-transparent hover:border-islam-green">
        <div class="w-full h-full">${renderSymbol(sym)}</div>
      </button>
    `,
  )
  .join('');

const renderRoundScreen = (state, lang) => {
  const cfg = SETTINGS[state.difficulty];
  const round = state.round;
  const seqCols = cfg.length <= 4 ? 'grid-cols-4' : cfg.length <= 6 ? 'grid-cols-6' : 'grid-cols-4 sm:grid-cols-8';
  return `
    <section class="max-w-4xl mx-auto px-4 pt-6 pb-12">
      <div class="flex items-center justify-between gap-3 mb-6">
        <button data-action="back" class="btn-ghost text-sm">
          ${t(lang, 'backToGames')}
        </button>
        <span class="chip">
          ${state.roundIndex + 1} / ${cfg.rounds} · ${t(lang, 'patternsScore')}: ${state.score}
        </span>
      </div>

      <h2 class="font-display text-xl font-semibold text-center mb-4 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'patternsSubtitle')}
      </h2>

      <div class="grid ${seqCols} gap-2 sm:gap-3 mb-8 max-w-3xl mx-auto" data-sequence>
        ${renderSequence(round)}
      </div>

      <div class="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto" data-options>
        ${renderOptions(round)}
      </div>

      <div class="mt-6 text-center min-h-[2rem]" data-feedback></div>
    </section>
  `;
};

const renderWinScreen = (state, lang) => {
  const cfg = SETTINGS[state.difficulty];
  return `
    <section class="max-w-3xl mx-auto px-4 pt-10 pb-20 relative">
      ${renderConfetti(48)}
      <div class="relative rounded-3xl bg-gradient-to-br from-sky-500 to-blue-700 p-12 shadow-soft text-white text-center">
        <div class="text-7xl mb-4">⭐</div>
        <h2 class="font-display text-3xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
          ${t(lang, 'patternsCorrect')}
        </h2>
        <p class="text-white/90 mb-6 text-xl">
          ${t(lang, 'patternsScore')}: <strong>${state.score} / ${cfg.rounds}</strong>
        </p>
        <div class="flex flex-wrap justify-center gap-3">
          <button data-action="restart" class="btn bg-white text-blue-700 hover:brightness-105">
            ↻ ${t(lang, 'memoryRestart')}
          </button>
          <button data-action="back" class="btn bg-white/20 text-white hover:bg-white/30">
            ${t(lang, 'backToGames')}
          </button>
        </div>
      </div>
    </section>
  `;
};

export const initPatterns = (container, lang) => {
  let state = {
    phase: 'difficulty',
    difficulty: null,
    roundIndex: 0,
    score: 0,
    round: null,
    locked: false,
  };

  const startGame = (difficulty) => {
    state = {
      phase: 'playing',
      difficulty,
      roundIndex: 0,
      score: 0,
      round: generateRound(difficulty),
      locked: false,
    };
    render();
  };

  const advanceRound = () => {
    const cfg = SETTINGS[state.difficulty];
    if (state.roundIndex + 1 >= cfg.rounds) {
      state.phase = 'won';
    } else {
      state.roundIndex += 1;
      state.round = generateRound(state.difficulty);
      state.locked = false;
    }
    render();
  };

  const handleOptionClick = (sym, btn) => {
    if (state.locked) return;
    if (sym === state.round.correct) {
      state.locked = true;
      state.score += 1;
      btn.classList.add('feedback-correct');
      btn.style.background = '#dcfce7';
      btn.style.borderColor = '#16a34a';
      // reveal in sequence
      const seqEl = container.querySelector('[data-sequence]');
      if (seqEl) {
        const slot = seqEl.children[state.round.hiddenIdx];
        if (slot) {
          slot.className = `${cellClasses} bg-emerald-50 border-2 border-emerald-500`;
          slot.innerHTML = `<div class="w-full h-full">${renderSymbol(state.round.correct)}</div>`;
        }
      }
      const feedback = container.querySelector('[data-feedback]');
      if (feedback) {
        feedback.innerHTML = `<span class="chip bg-emerald-500 text-white">${t(lang, 'patternsCorrect')}</span>`;
      }
      setTimeout(advanceRound, 1100);
    } else {
      btn.classList.add('feedback-wrong');
      btn.style.background = '#fee2e2';
      btn.style.borderColor = '#dc2626';
      btn.disabled = true;
      const feedback = container.querySelector('[data-feedback]');
      if (feedback) {
        feedback.innerHTML = `<span class="chip bg-rose-500 text-white">${t(lang, 'patternsTryAgain')}</span>`;
      }
      setTimeout(() => {
        btn.classList.remove('feedback-wrong');
        btn.style.background = '';
        btn.style.borderColor = '';
      }, 600);
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
      container.innerHTML = renderRoundScreen(state, lang);
      container.querySelectorAll('[data-option]').forEach((btn) => {
        btn.addEventListener('click', () => handleOptionClick(btn.dataset.option, btn));
      });
    }

    const restartBtn = container.querySelector('[data-action="restart"]');
    if (restartBtn) restartBtn.addEventListener('click', () => startGame(state.difficulty));
    const backBtn = container.querySelector('[data-action="back"]');
    if (backBtn) backBtn.addEventListener('click', goToDifficulty);
  };

  render();
};
