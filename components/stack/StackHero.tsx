"use client";

import Link from "next/link";
import { Sparkles, ArrowRight, Layers, ShieldCheck, Zap, Terminal } from "lucide-react";

const stackMetrics = [
  {
    name: "99.98% Edge Uptime",
    detail: "Global CDN distribution",
    icon: ShieldCheck,
  },
  {
    name: "0.45s Core Web Vitals",
    detail: "Sub-second LCP benchmark",
    icon: Zap,
  },
  {
    name: "Zero Vendor Lock-in",
    detail: "100% open type-safe code",
    icon: Terminal,
  },
];

export default function StackHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-28 sm:pb-24">
      {/* 1. Fine Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* 2. Top Ambient Gradient Fade */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100/80 via-white/80 to-white" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 text-center sm:px-8">
        {/* Modern Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/90 px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-white">
            <Sparkles className="h-2.5 w-2.5" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-800 sm:text-xs">
            Production-Grade Infrastructure
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold tracking-tight text-[#111111] sm:text-6xl sm:leading-[1.12] lg:text-7xl">
          The Production Architecture <br className="hidden sm:inline" />
          Behind High-Scale Systems.
        </h1>

        {/* Subtitle / SLA Context */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Hum bloated WordPress themes aur fragile legacy plugins ko deploy nahi karte. Hamara pura ecosystem edge-first Next.js, type-safe APIs aur real-time conversion tracking par operate karta hai—engineered for aggressive scale without operational debt.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#stack-categories"
            className="flex items-center gap-2 rounded-xl bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-all hover:bg-black hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] active:scale-[0.98]"
          >
            <span>Explore Architecture</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-black/[0.08] bg-neutral-100/80 px-7 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:bg-neutral-200/80 active:scale-[0.98]"
          >
            Audit Your Stack
          </Link>
        </div>

        {/* Micro Metrics Bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {stackMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-neutral-50/80 px-5 py-3 text-left shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-black/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.06] bg-white text-black shadow-xs transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111111] sm:text-sm">
                    {item.name}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}