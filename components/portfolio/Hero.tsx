"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex flex-col justify-between py-12 sm:py-20">
      {/* Top Meta Indicator */}
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 bg-white/70" />
        <p className="text-meta text-[color:var(--color-muted-on-black)] font-mono text-xs">
          Developer &middot; 2026
        </p>
      </div>

      {/* Main Hero Statement */}
      <div className="my-auto py-8 max-w-5xl">
        {/* "Hi there, I am" (Bold, smaller than Akshaya.) */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl font-bold tracking-wide text-white mb-2 font-mono"
        >
          Hi there, I am
        </motion.p>

        {/* "Akshaya." (BIGGEST text) */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-display-xl tracking-tight text-[color:var(--color-ink-on-black)]"
        >
          {"<Akshaya/>"}
        </motion.h1>

        {/* Polished Personal Statement Paragraphs (Same size as "Hi there", text-lg sm:text-xl) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 space-y-4 text-lg sm:text-xl font-normal text-[color:var(--color-white-soft)] leading-relaxed max-w-3xl"
        >
          <p>
            Currently, I live in Bhopal as a final-year student at VIT University. I love building some of the hundreds of ideas that cross my mind every day.
          </p>
          <p>
            I&rsquo;ve featured a few of them in the projects section of my portfolio — if you&rsquo;re interested, do check them out!
          </p>
          <p className="text-[color:var(--color-muted-on-black)] font-mono text-sm sm:text-base pt-2">
            You can send me a message{" "}
            <a
              href="mailto:connect.akshayaverma@gmail.com"
              className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity font-semibold"
            >
              here &rarr;
            </a>
          </p>
        </motion.div>

        {/* Page Shortcut Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 border border-[color:var(--color-hairline-on-black)] bg-[color:var(--color-black-soft)] px-6 py-4 text-nav text-[color:var(--color-ink-on-black)] transition-all duration-300 hover:border-white hover:bg-black hover:text-white"
          >
            {/* Pixel Corner Accents */}
            <span className="absolute -top-1 -left-1 h-1.5 w-1.5 bg-transparent group-hover:bg-white transition-colors" />
            <span className="absolute -top-1 -right-1 h-1.5 w-1.5 bg-transparent group-hover:bg-white transition-colors" />
            <span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 bg-transparent group-hover:bg-white transition-colors" />
            <span className="absolute -bottom-1 -right-1 h-1.5 w-1.5 bg-transparent group-hover:bg-white transition-colors" />

            <span className="font-mono text-xs text-[color:var(--color-muted-on-black)] group-hover:text-white">[</span>
            <span>EXPLORE PROJECTS</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
            <span className="font-mono text-xs text-[color:var(--color-muted-on-black)] group-hover:text-white">]</span>
          </Link>

          <Link
            href="/coding"
            className="group relative inline-flex items-center gap-3 border border-transparent px-5 py-4 text-nav text-[color:var(--color-muted-on-black)] transition-all duration-300 hover:text-[color:var(--color-ink-on-black)]"
          >
            <span>VIEW CODING PROFILES</span>
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
              &rarr;
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Hero Metadata Bar */}
      <div className="hairline-top pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-meta text-[color:var(--color-muted-on-black)]">
          <span>LOC: BHOPAL, INDIA</span>
          <span className="text-white/60">■</span>
          <span>STATUS: AVAILABLE FOR SELECT OPPORTUNITIES</span>
        </div>
        <div className="text-meta text-[color:var(--color-muted-on-black)] font-mono text-[11px]">
          STACK: REACT / NEXT.JS / TYPESCRIPT / NODE
        </div>
      </div>
    </section>
  );
}
