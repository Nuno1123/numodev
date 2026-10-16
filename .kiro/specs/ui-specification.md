# UI Component & Layout Specs (Web First)

## Global Styling & Theme

- **Palette:** CV-inspired monochrome. Black sidebar, white main content area, dark text.
- **Accent:** One subtle accent colour for focus indicators, active states and interactive highlights. Defined as a design token.
- **Typography:** Barlow Condensed for the prominent developer name and suitable headings. Body text in a highly legible sans-serif (existing Geist or equivalent).
- **Profile photo:** Displayed in grayscale, consistent with the monochrome identity.
- **Mounting animation:** Fade-in + slide-up/stagger on page load. Disabled when `prefers-reduced-motion` is active.

## Placeholders

All missing assets, content and URLs must use explicit, visually intentional placeholders:
- Company logos: a styled initial or company-name placeholder that is clearly not a real logo.
- Demo videos: a deliberate visual fallback (pattern, gradient or summary) — never an empty or broken player.
- Navigation/contact URLs: a placeholder destination (e.g. `#hire`) with visible placeholder text. Never a broken link.
- Descriptions: use verified CV content where available; leave other text as an explicit "[Placeholder]" marker.

---

## Web Layout (Two-Column Split)

### 1. Left Sidebar (Fixed, Black Background)

- **Profile header:** Grayscale photo, developer name in Barlow Condensed (large, prominent), title, location and contact/social links.
- **Skills section:** Skill items displayed as centered text (not badges or tags).
  - **Hover:** Text animates as two horizontal halves separating vertically from a central split line.
  - **Click/tap:** Opens detail content for that skill item.
  - **Hover must not change the selected/open item.** Only click/tap opens or closes.
  - **Layout:** Prevent shifts that accidentally trigger adjacent items.
  - **Keyboard:** Focusable items, Enter/Space to open, arrow keys to navigate.
  - **Reduced motion:** Animation disabled; open/close remains functional.
- **Other sidebar sections:** Education, Languages, Free Time — same accordion/expandable pattern as before, adapted to monochrome styling.

### 2. Right Content Area (Main Panel, White Background)

- **Professional introduction:** Summary/bio from CV data, prominent typography.
- **2D/3D view toggle:** A control to switch between flat (2D) and perspective (3D) experience presentation. The selected employment is preserved when switching modes.

#### 2D Mode — Flat Slider

- One card visible at a time, with previous/next arrow navigation.
- Keyboard: ArrowLeft/ArrowRight scoped to the slider when focused.

#### 3D Mode — Perspective Carousel

- Inspired by the CodePen reference: https://codepen.io/creativeocean/pen/mdROBXx
- Perspective container with cards arranged in a ring, rotated around the Y axis.
- Drag-to-rotate interaction with parallax-like background.
- Adapted to Next.js/React using CSS 3D transforms (`perspective`, `rotateY`, `translateZ`, `transform-style: preserve-3d`).
- Geometry calculated dynamically from the number of visual cards (employment cards + CTA card).
- Small card counts: 1 card → no rotation, centered display; 2 cards → limited arc or 2D fallback; 3+ → full ring.
- Mobile: permit 3D with touch when usable; provide 2D fallback when necessary.

#### Employment Cards (Flip Cards)

- One card per real CV employment entry. Never invent or duplicate jobs.
- **Front face:** Company logo (or placeholder), role title, company name, employment dates and description.
- **Back face:** Relevant demo video when available, otherwise a designed visual fallback.
- **Activation:** Click or keyboard activates a 180-degree flip around the Y axis.
- Drag vs. click: distinguish gesture by displacement threshold. Small movement = flip; large movement = rotate carousel (3D mode).
- `prefers-reduced-motion`: flip completes instantly without animation.

#### CTA Card — "Hire me for my next job"

- Placed after all employment cards in both 2D and 3D carousel modes.
- This is **not** an employment entry: it does not appear in CV data, does not have fabricated dates, and is not counted in the timeline.
- Front: a clear call-to-action design, distinct but visually consistent with employment cards.
- Back: contact/action content. Until real URLs are supplied, use placeholder destination (`#hire`).
- In 2D: appears as the last navigable card after the final employment card.
- In 3D: occupies one position in the ring, included in the geometry calculation.

#### Frequency-Band Timeline

- Horizontal, equalizer/frequency-bar style synchronized bidirectionally with the selected employment.
- Contains markers only for real employment entries — no marker for the CTA card.
- Navigating from the last employment to the CTA card: the timeline selection remains on the last employment; navigating back from the CTA returns to the last employment.
- In 3D mode: timeline adapts to a curved/perspective appearance matching the carousel.
- Keyboard and touch: timeline entries are selectable.

### 3. Technology Banner

- Badge with "Built with Kiro SDD + Next.js" and a link to the repository.

---

## Responsive Behavior

- Desktop: two-column layout (black sidebar, white main).
- Tablet: sidebar collapses into hamburger drawer.
- Mobile: hamburger menu with slide-in drawer.
- 3D carousel: permit on mobile when usable; fall back to 2D when necessary (e.g. very narrow viewports or reduced-motion preference).
- Breakpoints: sm (640px), md (768px), lg (1024px).
