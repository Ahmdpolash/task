"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "./button";

interface SearchBoxProps {
  button?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBox({
  button = true,
  value,
  onChange,
  onSearch,
  placeholder = "Course, topic, creator",
  className = "",
}: SearchBoxProps) {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = value !== undefined ? value : internalValue;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(currentValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    } else {
      setInternalValue(e.target.value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-[582px] flex items-center gap-3 p-2 pl-6 border border-[#ebedf0] rounded-full bg-white text-[#82868e] shadow-lg shadow-black/5 transition-shadow hover:shadow-xl focus-within:ring-2 focus-within:ring-[#003be2]/20 ${className}`}
    >
      <Search size={20} className="text-[#82868e] shrink-0" />
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        aria-label={placeholder}
        className="flex-1 min-w-0 h-9 bg-transparent text-[#242528] placeholder-[#82868e] text-base focus:outline-none"
      />
      {button && (
        <Button
          type="submit"
          variant="lime"
          className="min-h-[44px] px-6 text-sm md:text-base shrink-0"
        >
          Search
        </Button>
      )}
    </form>
  );
}

export default SearchBox;
