export type Language = "it" | "en" | "es" | "fr";

export const languages: Language[] = ["it", "en", "es", "fr"];

export const languageMeta: Record<Language, { label: string; flag: string; locale: string; path: string }> = {
  it: { label: "Italiano", flag: "🇮🇹", locale: "it_IT", path: "/" },
  en: { label: "English", flag: "🇬🇧", locale: "en_US", path: "/en/" },
  es: { label: "Español", flag: "🇪🇸", locale: "es_ES", path: "/es/" },
  fr: { label: "Français", flag: "🇫🇷", locale: "fr_FR", path: "/fr/" }
};

const commonConditions = {
  it: [
    {
      title: "Mal di schiena, lombalgia e sciatica",
      text: "Valutazione del dolore, della mobilità e dei carichi quotidiani per costruire un recupero graduale e sostenibile."
    },
    {
      title: "Dolore al collo, cervicalgia, spalle e postura",
      text: "Trattamento delle tensioni e delle limitazioni che influenzano lavoro, riposo, postura e movimento delle spalle."
    },
    {
      title: "Ginocchio, anca, caviglia e lesioni da corsa",
      text: "Percorsi per dolore articolare, sovraccarico e ritorno progressivo alla camminata, corsa o attività sportiva."
    },
    {
      title: "Polso, gomito, mano e movimenti ripetitivi",
      text: "Supporto per sintomi legati a lavoro, sport o gesti ripetuti, con strategie per ridurre irritazione e recidive."
    },
    {
      title: "Infortuni sportivi, palestra e tensioni muscolari",
      text: "Recupero orientato alla performance, con gestione del carico e progressioni adatte al livello di attività."
    },
    {
      title: "Disturbi neurologici, incluso esiti di ictus",
      text: "Riabilitazione mirata a coordinazione, equilibrio, cammino e autonomia nella vita quotidiana."
    },
    {
      title: "Equilibrio, instabilità e rischio di caduta",
      text: "Lavoro su sicurezza, forza e controllo per muoversi con maggiore fiducia a casa e fuori."
    }
  ],
  en: [
    {
      title: "Back pain, low back pain and sciatica",
      text: "Assessment of pain, mobility and daily load to build a gradual, sustainable recovery pathway."
    },
    {
      title: "Neck pain, shoulders and posture-related issues",
      text: "Treatment for tension and restrictions that affect work, rest, posture and shoulder movement."
    },
    {
      title: "Knee, hip, ankle pain and running injuries",
      text: "Care for joint pain, overload and progressive return to walking, running or sport."
    },
    {
      title: "Wrist, elbow, hand and repetitive movement overload",
      text: "Support for symptoms linked to work, sport or repeated gestures, with strategies to reduce irritation and recurrence."
    },
    {
      title: "Sports injuries, gym-related pain and muscle tension",
      text: "Performance-oriented recovery with load management and progressions matched to your activity level."
    },
    {
      title: "Neurological conditions, including stroke recovery",
      text: "Rehabilitation focused on coordination, balance, walking and autonomy in everyday life."
    },
    {
      title: "Balance, instability and fall-risk concerns",
      text: "Work on safety, strength and control so movement feels more confident at home and outside."
    }
  ],
  es: [
    {
      title: "Dolor de espalda, lumbalgia y ciática",
      text: "Valoración del dolor, la movilidad y las cargas diarias para construir una recuperación gradual y sostenible."
    },
    {
      title: "Dolor cervical, hombros y alteraciones posturales",
      text: "Tratamiento de tensiones y limitaciones que afectan trabajo, descanso, postura y movimiento del hombro."
    },
    {
      title: "Rodilla, cadera, tobillo y lesiones por carrera",
      text: "Atención para dolor articular, sobrecarga y vuelta progresiva a caminar, correr o practicar deporte."
    },
    {
      title: "Muñeca, codo, mano y movimientos repetitivos",
      text: "Apoyo para síntomas ligados al trabajo, deporte o gestos repetidos, reduciendo irritación y recaídas."
    },
    {
      title: "Lesiones deportivas, gimnasio y tensión muscular",
      text: "Recuperación orientada al rendimiento, con control de carga y progresiones adaptadas al nivel de actividad."
    },
    {
      title: "Trastornos neurológicos, incluidos ictus",
      text: "Rehabilitación enfocada en coordinación, equilibrio, marcha y autonomía en la vida diaria."
    },
    {
      title: "Equilibrio, inestabilidad y riesgo de caídas",
      text: "Trabajo sobre seguridad, fuerza y control para moverse con más confianza dentro y fuera de casa."
    }
  ],
  fr: [
    {
      title: "Mal de dos, lombalgie et sciatique",
      text: "Évaluation de la douleur, de la mobilité et des charges quotidiennes pour construire une récupération progressive."
    },
    {
      title: "Douleur cervicale, épaules et posture",
      text: "Traitement des tensions et limitations qui influencent travail, repos, posture et mouvement de l'épaule."
    },
    {
      title: "Genou, hanche, cheville et blessures liées à la course",
      text: "Prise en charge de douleur articulaire, surcharge et retour progressif à la marche, course ou activité sportive."
    },
    {
      title: "Poignet, coude, main et gestes répétitifs",
      text: "Accompagnement des symptômes liés au travail, au sport ou aux gestes répétés, avec prévention des récidives."
    },
    {
      title: "Blessures sportives, salle de sport et tensions musculaires",
      text: "Récupération orientée performance, avec gestion de charge et progressions adaptées au niveau d'activité."
    },
    {
      title: "Troubles neurologiques, y compris suites d'AVC",
      text: "Rééducation centrée sur coordination, équilibre, marche et autonomie dans la vie quotidienne."
    },
    {
      title: "Équilibre, instabilité et risque de chute",
      text: "Travail sur sécurité, force et contrôle pour bouger avec plus de confiance à domicile et à l'extérieur."
    }
  ]
};

