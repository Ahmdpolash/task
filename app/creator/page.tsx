"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Filter, LayoutGrid, Signal, SlidersHorizontal, Star } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { courses } from "@/data/landingData";

export default function CreatorPage() {
  const [following, setFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(12);

  const handleFollow = () => {
    if (following) {
      setFollowersCount((prev) => prev - 1);
      setFollowing(false);
    } else {
      setFollowersCount((prev) => prev + 1);
      setFollowing(true);
    }
  };

  const creatorCourses = [
    {
      title: "Learn Figma from Basic",
      image: "/images/coursebanner.png",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      creator: "purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
    },
    {
      title: "Build Digital Asset",
      image: "/images/sneak_1.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      creator: "purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
    },
    {
      title: "the Power of Big Data",
      image: "/images/sneak_2.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      creator: "purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
    },
    {
      title: "Balancing Productivity and Life",
      image: "/images/sneak_3.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      creator: "purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
    },
    {
      title: "Mastering Money Management",
      image: "/images/sneak_4.jpg",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      creator: "purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
    },
    {
      title: "From Idea to Startup Success",
      image: "/images/coursebanner.png",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      creator: "purepearl studio",
      rating: "4.5",
      level: "Beginner",
      price: "$25",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#242528] flex flex-col justify-between">
      <Header dark={true} />

      <main className="flex-1 pb-24">
        {/* Creator Hero Section matching Image 2 */}
        <section className="relative overflow-hidden bg-[#003be2] text-white pt-28 sm:pt-36 pb-12 sm:pb-16">
          <div className="hero-grid absolute inset-0 pointer-events-none" />

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6">
            {/* Creator Header with Avatar & Details */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-white/10 shrink-0 border-2 border-white/20 shadow-md">
                <img
                  src="/images/comm2.png"
                  alt="PurePearl Studio"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <h1 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
                    PurePearl Studio
                  </h1>
                  <span className="bg-[#d4fb20] text-[#111111] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Creator
                  </span>
                </div>
                <p className="text-white/80 text-xs sm:text-sm mt-1.5 font-normal">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Bio Description */}
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed mt-6 max-w-4xl font-normal">
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
              <br className="hidden sm:block" />
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>

            {/* Bottom Row: Stat Pills on Left, Follow Button on Right */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-2">
              <div className="flex items-center gap-3">
                <div className="bg-white text-[#242528] rounded-full px-5 py-2 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold shadow-xs">
                  <strong className="text-[#003be2] font-bold">3</strong>
                  <span>Products</span>
                </div>
                <div className="bg-white text-[#242528] rounded-full px-5 py-2 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold shadow-xs">
                  <strong className="text-[#003be2] font-bold">{followersCount}</strong>
                  <span>Followers</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleFollow}
                className="bg-[#d4fb20] hover:bg-[#c2e915] text-[#111111] font-bold text-xs sm:text-sm px-8 py-2.5 rounded-full shadow-md transition-all cursor-pointer"
              >
                {following ? "Following" : "Follow"}
              </button>
            </div>
          </div>
        </section>

        {/* Toolbar & Course Grid matching Image 2 */}
        <div className="w-full max-w-[1200px] mx-auto px-6 pt-10">
          {/* Filter Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#f1f2f4]">
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                type="button"
                className="px-4 py-2 rounded-full border border-[#e8e9eb] text-xs font-semibold text-[#242528] inline-flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Filter size={14} />
                <span>Filter</span>
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-full border border-[#e8e9eb] text-xs font-semibold text-[#242528] inline-flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Signal size={14} />
                <span>Level</span>
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-full border border-[#e8e9eb] text-xs font-semibold text-[#242528] inline-flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <LayoutGrid size={14} />
                <span>Category</span>
              </button>
            </div>

            <button
              type="button"
              className="px-4 py-2 rounded-full border border-[#e8e9eb] text-xs font-semibold text-[#242528] inline-flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={14} />
              <span>Most relevant</span>
            </button>
          </div>

          {/* 6 Course Cards matching Image 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8">
            {creatorCourses.map((c, i) => (
              <article
                key={i}
                className="group bg-white rounded-3xl border border-[#e8e9eb] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <Link
                  href="/course"
                  className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100 block"
                >
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium leading-none">
                      {c.lessons}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium leading-none">
                      {c.duration}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium leading-none">
                      {c.comments}
                    </span>
                  </div>
                </Link>

                <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                  {/* Title & Rating */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <Link
                        href="/course"
                        className="font-['Poppins',sans-serif] font-bold text-base text-[#242528] group-hover:text-[#003be2] transition-colors block truncate"
                      >
                        {c.title}
                      </Link>
                      <span className="text-xs text-[#82868e] mt-0.5 block">
                        by {c.creator}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-[#242528] shrink-0 pt-0.5">
                      <span>{c.rating}</span>
                      <Star size={13} className="fill-gray-400 text-gray-400" />
                    </div>
                  </div>

                  {/* Level & Student Avatars Stack matching 36+ */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#f5f5f6]">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#f5f5f6] text-[#4b4c53]">
                      <Signal size={12} className="text-[#003be2]" /> {c.level}
                    </span>

                    <div className="flex items-center -space-x-1.5">
                      <img
                        src="/images/comm1.png"
                        alt="Student"
                        className="w-5 h-5 rounded-full object-cover border border-white"
                      />
                      <img
                        src="/images/comm2.png"
                        alt="Student"
                        className="w-5 h-5 rounded-full object-cover border border-white"
                      />
                      <img
                        src="/images/comm3.png"
                        alt="Student"
                        className="w-5 h-5 rounded-full object-cover border border-white"
                      />
                      <span className="w-5 h-5 rounded-full bg-[#d4fb20] text-[#111111] text-[9px] font-bold flex items-center justify-center border border-white">
                        36+
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 pt-1">
                    <strong className="font-['Poppins',sans-serif] font-bold text-lg text-[#003be2]">
                      {c.price}
                    </strong>
                    <span className="text-xs text-[#82868e] font-normal">/lifetime</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
