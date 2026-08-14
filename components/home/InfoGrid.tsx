import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { slot, type ImageKey } from "@/lib/images";

const ig: ImageKey[] = ["ig1", "ig2", "ig3", "ig4"];

export function InfoGrid() {
  const leaves = slot("journalLeaves");
  const glass = slot("clubGlass");

  return (
    <section className="bg-white p-1">
      <div className="grid lg:h-[280px] lg:grid-cols-3">
        <Reveal
          as="article"
          offset="list"
          className="relative flex min-h-[280px] flex-col overflow-hidden lg:min-h-0"
        >
          <Image
            src={leaves.src}
            alt={leaves.alt}
            fill
            className="object-cover object-[80%_center]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-paper via-paper/80 to-transparent" />
          <div className="relative z-10 flex flex-1 flex-col justify-between p-6 lg:p-8">
            <div>
              <SectionLabel rule="right">Journal</SectionLabel>
              <h2 className="max-w-[14ch] font-display text-[28px] font-medium leading-[1.2] text-ink lg:text-[32px]">
                Stories from the vineyard.
              </h2>
            </div>
            <TextLink href="/journal" tone="dark">
              View all articles
            </TextLink>
          </div>
        </Reveal>

        <Reveal
          as="article"
          offset="list"
          delay={60}
          className="flex min-h-[240px] flex-col bg-paper p-5 lg:min-h-0"
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <SectionLabel className="mb-1">Follow our journey</SectionLabel>
              <a
                href="https://www.instagram.com/martingaleestate"
                className="font-display text-[15px] text-ink transition-colors duration-300 hover:text-gold"
              >
                @martingaleestate
              </a>
            </div>
            <a
              href="https://www.instagram.com/martingaleestate"
              aria-label="Martingale Estate on Instagram"
              className="mt-0.5 text-ink transition-colors duration-300 hover:text-gold"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-4 gap-1">
            {ig.map((key) => {
              const image = slot(key);
              return (
                <a
                  key={key}
                  href="https://www.instagram.com/martingaleestate"
                  className="relative block h-full min-h-0 overflow-hidden"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="12vw"
                  />
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal
          as="article"
          offset="list"
          delay={120}
          className="relative flex min-h-[240px] flex-col overflow-hidden bg-ink lg:min-h-0"
        >
          <Image
            src={glass.src}
            alt={glass.alt}
            fill
            className="object-cover object-[72%_center]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink/75 via-ink/35 to-transparent" />
          <div className="type-shadow relative z-10 flex flex-1 flex-col justify-between p-6 lg:p-8">
            <SectionLabel tone="white" className="mb-0">
              Join the cellar club
            </SectionLabel>
            <p className="max-w-[16ch] font-display text-[20px] font-medium leading-[1.25] text-white lg:text-[22px]">
              Be the first to receive limited releases, exclusive offers and
              estate news.
            </p>
            <TextLink href="/club" tone="light">
              Join now
            </TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden
    >
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <circle cx="12" cy="12" r="2.6" />
      <circle cx="15.6" cy="8.4" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

