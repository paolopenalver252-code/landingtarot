import Reveal from "@/components/ui/Reveal";
import Purpose from "@/components/sections/landing/Purpose";
import Questions from "@/components/sections/landing/Questions";

/**
 * Presentación del Oráculo Despertar como una sola pieza editorial:
 * introducción → capítulo 01 (para qué sirve) → transición → capítulo 02
 * (qué puedes explorar). El fondo pasa de marfil a beige justo en la frase
 * de transición, en vez de cortar en dos bandas.
 */
export default function Introduction() {
  return (
    <section aria-labelledby="introduccion-titulo" className="bg-surface">
      <div id="introduccion" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 pt-28 lg:px-8 lg:pb-36 lg:pt-40">
        <Reveal>
          <p className="flex items-center gap-4 text-sm font-medium text-accent-text">
            <span aria-hidden className="h-px w-10 bg-accent-text" />
            Oráculo Despertar
          </p>
          <h2
            id="introduccion-titulo"
            className="mt-8 max-w-4xl font-heading text-5xl leading-[1.02] text-primary sm:text-6xl lg:text-8xl"
          >
            Diálogo y reflexión, a tu medida.
          </h2>
        </Reveal>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <Reveal delay={150} className="lg:col-span-5 lg:col-start-7">
            <p className="mt-10 max-w-xl text-ink-muted text-body lg:mt-14">
              El Oráculo Despertar es un espacio de diálogo y reflexión individual: un momento para
              detenerte en aquello que deseas mejorar en tu vida, ponerlo en palabras y mirarlo con
              calma, a través de una lectura de cartas u oráculos pensada para ti.
            </p>
          </Reveal>
        </div>
      </div>

      <Purpose />

      <div className="bg-linear-to-b from-surface to-surface-alt">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center lg:py-32">
          <span aria-hidden className="h-16 w-px bg-accent/70" />
          <p className="mt-8 font-heading text-2xl italic leading-snug text-primary sm:text-3xl lg:text-4xl">
            De lo que te preocupa, a las preguntas que pueden abrirte camino.
          </p>
          <span aria-hidden className="mt-8 h-16 w-px bg-accent/70" />
        </Reveal>
      </div>

      <div className="bg-surface-alt">
        <Questions />
      </div>
    </section>
  );
}
