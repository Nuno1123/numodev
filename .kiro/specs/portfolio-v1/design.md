# Portfolio v1 — Design

## 1. Design principles

- CV-inspired monochrome identity: black sidebar, white main content, dark text.
- Minimal, polished and professional aesthetic.
- Clear visual hierarchy with Barlow Condensed for prominent headings.
- Consistent spacing, typography and component states.
- Responsive behavior without sacrificing usability.
- All missing assets use explicit, intentional placeholders. Never fabricate real assets.

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
- The CTA card ("Hire me for my next job") is presentation-only and must not be stored in CV employment data.

## 4. Colour palette and tokens

- **Sidebar background:** black (`#000000` or near-black).
- **Main content background:** white (`#ffffff` or near-white).
- **Text (main):** dark, high-contrast on white background.
- **Text (sidebar):** light, high-contrast on black background.
- **Accent:** one subtle monochromatic accent for focus indicators, active states and highlights.
- **Surface/border:** neutral grays for cards, dividers and secondary surfaces.
- All colours defined as CSS custom properties and registered as Tailwind theme tokens.
- Contrast must meet WCAG AA (≥ 4.5:1 for normal text, ≥ 3:1 for large text).

## 5. Typography

- **Name/headings:** Barlow Condensed (Google Font).
- **Body text:** Geist Sans (already installed) or equivalent high-legibility sans-serif.
- **Monospace:** Geist Mono (already installed) for code-like elements.

## 6. Main layout

The desktop interface contains:
1. A black sidebar with profile header, skills and other sections.
2. A white main content area with professional introduction and experience presentation.
3. A 2D/3D toggle for the experience carousel.
4. Employment flip cards and a CTA card in the carousel.
5. A frequency-band timeline synchronized with the selected employment.
6. A technology banner.

## 7. Sidebar

### Profile header
- Grayscale photo, name in Barlow Condensed (prominent), title, location, links.

### Skills
- Centered text items (not badges/tags).
- Hover: split-text animation (two halves separate vertically from center).
- Click/tap: opens detail content. Hover does not change the selected item.
- Keyboard accessible. Reduced-motion supported.

### Other sections
- Education, Languages, Free Time: expandable/accordion with monochrome styling.

## 8. Experience presentation

### Employment cards
- One card per real CV entry. No invented or duplicated jobs.
- Front: company logo or placeholder, role, company, dates, description.
- Back: demo video or designed fallback.
- 180-degree Y-axis flip on activation.

### CTA card
- "Hire me for my next job" — after all employment cards in both modes.
- Not an employment entry. No fabricated dates. Not in timeline.
- Placeholder destination until real URLs are supplied.

### 2D mode
- Flat slider, one card at a time, prev/next navigation.

### 3D mode
- Perspective carousel (CodePen reference: https://codepen.io/creativeocean/pen/mdROBXx).
- Ring of panels rotated around Y axis. Drag-to-rotate. Dynamic geometry for N cards.
- Small counts: 1 → centered; 2 → limited arc or 2D fallback; 3+ → full ring.

### View toggle
- 2D/3D switch. Preserves selected employment across modes.

## 9. Timeline

- Horizontal frequency/equalizer-band style.
- Bidirectional sync with selected employment.
- No marker for the CTA card.
- CTA-to-employment navigation: timeline stays on last employment.
- 3D mode: curved/perspective appearance matching carousel.

## 10. Motion

- Entry animations: fade-in, slide-up, stagger on mount.
- Card flip: 180° Y-axis rotation.
- Carousel rotation: smooth transitions.
- Split-text hover on skills.
- `prefers-reduced-motion`: all animations disabled; interactions remain functional.

## 11. Responsive design

Desktop:
- Two-column layout: black sidebar (fixed), white main content.

Tablet:
- Sidebar collapses into hamburger-triggered drawer.

Mobile:
- Hamburger menu with slide-in drawer.
- 3D carousel: permit when usable; 2D fallback when necessary.
- Breakpoints: sm (640px), md (768px), lg (1024px).

## 12. Content and data

- Use `../portfolio-context.md` as the source of truth for professional content.
- Content separated from presentation via `cv.json` and typed props.
- Do not duplicate CV information across components.
- Never create placeholder personal achievements mistaken for facts.
- Explicit placeholders for all missing assets.

## 13. Asset conventions

- Profile photo: `public/images/profile.png`, referenced in `cv.json` as `/images/profile.png`.
- Company logos: `public/images/logos/` — filename referenced in `cv.json`. Placeholder if unavailable.
- Demo videos: URL or path in `cv.json`. Fallback if unavailable.
- Future assets (favicon, open graph image) in `public/images/`.

## 14. Accessibility and quality

- Use semantic HTML.
- Provide accessible names for interactive controls.
- Ensure visible keyboard focus with the accent colour.
- WCAG AA contrast compliance.
- Test responsive states and reduced-motion behavior.
- Scoped keyboard handlers (no global listeners).
- Reuse existing dependencies and avoid unnecessary abstractions.

## 15. Implementation rule

Implement only the components and behavior required by the current task. Consult the relevant sections of `../ui-specification.md` before changing visual details. If a requirement is ambiguous or conflicting, report it rather than silently inventing a solution.
