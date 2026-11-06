"use client";

import HeroSection from "@/components/ui/hero-01-utils/hero";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";
import Header from "@/components/ui/hero-01-utils/header";
import BrandSlider, {
  type BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";
import { useLanguage } from "@/lib/language";

export default function AgencyHeroSection() {
  const { t } = useLanguage();
  const avatarList: AvatarList[] = [
    { image: "M" },
    { image: "N" },
    { image: "Y" },
    { image: "R" },
  ];

  const navigationData: NavigationSection[] = [
    { title: t("home"), href: "#", isActive: true },
    { title: t("about"), href: "#about" },
    { title: t("services"), href: "#services" },
    { title: t("team"), href: "#team" },
    { title: t("work"), href: "#work" },
    { title: t("blog"), href: "#blog" },
  ];

  const brandList: BrandList[] = [
    { name: "Nike" },
    { name: "Spotify" },
    { name: "Notion" },
    { name: "Airbnb" },
    { name: "GitHub" },
  ];

  return (
    <>
      <Header navigationData={navigationData} />
      <div className="relative min-h-screen overflow-hidden bg-[#f4f0e8] text-[#1d2b24]">
        <main>
          <HeroSection avatarList={avatarList} />
          <BrandSlider brandList={brandList} />
        </main>
      </div>
    </>
  );
}
