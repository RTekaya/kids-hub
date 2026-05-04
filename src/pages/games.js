import { t } from '../i18n.js';

const gameTile = ({ href, title, desc, icon, gradient, available, lang, badge }) => {
  const tag = available ? 'a' : 'div';
  const hrefAttr = available ? `href="${href}"` : '';
  const stateClasses = available
    ? 'card group block overflow-hidden p-0 cursor-pointer'
    : 'card block overflow-hidden p-0 opacity-70 cursor-not-allowed';
  return `
    <${tag} ${hrefAttr} class="${stateClasses}">
      <div class="aspect-[16/10] bg-gradient-to-br ${gradient} flex items-center justify-center relative">
        <div class="text-white/95 ${available ? 'group-hover:scale-110 transition-transform duration-300' : ''}">
          ${icon}
        </div>
        ${badge ? `<span class="absolute top-3 ${lang === 'ar' ? 'left-3' : 'right-3'} chip bg-white/90 text-islam-night">${badge}</span>` : ''}
      </div>
      <div class="p-5 ${lang === 'ar' ? 'text-right' : ''}">
        <h3 class="font-display text-xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
          ${title}
        </h3>
        <p class="${lang === 'ar' ? 'arabic-text text-sm' : 'text-sm'} mt-1 text-islam-night/70">
          ${desc}
        </p>
      </div>
    </${tag}>
  `;
};

const memoryIcon = `
  <svg viewBox="0 0 24 24" class="h-20 w-20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
    <rect x="3" y="4" width="7" height="9" rx="1.5"/>
    <rect x="14" y="4" width="7" height="9" rx="1.5"/>
    <rect x="3" y="15" width="7" height="5" rx="1.5"/>
    <rect x="14" y="15" width="7" height="5" rx="1.5"/>
  </svg>
`;

const patternsIcon = `
  <svg viewBox="0 0 24 24" class="h-20 w-20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
    <circle cx="5" cy="12" r="2"/>
    <rect x="9" y="10" width="4" height="4"/>
    <circle cx="16" cy="12" r="2"/>
    <path d="M19.5 9 L19.5 15 M19 12 L20 12" stroke-linecap="round"/>
  </svg>
`;

const sortIcon = `
  <svg viewBox="0 0 24 24" class="h-20 w-20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
    <path d="M3 6h18M6 12h12M9 18h6"/>
  </svg>
`;

const symmetryIcon = `
  <svg viewBox="0 0 24 24" class="h-20 w-20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
    <line x1="12" y1="3" x2="12" y2="21" stroke-dasharray="2 2"/>
    <path d="M4 8 L9 12 L4 16 Z"/>
    <path d="M20 8 L15 12 L20 16 Z"/>
  </svg>
`;

const mazeIcon = `
  <svg viewBox="0 0 24 24" class="h-20 w-20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h12M9 9v6M9 15h12M15 15v-3M15 12h6"/>
  </svg>
`;

export const renderGames = (lang) => {
  const soon = t(lang, 'comingSoon');
  return `
    <section class="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
      <a href="#/" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-4">
        ${t(lang, 'back')}
      </a>
      <h1 class="font-display text-4xl sm:text-5xl font-bold text-islam-night ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'gamesTitle')}
      </h1>
      <p class="mt-3 text-lg text-islam-night/70 max-w-2xl mx-auto ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'gamesIntro')}
      </p>
    </section>

    <section class="max-w-5xl mx-auto px-4 pb-12">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        ${gameTile({
          href: '#/games/memory',
          title: t(lang, 'memoryTitle'),
          desc: t(lang, 'memoryDesc'),
          icon: memoryIcon,
          gradient: 'from-emerald-400 to-emerald-600',
          available: true,
          lang,
        })}
        ${gameTile({
          href: '#/games/patterns',
          title: t(lang, 'patternsTitle'),
          desc: t(lang, 'patternsDesc'),
          icon: patternsIcon,
          gradient: 'from-sky-400 to-blue-600',
          available: true,
          lang,
        })}
        ${gameTile({
          href: '#/games/sort',
          title: t(lang, 'sortTitle'),
          desc: t(lang, 'sortDesc'),
          icon: sortIcon,
          gradient: 'from-violet-400 to-purple-600',
          available: false,
          badge: soon,
          lang,
        })}
        ${gameTile({
          href: '#/games/symmetry',
          title: t(lang, 'symmetryTitle'),
          desc: t(lang, 'symmetryDesc'),
          icon: symmetryIcon,
          gradient: 'from-pink-400 to-rose-600',
          available: false,
          badge: soon,
          lang,
        })}
        ${gameTile({
          href: '#/games/maze',
          title: t(lang, 'mazeTitle'),
          desc: t(lang, 'mazeDesc'),
          icon: mazeIcon,
          gradient: 'from-amber-400 to-orange-500',
          available: false,
          badge: soon,
          lang,
        })}
      </div>
    </section>
  `;
};
