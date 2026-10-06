"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, ShieldCheck, Zap, Layers, RefreshCw } from "lucide-react";

interface FaqItem {
  id: string;
  icon: any;
  question: string;
  answer: string;
  badge: string;
}

const faqs: FaqItem[] = [
  {
    id: "timeline",
    icon: Zap,
    badge: "Delivery Velocity",
    question: "Sprint handover and timeline kya hota hai?",
    answer:
      "Hamare development aur performance setups 7 se 14 din ke focused sprints me ship hote hain. Sprint shuru hote hi aapko live staging branch ka link milta hai jahan real-time progress track hoti hai. Handover ke waqt clean documentation, deployment keys, aur zero-friction production release milta hai.",
  },
  {
    id: "ownership",
    icon: ShieldCheck,
    badge: "100% Client Assets",
    question: "Code aur ad accounts ki ownership kiski rahegi?",
    answer:
      "100% Aapki. Hum koi proprietary vendor lock-in create nahi karte. Saara code direct aapke GitHub repo me push hota hai, CAPI data pipelines aapke server par host hoti hain, aur Meta/Google Ad accounts ki billing aur admin rights exclusive aapke paas rehte hain.",
  },
  {
    id: "working-model",
    icon: Layers,
    badge: "Engagement Terms",
    question: "Working model kya hai? (Sprint-based ya monthly retainer)?",
    answer:
      "Dono flexible models available hain: Flat-fee fixed sprints (targeted deliverables jaise web platform launch, funnel overhaul, ya CAPI migration) aur Monthly Growth Retainers (continuous CRO, creative iteration, lead verification, aur paid media scale). Scope aur milestone initial discovery me lock hota hai.",
  },
  {
    id: "support-guarantee",
    icon: RefreshCw,
    badge: "Post-Launch SLA",
    question: "Post-launch testing aur technical support kaise handle hoti hai?",
    answer:
      "Handover ke baad har sprint ke sath complimentary 14 se 30 din ka post-launch SLA support window included hota hai. Isme server performance monitoring, conversion event auditing, aur unexpected edge-case bug fixes direct priority line par resolve hote hain.",
  },
];

export default function PreEngagementFaq() {
  const [openId, setOpenId] = useState<string | null>("timeline");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative overflow-hidden border-t border-black/[0.08] bg-white py-20 sm:py-28" id="pre-faq">
      {/* Background Micro Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-black/[0.08] pb-10 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-neutral-50 px-3.5 py-1 text-xs font-semibold text-neutral-800 shadow-2xs">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Pre-Engagement Clarifications</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Clarity Before You Commit
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-neutral-500 sm:text-right sm:text-sm">
            Everything you need to know about IP ownership, sprint turnarounds, and our modular deployment protocols.
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            const Icon = faq.icon;

            return (
              <div
                key={faq.id}
                className={`group rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-black/[0.2] bg-[#fbfbfb] shadow-md"
                    : "border-black/[0.08] bg-white hover:border-black/20 hover:bg-[#fafafa]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left sm:p-8"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-200 ${
                        isOpen
                          ? "border-black bg-black text-white"
                          : "border-black/[0.06] bg-neutral-100 text-neutral-700 group-hover:bg-neutral-200"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                          {faq.badge}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base font-bold tracking-tight text-[#111111] sm:text-xl">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "border-black bg-black text-white rotate-0"
                        : "border-black/[0.1] bg-white text-neutral-500 group-hover:border-black"
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated Body Container */}
                {isOpen && (
                  <div className="border-t border-black/[0.06] px-6 pb-7 pt-5 sm:px-8 sm:pb-8 sm:pt-6">
                    <div className="max-w-3xl sm:pl-[68px]">
                      <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}