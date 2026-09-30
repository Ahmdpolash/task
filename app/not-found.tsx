import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 relative overflow-hidden bg-[#003be2] text-white pt-28 sm:pt-36 pb-20 sm:pb-28 flex flex-col items-center justify-center">
        {/* Blue Hero Grid Pattern */}
        <div className="hero-grid absolute inset-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center">
          {/* Giant 404 in Gradient Lime */}
          <div className="font-['Poppins',sans-serif] font-black text-[150px] sm:text-[230px] lg:text-[290px] leading-none select-none tracking-tight text-[#d4fb20] opacity-90 drop-shadow-sm">
            404
          </div>

          {/* Heading overlapping/directly below 404 */}
          <h1 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-4xl lg:text-[46px] text-white tracking-tight -mt-8 sm:-mt-16 lg:-mt-20 mb-4 relative z-10 max-w-2xl px-4 leading-tight">
            The page you are looking for doesn’t exist
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-xs sm:text-base mb-8 max-w-md px-4 font-normal">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Lime Button Back to Home */}
          <Link href="/">
            <button className="bg-[#d4fb20] hover:bg-[#c2e915] text-[#111111] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer">
              Back to Home
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
