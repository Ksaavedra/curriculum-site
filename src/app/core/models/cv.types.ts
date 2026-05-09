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

export interface CvContent {
  profile: Profile;
  /** Destaques numéricos da home; opcional para páginas que não precisem de métricas. */
  highlights?: HighlightMetric[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
}
