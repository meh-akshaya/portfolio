"use client";

import { CodingProfiles } from "@/components/portfolio/CodingProfiles";
import { GithubStar } from "@/components/portfolio/GithubStar";

export default function CodingPage() {
  return (
    <main className="container-edit py-10 sm:py-16">
      <CodingProfiles />
      <GithubStar />
    </main>
  );
}
