import {
  Megaphone,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";

interface MarketingCapability {
  id: string;
  step: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  channels: string[];
  metrics: { label: string; value: string };
}

const marketingCapabilities: MarketingCapability[] = [
  {
    id: "performance-acquisition",
    step: "01",
    badge: "Direct Acquisition",
    title: "Paid Media Execution & Automated Lead Generation Systems",
    description:
      "Data-backed campaign architecture designed to capture high-intent buyers, eliminate lead friction, and optimize cost-per-qualified-acquisition across primary media ecosystems.",
    deliverables: [
      "Custom multi-step qualification landing funnels",
      "Meta Ads & multi-channel media buying management",
      "Pixel, CAPI & offline conversion tracking integration",
      "Automated lead filtration pipeline straight to sales CRM",
    ],
    channels: ["Meta Ads", "Google Search", "Instagram", "YouTube", "Direct Funnels"],
    metrics: { label: "Avg. Lead Conversion Boost", value: "3.4x" },
  },
  {
    id: "creative-production",
    step: "02",
    badge: "High-Retention Assets",
    title: "Short-Form Video Scripting & High-Converting Creative Engines",
    description:
      "Strategic visual content engineered to capture attention within the first two seconds. We write, structure, and direct scripts designed specifically for viral short-form retention and clear commercial action.",
    deliverables: [
      "Psychology-driven hook scripting and narrative structuring",
      "Ad variation testing for creative fatigue prevention",
      "High-tempo editing direction for Reels, Shorts & TikTok",
      "UGC and founder-led video asset roadmaps",
    ],
    channels: ["Reels", "Shorts", "CapCut Pro", "Figma", "Motion Graphics"],
    metrics: { label: "Average 3s Hook Retention", value: "62%+" },
  },
  {
    id: "conversion-analytics",
    step: "03",
    badge: "Attribution & Growth",
    title: "Conversion Rate Optimization & Funnel Intelligence",
    description:
      "Turning existing traffic into measurable revenue. We deploy systematic heatmapping, user journey auditing, and split-testing engines to systematically remove funnel drop-offs.",
    deliverables: [
      "Full-funnel drop-off analytics & heatmapping audits",
      "A/B split testing on messaging, forms, and hero structures",
      "Offer positioning and value proposition restructuring",
      "Custom real-time Google Looker Studio executive reporting",
    ],
    channels: ["Looker Studio", "Google Analytics 4", "Hotjar", "PostHog"],
    metrics: { label: "Funnel Drop-Off Reduction", value: "-45%" },
  },
];

// Calculation for staggered sticky stacking offsets
const getTopOffset = (index: number) => {
  const baseRem = 6.5;
  const stepRem = 1.75;
  return `${baseRem + index * stepRem}rem`;
};

export default function MarketingSolutionsVertical() {
  return (
    <section className="relative overflow-visible border-t border-black/[0.08] bg-[#f7f7f8] py-24 sm:py-32" id="marketing-solutions">
      {/* Background Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-3.5 py-1 text-xs font-semibold text-neutral-800 shadow-sm">
              <Megaphone className="h-3.5 w-3.5" />
              <span>Marketing Vertical</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Performance Marketing &amp; Scalable Lead Infrastructure
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 lg:text-right">
            Predictable client acquisition engineered through hyper-targeted paid media, short-form viral scripting, and rigorous conversion optimization.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative mt-16 space-y-16 pb-12">
          {marketingCapabilities.map((item, index) => (
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
                      <TrendingUp className="h-5 w-5 text-white" />
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

                {/* Right Col: Scope Deliverables & Distribution Channels */}
                <div className="flex flex-col justify-between border-t border-black/[0.06] pt-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Strategy &amp; Execution Deliverables
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

                  {/* Channels & Platforms */}
                  <div className="mt-10 border-t border-black/[0.06] pt-6">
                    <div className="flex items-center gap-2">
                      <Target className="h-3.5 w-3.5 text-neutral-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Ecosystem &amp; Distribution Platforms
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.channels.map((channel) => (
                        <span
                          key={channel}
                          className="rounded-lg border border-black/[0.08] bg-neutral-50 px-3 py-1.5 font-mono text-xs font-medium text-neutral-800 shadow-sm"
                        >
                          {channel}
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