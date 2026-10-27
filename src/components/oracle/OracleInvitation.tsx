"use client";

import { useId, useState } from "react";
import Button from "@/components/ui/Button";
import { buildOracleWhatsAppMessage, type Oracle } from "@/lib/oracle";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const MAX_LENGTH = 600;

/**
 * Invitación a formular la propia situación. El texto vive solo en memoria y
 * únicamente viaja dentro del mensaje de WhatsApp que abre el visitante —
 * nada se guarda ni se envía desde esta web. Sin número configurado no se
 * muestra el campo (no tendría a dónde ir) y el CTA lleva a #consulta.
 */
export default function OracleInvitation({ oracle }: { oracle: Oracle }) {
  const [situation, setSituation] = useState("");
  const fieldId = useId();
  const hintId = useId();
  const whatsappUrl = buildWhatsAppUrl(buildOracleWhatsAppMessage(oracle, situation));

  return (
    <div className="border-t border-primary/20 pt-10">
      <h4 className="font-sans! text-sm font-semibold text-primary">Tu situación</h4>

      {whatsappUrl ? (
        <>
          <p className="mt-4 max-w-lg text-ink-muted text-body">
            Si quieres, escribe aquello que te gustaría analizar. Llegará incluido en tu mensaje y
            será el punto de partida de tu lectura.
          </p>
          <label htmlFor={fieldId} className="mt-8 block text-sm font-medium text-primary">
            ¿Qué situación quieres explorar? <span className="font-normal text-ink-muted">(opcional)</span>
          </label>
          <textarea
            id={fieldId}
            value={situation}
            onChange={(event) => setSituation(event.target.value)}
            maxLength={MAX_LENGTH}
            rows={3}
            aria-describedby={hintId}
            placeholder="Por ejemplo: estoy valorando un cambio importante y no sé por dónde empezar."
            className="mt-2 w-full resize-none border-0 border-b border-primary/25 bg-transparent px-1 py-3 text-base text-primary placeholder:text-ink-muted transition-colors duration-300 focus-visible:border-accent-text"
          />
          <p id={hintId} className="mt-2 text-sm text-ink-muted">
            No se guarda en esta web: solo se añade al mensaje que se abrirá en WhatsApp.
          </p>
          <div className="mt-8">
            <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="accent" size="md">
              Quiero explorar mi situación
              <span className="sr-only"> (abre WhatsApp en una pestaña nueva)</span>
            </Button>
          </div>
        </>
      ) : (
        <>
          <p className="mt-4 max-w-lg text-ink-muted text-body">
            Cuéntanos qué situación te gustaría explorar y buscaremos el momento adecuado para tu
            lectura.
          </p>
          <div className="mt-8">
            <Button href="#consulta" variant="accent" size="md">
              Solicitar mi lectura
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
