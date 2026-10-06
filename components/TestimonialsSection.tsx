import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="border-b border-black/[0.06] bg-white py-20 sm:py-28" id="testimonials">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        
        {/* Header & Rating Overview */}
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            Client Feedback
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
            Trusted by Businesses <br /> Worldwide
          </h2>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold text-[#111111] border border-black/[0.08]">
              G
            </div>
            <span className="text-sm font-semibold text-neutral-800">
              20k+ Reviews
            </span>
            <div className="flex items-center gap-1 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current stroke-none" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#111111]">4.9/5</span>
          </div>
        </div>

        {/* Bento Review Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* 1. Large Visual Highlight Card (Left Column) */}
          <div className="group relative min-h-[460px] overflow-hidden rounded-3xl border border-black/[0.08] p-8 shadow-sm transition-all duration-300 hover:shadow-xl lg:col-span-5 flex flex-col justify-between">
            {/* Background Image & Ambient Dark Gradient */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />

            {/* Top Stars */}
            <div className="relative z-10 flex items-center gap-1 text-[#f59e0b]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current stroke-none" />
              ))}
            </div>

            {/* Testimonial Quote & Author Info */}
            <div className="relative z-10 mt-auto">
              <blockquote className="text-lg font-medium leading-relaxed text-white sm:text-xl">
                &ldquo;Working with this team was a game-changer. Their tech execution speed and strategic marketing precision exceeded all our expectations.&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3.5 border-t border-white/20 pt-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80"
                  alt="Esther"
                  className="h-11 w-11 rounded-full border border-white/40 object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Esther Howard</h4>
                  <p className="text-xs text-neutral-300">Head of Growth, TechFlow</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Middle Column: 2 Stacked Clean Cards */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-4">
            
            {/* Card 1 */}
            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-7 transition-all duration-300 hover:border-black/20 hover:bg-white hover:shadow-md">
              <div>
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current stroke-none" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  &ldquo;The new web platform is lightning fast, scalable, and our user engagement doubled within the first month itself.&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-black/[0.05] pt-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Ronald"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">Ronald Richards</h4>
                  <p className="text-[11px] text-neutral-500">Founder, Barone LLC</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-7 transition-all duration-300 hover:border-black/20 hover:bg-white hover:shadow-md">
              <div>
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current stroke-none" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  &ldquo;Clear communication, no unnecessary delays, and top-tier code architecture. They truly function like an internal core team.&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-black/[0.05] pt-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Wendy"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">Wendy Watson</h4>
                  <p className="text-[11px] text-neutral-500">Director, Nexus Digital</p>
                </div>
              </div>
            </div>

          </div>

          {/* 3. Right Column: Review Card + Dark Highlight CTA Card */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-3">
            
            {/* White Review Card */}
            <div className="flex flex-1 flex-col justify-between rounded-3xl border border-black/[0.07] bg-[#f9fafb] p-7 transition-all duration-300 hover:border-black/20 hover:bg-white hover:shadow-md">
              <div>
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current stroke-none" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  &ldquo;A clean UI/UX transition that genuinely improved our product credibility in the enterprise market.&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-black/[0.05] pt-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Robert"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#111111]">Robert Fox</h4>
                  <p className="text-[11px] text-neutral-500">COO, Binford Media</p>
                </div>
              </div>
            </div>

            {/* Dark Accent CTA Card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#111111] p-7 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1">
              {/* Subtle Ambient Radial Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

              <div>
                <div className="flex items-center gap-1 text-[#f59e0b]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current stroke-none" />
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Join 250+ Ambitious Brands
                </p>
                <h3 className="mt-2 text-xl font-extrabold leading-snug">
                  Scale faster with adhabits expertise.
                </h3>
              </div>

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex w-full items-center justify-between rounded-xl bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#111111]"
                >
                  <span>Explore Success Stories</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}