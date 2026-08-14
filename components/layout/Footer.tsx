import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

const columns = [
  {
    title: "Estate",
    links: [
      { href: "/story", label: "Our Story" },
      { href: "/estate", label: "Our Vineyard" },
      { href: "/estate", label: "Sustainability" },
    ],
  },
  {
    title: "Wines",
    links: [
      { href: "/wines", label: "All Wines" },
      { href: "/experience", label: "Cellar Door" },
      { href: "/club", label: "Wine Club" },
    ],
  },
  {
    title: "Experience",
    links: [
      { href: "/experience", label: "Visit Us" },
      { href: "/experience", label: "Events" },
      { href: "/shop", label: "Gift Vouchers" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/terms", label: "Shipping" },
      { href: "/terms", label: "Returns" },
      { href: "/journal", label: "FAQs" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-white">
      <Container>
        <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 lg:grid-cols-[1.15fr_repeat(4,minmax(0,0.85fr))_1.25fr] lg:gap-x-0">
          <div className="col-span-2 flex justify-center lg:col-span-1 lg:pr-12">
            <Logo className="flex-col items-center gap-3 text-center" />
          </div>
          {columns.map((col, i) => (
            <div
              key={col.title}
              className={cn(
                "lg:pl-8",
                i === 0 && "lg:pl-10",
                (i === 1 || i === 2) && "lg:border-l lg:border-line-on-ink",
              )}
            >
              <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.18em] text-white lg:mb-5">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-white/70 transition-colors duration-300 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 lg:col-span-1 lg:pl-8">
            <NewsletterForm />
            <div className="mt-6 flex items-center gap-4">
              <SocialIcon label="Facebook">
                <path d="M14 8h2.5V5.2H14c-2.3 0-3.8 1.6-3.8 4V11H8v3h2.2v7h3V14H16l.5-3h-3.3v-1.4c0-.8.3-1.6 1.5-1.6Z" />
              </SocialIcon>
              <SocialIcon label="Instagram">
                <rect x="6" y="6" width="12" height="12" rx="3" />
                <circle cx="12" cy="12" r="2.6" />
                <circle cx="15.6" cy="8.4" r="0.7" fill="currentColor" stroke="none" />
              </SocialIcon>
              <SocialIcon label="Email">
                <rect x="5" y="7" width="14" height="10" />
                <path d="m5 8 7 5 7-5" />
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-line-on-ink pt-6 text-center text-[14px] text-white/45 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p>© 2026 Martingale Estate. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-gold">
              Privacy Policy
            </Link>
            <span aria-hidden>|</span>
            <Link href="/terms" className="transition-colors duration-300 hover:text-gold">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="text-white transition-colors duration-300 hover:text-gold"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        {children}
      </svg>
    </a>
  );
}
