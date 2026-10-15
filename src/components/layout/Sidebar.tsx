interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-80 overflow-y-auto border-r border-border bg-surface p-6">
      {children}
    </aside>
  );
}
