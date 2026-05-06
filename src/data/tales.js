// Histoires courtes pour enfants 5–10 ans (qu'ils peuvent lire seuls).
// Vocabulaire volontairement simple, phrases courtes, 5–6 paragraphes par conte,
// une morale claire à la fin. Diacritiques arabes (tashkīl) pour faciliter
// l'apprentissage de la lecture.

export const tales = [
  // ─────────────────────────────────────────── 1. Le chaton et l'oiseau
  {
    id: 'tale-cat-bird',
    title:    { fr: 'Le chaton et l\'oiseau',         ar: 'الْقِطُّ الصَّغِيرُ وَالطَّائِر' },
    subtitle: { fr: 'Une belle amitié',                ar: 'صَدَاقَةٌ جَمِيلَة' },
    illustration: 'tale-cat-bird',
    palette: 'from-sky-200 via-blue-100 to-emerald-200',
    accent: 'bg-sky-500',
    paragraphs: {
      fr: [
        "Il était une fois un petit chaton tout doux qui s'appelait Mimi. Il habitait dans un grand jardin avec des arbres et des fleurs.",
        "Un matin, Mimi vit un petit oiseau tomber de son nid. L'oiseau avait peur et ne savait pas encore voler.",
        "Mimi s'approcha doucement. « N'aie pas peur, dit-il. Je vais t'aider à retourner dans ton nid. »",
        "Le chaton grimpa à l'arbre, très très lentement, en portant l'oiseau sur son dos. Il faisait attention à ne pas tomber.",
        "Quand ils arrivèrent en haut, la maman oiseau les attendait. Elle remercia Mimi avec un beau chant.",
        "Depuis ce jour, Mimi et l'oiseau sont devenus les meilleurs amis du monde.",
      ],
      ar: [
        "كَانَ يَا مَا كَانَ، قِطٌّ صَغِيرٌ نَاعِمٌ اِسْمُهُ مِيمِي. كَانَ يَعِيشُ فِي حَدِيقَةٍ كَبِيرَةٍ فِيهَا أَشْجَارٌ وَزُهُور.",
        "فِي صَبَاحٍ مَا، رَأَى مِيمِي طَائِرًا صَغِيرًا قَدْ سَقَطَ مِنْ عُشِّهِ. كَانَ الطَّائِرُ خَائِفًا وَلَا يَعْرِفُ أَنْ يَطِيرَ بَعْد.",
        "اِقْتَرَبَ مِيمِي بِهُدُوءٍ وَقَالَ: «لَا تَخَفْ، سَأُسَاعِدُكَ لِلْعَوْدَةِ إِلَى عُشِّكَ.»",
        "تَسَلَّقَ الْقِطُّ الشَّجَرَةَ بِبُطْءٍ شَدِيدٍ، حَامِلًا الطَّائِرَ عَلَى ظَهْرِهِ. كَانَ يَنْتَبِهُ كَيْ لَا يَقَع.",
        "عِنْدَمَا وَصَلَا إِلَى الْأَعْلَى، كَانَتْ أُمُّ الطَّائِرِ تَنْتَظِرُهُمَا. شَكَرَتْ مِيمِي بِأَجْمَلِ غِنَاء.",
        "مِنْ ذَلِكَ الْيَوْم، أَصْبَحَ مِيمِي وَالطَّائِرُ أَفْضَلَ صَدِيقَيْنِ فِي الْعَالَم.",
      ],
    },
    moral: {
      fr: 'Aider les autres rend le cœur joyeux.',
      ar: 'مُسَاعَدَةُ الْآخَرِينَ تُفَرِّحُ الْقَلْب.',
    },
  },

  // ─────────────────────────────────────────── 2. L'arbre qui partageait
  {
    id: 'tale-sharing-tree',
    title:    { fr: 'L\'arbre qui partageait',  ar: 'الشَّجَرَةُ الَّتِي تُشَارِك' },
    subtitle: { fr: 'Un grand cœur de bois',     ar: 'قَلْبٌ كَبِيرٌ مِنْ خَشَب' },
    illustration: 'tale-sharing-tree',
    palette: 'from-emerald-200 via-lime-100 to-amber-100',
    accent: 'bg-emerald-500',
    paragraphs: {
      fr: [
        "Au milieu d'une forêt, vivait un grand arbre couvert de pommes rouges et brillantes.",
        "Un jour, un écureuil affamé arriva. L'arbre laissa tomber une pomme pour lui. « Merci ! » dit l'écureuil.",
        "Puis vint un petit lapin. L'arbre fit tomber une autre pomme. Le lapin sauta de joie.",
        "Beaucoup d'animaux vinrent, et l'arbre partageait avec chacun. Il était heureux de pouvoir aider.",
        "Quand vint l'hiver, les animaux n'oublièrent pas l'arbre. Ils l'entourèrent et lui chantèrent une chanson de remerciement.",
      ],
      ar: [
        "فِي وَسَطِ غَابَة، عَاشَتْ شَجَرَةٌ كَبِيرَةٌ مَلِيئَةٌ بِالتُّفَّاحِ الْأَحْمَرِ اللَّامِع.",
        "فِي يَوْمٍ مَا، جَاءَ سِنْجَابٌ جَائِع. أَسْقَطَتِ الشَّجَرَةُ تُفَّاحَةً لَه. قَالَ السِّنْجَاب: «شُكْرًا!»",
        "ثُمَّ جَاءَ أَرْنَبٌ صَغِير. أَسْقَطَتِ الشَّجَرَةُ تُفَّاحَةً أُخْرَى. قَفَزَ الْأَرْنَبُ مِنَ الْفَرَح.",
        "جَاءَتْ حَيَوَانَاتٌ كَثِيرَة، وَكَانَتِ الشَّجَرَةُ تُشَارِكُ الْجَمِيع. كَانَتْ سَعِيدَةً لِأَنَّهَا تُسَاعِد.",
        "عِنْدَمَا جَاءَ الشِّتَاء، لَمْ تَنْسَ الْحَيَوَانَاتُ الشَّجَرَة. أَحَاطَتْ بِهَا وَغَنَّتْ لَهَا أُغْنِيَةَ شُكْر.",
      ],
    },
    moral: {
      fr: 'Quand on partage, on reçoit aussi de l\'amour.',
      ar: 'عِنْدَمَا نُشَارِك، نَتَلَقَّى الْحُبَّ أَيْضًا.',
    },
  },

  // ─────────────────────────────────────────── 3. L'abeille et la fleur
  {
    id: 'tale-bee-flower',
    title:    { fr: 'L\'abeille et la fleur',  ar: 'النَّحْلَةُ وَالزَّهْرَة' },
    subtitle: { fr: 'Un petit cœur immense',    ar: 'قَلْبٌ صَغِيرٌ كَبِير' },
    illustration: 'tale-bee-flower',
    palette: 'from-yellow-200 via-amber-100 to-pink-200',
    accent: 'bg-amber-500',
    paragraphs: {
      fr: [
        "Dans un grand pré jaune, vivait une petite abeille appelée Zaza. Elle butinait les fleurs chaque matin.",
        "Un jour, elle trouva une fleur très triste, presque fanée. « Que se passe-t-il ? » demanda Zaza doucement.",
        "La fleur répondit : « Il n'a pas plu depuis longtemps, et j'ai très soif. »",
        "Zaza réfléchit, puis vola jusqu'à un petit ruisseau. Elle revint avec une goutte d'eau sur ses pattes.",
        "Goutte après goutte, Zaza apporta de l'eau à la fleur. Bientôt, la fleur se redressa, plus belle qu'avant.",
        "La fleur dit : « Merci Zaza ! Tu es petite mais ton cœur est immense. »",
      ],
      ar: [
        "فِي مَرْجٍ أَصْفَرَ كَبِير، عَاشَتْ نَحْلَةٌ صَغِيرَةٌ اِسْمُهَا زَازَا. كَانَتْ تَجْمَعُ الرَّحِيقَ مِنَ الزُّهُورِ كُلَّ صَبَاح.",
        "فِي يَوْمٍ مَا، وَجَدَتْ زَهْرَةً حَزِينَةً جِدًّا، تَكَادُ تَذْبُل. سَأَلَتْ زَازَا بِلُطْف: «مَا الْأَمْر؟»",
        "أَجَابَتِ الزَّهْرَة: «لَمْ تُمْطِرْ مُنْذُ زَمَنٍ طَوِيل، وَأَنَا عَطْشَانَةٌ جِدًّا.»",
        "فَكَّرَتْ زَازَا، ثُمَّ طَارَتْ إِلَى جَدْوَلٍ صَغِير. عَادَتْ بِقَطْرَةِ مَاءٍ عَلَى أَرْجُلِهَا.",
        "قَطْرَةً بَعْدَ قَطْرَة، أَحْضَرَتْ زَازَا الْمَاءَ لِلزَّهْرَة. سُرْعَانَ مَا اِنْتَصَبَتِ الزَّهْرَة، أَجْمَلَ مِنْ ذِي قَبْل.",
        "قَالَتِ الزَّهْرَة: «شُكْرًا زَازَا! أَنْتِ صَغِيرَةٌ وَلَكِنَّ قَلْبَكِ كَبِيرٌ جِدًّا.»",
      ],
    },
    moral: {
      fr: 'La gentillesse n\'a pas besoin d\'être grande pour faire du bien.',
      ar: 'اللُّطْفُ لَا يَحْتَاجُ أَنْ يَكُونَ كَبِيرًا لِيَفْعَلَ الْخَيْر.',
    },
  },

  // ─────────────────────────────────────────── 4. Le petit chameau
  {
    id: 'tale-little-camel',
    title:    { fr: 'Le petit chameau',         ar: 'الْجَمَلُ الصَّغِير' },
    subtitle: { fr: 'Le courage des dunes',      ar: 'شَجَاعَةُ الْكُثْبَان' },
    illustration: 'tale-little-camel',
    palette: 'from-amber-200 via-orange-100 to-yellow-200',
    accent: 'bg-orange-500',
    paragraphs: {
      fr: [
        "Dans le désert doré, un petit chameau nommé Sami regardait l'horizon. Il rêvait de traverser les grandes dunes.",
        "« Tu es trop petit ! » disaient les vieux chameaux. Mais Sami ne se découragea pas.",
        "Un matin, il prit son courage à deux pattes et partit avec sa famille. Le soleil était chaud et le sable brûlait.",
        "Sami marcha, marcha encore, parfois fatigué, parfois joyeux. Il but l'eau lentement et regarda les étoiles la nuit.",
        "Après plusieurs jours, ils arrivèrent à une oasis pleine de palmiers. Sami avait réussi !",
        "« Je ne suis plus si petit », pensa Sami avec un grand sourire.",
      ],
      ar: [
        "فِي الصَّحْرَاءِ الذَّهَبِيَّة، كَانَ جَمَلٌ صَغِيرٌ اِسْمُهُ سَامِي يَنْظُرُ إِلَى الْأُفُق. كَانَ يَحْلُمُ بِعُبُورِ الْكُثْبَانِ الْكَبِيرَة.",
        "كَانَتِ الْجِمَالُ الْكَبِيرَةُ تَقُول: «أَنْتَ صَغِيرٌ جِدًّا!» وَلَكِنَّ سَامِي لَمْ يَيْأَس.",
        "فِي صَبَاحٍ مَا، تَشَجَّعَ وَخَرَجَ مَعَ عَائِلَتِه. كَانَتِ الشَّمْسُ حَارَّةً وَالرَّمْلُ مُحْرِقًا.",
        "مَشَى سَامِي وَمَشَى، أَحْيَانًا تَعِبٌ، أَحْيَانًا فَرِحٌ. شَرِبَ الْمَاءَ بِبُطْءٍ وَنَظَرَ إِلَى النُّجُومِ فِي اللَّيْل.",
        "بَعْدَ أَيَّامٍ كَثِيرَة، وَصَلُوا إِلَى وَاحَةٍ مَلِيئَةٍ بِأَشْجَارِ النَّخِيل. لَقَدْ نَجَحَ سَامِي!",
        "فَكَّرَ سَامِي بِابْتِسَامَةٍ كَبِيرَة: «لَمْ أَعُدْ صَغِيرًا.»",
      ],
    },
    moral: {
      fr: 'Avec du courage, même les plus petits peuvent faire de grandes choses.',
      ar: 'بِالشَّجَاعَة، يَسْتَطِيعُ الصِّغَارُ أَنْ يَفْعَلُوا أَشْيَاءَ كَبِيرَة.',
    },
  },

  // ─────────────────────────────────────────── 5. La graine qui devint un arbre
  {
    id: 'tale-seed-tree',
    title:    { fr: 'La graine qui devint un arbre',  ar: 'الْبُذْرَةُ الَّتِي صَارَتْ شَجَرَة' },
    subtitle: { fr: 'La patience pousse haut',         ar: 'الصَّبْرُ يَنْمُو عَالِيًا' },
    illustration: 'tale-seed-tree',
    palette: 'from-stone-100 via-emerald-100 to-emerald-200',
    accent: 'bg-emerald-600',
    paragraphs: {
      fr: [
        "Sous la terre, une petite graine dormait au chaud. Un jour, elle entendit la pluie tomber.",
        "« Il est temps de te réveiller ! » dit la pluie. La petite graine ouvrit les yeux et poussa, doucement.",
        "Elle grandit un peu chaque jour. Le soleil lui donnait de la lumière, et la pluie lui donnait à boire.",
        "Bientôt, une petite tige verte sortit de la terre. Puis une feuille. Puis une autre.",
        "Les saisons passèrent. La graine devint un grand arbre, fort et beau. Les oiseaux venaient se reposer sur ses branches.",
        "L'arbre se souvenait toujours d'être patient et reconnaissant.",
      ],
      ar: [
        "تَحْتَ الْأَرْض، نَامَتْ بُذْرَةٌ صَغِيرَةٌ فِي الدِّفْء. فِي يَوْمٍ مَا، سَمِعَتْ صَوْتَ الْمَطَرِ يَنْزِل.",
        "قَالَ الْمَطَر: «حَانَ وَقْتُ الِاسْتِيقَاظ!» فَتَحَتِ الْبُذْرَةُ عَيْنَيْهَا وَنَمَتْ بِبُطْء.",
        "كَبِرَتْ قَلِيلًا كُلَّ يَوْم. كَانَتِ الشَّمْسُ تُعْطِيهَا النُّور، وَالْمَطَرُ يُعْطِيهَا الْمَاء.",
        "سُرْعَانَ مَا خَرَجَ سَاقٌ أَخْضَرُ صَغِيرٌ مِنَ التُّرَاب. ثُمَّ وَرَقَة. ثُمَّ أُخْرَى.",
        "مَرَّتِ الْفُصُول. صَارَتِ الْبُذْرَةُ شَجَرَةً كَبِيرَة، قَوِيَّةً وَجَمِيلَة. كَانَتِ الطُّيُورُ تَأْتِي لِتَسْتَرِيحَ عَلَى أَغْصَانِهَا.",
        "تَذَكَّرَتِ الشَّجَرَةُ دَائِمًا أَنْ تَكُونَ صَبُورَةً وَشَاكِرَة.",
      ],
    },
    moral: {
      fr: 'Tout ce qui est grand commence par quelque chose de tout petit.',
      ar: 'كُلُّ شَيْءٍ كَبِيرٍ يَبْدَأُ بِشَيْءٍ صَغِيرٍ جِدًّا.',
    },
  },

  // ─────────────────────────────────────────── 6. L'étoile timide
  {
    id: 'tale-shy-star',
    title:    { fr: 'L\'étoile timide',         ar: 'النَّجْمَةُ الْخَجُولَة' },
    subtitle: { fr: 'Chaque lumière compte',     ar: 'كُلُّ نُورٍ مُهِمّ' },
    illustration: 'tale-shy-star',
    palette: 'from-indigo-300 via-purple-200 to-blue-200',
    accent: 'bg-indigo-500',
    paragraphs: {
      fr: [
        "Dans le ciel étoilé, vivait une petite étoile qui s'appelait Lina. Elle pensait que sa lumière n'était pas assez brillante.",
        "« Pourquoi ne brilles-tu pas plus ? » demandaient les autres étoiles. Lina baissait la tête, toute triste.",
        "Une nuit, un petit garçon perdu dans la forêt regarda le ciel. Il chercha une étoile pour le guider.",
        "Lina vit le garçon. Elle voulut briller plus fort, mais elle ne put que faire briller sa propre petite lumière.",
        "Le garçon vit la douce lumière de Lina. Elle l'aida à retrouver son chemin jusqu'à la maison.",
        "Depuis ce jour, Lina sait que sa petite lumière à elle est exactement ce dont quelqu'un a besoin.",
      ],
      ar: [
        "فِي السَّمَاءِ الْمَلِيئَةِ بِالنُّجُوم، عَاشَتْ نَجْمَةٌ صَغِيرَةٌ اِسْمُهَا لِينَا. كَانَتْ تَظُنُّ أَنَّ نُورَهَا لَيْسَ سَاطِعًا بِمَا فِيهِ الْكِفَايَة.",
        "كَانَتِ النُّجُومُ الْأُخْرَى تَسْأَلُهَا: «لِمَاذَا لَا تَلْمَعِينَ أَكْثَر؟» فَتُطْأْطِئُ لِينَا رَأْسَهَا حَزِينَة.",
        "فِي لَيْلَةٍ مَا، نَظَرَ صَبِيٌّ صَغِيرٌ تَائِهٌ فِي الْغَابَةِ إِلَى السَّمَاء. بَحَثَ عَنْ نَجْمَةٍ تَدُلُّه.",
        "رَأَتْ لِينَا الصَّبِيّ. أَرَادَتْ أَنْ تَلْمَعَ بِقُوَّة، وَلَكِنَّهَا اِسْتَطَاعَتْ فَقَطْ أَنْ تُضِيءَ بِنُورِهَا الصَّغِير.",
        "رَأَى الصَّبِيُّ نُورَ لِينَا اللَّطِيف. سَاعَدَهُ ذَلِكَ النُّورُ عَلَى الْعَوْدَةِ إِلَى الْبَيْت.",
        "مِنْ ذَلِكَ الْيَوْم، تَعْرِفُ لِينَا أَنَّ نُورَهَا الصَّغِيرَ هُوَ تَمَامًا مَا يَحْتَاجُهُ شَخْصٌ مَا.",
      ],
    },
    moral: {
      fr: 'Chaque lumière compte, même la plus petite.',
      ar: 'كُلُّ نُورٍ مُهِمّ، حَتَّى أَصْغَرُهُ.',
    },
  },
];

export const findTale = (id) => tales.find((t) => t.id === id) || null;
