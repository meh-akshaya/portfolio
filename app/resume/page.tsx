"use client";

import { Resume } from "@/components/portfolio/Resume";
import { GithubStar } from "@/components/portfolio/GithubStar";

export default function ResumePage() {
  return (
    <main className="container-edit py-10 sm:py-16">
      <Resume />
      <GithubStar />
    </main>
  );
}
