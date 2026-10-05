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

/**
 * Contrapunto visual de Psicotarot: imagen a la izquierda / texto a la
 * derecha (en Psicotarot es al revés), mismo sistema visual, ritmo de
 * entrada ligeramente distinto (aquí la imagen se adelanta al texto).
 */
export default function AstrologiaCabalistica() {
  return (
    <section id="astrologia" className="scroll-mt-24 overflow-hidden bg-surface-alt">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
        {/* Columna de imagen — a sangre, editorial */}
        <div className="relative order-1 h-[52vh] overflow-hidden sm:h-[64vh] lg:order-1 lg:h-auto">
          <Reveal variant="scale" className="absolute inset-0 h-full w-full">
            <PlaceholderImage
              src="/images/astrologia-carta-natal.jpg"
              alt="Carta astral sobre un escritorio, junto a un telescopio asomado a una ventana redonda con vistas a una ciudad nocturna e instrumentos astronómicos"
              rounded={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full"
            />
          </Reveal>

          <span
            aria-hidden
            className="pointer-events-none absolute left-6 top-6 z-10 font-heading text-8xl leading-none text-accent/25 sm:left-10 sm:top-10 sm:text-9xl"
          >
            02
          </span>
          <span className="pointer-events-none absolute bottom-6 right-6 z-10 text-[11px] font-medium uppercase tracking-[0.25em] text-white/80 sm:bottom-10 sm:right-10">
            Astrología Cabalística · Ciclos
          </span>
        </div>

        {/* Columna de texto */}
        <div className="order-2 flex flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:order-2 lg:px-16 lg:py-32 xl:pr-24">
          <Reveal delay={160}>
            <div className="flex flex-col gap-6">
              <Eyebrow>Astrología Cabalística</Eyebrow>
              <h2 className="max-w-xl font-heading text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
                Leer tu mapa para comprender tus ciclos.
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-ink-muted text-body">
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
        </div>
      </div>
    </section>
  );
}
