"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/lib/language";
import ProfileCard from "@/components/ui/profile-card";

const teamMembers = [
  {
    name: "Mouad Guarraz",
    title: "Creative developer · rfs studio",
    handle: "mouadgua",
    avatarUrl: "/mouad-guarraz.jpeg",
  },
];

export default function TeamSection() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  function moveCarousel(direction: -1 | 1) {
    carouselRef.current?.scrollBy({
      left: direction * carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="team"
      className="border-b border-[#d9cdbd] bg-[#f9f6f0] px-4 py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between" data-team-reveal>
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[#68736b]">
            <span className="animate-spin text-xl text-[#d96f4f] [animation-duration:6s]">✱</span>
            {t("teamLabel")}
          </div>
        </div>

        <div
          data-team-reveal
          className="rounded-[2rem] bg-[#fbf8f2] px-4 py-8 md:px-10 md:py-12"
        >
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.18em] text-[#8b7561]">
              {teamMembers.length.toString().padStart(2, "0")}{" "}
              {t("teamMinds")}
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => moveCarousel(-1)}
                aria-label="Previous team member"
                className="rounded-full border border-[#d9cdbd] p-2 text-[#1d2b24] transition-colors hover:bg-[#e8dfd1] disabled:opacity-40"
                disabled={teamMembers.length < 2}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => moveCarousel(1)}
                aria-label="Next team member"
                className="rounded-full border border-[#d9cdbd] p-2 text-[#1d2b24] transition-colors hover:bg-[#e8dfd1] disabled:opacity-40"
                disabled={teamMembers.length < 2}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            ref={carouselRef}
            className="team-card-carousel"
            aria-label="Team members"
          >
            {teamMembers.map((member) => (
              <div className="team-card-slide" key={member.handle}>
                <ProfileCard {...member} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 py-5 text-sm" data-team-reveal>
          <div className="flex flex-wrap gap-4 text-[#68736b]">
            <span><strong className="text-[#d96f4f]">01</strong> {t("teamMinds")}</span>
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

      </div>
    </section>
  );
}
