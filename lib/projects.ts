export type Project = {
  slug: string;
  name: string;
  url: string;
  category: string;
  summary: string;
  description: string;
  preview?: string;
  accent: string;
  initials: string;
};

export const projects: Project[] = [
  {
    slug: "aether-dashboard",
    name: "Aether Dashboard",
    url: "https://aetherdashboard.ai.studio",
    category: "Data · Product",
    summary: "Tableau de bord analytique au design Bento UI.",
    description:
      "Aether Dashboard centralise les métriques financières et le suivi de performance en temps réel pour les PME et les freelances. L'interface Bento rend les informations complexes lisibles en un coup d'œil, tout en laissant la place aux alertes et aux décisions importantes.",
    preview: "/projects/aether-dashboard.png",
    accent: "#28d9e8",
    initials: "A",
  },
  {
    slug: "barberelite",
    name: "BarberElite",
    url: "https://barberelite-landing-page.ai.studio",
    category: "Branding · Landing page",
    summary: "Site-vitrine premium en glassmorphism et animations 3D.",
    description:
      "BarberElite transforme l'expérience de réservation d'un salon en un rituel digital premium. Une direction artistique sombre, des accents dorés et des animations immersives créent une présence haut de gamme qui attire une clientèle exigeante et automatise la prise de rendez-vous.",
    preview: "/projects/barber-elite.png",
    accent: "#d9ad2b",
    initials: "B",
  },
  {
    slug: "kollectif-cafe",
    name: "Kollectif Café",
    url: "https://kollectif-caf-de-sp-cialit.ai.studio",
    category: "Hospitality · E-commerce",
    summary: "Page vitrine néo-brutaliste avec menu filtrable.",
    description:
      "Kollectif Café affirme la personnalité d'un commerce de spécialité par une vitrine néo-brutaliste et un catalogue interactif. Le filtrage dynamique permet de parcourir rapidement les origines, torréfactions et formats disponibles.",
    accent: "#f0c26b",
    preview: "/projects/kollectif-cafe.png",
    initials: "K",
  },
  {
    slug: "clinique-espace-patient",
    name: "Clinique Espace Patient",
    url: "https://clinique-espace-patient.ai.studio",
    category: "Healthcare · Service",
    summary: "Portail médical en Soft UI avec calendrier et timeline.",
    description:
      "Clinique Espace Patient réduit les appels au standard grâce à un portail rassurant et accessible. La prise de rendez-vous autonome, l'historique digitalisé et la timeline de suivi réunissent les informations essentielles dans une expérience Soft UI apaisée.",
    accent: "#9bc5bd",
    preview: "/projects/clinique-espace-patient.png",
    initials: "C",
  },
  {
    slug: "neochrome-streetwear",
    name: "Neochrome Streetwear",
    url: "https://neochrome-y2k-cyber-streetwear.ai.studio",
    category: "Fashion · Commerce",
    summary: "Lookbook e-commerce Y2K au défilement horizontal.",
    description:
      "Neochrome Streetwear compose une expérience d'achat immersive autour d'un lookbook Y2K cyber. Le défilement horizontal, les contrastes chromés et les transitions éditoriales donnent aux collections le rythme d'une campagne tout en guidant naturellement vers la conversion.",
    accent: "#c39cff",
    preview: "/projects/neochrome-streetwear.png",
    initials: "N",
  },
  {
    slug: "domi-azure",
    name: "Domi Azure",
    url: "https://domi-azure.vercel.app",
    category: "Proptech · Dashboard",
    summary: "Gestionnaire de propriétés avec cartographie et tableaux.",
    description:
      "Domi Azure accompagne les agences immobilières dans le suivi opérationnel des locataires, des loyers et des statuts d'occupation. La cartographie interactive et les tableaux de données donnent une vision immédiatement exploitable du portefeuille.",
    preview: "/projects/domi-azure.png",
    accent: "#6884d7",
    initials: "D",
  },
  {
    slug: "cod-master",
    name: "COD Master",
    url: "https://cod-master-suivi-caisse-whatsapp.ai.studio",
    category: "Logistics · CRM",
    summary: "CRM Kanban pour le Cash on Delivery et WhatsApp.",
    description:
      "COD Master structure le suivi des expéditions locales, la réconciliation des paiements et la gestion des livreurs indépendants. Le Kanban donne à chaque équipe un état clair des commandes, avec WhatsApp au cœur des échanges opérationnels.",
    preview: "/projects/cod-master.png",
    accent: "#8ee29e",
    initials: "C",
  },
  {
    slug: "generateur-devis",
    name: "Générateur de Devis",
    url: "https://devis2.vercel.app",
    category: "Sales · Automation",
    summary: "Formulaire de tarification interactif, étape par étape.",
    description:
      "Le Générateur de Devis qualifie automatiquement les leads et calcule les prix en direct. Son formulaire progressif réduit la friction, tandis que la prévisualisation instantanée aide les équipes commerciales à accélérer l'envoi et l'encaissement.",
    preview: "/projects/devis-generator.png",
    accent: "#16d995",
    initials: "D",
  },
  {
    slug: "tarif-sync-pos",
    name: "Tarif Sync POS",
    url: "https://tarif-sync.vercel.app",
    category: "Retail · Operations",
    summary: "Système de caisse omnicanal et synchronisation des stocks.",
    description:
      "Tarif Sync POS synchronise instantanément les stocks entre boutique physique et boutique en ligne. L'interface permet de comparer un catalogue Excel, visualiser les écarts de prix et publier les mises à jour sans multiplier les outils.",
    preview: "/projects/tarif-sync.png",
    accent: "#7b72ff",
    initials: "T",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
