import { Search, Terminal, Rocket, ArrowRight } from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: any;
}

const steps: WorkflowStep[] = [
  {
    step: "01",
    title: "Audit & Architecture",
    tagline: "Uncovering friction & bottleneck points",
    description:
      "Deep technical inspection of current tech stacks, page-speed vitals, user drop-offs, and tracking attribution blind spots to lay down a rock-solid growth blueprint.",
    deliverables: [
      "Technical Core Web Vitals audit",
      "Tracking, CAPI & Pixel validation",
      "Target customer & competitor positioning",
    ],
    icon: Search,
  },
  {
    step: "02",
    title: "Build & Rigorous Testing",
    tagline: "Type-safe engineering & creative engines",
    description:
      "Developing headless Next.js platforms, building high-converting landers, writing psychology-backed short-form video hooks, and automating multi-step lead capture pipelines.",
    deliverables: [
      "Sub-second App Router development",
      "Short-form video scripts & variations",
      "Automated lead qualification triggers",
    ],
    icon: Terminal,
  },
  {
    step: "03",
    title: "Media Deployment & Scaling",
    tagline: "Direct-response media & iteration",
    description:
      "Launching systematic paid ad campaigns, monitoring cost-per-acquisition daily, executing A/B landing variations, and scaling winning hooks without ad fatigue.",
    deliverables: [
      "Meta Ads & Google Search execution",
      "Real-time Looker Studio reporting",
      "Weekly creative fatigue rotation",
    ],
    icon: Rocket,
  },
];

export default function ProcessWorkflowCompact() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#fbfbfb] py-20 sm:py-28" id="workflow">
      {/* Subtle Micro-Grid */}
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
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-black/[0.08] pb-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Execution Methodology
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              From Zero to Live Scaling
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-neutral-500 sm:text-right sm:text-sm">
            A linear, milestone-driven framework that eliminates corporate overhead and gets high-converting systems to market fast.
          </p>
        </div>

        {/* 3-Step Horizontal Workflow Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/25 hover:shadow-xl lg:p-8"
              >
                <div>
                  {/* Top Step Counter & Node Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold tracking-tight text-neutral-300 transition-colors duration-200 group-hover:text-black">
                      {item.step}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/[0.06] bg-neutral-50 text-black shadow-xs transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-neutral-400">
                    {item.tagline}
                  </p>

                  <p className="mt-4 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Scope Deliverables */}
                <div className="mt-8 border-t border-black/[0.06] pt-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                    Key Deliverables
                  </span>
                  <ul className="mt-3 space-y-2">
                    {item.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 shrink-0 text-neutral-400 group-hover:text-black" />
                        <span className="text-xs font-medium text-neutral-700">
                          {deliv}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}