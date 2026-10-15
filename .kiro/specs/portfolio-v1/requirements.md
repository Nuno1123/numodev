# Portfolio v1 — Requirements

## 1. Objective

Build a modern, minimal and responsive personal portfolio that presents the owner's professional profile, skills and experience. The portfolio must be maintainable, performant, suitable for deployment and architected to support future reuse as a template.

## 2. Source of truth

- Use `../portfolio-context.md` as the source of truth for personal and professional facts.
- Use `../ui-specification.md` as the detailed source of truth for visual and component requirements.
- Use `../technical-architecture.md` and the relevant files in `.kiro/steering/` for technical constraints.
- Do not invent, infer or embellish CV facts.
- If a requirement conflicts with another document, report the conflict before making a significant design decision.

## 3. Functional requirements

### FR-1 — Professional introduction
The main content area must present a concise professional introduction based on the source CV.

### FR-2 — Sidebar navigation
Provide a sidebar with expandable sections for:
- Skills
- Education
- Languages
- Free Time

Skills must be expanded by default. The interaction between expanded sections must follow `ui-specification.md`.

### FR-3 — Experience presentation
Present professional experience in an interactive experience slider.

The initial content must reflect the verified experience in the source CV, including the relevant entries for Devoteam / EDP BACO, Hoopers and Elite Basketball Program where supported by the source.

### FR-4 — Synchronized timeline
Provide a timeline that stays synchronized with the selected experience. Changing the selected experience must update the corresponding timeline state, and selecting a timeline entry must select the matching experience if this interaction is supported by the final design.

### FR-5 — Visual identity
Use the dark, minimal visual style, animations, spacing and component behavior described in `ui-specification.md`.

### FR-6 — Responsive behavior
The portfolio must remain usable on desktop, tablet and mobile.
- Desktop: two-column layout with sidebar and main content.
- Mobile: hamburger menu with drawer for sidebar content.
- Breakpoints: sm (640px), md (768px), lg (1024px).

### FR-7 — Technology banner
Include a banner stating: "Built with Kiro SDD + Next.js".

### FR-8 — Accessibility
Interactive elements must be keyboard accessible, have appropriate accessible names and visible focus states. Respect reduced-motion preferences.

### FR-9 — Deployment readiness
The application must be buildable and deployable to Vercel. Verify compatibility before implementing deployment-specific changes.

### FR-10 — Content–presentation separation
All personal and professional data must be stored in a structured JSON file (`src/data/cv.json`). Components must receive data through props and must not contain hardcoded CV content. The interface must adapt to the data provided: different numbers of experiences, skills, languages or sections must render correctly without code changes.

## 4. Quality requirements

- Use TypeScript strict mode.
- Follow the existing Next.js App Router architecture.
- Reuse components and existing dependencies where practical.
- Avoid unnecessary libraries, wrappers, duplicated logic and unrelated refactoring.
- Keep changes small and reviewable.
- Maintain responsive layouts and reasonable performance.
- Keep personal information accurate and only display information intended for the public portfolio.
- Validate data structure at build time via TypeScript `satisfies`. No runtime validation library in V1.

## 5. Acceptance criteria

The first version is acceptable when:
1. The main introduction is displayed correctly.
2. The sidebar sections show the correct content and interaction.
3. The experience slider and timeline stay synchronized.
4. The intended visual style and animations are implemented.
5. The interface works at desktop and mobile widths with the agreed responsive behavior.
6. Keyboard interaction, focus states and reduced-motion behavior are checked.
7. The project passes the available lint, type-check and production build checks.
8. No unsupported personal facts have been added.
9. All CV content comes from `cv.json`; no personal data is hardcoded in components.
10. The interface renders correctly with different data shapes (varying numbers of entries).

## 6. Resolved decisions

- Mobile navigation: hamburger menu with drawer.
- Deployment target: Vercel.
- Data format: JSON (`cv.json`) with TypeScript types and build-time validation via `satisfies`.
- Profile photo location: `public/images/profile.png`.
- Next.js version: 15.
