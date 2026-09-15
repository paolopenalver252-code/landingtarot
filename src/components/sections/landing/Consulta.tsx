"use client";

import type { FormEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import Watermark from "@/components/ui/Watermark";
import Button from "@/components/ui/Button";

const inputClass =
  "w-full border-0 border-b border-white/20 bg-transparent px-1 py-3 text-base text-white placeholder:text-mist-subtle transition-colors duration-300 focus-visible:border-accent";

const labelClass = "text-xs font-medium uppercase tracking-wide text-mist-subtle";

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  // TODO: conectar con el sistema real de envío del formulario (API route
  // propia, Formspree, un CRM, etc.). De momento no se envían datos a
  // ningún sitio — es solo la interfaz, tal como se pidió.
}

/**
 * Punto de conversión propio de la landing: formulario de contacto interno
 * (no un redireccionamiento a la web principal). Mismo lenguaje visual que
 * el resto de bloques oscuros del sitio (glow + Watermark).
 */
export default function Consulta() {
  return (
    <section
      id="consulta"
      className="relative scroll-mt-24 overflow-hidden bg-primary py-28 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(185,154,99,0.15),transparent_60%)]"
      />
      <Watermark className="-bottom-20 -right-10 z-0" />

      <div className="relative mx-auto flex max-w-xl flex-col items-center gap-12 px-6 text-center lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <Reveal>
            <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Empieza por conocerte desde otra perspectiva.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-relaxed text-mist text-body">
              Si sientes que es el momento de explorar tu proceso con mayor profundidad, puedes
              solicitar una consulta de Psicotarot y Astrología Cabalística.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="w-full">
          <form onSubmit={handleSubmit} noValidate={false} className="flex w-full flex-col gap-7 text-left">
            <div className="flex flex-col gap-2">
              <label htmlFor="consulta-nombre" className={labelClass}>
                Nombre
              </label>
              <input
                id="consulta-nombre"
                name="nombre"
                type="text"
                autoComplete="name"
                required
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="consulta-email" className={labelClass}>
                Email
              </label>
              <input
                id="consulta-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="consulta-mensaje" className={labelClass}>
                Mensaje
              </label>
              <textarea
                id="consulta-mensaje"
                name="mensaje"
                rows={4}
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="mt-2 flex flex-col items-center gap-3">
              <Button type="submit" variant="accent" size="md">
                Solicitar consulta
              </Button>
              {/* Nota visible a propósito: deja claro que la integración de
                  envío todavía está pendiente de conectar. */}
              <p className="text-xs leading-relaxed text-mist-subtle">
                Formulario listo para conectarse al sistema de envío definitivo.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
