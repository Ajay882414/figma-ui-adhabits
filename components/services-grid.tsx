import {
  Code2,
  Cpu,
  Compass,
  Megaphone,
  LayoutTemplate,
  Bot,
  Layers,
  Clapperboard,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  title: string;
  category: "Engineering" | "Marketing" | "Intelligence";
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: ServiceItem[] = [
  {
    title: "Custom Web & App Development",
    category: "Engineering",
    description:
      "Modern, scalable web applications built with Next.js, TypeScript, and edge runtime.",
    icon: Code2,
  },
  {
    title: "Scaling Cloud Architecture",
    category: "Engineering",
    description:
      "Enterprise infrastructure designed to handle traffic spikes, caching, and resilient databases.",
    icon: Cpu,
  },
  {
    title: "Digital Brand Strategy & Positioning",
    category: "Marketing",
    description:
      "Data-driven strategic positioning to differentiate your brand in crowded competitive markets.",
    icon: Compass,
  },
  {
    title: "Multi-Platform Campaign Execution",
    category: "Marketing",
    description:
      "Full-funnel campaign orchestration across Meta, Google, and enterprise programmatic networks.",
    icon: Megaphone,
  },
  {
    title: "UI/UX Design & Product Prototyping",
    category: "Engineering",
    description:
      "Pixel-perfect interface architectures focused on conversion-centered, accessible design systems.",
    icon: LayoutTemplate,
  },
  {
    title: "AI Integration & Workflow Automation",
    category: "Intelligence",
    description:
      "Automating operational bottlenecks with customized neural models, APIs, and LLM pipelines.",
    icon: Bot,
  },
  {
    title: "Integrated Marketing Systems",
    category: "Marketing",
    description:
      "End-to-end digital marketing infrastructure seamlessly connecting data, creative copy, and media.",
    icon: Layers,
  },
  {
    title: "Creative Production & Motion Graphics",
    category: "Marketing",
    description:
      "High-velocity visual assets engineered for retention, storytelling, and cross-channel performance.",
    icon: Clapperboard,
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="relative overflow-hidden border-t border-[#a4d5d6]/50 bg-gradient-to-b from-[#f4f9f8] via-white to-[#f4f9f8] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      aria-labelledby="solutions-title"
      id="solutions"
    >
      {/* Background Soft Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#23899b]/10 blur-3xl" />

      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#23899b]/30 bg-[#e9f5f4] px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#23899b]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#073f5d]">
              Service Capabilities & Solutions
            </span>
          </div>

          <h2
            className="mt-5 text-[32px] font-extrabold leading-[1.15] text-[#073f5d] sm:text-[42px] lg:text-[48px]"
            id="solutions-title"
          >
            Engineering excellence meets strategic market execution.
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#476a76] sm:text-base">
            From modern web architecture to data-backed multi-channel campaigns,
            we engineer solutions built for speed, conversion, and long-term brand equity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#cbe1e0] bg-white p-6 shadow-[0_4px_20px_rgba(7,59,87,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#23899b] hover:shadow-[0_16px_32px_rgba(7,59,87,0.12)]"
              >
                {/* Top Accent Gradient Line on Hover */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#23899b] via-[#073f5d] to-[#23899b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Category Pill Tag & Icon Header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f5f4] text-[#073f5d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#073f5d] group-hover:text-[#28d7d9] group-hover:shadow-[0_0_16px_rgba(35,137,155,0.35)]">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>

                    <span
                      className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                        service.category === "Engineering"
                          ? "bg-[#e2f3f4] text-[#075276]"
                          : service.category === "Intelligence"
                          ? "bg-[#e6f7ec] text-[#0d6832]"
                          : "bg-[#f5eefc] text-[#552583]"
                      }`}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-bold leading-snug text-[#073f5d] transition-colors duration-200 group-hover:text-[#23899b]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[13px] leading-relaxed text-[#476a76]">
                    {service.description}
                  </p>
                </div>

                {/* Action Link / Button */}
                <div className="mt-6 border-t border-[#edf4f4] pt-4">
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-between rounded-xl bg-[#f0f8f8] px-4 py-2.5 text-[13px] font-semibold text-[#073f5d] transition-all duration-200 group-hover:bg-[#073f5d] group-hover:text-white group-hover:shadow-md"
                  >
                    <span>Explore Capabilities</span>
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}