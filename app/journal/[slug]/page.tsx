import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowLeft, ArrowUpRight, CalendarDays, Check } from "lucide-react";
import { getJournalArticle, journalArticles } from "@/lib/journal";

type JournalPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const article = getJournalArticle((await params).slug);
  return {
    title: article?.title ?? "Journal — rfs studio",
    description: article?.excerpt,
  };
}

function JournalPageFallback() {
  return <main className="min-h-screen bg-[#f4f0e8]" />;
}

async function JournalPageContent({ params }: JournalPageProps) {
  const article = getJournalArticle((await params).slug);

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f0e8] px-6 text-[#1d2b24]">
        <div>
          <h1 className="text-4xl">Article introuvable</h1>
          <Link href="/#blog" className="mt-6 inline-flex underline">
            Retour au journal
          </Link>
        </div>
      </main>
    );
  }

  const relatedArticles = journalArticles.filter((item) => item.slug !== article.slug);

  return (
    <main className="min-h-screen bg-[#f4f0e8] text-[#1d2b24]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-sm">
          <ArrowLeft className="h-4 w-4" /> Journal
        </Link>
        <span className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
          rfs studio / journal
        </span>
      </header>

      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-36">
        <header className="grid gap-12 border-b border-[#d9cdbd] pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
              {article.category}
            </p>
            <h1 className="mt-6 max-w-4xl text-6xl leading-[0.9] tracking-[-0.08em] md:text-8xl">
              {article.title}
            </h1>
          </div>
          <div className="lg:pb-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8b7561]">
              <CalendarDays className="h-4 w-4" /> {article.date}
            </div>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#68736b]">
              {article.intro}
            </p>
          </div>
        </header>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
            The short version
          </p>
          <ul className="grid gap-4 md:grid-cols-3">
            {article.takeaways.map((takeaway, index) => (
              <li key={`${takeaway}-${index}`} className="border-t border-[#bcae9c] pt-4 text-sm leading-relaxed">
                <span
                  className="mb-5 flex h-7 w-7 items-center justify-center rounded-full text-[#1d2b24]"
                  style={{ backgroundColor: article.accent }}
                >
                  <Check className="h-4 w-4" />
                </span>
                {takeaway}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-24 grid gap-12 border-t border-[#d9cdbd] pt-12 md:grid-cols-[0.35fr_1fr]">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
            Field notes
          </p>
          <div className="space-y-16">
            {article.sections.map((section, index) => (
              <article key={`${section.title}-${index}`} className="max-w-3xl">
                <p className="mb-5 text-sm font-medium text-[#d96f4f]">0{index + 1}</p>
                <h2 className="text-4xl tracking-[-0.06em] md:text-6xl">{section.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-[#68736b]">{section.text}</p>
              </article>
            ))}
          </div>
        </div>

        {relatedArticles.length > 0 && (
          <section className="mt-24 border-t border-[#d9cdbd] pt-12">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
                  Continue reading
                </p>
                <h2 className="mt-4 text-4xl tracking-[-0.06em] md:text-6xl">
                  More from the journal.
                </h2>
              </div>
              <Link href="/#blog" className="hidden text-sm text-[#d96f4f] hover:underline sm:block">
                View all notes
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/journal/${relatedArticle.slug}`}
                  className="group rounded-[1.75rem] border border-[#d9cdbd] bg-[#fbf8f2] p-6 transition-colors hover:border-[#d96f4f]"
                >
                  <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-[#8b7561]">
                    <span>{relatedArticle.category}</span>
                    <span>{relatedArticle.date}</span>
                  </div>
                  <h3 className="mt-12 max-w-md text-2xl leading-tight tracking-[-0.05em] group-hover:text-[#d96f4f]">
                    {relatedArticle.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[#68736b]">
                    {relatedArticle.excerpt}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#d96f4f]">
                    Read the note <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-24 rounded-[2rem] bg-[#1d2b24] px-6 py-12 text-[#f4f0e8] md:px-12">
          <p className="max-w-2xl text-3xl tracking-[-0.05em] md:text-5xl">
            Have a question, a project, or a point of view to share?
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d96f4f] px-5 py-3 text-sm font-semibold text-[#fffaf3] hover:bg-[#bd5b3e]"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function JournalPage({ params }: JournalPageProps) {
  return (
    <Suspense fallback={<JournalPageFallback />}>
      <JournalPageContent params={params} />
    </Suspense>
  );
}
