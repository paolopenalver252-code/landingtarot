"use client";

// Adaptado de ScrollStack (reactbits.dev). La versión original depende de
// `lenis` para suavizar el scroll (o incluso capturarlo dentro de su propio
// contenedor con overflow-y-auto) — efectivamente scroll hijacking, que
// esta landing evita explícitamente. Aquí se ha eliminado Lenis por
// completo: el apilado se calcula sobre el scroll NATIVO de la ventana
// (window.scrollY + requestAnimationFrame), la misma técnica que ya usa
// el parallax del Hero. El usuario controla el scroll real en todo momento.
//
// Corrección respecto al original: las posiciones naturales de cada
// tarjeta se cachean UNA vez (y se recalculan solo en resize) en lugar de
// releerse con getBoundingClientRect() en cada frame — leerlas mientras ya
// hay un transform aplicado deriva en un cálculo que se retroalimenta
// (drift acumulativo), así que se limpian los transforms antes de medir.
import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/motion/environment";

export function ScrollStackItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`scroll-stack-card relative w-full origin-top will-change-transform ${className}`}
      style={{ backfaceVisibility: "hidden" }}
    >
      {children}
    </div>
  );
}

type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  /** Separación (px) entre tarjetas — junto a la altura de cada tarjeta, define el recorrido de scroll por tarjeta. */
  itemDistance?: number;
  /** Cuánto se reduce la escala de cada tarjeta adicional en la pila. */
  itemScale?: number;
  /** Desplazamiento (px) entre los "peldaños" apilados de tarjetas anteriores. */
  itemStackDistance?: number;
  /** Distancia (px) desde arriba del viewport donde una tarjeta se fija. */
  stackPosition?: number;
  /** Escala mínima de la tarjeta más antigua en la pila. */
  baseScale?: number;
  /** Desenfoque (px) por nivel de profundidad en tarjetas detrás de la actual — 0 lo desactiva. */
  blurAmount?: number;
};

export default function ScrollStack({
  children,
  className = "",
  itemDistance = 90,
  itemScale = 0.04,
  itemStackDistance = 20,
  stackPosition = 130,
  baseScale = 0.9,
  blurAmount = 0,
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const cardTopsRef = useRef<number[]>([]);
  const endTopRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const measure = useCallback(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;
    if (!container || !cards.length) return;
    // Se limpia el transform antes de medir para no leer una posición ya desplazada.
    cards.forEach((card) => {
      card.style.transform = "none";
    });
    cardTopsRef.current = cards.map((card) => card.getBoundingClientRect().top + window.scrollY);
    const endEl = container.querySelector<HTMLElement>(".scroll-stack-end");
    endTopRef.current = endEl ? endEl.getBoundingClientRect().top + window.scrollY : 0;
  }, []);

  const update = useCallback(() => {
    const cards = cardsRef.current;
    const tops = cardTopsRef.current;
    if (!cards.length || tops.length !== cards.length) return;

    const scrollTop = window.scrollY;
    const pinEnd = endTopRef.current - window.innerHeight / 2;
    // Al liberarse del pin (scrollTop > pinEnd), las tarjetas no se separan
    // de golpe: siguen desplazándose juntas, en formación, manteniendo el
    // escalonado de itemStackDistance entre ellas durante un buen tramo de
    // scroll. Eso significa que no solo la ÚLTIMA tarjeta puede acabar
    // pintándose sobre la siguiente sección — las últimas varias (toda la
    // "baraja" todavía visible) pueden hacerlo igual, ya que su borde
    // inferior está a solo un puñado de píxeles de diferencia entre sí.
    // Por eso el z-index elevado se retira a TODAS a la vez, con un punto
    // de corte propio (más temprano que pinEnd) en vez de esperar a que el
    // marcador de fin de pila llegue al centro del viewport — para
    // entonces, en portátiles y viewports bajos, el título siguiente ya
    // lleva un rato asomando por debajo. Una vez superado, no vuelve a
    // subir aunque las tarjetas sigan moviéndose.
    const zIndexReleaseEnd = endTopRef.current - window.innerHeight * 0.75;
    const stackReleased = scrollTop > zIndexReleaseEnd;

    let topIndex = 0;
    cards.forEach((_, i) => {
      const triggerStart = tops[i] - stackPosition - itemStackDistance * i;
      if (scrollTop >= triggerStart) topIndex = i;
    });

    cards.forEach((card, i) => {
      const cardTop = tops[i];
      const triggerStart = cardTop - stackPosition - itemStackDistance * i;

      const targetScale = baseScale + i * itemScale;
      const scaleProgress = Math.min(Math.max((scrollTop - triggerStart) / 300, 0), 1);
      const scale = 1 - scaleProgress * (1 - targetScale);

      let translateY = 0;
      if (scrollTop >= triggerStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPosition + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPosition + itemStackDistance * i;
      }

      const depth = topIndex - i;
      const blur = blurAmount && depth > 0 ? Math.min(depth * blurAmount, 6) : 0;

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
      card.style.filter = blur > 0 ? `blur(${blur}px)` : "";
      card.style.zIndex = stackReleased ? "0" : String(i + 1);
    });
  }, [baseScale, itemScale, itemStackDistance, stackPosition, blurAmount]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>(".scroll-stack-card"));
    cardsRef.current = cards;

    // La separación entre tarjetas se aplica siempre (también con
    // prefers-reduced-motion) para que no queden pegadas unas a otras.
    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
    });

    if (prefersReducedMotion()) {
      cards.forEach((card) => {
        card.style.transform = "none";
        card.style.filter = "none";
      });
      return;
    }

    measure();
    update();
    // Re-medición tardía: cubre el reflow que pueda causar el reveal de
    // entrada de la sección (fade + translateY) o la carga de fuentes.
    const settleTimeout = window.setTimeout(() => {
      measure();
      update();
    }, 900);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    let resizeTimeout: number;
    const onResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        measure();
        update();
      }, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(settleTimeout);
      window.clearTimeout(resizeTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [itemDistance, measure, update]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {children}
      <div className="scroll-stack-end h-px w-full" aria-hidden />
    </div>
  );
}
