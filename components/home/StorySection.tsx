import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { slot } from "@/lib/images";

export function StorySection() {
  const grapes = slot("storyGrapes");
  const vineyard = slot("storyVineyard");
  const barrels = slot("storyBarrels");

  return (
    <section className="bg-paper-warm py-16 lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel rule="right">Our story</SectionLabel>
          <h2 className="font-display text-[36px] font-medium leading-[1.15] text-ink lg:text-[44px]">
            A first-generation family estate.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.7] text-ink-muted lg:text-[18px]">
            We farm a small valley floor and slope, picking by hand and making
            wine in modest lots. Nothing here is rushed. The estate is still in
            its first generation — close enough to remember every vine we put in
            the ground.
          </p>
          <TextLink href="/story" className="mt-6">
            Read our story
          </TextLink>
        </Reveal>
        <div className="grid grid-cols-1 gap-3 lg:col-span-7 lg:aspect-[2/1] lg:grid-cols-[3fr_2fr] lg:grid-rows-2">
          <Reveal className="relative aspect-[8/5] lg:row-span-2 lg:aspect-auto">
            <Image
              src={grapes.src}
              alt={grapes.alt}
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
          </Reveal>
          <Reveal delay={60} className="relative aspect-[16/10] lg:aspect-auto">
            <Image
              src={vineyard.src}
              alt={vineyard.alt}
              fill
              className="object-cover object-center"
              sizes="30vw"
            />
          </Reveal>
          <Reveal delay={120} className="relative aspect-[16/10] lg:aspect-auto">
            <Image
              src={barrels.src}
              alt={barrels.alt}
              fill
              className="object-cover object-center"
              sizes="30vw"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
