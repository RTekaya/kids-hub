import { t } from '../i18n.js';

export const renderHeader = (lang) => `
  <header class="sticky top-0 z-30 backdrop-blur bg-cream/80 border-b border-sand">
    <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
      <a href="#/" class="flex items-center gap-3 group">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-islam-green text-white shadow-soft group-hover:scale-105 transition">
          <svg viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor"><path d="M12 2l2.6 6.5L22 9l-5.5 4.4L18.5 21 12 17l-6.5 4 2-7.6L2 9l7.4-.5L12 2z"/></svg>
        </span>
        <span class="flex flex-col leading-tight">
          <span class="font-display text-lg sm:text-xl font-bold text-islam-night">${t(lang, 'siteTitle')}</span>
          <span class="text-xs text-islam-night/60">${t(lang, 'audience')}</span>
        </span>
      </a>
      <button
        id="lang-toggle"
        class="btn-ghost text-sm"
        aria-label="${t(lang, 'switchAria')}"
      >
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M5 5c4 4 10 4 14 0M5 19c4-4 10-4 14 0"/></svg>
        <span>${t(lang, 'switchTo')}</span>
      </button>
    </div>
  </header>
`;
