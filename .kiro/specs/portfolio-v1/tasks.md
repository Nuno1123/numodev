# Portfolio v1 — Tasks

## Phase 1 — Inspect and prepare

- [ ] **T1. Verify project structure and scripts**
  - Inspect the existing application and package scripts.
  - Confirm the installed Next.js, TypeScript and Tailwind versions.
  - Do not replace configuration files without a demonstrated need.
  - Acceptance: the current project structure and available checks are documented.

- [ ] **T2. Resolve specification gaps**
  - Review the requirements and detailed UI specification.
  - Decide the mobile navigation behavior.
  - Confirm the deployment target if multiple incompatible targets are listed.
  - Acceptance: no unresolved decision blocks the initial layout implementation.

## Phase 2 — Foundation and layout

- [ ] **T3. Implement the application shell**
  - Implement the page structure and dark visual foundation.
  - Follow the existing architecture and design requirements.
  - Acceptance: the shell renders without errors and has no unintended overflow at desktop width.

- [ ] **T4. Implement responsive layout**
  - Implement the agreed desktop, tablet and mobile behavior.
  - Acceptance: the layout remains usable at the target viewport sizes.

## Phase 3 — Content and components

- [ ] **T5. Implement professional introduction**
  - Use verified CV content.
  - Acceptance: all displayed facts match the source CV.

- [ ] **T6. Implement sidebar sections**
  - Add Skills, Education, Languages and Free Time.
  - Implement the specified expanded states and accessible interactions.
  - Acceptance: each section exposes the correct content and can be operated without relying solely on hover.

- [ ] **T7. Implement experience data**
  - Prepare the verified experience content using the source CV.
  - Acceptance: each experience has accurate content and no invented facts.

- [ ] **T8. Implement experience slider**
  - Add selection and navigation behavior.
  - Acceptance: the selected experience is clearly indicated and keyboard/touch interaction works where applicable.

- [ ] **T9. Implement synchronized timeline**
  - Connect timeline selection and slider state.
  - Acceptance: the active experience and timeline indicator remain synchronized.

## Phase 4 — Polish and quality

- [ ] **T10. Add motion and interaction polish**
  - Implement the specified fade, slide and stagger animations.
  - Respect reduced-motion preferences.
  - Acceptance: animations are consistent and do not block interaction.

- [ ] **T11. Add technology banner**
  - Display “Built with Kiro SDD + Next.js”.
  - Acceptance: the banner matches the visual system and works responsively.

- [ ] **T12. Accessibility and responsive review**
  - Check keyboard navigation, focus, contrast, semantic markup and viewport behavior.
  - Acceptance: identified issues are fixed or explicitly reported.

- [ ] **T13. Run project checks**
  - Run the available lint, type-check and production build commands.
  - Acceptance: checks pass, or remaining failures are documented with their causes.

- [ ] **T14. Final specification review**
  - Compare the implementation against `requirements.md` and `design.md`.
  - Review only relevant changed files and fix confirmed discrepancies.
  - Acceptance: all applicable requirements are satisfied or documented as outstanding.

## Execution rules

- Complete tasks in order unless a dependency requires otherwise.
- Work on one task at a time.
- Read only the relevant steering and specification sections.
- Before editing, identify the files that need to change.
- Avoid unrelated refactoring and new dependencies.
- After each task, report changed files, checks performed and outstanding issues.
- Do not mark a task complete without verifying its acceptance criteria.