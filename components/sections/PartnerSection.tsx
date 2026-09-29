import React from "react";
import { partnerLogos } from "@/data/landingData";

export function PartnerSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 border-b border-[#f1f2f4]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-widest text-[#82868e] font-semibold mb-8">
          Trusted by innovative teams & creators worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-12 opacity-80 transition-all hover:opacity-100">
          {partnerLogos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="h-7 sm:h-9 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
