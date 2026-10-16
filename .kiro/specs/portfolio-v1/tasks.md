# Portfolio v1 — Tasks

## Phase 0 — Bootstrap and foundations (completed)

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

## Phase 1 — Structural layout (completed)

- [x] **T1.1 — Application shell (two-column)**
  - Implement the desktop layout: fixed sidebar on the left, scrollable main content on the right.
  - Use placeholder content to verify structure.
  - Components receive data via props; do not import CV data in layout components.
  - Acceptance: two panels visible at desktop width; no horizontal overflow.
  - Files: `src/app/page.tsx`, `src/components/layout/Sidebar.tsx`, `src/components/layout/MainContent.tsx`

- [x] **T1.2 — Responsive layout and mobile navigation**
  - Implement hamburger button and slide-in drawer for sidebar on mobile/tablet.
  - Sidebar accessible at all viewport widths via keyboard and touch.
  - Drawer closes on section selection or outside tap.
  - Breakpoints: sm (640px), md (768px), lg (1024px).
  - Acceptance: sidebar functional via hamburger on mobile; keyboard accessible; no overflow.
  - Files: `src/components/layout/Sidebar.tsx`, `src/components/layout/MobileNav.tsx`

## Phase 2 — Initial content components (completed)

- [x] **T2.1 — Profile header**
  - Photo via `next/image` using the path from `cv.json`, name, title, location, links.
  - All content received via props.
  - Acceptance: data matches CV; links functional; photo visible.
  - Files: `src/components/sidebar/ProfileHeader.tsx`

- [x] **T2.2 — Sidebar accordion**
  - Render N sections dynamically from data. Skills expanded by default.
  - Hover, click and keyboard interaction. Sections with empty data are hidden.
  - Acceptance: works with different data shapes; keyboard navigable; hover is not the only access method.
  - Files: `src/components/sidebar/AccordionSection.tsx`, `src/components/sidebar/SidebarSections.tsx`

- [x] **T2.3 — Professional introduction**
  - Display the summary from CV data via props.
  - No hardcoded text.
  - Acceptance: text matches `cv.json`.
  - Files: `src/components/main/Introduction.tsx`

- [x] **T2.4 — Experience slider**
  - Render N experience cards with arrow navigation and keyboard support.
  - One card visible at a time. Supports 1 to N entries.
  - Acceptance: all experiences display correct data; navigation works via keyboard, click and touch.
  - Files: `src/components/main/ExperienceSlider.tsx`, `src/components/main/ExperienceCard.tsx`

- [x] **T2.5 — Synchronized timeline**
  - Timeline calculates positions from `period.start` and `period.end`.
  - Bidirectional sync with the experience slider. Adapts to N entries.
  - Acceptance: changing slider updates timeline and vice-versa; visual states are clear.
  - Files: `src/components/main/Timeline.tsx`

- [x] **T2.6 — Technology banner**
  - Display "Built with Kiro SDD + Next.js" with a link to the repository.
  - Acceptance: banner visible, responsive, link functional.
  - Files: `src/components/main/TechBanner.tsx`

## Phase 3 — Visual redesign foundations

- [x] **T3.1 — Update spec files for redesign**
  - Update `ui-specification.md`, `design.md`, `requirements.md`, `steering/design.md` and `tasks.md` to reflect the agreed redesign.
  - Acceptance: all spec files reflect the monochrome identity, skills interaction, flip cards, CTA card, 2D/3D toggle, frequency timeline and placeholder policy.
  - Agent: `planner`
  - Files: `.kiro/specs/ui-specification.md`, `.kiro/specs/portfolio-v1/design.md`, `.kiro/specs/portfolio-v1/requirements.md`, `.kiro/specs/portfolio-v1/tasks.md`, `.kiro/steering/design.md`

- [x] **T3.2 — Monochrome colour tokens and Barlow Condensed font**
  - Replace the current dark theme tokens with the monochrome palette (black sidebar, white main, dark text, accent).
  - Add Barlow Condensed as a Google Font in `layout.tsx`. Register the font variable as a Tailwind token.
  - Remove the `dark` class from `<html>` if no longer needed.
  - Acceptance: sidebar renders black, main renders white. Barlow Condensed loads and renders for name/headings. `tsc`, `lint` and `build` pass.
  - Agent: `implementer`
  - Files: `src/app/globals.css`, `src/app/layout.tsx`

