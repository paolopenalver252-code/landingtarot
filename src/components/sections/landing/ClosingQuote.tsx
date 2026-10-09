import { Quote } from "lucide-react";
import Watermark from "@/components/ui/Watermark";
import Reveal from "@/components/ui/Reveal";
import BlurText from "@/components/reactbits/BlurText";

type ClosingQuoteProps = {
  quote?: string;
};

/**
 * Pausa editorial: la cita ocupa mucho espacio y aparece con un reveal de
 * opacity + blur PALABRA A PALABRA (BlurText, adaptado de reactbits.dev)
 * en vez del fade-up estándar de Reveal.tsx, para que se sienta casi como
 * una página aparte, no como una sección más.
 */
export default function ClosingQuote({
  quote = "Nuestra misión es ayudarte a comprender tu camino para que puedas tomar decisiones con mayor conciencia, equilibrio y confianza.",
}: ClosingQuoteProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-32 lg:py-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(169,148,104,0.14),transparent_60%)]"
      />
      <Watermark className="-bottom-20 -right-10 z-0" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center lg:px-8">
        <Reveal>
          <Quote className="text-accent" size={30} strokeWidth={1.25} />
        </Reveal>
        <BlurText
          text={`“${quote}”`}
          delay={90}
          threshold={0.3}
          className="justify-center font-heading text-3xl italic leading-snug text-white sm:text-4xl lg:text-5xl"
        />
      </div>
    </section>
  );
}
