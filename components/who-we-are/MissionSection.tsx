import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="relative w-full py-8 md:py-16 px-4 text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/who-we-are/mission-bg.png" // your bg image
        alt="background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative max-w-[900px] mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-[120px]  bg-white rounded-full flex items-center justify-center shadow-md">
            <Image
              src="/images/who-we-are/target.png" // your icon
              alt="icon"
              width={1000}
              height={800}
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-[24px] md:text-[36px] font-semibold text-[#1a1a2e] mb-6">
          Our Mission
        </h2>

        {/* Text */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
          At Baystate Planning & Consulting, our mission is to shape communities
          that are sustainable, inclusive, and resilient. We believe every
          community should offer opportunities for people of all ages, incomes,
          and backgrounds to thrive.
        </p>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          We partner with municipalities, nonprofits, and private organizations
          to navigate complex planning challenges with clarity and creativity.
          By combining technical expertise with authentic community engagement,
          we deliver practical solutions that balance growth, equity, and
          environmental stewardship.
        </p>
      </div>
    </section>
  );
}
