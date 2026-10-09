import { ArrowRight } from "lucide-react";
import type { EvolutionaryOracle } from "@/lib/oracles";
import OracleCardSpread from "@/components/oracle/OracleCardSpread";
import OracleQuestions from "@/components/oracle/OracleQuestions";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/**
 * Contenido de un oráculo. Las fases van en numeración romana para no
 * confundirse con la numeración de la colección ("01", "02"…).
 */
export default function OraclePanel({ oracle }: { oracle: EvolutionaryOracle }) {
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
          <p className="text-sm text-ink-muted">{oracle.cardCount} cartas</p>
        </div>
      </div>

      <OracleCardSpread count={oracle.cardCount} />

      <p className="max-w-xl font-heading text-xl italic leading-snug text-primary sm:text-2xl">
        {oracle.objective}
      </p>

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

      <OracleQuestions questions={oracle.questions} />
    </div>
  );
}
