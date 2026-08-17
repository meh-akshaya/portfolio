"use client";

import { useEffect, useRef, useState } from "react";

// Authentic 8-bit Enlarged Pixel Arrow Grid Matrix (12x14 pixels)
// 0 = transparent, 1 = black border, 2 = white fill
const ARROW_GRID = [
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0],
  [1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0],
  [1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0],
  [1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
  [1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0],
  [1, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 0],
  [1, 2, 1, 0, 1, 2, 2, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
];

// Authentic 8-bit Enlarged Pixel Pointer Hand Grid Matrix (12x13 pixels)
const HAND_GRID = [
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 2, 2, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 2, 2, 1, 2, 2, 1, 1, 0, 0],
  [1, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 0],
  [1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1],
  [1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1],
  [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
];

/**
 * Renders crisp, pixelated SVG cursor graphics
 */
function RenderPixelSvg({ grid, scale = 2.4 }: { grid: number[][]; scale?: number }) {
  const width = grid[0].length * scale;
  const height = grid.length * scale;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${grid[0].length} ${grid.length}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: "pixelated", shapeRendering: "crispEdges" }}
      className="drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]"
    >
      {grid.flatMap((row, y) =>
        row.map((cell, x) => {
          if (cell === 0) return null;
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={cell === 1 ? "#000000" : "#ffffff"}
            />
          );
        })
      )}
    </svg>
  );
}

/**
 * Enlarged Retro Pixel Cursor System
 * Replicates the exact enlarged pixel pointer & hand cursor from Codedex.io
 */
export function PixelCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isTextInput, setIsTextInput] = useState(false);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Desktop Pointer capability check
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      setIsEnabled(false);
      return;
    }
    setIsEnabled(true);

    // 2. Mouse move handler (stores coordinates outside React state)
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    // 3. Event delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Text input elements keep native I-beam cursor
      if (target.closest("input, textarea, [contenteditable='true']")) {
        setIsTextInput(true);
        return;
      }
      setIsTextInput(false);

      // Check interactive elements (links, buttons, clickable cards)
      const interactiveEl = target.closest("a, button, [role='button'], [data-cursor], .clickable");
      setIsHovered(interactiveEl !== null);
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    // 4. Smooth rAF animation loop for zero-lag cursor movement
    const renderLoop = () => {
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.55;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.55;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) scale(${
          isMouseDown ? 0.88 : 1
        })`;
      }

      animFrameId.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    animFrameId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isMouseDown]);

  if (!isEnabled || isTextInput) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 transition-transform duration-100 ease-out"
      >
        {isHovered ? (
          <RenderPixelSvg grid={HAND_GRID} scale={2.6} />
        ) : (
          <RenderPixelSvg grid={ARROW_GRID} scale={2.6} />
        )}
      </div>
    </div>
  );
}
