"use client";

import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="bg-[#ffffff] py-8 md:py-16 px-4">
      <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[320px] md:h-[420px] rounded-[20px] overflow-hidden">
          <Image
            src="/images/who-we-are/who-hero.png" // replace image
            alt="about"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            At Baystate Planning & Consulting, we bring over 10 years of
            cross-sector experience in municipal, regional, and international
            planning.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Our founder, Jasifa Chowdhury, is an Urban Planner and Housing
            Policy Specialist with a strong track record in affordable housing,
            zoning, land use strategy, climate resilience, and federal/state
            grant writing.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            She has led initiatives at the Central Massachusetts Regional
            Planning Commission, Cambridge Housing Authority, Vernon Housing
            Authority, and the Department of Housing & Community Development for
            the City of Cambridge.
          </p>

          {/* Button */}
          <button className="bg-[#131B3F] text-white px-6 py-3 mb-6 hover:opacity-90 transition">
            Explore More
          </button>

          {/* Google Rating */}
          <div className="flex flex-col items-start gap-2 text-sm">
            <div>
              <span className="font-semibold text-[#4285F4] text-lg">G</span>
              <span className="font-semibold text-[#EA4335] text-lg">o</span>
              <span className="font-semibold text-[#FBBC05] text-lg">o</span>
              <span className="font-semibold text-[#4285F4] text-lg">g</span>
              <span className="font-semibold text-[#34A853] text-lg">l</span>
              <span className="font-semibold text-[#EA4335] text-lg">e</span>
            </div>

            {/* Stars */}
            <div className="flex     text-yellow-400">⭐ ⭐ ⭐ ⭐ ⭐</div>
          </div>
        </div>
      </div>
    </section>
  );
}
