
import Link from "next/link";
import type { Metadata } from "next";
import type { SanityDocument } from "next-sanity";
import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";

import { client } from "@/sanity/client";

export const metadata: Metadata = {
  title: "Insights & Guides for Accountants | Caramel Web Studios",
  description:
    "Practical guides on accountant website design, local SEO, AI chatbots and digital growth for accountancy firms.",
  alternates: {
    canonical: "/blog",
  },
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  description
}`;

const options = { next: { revalidate: 30 } };

export default async function BlogPage() {
  const posts = await client.fetch<SanityDocument[]>(
    POSTS_QUERY,
    {},
    options
  );

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-36">
        <div className="soft-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl">
          <span className="eyebrow">The CWS Journal</span>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <div>
              <h1 className="max-w-4xl font-serif-tech text-5xl leading-tight md:text-7xl">
                Ideas for a more{" "}
                <span className="text-caramel-dark">connected</span>{" "}
                business.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-charcoal-muted">
                Practical insights on websites, digital marketing,
                automation and technology for modern accountancy firms.
              </p>
            </div>

            <div className="border-l border-caramel/40 pl-6">
              <BookOpen className="mb-4 text-caramel-dark" size={28} />
              <p className="text-sm leading-relaxed text-charcoal-muted">
                Straightforward advice to help your firm build trust,
                attract enquiries and work smarter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between border-b border-charcoal/10 pb-5">
            <div>
              <span className="eyebrow">Latest articles</span>
              <h2 className="mt-3 font-serif-tech text-3xl md:text-4xl">
                From the journal
              </h2>
            </div>
            <span className="hidden text-sm text-charcoal-muted sm:block">
              Insights & resources
            </span>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group flex flex-col border border-charcoal/10 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-caramel/50 hover:shadow-xl"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="eyebrow">CWS Insights</span>
                    <ArrowUpRight
                      size={20}
                      className="text-caramel-dark transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <h3 className="font-serif-tech text-2xl leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-muted">
                    {post.excerpt || post.description || "Read our latest insights and practical advice for your business."}
                  </p>

                  {post.publishedAt && (
                    <div className="mt-8 flex items-center gap-2 border-t border-charcoal/10 pt-5 text-xs text-charcoal-muted">
                      <Clock3 size={14} />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </time>
                    </div>
                  )}

                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-caramel-dark transition-colors hover:text-charcoal"
                  >
                    Read article <ArrowUpRight size={15} />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-charcoal/10 bg-white/60 px-6 py-16 text-center">
              <BookOpen className="mx-auto mb-5 text-caramel-dark" size={32} />
              <h3 className="font-serif-tech text-2xl">
                New insights are on the way
              </h3>
              <p className="mt-3 text-sm text-charcoal-muted">
                Our latest articles and resources will appear here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal px-6 py-20 text-cream md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="eyebrow text-caramel">
              Ready to take the next step?
            </span>
            <h2 className="mt-4 max-w-2xl font-serif-tech text-3xl md:text-5xl">
              Let&lsquo;s build a better digital presence for your firm.
            </h2>
          </div>
          <Link
            href="/book"
            className="inline-flex w-fit items-center gap-3 bg-caramel px-7 py-4 text-sm font-semibold text-charcoal transition-colors hover:bg-cream"
          >
            Book a consultation <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
