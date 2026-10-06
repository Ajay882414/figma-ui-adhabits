"use client";

import { Sparkles, DollarSign, TrendingUp, CheckCircle2, ArrowDownRight } from "lucide-react";

interface ProjectsHeroProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: "all", label: "All Work" },
  { id: "web", label: "Next.js Platforms" },
  { id: "performance", label: "Performance Ads" },
  { id: "ai", label: "AI Workflows" },
];

const portfolioMetrics = [
  {
    name: "$4.8M+ Spend Managed",
    metric: "4.2x Avg. ROAS",
    icon: DollarSign,
    badge: "Paid Media",
  },
  {
    name: "0.6s Paint Time",
    metric: "99/100 Core Web Vitals",
    icon: TrendingUp,
    badge: "Web Infra",
  },
  {
    name: "180+ Live Sprints",
    metric: "100% Milestone Handover",
    icon: CheckCircle2,
    badge: "Delivery Rate",
  },
];

export default function ProjectsHero({
  activeCategory,
  onSelectCategory,
}: ProjectsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-grid-pattern bg-white pt-24 pb-16 sm:pt-32 sm:pb-20">
      {/* Top Ambient White Gradient Fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/80 to-white" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 text-center sm:px-8">
        {/* Top Minimal Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/90 px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-black text-white">
            <Sparkles className="h-2.5 w-2.5" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-neutral-800 sm:text-xs">
            Verified Portfolio &amp; Case Studies
          </span>
        </div>

        {/* Main Bold Headline */}
        <h1 className="mx-auto mt-8 max-w-5xl text-4xl font-extrabold tracking-tight text-[#111111] sm:text-6xl sm:leading-[1.12] lg:text-7xl">
          Engineered Case Studies &amp; <br className="hidden sm:inline" />
          Attributed Revenue Outcomes.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Zero vanity screenshots. Har ek project custom code, resilient cloud architecture, aur aggressive performance media ka direct commercial result hai.
        </p>

        {/* Micro Metrics Pill Bar */}
        {/* <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {portfolioMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-neutral-50/80 px-5 py-3 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-black/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.06] bg-white text-black shadow-xs transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111111] sm:text-sm">
                    {item.name}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                    {item.metric}
                  </p>
                </div>
              </div>
            );
          })}
        </div> */}

        {/* Interactive Category Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2" id="case-studies">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-95 sm:text-sm ${
                  isActive
                    ? "bg-[#111111] text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
                    : "border border-black/[0.08] bg-neutral-50 text-neutral-600 hover:border-black/30 hover:bg-white hover:text-black"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}