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
  metadataBase: new URL("https://adhabits.com"),
  title: "Adhabits | Tech, Web Development & Digital Marketing Agency",
  description:
    "Adhabits helps ambitious businesses grow with custom web development, UI/UX design, AI automation, SEO, and performance-focused digital marketing.",
  keywords: ["tech agency", "digital marketing agency", "web development", "UI/UX design", "AI automation", "Adhabits", "marketing precision"],
  authors: [{ name: "Adhabits Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Adhabits | Tech, Web Development & Digital Marketing",
    description: "Custom digital experiences and growth marketing for ambitious brands.",
    url: "/",
    siteName: "Adhabits",
    locale: "en_US",
    type: "website",
    images: [{ url: "/homebg.png", alt: "Adhabits technology and marketing agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhabits | Tech, Web Development & Digital Marketing",
    description: "Custom digital experiences and growth marketing for ambitious brands.",
    images: ["/homebg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://adhabits.com/#organization",
        name: "Adhabits",
        url: "https://adhabits.com",
        logo: "https://adhabits.com/logo.png",
        description:
          "Adhabits provides web development, UI/UX design, AI integration, SEO, and digital marketing services.",
      },
      {
        "@type": "WebSite",
        "@id": "https://adhabits.com/#website",
        name: "Adhabits",
        url: "https://adhabits.com",
        publisher: { "@id": "https://adhabits.com/#organization" },
      },
    ],
  };

  return (
    <html lang="en" className={fontSans.variable}>
      <body className="min-h-screen bg-white font-sans text-[#111111] antialiased selection:bg-black selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
        <CtaFooterSection />
      </body>
    </html>
  );
}