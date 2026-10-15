"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  children: React.ReactNode;
}

export default function MobileNav({ children }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="fixed left-4 top-4 z-50 rounded-md bg-surface p-2 text-foreground transition-colors hover:bg-border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <Menu size={24} aria-hidden="true" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={close}
            aria-hidden="true"
          />

          {/* Drawer */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed left-0 top-0 z-50 h-screen w-80 overflow-y-auto bg-surface p-6"
          >
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="rounded-md p-2 text-foreground transition-colors hover:bg-border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>
            <div>
              {children}
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
