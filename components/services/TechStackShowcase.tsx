"use client";

import { useState } from "react";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Database,
  Cloud,
  Palette,
  Terminal,
  BarChart3,
  Bot,
  Globe,
  Share2,
} from "lucide-react";

interface StackItem {
  name: string;
  category: string;
  description: string;
  tag: string;
}

const categories = [
  { id: "all", label: "All Capabilities" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "backend", label: "Cloud & Databases" },
  { id: "ai", label: "AI & Automations" },
  { id: "marketing", label: "Media & Analytics" },
];

const stackItems: StackItem[] = [
  // Frontend & Web
  {
    name: "Next.js 15+",
    category: "frontend",
    description: "App Router, Server Actions aur dynamic edge page rendering.",
    tag: "Framework",
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "Strict end-to-end type safety aur enterprise runtime confidence.",
    tag: "Language",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description: "Utility-first modern design token systems aur fast styling.",
    tag: "Styling",
  },
  {
    name: "Figma",
    category: "frontend",
    description: "Design systems, interactive prototypes aur design tokens.",
    tag: "Design",
  },

  // Cloud & Databases
  {
    name: "Supabase",
    category: "backend",
    description: "Scalable Postgres database, Row Level Security aur Auth.",
    tag: "Database",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    description: "ACID-compliant relational storage aur high-throughput indexing.",
    tag: "Storage",
  },
  {
    name: "Cloudflare",
    category: "backend",
    description: "Edge networks, DNS optimization, DDoS protection aur WAF.",
    tag: "Infra",
  },
  {
    name: "Amazon AWS",
    category: "backend",
    description: "Serverless S3 storage buckets, microservices aur compute nodes.",
    tag: "Cloud",
  },

  // AI & Automations
  {
    name: "OpenAI API",
    category: "ai",
    description: "Custom GPT pipelines, semantic search vectors aur reasoning.",
    tag: "Model",
  },
  {
    name: "n8n Workflows",
    category: "ai",
    description: "Complex multi-node webhook automations aur CRM sync nodes.",
    tag: "Automation",
  },
  {
    name: "LangChain",
    category: "ai",
    description: "Context retrieval engines, tool call routing aur agent memory.",
    tag: "Agents",
  },
  {
    name: "Pinecone",
    category: "ai",
    description: "High-density vector embeddings aur fast similarity searches.",
    tag: "Vector DB",
  },

  // Media & Analytics
  {
    name: "Meta Ads Manager",
    category: "marketing",
    description: "Direct conversion tracking, CAPI pipelines aur campaign scaling.",
    tag: "Paid Media",
  },
  {
    name: "Google Analytics 4",
    category: "marketing",
    description: "Event attribution models, user flows aur conversion funnels.",
    tag: "Analytics",
  },
  {
    name: "Looker Studio",
    category: "marketing",
    description: "Real-time client performance dashboards aur KPI reporting.",
    tag: "BI & Data",
  },
  {
    name: "CapCut Pro",
    category: "marketing",
    description: "Short-form video pacing, dynamic typography aur motion edits.",
    tag: "Production",
  },
];

export default function TechStackShowcase() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all"
      ? stackItems
      : stackItems.filter((item) => item.category === activeTab);

  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-white py-24 sm:py-32" id="tech-stack">
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-neutral-100/80 px-3.5 py-1 text-xs font-semibold text-neutral-800">
            <Layers className="h-3.5 w-3.5" />
            <span>Infrastructure &amp; Tools</span>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Battle-Tested Tech &amp; Marketing Stack
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
            Modern high-speed architectures, machine intelligence pipelines aur precision growth tools jinke upar ham client systems develop karte hain.
          </p>
        </div>

        {/* Tab Selection Filter */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200 active:scale-95 sm:text-sm ${
                  isActive
                    ? "bg-[#111111] text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
                    : "border border-black/[0.07] bg-[#f9fafb] text-neutral-600 hover:border-black/30 hover:bg-white hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid Cards Container */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-6 transition-all duration-300 hover:border-black/20 hover:bg-white hover:shadow-lg"
            >
              <div>
                {/* Header Row: Tech Symbol & Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-white text-[#111111] shadow-sm transition-colors duration-200 group-hover:bg-[#111111] group-hover:text-white">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <span className="rounded-md border border-black/[0.06] bg-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    {item.tag}
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="mt-5 text-lg font-bold tracking-tight text-[#111111]">
                  {item.name}
                </h3>

                {/* Tech Description */}
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </div>

              {/* Status Line */}
              <div className="mt-6 flex items-center gap-1.5 border-t border-black/[0.05] pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#23899b]" />
                <span className="text-[11px] font-medium text-neutral-400">
                  Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}