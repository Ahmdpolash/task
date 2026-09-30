"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  Check,
  ChevronDown,
  CirclePlay,
  Heart,
  Play,
  Star,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseIntro } from "@/components/course/CourseIntro";
import { courseReviews, modules } from "@/data/landingData";

const moduleLessonsMap: Record<
  number,
  Array<{ id: string; title: string; duration: string }>
> = {
  0: [
    { id: "1.1", title: "Understanding Digital Elements", duration: "12 mins" },
    { id: "1.2", title: "Navigating Design Software Tools", duration: "18 mins" },
    { id: "1.3", title: "Getting Started with Creative Assets", duration: "22 mins" },
    { id: "1.4", title: "File Formats & Resolution Standards", duration: "15 mins" },
  ],
  1: [
    { id: "2.1", title: "Color Theory & Contrast in Digital Design", duration: "14 mins" },
    { id: "2.2", title: "Typography Essentials & Hierarchy", duration: "20 mins" },
    { id: "2.3", title: "Layout Grids & Composition", duration: "16 mins" },
    { id: "2.4", title: "Visual Balance & Modern Rhythm", duration: "19 mins" },
  ],
  2: [
    { id: "3.1", title: "Vector Graphics Mastery", duration: "25 mins" },
    { id: "3.2", title: "Creating Reusable Component Libraries", duration: "21 mins" },
    { id: "3.3", title: "Interactive Prototyping Workflows", duration: "28 mins" },
  ],
  3: [
    { id: "4.1", title: "User Persona Research & Journey Mapping", duration: "16 mins" },
    { id: "4.2", title: "Accessibility (a11y) Best Practices", duration: "18 mins" },
    { id: "4.3", title: "Usability Testing & Feedback Loops", duration: "24 mins" },
  ],
  4: [
    { id: "5.1", title: "Micro-interactions & Subtle Motion", duration: "22 mins" },
    { id: "5.2", title: "Video & Lottie Animation Integration", duration: "19 mins" },
    { id: "5.3", title: "Responsive Web Design for Mobile", duration: "26 mins" },
  ],
  5: [
    { id: "6.1", title: "Case Study Preparation & Pitch Deck", duration: "18 mins" },
    { id: "6.2", title: "Peer Critique & Iteration", duration: "15 mins" },
    { id: "6.3", title: "Publishing Your Work to the Community", duration: "12 mins" },
  ],
  6: [
    { id: "7.1", title: "Export Settings for Web & Mobile", duration: "14 mins" },
    { id: "7.2", title: "Digital Asset Management & Versioning", duration: "17 mins" },
    { id: "7.3", title: "Monetization & Commercial Licensing", duration: "25 mins" },
  ],
};

