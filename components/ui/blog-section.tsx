"use client";

import { ArrowUpRight, CalendarDays } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/language";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    category: "Event",
    date: "18.10.2025",
    titleKey: "blogArticle1Title",
    excerptKey: "blogArticle1Excerpt",
    color: "bg-[#d96f4f]",
  },
  {
    category: "Talk",
    date: "04.06.2025",
    titleKey: "blogArticle2Title",
    excerptKey: "blogArticle2Excerpt",
    color: "bg-[#9aa88f]",
  },
  {
    category: "Workshop",
    date: "22.03.2025",
    titleKey: "blogArticle3Title",
    excerptKey: "blogArticle3Excerpt",
    color: "bg-[#d7b995]",
  },
] as const;

export default function BlogSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from("[data-blog-reveal]", {
        y: 32,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
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

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.titleKey}
              data-blog-reveal
              className="group flex flex-col"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ${article.color}`}
              >
                <div className="absolute inset-6 rounded-[1.25rem] border border-[#1d2b24]/20 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105" />
                <span className="absolute bottom-6 left-6 text-6xl font-semibold tracking-[-0.1em] text-[#1d2b24]/75">
                  rfs
                </span>
                <span className="absolute right-5 top-5 rounded-full bg-[#f4f0e8]/80 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#1d2b24]">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <div className="flex items-center gap-2 text-xs text-[#8b7561]">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {article.date}
                </div>
                <h3 className="mt-3 text-2xl leading-tight tracking-[-0.05em] text-[#1d2b24]">
                  {t(article.titleKey)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#68736b]">
                  {t(article.excerptKey)}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#d96f4f] transition-all hover:gap-4"
                >
                  {t("blogRead")} <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
