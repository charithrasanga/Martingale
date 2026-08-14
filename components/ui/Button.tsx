import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  outlineLight:
    "border-white text-white hover:bg-white hover:text-ink",
  outlineDark: "border-ink text-ink hover:bg-ink hover:text-paper",
  outlineGold: "border-gold text-gold hover:bg-gold hover:text-ink",
} as const;

type Variant = keyof typeof variants;

export function Button({
  href,
  children,
  variant = "outlineDark",
  arrow = false,
  className,
  type = "button",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = cn(
    "inline-flex items-center gap-3 border px-7 py-3 text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-gold",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden>→</span> : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {content}
    </button>
  );
}
