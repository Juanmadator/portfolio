export type Lang = 'es' | 'en';

export interface ProjectItem {
  title: string;
  summary: string;
  stack: string[];
  role: string;
  outcome: string;
  links: { label: string; href: string }[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Profile {
  fullName: string;
  age: number;
  location: string;
  education: string;
  role: string;
  availability: string;
}

export interface LocalizedContent {
  seoTitle: string;
  seoDescription: string;
  nav: { home: string; projects: string; about: string; switchLabel: string };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  sections: {
    projects: string;
    experience: string;
    skills: string;
    about: string;
    contact: string;
  };
  profile: Profile;
  projects: ProjectItem[];
  experience: ExperienceItem[];
  skills: SkillGroup[];
  terminalLines: string[];
  contact: {
    headline: string;
    text: string;
    linkedinLabel: string;
    emailLabel: string;
  };
}