import type { Lang, LocalizedContent } from '../types';

const baseProjects = {
  es: [
    {
      title: 'Aplicaciones web con Lucee + MySQL',
      summary: 'Trabajo de desarrollo y mantenimiento sobre aplicaciones de negocio construidas con ColdFusion/Lucee y MySQL.',
      stack: ['Lucee', 'MySQL', 'JavaScript', 'Linux'],
      role: 'Desarrollo · mantenimiento',
      outcome: 'Cambios funcionales, correcciones y soporte dentro de un entorno ya operativo.',
      links: [{ label: 'Pedir contexto', href: '#contact' }]
    },
    {
      title: 'Aplicaciones web en entornos Linux',
      summary: 'Trabajo de desarrollo y soporte sobre aplicaciones ejecutadas en entornos Linux y las herramientas que las rodean.',
      stack: ['Linux', 'Java', 'PHP', 'MySQL'],
      role: 'Desarrollo · soporte técnico',
      outcome: 'Resolución de incidencias y evolución de aplicaciones dentro de su contexto real.',
      links: [{ label: 'Pedir contexto', href: '#contact' }]
    },
    {
      title: 'Soporte Helpdesk + desarrollo',
      summary: 'Resolución de incidencias técnicas combinando soporte funcional, diagnóstico y cambios de código con impacto directo.',
      stack: ['Helpdesk', 'PHP', 'Java', 'MySQL'],
      role: 'Puente usuario · sistema',
      outcome: 'Tiempos de respuesta más cortos y mejor trazabilidad técnica.',
      links: [{ label: 'Pedir contexto', href: '#contact' }]
    }
  ],
  en: [
    {
      title: 'Web applications with Lucee + MySQL',
      summary: 'Development and maintenance work on business applications built with ColdFusion/Lucee and MySQL.',
      stack: ['Lucee', 'MySQL', 'JavaScript', 'Linux'],
      role: 'Development · maintenance',
      outcome: 'Feature work, fixes and support within an already operating environment.',
      links: [{ label: 'Ask for context', href: '#contact' }]
    },
    {
      title: 'Web applications in Linux environments',
      summary: 'Development and support work on applications running in Linux environments and the tools around them.',
      stack: ['Linux', 'Java', 'PHP', 'MySQL'],
      role: 'Development · technical support',
      outcome: 'Incident resolution and application evolution within their real operating context.',
      links: [{ label: 'Ask for context', href: '#contact' }]
    },
    {
      title: 'Helpdesk + development workflow',
      summary: 'Incident resolution through a mix of functional support, diagnosis and direct code changes with visible impact.',
      stack: ['Helpdesk', 'PHP', 'Java', 'MySQL'],
      role: 'Bridge between user · system',
      outcome: 'Faster response times and better technical traceability.',
      links: [{ label: 'Ask for context', href: '#contact' }]
    }
  ]
};

