import type { Metadata } from "next";
import { ImageStrip } from "@/components/estate/ImageStrip";
import { PageHero } from "@/components/estate/PageHero";
import { SplitFeature } from "@/components/estate/SplitFeature";
import { VarietalsSection } from "@/components/estate/VarietalsSection";
import { VineyardIntro } from "@/components/estate/VineyardIntro";

export const metadata: Metadata = {
  title: "The Vineyard",
};

export default function EstatePage() {
  return (
    <>
      <PageHero />
      <VineyardIntro />
      <ImageStrip />
      <VarietalsSection />
      <SplitFeature />
    </>
  );
}
