import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Cellar Club" };

export default function Page() {
  return (
    <StubPage
      label="Cellar club"
      sentence="Membership details will live here."
    />
  );
}
