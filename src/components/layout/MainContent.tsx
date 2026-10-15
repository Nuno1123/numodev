interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="ml-80 min-h-screen p-8">
      {children}
    </main>
  );
}
