import React from "react";
import { partnerLogos } from "@/data/landingData";

export function PartnerSection() {
  return (
    <section className="w-full bg-white min-h-[145px] flex items-center border-b border-[#e8e9eb]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10">
          {partnerLogos.map((logo) => (
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="h-[38px] w-auto object-contain opacity-50 grayscale hover:opacity-80 transition-opacity duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
