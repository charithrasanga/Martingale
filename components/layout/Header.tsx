"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { BagIcon, IconButton, ProfileIcon } from "@/components/ui/IconButton";
import { cn } from "@/lib/cn";
import { NAV } from "@/lib/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 type-shadow-nav transition-[background-color,backdrop-filter,border-color] duration-300 ease-out",
          "h-[calc(4.5rem+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)] lg:h-[calc(5.5rem+env(safe-area-inset-top))]",
          scrolled
            ? "border-b border-line-on-ink bg-header-glass backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto grid h-full max-w-[1280px] grid-cols-[1fr_auto] items-center px-6 lg:grid-cols-[auto_1fr_auto] lg:px-12">
          <Logo
            className="gap-2 lg:gap-3"
            wordmarkClassName="text-[14px] tracking-[0.12em] sm:text-[16px] sm:tracking-[0.14em]"
          />
          <nav
            className="hidden items-center justify-self-end gap-10 pr-12 lg:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => {
              const active =
                pathname === item.href ||
                (item.href === "/estate" && pathname.startsWith("/estate"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[15px] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:text-gold-bright hover:underline hover:decoration-gold-bright hover:underline-offset-[10px]",
                    active && "text-gold-bright underline decoration-gold-bright underline-offset-[10px]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center justify-self-end gap-1 lg:gap-5">
            <IconButton label="Shopping bag" href="/shop" className="h-11 w-11 lg:h-auto lg:w-auto">
              <BagIcon />
            </IconButton>
            <div className="hidden lg:block">
              <IconButton label="Account">
                <ProfileIcon />
              </IconButton>
            </div>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-white transition-colors duration-300 hover:text-gold focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-gold lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
            >
              <span className="flex h-3.5 w-5 flex-col justify-between" aria-hidden>
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
