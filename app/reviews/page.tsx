"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseIntro } from "@/components/course/CourseIntro";

const reviewsData = [
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
    body: '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape with clear, structured steps."',
  },
];

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All rating");

  const filtered = reviewsData.filter((r) => {
    if (selectedFilter === "All rating") return true;
    const starNum = parseInt(selectedFilter.replace(/[^\d]/g, ""), 10);
    return r.rating === starNum;
  });

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 pb-24">
        <CourseIntro activeTab="Reviews" showStage={false} />

        <div className="w-full max-w-[1200px] mx-auto px-6 pt-4">
          <div className="max-w-[860px]">
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
                const isActive = selectedFilter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedFilter(f)}
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
              {filtered.map((review, i) => (
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
