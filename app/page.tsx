import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#242528]">
      <Header dark />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
