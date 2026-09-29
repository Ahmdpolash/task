"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tagFilterOptions } from "@/data/landingData";

interface TagFilterSectionProps {
  onSelectTag?: (tag: string) => void;
}

export function TagFilterSection({ onSelectTag }: TagFilterSectionProps) {
  const [selectedTag, setSelectedTag] = useState("Featured");
  const [showAll, setShowAll] = useState(false);

  const displayedTags = showAll ? tagFilterOptions : tagFilterOptions.slice(0, 14);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    if (onSelectTag) {
      onSelectTag(tag);
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <SectionHeading
          centered
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-[1040px] mx-auto">
          {displayedTags.map((tag) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "bg-[#003be2] text-white shadow-md shadow-[#003be2]/20 font-semibold"
                    : "bg-white text-[#4b4c53] border border-[#e8e9eb] hover:border-[#003be2] hover:text-[#003be2]"
                }`}
              >
                {tag}
              </button>
            );
          })}
          {!showAll && tagFilterOptions.length > 14 && (
            <button
              onClick={() => setShowAll(true)}
              className="px-5 py-2.5 rounded-full text-sm font-medium border border-[#e8e9eb] bg-gray-50 text-[#82868e] hover:bg-gray-100 hover:text-[#242528] transition-all cursor-pointer"
            >
              + More
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default TagFilterSection;
