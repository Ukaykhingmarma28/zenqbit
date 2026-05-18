import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const industries = [
  { label: "Fintech", href: "/industries/fintech" },
  { label: "Pharma & Healthcare", href: "/industries/pharma-healthcare" },
  { label: "Telecom", href: "/industries/telecom" },
  { label: "E-Commerce", href: "/industries/e-commerce" },
];

const industries2 = [
  { label: "EdTech", href: "/industries/edtech" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Software & ITES", href: "/industries/software-ites" },
  { label: "Startups", href: "/industries/startups" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "IoT Solutions", href: "/services/iot-solutions" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "Automation", href: "/services/automation" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/zenqbit",
    svg: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></>,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/zenqbit",
    svg: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      {/* CTA */}
      <div className="mx-auto max-w-7xl px-6 pt-16 lg:pt-20">
        <div className="overflow-hidden rounded-3xl bg-muted/60 px-6 py-14 text-center sm:px-12 lg:py-16">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
            Book a free 30-minute consultation. We&apos;ll explore your project
            goals and show how our engineering team can deliver results.
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
              Custom software, AI, and IoT solutions built by skilled
              engineers across Malaysia and Bangladesh. From startups
              to enterprises — we ship scalable products that work.
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

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2.5">
              {services.map((link) => (
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
