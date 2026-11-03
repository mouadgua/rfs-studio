"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/lib/language";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData: NavigationSection[];
}

export default function Header({ navigationData }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between border-b border-[#d9cdbd]/70 bg-[#f4f0e8]/95 px-6 py-5 text-[#1d2b24] backdrop-blur-md lg:px-10">
      <a href="#" className="text-xl font-semibold tracking-[-0.06em]">
        rfs<span className="text-[#d96f4f]">/</span>studio
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {navigationData.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className={`text-sm transition-colors ${
              item.isActive
                ? "font-medium text-[#1d2b24]"
                : "text-[#68736b] hover:text-[#1d2b24]"
            }`}
          >
            {item.title}
          </a>
        ))}
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <a
          href="https://wa.me/212674451180"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-[#68736b] transition-colors hover:text-[#1d2b24]"
        >
          {t("whatsapp")}
        </a>
        <Button variant="outline" size="sm" asChild>
          <a href="mailto:mouadguarraz@gmail.com">{t("talk")}</a>
        </Button>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="rounded-full p-2 text-[#1d2b24] hover:bg-[#e8dfd1] md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>
      {open && (
        <nav className="absolute left-6 right-6 top-20 flex flex-col gap-1 rounded-2xl border border-[#d9cdbd] bg-[#fbf8f2] p-3 shadow-xl md:hidden">
          {navigationData.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-[#68736b] hover:bg-[#eee7dc] hover:text-[#1d2b24]"
            >
              {item.title}
            </a>
          ))}
          <a
            href="https://wa.me/212674451180"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-sm text-[#d96f4f] hover:bg-[#eee7dc]"
          >
            {t("whatsapp")}
          </a>
          <a
            href="mailto:mouadguarraz@gmail.com"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-sm text-[#d96f4f] hover:bg-[#eee7dc]"
          >
            {t("talk")}
          </a>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </nav>
      )}
    </header>
  );
}

function LanguageSwitcher({ language, setLanguage }: { language: Language; setLanguage: (language: Language) => void }) {
  return (
    <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#68736b]" aria-label="Language">
      {(["en", "fr", "ar"] as Language[]).map((item) => (
        <button key={item} type="button" onClick={() => setLanguage(item)} className={`rounded-full px-2 py-1 ${language === item ? "bg-[#1d2b24] text-[#f4f0e8]" : "hover:bg-[#e8dfd1]"}`}>
          {item}
        </button>
      ))}
    </div>
  );
}
