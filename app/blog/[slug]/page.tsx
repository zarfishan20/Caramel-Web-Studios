
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";

import { client } from "@/sanity/client";

type Article = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt?: string;
  excerpt?: string;
  body?: PortableTextBlock[];
};

const ARTICLE_QUERY = `*[
  _type == "post"
  && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body
}`;

const options = { next: { revalidate: 30 } };

async function getArticle(slug: string): Promise<Article | null> {
  return client.fetch<Article | null>(
    ARTICLE_QUERY,
    { slug },
    options
  );
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found | Caramel Web Studios",
    };
  }

  return {
    title: `${article.title} | Caramel Web Studios`,
    description:
      article.excerpt ||
      `Read ${article.title} on the Caramel Web Studios journal.`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-cream text-charcoal">
      <article>
        {/* Article header */}
        <header className="px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="mb-12 inline-flex items-center gap-2 text-sm text-charcoal-muted transition-colors hover:text-caramel-dark"
            >
              <ArrowLeft size={16} />
              Back to journal
            </Link>

            <span className="eyebrow block">CWS Journal</span>

            <h1 className="mt-6 font-serif-tech text-4xl leading-tight md:text-6xl">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-7 max-w-3xl text-lg leading-relaxed text-charcoal-muted">
                {article.excerpt}
              </p>
            )}

            {formattedDate && (
              <div className="mt-8 flex items-center gap-2 border-t border-charcoal/10 pt-6 text-sm text-charcoal-muted">
                <Clock3 size={16} />
                <time dateTime={article.publishedAt}>
                  {formattedDate}
                </time>
              </div>
            )}
          </div>
        </header>

        {/* Article content */}
        <section className="px-6 pb-24 md:px-12">
          <div className="mx-auto max-w-3xl">
            {article.body && article.body.length > 0 ? (
              <div className="prose prose-lg max-w-none prose-headings:font-serif-tech prose-headings:text-charcoal prose-p:leading-relaxed prose-p:text-charcoal-muted prose-a:text-caramel-dark prose-strong:text-charcoal">
                <PortableText value={article.body} />
              </div>
            ) : (
              <p className="text-charcoal-muted">
                Article content is not available yet.
              </p>
            )}
          </div>
        </section>
      </article>

      {/* Contact CTA */}
      <section className="bg-charcoal px-6 py-20 text-cream md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="eyebrow text-caramel">
              Caramel Web Studios
            </span>
            <h2 className="mt-4 max-w-2xl font-serif-tech text-3xl md:text-5xl">
              Ready to improve your firm&apos;s digital presence?
            </h2>
          </div>

          <Link
            href="/book"
            className="inline-flex w-fit items-center gap-3 bg-caramel px-7 py-4 text-sm font-semibold text-charcoal transition-colors hover:bg-cream"
          >
            Book a consultation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
