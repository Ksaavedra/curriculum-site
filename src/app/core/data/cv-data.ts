import { appPath } from '../constants/internal-routes';
import { CvContent } from '../models/cv.types';

export const CV_DATA: CvContent = {
  primaryCtas: [
    { label: 'Entrar em contato', route: appPath('contato'), variant: 'primary' },
    { label: 'Ver experiência', route: appPath('experiencia'), variant: 'ghost' },
  ],
  highlights: [
    { value: '5+', label: 'Anos em desenvolvimento web' },
    { value: '2', label: 'Projetos em destaque neste portfólio' },
    { value: '1', label: 'Formação superior completa' },
  ],
  profile: {
    name: 'Seu Nome',
    headline: 'Desenvolvimento full stack · Angular e Node.js',
    summary:
      'Atuo no desenvolvimento de interfaces web e de serviços em Node.js, com foco em código legível, testes e segurança em APIs. Valorizo trabalho em equipe, revisão de código e documentação que facilite a manutenção.',
    location: 'Cidade, país',
    email: 'seu.email@exemplo.com',
    phone: '+55 (00) 00000-0000',
    linkedin: 'https://www.linkedin.com/in/seu-perfil',
    github: 'https://github.com/seu-usuario',
  },
  experience: [
    {
      company: 'Empresa Exemplo',
      role: 'Desenvolvedor full stack',
      period: '2023 — presente',
      description:
        'Construção e evolução de aplicações web com Angular e APIs em Node.js, em conjunto com o time de produto.',
      highlights: [
        'Entrega de funcionalidades com testes automatizados e revisão entre pares',
        'Integração com APIs REST e cuidados com autenticação e validação de dados',
      ],
    },
    {
      company: 'Outra empresa',
      role: 'Desenvolvedor front-end',
      period: '2020 — 2023',
      description:
        'Manutenção de sistemas existentes, criação de novos módulos e melhoria contínua da experiência do usuário.',
    },
  ],
  education: [
    {
      institution: 'Universidade Exemplo',
      degree: 'Bacharelado em Ciência da Computação',
      period: '2016 — 2020',
      details:
        'Trabalho de conclusão de curso ou focos acadêmicos relevantes podem ser descritos aqui.',
    },
  ],
  skills: [
    'Angular',
    'TypeScript',
    'Node.js',
    'Express',
    'HTML e SCSS',
    'APIs REST',
    'Git',
  ],
  projects: [
    {
      name: 'Site de currículo',
      description:
        'Aplicação de página única em Angular, com formulário de contato integrado a uma API em Node.js.',
      tech: ['Angular', 'Express'],
      link: 'https://github.com',
    },
    {
      name: 'API de exemplo',
      description:
        'Serviço REST com validação de entrada, proteção básica e limitação de taxa de requisições.',
      tech: ['Node.js', 'Express'],
    },
  ],
};