export const content: Record<Lang, LocalizedContent> = {
  es: {
    seoTitle: 'Juan Manuel Adame Torronteras | Portfolio',
    seoDescription: 'Desarrollador de software full stack con CFML/Lucee, Java, JavaScript, React, Angular, MySQL, MongoDB y Linux.',
    nav: { home: 'Inicio', projects: 'Trabajo', about: 'Perfil', switchLabel: 'English' },
    hero: {
      kicker: 'Desarrollo full stack · backend · soporte técnico',
      headline: 'Juan Manuel Adame Torronteras',
      subheadline: 'Desarrollador de software full stack con pasión por el código: me gustan los desafíos, el aprendizaje continuo y construir con equipos que cuidan lo que hacen.',
      ctaPrimary: 'Ver trabajo',
      ctaSecondary: 'Conocer el perfil'
    },
    sections: { projects: 'Trabajo seleccionado', experience: 'Trayectoria', skills: 'Stack técnico', about: 'Perfil', contact: 'Contacto' },
    profile: {
      fullName: 'Juan Manuel Adame Torronteras',
      age: 22,
      location: 'Córdoba, España',
      education: 'DAW · IES Trassierra',
      role: 'Desarrollador de Software Full Stack',
      availability: 'Actualmente trabajando en ESG Innova Group.'
    },
    projects: baseProjects.es,
    experience: [
      { period: 'Mar 2025 — Actualidad', title: 'Desarrollador Junior · ESG Innova Group — Isotools', description: 'Desarrollo de funcionalidades con jQuery, CFML y SQL; resolución de tickets, mantenimiento y gestión de datos. Front-end, back-end, pruebas con TestBox y optimización de consultas junto al equipo.' },
      { period: 'Mar 2024 — Jun 2024', title: 'Prácticas Desarrollador BackEnd · Coderit S.R.L', description: 'Desarrollo de APIs con Spring Boot, Maven y Logback. Documentación con Swagger, buenas prácticas, cambios de base de datos y control de versiones con Liquibase.' }
    ],
    skills: [
      { title: 'Lenguajes', items: ['Java', 'PHP', 'JavaScript', 'CFML / ColdFusion'] },
      { title: 'Front & frameworks', items: ['React', 'Angular', 'Laravel', 'Node.js', 'Spring Boot', 'jQuery', 'Bootstrap', 'Tailwind'] },
      { title: 'Datos & calidad', items: ['MySQL', 'MongoDB', 'TestBox', 'Thunder Client'] },
      { title: 'Entornos & flujo', items: ['Linux', 'Docker', 'Podman', 'Git', 'GitHub', 'Maven', 'Liquibase'] }
    ],
    terminalLines: [
      '$ profile  -> full-stack developer',
      '$ current  -> ESG Innova Group',
      '$ focus    -> CFML + web + quality'
    ],
    contact: {
      headline: 'Conozcámonos para lo que venga',
      text: 'Actualmente trabajo en ESG Innova Group. Este portfolio reúne mi recorrido, mi forma de trabajar y las tecnologías con las que sigo creciendo.',
      linkedinLabel: 'Abrir LinkedIn',
      emailLabel: 'Escribir por email'
    }
  },
  en: {
    seoTitle: 'Juan Manuel Adame Torronteras | Portfolio',
    seoDescription: 'Full-stack software developer working with CFML/Lucee, Java, JavaScript, React, Angular, MySQL, MongoDB and Linux.',
    nav: { home: 'Home', projects: 'Work', about: 'Profile', switchLabel: 'Español' },
    hero: {
      kicker: 'Full-stack development · backend · technical support',
      headline: 'Juan Manuel Adame Torronteras',
      subheadline: 'Full-stack software developer with a passion for code: I enjoy challenges, continuous learning and building with teams who care about their craft.',
      ctaPrimary: 'View work',
      ctaSecondary: 'View profile'
    },
    sections: { projects: 'Selected work', experience: 'Path', skills: 'Technical stack', about: 'Profile', contact: 'Contact' },
    profile: {
      fullName: 'Juan Manuel Adame Torronteras',
      age: 22,
      location: 'Córdoba, Spain',
      education: 'DAW · IES Trassierra',
      role: 'Full-stack Software Developer',
      availability: 'Currently working at ESG Innova Group.'
    },
    projects: baseProjects.en,
    experience: [
      { period: 'Mar 2025 — Now', title: 'Junior Developer · ESG Innova Group — Isotools', description: 'Feature work with jQuery, CFML and SQL; ticket resolution, maintenance and data operations. Front-end, back-end, TestBox automation and query optimization alongside the development team.' },
      { period: 'Mar 2024 — Jun 2024', title: 'Back-end Developer Intern · Coderit S.R.L', description: 'API development with Spring Boot, Maven and Logback. Swagger documentation, good practices, database changes and version control with Liquibase.' }
    ],
    skills: [
      { title: 'Languages', items: ['Java', 'PHP', 'JavaScript', 'CFML / ColdFusion'] },
      { title: 'Front & frameworks', items: ['React', 'Angular', 'Laravel', 'Node.js', 'Spring Boot', 'jQuery', 'Bootstrap', 'Tailwind'] },
      { title: 'Data & quality', items: ['MySQL', 'MongoDB', 'TestBox', 'Thunder Client'] },
      { title: 'Environments & flow', items: ['Linux', 'Docker', 'Podman', 'Git', 'GitHub', 'Maven', 'Liquibase'] }
    ],
    terminalLines: [
      '$ profile  -> full-stack developer',
      '$ current  -> ESG Innova Group',
      '$ focus    -> CFML + web + quality'
    ],
    contact: {
      headline: 'Let’s stay in touch for what comes next',
      text: 'I am currently working at ESG Innova Group. This portfolio collects my experience, working approach and the technologies I keep growing with.',
      linkedinLabel: 'Open LinkedIn',
      emailLabel: 'Write by email'
    }
  }
};
