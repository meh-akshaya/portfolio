# intro/

- `NameIntro.tsx` — full-screen black + "AKSHAYA VERMA" fade/scale-in. Timing from `INTRO_CONFIG`.
- `IntroSequence.tsx` — state machine (name -> tunnel -> revealing -> done). Mounts portfolio content underneath the whole time; the final phase crossfades the overlay away rather than swapping pages. Handles `prefers-reduced-motion`, plays once per `sessionStorage`, skippable via click/keypress.
