import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";

export default function Home() {
  return (
    <>
      <Sidebar>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="h-20 w-20 rounded-full bg-border" />
            <p className="text-lg font-semibold text-foreground">Profile</p>
            <p className="text-sm text-muted">Sidebar placeholder</p>
          </div>
          <nav className="space-y-3">
            <div className="h-8 rounded bg-border" />
            <div className="h-8 rounded bg-border" />
            <div className="h-8 rounded bg-border" />
            <div className="h-8 rounded bg-border" />
          </nav>
        </div>
      </Sidebar>
      <MainContent>
        <div className="space-y-8">
          <section>
            <h1 className="text-3xl font-bold text-foreground">
              Introduction
            </h1>
            <p className="mt-2 text-muted">Main content placeholder</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Experience
            </h2>
            <div className="mt-4 h-48 rounded-lg bg-surface" />
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-foreground">
              Timeline
            </h2>
            <div className="mt-4 h-12 rounded-lg bg-surface" />
          </section>
        </div>
      </MainContent>
    </>
  );
}
