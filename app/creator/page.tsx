"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseCard } from "@/components/ui/CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/landingData";

export default function CreatorPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "portfolio">("courses");

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={false} />

      <main className="flex-1 pb-24">
        {/* Creator Profile Hero */}
        <section className="w-full bg-[#f8f9fa] border-b border-[#f1f2f4] pb-14">
          {/* Creator Decorative Banner */}
          <div className="w-full h-44 sm:h-56 bg-gradient-to-r from-[#003be2] via-[#092bb5] to-[#003be2] relative overflow-hidden flex items-center justify-end px-8">
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d4fb20_1px,transparent_1px)] bg-[size:24px_24px]" />
            <span className="font-['Clash_Display',sans-serif] font-bold text-white/10 text-4xl sm:text-7xl uppercase tracking-widest pointer-events-none select-none">
              CREATE · SHARE · GROW
            </span>
          </div>

          {/* Profile Header Info */}
          <div className="w-full max-w-[1200px] mx-auto px-6 -mt-14 sm:-mt-16 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[#e8e9eb]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <span className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-[#003be2] text-white text-2xl sm:text-3xl font-bold flex items-center justify-center border-4 border-white shadow-xl">
                  PP
                </span>
                <div>
                  <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-1 block">
                    FEATURED CREATOR
                  </span>
                  <h1 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl text-[#242528] flex items-center gap-2">
                    PurePearl Studio
                    <BadgeCheck size={26} className="text-[#003be2]" />
                  </h1>
                  <p className="text-sm text-[#82868e] mt-1">
                    Passionate UI/UX, Web designer & Design System Specialist
                  </p>
                </div>
              </div>

              <Button variant="blue" className="px-6 min-h-[46px] shadow-sm shrink-0">
                Follow creator <span className="text-base font-bold ml-1">+</span>
              </Button>
            </div>

            {/* Creator Bio & Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10">
              <div className="lg:col-span-8">
                <h2 className="font-['Poppins',sans-serif] font-semibold text-xl text-[#242528] mb-3">
                  About the creator
                </h2>
                <p className="text-sm sm:text-base text-[#4b4c53] leading-relaxed max-w-2xl">
                  Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive a creative journey. Dive into my courses and portfolio, showcasing a glimpse of artistic endeavors. Each lesson tells a unique story—explore the world of creativity with me.
                </p>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#003be2] mt-4 hover:gap-2 transition-all"
                >
                  <span>View creator portfolio</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="lg:col-span-4 flex items-center gap-6 sm:gap-8 bg-white p-6 rounded-2xl border border-[#e8e9eb] shadow-xs">
                <div>
                  <strong className="font-['Poppins',sans-serif] font-bold text-3xl text-[#242528] block">
                    6
                  </strong>
                  <span className="text-xs text-[#82868e] mt-0.5 block">Courses</span>
                </div>
                <div>
                  <strong className="font-['Poppins',sans-serif] font-bold text-3xl text-[#242528] block">
                    2.4K
                  </strong>
                  <span className="text-xs text-[#82868e] mt-0.5 block">Students</span>
                </div>
                <div>
                  <strong className="font-['Poppins',sans-serif] font-bold text-3xl text-[#242528] flex items-center gap-1">
                    4.8
                    <Star size={18} className="fill-[#d4fb20] text-[#d4fb20]" />
                  </strong>
                  <span className="text-xs text-[#82868e] mt-0.5 block">Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Courses List */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pt-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f1f2f4]">
            <div>
              <span className="text-xs font-bold text-[#003be2] uppercase tracking-wider block mb-1">
                PUREPEARL STUDIO
              </span>
              <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl text-[#242528]">
                Courses by this creator
              </h2>
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center gap-2 p-1 bg-[#f8f9fa] border border-[#e8e9eb] rounded-xl">
              <button
                onClick={() => setActiveTab("courses")}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "courses"
                    ? "bg-white text-[#242528] shadow-xs"
                    : "text-[#82868e] hover:text-[#242528]"
                }`}
              >
                Courses
              </button>
              <button
                onClick={() => setActiveTab("portfolio")}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "portfolio"
                    ? "bg-white text-[#242528] shadow-xs"
                    : "text-[#82868e] hover:text-[#242528]"
                }`}
              >
                Portfolio
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8">
            {courses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button variant="outline" className="px-7 min-h-[46px] text-sm">
              Load more courses <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
