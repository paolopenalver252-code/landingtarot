import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Manrope } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { DEFAULT_LOCALE, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/seo";
import { jsonLdGraph, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

// Solo se usa el peso 400 en todo el proyecto: sin peso muerto en cada carga.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Tipografía secundaria del sistema (párrafos, descripciones, labels, UI).
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Tipografía de los párrafos y textos descriptivos largos (clase .text-body).
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const PAGE_TITLE = SITE_TAGLINE;
const PAGE_DESCRIPTION = SITE_DESCRIPTION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PAGE_TITLE} | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "Oráculo Despertar",
    "Lectura de cartas",
    "Oráculo",
    "Autoconocimiento",
    "Reflexión personal",
    "Toma de decisiones",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: DEFAULT_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${manrope.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink font-sans">
        <JsonLd data={jsonLdGraph(organizationSchema(), websiteSchema())} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
