import Eyebrow from "@/components/ui/Eyebrow";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Reveal from "@/components/ui/Reveal";
import Watermark from "@/components/ui/Watermark";

/**
 * Presentación editorial de Solimar Rengel, la persona detrás de PSAI
 * FLOW — no el típico bloque "Hola, soy...". Solo se afirma lo que consta
 * en el proyecto (más de 35 años de trayectoria): ningún título,
 * certificación, cliente o cifra adicional que no se nos haya confirmado.
 * Sin fotografía profesional disponible todavía, PlaceholderImage queda en
 * su estado honesto de "fotografía pendiente" en vez de simular una.
 */
export default function Solimar() {
  return (
    <section className="relative scroll-mt-24 overflow-hidden bg-primary py-28 lg:py-40">
      <Watermark className="-left-10 -top-16 z-0" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          <Reveal variant="scale">
            <PlaceholderImage
              tone="dark"
              label="Fotografía de Solimar Rengel — pendiente"
              className="aspect-[4/5] w-full"
            />
          </Reveal>

          <Reveal delay={150}>
            <div className="flex flex-col gap-6">
              <Eyebrow tone="dark">Quién está detrás</Eyebrow>
              <h2 className="max-w-lg font-heading text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Una mirada construida desde la experiencia.
              </h2>
              <p className="max-w-md text-base leading-relaxed text-mist text-body">
                Solimar Rengel es la persona detrás de PSAI FLOW: más de 35 años de trayectoria
                acompañando procesos personales a través del Psicotarot y la Astrología
                Cabalística.
              </p>
              <p className="max-w-md text-base leading-relaxed text-mist text-body">
                Una forma de mirar que se ha ido construyendo consulta a consulta, a lo largo de
                más de tres décadas.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
