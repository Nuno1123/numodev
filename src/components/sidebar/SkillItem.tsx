"use client";

import type { CVSkillCategory } from "@/types/cv";

interface SkillItemProps {
  category: CVSkillCategory;
  isOpen: boolean;
  onToggle: () => void;
}

export default function SkillItem({
  category,
  isOpen,
  onToggle,
}: SkillItemProps) {
  return (
    <div className="text-center">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group relative inline-block overflow-hidden py-1 font-heading text-sm font-semibold uppercase tracking-widest text-sidebar-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar-bg"
      >
        {/* Top half */}
        <span
          aria-hidden="true"
          className="block transition-transform duration-300 ease-out group-hover:-translate-y-[0.15em] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
          style={{ clipPath: "inset(0 0 50% 0)" }}
        >
          {category.category}
        </span>
        {/* Bottom half */}
        <span
          aria-hidden="true"
          className="absolute inset-0 block transition-transform duration-300 ease-out group-hover:translate-y-[0.15em] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
          style={{ clipPath: "inset(50% 0 0 0)" }}
        >
          {category.category}
        </span>
        {/* Screen-reader accessible text */}
        <span className="sr-only">{category.category}</span>
      </button>

      {/* Detail content */}
      <div
        role="region"
        aria-label={`${category.category} skills`}
        className={`overflow-hidden transition-all duration-200 motion-reduce:transition-none ${
          isOpen ? "mt-2 max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-1.5 px-2">
          {category.items.map((item) => (
            <span
              key={item}
              className="text-xs text-sidebar-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
