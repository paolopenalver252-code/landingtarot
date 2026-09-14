"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Parallax from "@/components/ui/Parallax";
import Eyebrow from "@/components/ui/Eyebrow";
import { useHeroEntrance } from "@/hooks/useHeroEntrance";
import { mainSiteUrl } from "@/lib/seo";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  useHeroEntrance({ text: textRef, media: mediaRef });

  return (
    <section className="relative overflow-hidden">
      <Parallax
        speed={10}
        className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(200,163,95,0.14),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-14">
        <Link
          href={mainSiteUrl("/#especialidades")}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary/60 transition-colors duration-300 hover:text-accent-text"
        >
          <ArrowLeft size={16} strokeWidth={1.75} />
          Volver a las especialidades
        </Link>

        <div ref={textRef} className="mx-auto mt-6 flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Una especialidad PSAI FLOW</Eyebrow>
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Psicotarot &amp; Astrología Cabalística
          </h1>
          <p className="font-heading text-xl italic leading-snug text-primary/80 sm:text-2xl">
            Una mirada profunda hacia ti, tus ciclos y tu camino personal.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-ink-muted text-body">
            Dos herramientas de autoconocimiento que permiten explorar procesos, patrones y
            momentos vitales desde una perspectiva simbólica, evolutiva y profunda.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href={mainSiteUrl("/contacto#formulario-contacto")} variant="accent" size="md">
              Solicitar consulta
            </Button>
            <Button href="#introduccion" variant="outline" size="md">
              Descubrir el servicio
            </Button>
          </div>

          <span
            aria-hidden
            className="mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-primary/50"
          >
            <ChevronDown size={18} strokeWidth={1.5} />
          </span>
        </div>

        <div ref={mediaRef} className="mx-auto mt-12 max-w-6xl pb-16 lg:pb-20">
          <PlaceholderImage
            src="/images/psicotarot-astrologia-feng-shui.jpg"
            alt="Cartas de tarot, dados hebreos y símbolos cabalísticos sobre un paño oscuro, con una luz cálida y atmósfera introspectiva"
            priority
            sizes="(max-width: 1280px) 100vw, 72rem"
            className="aspect-[16/9] w-full shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}
