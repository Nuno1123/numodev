import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import type { CVProfile } from "@/types/cv";

interface ProfileHeaderProps {
  profile: CVProfile;
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
  const { name, title, location, photo, links } = profile;

  return (
    <header className="space-y-4">
      <div className="flex flex-col items-center text-center">
        <Image
          src={photo}
          alt={name}
          width={96}
          height={96}
          className="rounded-full grayscale"
          priority
        />
        <h1 className="mt-3 font-heading text-2xl font-bold uppercase tracking-wide text-sidebar-text">
          {name}
        </h1>
        <p className="text-sm text-sidebar-muted">{title}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-sidebar-muted">
          <MapPin size={14} aria-hidden="true" />
          {location}
        </p>
      </div>

      <nav aria-label="Contact links" className="flex flex-col gap-2">
        <a
          href={`mailto:${links.email}`}
          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-muted transition-colors hover:bg-sidebar-surface hover:text-sidebar-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <Mail size={16} aria-hidden="true" />
          {links.email}
        </a>

        {links.phone && (
          <a
            href={`tel:${links.phone}`}
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-muted transition-colors hover:bg-sidebar-surface hover:text-sidebar-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Phone size={16} aria-hidden="true" />
            {links.phone}
          </a>
        )}

        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-muted transition-colors hover:bg-sidebar-surface hover:text-sidebar-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ExternalLink size={16} aria-hidden="true" />
            GitHub
          </a>
        )}

        {links.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-muted transition-colors hover:bg-sidebar-surface hover:text-sidebar-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ExternalLink size={16} aria-hidden="true" />
            LinkedIn
          </a>
        )}

        {links.website && (
          <a
            href={links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-sidebar-muted transition-colors hover:bg-sidebar-surface hover:text-sidebar-text focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Website
          </a>
        )}
      </nav>
    </header>
  );
}
