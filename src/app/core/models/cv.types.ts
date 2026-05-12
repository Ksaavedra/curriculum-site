import type { CvIconName } from '../icons/cv-icon.types';

/** Imagem opcional; `alt` descritivo (pessoa em foto de perfil, ou cena / ilustração no herói). */
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

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
  /** Tecnologias ou domínios (opcional); exibidas como tags no cartão. */
  tags?: string[];
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
  /** URL do repositório ou página do projecto. */
  link?: string;
  /** Miniatura decorativa (`/ficheiro.svg` em `public/`). */
  thumb?: string;
  /** URL da demo (site ou API pública). */
  demoUrl?: string;
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
  /** Ícone opcional à esquerda do rótulo (SVG inline, mesmo estilo que o header). */
  icon?: CvIconName;
}

/**
 * Contrato dos dados usados só pela página inicial (`/`).
 *
 * | Bloco na UI | Campos |
 * |-------------|--------|
 * | Linha «eyebrow» acima do nome | `eyebrow` |
 * | Herói (nome, headline, resumo) | `profile` |
 * | Botões do herói | `primaryCtas` (primeiro = secundário ao lado de «Baixar currículo») |
 * | Ilustração à direita | `heroSceneImage` (`src`/`alt`); sem campo, mantém-se a cena CSS. |
 * | Cards de métricas | `highlights` (vazio mostra mensagem amigável); rótulo a11y: `highlightsSectionAriaLabel` |
 *
 * Origem: subconjunto de `CvContent` em [`cv-data.ts`](../data/cv-data.ts).
 */
export interface HomeSection {
  profile: Profile;
  primaryCtas: [HomePrimaryCta, HomePrimaryCta];
  highlights: HighlightMetric[];
  /** Linha curta acima do nome (ex.: «Olá, sou»). */
  eyebrow: string;
  /** Rótulo acessível da seção de métricas (`aria-label`). */
  highlightsSectionAriaLabel: string;
  /** URL pública do PDF do CV (ex.: `/Kelly-CV.pdf` em `public/`). Se ausente, o botão principal leva à experiência. */
  resumePdfUrl?: string;
  /** Ilustração na coluna direita do herói (`/img/...` em `public/`). */
  heroSceneImage?: ProfilePhoto;
}

/** Monta o objeto tipado da home a partir do currículo completo. */
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
  /** Dois CTAs fixos do herói: tipicamente contato + trajetória ou projetos. */
  primaryCtas: [HomePrimaryCta, HomePrimaryCta];
  /** Ilustração do herói (direita); `src` típico `/img/nome.png` em `public/img/`. */
  heroSceneImage?: ProfilePhoto;
  /** Texto opcional acima do nome no herói; padrão «Olá, sou». */
  heroEyebrow?: string;
  /** `aria-label` da seção de métricas; padrão «Destaques». */
  highlightsSectionAriaLabel?: string;
  /** PDF do currículo em `public/` ou URL absoluta. */
  resumePdfUrl?: string;
  /** Destaques numéricos da home; opcional para páginas que não precisem de métricas. */
  highlights?: HighlightMetric[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
}
