import type { Metadata } from "next";
import Hero from "@/components/sections/landing/Hero";
import Disciplines from "@/components/sections/landing/Disciplines";
import Differential from "@/components/sections/landing/Differential";
import Approach from "@/components/sections/landing/Approach";
import EvolutionaryOracles from "@/components/sections/landing/EvolutionaryOracles";
import Solimar from "@/components/sections/landing/Solimar";
import ForWhom from "@/components/sections/landing/ForWhom";
import HowItWorks from "@/components/sections/landing/HowItWorks";
import ClosingQuote from "@/components/sections/landing/ClosingQuote";
import Consulta from "@/components/sections/landing/Consulta";
import { buildPageMetadata } from "@/lib/seo";

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
      <Disciplines />
      <Differential />
      <Approach />
      <EvolutionaryOracles />
      <Solimar />
      <ForWhom />
      <HowItWorks />
      <ClosingQuote quote="A veces no necesitamos más respuestas. Necesitamos una nueva forma de mirar las preguntas." />
      <Consulta />
    </>
  );
}
