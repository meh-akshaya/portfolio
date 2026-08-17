"use client";

import { motion } from "motion/react";
import { INTRO_CONFIG, EASING } from "@/lib/animation-config";

interface NameIntroProps {
  /** True when prefers-reduced-motion — collapses to a quick, minimal fade. */
  reducedMotion?: boolean;
}

/**
 * Full-screen black background with the name centered, fading and
 * settling in — no bounce, no typing effect, no decoration. Mount/unmount
 * timing (when this appears and how long it's held before the tunnel
 * takes over) is owned by IntroSequence, not this component.
 */
export function NameIntro({ reducedMotion = false }: NameIntroProps) {
  const fadeInDuration = reducedMotion ? 0.3 : INTRO_CONFIG.fadeInDuration;
  const fadeInDelay = reducedMotion ? 0 : INTRO_CONFIG.fadeInDelay;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[color:var(--color-black)]">
      <motion.h1
        className="text-base sm:text-lg font-medium uppercase tracking-[0.2em] text-center text-[color:var(--color-ink-on-black)] px-6 font-[family-name:var(--font-display)]"
        initial={{
          opacity: 0,
          scale: INTRO_CONFIG.initialScale,
          letterSpacing: "0.3em",
        }}
        animate={{
          opacity: 1,
          scale: 1,
          letterSpacing: "0.2em",
        }}
        transition={{
          duration: fadeInDuration,
          delay: fadeInDelay,
          ease: EASING.gentle,
        }}
      >
        AKSHAYA.
      </motion.h1>
    </div>
  );
}
