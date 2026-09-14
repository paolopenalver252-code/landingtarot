"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/navigation";
import { mainSiteUrl } from "@/lib/seo";
import Button from "@/components/ui/Button";

/**
 * Header global de marca — fijo (sticky), fondo blanco con efecto glass y
 * sombra sutil al hacer scroll. Mismo diseño que en la web principal de
 * PSAI FLOW ACADEMY.
 *
 * A diferencia del proyecto principal, aquí no existe un Hero oscuro a
 * pantalla completa en "/" (esta landing siempre tuvo un Hero claro), así
 * que el header nace siempre sólido — el mismo comportamiento que ya tenía
 * esta página cuando vivía como sub-página del sitio principal — sin la
 * lógica de header transparente que solo aplicaba a la Home de ese sitio.
 * Los enlaces de navegación apuntan de vuelta a la web principal, que vive
 * en un dominio independiente (ver @/lib/navigation).
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

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-primary/5 bg-surface/80 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "shadow-header" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between gap-6 px-6 lg:px-10">
        {/* Logo — wordmark de texto en tanto no se reciba el logotipo definitivo */}
        <Link
          href="/"
          className="flex shrink-0 flex-col leading-none transition-opacity duration-300 hover:opacity-75"
        >
          <span className="font-heading text-2xl text-primary transition-colors duration-500">
            PSAI FLOW
          </span>
          <span className="text-[0.65rem] font-sans uppercase tracking-[0.3em] text-accent-text transition-colors duration-500">
            Academy
          </span>
        </Link>

        {/* Navegación desktop — a partir de xl: por debajo, 10 ítems no caben
            con elegancia en una sola línea, así que se usa el menú hamburguesa. */}
        <nav aria-label="Principal" className="hidden min-w-0 flex-1 justify-center xl:flex">
          <ul className="flex items-center gap-4 2xl:gap-7">
            {NAV_ITEMS.map((item) => (
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

        {/* CTA desktop — orientado a conversión (motor comercial: servicios
            1:1), coherente con el CTA principal del sitio. */}
        <div className="hidden shrink-0 xl:block">
          <Button href={mainSiteUrl("/consultas")} variant="accent" size="sm">
            Reservar consulta
          </Button>
        </div>

        {/* Botón hamburguesa */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className="relative flex h-10 w-10 shrink-0 items-center justify-center xl:hidden"
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
        className={`overflow-hidden bg-surface/95 backdrop-blur-md transition-[max-height,opacity] duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] xl:hidden ${
          menuOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Principal (móvil)" className="px-6 pb-8 pt-2">
          <ul className="flex flex-col divide-y divide-primary/10">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-primary transition-colors duration-300 hover:text-accent-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={mainSiteUrl("/consultas")} variant="accent" size="sm" className="w-full">
              Reservar consulta
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
