import React from "react";
import { Star } from "lucide-react";

export function AvatarStack({
  avatars = [
    "/images/comm1.png",
    "/images/comm2.png",
    "/images/comm3.png",
    "/images/comm1.png",
    "/images/comm2.png",
  ],
  more = "2K+",
  className = "",
}: {
  avatars?: string[];
  more?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center -space-x-2 ${className}`}>
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Student avatar ${i + 1}`}
          className="w-7 h-7 rounded-full object-cover border-2 border-white shadow-xs"
        />
      ))}
      {more && (
        <span className="w-7 h-7 rounded-full bg-[#d4fb20] text-[#242528] text-[11px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
          {more}
        </span>
      )}
    </div>
  );
}

export function HeroCourseFloat({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white/95 backdrop-blur-md border border-white/70 shadow-[0_18px_54px_rgba(7,18,62,0.12)] rounded-2xl px-5 py-4 flex flex-col gap-1 text-[#242528] z-20 ${className}`}
    >
      <b className="font-semibold text-[15px] leading-tight text-[#242528]">
        UI/UX Design
      </b>
      <span className="text-xs text-[#82868e] flex items-center gap-1.5 font-normal">
        200 Courses <span className="text-[#82868e]">•</span> 1000+ Students
      </span>
    </div>
  );
}

export function ProgressCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white/95 backdrop-blur-md border border-white/70 shadow-[0_18px_54px_rgba(7,18,62,0.12)] rounded-2xl p-5 flex flex-col gap-2.5 w-60 text-[#242528] z-20 ${className}`}
    >
      <span className="text-sm font-medium text-[#242528]">Learning Progress</span>
      <strong className="font-['Poppins',sans-serif] font-semibold text-5xl tracking-tight text-[#242528] leading-none">
        55%
      </strong>
      <div className="h-2 rounded-full bg-[#f1f2f4] overflow-hidden">
        <div
          className="h-full bg-[#003be2] rounded-full transition-all duration-500"
          style={{ width: "55%" }}
        />
      </div>
    </div>
  );
}

export function HappyStudentsCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white/95 backdrop-blur-md border border-white/70 shadow-[0_18px_54px_rgba(7,18,62,0.12)] rounded-2xl p-4 flex flex-col gap-2 text-[#242528] z-20 ${className}`}
    >
      <span className="text-xs font-medium text-[#82868e]">Happy Students</span>
      <div className="flex items-center gap-1 text-sm font-semibold text-[#242528]">
        4.5 <span className="text-xs text-[#82868e] font-normal">(240)</span>
        <Star size={14} className="fill-[#003be2] text-[#003be2] ml-0.5" />
      </div>
      <AvatarStack />
    </div>
  );
}
