import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full py-10 px-4">
      {/* Background Image */}
      <Image
        src="/images/home/about.png" // your image path
        alt="background"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Overlay (important for readability) */}
      <div className="absolute inset-0 bg-white/20 -z-10" />

      {/* Content */}
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-[20px] md:text-[36px] font-semibold text-[#1a1a2e] mb-6">
          About Us
        </h2>

        <p className=" leading-relaxed mb-4 text-sm md:text-base text-[#5F5F5F]">
          At Baystate Planning & Consulting, we bring over 10 years of
          cross-sector experience in municipal, regional, and international
          planning.
        </p>

        <p className=" leading-relaxed mb-4 text-sm md:text-base text-[#5F5F5F]">
          Our founder, Jasifa Chowdhury, is an Urban Planner and Housing Policy
          Specialist with a strong track record in affordable housing, zoning,
          land use strategy, climate resilience, and federal/state grant
          writing.
        </p>

        <p className=" leading-relaxed text-sm md:text-base text-[#5F5F5F]">
          She has led initiatives at the Central Massachusetts Regional Planning
          Commission, Cambridge Housing Authority, Vernon Housing Authority, and
          the Department of Housing & Community Development for the City of
          Cambridge.
        </p>
      </div>
    </section>
  );
}
