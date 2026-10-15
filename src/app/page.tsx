import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";
import MobileNav from "@/components/layout/MobileNav";
import ProfileHeader from "@/components/sidebar/ProfileHeader";
import { cv } from "@/data";

function SidebarContent() {
  return (
    <div className="space-y-6">
      <ProfileHeader profile={cv.profile} />
      <nav className="space-y-3">
        <div className="h-8 rounded bg-border" />
        <div className="h-8 rounded bg-border" />
        <div className="h-8 rounded bg-border" />
        <div className="h-8 rounded bg-border" />
      </nav>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <MobileNav>
        <SidebarContent />
      </MobileNav>
      <Sidebar>
        <SidebarContent />
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
