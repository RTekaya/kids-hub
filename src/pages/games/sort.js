import { stories } from '../../data/stories.js';
import { getIllustration } from '../../illustrations.js';
import { shuffle, sample } from '../../games/shuffle.js';
import { renderConfetti } from '../../games/confetti.js';
import { t } from '../../i18n.js';

const CAT_LABEL_KEY = {
  water: 'catWater',
  desert: 'catDesert',
  garden: 'catGarden',
  sky: 'catSky',
};

// Niveaux progressifs : nb de catégories × nb de cartes par catégorie.
const LEVELS = [
  { perCat: 3, catCount: 2, fromCats: ['water', 'desert', 'garden', 'sky'] }, //  6 cartes
  { perCat: 3, catCount: 3, fromCats: ['water', 'desert', 'garden', 'sky'] }, //  9 cartes
  { perCat: 4, catCount: 3, fromCats: ['desert', 'garden', 'sky'] },          // 12 cartes (water n'a que 3)
];

const storiesByCategory = stories.reduce((acc, s) => {
  (s.categories || []).forEach((c) => {
    if (!acc[c]) acc[c] = [];
    acc[c].push(s);
  });
  return acc;
}, {});

const buildLevel = (levelIndex) => {
  const lv = LEVELS[levelIndex];
  const cats = sample(lv.fromCats, lv.catCount);
  const cards = cats.flatMap((cat) =>
    sample(storiesByCategory[cat], lv.perCat).map((s, i) => ({
      uid: `${s.id}-${i}-${Math.random().toString(36).slice(2, 5)}`,
      key: s.id,
      illustration: s.illustration,
      palette: s.palette,
      category: cat,
    })),
  );
  return { cats, cards: shuffle(cards) };
};

const renderCard = (card, options = {}) => {
  const { selected, status } = options;
  const ring = selected
    ? 'ring-4 ring-islam-gold'
    : status === 'correct'
      ? 'ring-4 ring-emerald-500'
      : status === 'wrong'
        ? 'ring-4 ring-rose-500'
        : '';
  return `
    <button data-uid="${card.uid}" class="sort-card relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft bg-gradient-to-br ${card.palette} ${ring} transition-all hover:-translate-y-0.5">
      ${getIllustration(card.illustration)}
    </button>
  `;
};

const renderBasket = (cat, cardsInBasket, lang, options = {}) => {
  const { highlight } = options;
  const ring = highlight ? 'ring-4 ring-islam-gold' : '';
  return `
    <div data-basket="${cat}" class="basket card flex flex-col gap-2 p-3 sm:p-4 cursor-pointer hover:bg-emerald-50/40 ${ring} min-h-[140px]">
      <div class="font-display font-bold text-center text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, CAT_LABEL_KEY[cat])}
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-4 gap-2 flex-1">
        ${cardsInBasket
          .map(
            (c) => `
              <button data-uid="${c.uid}" data-in-basket="1" class="sort-card aspect-[4/5] rounded-lg overflow-hidden shadow-sm bg-gradient-to-br ${c.palette} ${c.status === 'correct' ? 'ring-2 ring-emerald-500' : c.status === 'wrong' ? 'ring-2 ring-rose-500 animate-pulse' : ''}">
                ${getIllustration(c.illustration)}
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
};

