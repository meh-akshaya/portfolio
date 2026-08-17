# tunnel/

- `CheckerboardLayer.tsx` — renders one depth band of the procedural checkerboard (see `lib/checkerboard.ts`) as an animated SVG.
- `TunnelScene.tsx` — composes the 4 depth layers (`TUNNEL_LAYERS`) with staggered scale/opacity/blur keyframes matching `TUNNEL_TIMELINE`, plus a radial vignette and a center-crossing black wash.

The checkerboard is generated as vector paths rather than the supplied
reference photo, so the person in that photo never appears and the
vanishing point is mathematically exact at any scale.
