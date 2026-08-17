"use client";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS_DATA: Project[] = [
  {
    number: "01",
    title: "PERSONA",
    category: "Anonymous Social Discussion Platform",
    description:
      "An anonymous discussion platform built around persistent personas with encrypted identity layers.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    number: "02",
    title: "AURA ARCHITECTURE",
    category: "Design System & UI Component Lab",
    description:
      "Minimalist design system with fluid typography tokens, low-latency animations, and strict monochrome color scales.",
    tags: ["TypeScript", "Tailwind v4", "Motion", "CSS Variables"],
    liveUrl: "#",
    githubUrl: "#",
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
              {/* Project Identity & Number */}
              <div className="flex items-baseline gap-6 sm:gap-10">
                <span className="font-mono text-sm text-[color:var(--color-muted-on-black)] group-hover:text-[color:var(--color-ink-on-black)] transition-colors">
                  {project.number}
                </span>
                <div>
                  <h3 className="text-display-md text-[color:var(--color-white-soft)] tracking-tight transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:text-white origin-left">
                    {project.title}
                  </h3>
                  <p className="text-meta mt-1 text-[color:var(--color-muted-on-black)] font-mono text-[11px] group-hover:text-[color:var(--color-white-soft)] transition-colors">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Arrow CTA */}
              <div className="flex items-center gap-2 self-end lg:self-center">
                <span className="text-meta font-mono text-[11px] text-[color:var(--color-muted-on-black)] opacity-0 group-hover:opacity-100 transition-opacity">
                  EXPLORE
                </span>
                <span className="text-xl text-[color:var(--color-muted-on-black)] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1.5">
                  &rarr;
                </span>
              </div>
            </div>

            {/* Description & Tech Tags */}
            <div className="mt-6 pl-0 sm:pl-16 max-w-3xl">
              <p className="text-body text-[color:var(--color-muted-on-black)] group-hover:text-[color:var(--color-white-soft)] transition-colors leading-relaxed">
                {project.description}
              </p>

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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
