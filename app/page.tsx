import { Header } from "@/components/layout/Header";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { GrowthPromoSection } from "@/components/sections/GrowthPromoSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { TagFilterSection } from "@/components/sections/TagFilterSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#242528]">
      <Header dark />
      <main>
        <HeroSection />
        <PartnerSection />
        <TagFilterSection />
        <CoursesSection />
        <CategoriesSection />
        <GrowthPromoSection />
        <CommunitySection />
        <TestimonialsSection />
      </main>
    </div>
  );
}
