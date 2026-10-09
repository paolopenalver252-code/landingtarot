export type OraclePhase = {
  id: string;
  name: string;
  description: string;
};

export type EvolutionaryOracle = {
  id: string;
  /** Numeración editorial dentro de la colección ("01", "02"…). */
  number: string;
  name: string;
  /** Para qué sirve este oráculo, en una frase. */
  objective: string;
  cardCount: number;
  phases: OraclePhase[];
  questions: string[];
};

/**
 * Colección de Oráculos Evolutivos. Añadir un oráculo nuevo (02, 03… hasta
 * los ~12 previstos) es añadir un objeto aquí: el índice, el panel, las
 * fases, las preguntas y el mensaje de WhatsApp se generan a partir de estos
 * datos. Solo contiene lo confirmado por Zaida — todavía NO la posición ni
 * el significado de cada carta, que llegarán con el motor de lectura.
 */
export const EVOLUTIONARY_ORACLES: EvolutionaryOracle[] = [
  {
    id: "analisis-de-la-situacion",
    number: "01",
    name: "Análisis de la situación",
    objective:
      "Obtener un análisis que permita comprender en qué situación te encuentras, detectar qué puede estar faltando y explorar cómo puedes mejorar aquello que te preocupa.",
    cardCount: 9,
    phases: [
      {
        id: "situacion",
        name: "Situación",
        description: "Comprender dónde te encuentras respecto a aquello que quieres analizar.",
      },
      {
        id: "propuesta",
        name: "Propuesta",
        description: "Explorar qué puedes hacer, qué necesitas transformar y qué puedes potenciar.",
      },
      {
        id: "tendencia",
        name: "Tendencia",
        description: "Explorar la perspectiva energética que aparece alrededor de la situación.",
      },
    ],
    questions: [
      "¿Dónde me encuentro actualmente respecto a esta situación?",
      "¿Cómo estoy viviendo esta situación?",
      "¿Qué está influyendo en ella?",
      "¿Qué me está faltando?",
      "¿Cómo puedo mejorarla?",
      "¿Qué puedo potenciar?",
      "¿Qué perspectivas se presentan?",
    ],
  },
];

export function buildOracleWhatsAppMessage(oracle: EvolutionaryOracle, situation: string): string {
  const intro = `Hola, me gustaría solicitar una consulta del Oráculo Evolutivo «${oracle.number} — ${oracle.name}».`;
  const trimmed = situation.trim();
  return trimmed ? `${intro}\n\nLa situación que quiero explorar:\n${trimmed}` : intro;
}
