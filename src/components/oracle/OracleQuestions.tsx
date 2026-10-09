"use client";

import { useId, useState } from "react";

const VISIBLE_BY_DEFAULT = 4;

export default function OracleQuestions({ questions }: { questions: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const collapsible = questions.length > VISIBLE_BY_DEFAULT;
  const visible = expanded || !collapsible ? questions : questions.slice(0, VISIBLE_BY_DEFAULT);

  return (
    <div>
      <h4 className="font-sans! text-sm font-semibold text-primary">Preguntas que puedes explorar</h4>
      <ul id={listId} className="mt-5 divide-y divide-primary/15 border-y border-primary/15">
        {visible.map((question, index) => (
          <li
            key={question}
            className={`py-4 font-heading text-xl leading-snug text-primary sm:text-2xl ${
              index >= VISIBLE_BY_DEFAULT ? "animate-oracle-in" : ""
            }`}
          >
            {question}
          </li>
        ))}
      </ul>
      {collapsible ? (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((value) => !value)}
          className="mt-5 text-sm font-medium text-accent-text underline decoration-accent-text/40 decoration-1 underline-offset-4 transition-colors duration-300 hover:text-accent-text-hover hover:decoration-accent-text-hover"
        >
          {expanded ? "Ver menos preguntas" : `Ver todas las preguntas (${questions.length})`}
        </button>
      ) : null}
    </div>
  );
}
