const navigationLinks = [
  { label: "Home", href: "#top", current: true },
  { label: "Solutions", href: "#solutions" },
  { label: "AI Platform", href: "#platform" },
  { label: "Resources", href: "#resources" },
  { label: "Blog", href: "#blog" },
  { label: "Company", href: "#company" },
];

export default function Header() {
  return (
    <header className="relative z-10 mx-auto flex min-h-[106px] w-full max-w-[1440px] items-start justify-between px-5 pt-5 sm:px-8 sm:pt-7">
      {/* Brand Logo */}
      <a
        className="flex w-[190px] h-[60px] shrink-0 items-center "
        href="#top"
        aria-label="Adhabits home"
      >
        <img
          src="/logo.png" // <-- Yahan apna logo path daalein (e.g. "/image 17.png" ya "/logo.svg")
          alt="Adhabits Logo"
          className="h-full  object-contain"
        />
      </a>

      <nav
        className="hidden min-h-[50px] items-center gap-4 rounded-md border border-white/10 bg-[#073b57] py-0 pl-6 pr-2 text-[#f3f8f8] shadow-lg shadow-[#073b57]/10 lg:flex xl:gap-7"
        aria-label="Main navigation"
      >
        {navigationLinks.map(({ label, href, current }) => (
          <a
            className={`whitespace-nowrap text-sm transition-colors hover:text-[#82c9d0] ${
              current ? "text-[#82c9d0]" : "text-[#f3f8f8]"
            }`}
            href={href}
            aria-current={current ? "page" : undefined}
            key={label}
          >
            {label}
          </a>
        ))}
        <a
          className="grid size-7 shrink-0 place-items-center rounded-full border border-[#9dc7ce] text-xs text-[#d3ecee] transition-colors hover:bg-white/10"
          href="#account"
          aria-label="Account"
        >
          <span aria-hidden="true">●</span>
        </a>
        <a
          className="inline-flex min-h-[34px] items-center justify-center whitespace-nowrap rounded bg-[#2a9caf] px-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#23899b]"
          href="#get-started"
        >
          Get Started
        </a>
      </nav>

      <details className="group relative lg:hidden">
        <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-md border border-white/10 bg-[#073b57] text-white [&::-webkit-details-marker]:hidden">
          <span className="flex w-5 flex-col gap-1" aria-hidden="true">
            <span className="h-0.5 w-full rounded bg-current" />
            <span className="h-0.5 w-full rounded bg-current" />
            <span className="h-0.5 w-full rounded bg-current" />
          </span>
          <span className="sr-only">Open navigation menu</span>
        </summary>
        <nav
          className="absolute right-0 top-[52px] hidden w-[min(270px,calc(100vw-40px))] gap-1 rounded-md border border-white/10 bg-[#073b57] p-2 text-white shadow-xl group-open:grid"
          aria-label="Mobile navigation"
        >
          {navigationLinks.map(({ label, href }) => (
            <a
              className="rounded px-3 py-2.5 text-sm transition-colors hover:bg-white/10"
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
          <a
            className="rounded px-3 py-2.5 text-sm transition-colors hover:bg-white/10"
            href="#account"
          >
            Account
          </a>
          <a
            className="rounded bg-[#2a9caf] px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#23899b]"
            href="#get-started"
          >
            Get Started
          </a>
        </nav>
      </details>
    </header>
  );
}