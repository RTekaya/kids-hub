// Gestion de la langue : 'fr' (par défaut) ou 'ar' (RTL).
const KEY = 'qisas.lang';

export const ui = {
  fr: {
    siteTitle: 'Qisas Al-Anbiya',
    siteSubtitle: 'Les histoires des prophètes pour les enfants',
    home: 'Accueil',
    listHeading: 'Choisis une histoire',
    listIntro: 'Cinq belles histoires pour découvrir la sagesse des prophètes عليهم السلام.',
    read: 'Lire l\'histoire',
    back: '← Retour',
    moralTitle: 'La leçon de l\'histoire',
    switchTo: 'العربية',
    switchAria: 'Passer en arabe',
    audience: 'Pour les enfants de 5 à 10 ans',
    footer: 'Que la paix soit sur tous les prophètes — عليهم السلام جميعاً',
    notFound: 'Histoire introuvable',
    backHome: 'Revenir à l\'accueil',
    homeIntro: 'Que veux-tu faire aujourd\'hui ?',
    storiesTitle: 'Histoires',
    storiesDesc: 'Découvre les histoires des prophètes.',
    gamesTitle: 'Jeux',
    gamesDesc: 'Des jeux amusants pour apprendre.',
    comingSoon: 'Bientôt disponible',
    comingSoonDesc: 'De nouveaux jeux arrivent très bientôt, inchaAllah !',
    backToStories: '← Retour aux histoires',
  },
  ar: {
    siteTitle: 'قِصَصُ الْأَنْبِيَاء',
    siteSubtitle: 'قِصَصُ الْأَنْبِيَاءِ لِلْأَطْفَالِ',
    home: 'الرَّئِيسِيَّة',
    listHeading: 'اِخْتَرْ قِصَّةً',
    listIntro: 'خَمْسُ قِصَصٍ جَمِيلَةٍ لِتَكْتَشِفَ حِكْمَةَ الْأَنْبِيَاءِ عَلَيْهِمُ السَّلَامُ.',
    read: 'اِقْرَأِ الْقِصَّةَ',
    back: 'رُجُوع →',
    moralTitle: 'دَرْسُ الْقِصَّةِ',
    switchTo: 'Français',
    switchAria: 'Switch to French',
    audience: 'لِلْأَطْفَالِ مِنْ ٥ إِلَى ١٠ سَنَوَاتٍ',
    footer: 'وَالسَّلَامُ عَلَى جَمِيعِ الْأَنْبِيَاءِ عَلَيْهِمُ السَّلَامُ',
    notFound: 'الْقِصَّةُ غَيْرُ مَوْجُودَةٍ',
    backHome: 'الْعَوْدَةُ إِلَى الرَّئِيسِيَّةِ',
    homeIntro: 'مَاذَا تُرِيدُ أَنْ تَفْعَلَ الْيَوْمَ؟',
    storiesTitle: 'الْقِصَص',
    storiesDesc: 'اِكْتَشِفْ قِصَصَ الْأَنْبِيَاءِ.',
    gamesTitle: 'الْأَلْعَاب',
    gamesDesc: 'أَلْعَابٌ مُمْتِعَةٌ لِلتَّعَلُّمِ.',
    comingSoon: 'قَرِيبًا',
    comingSoonDesc: 'أَلْعَابٌ جَدِيدَةٌ سَتَصِلُ قَرِيبًا إِنْ شَاءَ اللَّهُ!',
    backToStories: 'رُجُوعٌ إِلَى الْقِصَصِ →',
  },
};

export const getLang = () => {
  const saved = localStorage.getItem(KEY);
  return saved === 'ar' ? 'ar' : 'fr';
};

export const setLang = (lang) => {
  localStorage.setItem(KEY, lang);
  applyLang(lang);
};

export const toggleLang = () => {
  const next = getLang() === 'fr' ? 'ar' : 'fr';
  setLang(next);
  return next;
};

export const applyLang = (lang) => {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';
};

export const t = (lang, key) => ui[lang][key];
