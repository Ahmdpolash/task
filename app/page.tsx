import { Header } from "@/components/layout/Header";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { TagFilterSection } from "@/components/sections/TagFilterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#242528]">
      <Header dark />
      <main>
        <HeroSection />
        <PartnerSection />
        <TagFilterSection />
        <CoursesSection />
      </main>
    </div>
  );
}
