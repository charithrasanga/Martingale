"use client";

import Image from "next/image";
import { useRef } from "react";
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

export function WinesSection() {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-paper-parchment py-16 lg:py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionLabel rule="right">Our wines</SectionLabel>
          <h2 className="font-display text-[32px] font-medium leading-[1.15] text-ink lg:text-[40px]">
            Distinctive wines. Grown with intention.
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
            Pinot, Chardonnay, and a handful of quietly made reds — fruit from
            our own rows, raised in small lots.
          </p>
          <Button href="/wines" variant="outlineDark" className="mt-8">
            Explore the collection
          </Button>
        </Reveal>
        <div className="lg:col-span-8">
          <div className="mb-3 flex justify-center gap-2 lg:justify-end">
            <CarouselArrow
              label="Previous wines"
              direction="prev"
              onClick={() => {
                scroller.current?.scrollBy({ left: -280, behavior: "smooth" });
              }}
            />
            <CarouselArrow
              label="Next wines"
              direction="next"
              onClick={() => {
                scroller.current?.scrollBy({ left: 280, behavior: "smooth" });
              }}
            />
          </div>
          <RevealGroup>
            <div
              ref={scroller}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {wines.map((wine, i) => {
                const image = slot(wine.key);
                return (
                  <Reveal
                    as="article"
                    key={wine.key}
                    delay={i * 60}
                    className="w-[220px] shrink-0 sm:w-[260px]"
                  >
                    <div className="relative h-72 lg:h-80">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        sizes="260px"
                      />
                    </div>
                    <div className="px-2 text-center">
                      <p className="mt-2 text-[15px] font-medium uppercase tracking-[0.12em] text-ink">
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
