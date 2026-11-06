"use client";

import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/language";

type StoryTab = "overview" | "process" | "impact";

export default function StudioStorySection() {
  const [activeTab, setActiveTab] = useState<StoryTab>("overview");
  const { t } = useLanguage();

  const tabContent = {
    overview: {
      title: t("storyOverviewTitle"),
      text: t("storyText"),
      points: [t("storyPoint1"), t("storyPoint2"), t("storyPoint3")],
    },
    process: {
      title: t("storyProcessTitle"),
      text: t("storyProcessText"),
      points: [t("storyProcess1"), t("storyProcess2"), t("storyProcess3")],
    },
    impact: {
      title: t("storyImpactTitle"),
      text: t("storyImpactText"),
      points: [t("storyImpact1"), t("storyImpact2"), t("storyImpact3")],
    },
  }[activeTab];

  return (
    <section id="studio-story" className="overflow-hidden border-b border-[#33483d] bg-[#1d2b24] px-4 py-16 text-[#f4f0e8] md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-center justify-between" data-story-reveal>
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[#cbd3c8]">
            <Sparkles className="h-4 w-4 text-[#d96f4f]" />
            {t("storyLabel")}
          </div>
          <span className="text-xs uppercase tracking-[0.18em] text-[#93a397]">rfs / 01</span>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div data-story-reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.18em] text-[#d96f4f]">Independent creative studio</p>
            <h2 className="max-w-3xl text-[clamp(3rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.09em]">
              {t("storyTitle")}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#cbd3c8]">{t("storySecondary")}</p>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#d96f4f] px-5 py-3 text-sm font-semibold text-[#fffaf3] transition-all hover:gap-4 hover:bg-[#bd5b3e]">
              {t("storyCta")} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div data-story-reveal className="relative overflow-hidden rounded-[2rem] border border-[#526458] bg-[#26392f] p-5 shadow-2xl md:p-7">
            <BorderBeam />
            <div className="relative z-10">
              <div className="mb-8 grid grid-cols-3 gap-2 rounded-full bg-[#1d2b24] p-1">
                {(["overview", "process", "impact"] as StoryTab[]).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-2 py-2 text-xs capitalize transition-colors ${activeTab === tab ? "bg-[#f4f0e8] text-[#1d2b24]" : "text-[#93a397] hover:text-[#f4f0e8]"}`}
                  >
                    {t(`storyTab${tab[0].toUpperCase()}${tab.slice(1)}` as "storyTabOverview")}
                  </button>
                ))}
              </div>
              <div className="min-h-[255px]">
                <p className="text-xs uppercase tracking-[0.18em] text-[#d96f4f]">rfs studio</p>
                <h3 className="mt-4 text-3xl leading-tight tracking-[-0.06em]">{tabContent.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-[#cbd3c8]">{tabContent.text}</p>
                <ul className="mt-6 space-y-3">
                  {tabContent.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-[#e2e8df]">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#d96f4f]/20 text-[#d96f4f]"><Check className="h-3 w-3" /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex justify-between border-t border-[#526458] pt-5 text-xs uppercase tracking-[0.14em] text-[#93a397]">
                <span>10+ {t("storyYears")}</span>
                <span>50+ {t("storyProjects")}</span>
                <span>12 {t("storyCountries")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BorderBeam() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -inset-px rounded-[inherit] border border-transparent [mask:linear-gradient(#0000,#0000),linear-gradient(#000,#000)] [mask-composite:exclude] after:absolute after:left-[-20%] after:top-[-20%] after:h-20 after:w-20 after:animate-[story-beam_5s_linear_infinite] after:rounded-full after:bg-[#d96f4f] after:blur-xl"
    />
  );
}
