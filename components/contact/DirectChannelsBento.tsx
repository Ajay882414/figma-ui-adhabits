"use client";

import Link from "next/link";
import { 
  MessageSquare, 
  MapPin, 
  Calendar, 
  ArrowUpRight, 
  Clock, 
  PhoneCall, 
  CheckCircle2 
} from "lucide-react";

export default function DirectChannelsBento() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-[#fcfcfc] py-20 sm:py-28" id="channels">
      {/* Background Micro-Grid */}
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
            Direct Access
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Skip the Bureaucracy. Connect Direct.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Pick the communication channel that fits your workflow. Every channel connects you directly to our core engineering and growth team.
          </p>
        </div>

        {/* 3-Box Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          
          {/* Card 1: Instant WhatsApp & Direct Line (4 Cols) */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/25 hover:shadow-xl md:col-span-4 lg:p-8">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-black transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Priority Line
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
                Instant Chat &amp; Call
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Need quick alignment on scope, rates, or urgent campaign turnarounds? Jump directly on a WhatsApp chat.
              </p>

              <div className="mt-6 space-y-2.5 border-t border-black/[0.06] pt-5">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Immediate brief reviews</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Audio brief exchange welcome</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#111111] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-black active:scale-95"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 rounded-xl border border-black/[0.08] bg-neutral-50 px-4 py-2.5 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 active:scale-95"
              >
                <PhoneCall className="h-3.5 w-3.5" />
                <span>Call</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Official Studio & Operations Hub (4 Cols) */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/25 hover:shadow-xl md:col-span-4 lg:p-8">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-black transition-colors duration-200 group-hover:bg-black group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                
                {/* Active Live Status Pill */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Active Now
                  </span>
                </div>
              </div>

              <h3 className="mt-7 text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
                Studio &amp; Hub
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Jaipur, Rajasthan, India. Operating across global distributed sprints spanning US, UK, and UAE client schedules.
              </p>

              {/* Time Zone Strip */}
              <div className="mt-6 rounded-2xl border border-black/[0.06] bg-neutral-50 p-3.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-medium text-neutral-600">
                    <Clock className="h-3.5 w-3.5 text-neutral-400" />
                    <span>Timezone:</span>
                  </div>
                  <span className="font-mono font-bold text-neutral-900">
                    IST (UTC+5:30)
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="font-medium text-neutral-600">Core Hours:</span>
                  <span className="font-mono text-neutral-700">
                    10:00 AM – 8:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-black/[0.06] pt-4">
              <p className="font-mono text-[11px] text-neutral-400">
                In-person technical architectural reviews available on appointment.
              </p>
            </div>
          </div>

          {/* Card 3: Discovery Sprint Booking (4 Cols - Highlighted Dark Card) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#111111] p-7 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl md:col-span-4 lg:p-8">
            {/* Ambient Background Light Spot */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-sm transition-colors duration-200 group-hover:bg-white group-hover:text-black">
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                  1:1 Session
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold tracking-tight text-white sm:text-2xl">
                15-Min Discovery
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400 sm:text-sm">
                Reserve an engineering sync to map stack viability, budget thresholds, or lead infrastructure design.
              </p>

              <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Screen-share &amp; architecture review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Immediate sprint timeline estimate</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8">
              <Link
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-black shadow-sm transition-all hover:bg-neutral-100 active:scale-95"
              >
                <span>Select Time Slot</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}