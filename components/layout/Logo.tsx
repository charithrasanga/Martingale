import { useId } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  wordmarkClassName,
}: {
  className?: string;
  wordmarkClassName?: string;
}) {
  const rawId = useId();
  const gradientId = `logo-gold-${rawId.replace(/:/g, "")}`;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-gold",
        className,
      )}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 96 95"
        aria-hidden
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0"
            y1="0"
            x2="96"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="var(--logo-gold-left)" />
            <stop offset="10%" stopColor="var(--logo-gold-lift)" />
            <stop offset="20%" stopColor="var(--logo-gold-bright)" />
            <stop offset="32%" stopColor="var(--logo-gold-sheen)" />
            <stop offset="40%" stopColor="var(--logo-gold-highlight)" />
            <stop offset="50%" stopColor="var(--logo-gold-core)" />
            <stop offset="62%" stopColor="var(--logo-gold-mid)" />
            <stop offset="78%" stopColor="var(--logo-gold-warm)" />
            <stop offset="90%" stopColor="var(--logo-gold-tone)" />
            <stop offset="100%" stopColor="var(--logo-gold-right)" />
          </linearGradient>
        </defs>
        <path d="M0 0 48 42 96 0 96 95H0Z" fill={`url(#${gradientId})`} />
      </svg>
      <span
        className={cn(
          "font-display text-[15px] font-medium uppercase tracking-[0.16em] text-white",
          wordmarkClassName,
        )}
      >
        Martingale Estate
      </span>
    </Link>
  );
}
