import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TextLink from "@/components/ui/TextLink";
import { ORACULO_DESPERTAR } from "@/lib/oracle";

/**
 * Capítulo 02 — qué puedes explorar. Misma familia que el capítulo 01, otra
 * personalidad: imagen a la izquierda recortada en círculo con un anillo de
 * órbita, subtítulo en redonda en vez de cursiva, y las preguntas como lista
 * con rombos en vez de un índice con filetes.
 */
export default function Questions() {
  return (
    <article
      id="que-explorar"
      aria-labelledby="que-explorar-titulo"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-28 lg:px-8 lg:pb-40"
    >
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:gap-y-16">
        <Reveal className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
          <span aria-hidden className="block font-heading text-[5.5rem] leading-[0.8] text-accent-text/80 lining-nums sm:text-[7.5rem]">
            02
          </span>
          <h3
            id="que-explorar-titulo"
            className="mt-4 font-heading text-5xl leading-[1.02] text-primary sm:text-6xl lg:text-7xl"
          >
            Tus preguntas
          </h3>
          <p className="mt-6 max-w-md font-heading text-2xl leading-snug text-primary/80 sm:text-3xl">
            Mirar tu momento con más claridad.
          </p>
        </Reveal>

        <Reveal
          variant="scale"
          delay={120}
          className="w-4/5 sm:w-3/5 lg:col-span-5 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:w-full"
        >
          <figure className="relative aspect-square">
            <span aria-hidden className="absolute -inset-3 rounded-full border border-accent-text/30 sm:-inset-5" />
            <div className="relative h-full w-full overflow-hidden rounded-full bg-primary">
              {/* La rueda ya es circular y cuadrada (1254 px): se encaja sin
                  ampliar, de modo que el recorte coincide con su aro dorado y
                  solo deja fuera las esquinas. Original sin recomprimir (ver
                  Hero.tsx) para que el texto de la rueda se lea nítido. */}
              <Image
                src="/images/oraculo-despertar-rueda.webp"
                alt="Rueda ilustrada con las doce casas astrológicas y las áreas de la vida que representa cada una"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </figure>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-5 lg:col-start-7 lg:row-start-2 lg:self-start">
          <div className="flex flex-col gap-10">
            <p className="max-w-lg text-ink-muted text-body">
              La lectura parte de lo que te inquieta y te invita a detenerte en estas preguntas. No
              para darte respuestas cerradas, sino para ayudarte a reflexionar y a valorar mejor las
              decisiones que tienes delante.
            </p>

            <div>
              <p className="text-sm font-semibold text-primary">Preguntas que puedes explorar</p>
              <ul className="mt-5 flex flex-col gap-4">
                {ORACULO_DESPERTAR.questions.map((question) => (
                  <li key={question} className="flex items-baseline gap-3 font-heading text-xl leading-snug text-primary">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 -translate-y-1 rotate-45 border border-accent-text" />
                    {question}
                  </li>
                ))}
              </ul>
            </div>

            <TextLink href="#la-lectura">Descubrir cómo es la lectura</TextLink>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
