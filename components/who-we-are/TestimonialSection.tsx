"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

type Testimonial = {
  name: string;
  location: string;
  review: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Michael R.",
    location: "Tampa, FL",
    review:
      "I'm writing this review about four months after the project was completed. There were a few minor issues along the way, but the team fixed everything quickly.",
    image: "/images/users/user1.jpg",
  },
  {
    name: "Sarah L.",
    location: "Miami, FL",
    review:
      "Excellent service and communication throughout the project. Highly recommended!",
    image: "/images/users/user2.jpg",
  },
  {
    name: "David K.",
    location: "Orlando, FL",
    review:
      "Professional team with great results. Everything was handled smoothly.",
    image: "/images/users/user3.jpg",
  },
  {
    name: "Emma W.",
    location: "Austin, TX",
    review:
      "Very satisfied with the outcome. The team was responsive and efficient.",
    image: "/images/users/user4.jpg",
  },
];

// duplicate for smooth infinite scroll
const data = [...testimonials, ...testimonials, ...testimonials];

function Card({ item }: { item: Testimonial }) {
  return (
    <div className="bg-[#F5F5F5] text-black rounded-[20px] p-5 h-full">
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={item.image}
          alt={item.name}
          width={45}
          height={45}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-sm font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-400">{item.location}</p>
        </div>
      </div>

      <div className="text-orange-400 text-sm mb-3">⭐⭐⭐⭐⭐</div>

      <p className="text-sm text-black leading-relaxed">{item.review}</p>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <section className="bg-white py-8 md:py-16 px-4 overflow-hidden">
      {/* ✅ Max Width ঠিক */}
      <div className="max-w-full  mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[36px] font-semibold">
            Testimonials
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-2 max-w-[600px] mx-auto">
            At Baystate Planning & Consulting, we bring over 10 years of
            experience.
          </p>
        </div>

        {/* 🔥 Row 1 (Left → Right) */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={"auto"}
          loop={true}
          freeMode={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i} className="!w-[500px]">
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔥 Row 2 (Right → Left) */}
        <div className="mt-6">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={"auto"}
            loop={true}
            freeMode={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i} className="!w-[500px]">
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
