import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "rfs studio — Independent Creative Studio",
    template: "%s | rfs studio",
  },
  description:
    "rfs studio builds distinctive identities and digital experiences for ambitious teams.",
  applicationName: "rfs studio",
  keywords: [
    "creative studio",
    "brand strategy",
    "web design",
    "digital experiences",
    "Morocco",
  ],
  authors: [{ name: "rfs studio" }],
  creator: "rfs studio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "rfs studio",
    title: "rfs studio — Independent Creative Studio",
    description:
      "Distinctive identities and digital experiences for ambitious teams.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "rfs studio — Independent Creative Studio",
    description:
      "Distinctive identities and digital experiences for ambitious teams.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
