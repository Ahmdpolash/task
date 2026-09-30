import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses } from "@/data/landingData";
import { CourseCard } from "@/components/ui/CourseCard";

export function CoursesSection() {
  return (
    <section id="courses" className="w-full bg-white pb-20">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* 3-column Course Grid matching React version */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
