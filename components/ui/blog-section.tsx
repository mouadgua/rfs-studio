"use client";

import { ArrowUpRight, CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/language";
import Link from "next/link";
import { journalArticles } from "@/lib/journal";

export default function BlogSection() {
  const { t } = useLanguage();

  return (
    <section
      id="blog"
      className="border-b border-[#d9cdbd] bg-[#f4f0e8] px-6 py-24 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-blog-reveal
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
              {t("blogLabel")}
            </p>
            <h2 className="mt-5 max-w-3xl text-5xl leading-[0.92] tracking-[-0.08em] text-[#1d2b24] md:text-7xl">
              {t("blogTitle")}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#68736b] md:text-right">
            {t("blogIntro")}
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl space-y-8">
          {journalArticles.map((article, index) => (
            <article
              key={article.slug}
              className="blog-stack-card group sticky top-24 min-h-[30rem] overflow-hidden rounded-[2rem] border border-[#1d2b24]/10 p-7 shadow-[0_24px_70px_-35px_rgba(29,43,36,0.55)] md:min-h-[34rem] md:p-12"
              style={{
                top: `calc(6rem + ${index * 1.5}rem)`,
                zIndex: index + 1,
              }}
            >
              <div
                className={`absolute inset-0 ${
                  index === 0 ? "bg-[#d96f4f]" : index === 1 ? "bg-[#9aa88f]" : "bg-[#d7b995]"
                }`}
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[clamp(5rem,14vw,10rem)] font-semibold leading-none tracking-[-0.14em] text-[#1d2b24]/25">
                    0{index + 1}
                  </span>
                  <span className="rounded-full bg-[#f4f0e8]/75 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#1d2b24]">
                    {article.category}
                  </span>
                </div>
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs text-[#1d2b24]/65">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {article.date}
                  </div>
                  <h3 className="mt-4 text-4xl leading-[0.95] tracking-[-0.07em] text-[#1d2b24] md:text-6xl">
                    {t(`blogArticle${index + 1}Title` as "blogArticle1Title")}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#1d2b24]/70 md:text-base">
                    {t(`blogArticle${index + 1}Excerpt` as "blogArticle1Excerpt")}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#8b7561]">
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1d2b24] px-4 py-2.5 text-sm text-[#f4f0e8] transition-transform hover:-translate-y-0.5"
                  >
                    {t("blogRead")} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
