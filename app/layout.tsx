import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Martingale Estate | Yarra Valley",
    template: "%s | Martingale Estate",
  },
  description:
    "A first-generation family estate in the Yarra Valley. Wines crafted by nature, perfected by time.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} h-full subpixel-antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-paper font-sans text-ink">
        <Script id="detect-js" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
