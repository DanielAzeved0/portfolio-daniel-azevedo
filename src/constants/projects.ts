import type { Project } from '@/types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'simpliza',
    title: 'Simpliza',
    badge: 'TCC - Projeto de Conclusão',
    icon: '🎬',
    description:
      'Aplicativo mobile full stack desenvolvido para auxiliar MEIs e pequenos empreendedores no controle financeiro mensal, reunindo autenticação, histórico, gráficos e gerenciamento de receitas/despesas em uma experiência objetiva.',
    features: [
      'Autenticação com Firebase',
      'Cadastro de ganhos e gastos',
      'Histórico financeiro mensal',
      'Gráficos comparativos',
      'Cálculo simplificado do DAS',
    ],
    technologies: ['React Native', 'Expo', 'JavaScript', 'Firebase', 'Android', 'EAS Build'],
    githubUrl: 'https://github.com/DanielAzeved0/Simpliza-TCC',
    featured: true,
  },
  {
    id: 'it-center-security-cloud',
    title: 'IT Center Security Cloud',
    badge: 'Infraestrutura e Segurança',
    icon: '⚡️',
    description:
      'Plataforma full stack para monitoramento, inventário, observabilidade e segurança de ambientes Windows em nuvem, integrando backend, frontend, banco de dados e automações em PowerShell.',
    features: [
      'Monitoramento de ambientes Windows',
      'Inventário de ativos de TI',
      'Observabilidade de serviços e infraestrutura',
      'Automações operacionais com PowerShell',
      'Base estruturada para rotinas de segurança',
    ],
    technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'PowerShell', 'Windows Server'],
    githubUrl: 'https://github.com/DanielAzeved0/it-center-security-cloud',
    featured: true,
  },
  {
    id: 'deeparchive-bridge',
    title: 'DeepArchive-Bridge',
    badge: 'Projeto Full Stack',
    icon: '🧭',
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

