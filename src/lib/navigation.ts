import { mainSiteUrl } from "@/lib/seo";

export type NavItem = {
  label: string;
  href: string;
};

/**
 * Navegación propia de esta landing — tres anchors internos hacia sus
 * propias secciones. Nada aquí enlaza a la web principal de PSAI FLOW
 * ACADEMY: esta página debe poder recorrerse de principio a fin sin salir
 * de sí misma.
 */
export const LANDING_NAV_ITEMS: NavItem[] = [
  { label: "Psicotarot", href: "#psicotarot" },
  { label: "Astrología", href: "#astrologia" },
  { label: "La experiencia", href: "#experiencia" },
];

/**
 * Enlaces legales — deliberadamente externos: esta landing no tiene sus
 * propias páginas de aviso legal, privacidad o cookies, así que apuntan a
 * las páginas reales de la web principal en vez de inventar contenido legal
 * propio. Es la única excepción a "todo enlace se queda dentro de la
 * landing".
 */
export const LEGAL_ITEMS: NavItem[] = [
  { label: "Aviso legal", href: mainSiteUrl("/legal/aviso-legal") },
  { label: "Política de privacidad", href: mainSiteUrl("/legal/privacidad") },
  { label: "Política de cookies", href: mainSiteUrl("/legal/cookies") },
];
