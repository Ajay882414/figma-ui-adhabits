import { DollarSign, ShieldCheck, CheckCircle2, RefreshCw } from "lucide-react";

interface StatItem {
  id: string;
  metric: string;
  label: string;
  description: string;
  icon: any;
  trend: string;
}

const stats: StatItem[] = [
  {
    id: "revenue",
    metric: "$14.2M+",
    label: "Client Revenue Generated",
    description: "Attributed directly to high-converting funnels, Next.js web platforms, and data-driven ad media.",
    icon: DollarSign,
    trend: "+184% YoY Lift",
  },
  {
    id: "uptime",
    metric: "99.98%",
    label: "Active Production Uptime",
    description: "Battle-tested cloud infrastructure deployed on global edge CDNs with zero critical downtime.",
    icon: ShieldCheck,
    trend: "SLA Guaranteed",
  },
  {
    id: "sprints",
    metric: "420+",
    label: "Completed Sprints & Funnels",
    description: "Delivered web applications, automated lead pipelines, and dynamic ad variation rollouts.",
    icon: CheckCircle2,
    trend: "100% On-time Handover",
  },
  {
    id: "retention",
    metric: "94.6%",
    label: "Repeat Client Retention",
    description: "Long-term growth partners scaling alongside our modular engineering and media buying teams.",
    icon: RefreshCw,
    trend: "High-LTV Partners",
  },
];

export default function StatsBento() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28" id="stats">
      {/* Background Micro Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            Proven Performance
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Numbers Backed by Code &amp; Conversions
          </h2>
        </div>

        {/* 4-Block High-Density Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-[#fbfbfb] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:shadow-xl sm:p-7"
              >
                <div>
                  {/* Top Bar with Icon and Trend Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/[0.06] bg-white text-black shadow-xs transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-black/[0.06] bg-white px-2.5 py-1 text-[11px] font-bold text-neutral-600 shadow-xs">
                      {item.trend}
                    </span>
                  </div>

                  {/* Main Metric */}
                  <div className="mt-8">
                    <p className="font-mono text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
                      {item.metric}
                    </p>
                    <h3 className="mt-2 text-sm font-bold text-neutral-800">
                      {item.label}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 border-t border-black/[0.06] pt-4">
                  <p className="text-xs leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}