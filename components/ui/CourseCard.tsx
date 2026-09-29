import React from "react";
import Link from "next/link";
import { Signal, Star } from "lucide-react";
import { Course } from "@/types/landing";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-[#e8e9eb] overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Banner / Cover */}
      <Link href="/course" className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 block">
        <img
          src="/images/coursebanner.png"
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Banner Pill Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 flex-wrap">
          <span className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-medium leading-none">
            {course.lessons}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-medium leading-none">
            {course.duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white text-[11px] font-medium leading-none hidden sm:inline-block">
            59 Comments
          </span>
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              href="/course"
              className="font-['Poppins',sans-serif] font-semibold text-lg text-[#242528] group-hover:text-[#003be2] transition-colors block line-clamp-1 leading-snug"
            >
              {course.title}
            </Link>
            <span className="text-xs text-[#82868e] mt-1 block">
              by {course.creator}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-[#242528] shrink-0 pt-0.5">
            <span>{course.rating}</span>
            <Star size={14} className="fill-[#003be2] text-[#003be2]" />
          </div>
        </div>

        {/* Level Badge & Students Line */}
        <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#f5f5f6]">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#f5f5f6] text-[#4b4c53]">
            <Signal size={13} className="text-[#003be2]" /> {course.level}
          </span>

          <div className="flex items-center -space-x-2">
            <img
              src="/images/comm1.png"
              alt="Student"
              className="w-6 h-6 rounded-full object-cover border-2 border-white"
            />
            <img
              src="/images/comm2.png"
              alt="Student"
              className="w-6 h-6 rounded-full object-cover border-2 border-white"
            />
            <img
              src="/images/comm3.png"
              alt="Student"
              className="w-6 h-6 rounded-full object-cover border-2 border-white"
            />
            <span className="w-6 h-6 rounded-full bg-[#d4fb20] text-[#242528] text-[10px] font-bold flex items-center justify-center border-2 border-white">
              2k+
            </span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2 border-t border-[#f5f5f6]">
          <div className="text-xl font-bold text-[#242528] flex items-baseline gap-1">
            {course.price}
            <span className="text-xs font-normal text-[#82868e]">/lifetime</span>
          </div>

          <Link
            href="/course"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-[#d4fb20] text-[#242528] hover:bg-[#c8ed14] transition-all hover:-translate-y-0.5"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
