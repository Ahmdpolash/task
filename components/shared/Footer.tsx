"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Container from "./Container";
import { useCreateSuscribtionMutation } from "@/lib/redux/features/subscription/subscriptionApi";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [createSubscription, { isLoading }] = useCreateSuscribtionMutation();
  const [email, setEmail] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubscribe = async () => {
    if (!email) {
      setErrorMsg("Please enter your email");
      return;
    }

    try {
      setErrorMsg(null);

      await createSubscription({ email }).unwrap();

      setShowSuccessModal(true);
      setEmail("");
    } catch (error: any) {
      toast.error("You hvae already subscribed to our newsletter.");
    }
  };

  return (
    <div>
      <footer className="bg-[#222222] text-white pt-8 pb-8 px-6 md:px-8">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between py-4 border-b border-gray-500">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/transparent-logo-white.jpg"
                // src="/newLogo.svg"
                alt="logo"
                width={300}
                height={200}
                className="w-28 lg:w-32 bg- h-16 object-cover"
              />
            </Link>

            <div className="flex items-center gap-3">
              <h3 className="font-semibold">Ready to get Started ? </h3>

              <Link href={"/signin"}>
                <Button
                  variant={"default"}
                  className="bg-white text-black cursor-pointer hover:bg-white"
                >
                  GET STARTED
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-y-12 md:gap-x-8 mt-4">
            <div className="md:col-span-4 lg:col-span-6 lg:max-w-md">
              <h3 className="text-2xl font-normal mb-6 leading-tight">
                Subcribe to Our Newsletter
              </h3>
              <div className="mt-4 space-y-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubscribe();
                  }}
                  className="mt-4 space-y-4"
                >
                  <input
                    type="email"
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input w-full px-4 py-3 bg-zinc-900 rounded text-white border border-zinc-800 focus:outline-none focus:border-zinc-700"
                  />

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-white cursor-pointer text-black px-6 py-2.5 rounded-full flex items-center font-medium hover:bg-gray-200 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              </div>
            </div>

            <div className="hidden md:block md:col-span-1 lg:hidden" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-7 lg:col-span-6 gap-y-12 sm:gap-x-8 md:gap-x-8 lg:gap-x-10">

              <div>
                <h3 className="text-[17px] font-semibold uppercase tracking-wide text-gray-100 mb-5">
                  Quick Link
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/artist"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Artists
                    </a>
                  </li>
                  <li>
                    <a
                      href="/open-calls"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Open Calls
                    </a>
                  </li>
                  <li>
                    <a
                      href="/magazine"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Magazine
                    </a>
                  </li>
                  <li>
                    <a
                      href="/articles"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Articles
                    </a>
                  </li>
                  <li>
                    <a
                      href="/events"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Events
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about-us"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/faq"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[17px] font-semibold uppercase tracking-wide text-gray-100 mb-5">
                  Membership And Support
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/contact-us"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <a
                      href="/be-organization"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Become a Organization
                    </a>
                  </li>
                  <li>
                    <a
                      href="/signup"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Become a Artist
                    </a>
                  </li>

                </ul>
              </div>

              <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                <h3 className="text-[17px] font-semibold uppercase tracking-wide text-gray-100 mb-5">
                  Legal And Polices
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/terms-and-conditions"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-sm hover:text-gray-300 transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>

                </ul>
              </div>

            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-[16px] text-gray-300">
                © 2026, AVANT REGISTRY . All Rights Reserved.
              </div>
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="#"
                  className="text-xs text-gray-200 hover:text-gray-300"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="text-xs text-gray-200 hover:text-gray-300"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-xs text-gray-200 hover:text-gray-300"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </Container>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 max-w-md w-full mx-4 text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Thank You!
              </h3>
              <p className="text-gray-300 mb-6">
                You have successfully subscribed to our newsletter.
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
