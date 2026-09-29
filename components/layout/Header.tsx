"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Menu, X } from "lucide-react";

interface HeaderProps {
  dark?: boolean;
}

export function Header({ dark = true }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/#courses" },
    { label: "Creators", href: "/#creators" },
  ];

  return (
    <header
      className={`relative z-50 h-[88px] w-full transition-colors ${
        dark ? "bg-transparent text-white absolute top-0 left-0" : "bg-white text-[#242528] shadow-xs"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-2.5 shrink-0 select-none group" aria-label="ByteSpace home">
          <span className="relative inline-block w-[29px] h-[32px] bg-[#d4fb20] rounded-r-[18px] overflow-hidden">
            <span className="absolute -top-[2px] -left-[13px] w-[24px] h-[36px] bg-[#003be2] rounded-full" />
            <i className="absolute top-[10px] -right-[2px] w-[14px] h-[14px] bg-[#003be2] rounded-full not-italic" />
          </span>
          <span className={`font-['Clash_Display',sans-serif] text-2xl font-bold tracking-tight ${dark ? "text-white" : "text-[#242528]"}`}>
            ByteSpace
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 mx-auto" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-medium transition-colors ${
                  dark
                    ? isActive
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                    : isActive
                    ? "text-[#003be2] font-semibold"
                    : "text-[#4b4c53] hover:text-[#003be2]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-5 shrink-0">
          <Link
            href="/signin"
            className={`text-[15px] font-medium transition-colors ${
              dark ? "text-white/90 hover:text-white" : "text-[#4b4c53] hover:text-[#003be2]"
            }`}
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="min-h-[40px] px-5 rounded-full text-sm font-semibold inline-flex items-center justify-center bg-[#d4fb20] text-[#242528] hover:bg-[#c8ed14] transition-all hover:-translate-y-0.5"
          >
            Join Us
          </Link>
          <button
            aria-label="Saved courses"
            className={`p-2 rounded-full cursor-pointer transition-colors ${
              dark ? "text-white/80 hover:text-white hover:bg-white/10" : "text-[#4b4c53] hover:bg-gray-100"
            }`}
          >
            <Bookmark size={19} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg ${dark ? "text-white" : "text-[#242528]"}`}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-[88px] left-0 w-full bg-[#092bb5] text-white p-6 shadow-2xl flex flex-col gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium py-2 border-b border-white/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-3">
            <Link
              href="/signin"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-white/30 text-white font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#d4fb20] text-[#242528] font-semibold"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
