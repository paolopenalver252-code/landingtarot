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
  // propia, Formspree, un servicio de email transaccional, etc.) — pendiente
  // de que el cliente confirme a dónde debe llegar cada solicitud. Hasta
  // entonces no se envían datos a ningún sitio, y a propósito sin ningún
  // aviso técnico visible para quien rellena el formulario.
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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(169,148,104,0.15),transparent_60%)]"
      />
      <Watermark className="-bottom-20 -right-10 z-0" />

      <div className="relative mx-auto flex max-w-xl flex-col items-center gap-12 px-6 text-center lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <Reveal>
            <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              ¿Sientes que necesitas mirar tu situación desde otra perspectiva?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-xl text-base leading-relaxed text-mist text-body">
              Un espacio para detenerte, observar y comprender.
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
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
