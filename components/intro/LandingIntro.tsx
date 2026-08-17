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
            className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all group"
            title="LinkedIn Profile"
          >
            <svg className="h-4 w-4 fill-current group-hover:fill-black transition-colors" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
            </svg>
          </a>

          <a
            href="https://github.com/meh-akshaya"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all group"
            title="GitHub Profile"
          >
            <svg className="h-4 w-4 fill-current group-hover:fill-black transition-colors" viewBox="0 0 16 16">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
          </a>

          <a
            href="mailto:connect.akshayaverma@gmail.com"
            className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white hover:text-black transition-all group"
            title="Send Email"
          >
            <svg className="h-4 w-4 fill-current group-hover:fill-black transition-colors" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Empty Footer Spacer */}
      <div className="w-full max-w-6xl mx-auto h-6" />
    </div>
  );
}
