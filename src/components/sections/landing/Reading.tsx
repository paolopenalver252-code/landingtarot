import Reveal from "@/components/ui/Reveal";
import OraclePanel from "@/components/oracle/OraclePanel";
import OracleInvitation from "@/components/oracle/OracleInvitation";
import { ORACULO_DESPERTAR } from "@/lib/oracle";

/**
 * La lectura: cómo funciona (de 3 a 22 cartas u oráculos) y qué se lleva la
 * persona (la grabación). Columna editorial fija a la izquierda y el detalle
 * a la derecha — el mismo esquema que "¿Para quién puede ser?".
 */
export default function Reading() {
  return (
    <section
      id="la-lectura"
      aria-labelledby="la-lectura-titulo"
      className="scroll-mt-24 bg-surface-alt py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-[38%_1fr]">
          <Reveal className="flex flex-col gap-6 lg:sticky lg:top-32 lg:h-fit">
            <h2
              id="la-lectura-titulo"
              className="font-heading text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl"
            >
              La lectura
            </h2>
            <p className="font-heading text-2xl italic leading-snug text-primary/80 sm:text-3xl">
              Personalizada, y grabada para ti.
            </p>
            <p className="max-w-md text-ink-muted text-body">
              El Oráculo Despertar no empieza con la pregunta «¿qué va a pasar?». Empieza con aquello
              que te preocupa o que deseas mejorar, y lo recorre contigo para ayudarte a reconocer
              tus recursos y valorar con más claridad las decisiones que tienes delante.
            </p>
            <p className="font-heading text-lg italic text-accent-text">
              Escucharte, reconocer, reflexionar, decidir.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-14">
              <OraclePanel oracle={ORACULO_DESPERTAR} />
              <OracleInvitation oracle={ORACULO_DESPERTAR} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
