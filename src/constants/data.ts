import type {
  AboutText,
  Certification,
  Education,
  NavigationItem,
  PersonalInfo,
  Project,
  SkillCategory,
} from '@/types/portfolio';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Daniel Azevedo',
  fullName: 'Daniel da Silva Azevedo',
  title: 'Desenvolvedor Full Stack',
  subtitle: 'Técnico em Desenvolvimento de Sistemas',
  email: 'daniel.azevedo081205@gmail.com',
  github: 'https://github.com/DanielAzeved0',
  linkedin: 'https://www.linkedin.com/in/daniel-azevedo-403444321/',
  portfolioUrl: 'https://portfolio-daniel-azevedo-q5qi.vercel.app',
};

export const ABOUT_TEXT: AboutText = {
  paragraph1:
    'Sou estudante de Desenvolvimento de Sistemas com paixão por criar soluções tecnológicas inovadoras. Durante meu curso técnico, desenvolvi habilidades sólidas em programação, banco de dados e desenvolvimento web.',
  paragraph2:
    'Busco constantemente aprender novas tecnologias e aplicar meus conhecimentos em projetos práticos. Tenho facilidade para trabalhar em equipe e gosto de enfrentar desafios que me permitam crescer profissionalmente.',
};

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Native', 'Bootstrap'],
  },
  {
    category: 'Backend',
    skills: ['JavaScript', 'Node.js', 'Express.js', 'Expo', '.NET 8', 'C#'],
  },
  {
    category: 'Banco de Dados',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Ferramentas',
    skills: ['Git', 'GitHub', 'VS Code', 'Cypress', 'Postman', 'Docker', 'Swagger', 'EAS Build'],
  },
  {
    category: 'Conceitos',
    skills: ['CRUD', 'Scrum', 'API REST', 'Responsividade'],
  },
  {
    category: 'Soft Skills',
    skills: ['Trabalho em equipe', 'Comunicação', 'Resolução de problemas', 'Criatividade', 'Adaptabilidade'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'simpliza',
    title: 'Simpliza',
    badge: 'TCC - Projeto de Conclusão',
    icon: '🎓',
    description:
      'Aplicativo mobile desenvolvido para auxiliar MEIs e pequenos empreendedores no controle financeiro mensal, reunindo ganhos, gastos, histórico e cálculo simplificado do DAS em uma experiência objetiva.',
    features: [
      'Cadastro de ganhos e gastos',
      'Histórico financeiro mensal',
      'Gráficos comparativos',
      'Cálculo simplificado do DAS',
    ],
    technologies: ['React Native', 'Expo', 'JavaScript', 'Android', 'EAS Build'],
    githubUrl: 'https://github.com/DanielAzeved0/Simpliza-TCC',
    featured: true,
  },
  {
    id: 'deeparchive-bridge',
    title: 'DeepArchive-Bridge',
    badge: 'Projeto Full Stack',
    icon: '🗄️',
    description:
      'Monorepo full stack para gerenciamento de vendas, com backend em ASP.NET Core 8 e frontend em Next.js. O sistema centraliza operações de venda, autenticação e uma camada de arquivamento lógico sobre SQLite.',
    features: [
      'CRUD completo de vendas',
      'Busca por período, cliente, status e paginação',
      'Aprovação de vendas pendentes',
      'Autenticação JWT integrada ao frontend',
      'Dashboard e telas de listagem, criação, edição e detalhes',
      'Arquivamento lógico para vendas com mais de 90 dias',
      'Health check da API e integração via Axios',
    ],
    technologies: [
      'ASP.NET Core 8',
      'C# 12',
      'Entity Framework Core 8',
      'SQLite',
      'JWT Bearer',
      'Next.js 16',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Axios',
    ],
    githubUrl: 'https://github.com/DanielAzeved0/DeepArchive-Bridge',
    featured: true,
  },
  {
    id: 'mcp-task-manager',
    title: 'MCP Prompt Generator',
    badge: 'Projeto Full Stack com IA',
    icon: '🧠',
    description:
      'Aplicação full stack local que transforma prompts, código, JSON e contexto em SPECs estruturadas com classificação semântica, validação rígida de schema e fallback determinístico.',
    features: [
      'Classificação semântica de intents e seleção de templates',
      'Injeção de contexto de código com análise AST-aware',
      'Governança de providers com Gemini, Ollama e fallback seguro',
      'Interface web para gerar e revisar SPECs em JSON',
      'Suite golden para validar contratos e regressões do runtime',
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'React', 'Zod', 'Gemini', 'Ollama'],
    githubUrl: 'https://github.com/DanielAzeved0/mcp-task-manager',
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade Impacta',
    period: 'Início previsto: agosto de 2026',
    description:
      'Graduação com foco na ampliação da base em computação, engenharia de software e desenvolvimento de soluções tecnológicas.',
  },
  {
    degree: 'Técnico em Desenvolvimento de Sistemas',
    period: '2023 - 2025',
    description:
      'Formação técnica com foco em desenvolvimento de software, banco de dados, programação orientada a objetos, desenvolvimento web e mobile.',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'logica-programacao-javascript',
    title: 'Lógica de Programação: Mergulhe em Programação com JavaScript',
    institution: 'Alura',
    date: '04 de fevereiro de 2026',
    duration: '6 horas',
    icon: '💻',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/logica-programacao-mergulhe-programacao-javascript/certificate',
  },
  {
    id: 'logica-programacao-funcoes-listas',
    title: 'Lógica de Programação: Explore Funções e Listas',
    institution: 'Alura',
    date: '13 de fevereiro de 2026',
    duration: '6 horas',
    icon: '🧠',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/logica-programacao-praticando-desafios/certificate',
  },
  {
    id: 'git-github-colaborando-projetos',
    title: 'Git e GitHub: Compartilhando e Colaborando em Projetos',
    institution: 'Alura',
    date: '14 de fevereiro de 2026',
    duration: '8 horas',
    icon: '🔀',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/git-github-compartilhando-colaborando-projetos/certificate',
  },
  {
    id: 'csharp-primeira-aplicacao',
    title: 'C#: Criando Sua Primeira Aplicação',
    institution: 'Alura',
    date: '12 de março de 2026',
    duration: '8 horas',
    icon: '💻',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/csharp-criando-primeira-aplicacao/certificate',
  },
  {
    id: 'csharp-orientacao-objetos',
    title: 'C#: Aplicando a Orientação a Objetos',
    institution: 'Alura',
    date: '15 de março de 2026',
    duration: '8 horas',
    icon: '🔧',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/csharp-aplicando-orientacao-objetos/certificate',
  },
  {
    id: 'csharp-dominando-orientacao-objetos',
    title: 'C#: Dominando Orientação a Objetos',
    institution: 'Alura',
    date: '2026',
    duration: '8 horas',
    icon: '🧩',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/csharp-dominando-orientacao-objetos/certificate',
  },
  {
    id: 'csharp-api-arquivos-linq',
    title: 'C#: Consumindo API, Gravando Arquivos e Utilizando o LINQ',
    institution: 'Alura',
    date: '2026',
    duration: '8 horas',
    icon: '🔗',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/c-sharp-consumindo-api-gravando-arquivos-linq/certificate',
  },
  {
    id: 'csharp-excecoes-aplicacoes-resilientes',
    title: 'C# e Exceções: Construa Aplicações Resilientes',
    institution: 'Alura',
    date: '24 de março de 2026',
    duration: '8 horas',
    icon: '🛡️',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/csharp-excecoes-construa-aplicacoes-resilientes/certificate',
  },
  {
    id: 'linux-script-processamento-arquivos-logs',
    title: 'Linux: Criando um Script para Processamento de Arquivos de Logs',
    institution: 'Alura',
    icon: '🐧',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/linux-criando-script-processamento-arquivos-logs/certificate',
  },
  {
    id: 'python-primeira-aplicacao',
    title: 'Python: Crie a Sua Primeira Aplicação',
    institution: 'Alura',
    icon: '🐍',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/python-crie-sua-primeira-aplicacao/certificate',
  },
  {
    id: 'pentest-vulnerabilidades-aplicacoes-web',
    title: 'Pentest: Explorando Vulnerabilidades em Aplicações Web',
    institution: 'Alura',
    icon: '🛡️',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/pentest-explorando-vulnerabilidades-aplicacoes-web/certificate',
  },
  {
    id: 'linux-script-monitoramento-sistema',
    title: 'Linux: Criando um Script de Monitoramento do Sistema',
    institution: 'Alura',
    icon: '📊',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/linux-criando-script-monitoramento-sistema/certificate',
  },
  {
    id: 'linux-diretorios-arquivos-permissoes-processos',
    title: 'Linux: Gerenciando Diretórios, Arquivos, Permissões e Processos',
    institution: 'Alura',
    icon: '🗂️',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/linux-gerenciando-diretorios-arquivos-permissoes-processos/certificate',
  },
  {
    id: 'redes-conceitos-iniciais-intranet',
    title: 'Redes: Conceitos Iniciais e Criação de uma Intranet',
    institution: 'Alura',
    icon: '🌐',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/redes-conceitos-iniciais-criacao-intranet/certificate',
  },
  {
    id: 'redes-roteamento-dns-ipv6',
    title: 'Redes: Implementando Roteamento, DNS e IPv6',
    institution: 'Alura',
    icon: '🖧',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/redes-implementando-roteamento-dns-ipv6/certificate',
  },
  {
    id: 'redes-vlans-politicas-acesso-internet',
    title: 'Redes: Projeto de VLANs, Políticas de Acesso e Conexão com a Internet',
    institution: 'Alura',
    icon: '🔀',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/redes-projeto-vlans-politicas-acesso-conexao-internet/certificate',
  },
  {
    id: 'http-web-por-baixo-dos-panos',
    title: 'HTTP: Entendendo a Web por Baixo dos Panos',
    institution: 'Alura',
    icon: '🔗',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/http-entendendo-web-por-baixo-dos-panos/certificate',
  },
  {
    id: 'redes-wifi-rede-sem-fio-segura',
    title: 'Redes Wi-Fi: Criando uma Rede Sem Fio de Modo Seguro',
    institution: 'Alura',
    icon: '📡',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/redes-wi-fi-rede-sem-fio-modo-seguro/certificate',
  },
  {
    id: 'computacao-fundamentos-pensamento-computacional',
    title: 'Computação: Fundamentos da Computação e Pensamento Computacional',
    institution: 'Alura',
    icon: '🧠',
    certificateUrl:
      'https://cursos.alura.com.br/user/daniel-azevedo081205/course/computacao-fundamentos-computacao-pensamento-computacional/certificate',
  },
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    institution: 'Cisco',
    date: '2025',
    icon: '🌐',
    certificateUrl:
      'https://www.credly.com/badges/5a848384-84de-4f93-986c-44a066f48c55',
  },
  {
    id: 'cisco-networking-devices-initial-configuration',
    title: 'Networking Devices and Initial Configuration',
    institution: 'Cisco',
    icon: '🖧',
    certificateUrl:
      'https://www.credly.com/badges/849541e1-168e-45db-bde0-3097600a61ad',
  },
  {
    id: 'cisco-introduction-cybersecurity',
    title: 'Introduction to Cybersecurity',
    institution: 'Cisco',
    date: '2025',
    icon: '🔒',
    certificateUrl:
      'https://www.credly.com/badges/fbc4bcca-4110-4aec-a68d-1d47fc305dd6',
  },
];

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];
