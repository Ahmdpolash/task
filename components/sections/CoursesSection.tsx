import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/landingData";
import { CourseCard } from "@/components/ui/CourseCard";

export function CoursesSection() {
  return (
    <section id="courses" className="w-full bg-[#fafafa] py-16 sm:py-24 border-t border-[#f1f2f4]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header with 'View All' Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-2 block">
              Featured Programs
            </span>
            <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl text-[#242528] tracking-tight">
              Explore Top-Rated Courses
            </h2>
          </div>
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-[#003be2] font-semibold text-sm hover:gap-3 transition-all"
          >
            <span>Browse all 70+ courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 3-column Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/courses"
            className="min-h-[46px] px-8 rounded-full text-base font-semibold inline-flex items-center justify-center bg-white border border-[#d4d5d8] text-[#242528] hover:border-[#003be2] hover:text-[#003be2] shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            Load More Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
