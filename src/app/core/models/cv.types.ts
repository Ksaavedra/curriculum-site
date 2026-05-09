export interface Profile {
  name: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  link?: string;
}

/** Métricas rápidas na home (1–3 itens): experiência, volume de trabalho, formação etc. */
export interface HighlightMetric {
  value: string;
  label: string;
}

/** CTA principal do herói da home: sempre um par (ação principal + ação secundária). */
export interface HomePrimaryCta {
  label: string;
  /** Rota interna do app (ex.: `/contato`). */
  route: string;
  variant: 'primary' | 'ghost';
}

export interface CvContent {
  profile: Profile;
  /** Dois CTAs fixos do herói: tipicamente contato + trajetória ou projetos. */
  primaryCtas: [HomePrimaryCta, HomePrimaryCta];
  /** Destaques numéricos da home; opcional para páginas que não precisem de métricas. */
  highlights?: HighlightMetric[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
}
