"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/lib/language";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from("[data-team-reveal]", {
        y: 28,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="border-b border-[#d9cdbd] bg-[#f9f6f0] px-4 py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between" data-team-reveal>
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[#68736b]">
            <span className="animate-spin text-xl text-[#d96f4f] [animation-duration:6s]">✱</span>
            {t("teamLabel")}
          </div>
          <div className="flex gap-2 text-[10px] font-medium uppercase text-[#d96f4f]">
            <SocialLink label="Instagram" />
            <SocialLink label="LinkedIn" />
            <SocialLink label="GitHub" />
          </div>
        </div>

        <div data-team-reveal className="relative overflow-hidden rounded-[2rem] bg-[#1d2b24]">
          <div className="grid min-h-[300px] grid-cols-2 gap-3 p-3 md:min-h-[440px] md:grid-cols-4 md:p-5">
            <div className="rounded-[1.4rem] bg-[#d96f4f]" />
            <div className="rounded-[1.4rem] bg-[#9aa88f] md:translate-y-10" />
            <div className="rounded-[1.4rem] bg-[#d7b995] md:-translate-y-5" />
            <div className="rounded-[1.4rem] bg-[#f4f0e8] md:translate-y-14" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-[clamp(4rem,14vw,10rem)] font-semibold tracking-[-0.14em] text-[#f4f0e8]/90">rfs</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 py-5 text-sm" data-team-reveal>
          <div className="flex flex-wrap gap-4 text-[#68736b]">
            <span><strong className="text-[#d96f4f]">03</strong> {t("teamMinds")}</span>
            <span className="text-[#d9cdbd]">|</span>
            <span><strong className="text-[#d96f4f]">01</strong> {t("teamVision")}</span>
          </div>
          <div className="text-right text-[#68736b]">
            <strong className="text-4xl font-medium tracking-[-0.08em] text-[#d96f4f]">∞</strong>
            <span className="ml-2 uppercase tracking-[0.14em]">{t("teamPossibilities")}</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <h2 data-team-reveal className="text-3xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#1d2b24] md:col-span-2 md:text-5xl">
            {t("teamTitle")}
          </h2>
          <div data-team-reveal className="text-right md:pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d96f4f]">rfs studio</p>
            <p className="mt-2 text-sm text-[#68736b]">Strategy · Design · Digital</p>
          </div>
          <div data-team-reveal className="space-y-4 text-sm leading-relaxed text-[#536158] md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <p>{t("teamText")}</p>
            <p>{t("teamSecondary")}</p>
          </div>
          <div data-team-reveal className="md:pt-1">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-[#1d2b24] px-5 py-3 text-sm font-semibold text-[#f4f0e8] transition-all hover:gap-4 hover:bg-[#d96f4f]">
              {t("teamCta")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3" data-team-reveal>
          {["Mouad — Creative direction", "Nora — Brand strategy", "Yassine — Digital design"].map((member, index) => (
            <div key={member} className="border-t border-[#d9cdbd] pt-4">
              <div className={`mb-4 aspect-[4/3] rounded-[1.5rem] ${index === 0 ? "bg-[#d96f4f]" : index === 1 ? "bg-[#9aa88f]" : "bg-[#d7b995]"}`} />
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm text-[#536158]">{member}</p>
                <div className="flex gap-2 text-[10px] font-medium uppercase text-[#d96f4f]">
                  <SocialLink label="IG" />
                  <SocialLink label="IN" />
                  <SocialLink label="GH" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLink({ label }: { label: string }) {
  return (
    <a
      href="mailto:mouadguarraz@gmail.com?subject=rfs%20studio%20social%20profile"
      aria-label={`${label} — profile URL pending`}
      title="Profile link coming soon"
      className="transition-opacity hover:opacity-60"
    >
      {label}
    </a>
  );
}
