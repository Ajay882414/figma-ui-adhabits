"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface TechTool {
  name: string;
  category: "tech" | "cloud" | "creative" | "marketing";
  tag: string;
  svgPath: React.ReactNode;
}

const techTools: TechTool[] = [
  // Web & Engineering
  {
    name: "Next.js 15",
    category: "tech",
    tag: "Edge App Router",
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.3 14.5l-4.7-6.2v6.2H9V8.5h1.6l4.7 6.2V8.5H17v8h-1.7z"
      />
    ),
  },
  {
    name: "TypeScript",
    category: "tech",
    tag: "Type Safety",
    svgPath: (
      <path
        fill="currentColor"
        d="M3 3h18v18H3V3zm10.5 7.5h5V9h-5v9h2v-7.5zm-5 1.5h2.5V18h2V12h-4.5V9H6v3h2.5z"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    category: "tech",
    tag: "Zero-Runtime CSS",
    svgPath: (
      <path
        fill="currentColor"
        d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-1.7 1.1.4 2 1.3 2.9 2.2C15.3 13 17 14 20 14c3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 1.7-1.1-.4-2-1.3-2.9-2.2C16.7 7 15 6 12 6z"
      />
    ),
  },
  {
    name: "React 19",
    category: "tech",
    tag: "Server Actions",
    svgPath: (
      <path
        fill="currentColor"
        d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0-7.5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
    ),
  },

  // Cloud & Backend
  {
    name: "MongoDB Node",
    category: "cloud",
    tag: "Lead Repository",
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2.5C11.5 3 7 7.5 7 12.5c0 3 2.2 5.5 5 5.5s5-2.5 5-5.5C17 7.5 12.5 3 12 2.5zm0 13.5c-1.7 0-3-1.3-3-3 0-2.3 2.2-4.8 3-5.8.8 1 3 3.5 3 5.8 0 1.7-1.3 3-3 3z"
      />
    ),
  },
  {
    name: "Node.js Microservices",
    category: "cloud",
    tag: "Event Handlers",
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8-6.8 3.8L5.2 8 12 4.2zM5 9.4l6 3.3v6.7l-6-3.3V9.4zm8 10V12.7l6-3.3v6.7l-6 3.3z"
      />
    ),
  },
  {
    name: "Vercel Edge",
    category: "cloud",
    tag: "Global Low Latency",
    svgPath: <path fill="currentColor" d="M12 1L24 22H0L12 1z" />,
  },
  {
    name: "AWS S3 & Cloudflare",
    category: "cloud",
    tag: "Encrypted Storage",
    svgPath: (
      <path
        fill="currentColor"
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
      />
    ),
  },

  // Creative & Production
  {
    name: "CapCut & Premiere",
    category: "creative",
    tag: "Retention Hook Edits",
    svgPath: (
      <path
        fill="currentColor"
        d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 2l6 4-6 4V8z"
      />
    ),
  },
  {
    name: "ElevenLabs AI",
    category: "creative",
    tag: "Synthetic Voice Engine",
    svgPath: (
      <path
        fill="currentColor"
        d="M10.5 4.5l-4 4 4 4 1.4-1.4-2.6-2.6h8.4v-2H9.3l2.6-2.6zm3 15l4-4-4-4-1.4 1.4 2.6 2.6H6.3v2h8.4l-2.6 2.6z"
      />
    ),
  },
  {
    name: "Figma DS",
    category: "creative",
    tag: "Architectural Layouts",
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2H8.5a3.5 3.5 0 000 7H12V2zm0 7H8.5a3.5 3.5 0 000 7H12V9zm0 7H8.5a3.5 3.5 0 000 7 3.5 3.5 0 003.5-3.5V16zm0-7h3.5a3.5 3.5 0 000-7H12v7zm0 7h3.5a3.5 3.5 0 000-7H12v7z"
      />
    ),
  },

  // Marketing & Attribution
  {
    name: "Meta CAPI Graph",
    category: "marketing",
    tag: "Server-Side Events",
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04Z"
      />
    ),
  },
  {
    name: "Google Tag Manager",
    category: "marketing",
    tag: "Cookieless Tracking",
    svgPath: (
      <path
        fill="currentColor"
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2v-9h2v9zm4 0h-2V7h2v10z"
      />
    ),
  },
  {
    name: "Looker Studio",
    category: "marketing",
    tag: "Automated ROAS Feeds",
    svgPath: (
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.93V11h3.93A8 8 0 0113 16.93zM11 7.07V13H7.07A8 8 0 0111 7.07z"
      />
    ),
  },
];

export default function PremiumTechStack() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTools =
    activeTab === "all"
      ? techTools
      : techTools.filter((tool) => tool.category === activeTab);

  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#fbfbfb] py-20 sm:py-28" id="tools-inventory">
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-1.5 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-800">
              Tooling &amp; Infrastructure Inventory
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Selected for Speed, Attribution &amp; Reliability
          </h2>

          <p className="mt-4 text-xs leading-relaxed text-neutral-600 sm:text-base">
            Every library, edge cloud runtime, and media engine in our portfolio is chosen to eliminate conversion latency and attribution blind spots.
          </p>
        </div>

        {/* Filter Navigation Chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: "all", label: "All Infrastructure" },
            { id: "tech", label: "Web & Engineering" },
            { id: "cloud", label: "Cloud & APIs" },
            { id: "creative", label: "Media & Production" },
            { id: "marketing", label: "Performance & Tracking" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 sm:text-sm ${
                activeTab === tab.id
                  ? "bg-[#111111] text-white shadow-md"
                  : "border border-black/[0.08] bg-white text-neutral-600 hover:border-black/30 hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Logo Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 sm:gap-5">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-xl"
            >
              {/* Subtle top indicator bar on hover */}
              <div className="absolute left-0 top-0 h-1 w-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Icon Container */}
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-black/[0.06] bg-neutral-50 text-neutral-800 transition-all duration-300 group-hover:scale-105 group-hover:bg-black group-hover:text-white">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {tool.svgPath}
                </svg>
              </div>

              {/* Details */}
              <h3 className="mt-4 text-sm font-bold text-[#111111] sm:text-base">
                {tool.name}
              </h3>
              <p className="mt-1 font-mono text-[11px] font-medium text-neutral-400">
                {tool.tag}
              </p>
            </div>
          ))}
        </div>

        {/* Live Status Bar */}
        <div className="mt-12 flex flex-col items-center justify-between rounded-2xl border border-black/[0.08] bg-white px-6 py-4 shadow-sm sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <p className="text-xs font-semibold text-neutral-700 sm:text-sm">
              Continuous deployment enabled &amp; edge SLA monitoring across client infrastructure.
            </p>
          </div>
          <span className="mt-2 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400 sm:mt-0">
            Adhabits Production Standard
          </span>
        </div>
      </div>
    </section>
  );
}