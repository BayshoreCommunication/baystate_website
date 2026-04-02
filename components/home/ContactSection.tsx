"use client";

export default function ContactSection() {
  return (
    <section className="bg-[#ffffff] py-10 px-4">
      <div className="max-w-[1320px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-[20px] md:text-[36px] font-semibold text-[#1a1a2e] mb-4">
          Contact Us
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
          In all our work, Barrett Planning Group advocates for healthy
          communities and public policies inspired by a commitment to basic
          social fairness.
        </p>

        {/* Form */}
        <form className="text-left">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="First Name"
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#1a1a2e] py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#1a1a2e] py-2"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#1a1a2e] py-2"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#1a1a2e] py-2"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#1a1a2e] py-2 resize-none"
            ></textarea>
          </div>

          {/* Divider line */}
          {/* <div className="border-t border-gray-300 mb-6"></div> */}

          {/* Button */}
          <button
            type="submit"
            className="bg-[#131B3F] text-white px-8 py-3 text-sm hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
