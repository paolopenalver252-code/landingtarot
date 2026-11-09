"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate } from "animejs";
import Button from "@/components/ui/Button";
import Magnet from "@/components/reactbits/Magnet";
import GlareHover from "@/components/reactbits/GlareHover";
import { playEntranceTimeline } from "@/lib/motion/timeline";
import { prefersReducedMotion } from "@/lib/motion/environment";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { ORACULO_DESPERTAR } from "@/lib/oracle";

/** Datos concretos del servicio, confirmados por la clienta (ver @/lib/oracle). */
const HIGHLIGHTS = [
  "Lectura personalizada",
  `De ${ORACULO_DESPERTAR.cards.min} a ${ORACULO_DESPERTAR.cards.max} cartas u oráculos`,
  "Grabada para ti",
];

/**
 * Hero cinematográfico a pantalla completa: la fotografía ocupa todo el
 * ancho y alto del Hero (no una columna), con el texto alineado a la
 * izquierda sobre un degradado oscuro que garantiza contraste, y las
 * cartas de la foto visibles a la derecha en escritorio. El mensaje "No se trata de saber qué
 * ocurrirá / Se trata de comprender lo que está ocurriendo" vive ahora en
 * su propia sección (ver Approach.tsx) en vez de competir aquí con el
 * titular principal.
 */
export default function Hero() {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLAnchorElement>(null);
  const scrollLineRef = useRef<HTMLSpanElement>(null);

  // Secuencia de entrada: imagen → overlay → eyebrow → título →
  // descripción → CTA → indicador de scroll, con un ligero solape entre pasos.
  useIsomorphicLayoutEffect(() => {
    playEntranceTimeline([
      { target: imageWrapRef.current, translateY: 0, scale: [1.04, 1], duration: 1400 },
      { target: overlayRef.current, translateY: 0, duration: 900, offset: "-=1100" },
      { target: eyebrowRef.current, offset: "-=700" },
      { target: headingRef.current, translateY: 22, duration: 750, offset: "-=500" },
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
            src="/images/oraculo-despertar-hero.jpg"
            alt="Cartas extendidas sobre una mesa de piedra junto a una ventana nocturna, en un interior sobrio iluminado con luz tenue"
            fill
            priority
            // Se sirve el JPG original (1376 px, ~85 KB) sin recomprimir: el
            // optimizador lo bajaba a calidad 75 y, en pantallas verticales,
            // pedía una versión más estrecha de la que ocupa con object-cover.
            unoptimized
            className="object-cover"
          />
        </div>
      </div>

      {/* Overlay obsidiana, ligero: la fotografía debe leerse en todo el
          Hero (ventana, cortina y cartas), no solo a la derecha. Oscurece lo
          justo bajo el texto — la zona izquierda de la foto ya es oscura y
          el texto lleva text-shadow — y funde el borde inferior con la
          sección siguiente. */}
      <div
        ref={overlayRef}
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,16,15,0.35)_0%,rgba(17,16,15,0.45)_45%,rgba(17,16,15,0.8)_100%)] lg:bg-[linear-gradient(90deg,rgba(17,16,15,0.55)_0%,rgba(17,16,15,0.35)_40%,rgba(17,16,15,0.08)_70%,rgba(17,16,15,0.15)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(17,16,15,0.3)_100%)] lg:bg-[linear-gradient(180deg,rgba(17,16,15,0.2)_0%,transparent_30%,transparent_70%,rgba(17,16,15,0.55)_100%)]"
      />

      {/* Jerarquía: nombre del proyecto (h1) → qué es (frase) → datos
          concretos del servicio → CTA. Alineado a la izquierda, como el
          resto de capítulos editoriales, para no tapar las cartas. */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="flex max-w-2xl flex-col items-start">
          <p
            ref={eyebrowRef}
            className="flex items-center gap-3 whitespace-nowrap text-[13px] font-medium text-accent [text-shadow:0_1px_12px_rgba(17,16,15,0.6)] sm:gap-4 sm:text-sm"
          >
            <span aria-hidden className="h-px w-6 bg-accent sm:w-10" />
            Reflexión &middot; Autoconocimiento &middot; Decisiones
          </p>

          <h1
            ref={headingRef}
            className="mt-7 font-heading text-[4rem] leading-[0.92] tracking-tight text-white [text-shadow:0_2px_24px_rgba(17,16,15,0.7)] sm:mt-8 sm:text-8xl lg:text-[7.5rem]"
          >
            <span className="block">Oráculo</span>
            <span className="block italic">Despertar</span>
          </h1>

          <div ref={subtitleRef} className="mt-8 flex flex-col gap-6 sm:mt-10">
            <p className="max-w-xl font-heading text-2xl leading-snug text-white/90 [text-shadow:0_1px_16px_rgba(17,16,15,0.7)] sm:text-3xl">
              Un espacio para escucharte, reconocer tus recursos y explorar nuevas perspectivas
              ante tus decisiones.
            </p>
            {/* En móvil, uno por línea con rombo (la fila con puntos se
                partía dejando un separador suelto al inicio de línea). */}
            <ul className="flex flex-col gap-2 text-sm text-mist [text-shadow:0_1px_12px_rgba(17,16,15,0.6)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1">
              {HIGHLIGHTS.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 border border-accent sm:hidden" />
                  {index > 0 ? (
                    <span aria-hidden className="hidden text-accent sm:inline">
                      ·
                    </span>
                  ) : null}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div ref={ctaRef} className="mt-10 flex flex-col items-start gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-6">
            <Magnet padding={50} magnetStrength={16}>
              <GlareHover className="rounded-full">
                <Button href="#consulta" variant="accent" size="md">
                  Solicitar mi lectura
                </Button>
              </GlareHover>
            </Magnet>
            {/* CTA secundario: estilo propio (no Button ghost/outline, pensados
                para fondo claro) — texto subrayado discreto sobre la foto. */}
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-mist underline decoration-mist-subtle decoration-1 underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
            >
              Descubrir cómo funciona
            </Link>
          </div>
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
