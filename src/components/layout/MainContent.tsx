interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="min-h-screen bg-main-bg p-8 text-main-text lg:ml-80">
      {children}
    </main>
  );
}
