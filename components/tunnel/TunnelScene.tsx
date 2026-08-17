"use client";

import { useEffect, useMemo } from "react";
import { motion, type Easing } from "motion/react";
import { CheckerboardLayer } from "./CheckerboardLayer";
import {
  TUNNEL_TIMELINE,
  TUNNEL_TOTAL_DURATION,
  TUNNEL_LAYERS,
  TUNNEL_LAYER_STAGGER,
  TUNNEL_VIGNETTE_MAX_OPACITY,
  REDUCED_MOTION_CONFIG,
  EASING,
} from "@/lib/animation-config";
import {
  generateCheckerboardBand,
  CHECKERBOARD_VIEWBOX_SIZE,
} from "@/lib/checkerboard";

interface TunnelSceneProps {
  reducedMotion?: boolean;
  onComplete: () => void;
}

// Normalized (0–1) time checkpoints shared by every layer, derived once
// from the brief's timing table so every layer's keyframes line up.
const TIMES = [
  TUNNEL_TIMELINE.emerge.start,
  TUNNEL_TIMELINE.emerge.end,
  TUNNEL_TIMELINE.slowForward.end,
  TUNNEL_TIMELINE.acceleration.end,
  TUNNEL_TIMELINE.strongCenterPush.end,
  TUNNEL_TIMELINE.portfolioTransition.end,
].map((t) => t / TUNNEL_TOTAL_DURATION);

// One cinematic easing curve per segment between the checkpoints above:
// emerge -> slow -> accelerate -> accelerate harder -> settle at center.
const SEGMENT_EASINGS: Easing[] = [
  EASING.gentle,
  EASING.cinematicIn,
  EASING.cinematicIn,
  EASING.cinematicIn,
  EASING.settle,
];

/** Builds this layer's scale progression as fractions of its own scale range. */
function scaleKeyframesFor(scaleFrom: number, scaleTo: number) {
  const range = scaleTo - scaleFrom;
  const fractions = [0, 0.02, 0.12, 0.45, 0.85, 1];
  return fractions.map((f) => scaleFrom + range * f);
}

export function TunnelScene({ reducedMotion = false, onComplete }: TunnelSceneProps) {
  const totalDuration = reducedMotion
    ? REDUCED_MOTION_CONFIG.totalDuration
    : TUNNEL_TOTAL_DURATION;

  useEffect(() => {
    const timeout = setTimeout(onComplete, totalDuration * 1000);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalDuration]);

  const reducedSectors = useMemo(
    () => (reducedMotion ? generateCheckerboardBand(0, 16) : null),
    [reducedMotion]
  );

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-[color:var(--color-black)]">
        <motion.svg
          viewBox={`0 0 ${CHECKERBOARD_VIEWBOX_SIZE} ${CHECKERBOARD_VIEWBOX_SIZE}`}
          className="absolute top-1/2 left-1/2"
          style={{ width: "140vmax", height: "140vmax", x: "-50%", y: "-50%" }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0, 1, 1, 0], scale: 1.15 }}
          transition={{
            duration: REDUCED_MOTION_CONFIG.totalDuration,
            times: [0, 0.3, 0.6, 1],
            ease: EASING.standard,
          }}
        >
          {reducedSectors!.map((sector, i) => (
            <path
              key={i}
              d={sector.d}
              fill={sector.fill === "white" ? "var(--color-white)" : "var(--color-black)"}
            />
          ))}
        </motion.svg>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-[color:var(--color-black)]">
      {TUNNEL_LAYERS.map((layer, index) => (
        <CheckerboardLayer
          key={layer.id}
          ringStart={layer.ringStart}
          ringEnd={layer.ringEnd}
          scaleKeyframes={scaleKeyframesFor(layer.scaleFrom, layer.scaleTo)}
          opacityKeyframes={[1, 1, 1, 1, 1, layer.opacityExit]}
          times={TIMES}
          easings={SEGMENT_EASINGS}
          duration={totalDuration}
          blurExit={layer.blurExit}
          delay={index * TUNNEL_LAYER_STAGGER}
        />
      ))}

      {/* Radial vignette — reinforces depth as the camera pushes forward */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, var(--color-black) 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: TUNNEL_VIGNETTE_MAX_OPACITY }}
        transition={{ duration: totalDuration, ease: EASING.cinematicIn }}
      />

      {/* Center-crossing wash — the "passing through" beat, resolves to
          solid black exactly as the tunnel sequence ends. IntroSequence
          crossfades this away to reveal the portfolio underneath. */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[color:var(--color-black)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 0, 0.15, 1] }}
        transition={{ duration: totalDuration, times: TIMES, ease: EASING.settle }}
      />
    </div>
  );
}
