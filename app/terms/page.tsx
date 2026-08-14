import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function Page() {
  return (
    <StubPage
      label="Terms"
      sentence="Terms and conditions will live here."
    />
  );
}
