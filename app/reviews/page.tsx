"use client";

import React, { useState } from "react";
import { Heart, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseIntro } from "@/components/course/CourseIntro";
import { courseReviews } from "@/data/landingData";

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState("All rating");

  const ratingBars = [
    { stars: 5, pct: 74, count: 532 },
    { stars: 4, pct: 15, count: 120 },
    { stars: 3, pct: 6, count: 42 },
    { stars: 2, pct: 3, count: 18 },
    { stars: 1, pct: 2, count: 8 },
  ];

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 pb-20">
        <CourseIntro activeTab="Reviews" showStage={false} />

        <div className="w-full max-w-[1200px] mx-auto px-6 pt-12">
          {/* Header Row & Summary */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#f1f2f4]">
            <div>
              <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-1 block">
                LEARNER FEEDBACK
              </span>
              <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl text-[#242528]">
                What Learners Are Saying
              </h2>
              <p className="text-[#82868e] text-sm sm:text-base leading-relaxed mt-2 max-w-[540px]">
                Discover what our learners have to say about their experience with this course and its real-world impact.
              </p>
            </div>

            <div className="bg-[#f8f9fa] border border-[#e8e9eb] rounded-2xl p-5 flex items-center gap-4 shrink-0">
              <strong className="font-['Poppins',sans-serif] font-bold text-4xl text-[#242528]">
                4.7
              </strong>
              <div>
                <div className="flex items-center gap-1 text-[#003be2]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs text-[#82868e] mt-1 block">
                  Based on <b className="text-[#242528]">720</b> reviews
                </span>
              </div>
            </div>
          </div>

          {/* Ratings Overview Bar Breakdown */}
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-[#f8f9fa] border border-[#e8e9eb] max-w-xl">
            <h3 className="font-['Poppins',sans-serif] font-semibold text-lg text-[#242528] mb-5">
              Rating Breakdown
            </h3>
            <div className="space-y-3">
              {ratingBars.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-3 text-xs text-[#4b4c53]">
                  <span className="w-8 font-medium flex items-center gap-1">
                    {bar.stars} <Star size={12} className="fill-[#d4fb20] text-[#d4fb20]" />
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-[#d4fb20] rounded-full"
                      style={{ width: `${bar.pct}%` }}
                    />
                  </div>
                  <span className="w-10 text-right text-[#82868e]">{bar.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Reviews Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f1f2f4]">
            <h3 className="font-['Poppins',sans-serif] font-semibold text-xl text-[#242528]">
              Individual Reviews <span className="text-sm text-[#82868e] font-normal">(720)</span>
            </h3>

            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {["All rating", "5 ★", "4 ★", "3 ★", "2 ★", "1 ★"].map((filter) => {
                const isActive = selectedFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-[#d4fb20] text-[#111111] shadow-xs"
                        : "bg-white border border-[#e8e9eb] text-[#4b4c53] hover:border-[#003be2]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            {courseReviews.map((review, i) => (
              <article
                key={review.name}
                className="p-6 sm:p-7 rounded-2xl border border-[#e8e9eb] bg-white flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-[#003be2] text-white text-xs font-bold flex items-center justify-center">
                        {review.initials}
                      </span>
                      <div>
                        <strong className="text-sm font-semibold text-[#242528] block">
                          {review.name}
                        </strong>
                        <span className="text-xs text-[#82868e] block">
                          {review.role}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-[#82868e]">{review.date}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#003be2] mb-3">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#4b4c53] leading-relaxed">
                    {review.body}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#f5f5f6]">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs text-[#82868e] hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <Heart size={14} />
                    <span>Helpful ({12 + i * 5})</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
              ‹
            </button>
            <button className="w-9 h-9 rounded-full bg-[#003be2] text-white flex items-center justify-center text-xs font-bold">
              1
            </button>
            <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
              2
            </button>
            <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
              3
            </button>
            <span className="text-xs text-gray-400">…</span>
            <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
              72
            </button>
            <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
              ›
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
