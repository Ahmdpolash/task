"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUp, Check, ChevronRight, Play } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseIntro } from "@/components/course/CourseIntro";
import { CourseAside } from "@/components/course/CourseAside";
import { modules } from "@/data/landingData";

export default function CourseDetailsPage() {
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={false} />

      <main className="flex-1 pb-20">
        <CourseIntro activeTab="About" />

        <div className="w-full max-w-[1200px] mx-auto px-6 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Content Column (Left) */}
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

              {/* Course Content Preview */}
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
                  <Link
                    href="/lessons"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003be2] hover:gap-2 transition-all"
                  >
                    <span>View all lessons</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="space-y-3">
                  {modules.slice(0, 3).map((item, i) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between p-4 sm:p-5 rounded-2xl border border-[#e8e9eb] bg-white hover:border-[#003be2] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-[#82868e] w-6">
                          0{i + 1}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-[#242528]">
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-[#82868e]">
                        <span>{item.count} lessons</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sticky Aside Column (Right) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28">
                <CourseAside />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
