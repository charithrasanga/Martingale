import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function StubPage({
  label,
  sentence,
}: {
  label: string;
  sentence: string;
}) {
  return (
    <>
      <div className="h-[40vh] min-h-[280px] bg-ink" />
      <section className="bg-paper py-24">
        <Container narrow>
          <SectionLabel>{label}</SectionLabel>
          <p className="mt-4 text-[17px] leading-[1.7] text-ink-muted">{sentence}</p>
          <Button href="/" variant="outlineGold" className="mt-10">
            Return home
          </Button>
        </Container>
      </section>
    </>
  );
}
