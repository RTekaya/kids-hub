import { t } from '../i18n.js';

const tile = ({ href, title, desc, icon, gradient, lang }) => `
  <a href="${href}" class="card group block overflow-hidden p-0">
    <div class="aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center">
      <div class="text-white/95 group-hover:scale-110 transition-transform duration-300">
        ${icon}
      </div>
    </div>
    <div class="p-5 ${lang === 'ar' ? 'text-right' : ''}">
      <h3 class="font-display text-xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
        ${title}
      </h3>
      <p class="${lang === 'ar' ? 'arabic-text text-sm' : 'text-sm'} mt-1 text-islam-night/70">
        ${desc}
      </p>
    </div>
  </a>
`;

const vocabularyIcon = `
  <svg viewBox="0 0 24 24" class="h-20 w-20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
    <path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z"/>
    <path d="M4 4v12a4 4 0 0 0 4 4h12"/>
    <path d="M9 9h6M9 13h4"/>
  </svg>
`;

const calligraphyIcon = `
  <svg viewBox="0 0 24 24" class="h-20 w-20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="M2 2l7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>
`;

export const renderLearn = (lang) => `
  <section class="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
    <a href="#/" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
      ${t(lang, 'back')}
    </a>
    <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'learnTitle')}
    </h1>
    <p class="mt-3 text-lg text-islam-night/70 max-w-2xl mx-auto ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'learnIntro')}
    </p>
  </section>

  <section class="max-w-5xl mx-auto px-4 pb-12">
    <div class="grid gap-6 sm:grid-cols-2">
      ${tile({
        href: '#/learn/vocabulary',
        title: t(lang, 'vocabularyTitle'),
        desc: t(lang, 'vocabularyDesc'),
        icon: vocabularyIcon,
        gradient: 'from-teal-400 to-cyan-600',
        lang,
      })}
      ${tile({
        href: '#/learn/calligraphy',
        title: t(lang, 'calligraphyTitle'),
        desc: t(lang, 'calligraphyDesc'),
        icon: calligraphyIcon,
        gradient: 'from-fuchsia-400 to-purple-600',
        lang,
      })}
    </div>
  </section>
`;
