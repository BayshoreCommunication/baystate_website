import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      {/* Image */}
      <div className="relative w-full ">
        <Image
          src="/images/home/city.png" // replace with your image
          alt="city"
          width={1000}
          height={800}
          priority
          className="object-cover object-top w-full h-auto"
        />
      </div>

      {/* Content Box */}
      <div className="bg-[#ffffff] text-center px-4 py-8 md:py-10">
        <h2 className="text-[20px] md:text-[36px]  font-semibold text-[#1a1a2e] leading-snug">
          We Plan with Purpose, and <br className="hidden md:block" />
          People in Mind.
        </h2>

        <p className="mt-4 text-sm md:text-base max-w-[1320px] mx-auto text-[#000000] leading-relaxed">
          Professional urban planning and housing expertise that <br />
          strengthens communities, drives sustainable growth, and ensures <br />{" "}
          equitable outcomes.
        </p>
      </div>
    </section>
  );
}
