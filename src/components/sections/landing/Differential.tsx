import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Watermark from "@/components/ui/Watermark";

/**
 * Sección más visual de la landing: compara Psicotarot y Astrología
 * Cabalística lado a lado sobre fondo navy.
 */
export default function Differential() {
  return (
    <section
      id="dos-lenguajes"
      className="relative scroll-mt-24 overflow-hidden bg-primary py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,163,95,0.15),transparent_60%)]"
      />
      <Watermark className="-bottom-24 -left-10 z-0" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="La combinación"
            title="Dos lenguajes. Una visión más profunda de ti."
            tone="dark"
          />
        </Reveal>

        <div className="mt-16 flex flex-col items-stretch gap-6 sm:flex-row sm:items-center sm:justify-center sm:gap-0">
          <Reveal delay={100} className="flex-1">
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Psicotarot
              </span>
              <p className="font-heading text-xl leading-snug text-white">
                Símbolos, situación presente, reflexión y perspectiva.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="flex shrink-0 items-center justify-center px-6 py-2">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 font-heading text-sm italic text-accent">
              vs
            </span>
          </Reveal>

          <Reveal delay={300} className="flex-1">
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Astrología Cabalística
              </span>
              <p className="font-heading text-xl leading-snug text-white">
                Carta natal, ciclos, patrones y visión evolutiva.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed text-mist text-body">
            Cuando ambas miradas se complementan, permiten observar una experiencia personal
            desde diferentes ángulos: lo que estás viviendo, cómo lo interpretas y qué patrones
            pueden estar presentes en tu proceso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
