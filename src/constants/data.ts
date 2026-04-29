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
    skills: ['React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend',
    skills: ['JavaScript', 'Node.js', 'Express.js' ],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'MongoDB', 'FireBase'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Cypress', 'Postman'],
  },
  {
    category: 'Conceitos',
    skills: ['CRUD', 'Scrum'],
  },
  {
    category: 'Soft Skills',
    skills: ['Trabalho em equipe', 'Comunicação', 'Resolução de problemas', 'Criatividade'],
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
    badge: '🗄️ Full Stack',
    description: 'Sistema full stack para gerenciamento de vendas, desenvolvido com backend em ASP.NET Core 8 e frontend em Next.js. A aplicação centraliza o CRUD de vendas, filtros por período, cliente e status, autenticação JWT e uma camada de arquivamento lógico que identifica vendas antigas sem remover dados da base ativa.',
    features: [
      'CRUD completo de vendas',
      'Busca por período, cliente, status e paginação',
      'Aprovação de vendas pendentes',
      'Autenticação JWT integrada ao frontend',
      'Dashboard e telas de listagem, criação, edição e detalhes',
      'Arquivamento lógico para vendas com mais de 90 dias',
      'Health check da API e integração via Axios',
    ],
    technologies: ['ASP.NET Core 8', 'C# 12', 'Entity Framework Core 8', 'SQLite', 'JWT Bearer', 'Next.js 16', 'React 18', 'TypeScript', 'Tailwind CSS', 'Axios'],
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
