# Portfólio Daniel Azevedo

[![Next.js](https://img.shields.io/badge/Next.js-16.1.0-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=000000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

Portfólio pessoal desenvolvido para apresentar minha trajetória como **Desenvolvedor Full Stack** e **Técnico em Desenvolvimento de Sistemas**. O projeto centraliza informações profissionais, habilidades técnicas, projetos, formação, certificações e canais de contato em uma interface moderna, responsiva e objetiva.

O foco deste portfólio é funcionar como uma vitrine profissional para recrutadores, oportunidades de estágio, projetos freelance e colaborações na área de tecnologia.

---

## Preview

- Deploy: [portfolio-daniel-azevedo-q5qi.vercel.app](https://portfolio-daniel-azevedo-q5qi.vercel.app)
- Repositório: [github.com/DanielAzeved0/portfolio-daniel-azevedo](https://github.com/DanielAzeved0/portfolio-daniel-azevedo)

---

## Funcionalidades

- Página única com navegação por seções.
- Menu fixo com versão responsiva para dispositivos móveis.
- Menu mobile com suporte a fechamento por clique e tecla `Escape`.
- Seção de apresentação com chamadas para projetos, contato e currículo.
- Área "Sobre Mim" com resumo profissional.
- Listagem de habilidades técnicas organizadas por categoria.
- Cards de projetos com descrição, funcionalidades, tecnologias e links externos.
- Seção de formação acadêmica.
- Carrossel interativo de certificações com setas, indicadores e arraste.
- Certificados abertos em nova guia pela ação "Ver certificado".
- Links diretos para email, GitHub e LinkedIn.
- Layout responsivo para desktop, tablet e mobile.

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

## Objetivo

Reunir em um único lugar as principais informações sobre minha formação, habilidades, certificações e projetos desenvolvidos. A proposta é facilitar a avaliação técnica por recrutadores e demonstrar domínio de tecnologias modernas de frontend.

---

## Destaques Técnicos

- Componentização por seções para manter a página principal simples.
- Dados centralizados em `src/constants/data.ts`.
- Tipos compartilhados em `src/types/portfolio.ts`.
- Estilos reutilizáveis centralizados em `src/constants/theme.ts`.
- Projeto configurado com **TypeScript strict**.
- SEO configurado com metadata, Open Graph e Twitter Card.
- Carrossel de certificados com navegação por botões, indicadores e arraste.
- Links de certificados externos abertos em nova guia.
- Navegação mobile com atributos ARIA e suporte à tecla `Escape`.
- Estrutura simples, escalável e fácil de manter.

---

## Projetos em Destaque

### Simpliza

Aplicativo mobile desenvolvido em React Native para auxiliar MEIs e pequenos empreendedores no controle financeiro mensal.

Principais recursos:

- Cadastro de ganhos e gastos.
- Histórico financeiro mensal.
- Gráficos comparativos.
- Cálculo simplificado do DAS.

Repositório: [Simpliza-TCC](https://github.com/DanielAzeved0/Simpliza-TCC)

### DeepArchive-Bridge

Monorepo full stack para gerenciamento de vendas, com backend em ASP.NET Core 8 e frontend em Next.js. O projeto trabalha com autenticação JWT, SQLite e uma camada de arquivamento lógico.

Principais recursos:

- CRUD completo de vendas.
- Busca por período, cliente, status e paginação.
- Aprovação de vendas pendentes.
- Arquivamento lógico de registros antigos.
- Integração entre API e frontend via Axios.

Repositório: [DeepArchive-Bridge](https://github.com/DanielAzeved0/DeepArchive-Bridge)

### Lista de Compras Mobile

Aplicativo mobile acadêmico para gerenciamento de listas de compras com autenticação, sincronização e cálculo automático de valores.

Principais recursos:

- Perfil do usuário.
- Tema claro e escuro.
- Sincronização em tempo real.
- Cálculo automático do valor total.

Repositório: [trabalho-pamii](https://github.com/Eduardomarinho19/trabalho-pamii)

---

## Contato

- Email: [daniel.azevedo081205@gmail.com](mailto:daniel.azevedo081205@gmail.com)
- GitHub: [github.com/DanielAzeved0](https://github.com/DanielAzeved0)
- LinkedIn: [Daniel Azevedo](https://www.linkedin.com/in/daniel-azevedo-403444321/)

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

## Licença

Este projeto foi desenvolvido para fins de portfólio pessoal. O código pode ser usado como referência para estudos, mas a identidade visual, textos, dados pessoais e informações profissionais pertencem a Daniel Azevedo.
