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
  { label: "Cómo funciona", href: "#como-funciona" },
];

/**
 * Enlaces legales — páginas propias de esta landing (ver @/app/aviso-legal,
 * @/app/privacidad y @/app/cookies), para que el sitio sea completamente
 * autónomo y no dependa de la web principal de PSAI FLOW ACADEMY.
 */
export const LEGAL_ITEMS: NavItem[] = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
];
