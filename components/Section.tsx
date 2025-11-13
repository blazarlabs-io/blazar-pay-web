import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("container-px max-w-screen py-16", className)}
    >
      {children}
    </section>
  );
}