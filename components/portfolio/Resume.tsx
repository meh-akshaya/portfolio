"use client";

import { useState } from "react";

interface SkillCategory {
  title: string;
  skills: string;
}

interface ResumeProject {
  title: string;
  subtitle: string;
  badge?: string;
  tech: string;
  liveUrl?: string;
  displayUrl?: string;
  githubUrl?: string;
  bullets: string[];
}

interface Achievement {
  title: string;
  description: string;
}

const PROFESSIONAL_SUMMARY =
  "Final-year B.Tech Computer Science student (Cyber Security) with hands-on experience designing REST APIs and backend services with Node.js, Express, PostgreSQL, and Prisma. Built and deployed a full-stack platform with authentication, access control, and hardened APIs, plus a server-side execution service with process isolation and resource limits. Seeking a Full Stack / Backend Engineering role.";

const EDUCATION_INFO = {
  institution: "VIT University",
  location: "Bhopal, MP",
  period: "2023 — 2027",
  degree: "B.Tech in Computer Science Engineering (Cyber Security)",
  cgpa: "8.01 / 10.00",
  coursework: [
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
    "Data Privacy",
    "Software Vulnerability Testing",
  ],
};

const SKILL_CATEGORIES: SkillCategory[] = [
  { title: "Languages", skills: "C++, JavaScript, TypeScript" },
  {
    title: "Backend & APIs",
    skills:
      "Node.js, Express.js, REST APIs, JWT, RBAC, Prisma ORM, Rate Limiting, Security Headers",
  },
  { title: "Frontend", skills: "React.js, Tailwind CSS" },
  { title: "Databases", skills: "PostgreSQL, SQLite, Firebase" },
  {
    title: "Cloud & Tools",
    skills: "AWS (EC2, S3, RDS, IAM, VPC), Linux, Git, GitHub, Postman",
  },
  { title: "AI / GenAI", skills: "LLM APIs, RAG, Embeddings" },
];

