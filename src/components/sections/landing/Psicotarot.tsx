import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TextLink from "@/components/ui/TextLink";

const AREAS = [
  "Procesos personales",
  "Relaciones y vínculos",
  "Cambios y etapas vitales",
  "Bloqueos y patrones",
  "Toma de conciencia",
  "Nuevas perspectivas",
];

/**
 * Capítulo 01. La fotografía se recorta en proporción de carta de tarot
 * (2:3) con un filete interior — el mismo lenguaje que las cartas de los
 * Oráculos Evolutivos — y se desplaza respecto al texto para romper la
 * rejilla 50/50. Astrología Cabalística usa otro recorte (círculo).
 */
export default function Psicotarot() {
  return (
    <article
      id="psicotarot"
      aria-labelledby="psicotarot-titulo"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-8 lg:px-8"
    >
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-16">
        <Reveal className="lg:col-span-7 lg:col-start-1 lg:row-start-1">
          <span aria-hidden className="block font-heading text-[5.5rem] leading-[0.8] text-accent-text/80 lining-nums sm:text-[7.5rem]">
            01
          </span>
          <h3
            id="psicotarot-titulo"
            className="mt-4 font-heading text-6xl leading-none text-primary sm:text-7xl lg:text-8xl"
          >
            Psicotarot
          </h3>
          <p className="mt-6 max-w-md font-heading text-2xl italic leading-snug text-primary/80 sm:text-3xl">
            Una mirada hacia aquello que estás viviendo.
          </p>
        </Reveal>

        <Reveal
          variant="scale"
          delay={120}
          className="ml-auto w-4/5 sm:w-3/5 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:mt-24 lg:w-full"
        >
          <figure className="relative aspect-[2/3] overflow-hidden rounded-md bg-primary shadow-[0_30px_60px_-30px_rgba(17,16,15,0.55)]">
            <Image
              src="/images/psicotarot-cartas-diario.jpg"
              alt="Cartas de Tarot y un diario de reflexión abierto junto a una ventana nocturna, en un interior sobrio e iluminado con luz tenue"
              fill
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 30vw"
              className="object-cover"
            />
            <span aria-hidden className="pointer-events-none absolute inset-3 rounded-[3px] border border-surface/30" />
          </figure>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-5 lg:col-start-2 lg:row-start-2">
          <div className="flex flex-col gap-10">
            <p className="max-w-lg text-ink-muted text-body">
              Comprender tu presente a través del lenguaje simbólico del Tarot: una herramienta de
              reflexión y autoconocimiento que permite explorar situaciones, emociones y procesos
              personales desde una nueva perspectiva.
            </p>

            <div>
              <p className="text-sm font-semibold text-primary">Durante una consulta puedes explorar</p>
              <ul className="mt-4 grid grid-cols-1 border-t border-primary/15 sm:grid-cols-2 sm:gap-x-8">
                {AREAS.map((area) => (
                  <li key={area} className="border-b border-primary/15 py-3 font-heading text-lg text-primary">
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <TextLink href="#consulta">Solicitar una consulta de Psicotarot</TextLink>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
