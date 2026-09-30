import React from "react";
import { Check, Signal, Star } from "lucide-react";
import { AvatarStack } from "@/components/ui/FloatingCards";

export function GrowthPromoSection() {
  return (
    <section className="growth-promo-section w-full py-20 lg:py-28 overflow-hidden border-t border-[#f1f2f4]">
      <div className="w-full max-w-[1200px] mx-auto px-6 space-y-28 lg:space-y-36">
        {/* Row 1: Path to Professional Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-2">
              Accelerate Your Journey
            </span>
            <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-[#242528] tracking-tight">
              Your Path to Professional
              <br className="hidden sm:inline" /> Growth Starts Here!
            </h2>
            <p className="text-[#82868e] text-base sm:text-lg leading-relaxed mt-5 max-w-[500px]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-[#e8e9eb] max-w-[420px]">
              <div>
                <strong className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl text-[#003be2] block">
                  12K
                </strong>
                <span className="text-xs sm:text-sm text-[#82868e] mt-1 block">
                  Students
                </span>
              </div>
              <div>
                <strong className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl text-[#003be2] block">
                  70+
                </strong>
                <span className="text-xs sm:text-sm text-[#82868e] mt-1 block">
                  Courses
                </span>
              </div>
              <div>
                <strong className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl text-[#003be2] block">
                  16
                </strong>
                <span className="text-xs sm:text-sm text-[#82868e] mt-1 block">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right: Art & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Floating Mini Course Card (Top Left) */}
            <div className="absolute -top-6 -left-2 sm:left-4 z-20 w-52 sm:w-60 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-white/80 shadow-[0_16px_40px_rgba(7,18,62,0.12)]">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-2.5">
                <img
                  src="/images/coursebanner.png"
                  alt="Course preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1.5 left-1.5 flex gap-1">
                  <span className="bg-white/85 text-[#333] text-[9px] px-1.5 py-0.5 rounded-full font-medium backdrop-blur-xs">
                    17 Lessons
                  </span>
                  <span className="bg-white/85 text-[#333] text-[9px] px-1.5 py-0.5 rounded-full font-medium backdrop-blur-xs">
                    2h 16m
                  </span>
                </div>
              </div>
              <b className="text-xs font-semibold text-[#242528] block truncate">
                Learn Figma from Basic
              </b>
              <small className="text-[10px] text-[#003be2] block font-medium">
                by purepearl studio
              </small>
              <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-gray-100">
                <span className="text-[10px] inline-flex items-center gap-1 text-[#4b4c53]">
                  <Signal size={10} className="text-[#003be2]" /> Beginner
                </span>
                <b className="text-xs font-bold text-[#003be2]">$25</b>
              </div>
            </div>

            {/* Central Student Portrait */}
            <div className="relative z-10 w-[300px] sm:w-[380px] max-w-full">
              <img
                src="/images/hero_main1.png"
                alt="Learner"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Floating Lime Squiggle */}
            <img
              src="/images/lime.png"
              alt="Decorative lime shape"
              className="absolute -top-4 right-8 w-14 sm:w-16 h-auto pointer-events-none z-20 animate-pulse"
            />

            {/* Floating Progress Card (Bottom Right) */}
            <div className="absolute -bottom-6 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-[0_16px_40px_rgba(7,18,62,0.12)] w-48 sm:w-52">
              <span className="text-xs text-[#82868e] font-medium block">
                Learning Progress
              </span>
              <strong className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl text-[#242528] block my-1">
                55%
              </strong>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#d4fb20] rounded-full" style={{ width: "55%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Create & Manage Courses Easily */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Art & Badges (Reversed layout) */}
          <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
            {/* Floating Blue Stats Pills (Top Left) */}
            <div className="absolute top-2 -left-2 sm:left-4 z-20 space-y-2">
              <div className="bg-[#003be2] text-white px-4 py-2.5 rounded-2xl shadow-lg flex flex-col min-w-[130px]">
                <small className="text-[10px] text-white/70 uppercase tracking-wider font-medium">
                  Total Revenue
                </small>
                <span className="text-[11px] text-white/90">July 1-30</span>
                <strong className="text-base font-bold mt-0.5">$120.29</strong>
              </div>
              <div className="bg-white/95 backdrop-blur-md text-[#242528] px-4 py-2 rounded-2xl border border-white/80 shadow-md flex items-center justify-between gap-3 min-w-[140px]">
                <div>
                  <small className="text-[10px] text-[#82868e] block">Year to Date</small>
                  <strong className="text-xs font-bold">$1,200.38</strong>
                </div>
                <span className="text-[10px] font-bold text-[#111] bg-[#d4fb20] px-1.5 py-0.5 rounded-full">
                  +12%
                </span>
              </div>
            </div>

            {/* Central Creator Portrait */}
            <div className="relative z-10 w-[300px] sm:w-[380px] max-w-full">
              <img
                src="/images/hero_main2.png"
                alt="Course Creator"
                className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Floating Lime Squiggle */}
            <img
              src="/images/lime.png"
              alt="Decorative lime shape"
              className="absolute bottom-8 left-6 w-12 sm:w-14 h-auto pointer-events-none z-20"
            />

            {/* Floating Happy Students Stack (Bottom Right) */}
            <div className="absolute -bottom-6 right-2 sm:right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-[0_16px_40px_rgba(7,18,62,0.12)] min-w-[190px]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#82868e] font-medium">Happy Students</span>
                <div className="flex items-center gap-1 text-xs font-bold text-[#242528]">
                  4.5 <Star size={11} className="fill-[#d4fb20] text-[#d4fb20]" />
                </div>
              </div>
              <AvatarStack />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-2">
              For Instructors & Creators
            </span>
            <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] text-[#242528] tracking-tight">
              Create & Manage
              <br className="hidden sm:inline" /> Courses Easily.
            </h2>
            <p className="text-[#82868e] text-base sm:text-lg leading-relaxed mt-5 max-w-[500px]">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses with world-class authoring tools and automated student management.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm font-semibold text-[#242528]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#d4fb20] text-[#003be2] flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowthPromoSection;
