# Roadmap de Melhorias do Portfólio

## Objetivo

Evoluir o portfólio para uma versão mais profissional, responsiva, acessível e fácil de manter, preservando a proposta atual: apresentar Daniel Azevedo como profissional de desenvolvimento full stack, suporte e infraestrutura de TI.

## Critérios de Sucesso

- O site deve funcionar bem em desktop, tablet e mobile sem cortes horizontais.
- O código deve ficar mais modular, com menos repetição de classes e dados mais fáceis de manter.
- A experiência visual deve parecer mais personalizada e menos genérica.
- A navegação, o carrossel e os links devem ser acessíveis por teclado e leitores de tela.
- A versão publicada na Vercel deve refletir a versão local atual.

## Fase 1 - Correções Rápidas e Responsividade

### Task 1.1 - Fazer deploy da versão local atual

**Status:** [x]

**Objetivo:** Publicar as alterações locais que ainda não aparecem no site da Vercel, incluindo a remoção do botão "Solicitar Currículo".

**Escopo:**

- Conferir alterações pendentes no Git.
- Rodar `npm.cmd run check`.
- Fazer commit das mudanças.
- Enviar para o repositório remoto.
- Confirmar que a Vercel gerou novo deploy.

**Critérios de aceite:**

- O site publicado não exibe mais o botão "Solicitar Currículo".
- A seção de experiência profissional aparece no site publicado.
- O build da Vercel termina com sucesso.

### Task 1.2 - Corrigir Hero no mobile

**Status:** [x]

**Objetivo:** Evitar corte horizontal no título e nos botões da primeira seção em telas pequenas.

**Escopo:**

- Ajustar tamanhos de fonte do Hero para mobile.
- Garantir quebra adequada do subtítulo.
- Empilhar botões no mobile.
- Garantir que nenhum conteúdo ultrapasse a largura da tela.

**Critérios de aceite:**

- Em viewport de 390px, o nome "Daniel Azevedo" aparece completo.
- Os botões ficam totalmente visíveis no mobile.
- Não há scroll horizontal.

### Task 1.3 - Ajustar espaçamento vertical das seções

**Status:** [x]

**Objetivo:** Melhorar o ritmo visual entre Hero, Sobre, Habilidades, Experiência e Projetos.

**Escopo:**

- Revisar padding vertical de seções.
- Reduzir excesso de espaço onde o conteúdo é curto.
- Manter respiro suficiente entre blocos densos.

**Critérios de aceite:**

- A primeira dobra sugere continuidade do conteúdo.
- As seções não parecem desconectadas visualmente.
- Mobile e desktop mantêm proporções confortáveis.

## Fase 2 - Organização de Código e Manutenção

### Task 2.1 - Separar dados por domínio

**Status:** [x]

**Objetivo:** Reduzir o tamanho de `src/constants/data.ts` e facilitar manutenção dos conteúdos.

**Escopo:**

- Criar arquivos como `personal.ts`, `skills.ts`, `projects.ts`, `experience.ts`, `education.ts` e `certifications.ts`.
- Manter exportações centralizadas para não quebrar imports existentes.
- Preservar os tipos atuais.

**Critérios de aceite:**

- `data.ts` deixa de concentrar todos os dados.
- As seções continuam importando dados sem regressão visual.
- `npm.cmd run type-check` passa.

### Task 2.2 - Criar componentes base reutilizáveis

**Status:** [x]

**Objetivo:** Diminuir repetição de Tailwind e padronizar UI.

**Escopo:**

- Criar `Section`.
- Criar `Card`.
- Criar `Badge`.
- Criar `Button` ou `LinkButton`.
- Migrar gradualmente seções existentes.

**Critérios de aceite:**

- Componentes novos são usados em pelo menos Hero, Skills, Experience e Projects.
- Classes repetidas de card, botão e badge diminuem.
- Visual atual é preservado ou melhorado.

### Task 2.3 - Centralizar tokens visuais

**Status:** [x]

