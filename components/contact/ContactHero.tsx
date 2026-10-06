import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-grid-pattern pt-20 pb-16 sm:pt-28 sm:pb-24">
      {/* Top Ambient White Gradient Fade */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-white/80 to-white" />

      <div className="relative mx-auto max-w-[1240px] px-6 text-center sm:px-8">
        {/* Modern Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/90 px-4 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-800 sm:text-xs">
            Direct Founder Response • 120 Mins SLA
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-[#111111] sm:text-6xl sm:leading-[1.12] lg:text-7xl">
          Initiate a Sprint. <br className="hidden sm:inline" />
          Build What Scales.
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Whether you need type-safe Next.js web systems or performance-driven acquisition funnels, share your project requirements for an immediate technical evaluation.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact-form"
            className="flex items-center gap-2 rounded-xl bg-[#111111] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(0,0,0,0.18)] transition-all hover:bg-black hover:shadow-[0_8px_25px_rgba(0,0,0,0.25)] active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="#channels"
            className="rounded-xl border border-black/[0.08] bg-neutral-100/80 px-7 py-3.5 text-sm font-semibold text-neutral-800 transition-all hover:bg-neutral-200/80 active:scale-[0.98]"
          >
            Direct Channels
          </Link>
        </div>
      </div>
    </section>
  );
}