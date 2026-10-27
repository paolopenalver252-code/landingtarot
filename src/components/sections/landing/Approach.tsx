import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import TrueFocus from "@/components/reactbits/TrueFocus";

const NOT_THIS = ["Adivinación", "Respuestas cerradas", "Decisiones tomadas por ti"];

const THIS = ["Reflexión", "Autoconocimiento", "Nuevas perspectivas"];

/**
 * "Diferenciación": la frase central que antes vivía en el Hero ("No se
 * trata de saber qué ocurrirá / Se trata de comprender lo que está
 * ocurriendo") tiene aquí su propia sección, acompañada de un contraste
 * NO/SÍ tipográfico — sin iconos de check/cruz ni tabla comparativa, para
 * que se sienta editorial y no como un widget de producto.
 */
export default function Approach() {
  return (
    <section className="scroll-mt-24 bg-surface py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal className="flex flex-col items-center">
          <Eyebrow>El enfoque</Eyebrow>
        </Reveal>

        <p className="mt-10 font-heading text-3xl italic leading-snug text-primary sm:text-4xl lg:text-5xl">
          <TrueFocus
            segments={[
              { text: "No se trata de saber ", focused: true },
              { text: "qué ocurrirá.", focused: true, className: "text-primary/70" },
            ]}
          />
          <br />
          <TrueFocus
            segments={[
              { text: "Se trata de comprender ", focused: true },
              {
                text: "lo que está ocurriendo.",
                focused: true,
                className: "text-accent-text not-italic font-medium",
              },
            ]}
          />
        </p>

        <Reveal delay={150}>
          <div className="mx-auto mt-16 grid max-w-xl grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6">
            <div className="flex flex-col items-center gap-4 sm:items-end sm:text-right">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-subtle">
                No
              </span>
              <ul className="flex flex-col gap-3">
                {NOT_THIS.map((item) => (
                  <li key={item} className="font-heading text-lg text-ink-muted line-through decoration-ink-subtle/50">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-4 sm:items-start sm:text-left">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-text">
                Sí
              </span>
              <ul className="flex flex-col gap-3">
                {THIS.map((item) => (
                  <li key={item} className="font-heading text-lg text-primary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mx-auto mt-16 max-w-xl text-base leading-relaxed text-ink-muted text-body">
            El Oráculo Despertar no predice el futuro ni ofrece respuestas cerradas: es un espacio
            de diálogo y autoconocimiento, pensado para ayudarte a mirar tu situación desde otra
            perspectiva y decidir con más claridad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
