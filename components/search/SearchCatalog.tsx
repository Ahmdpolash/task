"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, ChevronDown, Filter, Search, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CourseCard } from "@/components/ui/CourseCard";
import { courses } from "@/data/landingData";

export function SearchCatalog() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "All courses";

  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState(
    initialCategory === "all" ? "All courses" : initialCategory
  );
  const [sortBy, setSortBy] = useState("popular");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categoriesList = [
    "All courses",
    "Design",
    "Technology",
    "Business",
    "Lifestyle",
  ];

  const filtered = useMemo(() => {
    return courses.filter((item) => {
      const matchesQuery =
        !query ||
        `${item.title} ${item.creator} ${item.tag}`
          .toLowerCase()
          .includes(query.toLowerCase());

      const matchesCat =
        activeCategory === "All courses" ||
        item.tag.toLowerCase() === activeCategory.toLowerCase();

      return matchesQuery && matchesCat;
    });
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 pb-24">
        {/* Search Hero with Blue Hero Grid matching Image 2 */}
        <section className="relative overflow-hidden bg-[#003be2] text-white pt-28 sm:pt-36 pb-16 sm:pb-20">
          <div className="hero-grid absolute inset-0 pointer-events-none" />

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl lg:text-[46px] text-white tracking-tight leading-tight mb-8">
              Find Your Next Course
            </h1>

            {/* Centered Pill Search Input with Lime Courses Dropdown */}
            <div className="relative max-w-xl mx-auto">
              <div className="w-full flex items-center bg-white rounded-full p-2 pl-6 shadow-2xl transition-shadow focus-within:ring-2 focus-within:ring-[#d4fb20]">
                <Search size={20} className="text-[#82868e] shrink-0 mr-3" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search"
                  className="flex-1 min-w-0 bg-transparent text-[#242528] placeholder-[#82868e] text-base focus:outline-none"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="text-xs text-[#82868e] hover:text-[#242528] px-2 py-1 mr-2 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="bg-[#d4fb20] hover:bg-[#c2e915] text-[#111111] font-semibold text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    <span>{activeCategory === "All courses" ? "Courses" : activeCategory}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        isCategoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isCategoryOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white text-[#242528] rounded-2xl shadow-xl border border-[#e8e9eb] py-2 z-50 text-left">
                      {categoriesList.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setIsCategoryOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-xs font-medium hover:bg-gray-50 flex items-center justify-between cursor-pointer ${
                            activeCategory === cat ? "text-[#003be2] font-bold bg-blue-50/50" : ""
                          }`}
                        >
                          <span>{cat}</span>
                          {activeCategory === cat && <Check size={14} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Filter Toolbar */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#f1f2f4]">
            <div>
              <span className="text-xs font-bold text-[#82868e] uppercase tracking-wider block mb-1">
                COURSE LIBRARY
              </span>
              <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl text-[#242528]">
                Explore courses{" "}
                <span className="text-sm font-normal text-[#82868e]">
                  ({filtered.length})
                </span>
              </h2>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <label className="text-xs text-[#82868e] font-medium">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-10 px-3.5 rounded-xl border border-[#e8e9eb] text-xs font-medium bg-white text-[#242528] focus:outline-none focus:border-[#003be2]"
              >
                <option value="popular">Most popular</option>
                <option value="newest">Newest first</option>
                <option value="rating">Highest rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs & Filter Button */}
          <div className="flex items-center justify-between gap-4 py-6 overflow-x-auto">
            <div className="flex items-center gap-2.5">
              {categoriesList.map((cat) => {
                const isActive =
                  activeCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`min-h-[40px] px-5 rounded-full text-[13.5px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#d4fb20] text-[#111111] font-semibold border border-[#d4fb20]"
                        : "bg-white border border-[#e8e9eb] text-[#4b4c53] hover:border-[#c9cdd4]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <button className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#e8e9eb] text-xs font-medium text-[#4b4c53] hover:bg-gray-50 shrink-0">
              <Filter size={14} />
              <span>Filters</span>
              <span className="w-4 h-4 rounded-full bg-[#003be2] text-white text-[10px] flex items-center justify-center font-bold">
                2
              </span>
            </button>
          </div>

          {/* Courses Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {filtered.map((course) => (
                <CourseCard key={course.title} course={course} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <Search size={40} className="text-[#82868e] mx-auto mb-3 opacity-40" />
              <h3 className="font-['Poppins',sans-serif] font-semibold text-lg text-[#242528]">
                No courses found
              </h3>
              <p className="text-xs text-[#82868e] mt-1">
                Try searching for another topic or selecting "All courses".
              </p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All courses");
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#003be2] text-white text-xs font-semibold"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filtered.length > 0 && (
            <div className="flex justify-center items-center gap-2 mt-16">
              <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
                ‹
              </button>
              <button className="w-9 h-9 rounded-full bg-[#003be2] text-white flex items-center justify-center text-xs font-bold">
                1
              </button>
              <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
                2
              </button>
              <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
                3
              </button>
              <span className="text-xs text-gray-400">…</span>
              <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
                10
              </button>
              <button className="w-9 h-9 rounded-full border border-[#e8e9eb] flex items-center justify-center text-xs font-medium hover:bg-gray-50">
                ›
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default SearchCatalog;
