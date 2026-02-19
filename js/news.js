// ╔══════════════════════════════════════════════════════════════════════╗
// ║                 📰  GREEN SCIENCE — NEWS & EVENTS                   ║
// ║                                                                      ║
// ║  Add your latest news, events, and updates here.                     ║
// ║  Newest items first. The site shows the latest 6 by default.         ║
// ║                                                                      ║
// ║  TYPES:                                                              ║
// ║    'video'    → 🎬 New video on your channel                         ║
// ║    'app'      → 📱 New app release or update                         ║
// ║    'seminar'  → 🎓 Seminar, conference, workshop                     ║
// ║    'result'   → 📊 Exam results, grades                              ║
// ║    'event'    → 📅 General event                                     ║
// ║    'update'   → 🔔 Site or content update                            ║
// ║    'news'     → 📰 General news                                      ║
// ║                                                                      ║
// ║  TEMPLATE:                                                           ║
// ║  {                                                                   ║
// ║    type:  'video',                                                   ║
// ║    date:  '2025-06-15',              // YYYY-MM-DD format            ║
// ║    title: { en: '', fr: '', ar: '' },                                ║
// ║    desc:  { en: '', fr: '', ar: '' },                                ║
// ║    link:  'https://...',             // optional: external link      ║
// ║    pin:   false,                     // optional: pin to top         ║
// ║    eventDate: '2025-07-01',          // optional: event start date   ║
// ║    deadline:  '2025-06-25',          // optional: registration/end   ║
// ║  }                                                                   ║
// ╚══════════════════════════════════════════════════════════════════════╝

const newsItems = [

  // ── Pinned example ──
  {
    type:  'seminar',
    date:  '2026-02-02',
    pin:   true,
    eventDate: '2026-05-01',           // ← when the event takes place
    deadline:  '2026-03-31',           // ← registration deadline
    title: {
      en: 'The Eleventh International Scientific Conference on the Valorisation of Bioresources',
      fr: 'Les Onzièmes Journées Scientifiques Internationales sur la Valorisation des Bioressources',
      ar: 'الندوة العلمية الدولية الحادية عشرة حول الاستفادة من الموارد الحيوية',
    },
    desc: {
      en: 'Join us for a 3-day intensive workshop on modern soil analysis techniques at the University of Biskra.',
      fr: 'Rejoignez-nous pour un atelier intensif de 3 jours sur les techniques modernes d\'analyse des sols à l\'Université de Biskra.',
      ar: 'انضموا إلينا في ورشة عمل مكثفة لمدة 3 أيام حول تقنيات تحليل التربة الحديثة في جامعة بسكرة.',
    },
    link: 'https://www.biolival.com.tn/presentation-11es-journees/',
  },

  // ── Recent items ──
  {
    type:  'video',
    date:  '2025-12-13',
    title: {
      en: 'New Video: Where Does Plant Food Really Come From',
      fr: 'Nouvelle vidéo : D’où vient réellement la nourriture des plantes',
      ar: 'من أين يأتي طعام النبات؟',
    },
    desc: {
      en: '',
      fr: '',
      ar: '',
    },
    link: 'https://www.youtube.com/watch?v=FP_nltHwsCo&t',
  },

  {
    type:  'app',
    date:  '2025-05-20',
    title: {
      en: 'Green Science Quiz v2.0 Released',
      fr: 'Green Science Quiz v2.0 disponible',
      ar: 'إصدار Green Science Quiz v2.0',
    },
    desc: {
      en: 'New version with improved UI, faster imports, and support for image-based questions.',
      fr: 'Nouvelle version avec une interface améliorée, des importations plus rapides et la prise en charge des questions avec images.',
      ar: 'إصدار جديد بواجهة محسنة واستيراد أسرع ودعم الأسئلة المصورة.',
    },
    link: 'https://www.mediafire.com/file/yoszkbo8ernqq9z/GS_Quiz.apk/file',
  },

  {
    type:  'update',
    date:  '2026-02-17',
    title: {
      en: 'New topic: Soil Water Added',
      fr: 'Nouveau module : Eau du Sol ajouté',
      ar: 'موضوع جديد: تم إضافة ماء التربة',
    },
    desc: {
      en: 'Water retention, movement, and soil moisture characteristics.',
      fr: 'Rétention d\'eau, mouvement et caractéristiques d\'humidité du sol.',
      ar: 'احتباس الماء وحركته وخصائص رطوبة التربة.',
    },
    link: 'http://localhost:8000/pages/topic.html?mod=soil&sub=soil-physics&topic=water',
  },


  // ╔────────────────────────────────────────────────╗
  // │  ADD NEW ITEMS ABOVE — newest first            │
  // │                                                │
  // │  Copy this template:                           │
  // │                                                │
  // │  {                                             │
  // │    type:  'video',                             │
  // │    date:  '2025-01-01',                        │
  // │    title: { en: '', fr: '', ar: '' },          │
  // │    desc:  { en: '', fr: '', ar: '' },          │
  // │    link:  '',                                  │
  // │    eventDate: '2025-02-01',   // optional      │
  // │    deadline:  '2025-01-25',   // optional      │
  // │    pin:   false,              // optional      │
  // │  },                                            │
  // ╚────────────────────────────────────────────────╝

];
