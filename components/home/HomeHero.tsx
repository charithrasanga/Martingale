import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroMedia } from "@/components/home/HeroMedia";
import { Reveal } from "@/components/ui/Reveal";
import { slot } from "@/lib/images";

export function HomeHero() {
  const image = slot("homeHero");

  return (
    <section className="type-shadow relative min-h-screen overflow-hidden">
      <HeroMedia src={image.video} poster={image.src} alt={image.alt} />
      <div className="absolute inset-0 bg-linear-to-r from-hero-overlay via-hero-overlay/70 to-transparent" />
      <Container className="relative flex min-h-screen items-center pt-10">
        <div className="max-w-xl">
          <Reveal trigger="load">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/80">
              Yarra Valley
            </p>
          </Reveal>
          <Reveal trigger="load" delay={80}>
            <h1 className="mt-4 font-display text-[36px] font-medium leading-[1.08] tracking-tight text-white lg:text-[56px]">
              Crafted by Nature. Perfected by Time.
            </h1>
          </Reveal>
          <Reveal trigger="load" delay={160}>
            <p className="mt-6 mb-8 max-w-md text-[17px] leading-[1.7] text-white/80">
              A first-generation family estate in the Yarra Valley, where vines,
              time, and a quiet hand shape wines of patience and place.
            </p>
          </Reveal>
          <Reveal trigger="load" delay={240}>
            <Button href="/story" variant="outlineLight" arrow>
              Discover our story
            </Button>
          </Reveal>
        </div>
      </Container>
      <div
        className="absolute bottom-10 left-6 lg:left-12"
        aria-hidden
      >
        <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-white/70">
          Scroll
        </p>
        <span className="scroll-line mt-3 block h-12 w-px bg-white/50 motion-reduce:animate-none" />
      </div>
    </section>
  );
}
