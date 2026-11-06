"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language";
import { Button } from "@/components/ui/button";

export interface AvatarList {
  image: string;
}

interface HeroProps {
  avatarList: AvatarList[];
}

export default function HeroSection({ avatarList }: HeroProps) {
  const [countries, setCountries] = useState(0);
  const { language, t } = useLanguage();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountries((value) => (value >= 12 ? 12 : value + 1));
    }, 90);
    return () => window.clearInterval(timer);
  }, []);

  const titleWords = t("title").split(" ");

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-10 lg:pb-32 lg:pt-28">
      <div>
        <p className="mb-7 text-xs font-medium uppercase tracking-[0.24em] text-[#8b7561]">
          {t("eyebrow")}
        </p>
        <h1
          aria-label={t("title")}
          className="max-w-4xl text-[clamp(3.5rem,8vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.09em] text-[#1d2b24]"
        >
          {titleWords.map((word, index) => (
            <span
              key={`${language}-${index}`}
              data-title-word
              aria-hidden="true"
              className="mr-[0.2em] inline-block origin-bottom transition-colors duration-300 hover:text-[#d96f4f]"
            >
              {word}
            </span>
          ))}
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">
              {t("cta")} <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <span className="text-sm text-[#68736b]">{t("descriptor")}</span>
        </div>
      </div>
      <div className="max-w-sm justify-self-end">
        <p className="text-lg leading-relaxed text-[#536158]">
          {t("intro")}
        </p>
        <div className="mt-10 flex items-center gap-4 border-t border-[#d9cdbd] pt-5">
          <div className="flex -space-x-3">
            {avatarList.map((avatar) => (
              <span
                key={avatar.image}
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f4f0e8] bg-[#9aa88f] text-xs font-semibold text-[#1d2b24]"
              >
                {avatar.image}
              </span>
            ))}
          </div>
          <p className="text-xs leading-relaxed text-[#8b7561]">
            {t("trusted")}<br />{language === "ar" ? "" : "across "}<span className="font-semibold text-[#d96f4f]">{countries}</span> {t("countries")}
          </p>
        </div>
      </div>
    </section>
  );
}
