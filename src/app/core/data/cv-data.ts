/**
 * Conteúdo do currículo e da home — integrado para demonstração.
 * Antes de publicar: ajuste nome, localização, e-mail, telefone e links sociais no objeto `profile`.
 * A home consome via CvDataService — ver docs/CHECKLIST-HOME.md (Fase 2).
 */
import { appPath } from '../constants/internal-routes';
import { CvContent } from '../models/cv.types';

export const CV_DATA: CvContent = {
  heroEyebrow: 'Olá, sou',
  highlightsSectionAriaLabel: 'Destaques',
  primaryCtas: [
    { label: 'Entrar em contato', route: appPath('contato'), variant: 'primary', icon: 'mail' },
    { label: 'Ver experiência', route: appPath('experiencia'), variant: 'ghost', icon: 'briefcase' },
  ],
  highlights: [
    { value: '5+', label: 'Anos em desenvolvimento web' },
    { value: '2', label: 'Projetos em destaque neste portfólio' },
    { value: '1', label: 'Formação superior completa' },
  ],
  profile: {
    name: 'Kelly',
    photo: {
      src: '/profile-photo.svg',
      alt: 'Kelly, desenvolvedora de software especializada em Angular e Node.js',
    },
    headline: 'Desenvolvimento full stack · Angular e Node.js',
    summary:
      'Desenvolvedora focada em aplicações web com Angular e APIs em Node.js. Priorizo código testável, segurança em endpoints REST e documentação que ajude o time a evoluir o produto com confiança.',
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
        'Evolução de produtos SaaS em Angular e Node.js, participação em refinamentos e deploy contínuo.',
      highlights: [
        'Cobertura de testes em funcionalidades críticas e revisão de código em par',
        'Integração com APIs REST, autenticação JWT e validação consistente de payloads',
      ],
    },
    {
      company: 'Agência Horizonte Digital',
      role: 'Desenvolvedora front-end',
      period: '2020 — 2023',
      description:
        'Sites institucionais e painéis administrativos; manutenção de legado e novos módulos em Angular.',
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
      tech: ['Angular', 'Express'],
      link: 'https://github.com/kelly-dev/curriculum-site',
    },
    {
      name: 'API de contato',
      description:
        'Serviço REST com helmet, rate limit no POST e validação de campos antes do envio.',
      tech: ['Node.js', 'Express'],
    },
  ],
};
