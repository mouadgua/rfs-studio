"use client";

import { useEffect, useRef } from "react";
import { Mail, MessageCircle, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/language";
import AboutSection from "@/components/ui/about-section";
import TeamSection from "@/components/ui/team-section";
import StudioStorySection from "@/components/ui/studio-story-section";
import BlogSection from "@/components/ui/blog-section";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSections() {
  const contentRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: (index % 3) * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          },
        );
      });
    }, contentRef);
    return () => context.revert();
  }, []);

  return (
    <div ref={contentRef} className="bg-[#f4f0e8] text-[#1d2b24]">
      <AboutSection />

      <section id="services" data-reveal className="mx-auto max-w-7xl border-b border-[#d9cdbd] px-6 py-24 lg:px-10 lg:py-36">
        <div className="mb-14 flex items-end justify-between gap-6">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">{t("servicesLabel")}</p>
          <p className="max-w-xs text-right text-sm text-[#68736b]">{t("servicesNote")}</p>
        </div>
        <div className="divide-y divide-[#d9cdbd]">
          {[
            ["01", t("service1"), t("service1Text")],
            ["02", t("service2"), t("service2Text")],
            ["03", t("service3"), t("service3Text")],
          ].map(([number, title, description]) => (
            <article key={number} className="grid gap-5 py-8 md:grid-cols-[80px_1fr_1fr] md:items-center">
              <span className="text-sm text-[#d96f4f]">{number}</span>
              <h3 className="text-3xl tracking-[-0.05em] text-[#1d2b24]">{title}</h3>
              <p className="max-w-sm text-[#68736b]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <TeamSection />

      <section id="work" data-reveal className="border-b border-[#d9cdbd] px-6 py-24 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">{t("work")}</p>
              <h2 className="mt-5 max-w-2xl text-4xl tracking-[-0.06em] md:text-6xl">{t("workTitle")}</h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button type="button" aria-label="Previous project" onClick={() => workRef.current?.scrollBy({ left: -360, behavior: "smooth" })} className="rounded-full border border-[#bcae9c] p-3 transition-colors hover:bg-[#e8dfd1]"><ChevronLeft className="h-4 w-4" /></button>
              <button type="button" aria-label="Next project" onClick={() => workRef.current?.scrollBy({ left: 360, behavior: "smooth" })} className="rounded-full border border-[#bcae9c] p-3 transition-colors hover:bg-[#e8dfd1]"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
          <div ref={workRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projects.map((project) => (
              <article key={project.slug} className="min-w-[82vw] snap-start sm:min-w-[420px]">
                <Link href={`/projects/${project.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#d7b995]" style={{ backgroundColor: project.accent }}>
                  {project.preview ? (
                    <Image src={project.preview} alt={`Aperçu de ${project.name}`} fill sizes="(max-width: 640px) 82vw, 420px" className="object-cover transition duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-full items-end p-8">
                      <span className="text-[8rem] font-semibold leading-none tracking-[-0.12em] text-[#1d2b24]/70">{project.initials}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d2b24]/55 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-6 left-7 text-sm font-medium uppercase tracking-[0.18em] text-white/90">{project.category}</div>
                </Link>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div><h3 className="text-xl">{project.name}</h3><p className="mt-1 text-sm text-[#68736b]">{project.summary}</p></div>
                  <div className="flex shrink-0 gap-2">
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 rounded-full border border-[#bcae9c] px-3 py-2 text-xs hover:bg-[#e8dfd1]">{t("preview")} <ArrowUpRight className="h-3 w-3" /></Link>
                    <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-[#1d2b24] px-3 py-2 text-xs text-[#f4f0e8] hover:bg-[#d96f4f]">Live <ArrowUpRight className="h-3 w-3" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StudioStorySection />
      <BlogSection />

      <footer id="contact" data-reveal className="bg-[#1d2b24] px-6 py-16 text-[#f4f0e8] lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-4xl tracking-[-0.07em]">{t("contactTitle")}</p>
            <p className="mt-3 text-[#cbd3c8]">{t("contactText")}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a href="mailto:mouadguarraz@gmail.com" className="flex items-center gap-2 hover:text-[#d96f4f]"><Mail className="h-4 w-4" />mouadguarraz@gmail.com</a>
            <a href="https://wa.me/212674451180" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#d96f4f]"><MessageCircle className="h-4 w-4" />+212 6 74 45 11 80</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
