import React from "react";
import { SearchBox } from "@/components/ui/SearchBox";
import {
  HappyStudentsCard,
  HeroCourseFloat,
  ProgressCard,
} from "@/components/ui/FloatingCards";

export function HeroSection() {
  return (
    <section className="relative min-h-[920px] lg:min-h-[1024px] overflow-hidden bg-[#003be2] text-white flex flex-col justify-between pt-[140px] sm:pt-[164px]">
      {/* Decorative Grid Pattern */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Decorative Hero Shapes matching React version */}
      <span className="hero-shape hero-ribbon" aria-hidden="true" />
      <span className="hero-shape hero-cone" aria-hidden="true" />
      <span className="hero-shape hero-loop" aria-hidden="true" />
      <span className="hero-shape hero-squiggle" aria-hidden="true" />

      {/* Central Headline & Search */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="font-['Poppins',sans-serif] font-semibold text-4xl sm:text-5xl lg:text-[72px] leading-[1.18] tracking-[-0.045em] max-w-[1040px]">
          Get Access to Hundreds
          <br className="hidden sm:inline" /> Courses Available
        </h1>
        <p className="text-[#e5e6e8] text-base sm:text-lg max-w-[620px] mt-4 mb-7 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>

        <SearchBox />
      </div>

      {/* Stage Container */}
      <div className="relative w-full flex justify-center items-end mt-8 overflow-visible">
        {/* Lime Bottom Orbit Arc */}
        <div className="hero-orbit" aria-hidden="true" />

        {/* Hero Character Image */}
        <div className="relative z-10 w-full max-w-[840px] px-4 flex justify-center items-end pointer-events-none">
          <img
            src="/images/hero_main1.png"
            alt="ByteSpace student online learning"
            className="w-full max-w-[820px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(7,24,75,0.25)] -mb-3"
          />
        </div>

        {/* Floating Cards (Desktop & Tablet) */}
        <div className="absolute inset-x-0 bottom-12 max-w-[1200px] mx-auto px-6 h-full pointer-events-none z-30">
          <div className="relative w-full h-full">
            {/* UI/UX Design Float Card */}
            <div className="pointer-events-auto absolute left-2 lg:left-6 bottom-40 hidden sm:block animate-bounce-subtle">
              <HeroCourseFloat />
            </div>

            {/* Learning Progress 55% Card */}
            <div className="pointer-events-auto absolute right-4 lg:right-12 bottom-60 hidden md:block">
              <ProgressCard />
            </div>

            {/* Happy Students Avatar Stack Card */}
            <div className="pointer-events-auto absolute right-8 lg:right-20 bottom-16 hidden lg:block">
              <HappyStudentsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
