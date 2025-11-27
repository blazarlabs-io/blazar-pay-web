"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[-1px] z-40 bg-[#2C2D38] ">
      <div className="px-[25px] py-[20px] max-w-screen flex items-center justify-between">
        <div className="ml-0 xl:ml-[-150px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/nav-logo-green-white.svg"
              alt="Blazar Pay logo"
              width={122} 
              height={40} 
              priority
            />
          </Link>
        </div>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-[100px] text-sm font-medium text-[#00E6C8]">
          <Link href="#download" className="hover:text-teal-600">
            Download App
          </Link>
          <Link href="#how-it-works" className="hover:text-teal-600">
            How it works
          </Link>
          
          <Link href="#business-owners" className="hover:text-teal-600">
            For Business Owners
          </Link>
          
        </nav>

        {/* mobile button */}
        <button
          className="lg:hidden inline-flex p-2"
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
