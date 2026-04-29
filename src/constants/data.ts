// Dados do portfólio centralizados para facilitar manutenção

export const PERSONAL_INFO = {
  name: 'Daniel Azevedo',
  fullName: 'Daniel da Silva Azevedo',
  title: 'Desenvolvedor Full Stack',
  subtitle: 'Técnico em Desenvolvimento de Sistemas',
  email: 'daniel.azevedo081205@gmail.com',
  github: 'https://github.com/DanielAzeved0',
  linkedin: 'https://www.linkedin.com/in/daniel-azevedo-403444321/',
};

export const ABOUT_TEXT = {
  paragraph1: 'Sou estudante de Desenvolvimento de Sistemas com paixão por criar soluções tecnológicas inovadoras. Durante meu curso técnico, desenvolvi habilidades sólidas em programação, banco de dados e desenvolvimento web.',
  paragraph2: 'Busco constantemente aprender novas tecnologias e aplicar meus conhecimentos em projetos práticos. Tenho facilidade para trabalhar em equipe e adoro enfrentar desafios que me permitam crescer profissionalmente.',
};

export const SKILLS = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Native',  'Bootstrap'],
  },
  {
    category: 'Backend',
    skills: ['JavaScript', 'Node.js', 'Express.js', 'Expo', '.NET 8', 'C#'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'MongoDB', 'FireBase', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Cypress', 'Postman', 'Docker', 'Swagger', 'EAS Build'],
  },
  {
    category: 'Conceitos',
    skills: ['CRUD', 'Scrum'],
  },
  {
    category: 'Soft Skills',
    skills: ['Trabalho em equipe', 'Comunicação', 'Resolução de problemas', 'Criatividade', 'Adaptabilidade'],
  },
];

export const PROJECTS = [
  {
    id: 'simpliza',
    title: 'Simpliza',
    badge: '🎓 TCC - Projeto de Conclusão',
    description: 'Aplicativo mobile desenvolvido em React Native para auxiliar MEIs e pequenos empreendedores no controle financeiro mensal. Permite registrar ganhos e gastos, visualizar gráficos comparativos e calcular o DAS de forma simplificada.',
    features: [
      'Cadastro de ganhos e gastos',
      'Histórico financeiro mensal',
      'Gráficos comparativos',
      'Cálculo simplificado do DAS',
    ],
    technologies: ['React Native', 'Expo', 'JavaScript', 'Android', 'EAS Build'],
    githubUrl: 'https://github.com/DanielAzeved0/Simpliza-TCC',
  },
  {
    id: 'deeparchive-bridge',
    title: 'DeepArchive-Bridge',
    badge: '🗄️ Projeto Pessoal',
    description: 'Monorepo com backend em .NET 8 e frontend em Next.js 16 para gerenciamento de vendas com uma camada de arquivamento lógico sobre SQLite. O sistema oferece uma API RESTful para operações CRUD, armazenamento inteligente de dados e uma interface moderna para visualização e gerenciamento de vendas.',
    features: [
      'Gerenciamento automático de vendas - CRUD completo',
      'Arquivamento inteligente com dados de mais de 90 dias',
      'Hot Storage: SQlite com acesso rápido para dados recentes',
      'Cold Storage: Armazenamento de arquivo para dados históricos',
      'API RESTful com Swagger UI',
      'Injeção de Dependências com arquitetura desacoplada',
      'Docker Compose para ambiente de desenvolvimento',
    ],
    technologies: ['.NET 8.0', 'C#', 'PostgreSQL', 'Entity Framework Core', 'Docker', 'Swagger'],
    githubUrl: 'https://github.com/DanielAzeved0/DeepArchive-Bridge',
  },
  {
    id: 'trabalho-pamii',
    title: 'Lista de Compras Mobile',
    badge: '📱 Projeto Acadêmico',
    description: 'Aplicativo mobile completo de lista de compras desenvolvido durante a disciplina de Programação de Aplicações Móveis II. Sistema robusto com autenticação Firebase, sincronização em tempo real e interface moderna para gerenciar listas de compras de forma eficiente.',
    features: [
      ' Perfil do usuário com edição de dados',
      ' Tema claro e escuro (toggle)',
      ' Design responsivo e interface moderna',
      ' Sincronização em tempo real (Firebase Database)',
      ' Cálculo automático do valor total da lista',
    ],
    technologies: ['React Native', 'Expo', 'Firebase Auth', 'Firebase Database', 'JavaScript', ],
    githubUrl: 'https://github.com/Eduardomarinho19/trabalho-pamii',
  },
];

