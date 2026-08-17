"use client";

import { Projects } from "@/components/portfolio/Projects";
import { GithubStar } from "@/components/portfolio/GithubStar";

export default function ProjectsPage() {
  return (
    <main className="container-edit py-10 sm:py-16">
      <Projects />
      <GithubStar />
    </main>
  );
}
