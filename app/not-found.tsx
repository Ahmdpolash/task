import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={false} />

      <main className="flex-1 flex items-center justify-center py-28 px-6 text-center">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="relative mb-6">
            <span className="font-['Poppins',sans-serif] font-bold text-7xl sm:text-8xl text-[#003be2] tracking-tighter">
              404
            </span>
            <span className="absolute -top-2 -right-4 text-[#d4fb20] text-3xl font-black">
              ✳
            </span>
          </div>

          <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-2 block">
            OOPS! WRONG TURN
          </span>
          <h1 className="font-['Poppins',sans-serif] font-semibold text-2xl sm:text-3xl text-[#242528] mb-3">
            The page you are looking for doesn’t exist
          </h1>
          <p className="text-sm text-[#82868e] leading-relaxed mb-8 max-w-sm">
            Try to use a correct URL or go back to the homepage to explore courses.
          </p>

          <Link href="/">
            <Button variant="lime" className="px-8 min-h-[48px] shadow-sm">
              Back to Home <ArrowRight size={17} />
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
