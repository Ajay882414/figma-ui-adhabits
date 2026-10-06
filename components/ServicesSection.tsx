import Link from "next/link";
import {
  Palette,
  Code2,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  Megaphone,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
}

const services: ServiceCard[] = [
  // 1. Featured Big Card (Top Left)
  {
    title: "UI/UX & Product Design",
    description:
      "Intuitive, engaging, and conversion-focused interfaces crafted for high-growth web and mobile platforms.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
  },
  // 2. Top Right 1
  {
    title: "Custom Web & App Development",
    description:
      "High-performance, scalable web architectures and robust applications built using Next.js & modern tools.",
    icon: Code2,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
  },
  // 3. Top Right 2
  {
    title: "AI Integration & Automation",
    description:
      "Smart machine intelligence pipelines, custom API workflows, and automated operational efficiency.",
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
  },
  // 4. Bottom 1
  {
    title: "Branding & Strategic Identity",
    description:
      "Distinctive market positioning, brand identity guidelines, and assets that command immediate authority.",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1000&q=80",
  },
  // 5. Bottom 2
  {
    title: "Performance Media Execution",
    description:
      "Data-backed ad strategy and multi-platform campaign management tailored for sustainable ROAS.",
    icon: LayoutDashboard,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  // 6. Bottom 3
  {
    title: "Creative Production & Video Assets",
    description:
      "High-impact visual narratives, motion graphics, and content strategies designed to capture audience focus.",
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function ServicesSection() {
  const featured = services[0];
  const sideCards = [services[1], services[2]];
  const bottomCards = [services[3], services[4], services[5]];

  return (
    <section className="bg-white py-20 sm:py-28" id="services">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            Our Services
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Solutions Designed for <br /> Your Success
          </h2>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-14 space-y-6">
          {/* Top Row: Big Featured Card + 2 Stacked Cards */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            
            {/* 1. Large Featured Card (Hover reveals image background) */}
            <div className="group relative flex min-h-[460px] flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-8 transition-all duration-300 hover:shadow-xl lg:col-span-6">
              {/* Background Image on Hover */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              {/* Dark Overlay so text is readable */}
              <div className="pointer-events-none absolute inset-0 z-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-md">
                  <featured.icon className="h-6 w-6 stroke-[1.8]" />
                </div>
                <h3 className="mt-8 text-2xl font-bold tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-white">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-200">
                  {featured.description}
                </p>
              </div>

              <div className="relative z-10 mt-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] transition-colors duration-300 group-hover:text-white"
                >
                  <span>Get Started</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* 2 & 3. Side Column: 2 Cards */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-6">
              {sideCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-8 transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Background Image on Hover */}
                    <div
                      className="absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                    <div className="pointer-events-none absolute inset-0 z-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-md">
                        <Icon className="h-6 w-6 stroke-[1.8]" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-200">
                        {card.description}
                      </p>
                    </div>

                    <div className="relative z-10 mt-8">
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] transition-colors duration-300 group-hover:text-white"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Row: 3 Equal Width Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {bottomCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-8 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Background Image on Hover */}
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="pointer-events-none absolute inset-0 z-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-sm transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:backdrop-blur-md">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-white">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-neutral-200">
                      {card.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] transition-colors duration-300 group-hover:text-white"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}