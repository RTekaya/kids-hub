import './style.css';
import { renderHome } from './pages/home.js';
import { renderStories } from './pages/stories.js';
import { renderStory } from './pages/story.js';
import { renderGames } from './pages/games.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { applyLang, getLang, toggleLang } from './i18n.js';

const app = document.getElementById('app');

const parseRoute = () => {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { name: 'home' };
  const [section, id] = hash.split('/');
  if (section === 'stories') return { name: 'stories' };
  if (section === 'games') return { name: 'games' };
  if (section === 'story' && id) return { name: 'story', id };
  return { name: 'home' };
};

const renderPage = (route, lang) => {
  switch (route.name) {
    case 'stories': return renderStories(lang);
    case 'story': return renderStory(route.id, lang);
    case 'games': return renderGames(lang);
    default: return renderHome(lang);
  }
};

const renderRoute = () => {
  const lang = getLang();
  const route = parseRoute();
  const page = renderPage(route, lang);
  app.innerHTML = `
    ${renderHeader(lang)}
    <main>${page}</main>
    ${renderFooter(lang)}
  `;
  bindEvents();
  window.scrollTo({ top: 0, behavior: 'instant' });
};

const bindEvents = () => {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggleLang();
      renderRoute();
    });
  }
};

applyLang(getLang());
window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', renderRoute);

if (document.readyState !== 'loading') renderRoute();
