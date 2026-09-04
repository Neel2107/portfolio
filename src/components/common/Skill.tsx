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
      className={cn(
        "group inline-flex h-8 items-center gap-1.5 rounded-lg border border-black/10 bg-black/[0.03] pl-2 pr-2.5 text-sm font-medium text-foreground",
        "transition-[background-color,border-color,transform] duration-200 ease-out",
        "hover:border-black/20 hover:bg-black/[0.06] active:scale-[0.96]",
        "dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-white/20 dark:hover:bg-white/[0.09]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        !children && "pl-2.5",
        className,
      )}
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
