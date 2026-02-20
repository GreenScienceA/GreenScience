// ╔══════════════════════════════════════════════════════════════════════╗
// ║                 📦  GREEN SCIENCE — CONTENT DATA                    ║
// ║                                                                      ║
// ║  Apps are defined here. Modules are loaded from modules/*.js         ║
// ║  Each module file calls modules.push({...})                          ║
// ║                                                                      ║
// ║  FILE STRUCTURE:                                                     ║
// ║  config.js  → gradients & SVGs                                       ║
// ║  i18n.js    → all labels (edit to rename sections)                   ║
// ║  data.js    → apps + modules array (this file)                       ║
// ║  modules/   → one file per module (soil.js, plant.js, etc.)          ║
// ║  engine.js  → search & logic (don't touch)                           ║
// ║                                                                      ║
// ║  EXPLANATION FILES:                                                  ║
// ║  explanations/folder/topic.en.html  (English)                        ║
// ║  explanations/folder/topic.fr.html  (French)                         ║
// ║  explanations/folder/topic.ar.html  (Arabic)                         ║
// ║  In data: explanation: 'explanations/folder/topic'  (no extension)   ║
// ╚══════════════════════════════════════════════════════════════════════╝


// ══════════════════════════════════════════════════════════════════════
// █  APPS  (shown in the carousel on the home page)
// ══════════════════════════════════════════════════════════════════════


const apps = [

  // ┌────────────────────────────────────────────┐
  // │  App 1: Green Science Quiz                  │
  // └────────────────────────────────────────────┘
  {
    id:       'green-science-quiz',
    icon:     '<img src="../files/images/icons/GSQuiz.svg" width="40" height="40" alt="logo">',
    name:     { en: 'Green Science Quiz', fr: 'Green Science Quiz', ar: 'Green Science Quiz' },
    description: {
      en: 'Download quiz files, import them into the app, and test your knowledge with multiple choice questions.',
      fr: 'Téléchargez les fichiers quiz, importez-les dans l\'application et testez vos connaissances.',
      ar: 'حمّل ملفات الاختبار، استوردها في التطبيق واختبر معلوماتك بأسئلة الاختيار المتعدد.',
    },
    videoId:  'K2tFoy-TaX8',
    storeUrl: 'https://www.mediafire.com/file/yoszkbo8ernqq9z/GS_Quiz.apk/file',
    steps: [
      { title: { en: 'Download',  fr: 'Télécharger',  ar: 'حمّل' },
        desc:  { en: 'Pick a quiz file and tap download', fr: 'Choisissez un quiz et appuyez sur télécharger', ar: 'اختر ملف اختبار واضغط تحميل' } },
      { title: { en: 'Open App',  fr: 'Ouvrir l\'app', ar: 'افتح التطبيق' },
        desc:  { en: 'Launch Green Science Quiz on your phone', fr: 'Lancez Green Science Quiz sur votre téléphone', ar: 'شغّل تطبيق Green Science Quiz على هاتفك' } },
      { title: { en: 'Import',    fr: 'Importer',      ar: 'استيراد' },
        desc:  { en: 'Import the JSON file from the app menu', fr: 'Importez le fichier JSON depuis le menu', ar: 'استورد ملف JSON من قائمة التطبيق' } },
    ],
  },

  // ┌────────────────────────────────────────────┐
  // │  App 2: Research Manager                    │
  // └────────────────────────────────────────────┘
  {
    id:       'research-manager',
    icon:     '<img src="../files/images/icons/OS.ico" width="40" height="40" alt="logo">',
    name:     { en: 'Research Manager', fr: 'Research Manager', ar: 'Research Manager' },
    description: {
      en: 'A powerful and intuitive Research Manager App designed to streamline your academic workflow.',
      fr: 'Une application Research Manager puissante et intuitive conçue pour rationaliser votre flux de travail universitaire.',
      ar: 'تطبيق Research Manager قوي وسهل الاستخدام مصمم لتبسيط سير عملك الأكاديمي.',
    },
    videoId:  'x0UzAgA6rSw',
    storeUrl: 'https://www.mediafire.com/file/r11pl122j194col/Research_Manager_-_Demo.rar/file',
    steps: [
      { title: { en: 'Download',  fr: 'Télécharger',  ar: 'حمّل' },
        desc:  { en: 'Extract the app files and open it', fr: 'Extrayez les fichiers de l\'application et ouvrez-la.', ar: 'قم باستخراج ملفات التطبيق وافتحه' } },
      { title: { en: 'Open App',  fr: 'Ouvrir l\'app', ar: 'افتح التطبيق' },
        desc:  { en: 'Easily download and organize articles', fr: 'Téléchargez et organisez facilement des articles', ar: 'قم بتنزيل المقالات وتنظيمها بسهولة' } },
      { title: { en: 'Star Your Research',    fr: 'Commencez Vos Recherches',      ar: 'ابدأ بحثك' },
        desc:  { en: 'Built to simplify research, enhance productivity, and keep your scientific work organized.', fr: 'Conçu pour simplifier la recherche, améliorer la productivité et organiser votre travail scientifique.', ar: 'صُمم لتبسيط البحث وتعزيز الإنتاجية والحفاظ على تنظيم عملك العلمي.' } },
    ],
  },

  // ── ADD MORE APPS — copy a block above ──
];


// ══════════════════════════════════════════════════════════════════════
// █  QUICK ACCESS CARDS  (shown on the homepage strip)
// ══════════════════════════════════════════════════════════════════════


