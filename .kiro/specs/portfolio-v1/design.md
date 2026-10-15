# Portfolio v1 — Design

## 1. Design principles

- Dark mode.
- Minimal, polished and professional aesthetic.
- Clear visual hierarchy and restrained use of animation.
- Consistent spacing, typography and component states.
- Responsive behavior without sacrificing usability.

The detailed visual requirements in `../ui-specification.md` remain authoritative. Do not replace specific requirements with generic design assumptions.

## 2. Application architecture

- Use Next.js 15 App Router and TypeScript strict mode.
- Use Tailwind CSS for styling.
- Use Lucide icons where icons are required.
- Follow the conventions already established in the project.
- Prefer small, focused components and avoid unnecessary dependencies.
- Deploy to Vercel.

## 3. Data architecture

- CV content is stored in `src/data/cv.json` as structured JSON.
- TypeScript interfaces are defined in `src/types/cv.ts`.
- `src/data/index.ts` imports the JSON and validates it at build time using `satisfies CVData`.
- Components receive data through props. No component may import or reference `cv.json` directly.
- The data schema uses optional fields (`null`) to support different CV profiles without code changes.
- Sections with empty data arrays should be hidden, not rendered as empty containers.

## 4. Main layout

The desktop interface contains:
1. A sidebar with expandable information sections.
2. A main content area containing the professional introduction and experience presentation.
3. An experience slider coordinated with a timeline.
4. A technology banner reading "Built with Kiro SDD + Next.js".

## 5. Sidebar

Sections:
- Skills
- Education
- Languages
- Free Time

Behavior:
- Skills is expanded by default.
- Hovering over another section should follow the behavior specified in `../ui-specification.md`.
- Define accessible click and keyboard behavior; hover must not be the only way to access content.
- Avoid layout shifts that make navigation difficult.

Use verified CV data for section content.

## 6. Experience slider and timeline

- Display one selected experience at a time, according to the detailed UI specification.
- Keep the selected experience and timeline indicator synchronized.
- Provide clear visual states for the selected entry.
- Ensure interaction works with keyboard and touch where applicable.
- Use verified dates, organizations, titles and descriptions from the CV.
- Do not invent metrics, achievements or responsibilities.

## 7. Motion

- Support the fade, slide and stagger animations described in `../ui-specification.md`.
- Keep animations subtle and consistent.
- Respect the user's reduced-motion preference.
- Avoid animations that block interaction or cause unnecessary layout movement.

## 8. Responsive design

Desktop:
- Two-column layout: fixed sidebar on the left, main content on the right.

Tablet:
- Sidebar collapses into a hamburger-triggered drawer.

Mobile:
- Hamburger menu with slide-in drawer for sidebar content.
- Drawer closes when a section is selected or the user taps outside.
- Breakpoints: sm (640px), md (768px), lg (1024px).

## 9. Content and data

- Use `../portfolio-context.md` as the source of truth for professional content.
- Content is separated from presentation via `cv.json` and typed props.
- Do not duplicate CV information across components.
- Never create placeholder personal achievements that could be mistaken for facts.

## 10. Asset conventions

- Profile photo: `public/images/profile.png`, referenced in `cv.json` as `/images/profile.png`.
- Future assets (favicon, open graph image) also go in `public/images/`.

## 11. Accessibility and quality

- Use semantic HTML.
- Provide accessible names for interactive controls.
- Ensure visible keyboard focus and usable contrast.
- Test responsive states and reduced-motion behavior.
- Reuse existing dependencies and avoid unnecessary abstractions.

## 12. Implementation rule

Implement only the components and behavior required by the current task. Consult the relevant sections of `../ui-specification.md` before changing visual details. If a requirement is ambiguous or conflicting, report it rather than silently inventing a solution.
