/**
 * Conteúdo do currículo e da home — integrado para demonstração.
 * Antes de publicar: ajuste nome, localização, e-mail, telefone e links sociais no objeto `profile`.
 * A home consome via CvDataService — ver docs/CHECKLIST-HOME.md (Fase 2).
 *
 * **Evolução do modelo:** prefira **campos opcionais** em [`cv.types.ts`](../models/cv.types.ts) e extensões
 * deste objeto; evite remover ou renomear chaves usadas nos templates sem actualizar todas as referências.
 *
 * **Assets:** ficheiros em `frontend/public/` vão para a **raiz** do *site* (`/ficheiro.ext`), conforme
 * `angular.json` → `assets` com `input: "public"`.
 */
import { appPath } from '../constants/internal-routes';
import { CvContent } from '../models/cv.types';

export const CV_DATA: CvContent = {
  heroEyebrow: 'Olá, sou',
  heroSceneImage: {
    src: '/img/hero-workspace.png',
    alt:
      'Mesa de trabalho com portátil, tablet, bloco de notas e caneca, ambiente com luz roxa — referência ao fluxo de desenvolvimento.',
  },
  highlightsSectionAriaLabel: 'Destaques',
  primaryCtas: [
    {
      label: 'Contactar-me',
      route: appPath('contato'),
      variant: 'primary',
      icon: 'mail',
    },
    {
      label: 'Ver projetos',
      route: appPath('projetos'),
      variant: 'ghost',
      icon: 'folder',
    },
  ],
  highlights: [
    { value: '5+', label: 'Anos em desenvolvimento web' },
    { value: '2', label: 'Projetos em destaque neste portfólio' },
    { value: '1', label: 'Formação superior completa' },
  ],
  profile: {
    name: 'Kelly Michele',
    lastName: 'Torrico Saavedra dos Santos',
    headline: 'Front-end Developer · Angular, TypeScript, React e APIs',
    summary:
      'Construo e evoluo produtos web com Angular no front e Node.js no back: contratos de API claros, validação de dados, testes onde o impacto é maior e revisão de código em equipa.',
    location: 'Brasil',
    email: 'kelly@example.com',
    phone: '+55 (11) 99999-9999',
    linkedin: 'https://www.linkedin.com/in/kelly-dev',
    github: 'https://github.com/kelly-dev',
  },
  experience: [
    {
      company: 'Nova Soft Ltda.',
      role: 'Desenvolvedora full stack',
      period: '2023 — presente',
      description:
        'Produtos SaaS em Angular e Node.js: refinamentos com produto, entregas incrementais e pipeline de deploy contínuo, com foco em qualidade e segurança das integrações.',
      highlights: [
        'Testes e revisão de código em par em fluxos sensíveis a regressão',
        'APIs REST com JWT, validação de payloads e observabilidade em produção',
      ],
      tags: ['Angular', 'TypeScript', 'Node.js', 'REST', 'CI/CD'],
    },
    {
      company: 'Agência Horizonte Digital',
      role: 'Desenvolvedora front-end',
      period: '2020 — 2023',
      description:
        'Sites institucionais e painéis administrativos em Angular; evolução de legado e novos módulos, alinhando UX, performance e acessibilidade onde o impacto era maior.',
      highlights: ['Componentes reutilizáveis e estilos consistentes (SCSS / design system leve)'],
      tags: ['Angular', 'HTML', 'SCSS', 'Acessibilidade'],
    },
  ],
  education: [
    {
      institution: 'Universidade Federal do Estado (exemplo)',
      degree: 'Bacharelado em Ciência da Computação',
      period: '2016 — 2020',
      details:
        'Ênfase em engenharia de software e sistemas distribuídos; TCC sobre APIs e qualidade de serviços.',
    },
  ],
  skills: ['Angular', 'TypeScript', 'Node.js', 'Express', 'HTML e SCSS', 'APIs REST', 'Git'],
  projects: [
    {
      name: 'Site de currículo',
      description:
        'SPA em Angular com API Express para formulário de contato, CORS e envio por e-mail opcional.',
      tech: ['Angular', 'TypeScript', 'Express', 'REST'],
      thumb: '/project-thumb-curriculum.svg',
      link: 'https://github.com/kelly-dev/curriculum-site',
      demoUrl: '/',
    },
    {
      name: 'API de contato',
      description:
        'Serviço REST com helmet, rate limit no POST e validação de campos antes do envio.',
      tech: ['Node.js', 'Express', 'Helmet', 'REST'],
      thumb: '/project-thumb-api.svg',
      link: 'https://github.com/kelly-dev/contact-api',
    },
  ],
};
