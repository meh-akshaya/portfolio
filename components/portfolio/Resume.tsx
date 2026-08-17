"use client";


interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    period: "2024 — PRESENT",
    role: "Full-Stack Software Engineer & Builder",
    organization: "Independent / Project Engineering",
    description:
      "Designing scalable React/Next.js architectures, real-time backend systems, and custom UI engines. Focused on low-latency interfaces and state machines.",
  },
  {
    period: "2022 — 2024",
    role: "Frontend Engineer & Interface Developer",
    organization: "Digital Products & Web Lab",
    description:
      "Crafted responsive component libraries, design systems, and client interfaces. Optimized core web vitals and cross-browser rendering.",
  },
  {
    period: "2022 — 2026",
    role: "B.Tech Computer Science & Engineering",
    organization: "VIT University, Bhopal",
    description:
      "Core coursework in Data Structures, Algorithms, Distributed Systems, Database Management Systems, and Web Engineering.",
  },
];

export function Resume() {
  return (
    <section id="resume" className="py-20 hairline-top">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-meta text-[color:var(--color-ink-muted)] mb-2 font-mono">
            03 &bull; EXPERIENCE &amp; HISTORY
          </p>
          <h2 className="text-display-md text-white">
            RESUME
          </h2>
        </div>

        {/* Download Resume Action Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="magnetic"
          className="group relative inline-flex items-center gap-2 border border-[color:var(--color-border-hairline)] bg-[color:var(--color-black-soft)] px-5 py-3 text-nav text-white transition-all duration-300 hover:border-white hover:text-white self-start sm:self-auto"
        >
          <span className="font-mono text-xs text-[color:var(--color-ink-muted)] group-hover:text-white">[</span>
          <span>DOWNLOAD RESUME</span>
          <span className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
            ↗
          </span>
          <span className="font-mono text-xs text-[color:var(--color-ink-muted)] group-hover:text-white">]</span>
        </a>
      </div>

      {/* Experience Timeline */}
      <div className="flex flex-col divide-y divide-[color:var(--color-border-hairline)] border-y border-[color:var(--color-border-hairline)]">
        {TIMELINE_DATA.map((item, index) => (
          <div
            key={index}
            className="group py-8 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-colors duration-300 hover:bg-[color:var(--color-black-soft)] px-4 -mx-4 rounded-sm"
          >
            <div className="md:w-1/4">
              <span className="font-mono text-xs text-white block mb-1">
                ■ {item.period}
              </span>
              <p className="text-meta text-[color:var(--color-ink-muted)]">
                {item.organization}
              </p>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-display-md text-xl text-white group-hover:text-white transition-colors">
                {item.role}
              </h3>
              <p className="text-body mt-3 text-[color:var(--color-ink-secondary)]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
