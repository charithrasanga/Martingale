import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { slot } from "@/lib/images";

const features = [
  {
    label: "Cellar Door Tastings",
    icon: "glass",
    body: "Sit with current releases in the quiet of the cellar door — small pours, unhurried conversation, and the valley just beyond the glass.",
  },
  {
    label: "Private Events",
    icon: "calendar",
    body: "A table for a handful of guests: long lunches, quiet celebrations, and the estate kitchen set to the season.",
  },
  {
    label: "Vineyard Experiences",
    icon: "rows",
    body: "Walk the rows at golden hour with those who tend them, then return to taste what the year has given.",
  },
] as const;

export function ExperienceBanner() {
  const image = slot("experienceBanner");

  return (
    <section className="relative min-h-[520px] overflow-hidden bg-ink">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-[70%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/45" />
      <Container className="type-shadow relative grid min-h-[520px] items-center gap-12 pt-16 pb-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
        <Reveal className="max-w-lg">
          <SectionLabel tone="white">Experience</SectionLabel>
          <h2 className="font-display text-[32px] font-medium leading-[1.15] text-white lg:text-[40px]">
            More than wine. It&apos;s an experience.
          </h2>
          <TextLink href="/experience" tone="light" className="mt-8">
            Plan your visit
          </TextLink>
        </Reveal>

        <RevealGroup as="ul" className="flex w-full flex-col gap-4">
          {features.map((f, i) => (
            <Reveal
              as="li"
              key={f.label}
              delay={120 + i * 80}
              offset="list"
              className="w-full"
            >
              <article className="flex min-h-[9.5rem] w-full gap-5 bg-header-glass px-5 py-5 backdrop-blur-xl backdrop-saturate-150 transition-transform duration-300 ease-out hover:z-10 hover:scale-[1.04] active:scale-[1.04] motion-reduce:transform-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100 lg:gap-6 lg:px-7 lg:py-6">
                <div className="flex shrink-0 flex-col items-center gap-3">
                  <span className="font-display text-[15px] tracking-[0.2em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <FeatureIcon name={f.icon} />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  <p className="whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.14em] text-white">
                    {f.label}
                  </p>
                  <p className="mt-2 text-[16px] leading-[1.65] text-white/80">
                    {f.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="shrink-0 text-gold"
      aria-hidden
    >
      {name === "glass" ? (
        <>
          <path d="M11 6h10l-1.5 10H12.5L11 6Z" />
          <path d="M16 16v8M12 24h8" />
        </>
      ) : name === "calendar" ? (
        <>
          <rect x="7" y="9" width="18" height="16" />
          <path d="M7 14h18M12 6v4M20 6v4" />
        </>
      ) : (
        <>
          <path d="M6 22c4-8 16-8 20 0" />
          <path d="M8 18c3-6 13-6 16 0" />
          <path d="M10 14c2-4 10-4 12 0" />
        </>
      )}
    </svg>
  );
}
