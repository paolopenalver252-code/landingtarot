import { Orbit, Layers, Moon, TrendingUp, Users, Compass } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import FeatureTags from "@/components/ui/FeatureTags";
import Reveal from "@/components/ui/Reveal";

const AREAS = [
  { icon: Orbit, title: "Tu carta natal" },
  { icon: Layers, title: "Patrones personales" },
  { icon: Moon, title: "Ciclos y etapas" },
  { icon: TrendingUp, title: "Potenciales" },
  { icon: Users, title: "Relaciones entre diferentes áreas de tu vida" },
  { icon: Compass, title: "Procesos de evolución personal" },
];

export default function AstrologiaCabalistica() {
  return (
    <section id="astrologia" className="scroll-mt-24 bg-surface-alt py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <div className="flex flex-col gap-6">
              <Eyebrow>Astrología Cabalística</Eyebrow>
              <h2 className="font-heading text-3xl leading-tight text-primary sm:text-4xl">
                Leer tu mapa para comprender tus ciclos.
              </h2>
              <p className="text-base leading-relaxed text-ink-muted text-body">
                La Astrología Cabalística parte de la interpretación de la carta natal para
                observar tendencias, potenciales, patrones y ciclos desde una perspectiva
                simbólica y evolutiva. Una herramienta para profundizar en el conocimiento
                personal y contemplar tu recorrido desde una mirada más amplia.
              </p>

              <div className="mt-4 flex flex-col gap-4">
                <span className="text-sm font-medium text-primary">Puede ayudarte a explorar:</span>
                <FeatureTags items={AREAS} align="left" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:order-1">
            <div className="relative">
              <span
                aria-hidden
                className="absolute -right-4 -top-6 z-10 font-heading text-7xl text-accent/25 sm:-right-6 sm:text-8xl"
              >
                02
              </span>
              <PlaceholderImage
                label="Fotografía de carta astral pendiente"
                sizes="(max-width: 1024px) 100vw, 40rem"
                className="relative aspect-[4/5] w-full shadow-soft"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
