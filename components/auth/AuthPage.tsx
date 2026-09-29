"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AuthPageProps {
  mode: "login" | "register";
}

export function AuthPage({ mode }: AuthPageProps) {
  const isRegister = mode === "register";
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (isRegister && !agreeTerms) {
      toast.error("Please accept the Terms of Service.");
      return;
    }

    toast.success(
      isRegister
        ? "Account created successfully! Welcome to ByteSpace."
        : "Welcome back to ByteSpace!"
    );
  };

  return (
    <div className="min-h-screen bg-[#003be2] text-white flex flex-col justify-between relative overflow-hidden">
      {/* Dark Header */}
      <Header dark />

      {/* Decorative Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#66a0ff_1px,transparent_1px),linear-gradient(to_bottom,#66a0ff_1px,transparent_1px)] bg-[size:120px_120px]"
        aria-hidden="true"
      />

      {/* Auth Content */}
      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-32 pb-20 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Pitch Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[#d4fb20] text-xs font-bold tracking-widest uppercase mb-3 block">
              BYTESPACE · YOUR NEXT CHAPTER
            </span>
            <h1 className="font-['Poppins',sans-serif] font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              {isRegister ? "Sign up and come in" : "Sign in with ease"}
            </h1>
            <p className="text-[#e5e6e8] text-base sm:text-lg leading-relaxed mt-4 mb-8 max-w-[480px]">
              {isRegister
                ? "The registration process is straightforward, uncomplicated, and efficient, allowing you to get started quickly and at no cost."
                : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
            </p>

            {/* Illustration */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 aspect-[16/10] max-w-[500px]">
              <img
                src="/images/auth.png"
                alt="Auth illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[480px] bg-white text-[#242528] rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/40"
            >
              <span className="text-[#003be2] text-xs font-bold tracking-widest uppercase mb-1 block">
                {isRegister ? "CREATE AN ACCOUNT" : "SIGN IN"}
              </span>
              <h2 className="font-['Poppins',sans-serif] font-semibold text-2xl sm:text-3xl text-[#242528] tracking-tight">
                {isRegister ? "Welcome to ByteSpace" : "Welcome Back"}
              </h2>
              <p className="text-[#82868e] text-sm mt-1 mb-6">
                {isRegister
                  ? "Create your account and start learning today."
                  : "Please enter your details to sign in."}
              </p>

              <div className="space-y-4">
                {isRegister && (
                  <div>
                    <label className="text-xs font-semibold text-[#4b4c53] uppercase tracking-wider block mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jamie Davis"
                      required
                      className="w-full h-12 px-4 rounded-xl border border-[#e8e9eb] text-sm text-[#242528] placeholder-[#82868e] focus:outline-none focus:border-[#003be2] focus:ring-1 focus:ring-[#003be2] transition-colors"
                    />
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-[#4b4c53] uppercase tracking-wider block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-[#e8e9eb] text-sm text-[#242528] placeholder-[#82868e] focus:outline-none focus:border-[#003be2] focus:ring-1 focus:ring-[#003be2] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#4b4c53] uppercase tracking-wider block mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-[#e8e9eb] text-sm text-[#242528] placeholder-[#82868e] focus:outline-none focus:border-[#003be2] focus:ring-1 focus:ring-[#003be2] transition-colors"
                  />
                </div>
              </div>

              {isRegister ? (
                <label className="flex items-start gap-2.5 text-xs text-[#82868e] mt-5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5 rounded border-[#e8e9eb] text-[#003be2] focus:ring-[#003be2]"
                  />
                  <span>
                    I agree to ByteSpace's{" "}
                    <a href="#terms" className="text-[#003be2] underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#privacy" className="text-[#003be2] underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              ) : (
                <div className="flex items-center justify-between text-xs text-[#82868e] mt-4">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-[#e8e9eb] text-[#003be2] focus:ring-[#003be2]"
                    />
                    <span>Remember me</span>
                  </label>
                  <a href="#forgot" className="text-[#003be2] hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button
                type="submit"
                variant="lime"
                className="w-full mt-6 min-h-[48px] font-semibold text-base shadow-md"
              >
                {isRegister ? "Continue" : "Sign In"}
              </Button>

              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e8e9eb]" />
                </div>
                <span className="relative px-3 bg-white text-xs uppercase tracking-wider text-[#82868e]">
                  or
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => toast.info("Facebook authentication")}
                  className="h-11 rounded-xl border border-[#e8e9eb] flex items-center justify-center gap-2 text-xs font-semibold text-[#4b4c53] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </button>

                <button
                  type="button"
                  onClick={() => toast.info("Google authentication")}
                  className="h-11 rounded-xl border border-[#e8e9eb] flex items-center justify-center gap-2 text-xs font-semibold text-[#4b4c53] hover:bg-gray-50 transition-colors cursor-pointer"
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
                  <span>Google</span>
                </button>
              </div>

              {/* Toggle switch between Login / Register */}
              <div className="text-center text-xs text-[#82868e] mt-6">
                {isRegister ? "Already have an account?" : "New to ByteSpace?"}{" "}
                <Link
                  href={isRegister ? "/signin" : "/signup"}
                  className="font-semibold text-[#003be2] hover:underline"
                >
                  {isRegister ? "Sign In" : "Create an account"}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
