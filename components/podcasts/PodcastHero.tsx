"use client";

import Image from "next/image";

export default function PodcastHero() {
  return (
    <section className="relative h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/podcasts/podcasts-hero.png" // 👉 তোমার image path
        alt="Background"
        fill
        priority
        className="object-cover opacity-40"
      />

      {/* Overlay (optional for better contrast) */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <h2 className="relative text-[24px] md:text-[32px] font-semibold text-[#1E2A44]">
        Podcasts
      </h2>
    </section>
  );
}