const quickAccessCards = [
  {
    id: 'books',
    gradient: 'qa-books',
    icon: '📚',
    title: { en: 'All Books', fr: 'Tous les livres', ar: 'جميع الكتب' },
    badge: { en: 'Books & References', fr: 'Livres & Références', ar: 'الكتب والمراجع' },
    countFn: function() { return getAllBooks().length; },
    countLabel: 'booksSection',
    href: 'pages/books.html',
    illustration: '<svg class="qa-illustration" viewBox="0 0 100 100" fill="none"><rect x="15" y="20" width="18" height="60" rx="2" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><rect x="38" y="14" width="18" height="66" rx="2" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><rect x="61" y="24" width="18" height="56" rx="2" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><line x1="20" y1="35" x2="28" y2="35" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><line x1="43" y1="30" x2="51" y2="30" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/></svg>',
  },
  {
    id: 'quizzes',
    gradient: 'qa-quizzes',
    icon: '📝',
    title: { en: 'All Quizzes', fr: 'Tous les quiz', ar: 'جميع الاختبارات' },
    badge: { en: 'Quizzes', fr: 'Quiz', ar: 'الاختبارات' },
    countFn: function() { return getAllQuizzes().length; },
    countLabel: 'quizSection',
    href: 'pages/quizzes.html',
    illustration: '<svg class="qa-illustration" viewBox="0 0 100 100" fill="none"><rect x="20" y="15" width="50" height="65" rx="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><circle cx="35" cy="35" r="4" stroke="rgba(255,255,255,0.35)" stroke-width="2"/><circle cx="35" cy="50" r="4" stroke="rgba(255,255,255,0.35)" stroke-width="2"/><line x1="45" y1="35" x2="62" y2="35" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><line x1="45" y1="50" x2="58" y2="50" stroke="rgba(255,255,255,0.25)" stroke-width="2"/><path d="M30 33 l3 4 l7-8" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    id: 'modules',
    gradient: 'qa-modules',
    gradientCSS: 'linear-gradient(135deg, #2ECC71 0%, #1abc9c 50%, #16a085 100%)',
    icon: '📦',
    title: { en: 'All Modules', fr: 'Tous les modules', ar: 'جميع الوحدات' },
    badge: { en: 'Modules', fr: 'Modules', ar: 'الوحدات' },
    countFn: function() { return modules.length; },
    countLabel: 'modulesTotal',
    href: 'pages/modules.html',
    illustration: '<svg class="qa-illustration" viewBox="0 0 100 100" fill="none"><rect x="12" y="18" width="30" height="26" rx="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><rect x="52" y="18" width="30" height="26" rx="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><rect x="12" y="54" width="30" height="26" rx="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><rect x="52" y="54" width="30" height="26" rx="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><line x1="20" y1="30" x2="34" y2="30" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><line x1="60" y1="30" x2="74" y2="30" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><line x1="20" y1="66" x2="34" y2="66" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/><circle cx="67" cy="66" r="5" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/></svg>',
  },
  {
    id: 'news',
    gradient: 'qa-news',
    icon: '📰',
    title: { en: 'News & Events', fr: 'Actualités', ar: 'الأخبار والأحداث' },
    badge: { en: 'News & Events', fr: 'Actualités & Événements', ar: 'الأخبار والأحداث' },
    countFn: function() { return typeof newsItems !== 'undefined' ? newsItems.length : 0; },
    countLabel: 'newsTitle',
    scrollTo: 'newsSlot',
    illustration: '<svg class="qa-illustration" viewBox="0 0 100 100" fill="none"><rect x="15" y="20" width="60" height="55" rx="4" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><line x1="22" y1="32" x2="50" y2="32" stroke="rgba(255,255,255,0.3)" stroke-width="2.5"/><line x1="22" y1="40" x2="68" y2="40" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/><line x1="22" y1="47" x2="65" y2="47" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/></svg>',
  },
  {
    id: 'apps',
    gradient: 'qa-apps',
    icon: '📱',
    title: { en: 'Our Apps', fr: 'Nos applications', ar: 'تطبيقاتنا' },
    badge: { en: 'Applications', fr: 'Applications', ar: 'التطبيقات' },
    countFn: function() { return apps.length; },
    countLabel: 'appsLabel',
    scrollTo: 'appsContainer',
    illustration: '<svg class="qa-illustration" viewBox="0 0 100 100" fill="none"><rect x="28" y="12" width="38" height="70" rx="8" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><line x1="28" y1="24" x2="66" y2="24" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/><line x1="28" y1="68" x2="66" y2="68" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/><circle cx="47" cy="74" r="3" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/><rect x="34" y="32" width="10" height="10" rx="3" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/><rect x="50" y="32" width="10" height="10" rx="3" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/></svg>',
  },
  

  // ── ADD MORE QUICK ACCESS CARDS — copy a block above ──
  // Example: Add a "Courses" card:
  // {
  //   id: 'courses',
  //   gradient: 'qa-courses',             // Add .qa-courses::before in CSS
  //   gradientCSS: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
  //   icon: '🎓',
  //   title: { en: 'All Courses', fr: 'Tous les cours', ar: 'جميع الدورات' },
  //   badge: { en: 'Courses', fr: 'Cours', ar: 'الدورات' },
  //   countFn: function() { return 42; },
  //   countLabel: 'courseSection',
  //   href: 'pages/courses.html',
  //   illustration: '<svg class="qa-illustration" viewBox="0 0 100 100" fill="none">...</svg>',
  // },
];


// ══════════════════════════════════════════════════════════════════════
// █  ADMIN CONFIG  (for site analytics)
// ══════════════════════════════════════════════════════════════════════


const ADMIN_KEY = 'greenadmin';
const MODULES_GRID_LIMIT = 10;


// ══════════════════════════════════════════════════════════════════════
// █  MODULES ARRAY  (populated by modules/*.js files)
// ══════════════════════════════════════════════════════════════════════

const modules = [];
