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
    { image: "https://i.pravatar.cc/100?img=12" },
    { image: "https://i.pravatar.cc/100?img=32" },
    { image: "https://i.pravatar.cc/100?img=47" },
    { image: "https://i.pravatar.cc/100?img=5" },
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
    { image: "https://cdn.simpleicons.org/nike/111111", lightimg: "", name: "Nike" },
    { image: "https://cdn.simpleicons.org/spotify/111111", lightimg: "", name: "Spotify" },
    { image: "https://cdn.simpleicons.org/notion/111111", lightimg: "", name: "Notion" },
    { image: "https://cdn.simpleicons.org/airbnb/111111", lightimg: "", name: "Airbnb" },
    { image: "https://cdn.simpleicons.org/github/111111", lightimg: "", name: "GitHub" },
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
