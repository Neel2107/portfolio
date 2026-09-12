import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface SkillProps {
  name: string;
  href: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Skill({ name, href, children, className }: SkillProps) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("chip", className)}
    >
      {children && (
        <span className="flex size-4 shrink-0 items-center justify-center">
          {children}
        </span>
      )}
      <span className="whitespace-nowrap">{name}</span>
    </Link>
  );
}
