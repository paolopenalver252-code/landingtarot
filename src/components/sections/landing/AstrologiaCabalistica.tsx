import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import TextLink from "@/components/ui/TextLink";

const AREAS = [
  "Tu carta natal",
  "Patrones personales",
  "Ciclos y etapas",
  "Potenciales",
  "Relaciones entre diferentes áreas de tu vida",
  "Procesos de evolución personal",
];

/**
 * Capítulo 02 — misma familia que Psicotarot, otra personalidad: imagen a
 * la izquierda y recortada en círculo (la rueda de una carta natal) con un
 * anillo de órbita, subtítulo en redonda en vez de cursiva, y las áreas
 * como lista corrida con rombos en vez de un índice con filetes.
 */
export default function AstrologiaCabalistica() {
  return (
    <article
      id="astrologia"
      aria-labelledby="astrologia-titulo"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-28 lg:px-8 lg:pb-40"
    >
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:gap-y-16">
        <Reveal className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:self-end">
          <span aria-hidden className="block font-heading text-[5.5rem] leading-[0.8] text-accent-text/80 lining-nums sm:text-[7.5rem]">
            02
          </span>
          <h3
            id="astrologia-titulo"
            className="mt-4 font-heading text-5xl leading-[1.02] text-primary sm:text-6xl lg:text-7xl"
          >
            Astrología Cabalística
          </h3>
          <p className="mt-6 max-w-md font-heading text-2xl leading-snug text-primary/80 sm:text-3xl">
            Comprender tus ciclos para comprender tu camino.
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
              {/* Encuadre cerrado sobre la carta natal (y saturación algo
                  más baja): la foto completa, con castillo y telescopio,
                  se lee como imagen de stock. */}
              <Image
                src="/images/astrologia-carta-natal.jpg"
                alt="Carta astral sobre un escritorio de estudio, junto a instrumentos astronómicos"
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
                className="origin-[45%_66%] scale-[1.35] object-cover saturate-[0.8]"
              />
            </div>
          </figure>
        </Reveal>

        <Reveal delay={200} className="lg:col-span-5 lg:col-start-7 lg:row-start-2 lg:self-start">
          <div className="flex flex-col gap-10">
            <p className="max-w-lg text-ink-muted text-body">
              Una lectura de tu carta y de los ciclos que pueden ayudarte a observar tu proceso desde
              otra perspectiva: tendencias, patrones y potenciales vistos desde una mirada simbólica
              y evolutiva.
            </p>

            <div>
              <p className="text-sm font-semibold text-primary">Puede ayudarte a explorar</p>
              <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                {AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-3 font-heading text-lg text-primary">
                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rotate-45 border border-accent-text" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <TextLink href="#consulta">Solicitar una consulta de Astrología Cabalística</TextLink>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
