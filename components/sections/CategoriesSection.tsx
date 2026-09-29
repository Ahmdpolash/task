import React from "react";
import { categories } from "@/data/landingData";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CategoriesSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <SectionHeading
          centered
          eyebrow="Curated Domains"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-[1040px] mx-auto">
          {categories.map((item) => (
            <CategoryCard key={item.name} category={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
