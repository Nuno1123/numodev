# 🚀 Nuno Monteiro — Dynamic Developer CV & Showcase

Uma webpage dinâmica e interativa desenvolvida com **Next.js**, **TypeScript** e **TailwindCSS**, criada utilizando o paradigma de **Spec-Driven Development (SDD)** com a extensão **Kiro CLI (v0.1.3)** no VSCode.

O objetivo deste projeto é demonstrar práticas modernas de arquitetura Frontend, otimização no consumo de tokens em fluxos de AI-Driven Engineering, e transparência do código através deste repositório público.

---

## 🛠️ Tech Stack & Ferramentas

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilização:** TailwindCSS
- **Ferramentas de AI/SDD:** Kiro 0.1.3 CLI (VSCode Extension)
- **Deploy:** Vercel

---

## 📐 Arquitetura Spec-Driven Development (SDD)

O projeto foi construído separando estritamente os dados, a arquitetura e os componentes através de especificações desacopladas em `.kiro/specs/`:

- `.kiro/specs/00-context-cv.md`: Fonte de dados estruturada (YAML) extraída do CV[cite: 1].
- `.kiro/specs/01-architecture.md`: Restrições técnicas e regras de poupança de contexto[cite: 1].
- `.kiro/specs/02-components.md`: Especificação dos componentes da interface[cite: 1].

---

## 🚀 Como Executar o Projeto Localmente

```bash
# 1. Clonar o repositório
git clone [https://github.com/nuno1123/seu-repositorio.git](https://github.com/nuno1123/seu-repositorio.git)

# 2. Entrar na pasta
cd seu-repositorio

# 3. Instalar as dependências
npm install

# 4. Executar em modo de desenvolvimento
npm run dev

Aceda a http://localhost:3000 no seu navegador.

---

### 5. Passos para Criar o Projeto Next.js e Ligar ao GitHub

Segue este passo-a-passo no teu terminal do VSCode:

#### Passo 1: Inicializar o projeto Next.js na pasta atual
No teu terminal do VSCode, executa:

```bash

npx create-next-app@latest .