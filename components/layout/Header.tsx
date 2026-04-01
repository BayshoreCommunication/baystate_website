"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Who we are", href: "/who-we-are" },
    { name: "Blogs", href: "/blogs" },
    { name: "Podcasts", href: "/podcasts" },
  ];

  return (
    <nav className="bg-[#131B3F] text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1320px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={130} height={40} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-[24px] ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-[#AC5D50]"
                    : "hover:text-[#AC5D50]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#AC5D50] px-5 py-2 rounded-md hover:opacity-90 transition text-[24px]">
              Contact Us
            </button>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f1e3d] px-4 pb-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${pathname === link.href ? "text-[#AC5D50]" : ""}`}
                onClick={() => setOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-[#AC5D50] px-5 py-2 rounded-md w-full mt-2">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
