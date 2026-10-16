import { ChevronDown } from "lucide-react";

interface AccordionSectionProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  children: React.ReactNode;
}

export default function AccordionSection({
  title,
  isOpen,
  onClick,
  onMouseEnter,
  children,
}: AccordionSectionProps) {
  return (
    <div onMouseEnter={onMouseEnter}>
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-sidebar-text transition-colors hover:bg-sidebar-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {title}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        role="region"
        aria-label={title}
        className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-2 pb-2 pt-1">{children}</div>
      </div>
    </div>
  );
}