const commonTreatments = {
  it: [
    {
      title: "Terapia manuale",
      text: "Tecniche mirate per ridurre dolore e rigidità, migliorare la mobilità articolare e preparare il corpo al movimento attivo."
    },
    {
      title: "Esercizio terapeutico",
      text: "Esercizi progressivi e personalizzati per recuperare forza, controllo, equilibrio e sicurezza nei gesti quotidiani."
    },
    {
      title: "Osteopatia",
      text: "Valutazione e trattamento manuale delle relazioni tra mobilità, postura e funzione, con un approccio globale alla persona."
    },
    {
      title: "Riabilitazione post-operatoria",
      text: "Percorsi graduali dopo interventi ortopedici, con obiettivi chiari per mobilità, carico, forza e ritorno all'autonomia."
    },
    {
      title: "Riabilitazione sportiva",
      text: "Programmi per rientrare ad allenamento e sport con progressioni misurabili, gestione del carico e prevenzione delle recidive."
    },
    {
      title: "Riabilitazione neurologica",
      text: "Supporto per equilibrio, coordinazione, cammino e autonomia nelle condizioni neurologiche, inclusi esiti di ictus."
    },
    {
      title: "Fisioterapia geriatrica",
      text: "Trattamenti dedicati a mobilità, forza, sicurezza nel cammino e prevenzione delle cadute nelle persone anziane."
    },
    {
      title: "Prevenzione e mantenimento",
      text: "Sedute e programmi per mantenere i risultati, migliorare le abitudini di movimento e ridurre il rischio di nuovi episodi."
    },
    {
      title: "Trattamenti a domicilio",
      text: "Assistenza fisioterapica quando spostarsi è difficile, con obiettivi pratici per recupero, autonomia e qualità della vita."
    }
  ],
  en: [
    {
      title: "Manual therapy",
      text: "Targeted hands-on techniques to reduce pain and stiffness, improve joint mobility and prepare the body for active movement."
    },
    {
      title: "Therapeutic exercise",
      text: "Progressive, personalized exercises to rebuild strength, control, balance and confidence in everyday movement."
    },
    {
      title: "Osteopathy",
      text: "Manual assessment and treatment of mobility, posture and function, with a whole-person clinical perspective."
    },
    {
      title: "Post-operative rehabilitation",
      text: "Step-by-step recovery after orthopedic surgery, with clear goals for mobility, loading, strength and independence."
    },
    {
      title: "Sports rehabilitation",
      text: "Return-to-training and return-to-sport programs with measurable progressions, load management and recurrence prevention."
    },
    {
      title: "Neurological rehabilitation",
      text: "Support for balance, coordination, walking and autonomy in neurological conditions, including stroke recovery."
    },
    {
      title: "Geriatric physiotherapy",
      text: "Care focused on mobility, strength, walking safety and fall prevention for older adults."
    },
    {
      title: "Prevention and maintenance",
      text: "Sessions and programs to maintain results, improve movement habits and reduce the risk of recurring symptoms."
    },
    {
      title: "Home treatments",
      text: "Physiotherapy support when travel is difficult, with practical goals for recovery, autonomy and quality of life."
    }
  ],
  es: [
    {
      title: "Terapia manual",
      text: "Técnicas específicas para reducir dolor y rigidez, mejorar la movilidad articular y preparar el cuerpo para el movimiento activo."
    },
    {
      title: "Ejercicio terapéutico",
      text: "Ejercicios progresivos y personalizados para recuperar fuerza, control, equilibrio y seguridad en la vida diaria."
    },
    {
      title: "Osteopatía",
      text: "Evaluación y tratamiento manual de movilidad, postura y función, con una visión clínica global de la persona."
    },
    {
      title: "Rehabilitación postoperatoria",
      text: "Recuperación gradual tras cirugía ortopédica, con objetivos claros de movilidad, carga, fuerza y autonomía."
    },
    {
      title: "Rehabilitación deportiva",
      text: "Programas para volver al entrenamiento y al deporte con progresiones medibles, control de carga y prevención de recaídas."
    },
    {
      title: "Rehabilitación neurológica",
      text: "Apoyo para equilibrio, coordinación, marcha y autonomía en condiciones neurológicas, incluidos ictus."
    },
    {
      title: "Fisioterapia geriátrica",
      text: "Tratamientos centrados en movilidad, fuerza, seguridad al caminar y prevención de caídas en personas mayores."
    },
    {
      title: "Prevención y mantenimiento",
      text: "Sesiones y programas para mantener resultados, mejorar hábitos de movimiento y reducir el riesgo de nuevos episodios."
    },
    {
      title: "Tratamientos a domicilio",
      text: "Atención fisioterapéutica cuando desplazarse es difícil, con objetivos prácticos de recuperación, autonomía y calidad de vida."
    }
  ],
  fr: [
    {
      title: "Thérapie manuelle",
      text: "Techniques ciblées pour réduire douleur et raideur, améliorer la mobilité articulaire et préparer le corps au mouvement actif."
    },
    {
      title: "Exercice thérapeutique",
      text: "Exercices progressifs et personnalisés pour retrouver force, contrôle, équilibre et confiance dans les gestes quotidiens."
    },
    {
      title: "Ostéopathie",
      text: "Évaluation et traitement manuel de la mobilité, de la posture et de la fonction, avec une approche globale de la personne."
    },
    {
      title: "Rééducation post-opératoire",
      text: "Récupération graduelle après chirurgie orthopédique, avec objectifs clairs de mobilité, charge, force et autonomie."
    },
    {
      title: "Rééducation sportive",
      text: "Programmes de retour à l'entraînement et au sport avec progressions mesurables, gestion de charge et prévention des récidives."
    },
    {
      title: "Rééducation neurologique",
      text: "Accompagnement de l'équilibre, de la coordination, de la marche et de l'autonomie, y compris après AVC."
    },
    {
      title: "Physiothérapie gériatrique",
      text: "Soins centrés sur mobilité, force, sécurité à la marche et prévention des chutes chez les personnes âgées."
    },
    {
      title: "Prévention et entretien",
      text: "Séances et programmes pour maintenir les résultats, améliorer les habitudes de mouvement et limiter les récidives."
    },
    {
      title: "Soins à domicile",
      text: "Physiothérapie lorsque se déplacer est difficile, avec des objectifs concrets de récupération, autonomie et qualité de vie."
    }
  ]
};

