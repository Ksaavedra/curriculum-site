import type { CvIconName } from '../icons/cv-icon.types';

export interface ProfilePhoto {
  src: string;
  alt: string;
}

export interface Profile {
  name: string;
  lastName: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  photo?: ProfilePhoto;
}

export interface ExperienceSubRole {
  role: string;
  period: string;
  description?: string;
  highlightsHeading?: string;
  highlights?: string[];
  tags?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  subRoles?: ExperienceSubRole[];
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
  thumb?: string;
  demoUrl?: string;
  status?: string;
}

export interface HighlightMetric {
  value: string;
  label: string;
}

export interface HomePrimaryCta {
  label: string;
  route: string;
  variant: 'primary' | 'ghost';
  icon?: CvIconName;
}

export interface HomeSection {
  profile: Profile;
  primaryCtas: [HomePrimaryCta, HomePrimaryCta];
  highlights: HighlightMetric[];
  eyebrow: string;
  highlightsSectionAriaLabel: string;
  resumePdfUrl?: string;
  heroSceneImage?: ProfilePhoto;
}

export function homeSectionFromCv(c: CvContent): HomeSection {
  return {
    profile: c.profile,
    primaryCtas: c.primaryCtas,
    highlights: c.highlights ?? [],
    eyebrow: c.heroEyebrow ?? 'Olá, sou',
    highlightsSectionAriaLabel: c.highlightsSectionAriaLabel ?? 'Destaques',
    resumePdfUrl: c.resumePdfUrl,
    heroSceneImage: c.heroSceneImage,
  };
}

export interface CvContent {
  profile: Profile;
  primaryCtas: [HomePrimaryCta, HomePrimaryCta];
  heroSceneImage?: ProfilePhoto;
  heroEyebrow?: string;
  highlightsSectionAriaLabel?: string;
  resumePdfUrl?: string;
  highlights?: HighlightMetric[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
}
