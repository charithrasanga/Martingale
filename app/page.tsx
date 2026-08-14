import { ExperienceBanner } from "@/components/home/ExperienceBanner";
import { HomeHero } from "@/components/home/HomeHero";
import { InfoGrid } from "@/components/home/InfoGrid";
import { StatsBar } from "@/components/home/StatsBar";
import { StorySection } from "@/components/home/StorySection";
import { WinesSection } from "@/components/home/WinesSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StorySection />
      <StatsBar />
      <WinesSection />
      <ExperienceBanner />
      <InfoGrid />
    </>
  );
}
