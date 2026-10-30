# Split Text Hover Effect — CodePen Reference

**Source:** https://codepen.io/Bilal1909/pen/rNOQNVw

## Purpose
Reference for the split-text hover animation used exclusively on portfolio sidebar section headings: Skills, Education, Languages and Free Time.

## Expected effect
- The heading is duplicated into three text layers.
- The first layer shows the top half, clipped with `clip-path`.
- The second layer shows the bottom half, clipped with `clip-path`.
- On hover, the top half moves upwards and the bottom half moves downwards.
- The third layer appears in the center using a vertical scale animation.

## Adaptation requirements
- Reproduce the animation as closely as possible while adapting it to the existing monochrome portfolio design.
- Do not use the original golden background; use the project's existing design tokens.
- The heading must remain fully readable at rest.
- Apply the effect only to section headings, never to individual skills.
- Skill list items must remain normal text and only change color on hover.
- Support keyboard interaction and `prefers-reduced-motion`.

See `reference.html` and `reference.css` for the original implementation.