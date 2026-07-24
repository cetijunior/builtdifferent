import type { Metadata } from "next";
import { Anton, DM_Sans, JetBrains_Mono } from "next/font/google";
import { AppShell } from "@/components/app-shell";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://builtdifferent-bice.vercel.app",
  ),
  title: "Built Different 3.0 — October 24–25 · Tirana | Pasquale Minasi",
  description:
    "The system that built a multi-million euro empire — taught live in Tirana. Sales. Leadership. Discipline. 1,000+ tickets. Built Different 3.0 with Pasquale Minasi.",
  openGraph: {
    title: "Built Different 3.0 — Tirana, October 24–25, 2026",
    description:
      "Operator-grade event. No theory. No mercy. Secure your seat.",
    type: "website",
    siteName: "Built Different",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built Different 3.0 — Tirana, October 24–25, 2026",
    description:
      "Operator-grade event. No theory. No mercy. Secure your seat.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteConfig.event.name,
  startDate: siteConfig.event.datesIso,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: siteConfig.event.venue,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sheshi Italia",
      addressLocality: siteConfig.event.city,
      addressCountry: siteConfig.event.country,
    },
  },
  organizer: {
    "@type": "Person",
    name: "Pasquale Minasi",
    url: siteConfig.instagram.founder,
  },
  offers: {
    "@type": "Offer",
    url: siteConfig.stripe.standard,
    price: "249",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${dmSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-bg-void text-fg">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
