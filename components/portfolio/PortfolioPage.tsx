"use client";

import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { CodingProfiles } from "./CodingProfiles";
import { Resume } from "./Resume";
import { GithubStar } from "./GithubStar";

export function PortfolioPage() {
  return (
    <div className="space-y-12 sm:space-y-20">
      <Hero />
      <Projects />
      <CodingProfiles />
      <Resume />
      <GithubStar />
    </div>
  );
}
