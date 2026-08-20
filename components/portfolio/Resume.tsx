"use client";

import { useState } from "react";

interface SkillCategory {
  title: string;
  skills: string;
}

interface ResumeProject {
  title: string;
  subtitle: string;
  tech: string;
  bullets: string[];
}

interface Achievement {
  title: string;
  description: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  { title: "Languages", skills: "C++" },
  {
    title: "Backend",
    skills:
      "Node.js, Express.js, Flask, REST APIs, JWT Authentication, Prisma ORM",
  },
  { title: "Databases", skills: "PostgreSQL, SQLite, Firebase" },
  { title: "Frontend", skills: "React.js, Tailwind CSS" },
  {
    title: "Tools",
    skills: "Git, GitHub, VS Code",
  },
];

const RESUME_PROJECTS: ResumeProject[] = [
  {
    title: "Persona",
    subtitle: "Full-Stack Anonymous Community Platform",
    tech: "Node.js, Express, PostgreSQL, Prisma, React, JWT",
    bullets: [
      "Architected a full-stack anonymous discussion platform across 7 seeded communities (Career, Tech, Startups, Finance, etc.), giving users persistent pseudonymous identities without exposing real accounts",
      "Designed a self-referencing Prisma comment model to support threaded, nested discussions, and wrapped reaction and trust-score updates in atomic $transaction blocks to keep scores consistent under concurrent writes",
      "Built a pre-save privacy-leak detector that scans post content before persistence, decoupled from publish policy so moderation rules can evolve independently of the write path",
      "Hardened the API with JWT-based role authentication, Helmet security headers, and express-rate-limit throttling to mitigate abuse and brute-force attempts",
      "Enforced anonymity at the data layer using Prisma select-level field exclusion (not app-side filtering), with slug-based community routing and idempotent upsert seed scripts for reproducible deploys",
    ],
  },
  {
    title: "BreakCase",
    subtitle: "DSA/CP Error Hunting Platform",
    tech: "React 19, TypeScript, Vite, Tailwind CSS, Node.js, Express, Prisma, C++17",
    bullets: [
      "Built a competitive programming platform where users find valid counterexamples that break seemingly correct C++17 solutions",
      "Implemented interactive problem rendering, Monaco code viewing, input validation, and progress tracking with a React/TypeScript frontend and Express/TypeScript backend",
      "Built a server-side C++17 execution pipeline using g++ -O2, Node.js child processes, execution timeouts, and output limits for counterexample verification",
    ],
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Health Hackathon — Finalist",
    description:
      "Reached the final round with a mental healthcare platform, out of 100+ competing teams",
  },
  {
    title: "Startup Pitch Competition — 1st Place",
    description:
      "Won first place pitching BrightBuddy, a mental wellness platform, against competing teams",
  },
  {
    title: "Competitive Programming",
    description:
      "Participated in 20+ contests across CodeChef and Codeforces, achieving a CodeChef rating of 1217 and a Codeforces rating of 850",
  },
];

