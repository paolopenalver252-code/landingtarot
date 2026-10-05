"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate } from "animejs";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import TrueFocus from "@/components/reactbits/TrueFocus";
import Magnet from "@/components/reactbits/Magnet";
import GlareHover from "@/components/reactbits/GlareHover";
import { playEntranceTimeline } from "@/lib/motion/timeline";
import { prefersReducedMotion } from "@/lib/motion/environment";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

/**
 * Hero cinematográfico a pantalla completa: la fotografía ocupa todo el
 * ancho y alto del Hero (no una columna), con el texto centrado encima
 * sobre un degradado navy que garantiza contraste — en vez de la
 * composición partida texto/imagen.
 */
export default function Hero() {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const phraseRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLAnchorElement>(null);
  const scrollLineRef = useRef<HTMLSpanElement>(null);

  // Secuencia de entrada: imagen → overlay → eyebrow → título → frase →
  // descripción → CTA → indicador de scroll, con un ligero solape entre pasos.
  useIsomorphicLayoutEffect(() => {
    playEntranceTimeline([
      { target: imageWrapRef.current, translateY: 0, scale: [1.04, 1], duration: 1400 },
      { target: overlayRef.current, translateY: 0, duration: 900, offset: "-=1100" },
      { target: eyebrowRef.current, offset: "-=700" },
      { target: headingRef.current, translateY: 22, duration: 750, offset: "-=500" },
      { target: phraseRef.current, offset: "-=450" },
      { target: subtitleRef.current, offset: "-=450" },
      { target: ctaRef.current, offset: "-=400" },
      { target: scrollCueRef.current, offset: "-=300" },
    ]);
  }, []);

  // Línea del indicador de scroll: recorrido vertical continuo y muy sutil.
  // Se omite por completo con prefers-reduced-motion (la línea queda fija).
  useEffect(() => {
    const line = scrollLineRef.current;
    if (!line || prefersReducedMotion()) return;

    const animation = animate(line, {
      translateY: ["-100%", "200%"],
      duration: 1800,
      loop: true,
      ease: "inOutSine",
    });

    return () => {
      animation.pause();
    };
  }, []);

  // Transición Hero → contenido: parallax MUY sutil de la imagen al salir
  // de pantalla, y el indicador de scroll se atenúa en cuanto se empieza a
  // bajar. Ambos se omiten con prefers-reduced-motion.
  const [scrolledPast, setScrolledPast] = useState(false);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const wrap = imageWrapRef.current;
    const inner = imageInnerRef.current;
    if (!wrap || !inner) return;

    let ticking = false;
    const update = () => {
      const rect = wrap.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / Math.max(rect.height, 1), 0), 1);
      inner.style.transform = `translate3d(0, ${progress * 18}px, 0)`;
      setScrolledPast(window.scrollY > 40);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] w-full flex-col items-center justify-center overflow-hidden bg-primary">
      <div ref={imageWrapRef} className="absolute inset-0 h-full w-full overflow-hidden">
        <div ref={imageInnerRef} className="absolute inset-0 h-full w-full">
          <Image
            src="/images/psicotarot-hero-editorial.jpg"
            alt="Cartas de Tarot sobre una mesa de piedra junto a una ventana nocturna, en un interior sobrio e iluminado con luz tenue"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay navy — el necesario para que el texto blanco tenga contraste
          claro sobre la fotografía, sin ocultar su detalle. */}
      <div
        ref={overlayRef}
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,26,39,0.5)_0%,rgba(16,26,39,0.6)_45%,rgba(16,26,39,0.85)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(16,26,39,0.45)_100%)]"
      />

      <div className="relative z-10 flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-20">
        <div ref={eyebrowRef}>
          <Eyebrow tone="dark">PSAI FLOW</Eyebrow>
        </div>

        <h1
          ref={headingRef}
          className="mt-5 max-w-3xl font-heading text-4xl leading-[1.1] tracking-tight text-white [text-shadow:0_2px_20px_rgba(16,26,39,0.7)] sm:mt-8 sm:text-5xl lg:text-7xl"
        >
          Psicotarot &amp;
          <br />
          Astrología Cabalística
        </h1>

        <p
          ref={phraseRef}
          className="mt-6 max-w-xl font-heading text-lg italic leading-snug text-white [text-shadow:0_2px_16px_rgba(16,26,39,0.7)] sm:mt-9 sm:text-2xl lg:text-3xl"
        >
          <TrueFocus
            segments={[
              { text: "No se trata de saber " },
              { text: "qué ocurrirá.", className: "text-white/55" },
            ]}
          />
          <br />
          <TrueFocus
            segments={[
              { text: "Se trata de comprender ", focused: true },
              {
                text: "lo que está ocurriendo.",
                focused: true,
                className: "text-accent not-italic font-medium",
              },
            ]}
          />
        </p>

        <p
          ref={subtitleRef}
          className="mt-4 max-w-md text-sm leading-relaxed text-mist text-body [text-shadow:0_1px_12px_rgba(16,26,39,0.6)] sm:mt-7 sm:text-base"
        >
          Explora tu proceso, tus ciclos y aquello que estás viviendo desde una nueva perspectiva.
        </p>

        <div ref={ctaRef} className="mt-6 sm:mt-10">
          <Magnet padding={50} magnetStrength={16}>
            <GlareHover className="rounded-full">
              <Button href="#consulta" variant="accent" size="md">
                Solicitar consulta
              </Button>
            </GlareHover>
          </Magnet>
        </div>
      </div>

      <Link
        ref={scrollCueRef}
        href="#introduccion"
        aria-label="Descubrir más, ir a la siguiente sección"
        className={`group absolute bottom-5 left-1/2 z-10 flex w-fit -translate-x-1/2 flex-col items-center gap-2 transition-opacity duration-500 sm:bottom-8 sm:gap-3 ${
          scrolledPast ? "opacity-0" : "opacity-100"
        }`}
      >
        <span aria-hidden className="relative h-9 w-px overflow-hidden bg-white/20">
          <span ref={scrollLineRef} className="absolute inset-x-0 top-0 h-1/3 bg-accent" />
        </span>
      </Link>
    </section>
  );
}
