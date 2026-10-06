"use client";

import { useState } from "react";
import Link from "next/link";
import { BiSend } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
// import { Facebook, Instagram, Linkedin, Send } from "lucide-react";

// X (Twitter) ke liye clean SVG icon
function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const servicesList = [
  "Custom Web & App Development",
  "UI/UX Design & Prototyping",
  "AI Integration & Automation",
  "Brand Strategy & Digital Positioning",
  "Performance Campaign Management",
  "Creative Production & Motion Graphics",
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: BsFacebook },
  { name: "Instagram", href: "https://instagram.com", icon: BsInstagram },
  { name: "X", href: "https://x.com", icon: XIcon },
  { name: "LinkedIn", href: "https://linkedin.com", icon: BsLinkedin },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="bg-white py-20 sm:py-28" id="contact">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Heading & Social Handles */}
          <div className="flex flex-col justify-between self-stretch lg:col-span-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Contact Us
              </p>
                            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-[44px] lg:leading-[1.18]">
                Ready to Scale? <br />
                Let&apos;s Build Your Next <br />
                Big Idea Together
              </h2>
            </div>

            {/* Social Icons Section */}
            <div className="mt-14 pt-6 lg:mt-0">
              <p className="text-xs font-semibold text-neutral-500">
                Also you can find me here:
              </p>
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.08] bg-neutral-100 text-neutral-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:bg-black hover:text-white hover:shadow-md"
                      aria-label={item.name}
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form Card */}
          <div className="rounded-3xl border border-black/[0.06] bg-[#f9fafb] p-8 shadow-sm sm:p-10 lg:col-span-7">
            <h3 className="text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
              Leave a message
            </h3>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold text-neutral-700">
                    First name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Md. Sajib"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-all placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold text-neutral-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Mia"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-all placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-neutral-700">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="sajibmiaux@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-all placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Services Dropdown */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-neutral-700">
                  Services
                </label>
                <div className="relative">
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full appearance-none rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-all focus:border-black focus:ring-1 focus:ring-black"
                  >
                    <option value="" disabled>
                      Select your services
                    </option>
                    {servicesList.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-500">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Box */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-neutral-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Message here........."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-[#111111] outline-none transition-all placeholder:text-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#111111] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-all hover:bg-black hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] active:scale-[0.98]"
                >
                  <span>Send Messages</span>
                  <BiSend className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}