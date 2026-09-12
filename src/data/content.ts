import type { Lang, LocalizedContent } from '../types';

const baseProjects = {
  es: [
    {
      title: 'Aplicaciones de negocio · CFML / Lucee',
      summary: 'Desarrollo de funcionalidades y mantenimiento sobre aplicaciones internas y de clientes en ESG Innova Group / Isotools, utilizando jQuery, CFML y SQL.',
      stack: ['CFML', 'Lucee', 'jQuery', 'SQL'],
      role: 'ESG Innova Group · Actualidad',
      outcome: 'Tickets resueltos, datos gestionados y mejoras entregadas dentro de un producto activo.',
      links: [{ label: 'Pedir contexto', href: '#contact' }]
    },
    {
      title: 'APIs backend con Spring Boot',
      summary: 'Prácticas en Coderit S.R.L. (Milán) desarrollando APIs y trabajando con Maven, Logback, Swagger y cambios de base de datos.',
      stack: ['Java', 'Spring Boot', 'Maven', 'Liquibase'],
      role: 'Coderit S.R.L. · 2024',
      outcome: 'Experienc-IA en APIs, rendimiento, buenas prácticas y ciclo de cambios de base de datos.',
      links: [{ label: 'Pedir contexto', href: '#contact' }]
    },
    {
      title: 'Soporte técnico y evolución web',
      summary: 'Resolución de tickets y cambios de código conectando d-IA-gnóstico funcional, front-end y back-end.',
      stack: ['TestBox', 'MySQL', 'Linux', 'Helpdesk'],
      role: 'Soporte · desarrollo',
      outcome: 'Incidenc-IA-s acompañadas de contexto técnico y pruebas para mantener la calidad.',
      links: [{ label: 'Pedir contexto', href: '#contact' }]
    }
  ],
  en: [
    {
      title: 'Business applications · CFML / Lucee',
      summary: 'Feature development and maintenance for internal and client applications at ESG Innova Group / Isotools, using jQuery, CFML and SQL.',
      stack: ['CFML', 'Lucee', 'jQuery', 'SQL'],
      role: 'ESG Innova Group · Present',
      outcome: 'Tickets resolved, data operations handled and improvements delivered inside an active product.',
      links: [{ label: 'Ask for context', href: '#contact' }]
    },
    {
      title: 'Back-end APIs with Spring Boot',
      summary: 'An internship at Coderit S.R.L. (Milan), developing APIs and working with Maven, Logback, Swagger and database changes.',
      stack: ['Java', 'Spring Boot', 'Maven', 'Liquibase'],
      role: 'Coderit S.R.L. · 2024',
      outcome: 'Hands-on experience with APIs, performance, good practices and database change cycles.',
      links: [{ label: 'Ask for context', href: '#contact' }]
    },
    {
      title: 'Technical support and web evolution',
      summary: 'Ticket resolution and code changes connecting functional diagnosis with front-end and back-end work.',
      stack: ['TestBox', 'MySQL', 'Linux', 'Helpdesk'],
      role: 'Support · development',
      outcome: 'Incidents handled with technical context and testing to protect quality.',
      links: [{ label: 'Ask for context', href: '#contact' }]
    }
  ]
};

