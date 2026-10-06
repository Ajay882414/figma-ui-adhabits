"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Zap, Layers, Sparkles } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: "web" | "performance" | "ai";
  industry: string;
  description: string;
  image: string;
  outcome: {
    primary: string;
    label: string;
  };
  techStack: string[];
  liveUrl: string;
  span: string; // Bento layout column span
}

const projects: ProjectItem[] = [
  {
    id: "uptraino-ai",
    title: "UptrainoAI: AI-Driven Sales Intelligence Platform",
    category: "ai",
    industry: "Enterprise SaaS",
    description: "Real-time AI voice simulation, dynamic script feedback engines, aur sub-second audio generation pipelines.",
    image: "/heroimage.png",
    outcome: {
      primary: "-68% Rep Onboarding Time",
      label: "Autonomous Model Evaluation",
    },
    techStack: ["Next.js 15", "TypeScript", "OpenAI API", "Tailwind CSS", "Supabase"],
    liveUrl: "#",
    span: "lg:col-span-8",
  },
  {
    id: "luxury-villas",
    title: "Residential Real Estate Performance Acquisition",
    category: "performance",
    industry: "High-Ticket Real Estate",
    description: "Hyper-localized Meta ad funnels, high-tempo walk-through scripts, aur automated WhatsApp qualification bot.",
    image: "/heroimage.png",
    outcome: {
      primary: "₹18.4 Cr Attributed Sales",
      label: "3.8x ROAS over 60 Days",
    },
    techStack: ["Meta Ads", "CAPI Routing", "Video Scripting", "Lead Automations"],
    liveUrl: "#",
    span: "lg:col-span-4",
  },
  {
    id: "fiwe-network",
    title: "Fiwe Social Platform: Viral Growth Funnel",
    category: "performance",
    industry: "Consumer Mobile App",
    description: "Reels creative testing engine aur high-retention video hooks designed specifically for organic and paid community scale.",
    image: "/heroimage.png",
    outcome: {
      primary: "120K+ App Installs",
      label: "$0.14 Cost Per Install",
    },
    techStack: ["Shorts / Reels", "Hook Analytics", "Attribution SDK"],
    liveUrl: "#",
    span: "lg:col-span-4",
  },
  {
    id: "tabassam-decor",
    title: "Luxury Interior Architecture Global Portfolio",
    category: "web",
    industry: "Commercial & Luxury Spaces",
    description: "Ultra-fast headless showcase portal featuring interactive 3D model loaders, dynamic image caching, and localized multi-lingual SEO.",
    image: "/heroimage.png",
    outcome: {
      primary: "0.55s LCP Load Time",
      label: "+310% Inbound HNW Enquiries",
    },
    techStack: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "Cloudflare CDN"],
    liveUrl: "#",
    span: "lg:col-span-8",
  },
];

interface ProjectsGridProps {
  activeCategory: string;
}

export default function ProjectsGrid({ activeCategory }: ProjectsGridProps) {
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-4 sm:pb-32">
      <div className="relative z-10 mx-auto max-w-[1240px] px-6 sm:px-8">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-black/[0.08] bg-[#fbfbfb] p-6 shadow-sm transition-all duration-300 hover:border-black/25 hover:bg-white hover:shadow-2xl sm:p-8 ${project.span}`}
            >
              <div>
                {/* Image Mockup Container with Hover Zoom */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-black/[0.06] bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Industry Badge Floating On Image */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {project.industry}
                    </span>
                  </div>

                  {/* Live Link Button Icon */}
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Content Header & Description */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111111] transition-colors group-hover:text-black sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-600 sm:text-sm">
                  {project.description}
                </p>
              </div>

              {/* Bottom Details: Outcomes + Tech Stack */}
              <div className="mt-8 border-t border-black/[0.06] pt-6">
                {/* Metric Highlight Box */}
                <div className="flex items-center justify-between rounded-2xl border border-black/[0.06] bg-white p-4 shadow-2xs">
                  <div>
                    <p className="font-mono text-lg font-extrabold tracking-tight text-[#111111] sm:text-xl">
                      {project.outcome.primary}
                    </p>
                    <p className="text-[11px] font-semibold text-neutral-400">
                      {project.outcome.label}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-black/[0.06] bg-neutral-100/80 px-2.5 py-1 font-mono text-[10px] font-bold text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}