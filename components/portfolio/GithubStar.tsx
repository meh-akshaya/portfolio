"use client";

export function GithubStar() {
  return (
    <footer id="github-star" className="py-20 hairline-top">
      {/* GitHub Star Card */}
      <div className="border border-[color:var(--color-hairline-on-black)] bg-[color:var(--color-black-soft)] p-8 sm:p-12 text-center relative overflow-hidden group">
        {/* Subtle Pixel Accent Dots */}
        <span className="absolute top-2 left-2 h-1 w-1 bg-white/40" />
        <span className="absolute top-2 right-2 h-1 w-1 bg-white/40" />
        <span className="absolute bottom-2 left-2 h-1 w-1 bg-white/40" />
        <span className="absolute bottom-2 right-2 h-1 w-1 bg-white/40" />

        <p className="text-meta text-[color:var(--color-muted-on-black)] font-mono mb-3">
          OPEN SOURCE &amp; REPOSITORY
        </p>

        <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-4xl font-medium text-[color:var(--color-ink-on-black)] max-w-xl mx-auto">
          If you enjoy this portfolio interface, consider leaving a star.
        </h3>

        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[color:var(--color-hairline-on-black)] bg-black px-6 py-4 text-nav text-[color:var(--color-ink-on-black)] transition-all duration-300 hover:border-white hover:text-white"
          >
            <span className="text-white text-lg">★</span>
            <span className="font-mono text-xs">STAR ON GITHUB</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Footer Navigation & Credits */}
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-meta text-[color:var(--color-muted-on-black)]">
        <div className="flex items-center gap-6">
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
            href="mailto:contact@akshaya.dev"
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
