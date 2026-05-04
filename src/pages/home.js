import { t } from '../i18n.js';

const tile = ({ href, title, desc, icon, gradient, badge, lang }) => `
  <a href="${href}" class="card group block overflow-hidden p-0">
    <div class="aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center relative">
      <div class="text-white/95 transform group-hover:scale-110 transition-transform duration-300">
        ${icon}
      </div>
      ${badge ? `<span class="absolute top-3 ${lang === 'ar' ? 'left-3' : 'right-3'} chip bg-white/90 text-islam-night">${badge}</span>` : ''}
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

const storiesIcon = `
  <svg viewBox="0 0 24 24" class="h-24 w-24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    <path d="M9 7h7M9 11h7"/>
  </svg>
`;

const gamesIcon = `
  <svg viewBox="0 0 24 24" class="h-24 w-24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="6" y1="11" x2="10" y2="11"/>
    <line x1="8" y1="9" x2="8" y2="13"/>
    <line x1="15" y1="12" x2="15.01" y2="12"/>
    <line x1="18" y1="10" x2="18.01" y2="10"/>
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z"/>
  </svg>
`;

export const renderHome = (lang) => `
  <section class="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
    <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night">
      ${t(lang, 'siteTitle')}
    </h1>
    <p class="mt-3 text-lg text-islam-night/70 max-w-2xl mx-auto ${lang === 'ar' ? 'arabic-text' : ''}">
      ${t(lang, 'homeIntro')}
    </p>
  </section>

  <section class="max-w-5xl mx-auto px-4 pb-12">
    <div class="grid gap-6 sm:grid-cols-2">
      ${tile({
        href: '#/stories',
        title: t(lang, 'storiesTitle'),
        desc: t(lang, 'storiesDesc'),
        icon: storiesIcon,
        gradient: 'from-emerald-400 to-emerald-600',
        lang,
      })}
      ${tile({
        href: '#/games',
        title: t(lang, 'gamesTitle'),
        desc: t(lang, 'gamesDesc'),
        icon: gamesIcon,
        gradient: 'from-amber-400 to-orange-500',
        badge: t(lang, 'comingSoon'),
        lang,
      })}
    </div>
  </section>
`;
