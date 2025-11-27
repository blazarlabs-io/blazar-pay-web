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
      className={`lg:hidden transition-all mx-[25px] ${
        open ? "max-h-80" : "max-h-0 overflow-hidden"
      }`}
    >
      <nav className=" max-w-screen py-4 grid gap-3">

        <Link href="#download" onClick={onClose}>
          Download App
        </Link>
        <Link href="#how-it-works" onClick={onClose}>
          How it works
        </Link>
        <Link href="#business-owners" onClick={onClose}>
          For Business Owners
        </Link>
        
      </nav>
    </div>
  );
}
