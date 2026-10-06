"use client";

import { 
  Code2, 
  Database, 
  TrendingUp, 
  Clapperboard, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

interface TechItem {
  name: string;
  role: string;
}

interface StackCategory {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  icon: any;
  colSpan: string;
  dark?: boolean;
  technologies: TechItem[];
  highlightMetric: {
    value: string;
    label: string;
  };
}

const stackCategories: StackCategory[] = [
  {
    id: "frontend",
    badge: "Layer 01 // Client Interface",
    title: "Edge Frontend & Reactive UI",
    tagline: "Ultra-fast headless architectures engineered for sub-second LCP and fluid conversions.",
    icon: Code2,
    colSpan: "lg:col-span-7",
    technologies: [
      { name: "Next.js 15 (App Router)", role: "Server Components & Edge Runtime" },
      { name: "TypeScript", role: "End-to-End Type Safety & Zero Runtime Drift" },
      { name: "Tailwind CSS", role: "Atomic Styling & Minimal Bundle Payload" },
      { name: "Framer Motion", role: "Hardware-Accelerated Fluid Micro-Interactions" },
    ],
    highlightMetric: {
      value: "0.42s",
      label: "Average Paint Latency",
    },
  },
  {
    id: "backend",
    badge: "Layer 02 // Cloud & Compute",
    title: "Backend, APIs & Edge Storage",
    tagline: "Resilient server architectures designed to handle spike traffic without bottlenecking.",
    icon: Database,
    colSpan: "lg:col-span-5",
    technologies: [
      { name: "Node.js & Express", role: "Micro-Service REST Endpoints" },
      { name: "MongoDB & Mongoose", role: "Indexed High-Concurrency Lead Stores" },
      { name: "Cloudflare Edge CDN", role: "Global Low-Latency Asset Caching" },
      { name: "Supabase / PostgreSQL", role: "Relational Ledger & Vector Storage" },
    ],
    highlightMetric: {
      value: "99.98%",
      label: "Guaranteed SLA",
    },
  },
  {
    id: "marketing",
    badge: "Layer 03 // Attribution & Media",
    title: "Performance Tracking & Ad Engine",
    tagline: "Zero-data-loss server-side tracking pipelines that bypass browser cookie restrictions.",
    icon: TrendingUp,
    colSpan: "lg:col-span-5",
    dark: true,
    technologies: [
      { name: "Meta Conversions API (CAPI)", role: "Server-Side Direct Event Handover" },
      { name: "Google Tag Manager Server", role: "Cookieless Attribution Routing" },
      { name: "Looker Studio & Webhooks", role: "Automated Real-Time CPA Dashboards" },
      { name: "Custom Webhook Nodes", role: "Instant CRM & WhatsApp Funnel Triggers" },
    ],
    highlightMetric: {
      value: "100%",
      label: "Attributed Event Accuracy",
    },
  },
  {
    id: "creative",
    badge: "Layer 04 // Content & Creative",
    title: "High-Retention Media Production",
    tagline: "Data-informed creative workflows engineered to maximize hook rate and stop the scroll.",
    icon: Clapperboard,
    colSpan: "lg:col-span-7",
    technologies: [
      { name: "CapCut Pro & Premiere", role: "High-Tempo Short-Form Reels/TikToks" },
      { name: "ElevenLabs AI Audio", role: "Natural Multilingual Voice Synthesis" },
      { name: "Figma System Kits", role: "Wireframing & Conversion-Trained UI" },
      { name: "Dynamic Hook Generators", role: "A/B Variation Testing Framework" },
    ],
    highlightMetric: {
      value: "64%+",
      label: "Average 3s Hook Retention",
    },
  },
];

export default function StackCategoryBento() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#fafafa] py-20 sm:py-28" id="stack-categories">
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
              Complete Tech Ecosystem
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Engineered Across Every Layer
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-neutral-500 sm:text-right sm:text-sm">
            From reactive edge runtimes to server-side ad attribution and high-conversion video assets, our tools operate in tight synergy.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            const isDark = cat.dark;

            return (
              <div
                key={cat.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${cat.colSpan} ${
                  isDark
                    ? "bg-[#111111] text-white"
                    : "border border-black/[0.08] bg-white hover:border-black/25"
                }`}
              >
                {/* Ambient Glow for Dark Card */}
                {isDark && (
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                )}

                <div className="relative z-10">
                  {/* Top Bar: Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider ${
                        isDark
                          ? "border border-white/20 bg-white/10 text-neutral-200"
                          : "border border-black/[0.08] bg-neutral-50 text-neutral-700"
                      }`}
                    >
                      {cat.badge}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-200 ${
                        isDark
                          ? "bg-white/10 text-white group-hover:bg-white group-hover:text-black"
                          : "border border-black/[0.06] bg-neutral-50 text-black group-hover:bg-black group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className={`mt-6 text-xl font-bold tracking-tight sm:text-2xl ${
                      isDark ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className={`mt-2 text-xs leading-relaxed sm:text-sm ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    {cat.tagline}
                  </p>

                  {/* Tech Stack List */}
                  <div className="mt-8 space-y-3">
                    {cat.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className={`flex items-start justify-between gap-3 rounded-2xl p-3 border transition-colors ${
                          isDark
                            ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                            : "border-black/[0.06] bg-neutral-50/80 hover:bg-white hover:border-black/20"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 ${
                              isDark ? "text-emerald-400" : "text-emerald-600"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold sm:text-sm ${
                              isDark ? "text-white" : "text-[#111111]"
                            }`}
                          >
                            {tech.name}
                          </span>
                        </div>
                        <span
                          className={`font-mono text-[10px] text-right ${
                            isDark ? "text-neutral-400" : "text-neutral-500"
                          }`}
                        >
                          {tech.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metric Strip */}
                <div
                  className={`relative z-10 mt-8 flex items-center justify-between border-t pt-5 ${
                    isDark ? "border-white/10" : "border-black/[0.06]"
                  }`}
                >
                  <div>
                    <p
                      className={`font-mono text-2xl font-extrabold tracking-tight ${
                        isDark ? "text-white" : "text-[#111111]"
                      }`}
                    >
                      {cat.highlightMetric.value}
                    </p>
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-wider ${
                        isDark ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      {cat.highlightMetric.label}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-1 font-mono text-xs font-semibold ${
                      isDark ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    <span>Production Grade</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}