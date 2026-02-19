// ╔════════════════════════════════════════════════════════════════════╗
// ║  MODULE: CLIMATOLOGY                                              ║
// ╚════════════════════════════════════════════════════════════════════╝

modules.push({
  id: 'climate', icon: '🌤️', category: 'climate',
  title:       { en: 'Climatology',         fr: 'Climatologie',         ar: 'المناخ' },
  description: { en: 'Study of climate systems, atmospheric processes, bioclimatic indices, and their impact on agriculture and ecosystems.', fr: 'Étude des systèmes climatiques, des processus atmosphériques, des indices bioclimatiques et de leur impact sur l\'agriculture et les écosystèmes.', ar: 'دراسة الأنظمة المناخية والعمليات الجوية والمؤشرات المناخية الحيوية وتأثيرها على الزراعة والأنظمة البيئية.' },
  books: [],
  subModules: [
    { id: 'generalclimate', icon: '🌦', category: 'generalclimate',
      title:       { en: 'General Climatology',   fr: 'Climatologie Générale',    ar: 'المناخ الحيوي' },
      description: { en: 'Atmosphere, solar radiation, temperature, precipitation, wind, air masses, climate classification (Köppen).',
                     fr: 'Atmosphère, rayonnement solaire, température, précipitations, vent, masses d\'air, classification climatique (Köppen).',
                     ar: 'الغلاف الجوي، الإشعاع الشمسي، درجة الحرارة، هطول الأمطار، الرياح، الكتل الهوائية، تصنيف المناخ (كوبن).' },
      books: [], courseFiles: [], exercises: [], topics: [],
    },
    { id: 'bioclimate', icon: '🌦', category: 'bioclimate',
      title:       { en: 'Bioclimatology',   fr: 'Bioclimatologie',    ar: 'المناخ الحيوي' },
      description: { en: 'Climate effects on living organisms, thermal indices, aridity indices (De Martonne, Emberger), bioclimatic stages.',
                     fr: 'Effets du climat sur les organismes vivants, indices thermiques, indices d\'aridité (De Martonne, Emberger), stades bioclimatiques.',
                     ar: 'تأثيرات المناخ على الكائنات الحية، المؤشرات الحرارية، مؤشرات الجفاف (دي مارتون، إمبرغر)، المراحل المناخية الحيوية.' },
      books: [], courseFiles: [], exercises: [], topics: [],
    },
  ],
});
