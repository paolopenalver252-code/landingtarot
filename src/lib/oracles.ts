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
  /** Nº fijo de cartas, o un rango cuando depende de la lectura. */
  cards: number | { min: number; max: number };
  /** Vacío si Zaida no ha definido fases para este oráculo. */
  phases: OraclePhase[];
  questions: string[];
  /** Qué se lleva la persona al terminar, si está confirmado. */
  outcome?: string;
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
    cards: 9,
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
  {
    id: "despertar",
    number: "02",
    name: "Despertar",
    objective:
      "Despertar tus dones, alinear tus talentos y potenciar todo lo necesario para tu propósito y la toma de decisiones en las distintas áreas de tu vida.",
    cards: { min: 3, max: 22 },
    phases: [],
    questions: [
      "¿Cómo estoy energéticamente?",
      "¿Qué energía se aproxima?",
      "¿Cuál es el camino para empezar a crecer en aquello que me preocupa?",
    ],
    outcome:
      "Una lectura grabada para que puedas verla con calma y entender con más claridad tu energía actual, lo que tienes en contra y lo que tienes a tu favor para gestionar mejor la situación que te preocupa.",
  },
];

export function formatCardCount(cards: EvolutionaryOracle["cards"]): string {
  return typeof cards === "number" ? `${cards} cartas` : `De ${cards.min} a ${cards.max} cartas`;
}

export function buildOracleWhatsAppMessage(oracle: EvolutionaryOracle, situation: string): string {
  const intro = `Hola, me gustaría solicitar una consulta del Oráculo Evolutivo «${oracle.number} — ${oracle.name}».`;
  const trimmed = situation.trim();
  return trimmed ? `${intro}\n\nLa situación que quiero explorar:\n${trimmed}` : intro;
}