**Objetivo:** Evitar cores hardcoded espalhadas pelos componentes.

**Escopo:**

- Revisar uso direto de `#333333`, `#E0E0E0`, `#4A90E2` e `#00B0FF`.
- Mover padrões recorrentes para `theme.ts`, CSS variables ou tema Tailwind.
- Padronizar nomes de estilos para botões, cards, títulos e tags.

**Critérios de aceite:**

- A maioria das cores recorrentes usa tokens ou classes centralizadas.
- Alterar uma cor principal exige poucas mudanças.
- O visual não sofre regressão.

## Fase 3 - Experiência Visual

### Task 3.1 - Reforçar identidade visual do Hero

**Status:** [x]

**Objetivo:** Tornar a primeira dobra mais memorável e profissional.

**Escopo:**

- Avaliar inclusão de foto profissional, imagem gerada ou composição visual técnica.
- Melhorar hierarquia do título, subtítulo e CTAs.
- Evitar que o Hero dependa apenas de gradiente e texto.

**Critérios de aceite:**

- A primeira seção comunica rapidamente quem é Daniel e em que atua.
- O visual parece mais personalizado.
- O Hero continua leve e responsivo.

### Task 3.2 - Melhorar diferenciação entre seções

**Status:** [x]

**Objetivo:** Reduzir a sensação de blocos repetitivos e cinza em sequência.

**Escopo:**

- Alternar fundos com mais intenção.
- Diferenciar visualmente Experiência, Projetos e Certificações.
- Ajustar sombras, bordas e densidade dos cards.

**Critérios de aceite:**

- Cada seção tem identidade clara.
- A leitura vertical fica mais fluida.
- O site mantém aparência profissional e limpa.

### Task 3.3 - Reorganizar certificados por categoria

**Status:** [x]

**Objetivo:** Facilitar leitura da grande quantidade de cursos e reduzir dependência de carrossel longo.

**Escopo:**

- Agrupar certificados por origem ou tema: Alura, Cisco, Linux, Redes, Desenvolvimento, Segurança.
- Avaliar tabs, filtros ou agrupamento visual.
- Manter links de certificado acessíveis.

**Critérios de aceite:**

- Usuário encontra certificados por tema com facilidade.
- O carrossel não fica cansativo com muitos itens.
- Todos os certificados continuam acessíveis.

## Fase 4 - Acessibilidade e UX

### Task 4.1 - Melhorar acessibilidade do carrossel

**Status:** [x]

**Objetivo:** Tornar o carrossel de certificados mais previsível para teclado e leitores de tela.

**Escopo:**

- Manter o agrupamento por categoria de certificados.
- Exibir cada grupo como um carrossel visual mais óbvio, com deslize ou navegação clara.
- Adicionar região com nome acessível.
- Melhorar `aria-label` dos controles.
- Garantir navegação por teclado.
- Considerar feedback textual de item atual.

**Critérios de aceite:**

- O componente continua agrupado por categoria.
- Cada categoria se comporta como um carrossel visível.
- Botões do carrossel são claros para leitores de tela.
- Usuário consegue navegar sem mouse.
- O estado atual do carrossel é compreensível.

### Task 4.2 - Tornar o carrossel de certificados mais fluido

**Status:** [x]

**Objetivo:** Manter os filtros por categoria, mas reforçar a sensação de slider com transições mais suaves.

**Escopo:**

- Reduzir a largura dos cards em telas maiores para destacar um ou dois slides por vez.
- Aplicar transições de `transform` e `opacity` ao slide ativo.
- Manter `scroll-smooth` e `snap-center` para navegação natural.
- Preservar navegação por teclado e indicadores de slide.

**Critérios de aceite:**

- O grupo por categoria permanece ativo.
- O destaque visual do slide atual é mais evidente.
- A movimentação parece mais fluida e menos rígida.
- O carrossel segue acessível para teclado.

### Task 4.3 - Respeitar preferências de movimento

**Status:** [x]

**Objetivo:** Evitar animações para usuários com `prefers-reduced-motion`.

