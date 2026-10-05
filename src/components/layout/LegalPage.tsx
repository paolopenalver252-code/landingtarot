import type { ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

/**
 * Armazón compartido por las tres páginas legales (aviso legal, privacidad,
 * cookies) — cabecera consistente con el resto del sitio y un contenedor de
 * lectura estrecho para el texto. El contenido de cada página se compone a
 * mano (h2/h3/p/ul con las mismas clases), sin un sistema de "prose"
 * genérico que no hace falta para solo tres páginas.
 */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="bg-surface py-28 lg:py-36">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-5 font-heading text-3xl leading-tight text-primary sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-ink-muted text-body">Última actualización: {updated}</p>

        <div className="mt-12 flex flex-col [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:text-primary [&_p]:mt-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-ink-muted [&_p]:text-body [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-base [&_ul]:leading-relaxed [&_ul]:text-ink-muted [&_ul]:text-body [&_strong]:text-primary [&_strong]:font-medium [&_a]:text-accent-text [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </div>
    </article>
  );
}
