"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import type { CVExperience } from "@/types/cv";

interface ExperienceSliderProps {
  experiences: CVExperience[];
  activeIndex?: number;
  onChangeIndex?: (index: number) => void;
}

export default function ExperienceSlider({
  experiences,
  activeIndex: controlledIndex,
  onChangeIndex,
}: ExperienceSliderProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = controlledIndex ?? internalIndex;
  const total = experiences.length;

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, total - 1));
      if (onChangeIndex) {
        onChangeIndex(clamped);
      } else {
        setInternalIndex(clamped);
      }
    },
    [total, onChangeIndex],
  );

  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prev, next]);

  if (total === 0) return null;

  return (
    <section aria-label="Professional experience">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
        {total > 1 && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous experience"
              className="rounded-md p-1.5 text-muted transition-colors hover:bg-border hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <span className="text-sm tabular-nums text-muted">
              {activeIndex + 1} / {total}
            </span>
            <button
              type="button"
              onClick={next}
              disabled={activeIndex === total - 1}
              aria-label="Next experience"
              className="rounded-md p-1.5 text-muted transition-colors hover:bg-border hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      <div aria-live="polite">
        <ExperienceCard experience={experiences[activeIndex]} />
      </div>
    </section>
  );
}
