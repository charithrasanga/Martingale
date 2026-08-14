import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slot } from "@/lib/images";

export function SplitFeature() {
  const image = slot("sustainableLandscape");

  return (
    <section
      id="practices"
      className="bg-cream lg:grid lg:grid-cols-[1.25fr_1fr]"
    >
      <Reveal className="group relative min-h-[280px] overflow-hidden lg:min-h-[380px]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:group-hover:scale-100"
          sizes="(min-width: 1024px) 56vw, 100vw"
        />
      </Reveal>
      <div className="flex items-center px-8 py-16 lg:px-20 lg:py-20">
        <Reveal delay={80} className="max-w-md">
          <SectionLabel>Sustainable practices</SectionLabel>
          <h2 className="font-display text-[28px] font-medium leading-[1.15] text-ink lg:text-[40px]">
            Nurtured by Nature
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
            We farm sustainably, regenerating our soil and protecting the land
            for future generations.
          </p>
          <p className="mt-4 text-[17px] leading-[1.7] text-ink-muted">
            Healthy vines. Healthy soil. Extraordinary wines.
          </p>
          <Button href="/estate#practices" variant="outlineGold" className="mt-8">
            Learn more
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
