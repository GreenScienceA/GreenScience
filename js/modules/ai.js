// ╔════════════════════════════════════════════════════════════════════╗
// ║  MODULE: ARTIFICIAL INTELLIGENCE                                  ║
// ╚════════════════════════════════════════════════════════════════════╝

modules.push({
  id: 'ai', icon: '🤖', category: 'tech',
  title:       { en: 'Artificial Intelligence', fr: 'Intelligence Artificielle', ar: 'الذكاء الاصطناعي' },
  description: { en: 'Foundations of artificial intelligence, machine learning algorithms, and practical applications in science and agriculture.',
                 fr: 'Fondements de l\'intelligence artificielle, algorithmes d\'apprentissage automatique et applications pratiques en science et agriculture.',
                 ar: 'أسس الذكاء الاصطناعي وخوارزميات التعلم الآلي والتطبيقات العملية في العلوم والزراعة.' },
  books: [],
  subModules: [
    // ── 4. AI in Agriculture ──
    { id: 'ai-agriculture', icon: '🌾', category: 'tech',
      title: { en: 'AI in Agriculture', fr: 'IA en Agriculture', ar: 'الذكاء الاصطناعي في الزراعة' },
      description: { en: 'Precision agriculture, crop monitoring, yield prediction, and smart irrigation.', fr: 'Agriculture de précision, suivi des cultures, prédiction de rendement et irrigation intelligente.', ar: 'الزراعة الدقيقة ومراقبة المحاصيل والتنبؤ بالمحصول والري الذكي.' },
      books: [], courseFiles: [], exercises: [],
      topics: [
        { id: 'precision-ag', icon: '📡', order: 1, 
          title: { en: 'Precision Agriculture', fr: 'Agriculture de Précision', ar: 'الزراعة الدقيقة' }, 
          description: { en: 'Remote sensing, GPS, variable rate technology.', fr: 'Télédétection, GPS, technologie à taux variable.', ar: 'الاستشعار عن بعد وGPS وتقنية المعدل المتغير.' }, 
          explanation: 'files/explanations/ai/ai-agriculture/precision-ag/precision-ag', videoId: '', playlist: '', courseFiles: [], books: [], exercises: [], quizzes: [] },
       ],
    },
  ],
});
