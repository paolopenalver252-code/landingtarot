"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";
import OraclePanel from "@/components/oracle/OraclePanel";
import OracleInvitation from "@/components/oracle/OracleInvitation";
import { formatCardCount, type EvolutionaryOracle } from "@/lib/oracles";

/**
 * Índice de oráculos (patrón de pestañas WAI-ARIA, con flechas/Inicio/Fin)
 * en la columna izquierda fija y el oráculo seleccionado a la derecha — el
 * mismo esquema editorial que "¿Para quién puede ser?". Con un solo oráculo
 * el índice ya funciona; añadir más en lib/oracles.ts no requiere tocar esto.
 */
export default function OracleExplorer({
  oracles,
  intro,
}: {
  oracles: EvolutionaryOracle[];
  intro: ReactNode;
}) {
  const [selectedId, setSelectedId] = useState(oracles[0]?.id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const panelId = useId();
  const selectedIndex = Math.max(
    oracles.findIndex((oracle) => oracle.id === selectedId),
    0
  );
  const selected = oracles[selectedIndex];
  if (!selected) return null;

  const selectAt = (index: number) => {
    const next = (index + oracles.length) % oracles.length;
    setSelectedId(oracles[next].id);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = {
      ArrowDown: selectedIndex + 1,
      ArrowRight: selectedIndex + 1,
      ArrowUp: selectedIndex - 1,
      ArrowLeft: selectedIndex - 1,
      Home: 0,
      End: oracles.length - 1,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    selectAt(moves[event.key]);
  };

  return (
    <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-[38%_1fr]">
      <Reveal className="flex flex-col gap-12 lg:sticky lg:top-32 lg:h-fit">
        {intro}

        <div>
          <div
            role="tablist"
            aria-label="Oráculos Evolutivos"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="border-b border-primary/20"
          >
            {oracles.map((oracle, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={oracle.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`oracle-tab-${oracle.id}`}
                  aria-selected={isSelected}
                  aria-controls={panelId}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedId(oracle.id)}
                  className="group flex w-full items-center gap-4 border-t border-primary/20 py-5 text-left"
                >
                  <span className="font-heading text-2xl text-accent-text lining-nums">{oracle.number}</span>
                  <span className="flex flex-1 flex-col">
                    <span
                      className={`font-heading text-xl transition-colors duration-300 ${
                        isSelected ? "text-primary" : "text-ink-muted group-hover:text-primary"
                      }`}
                    >
                      {oracle.name}
                    </span>
                    <span className="text-sm text-ink-muted">{formatCardCount(oracle.cards)}</span>
                  </span>
                  <span
                    aria-hidden
                    className={`h-px bg-accent-text transition-all duration-500 ${
                      isSelected ? "w-10 opacity-100" : "w-4 opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          {oracles.length === 1 ? (
            <p className="mt-4 text-sm text-ink-muted">El primero de la colección de Oráculos Evolutivos.</p>
          ) : null}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div role="tabpanel" id={panelId} aria-labelledby={`oracle-tab-${selected.id}`} className="flex flex-col gap-14">
          <OraclePanel key={selected.id} oracle={selected} />
          <OracleInvitation oracle={selected} />
        </div>
      </Reveal>
    </div>
  );
}
