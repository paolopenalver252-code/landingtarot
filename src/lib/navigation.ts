export type NavItem = {
  label: string;
  href: string;
};

/**
 * Navegación propia de esta landing — tres anchors internos hacia sus
 * propias secciones. Nada enlaza fuera: la página debe poder recorrerse de
 * principio a fin sin salir de sí misma.
 */
export const LANDING_NAV_ITEMS: NavItem[] = [
  { label: "Para qué sirve", href: "#para-que-sirve" },
  { label: "La lectura", href: "#la-lectura" },
  { label: "Cómo funciona", href: "#como-funciona" },
];

/**
 * Enlaces legales — páginas propias de esta landing (ver @/app/aviso-legal,
 * @/app/privacidad y @/app/cookies), para que el sitio sea completamente
 * autónomo.
 */
export const LEGAL_ITEMS: NavItem[] = [
  { label: "Aviso legal", href: "/aviso-legal" },
  { label: "Política de privacidad", href: "/privacidad" },
  { label: "Política de cookies", href: "/cookies" },
];
