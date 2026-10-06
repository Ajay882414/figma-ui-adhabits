interface ProcessStep {
  step: string;
  title: string;
  description: string;
  position: "top" | "bottom";
}

const steps: ProcessStep[] = [
  {
    step: "01",
    title: "Research & Strategy",
    description: "Understanding your goals, audience, and market landscape.",
    position: "bottom",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description: "Wireframes, UI systems, and interactive product prototypes.",
    position: "top",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Clean coding, modern web builds, and performance optimization.",
    position: "bottom",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description: "Smooth deployment, analytics setup, and continuous improvement.",
    position: "top",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32" id="process">
      {/* Background Image with Dark Vignette Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      {/* Dark Opacity Mask */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/85 via-black/80 to-black/75" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-300">
            Our Process
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A Simple Yet Powerful <br /> Workflow
          </h2>
        </div>

        {/* Process Timeline - Desktop (Alternating Top/Bottom Layout) */}
        <div className="relative mt-24 hidden lg:block">
          {/* Horizontal Connecting Center Line */}
          <div className="absolute left-8 right-8 top-1/2 h-[2px] -translate-y-1/2 bg-white/30" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Top Box for Even/Top Position Steps */}
                <div className="flex h-36 flex-col justify-end pb-8 text-left w-full pr-4">
                  {item.position === "top" && (
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-neutral-300">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Circular Number Badge */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40 bg-white font-bold text-black shadow-lg transition-transform duration-300 hover:scale-110">
                  <span className="text-base tracking-tight">{item.step}</span>
                </div>

                {/* Bottom Box for Odd/Bottom Position Steps */}
                <div className="flex h-36 flex-col justify-start pt-8 text-left w-full pr-4">
                  {item.position === "bottom" && (
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-neutral-300">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline - Mobile & Tablet (Clean Vertical Flow) */}
        <div className="relative mt-14 space-y-8 border-l border-white/25 pl-6 lg:hidden">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Left Pin Marker */}
              <div className="absolute -left-[37px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                {item.step}
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}