**Escopo:**

- Ajustar `scroll-behavior: smooth`.
- Ajustar animação `fade-in`.
- Criar fallback sem movimento.

**Critérios de aceite:**

- Usuários com redução de movimento não recebem animações desnecessárias.
- A navegação continua funcional.

### Task 4.4 - Melhorar estados de foco

**Status:** [x]

**Objetivo:** Garantir navegação clara por teclado.

**Escopo:**

- Revisar foco em links, botões e indicadores do carrossel.
- Padronizar `focus-visible`.
- Garantir contraste suficiente nos estados de foco.

**Critérios de aceite:**

- Todos os elementos interativos têm foco visível.
- O foco não é cortado por containers.
- Navegação por teclado é previsível.

## Fase 5 - SEO, Performance e Qualidade

### Task 5.1 - Adicionar imagem Open Graph

**Status:** [x]

**Objetivo:** Melhorar aparência do portfólio ao compartilhar links.

**Escopo:**

- Criar ou gerar imagem Open Graph.
- Adicionar metadata `openGraph.images`.
- Adicionar metadata `twitter.images`.

**Critérios de aceite:**

- Compartilhamento no LinkedIn/WhatsApp exibe imagem adequada.
- Metadata continua válida no Next.js.

### Task 5.2 - Adicionar lint e formatação

**Status:** [x]

**Objetivo:** Melhorar consistência e prevenção de erros.

**Escopo:**

- Configurar ESLint compatível com Next.js.
- Configurar Prettier se necessário.
- Adicionar scripts `lint` e `format`.
- Atualizar `check` para incluir lint.

**Critérios de aceite:**

- `npm.cmd run lint` passa.
- `npm.cmd run check` valida lint, tipos e build.
- O padrão de código fica consistente.

### Task 5.3 - Revisar metadata e conteúdo indexável

**Status:** [x]

**Objetivo:** Melhorar SEO para buscas por nome, tecnologias e área de atuação.

**Escopo:**

- Revisar title e description.
- Ajustar keywords sem exagero.
- Avaliar JSON-LD para perfil profissional.
- Garantir links canônicos corretos.

**Critérios de aceite:**

- Metadata descreve desenvolvimento, suporte e infraestrutura.
- Site mantém `lang="pt-BR"`.
- Dados estruturados, se adicionados, validam corretamente.

## Fase 6 - Validação Final

### Task 6.1 - Testar desktop e mobile com screenshots

**Status:** [x]

**Objetivo:** Validar visual real depois das melhorias.

**Escopo:**

- Capturar tela desktop.
- Capturar tela mobile.
- Verificar cortes, sobreposição e legibilidade.

**Critérios de aceite:**

- Não há scroll horizontal no mobile.
- Textos principais são legíveis.
- Cards e botões não se sobrepõem.

### Task 6.2 - Checklist de publicação

**Status:** [x]

**Objetivo:** Garantir que a versão final esteja pronta para produção.

**Escopo:**

- Rodar `npm.cmd run check`.
- Conferir links externos.
- Conferir deploy Vercel.
- Validar página publicada.

**Critérios de aceite:**

- Build local passa.
- Deploy passa.
- Site publicado reflete a versão final.

### Task 6.3 - Corrigir codificação dos arquivos de documentação

**Status:** [x]

**Objetivo:** Garantir que os textos da documentação sejam exibidos corretamente em português, sem caracteres quebrados como `PortfÃ³lio`, `CorreÃ§Ãµes` ou `nÃ£o`.

**Escopo:**

- Revisar a codificação de `README.md` e `docs/ROADMAP.md`.
- Salvar os arquivos em UTF-8.
- Conferir acentuação, cedilha e caracteres especiais nos textos.
- Validar a leitura dos arquivos no editor e no terminal.

**Critérios de aceite:**

- A documentação exibe acentos e caracteres especiais corretamente.
- Não há ocorrências visíveis de texto quebrado por codificação.
- O Git registra apenas alterações intencionais de documentação.

