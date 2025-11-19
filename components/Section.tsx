import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;      // background, paddingY, etc (pe full width)
  innerClassName?: string; // padding + max-width pentru conținut
  paddingX?: string;    // optional paddingX utility class
  children: React.ReactNode;
}

export default function Section({
  id,
  className,
  innerClassName,
  paddingX = '25',
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full", className)}   // full width always
    >
      <div
        className={cn(
          `mx-auto max-w-[1023px] px-[${paddingX}px] lg:px-0`, // centered container
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
