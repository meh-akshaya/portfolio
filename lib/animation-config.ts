/**
 * Centralized animation configuration.
 *
 * Nothing in components/intro, components/tunnel, or components/portfolio
 * should hard-code a duration, delay, easing curve, or scale value.
 * Import from here instead. This is the single place to tune the
 * cinematic sequence described in the project brief.
 *
 * All durations are in seconds (matches Motion's default unit).
 */

// ---------------------------------------------------------------------------
// Easing
// ---------------------------------------------------------------------------

/** Cubic-bezier easing curves used across the experience. */
export const EASING = {
  /** Slow start, slow finish — for the name intro fade. */
  gentle: [0.22, 1, 0.36, 1] as const,
  /** Cinematic accelerate-into curve — for tunnel forward motion. */
  cinematicIn: [0.55, 0, 0.85, 0.35] as const,
  /** Deceleration into rest — for the homepage arrival. */
  settle: [0.16, 1, 0.3, 1] as const,
  /** Standard UI easing for hover/interaction micro-states. */
  standard: [0.4, 0, 0.2, 1] as const,
} as const;

// ---------------------------------------------------------------------------
// Stage 1 — Identity intro (BLACK -> AKSHAYA VERMA)
// ---------------------------------------------------------------------------

export const INTRO_CONFIG = {
  /** Total time the name is held on screen, in seconds. */
  totalDuration: 2.6,
  /** Delay before the name begins to appear. */
  fadeInDelay: 0.15,
  /** Duration of the name's fade/scale-in. */
  fadeInDuration: 1.1,
  /** How long the name holds at full opacity before the illusion begins. */
  holdDuration: 0.9,
  /** Duration of the name's fade-out as the tunnel takes over. */
  fadeOutDuration: 0.6,
  /** Subtle scale the name animates from (never bounces past 1). */
  initialScale: 0.97,
  /** Letter-spacing pulled in slightly during fade-in, in em. */
  initialTracking: 0.08,
  settledTracking: 0.02,
} as const;

// ---------------------------------------------------------------------------
// Stage 2 — Tunnel / optical illusion camera sequence
// ---------------------------------------------------------------------------

/**
 * Sequence timeline, in seconds, measured from the moment the illusion
 * begins emerging (i.e. t=0 is right after INTRO_CONFIG finishes).
 * Mirrors the brief's timing table 1:1 so it's easy to cross-reference.
 */
export const TUNNEL_TIMELINE = {
  emerge: { start: 0, end: 0.5 },
  slowForward: { start: 0.5, end: 1.2 },
  acceleration: { start: 1.2, end: 2.2 },
  strongCenterPush: { start: 2.2, end: 2.8 },
  portfolioTransition: { start: 2.8, end: 3.0 },
} as const;

/** Total duration of the tunnel sequence, in seconds. Derived, but kept explicit for readability. */
export const TUNNEL_TOTAL_DURATION = TUNNEL_TIMELINE.portfolioTransition.end;

/**
 * Ring layer configuration for the 2.5D parallax illusion.
 * Each layer owns a band of concentric rings from the procedural
 * checkerboard (see lib/checkerboard.ts, 16 rings total, 0 = innermost).
 * Rings closer to "outer" move less and exit the viewport later; rings
 * closer to "center" scale and move faster, creating the sense of depth
 * without a 3D engine.
 */
export const TUNNEL_LAYERS = [
  { id: "outer", ringStart: 12, ringEnd: 16, scaleFrom: 1, scaleTo: 2.4, speedFactor: 0.55, blurExit: 2, opacityExit: 0 },
  { id: "middle", ringStart: 8, ringEnd: 12, scaleFrom: 1, scaleTo: 3.4, speedFactor: 0.75, blurExit: 3, opacityExit: 0 },
  { id: "inner", ringStart: 4, ringEnd: 8, scaleFrom: 1, scaleTo: 5.2, speedFactor: 1, blurExit: 4, opacityExit: 0 },
  { id: "center", ringStart: 0, ringEnd: 4, scaleFrom: 1, scaleTo: 9, speedFactor: 1.3, blurExit: 0, opacityExit: 1 },
] as const;

/** How much each successive layer is delayed, in seconds, to reinforce depth. */
export const TUNNEL_LAYER_STAGGER = 0.06;

/** Vignette / radial darkening intensity applied as the camera pushes forward (0–1). */
export const TUNNEL_VIGNETTE_MAX_OPACITY = 0.85;

// ---------------------------------------------------------------------------
// Stage 3+ — Homepage reveal
// ---------------------------------------------------------------------------

export const REVEAL_CONFIG = {
  /** Cross-fade duration between the tunnel's final frame and the homepage. */
  crossfadeDuration: 0.5,
  /** Slight upward drift the homepage content resolves from, in pixels. */
  contentRiseDistance: 16,
  contentRiseDuration: 0.7,
} as const;

// ---------------------------------------------------------------------------
// Reduced motion
// ---------------------------------------------------------------------------

/**
 * When prefers-reduced-motion is set, the full cinematic sequence is
 * replaced with this much shorter, opacity-only version so users reach
 * the portfolio quickly without disabling the identity moment entirely.
 */
export const REDUCED_MOTION_CONFIG = {
  totalDuration: 0.6,
  fadeDuration: 0.4,
} as const;

// ---------------------------------------------------------------------------
// Derived helpers
// ---------------------------------------------------------------------------

/** Full experience duration (intro + tunnel), standard motion. */
export const FULL_EXPERIENCE_DURATION =
  INTRO_CONFIG.totalDuration + TUNNEL_TOTAL_DURATION;
