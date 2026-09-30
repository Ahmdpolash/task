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
    { label: "Courses", href: "/search" },
    { label: "Creators", href: "/creator" },
  ];

  return (
    <header
      className={`w-full z-50 transition-colors ${
        dark
          ? "absolute top-0 left-0 h-[100px] lg:h-[120px] bg-transparent text-white"
          : "relative h-[88px] bg-white text-[#242528] shadow-xs"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between gap-6 relative">
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 shrink-0 select-none group"
          aria-label="ByteSpace home"
        >
          <span className="relative inline-block w-[29px] h-[32px] bg-[#d4fb20] rounded-r-[18px] overflow-hidden shrink-0">
            <span className="absolute -top-[2px] -left-[13px] w-[24px] h-[36px] bg-[#003be2] rounded-full" />
            <i className="absolute top-[10px] -right-[2px] w-[14px] h-[14px] bg-[#003be2] rounded-full not-italic" />
          </span>
          <span
            className={`font-['Clash_Display',sans-serif] text-2xl font-bold tracking-tight ${
              dark ? "text-[#f5f5f6]" : "text-[#242528]"
            }`}
          >
            ByteSpace
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav
          className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          aria-label="Main navigation"
        >
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
                      : "text-[#f5f5f6] hover:text-[#d4fb20]"
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
        <div className="hidden md:flex items-center gap-6 shrink-0 ml-auto">
          <Link
            href="/login"
            className={`text-[15px] font-medium transition-colors ${
              dark ? "text-[#f5f5f6] hover:text-[#d4fb20]" : "text-[#4b4c53] hover:text-[#003be2]"
            }`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className="min-h-[42px] px-6 rounded-full text-sm font-semibold inline-flex items-center justify-center bg-[#d4fb20] text-[#111111] hover:bg-[#c6ed16] transition-all hover:-translate-y-0.5 shadow-sm"
          >
            Register
          </Link>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-[#092bb5] text-white p-6 shadow-2xl flex flex-col gap-4 border-t border-white/10 z-50">
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
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full border border-white/30 text-white font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-[#d4fb20] text-[#111111] font-semibold"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
