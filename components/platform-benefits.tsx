const benefits = [
  {
    title: "Your data stays yours",
    description:
      "Bring your customer signals together in one secure place. Your audience and insights stay under your control.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 7.5h6l2 2h8v9H4v-11Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M4 7.5V5h6l2 2.5" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  {
    title: "AI that learns your brand",
    description:
      "Turn audience behavior into sharper campaigns, with intelligence guided by your goals and brand voice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Every decision, measurable",
    description:
      "See what is working across channels with clear attribution, live performance signals, and practical next steps.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 19V5m0 14h16M8 15v-3m4 3V8m4 7V5m4 10v-6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const chartBars = [34, 48, 40, 63, 54, 77, 69, 92, 82, 100, 88, 116];

export default function PlatformBenefits() {
  return (
    <section
      className="border-t border-[#a4d5d6]/60 bg-[#f4f9f8]/95 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="platform-benefits-title"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[780px] text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#23899b] sm:text-sm">
            Built for modern growth teams
          </p>
          <h2
            className="text-[30px] font-bold leading-tight text-[#073f5d] sm:text-[38px] lg:text-[44px]"
            id="platform-benefits-title"
          >
            Your brand leads. AI does the heavy lifting.
          </h2>
          <p className="mx-auto mt-4 max-w-[690px] text-[15px] leading-7 text-[#476a76] sm:text-base">
            Bring technology, marketing, and intelligence together to build
            stronger customer relationships and make every campaign count.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-8 sm:space-y-9">
            {benefits.map((benefit) => (
              <article className="flex gap-4 sm:gap-5" key={benefit.title}>
                <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-[#a4d5d6] bg-white text-[#16869a] shadow-sm sm:size-12">
                  <span className="size-6">{benefit.icon}</span>
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug text-[#073f5d] sm:text-xl">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 max-w-[440px] text-sm leading-6 text-[#476a76] sm:text-[15px]">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-[600px] overflow-hidden rounded-xl border border-[#b6d9dc] bg-white shadow-[0_20px_55px_rgba(7,59,87,0.12)]">
            <div className="flex items-center justify-between gap-3 border-b border-[#dcebed] px-5 py-4 sm:px-7">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#43818b]">
                  Adhabits intelligence
                </p>
                <h3 className="mt-1 text-base font-semibold text-[#073f5d] sm:text-lg">
                  Campaign performance
                </h3>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#e8f6f2] px-3 py-1.5 text-xs font-semibold text-[#177b72]">
                <span className="size-2 rounded-full bg-[#26a98c]" />
                Live insights
              </span>
            </div>

            <div className="px-5 pb-5 pt-5 sm:px-7 sm:pb-7">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-[#5a7781]">Qualified reach</p>
                  <p className="mt-1 text-3xl font-bold text-[#073f5d] sm:text-4xl">
                    24,860
                  </p>
                </div>
                <p className="rounded-md bg-[#e4f5f3] px-2.5 py-1.5 text-sm font-semibold text-[#177b72]">
                  +32.8% <span className="font-normal">vs. last month</span>
                </p>
              </div>

              <div
                className="mt-5 flex h-[150px] items-end gap-1.5 border-b border-l border-[#dcebed] px-2 sm:h-[180px] sm:gap-2.5 sm:px-4"
                role="img"
                aria-label="Campaign engagement trend rising over twelve weeks"
              >
                {chartBars.map((height, index) => (
                  <span
                    className={`flex-1 rounded-t-[3px] ${
                      index === chartBars.length - 1
                        ? "bg-[#16869a]"
                        : "bg-[#83c8c5]"
                    }`}
                    style={{ height: `${height}px` }}
                    key={`${height}-${index}`}
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5a7781] sm:text-sm">
                <span>Audience engagement</span>
                <span className="inline-flex items-center gap-2 font-medium text-[#073f5d]">
                  <span className="size-2 rounded-full bg-[#16869a]" />
                  Engagement rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}