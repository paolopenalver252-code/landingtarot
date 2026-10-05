import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ScrollStack, { ScrollStackItem } from "@/components/reactbits/ScrollStack";

const PROFILES = [
  "Estás atravesando un cambio importante.",
  "Quieres comprender mejor una situación personal.",
  "Buscas conocerte desde una perspectiva diferente.",
  "Sientes que ciertos patrones se repiten.",
  "Estás explorando una nueva etapa de tu vida.",
  "Quieres detenerte y observar tu proceso con mayor profundidad.",
];

/**
 * Composición de dos zonas: columna editorial estable a la izquierda
 * (título + intro, sticky en desktop) y un Scroll Stack a la derecha —
 * cada perfil existente se convierte en una tarjeta grande y legible que
 * se apila con profundidad muy sutil a medida que se hace scroll normal
 * (sin scroll hijacking, ver @/components/reactbits/ScrollStack).
 */
export default function ForWhom() {
  return (
    <section id="para-quien" className="scroll-mt-24 bg-surface py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-[38%_1fr]">
          {/* Columna izquierda — editorial, estable */}
          <Reveal className="lg:sticky lg:top-32 lg:h-fit">
            <SectionHeading
              align="left"
              eyebrow="¿Para quién puede ser?"
              title="Quizás este sea tu momento para mirar hacia dentro."
              description="Puede ser especialmente interesante para ti si estás atravesando un momento de cambio, búsqueda o necesidad de claridad."
            />
            <span aria-hidden className="mt-10 block h-16 w-px bg-accent/50" />
          </Reveal>

          {/* Columna derecha — Scroll Stack */}
          <Reveal delay={150}>
            <ScrollStack
              itemDistance={90}
              itemScale={0.035}
              itemStackDistance={20}
              stackPosition={130}
              baseScale={0.9}
              blurAmount={0.6}
            >
              {PROFILES.map((profile, index) => (
                <ScrollStackItem
                  key={profile}
                  className="flex min-h-[56vh] flex-col justify-center rounded-3xl border border-white/10 bg-primary p-8 shadow-soft sm:min-h-[60vh] sm:p-12 lg:min-h-[64vh] lg:p-14"
                >
                  <span className="font-heading text-6xl leading-none text-accent sm:text-7xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-8 max-w-md font-heading text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
                    {profile}
                  </p>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
