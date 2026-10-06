import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import CtaFooterSection from "@/components/CtaFooterSection";
import Navbar from "@/components/Navbar";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adhabits | Tech & Marketing Precision",
  description:
    "We help modern brands scale with high-performance tech solutions and strategic marketing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable}>
      <body className="min-h-screen bg-white font-sans text-[#111111] antialiased selection:bg-black selection:text-white">
        <Navbar />
        {children}
        <CtaFooterSection />
      </body>
    </html>
  );
}