import { appPath } from '../constants/internal-routes';
import { CvContent } from '../models/cv.types';

export const CV_DATA: CvContent = {
  heroEyebrow: 'Olá, sou',
  heroSceneImage: {
    src: '/img/hero-workspace.png',
    alt: 'Mesa de trabalho com portátil, tablet, bloco de notas e caneca, ambiente com luz roxa — referência ao fluxo de desenvolvimento.',
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
    { value: '8+', label: 'Anos no ramo financeiro e administrativo' },
    { value: '2018', label: 'Início da transição para tecnologia' },
    { value: 'Pós-graduação', label: 'Tecnologias e Inovações Web (em curso)' },
  ],
  profile: {
    name: 'Kelly Michele',
    lastName: 'Torrico Saavedra dos Santos',
    headline: 'Desenvolvedora front-end · Angular, TypeScript e projetos corporativos',
    summary: [
      'Sou Kelly Michele Torrico Saavedra dos Santos, desenvolvedora frontend, deficiente auditiva, bacharela em Administração pela UNIP, formada em Desenvolvimento Web FullStack Java pela Digital House e em Análise e Desenvolvimento de Sistemas pela UNIP. Atualmente também curso pós-graduação em Tecnologias e Inovações Web.',
      'Trabalhei durante mais de 8 anos no ramo financeiro, atuando nas áreas administrativas, organização de eventos, atendimento de clientes e suporte interno e externo. Em 2018 decidi transformar minha trajetória profissional e realizar minha transição de carreira para tecnologia, iniciando minha atuação com desenvolvimento web e manutenção de sistemas.',
      'Atualmente atuo em projetos corporativos do Itaú, participando da evolução de jornadas modernizadas, implementação de analytics com GA4, documentação técnica e melhorias de experiência do usuário. Tenho experiência com Angular, TypeScript, integração com APIs, testes unitários, frontend legado e modernizado, além de participação em projetos envolvendo modelagem de dados, observabilidade e integração frontend/backend.',
      'Também venho aprofundando meus conhecimentos em backend, API Gateway e arquitetura de integração entre sistemas. Participei da construção de diagramas e modelagem utilizando DynamoDB e RDS na AWS, contribuindo para organização de estruturas de dados e evolução de funcionalidades corporativas.',
      'Minha experiência anterior na área administrativa e financeira fortaleceu habilidades como comunicação, organização, visão de negócio e trabalho em equipe, que hoje aplico diariamente no desenvolvimento de soluções com foco em qualidade, usabilidade e melhoria contínua.',
    ].join('\n\n'),
    location: 'Brasil',
    email: 'kellymichelesaavedra@gmail.com',
    phone: '+55 (11) 96365-5403',
    linkedin: 'https://www.linkedin.com/in/kellysaavedra/',
    github: 'https://github.com/kelly-dev',
  },
  experience: [
    {
      company: 'Itaú Unibanco',
      role: 'Desenvolvedora front-end',
      period: 'Atualmente',
      description:
        'Projetos corporativos: evolução de jornadas modernizadas, analytics com GA4, documentação técnica e melhorias de experiência do usuário. Angular, TypeScript, integração com APIs, testes unitários, frontend legado e modernizado; participação em modelagem de dados, observabilidade e integração frontend/backend. Contribuição em diagramas e modelagem com DynamoDB e RDS na AWS.',
      highlights: [
        'Jornadas modernizadas, GA4 e foco em UX',
        'Integração de sistemas, API Gateway e evolução de dados em ambiente corporativo',
      ],
      tags: ['Angular', 'TypeScript', 'GA4', 'AWS', 'DynamoDB', 'RDS', 'APIs REST'],
    },
    {
      company: 'Casa das Esseciais',
      role: 'Analista Desenvolvedor Júnior',
      period: 'Set 2019 — Mai 2020 · 9 meses · tempo integral',
      description:
        'Responsável pela análise e desenvolvimento de novas ferramentas, ajustes e melhorias na plataforma atual do e-commerce desenvolvido com PHP, Angular e MySQL que possui integrações com a Cielo, Sistema de Transportadora Jamef e Correios.',
      highlights: [
        'Monitoração do desenvolvimento de funcionalidades da nova plataforma e-commerce, verificando se todas as funcionalidades da plataforma atual estão sendo desenvolvidas na nova plataforma.',
        'Realização de testes de comportamento entre as plataformas.',
        'Execução do plano de implantação da nova plataforma.',
      ],
      tags: ['PHP', 'Angular', 'MySQL', 'Cielo', 'Jamef', 'Correios'],
    },
    {
      company: 'Santander Brasil',
      role: '',
      period: 'Mai 2011 — Ago 2019 · 8 anos e 4 meses · tempo integral',
      description: '',
      subRoles: [
        {
          role: 'Assistente de clientes corporativos',
          period: 'Set 2016 — Ago 2019 · 3 anos · tempo integral',
          highlights: [
            'Classificação, seleção e anúncios para clientes externos',
            'Atendimento ao cliente via e-mail e chat',
            'Gerenciamento de contatos e suporte à finalização de chamados',
            'Reporte diário ao gestor da área',
            'Elaboração de formulários e envio de dados computados diariamente',
          ],
        },
        {
          role: 'Assistente administrativa',
          period: 'Dez 2011 — Ago 2016 · ~4 anos 9 meses · tempo integral',
          highlights: [
            'Apoio administrativo e operacional em ambiente bancário; organização de rotinas e suporte a equipes internas',
          ],
        },
        {
          role: 'Assistente bancária (aprendiz)',
          period: 'Mai 2011 — Nov 2011 · 7 meses',
          highlights: ['Programa de aprendizagem em operações bancárias e atendimento.'],
        },
      ],
      tags: ['Excel', 'Word', 'PowerPoint', 'Outlook', 'Teams', 'Access', 'Banco de dados'],
    },
  ],
  education: [
    {
      institution: 'UNIP',
      degree: 'Pós-graduação em Tecnologias e Inovações Web',
      period: 'Em curso',
      details: 'Aprofundamento em tecnologias e inovação aplicadas ao desenvolvimento web.',
    },
    {
      institution: 'UNIP',
      degree: 'Análise e Desenvolvimento de Sistemas',
      period: 'Concluído',
      details: 'Formação em tecnologia da informação e desenvolvimento de software.',
    },
    {
      institution: 'Digital House',
      degree: 'Desenvolvimento Web Full Stack (Java)',
      period: 'Concluído',
      details: 'Formação intensiva em desenvolvimento web full stack.',
    },
    {
      institution: 'UNIP',
      degree: 'Bacharelado em Administração',
      period: 'Concluído',
      details: 'Formação em gestão e negócios.',
    },
  ],
  skills: [
    'Angular',
    'TypeScript',
    'HTML e SCSS',
    'APIs REST',
    'GA4',
    'Testes unitários',
    'AWS (DynamoDB, RDS)',
    'API Gateway',
    'Observabilidade',
    'Node.js',
    'Git',
  ],
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
