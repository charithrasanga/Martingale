import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Wines" };

export default function Page() {
  return (
    <StubPage
      label="Our wines"
      sentence="The collection page will live here."
    />
  );
}
