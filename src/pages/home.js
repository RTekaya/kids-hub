import { stories } from '../data/stories.js';
import { getIllustration } from '../illustrations.js';
import { t } from '../i18n.js';

const card = (story, lang) => `
  <a href="#/story/${story.id}"
     class="card group block overflow-hidden p-0">
    <div class="aspect-[16/10] bg-gradient-to-br ${story.palette} overflow-hidden">
      ${getIllustration(story.illustration)}
    </div>
    <div class="p-5">
      <div class="flex items-center justify-between gap-2 mb-2">
        <span class="chip">${String(story.order).padStart(2, '0')}</span>
        <span class="text-xs font-semibold text-islam-night/50">${story.honorific[lang]}</span>
      </div>
      <h3 class="font-display text-2xl font-bold text-islam-night">
        ${story.name[lang]}
      </h3>
      <p class="${lang === 'ar' ? 'arabic-text' : ''} mt-1 text-islam-night/70">
        ${story.title[lang]}
      </p>
      <div class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-islam-green group-hover:gap-2 transition-all">
        ${t(lang, 'read')}
        <span aria-hidden="true">${lang === 'ar' ? '←' : '→'}</span>
      </div>
    </div>
  </a>
`;

export const renderHome = (lang) => `
  <section class="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
    <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night">
      ${t(lang, 'siteTitle')}
    </h1>
    <p class="mt-3 text-lg text-islam-night/70 max-w-2xl mx-auto ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'listIntro')}
    </p>
  </section>

  <section class="max-w-5xl mx-auto px-4 pb-12">
    <h2 class="sr-only">${t(lang, 'listHeading')}</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${[...stories].sort((a, b) => a.order - b.order).map((s) => card(s, lang)).join('')}
    </div>
  </section>
`;
