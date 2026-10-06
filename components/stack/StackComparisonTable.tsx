"use client";

import { Check, X, Zap, ShieldCheck } from "lucide-react";

interface ComparisonRow {
  feature: string;
  category: string;
  legacy: string;
  adhabits: string;
  impact: string;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Core Architecture",
    category: "Engineering",
    legacy: "Bloated WordPress / Heavy Shopify Themes",
    adhabits: "Headless Next.js 15 + Edge SSR",
    impact: "Sub-500ms initial page load",
  },
  {
    feature: "Attribution & Tracking",
    category: "Performance Ads",
    legacy: "Client-side Pixel (30-40% Data Drop)",
    adhabits: "Server-Side Meta CAPI + Custom Webhooks",
    impact: "100% accurate conversion signals",
  },
  {
    feature: "Lead Routing SLA",
    category: "Automation",
    legacy: "Manual CSV exports or slow Zapier zaps",
    adhabits: "Direct Mongo/Supabase Pipelines + Instant Triggers",
    impact: "Zero lead leakage or delays",
  },
  {
    feature: "Creative Production",
    category: "Media",
    legacy: "Generic templates & static banner graphics",
    adhabits: "Retention-scripted short reels + AI voice hooks",
    impact: "60%+ 3-second hook retention",
  },
  {
    feature: "Code & Asset Ownership",
    category: "Control",
    legacy: "Locked inside agency proprietary portals",
    adhabits: "100% Client-owned GitHub & clean repos",
    impact: "Zero vendor lock-in forever",
  },
  {
    feature: "Scalability Under Load",
    category: "Infrastructure",
    legacy: "Server crashes during paid ad surges",
    adhabits: "Global Edge CDN auto-scaling clusters",
    impact: "Handles 100k+ concurrent visits",
  },
];

export default function StackComparisonTable() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-white py-20 sm:py-28" id="comparison">
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-black/[0.08] pb-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              The Engineering Gap
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Modern Stack vs. Legacy Agencies
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-neutral-500 sm:text-right sm:text-sm">
            Why traditional digital agency setups leak revenue, and how our production-grade stack fixes every bottleneck.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-black/[0.08] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left border-collapse">
              <thead>
                <tr className="border-b border-black/[0.08] bg-neutral-50/70 text-xs uppercase tracking-wider text-neutral-500 font-mono">
                  <th className="py-5 px-6 font-bold w-1/4">Capability</th>
                  <th className="py-5 px-6 font-bold w-1/3 text-neutral-400">
                    Traditional Setup
                  </th>
                  <th className="py-5 px-6 font-bold w-1/3 bg-[#111111] text-white">
                    <div className="flex items-center gap-2">
                      <Zap className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Adhabits Standard</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06] text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className="hover:bg-neutral-50/60 transition-colors"
                  >
                    {/* Capability / Category */}
                    <td className="py-5 px-6">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        {row.category}
                      </span>
                      <p className="mt-0.5 font-bold text-[#111111]">
                        {row.feature}
                      </p>
                    </td>

                    {/* Legacy Way */}
                    <td className="py-5 px-6 text-neutral-500">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                          <X className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <span>{row.legacy}</span>
                      </div>
                    </td>

                    {/* Adhabits Standard */}
                    <td className="py-5 px-6 bg-neutral-900/[0.02] font-semibold text-neutral-900">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="h-2.5 w-2.5 stroke-[3]" />
                        </div>
                        <div>
                          <p className="text-black font-bold">{row.adhabits}</p>
                          <span className="font-mono text-[10px] text-emerald-700 font-medium">
                            Impact: {row.impact}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-black/[0.06] bg-[#fbfbfb] p-5 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <p className="text-xs font-semibold text-neutral-700 sm:text-sm">
              Har project production release se pehle 100% Lighthouse &amp; CAPI tracking verification test pass karta hai.
            </p>
          </div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-400">
            Zero Operational Debt
          </span>
        </div>
      </div>
    </section>
  );
}