import { ArrowRight } from "lucide-react";
import { formatCardCount, type EvolutionaryOracle } from "@/lib/oracles";
import OracleCardSpread from "@/components/oracle/OracleCardSpread";
import OracleQuestions from "@/components/oracle/OracleQuestions";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/** Más de 9 cartas no caben en una fila legible en móvil. */
const MAX_VISIBLE_CARDS = 9;

/**
 * Contenido de un oráculo. Las fases van en numeración romana para no
 * confundirse con la numeración de la colección ("01", "02"…). Con un nº
 * de cartas variable se pintan las mínimas y el resto en contorno; el rango
 * exacto se da en texto.
 */
export default function OraclePanel({ oracle }: { oracle: EvolutionaryOracle }) {
  const { cards } = oracle;
  const solidCards = typeof cards === "number" ? Math.min(cards, MAX_VISIBLE_CARDS) : cards.min;
  const ghostCards =
    typeof cards === "number" ? 0 : Math.max(Math.min(cards.max, MAX_VISIBLE_CARDS) - cards.min, 0);

  return (
    <div className="animate-oracle-in flex flex-col gap-14">
      <div className="flex items-end gap-5 sm:gap-7">
        <span aria-hidden className="font-heading text-7xl leading-[0.8] text-accent-text lining-nums sm:text-8xl">
          {oracle.number}
        </span>
        <div className="flex flex-col gap-1 pb-1">
          <h3 className="font-heading text-2xl leading-tight text-primary sm:text-3xl">
            <span className="sr-only">Oráculo {oracle.number}: </span>
            {oracle.name}
          </h3>
          <p className="text-sm text-ink-muted">{formatCardCount(cards)}</p>
        </div>
      </div>

      <OracleCardSpread count={solidCards} ghostCount={ghostCards} />

      <p className="max-w-xl font-heading text-xl italic leading-snug text-primary sm:text-2xl">
        {oracle.objective}
      </p>

      {oracle.phases.length > 0 ? (
        <div>
          <h4 className="font-sans! text-sm font-semibold text-primary">El método</h4>
          <ol className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {oracle.phases.map((phase, index) => (
              <li key={phase.id} className="relative border-t border-primary/20 pt-5 sm:pr-6">
                {index < oracle.phases.length - 1 ? (
                  <ArrowRight
                    aria-hidden
                    size={16}
                    strokeWidth={1.5}
                    className="absolute -top-2 right-0 hidden bg-surface-alt pl-1 text-accent-text sm:block"
                  />
                ) : null}
                <span className="font-heading text-lg text-accent-text">{ROMAN[index] ?? index + 1}</span>
                <span className="mt-1 block font-heading text-2xl text-primary">{phase.name}</span>
                <p className="mt-3 text-ink-muted text-body">{phase.description}</p>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      <OracleQuestions questions={oracle.questions} />

      {oracle.outcome ? (
        <div>
          <h4 className="font-sans! text-sm font-semibold text-primary">Qué te llevas</h4>
          <p className="mt-4 max-w-xl text-ink-muted text-body">{oracle.outcome}</p>
        </div>
      ) : null}
    </div>
  );
}
