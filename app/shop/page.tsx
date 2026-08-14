import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Shop" };

export default function Page() {
  return (
    <StubPage label="Shop" sentence="The shop will live here." />
  );
}
