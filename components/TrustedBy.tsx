"use client";

import Marquee from "react-fast-marquee";

const partners = [
  { name: "Proline", fontStyle: "font-black tracking-wider" },
  { name: "Trace", fontStyle: "font-extrabold tracking-tight" },
  { name: "Hitech", fontStyle: "font-semibold tracking-normal" },
  { name: "Flash", fontStyle: "italic font-black tracking-wide" },
  { name: "Basel", fontStyle: "font-bold tracking-tight uppercase" },
  { name: "Product.", fontStyle: "font-mono font-medium" },
  { name: "Vanguard", fontStyle: "font-extrabold uppercase tracking-widest" },
  { name: "NovaTech", fontStyle: "font-bold tracking-tight" },
];

export default function TrustedBy() {
  return (
    <section className="border-y border-black/[0.06] bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Trusted by forward-thinking companies
        </p>

        <Marquee
          gradient={true}
          gradientColor="white"
          gradientWidth={80}
          speed={40}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-14 sm:gap-20 pr-14 sm:pr-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 select-none opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                {/* Clean Logo Symbol */}
                <div className="h-5 w-5 rounded-md bg-[#111111]" />
                <span className={`text-xl sm:text-2xl text-[#111111] ${partner.fontStyle}`}>
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}