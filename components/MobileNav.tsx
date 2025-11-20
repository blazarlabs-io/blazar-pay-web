"use client";

import Link from "next/link";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`lg:hidden transition-all ${
        open ? "max-h-80 border-b" : "max-h-0 overflow-hidden"
      }`}
    >
      <nav className="container-px max-w-screen py-4 grid gap-3">
        <Link href="#how-it-works" onClick={onClose}>
          How it works
        </Link>
        <Link href="#download" onClick={onClose}>
          Download
        </Link>
        <Link href="#contact" onClick={onClose}>
          Contact
        </Link>
        
      </nav>
    </div>
  );
}
