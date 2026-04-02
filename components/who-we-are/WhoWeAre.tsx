import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="relative w-full h-[200px] md:h-[260px] flex items-center justify-center overflow-hidden">
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
      <h2 className="relative text-[24px] md:text-[36px] font-semibold text-[#1a1a2e]">
        Who we are
      </h2>
    </section>
  );
}
