# Portfolio v1 — Tasks

## Phase 0 — Bootstrap and foundations

- [x] **T0.1 — Initialize Next.js 15 project**
  - Run `create-next-app` with App Router, TypeScript strict, Tailwind CSS, ESLint.
  - Use the `src/` directory structure.
  - Pin dependency versions in `package.json`.
  - Acceptance: `npm run dev`, `npm run build` and `npx tsc --noEmit` pass without errors.
  - Files: `package.json`, `package-lock.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, `postcss.config.mjs`, `.gitignore`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`

- [x] **T0.2 — Configure dark theme**
  - Define color tokens in Tailwind config (background `#0d0f12` or `slate-950`, text, accent).
  - Apply dark class on `<html>`.
  - Acceptance: base page renders with dark background and legible text.
  - Files: `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx`

- [x] **T0.3 — Install Lucide**
  - Add `lucide-react` with a pinned version.
  - Acceptance: importing an icon compiles without errors.
  - Files: `package.json`

- [x] **T0.4 — Create CV data schema and content**
  - Create `src/types/cv.ts` with TypeScript interfaces for all CV sections.
  - Create `src/data/cv.json` with content extracted from `portfolio-context.md`.
  - Create `src/data/index.ts` that imports the JSON and validates via `satisfies CVData`.
  - Acceptance: `npx tsc --noEmit` passes; all CV fields are present and accurate.
  - Files: `src/types/cv.ts`, `src/data/cv.json`, `src/data/index.ts`

- [x] **T0.5 — Move profile photo to public**
  - Move `src/assets/img/profile_photo.png` to `public/images/profile.png`.
  - Remove `src/assets/` if empty.
  - Acceptance: image accessible at `/images/profile.png` in the dev server.
  - Files: `public/images/profile.png`

- [x] **T0.6 — Fix spec file references**
  - Updated `README.md`: corrected spec filenames in the project structure section.
  - Updated `.kiro/specs/technical-architecture.md`: corrected as part of the spec rewrite.
  - Updated `.kiro/steering/product.md`: corrected `portfolio-context.md` reference.
  - Acceptance: no spec or steering file references a non-existent filename.
  - Files: `README.md`, `.kiro/specs/technical-architecture.md`, `.kiro/steering/product.md`

## Phase 1 — Structural layout

- [x] **T1.1 — Application shell (two-column)**
  - Implement the desktop layout: fixed sidebar on the left, scrollable main content on the right.
  - Use placeholder content to verify structure.
  - Components receive data via props; do not import CV data in layout components.
  - Acceptance: two panels visible at desktop width; no horizontal overflow.
  - Files: `src/app/page.tsx`, `src/components/layout/Sidebar.tsx`, `src/components/layout/MainContent.tsx`

- [ ] **T1.2 — Responsive layout and mobile navigation**
  - Implement hamburger button and slide-in drawer for sidebar on mobile/tablet.
  - Sidebar accessible at all viewport widths via keyboard and touch.
  - Drawer closes on section selection or outside tap.
  - Breakpoints: sm (640px), md (768px), lg (1024px).
  - Acceptance: sidebar functional via hamburger on mobile; keyboard accessible; no overflow.
  - Files: `src/components/layout/Sidebar.tsx`, `src/components/layout/MobileNav.tsx`

## Phase 2 — Content components

- [ ] **T2.1 — Profile header**
  - Photo via `next/image` using the path from `cv.json`, name, title, location, links.
  - All content received via props.
  - Acceptance: data matches CV; links functional; photo visible.
  - Files: `src/components/sidebar/ProfileHeader.tsx`

- [ ] **T2.2 — Sidebar accordion**
  - Render N sections dynamically from data. Skills expanded by default.
  - Hover, click and keyboard interaction. Sections with empty data are hidden.
  - Acceptance: works with different data shapes; keyboard navigable; hover is not the only access method.
  - Files: `src/components/sidebar/AccordionSection.tsx`, `src/components/sidebar/SidebarSections.tsx`

- [ ] **T2.3 — Professional introduction**
  - Display the summary from CV data via props.
  - No hardcoded text.
  - Acceptance: text matches `cv.json`.
  - Files: `src/components/main/Introduction.tsx`

- [ ] **T2.4 — Experience slider**
  - Render N experience cards with arrow navigation and keyboard support.
  - One card visible at a time. Supports 1 to N entries.
  - Acceptance: all experiences display correct data; navigation works via keyboard, click and touch.
  - Files: `src/components/main/ExperienceSlider.tsx`, `src/components/main/ExperienceCard.tsx`

- [ ] **T2.5 — Synchronized timeline**
  - Timeline calculates positions from `period.start` and `period.end`.
  - Bidirectional sync with the experience slider. Adapts to N entries.
  - Acceptance: changing slider updates timeline and vice-versa; visual states are clear.
  - Files: `src/components/main/Timeline.tsx`

- [ ] **T2.6 — Technology banner**
  - Display "Built with Kiro SDD + Next.js" with a link to the repository.
  - Acceptance: banner visible, responsive, link functional.
  - Files: `src/components/main/TechBanner.tsx`

## Phase 3 — Polish and quality

- [ ] **T3.1 — Entry animations**
  - Implement fade-in, slide-up and stagger on mount.
  - Respect `prefers-reduced-motion`.
  - Acceptance: animations visible with motion enabled; no animation with reduced motion; no interaction blocking.
  - Files: multiple components

- [ ] **T3.2 — Accessibility review**
  - Check focus states, contrast (≥ 4.5:1 for text), semantic HTML, ARIA labels, full keyboard navigation.
  - Acceptance: complete keyboard navigation; no critical contrast issues.
  - Files: multiple components

- [ ] **T3.3 — Responsive review**
  - Test at 375px, 768px, 1024px and 1440px.
  - Acceptance: no overflow; content accessible; layout coherent at all breakpoints.
  - Files: adjustments as needed

- [ ] **T3.4 — Lint, type-check and build**
  - Run `npm run lint`, `npx tsc --noEmit`, `npm run build`.
  - Acceptance: no blocking errors; warnings documented.
  - Files: none (verification only)

## Phase 4 — Deploy and documentation

- [ ] **T4.1 — Vercel deployment**
  - Connect GitHub repository to Vercel. Confirm build settings.
  - Acceptance: successful deploy; public site accessible.
  - Files: `vercel.json` if needed

- [ ] **T4.2 — Update README and specs**
  - Align documentation with the implemented state.
  - Document resolved decisions and final project structure.
  - Acceptance: README reflects reality.
  - Files: `README.md`, affected specs

- [ ] **T4.3 — Final review (reviewer agent)**
  - Compare implementation against `requirements.md`.
  - List discrepancies.
  - Acceptance: all requirements satisfied or documented as outstanding.
  - Files: none (review only)

## Execution rules

- Complete tasks in order unless a dependency requires otherwise.
- Work on one task at a time.
- Read only the relevant steering and specification sections for each task.
- Before editing, identify the files that need to change.
- Avoid unrelated refactoring and new dependencies.
- After each task, report changed files, checks performed and outstanding issues.
- Do not mark a task complete without verifying its acceptance criteria.
- Components must receive data via props. Never hardcode CV content in components.
