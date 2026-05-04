import { symbolKeys, renderSymbol } from '../../games/symbols.js';
import { shuffle, sample, pick } from '../../games/shuffle.js';
import { renderConfetti } from '../../games/confetti.js';
import { t } from '../../i18n.js';

const TOTAL_ROUNDS = 8;

// Difficulté progressive : plus on avance, plus la séquence est longue, plus
// l'unité est complexe, et plus le nombre de symboles différents augmente.
const roundConfig = (i) => {
  if (i < 2)  return { length: 4, symbols: 2, units: [['A', 'B']],                                    hideLast: true  };
  if (i < 4)  return { length: 6, symbols: 2, units: [['A', 'B'], ['A', 'A', 'B', 'B']],              hideLast: false };
  if (i < 6)  return { length: 6, symbols: 3, units: [['A', 'B', 'C'], ['A', 'A', 'B']],              hideLast: false };
  return         { length: 8, symbols: 3, units: [['A', 'B', 'C'], ['A', 'B', 'B', 'C']],            hideLast: false };
};

const generateRound = (i) => {
  const cfg = roundConfig(i);
  const pool = sample(symbolKeys, cfg.symbols);
  const unit = pick(cfg.units);
  const seq = [];
  for (let n = 0; n < cfg.length; n++) {
    const ch = unit[n % unit.length];
    const idx = ch.charCodeAt(0) - 65;
    seq.push(pool[idx % pool.length]);
  }
  const hiddenIdx = cfg.hideLast
    ? cfg.length - 1
    : Math.floor(Math.random() * (cfg.length - 1)) + 1;
  const correct = seq[hiddenIdx];
  const distractors = sample(pool.filter((s) => s !== correct), Math.min(2, pool.length - 1));
  const extra = symbolKeys.filter((s) => s !== correct && !distractors.includes(s));
  while (distractors.length < 2 && extra.length) distractors.push(extra.shift());
  return { seq, hiddenIdx, correct, options: shuffle([correct, ...distractors]), length: cfg.length };
};

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
  const round = state.round;
  const seqCols = round.length <= 4 ? 'grid-cols-4' : round.length <= 6 ? 'grid-cols-6' : 'grid-cols-4 sm:grid-cols-8';
  return `
    <section class="max-w-4xl mx-auto px-4 pt-4 pb-12">
      <div class="flex items-center justify-between gap-2 mb-5 flex-wrap">
        <a href="#/games" class="btn-ghost text-sm">${t(lang, 'backToGames')}</a>
        <div class="flex items-center gap-2 flex-wrap">
          <span class="chip">${t(lang, 'round')} ${state.roundIndex + 1}/${TOTAL_ROUNDS}</span>
          <span class="chip">${t(lang, 'patternsScore')}: ${state.score}</span>
        </div>
      </div>

      <h2 class="font-display text-lg sm:text-xl font-semibold text-center mb-4 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'patternsSubtitle')}
      </h2>

      <div class="grid ${seqCols} gap-2 sm:gap-3 mb-6 max-w-3xl mx-auto" data-sequence>
        ${renderSequence(round)}
      </div>

      <div class="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto" data-options>
        ${renderOptions(round)}
      </div>

      <div class="mt-5 text-center min-h-[2rem]" data-feedback></div>
    </section>
  `;
};

const renderWinScreen = (state, lang) => `
  <section class="max-w-3xl mx-auto px-4 pt-10 pb-20 relative">
    ${renderConfetti(48)}
    <div class="relative rounded-3xl bg-gradient-to-br from-sky-500 to-blue-700 p-12 shadow-soft text-white text-center">
      <div class="text-7xl mb-4">🏆</div>
      <h2 class="font-display text-3xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'patternsCorrect')}
      </h2>
      <p class="text-white/90 mb-6 text-xl">
        ${t(lang, 'patternsScore')}: <strong>${state.score} / ${TOTAL_ROUNDS}</strong>
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

export const initPatterns = (container, lang) => {
  let state = {
    phase: 'playing',
    roundIndex: 0,
    score: 0,
    round: null,
    locked: false,
  };

  const start = () => {
    state = {
      phase: 'playing',
      roundIndex: 0,
      score: 0,
      round: generateRound(0),
      locked: false,
    };
    render();
  };

  const advanceRound = () => {
    if (state.roundIndex + 1 >= TOTAL_ROUNDS) {
      state.phase = 'won';
    } else {
      state.roundIndex += 1;
      state.round = generateRound(state.roundIndex);
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

  const render = () => {
    if (state.phase === 'won') {
      container.innerHTML = renderWinScreen(state, lang);
    } else {
      container.innerHTML = renderRoundScreen(state, lang);
      container.querySelectorAll('[data-option]').forEach((btn) => {
        btn.addEventListener('click', () => handleOptionClick(btn.dataset.option, btn));
      });
    }
    const restart = container.querySelector('[data-action="restart"]');
    if (restart) restart.addEventListener('click', start);
    const back = container.querySelector('[data-action="back"]');
    if (back) back.addEventListener('click', () => { window.location.hash = '#/games'; });
  };

  start();
};