const renderBoard = (state, lang) => {
  const inTray = state.cards.filter((c) => state.placements[c.uid] === 'tray');
  const cols = state.cats.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3';
  const trayCols = state.cards.length <= 6 ? 'grid-cols-3 sm:grid-cols-6'
                  : state.cards.length <= 9 ? 'grid-cols-3 sm:grid-cols-5'
                  : 'grid-cols-4 sm:grid-cols-6';
  const allPlaced = inTray.length === 0;
  return `
    <section class="max-w-5xl mx-auto px-4 pt-3 pb-12">
      <div class="flex items-center justify-between gap-2 mb-4 flex-wrap">
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
        ${t(lang, 'sortSubtitle')}
      </p>

      <div class="grid ${trayCols} gap-2 sm:gap-3 mb-6 min-h-[80px]" data-tray>
        ${inTray
          .map((c) => renderCard(c, { selected: c.uid === state.selectedUid }))
          .join('')}
      </div>

      <div class="grid grid-cols-1 ${cols} gap-3 sm:gap-4">
        ${state.cats
          .map((cat) => {
            const cardsHere = state.cards
              .filter((c) => state.placements[c.uid] === cat)
              .map((c) => ({ ...c, status: state.statuses[c.uid] }));
            return renderBasket(cat, cardsHere, lang, { highlight: !!state.selectedUid });
          })
          .join('')}
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
      <div class="relative rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 p-12 shadow-soft text-white text-center">
        <div class="text-7xl mb-4">${isLast ? '🏆' : '🎉'}</div>
        <h2 class="font-display text-3xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
          ${heading}
        </h2>
        <div class="flex flex-wrap justify-center gap-3 mt-4">
          <button data-action="${primaryAction}" class="btn bg-white text-purple-700 hover:brightness-105">
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

export const initSort = (container, lang) => {
  let state = null;

  const startLevel = (levelIndex) => {
    const { cats, cards } = buildLevel(levelIndex);
    const placements = {};
    cards.forEach((c) => { placements[c.uid] = 'tray'; });
    state = {
      phase: 'playing',
      levelIndex,
      cats,
      cards,
      placements,
      statuses: {},
      selectedUid: null,
      feedback: null,
      feedbackType: null,
      locked: false,
    };
    render();
  };

  const handleCardClick = (uid) => {
    if (state.locked) return;
    const placement = state.placements[uid];
    if (placement && placement !== 'tray') {
      // already in a basket — return to tray (unless locked correct)
      if (state.statuses[uid] === 'correct') return;
      state.placements[uid] = 'tray';
      delete state.statuses[uid];
      state.selectedUid = null;
      state.feedback = null;
      render();
      return;
    }
    // in tray — select / deselect
    state.selectedUid = state.selectedUid === uid ? null : uid;
    state.feedback = null;
    render();
  };

  const handleBasketClick = (cat) => {
    if (state.locked) return;
    if (!state.selectedUid) return;
    state.placements[state.selectedUid] = cat;
    delete state.statuses[state.selectedUid];
    state.selectedUid = null;
    state.feedback = null;
    render();
  };

  const handleVerify = () => {
    if (state.locked) return;
    const inTray = state.cards.filter((c) => state.placements[c.uid] === 'tray');
    if (inTray.length > 0) {
      state.feedback = t(lang, 'sortPlaceAll');
      state.feedbackType = 'error';
      render();
      return;
    }
    state.locked = true;
    let allCorrect = true;
    state.cards.forEach((c) => {
      const placedCat = state.placements[c.uid];
      const ok = placedCat === c.category;
      state.statuses[c.uid] = ok ? 'correct' : 'wrong';
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
        // Remove wrong cards back to tray, keep correct locked
        state.cards.forEach((c) => {
          if (state.statuses[c.uid] === 'wrong') {
            state.placements[c.uid] = 'tray';
            delete state.statuses[c.uid];
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
      const next = container.querySelector('[data-action="next"]');
      if (next) next.addEventListener('click', () => startLevel(state.levelIndex + 1));
      const restartAll = container.querySelector('[data-action="restart-all"]');
      if (restartAll) restartAll.addEventListener('click', () => startLevel(0));
      const back = container.querySelector('[data-action="back"]');
      if (back) back.addEventListener('click', () => { window.location.hash = '#/games'; });
      return;
    }

    container.innerHTML = renderBoard(state, lang);
    container.querySelectorAll('.sort-card').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCardClick(el.dataset.uid);
      });
    });
    container.querySelectorAll('[data-basket]').forEach((el) => {
      el.addEventListener('click', (e) => {
        // Only react if clicking the basket itself, not a card inside
        if (e.target.closest('.sort-card')) return;
        handleBasketClick(el.dataset.basket);
      });
    });
    const verifyBtn = container.querySelector('[data-action="verify"]');
    if (verifyBtn) verifyBtn.addEventListener('click', handleVerify);
    const restart = container.querySelector('[data-action="restart"]');
    if (restart) restart.addEventListener('click', () => startLevel(state.levelIndex));
  };

  startLevel(0);
};
