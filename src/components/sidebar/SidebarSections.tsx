"use client";

import { useState } from "react";
import SplitTextSection from "./SplitTextSection";
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

export default function SidebarSections({
  skills,
  education,
  languages,
  hobbies,
}: SidebarSectionsProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  function toggle(key: string) {
    setOpenSection((prev) => (prev === key ? null : key));
  }

  return (
    <nav aria-label="Sidebar sections" className="space-y-1">
      {skills.length > 0 && (
        <SplitTextSection
          title="Skills"
          isOpen={openSection === "skills"}
          onToggle={() => toggle("skills")}
        >
          <div className="space-y-3">
            {skills.map((category) => (
              <div key={category.category}>
                <p className="text-xs font-medium uppercase tracking-wider text-sidebar-muted">
                  {category.category}
                </p>
                <div className="mt-1 flex flex-wrap justify-center gap-1.5">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-sidebar-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SplitTextSection>
      )}

      {education.length > 0 && (
        <SplitTextSection
          title="Education"
          isOpen={openSection === "education"}
          onToggle={() => toggle("education")}
        >
          <ul className="space-y-2">
            {education.map((entry) => (
              <li key={`${entry.institution}-${entry.period.start}`}>
                <p className="text-sm text-sidebar-text">{entry.degree}</p>
                <p className="text-xs text-sidebar-muted">
                  {entry.institution} · {entry.period.start}
                  {entry.period.end && entry.period.end !== entry.period.start
                    ? `–${entry.period.end}`
                    : ""}
                </p>
              </li>
            ))}
          </ul>
        </SplitTextSection>
      )}

      {languages.length > 0 && (
        <SplitTextSection
          title="Languages"
          isOpen={openSection === "languages"}
          onToggle={() => toggle("languages")}
        >
          <ul className="space-y-1">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-sidebar-text">{lang.name}</span>
                <span className="text-xs text-sidebar-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </SplitTextSection>
      )}

      {hobbies.length > 0 && (
        <SplitTextSection
          title="Free Time"
          isOpen={openSection === "freetime"}
          onToggle={() => toggle("freetime")}
        >
          <ul className="space-y-1">
            {hobbies.map((hobby) => (
              <li key={hobby} className="text-sm text-sidebar-text">
                {hobby}
              </li>
            ))}
          </ul>
        </SplitTextSection>
      )}
    </nav>
  );
}
