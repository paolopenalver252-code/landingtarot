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
 * Composición editorial (no dos tarjetas ni un "VS"): los dos nombres
 * aparecen separados y se aproximan ligeramente al entrar en viewport —
 * "dos herramientas → una visión", sin sensación de competición.
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
      id="dos-lenguajes"
      className="relative scroll-mt-24 overflow-hidden bg-primary py-28 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(185,154,99,0.14),transparent_60%)]"
      />
      <Watermark className="-bottom-24 -left-10 z-0" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="La combinación"
            title="Dos lenguajes. Una visión más profunda de ti."
            tone="dark"
          />
        </Reveal>

        <div className="mt-20 flex flex-col items-center gap-6">
          <Reveal>
            <span
              ref={leftRef}
              className="inline-block font-heading text-2xl uppercase tracking-[0.2em] text-white sm:text-3xl"
            >
              Psicotarot
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
              Astrología Cabalística
            </span>
          </Reveal>

          <Reveal delay={350}>
            <p className="mt-8 font-heading text-3xl italic sm:text-4xl">
              <GradientText>Una mirada más profunda.</GradientText>
            </p>
          </Reveal>
        </div>

        <Reveal delay={450}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed text-mist text-body">
            Cuando ambas miradas se complementan, permiten observar una experiencia personal
            desde diferentes ángulos: lo que estás viviendo, cómo lo interpretas y qué patrones
            pueden estar presentes en tu proceso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
