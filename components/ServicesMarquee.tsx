"use client";

import Marquee from "react-fast-marquee";

// Mallattoo urjii calaqqisaa (Four-pointed star icon)
function SparkleStar({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

const servicesList = [
  "UI/UX Design",
  "Website Design",
  "Mobile Apps",
  "Digital Marketing",
  "Brand Identity",
  "Custom Development",
  "AI & Automation",
  "Motion Graphics",
];

export default function ServicesMarquee() {
  return (
    <section className="w-full overflow-hidden bg-[#0c0c0c] py-4 sm:py-5 border-y border-neutral-800">
      <Marquee
        gradient={false}
        speed={45}
        pauseOnHover={true}
      >
        <div className="flex items-center">
          {servicesList.map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-6 sm:mx-8 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white select-none whitespace-nowrap">
                {service}
              </span>
              <span className="text-white flex items-center justify-center">
                <SparkleStar className="h-4 w-4 sm:h-5 sm:w-5 fill-white text-white" />
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}