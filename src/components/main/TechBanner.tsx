import { ExternalLink } from "lucide-react";

const REPO_URL = "https://github.com/Nuno1123/numodev";

export default function TechBanner() {
  return (
    <div className="flex justify-center py-6">
      <a
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Built with Kiro SDD + Next.js
        <ExternalLink size={14} aria-hidden="true" />
      </a>
    </div>
  );
}
