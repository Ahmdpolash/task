import React from "react";
import { SearchBox } from "@/components/ui/SearchBox";
import {
  HappyStudentsCard,
  HeroCourseFloat,
  ProgressCard,
} from "@/components/ui/FloatingCards";

export function HeroSection() {
  return (
    <section className="relative min-h-[920px] lg:min-h-[1024px] overflow-hidden bg-[#003be2] text-white flex flex-col justify-between pt-24">
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#66a0ff_1px,transparent_1px),linear-gradient(to_bottom,#66a0ff_1px,transparent_1px)] bg-[size:120px_120px]"
        aria-hidden="true"
      />

      {/* Decorative Blur Glows */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-10 w-96 h-96 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Central Headline & Search */}
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 pt-8 sm:pt-14 flex flex-col items-center text-center">
        <h1 className="font-['Poppins',sans-serif] font-semibold text-4xl sm:text-5xl lg:text-[68px] leading-[1.15] tracking-tight max-w-[980px]">
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
        <div
          className="absolute z-10 -bottom-[800px] sm:-bottom-[880px] lg:-bottom-[820px] left-1/2 -translate-x-1/2 w-[850px] sm:w-[1050px] lg:w-[1150px] h-[850px] sm:h-[1050px] lg:h-[1150px] rounded-full bg-[#d4fb20]"
          aria-hidden="true"
        />

        {/* Hero Character Image */}
        <div className="relative z-20 w-full max-w-[760px] px-4 flex justify-center items-end">
          <img
            src="/images/hero_main1.png"
            alt="ByteSpace student online learning"
            className="w-full max-w-[720px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(7,24,75,0.35)] -mb-2"
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
