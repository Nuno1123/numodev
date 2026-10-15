import type { CVExperience } from "@/types/cv";

interface TimelineProps {
  experiences: CVExperience[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

function formatLabel(start: string, end: string | null): string {
  return end ? `${start}–${end}` : `${start}–Present`;
}

export default function Timeline({
  experiences,
  activeIndex,
  onSelect,
}: TimelineProps) {
  if (experiences.length === 0) return null;

  return (
    <div role="tablist" aria-label="Experience timeline" className="relative">
      {/* Track line */}
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border" />

      <div className="relative flex justify-between">
        {experiences.map((exp, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={`${exp.company}-${exp.period.start}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`${exp.company}, ${formatLabel(exp.period.start, exp.period.end)}`}
              onClick={() => onSelect(i)}
              className="group relative flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              {/* Dot */}
              <span
                className={`relative z-10 h-3 w-3 rounded-full border-2 transition-colors ${
                  isActive
                    ? "border-accent bg-accent"
                    : "border-muted bg-background group-hover:border-foreground"
                }`}
              />
              {/* Label */}
              <span
                className={`mt-2 text-xs transition-colors ${
                  isActive ? "font-medium text-accent" : "text-muted group-hover:text-foreground"
                }`}
              >
                {formatLabel(exp.period.start, exp.period.end)}
              </span>
              {/* Company name */}
              <span
                className={`text-xs transition-colors ${
                  isActive ? "text-foreground" : "text-muted/60"
                }`}
              >
                {exp.company}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
