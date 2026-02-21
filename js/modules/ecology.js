// ╔════════════════════════════════════════════════════════════════════╗
// ║  MODULE: ECOLOGY                                                  ║
// ╚════════════════════════════════════════════════════════════════════╝
modules.push({
  id: 'ecology', icon: '🌱', category: 'ecology',
  title: { en: 'Ecology', fr: 'Écologie', ar: 'علم البيئة' },
  description: { en: 'Study of ecosystems, biodiversity, population dynamics, and environmental interactions at all scales.', fr: 'Étude des écosystèmes, de la biodiversité, de la dynamique des populations et des interactions environnementales à toutes les échelles.', ar: 'دراسة الأنظمة البيئية والتنوع البيولوجي وديناميكية المجتمعات والتفاعلات البيئية على جميع المستويات.' },
  books: [
    { icon: '📕',
      title:  { en: 'The threatening desert : Controlling desertification', fr: 'Le désert menaçant : lutter contre la désertification', ar: 'التصحر : التهديد و المجابهة (ترجمة: عاطف معتمد ، امال شاور) ' },
      author: { en: 'Alan Grainger - 1990', fr: 'Alan Grainger - 1990', ar: 'الان جرينجر - 1990' },
      langs: ['ar'], cover:  'files/images/books/ecology/TDCD.jpg',
      file:   'https://drive.google.com/file/d/1NHChUghjYlbnG7odV2QZFzg4VrZrs0gb/view?usp=drive_link' },
  ], subModules: [
    // ── 4. Applied & Environmental Ecology ──
    { id: 'applied-environmental-ecology', icon: '🏗️', category: 'ecology',
      title:       { en: 'Applied & Environmental Ecology', fr: 'Écologie Appliquée & Environnementale', ar: 'البيئة التطبيقية والبيئية' },
      description: { en: 'Environmental Impact Assessment (EIA), pollution, remediation, and environmental legislation.',
                     fr: "Étude d'impact environnemental (EIE), pollution, remédiation et législation environnementale.",
                     ar: 'دراسة التأثير البيئي والتلوث والمعالجة والتشريعات البيئية.' },
      books: [], courseFiles: [], exercises: [],
      topics: [
        { id: 'eia-methods', icon: '📊', order: 3,
          title: { en: 'EIA Methods & Tools', fr: 'Méthodes & Outils d\'EIE', ar: 'طرق وأدوات دراسة التأثير البيئي' },
          description: { en: 'The NEPA gap (1970) and the decade of invention — six method families: ad hoc (Delphi technique), checklists (simple, descriptive, scaling, weighting-scaling), Leopold Matrix (1971, USGS Circular 645: 100 actions × 88 factors = 8,800 interactions, magnitude −10 to +10 / importance 1–10, worked road construction example), Sorensen network (1971: cause-effect chains revealing indirect/cumulative impacts — dam → downstream flow → groundwater → wells → conflict), McHarg overlay mapping (1969, Design with Nature: transparent sensitivity layers, modern GIS revolution with ArcGIS/QGIS), Battelle EES (1972: 4 categories, 18 components, 78 parameters, value functions, EIU = EQ × PIU, net impact formula), RIAM (1998), comparative analysis table (8 criteria × 6 methods), worked Sétif dam EIA combining all methods, cumulative effects assessment (CEA), and common misconceptions.', fr: 'Le fossé NEPA (1970) et la décennie d\'invention — six familles : ad hoc (Delphi), listes de contrôle, matrice de Leopold (1971 : 100 actions × 88 facteurs = 8 800 interactions, magnitude/importance, exemple routier), réseau Sorensen (chaînes cause-effet, impacts indirects), cartographie McHarg (1969, SIG moderne), système Battelle (1972 : 78 paramètres, UIE = QE × UIP), RIAM, tableau comparatif, exemple barrage Sétif multi-méthodes, évaluation cumulative, idées fausses.', ar: 'فجوة NEPA (1970) وعقد الابتكار — ست عائلات: ارتجالية (دلفي)، قوائم مراجعة، مصفوفة ليوبولد (1971: 100 إجراء × 88 عامل = 8,800 تفاعل، حجم/أهمية، مثال طريق)، شبكة سورنسن (سلاسل سبب-نتيجة، آثار غير مباشرة)، تراكب ماكهارغ (1969، SIG حديث)، نظام باتيل (1972: 78 بارامتر، UIE = JB × OAB)، RIAM، جدول مقارن، مثال سد سطيف متعدد الطرق، تقييم تراكمي، مفاهيم خاطئة.' },
          explanation: 'files/explanations/ecology/applied-environmental-ecology/eia-methods/eia-methods', videoId: '', playlist: '',
          courseFiles: [], books: [], exercises: [], quizzes: [],
        },
      ],
    },
  ],
});
