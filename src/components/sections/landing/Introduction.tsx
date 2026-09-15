"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { easeInOut } from "@/lib/motion/tokens";
import { prefersReducedMotion } from "@/lib/motion/environment";

/**
 * Transición editorial tras el Hero: mucho espacio negativo, sin tarjeta ni
 * contenedor — un titular grande y un párrafo desplazado, como una doble
 * página de revista en vez de un bloque de contenido convencional. La línea
 * fina se dibuja de izquierda a derecha (scaleX) al entrar en viewport.
 */
export default function Introduction() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line || prefersReducedMotion()) return;

    line.style.transform = "scaleX(0)";
    line.style.transformOrigin = "left";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animate(line, { scaleX: [0, 1], duration: 1100, ease: easeInOut });
      },
      { threshold: 0.4 }
    );
    observer.observe(line);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="introduccion" className="scroll-mt-24 bg-surface-alt py-32 lg:py-48">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Una nueva mirada</Eyebrow>
        </Reveal>

        <Reveal delay={100}>
          <div ref={lineRef} className="mt-8 h-px w-24 bg-accent" />
        </Reveal>

        <Reveal delay={150}>
          <h2 className="mt-8 max-w-3xl font-heading text-4xl leading-[1.12] text-primary sm:text-5xl lg:text-6xl">
            Mirar hacia dentro también es una forma de avanzar.
          </h2>
        </Reveal>
        <Reveal delay={250}>
          <p className="ml-auto mt-14 max-w-xl text-base leading-relaxed text-ink-muted text-body">
            El Psicotarot y la Astrología Cabalística pueden convertirse en herramientas de
            exploración y autoconocimiento. A través de sus símbolos y lenguajes, permiten
            observar situaciones, patrones y ciclos desde una perspectiva diferente, ayudando a
            abrir nuevas preguntas y encontrar mayor claridad en los procesos personales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
