# Architecture & Technical Constraints

## Stack Definition
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS + Lucide Icons
- **Deployment:** Vercel

## Data Architecture
- CV content is stored in `src/data/cv.json`.
- TypeScript interfaces are defined in `src/types/cv.ts`.
- Data is imported and validated at build time via `satisfies` in `src/data/index.ts`.
- No runtime validation library is required for V1.
- Components receive data through props; they must not import CV data directly.

## Asset Conventions
- Public assets (profile photo, favicon) are stored in `public/images/`.
- Components reference images by public path, not by static import from `src/`.

## Rules for AI Agents
1. Output code in diff format or component-specific blocks only.
2. Read professional facts exclusively from `.kiro/specs/portfolio-context.md`.
3. Do not create unnecessary wrapper components. Keep design modular and lightweight.
4. Avoid heavy third-party UI libraries (use native Tailwind utilities).
5. Do not hardcode personal data in components. All CV content must come from props.
