# 🚀 Nuno Monteiro — Dynamic Developer CV & Showcase

Portefólio profissional interativo desenvolvido com **Next.js, TypeScript e Tailwind CSS**, concebido para apresentar a minha experiência, competências técnicas e percurso profissional.

O projeto utiliza **Spec-Driven Development (SDD)** com o objetivo de separar os requisitos, as decisões de arquitetura e a especificação da interface da implementação do código.

É também uma experiência prática de **AI-Assisted Software Engineering**, explorando agentes personalizados, gestão de contexto e fluxos de trabalho estruturados com Kiro.

---

## 🎯 Objetivos do Projeto

- Criar um portefólio moderno, responsivo e interativo.
- Apresentar o meu percurso profissional e competências de forma clara.
- Aplicar princípios de arquitetura frontend e desenvolvimento com TypeScript.
- Utilizar especificações como fonte de verdade durante a implementação.
- Explorar agentes de IA especializados em planeamento, desenvolvimento e revisão.
- Reduzir a duplicação de contexto e melhorar a consistência das alterações geradas por IA.
- Documentar as decisões técnicas e o processo de desenvolvimento.

---

## 🛠️ Tech Stack

| Categoria | Tecnologia |
|---|---|
| Framework | Next.js — App Router |
| Linguagem | TypeScript |
| Estilização | Tailwind CSS |
| Ícones | Lucide |
| Desenvolvimento assistido por IA | Kiro CLI |
| Ambiente de desenvolvimento | Visual Studio Code |
| Controlo de versões | Git e GitHub |
| Deploy previsto | Vercel |

---

## 🧠 Spec-Driven Development (SDD)

O projeto organiza o contexto e as decisões técnicas em ficheiros Markdown dentro da pasta `.kiro/`.

As especificações orientam o desenvolvimento e ajudam a manter consistência entre diferentes tarefas e agentes.

### Documentação do projeto `.kiro/specs`

- `portfolio-context.md` — contexto do projeto e informação profissional utilizada no portefólio.
- `technical-architecture.md` — arquitetura técnica, tecnologias, restrições e regras de implementação.
- `ui-specification.md` — especificação visual, componentes e comportamento da interface.

### Steering

A pasta `.kiro/steering/` contém orientações transversais ao projeto:

- `product.md` — objetivos, utilizadores e âmbito do produto.
- `tech.md` — tecnologias e convenções técnicas.
- `design.md` — princípios visuais e regras de interface.

Estas orientações complementam as especificações e ajudam os agentes a tomar decisões coerentes.

---

## 🤖 Agentes personalizados

Os agentes personalizados são definidos em `.kiro/agents/` e utilizados através do Kiro CLI.

| Agente | Responsabilidade |
|---|---|
| `planner` | Analisar requisitos, planear tarefas e definir a sequência de implementação. |
| `ui-developer` | Implementar componentes visuais, layouts, animações e comportamento responsivo. |
| `implementer` | Desenvolver funcionalidades e integrar os componentes do projeto. |
| `reviewer` | Rever alterações, identificar problemas e verificar a conformidade com os requisitos. |

### Exemplos de utilização

Listar os agentes disponíveis:

```bash
kiro-cli agent list
```

Iniciar uma sessão com um agente:

```bash
kiro-cli --agent planner
kiro-cli --agent ui-developer
kiro-cli --agent implementer
kiro-cli --agent reviewer
```

### Fluxo de trabalho

1. **Planear:** analisar a tarefa e definir os critérios de aceitação.
2. **Implementar:** desenvolver a funcionalidade com o agente adequado.
3. **Rever:** verificar qualidade, acessibilidade, consistência e possíveis regressões.
4. **Validar:** executar os testes e verificações disponíveis.
5. **Documentar:** atualizar as especificações quando as decisões do projeto mudarem.

Os agentes são ferramentas especializadas de apoio ao desenvolvimento; as alterações devem ser verificadas antes de serem integradas.

---

## 🎨 Conceito da interface

A experiência visual segue uma abordagem minimalista e escura, com foco na legibilidade e na apresentação do percurso profissional.

Elementos previstos na especificação:

- Sidebar com secções expansíveis.
- Competências, formação, idiomas e interesses pessoais.
- Apresentação do perfil profissional.
- Slider de experiências profissionais.
- Timeline sincronizada com as experiências.
- Animações subtis de entrada e transição.
- Identidade visual consistente entre componentes.
- Adaptação a dispositivos móveis.

O comportamento e o âmbito final da interface serão validados durante a implementação.

---

## 📁 Estrutura do projeto

```text
numodev/
├── .kiro/
│   ├── agents/
│   │   ├── planner.json
│   │   ├── ui-developer.json
│   │   ├── implementer.json
│   │   └── reviewer.json
│   ├── specs/
│   │   ├── 00-context-cv.md
│   │   ├── 01-architecture.md
│   │   └── 02-components.md
│   ├── steering/
│   │   ├── product.md
│   │   ├── tech.md
│   │   └── design.md
│   └── config.json
├── .vscode/
│   └── settings.json
├── README.md
└── ...
```

A estrutura acima representa a organização de configuração e documentação do projeto. Os diretórios da aplicação Next.js serão acrescentados à medida que a implementação evoluir.

---

## 💻 Executar localmente

### Pré-requisitos

- Node.js numa versão compatível com a versão de Next.js utilizada.
- npm.
- Git.
- Kiro CLI, caso pretendas utilizar os agentes personalizados.

### Instalação

Clonar o repositório:

```bash
git clone <[URL_DO_REPOSITORIO](https://github.com/Nuno1123/numodev)>
```

Entrar na pasta do projeto:

```bash
cd numodev
```

Instalar as dependências:

```bash
npm install
```

Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no navegador.

> Os comandos pressupõem que o projeto Next.js e o respetivo `package.json` já estão inicializados.

---

## 🔍 Validação e qualidade

Antes de integrar alterações, verificar os scripts definidos em `package.json`.

Quando disponíveis, executar:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Estas verificações ajudam a identificar problemas de linting, tipagem e compilação. A validação deve ser adaptada aos scripts efetivamente configurados no projeto.

---

## 🚀 Deploy

O objetivo é disponibilizar o portefólio através da Vercel, com integração com o GitHub para facilitar futuras atualizações.

A configuração final de deploy será documentada após a validação da aplicação e da estratégia de publicação.

---

## 📌 Estado do projeto

O projeto está a ser desenvolvido de forma incremental, com foco na preparação da arquitetura, na definição da interface e na criação de um fluxo de trabalho assistido por agentes de IA.

As funcionalidades descritas como previstas serão consideradas concluídas apenas depois de implementadas e validadas.

---

## 👤 Autor

**Nuno Monteiro**

Portefólio profissional e projeto experimental dedicado a desenvolvimento frontend, arquitetura de software e AI-Assisted Engineering.