export const siteContent = {
  it: {
    seo: {
      title: "MOVERE clinic | Fisioterapia e Osteopatia",
      description:
        "MOVERE clinic offre fisioterapia, osteopatia e riabilitazione personalizzata per dolore, postura, sport, neurologia e trattamenti a domicilio.",
      keywords:
        "fisioterapia, osteopatia, riabilitazione sportiva, mal di schiena, cervicalgia, sciatica, terapia manuale, fisioterapia geriatrica"
    },
    nav: {
      conditions: "Patologie e disturbi",
      treatments: "Trattamenti",
      about: "Chi sono",
      locations: "Sedi",
      blog: "Blog"
    },
    cta: {
      appointment: "Book now",
      treatments: "Vedi trattamenti",
      phone: "Chiama"
    },
    hero: {
      eyebrow: "MOVERE clinic",
      title: "MOVERE clinic",
      tagline: "movimento e vita",
      service: "Fisioterapia e Osteopatia",
      text:
        "Valutazione, trattamento e riabilitazione per dolore, postura, infortuni sportivi e recupero funzionale. Un percorso costruito sul tuo corpo, sui tuoi obiettivi e sulla qualità del movimento.",
      note: "Prima visita accurata, spiegazioni chiare e un piano di lavoro concreto."
    },
    trust: ["Percorsi su misura", "Fisioterapia + osteopatia", "Sport, postura, riabilitazione", "Trattamenti a domicilio"],
    conditions: {
      eyebrow: "Patologie e disturbi",
      title: "Dal dolore quotidiano al recupero sportivo: individuiamo cosa limita il movimento.",
      intro:
        "Il punto di partenza è capire la causa del problema, non solo il punto in cui senti dolore. La valutazione considera sintomi, mobilità, forza, postura, abitudini e richieste della tua vita quotidiana.",
      items: commonConditions.it
    },
    treatments: {
      eyebrow: "Trattamenti",
      title: "Trattamenti mirati, progressivi e facili da seguire.",
      intro:
        "Ogni piano combina le tecniche più adatte alla tua situazione: terapia manuale, osteopatia, esercizio terapeutico, educazione al movimento e strategie di prevenzione.",
      items: commonTreatments.it
    },
    about: {
      eyebrow: "Chi sono",
      title: "Un approccio clinico, umano e orientato a risultati sostenibili.",
      body:
        "MOVERE clinic nasce per offrire una presa in carico attenta: ascoltare, valutare, trattare e accompagnare il recupero con metodo. L'obiettivo è aiutarti a ridurre il dolore, recuperare funzione e capire come proteggere il movimento nel tempo.",
      points: ["Valutazione individuale e obiettivi condivisi", "Piano terapeutico comprensibile, senza passaggi inutili", "Progressione verso autonomia, prevenzione e mantenimento"]
    },
    locations: {
      eyebrow: "Sedi",
      title: "Studio su appuntamento e trattamenti a domicilio.",
      text:
        "Le visite sono organizzate su appuntamento, con il tempo necessario per valutare e trattare con attenzione. In caso di difficoltà a spostarsi, è possibile valutare un percorso a domicilio.",
      cards: ["Studio privato su appuntamento", "Percorsi per sportivi, lavoro e vita quotidiana", "Disponibilità per trattamenti a domicilio"]
    },
    blog: {
      eyebrow: "Blog",
      title: "Guide pratiche per capire meglio dolore, postura e recupero.",
      text: "Uno spazio editoriale pensato per spiegare concetti utili in modo semplice: quando muoversi, come gestire il carico e quali abitudini aiutano a mantenere i risultati."
    },
    appointment: {
      eyebrow: "Prenota",
      title: "Raccontaci cosa vuoi migliorare e prenota una valutazione.",
      text:
        "Scrivi o chiama per richiedere un appuntamento. Ti aiuteremo a capire il passo più adatto: prima valutazione, trattamento, riabilitazione o percorso di prevenzione.",
      fields: ["Dolore, infortunio o obiettivo", "Da quanto tempo è presente", "Sport, lavoro o necessità specifiche"]
    },
    footer: {
      contact: "Contatti",
      legal: "Privacy e note legali",
      language: "Lingua",
      navigation: "Navigazione"
    }
  },
  en: {
    seo: {
      title: "MOVERE clinic | Physiotherapy and Osteopathy",
      description:
        "MOVERE clinic provides personalized physiotherapy, osteopathy and rehabilitation for pain, posture, sport, neurological recovery and home treatments.",
      keywords:
        "physiotherapy, osteopathy, sports rehabilitation, back pain, neck pain, sciatica, manual therapy, geriatric physiotherapy"
    },
    nav: {
      conditions: "Conditions",
      treatments: "Treatments",
      about: "About",
      locations: "Locations",
      blog: "Blog"
    },
    cta: {
      appointment: "Book now",
      treatments: "View treatments",
      phone: "Call"
    },
    hero: {
      eyebrow: "MOVERE clinic",
      title: "MOVERE clinic",
      tagline: "movement is life",
      service: "Physiotherapy and Osteopathy",
      text:
        "Assessment, treatment and rehabilitation for pain, posture, sports injuries and functional recovery. A pathway built around your body, your goals and better movement quality.",
      note: "A careful first assessment, clear explanations and a concrete treatment plan."
    },
    trust: ["Tailored care pathways", "Physiotherapy + osteopathy", "Sport, posture, rehabilitation", "Home treatments available"],
    conditions: {
      eyebrow: "Conditions",
      title: "From daily pain to sports recovery: we identify what limits your movement.",
      intro:
        "The starting point is understanding the cause of the problem, not only where you feel pain. Assessment considers symptoms, mobility, strength, posture, habits and the demands of your everyday life.",
      items: commonConditions.en
    },
    treatments: {
      eyebrow: "Treatments",
      title: "Targeted, progressive treatments that are easy to follow.",
      intro:
        "Each plan combines the most appropriate tools for your situation: manual therapy, osteopathy, therapeutic exercise, movement education and prevention strategies.",
      items: commonTreatments.en
    },
    about: {
      eyebrow: "About",
      title: "A clinical, human approach focused on sustainable results.",
      body:
        "MOVERE clinic was created to offer attentive care: listen, assess, treat and guide recovery with method. The goal is to reduce pain, restore function and help you understand how to protect your movement over time.",
      points: ["Individual assessment and shared goals", "A clear treatment plan without unnecessary steps", "Progression toward autonomy, prevention and maintenance"]
    },
    locations: {
      eyebrow: "Locations",
      title: "Clinic appointments and home treatments.",
      text:
        "Visits are organized by appointment, with enough time to assess and treat carefully. When travel is difficult, a home-treatment pathway can be discussed.",
      cards: ["Private clinic by appointment", "Care for sport, work and everyday life", "Home treatment availability"]
    },
    blog: {
      eyebrow: "Blog",
      title: "Practical guides to better understand pain, posture and recovery.",
      text: "An editorial space designed to explain useful concepts simply: when to move, how to manage load and which habits help maintain results."
    },
    appointment: {
      eyebrow: "Appointment",
      title: "Tell us what you want to improve and book an assessment.",
      text:
        "Write or call to request an appointment. We will help you understand the right next step: first assessment, treatment, rehabilitation or prevention pathway.",
      fields: ["Pain, injury or goal", "How long it has been present", "Sport, work or specific needs"]
    },
    footer: {
      contact: "Contact",
      legal: "Privacy and legal notes",
      language: "Language",
      navigation: "Navigation"
    }
  },
  es: {
    seo: {
      title: "MOVERE clinic | Fisioterapia y Osteopatia",
      description:
        "MOVERE clinic ofrece fisioterapia, osteopatia y rehabilitacion personalizada para dolor, postura, deporte, neurologia y tratamientos a domicilio.",
      keywords:
        "fisioterapia, osteopatia, rehabilitacion deportiva, dolor de espalda, cervicalgia, ciatica, terapia manual, fisioterapia geriatrica"
    },
    nav: {
      conditions: "Patologias y molestias",
      treatments: "Tratamientos",
      about: "Quien soy",
      locations: "Sedes",
      blog: "Blog"
    },
    cta: {
      appointment: "Book now",
      treatments: "Ver tratamientos",
      phone: "Llamar"
    },
    hero: {
      eyebrow: "MOVERE clinic",
      title: "MOVERE clinic",
      tagline: "el movimiento es vida",
      service: "Fisioterapia y Osteopatia",
      text:
        "Evaluación, tratamiento y rehabilitación para dolor, postura, lesiones deportivas y recuperación funcional. Un proceso construido alrededor de tu cuerpo, tus objetivos y la calidad del movimiento.",
      note: "Primera valoración precisa, explicaciones claras y un plan de trabajo concreto."
    },
    trust: ["Procesos a medida", "Fisioterapia + osteopatia", "Deporte, postura, rehabilitacion", "Tratamientos a domicilio"],
    conditions: {
      eyebrow: "Patologias y molestias",
      title: "Del dolor diario a la recuperación deportiva: identificamos qué limita tu movimiento.",
      intro:
        "El punto de partida es entender la causa del problema, no solo dónde duele. La valoración considera síntomas, movilidad, fuerza, postura, hábitos y las exigencias de tu vida diaria.",
      items: commonConditions.es
    },
    treatments: {
      eyebrow: "Tratamientos",
      title: "Tratamientos específicos, progresivos y fáciles de seguir.",
      intro:
        "Cada plan combina las herramientas más adecuadas para tu situación: terapia manual, osteopatía, ejercicio terapéutico, educación del movimiento y estrategias de prevención.",
      items: commonTreatments.es
    },
    about: {
      eyebrow: "Quien soy",
      title: "Un enfoque clínico, humano y orientado a resultados sostenibles.",
      body:
        "MOVERE clinic nace para ofrecer una atención cuidadosa: escuchar, valorar, tratar y acompañar la recuperación con método. El objetivo es reducir el dolor, recuperar función y ayudarte a proteger el movimiento a largo plazo.",
      points: ["Valoración individual y objetivos compartidos", "Plan terapéutico claro, sin pasos innecesarios", "Progresión hacia autonomía, prevención y mantenimiento"]
    },
    locations: {
      eyebrow: "Sedes",
      title: "Consulta y tratamientos a domicilio.",
      text:
        "Las visitas se organizan con cita previa, con el tiempo necesario para valorar y tratar con atención. Si desplazarse es difícil, se puede estudiar un proceso a domicilio.",
      cards: ["Consulta privada con cita", "Procesos para deporte, trabajo y vida diaria", "Disponibilidad de tratamientos a domicilio"]
    },
    blog: {
      eyebrow: "Blog",
      title: "Guías prácticas para entender mejor dolor, postura y recuperación.",
      text: "Un espacio editorial para explicar conceptos útiles de forma simple: cuándo moverse, cómo gestionar la carga y qué hábitos ayudan a mantener resultados."
    },
    appointment: {
      eyebrow: "Cita",
      title: "Cuéntanos qué quieres mejorar y reserva una valoración.",
      text:
        "Escribe o llama para solicitar una cita. Te ayudaremos a definir el siguiente paso: primera valoración, tratamiento, rehabilitación o prevención.",
      fields: ["Dolor, lesión u objetivo", "Desde cuándo está presente", "Deporte, trabajo o necesidades específicas"]
    },
    footer: {
      contact: "Contacto",
      legal: "Privacidad y notas legales",
      language: "Idioma",
      navigation: "Navegación"
    }
  },
  fr: {
    seo: {
      title: "MOVERE clinic | Physiotherapie et Osteopathie",
      description:
        "MOVERE clinic propose physiotherapie, osteopathie et reeducation personnalisee pour douleur, posture, sport, neurologie et soins a domicile.",
      keywords:
        "physiotherapie, osteopathie, reeducation sportive, mal de dos, cervicalgie, sciatique, therapie manuelle, physiotherapie geriatrique"
    },
    nav: {
      conditions: "Pathologies et troubles",
      treatments: "Traitements",
      about: "A propos",
      locations: "Lieux",
      blog: "Blog"
    },
    cta: {
      appointment: "Book now",
      treatments: "Voir les traitements",
      phone: "Appeler"
    },
    hero: {
      eyebrow: "MOVERE clinic",
      title: "MOVERE clinic",
      tagline: "le mouvement, c'est la vie",
      service: "Physiotherapie et Osteopathie",
      text:
        "Évaluation, traitement et rééducation pour douleur, posture, blessures sportives et récupération fonctionnelle. Un parcours construit autour de votre corps, vos objectifs et la qualité du mouvement.",
      note: "Première évaluation attentive, explications claires et plan de travail concret."
    },
    trust: ["Parcours sur mesure", "Physiotherapie + osteopathie", "Sport, posture, reeducation", "Soins a domicile disponibles"],
    conditions: {
      eyebrow: "Pathologies et troubles",
      title: "De la douleur quotidienne au retour au sport: nous identifions ce qui limite le mouvement.",
      intro:
        "Le point de départ consiste à comprendre la cause du problème, pas seulement l'endroit où la douleur apparaît. L'évaluation considère symptômes, mobilité, force, posture, habitudes et exigences du quotidien.",
      items: commonConditions.fr
    },
    treatments: {
      eyebrow: "Traitements",
      title: "Traitements ciblés, progressifs et faciles à suivre.",
      intro:
        "Chaque plan associe les outils les plus adaptés: thérapie manuelle, ostéopathie, exercice thérapeutique, éducation au mouvement et stratégies de prévention.",
      items: commonTreatments.fr
    },
    about: {
      eyebrow: "A propos",
      title: "Une approche clinique, humaine et orientée vers des résultats durables.",
      body:
        "MOVERE clinic a été créée pour offrir une prise en charge attentive: écouter, évaluer, traiter et accompagner la récupération avec méthode. L'objectif est de réduire la douleur, restaurer la fonction et protéger le mouvement dans le temps.",
      points: ["Évaluation individuelle et objectifs partagés", "Plan thérapeutique clair, sans étapes inutiles", "Progression vers autonomie, prévention et maintien"]
    },
    locations: {
      eyebrow: "Lieux",
      title: "Cabinet et soins a domicile.",
      text:
        "Les consultations sont organisées sur rendez-vous, avec le temps nécessaire pour évaluer et traiter avec attention. Si se déplacer est difficile, un parcours à domicile peut être envisagé.",
      cards: ["Cabinet privé sur rendez-vous", "Parcours pour sport, travail et quotidien", "Disponibilité pour soins à domicile"]
    },
    blog: {
      eyebrow: "Blog",
      title: "Guides pratiques pour mieux comprendre douleur, posture et récupération.",
      text: "Un espace éditorial pour expliquer simplement des notions utiles: quand bouger, comment gérer la charge et quelles habitudes aident à maintenir les résultats."
    },
    appointment: {
      eyebrow: "Rendez-vous",
      title: "Dites-nous ce que vous souhaitez améliorer et réservez une évaluation.",
      text:
        "Écrivez ou appelez pour demander un rendez-vous. Nous vous aiderons à définir la suite: première évaluation, traitement, rééducation ou prévention.",
      fields: ["Douleur, blessure ou objectif", "Depuis combien de temps", "Sport, travail ou besoins spécifiques"]
    },
    footer: {
      contact: "Contact",
      legal: "Confidentialite et mentions legales",
      language: "Langue",
      navigation: "Navigation"
    }
  }
} as const;
