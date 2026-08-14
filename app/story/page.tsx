import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Our Story" };

export default function Page() {
  return (
    <StubPage
      label="Our story"
      sentence="The full story of the estate will live here."
    />
  );
}
