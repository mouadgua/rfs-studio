import AgencyHeroSection from "@/components/ui/hero-01";
import PortfolioSections from "@/components/ui/portfolio-sections";
import { LanguageProvider } from "@/lib/language";

export default function Home() {
  return (
    <LanguageProvider>
      <AgencyHeroSection />
      <PortfolioSections />
    </LanguageProvider>
  );
}
