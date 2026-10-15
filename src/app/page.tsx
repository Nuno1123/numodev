import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";
import MobileNav from "@/components/layout/MobileNav";
import ProfileHeader from "@/components/sidebar/ProfileHeader";
import SidebarSections from "@/components/sidebar/SidebarSections";
import Introduction from "@/components/main/Introduction";
import ExperienceSection from "@/components/main/ExperienceSection";
import TechBanner from "@/components/main/TechBanner";
import { cv } from "@/data";

function SidebarContent() {
  return (
    <div className="space-y-6">
      <ProfileHeader profile={cv.profile} />
      <SidebarSections
        skills={cv.skills}
        education={cv.education}
        languages={cv.languages}
        hobbies={cv.hobbies}
      />
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
          <Introduction summary={cv.profile.summary} />
          <ExperienceSection experiences={cv.experience} />
          <TechBanner />
        </div>
      </MainContent>
    </>
  );
}
