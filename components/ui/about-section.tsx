"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="border-b border-[#d9cdbd] bg-[#f9f6f0] px-4 py-10 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[#68736b]" data-about-reveal>
            <span className="animate-spin text-xl text-[#d96f4f] [animation-duration:6s]">✱</span>
            {t("aboutLabel")}
          </div>
          <div className="flex gap-2 text-[#68736b]" data-about-reveal>
            <SocialIcon label="Instagram" href="https://www.instagram.com/mouadinho__" />
            <SocialIcon label="GitHub" href="https://github.com/mouadgua" />
            <SocialIcon label="WhatsApp" href="https://wa.me/212674451180" />
          </div>
        </div>

        <div data-about-reveal className="relative overflow-hidden rounded-[2rem] bg-[#d7b995]">
          <div className="flex min-h-[280px] items-end justify-between bg-[radial-gradient(circle_at_72%_28%,#f4f0e8_0_10%,transparent_10.5%),linear-gradient(135deg,#d96f4f_0_34%,#9aa88f_34%_62%,#d7b995_62%)] p-6 md:min-h-[420px] md:p-10">
            <span className="text-[clamp(4rem,14vw,10rem)] font-semibold leading-none tracking-[-0.12em] text-[#1d2b24]/80">rfs</span>
            <span className="max-w-32 text-right text-xs uppercase tracking-[0.18em] text-[#1d2b24]/70">
              Creative direction<br />Morocco · Worldwide
            </span>
          </div>
          <div className="absolute right-0 top-0 h-1/3 w-[18%] rounded-bl-[1.5rem] bg-[#f9f6f0]" />
          <div className="absolute bottom-0 right-[18%] h-[18%] w-[20%] rounded-tl-[1.5rem] bg-[#f9f6f0]" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 py-5 text-sm" data-about-reveal>
          <div className="flex flex-wrap gap-4 text-[#68736b]">
            <span><strong className="text-[#d96f4f]">10+</strong> years</span>
            <span className="text-[#d9cdbd]">|</span>
            <span><strong className="text-[#d96f4f]">50+</strong> projects</span>
          </div>
          <div className="flex items-center gap-3 text-[#68736b]">
            <strong className="text-4xl font-medium tracking-[-0.08em] text-[#d96f4f]">12</strong>
            <span className="uppercase tracking-[0.14em]">countries</span>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <h2 data-about-reveal className="text-3xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#1d2b24] md:col-span-2 md:text-5xl">
            {t("aboutTitle")}
          </h2>
          <div data-about-reveal className="text-right md:pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#d96f4f]">rfs studio</p>
            <p className="mt-2 text-sm text-[#68736b]">Independent creative studio</p>
          </div>
          <div data-about-reveal className="space-y-4 text-sm leading-relaxed text-[#536158] md:col-span-2 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <p>{t("aboutText")}</p>
            <p>{t("aboutSecondary")}</p>
          </div>
          <div data-about-reveal className="md:pt-1">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-[#1d2b24] px-5 py-3 text-sm font-semibold text-[#f4f0e8] transition-all hover:gap-4 hover:bg-[#d96f4f]">
              {t("aboutCta")} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d9cdbd] bg-[#f4f0e8] transition-colors hover:bg-[#e8dfd1] hover:text-[#d96f4f]"
    >
      {label.slice(0, 2)}
    </a>
  );
}
