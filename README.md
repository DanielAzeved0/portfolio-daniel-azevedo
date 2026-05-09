# Portfolio Daniel Azevedo

Portfolio pessoal desenvolvido para apresentar minha trajetoria como **Desenvolvedor Full Stack** e **Tecnico em Desenvolvimento de Sistemas**. O projeto centraliza informacoes profissionais, habilidades tecnicas, projetos, formacao, certificacoes e canais de contato em uma interface moderna, responsiva e objetiva.

O foco deste portfolio e funcionar como uma vitrine profissional para recrutadores, oportunidades de estagio, projetos freelance e colaboracoes na area de tecnologia.

---

## Preview

Repositorio: [github.com/DanielAzeved0/portfolio-daniel-azevedo](https://github.com/DanielAzeved0/portfolio-daniel-azevedo)

Deploy: [Link do Portfolio na Vercel](https://portfolio-daniel-azevedo-q5qi.vercel.app)

Para visualizar localmente:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

---

## Funcionalidades

- Pagina unica com navegacao por secoes.
- Menu fixo com versao responsiva para dispositivos moveis.
- Secao de apresentacao com chamada para projetos e contato.
- Area "Sobre Mim" com resumo profissional.
- Listagem de habilidades tecnicas organizadas por categoria.
- Cards de projetos com descricao, funcionalidades, tecnologias e link para o GitHub.
- Secao de formacao academica.
- Carrossel interativo de certificacoes.
- Modal para visualizacao digital dos certificados.
- Links diretos para email, GitHub e LinkedIn.
- Layout responsivo para desktop, tablet e mobile.

---

## Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| Next.js 16.1.0 | Framework React com App Router |
| React 19.2.1 | Construcao da interface |
| TypeScript 5 | Tipagem estatica e maior seguranca no desenvolvimento |
| Tailwind CSS 4 | Estilizacao responsiva e utilitaria |
| Next Font | Otimizacao das fontes Geist e Geist Mono |
| Vercel | Plataforma recomendada para deploy |

---

## Estrutura do Projeto

```text
portfolio-daniel-azevedo/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── CertificateCarousel.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SkillCard.tsx
│   └── constants/
│       ├── data.ts
│       └── theme.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## Objetivo

O objetivo do projeto e reunir em um unico lugar as principais informacoes sobre minha formacao, habilidades, certificacoes e projetos desenvolvidos. A proposta e facilitar a avaliacao tecnica por recrutadores e demonstrar dominio de tecnologias modernas de frontend.

---

## Destaques Tecnicos

- Uso de **componentes reutilizaveis** para cards, navegacao e carrossel.
- Conteudo centralizado em `src/constants/data.ts`, facilitando manutencao e atualizacoes.
- Estilos reutilizaveis centralizados em `src/constants/theme.ts`.
- Projeto configurado com **TypeScript strict**.
- Interface construida com foco em responsividade e leitura rapida.
- Carrossel de certificados com suporte a navegacao por botoes, indicadores e arraste.
- Modal acessivel para visualizacao de certificados digitais.
- Estrutura simples, escalavel e facil de manter.

---

## Projetos em Destaque

### Simpliza

Aplicativo mobile desenvolvido em React Native para auxiliar MEIs e pequenos empreendedores no controle financeiro mensal.

Principais recursos:

- Cadastro de ganhos e gastos.
- Historico financeiro mensal.
- Graficos comparativos.
- Calculo simplificado do DAS.

Repositorio: [Simpliza-TCC](https://github.com/DanielAzeved0/Simpliza-TCC)

### DeepArchive-Bridge

Monorepo full stack para gerenciamento de vendas, com backend em .NET 8 e frontend em Next.js. O projeto trabalha com uma camada de arquivamento logico sobre SQLite e interface para gerenciamento de dados.

Principais recursos:

- CRUD completo de vendas.
- Arquivamento logico de registros antigos.
- API RESTful.
- Interface web para visualizacao e gerenciamento.

Repositorio: [DeepArchive-Bridge](https://github.com/DanielAzeved0/DeepArchive-Bridge)

### Lista de Compras Mobile

Aplicativo mobile academico para gerenciamento de listas de compras com autenticacao, sincronizacao e calculo automatico de valores.

Principais recursos:

- Perfil do usuario.
- Tema claro e escuro.
- Sincronizacao em tempo real.
- Calculo automatico do valor total.

Repositorio: [trabalho-pamii](https://github.com/Eduardomarinho19/trabalho-pamii)

---

## Contato

- Email: [daniel.azevedo081205@gmail.com](mailto:daniel.azevedo081205@gmail.com)
- GitHub: [github.com/DanielAzeved0](https://github.com/DanielAzeved0)
- LinkedIn: [Daniel Azevedo](https://www.linkedin.com/in/daniel-azevedo-403444321/)

---

## Como Executar

### Pre-requisitos

- Node.js instalado.
- npm instalado.

### Instalacao

```bash
npm install
```

### Execucao local

```bash
npm run dev
```

Depois, acesse:

```text
http://localhost:3000
```

---

## Build de Producao

Para gerar a build de producao:

```bash
npm run build
```

Para executar a build localmente:

```bash
npm run start
```

---

## Licenca

Este projeto foi desenvolvido para fins de portfolio pessoal. O codigo pode ser usado como referencia para estudos, mas a identidade visual, textos, dados pessoais e informacoes profissionais pertencem a Daniel Azevedo.
