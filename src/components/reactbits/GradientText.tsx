"use client";

// Adaptado de GradientText (reactbits.dev). La versión original hace un
// shimmer de ida y vuelta para siempre (yoyo infinito); aquí el barrido de
// degradado ocurre UNA sola vez al entrar en el viewport y se queda fijo,
// en vez de animar sin parar mientras la sección esté a la vista.
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/motion/environment";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
};

export default function GradientText({
  children,
  className = "",
  colors = ["#8A7042", "#B99A63", "#F0EBE1", "#B99A63"],
  duration = 2.2,
}: GradientTextProps) {
  const progress = useMotionValue(0);
  const backgroundPosition = useTransform(progress, (p) => `${p}% 50%`);
  const ref = useRef<HTMLSpanElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      progress.set(100);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggered) return;
        setTriggered(true);
        animate(progress, 100, { duration, ease: "easeInOut" });
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [progress, triggered, duration]);

  const gradientColors = [...colors, colors[0]].join(", ");

  return (
    <motion.span
      ref={ref}
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientColors})`,
        backgroundSize: "300% 100%",
        backgroundPosition,
      }}
    >
      {children}
    </motion.span>
  );
}
