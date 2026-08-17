/**
 * Procedural radial checkerboard geometry.
 *
 * Rather than masking the supplied reference photo (which has a person
 * standing in front of it), the illusion is rebuilt as vector annular
 * sectors. This keeps the vanishing point mathematically exact, scales
 * to any size without pixelation, and lets us cleanly split the board
 * into depth bands (outer/middle/inner/center) for the parallax layers.
 *
 * Coordinate system: a fixed 1000x1000 viewBox, center at (500, 500),
 * outer radius 500 (fills the viewBox exactly).
 */

export const CHECKERBOARD_VIEWBOX_SIZE = 1000;
export const CHECKERBOARD_CENTER = CHECKERBOARD_VIEWBOX_SIZE / 2;
export const CHECKERBOARD_OUTER_RADIUS = CHECKERBOARD_CENTER;

/** Total concentric rings across the whole illusion (before splitting into bands). */
export const CHECKERBOARD_RING_COUNT = 16;
/** Angular segments per ring. Higher = finer checker tiles. */
export const CHECKERBOARD_SEGMENTS = 32;

export interface Sector {
  d: string;
  fill: "black" | "white";
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
}

/** Builds the SVG path `d` for one annular sector (a ring "tile"). */
function annularSectorPath(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
): string {
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  // Degenerate inner radius (center-most ring) collapses to a point —
  // draw a simple pie wedge instead of an annulus in that case.
  if (innerR <= 0.001) {
    const p1 = polarToCartesian(cx, cy, outerR, startAngle);
    const p2 = polarToCartesian(cx, cy, outerR, endAngle);
    return `M ${cx} ${cy} L ${p1.x} ${p1.y} A ${outerR} ${outerR} 0 ${largeArc} 1 ${p2.x} ${p2.y} Z`;
  }

  const p1 = polarToCartesian(cx, cy, outerR, startAngle);
  const p2 = polarToCartesian(cx, cy, outerR, endAngle);
  const p3 = polarToCartesian(cx, cy, innerR, endAngle);
  const p4 = polarToCartesian(cx, cy, innerR, startAngle);

  return [
    `M ${p1.x} ${p1.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${p2.x} ${p2.y}`,
    `L ${p3.x} ${p3.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${p4.x} ${p4.y}`,
    "Z",
  ].join(" ");
}

/**
 * Generates sectors for ring indices in [ringStart, ringEnd) — a "band" of
 * the full board — so each depth layer only draws its own slice of rings.
 * Ring index 0 is innermost (closest to center), higher indices are outer.
 */
export function generateCheckerboardBand(
  ringStart: number,
  ringEnd: number,
  ringCount: number = CHECKERBOARD_RING_COUNT,
  segments: number = CHECKERBOARD_SEGMENTS
): Sector[] {
  const sectors: Sector[] = [];
  const ringThickness = CHECKERBOARD_OUTER_RADIUS / ringCount;
  const segmentAngle = 360 / segments;

  for (let ring = ringStart; ring < ringEnd; ring++) {
    const innerR = ring * ringThickness;
    const outerR = (ring + 1) * ringThickness;

    for (let seg = 0; seg < segments; seg++) {
      const startAngle = seg * segmentAngle;
      const endAngle = startAngle + segmentAngle;
      const isWhite = (ring + seg) % 2 === 0;

      sectors.push({
        d: annularSectorPath(
          CHECKERBOARD_CENTER,
          CHECKERBOARD_CENTER,
          innerR,
          outerR,
          startAngle,
          endAngle
        ),
        fill: isWhite ? "white" : "black",
      });
    }
  }

  return sectors;
}
