import type { Metadata } from "next";
import { StubPage } from "@/components/ui/StubPage";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <StubPage label="Privacy" sentence="Privacy policy will live here." />
  );
}
