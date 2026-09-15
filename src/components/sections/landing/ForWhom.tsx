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
 * Perfiles presentados como índice editorial interactivo (número + línea),
 * sin iconos ni tarjetas: en hover, un desplazamiento mínimo, una línea
 * dorada y un cambio muy sutil de contraste.
 */
export default function ForWhom() {
  return (
    <section id="para-quien" className="scroll-mt-24 bg-surface py-28 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="¿Para quién puede ser?"
            title="Quizás este sea tu momento para mirar hacia dentro."
            description="Puede ser especialmente interesante para ti si estás atravesando un momento de cambio, búsqueda o necesidad de claridad."
          />
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
          {PROFILES.map((profile, index) => (
            <Reveal key={profile} delay={index * 70}>
              <div className="group relative flex items-start gap-5 border-t border-primary/10 py-6 transition-transform duration-300 ease-out hover:translate-x-1.5">
                <span className="font-heading text-2xl leading-none text-accent/50 transition-colors duration-300 group-hover:text-accent-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-relaxed text-ink-muted transition-colors duration-300 text-body group-hover:text-ink">
                  {profile}
                </p>
                <span
                  aria-hidden
                  className="absolute -bottom-px left-0 h-px w-0 bg-accent transition-all duration-300 ease-out group-hover:w-10"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
