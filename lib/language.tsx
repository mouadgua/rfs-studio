"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

export type Language = "en" | "fr" | "ar";

const translations = {
  en: {
    home: "Home", about: "About us", services: "Services", team: "Team",
    talk: "Let's talk", whatsapp: "WhatsApp", eyebrow: "Independent creative studio · Est. 2014",
    title: "We make brands impossible to ignore.", cta: "Start a project",
    descriptor: "Brand, digital & culture", intro: "We build distinctive identities and digital experiences for ambitious people shaping what's next.",
    trusted: "Trusted by teams", countries: "countries", collaborators: "Selected collaborators",
    aboutLabel: "About us", aboutTitle: "Small by design. Serious about making a difference.",
    aboutText: "rfs studio is an independent creative studio for founders and teams with something meaningful to say. We combine strategic clarity with expressive design to make work that moves people.",
    aboutSecondary: "Every brand has a story worth telling. We turn that story into a clear, expressive system that connects with the people who matter.",
    aboutCta: "Let's collaborate",
    servicesLabel: "Services", servicesNote: "From the first question to the final pixel, we make the process feel simple.",
    service1: "Brand strategy", service1Text: "Finding the sharpest point of view and turning it into a brand people remember.",
    service2: "Visual identity", service2Text: "Flexible identity systems that feel unmistakable wherever they show up.",
    service3: "Digital experiences", service3Text: "Websites and products that make complex ideas feel clear, useful, and alive.",
    teamLabel: "Team", teamTitle: "A compact team with a wide point of view.",
    teamText: "We are a small, senior team that brings strategy, design, and digital thinking into the same room.",
    teamSecondary: "Different disciplines, one shared belief: the best work starts with curiosity and ends with something people remember.",
    teamCta: "Meet the team",
    teamMinds: "creative minds", teamVision: "shared vision", teamPossibilities: "possibilities",
    work: "Work", workTitle: "Selected work with a point of view.", preview: "Preview", github: "GitHub", blog: "Blog",
    blogLabel: "Journal", blogTitle: "Notes from the field.", blogIntro: "Stories, lessons, and moments from the events and communities shaping our work.", blogRead: "Read the story",
    blogArticle1Title: "What we learned at the creative summit", blogArticle1Excerpt: "A few notes on collaboration, culture, and building brands with a point of view.",
    blogArticle2Title: "Inside our talk on meaningful design", blogArticle2Excerpt: "The questions we brought to the room, and the ideas we took home with us.",
    blogArticle3Title: "Workshop notes: from idea to identity", blogArticle3Excerpt: "A practical look at how a strong creative direction comes together.",
    storyLabel: "Who we are", storyYears: "years", storyProjects: "projects", storyCountries: "countries",
    storyTitle: "Crafting ideas that make a difference.", storyRole: "Strategy · Design · Digital",
    storyText: "We turn ambitious ideas into clear, expressive brand experiences that people can feel and remember.",
    storySecondary: "Our process blends curiosity, strategic thinking, and a deep respect for the details that make a project unmistakably yours.",
    storyCta: "Let's collaborate", storyOverviewTitle: "A clear point of view.", storyProcessTitle: "Made with intention.", storyImpactTitle: "Built to be remembered.",
    storyPoint1: "Strategy before decoration.", storyPoint2: "Design with a distinct voice.", storyPoint3: "Digital experiences that connect.",
    storyProcessText: "We turn complexity into a focused creative direction, then make every detail earn its place.",
    storyProcess1: "Listen deeply.", storyProcess2: "Find the sharpest idea.", storyProcess3: "Make it real.",
    storyImpactText: "The result is work that gives teams confidence and gives audiences a reason to care.",
    storyImpact1: "Clearer brand presence.", storyImpact2: "Stronger audience connection.", storyImpact3: "Momentum that lasts.",
    storyTabOverview: "Overview", storyTabProcess: "Process", storyTabImpact: "Impact",
    contactTitle: "Have a good one in mind?", contactText: "Let's make it impossible to ignore.",
  },
  fr: {
    home: "Accueil", about: "À propos", services: "Services", team: "Équipe",
    talk: "Parlons-en", whatsapp: "WhatsApp", eyebrow: "Studio créatif indépendant · Depuis 2014",
    title: "Nous créons des marques impossibles à ignorer.", cta: "Démarrer un projet",
    descriptor: "Stratégie, identité & digital", intro: "Nous créons des identités et des expériences digitales singulières pour les équipes qui façonnent demain.",
    trusted: "Ils nous font confiance", countries: "pays", collaborators: "Collaborations sélectionnées",
    aboutLabel: "À propos", aboutTitle: "Petit par choix. Grand par l'impact.",
    aboutText: "rfs studio est un studio créatif indépendant pour les fondateurs et les équipes qui ont quelque chose d'important à dire. Nous combinons clarté stratégique et design expressif.",
    aboutSecondary: "Chaque marque a une histoire à raconter. Nous la transformons en un système clair et expressif qui touche les bonnes personnes.",
    aboutCta: "Collaborons",
    servicesLabel: "Services", servicesNote: "De la première question au dernier pixel, nous simplifions chaque étape.",
    service1: "Stratégie de marque", service1Text: "Trouver le point de vue le plus juste et en faire une marque mémorable.",
    service2: "Identité visuelle", service2Text: "Des systèmes visuels flexibles et reconnaissables partout.",
    service3: "Expériences digitales", service3Text: "Des sites et produits qui rendent les idées complexes claires et vivantes.",
    teamLabel: "Équipe", teamTitle: "Une équipe agile avec une vision large.",
    teamText: "Nous sommes une équipe senior qui réunit stratégie, design et digital autour de la même table.",
    teamSecondary: "Des disciplines différentes, une même conviction : les meilleurs projets commencent par la curiosité.",
    teamCta: "Découvrir l'équipe",
    teamMinds: "esprits créatifs", teamVision: "vision partagée", teamPossibilities: "possibilités",
    work: "Projets", workTitle: "Une sélection de projets avec du caractère.", preview: "Voir le projet", github: "GitHub", blog: "Journal",
    blogLabel: "Journal", blogTitle: "Carnet de terrain.", blogIntro: "Des récits, des apprentissages et des moments vécus lors des événements qui nourrissent notre travail.", blogRead: "Lire l'article",
    blogArticle1Title: "Ce que nous avons retenu du creative summit", blogArticle1Excerpt: "Quelques réflexions sur la collaboration, la culture et les marques avec une vraie personnalité.",
    blogArticle2Title: "Retour sur notre talk autour du design utile", blogArticle2Excerpt: "Les questions posées pendant l'échange et les idées que nous en avons retenues.",
    blogArticle3Title: "Notes d'atelier : de l'idée à l'identité", blogArticle3Excerpt: "Comment une direction créative forte prend forme, étape par étape.",
    storyLabel: "Qui sommes-nous", storyYears: "ans d'expérience", storyProjects: "projets", storyCountries: "pays",
    storyTitle: "Des idées qui font la différence.", storyRole: "Stratégie · Design · Digital",
    storyText: "Nous transformons les idées ambitieuses en expériences de marque claires, expressives et mémorables.",
    storySecondary: "Notre méthode mêle curiosité, réflexion stratégique et attention aux détails qui rendent chaque projet unique.",
    storyCta: "Collaborons", storyOverviewTitle: "Un point de vue clair.", storyProcessTitle: "Pensé avec intention.", storyImpactTitle: "Fait pour durer.",
    storyPoint1: "La stratégie avant la décoration.", storyPoint2: "Un design avec une voix singulière.", storyPoint3: "Des expériences digitales qui connectent.",
    storyProcessText: "Nous transformons la complexité en une direction créative précise, puis chaque détail trouve sa juste place.",
    storyProcess1: "Écouter vraiment.", storyProcess2: "Trouver l'idée forte.", storyProcess3: "La rendre réelle.",
    storyImpactText: "Le résultat : un travail qui donne confiance aux équipes et une raison de s'intéresser aux publics.",
    storyImpact1: "Une présence plus claire.", storyImpact2: "Un lien plus fort.", storyImpact3: "Un élan durable.",
    storyTabOverview: "Vue d'ensemble", storyTabProcess: "Méthode", storyTabImpact: "Impact",
    contactTitle: "Une bonne idée en tête ?", contactText: "Rendons-la impossible à ignorer.",
  },
  ar: {
    home: "الرئيسية", about: "من نحن", services: "الخدمات", team: "الفريق",
    talk: "لنتحدث", whatsapp: "واتساب", eyebrow: "استوديو إبداعي مستقل · منذ 2014",
    title: "نصنع علامات تجارية يستحيل تجاهلها.", cta: "ابدأ مشروعاً",
    descriptor: "استراتيجية، هوية ورقمية", intro: "نبني هويات وتجارب رقمية مميزة للفرق التي تصنع المستقبل.",
    trusted: "يثق بنا فريق من", countries: "دولة", collaborators: "شركاء مختارون",
    aboutLabel: "من نحن", aboutTitle: "صغير عن قصد. جاد في صناعة الأثر.",
    aboutText: "rfs studio هو استوديو إبداعي مستقل للمؤسسين والفرق الذين لديهم ما يقولونه. نجمع بين الوضوح الاستراتيجي والتصميم المؤثر.",
    aboutSecondary: "لكل علامة تجارية قصة تستحق أن تُروى. نحولها إلى نظام واضح ومؤثر يصل إلى الأشخاص المناسبين.",
    aboutCta: "لنتعاون",
    servicesLabel: "الخدمات", servicesNote: "من السؤال الأول إلى آخر بكسل، نجعل العملية بسيطة.",
    service1: "استراتيجية العلامة", service1Text: "نجد الرؤية الأوضح ونحولها إلى علامة لا تُنسى.",
    service2: "الهوية البصرية", service2Text: "أنظمة بصرية مرنة ومميزة أينما ظهرت.",
    service3: "التجارب الرقمية", service3Text: "مواقع ومنتجات تجعل الأفكار المعقدة واضحة وحية.",
    teamLabel: "الفريق", teamTitle: "فريق صغير برؤية واسعة.",
    teamText: "نحن فريق صغير وخبير يجمع بين الاستراتيجية والتصميم والتفكير الرقمي.",
    teamSecondary: "تخصصات مختلفة وإيمان واحد: أفضل الأعمال تبدأ بالفضول وتنتهي بشيء لا يُنسى.",
    teamCta: "تعرّف على الفريق",
    teamMinds: "عقول إبداعية", teamVision: "رؤية مشتركة", teamPossibilities: "إمكانيات",
    work: "أعمالنا", workTitle: "مجموعة مختارة من المشاريع المميزة.", preview: "معاينة", github: "GitHub", blog: "المدونة",
    blogLabel: "يوميات", blogTitle: "ملاحظات من الميدان.", blogIntro: "قصص ودروس ولحظات من الفعاليات والمجتمعات التي تلهم عملنا.", blogRead: "اقرأ القصة",
    blogArticle1Title: "ما تعلمناه في القمة الإبداعية", blogArticle1Excerpt: "ملاحظات حول التعاون والثقافة وبناء علامات تجارية ذات شخصية واضحة.",
    blogArticle2Title: "من كواليس حديثنا عن التصميم المؤثر", blogArticle2Excerpt: "الأسئلة التي ناقشناها والأفكار التي عدنا بها.",
    blogArticle3Title: "ملاحظات ورشة العمل: من الفكرة إلى الهوية", blogArticle3Excerpt: "نظرة عملية على كيفية بناء اتجاه إبداعي قوي.",
    storyLabel: "من نحن", storyYears: "سنوات من الخبرة", storyProjects: "مشروعاً", storyCountries: "دولة",
    storyTitle: "نصنع أفكاراً تصنع الفرق.", storyRole: "استراتيجية · تصميم · رقمي",
    storyText: "نحوّل الأفكار الطموحة إلى تجارب علامات تجارية واضحة ومؤثرة ولا تُنسى.",
    storySecondary: "منهجنا يجمع بين الفضول والتفكير الاستراتيجي والاهتمام بالتفاصيل التي تجعل كل مشروع مميزاً.",
    storyCta: "لنتعاون", storyOverviewTitle: "رؤية واضحة.", storyProcessTitle: "نصنعه بقصد.", storyImpactTitle: "مصمم ليُتذكر.",
    storyPoint1: "الاستراتيجية قبل الزخرفة.", storyPoint2: "تصميم بصوت مميز.", storyPoint3: "تجارب رقمية تقرّب الناس.",
    storyProcessText: "نحوّل التعقيد إلى اتجاه إبداعي واضح، ثم نعطي كل تفصيل قيمته.",
    storyProcess1: "نستمع بعمق.", storyProcess2: "نجد الفكرة الأقوى.", storyProcess3: "نحوّلها إلى واقع.",
    storyImpactText: "النتيجة عمل يمنح الفرق الثقة ويمنح الجمهور سبباً للاهتمام.",
    storyImpact1: "حضور أوضح.", storyImpact2: "تواصل أقوى.", storyImpact3: "زخم يدوم.",
    storyTabOverview: "نظرة عامة", storyTabProcess: "المنهج", storyTabImpact: "الأثر",
    contactTitle: "لديك فكرة جيدة؟", contactText: "لنجعلها مستحيلة التجاهل.",
  },
} as const;

type TranslationKey = keyof typeof translations.en;
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const t = useCallback(
    (key: TranslationKey) => translations[language][key],
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
