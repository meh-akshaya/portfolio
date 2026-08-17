"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface LandingIntroProps {
  onEnter: (href?: string) => void;
  onReplayIntro?: () => void;
}

const ROLES = [
  "a Developer",
  "a Final-Year Student at VIT",
  "a problem creater sometimes -_- ",
  "a Problem Solver Thankfully ;)",
];

export function LandingIntro({ onEnter, onReplayIntro }: LandingIntroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Typewriter effect loop
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 70);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 40);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <div className="fixed inset-0 z-[60] bg-[#080808] w-screen h-screen min-h-screen overflow-y-auto flex flex-col justify-between p-6 sm:p-12 select-none">
      {/* Top Left Profile Signature (Clicking replays intro animation) */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <div
          onClick={onReplayIntro}
          className="relative group cursor-pointer flex items-center gap-3"
          title="Click to replay intro animation"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-sm border border-[color:var(--color-hairline-on-black)] bg-[color:var(--color-black-soft)] transition-colors group-hover:border-white">
            {!imgError ? (
              <Image
                src="/images/profile.jpg"
                alt="Akshaya"
                width={68}
                height={68}
                className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-mono text-xs font-bold text-white">
                AV■
              </div>
            )}
          </div>
          <span className="font-mono text-xs text-[color:var(--color-muted-on-black)] group-hover:text-white transition-colors">
            Replay Intro ↻
          </span>
        </div>
      </div>

      {/* Main Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto my-auto py-8 space-y-8"
      >
        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans">
          Akshaya Verma.
        </h1>

        {/* Typewriter Subtitle */}
        <div className="flex items-center gap-2 font-mono text-xl sm:text-2xl md:text-3xl text-[color:var(--color-ink-secondary)] min-h-[40px]">
          <span>I&rsquo;m</span>
          <span className="text-white font-semibold underline underline-offset-8 decoration-white/40">
            {displayedText}
          </span>
          <span className="animate-pulse text-white font-extrabold">|</span>
        </div>

        {/* Navigation Shortcuts */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 font-mono text-sm sm:text-base">
          <button
            onClick={() => onEnter("/")}
            className="group inline-flex items-center gap-2 text-white font-bold border border-white/80 bg-white/10 px-5 py-2.5 rounded-sm transition-all hover:bg-white hover:text-black"
          >
            <span>ENTER PORTFOLIO</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </button>

          <button
            onClick={() => onEnter("/projects")}
            className="text-[color:var(--color-ink-secondary)] hover:text-white transition-colors"
          >
            Projects
          </button>

          <button
            onClick={() => onEnter("/coding")}
            className="text-[color:var(--color-ink-secondary)] hover:text-white transition-colors"
          >
            Coding
          </button>

          <button
            onClick={() => onEnter("/resume")}
            className="text-[color:var(--color-ink-secondary)] hover:text-white transition-colors"
          >
            Resume
          </button>
        </div>

        {/* Social Icons / Quick Badges */}
        <div className="flex items-center gap-3 pt-6 font-mono text-xs text-[color:var(--color-ink-muted)]">
          <a
            href="https://www.linkedin.com/in/meh-akshaya/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all"
            title="LinkedIn"
          >
            in
          </a>

          <a
            href="https://github.com/meh-akshaya"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all"
            title="GitHub"
          >
            gh
          </a>

          <a
            href="mailto:connect.akshayaverma@gmail.com"
            className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all text-sm"
            title="Email"
          >
            🔗
          </a>
        </div>
      </motion.div>

      {/* Empty Footer Spacer */}
      <div className="w-full max-w-6xl mx-auto h-6" />
    </div>
  );
}
