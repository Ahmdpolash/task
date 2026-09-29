import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-[890px] ${
        centered ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 text-[#003be2] text-xs font-bold tracking-widest uppercase mb-2">
          {eyebrow}
        </span>
      )}
      <h2 className="font-['Poppins',sans-serif] font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] tracking-tight text-[#242528]">
        {title}
      </h2>
      {description && (
        <p
          className={`text-[#82868e] text-base sm:text-lg leading-relaxed mt-4 ${
            centered ? "max-w-[760px] mx-auto" : "max-w-[620px]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