const RESUME_PROJECTS: ResumeProject[] = [
  {
    title: "CyberSec RAG",
    subtitle: "AI-Powered Cybersecurity Knowledge Assistant | Backend",
    badge: "In Development",
    tech: "Node.js, Express, LLM APIs, RAG, Vector DB",
    bullets: [
      "Building a Node.js/Express pipeline that processes documents into chunks and generates embeddings for each chunk.",
      "Storing embeddings in a vector database for semantic retrieval against incoming natural-language queries.",
      "Designed a retrieve-then-generate API flow that passes relevant context to an LLM so answers stay grounded in source documents.",
      "Evaluating prompt injection and over-permissioned tool calling while integrating LLM APIs and tool calling into the backend.",
    ],
  },
  {
    title: "Persona",
    subtitle: "Privacy-Focused Anonymous Community Platform | Full Stack",
    tech: "Node.js, Express, PostgreSQL, Prisma, React, JWT",
    liveUrl: "https://persona.akshayaverma.dev/",
    displayUrl: "persona.akshayaverma.dev",
    githubUrl: "https://github.com/meh-akshaya/persona",
    bullets: [
      "Built and deployed a full-stack community platform with a React frontend and Node.js/Express REST API backend.",
      "Modeled posts, threaded discussions, reactions, and trust scoring with PostgreSQL and Prisma.",
      "Implemented JWT authentication and authorization checks to protect user identity and restrict access to resources.",
      "Hardened the API with rate limiting, Helmet security headers, and Prisma field-level selection to limit abuse and data exposure.",
      "Added server-side content validation that detects emails, phone numbers, and personal links before persistence.",
    ],
  },
  {
    title: "BreakCase",
    subtitle: "Secure Code Execution & Counterexample Testing Platform | Full Stack",
    tech: "React, TypeScript, Node.js, Express, Prisma, C++17",
    liveUrl: "https://breakcase.akshayaverma.dev/",
    githubUrl: "https://github.com/meh-akshaya/BreakCase",
    bullets: [
      "Built a full-stack platform with a React and TypeScript frontend and a Node.js/Express backend that generates counterexamples to expose incorrect logic in C++17 solutions.",
      "Developed a server-side service that compiles submitted programs and evaluates generated inputs through controlled Node.js child processes.",
      "Enforced execution timeouts and output limits to prevent runaway execution and uncontrolled output.",
      "Validated inputs and applied resource constraints to test submissions safely against malformed, excessive, and adversarial inputs.",
    ],
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Health Hackathon — Finalist",
    description: "Reached the final round among 100+ teams.",
  },
  {
    title: "Competitive Programming",
    description: "25+ contests on CodeChef and Codeforces.",
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
        <div className="border border-[color:var(--color-hairline-on-black)] bg-[color:var(--color-black-soft)] p-6 sm:p-12 space-y-10">
          {/* Header Identity */}
          <div className="border-b border-[color:var(--color-hairline-on-black)] pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1 className="text-display-md text-3xl sm:text-4xl text-white tracking-tight">
                AKSHAYA VERMA
              </h1>
              <p className="text-meta font-mono text-sm text-[color:var(--color-muted-on-black)] mt-2">
                B.Tech Computer Science &amp; Engineering (Cyber Security) &bull; VIT
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
                href="tel:9685976397"
                className="hover:text-white underline underline-offset-2"
              >
                9685976397
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

          {/* 01. Professional Summary */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              01 &bull; PROFESSIONAL SUMMARY
            </h3>
            <p className="text-sm text-[color:var(--color-white-soft)] leading-relaxed pt-1">
              {PROFESSIONAL_SUMMARY}
            </p>
          </div>

          {/* 02. Education */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              02 &bull; EDUCATION
            </h3>
            <div className="pt-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {EDUCATION_INFO.institution}
                  </h4>
                  <p className="text-sm text-[color:var(--color-muted-on-black)] font-medium">
                    {EDUCATION_INFO.degree} &bull;{" "}
                    <span className="text-white">CGPA: {EDUCATION_INFO.cgpa}</span>
                  </p>
                </div>
                <div className="text-left sm:text-right font-mono text-xs text-[color:var(--color-muted-on-black)]">
                  <p className="text-white">{EDUCATION_INFO.period}</p>
                  <p>{EDUCATION_INFO.location}</p>
                </div>
              </div>

              <div className="text-xs text-[color:var(--color-muted-on-black)]">
                <span className="font-mono text-white">Relevant Coursework: </span>
                {EDUCATION_INFO.coursework.join(", ")}
              </div>
            </div>
          </div>

          {/* 03. Technical Skills */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              03 &bull; TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
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

          {/* 04. Technical Projects */}
          <div className="space-y-6">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              04 &bull; TECHNICAL PROJECTS
            </h3>
            <div className="space-y-8">
              {RESUME_PROJECTS.map((p, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-lg font-bold text-white">
                        {p.liveUrl ? (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                            title={`Open Live Demo (${p.liveUrl})`}
                          >
                            <span>{p.title}</span>
                            <span className="text-xs text-[color:var(--color-muted-on-black)]">
                              ↗
                            </span>
                          </a>
                        ) : (
                          p.title
                        )}{" "}
                        <span className="text-sm font-normal text-[color:var(--color-muted-on-black)]">
                          | {p.subtitle}
                        </span>
                      </h4>
                      {p.badge && (
                        <span className="font-mono text-[10px] text-amber-300 bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded-xs">
                          {p.badge}
                        </span>
                      )}
                      {p.displayUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-white hover:underline"
                        >
                          {p.displayUrl}
                        </a>
                      )}
                    </div>

                    {p.githubUrl ? (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] text-[color:var(--color-muted-on-black)] bg-black px-2 py-0.5 border border-[color:var(--color-hairline-on-black)] hover:border-white hover:text-white transition-colors self-start sm:self-auto"
                        title={`View GitHub Repository (${p.githubUrl})`}
                      >
                        {p.tech} ↗
                      </a>
                    ) : (
                      <span className="font-mono text-[11px] text-[color:var(--color-muted-on-black)] bg-black px-2 py-0.5 border border-[color:var(--color-hairline-on-black)] self-start sm:self-auto">
                        {p.tech}
                      </span>
                    )}
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

          {/* 05. Achievements */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-[color:var(--color-muted-on-black)] tracking-wider uppercase border-b border-[color:var(--color-hairline-on-black)] pb-2">
              05 &bull; ACHIEVEMENTS
            </h3>
            <div className="space-y-3 pt-1">
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3">
                  <h4 className="text-xs font-mono font-bold text-white whitespace-nowrap">
                    {a.title}:
                  </h4>
                  <p className="text-xs text-[color:var(--color-muted-on-black)] leading-relaxed">
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


