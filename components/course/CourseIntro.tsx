"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  CirclePlay,
  Clock3,
  Heart,
  Play,
  Share2,
  Signal,
  Star,
  Users,
  WandSparkles,
} from "lucide-react";

interface CourseIntroProps {
  activeTab?: "About" | "Lessons" | "Reviews";
  showStage?: boolean;
}

export function CourseIntro({
  activeTab = "About",
  showStage = true,
}: CourseIntroProps) {
  const [copied, setCopied] = useState(false);
  const courseTitle = "Build Digital Asset: A Comprehensive Guide";

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full">
      {/* Blue Hero Grid Container matching Image 1 */}
      <section className="relative overflow-hidden bg-[#003be2] text-white pt-28 sm:pt-36 pb-12 sm:pb-16">
        <div className="hero-grid absolute inset-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
          {/* Header row: Title + Subtitle + Creator + Badges on Left, Share button on Right */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
            <div className="max-w-[740px]">
              <h1 className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.15]">
                {courseTitle}
              </h1>
              <p className="text-white/90 text-sm sm:text-base font-normal mt-2.5">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <div className="text-xs sm:text-sm text-white/80 mt-2">
                by{" "}
                <Link
                  href="/creator"
                  className="text-[#d4fb20] font-semibold hover:underline"
                >
                  purepearl studio
                </Link>
              </div>

              {/* 3 White Pill Badges */}
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <span className="bg-white text-[#242528] rounded-full px-4 py-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-md">
                  <Signal size={15} className="text-[#003be2]" />
                  Intermediate
                </span>
                <span className="bg-white text-[#242528] rounded-full px-4 py-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-md">
                  <Star size={15} className="fill-[#003be2] text-[#003be2]" />
                  4.8 (172 reviews)
                </span>
                <span className="bg-white text-[#242528] rounded-full px-4 py-2 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold shadow-md">
                  <Users size={15} className="text-[#003be2]" />
                  199 Students
                </span>
              </div>
            </div>

            {/* Right Action: Lime Share Button */}
            <div className="self-start lg:self-center">
              <button
                type="button"
                onClick={handleShare}
                className="bg-[#d4fb20] hover:bg-[#c2e915] text-[#111111] font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full inline-flex items-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <Share2 size={16} />
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>
            </div>
          </div>

          {/* Main Stage (Video card on left, floating white card on right) */}
          {showStage && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              {/* Left Column: Rounded Video Preview Card */}
              <div className="lg:col-span-7">
                <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0d226b] aspect-[4/3] sm:aspect-[16/11] shadow-2xl flex items-center justify-center group border border-white/10">
                  <img
                    src="/images/course_video_preview.jpg"
                    alt="Build Digital Asset Preview"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {/* Circular Play Button Overlay */}
                  <Link
                    href="/lessons"
                    className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors"
                    aria-label="Play course preview"
                  >
                    <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/70 backdrop-blur-md text-[#242528] flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 group-hover:bg-white/90 transition-all">
                      <Play size={28} fill="currentColor" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Floating White Card */}
              <div className="lg:col-span-5">
                <div className="bg-white text-[#242528] rounded-[28px] sm:rounded-[36px] p-6 sm:p-7 shadow-2xl border border-white/20 space-y-4">
                  <h2 className="font-['Poppins',sans-serif] font-bold text-lg sm:text-xl text-[#242528]">
                    112 Lessons (24 hours)
                  </h2>

                  {/* 3 Lessons Preview List */}
                  <div className="space-y-3 pt-1">
                    <div className="flex items-start justify-between gap-4 text-xs sm:text-sm">
                      <div className="font-bold text-[#242528] leading-snug">
                        <span className="text-[#82868e] font-normal mr-2">01</span>
                        Introduction to Digital Assets
                      </div>
                      <span className="font-semibold text-[#003be2] whitespace-nowrap">
                        12 mins
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 text-xs sm:text-sm">
                      <div className="font-bold text-[#242528] leading-snug">
                        <span className="text-[#82868e] font-normal mr-2">02</span>
                        Design Principles for Impacts
                      </div>
                      <span className="font-semibold text-[#003be2] whitespace-nowrap">
                        21 mins
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4 text-xs sm:text-sm">
                      <div className="font-bold text-[#242528] leading-snug">
                        <span className="text-[#82868e] font-normal mr-2">03</span>
                        Advanced Techniques in Digital Creation
                      </div>
                      <span className="font-semibold text-[#003be2] whitespace-nowrap">
                        16 mins
                      </span>
                    </div>

                    <p className="text-xs text-[#82868e] pt-1">99 more videos</p>
                  </div>

                  {/* Motivational Text */}
                  <p className="text-xs sm:text-sm text-[#4b4c53] leading-relaxed pt-1">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pt-1">
                    <span className="font-['Poppins',sans-serif] font-extrabold text-3xl sm:text-4xl text-[#003be2]">
                      $25
                    </span>
                    <span className="text-xs text-[#82868e] font-normal">/lifetime</span>
                  </div>

                  {/* Lime Enroll Button */}
                  <Link href="/lessons" className="block w-full">
                    <button className="w-full py-3.5 px-6 rounded-full bg-[#d4fb20] hover:bg-[#c2e915] text-[#111111] font-bold text-sm sm:text-base shadow-sm transition-all text-center cursor-pointer">
                      Enroll Now
                    </button>
                  </Link>

                  {/* This Course Includes */}
                  <div className="pt-3 border-t border-[#f1f2f4]">
                    <h3 className="font-['Poppins',sans-serif] font-bold text-sm sm:text-base text-[#242528] mb-3">
                      This course include
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#4b4c53]">
                      <li className="flex items-center gap-2.5">
                        <CirclePlay size={16} className="text-[#003be2] shrink-0" />
                        <span>112 lessons on-demand</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Clock3 size={16} className="text-[#003be2] shrink-0" />
                        <span>24 hours of video</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <WandSparkles size={16} className="text-[#003be2] shrink-0" />
                        <span>Downloadable creative resources</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <BadgeCheck size={16} className="text-[#003be2] shrink-0" />
                        <span>Official certificate of completion</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Heart size={16} className="text-[#003be2] shrink-0" />
                        <span>Full lifetime access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sub-Navigation Tabs on clean white background */}
      <div className="w-full bg-white border-b border-[#e8e9eb]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-8 pt-2">
            {[
              { label: "About", href: "/course" },
              { label: "Lessons", href: "/lessons" },
              { label: "Reviews", href: "/reviews" },
            ].map((tab) => {
              const isActive = activeTab === tab.label;
              return (
                <Link
                  key={tab.label}
                  href={tab.href}
                  className={`py-3.5 text-sm font-semibold border-b-2 -mb-[1px] transition-colors ${
                    isActive
                      ? "border-[#003be2] text-[#003be2]"
                      : "border-transparent text-[#82868e] hover:text-[#242528]"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseIntro;
