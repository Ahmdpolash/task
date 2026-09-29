import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "blue" | "outline" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  variant = "lime",
  className = "",
  ...props
}: ButtonProps) {
  const variantStyles = {
    lime: "bg-[#d4fb20] text-[#242528] hover:bg-[#c8ed14] shadow-sm hover:shadow-md",
    blue: "bg-[#003be2] text-white hover:bg-[#092bb5] shadow-sm hover:shadow-md",
    outline: "border border-[#d4d5d8] bg-white text-[#242528] hover:bg-gray-50",
    ghost: "bg-transparent text-[#242528] hover:bg-gray-100/60",
  };

  return (
    <button
      className={`min-h-[46px] inline-flex items-center justify-center gap-2.5 px-6 rounded-full text-base font-semibold leading-none cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 select-none ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
