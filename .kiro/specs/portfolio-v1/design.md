# Portfolio v1 — Design

## 1. Design principles

- Dark mode.
- Minimal, polished and professional aesthetic.
- Clear visual hierarchy and restrained use of animation.
- Consistent spacing, typography and component states.
- Responsive behavior without sacrificing usability.

The detailed visual requirements in `../ui-specification.md` remain authoritative. Do not replace specific requirements with generic design assumptions.

## 2. Application architecture

- Use Next.js App Router and TypeScript strict mode.
- Use Tailwind CSS for styling.
- Use Lucide icons where icons are required.
- Follow the conventions already established in the project.
- Prefer small, focused components and avoid unnecessary dependencies.

## 3. Main layout

The desktop interface contains:
1. A sidebar with expandable information sections.
2. A main content area containing the professional introduction and experience presentation.
3. An experience slider coordinated with a timeline.
4. A technology banner reading “Built with Kiro SDD + Next.js”.

## 4. Sidebar

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

## 5. Experience slider and timeline

- Display one selected experience at a time, according to the detailed UI specification.
- Keep the selected experience and timeline indicator synchronized.
- Provide clear visual states for the selected entry.
- Ensure interaction works with keyboard and touch where applicable.
- Use verified dates, organizations, titles and descriptions from the CV.
- Do not invent metrics, achievements or responsibilities.

## 6. Motion

- Support the fade, slide and stagger animations described in `../ui-specification.md`.
- Keep animations subtle and consistent.
- Respect the user's reduced-motion preference.
- Avoid animations that block interaction or cause unnecessary layout movement.

## 7. Responsive design

Desktop:
- Preserve the intended sidebar and main content composition.

Tablet and mobile:
- Maintain access to all sections and experience content.
- Avoid horizontal overflow and inaccessible hover-only interactions.
- The exact mobile sidebar/navigation transformation remains an open decision. Resolve it before implementing the final responsive navigation.

## 8. Content and data

- Use `../portfolio-context.md` as the source of truth for personal content.
- Separate content from presentation where this fits the existing architecture.
- Do not duplicate CV information unnecessarily across components.
- Never create placeholder personal achievements that could be mistaken for facts.

## 9. Accessibility and quality

- Use semantic HTML.
- Provide accessible names for interactive controls.
- Ensure visible keyboard focus and usable contrast.
- Test responsive states and reduced-motion behavior.
- Reuse existing dependencies and avoid unnecessary abstractions.

## 10. Implementation rule

Implement only the components and behavior required by the current task. Consult the relevant sections of `../ui-specification.md` before changing visual details. If a requirement is ambiguous or conflicting, report it rather than silently inventing a solution.