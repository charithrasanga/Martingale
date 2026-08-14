import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slot, type ImageKey } from "@/lib/images";

const varietals: { key: ImageKey; name: string; blurb: string }[] = [
  {
    key: "varietalPinot",
    name: "Pinot Noir",
    blurb: "Fine-skinned, red-fruited, and the heart of the estate.",
  },
  {
    key: "varietalChardonnay",
    name: "Chardonnay",
    blurb: "Cool-climate citrus and stone fruit, raised with a quiet oak.",
  },
  {
    key: "varietalShiraz",
    name: "Shiraz",
    blurb: "Dark berry and spice from the warmer upper rows.",
  },
  {
    key: "varietalCabernet",
    name: "Cabernet Sauvignon",
    blurb: "Structure and length — a small planting, carefully kept.",
  },
];

export function VarietalsSection() {
  return (
    <section className="bg-paper py-24">
      <Container>
        <div className="text-center">
          <SectionLabel rule="below" className="justify-center">
            Our varietals
          </SectionLabel>
          <h2 className="font-display text-[32px] font-medium text-ink lg:text-[40px]">
            Distinct Varietals, Distinctive Wines.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {varietals.map((v) => {
            const image = slot(v.key);
            return (
              <article key={v.key}>
                <div className="relative aspect-[4/3]">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="25vw" />
                </div>
                <h3 className="mt-4 text-[15px] font-medium uppercase tracking-[0.16em] text-ink">
                  {v.name}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{v.blurb}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