- [x] **T3.3 — Extend CV data schema for redesign**
  - Add `logo`, `demoVideo` and `description` fields to `CVExperience` (all optional/nullable).
  - Update `cv.json` with placeholder values for each experience.
  - Acceptance: `npx tsc --noEmit` passes. New fields present with explicit placeholders. No fabricated content.
  - Agent: `implementer`
  - Files: `src/types/cv.ts`, `src/data/cv.json`

## Phase 4 — Sidebar and profile redesign

- [ ] **T4.1 — Update layout colours**
  - Apply black background to `Sidebar.tsx` and `MobileNav.tsx`. Apply white background to `MainContent.tsx`.
  - Update text colours for contrast on both backgrounds.
  - Acceptance: sidebar is black with legible light text; main is white with legible dark text. No broken contrast. Mobile drawer matches sidebar.
  - Agent: `ui-developer`
  - Files: `src/components/layout/Sidebar.tsx`, `src/components/layout/MainContent.tsx`, `src/components/layout/MobileNav.tsx`

- [ ] **T4.2 — Update profile header**
  - Grayscale photo treatment (CSS `filter: grayscale`). Name in Barlow Condensed, larger and more prominent.
  - Update link styling for monochrome palette.
  - Acceptance: photo is grayscale. Name uses condensed font. Links have sufficient contrast and visible focus.
  - Agent: `ui-developer`
  - Files: `src/components/sidebar/ProfileHeader.tsx`

- [ ] **T4.3 — Replace skills interaction**
  - Remove the accordion-based skills display.
  - Implement skill items as centered text with split-text hover animation.
  - Click/tap opens detail content; hover does not change the selected item.
  - Prevent layout shifts from triggering adjacent items.
  - Support keyboard and `prefers-reduced-motion`.
  - Acceptance: skills display as centered text. Hover triggers split animation. Click opens content without accidental switching. Keyboard navigable. Animation disabled with reduced motion.
  - Agent: `ui-developer`
  - Files: `src/components/sidebar/SidebarSections.tsx`, `src/components/sidebar/AccordionSection.tsx` (remove or replace), new skill item component

- [ ] **T4.4 — Update remaining sidebar sections**
  - Adapt Education, Languages, Free Time to monochrome styling.
  - Acceptance: sections display correctly on black background with appropriate contrast.
  - Agent: `ui-developer`
  - Files: `src/components/sidebar/SidebarSections.tsx`

## Phase 5 — Employment cards and 2D mode

- [ ] **T5.1 — Create flip card component**
  - Card with front face (logo/placeholder, role, company, dates, description) and back face (video or designed fallback).
  - CSS 3D flip (180° Y-axis) on click/keyboard activation.
  - `prefers-reduced-motion`: flip completes instantly.
  - Acceptance: card flips correctly. Front shows all required info. Back shows video or fallback. Accessible via keyboard.
  - Agent: `ui-developer`
  - Files: new `src/components/main/FlipCard.tsx`, replace `src/components/main/ExperienceCard.tsx`

- [ ] **T5.2 — Create CTA card**
  - "Hire me for my next job" card with distinct but consistent design.
  - Placeholder destination (`#hire`) until real URLs are supplied.
  - Not an employment entry. No fabricated dates.
  - Acceptance: CTA card renders with clear call to action. Placeholder link works without errors. Flip behavior consistent with employment cards.
  - Agent: `ui-developer`
  - Files: new `src/components/main/CTACard.tsx`

- [ ] **T5.3 — Replace 2D experience slider**
  - Flat slider showing one flip card at a time with prev/next navigation.
  - Employment cards followed by CTA card.
  - Scoped keyboard handling (fix current global listener bug).
  - Acceptance: navigation works via click, keyboard (scoped) and touch. CTA card appears after last employment card. Cards flip on activation.
  - Agent: `ui-developer`
  - Files: replace `src/components/main/ExperienceSlider.tsx`

- [ ] **T5.4 — Create frequency-band timeline**
  - Horizontal equalizer/frequency-bar style timeline.
  - Bidirectional sync with selected employment. No marker for CTA card.
  - CTA-to-employment navigation: timeline stays on last employment.
  - Acceptance: timeline syncs bidirectionally. Frequency-band visual renders correctly. No CTA marker. Keyboard selectable.
  - Agent: `ui-developer`
  - Files: replace `src/components/main/Timeline.tsx`

- [ ] **T5.5 — Update experience section wrapper**
  - Manage shared state for slider, timeline and 2D/3D mode.
  - Integrate flip cards, CTA card and frequency timeline.
  - Acceptance: all sub-components synchronized. CTA card does not corrupt timeline state.
  - Agent: `ui-developer`
  - Files: `src/components/main/ExperienceSection.tsx`, `src/app/page.tsx`

