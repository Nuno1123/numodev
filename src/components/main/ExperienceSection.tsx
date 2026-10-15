"use client";

import { useState } from "react";
import ExperienceSlider from "./ExperienceSlider";
import Timeline from "./Timeline";
import type { CVExperience } from "@/types/cv";

interface ExperienceSectionProps {
  experiences: CVExperience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (experiences.length === 0) return null;

  return (
    <div className="space-y-6">
      <ExperienceSlider
        experiences={experiences}
        activeIndex={activeIndex}
        onChangeIndex={setActiveIndex}
      />
      <Timeline
        experiences={experiences}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
}