export function Resume() {
  const [viewMode, setViewMode] = useState<"web" | "pdf">("pdf");

  return (
    <section id="resume" className="py-20 hairline-top">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-meta text-[color:var(--color-muted-on-black)] mb-2 font-mono">
            03 &bull; EXPERIENCE &amp; RESUME
          </p>
          <h2 className="text-display-md text-white">RESUME</h2>
        </div>

        {/* View Controls & Download CTA */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Toggle View Mode */}
          <div className="inline-flex border border-[color:var(--color-hairline-on-black)] bg-black p-1">
            <button
              onClick={() => setViewMode("web")}
              className={`px-3 py-1.5 font-mono text-xs transition-colors ${
                viewMode === "web"
                  ? "bg-white text-black font-semibold"
                  : "text-[color:var(--color-muted-on-black)] hover:text-white"
              }`}
            >
              DOCUMENT VIEW
            </button>
            <button
              onClick={() => setViewMode("pdf")}
              className={`px-3 py-1.5 font-mono text-xs transition-colors ${
                viewMode === "pdf"
                  ? "bg-white text-black font-semibold"
                  : "text-[color:var(--color-muted-on-black)] hover:text-white"
              }`}
            >
              PDF PREVIEW
            </button>
          </div>

          {/* Download Action */}
          <a
            href="/resume.pdf"
            download="Akshaya_Verma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 border border-[color:var(--color-hairline-on-black)] bg-[color:var(--color-black-soft)] px-5 py-2.5 text-nav text-white transition-all duration-300 hover:border-white hover:bg-black hover:text-white"
          >
            <span className="font-mono text-xs text-[color:var(--color-muted-on-black)] group-hover:text-white">
              [
            </span>
            <span>DOWNLOAD RESUME PDF</span>
            <span className="text-white group-hover:translate-y-0.5 transition-transform">
              &darr;
            </span>
            <span className="font-mono text-xs text-[color:var(--color-muted-on-black)] group-hover:text-white">
              ]
            </span>
          </a>
        </div>
      </div>

      {/* PDF View Mode */}
      {viewMode === "pdf" && (
        <div className="border border-[color:var(--color-hairline-on-black)] bg-neutral-900 p-2 sm:p-4 rounded-sm">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[color:var(--color-hairline-on-black)] px-2">
            <span className="font-mono text-xs text-[color:var(--color-muted-on-black)]">
              PDF VIEWER &bull; public/resume.pdf
            </span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-white hover:underline flex items-center gap-1"
            >
              Open in full window &nearr;
            </a>
          </div>
          <iframe
            src="/resume.pdf"
            className="w-full h-[750px] border border-[color:var(--color-hairline-on-black)] bg-white rounded-sm"
            title="Akshaya Verma Resume PDF"
          />
        </div>
      )}

      {/* Web Document View Mode */}
      {viewMode === "web" && (
        <div className="border border-[color:var(--color-hairline-on-black)] bg-[color:var(--color-black-soft)] p-6 sm:p-12 space-y-12">
          {/* Header Identity */}
          <div className="border-b border-[color:var(--color-hairline-on-black)] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-display-md text-3xl sm:text-4xl text-white tracking-tight">
                AKSHAYA VERMA
              </h1>
              <p className="text-meta font-mono text-sm text-[color:var(--color-muted-on-black)] mt-2">
                B.Tech Computer Science &amp; Engineering &bull; VIT
                University, Bhopal
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[color:var(--color-muted-on-black)]">
              <a
                href="https://akshayaverma.dev"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white underline underline-offset-2"
              >
                akshayaverma.dev
              </a>
              <span>&bull;</span>
              <a
                href="mailto:connect.akshayaverma@gmail.com"
                className="hover:text-white underline underline-offset-2"
              >
                connect.akshayaverma@gmail.com
              </a>
              <span>&bull;</span>
              <a
                href="https://github.com/meh-akshaya"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white underline underline-offset-2"
              >
                github.com/meh-akshaya
              </a>
            </div>
          </div>

          {/* 01. Education */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              01 &bull; EDUCATION
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pt-2">
              <div>
                <h4 className="text-lg font-bold text-white">
                  VIT University
                </h4>
                <p className="text-sm text-[color:var(--color-muted-on-black)]">
                  B.Tech, Computer Science Engineering — CGPA: 8.01
                </p>
              </div>
              <div className="text-right sm:text-right font-mono text-xs text-[color:var(--color-muted-on-black)]">
                <p className="text-white">2023 &mdash; 2027</p>
                <p>Bhopal, MP</p>
              </div>
            </div>
          </div>

          {/* 02. Technical Skills */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              02 &bull; TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {SKILL_CATEGORIES.map((sc, i) => (
                <div
                  key={i}
                  className="border border-[color:var(--color-hairline-on-black)] bg-black p-3.5"
                >
                  <span className="font-mono text-xs text-white block font-semibold mb-1">
                    {sc.title}
                  </span>
                  <span className="text-xs text-[color:var(--color-muted-on-black)] leading-relaxed">
                    {sc.skills}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 03. Projects */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              03 &bull; PROJECTS
            </h3>
            <div className="space-y-8">
              {RESUME_PROJECTS.map((p, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {p.title}{" "}
                        <span className="text-sm font-normal text-[color:var(--color-muted-on-black)]">
                          | {p.subtitle}
                        </span>
                      </h4>
                    </div>
                    <span className="font-mono text-[11px] text-[color:var(--color-muted-on-black)] bg-black px-2 py-0.5 border border-[color:var(--color-hairline-on-black)] self-start sm:self-auto">
                      {p.tech}
                    </span>
                  </div>

                  <ul className="space-y-2 pl-1">
                    {p.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[color:var(--color-muted-on-black)] leading-relaxed"
                      >
                        <span className="text-white select-none mt-1 text-[8px]">
                          ■
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* 04. Cocurricular */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              04 &bull; COCURRICULAR &amp; ACHIEVEMENTS
            </h3>
            <div className="space-y-4 pt-2">
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="space-y-1">
                  <h4 className="text-sm font-bold text-white">{a.title}</h4>
                  <p className="text-xs text-[color:var(--color-muted-on-black)] leading-relaxed pl-3 border-l border-[color:var(--color-hairline-on-black)]">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

