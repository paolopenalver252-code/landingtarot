import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    title: "Reserva",
    description: "Solicita tu consulta y encuentra el espacio adecuado para ti.",
  },
  {
    title: "Exploramos",
    description: "Durante la sesión se profundiza en aquello que quieres comprender o explorar.",
  },
  {
    title: "Nueva perspectiva",
    description:
      "La consulta se convierte en un espacio para observar, reflexionar y obtener nuevas perspectivas sobre tu proceso.",
  },
];

/**
 * Círculo numerado + conector punteado, ampliado con una descripción por
 * paso — horizontal en escritorio, vertical en móvil.
 */
export default function Experience() {
  return (
    <section id="la-consulta" className="scroll-mt-24 bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="La experiencia" title="Una consulta. Un espacio para ti." />
        </Reveal>

        <div className="mt-16 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-1 items-start sm:contents">
              <Reveal
                delay={index * 120}
                className="flex flex-1 flex-col items-center gap-4 text-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-text font-heading text-lg text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl text-primary">{step.title}</h3>
                <p className="max-w-[16rem] text-sm leading-relaxed text-ink-muted text-body">
                  {step.description}
                </p>
              </Reveal>
              {index < STEPS.length - 1 ? (
                <div
                  aria-hidden
                  className="hidden flex-1 border-t border-dashed border-accent/30 sm:mt-6 sm:block"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
