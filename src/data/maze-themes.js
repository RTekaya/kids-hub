// Mini-histoires non religieuses pour le labyrinthe.
// Chaque thème : un personnage à guider vers son objectif.
export const MAZE_THEMES = [
  {
    id: 'cat-mama',
    char: '🐱',
    goal: '🐈',
    title: { fr: 'Aide le chaton à retrouver sa maman', ar: 'سَاعِدِ الْقِطَّ الصَّغِيرَ لِيَجِدَ أُمَّهُ' },
    won:   { fr: 'Le chaton a retrouvé sa maman ! 🐱❤️🐈', ar: 'وَجَدَ الْقِطُّ أُمَّهُ! 🐱❤️🐈' },
  },
  {
    id: 'bee-flower',
    char: '🐝',
    goal: '🌸',
    title: { fr: 'Aide l\'abeille à trouver la fleur', ar: 'سَاعِدِ النَّحْلَةَ لِتَجِدَ الزَّهْرَةَ' },
    won:   { fr: 'L\'abeille a trouvé sa fleur ! 🐝🌸', ar: 'وَجَدَتِ النَّحْلَةُ زَهْرَتَهَا! 🐝🌸' },
  },
  {
    id: 'boat-island',
    char: '⛵',
    goal: '🏝️',
    title: { fr: 'Aide le bateau à atteindre l\'île', ar: 'سَاعِدِ الْقَارِبَ لِيَصِلَ إِلَى الْجَزِيرَةِ' },
    won:   { fr: 'Le bateau a atteint l\'île ! ⛵🏝️', ar: 'وَصَلَ الْقَارِبُ إِلَى الْجَزِيرَةِ! ⛵🏝️' },
  },
  {
    id: 'rocket-moon',
    char: '🚀',
    goal: '🌙',
    title: { fr: 'Aide la fusée à arriver sur la lune', ar: 'سَاعِدِ الصَّارُوخَ لِيَصِلَ إِلَى الْقَمَرِ' },
    won:   { fr: 'La fusée a atteint la lune ! 🚀🌙', ar: 'وَصَلَ الصَّارُوخُ إِلَى الْقَمَرِ! 🚀🌙' },
  },
  {
    id: 'mouse-cheese',
    char: '🐭',
    goal: '🧀',
    title: { fr: 'Aide la souris à trouver le fromage', ar: 'سَاعِدِ الْفَأْرَ لِيَجِدَ الْجُبْنَةَ' },
    won:   { fr: 'La souris a trouvé son fromage ! 🐭🧀', ar: 'وَجَدَ الْفَأْرُ الْجُبْنَةَ! 🐭🧀' },
  },
  {
    id: 'fish-school',
    char: '🐟',
    goal: '🐠',
    title: { fr: 'Aide le poisson à rejoindre ses amis', ar: 'سَاعِدِ السَّمَكَةَ لِتَلْحَقَ بِأَصْدِقَائِهَا' },
    won:   { fr: 'Le poisson a rejoint ses amis ! 🐟🐠', ar: 'لَحِقَتِ السَّمَكَةُ بِأَصْدِقَائِهَا! 🐟🐠' },
  },
];
