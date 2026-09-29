import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CirclePlay,
  Clock3,
  Heart,
  ShieldCheck,
  WandSparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CourseAside() {
  return (
    <aside className="w-full space-y-6">
      {/* Enrollment Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e9eb] shadow-xl shadow-black/5">
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl text-[#242528]">
            $25
          </span>
          <span className="text-xs text-[#82868e] font-normal">/ lifetime</span>
        </div>
        <p className="text-xs text-[#82868e] leading-relaxed mb-6">
          Get lifetime access to the complete course, assignments, and all future updates.
        </p>

        <Link href="/lessons" className="block w-full">
          <Button variant="lime" className="w-full min-h-[48px] text-base font-semibold shadow-md">
            Enroll Now <ArrowRight size={17} />
          </Button>
        </Link>

        <div className="flex items-center justify-center gap-1.5 text-xs text-[#82868e] font-medium mt-4 pt-4 border-t border-[#f5f5f6]">
          <ShieldCheck size={16} className="text-emerald-600" />
          <span>30-day money-back guarantee</span>
        </div>

        <div className="mt-6 pt-6 border-t border-[#f5f5f6]">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#242528] mb-4">
            This course includes:
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-[#4b4c53]">
            <li className="flex items-center gap-2.5">
              <CirclePlay size={16} className="text-[#003be2] shrink-0" />
              <span>112 lessons on-demand</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock3 size={16} className="text-[#003be2] shrink-0" />
              <span>24 hours of video</span>
            </li>
            <li className="flex items-center gap-2.5">
              <WandSparkles size={16} className="text-[#003be2] shrink-0" />
              <span>Downloadable creative resources</span>
            </li>
            <li className="flex items-center gap-2.5">
              <BadgeCheck size={16} className="text-[#003be2] shrink-0" />
              <span>Official certificate of completion</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Heart size={16} className="text-[#003be2] shrink-0" />
              <span>Full lifetime access</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Instructor Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e8e9eb] shadow-sm">
        <div className="flex items-center gap-3.5 mb-3.5">
          <span className="w-12 h-12 rounded-full bg-[#003be2] text-white text-sm font-bold flex items-center justify-center">
            PP
          </span>
          <div>
            <h3 className="font-['Poppins',sans-serif] font-semibold text-base text-[#242528] leading-tight">
              PurePearl Studio
            </h3>
            <span className="text-xs text-[#82868e] block mt-0.5">
              Professional Creator
            </span>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-[#4b4c53] leading-relaxed mb-4">
          Passionate UI/UX and web designer sharing a love of thoughtful digital experiences and scalable design systems.
        </p>
        <Link
          href="/creator"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#003be2] hover:gap-2 transition-all"
        >
          <span>See full profile</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </aside>
  );
}

export default CourseAside;