export const EDUCATION = {
  degree: 'Técnico em Desenvolvimento de Sistemas',
  period: '2023 - 2025',
  description: 'Formação técnica com foco em desenvolvimento de software, banco de dados, programação orientada a objetos, desenvolvimento web e mobile.',
};

export const CERTIFICATIONS = [
  {
    id: 'logica-programacao-javascript',
    title: 'Lógica de Programação: Mergulhe em Programação com JavaScript',
    institution: 'Alura',
    date: '04 de fevereiro de 2026',
    duration: '6 horas',
    icon: '💻',
    certificateUrl: 'https://cursos.alura.com.br/user/daniel-azevedo081205/course/logica-programacao-mergulhe-programacao-javascript/certificate',
  },
  {
    id: 'logica-programacao-funcoes-listas',
    title: 'Lógica de Programação: Explore Funções e Listas',
    institution: 'Alura',
    date: '13 de fevereiro de 2026',
    duration: '6 horas',
    icon: '🧠',
    certificateUrl: 'https://cursos.alura.com.br/user/daniel-azevedo081205/course/logica-programacao-funcoes-listas/certificate',
  },
  {
    id: 'git-github-colaborando-projetos',
    title: 'Git e GitHub: Compartilhando e Colaborando em Projetos',
    institution: 'Alura',
    date: '14 de fevereiro de 2026',
    duration: '8 horas',
    icon: '🔀',
    certificateUrl: 'https://cursos.alura.com.br/user/daniel-azevedo081205/course/git-github-compartilhando-colaborando-projetos/certificate',
  },
  {
    id: 'logica-programacao-praticando-desafios',
    title: 'Lógica de Programação: Praticando com Desafios',
    institution: 'Alura',
    date: '11 de março de 2026',
    duration: '8 horas',
    icon: '🎯',
    certificateUrl: 'https://cursos.alura.com.br/user/daniel-azevedo081205/course/logica-programacao-praticando-desafios/certificate',
  },
  {
    id: 'csharp-primeira-aplicacao',
    title: 'C#: Criando Sua Primeira Aplicação',
    institution: 'Alura',
    date: '12 de março de 2026',
    duration: '8 horas',
    icon: '💻',
    certificateUrl: 'https://cursos.alura.com.br/user/daniel-azevedo081205/course/csharp-criando-primeira-aplicacao/certificate',
  },
  {
    id: 'csharp-orientacao-objetos',
    title: 'C#: Aplicando a Orientação a Objetos',
    institution: 'Alura',
    date: '15 de março de 2026',
    duration: '8 horas',
    icon: '🔧',
    certificateUrl: 'https://cursos.alura.com.br/user/daniel-azevedo081205/course/csharp-aplicando-orientacao-objetos/certificate',
  },
  {
    id: 'csharp-excecoes-aplicacoes-resilientes',
    title: 'C# e Exceções: Construa Aplicações Resilientes',
    institution: 'Alura',
    date: '24 de março de 2026',
    duration: '8 horas',
    icon: '🛡️',
    certificateUrl: 'https://cursos.alura.com.br/user/daniel-azevedo081205/course/csharp-excecoes-construa-aplicacoes-resilientes/certificate',
  },
  {
    id: 'cisco-networking',
    title: 'Conceitos Básicos de Redes',
    institution: 'Cisco Networking Academy',
    date: '2025',
    icon: '🌐',
  },
  {
    id: 'cisco-cybersecurity',
    title: 'Introdução à Cibersegurança',
    institution: 'Cisco Networking Academy',
    date: '2025',
    icon: '🔒',
  },
];

export const NAVIGATION_ITEMS = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
];
