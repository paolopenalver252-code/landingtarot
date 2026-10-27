import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

/**
 * Generadores de JSON-LD (Schema.org) de esta landing independiente.
 * Regla estricta: solo se incluyen campos con datos reales y confirmados. Nunca se rellenan teléfono, redes
 * sociales, precios, valoraciones o reseñas con datos de relleno — Google
 * penaliza el marcado con datos ficticios, y va contra la norma del
 * proyecto de no inventar información. La clienta mantiene el anonimato:
 * tampoco hay fundador, persona, dirección ni ubicación.
 */

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "es",
  };
}

/** Envuelve uno o varios nodos JSON-LD en un @graph con el contexto schema.org. */
export function jsonLdGraph(...nodes: Array<Record<string, unknown>>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
