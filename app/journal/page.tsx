import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Journal" };

export default function Page() {
  return (
    <StubPage
      label="Journal"
      sentence="Stories from the vineyard will live here."
    />
  );
}
