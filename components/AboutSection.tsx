import { Star } from "lucide-react";

const stats = [
  { value: "250+", label: "Project Completed" },
  { value: "25+", label: "Team Member" },
  { value: "01+", label: "Years Experience" },
];

export default function AboutSection() {
  return (
    <section className="border-b border-black/[0.06] bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Stats & Reviews */}
          <div className="lg:col-span-5">
            {/* Tagline */}
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              About Us
            </p>

            {/* Avatar Group & Reviews */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Avatar 1"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Avatar 2"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                  alt="Avatar 3"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Avatar 4"
                />
              </div>

              <span className="text-sm font-medium text-neutral-700">
                120k+ Worldwide Reviews
              </span>
            </div>

            {/* Star Rating */}
            <div className="mt-3 flex items-center gap-1 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current stroke-none" />
              ))}
            </div>

            {/* Counters Row */}
            <div className="mt-10 grid grid-cols-3 divide-x divide-neutral-200">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={index === 0 ? "pr-4" : index === 1 ? "px-4" : "pl-4"}
                >
                  <p className="text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Statement Paragraph */}
                    <div className="lg:col-span-7 border-t border-neutral-100 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <h2 className="text-2xl font-normal leading-[1.4] text-[#111111] sm:text-3xl lg:text-[34px]">
              <span className="font-semibold text-black">
                Adhabits is a premier tech and marketing agency
              </span>{" "}
              dedicated to helping modern brands scale through precision and innovation.{" "}
              <span className="font-semibold text-black">
                We bridge the gap between design and technology,
              </span>{" "}
              <span className="text-neutral-500">
                delivering bespoke solutions that drive real business growth and digital dominance.
              </span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}