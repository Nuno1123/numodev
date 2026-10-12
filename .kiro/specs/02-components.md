# UI Component & Layout Specs (Web First)

## Global Styling & Theme
- **Theme:** Dark Mode nativo (fundo escuro profundo, ex: `#0d0f12` ou `bg-slate-950`).
- **Aesthetic:** Mega clean, tipografia moderna (sans-serif), margens respiráveis, micro-interações fluidas.
- **Mounting Animation:** Animação de entrada (fade-in + slide-up/stagger) ao carregar/montar a página.

---

## Web Layout (Two-Column Split)

### 1. Left Sidebar (Fixed / Dynamic Accordion)
- **Header:** Foto do dev (Nuno Monteiro), nome, título ("Software Developer"), localização e links de contacto/GitHub.
- **Interactive Accordion / Hover Group:**
  - **Secções:** Skills, Educação, Línguas, Free Time.
  - **Comportamento por defeito:** Apenas a secção de **Skills** está aberta/visível inicialmente. Os restantes títulos ficam recolhidos.
  - **Comportamento Hover:** Ao passar o cursor (hover) sobre qualquer título recolhido (ex: Educação), esse abre suavemente e esconde a secção que estava aberta anteriormente.

### 2. Right Content Area (Main Panel)
- **Top Section (Fixed Bio):**
  - Resumo de apresentação/bio em destaque, evidenciando o background resiliente vindo do desporto de alta competição e a capacidade de entrega enterprise.
- **Experience Slider & Animated Timeline:**
  - **Slider Lateral:** Carrossel de experiências profissionais (Devoteam / Projeto BACO EDP, Hoopers Club, Elite Basketball Program).
  - **Navegação do Slider:** Controlo lateral fluído (setas/drag) com transição suave entre cartões de job.
  - **Animated Timeline:** Uma barra de linha do tempo interativa por baixo do slider que avança e destaca visualmente o ano/período correspondente ao job visível no slider.

### 3. Header/Floating Banner (Kiro & Github Showcase)
- Badge em destaque com link direto para o repositório público: *"Built with Kiro SDD + Next.js"*.

---

## Responsive Note
- *O layout Mobile será definido e refinado posteriormente.*