import './style.css';
import { renderHome } from './pages/home.js';
import { renderStories } from './pages/stories.js';
import { renderStory, mountStoryAudio } from './pages/story.js';
import { renderGames } from './pages/games.js';
import { renderLearn } from './pages/learn.js';
import { cancelAllSpeech } from './audio/reader.js';
import { initMemory } from './pages/games/memory.js';
import { initPatterns } from './pages/games/patterns.js';
import { initSort } from './pages/games/sort.js';
import { initSymmetry } from './pages/games/symmetry.js';
import { initMaze } from './pages/games/maze.js';
import { initTangram } from './pages/games/tangram.js';
import { initVocabulary } from './pages/learn/vocabulary.js';
import { initCalligraphy } from './pages/learn/calligraphy.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { applyLang, getLang, toggleLang, t } from './i18n.js';

const app = document.getElementById('app');

const games = {
  memory: initMemory,
  patterns: initPatterns,
  sort: initSort,
  symmetry: initSymmetry,
  maze: initMaze,
  tangram: initTangram,
};

const learnApps = {
  vocabulary: initVocabulary,
  calligraphy: initCalligraphy,
};

const parseRoute = () => {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { name: 'home' };
  const [section, id] = hash.split('/');
  if (section === 'stories') return { name: 'stories' };
  if (section === 'games' && id) return { name: 'game', id };
  if (section === 'games') return { name: 'games' };
  if (section === 'learn' && id) return { name: 'learn-app', id };
  if (section === 'learn') return { name: 'learn' };
  if (section === 'story' && id) return { name: 'story', id };
  return { name: 'home' };
};

const renderStaticPage = (route, lang) => {
  switch (route.name) {
    case 'stories': return renderStories(lang);
    case 'story': return renderStory(route.id, lang);
    case 'games': return renderGames(lang);
    case 'learn': return renderLearn(lang);
    default: return renderHome(lang);
  }
};

const renderInteractiveNotFound = (lang, backHref, backLabel) => `
  <section class="max-w-3xl mx-auto px-4 py-20 text-center">
    <h1 class="font-display text-3xl font-bold mb-4">${t(lang, 'notFound')}</h1>
    <a href="${backHref}" class="btn-primary">${backLabel}</a>
  </section>
`;

const renderRoute = () => {
  cancelAllSpeech();
  const lang = getLang();
  const route = parseRoute();
  const isGame = route.name === 'game';
  const isLearnApp = route.name === 'learn-app';
  const gameInit = isGame ? games[route.id] : null;
  const learnInit = isLearnApp ? learnApps[route.id] : null;

  let main;
  if (isGame) {
    main = gameInit ? '<div id="game-root"></div>' : renderInteractiveNotFound(lang, '#/games', t(lang, 'backToGames'));
  } else if (isLearnApp) {
    main = learnInit ? '<div id="learn-root"></div>' : renderInteractiveNotFound(lang, '#/learn', t(lang, 'back'));
  } else {
    main = renderStaticPage(route, lang);
  }

  app.innerHTML = `
    ${renderHeader(lang)}
    <main>${main}</main>
    ${renderFooter(lang)}
  `;
  bindEvents();

  if (gameInit) {
    gameInit(document.getElementById('game-root'), lang);
  }
  if (learnInit) {
    learnInit(document.getElementById('learn-root'), lang);
  }
  if (route.name === 'story') {
    mountStoryAudio(document.querySelector(`[data-story-id="${route.id}"]`), route.id, lang);
  }

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
