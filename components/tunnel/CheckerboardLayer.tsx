"use client";

import { motion, type Easing } from "motion/react";
import { useMemo } from "react";
import {
  generateCheckerboardBand,
  CHECKERBOARD_VIEWBOX_SIZE,
} from "@/lib/checkerboard";

interface CheckerboardLayerProps {
  ringStart: number;
  ringEnd: number;
  /** Keyframe scale values across the tunnel timeline. */
  scaleKeyframes: number[];
  /** Keyframe opacity values across the tunnel timeline (for the exit fade). */
  opacityKeyframes: number[];
  /** Normalized (0–1) time checkpoints matching the keyframe arrays. */
  times: number[];
  /** Per-segment easing curves, length = keyframes.length - 1. */
  easings: Easing[];
  duration: number;
  /** Blur (px) reached at the final keyframe, for depth-exit softening. */
  blurExit: number;
  /** Per-layer start delay (seconds) — see TUNNEL_LAYER_STAGGER. */
  delay?: number;
}

/**
 * Renders one depth band (e.g. "outer" = rings 12–16) of the procedural
 * checkerboard as a single SVG, sized relative to the viewport via vmax so
 * the vanishing point stays centered regardless of aspect ratio. Motion
 * animates its own scale/opacity/blur — this component only draws.
 */
export function CheckerboardLayer({
  ringStart,
  ringEnd,
  scaleKeyframes,
  opacityKeyframes,
  times,
  easings,
  duration,
  blurExit,
  delay = 0,
}: CheckerboardLayerProps) {
  const sectors = useMemo(
    () => generateCheckerboardBand(ringStart, ringEnd),
    [ringStart, ringEnd]
  );

  const blurKeyframes = useMemo(
    () => scaleKeyframes.map((_, i) => (i === scaleKeyframes.length - 1 ? blurExit : 0)),
    [scaleKeyframes, blurExit]
  );

  return (
    <motion.svg
      viewBox={`0 0 ${CHECKERBOARD_VIEWBOX_SIZE} ${CHECKERBOARD_VIEWBOX_SIZE}`}
      className="absolute top-1/2 left-1/2"
      style={{
        width: "140vmax",
        height: "140vmax",
        x: "-50%",
        y: "-50%",
      }}
      initial={{ scale: scaleKeyframes[0], opacity: opacityKeyframes[0] }}
      animate={{
        scale: scaleKeyframes,
        opacity: opacityKeyframes,
        filter: blurKeyframes.map((b) => `blur(${b}px)`),
      }}
      transition={{
        duration,
        delay,
        times,
        ease: easings,
      }}
    >
      {sectors.map((sector, i) => (
        <path
          key={i}
          d={sector.d}
          fill={
            sector.fill === "white"
              ? "var(--color-white)"
              : "var(--color-black)"
          }
        />
      ))}
    </motion.svg>
  );
}
