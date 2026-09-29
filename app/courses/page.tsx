import React, { Suspense } from "react";
import { Metadata } from "next";
import { SearchCatalog } from "@/components/search/SearchCatalog";

export const metadata: Metadata = {
  title: "Explore Courses · ByteSpace Library",
  description: "Browse hundreds of top-rated courses across design, technology, business, and lifestyle.",
};

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <SearchCatalog />
    </Suspense>
  );
}
