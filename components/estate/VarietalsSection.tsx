import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slot, type ImageKey } from "@/lib/images";

const varietals: { key: ImageKey; name: string; blurb: string }[] = [
  {
    key: "varietalPinot",
    name: "Pinot Noir",
    blurb: "Our flagship varietal. Elegant, perfumed and expressive.",
  },
  {
    key: "varietalChardonnay",
    name: "Chardonnay",
    blurb: "Bright, textural and refined, with depth and balance.",
  },
  {
    key: "varietalShiraz",
    name: "Shiraz",
    blurb: "Rich, velvety and layered with spice and structure.",
  },
  {
    key: "varietalCabernet",
    name: "Cabernet Sauvignon",
    blurb: "Bold, structured and built for the long term.",
  },
];

export function VarietalsSection() {
  return (
    <section className="bg-cream py-12 lg:py-16">
      <Container>
        <Reveal className="text-center">
          <SectionLabel rule="below" className="justify-center">
            Our varietals
          </SectionLabel>
          <h2 className="font-display text-[28px] font-medium leading-[1.15] text-ink lg:text-[40px]">
            Distinct Varietals, Distinctive Wines.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {varietals.map((v, i) => {
            const image = slot(v.key);
            return (
              <Reveal
                key={v.key}
                as="article"
                delay={i * 60}
                className="bg-white shadow-card transition-[box-shadow] duration-300 ease-out hover:shadow-card-hover"
              >
                <div className="group relative aspect-[2/1] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:group-hover:scale-100"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <div className="px-5 pt-4 pb-5">
                  <h3 className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink">
                    {v.name}
                  </h3>
                  <span className="mt-3 block h-px w-10 bg-gold" aria-hidden />
                  <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted">
                    {v.blurb}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
