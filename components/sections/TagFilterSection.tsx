"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tagFilterOptions } from "@/data/landingData";

interface TagFilterSectionProps {
  onSelectTag?: (tag: string) => void;
}

const tagRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ],
];

export function TagFilterSection({ onSelectTag }: TagFilterSectionProps) {
  const [selectedTag, setSelectedTag] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    if (onSelectTag) {
      onSelectTag(tag);
    }
  };

  return (
    <section className="relative w-full bg-white pt-20 pb-10 overflow-hidden">
      {/* Subtle Ambient Blobs */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-[#003be2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 right-10 w-96 h-96 bg-[#d4fb20]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
        <SectionHeading
          centered
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mt-11 flex flex-col items-center gap-3.5 max-w-[1040px] mx-auto">
          {tagRows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap justify-center items-center gap-3">
              {row.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`min-h-[42px] px-5 rounded-[24px] text-[13.5px] font-medium transition-all duration-200 cursor-pointer border-0 ${
                      isActive
                        ? "bg-[#d4fb20] text-[#111111] font-semibold shadow-xs"
                        : "bg-[#e9ecef] text-[#3b3f46] hover:bg-[#dfe2e6]"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
              {rowIdx === tagRows.length - 1 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="min-h-[42px] px-4 rounded-[24px] text-[13.5px] font-semibold text-[#003be2] bg-transparent hover:text-[#092bb5] transition-colors cursor-pointer"
                >
                  {showAll ? "- Less" : "+ More"}
                </button>
              )}
            </div>
          ))}
          {showAll && (
            <div className="flex flex-wrap justify-center items-center gap-3 mt-1 pt-2 animate-in fade-in duration-300">
              {["Artificial Intelligence", "Machine Learning", "Mobile Apps", "Public Speaking", "Writing", "3D Modeling"].map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`min-h-[42px] px-5 rounded-[24px] text-[13.5px] font-medium transition-all duration-200 cursor-pointer border-0 ${
                      isActive
                        ? "bg-[#d4fb20] text-[#111111] font-semibold"
                        : "bg-[#e9ecef] text-[#3b3f46] hover:bg-[#dfe2e6]"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default TagFilterSection;
