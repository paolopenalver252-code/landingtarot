import { mainSiteUrl } from "@/lib/seo";

export type NavItem = {
  label: string;
  href: string;
};

/**
 * Navegación global de marca (Header y Footer). Esta landing vive en un
 * dominio independiente del resto de PSAI FLOW ACADEMY, así que cada
 * entrada apunta de vuelta a la web principal (@/lib/seo mainSiteUrl) en
 * lugar de a rutas de este proyecto, que no existen aquí.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: mainSiteUrl("/") },
  { label: "Método PSAI FLOW", href: mainSiteUrl("/metodo-psai-flow") },
  { label: "La Academia", href: mainSiteUrl("/academia") },
  { label: "Cursos", href: mainSiteUrl("/cursos") },
  { label: "Consultas", href: mainSiteUrl("/consultas") },
  { label: "Limpieza Energética", href: mainSiteUrl("/limpieza-energetica-proteccion") },
  { label: "Libros", href: mainSiteUrl("/libros") },
  { label: "Contacto", href: mainSiteUrl("/contacto") },
];

export const LEGAL_ITEMS: NavItem[] = [
  { label: "Aviso legal", href: mainSiteUrl("/legal/aviso-legal") },
  { label: "Política de privacidad", href: mainSiteUrl("/legal/privacidad") },
  { label: "Política de cookies", href: mainSiteUrl("/legal/cookies") },
];
