import { Container } from "@/components/ui/Container";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { end: 40, suffix: "", lines: ["Acres"] },
  { end: 20, suffix: "", lines: ["Acres under", "vine"] },
  { end: 5, suffix: "", lines: ["Varietals"] },
  { end: 100, suffix: "%", lines: ["Hand", "harvested"] },
];

export function VineyardIntro() {
  return (
    <section className="bg-cream py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <SectionLabel>Our vineyard</SectionLabel>
          <h2 className="font-display text-[28px] font-medium leading-[1.15] text-ink lg:text-[40px]">
            The Yarra Valley
          </h2>
          <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-ink-muted">
            Our vineyard spans 40 acres in the heart of the Yarra Valley. Cool
            climate, ancient soils and uncompromising care come together to
            create wines of structure, elegance and depth.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-y-8 self-center lg:col-span-7 lg:grid-cols-4 lg:gap-y-0">
          {stats.map((s, i) => (
            <Reveal
              key={s.lines.join(" ")}
              delay={i * 60}
              offset="list"
              className={`flex flex-col items-center px-3 py-4 text-center ${
                i > 0 ? "lg:border-l lg:border-ink/10" : ""
              } ${i % 2 === 1 ? "border-l border-ink/10" : ""}`}
            >
              <p
                className="font-display text-[40px] font-medium leading-none tracking-tight text-gold lg:text-[48px]"
                aria-label={`${s.end}${s.suffix}`}
              >
                <CountUp end={s.end} suffix={s.suffix} delay={i * 60} />
              </p>
              <p className="mt-6 text-[11px] font-medium uppercase leading-[1.35] tracking-[0.18em] text-ink">
                {s.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
