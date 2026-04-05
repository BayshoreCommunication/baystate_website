"use client";
import { FaLocationDot } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function ContactSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* 🔹 Top Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Address */}
          <div className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
              <FaLocationDot className="text-black" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Address</h4>
              <p className="text-xs text-gray-500">
                Tampa, Florida 33624, United States
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
              <MdMessage className="text-black" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">
                Email Address
              </h4>
              <p className="text-xs text-gray-500">support@baystate.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
              <IoCall className="text-black" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">Phone</h4>
              <p className="text-xs text-gray-500">123456789</p>
            </div>
          </div>
        </div>

        {/* 🔹 Form Box */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          <form className="space-y-8">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Fast Name"
                className="bg-white border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-white border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition"
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-white border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows={3}
              className="bg-white w-full border-b border-gray-300 py-2 text-sm outline-none resize-none focus:border-black transition"
            />

            {/* Divider line */}
            {/* <div className="border-t border-gray-200 pt-6"></div> */}

            {/* Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#1E2A44] text-white px-10 py-2 rounded-sm text-sm hover:bg-[#162033] transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
