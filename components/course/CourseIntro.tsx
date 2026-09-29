import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  GraduationCap,
  Play,
  Share2,
  Star,
  Users,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseIntroProps {
  activeTab?: "About" | "Lessons" | "Reviews";
}

export function CourseIntro({ activeTab = "About" }: CourseIntroProps) {
  const courseTitle = "Build Digital Asset: A Comprehensive Guide";

  return (
    <div className="w-full bg-[#fcfcfd] border-b border-[#f1f2f4] pt-28 pb-0">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#82868e] mb-6">
          <Link href="/" className="hover:text-[#003be2]">
            Home
          </Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-[#003be2]">
            Courses
          </Link>
          <span>/</span>
          <Link href="/courses?category=design" className="hover:text-[#003be2]">
            Design
          </Link>
          <span>/</span>
          <span className="text-[#242528] font-medium truncate max-w-[280px]">
            {courseTitle}
          </span>
        </nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12">
          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-2 block">
              DESIGN · DIGITAL CREATIVITY
            </span>
            <h1 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#242528] leading-[1.2] tracking-tight">
              {courseTitle}
            </h1>
            <p className="text-[#82868e] text-base sm:text-lg leading-relaxed mt-4 mb-6 max-w-[620px]">
              Unlock the power of digital creation with expert guidance. Master tools, principles, and workflows to bring your concepts to life.
            </p>

            {/* Creator Row */}
            <div className="flex items-center gap-3 text-sm text-[#4b4c53] mb-6">
              <span className="w-8 h-8 rounded-full bg-[#003be2] text-white text-xs font-bold flex items-center justify-center">
                PP
              </span>
              <span className="flex items-center gap-1 font-semibold text-[#242528]">
                by purepearl studio
                <BadgeCheck size={16} className="text-[#003be2]" />
              </span>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-[#82868e]">Professional Creator</span>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#4b4c53] py-4 border-y border-[#e8e9eb] mb-8">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <GraduationCap size={18} className="text-[#003be2]" />
                Intermediate
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Star size={16} className="fill-[#003be2] text-[#003be2]" />
                4.8 <span className="text-[#82868e]">(172 reviews)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Users size={17} className="text-[#003be2]" />
                199 Students
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <Clock3 size={17} className="text-[#003be2]" />
                24 hours
              </span>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/lessons">
                <Button variant="lime" className="px-7 min-h-[48px] shadow-sm">
                  Start learning <ArrowRight size={17} />
                </Button>
              </Link>
              <button
                type="button"
                className="min-h-[48px] px-6 rounded-full border border-[#d4d5d8] bg-white text-[#242528] text-sm font-semibold inline-flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Share2 size={16} /> Share course
              </button>
            </div>
          </div>

          {/* Art Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] bg-gray-900 group">
              <img
                src="/images/coursebanner.png"
                alt="Course cover preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <Link
                href="/lessons"
                className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors"
                aria-label="Play course preview"
              >
                <span className="w-16 h-16 rounded-full bg-[#d4fb20] text-[#003be2] flex items-center justify-center pl-1 shadow-xl group-hover:scale-110 transition-transform">
                  <Play size={24} fill="currentColor" />
                </span>
              </Link>
              <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                <Video size={14} /> Course preview
              </span>
            </div>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="flex items-center gap-8 border-b border-[#e8e9eb] pt-2">
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
  );
}

export default CourseIntro;
