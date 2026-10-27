"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Watermark from "@/components/ui/Watermark";
import GradientText from "@/components/reactbits/GradientText";
import { easeOut } from "@/lib/motion/tokens";
import { prefersReducedMotion } from "@/lib/motion/environment";

/**
 * Composición editorial (no dos tarjetas ni un "VS"): las dos palabras
 * aparecen separadas y se aproximan ligeramente al entrar en viewport —
 * "de tus preguntas → a tus decisiones", sin sensación de competición.
 */
export default function Differential() {
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right || prefersReducedMotion()) return;

    left.style.transform = "translateX(-14px)";
    right.style.transform = "translateX(14px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animate(left, { translateX: [-14, 0], duration: 800, ease: easeOut });
        animate(right, { translateX: [14, 0], duration: 800, ease: easeOut });
      },
      { threshold: 0.4 }
    );
    observer.observe(left);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="de-preguntas-a-decisiones"
      className="relative scroll-mt-24 overflow-hidden bg-primary py-28 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(169,148,104,0.14),transparent_60%)]"
      />
      <Watermark className="-bottom-24 -left-10 z-0" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="El sentido de la lectura"
            title="Una lectura que no decide por ti."
            tone="dark"
          />
        </Reveal>

        <div className="mt-20 flex flex-col items-center gap-6">
          <Reveal>
            <span
              ref={leftRef}
              className="inline-block font-heading text-2xl uppercase tracking-[0.2em] text-white sm:text-3xl"
            >
              Tus preguntas
            </span>
          </Reveal>

          <Reveal delay={100}>
            <span aria-hidden className="block h-10 w-px bg-accent/40" />
          </Reveal>

          <Reveal delay={200}>
            <span
              ref={rightRef}
              className="inline-block font-heading text-2xl uppercase tracking-[0.2em] text-white sm:text-3xl"
            >
              Tus decisiones
            </span>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-8 font-heading text-3xl italic sm:text-4xl">
              <GradientText>Una mirada más clara.</GradientText>
            </p>
          </Reveal>
        </div>

        <Reveal delay={450}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed text-mist text-body">
            Te ayuda a reflexionar sobre lo que te preguntas, explorar alternativas y reconocer
            los recursos con los que cuentas, para valorar con más claridad el camino que quieres
            tomar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
