import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Experience" };

export default function Page() {
  return (
    <StubPage
      label="Experience"
      sentence="Cellar door, events, and vineyard visits will live here."
    />
  );
}
