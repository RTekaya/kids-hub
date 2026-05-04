import { findStory } from '../data/stories.js';
import { getIllustration } from '../illustrations.js';
import { t } from '../i18n.js';

const paragraphs = (list, lang) =>
  list
    .map(
      (p) =>
        `<p class="${lang === 'ar' ? 'arabic-text text-xl' : 'text-lg leading-relaxed'} mb-4 text-islam-night/85">${p}</p>`,
    )
    .join('');

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

  return `
    <article class="max-w-3xl mx-auto px-4 pt-6 pb-12">
      <a href="#/stories" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
        ${t(lang, 'backToStories')}
      </a>

      <div class="rounded-3xl overflow-hidden shadow-soft bg-gradient-to-br ${story.palette} aspect-[16/9] mb-6">
        ${getIllustration(story.illustration)}
      </div>

      <header class="mb-6">
        <span class="chip mb-3">${String(story.order).padStart(2, '0')} / ${t(lang, 'siteTitle')}</span>
        <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night">
          ${story.name[lang]}
          <span class="block text-base font-medium text-islam-night/50 mt-1">${story.honorific[lang]}</span>
        </h1>
        <p class="${lang === 'ar' ? 'arabic-text' : ''} mt-2 text-xl text-islam-night/70">
          ${story.title[lang]} — <em class="text-islam-night/50">${story.subtitle[lang]}</em>
        </p>
      </header>

      <div class="${lang === 'ar' ? 'text-right' : 'text-left'}">
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
