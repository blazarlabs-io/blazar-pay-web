"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#2C2D38] ">
      <div className="px-[25px] py-[20px] max-w-screen flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/nav-logo-green-white.svg"
            alt="Blazar Pay logo"
            width={122} 
            height={40} 
            priority
          />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#how-it-works" className="hover:text-teal-600">
            How it works
          </Link>
          <Link href="#download" className="hover:text-teal-600">
            Download
          </Link>
          <Link href="#contact" className="hover:text-teal-600">
            Contact
          </Link>
          <Link
            href="#merchant"
            className="inline-flex rounded-xl bg-slate-900 text-white px-4 py-2"
          >
            Download App
          </Link>
        </nav>

        {/* mobile button */}
        <button
          className="md:hidden inline-flex p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#00E6C8"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* row 1 */}
            <circle cx="4" cy="4" r="2.5" />
            <circle cx="12" cy="4" r="2.5" />
            <circle cx="20" cy="4" r="2.5" />

            {/* row 2 */}
            <circle cx="4" cy="12" r="2.5" />
            <circle cx="12" cy="12" r="2.5" />
            <circle cx="20" cy="12" r="2.5" />

            {/* row 3 */}
            <circle cx="4" cy="20" r="2.5" />
            <circle cx="12" cy="20" r="2.5" />
            <circle cx="20" cy="20" r="2.5" />
          </svg>
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
