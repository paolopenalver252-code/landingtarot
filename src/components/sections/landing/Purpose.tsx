import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TextLink from "@/components/ui/TextLink";
import { ORACULO_DESPERTAR } from "@/lib/oracle";

const AREAS = [
  "Tus dones",
  "Tus talentos",
  "Tus recursos personales",
  "Tu propósito",
  "Tus decisiones",
  "Lo que deseas mejorar",
];

/**
 * Capítulo 01 — para qué sirve. La fotografía se recorta en proporción de
 * carta (2:3) con un filete interior y se desplaza respecto al texto para
 * romper la rejilla 50/50. El capítulo 02 usa otro recorte (círculo).
 */
export default function Purpose() {
  return (
    <article
      id="para-que-sirve"
      aria-labelledby="para-que-sirve-titulo"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-8 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-16">
        <Reveal className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <span aria-hidden className="block font-heading text-[5.5rem] leading-[0.8] text-accent-text/80 lining-nums sm:text-[7.5rem]">
            01
          </span>
          <h3
            id="para-que-sirve-titulo"
            className="mt-4 font-heading text-6xl leading-none text-primary sm:text-7xl lg:text-8xl"
          >
            Despertar
          </h3>
          <p className="mt-6 max-w-md font-heading text-2xl italic leading-snug text-primary/80 sm:text-3xl">
            Reconocer lo que ya hay en ti.
          </p>
        </Reveal>

        <Reveal
          variant="scale"
          delay={120}
          className="ml-auto w-4/5 sm:w-3/5 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:mt-24 lg:w-full"
        >
          <figure className="relative aspect-[2/3] overflow-hidden rounded-md bg-primary shadow-[0_30px_60px_-30px_rgba(17,16,15,0.55)]">
            <Image
              src="/images/oraculo-despertar-cartas-diario.jpg"
              alt="Cartas y un cuaderno de notas abierto sobre una mesa de piedra junto a una ventana nocturna, en un interior sobrio iluminado con luz tenue"
              fill
              // JPG original sin recomprimir, para conservar su calidad (ver Hero.tsx).
              unoptimized
              className="object-cover"
            />
            <span aria-hidden className="pointer-events-none absolute inset-3 rounded-[3px] border border-surface/30" />
          </figure>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-5 lg:col-start-2 lg:row-start-2">
          <div className="flex flex-col gap-10">
            <p className="max-w-lg text-ink-muted text-body">{ORACULO_DESPERTAR.objective}</p>

            <div>
              <p className="text-sm font-semibold text-primary">Una lectura para mirar hacia</p>
              <ul className="mt-4 grid grid-cols-1 border-t border-primary/15 sm:grid-cols-2 sm:gap-x-8">
                {AREAS.map((area) => (
                  <li key={area} className="border-b border-primary/15 py-3 font-heading text-lg text-primary">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <TextLink href="#consulta">Solicitar mi lectura</TextLink>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
