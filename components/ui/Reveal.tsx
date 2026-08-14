"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/cn";

const RevealGroupContext = createContext<boolean | null>(null);

export function RevealGroup({
  as: Tag = "div",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      <RevealGroupContext.Provider value={active}>
        {children}
      </RevealGroupContext.Provider>
    </Tag>
  );
}

export function Reveal({
  as: Tag = "div",
  delay = 0,
  trigger = "scroll",
  offset = "section",
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  trigger?: "scroll" | "load";
  offset?: "section" | "list";
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const groupActive = useContext(RevealGroupContext);

  useEffect(() => {
    if (trigger !== "scroll") return;

    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      el.classList.add("is-inview");
      return;
    }

    if (groupActive === true) {
      el.classList.add("is-inview");
      return;
    }

    if (groupActive === false) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-inview");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [trigger, groupActive]);

  return (
    <Tag
      ref={ref}
      className={cn(
        trigger === "load" ? "reveal-load" : "reveal",
        offset === "list" && "reveal-list",
        className,
      )}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
