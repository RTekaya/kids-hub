import { findStory, isProphetStory } from '../data/stories.js';
import { getIllustration } from '../illustrations.js';
import { t } from '../i18n.js';
import { StoryReader, ttsSupported } from '../audio/reader.js';

const paragraphs = (list, lang) =>
  list
    .map(
      (p, i) =>
        `<p data-para-idx="${i}" class="story-paragraph ${lang === 'ar' ? 'arabic-text text-xl' : 'text-lg leading-relaxed'} mb-4 text-islam-night/85 cursor-pointer rounded-lg px-2 -mx-2 py-1 transition">${p}</p>`,
    )
    .join('');

const audioBar = (lang) => {
  if (!ttsSupported()) return '';
  return `
    <div class="audio-bar flex items-center gap-2 my-5 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100" data-audio-bar>
      <button data-audio-action="play" class="btn-primary text-sm" aria-label="${t(lang, 'audioListen')}">
        <span data-audio-icon>▶</span>
        <span data-audio-label>${t(lang, 'audioListen')}</span>
      </button>
      <button data-audio-action="stop" class="btn-ghost text-sm hidden" data-audio-stop>
        ⏹
      </button>
      <span class="text-xs text-islam-night/60 ml-auto ${lang === 'ar' ? 'arabic-text' : ''}" data-audio-status>
        ${t(lang, 'audioHint')}
      </span>
    </div>
  `;
};

export const renderStory = (id, lang) => {
  const story = findStory(id);
  if (!story) {
    return `
      <section class="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 class="font-display text-3xl font-bold mb-4">${t(lang, 'notFound')}</h1>
        <a href="#/stories" class="btn-primary">${t(lang, 'backToStories')}</a>
      </section>
    `;
  }

  const isProphet = isProphetStory(story);
  const backHref = isProphet ? '#/stories/prophets' : '#/stories/tales';
  const backLabel = isProphet ? t(lang, 'backToStories') : t(lang, 'backToTales');

  const header = isProphet
    ? `
      <header class="mb-2">
        <span class="chip mb-3">${String(story.order).padStart(2, '0')} / ${t(lang, 'siteTitle')}</span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night">
          ${story.name[lang]}
          <span class="block text-base font-medium text-islam-night/50 mt-1">${story.honorific[lang]}</span>
        </h1>
        <p class="${lang === 'ar' ? 'arabic-text' : ''} mt-2 text-xl text-islam-night/70">
          ${story.title[lang]} — <em class="text-islam-night/50">${story.subtitle[lang]}</em>
        </p>
      </header>
    `
    : `
      <header class="mb-2">
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
          ${story.title[lang]}
        </h1>
        <p class="${lang === 'ar' ? 'arabic-text' : ''} mt-2 text-xl text-islam-night/70">
          ${story.subtitle[lang]}
        </p>
      </header>
    `;

  return `
    <article class="max-w-3xl mx-auto px-4 pt-6 pb-12" data-story-id="${id}">
      <a href="${backHref}" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
        ${backLabel}
      </a>

      <div class="rounded-3xl overflow-hidden shadow-soft bg-gradient-to-br ${story.palette} aspect-[16/9] mb-6">
        ${getIllustration(story.illustration)}
      </div>

      ${header}

      ${audioBar(lang)}

      <div class="${lang === 'ar' ? 'text-right' : 'text-left'}" data-paragraphs>
        ${paragraphs(story.paragraphs[lang], lang)}
      </div>

      <aside class="mt-8 rounded-2xl border-2 border-dashed border-islam-green/40 bg-emerald-50/60 p-5">
        <div class="flex items-center gap-2 mb-2">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-full ${story.accent} text-white">
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M12 2l2.6 6.5L22 9l-5.5 4.4L18.5 21 12 17l-6.5 4 2-7.6L2 9l7.4-.5L12 2z"/></svg>
          </span>
          <h2 class="font-display font-bold text-lg">${t(lang, 'moralTitle')}</h2>
        </div>
        <p class="${lang === 'ar' ? 'arabic-text text-lg' : ''} text-islam-night/85">
          ${story.moral[lang]}
        </p>
      </aside>
    </article>
  `;
};

export const mountStoryAudio = (container, id, lang) => {
  if (!ttsSupported()) return null;
  const story = findStory(id);
  if (!story) return null;

  const reader = new StoryReader(story.paragraphs[lang], lang);

  const playBtn = container.querySelector('[data-audio-action="play"]');
  const stopBtn = container.querySelector('[data-audio-action="stop"]');
  const iconEl = container.querySelector('[data-audio-icon]');
  const labelEl = container.querySelector('[data-audio-label]');
  const statusEl = container.querySelector('[data-audio-status]');
  const paragraphEls = Array.from(container.querySelectorAll('[data-para-idx]'));

  const updateUI = ({ state, idx }) => {
    if (state === 'playing') {
      iconEl.textContent = '⏸';
      labelEl.textContent = t(lang, 'audioPause');
      stopBtn.classList.remove('hidden');
      statusEl.textContent = `${t(lang, 'audioParagraph')} ${idx + 1} / ${story.paragraphs[lang].length}`;
    } else if (state === 'paused') {
      iconEl.textContent = '▶';
      labelEl.textContent = t(lang, 'audioResume');
      stopBtn.classList.remove('hidden');
      statusEl.textContent = t(lang, 'audioPaused');
    } else {
      iconEl.textContent = '▶';
      labelEl.textContent = t(lang, 'audioListen');
      stopBtn.classList.add('hidden');
      statusEl.textContent = t(lang, 'audioHint');
    }
    paragraphEls.forEach((p) => {
      p.classList.toggle('is-active', state === 'playing' && Number(p.dataset.paraIdx) === idx);
    });
  };

  reader.onChange = updateUI;

  playBtn?.addEventListener('click', () => {
    if (reader.state === 'playing') reader.pause();
    else reader.play();
  });
  stopBtn?.addEventListener('click', () => reader.stop());
  paragraphEls.forEach((p) => {
    p.addEventListener('click', () => reader.play(Number(p.dataset.paraIdx)));
  });

  return reader;
};
