import React from "react";
import { testimonials } from "@/data/landingData";

export function TestimonialsSection() {
  return (
    <section className="testimonial-section w-full py-20 lg:py-28">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12">
          <div className="max-w-[560px]">
            <h2 className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#242528] tracking-tight leading-[1.2]">
              Discover What Our
              <br /> Community Is Saying
            </h2>
          </div>
          <p className="text-[#666970] text-sm sm:text-[14px] leading-[1.65] max-w-[540px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.
          </p>
        </div>

        {/* 3-Column Frosted Glass Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="p-8 sm:p-9 rounded-[28px] border border-white/70 bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col items-start min-h-[360px]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[58px] h-[58px] rounded-full object-cover mb-6 border border-white/80 shadow-xs"
              />
              <h3 className="font-['Poppins',sans-serif] font-bold text-lg text-[#111111] mb-1">
                {item.name}
              </h3>
              <span className="text-xs sm:text-[13px] font-medium text-[#003be2] mb-5 block">
                {item.role}
              </span>
              <p className="text-[13.5px] text-[#666a73] leading-[1.65]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