## Phase 6 — 3D carousel

- [ ] **T6.1 — Create 3D perspective carousel**
  - Perspective container with cards in a ring, rotated around Y axis.
  - Adapted from CodePen reference (https://codepen.io/creativeocean/pen/mdROBXx) to React/Next.js.
  - Dynamic geometry for N visual cards (employment + CTA).
  - Drag-to-rotate with parallax-like background. Click activates flip (distinguished from drag by displacement threshold).
  - Small card counts: 1 → centered; 2 → limited arc or 2D fallback; 3+ → full ring.
  - `prefers-reduced-motion`: no rotation animation; navigation still functional.
  - Acceptance: carousel renders in 3D perspective. Drag rotates. Click flips. Dynamic geometry for N cards. Reduced-motion supported.
  - Agent: `ui-developer`
  - Files: new `src/components/main/Carousel3D.tsx`

- [ ] **T6.2 — Create 2D/3D view toggle**
  - Toggle control to switch between flat slider and 3D carousel.
  - Preserve selected employment across modes.
  - Acceptance: toggle switches modes. Active card preserved. Accessible button with clear state.
  - Agent: `ui-developer`
  - Files: new `src/components/main/ViewToggle.tsx`, update `src/components/main/ExperienceSection.tsx`

- [ ] **T6.3 — 3D timeline adaptation**
  - Frequency timeline adapts to curved/perspective appearance in 3D mode.
  - Acceptance: timeline visual follows carousel perspective when in 3D mode.
  - Agent: `ui-developer`
  - Files: update timeline component

- [ ] **T6.4 — Mobile 3D behavior**
  - Permit 3D carousel on mobile with touch drag when viewport and performance allow.
  - Provide automatic 2D fallback when 3D is not usable (narrow viewport, reduced motion).
  - Acceptance: 3D works on capable mobile devices. 2D fallback activates when appropriate.
  - Agent: `ui-developer`
  - Files: `src/components/main/ExperienceSection.tsx`, `src/components/main/Carousel3D.tsx`

## Phase 7 — Polish, accessibility and verification

- [ ] **T7.1 — Entry animations and reduced-motion**
  - Fade-in, slide-up, stagger on mount for all sections.
  - Ensure flip, carousel rotation, split-text and entry animations are all disabled when `prefers-reduced-motion` is active.
  - Acceptance: animations work when enabled. All animations disabled with reduced motion. Interactions still functional.
  - Agent: `ui-developer`
  - Files: multiple components

- [ ] **T7.2 — Accessibility review**
  - Focus states, contrast (WCAG AA), semantic HTML, ARIA labels, scoped keyboard navigation.
  - Flip card, carousel, skills, timeline all keyboard accessible.
  - No global keyboard listeners.
  - Acceptance: complete keyboard navigation. No critical contrast issues. Scoped handlers.
  - Agent: `reviewer` (audit), then `ui-developer` (fixes)
  - Files: multiple components

- [ ] **T7.3 — Responsive review**
  - Test at 375px, 768px, 1024px, 1440px.
  - Verify sidebar colour, main colour, carousel mode, timeline and card interactions at each breakpoint.
  - Acceptance: no overflow; content accessible; layout coherent at all breakpoints.
  - Agent: `reviewer` (audit), then `ui-developer` (fixes)
  - Files: adjustments as needed

- [ ] **T7.4 — Lint, type-check and build**
  - Run `npm run lint`, `npx tsc --noEmit`, `npm run build`.
  - Acceptance: no blocking errors; warnings documented.
  - Agent: `implementer`
  - Files: none (verification only)

## Phase 8 — Deploy and documentation

- [ ] **T8.1 — Vercel deployment**
  - Connect GitHub repository to Vercel. Confirm build settings.
  - Acceptance: successful deploy; public site accessible.
  - Agent: `implementer`
  - Files: `vercel.json` if needed

- [ ] **T8.2 — Update README and specs**
  - Align documentation with the implemented state.
  - Document resolved decisions and final project structure.
  - Acceptance: README reflects reality.
  - Agent: `implementer`
  - Files: `README.md`, affected specs

- [ ] **T8.3 — Final review**
  - Compare implementation against `requirements.md`.
  - List discrepancies.
  - Acceptance: all requirements satisfied or documented as outstanding.
  - Agent: `reviewer`
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
- Use explicit, intentional placeholders for all missing assets. Never fabricate real assets.
