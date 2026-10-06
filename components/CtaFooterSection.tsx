import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// X (Twitter) Vector Icon
function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// TechMark 9-dot Grid Logo
function TechMarkLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid grid-cols-3 gap-1.5 p-0.5">
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white" />
      </div>
      <span className="text-3xl font-extrabold tracking-tight text-white">
        adhabits
      </span>
    </div>
  );
}

const footerNavigation = [
  {
    category: "LANDINGS",
    links: [
      { name: "Homepage", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    category: "PAGES",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Blog Details", href: "/blog-details" },
      { name: "Careers", href: "/careers" },
      { name: "Careers Details", href: "/careers-details" },
    ],
  },
  {
    category: "REFERENCE",
    links: [
      { name: "Style Guide", href: "/style-guide" },
      { name: "Licensing", href: "/licensing" },
      { name: "Changelog", href: "/changelog" },
      { name: "Sign in", href: "/sign-in" },
      { name: "Sign up", href: "/sign-up" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebook },
  { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { name: "X", href: "https://x.com", icon: XIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
];

export default function CtaFooterSection() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0d0d0d] text-white">
      {/* 1. Subtle Architectural Line Grid (Halki white line grid overlay) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.9) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Center Subtle Radial Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-0 h-[480px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* ==========================================================
            CTA BANNER
            ========================================================== */}
        <div className="pt-24 pb-28 text-center sm:pt-32 sm:pb-36">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Ready to Transform Your <br />
            Digital Presence?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-neutral-400 sm:text-sm">
            Got questions? We&apos;ve got answers. Here&apos;s everything you need
            to know about working with us.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-xs font-semibold text-black shadow-md transition-all duration-200 hover:bg-neutral-200 active:scale-95 sm:text-sm"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        {/* ==========================================================
            FOOTER BOTTOM SECTION
            ========================================================== */}
        <div className="grid grid-cols-1 gap-12 pb-20 pt-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info & Socials (Left Column) */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
            <div>
              <TechMarkLogo />
              <p className="mt-5 max-w-xs text-xs leading-relaxed text-neutral-400 sm:text-sm">
                Ready to elevate your brand or portfolio with timeless website
                design?
              </p>
            </div>

            {/* Circular Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#181818] text-white transition-all duration-200 hover:bg-white hover:text-black hover:scale-105 active:scale-95"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links Columns (Right Columns) */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:col-span-7">
            {footerNavigation.map((section) => (
              <div key={section.category}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">
                  {section.category}
                </h3>
                <ul className="mt-5 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-xs text-neutral-400 transition-colors duration-150 hover:text-white sm:text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}