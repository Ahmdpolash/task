import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Camera,
  Code2,
  DollarSign,
  Megaphone,
  PenTool,
} from "lucide-react";
import { Category } from "@/types/landing";

const categoryIconMap: Record<string, React.ReactNode> = {
  Design: <PenTool size={22} />,
  Development: <Code2 size={22} />,
  Business: <Briefcase size={22} />,
  Marketing: <Megaphone size={22} />,
  Photography: <Camera size={22} />,
  Finance: <DollarSign size={22} />,
};

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const icon = categoryIconMap[category.name] || <PenTool size={22} />;

  return (
    <Link
      href={`/courses?category=${encodeURIComponent(category.name.toLowerCase())}`}
      className="group flex items-center gap-4 p-5 rounded-2xl border border-[#e8e9eb] bg-white hover:border-[#003be2] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <span className="w-13 h-13 rounded-xl bg-[#d4fb20] text-[#242528] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#003be2] group-hover:text-white transition-all duration-300 shadow-xs">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <strong className="font-['Poppins',sans-serif] font-semibold text-lg text-[#242528] group-hover:text-[#003be2] transition-colors block leading-tight">
          {category.name}
        </strong>
        <span className="text-xs text-[#82868e] mt-1 block">
          View Courses
        </span>
      </div>
      <ArrowUpRight
        size={20}
        className="text-[#82868e] opacity-40 group-hover:opacity-100 group-hover:text-[#003be2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
      />
    </Link>
  );
}

export default CategoryCard;
