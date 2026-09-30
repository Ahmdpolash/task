"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, ChevronRight, Play } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseIntro } from "@/components/course/CourseIntro";
import { modules } from "@/data/landingData";

export default function LessonsPage() {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);
  const [activeLesson, setActiveLesson] = useState("1.1");

  const sampleLessons = [
    { id: "1.1", title: "Understanding Digital Elements", duration: "12 mins" },
    { id: "1.2", title: "Navigating Design Software Tools", duration: "18 mins" },
    { id: "1.3", title: "Getting Started with Creative Assets", duration: "22 mins" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 pb-20">
        <CourseIntro activeTab="Lessons" showStage={false} />

        <div className="w-full max-w-[1200px] mx-auto px-6 pt-12">
          {/* Curriculum Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#f1f2f4]">
            <div>
              <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-1 block">
                COURSE CURRICULUM
              </span>
              <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl text-[#242528]">
                Explore the Modules
              </h2>
              <p className="text-[#82868e] text-sm sm:text-base leading-relaxed mt-2 max-w-[580px]">
                Immerse yourself in the course content through comprehensive lessons, practical insights, and hands-on experiences.
              </p>
            </div>

            <div className="bg-[#f8f9fa] border border-[#e8e9eb] rounded-2xl px-6 py-3.5 flex items-center gap-3 shrink-0">
              <strong className="font-['Poppins',sans-serif] font-bold text-3xl text-[#242528]">
                112
              </strong>
              <span className="text-xs text-[#82868e] leading-snug">
                lessons
                <br />
                24 hours
              </span>
            </div>
          </div>

          {/* Lessons Layout (Modules list + Preview panel) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-10">
            {/* Left Module List (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <h3 className="font-['Poppins',sans-serif] font-semibold text-xl text-[#242528]">
                  Lesson List
                </h3>
                <span className="text-xs text-[#82868e]">7 modules</span>
              </div>

              {modules.map((item, i) => {
                const isOpen = openModuleIndex === i;
                return (
                  <div
                    key={item.title}
                    className="border border-[#e8e9eb] rounded-2xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => setOpenModuleIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50/70 transition-colors cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-3.5 min-w-0 pr-2">
                        <span className="text-xs font-bold text-[#82868e] shrink-0">
                          0{i + 1}
                        </span>
                        <div>
                          <strong className="text-sm sm:text-base font-semibold text-[#242528] block truncate">
                            {item.title}
                          </strong>
                          <span className="text-xs text-[#82868e] block mt-0.5">
                            {item.count} lessons
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`text-[#82868e] transition-transform duration-200 shrink-0 ${
                          isOpen ? "rotate-180 text-[#003be2]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="p-5 pt-0 border-t border-[#f5f5f6] bg-gray-50/30">
                        <p className="text-xs sm:text-sm text-[#82868e] leading-relaxed my-3">
                          {item.description}
                        </p>
                        <div className="space-y-2 pt-1">
                          {sampleLessons.map((lesson) => {
                            const isSelected = activeLesson === lesson.id;
                            return (
                              <button
                                key={lesson.id}
                                onClick={() => setActiveLesson(lesson.id)}
                                className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-xs sm:text-sm transition-all cursor-pointer ${
                                  isSelected
                                    ? "bg-[#003be2] text-white font-semibold shadow-sm"
                                    : "bg-white border border-[#e8e9eb] text-[#242528] hover:border-[#003be2]"
                                }`}
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="font-bold opacity-80">
                                    {lesson.id}
                                  </span>
                                  <span>{lesson.title}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs opacity-75">
                                    {lesson.duration}
                                  </span>
                                  {isSelected && <Check size={14} />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Video / Lesson Preview Panel (5 cols) */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-white border border-[#e8e9eb] rounded-3xl p-6 sm:p-7 shadow-xl shadow-black/5 space-y-6">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-900 group">
                  <img
                    src="/images/coursebanner.png"
                    alt="Current lesson"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-[#d4fb20] text-[#003be2] flex items-center justify-center pl-1 shadow-xl">
                      <Play size={20} fill="currentColor" />
                    </span>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    LESSON 01
                  </span>
                </div>

                <div>
                  <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase block mb-1">
                    MODULE 01 · LESSON 01
                  </span>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-xl text-[#242528]">
                    Understanding Digital Elements
                  </h3>
                  <p className="text-xs sm:text-sm text-[#82868e] leading-relaxed mt-2">
                    Learn the essential building blocks of digital asset creation and how each element works together in modern visual design.
                  </p>
                </div>

                {/* Course Progress */}
                <div className="p-4 rounded-2xl bg-[#f8f9fa] border border-[#e8e9eb]">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[#82868e]">Course progress</span>
                    <strong className="text-[#242528]">1 of 112 lessons (7%)</strong>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#d4fb20] rounded-full" style={{ width: "7%" }} />
                  </div>
                </div>

                <Link
                  href="/course"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#003be2] hover:gap-2 transition-all"
                >
                  <span>Back to course overview</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Learning Notes Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-20 mt-20 border-t border-[#f1f2f4]">
            <div>
              <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase block mb-1">
                YOUR LEARNING JOURNEY
              </span>
              <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl text-[#242528] leading-tight">
                Everything you need to keep moving forward.
              </h2>
            </div>
            <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-[#e8e9eb]">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-base text-[#242528] mb-2">
                Lesson Content
              </h3>
              <p className="text-xs sm:text-sm text-[#82868e] leading-relaxed">
                Engage with each lesson through captivating video content, detailed explanations, and interactive elements. Download resources and assignments.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#f8f9fa] border border-[#e8e9eb]">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-base text-[#242528] mb-2">
                Progress Tracking
              </h3>
              <p className="text-xs sm:text-sm text-[#82868e] leading-relaxed">
                See your growth as you complete lessons, with an intuitive progress tracker guiding your personalized learning journey.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
