export type JournalArticle = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  intro: string;
  takeaways: string[];
  sections: { title: string; text: string }[];
  accent: string;
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "creative-summit",
    category: "Event",
    date: "18.10.2025",
    title: "What we learned at the creative summit",
    excerpt: "A few notes on collaboration, culture, and building brands with a point of view.",
    intro:
      "The most useful conversations at a creative event rarely happen on stage. They happen between sessions, over coffee, and in the questions people are brave enough to ask out loud.",
    takeaways: [
      "Specific points of view create stronger collaboration.",
      "Culture is built through repeated details, not big statements.",
      "The best ideas leave room for other people to contribute.",
    ],
    sections: [
      {
        title: "Make the opinion visible",
        text: "A brand becomes memorable when it makes a clear choice. That choice does not need to be loud, but it does need to be specific enough for people to recognize and respond to it.",
      },
      {
        title: "Leave space for the room",
        text: "The strongest teams are not trying to prove that they already have every answer. They create enough clarity for different disciplines and perspectives to make the work better together.",
      },
    ],
    accent: "#d96f4f",
  },
  {
    slug: "meaningful-design",
    category: "Talk",
    date: "04.06.2025",
    title: "Inside our talk on meaningful design",
    excerpt: "The questions we brought to the room, and the ideas we took home with us.",
    intro:
      "Meaningful design is not about making every interface emotional. It is about understanding what matters to someone and removing everything that gets in the way.",
    takeaways: [
      "Usefulness is part of the visual language.",
      "Good constraints make decisions easier.",
      "Accessibility improves the idea for everyone.",
    ],
    sections: [
      {
        title: "Start with the moment",
        text: "Instead of asking what a product should contain, we ask what people should be able to do with confidence. That shift changes the hierarchy, the language, and the pace of the experience.",
      },
      {
        title: "Design is a series of invitations",
        text: "Every screen invites someone to look, understand, choose, or continue. When those invitations are clear, the interface feels generous rather than demanding.",
      },
    ],
    accent: "#9aa88f",
  },
  {
    slug: "idea-to-identity",
    category: "Workshop",
    date: "22.03.2025",
    title: "Workshop notes: from idea to identity",
    excerpt: "A practical look at how a strong creative direction comes together.",
    intro:
      "A creative direction does not arrive fully formed. It is built by making the right questions visible, testing the edges, and choosing what deserves to stay.",
    takeaways: [
      "Name the tension before searching for the style.",
      "Make many rough options before polishing one.",
      "A useful system is easier to extend than to explain.",
    ],
    sections: [
      {
        title: "Find the tension",
        text: "The most productive starting point is often the gap between what a brand is and what it wants to become. That tension gives the work energy and keeps the direction from becoming generic.",
      },
      {
        title: "Build a system, not a mood",
        text: "A strong identity can generate new decisions. We test a direction across language, layout, motion, and real content until it becomes a flexible way of working rather than a single beautiful image.",
      },
    ],
    accent: "#d7b995",
  },
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}
