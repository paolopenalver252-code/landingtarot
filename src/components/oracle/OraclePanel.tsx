import { formatCardCount, type Oracle } from "@/lib/oracle";
import OracleCardSpread from "@/components/oracle/OracleCardSpread";

/** Más de 9 cartas no caben en una fila legible en móvil. */
const MAX_VISIBLE_CARDS = 9;

/**
 * Cómo es la lectura y qué se lleva la persona. El rango de cartas ocupa el
 * lugar del numeral grande (mismo lenguaje que los capítulos 01/02): se
 * pintan las mínimas y el resto en contorno, y el rango exacto se da en texto.
 */
export default function OraclePanel({ oracle }: { oracle: Oracle }) {
  const { cards } = oracle;
  const ghostCards = Math.max(Math.min(cards.max, MAX_VISIBLE_CARDS) - cards.min, 0);

  return (
    <div className="flex flex-col gap-14">
      <div className="flex items-end gap-5 sm:gap-7">
        <span aria-hidden className="shrink-0 whitespace-nowrap font-heading text-6xl leading-[0.8] text-accent-text lining-nums sm:text-8xl">
          {cards.min}–{cards.max}
        </span>
        <div className="flex flex-col gap-1 pb-1">
          <h3 className="font-heading text-2xl leading-tight text-primary sm:text-3xl">
            Cartas u oráculos
          </h3>
          <p className="text-sm text-ink-muted">{formatCardCount(cards)} en cada lectura</p>
        </div>
      </div>

      <OracleCardSpread count={cards.min} ghostCount={ghostCards} />

      <p className="max-w-xl font-heading text-xl italic leading-snug text-primary sm:text-2xl">
        Cada lectura parte de aquello que quieres comprender o mejorar, y se recorre en diálogo
        contigo.
      </p>

      <div>
        <h4 className="font-sans! text-sm font-semibold text-primary">Qué te llevas</h4>
        <p className="mt-4 max-w-xl text-ink-muted text-body">{oracle.outcome}</p>
      </div>
    </div>
  );
}
