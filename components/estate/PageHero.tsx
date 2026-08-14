import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { slot } from "@/lib/images";

export function PageHero() {
  const image = slot("estateHero");

  return (
    <section className="relative min-h-[70vh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <Container className="type-shadow relative flex min-h-[70vh] items-end pb-20 pt-28">
        <div className="max-w-lg">
          <h1 className="font-display text-[36px] font-medium leading-[1.08] text-white lg:text-[56px]">
            The Vineyard
          </h1>
          <p className="mt-6 text-[17px] leading-[1.7] text-white/85">
            Forty acres in the Yarra Valley — slope, valley floor, and a slow
            unfolding of Pinot and Chardonnay under cool air and long light.
          </p>
        </div>
      </Container>
    </section>
  );
}
