import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const industries = [
  { label: "Fintech", href: "#" },
  { label: "Pharma", href: "#" },
  { label: "Telecom", href: "#" },
  { label: "Real Estate", href: "#" },
  { label: "Software/ITES", href: "#" },
];

const industries2 = [
  { label: "E-Commerce", href: "#" },
  { label: "Education", href: "#" },
  { label: "Retail", href: "#" },
  { label: "Automotive", href: "#" },
  { label: "Startup", href: "#" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Certifications & Awards", href: "#" },
  { label: "Partners", href: "#" },
  { label: "Enterprise-Grade Security", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Events", href: "#" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    svg: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
  },
  {
    label: "Twitter",
    href: "#",
    svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
  },
  {
    label: "YouTube",
    href: "#",
    svg: <><path d="M2.5 17a24.12 24.12 0 010-10 2 2 0 011.4-1.4 49.56 49.56 0 0116.2 0A2 2 0 0121.5 7a24.12 24.12 0 010 10 2 2 0 01-1.4 1.4 49.55 49.55 0 01-16.2 0A2 2 0 012.5 17" /><path d="M10 15l5-3-5-3z" /></>,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      {/* CTA */}
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:pt-20">
        <div className="overflow-hidden rounded-3xl bg-muted/60 px-6 py-14 text-center sm:px-12 lg:py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Ready to Scale Your Team?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Let&apos;s discuss how our resource augmentation and AI-powered
            development can accelerate your project delivery.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex h-11 items-center rounded-full bg-brand-coral px-8 text-sm font-semibold text-white transition-all hover:bg-brand-coral/90"
          >
            Schedule a Call
          </Link>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Logo + description */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="focus-ring inline-block rounded-md">
              <img
                src="/logo.svg"
                alt="Zenqbit"
                className="h-[27px] w-auto dark:invert"
              />
            </Link>
            <p className="max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              A nearly self-sufficient technology company specializing
              in resource augmentation. We deliver 10X faster
              solutions in Fintech, Pharma, Retail & Distribution.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-brand-coral hover:text-white"
                >
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {s.svg}
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Industries</h4>
            <ul className="space-y-2.5">
              {industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries col 2 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold opacity-0">Industries</h4>
            <ul className="space-y-2.5">
              {industries2.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2.5">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Zenqbit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
