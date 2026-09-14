import type { Metadata } from "next";
import Hero from "@/components/sections/landing/Hero";
import Introduction from "@/components/sections/landing/Introduction";
import Psicotarot from "@/components/sections/landing/Psicotarot";
import AstrologiaCabalistica from "@/components/sections/landing/AstrologiaCabalistica";
import Differential from "@/components/sections/landing/Differential";
import ForWhom from "@/components/sections/landing/ForWhom";
import Experience from "@/components/sections/landing/Experience";
import ClosingQuote from "@/components/sections/landing/ClosingQuote";
import FinalCta from "@/components/sections/FinalCta";
import { buildPageMetadata, mainSiteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Psicotarot y Astrología Cabalística",
  description:
    "Descubre el Psicotarot y la Astrología Cabalística como herramientas de autoconocimiento, reflexión y evolución personal en PSAI FLOW ACADEMY.",
  path: "/",
});

export default function PsicotarotAstrologiaCabalisticaPage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Psicotarot />
      <AstrologiaCabalistica />
      <Differential />
      <ForWhom />
      <Experience />
      <ClosingQuote
        quote={
          <>
            A veces no necesitamos más respuestas.
            <br className="hidden sm:block" /> Necesitamos una nueva forma de mirar las
            preguntas.
          </>
        }
      />
      <FinalCta
        heading="Empieza por conocerte desde otra perspectiva."
        description="Si sientes que es el momento de explorar tu proceso con mayor profundidad, puedes solicitar una consulta de Psicotarot y Astrología Cabalística."
        primaryCta={{ label: "Solicitar consulta", href: mainSiteUrl("/contacto#formulario-contacto") }}
        secondaryCta={{ label: "Contactar", href: mainSiteUrl("/contacto") }}
      />
    </>
  );
}
