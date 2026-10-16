# Design Direction

- Visual style: CV-inspired monochrome — black sidebar, white main content, dark text, grayscale profile photo.
- Use Barlow Condensed for the developer name and prominent headings. Keep body text highly legible.
- Use a monochromatic palette with one subtle accent colour for focus indicators and active states.
- Define consistent design tokens as CSS custom properties registered in Tailwind's `@theme`.
- Preserve generous spacing, clear typography and restrained motion.
- Respect `prefers-reduced-motion`: all animations (split-text, flip, carousel rotation, entry stagger) must be disabled.
- Ensure keyboard navigation, visible focus states, sufficient contrast (WCAG AA) and accessible labels.
- Desktop: two-column layout with black sidebar and white main content.
- Sidebar: profile header, skills (centered text with split-text hover, click-to-open), Education, Languages, Free Time.
- Main content: introduction, 2D/3D experience carousel with flip cards, CTA card, frequency-band timeline, technology banner.
- Mobile: hamburger menu with slide-in drawer. 3D carousel permitted when usable; 2D fallback otherwise.
- Use explicit, intentional placeholders for all missing assets (logos, videos, URLs). Never fabricate real assets.
- Do not introduce new design libraries without approval.
