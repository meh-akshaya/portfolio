"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { NameIntro } from "./NameIntro";
import { LandingIntro } from "./LandingIntro";
import { TunnelScene } from "../tunnel/TunnelScene";
import { INTRO_CONFIG, REVEAL_CONFIG, REDUCED_MOTION_CONFIG, EASING } from "@/lib/animation-config";

type Phase = "idle" | "name" | "tunnel" | "landing" | "revealing" | "done";

const SESSION_KEY = "akshaya-intro-seen";

interface IntroSequenceProps {
  children:
  | React.ReactNode
  | ((props: { onReplayIntro: () => void }) => React.ReactNode);
}

export function IntroSequence({ children }: IntroSequenceProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const router = useRouter();

  const handleReplayIntro = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    sessionStorage.removeItem(SESSION_KEY);
    setSkipped(false);
    setPhase("name");
  };

  const handleEnterPortfolio = (targetRoute?: string) => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setSkipped(true);
    setPhase("revealing");
    if (targetRoute && targetRoute !== "/") {
      router.push(targetRoute);
    }
  };

  const renderedChildren =
    typeof children === "function"
      ? children({ onReplayIntro: handleReplayIntro })
      : children;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReducedMotion(prefersReduced);

    // Check if intro seen in session, default to "name" so intro + landing page run
    const seen = sessionStorage.getItem(SESSION_KEY) === "1";
    setPhase(seen ? "done" : "name");
  }, []);

  // NAME -> TUNNEL
  useEffect(() => {
    if (phase !== "name") return;
    const duration = reducedMotion
      ? REDUCED_MOTION_CONFIG.totalDuration
      : INTRO_CONFIG.totalDuration;
    const t = setTimeout(() => setPhase("tunnel"), duration * 1000);
    return () => clearTimeout(t);
  }, [phase, reducedMotion]);

  // REVEALING -> DONE
  useEffect(() => {
    if (phase !== "revealing") return;
    const duration = skipped ? 0.25 : REVEAL_CONFIG.crossfadeDuration;
    const t = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setPhase("done");
    }, duration * 1000);
    return () => clearTimeout(t);
  }, [phase, skipped]);

  // Keypress skip during name intro -> tunnel -> landing
  useEffect(() => {
    if (phase !== "name") return;
    const skip = () => {
      setPhase("tunnel");
    };
    window.addEventListener("keydown", skip);
    return () => {
      window.removeEventListener("keydown", skip);
    };
  }, [phase]);

  const overlayVisible = phase !== "idle" && phase !== "done";
  const contentInteractive = phase === "revealing" || phase === "done";
  const crossfadeDuration = skipped ? 0.25 : REVEAL_CONFIG.crossfadeDuration;

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: REVEAL_CONFIG.contentRiseDistance }}
        animate={
          phase === "revealing" || phase === "done"
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: REVEAL_CONFIG.contentRiseDistance }
        }
        transition={{
          duration: REVEAL_CONFIG.contentRiseDuration,
          delay: phase === "revealing" ? crossfadeDuration * 0.3 : 0,
          ease: EASING.settle,
        }}
        style={{ pointerEvents: contentInteractive ? "auto" : "none" }}
        aria-hidden={!contentInteractive}
        inert={!contentInteractive ? true : undefined}
      >
        {renderedChildren}
      </motion.div>

      {overlayVisible && (
        <motion.div
          className="fixed inset-0 z-50"
          style={{ pointerEvents: phase === "revealing" ? "none" : "auto" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "revealing" ? 0 : 1 }}
          transition={{ duration: crossfadeDuration, ease: EASING.settle }}
        >
          {phase === "name" && <NameIntro reducedMotion={reducedMotion} />}

          {phase === "tunnel" && (
            <TunnelScene
              reducedMotion={reducedMotion}
              onComplete={() => setPhase("landing")}
            />
          )}

          {phase === "landing" && (
            <LandingIntro onEnter={handleEnterPortfolio} onReplayIntro={handleReplayIntro} />
          )}
        </motion.div>
      )}
    </div>
  );
}
