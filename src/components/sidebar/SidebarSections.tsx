"use client";

import { useState } from "react";
import SkillItem from "./SkillItem";
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

export default function SidebarSections({
  skills,
  education,
  languages,
  hobbies,
}: SidebarSectionsProps) {
  const [openSkill, setOpenSkill] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      {/* Skills — centered text with split-text hover */}
      {skills.length > 0 && (
        <nav aria-label="Skills" className="space-y-1">
          {skills.map((category) => (
            <SkillItem
              key={category.category}
              category={category}
              isOpen={openSkill === category.category}
              onToggle={() =>
                setOpenSkill((prev) =>
                  prev === category.category ? null : category.category
                )
              }
            />
          ))}
        </nav>
      )}

      {/* Other sections — accordion */}
      {education.length > 0 && (
        <AccordionSection
          title="Education"
          isOpen={activeSection === "education"}
          onClick={() =>
            setActiveSection((prev) =>
              prev === "education" ? null : "education"
            )
          }
          onMouseEnter={() => setActiveSection("education")}
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
        </AccordionSection>
      )}

      {languages.length > 0 && (
        <AccordionSection
          title="Languages"
          isOpen={activeSection === "languages"}
          onClick={() =>
            setActiveSection((prev) =>
              prev === "languages" ? null : "languages"
            )
          }
          onMouseEnter={() => setActiveSection("languages")}
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
        </AccordionSection>
      )}

      {hobbies.length > 0 && (
        <AccordionSection
          title="Free Time"
          isOpen={activeSection === "freetime"}
          onClick={() =>
            setActiveSection((prev) =>
              prev === "freetime" ? null : "freetime"
            )
          }
          onMouseEnter={() => setActiveSection("freetime")}
        >
          <ul className="space-y-1">
            {hobbies.map((hobby) => (
              <li key={hobby} className="text-sm text-sidebar-text">
                {hobby}
              </li>
            ))}
          </ul>
        </AccordionSection>
      )}
    </div>
  );
}
