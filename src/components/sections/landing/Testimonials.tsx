import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export type Testimonial = {
  quote: string;
  /** Nombre real de la persona, o sus iniciales si pide mantener el anonimato. Nunca inventado. */
  name: string;
  /** Opcional — p. ej. "Lectura del Oráculo Despertar". Nunca inventado. */
  context?: string;
};

type TestimonialsProps = {
  items: Testimonial[];
};

/**
 * Sección de testimonios — PREPARADA pero sin montar en app/page.tsx: no
 * existe ningún testimonio real en el proyecto todavía y esta landing no
 * inventa nombres ni citas. En cuanto el cliente facilite testimonios
 * reales, añádelos al array `items` (ver tipo Testimonial) e importa y
 * coloca <Testimonials items={...} /> en page.tsx — ya no hace falta
 * tocar nada más, el resto del sistema visual está listo.
 */
export default function Testimonials({ items }: TestimonialsProps) {
  if (items.length === 0) return null;

  return (
    <section className="scroll-mt-24 bg-surface py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Testimonios" title="Lo que cuentan quienes ya han vivido su lectura." />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <figure className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-primary/10 bg-surface-alt p-8">
                <blockquote className="font-heading text-lg italic leading-snug text-primary">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-primary">{item.name}</span>
                  {item.context ? (
                    <span className="text-xs text-ink-muted">{item.context}</span>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
