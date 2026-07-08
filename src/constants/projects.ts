import type { Project } from '@/types/portfolio';

export const PROJECTS: Project[] = [
  {
    id: 'simpliza',
    title: 'Simpliza',
    badge: 'TCC - Projeto de ConclusÃ£o',
    icon: 'ðŸŽ“',
    description:
      'Aplicativo mobile full stack desenvolvido para auxiliar MEIs e pequenos empreendedores no controle financeiro mensal, reunindo autenticaÃ§Ã£o, histÃ³rico, grÃ¡ficos e gerenciamento de receitas/despesas em uma experiÃªncia objetiva.',
    features: [
      'AutenticaÃ§Ã£o com Firebase',
      'Cadastro de ganhos e gastos',
      'HistÃ³rico financeiro mensal',
      'GrÃ¡ficos comparativos',
      'CÃ¡lculo simplificado do DAS',
    ],
    technologies: ['React Native', 'Expo', 'JavaScript', 'Firebase', 'Android', 'EAS Build'],
    githubUrl: 'https://github.com/DanielAzeved0/Simpliza-TCC',
    featured: true,
  },
  {
    id: 'it-center-security-cloud',
    title: 'IT Center Security Cloud',
    badge: 'Infraestrutura e SeguranÃ§a',
    icon: 'â˜ï¸',
    description:
      'Plataforma full stack para monitoramento, inventÃ¡rio, observabilidade e seguranÃ§a de ambientes Windows em nuvem, integrando backend, frontend, banco de dados e automaÃ§Ãµes em PowerShell.',
    features: [
      'Monitoramento de ambientes Windows',
      'InventÃ¡rio de ativos de TI',
      'Observabilidade de serviÃ§os e infraestrutura',
      'AutomaÃ§Ãµes operacionais com PowerShell',
      'Base estruturada para rotinas de seguranÃ§a',
    ],
    technologies: ['FastAPI', 'Next.js', 'PostgreSQL', 'PowerShell', 'Windows Server'],
    githubUrl: 'https://github.com/DanielAzeved0/it-center-security-cloud',
    featured: true,
  },
  {
    id: 'deeparchive-bridge',
    title: 'DeepArchive-Bridge',
    badge: 'Projeto Full Stack',
    icon: 'ðŸ—„ï¸',
    description:
      'Monorepo full stack para gerenciamento de vendas, com backend em ASP.NET Core 8 e frontend em Next.js. O sistema centraliza operaÃ§Ãµes de venda, autenticaÃ§Ã£o e uma camada de arquivamento lÃ³gico sobre SQLite.',
    features: [
      'CRUD completo de vendas',
      'Busca por perÃ­odo, cliente, status e paginaÃ§Ã£o',
      'AprovaÃ§Ã£o de vendas pendentes',
      'AutenticaÃ§Ã£o JWT integrada ao frontend',
      'Dashboard e telas de listagem, criaÃ§Ã£o, ediÃ§Ã£o e detalhes',
      'Arquivamento lÃ³gico para vendas com mais de 90 dias',
      'Health check da API e integraÃ§Ã£o via Axios',
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
    icon: 'ðŸ§ ',
    description:
      'AplicaÃ§Ã£o full stack local que transforma prompts, cÃ³digo, JSON e contexto em SPECs estruturadas com classificaÃ§Ã£o semÃ¢ntica, validaÃ§Ã£o rÃ­gida de schema e fallback determinÃ­stico.',
    features: [
      'ClassificaÃ§Ã£o semÃ¢ntica de intents e seleÃ§Ã£o de templates',
      'InjeÃ§Ã£o de contexto de cÃ³digo com anÃ¡lise AST-aware',
      'GovernanÃ§a de providers com Gemini, Ollama e fallback seguro',
      'Interface web para gerar e revisar SPECs em JSON',
      'Suite golden para validar contratos e regressÃµes do runtime',
    ],
    technologies: ['TypeScript', 'Node.js', 'Express', 'React', 'Zod', 'Gemini', 'Ollama'],
    githubUrl: 'https://github.com/DanielAzeved0/mcp-task-manager',
  },
];

