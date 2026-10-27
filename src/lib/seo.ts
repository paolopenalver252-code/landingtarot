import type { Metadata } from "next";

/**
 * Resuelve una URL de entorno con un valor por defecto — a prueba de que la
 * variable exista pero esté vacía (p. ej. definida en Vercel sin valor).
 * `??` por sí solo no cubre ese caso: solo cae al valor por defecto cuando
 * la variable es `undefined`, no cuando es `""`, y `new URL("")` revienta
 * el build (Invalid URL).
 */
function resolveEnvUrl(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return (trimmed ? trimmed : fallback).replace(/\/$/, "");
}

/**
 * Dominio de esta landing independiente — pendiente de confirmar el
 * dominio definitivo. En cuanto se conecte un dominio propio en Vercel,
 * basta con definir NEXT_PUBLIC_SITE_URL (o cambiar el valor por defecto
 * aquí) — metadataBase, canonical, sitemap, robots y JSON-LD lo consumen
 * desde este único sitio.
 */
export const SITE_URL = resolveEnvUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
  "https://TU-DOMINIO-PENDIENTE.vercel.app"
);

export const SITE_NAME = "Oráculo Despertar";

/** Complemento del nombre en el <title> de la home y en la imagen Open Graph. */
export const SITE_TAGLINE = "Lecturas para la reflexión personal";

export const SITE_DESCRIPTION =
  "Una lectura personalizada de 3 a 22 cartas u oráculos para reflexionar sobre tu momento, reconocer tus talentos y valorar tus decisiones. Incluye la grabación.";

export const DEFAULT_LOCALE = "es_ES";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  /** Palabras clave opcionales específicas de la página (además de las de marca). */
  keywords?: string[];
  noIndex?: boolean;
};

/**
 * Construye el bloque `Metadata` completo (title, description, canonical,
 * Open Graph, Twitter Card) de una página a partir de un único origen de
 * datos, para que ninguna quede desincronizada entre sí.
 */
export function buildPageMetadata({ title, description, path, keywords, noIndex }: PageMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  // El <title> ya recibe el nombre por la plantilla del layout; Open Graph y
  // Twitter no la heredan, así que se compone aquí.
  const socialTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: DEFAULT_LOCALE,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