## Fase 7 - Qualidade de Código (Code Review)

Tarefas levantadas em revisão de código completa do projeto (arquitetura, componentes, funções e manutenibilidade), realizada após o fechamento da Fase 6.

### Task 7.1 - Corrigir clique acidental após arrastar o carrossel de certificados

**Status:** [x]

**Objetivo:** Evitar que soltar o arraste do carrossel em cima de um link dispare navegação indesejada.

**Escopo:**

- Em `src/components/CertificateCarousel.tsx`, `stopDragging` (linhas 97-105) zera `dragState.current.dragging` de forma síncrona no `pointerup`, antes do evento `click` nativo disparar, então o clique não é suprimido quando o usuário solta o arraste sobre o link "Ver certificado" (linha 197).
- Adicionar um `onClickCapture` no track que verifique se houve arraste (ex: um ref `justDragged`) e chame `preventDefault`/`stopPropagation` nesse caso, resetando a flag após o clique ser interceptado.

**Critérios de aceite:**

- Arrastar o carrossel e soltar sobre um card ou link não abre mais o certificado.
- Um clique real (sem arraste) sobre "Ver certificado" continua abrindo o link normalmente.
- Navegação por teclado e pelos botões de seta continuam funcionando sem alteração.

### Task 7.2 - Remover casts `as any` desnecessários no carrossel

**Status:** [ ]

**Objetivo:** Restaurar a segurança de tipos no tratamento de eventos de ponteiro do carrossel.

**Escopo:**

- Em `src/components/CertificateCarousel.tsx`, remover `(e as any).pointerId` nas linhas 83, 100 e 101.
- `React.PointerEvent` já tipa `pointerId: number` nativamente; usar `e.pointerId` diretamente.

**Critérios de aceite:**

- Nenhum uso de `as any` restante no arquivo.
- `npm.cmd run type-check` e `npm.cmd run lint` continuam passando.
- Comportamento de arraste/drag do carrossel não muda.

### Task 7.3 - Extrair ícone do GitHub duplicado

**Status:** [ ]

**Objetivo:** Eliminar duplicação de SVG que pode gerar inconsistência futura.

**Escopo:**

- O `<svg>` do ícone do GitHub está duplicado, byte a byte, em `src/components/ProjectCard.tsx` (linhas 92-98) e `src/components/sections/ContactSection.tsx` (linhas 42-48).
- Criar `src/components/icons/GitHubIcon.tsx` (ou local equivalente) e usar em ambos os lugares.

**Critérios de aceite:**

- O ícone do GitHub existe em um único lugar no código-fonte.
- Nenhuma mudança visual nos dois locais que o utilizam.

### Task 7.4 - Remover ou aproveitar tokens de cor não utilizados em `theme.ts`

**Status:** [ ]

**Objetivo:** Eliminar código morto ou torná-lo efetivamente utilizável.

**Escopo:**

- `COLORS` e as funções `darkOpacity`/`lightOpacity`/`primaryOpacity`/`secondaryOpacity` em `src/constants/theme.ts` (linhas 3-16) não são referenciadas em nenhum outro arquivo do projeto (confirmado via busca no código).
- Decidir entre: (a) remover esse bloco morto, já que o Tailwind não consegue consumir valores calculados em runtime dentro de `className`; ou (b) reaproveitá-lo de fato em algum `style={{}}` inline onde fizer sentido.

**Critérios de aceite:**

- `theme.ts` não contém exportações sem nenhum uso no projeto.
- `npm.cmd run check` continua passando.

### Task 7.5 - Corrigir ou remover o bloco de dark mode não funcional

**Status:** [ ]

**Objetivo:** Resolver a inconsistência do CSS de dark mode que hoje não faz nada.

**Escopo:**

- Em `src/app/globals.css` (linhas 19-24), o bloco `@media (prefers-color-scheme: dark)` redefine `--background`/`--foreground` com os mesmos valores já definidos no `:root` claro — ou seja, não tem efeito nenhum.
- Decidir entre: (a) remover o bloco, deixando claro que o site não suporta dark mode; ou (b) implementar valores de fato diferentes para o tema escuro.

