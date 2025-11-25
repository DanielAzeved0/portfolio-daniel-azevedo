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
