interface SplitTextSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function SplitTextSection({
  title,
  isOpen,
  onToggle,
  children,
}: SplitTextSectionProps) {
  return (
    <div className="text-center">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group relative inline-block py-2 font-heading text-sm font-semibold uppercase tracking-widest text-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar-bg"
      >
        {/* Base text — transparent, provides dimensions */}
        {title}

        {/* Layer 1: top half — visible at rest, slides up on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-sidebar-text transition-transform duration-500 ease-in-out group-hover:-translate-y-[5px] group-focus-visible:-translate-y-[5px] motion-reduce:!translate-y-0 motion-reduce:!transition-none"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
        >
          {title}
        </span>

        {/* Layer 2: bottom half — visible at rest, slides down on hover */}
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-sidebar-text transition-transform duration-500 ease-in-out group-hover:translate-y-[5px] group-focus-visible:translate-y-[5px] motion-reduce:!translate-y-0 motion-reduce:!transition-none"
          style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
        >
          {title}
        </span>

        {/* Layer 3: center reveal — scales in vertically on hover */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-1/2 flex w-full -translate-y-1/2 scale-y-0 items-center justify-center bg-sidebar-surface px-1 py-0.5 text-[10px] font-medium tracking-wider text-sidebar-text transition-transform duration-500 ease-in-out group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:!scale-y-0 motion-reduce:!transition-none"
        >
          {title}
        </span>

        {/* Screen-reader text */}
        <span className="sr-only">{title}</span>
      </button>

      {/* Expandable content */}
      <div
        role="region"
        aria-label={title}
        className={`overflow-hidden transition-all duration-200 motion-reduce:transition-none ${
          isOpen ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pb-2">{children}</div>
      </div>
    </div>
  );
}
