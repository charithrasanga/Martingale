import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { icon: "years", value: "40+", label: "Years in the Yarra Valley" },
  { icon: "acres", value: "20", label: "Acres under vine" },
  { icon: "barrel", value: "Small Batch", label: "Winemaking" },
  { icon: "leaf", value: "Sustainable", label: "Estate practice" },
] as const;

export function StatsBar() {
  return (
    <section className="bg-ink py-14">
      <Container className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <Reveal
            key={item.label}
            delay={i * 60}
            className={`flex flex-col items-center gap-4 px-4 py-6 text-center lg:py-0 ${
              i > 0 ? "lg:border-l lg:border-white/10" : ""
            } ${i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""} ${
              i > 1 ? "border-t border-white/10 lg:border-t-0" : ""
            }`}
          >
            <StatIcon name={item.icon} />
            <p className="font-display text-[28px] font-medium text-white lg:text-[32px]">
              {item.value}
            </p>
            <p className="text-[13px] font-medium uppercase tracking-[0.16em] text-white/70">
              {item.label}
            </p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

function StatIcon({ name }: { name: (typeof stats)[number]["icon"] }) {
  const common = {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-gold",
  };

  if (name === "years") {
    return (
      <svg {...common} aria-hidden>
        <rect x="13" y="7" width="22" height="4" />
        <rect x="13" y="37" width="22" height="4" />
        <path d="M17 11 24 24 31 11" />
        <path d="M17 37 24 24 31 37" />
        <path d="M21 33h6" />
      </svg>
    );
  }

  if (name === "acres") {
    return (
      <svg {...common} aria-hidden>
        <path d="M6 38h36" />
        <path d="M10 38 24 12 38 38" />
        <path d="M16 38 24 18 32 38" />
        <path d="M21 38 24 26 27 38" />
        <path d="M14 32h-3.5M18 24h-3M22 16h-2" />
        <path d="M34 32h3.5M30 24h3M26 16h2" />
      </svg>
    );
  }

  if (name === "barrel") {
    return (
      <svg {...common} aria-hidden>
        <path d="M13 14c0-3.2 5-5.5 11-5.5s11 2.3 11 5.5v20c0 3.2-5 5.5-11 5.5s-11-2.3-11-5.5V14Z" />
        <ellipse cx="24" cy="14" rx="11" ry="5.5" />
        <path d="M13.2 20.5h21.6M13.2 27.5h21.6" />
        <path d="M24 14v20" />
        <circle cx="24" cy="24" r="1.6" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden>
      <path d="M24 42V29" />
      <path d="M24 29C13 32 7 25 9 17C4 15 6 7 14 10C15 4 21 6 24 12C27 6 33 4 34 10C42 7 44 15 39 17C41 25 35 32 24 29Z" />
      <path d="M24 14v15M18 16c2.5 4 4.5 8 6 13M30 16c-2.5 4-4.5 8-6 13" />
      <path d="M34 11c5-2 8 2 6.5 7" />
    </svg>
  );
}
