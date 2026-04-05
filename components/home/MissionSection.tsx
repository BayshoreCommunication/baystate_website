import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="bg-[#F4F4F4] py-6 md:py-16 px-4">
      <div className="max-w-[1320px] mx-auto text-center">
        {/* Image */}
        <div className="w-full mb-10">
          <Image
            src="/images/home/mission.png" // replace with your image
            alt="mission"
            width={1000}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Title */}
        <h2 className="text-[20px] md:text-[36px] font-semibold text-[#1a1a2e] mb-6">
          Our Mission
        </h2>

        {/* Text */}
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#5F5F5F] leading-relaxed mb-4 text-sm md:text-base">
            At Baystate Planning & Consulting, our mission is to shape
            communities that are sustainable, inclusive, and resilient. We
            believe every community should offer opportunities for people of all
            ages, incomes, and backgrounds to thrive.
          </p>

          <p className="text-[#5F5F5F] leading-relaxed text-sm md:text-base">
            We partner with municipalities, nonprofits, and private
            organizations to navigate complex planning challenges with clarity
            and creativity. By combining technical expertise with authentic
            community engagement, we deliver practical solutions that balance
            growth, equity, and environmental stewardship.
          </p>
        </div>
      </div>
    </section>
  );
}
