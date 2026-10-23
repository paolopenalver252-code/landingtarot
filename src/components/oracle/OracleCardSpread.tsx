"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { duration, easeOut } from "@/lib/motion/tokens";
import { prefersReducedMotion } from "@/lib/motion/environment";

/**
 * Las cartas del oráculo boca abajo, en una sola fila y sin agrupar: aún no
 * se sabe qué posiciones corresponden a cada fase, así que la composición no
 * debe insinuarlo. Puramente decorativa — el nº de cartas se da en texto.
 * `ghostCount` añade cartas solo en contorno detrás de las fijas, para
 * oráculos cuyo nº de cartas varía según la lectura.
 */
export default function OracleCardSpread({ count, ghostCount = 0 }: { count: number; ghostCount?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;

    const cards = root.querySelectorAll<HTMLElement>("[data-card]");
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(14px) rotate(-3deg)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animate(cards, {
          opacity: [0, 1],
          translateY: [14, 0],
          rotate: [-3, 0],
          duration: duration.reveal,
          delay: stagger(duration.cardStagger),
          ease: easeOut,
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [count, ghostCount]);

  return (
    <div ref={ref} aria-hidden className="flex w-full max-w-xl gap-1.5 sm:gap-2.5">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          data-card
          className="relative aspect-[2/3] flex-1 rounded-[5px] bg-primary shadow-[0_8px_18px_-10px_rgba(17,16,15,0.6)]"
        >
          <span className="absolute inset-[3px] rounded-[3px] border border-accent/35 sm:inset-1" />
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-accent/60 sm:h-2 sm:w-2" />
        </span>
      ))}
      {Array.from({ length: ghostCount }, (_, index) => (
        <span
          key={`ghost-${index}`}
          data-card
          className="aspect-[2/3] flex-1 rounded-[5px] border border-dashed border-primary/30"
        />
      ))}
    </div>
  );
}
