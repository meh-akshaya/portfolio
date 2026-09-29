"use client";

import Link from "next/link";

interface Project {
  number: string;
  title: string;
  category: string;
  description?: string;
  bullets?: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS_DATA: Project[] = [
  {
    number: "01",
    title: "CYBERSEC RAG",
    category: "AI-Powered Cybersecurity Knowledge Assistant | Backend",
    description:
      "A Node.js/Express backend service processing cybersecurity documents into vector embeddings for semantic retrieval and context-grounded LLM response generation.",
    bullets: [
      "Building a Node.js/Express pipeline that processes documents into chunks and generates embeddings for each chunk",
      "Storing embeddings in a vector database for semantic retrieval against incoming natural-language queries",
      "Designed a retrieve-then-generate API flow that passes relevant context to an LLM so answers stay grounded in source documents",
      "Evaluating prompt injection and over-permissioned tool calling while integrating LLM APIs and tool calling into the backend",
    ],
    tags: ["Node.js", "Express", "LLM APIs", "RAG", "Vector DB"],
    liveUrl: "https://github.com/meh-akshaya",
    githubUrl: "https://github.com/meh-akshaya",
  },
  {
    number: "02",
    title: "PERSONA",
    category: "Privacy-Focused Anonymous Community Platform | Full Stack",
    description:
      "A full-stack community platform built with React, Node.js/Express REST API, PostgreSQL, and Prisma with JWT authentication and content validation.",
    bullets: [
      "Built and deployed a full-stack community platform with a React frontend and Node.js/Express REST API backend",
      "Modeled posts, threaded discussions, reactions, and trust scoring with PostgreSQL and Prisma",
      "Implemented JWT authentication and authorization checks to protect user identity and restrict access to resources",
      "Hardened the API with rate limiting, Helmet security headers, and Prisma field-level selection to limit abuse and data exposure",
      "Added server-side content validation that detects emails, phone numbers, and personal links before persistence",
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
    liveUrl: "https://persona.akshayaverma.dev/",
    githubUrl: "https://github.com/meh-akshaya/persona",
  },
  {
    number: "03",
    title: "BREAKCASE",
    category: "Secure Code Execution & Counterexample Testing Platform | Full Stack",
    description:
      "A competitive programming platform that compiles submitted C++17 programs in controlled child processes and generates counterexamples.",
    bullets: [
      "Built a full-stack platform with a React and TypeScript frontend and a Node.js/Express backend that generates counterexamples to expose incorrect logic in C++17 solutions",
      "Developed a server-side service that compiles submitted programs and evaluates generated inputs through controlled Node.js child processes",
      "Enforced execution timeouts and output limits to prevent runaway execution and uncontrolled output",
      "Validated inputs and applied resource constraints to test submissions safely against malformed, excessive, and adversarial inputs",
    ],
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "C++17",
    ],
    liveUrl: "https://breakcase.akshayaverma.dev/",
    githubUrl: "https://github.com/meh-akshaya/BreakCase",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 hairline-top">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-16">
        <div>
          <p className="text-meta text-[color:var(--color-muted-on-black)] mb-2 font-mono">
            01 &bull; SELECTED WORK
          </p>
          <h2 className="text-display-md text-[color:var(--color-ink-on-black)]">
            PROJECTS
          </h2>
        </div>
        <p className="hidden sm:block text-meta text-[color:var(--color-muted-on-black)] font-mono">
          2024 &mdash; 2026
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col border-b border-[color:var(--color-hairline-on-black)]">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.number}
            className="group border-t border-[color:var(--color-hairline-on-black)] py-10 transition-colors duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              {/* Project Identity & Number (Title redirects to Live Demo) */}
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="font-mono text-sm text-[color:var(--color-muted-on-black)] group-hover:text-[color:var(--color-ink-on-black)] transition-colors">
                  {project.number}
                </span>
                <div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group/title"
                    title={`Open Live Demo (${project.liveUrl})`}
                  >
                    <h3 className="text-display-md text-[color:var(--color-white-soft)] tracking-tight transition-all duration-300 ease-out group-hover/title:scale-[1.01] group-hover/title:text-white group-hover/title:underline underline-offset-4 origin-left flex items-center gap-2.5">
                      <span>{project.title}</span>
                      <span className="text-sm text-[color:var(--color-muted-on-black)] group-hover/title:text-white transition-colors">
                        ↗
                      </span>
                    </h3>
                  </a>
                  <p className="text-meta mt-1 text-[color:var(--color-muted-on-black)] font-mono text-[11px] group-hover:text-[color:var(--color-white-soft)] transition-colors">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Explore CTA (Redirects to GitHub Repo) */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 self-end lg:self-center group/explore py-1 px-3 border border-[color:var(--color-hairline-on-black)] bg-black hover:border-white transition-all"
                title={`Explore GitHub Repo (${project.githubUrl})`}
              >
                <span className="text-meta font-mono text-[11px] text-[color:var(--color-muted-on-black)] group-hover/explore:text-white transition-colors">
                  EXPLORE REPO
                </span>
                <span className="text-xl text-[color:var(--color-muted-on-black)] group-hover/explore:text-white transition-transform duration-300 group-hover/explore:translate-x-1.5">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Description & Tech Tags */}
            <div className="mt-6 pl-0 sm:pl-16 max-w-3xl">
              {project.description && (
                <p className="text-body text-[color:var(--color-muted-on-black)] group-hover:text-[color:var(--color-white-soft)] transition-colors leading-relaxed mb-4">
                  {project.description}
                </p>
              )}

              {project.bullets && project.bullets.length > 0 && (
                <ul className="space-y-2.5 mb-5">
                  {project.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[color:var(--color-muted-on-black)] group-hover:text-[color:var(--color-white-soft)] transition-colors leading-relaxed"
                    >
                      <span className="text-[color:var(--color-muted-on-black)] group-hover:text-white transition-colors select-none mt-1.5 text-[8px]">
                        ■
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[color:var(--color-hairline-on-black)] bg-black px-2.5 py-1 text-[11px] font-mono text-[color:var(--color-muted-on-black)] transition-colors group-hover:border-[color:var(--color-white-soft)] group-hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quick Action Links: Live Demo & GitHub Repo */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white border border-white/30 bg-white/10 px-3.5 py-1.5 hover:bg-white hover:text-black transition-all flex items-center gap-1.5"
                >
                  <span>LIVE DEMO</span>
                  <span>↗</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[color:var(--color-muted-on-black)] border border-[color:var(--color-hairline-on-black)] bg-black px-3.5 py-1.5 hover:border-white hover:text-white transition-all flex items-center gap-1.5"
                >
                  <span>GITHUB REPO</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


