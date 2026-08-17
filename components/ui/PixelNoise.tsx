"use client";

/**
 * Extremely subtle, non-distracting background pixel grain texture.
 * Gives a clean digital paper/retro feel while remaining strictly dark and performant.
 */
export function PixelNoise() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(var(--color-white) 1px, transparent 0)`,
        backgroundSize: "24px 24px",
      }}
      aria-hidden="true"
    />
  );
}