**Critérios de aceite:**

- O comportamento em `prefers-color-scheme: dark` é intencional e documentado (removido ou implementado de verdade).
- Nenhuma regressão visual no tema claro (padrão atual do site).

### Task 7.6 - Adicionar campo `id` em `Experience` e `Education`

**Status:** [ ]

**Objetivo:** Deixar as chaves de listagem React mais robustas, alinhadas com `Project` e `Certification`.

**Escopo:**

- Adicionar `id: string` aos tipos `Experience` e `Education` em `src/types/portfolio.ts`.
- Preencher `id` nos dados de `src/constants/experience.ts` e `src/constants/education.ts`.
- Atualizar as `key` usadas em `ExperienceSection.tsx` e `EducationSection.tsx` para usar o novo `id` em vez de chaves compostas (`${experience.company}-${experience.role}` e `${education.degree}-${education.period}`).

**Critérios de aceite:**

- `Experience` e `Education` têm `id` único e estável.
- As listagens continuam renderizando corretamente, sem warnings de key duplicada.
- `npm.cmd run type-check` passa.

### Task 7.7 - Centralizar variante "dark" do `LinkButton` em `theme.ts`

**Status:** [ ]

**Objetivo:** Manter todos os tokens de botão no mesmo lugar.

**Escopo:**

- A variante `dark` do `LinkButton` (`src/components/ui/LinkButton.tsx`, linha 11) está definida localmente, fora de `BUTTON_STYLES` em `src/constants/theme.ts`, diferente das variantes `primary`, `outline` e `ghost`.
- Mover a definição para `BUTTON_STYLES.dark` em `theme.ts` e referenciar a partir de `LinkButton.tsx`.

**Critérios de aceite:**

- Todas as variantes de botão (`primary`, `outline`, `ghost`, `dark`) vivem em `BUTTON_STYLES`.
- Nenhuma mudança visual no botão "Ver Projeto" (único uso do variant `dark` hoje).

### Task 7.8 - Corrigir encoding do `mailto` em `ContactSection`

**Status:** [ ]

**Objetivo:** Garantir que o link "Enviar Mensagem" gere um `mailto` válido conforme RFC 6068.

**Escopo:**

- Em `src/components/sections/ContactSection.tsx` (linha 64), `subject=Contato do Portfolio&body=Olá Daniel,...` usa espaços e acentos sem `encodeURIComponent`.
- Envolver os valores de `subject` e `body` com `encodeURIComponent` antes de montar a URL do `mailto`.

**Critérios de aceite:**

- O link `mailto` gerado é uma URL válida (espaços e acentos corretamente codificados).
- Abrir o link continua preenchendo assunto e corpo do email como esperado no cliente de email padrão.

### Task 7.9 - Extrair função de slugify duplicada em `CertificateGroups`

**Status:** [ ]

**Objetivo:** Remover pequena duplicação de lógica.

**Escopo:**

- `category.replace(/\s+/g, "-").toLowerCase()` aparece duas vezes em `src/components/CertificateGroups.tsx` (linhas 26 e 50).
- Extrair para uma função utilitária pequena (ex: `slugify` em `src/components/ui/classNames.ts` ou arquivo próprio) e usar nos dois lugares.

**Critérios de aceite:**

- A lógica de slug aparece definida uma única vez.
- IDs e `aria-labelledby` do carrossel de certificados continuam batendo (sem regressão de acessibilidade).

## Fase 8 - Migração para Componentes Base

Divisão da antiga Task 7.3 em uma migração por seção, já que cada uma é uma mudança independente.

### Task 8.1 - Migrar AboutSection para o componente Section

**Status:** [ ]

**Objetivo:** Padronizar o container da seção "Sobre Mim" usando o componente base já existente.

**Escopo:**

