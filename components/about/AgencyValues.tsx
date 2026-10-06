import { Zap, Eye, Terminal, Layers } from "lucide-react";

interface ValueCard {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  principles: string[];
}

const values: ValueCard[] = [
  {
    id: "speed",
    step: "01",
    title: "Speed as a Production Feature",
    tagline: "Rapid code delivery beats endless corporate meetings.",
    description:
      "We treat development velocity as a defensive moat. By pairing Next.js App Router with atomic UI components and streamlined communication, we ship production-ready assets in days instead of months.",
    icon: Zap,
    principles: [
      "No 40-page theoretical presentation decks",
      "Immediate staging deployments for live verification",
      "Continuous asynchronous sprint cycles",
    ],
  },
  {
    id: "transparency",
    step: "02",
    title: "Radical Operational Transparency",
    tagline: "Live dashboards and zero hidden metrics.",
    description:
      "Every ad dollar spent, conversion event triggered, and server deployment logged is visible in real-time. No vanity metrics or filtered reports—only clear cost-per-acquisition and clean source repositories.",
    icon: Eye,
    principles: [
      "Direct engineer-to-founder Slack communication",
      "Shared real-time Looker Studio conversion boards",
      "100% full intellectual property and code ownership",
    ],
  },
  {
    id: "engineering",
    step: "03",
    title: "Engineering-First Marketing",
    tagline: "Campaigns driven by technical data pipelines.",
    description:
      "Modern marketing cannot rely on guesswork. We build technical foundations—Server-Side Tracking, CAPI integrations, and behavioral data funnels—ensuring creative campaigns scale with algorithmic precision.",
    icon: Terminal,
    principles: [
      "Zero-data-loss CAPI server-side routing",
      "Psychology-tested video scripts with verified hooks",
      "Systematic conversion rate optimization testing",
    ],
  },
];

// Calculation for staggered sticky stacking offsets
const getTopOffset = (index: number) => {
  const baseRem = 6.5;
  const stepRem = 1.75;
  return `${baseRem + index * stepRem}rem`;
};

export default function AgencyValues() {
  return (
    <section className="relative overflow-visible border-t border-black/[0.08] bg-white py-24 sm:py-32" id="values">
      {/* Background Micro Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-black/[0.08] pb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-neutral-100/80 px-3.5 py-1 text-xs font-semibold text-neutral-800">
              <Layers className="h-3.5 w-3.5" />
              <span>Core Operational Values</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              How We Work &amp; Execute
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-right">
            Non-negotiable operational principles engineered to keep projects efficient, predictable, and aligned with client growth targets.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative mt-16 space-y-16 pb-12">
          {values.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="sticky rounded-3xl border border-black/[0.1] bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition-all duration-300 lg:p-12"
                style={{
                  top: getTopOffset(index),
                  zIndex: index + 1,
                }}
              >
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                  {/* Left Column: Number, Title & Tagline */}
                  <div className="flex flex-col justify-between lg:col-span-6">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-3xl font-extrabold tracking-tight text-neutral-400">
                          {card.step}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-neutral-800">
                        {card.tagline}
                      </p>
                      <p className="mt-4 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Execution Principles */}
                  <div className="flex flex-col justify-center border-t border-black/[0.06] pt-8 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Standard Guidelines
                    </p>
                    <ul className="mt-6 space-y-4">
                      {card.principles.map((principle, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 h-2 w-2 rounded-full bg-black shrink-0" />
                          <span className="text-xs font-medium text-neutral-700 sm:text-sm">
                            {principle}
                          </span>
                        </li>
                      ))}
                    </ul>
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