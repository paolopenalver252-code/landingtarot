"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LANDING_NAV_ITEMS } from "@/lib/navigation";
import Button from "@/components/ui/Button";

/**
 * Header propio de esta landing — NO es la navegación corporativa de PSAI
 * FLOW ACADEMY. Solo tres anchors hacia las secciones de esta misma página
 * más el CTA de conversión; nada enlaza fuera de aquí. Al ser anchors (no
 * rutas), el pathname nunca cambia al navegar, así que el menú móvil se
 * cierra explícitamente en el onClick de cada enlace en vez de depender de
 * un cambio de ruta.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-primary/5 bg-surface/80 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "shadow-header" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between gap-6 px-6 lg:px-10">
        {/* Identidad: PSAI FLOW como marca, con el servicio como subtítulo —
            nunca "PSAI FLOW Academy", que pertenece a la web corporativa. */}
        <Link
          href="/"
          className="flex shrink-0 flex-col leading-none transition-opacity duration-300 hover:opacity-75"
        >
          <span className="font-heading text-2xl text-primary">PSAI FLOW</span>
          <span className="mt-1 font-heading text-[0.7rem] italic leading-snug text-accent-text">
            Psicotarot &amp; Astrología Cabalística
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden min-w-0 flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-8">
            {LANDING_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative whitespace-nowrap text-[13px] font-medium text-primary/70 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-accent-text hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href="#consulta" variant="accent" size="sm">
            Solicitar consulta
          </Button>
        </div>

        {/* Botón hamburguesa */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center lg:hidden"
        >
          <span
            className={`absolute h-px w-6 bg-primary transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-primary transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-primary transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Panel móvil */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-surface/95 backdrop-blur-md transition-[max-height,opacity] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Principal (móvil)" className="px-6 pb-8 pt-2">
          <ul className="flex flex-col divide-y divide-primary/10">
            {LANDING_NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block py-3 text-base font-medium text-primary transition-colors duration-300 hover:text-accent-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href="#consulta" variant="accent" size="sm" className="w-full" onClick={closeMenu}>
              Solicitar consulta
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
