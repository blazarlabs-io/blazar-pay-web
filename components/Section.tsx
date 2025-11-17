import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  paddingX?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, paddingX = 'px-[25px]', children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(`${paddingX} max-w-screen`, className)}
    >
      {children}
    </section>
  );
}