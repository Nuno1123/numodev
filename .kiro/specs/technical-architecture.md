# Architecture & Technical Constraints

## Stack Definition
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** TailwindCSS + Lucide Icons
- **Deployment:** Vercel / GitHub Pages

## Token Saving Rules for AI Agents
1. Output code in diff format or component-specific blocks only.
2. Read data exclusively from `.kiro/specs/00-context-cv.md`.
3. Do not create unnecessary wrapper components. Keep design modular and lightweight.
4. Avoid heavy third-party UI libraries (use native Tailwind utilities).