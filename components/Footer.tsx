import React from 'react';
import Link from 'next/link';

const menuItems = [
  { title: 'Who We Are', href: '/#who-we-are' },
  { title: 'Products', href: '/#products' },
  { title: 'Services', href: '/#services' },
  { title: 'Get in Touch', href: '/#get-in-touch' },
];

export default function Footer() {
  return (
    <footer className="w-full px-6 lg:px-0 lg:max-w-[1024px] mt-[120px] mb-[58px] mx-auto">
      {/* logo + divider */}
      <div className="hidden lg:flex w-full items-end justify-center gap-[37px] lg:justify-start">
        <img
          src="/bl-logo-icon-text-col.svg"
          alt="Logo"
          className="w-[120px] h-[109px]"
        />
        <div className="flex-grow h-[1px] bg-[#00E6C8]" />
      </div>

      {/* menu anchors */}
      <nav className="hidden lg:flex flex-col gap-8 mt-[60px] lg:flex-row lg:justify-between lg:items-start">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="flex items-start h-[76px] border-l border-[#00E5C0] pl-4 font-medium text-[25px] text-white"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* bottom social / legal */}
      <div className="mt-[90px] flex flex-col gap-[42px] items-center lg:flex-row lg:justify-center lg:items-stretch">
        <div className="flex flex-col items-center lg:items-start lg:justify-end">
          <div className="text-white">
            © {new Date().getFullYear()} Blazar Labs SRL. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between gap-x-4 lg:gap-x-0.5 w-full max-w-md text-[#00E5C0] mt-2">
        
            <Link href="/privacy">Privacy Policy</Link>
            <span className="text-white">|</span>
            <Link href="/terms">Terms of Use</Link>
      
          </div>
        </div>
      </div>
    </footer>
  );
}
