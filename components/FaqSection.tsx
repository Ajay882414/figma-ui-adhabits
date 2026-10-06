"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How long does a typical project take to launch?",
    answer:
      "Most web application and branding projects take between 2 to 6 weeks, depending on project complexity, integrations, and deliverable scope.",
  },
  {
    question: "Do you handle both tech development and marketing together?",
    answer:
      "Yes, we build end-to-end ecosystems. Our team designs and codes high-performance web platforms and pairs them with full-funnel media and performance marketing campaigns.",
  },
  {
    question: "Can I upgrade or customize my service package later?",
    answer:
      "Absolutely. Our architecture and engagement models are completely modular, so you can easily scale services as your business demands grow.",
  },
  {
    question: "Will I have complete ownership of the source code and assets?",
    answer:
      "Yes, once the project is completed and handed over, you retain 100% intellectual property rights, code repository access, and creative files.",
  },
  {
    question: "Do you offer post-launch maintenance and support?",
    answer:
      "Yes, we provide ongoing maintenance, performance monitoring, edge deployment updates, and iterative marketing optimization support.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-b border-black/[0.06] bg-white py-20 sm:py-28" id="faq">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Title, Subtitle, and Ambient Visual Card */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
              Frequently asked <br /> questions
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              We&apos;ve answered some of the most common questions below. Still
              curious? Our support team is just a message away always happy to help.
            </p>

            {/* Visual Team/Discussion Image Card */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-black/[0.06] bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Adhabits Discussion"
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Accordion Cards */}
          <div className="space-y-4 lg:col-span-7">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-black/[0.06] bg-[#f9fafb] transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-neutral-100/60"
                  >
                    <span className="text-base font-bold text-[#111111] sm:text-lg">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-neutral-500">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}