"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast.success("Thank you for subscribing to ByteSpace newsletter!");
    }, 600);
  };

  return (
    <footer className="w-full bg-[#18191c] text-[#82868e] pt-16 sm:pt-20 pb-12 border-t border-white/5">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Newsletter Column */}
          <div className="lg:col-span-5 flex flex-col">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group" aria-label="ByteSpace home">
              <span className="relative inline-block w-[29px] h-[32px] bg-[#d4fb20] rounded-r-[18px] overflow-hidden">
                <span className="absolute -top-[2px] -left-[13px] w-[24px] h-[36px] bg-[#003be2] rounded-full" />
                <i className="absolute top-[10px] -right-[2px] w-[14px] h-[14px] bg-[#003be2] rounded-full not-italic" />
              </span>
              <span className="font-['Clash_Display',sans-serif] text-2xl font-bold tracking-tight text-white">
                ByteSpace
              </span>
            </Link>

            <p className="text-sm text-[#82868e] leading-relaxed max-w-[380px] mb-6">
              Stay up to date with our latest courses, creator releases, and learning insights by joining our newsletter.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-[420px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="flex-1 min-w-0 h-11 px-4 rounded-full bg-white/5 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#d4fb20] transition-colors"
              />
              <Button
                type="submit"
                variant="lime"
                disabled={isSubmitting}
                className="min-h-[44px] px-6 text-sm shrink-0"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            <small className="text-[11px] text-[#82868e]/70 mt-3 max-w-[380px] block leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our team.
            </small>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Browse
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/courses" className="hover:text-[#d4fb20] transition-colors">
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#d4fb20] transition-colors">
                    Top Categories
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=business" className="hover:text-[#d4fb20] transition-colors">
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=it" className="hover:text-[#d4fb20] transition-colors">
                    IT & Software
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=design" className="hover:text-[#d4fb20] transition-colors">
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Topics
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/courses?category=development" className="hover:text-[#d4fb20] transition-colors">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=marketing" className="hover:text-[#d4fb20] transition-colors">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=photography" className="hover:text-[#d4fb20] transition-colors">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=finance" className="hover:text-[#d4fb20] transition-colors">
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=productivity" className="hover:text-[#d4fb20] transition-colors">
                    Productivity
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Platform
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/signup?role=creator" className="hover:text-[#d4fb20] transition-colors">
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <a href="#affiliate" className="hover:text-[#d4fb20] transition-colors">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#d4fb20] transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#help" className="hover:text-[#d4fb20] transition-colors">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#d4fb20] transition-colors">
                    About ByteSpace
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 mt-14 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#82868e]">
          <span>© {new Date().getFullYear()} ByteSpace. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#d4fb20] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#d4fb20] transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-[#d4fb20] transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
