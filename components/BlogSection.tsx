import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const blogs = [
  {
    id: 1,
    title: "A Practical Digital Marketing Strategy for Sustainable Growth",
    excerpt: "Connect audience research, useful content, paid campaigns, and measurement into one focused growth plan for your business.",
    date: "Updated Oct 2026",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    slug: "digital-marketing-strategy-growth",
  },
  {
    id: 2,
    title: "How Fast Websites Turn Better User Experiences into More Leads",
    excerpt: "Learn how performance, accessible interface design, and clear calls to action work together to improve website conversions.",
    date: "Updated Oct 2026",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    slug: "website-performance-and-conversions",
  },
  {
    id: 3,
    title: "A Conversion-Focused Guide to UI/UX Design",
    excerpt: "Use user research, intuitive navigation, and thoughtful visual hierarchy to make digital products easier to use and trust.",
    date: "Updated Oct 2026",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    slug: "conversion-focused-ui-ux-design",
  },
  {
    id: 4,
    title: "Where AI Automation Can Make the Biggest Difference for Teams",
    excerpt: "Find repeatable workflows worth automating, choose practical AI integrations, and keep people in control of important decisions.",
    date: "Updated Oct 2026",
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    slug: "ai-automation-for-business-teams",
  },
  {
    id: 5,
    title: "Building a Consistent Brand Identity Across Digital Channels",
    excerpt: "Align your positioning, visual identity, website, and campaign messaging so customers recognize and remember your brand.",
    date: "Updated Oct 2026",
    category: "Brand Strategy",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    slug: "consistent-digital-brand-identity",
  },
  {
    id: 6,
    title: "Technical SEO Essentials for a Search-Friendly Website",
    excerpt: "Make it easier for search engines to crawl and understand your site with strong page structure, metadata, internal links, and performance.",
    date: "Updated Oct 2026",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    slug: "technical-seo-website-essentials",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-20 sm:py-28" id="blog">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Tech & Marketing Insights
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Ideas for Better Digital Growth
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black"
          >
            View All Posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <article key={blog.id} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                    loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black backdrop-blur-md">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs font-medium text-neutral-500">{blog.date}</p>
                <h3 className="mt-3 text-xl font-bold leading-snug text-[#111111] group-hover:underline">
                  {blog.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
