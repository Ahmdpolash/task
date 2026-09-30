import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 relative overflow-hidden bg-[#003be2] text-white pt-24 sm:pt-32 pb-20 sm:pb-28 flex flex-col items-center justify-center">
        {/* Blue Hero Grid Pattern */}
        <div className="hero-grid absolute inset-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 text-center flex flex-col items-center justify-center">
          {/* Giant 404 with exact gradient from Figma screenshot */}
          <div
            className="font-['Poppins',sans-serif] font-black leading-none select-none tracking-tighter"
            style={{
              fontSize: "clamp(220px, 32vw, 480px)",
              backgroundImage:
                "linear-gradient(180deg, #d4fb20 0%, #a2e415 42%, rgba(90, 168, 25, 0.6) 75%, rgba(0, 59, 226, 0.05) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </div>

          {/* Heading positioned over the lower portion of the giant 404 */}
          <h1 className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-5xl lg:text-[56px] text-white tracking-tight -mt-16 sm:-mt-28 lg:-mt-36 mb-4 relative z-10 max-w-3xl px-4 leading-[1.12]">
            The page you are looking <br className="hidden sm:inline" />
            for doesn’t exist
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-xs sm:text-sm mb-7 max-w-md px-4 font-normal">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Lime Button Back to Home */}
          <Link href="/">
            <button className="bg-[#d4fb20] hover:bg-[#c2e915] text-[#111111] font-semibold text-xs sm:text-sm px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer">
              Back to Home
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
