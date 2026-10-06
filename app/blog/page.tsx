import { blogs } from "@/components/BlogSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech & Digital Marketing Insights",
  description:
    "Explore practical guides from Adhabits on digital marketing, web development, UI/UX design, AI automation, brand strategy, and technical SEO.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Tech & Digital Marketing Insights | Adhabits",
    description:
      "Practical guides on technology, digital marketing, AI automation, and sustainable online growth.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tech & Digital Marketing Insights",
    description: metadata.description,
    url: "https://adhabits.com/blog",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogs.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: blog.title,
        url: `https://adhabits.com/blog#${blog.slug}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="bg-neutral-50 py-20 pt-32">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#111111] sm:text-6xl">
              Technology & Digital Marketing Insights
            </h1>
            <p className="mt-6 text-lg text-neutral-600">
              Practical perspectives on growing a business through better technology, clear brand strategy, and measurable digital marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <article key={blog.id} id={blog.slug} className="group">
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
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
