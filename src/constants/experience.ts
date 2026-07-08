import type { Experience } from '@/types/portfolio';

export const EXPERIENCES: Experience[] = [
  {
    role: 'Técnico de Suporte N1 - Deployment',
    company: 'Penso Tecnologia',
    period: 'Jul/2026 - Atual',
    highlights: [
      'Atendimento de suporte técnico N1 a usuários corporativos, presencial e remoto, utilizando plataforma de Service Desk.',
      'Instalação, configuração e manutenção de computadores, notebooks, periféricos, sistemas Windows e Microsoft 365.',
      'Administração de usuários, grupos e permissões no Active Directory, além de suporte a máquinas virtuais.',
      'Monitoramento de infraestrutura com Zabbix, análise de incidentes e acompanhamento da disponibilidade dos serviços.',
      'Operação e conferência de backups corporativos com Veeam, incluindo análise de logs e apoio em restaurações.',
      'Auditoria e inventário de ativos de TI, documentação técnica e escalonamento de incidentes para equipes N2/N3.',
    ],
    technologies: ['Service Desk', 'Windows', 'Microsoft 365', 'Active Directory', 'Zabbix', 'Veeam Backup'],
  },
  {
    role: 'Analista de Infraestrutura de TI',
    company: 'Inovah Plast',
    period: 'Nov/2025 - Atual',
    type: 'PJ',
    highlights: [
      'Suporte técnico N1/N2 remoto e presencial.',
      'Implantação e monitoramento de rotinas de backup corporativo utilizando OneDrive Empresarial.',
      'Criação de scripts de automação para backup e geração de logs.',
      'Implementação de monitoramento de infraestrutura utilizando Grafana e Prometheus.',
      'Análise de métricas e acompanhamento da saúde dos serviços corporativos.',
      'Administração de compartilhamentos de rede e resolução de incidentes relacionados a acesso a servidores.',
    ],
    technologies: ['OneDrive Empresarial', 'Shell Script', 'Grafana', 'Prometheus', 'Redes', 'Backup'],
  },
];