- Substituir `<section>` cru + `SECTION_STYLES.container` concatenado em `src/components/sections/AboutSection.tsx` pelo componente `Section`.
- Preservar o `id="about"` e o conteúdo atual (título e card com os dois parágrafos).

**Critérios de aceite:**

- `AboutSection` usa `Section` como container principal.
- Visual da seção "Sobre Mim" não muda perceptivelmente.
- `npm.cmd run check` passa.

### Task 8.2 - Migrar EducationSection para Section e Card

**Status:** [ ]

**Objetivo:** Padronizar a seção de Formação e Certificações usando os componentes base.

**Escopo:**

- Substituir `<section>` cru por `Section` em `src/components/sections/EducationSection.tsx`.
- Substituir o markup manual do card de formação acadêmica (bordas, sombra, ícone, linhas 15-49) pelo componente `Card`.
- Manter o restante da seção (título "Certificações", `CertificateGroups`) sem alterações.

**Critérios de aceite:**

- `EducationSection` usa `Section` e `Card`.
- Visual dos cards de formação acadêmica é preservado.
- `npm.cmd run check` passa.

### Task 8.3 - Migrar ContactSection para usar LinkButton

**Status:** [ ]

**Objetivo:** Padronizar os links de contato usando o componente reutilizável.

**Escopo:**

- Substituir `<a className={BUTTON_STYLES.ghost}>` cru em `src/components/sections/ContactSection.tsx` pelo componente `LinkButton` (variant `ghost`).
- Avaliar se o CTA "Enviar Mensagem" também deve migrar para `LinkButton` (hoje usa uma classe inline separada).

**Critérios de aceite:**

- Nenhum link de ação em `ContactSection` usa `BUTTON_STYLES` diretamente fora do `LinkButton`.
- Visual e comportamento dos links (Email, GitHub, LinkedIn, Enviar Mensagem) são preservados.
- `npm.cmd run check` passa.

## Fase 9 - Testes Automatizados

Divisão da antiga Task 7.11 em setup de ferramenta + uma suíte de testes por componente.

### Task 9.1 - Configurar ferramenta de testes

**Status:** [ ]

**Objetivo:** Preparar a infraestrutura de testes do projeto.

**Escopo:**

- Avaliar e configurar Vitest ou Jest + Testing Library, compatível com Next.js 16 / React 19.
- Adicionar script `test` no `package.json`.
- Configurar arquivo de setup (ex: `vitest.config.ts` ou `jest.config.ts`) e ambiente jsdom, incluindo o alias `@/*` do projeto.

**Critérios de aceite:**

- `npm.cmd run test` executa a suíte (mesmo que vazia) sem erros.
- Ferramenta escolhida integra com TypeScript e o alias `@/*` do projeto.

### Task 9.2 - Testes para CertificateCarousel

**Status:** [ ]

**Objetivo:** Cobrir o componente mais complexo e mais retrabalhado do projeto.

**Escopo:**

- Testar navegação por teclado (setas esquerda/direita).
- Testar os botões "Certificado anterior"/"Próximo certificado", incluindo estados `disabled` nos extremos.
- Testar que o link "Ver certificado" não é acionado quando há arraste (cobre a correção da Task 7.1).

**Critérios de aceite:**

- Testes cobrem os cenários acima e passam em `npm.cmd run test`.
- Falhas de regressão nesse componente passam a ser detectadas automaticamente.

### Task 9.3 - Testes para CertificateGroups

**Status:** [ ]

**Objetivo:** Cobrir a lógica de agrupamento e troca de categoria de certificados.

**Escopo:**

- Testar a troca de categoria ativa ao clicar nas tabs.
- Testar que o carrossel reseta o slide ativo ao trocar de categoria (via `key`).
- Testar o estado de "Nenhum certificado encontrado para esta categoria" quando aplicável.

**Critérios de aceite:**

- Testes cobrem os cenários acima e passam em `npm.cmd run test`.
- `npm.cmd run check` (ou script equivalente) passa a incluir a execução dos testes, se fizer sentido.
