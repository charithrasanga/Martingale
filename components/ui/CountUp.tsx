"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1200;

function easeOut(t: number) {
  return 1 - (1 - t) ** 2;
}

export function CountUp({
  end,
  suffix = "",
  delay = 0,
}: {
  end: number;
  suffix?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let frame = 0;
    let delayTimer = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const run = () => {
          const start = performance.now();
          setValue(0);

          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / DURATION_MS);
            setValue(Math.round(end * easeOut(t)));
            if (t < 1) frame = requestAnimationFrame(tick);
          };

          frame = requestAnimationFrame(tick);
        };

        if (delay) delayTimer = window.setTimeout(run, delay);
        else run();
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.35 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      window.clearTimeout(delayTimer);
      cancelAnimationFrame(frame);
    };
  }, [delay, end]);

  return (
    <span ref={ref} className="tabular-nums" aria-hidden>
      {value ?? end}
      {suffix}
    </span>
  );
}
