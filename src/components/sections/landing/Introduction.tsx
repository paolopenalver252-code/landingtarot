import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

/**
 * Transición editorial tras el Hero: mucho espacio negativo, sin tarjeta ni
 * contenedor — un titular grande y un párrafo desplazado, como una doble
 * página de revista en vez de un bloque de contenido convencional.
 */
export default function Introduction() {
  return (
    <section id="introduccion" className="scroll-mt-24 bg-surface-alt py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Una nueva mirada</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-8 max-w-3xl font-heading text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-5xl">
            Mirar hacia dentro también es una forma de avanzar.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="ml-auto mt-12 max-w-xl text-base leading-relaxed text-ink-muted text-body">
            El Psicotarot y la Astrología Cabalística pueden convertirse en herramientas de
            exploración y autoconocimiento. A través de sus símbolos y lenguajes, permiten
            observar situaciones, patrones y ciclos desde una perspectiva diferente, ayudando a
            abrir nuevas preguntas y encontrar mayor claridad en los procesos personales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
