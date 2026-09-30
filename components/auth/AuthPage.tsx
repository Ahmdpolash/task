"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

interface AuthPageProps {
  mode: "login" | "register";
}

export function AuthPage({ mode }: AuthPageProps) {
  const isRegister = mode === "register";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || (isRegister && !fullName)) {
      toast.error("Please fill in all required fields.");
      return;
    }

    toast.success(
      isRegister
        ? "Account created successfully! Welcome to ByteSpace."
        : "Welcome back to ByteSpace!"
    );
  };

  return (
    <div className="min-h-screen bg-[#003be2] text-white relative overflow-hidden flex items-center justify-center p-6 sm:p-12 lg:p-16">
      {/* Background Hero Grid */}
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Top Left ByteSpace Icon Logo (No full navbar as requested) */}
      <Link
        href="/"
        className="absolute top-8 left-8 sm:top-10 sm:left-12 z-30 select-none group"
        aria-label="ByteSpace Home"
      >
        <span className="relative inline-block w-[30px] h-[33px] bg-[#d4fb20] rounded-r-[18px] overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
          <span className="absolute -top-[2px] -left-[13px] w-[24px] h-[36px] bg-[#003be2] rounded-full" />
          <i className="absolute top-[10px] -right-[2px] w-[14px] h-[14px] bg-[#003be2] rounded-full not-italic" />
        </span>
      </Link>

      {/* Main Content Stage */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto py-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Side: Pitch and Floating Artwork */}
        <div className="w-full lg:max-w-[500px] flex flex-col justify-center">
          <h1 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl text-white mb-3">
            {isRegister ? "Sign up and come in" : "Sign in with ease"}
          </h1>
          <p className="text-white/80 text-xs sm:text-sm max-w-sm leading-relaxed mb-6 font-normal">
            {isRegister
              ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
              : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
          </p>

          {/* Floating Collage Artwork matching Figma */}
          <div className="w-full max-w-[450px] relative pt-2">
            <img
              src="/images/auth.png"
              alt="ByteSpace preview"
              className="w-full h-auto drop-shadow-2xl select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Right Side: White Card Form matching Figma */}
        <div className="w-full lg:max-w-[490px] flex justify-center lg:justify-end">
          <div className="w-full bg-white text-[#242528] rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 shadow-2xl">
            <span className="text-[#003be2] text-xs sm:text-sm font-medium mb-1 block">
              {isRegister ? "Create an Account" : "Sign In"}
            </span>
            <h2 className="font-['Poppins',sans-serif] font-bold text-3xl sm:text-4xl text-[#111111] mb-8 tracking-tight">
              {isRegister ? "Welcome to ByteSpace" : "Welcome Back"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {isRegister && (
                <div>
                  <label className="text-xs font-semibold text-[#242528] mb-1.5 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jamie Davis"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-[#e8e9eb] text-sm text-[#242528] placeholder-[#a0a3a9] focus:outline-none focus:border-[#003be2] focus:ring-1 focus:ring-[#003be2] transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-[#242528] mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#e8e9eb] text-sm text-[#242528] placeholder-[#a0a3a9] focus:outline-none focus:border-[#003be2] focus:ring-1 focus:ring-[#003be2] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[#242528] mb-1.5 block">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-12 px-4 rounded-xl border border-[#e8e9eb] text-sm text-[#242528] placeholder-[#a0a3a9] focus:outline-none focus:border-[#003be2] focus:ring-1 focus:ring-[#003be2] transition-colors"
                />
              </div>

              {/* Submit Button aligned right matching Figma */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#d4fb20] hover:bg-[#c2e915] text-[#111111] font-bold text-sm px-8 py-3 rounded-full shadow-xs transition-all hover:scale-105 cursor-pointer"
                >
                  {isRegister ? "Continue" : "Sign In"}
                </button>
              </div>

              {/* Social Login Section (Only on Login view as per screenshot) */}
              {!isRegister && (
                <>
                  <div className="flex items-center gap-3 my-7">
                    <div className="flex-1 h-[1px] bg-gray-200" />
                    <span className="text-xs text-gray-400 font-normal">or</span>
                    <div className="flex-1 h-[1px] bg-gray-200" />
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    {/* Facebook Button */}
                    <button
                      type="button"
                      onClick={() => toast.info("Facebook authentication")}
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs cursor-pointer"
                      aria-label="Sign in with Facebook"
                    >
                      <svg
                        className="w-5 h-5 text-[#1877F2]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </button>

                    {/* Google Button */}
                    <button
                      type="button"
                      onClick={() => toast.info("Google authentication")}
                      className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs cursor-pointer"
                      aria-label="Sign in with Google"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.15z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.26v3.15C3.27 21.36 7.37 24 12 24z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.26C.46 8.16 0 9.98 0 12s.46 3.84 1.26 5.42l4.02-3.15z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.27 2.64 1.26 6.58l4.02 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )}

              {/* Bottom Navigation Toggle */}
              <div className="text-center text-xs text-[#82868e] pt-6">
                {isRegister ? "Already have an account?" : "New user?"}{" "}
                <Link
                  href={isRegister ? "/login" : "/register"}
                  className="font-semibold text-[#003be2] hover:underline"
                >
                  {isRegister ? "Login" : "Create an account"}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
