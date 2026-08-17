"use client";

export function GithubStar() {
  return (
    <footer id="github-star" className="py-20 hairline-top">
      {/* GitHub & LinkedIn Card */}
      <div className="border border-[color:var(--color-hairline-on-black)] bg-[color:var(--color-black-soft)] p-8 sm:p-12 text-center relative overflow-hidden group">
        {/* Subtle Pixel Accent Dots */}
        <span className="absolute top-2 left-2 h-1 w-1 bg-white/40" />
        <span className="absolute top-2 right-2 h-1 w-1 bg-white/40" />
        <span className="absolute bottom-2 left-2 h-1 w-1 bg-white/40" />
        <span className="absolute bottom-2 right-2 h-1 w-1 bg-white/40" />

        <p className="text-meta text-[color:var(--color-muted-on-black)] font-mono mb-3">
          OPEN SOURCE &amp; REPOSITORY
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl font-medium text-[color:var(--color-ink-on-black)] max-w-2xl mx-auto space-y-2">
          <span className="block">Don&apos;t mind if you reuse it :)</span>
          <span className="block text-lg sm:text-2xl text-[color:var(--color-muted-on-black)] font-normal">
            Just leave a ⭐ and give a little credit.
          </span>
        </h3>

        {/* Action CTAs: Star on GitHub & Connect on LinkedIn */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/meh-akshaya"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="magnetic"
            className="inline-flex items-center gap-3 border border-[color:var(--color-hairline-on-black)] bg-black px-6 py-4 text-nav text-[color:var(--color-ink-on-black)] transition-all duration-300 hover:border-white hover:text-white"
          >
            <span className="text-white text-lg">★</span>
            <span className="font-mono text-xs">STAR ON GITHUB</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>

          <a
            href="https://www.linkedin.com/in/meh-akshaya/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="magnetic"
            className="inline-flex items-center gap-3 border border-[color:var(--color-hairline-on-black)] bg-black px-6 py-4 text-nav text-[color:var(--color-ink-on-black)] transition-all duration-300 hover:border-white hover:text-white"
          >
            <svg className="h-4 w-4 fill-current text-white" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
            </svg>
            <span className="font-mono text-xs">CONNECT ON LINKEDIN</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Footer Navigation & Credits (Below Open Source & Repo card) */}
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-meta text-[color:var(--color-muted-on-black)]">
        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/meh-akshaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <span>&middot;</span>
          <a
            href="https://www.linkedin.com/in/meh-akshaya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors font-semibold text-white"
          >
            LINKEDIN
          </a>
          <span>&middot;</span>
          <a
            href="https://codeforces.com/profile/meh_akshaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            CODEFORCES
          </a>
          <span>&middot;</span>
          <a
            href="https://www.codechef.com/users/meh_akshaya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            CODECHEF
          </a>
          <span>&middot;</span>
          <a
            href="mailto:connect.akshayaverma@gmail.com"
            className="hover:text-white transition-colors"
          >
            EMAIL
          </a>
        </div>

        <div className="font-mono text-[11px] text-[color:var(--color-muted-on-black)]">
          &copy; 2026 AKSHAYA &middot; ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
