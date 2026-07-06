import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { EVENT, SITE_URL } from "@/lib/data";
import "./globals.css";

// Montserrat em títulos e corpo — mais limpa e profissional. A "voz" marcante
// da marca (Monument Extended) fica reservada à logo. Os pesos altos (800/900)
// dão o impacto dos títulos sem o peso "blocado" da Monument em tudo.
const body = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

const OG_DESCRIPTION =
  "29 de maio de 2027 · Paz Church Barueri. A conferência para quem trabalha com a próxima geração.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PAZ Kids Conference 2027 | Barueri",
    template: "%s | PAZ Kids Conference 2027",
  },
  description:
    "A conferência para quem tem um coração voltado para a próxima geração. 29 de maio de 2027, Paz Church Barueri. Voluntários, pais, educadores e líderes do ministério infantil.",
  applicationName: "PAZ Kids Conference 2027",
  keywords: [
    "PazKids",
    "Conferência infantil",
    "Ministério infantil",
    "Paz Church Barueri",
    "Conferência cristã 2027",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "PAZ Kids Conference 2027",
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: "PAZ Kids Conference 2027",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAZ Kids Conference 2027",
    description: OG_DESCRIPTION,
  },
};

// Rich result para eventos (Google Search). Datas em ISO-8601 com fuso de
// Brasília; o restante reaproveita os dados centralizados em lib/data.
const EVENT_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: EVENT.name,
  startDate: "2027-05-29T09:00:00-03:00",
  endDate: "2027-05-29T21:00:00-03:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description:
    "A conferência para quem tem um coração voltado para a próxima geração — voluntários, pais, educadores e líderes do ministério infantil.",
  image: [`${SITE_URL}/opengraph-image`],
  url: SITE_URL,
  location: {
    "@type": "Place",
    name: EVENT.venue,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Vinte e Seis de Março, 989 — Vila São João",
      addressLocality: "Barueri",
      addressRegion: "SP",
      postalCode: "06401-050",
      addressCountry: "BR",
    },
  },
  offers: {
    "@type": "Offer",
    name: "1º lote",
    price: "130.00",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: SITE_URL,
  },
  organizer: {
    "@type": "Organization",
    name: "Paz Church Barueri",
    url: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#FBFAFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={body.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSONLD) }}
        />
        {children}
      </body>
    </html>
  );
}
