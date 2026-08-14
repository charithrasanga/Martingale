import Link from "next/link";
import { cn } from "@/lib/cn";

export function TextLink({
  href,
  children,
  tone = "dark",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
        tone === "dark" ? "text-ink hover:text-gold" : "text-white hover:text-gold",
        className,
      )}
    >
      {children}
      <span className="text-gold transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
        →
      </span>
    </Link>
  );
}
