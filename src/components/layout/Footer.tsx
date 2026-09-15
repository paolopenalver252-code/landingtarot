import Link from "next/link";
import { LEGAL_ITEMS } from "@/lib/navigation";
import Reveal from "@/components/ui/Reveal";

// TODO: sustituir por las URLs reales de los perfiles del cliente.
const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

/**
 * Footer propio y minimalista de esta landing — no el footer corporativo
 * de 4 columnas de la web principal. Sin navegación a otras páginas de
 * PSAI FLOW ACADEMY; solo marca, redes, un enlace de contacto interno
 * (#consulta) y los tres enlaces legales, deliberadamente externos (ver
 * @/lib/navigation).
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-mist">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-7 px-6 py-20 text-center lg:px-8">
        <div className="flex flex-col items-center leading-none">
          <span className="font-heading text-2xl text-white">PSAI FLOW</span>
          <span className="mt-2 font-heading text-sm italic text-accent">
            Psicotarot &amp; Astrología Cabalística
          </span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
          {SOCIAL_LINKS.map((social, index) => (
            <li key={social.label} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden className="text-mist-subtle">
                  ·
                </span>
              ) : null}
              <a
                href={social.href}
                aria-label={social.label}
                className="text-mist transition-colors duration-300 hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href="#consulta"
          className="text-sm text-mist transition-colors duration-300 hover:text-accent"
        >
          Contacto
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-mist-subtle">
          {LEGAL_ITEMS.map((item, index) => (
            <li key={item.href} className="flex items-center gap-3">
              {index > 0 ? <span aria-hidden>·</span> : null}
              <Link href={item.href} className="transition-colors duration-300 hover:text-accent">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-2xl px-6 py-6 text-center text-xs text-mist-subtle lg:px-8">
          © {year} PSAI FLOW
        </div>
      </div>
    </footer>
  );
}
