import Link from "next/link";
import type { ReactNode } from "react";

/**
 * CTA editorial discreto para fondo claro: filete dorado + texto subrayado,
 * en vez de un botón píldora. El padding vertical da un área táctil cómoda.
 */
export default function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-start gap-3 self-start py-3 text-sm font-semibold text-primary"
    >
      <span aria-hidden className="mt-2.5 h-px w-8 shrink-0 bg-accent-text transition-all duration-300 group-hover:w-12" />
      <span className="underline decoration-primary/25 decoration-1 underline-offset-4 transition-colors duration-300 group-hover:decoration-accent-text">
        {children}
      </span>
    </Link>
  );
}
