import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
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
  icons: {
    icon: [
      {
        url: "/brand/martingale-mark.svg",
        type: "image/svg+xml",
      },
    ],
  },
  // Add canonical URL
  alternates: {
    canonical: "https://martingale-six.vercel.app",
  },
  // Add Open Graph and Twitter metadata
  openGraph: {
    title: "Martingale Estate | Yarra Valley",
    description: "A first-generation family estate in the Yarra Valley. Wines crafted by nature, perfected by time.",
    siteName: "Martingale Estate",
    locale: "en_US",
    type: "website",
    url: "https://martingale-six.vercel.app",
    images: [
      {
        url: "https://martingale-six.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martingale Estate - Yarra Valley Winery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martingale Estate | Yarra Valley",
    description: "A first-generation family estate in the Yarra Valley. Wines crafted by nature, perfected by time.",
    creator: "@martingale_estate",
    images: [
      {
        url: "https://martingale-six.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Martingale Estate - Yarra Valley Winery",
      },
    ],
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Martingale Estate",
    url: "https://martingale-six.vercel.app",
    logo: "https://martingale-six.vercel.app/brand/martingale-mark.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61-3-1234-5678",
      email: "info@martingale-estate.com",
      contactType: "Customer Service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Vineyard Lane",
      addressLocality: "Yarra Valley",
      addressRegion: "Victoria",
      postalCode: "3753",
      addressCountry: "Australia",
    },
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} h-full subpixel-antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-paper font-sans text-ink">
        <Script id="detect-js" strategy="beforeInteractive">
          {`document.documentElement.classList.add("js")`}
        </Script>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
