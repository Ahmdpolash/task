import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CommunitySection() {
  return (
    <section id="creators" className="relative w-full bg-[#003be2] text-white py-20 lg:py-28 overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#66a0ff_1px,transparent_1px),linear-gradient(to_bottom,#66a0ff_1px,transparent_1px)] bg-[size:100px_100px]"
        aria-hidden="true"
      />

      {/* Decorative Glow */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-[#d4fb20]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[880px] mx-auto px-6 text-center flex flex-col items-center">
        <span className="text-[#d4fb20] text-xs font-bold tracking-widest uppercase mb-3 block">
          Become An Instructor
        </span>
        <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.2] tracking-tight">
          Unlock Your Potential as a
          <br className="hidden sm:inline" /> Creator with ByteSpace
        </h2>
        <p className="text-[#e5e6e8] text-base sm:text-lg leading-relaxed mt-5 mb-8 max-w-[720px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <Link href="/signup?role=creator">
          <Button variant="lime" className="px-9 min-h-[50px] text-base font-semibold shadow-lg">
            Join as Creator
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CommunitySection;
