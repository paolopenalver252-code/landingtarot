import Reveal from "@/components/ui/Reveal";
import Psicotarot from "@/components/sections/landing/Psicotarot";
import AstrologiaCabalistica from "@/components/sections/landing/AstrologiaCabalistica";

/**
 * Psicotarot y Astrología Cabalística como una sola pieza editorial:
 * introducción → capítulo 01 → transición → capítulo 02. El fondo pasa de
 * marfil a beige justo en la frase de transición, en vez de cortar en dos
 * bandas. La conexión entre ambas la recoge después "La combinación".
 */
export default function Disciplines() {
  return (
    <section aria-labelledby="disciplinas-titulo" className="bg-surface">
      <div id="introduccion" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 pt-28 lg:px-8 lg:pb-36 lg:pt-40">
        <Reveal>
          <p className="flex items-center gap-4 text-sm font-medium text-accent-text">
            <span aria-hidden className="h-px w-10 bg-accent-text" />
            Psicotarot &amp; Astrología Cabalística
          </p>
          <h2
            id="disciplinas-titulo"
            className="mt-8 max-w-4xl font-heading text-5xl leading-[1.02] text-primary sm:text-6xl lg:text-8xl"
          >
            Dos formas de mirar hacia dentro.
          </h2>
        </Reveal>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          <Reveal delay={150} className="lg:col-span-5 lg:col-start-7">
            <p className="mt-10 max-w-xl text-ink-muted text-body lg:mt-14">
              El Psicotarot y la Astrología Cabalística pueden convertirse en herramientas de
              exploración y autoconocimiento. A través de sus símbolos y lenguajes, permiten observar
              situaciones, patrones y ciclos desde una perspectiva diferente, ayudando a abrir nuevas
              preguntas y encontrar mayor claridad en los procesos personales.
            </p>
          </Reveal>
        </div>
      </div>

      <Psicotarot />

      <div className="bg-linear-to-b from-surface to-surface-alt">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center lg:py-32">
          <span aria-hidden className="h-16 w-px bg-accent/70" />
          <p className="mt-8 font-heading text-2xl italic leading-snug text-primary sm:text-3xl lg:text-4xl">
            Del presente que estás viviendo, a los ciclos que lo atraviesan.
          </p>
          <span aria-hidden className="mt-8 h-16 w-px bg-accent/70" />
        </Reveal>
      </div>

      <div className="bg-surface-alt">
        <AstrologiaCabalistica />
      </div>
    </section>
  );
}
