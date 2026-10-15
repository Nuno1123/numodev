import { Briefcase, Building2, Calendar } from "lucide-react";
import type { CVExperience } from "@/types/cv";

interface ExperienceCardProps {
  experience: CVExperience;
}

function formatPeriod(start: string, end: string | null): string {
  return end ? `${start} – ${end}` : `${start} – Present`;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { role, company, period, project, highlights } = experience;

  return (
    <article className="rounded-lg border border-border bg-surface p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-foreground">{role}</h3>
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <Building2 size={14} aria-hidden="true" />
          {company}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-muted">
          <Calendar size={14} aria-hidden="true" />
          {formatPeriod(period.start, period.end)}
        </p>
        {project && (
          <p className="flex items-center gap-1.5 text-sm text-accent">
            <Briefcase size={14} aria-hidden="true" />
            {project}
          </p>
        )}
      </div>

      <ul className="mt-4 space-y-2">
        {highlights.map((highlight, i) => (
          <li
            key={i}
            className="text-sm leading-relaxed text-muted"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
