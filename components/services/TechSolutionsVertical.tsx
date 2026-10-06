import {
  Code2,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";

interface TechCapability {
  id: string;
  step: string;
  title: string;
  description: string;
  badge: string;
  deliverables: string[];
  techStack: string[];
  metrics: { label: string; value: string };
}

const techCapabilities: TechCapability[] = [
  {
    id: "core-architecture",
    step: "01",
    badge: "Foundation",
    title: "High-Performance Web Applications & Next.js Platforms",
    description:
      "Production-grade architectures engineered for sub-second paint times, multi-tenant modularity, and seamless dynamic page rendering. Built with clean separation of concerns and type-safe infrastructure.",
    deliverables: [
      "Next.js App Router & Server Components optimization",
      "Headless CMS integration & dynamic ISR builds",
      "Edge runtime caching and ultra-low latency routing",
      "WCAG 2.1 AA accessibility & Core Web Vitals score of 95+",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React Server Actions", "Node.js"],
    metrics: { label: "Core Web Vitals", value: "99/100" },
  },
  {
    id: "systems-integration",
    step: "02",
    badge: "Scalability",
    title: "Custom API Systems, Integrations & Cloud Infrastructure",
    description:
      "Enterprise backend systems that unify distributed platforms. We design secure RESTful and GraphQL interfaces, automated database indexing, and fault-tolerant serverless pipelines.",
    deliverables: [
      "Custom REST / GraphQL API gateway engineering",
      "PostgreSQL, Supabase & Redis cache architecture",
      "Automated webhook synchronization and event pipelines",
      "Zero-downtime deployment pipelines with CI/CD automation",
    ],
    techStack: ["PostgreSQL", "Supabase", "Redis", "Docker", "AWS / Cloudflare"],
    metrics: { label: "Target Uptime SLA", value: "99.98%" },
  },
  {
    id: "ai-workflows",
    step: "03",
    badge: "Automation",
    title: "AI Pipeline Automation & Intelligent Agent Workflows",
    description:
      "Operational machine intelligence that eliminates manual operational drag. From automated lead-qualification nodes to internal LLM agent workflows that process mission-critical data in real time.",
    deliverables: [
      "Custom LLM API orchestration & semantic search vectors",
      "Automated multi-step qualification & webhook nodes",
      "CRM & Sheets bi-directional sync pipelines",
      "Continuous data ingestion and auto-tagging infrastructure",
    ],
    techStack: ["OpenAI API", "LangChain", "n8n", "Pinecone", "Python"],
    metrics: { label: "Ops Time Saved", value: "70%+" },
  },
];

// Calculation for staggered sticky stacking offsets
const getTopOffset = (index: number) => {
  const baseRem = 6.5;
  const stepRem = 1.75;
  return `${baseRem + index * stepRem}rem`;
};

export default function TechSolutionsVertical() {
  return (
    <section className="relative overflow-visible bg-white py-24 sm:py-32" id="tech-solutions">
      {/* Background Grid Pattern */}
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
        <div className="flex flex-col items-start justify-between gap-6 border-b border-black/[0.08] pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-neutral-100/80 px-3.5 py-1 text-xs font-semibold text-neutral-800">
              <Code2 className="h-3.5 w-3.5" />
              <span>Technology Vertical</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Engineered Web Systems &amp; Resilient Tech Stacks
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-right">
            Every application is developed with a strict focus on speed, defensive security, clean code architecture, and uncompromised scalability.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative mt-16 space-y-16 pb-12">
          {techCapabilities.map((item, index) => (
            <div
              key={item.id}
              className="sticky rounded-3xl border border-black/[0.1] bg-[#ffffff] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300 lg:p-12"
              style={{
                top: getTopOffset(index),
                zIndex: index + 1,
              }}
            >
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                {/* Left Col: Step Number, Title & Benchmark Metric */}
                <div className="flex flex-col justify-between lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-extrabold tracking-tight text-neutral-400">
                        {item.step}
                      </span>
                      <span className="rounded-full border border-black/[0.08] bg-neutral-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* Benchmark Metric Pill */}
                  <div className="mt-8 flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-neutral-50 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                      <Zap className="h-5 w-5 fill-current text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                        {item.metrics.label}
                      </p>
                      <p className="text-xl font-extrabold text-[#111111]">
                        {item.metrics.value}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Col: Scope Deliverables & Primary Tech Stack */}
                <div className="flex flex-col justify-between border-t border-black/[0.06] pt-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Scope Deliverables
                    </h4>
                    <ul className="mt-5 space-y-3.5">
                      {item.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                          <span className="text-sm font-medium text-neutral-700">
                            {deliverable}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-10 border-t border-black/[0.06] pt-6">
                    <div className="flex items-center gap-2">
                      <Terminal className="h-3.5 w-3.5 text-neutral-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Primary Technologies
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-black/[0.08] bg-neutral-50 px-3 py-1.5 font-mono text-xs font-medium text-neutral-800 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}