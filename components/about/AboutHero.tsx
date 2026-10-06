"use client";

import Link from "next/link";
import { Sparkles, ShieldCheck, Zap, TrendingUp, ArrowDownRight } from "lucide-react";

const aboutPills = [
  {
    name: "99.8% Production Uptime",
    href: "#story",
    icon: ShieldCheck,
    badge: "Verified SLA",
  },
  {
    name: "250+ Delivered Assets",
    href: "#milestones",
    icon: Zap,
    badge: "Execution Scale",
  },
  {
    name: "3.4x Conversion Growth",
    href: "#values",
    icon: TrendingUp,
    badge: "Client Benchmark",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-grid-pattern bg-white pt-24 pb-16 sm:pt-32 sm:pb-20">
      {/* Top Ambient White Gradient Fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/80 to-white" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 text-center sm:px-8">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/90 px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-white">
            <Sparkles className="h-2.5 w-2.5" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-800 sm:text-xs">
            Agency Architecture &amp; Ethos
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold tracking-tight text-[#111111] sm:text-6xl sm:leading-[1.12] lg:text-7xl">
          We Engineer Digital Systems <br className="hidden sm:inline" />
          That Scale With Precision.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Adhabits is where resilient tech infrastructure converges with high-performance acquisition marketing. We replace bloated corporate processes with code-level execution and predictable growth systems.
        </p>

        {/* Quick-Jump Capability Navigation Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {aboutPills.map((pill) => {
            const Icon = pill.icon;
            return (
              <Link
                key={pill.name}
                href={pill.href}
                className="group flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-neutral-50/80 px-5 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:bg-white hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] active:scale-[0.98]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black shadow-sm border border-black/[0.06] transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111111] sm:text-sm">
                    {pill.name}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                    {pill.badge}
                  </p>
                </div>
                <ArrowDownRight className="ml-1 h-4 w-4 text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-black" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}