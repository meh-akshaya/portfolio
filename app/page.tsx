"use client";

import { IntroSequence } from "@/components/intro/IntroSequence";
import { Hero } from "@/components/portfolio/Hero";

export default function HomePage() {
  return (
    <IntroSequence>
      <div className="container-edit">
        <Hero />
      </div>
    </IntroSequence>
  );
}
