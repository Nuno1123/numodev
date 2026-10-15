"use client";

import { useState } from "react";
import AccordionSection from "./AccordionSection";
import type {
  CVSkillCategory,
  CVEducation,
  CVLanguage,
} from "@/types/cv";

interface SidebarSectionsProps {
  skills: CVSkillCategory[];
  education: CVEducation[];
  languages: CVLanguage[];
  hobbies: string[];
}

interface SectionConfig {
  key: string;
  title: string;
  hasData: boolean;
  content: React.ReactNode;
}

export default function SidebarSections({
  skills,
  education,
  languages,
  hobbies,
}: SidebarSectionsProps) {
  const [activeSection, setActiveSection] = useState("skills");

  const sections: SectionConfig[] = [
    {
      key: "skills",
      title: "Skills",
      hasData: skills.length > 0,
      content: (
        <div className="space-y-3">
          {skills.map((category) => (
            <div key={category.category}>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                {category.category}
              </p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-border px-2 py-0.5 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "education",
      title: "Education",
      hasData: education.length > 0,
      content: (
        <ul className="space-y-2">
          {education.map((entry) => (
            <li key={`${entry.institution}-${entry.period.start}`}>
              <p className="text-sm text-foreground">{entry.degree}</p>
              <p className="text-xs text-muted">
                {entry.institution} · {entry.period.start}
                {entry.period.end && entry.period.end !== entry.period.start
                  ? `–${entry.period.end}`
                  : ""}
              </p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: "languages",
      title: "Languages",
      hasData: languages.length > 0,
      content: (
        <ul className="space-y-1">
          {languages.map((lang) => (
            <li
              key={lang.name}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-foreground">{lang.name}</span>
              <span className="text-xs text-muted">{lang.level}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      key: "freetime",
      title: "Free Time",
      hasData: hobbies.length > 0,
      content: (
        <ul className="space-y-1">
          {hobbies.map((hobby) => (
            <li key={hobby} className="text-sm text-foreground">
              {hobby}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const visibleSections = sections.filter((s) => s.hasData);

  return (
    <nav aria-label="Sidebar sections" className="space-y-1">
      {visibleSections.map((section) => (
        <AccordionSection
          key={section.key}
          title={section.title}
          isOpen={activeSection === section.key}
          onClick={() =>
            setActiveSection((prev) =>
              prev === section.key ? "" : section.key
            )
          }
          onMouseEnter={() => setActiveSection(section.key)}
        >
          {section.content}
        </AccordionSection>
      ))}
    </nav>
  );
}
