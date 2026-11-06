import AgencyHeroSection from "@/components/ui/hero-01";
import PortfolioSections from "@/components/ui/portfolio-sections";
import { LanguageProvider } from "@/lib/language";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "rfs studio",
  description:
    "Independent creative studio building distinctive identities and digital experiences.",
  areaServed: "Worldwide",
  email: "mouadguarraz@gmail.com",
  telephone: "+212674451180",
  serviceType: ["Brand strategy", "Web design", "Digital experiences"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LanguageProvider>
        <AgencyHeroSection />
        <PortfolioSections />
      </LanguageProvider>
    </>
  );
}
