// Vocabulaire bilingue FR/AR pour enfants 5-10 ans.
// Diacritiques arabes (tashkīl) inclus pour soutenir l'apprentissage de la lecture.

export const VOCABULARY = [
  // ─────────── Animaux
  { id: 'cat',     category: 'animals', emoji: '🐱', fr: 'le chat',     ar: 'الْقِطّ' },
  { id: 'dog',     category: 'animals', emoji: '🐶', fr: 'le chien',    ar: 'الْكَلْب' },
  { id: 'bird',    category: 'animals', emoji: '🐦', fr: 'l\'oiseau',   ar: 'الطَّائِر' },
  { id: 'fish',    category: 'animals', emoji: '🐟', fr: 'le poisson',  ar: 'السَّمَكَة' },
  { id: 'bee',     category: 'animals', emoji: '🐝', fr: 'l\'abeille',  ar: 'النَّحْلَة' },
  { id: 'sheep',   category: 'animals', emoji: '🐑', fr: 'le mouton',   ar: 'الْخَرُوف' },
  { id: 'camel',   category: 'animals', emoji: '🐪', fr: 'le chameau',  ar: 'الْجَمَل' },
  { id: 'lion',    category: 'animals', emoji: '🦁', fr: 'le lion',     ar: 'الْأَسَد' },

  // ─────────── Famille
  { id: 'mom',     category: 'family',  emoji: '👩', fr: 'la maman',     ar: 'الْأُمّ' },
  { id: 'dad',     category: 'family',  emoji: '👨', fr: 'le papa',      ar: 'الْأَب' },
  { id: 'brother', category: 'family',  emoji: '👦', fr: 'le frère',     ar: 'الْأَخ' },
  { id: 'sister',  category: 'family',  emoji: '👧', fr: 'la sœur',      ar: 'الْأُخْت' },
  { id: 'baby',    category: 'family',  emoji: '👶', fr: 'le bébé',      ar: 'الطِّفْل' },
  { id: 'grandpa', category: 'family',  emoji: '👴', fr: 'le grand-père', ar: 'الْجَدّ' },

  // ─────────── Corps
  { id: 'eye',     category: 'body',    emoji: '👁️', fr: 'l\'œil',      ar: 'الْعَيْن' },
  { id: 'hand',    category: 'body',    emoji: '🤚', fr: 'la main',     ar: 'الْيَد' },
  { id: 'foot',    category: 'body',    emoji: '🦶', fr: 'le pied',     ar: 'الْقَدَم' },
  { id: 'heart',   category: 'body',    emoji: '❤️', fr: 'le cœur',     ar: 'الْقَلْب' },
  { id: 'mouth',   category: 'body',    emoji: '👄', fr: 'la bouche',   ar: 'الْفَم' },
  { id: 'nose',    category: 'body',    emoji: '👃', fr: 'le nez',      ar: 'الْأَنْف' },

  // ─────────── Nature
  { id: 'sun',     category: 'nature',  emoji: '☀️',  fr: 'le soleil',  ar: 'الشَّمْس' },
  { id: 'moon',    category: 'nature',  emoji: '🌙', fr: 'la lune',     ar: 'الْقَمَر' },
  { id: 'star',    category: 'nature',  emoji: '⭐', fr: 'l\'étoile',   ar: 'النَّجْمَة' },
  { id: 'tree',    category: 'nature',  emoji: '🌳', fr: 'l\'arbre',    ar: 'الشَّجَرَة' },
  { id: 'flower',  category: 'nature',  emoji: '🌸', fr: 'la fleur',    ar: 'الزَّهْرَة' },
  { id: 'mtn',     category: 'nature',  emoji: '🏔️', fr: 'la montagne', ar: 'الْجَبَل' },
  { id: 'sea',     category: 'nature',  emoji: '🌊', fr: 'la mer',      ar: 'الْبَحْر' },
  { id: 'cloud',   category: 'nature',  emoji: '☁️',  fr: 'le nuage',   ar: 'السَّحَابَة' },

  // ─────────── Nourriture
  { id: 'bread',   category: 'food',    emoji: '🍞', fr: 'le pain',     ar: 'الْخُبْز' },
  { id: 'apple',   category: 'food',    emoji: '🍎', fr: 'la pomme',    ar: 'التُّفَّاحَة' },
  { id: 'milk',    category: 'food',    emoji: '🥛', fr: 'le lait',     ar: 'الْحَلِيب' },
  { id: 'water',   category: 'food',    emoji: '💧', fr: 'l\'eau',      ar: 'الْمَاء' },
  { id: 'grape',   category: 'food',    emoji: '🍇', fr: 'le raisin',   ar: 'الْعِنَب' },
  { id: 'honey',   category: 'food',    emoji: '🍯', fr: 'le miel',     ar: 'الْعَسَل' },

  // ─────────── Couleurs
  { id: 'red',     category: 'colors',  emoji: '🔴', fr: 'rouge',       ar: 'أَحْمَر' },
  { id: 'blue',    category: 'colors',  emoji: '🔵', fr: 'bleu',        ar: 'أَزْرَق' },
  { id: 'yellow',  category: 'colors',  emoji: '🟡', fr: 'jaune',       ar: 'أَصْفَر' },
  { id: 'green',   category: 'colors',  emoji: '🟢', fr: 'vert',        ar: 'أَخْضَر' },
  { id: 'black',   category: 'colors',  emoji: '⚫', fr: 'noir',        ar: 'أَسْوَد' },
  { id: 'white',   category: 'colors',  emoji: '⚪', fr: 'blanc',       ar: 'أَبْيَض' },
];

export const VOCAB_CATEGORIES = ['animals', 'family', 'body', 'nature', 'food', 'colors'];

export const VOCAB_BY_CATEGORY = VOCABULARY.reduce((acc, w) => {
  if (!acc[w.category]) acc[w.category] = [];
  acc[w.category].push(w);
  return acc;
}, {});
