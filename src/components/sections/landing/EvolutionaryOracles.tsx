import OracleExplorer from "@/components/oracle/OracleExplorer";
import { EVOLUTIONARY_ORACLES } from "@/lib/oracles";

/**
 * Oráculos Evolutivos: presentación del concepto + índice/colección de
 * oráculos. Todavía sin motor de lectura (sin cartas aleatorias ni
 * significados): solo el recorrido y la invitación a solicitar consulta.
 */
export default function EvolutionaryOracles() {
  return (
    <section
      id="oraculos-evolutivos"
      aria-labelledby="oraculos-evolutivos-titulo"
      className="scroll-mt-24 bg-surface-alt py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <OracleExplorer
          oracles={EVOLUTIONARY_ORACLES}
          intro={
            <div className="flex flex-col gap-6">
              <h2
                id="oraculos-evolutivos-titulo"
                className="font-heading text-4xl leading-[1.08] text-primary sm:text-5xl lg:text-6xl"
              >
                Oráculos Evolutivos
              </h2>
              <p className="font-heading text-2xl italic leading-snug text-primary/80 sm:text-3xl">
                Una nueva forma de mirar tus decisiones.
              </p>
              <p className="max-w-md text-ink-muted text-body">
                Un Oráculo Evolutivo no empieza con la pregunta «¿qué va a pasar?». Empieza con una
                situación concreta que estás viviendo y la recorre como un camino de análisis: para
                comprenderla mejor, detectar qué puede estar faltando y potenciar tus talentos y
                habilidades a la hora de decidir.
              </p>
              <p className="font-heading text-lg italic text-accent-text">
                Comprender, analizar, potenciar, avanzar.
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
