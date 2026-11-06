"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage, type Language } from "@/lib/language";

export interface NavigationSection {
  title: string;
  href: string;
  isActive?: boolean;
}

interface HeaderProps {
  navigationData: NavigationSection[];
}

const menuLayers = ["#d96f4f", "#9aa88f", "#d7b995"];

export default function Header({ navigationData }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !toggleRef.current?.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className="fixed left-0 top-0 z-[70] flex w-full items-center justify-between px-6 py-6 text-[#1d2b24] lg:px-10">
        <a
          href="#"
          onClick={closeMenu}
          className={`text-xl font-semibold tracking-[-0.06em] transition-colors ${
            open ? "text-[#f4f0e8]" : ""
          }`}
        >
          rfs<span className="text-[#d96f4f]">/</span>studio
        </a>
        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="staggered-navigation"
          onClick={() => setOpen((value) => !value)}
          className={`group flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] transition-colors ${
            open ? "text-[#f4f0e8]" : "text-[#1d2b24]"
          }`}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span
              className={`absolute h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                open ? "rotate-45" : ""
              }`}
            />
            <span
              className={`absolute h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                open ? "-rotate-45" : "rotate-90"
              }`}
            />
          </span>
        </button>
      </header>

      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] transition-[visibility] duration-500 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div className="absolute inset-0 bg-[#1d2b24]/30 backdrop-blur-sm" />
        {menuLayers.map((color, index) => (
          <div
            key={color}
            className={`absolute bottom-0 right-0 top-0 w-[min(88vw,34rem)] origin-right transition-transform duration-500 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              backgroundColor: color,
              transitionDelay: open ? `${index * 70}ms` : `${(menuLayers.length - index) * 50}ms`,
            }}
          />
        ))}
        <aside
          id="staggered-navigation"
          ref={panelRef}
          aria-label="Main navigation"
          className={`absolute bottom-0 right-0 top-0 flex w-[min(82vw,31rem)] flex-col overflow-y-auto bg-[#fbf8f2] px-7 pb-8 pt-28 text-[#1d2b24] shadow-2xl transition-transform duration-500 md:px-12 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav>
            <ul className="space-y-2">
              {navigationData.map((item, index) => (
                <li key={`${item.href}-${index}`} className="overflow-hidden">
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-baseline gap-4 py-1 text-4xl font-semibold uppercase leading-none tracking-[-0.07em] transition-colors hover:text-[#d96f4f] md:text-6xl"
                  >
                    <span className="w-7 text-xs font-medium tracking-normal text-[#d96f4f]">
                      0{index + 1}
                    </span>
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t border-[#d9cdbd] pt-6">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#d96f4f]">
              Let&apos;s connect
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#68736b]">
              <a href="mailto:mouadguarraz@gmail.com" onClick={closeMenu} className="hover:text-[#1d2b24]">
                Email
              </a>
              <a
                href="https://wa.me/212674451180"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="hover:text-[#1d2b24]"
              >
                WhatsApp
              </a>
            </div>
            <div className="mt-6">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

function LanguageSwitcher({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#68736b]" aria-label="Language">
      {(["en", "fr", "ar"] as Language[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`rounded-full px-2 py-1 ${
            language === item ? "bg-[#1d2b24] text-[#f4f0e8]" : "hover:bg-[#e8dfd1]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
