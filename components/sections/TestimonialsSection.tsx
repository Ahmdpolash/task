import React from "react";
import { testimonials } from "@/data/landingData";

export function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#f1f2f4]">
          <div className="max-w-[560px]">
            <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-2 block">
              Voices of ByteSpace
            </span>
            <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl text-[#242528] tracking-tight">
              Discover What Our
              <br className="hidden sm:inline" /> Community Is Saying
            </h2>
          </div>
          <p className="text-[#82868e] text-base leading-relaxed max-w-[540px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform.
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="p-8 rounded-2xl border border-[#e8e9eb] bg-white hover:border-[#003be2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <p className="text-sm sm:text-[15px] text-[#4b4c53] leading-relaxed mb-6 font-normal">
                {item.body}
              </p>

              <div className="flex items-center gap-3.5 pt-4 border-t border-[#f5f5f6]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#e8e9eb]"
                />
                <div>
                  <h3 className="font-['Poppins',sans-serif] font-semibold text-base text-[#242528] leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-xs text-[#82868e] block mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
