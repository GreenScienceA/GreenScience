// ╔════════════════════════════════════════════════════════════════════╗
// ║  MODULE: BOTANY                                                   ║
// ╚════════════════════════════════════════════════════════════════════╝

modules.push({
  id: 'plant', icon: '🌳', category: 'plant',
  title:       { en: 'Botany',             fr: 'Botanique',            ar: 'علم النبات' },
  description: { en: 'Comprehensive study of plant structure, growth, functions, and classification.',
                 fr: 'Étude complète de la structure des plantes, de leur croissance, de leurs fonctions et de leur classification.',
                 ar: 'دراسة شاملة لتركيب النباتات، نموها، وظائفها، وتصنيفها' },
  books: [
    { icon: '📕',
      title:  { en: 'Comprendre l\'amélioration des plantes: Enjeux, méthodes, objectifs et critères de sélection', fr: 'Comprendre l\'amélioration des plantes: Enjeux, méthodes, objectifs et critères de sélection', ar: 'Comprendre l\'amélioration des plantes: Enjeux, méthodes, objectifs et critères de sélection' },
      author: { en: 'André Gallais  - 2015', fr: 'André Gallais  - 2015', ar: 'أندريه غاليس - 2015' },
      langs: ['fr'], cover:  'files/images/books/botany/CAPEMOCS.jpg',
      file:   'https://drive.google.com/file/d/1wiUHnyQQUQLTLZpxXggry7rnSk6c5qzl/view?usp=drive_link' },
      { icon: '📕',
      title:  { en: 'Atlas Manuel de Botanique', fr: 'Atlas Manuel de Botanique', ar: 'Atlas Manuel de Botanique' },
      author: { en: ' Deniker Joseph - 1886', fr: 'Deniker Joseph - 1886', ar: 'Deniker Joseph - 1886' },
      langs: ['fr'], cover:  'files/images/books/botany/AtlsMB.jpg',
      file:   'https://drive.google.com/file/d/1LAOLf2C9VkF4IhmYTjKOI5-zBUXbTVog/view?usp=sharing' },
  ],
 
  subModules: [
     // ── Sub: Plant Nutrition  ──────────────────────
    { id: 'plant-nutrition', icon: '🌿', category: 'plant-nutrition',
      title:       { en: 'Plant Nutrition',  fr: 'Nutrition Végétale',  ar: 'تغذية النبات' },
      description: { en: 'Macro/micronutrients, uptake mechanisms, deficiency symptoms, fertilization.',
                     fr: "Macro/micronutriments, mécanismes d'absorption, symptômes de carence, fertilisation.",
                     ar: 'المغذيات الكبيرة/الصغيرة، آليات الامتصاص، أعراض النقص، التسميد.' },
      books: [], courseFiles: [], exercises: [], topics: [
        { id: 'essential-elements', icon: '🥀', order: 1,
          title:       { en: 'Essential Elements',    fr: 'Éléments Essentiels',     ar: 'العناصر الأساسية' },
          description: { en: 'Criteria of essentiality, Arnon\'s criteria, 17 essential elements',    fr: 'Critères d\'essentialité, critères d\'Arnon, 17 éléments essentiels',     ar: 'معايير الأساسية، معايير أرنون، 17 عنصراً أساسياً' },
          explanation: 'files/explanations/botany/plant-nutrition/essential-elements/essential-elements', videoId: '5kiYXWiHWEU', playlist: 'https://www.youtube.com/watch?v=FP_nltHwsCo&list=PLpot-tBGux4n6R8PU9Zc3Pao1Td4HUL-L',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
      ],
    },
  ],
});