export const content: Record<Lang, LocalizedContent> = {
  es: {
    seoTitle: 'Juan Manuel Adame Torronteras | Portfolio',
    seoDescription: 'Desarrollador de software full stack con CFML/Lucee, Java, JavaScript, React, Angular, MySQL, MongoDB y Linux.',
    nav: { home: 'Inicio', projects: 'Trabajo', experience: 'Experienc-IA', about: 'Perfil', switchLabel: 'English' },
    hero: {
      kicker: 'Desarrollo full stack · backend · soporte técnico',
      headline: 'Juan Manuel Adame Torronteras',
      subheadline: 'Desarrollador de software full stack con pasión por el código: me gustan los desafíos, el aprendizaje continuo y construir con equipos que cuidan lo que hacen.',
      ctaPrimary: 'Ver trabajo',
      ctaSecondary: 'Conocer el perfil'
    },
    sections: { projects: 'Trabajo seleccionado', experience: 'Experienc-IA profesional', skills: 'Stack técnico', about: 'Perfil', contact: 'Contacto' },
    profile: {
      fullName: 'Juan Manuel Adame Torronteras',
      age: 22,
      location: 'Córdoba, España',
      education: 'DAW · IES Trassierra · 2022—2024',
      role: 'Desarrollador de Software Full Stack',
      currentStatus: 'Actualmente trabajando en ESG Innova Group.',
      aiStatement: 'Uso la IA como herramienta de trabajo para agilizar tareas, analizar problemas y desarrollar con revisión y criterio propio.'
    },
    projects: baseProjects.es,
    experience: [
      { period: 'Marzo 2025 — Actualidad', title: 'Desarrollador Junior · ESG Innova Group — Isotools', description: 'Desarrollo de nuevas funcionalidades con jQuery, CFML y SQL; resolución de tickets, mantenimiento y gestión de datos. Creación de componentes front-end, adaptación de back-end, pruebas automáticas con TestBox y optimización de consultas.' },
      { period: 'Marzo 2024 — Junio 2024', title: 'Prácticas de Desarrollador Backend · Coderit S.R.L. · Milán', description: 'Desarrollo de APIs con Spring Boot, gestión de dependencias con Maven, logs con Logback y documentación con Swagger. Buenas prácticas, cambios de base de datos y control de versiones con Liquibase.' }
    ],
    skills: [
      { title: 'Lenguajes', items: ['Java', 'PHP', 'JavaScript', 'CFML / ColdFusion'] },
      { title: 'Front & frameworks', items: ['React', 'Angular', 'Laravel', 'Node.js', 'Spring Boot', 'jQuery', 'Bootstrap', 'Tailwind'] },
      { title: 'Datos & calidad', items: ['MySQL', 'MongoDB', 'TestBox', 'Thunder Client', 'Swagger', 'Logback'] },
      { title: 'Entornos & herramientas', items: ['Linux', 'Git', 'GitHub', 'Maven', 'Liquibase', 'Docker', 'Podman'] }
    ],
    terminalLines: [
      '$ tech --info coldFusion',
      'language -> CFML para lógica de negocio y aplicaciones web',
      'status   -> trabajando en ESG Innova Group'
    ],
    contact: {
      headline: 'Conozcámonos para lo que venga',
      text: 'Actualmente trabajo en ESG Innova Group. Este portfolio reúne mi recorrido, mi forma de trabajar y las tecnolog-IA-s con las que sigo creciendo.',
      linkedinLabel: 'Abrir LinkedIn',
      emailLabel: 'Escribir por email'
    }
  },
  en: {
    seoTitle: 'Juan Manuel Adame Torronteras | Portfolio',
    seoDescription: 'Full-stack software developer working with CFML/Lucee, Java, JavaScript, React, Angular, MySQL, MongoDB and Linux.',
    nav: { home: 'Home', projects: 'Work', experience: 'Experience', about: 'Profile', switchLabel: 'Español' },
    hero: {
      kicker: 'Full-stack development · backend · technical support',
      headline: 'Juan Manuel Adame Torronteras',
      subheadline: 'Full-stack software developer with a passion for code: I enjoy challenges, continuous learning and building with teams who care about their craft.',
      ctaPrimary: 'View work',
      ctaSecondary: 'View profile'
    },
    sections: { projects: 'Selected work', experience: 'Professional experience', skills: 'Technical stack', about: 'Profile', contact: 'Contact' },
    profile: {
      fullName: 'Juan Manuel Adame Torronteras',
      age: 22,
      location: 'Córdoba, Spain',
      education: 'DAW · IES Trassierra · 2022—2024',
      role: 'Full-stack Software Developer',
      currentStatus: 'Currently working at ESG Innova Group.',
      aiStatement: 'I use AI as a working tool to speed up tasks, analyze problems and develop with my own review and judgement.'
    },
    projects: baseProjects.en,
    experience: [
      { period: 'March 2025 — Present', title: 'Junior Developer · ESG Innova Group — Isotools', description: 'New feature development with jQuery, CFML and SQL; ticket resolution, maintenance and data operations. Front-end components, back-end adaptation, TestBox automation and query optimization.' },
      { period: 'March 2024 — June 2024', title: 'Back-end Developer Intern · Coderit S.R.L. · Milan', description: 'API development with Spring Boot, dependency management with Maven, logging with Logback and Swagger documentation. Good practices, database changes and version control with Liquibase.' }
    ],
    skills: [
      { title: 'Languages', items: ['Java', 'PHP', 'JavaScript', 'CFML / ColdFusion'] },
      { title: 'Front & frameworks', items: ['React', 'Angular', 'Laravel', 'Node.js', 'Spring Boot', 'jQuery', 'Bootstrap', 'Tailwind'] },
      { title: 'Data & quality', items: ['MySQL', 'MongoDB', 'TestBox', 'Thunder Client', 'Swagger', 'Logback'] },
      { title: 'Environments & tools', items: ['Linux', 'Git', 'GitHub', 'Maven', 'Liquibase', 'Docker', 'Podman'] }
    ],
    terminalLines: [
      '$ tech --info coldFusion',
      'language -> CFML for business logic and web applications',
      'status   -> working at ESG Innova Group'
    ],
    contact: {
      headline: 'Let’s stay in touch for what comes next',
      text: 'I am currently working at ESG Innova Group. This portfolio collects my experience, working approach and the technologies I keep growing with.',
      linkedinLabel: 'Open LinkedIn',
      emailLabel: 'Write by email'
    }
  }
};
