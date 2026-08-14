"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CarouselArrow } from "@/components/ui/IconButton";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slot, type ImageKey } from "@/lib/images";

const wines: { key: ImageKey; name: string; meta: string }[] = [
  { key: "winePinot", name: "Pinot Noir 2023", meta: "Yarra Valley" },
  { key: "wineChardonnay", name: "Chardonnay 2023", meta: "Yarra Valley" },
  { key: "wineShiraz", name: "Shiraz 2022", meta: "Yarra Valley" },
  { key: "wineCabernet", name: "Cabernet Sauvignon 2022", meta: "Yarra Valley" },
];

const GAP = 16;
const AUTOPLAY_MS = 3500;
const track = [...wines, ...wines];

export function WinesSection() {
  const scroller = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const wrapTimer = useRef(0);

  function cardStep(row: HTMLDivElement) {
    const card = row.querySelector("article");
    if (!card) return 0;
    return card.getBoundingClientRect().width + GAP;
  }

  function wrapIfNeeded(row: HTMLDivElement) {
    const setWidth = cardStep(row) * wines.length;
    if (setWidth <= 0) return;
    if (row.scrollLeft >= setWidth - 1) {
      row.scrollTo({ left: row.scrollLeft - setWidth, behavior: "instant" });
    } else if (row.scrollLeft <= 1) {
      row.scrollTo({ left: row.scrollLeft + setWidth, behavior: "instant" });
    }
  }

  function scrollByCard(direction: -1 | 1) {
    const row = scroller.current;
    if (!row) return;
    const step = cardStep(row);
    const setWidth = step * wines.length;
    if (step <= 0) return;

    if (direction < 0 && row.scrollLeft <= 1) {
      row.scrollTo({ left: row.scrollLeft + setWidth, behavior: "instant" });
    }

    row.scrollBy({ left: direction * step, behavior: "smooth" });

    window.clearTimeout(wrapTimer.current);
    wrapTimer.current = window.setTimeout(() => wrapIfNeeded(row), 520);
  }

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const tick = () => {
      if (paused.current || document.hidden) return;
      scrollByCard(1);
    };

    const id = window.setInterval(tick, AUTOPLAY_MS);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(wrapTimer.current);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-paper-parchment py-16 lg:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="min-w-0 lg:col-span-4">
          <SectionLabel rule="right">Our wines</SectionLabel>
          <h2 className="font-display text-[28px] font-medium leading-[1.15] text-ink sm:text-[32px] lg:text-[40px]">
            Distinctive wines. Grown with intention.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
            Pinot, Chardonnay, and a handful of quietly made reds — fruit from
            our own rows, raised in small lots.
          </p>
          <Button
            href="/wines"
            variant="outlineDark"
            className="mt-8 w-full justify-center sm:w-auto"
          >
            Explore the collection
          </Button>
        </Reveal>
        <div
          className="min-w-0 lg:col-span-8"
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
          onFocusCapture={() => {
            paused.current = true;
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              paused.current = false;
            }
          }}
        >
          <div className="mb-3 flex justify-center gap-2 lg:justify-end">
            <CarouselArrow
              label="Previous wines"
              direction="prev"
              onClick={() => scrollByCard(-1)}
            />
            <CarouselArrow
              label="Next wines"
              direction="next"
              onClick={() => scrollByCard(1)}
            />
          </div>
          <RevealGroup className="min-w-0">
            <div
              ref={scroller}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [touch-action:pan-x] [&::-webkit-scrollbar]:hidden"
            >
              {track.map((wine, i) => {
                const image = slot(wine.key);
                return (
                  <Reveal
                    as="article"
                    key={`${wine.key}-${i}`}
                    delay={i < wines.length ? i * 60 : 0}
                    className="w-[min(70%,13.75rem)] shrink-0 snap-start sm:w-[240px] lg:w-[260px]"
                  >
                    <div className="relative h-64 sm:h-72 lg:h-80">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 70vw, 260px"
                      />
                    </div>
                    <div className="px-1 text-center sm:px-2">
                      <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ink sm:text-[15px]">
                        {wine.name}
                      </p>
                      <p className="mt-1 text-[13px] text-ink-muted">{wine.meta}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
