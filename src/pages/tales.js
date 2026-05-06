import { tales } from '../data/tales.js';
import { getIllustration } from '../illustrations.js';
import { t } from '../i18n.js';

const card = (tale, lang) => `
  <a href="#/story/${tale.id}"
     class="card group block overflow-hidden p-0">
    <div class="aspect-[16/10] bg-gradient-to-br ${tale.palette} overflow-hidden">
      ${getIllustration(tale.illustration)}
    </div>
    <div class="p-5">
      <h3 class="font-display text-2xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
        ${tale.title[lang]}
      </h3>
      <p class="${lang === 'ar' ? 'arabic-text' : ''} mt-1 text-islam-night/70">
        ${tale.subtitle[lang]}
      </p>
      <div class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-islam-green group-hover:gap-2 transition-all">
        ${t(lang, 'read')}
        <span aria-hidden="true">${lang === 'ar' ? '←' : '→'}</span>
      </div>
    </div>
  </a>
`;

export const renderTales = (lang) => `
  <section class="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
    <a href="#/stories" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
      ${t(lang, 'back')}
    </a>
    <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'talesTitle')}
    </h1>
    <p class="mt-3 text-lg text-islam-night/70 max-w-2xl mx-auto ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'talesIntro')}
    </p>
  </section>

  <section class="max-w-5xl mx-auto px-4 pb-12">
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${tales.map((tl) => card(tl, lang)).join('')}
    </div>
  </section>
`;
