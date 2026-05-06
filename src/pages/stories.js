import { t } from '../i18n.js';

const tile = ({ href, title, desc, icon, gradient, lang }) => `
  <a href="${href}" class="card group block overflow-hidden p-0">
    <div class="aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center">
      <div class="text-white/95 group-hover:scale-110 transition-transform duration-300">
        ${icon}
      </div>
    </div>
    <div class="p-5 ${lang === 'ar' ? 'text-right' : ''}">
      <h3 class="font-display text-2xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
        ${title}
      </h3>
      <p class="${lang === 'ar' ? 'arabic-text' : ''} mt-1 text-islam-night/70">
        ${desc}
      </p>
    </div>
  </a>
`;

const prophetsIcon = `
  <svg viewBox="0 0 24 24" class="h-24 w-24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2 L14.5 8.5 L21 9 L16 13 L17.5 20 L12 16.5 L6.5 20 L8 13 L3 9 L9.5 8.5 Z"/>
    <path d="M12 2 v14.5"/>
  </svg>
`;

const talesIcon = `
  <svg viewBox="0 0 24 24" class="h-24 w-24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <path d="M9 7h7"/>
    <path d="M9 11h7"/>
    <circle cx="13" cy="15" r="1.5"/>
  </svg>
`;

export const renderStories = (lang) => `
  <section class="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
    <a href="#/" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
      ${t(lang, 'back')}
    </a>
    <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night">
      ${t(lang, 'storiesTitle')}
    </h1>
    <p class="mt-3 text-lg text-islam-night/70 max-w-2xl mx-auto ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'storiesHubIntro')}
    </p>
  </section>

  <section class="max-w-5xl mx-auto px-4 pb-12">
    <div class="grid gap-6 sm:grid-cols-2">
      ${tile({
        href: '#/stories/prophets',
        title: t(lang, 'prophetsTitle'),
        desc: t(lang, 'prophetsDesc'),
        icon: prophetsIcon,
        gradient: 'from-emerald-400 to-emerald-600',
        lang,
      })}
      ${tile({
        href: '#/stories/tales',
        title: t(lang, 'talesTitle'),
        desc: t(lang, 'talesDesc'),
        icon: talesIcon,
        gradient: 'from-rose-400 to-pink-600',
        lang,
      })}
    </div>
  </section>
`;
