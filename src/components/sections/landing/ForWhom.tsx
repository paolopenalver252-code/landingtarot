import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const PROFILES = [
  "Estás atravesando un cambio importante.",
  "Quieres comprender mejor una situación personal.",
  "Buscas conocerte desde una perspectiva diferente.",
  "Sientes que ciertos patrones se repiten.",
  "Estás explorando una nueva etapa de tu vida.",
  "Quieres detenerte y observar tu proceso con mayor profundidad.",
];

/**
 * Perfiles presentados como índice editorial (número + línea), sin iconos.
 */
export default function ForWhom() {
  return (
    <section id="para-quien" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="¿Para quién puede ser?"
            title="Quizás este sea tu momento para mirar hacia dentro."
            description="Puede ser especialmente interesante para ti si estás atravesando un momento de cambio, búsqueda o necesidad de claridad."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
          {PROFILES.map((profile, index) => (
            <Reveal key={profile} delay={index * 70}>
              <div className="flex items-start gap-5 border-t border-primary/10 pt-6">
                <span className="font-heading text-2xl leading-none text-accent/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-ink-muted text-body">{profile}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
