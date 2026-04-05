import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

const blogs = [
  {
    id: 1,
    title: "Make your website",
    desc: "In all our work, Barrett Planning Group advocates for healthy communities and public policies inspired by a commitment to basic social fairness.",
    date: "May 31, 2025",
    category: "Website",
    image: "/images/home/blog1.png",
  },
  {
    id: 2,
    title: "Make your website",
    desc: "In all our work, Barrett Planning Group advocates for healthy communities and public policies inspired by a commitment to basic social fairness.",
    date: "May 31, 2025",
    category: "Website",
    image: "/images/home/blog2.png",
  },
  {
    id: 3,
    title: "Make your website",
    desc: "In all our work, Barrett Planning Group advocates for healthy communities and public policies inspired by a commitment to basic social fairness.",
    date: "May 31, 2025",
    category: "Website",
    image: "/images/home/blog3.png",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#F4F4F4] py-6 md:py-16  px-4">
      <div className="max-w-[1320px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-[20px] md:text-[36px] font-semibold text-[#1a1a2e] mb-4">
          My Blog & Podcast
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base mb-12 max-w-[1320px] mx-auto leading-relaxed">
          In all our work, Barrett Planning Group advocates for healthy
          communities and public policies inspired by a commitment to basic
          social fairness.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white shadow-sm hover:shadow-lg transition duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="text-sm md:text-base  mb-2 flex items-center gap-2">
                  <span className=" text-xs flex items-center gap-1 text-[#B15C48] ">
                    <CiClock2 />
                    {blog.date}
                  </span>
                  <span>|</span>
                  <span className="text-xs">{blog.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold text-[#1a1a2e] mb-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  {blog.desc}
                </p>

                {/* Read More */}
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#B15C48] transition"
                >
                  Read More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
