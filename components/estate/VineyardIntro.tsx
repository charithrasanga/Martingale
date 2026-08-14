import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "40", label: "Acres" },
  { value: "20", label: "Acres under vine" },
  { value: "5", label: "Varietals" },
  { value: "100%", label: "Hand harvested" },
];

export function VineyardIntro() {
  return (
    <section className="bg-cream py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel>Our vineyard</SectionLabel>
          <h2 className="font-display text-[32px] font-medium text-ink lg:text-[40px]">
            The Yarra Valley
          </h2>
          <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
            Morning mist on the rows, a thin band of clay and grey loam, and
            fruit we pick ourselves. The vineyard is small on purpose.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-8 lg:col-span-7 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 ${i > 0 ? "lg:border-l lg:border-ink/10" : ""}`}
            >
              <p className="font-display text-[32px] font-medium text-gold lg:text-[40px]">
                {s.value}
              </p>
              <p className="mt-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
