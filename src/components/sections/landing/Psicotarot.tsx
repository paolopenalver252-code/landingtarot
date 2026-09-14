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
    <section id="psicotarot" className="scroll-mt-24 bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="flex flex-col gap-6">
              <Eyebrow>Psicotarot</Eyebrow>
              <h2 className="font-heading text-3xl leading-tight text-primary sm:text-4xl">
                Comprender lo que estás viviendo desde otra perspectiva.
              </h2>
              <p className="text-base leading-relaxed text-ink-muted text-body">
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

          <Reveal delay={150}>
            <div className="relative">
              <span
                aria-hidden
                className="absolute -left-4 -top-6 z-10 font-heading text-7xl text-accent/25 sm:-left-6 sm:text-8xl"
              >
                01
              </span>
              <PlaceholderImage
                label="Fotografía de Tarot pendiente"
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
