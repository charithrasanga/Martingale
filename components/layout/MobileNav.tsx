"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Logo } from "@/components/layout/Logo";
import { BagIcon, IconButton, ProfileIcon } from "@/components/ui/IconButton";
import { cn } from "@/lib/cn";
import { NAV } from "@/lib/nav";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusables = () =>
      panel?.querySelectorAll<HTMLElement>("a[href], button") ?? [];

    const items = focusables();
    items[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const list = [...focusables()];
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-60 flex h-dvh w-screen flex-col overflow-y-auto bg-ink/90 px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-header-glass lg:hidden"
    >
      <div className="flex h-14 items-center justify-between">
        <Logo wordmarkClassName="text-[15px] tracking-[0.14em]" />
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:text-gold focus-visible:outline focus-visible:outline-offset-4 focus-visible:outline-gold"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <nav className="mt-8 flex flex-1 flex-col" aria-label="Mobile">
        {NAV.map((item) => {
          const active =
            pathname === item.href ||
            (item.href === "/estate" && pathname.startsWith("/estate"));
          const className = cn(
            "flex min-h-12 w-full cursor-pointer items-center border-b border-line-on-ink bg-transparent p-0 text-left text-[18px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:text-gold-bright",
            active && "text-gold-bright",
          );
          if (!item.live) {
            return (
              <button key={item.href} type="button" className={className}>
                {item.label}
              </button>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={className}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="flex items-center gap-2 pt-6">
        <IconButton label="Account" className="h-11 w-11">
          <ProfileIcon />
        </IconButton>
        <IconButton label="Shopping bag" href="/shop" className="h-11 w-11">
          <BagIcon />
        </IconButton>
      </div>
    </div>
  );
}
