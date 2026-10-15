interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="min-h-screen p-8 lg:ml-80">
      {children}
    </main>
  );
}
