"use client";

import Image from "next/image";
import Link from "next/link";
import { Send, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#131B3F] text-white">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-12">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-sm md:text-[24px] font-semibold mb-4">
              About Us
            </h3>
            <p className="text-sm md:text-[16px] text-gray-300 leading-relaxed ">
              In all our work, Barrett Planning Group advocates for healthy
              communities and public policies inspired by a commitment to basic
              social fairness.
            </p>

            <Image
              src="/images/logo.png"
              alt="logo"
              width={130}
              height={80}
              className="mt-6"
            />
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm md:text-[24px] font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="text-sm md:text-[16px] text-gray-300 space-y-2">
              <li>Address:</li>
              <li>Phone:</li>
              <li>Email:</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm md:text-[24px] font-semibold mb-4">
              Important Link
            </h3>
            <ul className="text-sm md:text-[16px] text-gray-300 space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className=" text-sm md:text-[24px] font-semibold mb-4">
              Newsletter
            </h3>
            <p className="text-sm md:text-[16px] text-gray-300 mb-4">
              In all our work, Barrett Planning Group advocates for healthy
              communities and
            </p>

            <div className="flex items-center border-b border-gray-400 pb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400"
              />
              <Send size={18} className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-[16px] text-gray-300 text-center md:text-left">
            Copyright © {year} All rights reserved | Design & Development{" "}
            <Link
              href="https://www.bayshorecommunication.com/"
              className="text-[#AC5D50]"
              target="_blank"
            >
              Bayshore Communication
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Instagram size={18} className="cursor-pointer" />
            <Youtube size={18} className="cursor-pointer" />
            <Facebook size={18} className="cursor-pointer" />
            <Twitter size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
