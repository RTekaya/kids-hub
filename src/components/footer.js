import { t } from '../i18n.js';

export const renderFooter = (lang) => `
  <footer class="mt-16 border-t border-sand bg-white/40">
    <div class="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-islam-night/60">
      ${t(lang, 'footer')}
    </div>
  </footer>
`;
