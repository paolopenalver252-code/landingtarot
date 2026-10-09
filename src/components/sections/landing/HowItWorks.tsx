"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { easeOut } from "@/lib/motion/tokens";
import { prefersReducedMotion } from "@/lib/motion/environment";

const STEPS = [
  {
    title: "Solicitas tu consulta",
    description: "Pides tu consulta y encontramos el espacio adecuado para ti.",
  },
  {
    title: "Compartes tu proceso",
    description: "Compartes aquello que quieres explorar o comprender mejor.",
  },
  {
    title: "Realizamos la sesión",
    description: "Durante la sesión se profundiza en aquello que quieres comprender.",
  },
  {
    title: "Nueva perspectiva",
    description: "Te llevas una nueva perspectiva sobre tu proceso.",
  },
];

/**
 * "Cómo funciona": timeline editorial (antes "La experiencia") — círculo
 * numerado + conector que se activa (se llena de dorado) cuando ese tramo
 * entra en viewport, horizontal en escritorio y vertical en móvil. Cada
 * conector anima su propio eje (scaleX o scaleY) de forma independiente.
 */
export default function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const connectors = track.querySelectorAll<HTMLElement>("[data-connector]");
    const observers: IntersectionObserver[] = [];

    connectors.forEach((el) => {
      const axis = el.dataset.connector === "y" ? "scaleY" : "scaleX";
      el.style.transform = `${axis}(0)`;
      el.style.transformOrigin = axis === "scaleY" ? "top" : "left";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          observer.disconnect();
          animate(el, { [axis]: [0, 1], duration: 700, ease: easeOut });
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="como-funciona" className="scroll-mt-24 bg-surface-alt pb-28 pt-40 lg:pb-40 lg:pt-56">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="Una consulta. Un espacio para ti." />
        </Reveal>

        {/* 4 pasos: el salto a fila se retrasa hasta lg (antes sm, con 3
            pasos) para que no queden apretados en tablet. */}
        <div ref={trackRef} className="mt-20 flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-1 flex-col items-center lg:contents">
              <Reveal
                delay={index * 140}
                className="flex flex-1 flex-col items-center gap-4 text-center"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-text font-heading text-lg text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-xl text-primary">{step.title}</h3>
                <p className="max-w-[16rem] text-sm leading-relaxed text-ink-muted text-body">
                  {step.description}
                </p>
              </Reveal>

              {index < STEPS.length - 1 ? (
                <>
                  {/* Móvil/tablet: conector vertical entre pasos */}
                  <div
                    aria-hidden
                    className="relative my-6 h-10 w-px overflow-hidden bg-primary/15 lg:hidden"
                  >
                    <div data-connector="y" className="absolute inset-0 bg-accent" />
                  </div>
                  {/* Escritorio: conector horizontal entre pasos */}
                  <div aria-hidden className="relative hidden flex-1 lg:mt-6 lg:block">
                    <div className="absolute inset-0 border-t border-dashed border-accent/25" />
                    <div data-connector="x" className="absolute inset-0 border-t-2 border-accent" />
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
