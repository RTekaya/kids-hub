import { t } from '../i18n.js';

export const renderGames = (lang) => `
  <section class="max-w-3xl mx-auto px-4 pt-10 pb-20 text-center">
    <a href="#/" class="inline-flex items-center gap-1 text-sm font-semibold text-islam-night/60 hover:text-islam-green mb-6">
      ${t(lang, 'back')}
    </a>

    <div class="rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-12 shadow-soft text-white">
      <div class="flex justify-center mb-6">
        <svg viewBox="0 0 24 24" class="h-24 w-24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="6" y1="11" x2="10" y2="11"/>
          <line x1="8" y1="9" x2="8" y2="13"/>
          <line x1="15" y1="12" x2="15.01" y2="12"/>
          <line x1="18" y1="10" x2="18.01" y2="10"/>
          <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z"/>
        </svg>
      </div>
      <h1 class="font-display text-4xl font-bold mb-3 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'comingSoon')}
      </h1>
      <p class="text-lg text-white/90 ${lang === 'ar' ? 'arabic-text' : ''}">
        ${t(lang, 'comingSoonDesc')}
      </p>
    </div>
  </section>
`;
