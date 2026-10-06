import { GitCommit, Milestone } from "lucide-react";

interface MilestoneItem {
  year: string;
  badge: string;
  title: string;
  description: string;
  stats: string;
}

const milestones: MilestoneItem[] = [
  {
    year: "2023",
    badge: "Day 1 Inception",
    title: "Bootstrapping & Core Engine Formation",
    description:
      "Started as a boutique web studio combining Next.js modern architecture with direct-response landing funnels. Handled foundational client portfolios and achieved first $500k in attributed client sales.",
    stats: "15 Initial Clients",
  },
  {
    year: "2024",
    badge: "Media Integration",
    title: "Performance Marketing & Funnel Automation",
    description:
      "Integrated paid Meta Ads execution, custom short-form video scripting, and automated webhook pipelines. Bridged the technical gap between software development and real-time CPA optimization.",
    stats: "$3.5M Ad Spend Managed",
  },
  {
    year: "2025",
    badge: "Scale & Systems",
    title: "AI Workflows & Enterprise Web Platforms",
    description:
      "Engineered automated lead-qualification nodes, LLM vector search tools, and edge-native CMS architectures. Onboarded high-growth e-commerce, real estate, and B2B SaaS partners across multiple regions.",
    stats: "200+ Production Sprints",
  },
  {
    year: "2026",
    badge: "Current Milestone",
    title: "Full-Funnel Agency Ecosystem Architecture",
    description:
      "Operating as a premier tech and growth partner with verified 99.98% SLA monitoring, custom attribution tracking, and dedicated full-stack creative sprint pods.",
    stats: "400+ Delivered Assets",
  },
];

export default function CompanyTimeline() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#fcfcfc] py-20 sm:py-28" id="milestones">
      {/* Background Micro Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-semibold text-neutral-800 shadow-xs">
            <Milestone className="h-3.5 w-3.5" />
            <span>Trajectory</span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            From Scrappy Bootstrapping to High-Capacity Infrastructure
          </h2>
        </div>

        {/* Vertical Line Timeline Container */}
        <div className="relative mt-16">
          {/* Vertical Continuous Line */}
          <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-black/[0.1] sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } items-start sm:items-center`}
                >
                  {/* Timeline Center Node Pin */}
                  <div className="absolute left-4 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-black bg-white shadow-sm sm:left-1/2">
                    <span className="h-2 w-2 rounded-full bg-black" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-10 w-full sm:ml-0 sm:w-1/2 sm:px-10">
                    <div className="group rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm transition-all duration-300 hover:border-black/20 hover:shadow-lg sm:p-8">
                      {/* Year & Badge Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-2xl font-black tracking-tight text-[#111111]">
                          {item.year}
                        </span>
                        <span className="rounded-full border border-black/[0.08] bg-neutral-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-[#111111] sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                        {item.description}
                      </p>

                      {/* Micro Metric Footer */}
                      <div className="mt-5 flex items-center gap-2 border-t border-black/[0.06] pt-4 font-mono text-xs font-semibold text-neutral-500">
                        <GitCommit className="h-3.5 w-3.5 text-black" />
                        <span>{item.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}