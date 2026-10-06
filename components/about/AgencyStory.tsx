import { Terminal, Target, Zap, ShieldCheck, ArrowUpRight, Cpu } from "lucide-react";

export default function AgencyStory() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#fbfbfb] py-24 sm:py-32" id="story">
      {/* Background Micro Grid */}
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
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            Philosophy &amp; Standards
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Built to Eliminate the Gap Between Code &amp; Conversion.
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* Bento Card 1: Why We Exist (Large Left Card - 7 Cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-8 shadow-sm transition-all duration-300 hover:border-black/20 hover:shadow-xl md:col-span-7 lg:p-10">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-black/[0.08] bg-neutral-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-700">
                  Why We Exist
                </span>
                <span className="font-mono text-xs font-medium text-neutral-400">
                  01 // ORIGIN
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                The Bridge Between Resilient Tech &amp; Performance Media
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                Traditional software houses don&apos;t understand cost-per-acquisition, and conventional ad agencies can&apos;t inspect a database index or build an ultra-fast web engine. We exist to unite both disciplines under one roof: writing type-safe code that converts direct traffic into recurring enterprise value.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-black/[0.06] pt-6">
              <div>
                <p className="font-mono text-2xl font-extrabold text-[#111111]">100%</p>
                <p className="mt-1 text-xs text-neutral-500">In-house tech &amp; media synergy</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-extrabold text-[#111111]">0%</p>
                <p className="mt-1 text-xs text-neutral-500">Outsourced junior handoffs</p>
              </div>
            </div>
          </div>

          {/* Bento Card 2: The Standard (Dark Highlight Card - 5 Cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#111111] p-8 text-white shadow-lg transition-all duration-300 md:col-span-5 lg:p-10">
            {/* Ambient Glow */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  The Standard
                </span>
                <span className="font-mono text-xs text-neutral-400">
                  02 // EXECUTION
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                No Bloated Fluff. <br />
                Direct Production Work.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                We don&apos;t produce 60-page decks that collect dust. Every sprint translates directly into live Next.js code, audited conversion funnels, and verified ad campaigns designed for measurable ROI.
              </p>
            </div>

            <div className="relative z-10 mt-10 flex items-center gap-3 border-t border-white/10 pt-6">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span className="text-xs font-semibold text-neutral-300">
                Direct engineer-to-client communication
              </span>
            </div>
          </div>

          {/* Bento Card 3: Pillar 1 - Engineering Speed (4 Cols) */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-8 shadow-sm transition-all duration-300 hover:border-black/20 hover:shadow-lg md:col-span-4">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-black transition-colors group-hover:bg-black group-hover:text-white">
                <Zap className="h-5 w-5" />
              </div>
              <h4 className="mt-6 text-lg font-bold text-[#111111]">
                Engineering Speed
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Rapid prototype-to-production cycles powered by Next.js App Router, edge runtimes, and atomic component architecture.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 font-mono text-[11px] font-semibold text-neutral-400">
              <span>SLA: Sub-second paint</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Bento Card 4: Pillar 2 - Data Precision (4 Cols) */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-8 shadow-sm transition-all duration-300 hover:border-black/20 hover:shadow-lg md:col-span-4">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-black transition-colors group-hover:bg-black group-hover:text-white">
                <Target className="h-5 w-5" />
              </div>
              <h4 className="mt-6 text-lg font-bold text-[#111111]">
                Data &amp; Attribution Precision
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Server-side Meta Conversions API (CAPI), multi-touch attribution, and real-time dashboard analytics that track exact CPA.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 font-mono text-[11px] font-semibold text-neutral-400">
              <span>0% tracking blind spots</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Bento Card 5: Pillar 3 - Creative Retention (4 Cols) */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-8 shadow-sm transition-all duration-300 hover:border-black/20 hover:shadow-lg md:col-span-4">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-black transition-colors group-hover:bg-black group-hover:text-white">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="mt-6 text-lg font-bold text-[#111111]">
                Creative Retention
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                High-converting short-form scripts, rapid hook variations, and psychological framing engineered to stop the infinite scroll.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 font-mono text-[11px] font-semibold text-neutral-400">
              <span>Avg. 60%+ 3s hook rate</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}