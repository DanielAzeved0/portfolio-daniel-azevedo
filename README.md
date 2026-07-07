# Portfólio Daniel Azevedo

[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=000000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

Portfólio pessoal de **Daniel da Silva Azevedo**, desenvolvido para apresentar atuação como **Desenvolvedor Full Stack** com experiência em **suporte técnico, infraestrutura de TI, redes, automação e observabilidade**.

O projeto centraliza resumo profissional, habilidades, experiências, projetos, formação, certificações e canais de contato em uma página única responsiva.

---

## Preview

- Deploy: [portfolio-daniel-azevedo-q5qi.vercel.app](https://portfolio-daniel-azevedo-q5qi.vercel.app)
- Repositório: [github.com/DanielAzeved0/portfolio-daniel-azevedo](https://github.com/DanielAzeved0/portfolio-daniel-azevedo)

> Observação: algumas alterações recentes podem existir apenas localmente até o próximo deploy na Vercel.

---

## Situação Atual

O portfólio atualmente destaca:

- Desenvolvimento full stack com React, Next.js, React Native, Node.js, C#, .NET, Python e FastAPI.
- Experiência profissional em suporte técnico N1/N2 e infraestrutura.
- Conhecimentos em Windows, Windows Server, Linux, Active Directory, Microsoft 365, Veeam Backup, Zabbix, Grafana e Prometheus.
- Projetos com foco em mobile, backend, automação, IA, infraestrutura e observabilidade.
- Certificações da Alura e Cisco Networking Academy.
- Roadmap de melhorias documentado em `docs/ROADMAP.md`.

---

## Funcionalidades

- Página única com navegação por seções.
- Menu fixo com versão responsiva para mobile.
- Menu mobile com fechamento por clique e tecla `Escape`.
- Hero com chamadas para projetos e contato.
- Seção "Sobre Mim" com posicionamento profissional atualizado.
- Listagem de habilidades por categoria.
- Seção de experiência profissional.
- Cards de projetos com descrição, funcionalidades, tecnologias e links externos.
- Seção de formação acadêmica.
- Carrossel interativo de certificações com setas, indicadores e arraste.
- Certificados abertos em nova guia.
- Links diretos para email, GitHub e LinkedIn.
- Metadata SEO com Open Graph e Twitter Card.

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Uso no projeto |
| --- | --- | --- |
| Next.js | 16.1.0 | Framework React com App Router |
| React | 19.2.1 | Construção da interface |
| TypeScript | 5 | Tipagem estática |
| Tailwind CSS | 4 | Estilização responsiva |
| Next Font | Integrado ao Next.js | Otimização das fontes Geist e Geist Mono |
| Vercel | - | Deploy do portfólio |

---

## Estrutura do Projeto

```text
portfolio-daniel-azevedo/
|-- docs/
|   `-- ROADMAP.md
|-- public/
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components/
|   |   |-- sections/
|   |   |   |-- AboutSection.tsx
|   |   |   |-- ContactSection.tsx
|   |   |   |-- EducationSection.tsx
|   |   |   |-- ExperienceSection.tsx
|   |   |   |-- Footer.tsx
|   |   |   |-- HeroSection.tsx
|   |   |   |-- ProjectsSection.tsx
|   |   |   `-- SkillsSection.tsx
|   |   |-- CertificateCarousel.tsx
|   |   |-- Navigation.tsx
|   |   |-- ProjectCard.tsx
|   |   `-- SkillCard.tsx
|   |-- constants/
|   |   |-- data.ts
|   |   `-- theme.ts
|   `-- types/
|       `-- portfolio.ts
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
`-- tsconfig.json
```

---

## Conteúdo do Portfólio

### Seções

- Início
- Sobre
- Habilidades
- Experiência
- Projetos
- Formação e certificações
- Contato

### Habilidades

As habilidades estão organizadas em:

- Frontend
- Backend
- Banco de Dados
- Ferramentas
- Infraestrutura
- Redes e Observabilidade
- Conceitos
- Soft Skills
- Idiomas

### Experiência Profissional

- **Técnico de Suporte N1 - Deployment** na Penso Tecnologia.
- **Analista de Infraestrutura de TI** na Inovah Plast.

---

## Projetos em Destaque

### Simpliza

Aplicativo mobile full stack para auxiliar MEIs e pequenos empreendedores no controle financeiro mensal.

Principais recursos:

- Autenticação com Firebase.
- Cadastro de ganhos e gastos.
- Histórico financeiro mensal.
- Gráficos comparativos.
- Cálculo simplificado do DAS.

Repositório: [Simpliza-TCC](https://github.com/DanielAzeved0/Simpliza-TCC)

### IT Center Security Cloud

Plataforma full stack para monitoramento, inventário, observabilidade e segurança de ambientes Windows em nuvem.

Principais recursos:

- Monitoramento de ambientes Windows.
- Inventário de ativos de TI.
- Observabilidade de serviços e infraestrutura.
- Automações operacionais com PowerShell.
- Base estruturada para rotinas de segurança.

Repositório: [it-center-security-cloud](https://github.com/DanielAzeved0/it-center-security-cloud)

### DeepArchive-Bridge

Monorepo full stack para gerenciamento de vendas, com backend em ASP.NET Core 8 e frontend em Next.js.

Principais recursos:

- CRUD completo de vendas.
- Busca por período, cliente, status e paginação.
- Aprovação de vendas pendentes.
- Autenticação JWT integrada ao frontend.
- Arquivamento lógico para vendas antigas.
- Integração entre API e frontend via Axios.

Repositório: [DeepArchive-Bridge](https://github.com/DanielAzeved0/DeepArchive-Bridge)

### MCP Prompt Generator

Aplicação full stack local para transformar prompts, código, JSON e contexto em SPECs estruturadas.

Principais recursos:

- Classificação semântica de intents.
- Seleção de templates.
- Análise AST-aware.
- Governança de providers com Gemini, Ollama e fallback seguro.
- Suite golden para validação de contratos e regressões.

Repositório: [mcp-task-manager](https://github.com/DanielAzeved0/mcp-task-manager)

---

## Roadmap

O plano de evolução do portfólio está documentado em:

[docs/ROADMAP.md](docs/ROADMAP.md)

O roadmap inclui tarefas marcáveis para:

- Correções rápidas e responsividade.
- Organização de código.
- Criação de componentes reutilizáveis.
- Centralização de tokens visuais.
- Melhorias de identidade visual.
- Acessibilidade.
- SEO, performance e validação final.

---

## Como Executar

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### Instalação

```bash
npm install
```

### Execução local

```bash
npm run dev
```

Depois, acesse:

```text
http://localhost:3000
```

---

## Validação

Para validar tipagem e build de produção:

```bash
npm run check
```

Para executar apenas a checagem de TypeScript:

```bash
npm run type-check
```

---

## Build de Produção

Para gerar a build de produção:

```bash
npm run build
```

Para executar a build localmente:

```bash
npm run start
```

---

## Contato

- Email: [daniel.azevedo081205@gmail.com](mailto:daniel.azevedo081205@gmail.com)
- GitHub: [github.com/DanielAzeved0](https://github.com/DanielAzeved0)
- LinkedIn: [Daniel Azevedo](https://www.linkedin.com/in/daniel-azevedo-403444321/)

---

## Licença

Este projeto foi desenvolvido para fins de portfólio pessoal. O código pode ser usado como referência para estudos, mas a identidade visual, textos, dados pessoais e informações profissionais pertencem a Daniel Azevedo.