export default function CourseDetailsPage() {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleAllModules = () => {
    if (expandedModules.length === modules.length) {
      setExpandedModules([]);
    } else {
      setExpandedModules(modules.map((_, i) => i));
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 pb-20">
        {/* Blue Grid Hero with Stage matching Image 1 */}
        <CourseIntro activeTab="About" showStage={true} />

        <div className="w-full max-w-[1200px] mx-auto px-6 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content Column (Left - 8 cols) */}
            <article className="lg:col-span-8 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl sm:text-3xl text-[#242528] mb-4">
                  Description
                </h2>
                <div className="text-[#4b4c53] text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve into the intricacies of crafting impactful digital content. From foundational concepts to advanced techniques, this guide is curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                  </p>
                  {showFullDesc && (
                    <p className="animate-fade-in">
                      Explore the design principles behind impactful creations, practice effective visual communication, and apply your learning with hands-on exercises. You will also learn how to optimize your digital assets for various platforms, ensuring high engagement across web and mobile experiences.
                    </p>
                  )}
                  <button
                    onClick={() => setShowFullDesc(!showFullDesc)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003be2] cursor-pointer hover:underline"
                  >
                    <span>{showFullDesc ? "Read less" : "Read more"}</span>
                    {showFullDesc ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                  </button>
                </div>
              </div>

              {/* Sneak Peek Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#f8f9fa] border border-[#e8e9eb] flex flex-col sm:flex-row items-center gap-6">
                <div className="relative rounded-2xl overflow-hidden w-full sm:w-48 aspect-[16/10] bg-gray-900 shrink-0 group">
                  <img
                    src="/images/coursebanner.png"
                    alt="Sneak peek"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-[#d4fb20] text-[#003be2] flex items-center justify-center pl-0.5 shadow-md">
                      <Play size={16} fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-1 block">
                    SNEAK PEEK
                  </span>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-lg text-[#242528]">
                    Get a taste of what's inside
                  </h3>
                  <p className="text-xs sm:text-sm text-[#82868e] mt-1 leading-relaxed">
                    Take a look at how we break down each concept into practical, approachable lessons with real-world case studies.
                  </p>
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl sm:text-3xl text-[#242528] mb-6">
                  What you'll learn
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "Foundational concepts",
                    "Design principles mastery",
                    "Advanced creation techniques",
                    "Project showcase and critique",
                    "Optimize for every platform",
                    "Digital asset management",
                    "Monetization strategies",
                    "Build your portfolio",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#e8e9eb] text-sm font-medium text-[#242528]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#d4fb20] text-[#003be2] flex items-center justify-center shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expandable Course Content (Accordion) */}
              <div>
                <div className="flex items-end justify-between gap-4 mb-6">
                  <div>
                    <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl sm:text-3xl text-[#242528]">
                      Course content
                    </h2>
                    <span className="text-xs text-[#82868e] mt-1 block">
                      112 lessons · 24 hours total
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={toggleAllModules}
                      className="text-xs font-semibold text-[#003be2] hover:underline cursor-pointer"
                    >
                      {expandedModules.length === modules.length
                        ? "Collapse all"
                        : "Expand all"}
                    </button>
                    <Link
                      href="/lessons"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003be2] hover:gap-2 transition-all"
                    >
                      <span>View all lessons</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Modules list with click-to-expand */}
                <div className="space-y-3">
                  {modules.map((item, i) => {
                    const isExpanded = expandedModules.includes(i);
                    const lessons = moduleLessonsMap[i] || [];

                    return (
                      <div
                        key={item.title}
                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                          isExpanded
                            ? "border-[#003be2] shadow-sm bg-white"
                            : "border-[#e8e9eb] bg-white hover:border-[#c9cdd4]"
                        }`}
                      >
                        {/* Module header - click to toggle */}
                        <button
                          type="button"
                          onClick={() => toggleModule(i)}
                          className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer select-none"
                        >
                          <div className="flex items-center gap-4 min-w-0 pr-3">
                            <span className="text-xs font-bold text-[#82868e] w-6 shrink-0">
                              0{i + 1}
                            </span>
                            <span className="text-sm sm:text-base font-semibold text-[#242528] truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-[#82868e] shrink-0">
                            <span>{item.count} lessons</span>
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-200 ${
                                isExpanded ? "rotate-180 text-[#003be2]" : ""
                              }`}
                            />
                          </div>
                        </button>

                        {/* Expanded Content with Description & Lessons */}
                        {isExpanded && (
                          <div className="px-5 pb-5 pt-1 border-t border-[#f1f2f4] bg-gray-50/40 animate-fade-in">
                            <p className="text-xs sm:text-sm text-[#82868e] leading-relaxed mb-4 mt-2">
                              {item.description}
                            </p>

                            <div className="space-y-2">
                              {lessons.map((lesson) => (
                                <Link
                                  key={lesson.id}
                                  href="/lessons"
                                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#e8e9eb] hover:border-[#003be2] text-xs sm:text-sm transition-colors group"
                                >
                                  <div className="flex items-center gap-3">
                                    <CirclePlay
                                      size={15}
                                      className="text-[#003be2] group-hover:scale-110 transition-transform shrink-0"
                                    />
                                    <span className="font-semibold text-[#82868e] w-7">
                                      {lesson.id}
                                    </span>
                                    <span className="font-medium text-[#242528] group-hover:text-[#003be2]">
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <span className="text-xs text-[#82868e] font-medium whitespace-nowrap pl-2">
                                    {lesson.duration}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>

            {/* Sidebar Column (Right - 4 cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Instructor Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e8e9eb] shadow-sm">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <span className="w-12 h-12 rounded-full bg-[#003be2] text-white text-sm font-bold flex items-center justify-center">
                    PP
                  </span>
                  <div>
                    <h3 className="font-['Poppins',sans-serif] font-semibold text-base text-[#242528] leading-tight">
                      PurePearl Studio
                    </h3>
                    <span className="text-xs text-[#82868e] block mt-0.5">
                      Professional Creator
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#4b4c53] leading-relaxed mb-4">
                  Passionate UI/UX and web designer sharing a love of thoughtful digital experiences and scalable design systems.
                </p>
                <Link
                  href="/creator"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#003be2] hover:gap-2 transition-all"
                >
                  <span>See full profile</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Certificate Preview Card */}
              <div className="bg-[#f8f9fa] rounded-3xl p-6 sm:p-7 border border-[#e8e9eb] space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#003be2] text-[#d4fb20] flex items-center justify-center">
                  <BadgeCheck size={22} />
                </div>
                <h3 className="font-['Poppins',sans-serif] font-semibold text-base text-[#242528]">
                  Verified Certificate
                </h3>
                <p className="text-xs text-[#82868e] leading-relaxed">
                  Earn an official digital certificate of completion to showcase on your LinkedIn, resume, or creative portfolio upon finishing all modules.
                </p>
              </div>

              {/* Recent Learner Review snippet */}
              <div className="bg-white rounded-3xl p-6 border border-[#e8e9eb] shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#003be2]">
                    Top Review
                  </span>
                  <div className="flex items-center gap-1 text-[#003be2]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#4b4c53] italic leading-relaxed">
                  "{courseReviews[0]?.body}"
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#f5f5f6] text-xs">
                  <span className="font-semibold text-[#242528]">
                    {courseReviews[0]?.name}
                  </span>
                  <Link
                    href="/reviews"
                    className="font-medium text-[#003be2] hover:underline"
                  >
                    All reviews →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
