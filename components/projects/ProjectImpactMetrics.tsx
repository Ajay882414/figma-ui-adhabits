import { DollarSign, Zap, Users, TrendingUp } from "lucide-react";

interface ImpactMetric {
  id: string;
  metric: string;
  label: string;
  subtext: string;
  icon: any;
  trend: string;
}

const impactMetrics: ImpactMetric[] = [
  {
    id: "revenue",
    metric: "$18.6M+",
    label: "Total Attributed Client Revenue",
    subtext: "Tracked directly through CRM integrations & server-side conversion APIs.",
    icon: DollarSign,
    trend: "+210% Net Lift",
  },
  {
    id: "leads",
    metric: "140K+",
    label: "Aggregate Qualified Leads",
    subtext: "Filtered via automated intake logic & high-intent funnel funnels.",
    icon: Users,
    trend: "Zero Bot Submissions",
  },
  {
    id: "latency",
    metric: "0.48s",
    label: "Sub-Second Latency SLA Achieved",
    subtext: "Global edge CDN distributions with perfect 99+ Core Web Vitals score.",
    icon: Zap,
    trend: "LCP Benchmark",
  },
  {
    id: "roas",
    metric: "4.15x",
    label: "Average Campaign ROAS",
    subtext: "Targeted across performance Meta, Google Search & viral video hooks.",
    icon: TrendingUp,
    trend: "60-Day Rolling Avg",
  },
];

export default function ProjectImpactMetrics() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#0c0c0c] py-20 sm:py-24 text-white" id="impact-metrics">
      {/* Background Architectural Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Top Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Compact Strip Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Cumulative Growth Impact
            </span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Performance by the Numbers
            </h2>
          </div>
          <p className="max-w-sm text-xs leading-relaxed text-neutral-400 sm:text-right sm:text-sm">
            Continuous real-time attribution data pulled from client production clusters and verified media ad accounts.
          </p>
        </div>

        {/* 4-Column High-Density Stats Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-2xl sm:p-7"
              >
                <div>
                  {/* Icon & Trend Pill */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-colors duration-200 group-hover:bg-white group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 font-mono text-[10px] font-bold text-neutral-300">
                      {item.trend}
                    </span>
                  </div>

                  {/* Main Metric Value */}
                  <div className="mt-8">
                    <p className="font-mono text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {item.metric}
                    </p>
                    <h3 className="mt-2 text-sm font-bold text-neutral-200">
                      {item.label}
                    </h3>
                  </div>
                </div>

                {/* Subtext */}
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs leading-relaxed text-neutral-400">
                    {item.subtext}
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