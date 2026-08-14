import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { slot } from "@/lib/images";

export function PageHero() {
  const image = slot("estateHero");

  return (
    <section className="type-shadow relative h-[320px] overflow-hidden lg:h-[480px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-r from-hero-overlay via-hero-overlay/70 to-transparent" />
      <Container className="relative flex h-full items-center pt-16 lg:pt-10">
        <div className="max-w-lg">
          <Reveal trigger="load">
            <h1 className="type-shadow font-display text-[36px] font-medium leading-[1.08] tracking-tight text-white lg:text-[56px]">
              The Vineyard
            </h1>
          </Reveal>
          <Reveal trigger="load" delay={80}>
            <p className="type-shadow mt-6 text-[17px] leading-[1.7] text-white/85">
              Our vineyard spans 40 acres in the heart of the Yarra Valley. Cool
              climate, ancient soils and uncompromising care come together to
              create wines of structure, elegance and depth.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
