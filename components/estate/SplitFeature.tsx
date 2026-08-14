import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { slot } from "@/lib/images";

export function SplitFeature() {
  const image = slot("sustainableLandscape");

  return (
    <section id="practices" className="bg-paper lg:grid lg:grid-cols-2">
      <div className="relative min-h-[480px]">
        <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="50vw" />
      </div>
      <div className="flex items-center bg-cream px-8 py-16 lg:px-12">
        <div className="max-w-md">
          <SectionLabel>Sustainable practices</SectionLabel>
          <h2 className="font-display text-[32px] font-medium text-ink lg:text-[40px]">
            Nurtured by Nature
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
            Cover crops, modest yields, and no more irrigation than the season
            asks. The land leads; we follow.
          </p>
          <Button href="/estate#practices" variant="outlineGold" className="mt-8">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
