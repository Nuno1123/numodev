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

### FR-2 — Skills presentation
Display skill items as centered text in the sidebar. On hover, animate the text with a split-text effect (two halves separate vertically). On click/tap, open detail content for the selected item. Hover must not change the open/selected item. Support keyboard interaction and `prefers-reduced-motion`.

### FR-3 — Sidebar sections
Provide expandable sections for Education, Languages and Free Time in the sidebar, adapted to the monochrome styling. Sections with empty data are hidden.

### FR-4 — Experience presentation
Present professional experience as interactive flip cards in a carousel.
- One card per real CV employment entry. Never invent or duplicate jobs.
- Card fronts show company logo (or placeholder), role title, company name, employment dates and description.
- Card backs show a relevant demo video when available, otherwise a designed visual fallback.
- Activating a card flips it 180 degrees.
- Add one CTA card ("Hire me for my next job") after all employment cards. This is not an employment entry: no fabricated dates, not counted in the timeline. Use placeholder destination until real URLs are supplied.

### FR-5 — 2D/3D view toggle
Provide a toggle to switch between 2D (flat slider) and 3D (perspective carousel) modes.
- 2D: one card at a time with prev/next navigation.
- 3D: perspective carousel with drag-to-rotate, inspired by the CodePen reference.
- Preserve the selected employment when switching modes.
- Calculate carousel geometry dynamically for N visual cards (employment + CTA).
- Define deliberate behavior for small card counts.

### FR-6 — Synchronized timeline
Provide a horizontal frequency/equalizer-band timeline synchronized bidirectionally with the selected employment.
- The timeline contains markers only for real employment entries — no marker for the CTA card.
- In 3D mode, the timeline adapts to a curved/perspective appearance.
- Navigating from the last employment to the CTA card: timeline stays on the last employment.

### FR-7 — Visual identity
CV-inspired monochrome design: black sidebar, white main content, Barlow Condensed for prominent name and headings, grayscale profile photo. Consistent design tokens, accessible focus indicators and WCAG-compliant contrast.

### FR-8 — Responsive behavior
The portfolio must remain usable on desktop, tablet and mobile.
- Desktop: two-column layout with black sidebar and white main content.
- Mobile: hamburger menu with drawer for sidebar content.
- 3D carousel: permit on mobile when usable; 2D fallback when necessary.
- Breakpoints: sm (640px), md (768px), lg (1024px).

### FR-9 — Technology banner
Include a banner stating: "Built with Kiro SDD + Next.js" with a link to the repository.

### FR-10 — Accessibility
Interactive elements must be keyboard accessible, have appropriate accessible names and visible focus states. Respect reduced-motion preferences. Scoped keyboard handlers — no global listeners. WCAG AA contrast compliance.

### FR-11 — Deployment readiness
The application must be buildable and deployable to Vercel.

### FR-12 — Content–presentation separation
All personal and professional data must be stored in `cv.json`. Components receive data through props. The CTA card is presentation-only and must not be stored in CV employment data. The interface must adapt to different numbers of experiences, skills or sections without code changes. Use explicit placeholders for all missing assets.

## 4. Quality requirements

- Use TypeScript strict mode.
- Follow the existing Next.js App Router architecture.
- Reuse components and existing dependencies where practical.
- Avoid unnecessary libraries, wrappers, duplicated logic and unrelated refactoring.
- Do not add dependencies without approval.
- Keep changes small and reviewable.
- Maintain responsive layouts and reasonable performance.
- Keep personal information accurate.
- Validate data structure at build time via TypeScript `satisfies`.
- All missing assets, URLs and content must use explicit, intentional placeholders.

## 5. Acceptance criteria

The first version is acceptable when:
1. The monochrome visual identity is implemented (black sidebar, white main, Barlow Condensed, grayscale photo).
2. Skills display as centered text with split-text hover animation and click-to-open content.
3. Employment cards flip 180° with correct front/back content.
4. The CTA card appears after employment cards and does not corrupt CV data or timeline.
5. The 2D/3D toggle works and preserves selection.
6. The frequency-band timeline stays synchronized with the selected employment.
7. The interface works at desktop and mobile widths.
8. Keyboard interaction, focus states and reduced-motion behavior are checked.
9. The project passes lint, type-check and production build checks.
10. No unsupported personal facts have been added.
11. All CV content comes from `cv.json`; no personal data is hardcoded in components.
12. All missing assets use explicit placeholders.

## 6. Resolved decisions

- Mobile navigation: hamburger menu with drawer.
- Deployment target: Vercel.
- Data format: JSON (`cv.json`) with TypeScript types and build-time validation via `satisfies`.
- Profile photo location: `public/images/profile.png`.
- Next.js version: 15.
- Visual direction: CV-inspired monochrome (black/white).
- Heading font: Barlow Condensed (Google Font).
- 3D carousel reference: https://codepen.io/creativeocean/pen/mdROBXx
- CTA card: "Hire me for my next job", presentation-only, not in CV data.
- Placeholders: explicit and intentional for all missing assets.
