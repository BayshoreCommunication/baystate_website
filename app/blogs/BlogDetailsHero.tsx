"use client";

import Image from "next/image";

export default function BlogDetailsHero() {
  return (
    <section className="relative h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/who-we-are/who-bg.png" // your image
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* White Overlay (faded effect) */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <h2 className="relative text-[24px] md:text-[32px] font-semibold text-[#131B3F]">
        Blog Details
      </h2>
    </section>
  );
}
