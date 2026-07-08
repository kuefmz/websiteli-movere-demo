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
      title: "MOVERE | Fisioterapia e Osteopatia",
      description:
        "MOVERE offre fisioterapia, osteopatia e riabilitazione personalizzata per dolore, postura, sport, neurologia e trattamenti a domicilio.",
      keywords:
        "fisioterapia, osteopatia, riabilitazione sportiva, mal di schiena, cervicalgia, sciatica, terapia manuale, fisioterapia geriatrica"
    },
    nav: {
      home: "Home",
      conditions: "Patologie e disturbi",
      treatments: "Trattamenti",
      about: "Chi sono",
      locations: "Sedi"
    },
    cta: {
      appointment: "Prenota ora",
      treatments: "Vedi trattamenti",
      phone: "Chiama"
    },
    hero: {
      eyebrow: "MOVERE",
      title: "MOVERE",
      tagline: "movimento è vita",
      service: "Fisioterapia e Osteopatia",
      text:
        "Valutazione, trattamento e riabilitazione per dolore, postura, infortuni sportivi e recupero funzionale. Un percorso costruito sul tuo corpo, sui tuoi obiettivi e sulla qualità del movimento.",
      note: "Prima visita accurata, spiegazioni chiare e un piano di lavoro concreto."
    },
    trust: ["Percorsi su misura", "Fisioterapia e osteopatia", "Riabilitazione e prevenzione", "Trattamenti a domicilio"],
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
      title: "Jamal Alzaidy",
      subtitle: "Fisioterapista e Osteopata",
      intro: "Un approccio clinico e umano per recuperare autonomia, movimento e qualità di vita.",
      credentials: ["BSc Fisioterapia", "MSc Osteopatia", "Master Neuro-Riabilitazione"],
      body: [
        "Sono Jamal, fisioterapista ed osteopata. Accompagno ogni persona nel recupero della funzionalità e del benessere con trattamenti personalizzati, basati sulle più recenti evidenze scientifiche e su un ascolto attento delle esigenze individuali.",
        "Ho lavorato sia in ambito ospedaliero sia ambulatoriale, seguendo pazienti con bisogni diversi e spesso complessi: riabilitazione post-operatoria e sportiva, disturbi neurologici, patologie dell'età geriatrica e percorsi di recupero funzionale.",
        "Ogni percorso viene costruito con obiettivi condivisi, integrando terapia manuale, manipolazione fasciale, esercizio terapeutico e collaborazione con altri professionisti sanitari quando serve."
      ],
      points: [
        {
          label: "Esperienza",
          title: "Ospedale e ambulatorio",
          text: "Percorsi per casi semplici e complessi, dal dolore quotidiano alla riabilitazione post-operatoria."
        },
        {
          label: "Specializzazione",
          title: "Neuro-riabilitazione",
          text: "Valutazione e trattamento dei disturbi neurologici con programmi progressivi e personalizzati."
        },
        {
          label: "Accoglienza",
          title: "Cinque lingue",
          text: "Assistenza in italiano, inglese, francese, spagnolo e tedesco per una comunicazione chiara e inclusiva."
        }
      ]
    },
    locations: {
      eyebrow: "Sedi",
      title: "Studio su appuntamento e trattamenti a domicilio.",
      text:
        "Le visite sono organizzate su appuntamento, con il tempo necessario per valutare e trattare con attenzione. In caso di difficoltà a spostarsi, è possibile valutare un percorso a domicilio.",
      cards: ["Studio privato su appuntamento", "Percorsi per sportivi, lavoro e vita quotidiana", "Disponibilità per trattamenti a domicilio"]
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
      title: "MOVERE | Physiotherapy and Osteopathy",
      description:
        "MOVERE provides personalized physiotherapy, osteopathy and rehabilitation for pain, posture, sport, neurological recovery and home treatments.",
      keywords:
        "physiotherapy, osteopathy, sports rehabilitation, back pain, neck pain, sciatica, manual therapy, geriatric physiotherapy"
    },
    nav: {
      home: "Home",
      conditions: "Conditions",
      treatments: "Treatments",
      about: "About",
      locations: "Locations"
    },
    cta: {
      appointment: "Book now",
      treatments: "View treatments",
      phone: "Call"
    },
    hero: {
      eyebrow: "MOVERE",
      title: "MOVERE",
      tagline: "movement is life",
      service: "Physiotherapy and Osteopathy",
      text:
        "Assessment, treatment and rehabilitation for pain, posture, sports injuries and functional recovery. A pathway built around your body, your goals and better movement quality.",
      note: "A careful first assessment, clear explanations and a concrete treatment plan."
    },
    trust: ["Tailored care pathways", "Physiotherapy and Osteopathy", "Rehabilitation and prevention", "Home treatments available"],
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
      title: "Jamal Alzaidy",
      subtitle: "Physiotherapist and Osteopath",
      intro: "A clinical, human approach to restore autonomy, movement and quality of life.",
      credentials: ["BSc Physiotherapy", "MSc Osteopathy", "Master's in Neuro-Rehabilitation"],
      body: [
        "I am Jamal, a physiotherapist and osteopath. I support each person in recovering function and well-being through personalized treatments based on current scientific evidence and careful attention to individual needs.",
        "My experience spans hospital and outpatient settings, working with varied and often complex needs: post-operative and sports rehabilitation, neurological disorders, geriatric conditions and functional recovery pathways.",
        "Each pathway is built around shared goals, combining manual therapy, fascial manipulation, therapeutic exercise and collaboration with other healthcare professionals when needed."
      ],
      points: [
        {
          label: "Experience",
          title: "Hospital and outpatient care",
          text: "Support for simple and complex cases, from daily pain to post-operative rehabilitation."
        },
        {
          label: "Specialization",
          title: "Neuro-rehabilitation",
          text: "Assessment and treatment of neurological disorders with progressive, personalized programs."
        },
        {
          label: "Communication",
          title: "Five languages",
          text: "Care in Italian, English, French, Spanish and German for clear, inclusive communication."
        }
      ]
    },
    locations: {
      eyebrow: "Locations",
      title: "Appointments and home treatments.",
      text:
        "Visits are organized by appointment, with enough time to assess and treat carefully. When travel is difficult, a home-treatment pathway can be discussed.",
      cards: ["Private appointments", "Care for sport, work and everyday life", "Home treatment availability"]
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
      title: "MOVERE | Fisioterapia y Osteopatia",
      description:
        "MOVERE ofrece fisioterapia, osteopatia y rehabilitacion personalizada para dolor, postura, deporte, neurologia y tratamientos a domicilio.",
      keywords:
        "fisioterapia, osteopatia, rehabilitacion deportiva, dolor de espalda, cervicalgia, ciatica, terapia manual, fisioterapia geriatrica"
    },
    nav: {
      home: "Inicio",
      conditions: "Patologias y molestias",
      treatments: "Tratamientos",
      about: "Quien soy",
      locations: "Sedes"
    },
    cta: {
      appointment: "Reservar ahora",
      treatments: "Ver tratamientos",
      phone: "Llamar"
    },
    hero: {
      eyebrow: "MOVERE",
      title: "MOVERE",
      tagline: "movimiento es vida",
      service: "Fisioterapia y Osteopatia",
      text:
        "Evaluación, tratamiento y rehabilitación para dolor, postura, lesiones deportivas y recuperación funcional. Un proceso construido alrededor de tu cuerpo, tus objetivos y la calidad del movimiento.",
      note: "Primera valoración precisa, explicaciones claras y un plan de trabajo concreto."
    },
    trust: ["Procesos a medida", "Fisioterapia y Osteopatia", "Rehabilitacion y prevencion", "Tratamientos a domicilio"],
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
      title: "Jamal Alzaidy",
      subtitle: "Fisioterapeuta y Osteópata",
      intro: "Un enfoque clínico y humano para recuperar autonomía, movimiento y calidad de vida.",
      credentials: ["BSc Fisioterapia", "MSc Osteopatía", "Máster en Neuro-Rehabilitación"],
      body: [
        "Soy Jamal, fisioterapeuta y osteópata. Acompaño a cada persona en la recuperación de la funcionalidad y el bienestar con tratamientos personalizados, basados en la evidencia científica actual y en una escucha atenta de sus necesidades.",
        "Mi experiencia incluye el ámbito hospitalario y ambulatorio, con pacientes y necesidades a menudo complejas: rehabilitación postoperatoria y deportiva, trastornos neurológicos, patologías geriátricas y recuperación funcional.",
        "Cada proceso se construye con objetivos compartidos, integrando terapia manual, manipulación fascial, ejercicio terapéutico y colaboración con otros profesionales sanitarios cuando es necesario."
      ],
      points: [
        {
          label: "Experiencia",
          title: "Hospital y consulta",
          text: "Procesos para casos simples y complejos, desde el dolor cotidiano hasta la rehabilitación postoperatoria."
        },
        {
          label: "Especialización",
          title: "Neuro-rehabilitación",
          text: "Valoración y tratamiento de trastornos neurológicos con programas progresivos y personalizados."
        },
        {
          label: "Comunicación",
          title: "Cinco idiomas",
          text: "Atención en italiano, inglés, francés, español y alemán para una comunicación clara e inclusiva."
        }
      ]
    },
    locations: {
      eyebrow: "Sedes",
      title: "Consulta y tratamientos a domicilio.",
      text:
        "Las visitas se organizan con cita previa, con el tiempo necesario para valorar y tratar con atención. Si desplazarse es difícil, se puede estudiar un proceso a domicilio.",
      cards: ["Consulta privada con cita", "Procesos para deporte, trabajo y vida diaria", "Disponibilidad de tratamientos a domicilio"]
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
      title: "MOVERE | Physiotherapie et Osteopathie",
      description:
        "MOVERE propose physiotherapie, osteopathie et reeducation personnalisee pour douleur, posture, sport, neurologie et soins a domicile.",
      keywords:
        "physiotherapie, osteopathie, reeducation sportive, mal de dos, cervicalgie, sciatique, therapie manuelle, physiotherapie geriatrique"
    },
    nav: {
      home: "Accueil",
      conditions: "Pathologies et troubles",
      treatments: "Traitements",
      about: "A propos",
      locations: "Lieux"
    },
    cta: {
      appointment: "Réserver",
      treatments: "Voir les traitements",
      phone: "Appeler"
    },
    hero: {
      eyebrow: "MOVERE",
      title: "MOVERE",
      tagline: "le mouvement est la vie",
      service: "Physiotherapie et Osteopathie",
      text:
        "Évaluation, traitement et rééducation pour douleur, posture, blessures sportives et récupération fonctionnelle. Un parcours construit autour de votre corps, vos objectifs et la qualité du mouvement.",
      note: "Première évaluation attentive, explications claires et plan de travail concret."
    },
    trust: ["Parcours sur mesure", "Physiotherapie et Osteopathie", "Reeducation et prevention", "Soins a domicile disponibles"],
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
      title: "Jamal Alzaidy",
      subtitle: "Physiothérapeute et Ostéopathe",
      intro: "Une approche clinique et humaine pour retrouver autonomie, mouvement et qualité de vie.",
      credentials: ["BSc Physiothérapie", "MSc Ostéopathie", "Master en Neuro-Rééducation"],
      body: [
        "Je suis Jamal, physiothérapeute et ostéopathe. J'accompagne chaque personne dans la récupération de la fonctionnalité et du bien-être grâce à des traitements personnalisés, fondés sur les données scientifiques actuelles et une écoute attentive des besoins individuels.",
        "Mon expérience couvre le milieu hospitalier et le cabinet, avec des patients aux besoins variés et parfois complexes: rééducation post-opératoire et sportive, troubles neurologiques, pathologies gériatriques et récupération fonctionnelle.",
        "Chaque parcours est construit autour d'objectifs partagés, en associant thérapie manuelle, manipulation fasciale, exercice thérapeutique et collaboration avec d'autres professionnels de santé lorsque cela est utile."
      ],
      points: [
        {
          label: "Expérience",
          title: "Hôpital et cabinet",
          text: "Parcours pour situations simples ou complexes, de la douleur quotidienne à la rééducation post-opératoire."
        },
        {
          label: "Spécialisation",
          title: "Neuro-rééducation",
          text: "Évaluation et traitement des troubles neurologiques avec des programmes progressifs et personnalisés."
        },
        {
          label: "Communication",
          title: "Cinq langues",
          text: "Accompagnement en italien, anglais, français, espagnol et allemand pour une communication claire et inclusive."
        }
      ]
    },
    locations: {
      eyebrow: "Lieux",
      title: "Cabinet et soins a domicile.",
      text:
        "Les consultations sont organisées sur rendez-vous, avec le temps nécessaire pour évaluer et traiter avec attention. Si se déplacer est difficile, un parcours à domicile peut être envisagé.",
      cards: ["Cabinet privé sur rendez-vous", "Parcours pour sport, travail et quotidien", "Disponibilité pour soins à domicile"]
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
