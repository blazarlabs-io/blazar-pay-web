"use client";

import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="container-px max-w-screen h-16 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-tight">
          Blazar <span className="text-teal-500">pay</span>
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
            Accept crypto
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
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
