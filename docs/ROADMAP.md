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

**Status:** [ ]

**Objetivo:** Evitar animações para usuários com `prefers-reduced-motion`.

**Escopo:**
- Ajustar `scroll-behavior: smooth`.
- Ajustar animação `fade-in`.
- Criar fallback sem movimento.

**Critérios de aceite:**
- Usuários com redução de movimento não recebem animações desnecessárias.
- A navegação continua funcional.

### Task 4.4 - Melhorar estados de foco

**Status:** [ ]

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

**Status:** [ ]

**Objetivo:** Melhorar aparência do portfólio ao compartilhar links.

**Escopo:**
- Criar ou gerar imagem Open Graph.
- Adicionar metadata `openGraph.images`.
- Adicionar metadata `twitter.images`.

**Critérios de aceite:**
- Compartilhamento no LinkedIn/WhatsApp exibe imagem adequada.
- Metadata continua válida no Next.js.

### Task 5.2 - Adicionar lint e formatação

**Status:** [ ]

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

**Status:** [ ]

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

**Status:** [ ]

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

**Status:** [ ]

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

**Status:** [ ]

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
