import { Compass, Users, RefreshCw, Unlock, Eye, Sparkles } from "lucide-react";
import Eyebrow from "@/components/ui/Eyebrow";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import FeatureTags from "@/components/ui/FeatureTags";
import Reveal from "@/components/ui/Reveal";

const AREAS = [
  { icon: Compass, title: "Procesos personales" },
  { icon: Users, title: "Relaciones y vínculos" },
  { icon: RefreshCw, title: "Cambios y etapas vitales" },
  { icon: Unlock, title: "Bloqueos y patrones" },
  { icon: Eye, title: "Toma de conciencia" },
  { icon: Sparkles, title: "Nuevas perspectivas" },
];

export default function Psicotarot() {
  return (
    <section id="psicotarot" className="scroll-mt-24 overflow-hidden bg-surface">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
        {/* Columna de texto */}
        <div className="order-2 flex flex-col justify-center gap-6 px-6 py-20 sm:px-10 lg:order-1 lg:px-16 lg:py-32 xl:pl-24">
          <Reveal>
            <div className="flex flex-col gap-6">
              <Eyebrow>Psicotarot</Eyebrow>
              <h2 className="max-w-xl font-heading text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
                Comprender lo que estás viviendo desde otra perspectiva.
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-ink-muted text-body">
                El Psicotarot utiliza el lenguaje simbólico del Tarot como herramienta de
                reflexión y autoconocimiento. La consulta permite explorar situaciones,
                emociones, conflictos y procesos personales, poniendo el foco en aquello que
                puede ayudarte a comprender mejor tu momento presente.
              </p>

              <div className="mt-4 flex flex-col gap-4">
                <span className="text-sm font-medium text-primary">
                  Durante una consulta puedes explorar:
                </span>
                <FeatureTags items={AREAS} align="left" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Columna de imagen — a sangre, editorial */}
        <div className="relative order-1 h-[52vh] overflow-hidden sm:h-[64vh] lg:order-2 lg:h-auto">
          <Reveal delay={160} variant="scale" className="absolute inset-0 h-full w-full">
            <PlaceholderImage
              label="Fotografía de Tarot pendiente"
              tone="dark"
              rounded={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full"
            />
          </Reveal>

          <span
            aria-hidden
            className="pointer-events-none absolute right-6 top-6 z-10 font-heading text-8xl leading-none text-accent/25 sm:right-10 sm:top-10 sm:text-9xl"
          >
            01
          </span>
          <span className="pointer-events-none absolute bottom-6 left-6 z-10 text-[11px] font-medium uppercase tracking-[0.25em] text-white/80 sm:bottom-10 sm:left-10">
            Psicotarot · Autoconocimiento
          </span>
        </div>
      </div>
    </section>
  );
}
