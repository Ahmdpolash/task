"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  BookOpen,
  Check,
  ChevronDown,
  CirclePlay,
  Heart,
  Radio,
  Star,
  Video,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseIntro } from "@/components/course/CourseIntro";
import { modules } from "@/data/landingData";

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

const fullReviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    date: "a year ago",
    avatar: "/images/comm2.png",
    rating: 5,
    body: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    date: "a year ago",
    avatar: "/images/comm1.png",
    rating: 5,
    body: '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    date: "a year ago",
    avatar: "/images/comm3.png",
    rating: 5,
    body: '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills."',
  },
  {
    name: "Brooklyn Simmons",
    role: "Product Designer",
    date: "a year ago",
    avatar: "/images/comm1.png",
    rating: 4,
    body: '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape with precision and clear methodology."',
  },
];

export default function CourseDetailsPage() {
  const [currentTab, setCurrentTab] = useState<"About" | "Lessons" | "Reviews">("About");
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState("All rating");

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

  const filteredReviews = fullReviews.filter((r) => {
    if (selectedRatingFilter === "All rating") return true;
    const starNum = parseInt(selectedRatingFilter.replace(/[^\d]/g, ""), 10);
    return r.rating === starNum;
  });

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 pb-24">
        {/* Blue Grid Hero with Stage matching Image 1 */}
        <CourseIntro
          activeTab={currentTab}
          showStage={true}
          onTabChange={(tab) => setCurrentTab(tab)}
        />

        <div className="w-full max-w-[1200px] mx-auto px-6 pt-6">
          {/* TAB 1: ABOUT (DESCRIPTION) TAB MATCHING IMAGE 2 */}
          {currentTab === "About" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-2">
              {/* Left Column (8 cols) */}
              <article className="lg:col-span-8 space-y-10">
                {/* Description 3 Paragraphs matching Image 2 */}
                <div>
                  <h2 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl text-[#242528] mb-5">
                    Description
                  </h2>
                  <div className="text-[#4b4c53] text-sm sm:text-[15px] leading-relaxed space-y-4">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, &ldquo;Build Digital Assets: A Comprehensive Guide.&rdquo; This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak matching Image 2 (4 image cards in a row) */}
                <div>
                  <h2 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl text-[#242528] mb-5">
                    Sneak Peak
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-[#e8e9eb] shadow-xs group">
                      <img
                        src="/images/sneak_1.jpg"
                        alt="Wireframe sketch"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-[#e8e9eb] shadow-xs group">
                      <img
                        src="/images/sneak_2.jpg"
                        alt="Laptop UI editor"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-[#e8e9eb] shadow-xs group">
                      <img
                        src="/images/sneak_3.jpg"
                        alt="Desktop UI monitor"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 border border-[#e8e9eb] shadow-xs group">
                      <img
                        src="/images/sneak_4.jpg"
                        alt="Mobile app screens"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Key Points matching Image 2 (8 blue circle checkmarks) */}
                <div>
                  <h2 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl text-[#242528] mb-5">
                    Key Points
                  </h2>
                  <div className="space-y-3.5">
                    {[
                      "Foundational Concepts",
                      "Design Principles Mastery",
                      "Advanced Techniques in Digital Creation",
                      "Project Showcase and Critique",
                      "Optimizing for Various Platforms",
                      "Digital Asset Management Best Practices",
                      "Monetization Strategies",
                      "Capstone Project: Building Your Portfolio",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full bg-[#003be2] text-white flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span className="text-sm font-medium text-[#242528]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Course Content (Accordion) */}
                <div className="pt-4">
                  <div className="flex items-end justify-between gap-4 mb-6">
                    <div>
                      <h2 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl text-[#242528]">
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
                      <button
                        type="button"
                        onClick={() => setCurrentTab("Lessons")}
                        className="text-xs font-semibold text-[#003be2] hover:underline cursor-pointer"
                      >
                        View all lessons →
                      </button>
                    </div>
                  </div>

                  {/* Module Cards that expand when clicked */}
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

                          {isExpanded && (
                            <div className="px-5 pb-5 pt-1 border-t border-[#f1f2f4] bg-gray-50/40 animate-fade-in">
                              <p className="text-xs sm:text-sm text-[#82868e] leading-relaxed mb-4 mt-2">
                                {item.description}
                              </p>
                              <div className="space-y-2">
                                {lessons.map((lesson) => (
                                  <div
                                    key={lesson.id}
                                    onClick={() => setCurrentTab("Lessons")}
                                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#e8e9eb] hover:border-[#003be2] text-xs sm:text-sm transition-colors cursor-pointer group"
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
                                  </div>
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

              {/* Right Column Sidebar Card matching Image 2 */}
              <aside className="lg:col-span-4">
                <div className="sticky top-28 bg-white rounded-3xl p-6 sm:p-7 border border-[#e8e9eb] shadow-sm space-y-6">
                  {/* Top Features with Blue Outline Icons */}
                  <ul className="space-y-4 text-sm text-[#242528]">
                    <li className="flex items-center gap-3">
                      <BookOpen size={18} className="text-[#003be2] shrink-0" />
                      <span className="font-medium">Learning Resources</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Video size={18} className="text-[#003be2] shrink-0" />
                      <span className="font-medium">Quality Lesson Videos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award size={18} className="text-[#003be2] shrink-0" />
                      <span className="font-medium">Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Radio size={18} className="text-[#003be2] shrink-0" />
                      <span className="font-medium">Private Consultation</span>
                    </li>
                  </ul>

                  {/* Divider line */}
                  <div className="border-t border-[#e8e9eb]" />

                  {/* Creator Info */}
                  <div className="flex items-center gap-3.5">
                    <img
                      src="/images/comm3.png"
                      alt="PurePearl Studio"
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                    />
                    <div>
                      <h4 className="font-['Poppins',sans-serif] font-bold text-base text-[#242528]">
                        PurePearl Studio
                      </h4>
                      <span className="text-xs text-[#82868e]">
                        Professional Creator
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4b4c53] leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                  </p>

                  <Link href="/creator" className="block">
                    <button className="px-6 py-2 rounded-full border border-[#d4d5d8] text-xs sm:text-sm font-semibold text-[#242528] hover:bg-gray-50 transition-colors cursor-pointer">
                      See Full Profile
                    </button>
                  </Link>
                </div>
              </aside>
            </div>
          )}

          {/* TAB 2: REVIEWS TAB MATCHING IMAGE 1 */}
          {currentTab === "Reviews" && (
            <div className="max-w-[860px] pt-2">
              <h2 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl text-[#242528] mb-3">
                What Learners Are Saying
              </h2>
              <p className="text-[#4b4c53] text-sm sm:text-base leading-relaxed mb-8">
                Discover what our learners have to say about their experience with &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
              </p>

              {/* Ratings Summary Box matching Image 1 */}
              <div className="bg-white rounded-3xl border border-[#e8e9eb] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 mb-10 shadow-xs">
                {/* Lime Ratings Square */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-[#d4fb20] flex flex-col items-center justify-center shrink-0 shadow-xs">
                  <span className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                    Ratings
                  </span>
                  <strong className="font-['Poppins',sans-serif] font-extrabold text-4xl sm:text-5xl text-[#111111] mt-1">
                    4.7
                  </strong>
                </div>

                {/* 5 Rating Breakdown Bars */}
                <div className="flex-1 w-full space-y-3">
                  {[
                    { pct: 95, count: 720 },
                    { pct: 32, count: 120 },
                    { pct: 10, count: 21 },
                    { pct: 6, count: 12 },
                    { pct: 8, count: 16 },
                  ].map((row, idx) => (
                    <div key={idx} className="flex items-center gap-3 sm:gap-4 text-xs">
                      {/* Bar track */}
                      <div className="flex-1 h-2 rounded-full bg-[#f1f2f4] overflow-hidden">
                        <div
                          className="h-full bg-[#d4fb20] rounded-full"
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                      {/* 5 Stars */}
                      <div className="flex items-center gap-0.5 text-[#242528] shrink-0">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} size={12} fill="currentColor" />
                        ))}
                      </div>
                      {/* Count number */}
                      <span className="w-8 text-right font-medium text-[#4b4c53] shrink-0">
                        {row.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual Reviews Section */}
              <h3 className="font-['Poppins',sans-serif] font-bold text-xl sm:text-2xl text-[#242528] mb-4">
                Individual Reviews:
              </h3>

              {/* Filter Pills row */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-6">
                {["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"].map((f) => {
                  const isActive = selectedRatingFilter === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setSelectedRatingFilter(f)}
                      className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? "bg-[#d4fb20] text-[#111111] shadow-xs"
                          : "bg-[#f1f2f4] text-[#242528] hover:bg-[#e4e5e7]"
                      }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>

              {/* Review Cards matching Image 1 */}
              <div className="space-y-5">
                {filteredReviews.map((review, i) => (
                  <article
                    key={i}
                    className="p-6 sm:p-7 rounded-3xl border border-[#e8e9eb] bg-white space-y-4 shadow-xs"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-11 h-11 rounded-full object-cover shrink-0"
                        />
                        <div>
                          <strong className="text-sm font-bold text-[#242528] block">
                            {review.name}
                          </strong>
                          <span className="text-xs text-[#82868e] block">
                            {review.role}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs text-[#82868e]">{review.date}</span>
                    </div>

                    {/* 5 Dark Stars */}
                    <div className="flex items-center gap-1 text-[#242528]">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star key={starIdx} size={14} fill="currentColor" />
                      ))}
                    </div>

                    {/* Body Text */}
                    <p className="text-xs sm:text-sm text-[#4b4c53] leading-relaxed">
                      {review.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: LESSONS CURRICULUM TAB */}
          {currentTab === "Lessons" && (
            <div className="pt-2">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#f1f2f4] mb-8">
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

              {/* Module list */}
              <div className="space-y-4 max-w-3xl">
                {modules.map((item, i) => {
                  const isExpanded = expandedModules.includes(i);
                  const lessons = moduleLessonsMap[i] || [];

                  return (
                    <div
                      key={item.title}
                      className="border border-[#e8e9eb] rounded-2xl overflow-hidden transition-all bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => toggleModule(i)}
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
                            isExpanded ? "rotate-180 text-[#003be2]" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-5 pt-0 border-t border-[#f5f5f6] bg-gray-50/30">
                          <p className="text-xs sm:text-sm text-[#82868e] leading-relaxed my-3">
                            {item.description}
                          </p>
                          <div className="space-y-2 pt-1">
                            {lessons.map((lesson) => (
                              <div
                                key={lesson.id}
                                className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-[#e8e9eb] text-xs sm:text-sm hover:border-[#003be2] transition-colors"
                              >
                                <div className="flex items-center gap-2.5">
                                  <CirclePlay size={16} className="text-[#003be2]" />
                                  <span className="font-bold opacity-80">
                                    {lesson.id}
                                  </span>
                                  <span>{lesson.title}</span>
                                </div>
                                <span className="text-xs text-[#82868e]">
                                  {lesson.duration}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
