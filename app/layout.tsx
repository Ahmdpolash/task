import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/lib/Provider";
import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Peptide Resource Platform",
  description:
    "AI Peptide Resource Platform   is a platform where you can find resources for AI Peptide",
  keywords: ["AI Peptide", "Peptide", "AI", "Resource", "Platform"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" />
        <Providers>
          <Navbar />
          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
