"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CodeforcesData {
  handle: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
  avatar?: string;
  titlePhoto?: string;
  organization?: string;
}

interface GithubData {
  login: string;
  avatar_url?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  bio?: string;
}

interface CodeChefData {
  name?: string;
  handle: string;
  rating?: number;
  highestRating?: number;
  division?: string;
  stars?: string;
  globalRank?: number;
  countryRank?: number;
  contests?: number;
  institution?: string;
  profileUrl?: string;
}

export function CodingProfiles() {
  const [cfData, setCfData] = useState<CodeforcesData | null>(null);
  const [ghData, setGhData] = useState<GithubData | null>(null);
  const [ccData, setCcData] = useState<CodeChefData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"ALL" | "GITHUB" | "CODEFORCES" | "CODECHEF">("ALL");

  const fetchData = async () => {
    setLoading(true);

    // 1. Fetch Codeforces Live Data
    try {
      const cfRes = await fetch("https://codeforces.com/api/user.info?handles=meh_akshaya");
      if (cfRes.ok) {
        const json = await cfRes.json();
        if (json.status === "OK" && json.result?.[0]) {
          setCfData(json.result[0]);
        }
      }
    } catch {
      // Fallback
    }

    // 2. Fetch GitHub Live Data
    try {
      const ghRes = await fetch("https://api.github.com/users/meh-akshaya");
      if (ghRes.ok) {
        const json = await ghRes.json();
        setGhData(json);
      }
    } catch {
      // Fallback
    }

    // 3. Web Scraped / API CodeChef Data
    try {
      const ccRes = await fetch("/api/profile-data?platform=codechef");
      if (ccRes.ok) {
        const json = await ccRes.json();
        setCcData(json);
      }
    } catch {
      // Fallback
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="coding" className="py-16 sm:py-20 hairline-top">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-meta text-[color:var(--color-ink-muted)] mb-2 font-mono text-xs">
            <span className="h-1.5 w-1.5 bg-white animate-pulse" />
            <span>02 &bull; TECHNICAL PROFILES &amp; METRICS</span>
          </div>
          <h2 className="text-display-md text-white">
            CODING DASHBOARD
          </h2>
        </div>

        {/* Refresh & Sync CTA */}
        <button
          onClick={fetchData}
          disabled={loading}
          className="self-start sm:self-auto font-mono text-xs text-[color:var(--color-ink-muted)] hover:text-white flex items-center gap-2 border border-[color:var(--color-border-hairline)] px-3 py-1.5 transition-colors"
        >
          <span className={loading ? "animate-spin" : ""}>↻</span>
          <span>{loading ? "SYNCING..." : "LIVE SYNC"}</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 no-scrollbar font-mono text-xs">
        {(["ALL", "GITHUB", "CODEFORCES", "CODECHEF"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 border transition-all ${
              activeTab === tab
                ? "border-white bg-black text-white font-semibold"
                : "border-[color:var(--color-border-hairline)] bg-[color:var(--color-black-soft)] text-[color:var(--color-ink-muted)] hover:text-white"
            }`}
          >
            [{tab}]
          </button>
        ))}
      </div>

      {/* Profile Dashboard Cards Grid */}
      <div className="flex flex-col gap-10">
        {/* ================= GITHUB PROFILE ================= */}
        {(activeTab === "ALL" || activeTab === "GITHUB") && (
          <div
            data-cursor="view"
            className="border border-[color:var(--color-border-hairline)] bg-[#0d1117] rounded-lg overflow-hidden font-sans transition-all duration-300 hover:border-white/40"
          >
            {/* GitHub Header Navbar */}
            <div className="bg-[#161b22] px-6 py-3.5 border-b border-[#30363d] flex items-center justify-between font-mono text-xs text-[#c9d1d9]">
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 fill-current text-white" viewBox="0 0 16 16">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
                </svg>
                <span className="font-semibold text-white">github.com / meh-akshaya</span>
              </div>
              <a
                href="https://github.com/meh-akshaya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#21262d] hover:bg-[#30363d] text-white border border-[#30363d] px-3 py-1.5 rounded transition-colors text-xs font-mono"
              >
                OPEN ON GITHUB ↗
              </a>
            </div>

            {/* GitHub Profile Content */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1 flex flex-col items-start gap-4">
                <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-[#30363d] bg-black">
                  <Image
                    src={ghData?.avatar_url || "https://avatars.githubusercontent.com/u/266464144?v=4"}
                    alt="GitHub Avatar"
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Akshaya</h3>
                  <p className="text-xs text-[#8b949e] font-mono">meh-akshaya</p>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#8b949e] font-mono pt-1">
                  <span>👥 <strong className="text-white">{ghData?.followers ?? 8}</strong> followers</span>
                  <span>&bull; <strong className="text-white">{ghData?.following ?? 8}</strong> following</span>
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-mono text-[#8b949e] mb-3 uppercase tracking-wider">Pinned Repository</p>
                  <div className="border border-[#30363d] bg-[#161b22] p-5 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <a
                        href="https://github.com/meh-akshaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:underline flex items-center gap-2"
                      >
                        <span>📁 PERSONA</span>
                        <span className="border border-[#30363d] text-[10px] text-[#8b949e] px-1.5 py-0.5 rounded-full font-mono">
                          Public
                        </span>
                      </a>
                      <span className="text-xs text-[#8b949e]">⭐ 1</span>
                    </div>
                    <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
                      An anonymous discussion platform built around persistent personas with encrypted identity layers.
                    </p>
                    <div className="flex items-center gap-4 text-[11px] text-[#8b949e] font-mono">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-white" />
                        TypeScript
                      </span>
                      <span>Node.js</span>
                      <span>PostgreSQL</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-mono text-[#8b949e] mb-3 uppercase tracking-wider flex items-center justify-between">
                    <span>Contribution Heatmap</span>
                    <span className="text-white font-mono text-[10px]">GITHUB DARK BLUE GRAPH</span>
                  </p>
                  <div className="border border-[#30363d] bg-[#0d1117] p-4 rounded-md overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://ghchart.rshah.org/58a6ff/meh-akshaya"
                      alt="GitHub Contribution Heatmap"
                      className="w-full h-auto opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= CODEFORCES PROFILE ================= */}
        {(activeTab === "ALL" || activeTab === "CODEFORCES") && (
          <div
            data-cursor="view"
            className="border border-[color:var(--color-border-hairline)] bg-[#1a1a1a] rounded-lg overflow-hidden font-sans transition-all duration-300 hover:border-white/40"
          >
            <div className="bg-[#111111] px-6 py-3.5 border-b border-[#333333] flex items-center justify-between font-mono text-xs text-[#cccccc]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 font-bold text-white tracking-tighter text-sm">
                  <span>CODEFORCES</span>
                </div>
                <span className="text-[#888888]">| Handle: meh_akshaya</span>
              </div>
              <a
                href="https://codeforces.com/profile/meh_akshaya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2a2a2a] hover:bg-[#383838] text-white border border-[#444444] px-3 py-1.5 rounded transition-colors text-xs font-mono"
              >
                OPEN ON CODEFORCES ↗
              </a>
            </div>

            <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="flex-1 space-y-4">
                <div>
                  <p className="text-xs font-mono text-[#888888] uppercase tracking-wide">
                    Rank: <span className="text-white font-bold uppercase">{cfData?.rank || "Newbie"}</span>
                  </p>
                  <h3 className="text-3xl font-bold text-white mt-1">meh_akshaya</h3>
                </div>

                <div className="space-y-2 text-sm font-mono text-[#cccccc] bg-[#111111] p-4 rounded border border-[#333333]">
                  <p className="flex justify-between">
                    <span className="text-[#888888]">Contest Rating:</span>
                    <span className="text-white font-bold">
                      {cfData?.rating ?? 819}{" "}
                      <span className="text-[#888888] font-normal">(max. {cfData?.maxRating ?? 905})</span>
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#888888]">Organization:</span>
                    <span className="text-white">{cfData?.organization || "VIT University, Bhopal"}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-[#888888]">Country:</span>
                    <span className="text-white">India 🇮🇳</span>
                  </p>
                </div>
              </div>

              <div className="border border-[#444444] p-2 bg-[#111111] rounded shadow-lg">
                <div className="h-32 w-32 overflow-hidden rounded bg-black flex items-center justify-center font-mono font-bold text-lg text-white">
                  {cfData?.avatar && !cfData.avatar.includes("no-avatar") ? (
                    <Image
                      src={cfData.avatar}
                      alt="Codeforces Avatar"
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "CF"
                  )}
                </div>
                <p className="text-[10px] font-mono text-center text-[#888888] mt-2">@meh_akshaya</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= CODECHEF PROFILE ================= */}
        {(activeTab === "ALL" || activeTab === "CODECHEF") && (
          <div
            data-cursor="view"
            className="border border-[color:var(--color-border-hairline)] bg-[#161616] rounded-lg overflow-hidden font-sans transition-all duration-300 hover:border-white/40"
          >
            {/* Header Navbar */}
            <div className="bg-[#0b0b0b] px-6 py-3.5 border-b border-[#262626] flex items-center justify-between font-mono text-xs text-[#aaaaaa]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-bold text-white text-sm">
                  <span className="bg-white text-black px-1.5 py-0.5 rounded font-mono text-xs font-extrabold">CC</span>
                  <span>CODECHEF</span>
                </div>
                <span className="text-[#666666]">| Profile: codechef.com/users/meh_akshaya</span>
              </div>
              <a
                href="https://www.codechef.com/users/meh_akshaya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#222222] hover:bg-[#333333] text-white border border-[#333333] px-3 py-1.5 rounded transition-colors text-xs font-mono"
              >
                OPEN ON CODECHEF ↗
              </a>
            </div>

            {/* CodeChef Real Profile Layout */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Profile Bio Column */}
              <div className="md:col-span-1 flex flex-col items-start gap-4">
                <div className="h-24 w-24 rounded-full border-2 border-[#333333] bg-[#0b0b0b] flex items-center justify-center font-mono text-3xl font-bold text-white">
                  {ccData?.stars || "1★"}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{ccData?.name || "akshayaverma"}</h3>
                  <p className="text-xs text-[#888888] font-mono">1★ meh_akshaya</p>
                </div>
                <div className="text-xs text-[#888888] font-mono space-y-1">
                  <p>🇮🇳 India</p>
                  <p>Student @ VIT Bhopal</p>
                </div>
              </div>

              {/* Stats & Rating Section */}
              <div className="md:col-span-3 flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Rating Box */}
                  <div className="bg-[#0b0b0b] p-5 rounded border border-[#262626] text-center">
                    <p className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-1">CodeChef Rating</p>
                    <p className="text-3xl font-extrabold text-white">{ccData?.rating ?? 1194}</p>
                    <p className="text-xs font-mono text-[#aaaaaa] mt-1">({ccData?.division || "Div 4"}) &bull; {ccData?.stars || "1★"}</p>
                    <p className="text-[10px] font-mono text-[#666666] mt-2">Highest Rating: {ccData?.highestRating ?? 1194}</p>
                  </div>

                  {/* Global Rank */}
                  <div className="bg-[#0b0b0b] p-5 rounded border border-[#262626] text-center flex flex-col justify-center">
                    <p className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-1">Global Rank</p>
                    <p className="text-2xl font-bold text-white">{(ccData?.globalRank ?? 88381).toLocaleString()}</p>
                    <p className="text-[10px] font-mono text-[#666666] mt-2">Worldwide Rank</p>
                  </div>

                  {/* Country Rank */}
                  <div className="bg-[#0b0b0b] p-5 rounded border border-[#262626] text-center flex flex-col justify-center">
                    <p className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-1">Country Rank</p>
                    <p className="text-2xl font-bold text-white">{(ccData?.countryRank ?? 84517).toLocaleString()}</p>
                    <p className="text-[10px] font-mono text-[#666666] mt-2">India Rank 🇮🇳</p>
                  </div>
                </div>

                {/* Submissions & Contests Info Bar */}
                <div className="bg-[#0b0b0b] p-5 rounded border border-[#262626] font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div>
                      <p className="text-[10px] text-[#666666]">CONTESTS PARTICIPATED</p>
                      <p className="text-base font-bold text-white mt-0.5">{ccData?.contests ?? 16} Contests</p>
                    </div>
                    <div className="h-8 w-px bg-[#262626]" />
                    <div>
                      <p className="text-[10px] text-[#666666]">INSTITUTION</p>
                      <p className="text-xs font-semibold text-white mt-0.5">Vellore Institute of Technology, Bhopal</p>
                    </div>
                  </div>

                  <a
                    href="https://www.codechef.com/users/meh_akshaya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white underline underline-offset-4 hover:opacity-80 transition-opacity"
                  >
                    View Rating Graph &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
