import Hero from "@/components/sections/landing/Hero";
import Introduction from "@/components/sections/landing/Introduction";
import Differential from "@/components/sections/landing/Differential";
import Approach from "@/components/sections/landing/Approach";
import Reading from "@/components/sections/landing/Reading";
import ForWhom from "@/components/sections/landing/ForWhom";
import HowItWorks from "@/components/sections/landing/HowItWorks";
import ClosingQuote from "@/components/sections/landing/ClosingQuote";
import Consulta from "@/components/sections/landing/Consulta";

// Sin `metadata` propio: la plantilla de título del layout no se aplica a la
// página de su mismo segmento, así que la home usa directamente el bloque
// del layout ("Lecturas para la reflexión personal | Oráculo Despertar").

export default function OraculoDespertarPage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Differential />
      <Approach />
      <Reading />
      <ForWhom />
      <HowItWorks />
      <ClosingQuote quote="A veces no necesitamos más respuestas. Necesitamos una nueva forma de mirar las preguntas." />
      <Consulta />
    </>
  );
}
