export type Oracle = {
  name: string;
  /** Para qué sirve, en una frase. */
  objective: string;
  /** Rango de cartas u oráculos que se utilizan en la lectura. */
  cards: { min: number; max: number };
  questions: string[];
  /** Qué se lleva la persona al terminar. */
  outcome: string;
};

/**
 * Única fuente de datos del Oráculo Despertar: las secciones de la landing y
 * el mensaje de WhatsApp leen de aquí. Solo contiene lo confirmado por la
 * clienta — nada de nombres de cartas, posiciones, duración ni precio.
 */
export const ORACULO_DESPERTAR: Oracle = {
  name: "Oráculo Despertar",
  objective:
    "Una lectura pensada para despertar tus dones, alinear tus talentos y potenciar tus recursos, al servicio de tu propósito y de las decisiones que tomas en las distintas áreas de tu vida.",
  cards: { min: 3, max: 22 },
  questions: [
    "¿Cómo te encuentras energéticamente en este momento?",
    "¿Qué energía percibes que empieza a acercarse?",
    "¿Qué camino puede ayudarte a crecer en aquello que te preocupa?",
  ],
  outcome:
    "La lectura queda grabada para que puedas volver a verla con calma, comprender mejor lo que se ha visto y reflexionar sobre lo que percibes a tu favor y en tu contra en la situación que te preocupa, para gestionarla con más claridad.",
};

export function formatCardCount(cards: Oracle["cards"]): string {
  return `De ${cards.min} a ${cards.max} cartas u oráculos`;
}

export function buildOracleWhatsAppMessage(oracle: Oracle, situation: string): string {
  const intro = `Hola, me gustaría solicitar una lectura del ${oracle.name}.`;
  const trimmed = situation.trim();
  return trimmed ? `${intro}\n\nLo que me gustaría explorar:\n${trimmed}` : intro;
}
