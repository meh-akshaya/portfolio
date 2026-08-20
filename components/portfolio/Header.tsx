"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CODING", href: "/coding" },
  { label: "RESUME", href: "/resume" },
  { label: "★", href: "https://github.com/meh-akshaya/portfolio", external: true },
];

export function Header() {
  const [imgError, setImgError] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleReplayIntro = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("akshaya-intro-seen");
    }
    if (pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-black)]/90 backdrop-blur-md border-b border-[color:var(--color-hairline-on-black)]">
      <div className="container-edit flex flex-col sm:flex-row sm:items-end justify-between py-5 gap-4">
        {/* Leftmost identity group: Small Profile Photo */}
        <div className="flex items-center">
          {/* Small Profile Image Signature */}
          <div
            className="relative group cursor-pointer"
            onClick={handleReplayIntro}
            title="Click to return home / replay intro"
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
                /* Fallback pixel monogram avatar badge if photo is missing */
                <div className="flex h-full w-full items-center justify-center font-mono text-xs font-bold text-white">
                  AV■
                </div>
              )}
            </div>
            {/* Small pixel accent dot */}
            <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 bg-white opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </div>

        {/* Multi-Page Navigation Bar */}
        <nav className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {NAV_ITEMS.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            if (item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-meta transition-colors py-1 flex items-center gap-1.5 text-[color:var(--color-muted-on-black)] hover:text-white"
                >
                  <span className="h-1 w-1 bg-transparent group-hover:bg-white group-hover:scale-100 transition-all" />
                  <span>{item.label}</span>
                  <span className="text-white">★</span>
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-meta transition-colors py-1 flex items-center gap-1.5 ${isActive
                  ? "text-white font-semibold"
                  : "text-[color:var(--color-muted-on-black)] hover:text-white"
                  }`}
              >
                {/* Active/Hover Pixel Dot Indicator */}
                <span
                  className={`h-1 w-1 transition-all ${isActive
                    ? "bg-white scale-100"
                    : "bg-transparent scale-0 group-hover:bg-white group-hover:scale-100"
                    }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
