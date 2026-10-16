interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-80 overflow-y-auto border-r border-sidebar-border bg-sidebar-bg p-6 text-sidebar-text lg:block">
      {children}
    </aside>
  );
}
