import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Work & Capabilities",
  description:
    "Explore Zenqbit's capabilities across custom software, AI, IoT, mobile apps, and automation. Skilled engineers serving clients worldwide.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work & Capabilities — Zenqbit",
    description:
      "Custom software, AI, IoT, and mobile app development capabilities from our team of skilled engineers.",
    url: "/work",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zenqbit — Technology Solutions" }],
  },
};

const stats = [
  { value: "6", label: "Service Domains" },
  { value: "8", label: "Industry Verticals" },
  { value: "2", label: "Strategic Offices" },
  { value: "98%", label: "Client Retention" },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 text-center lg:pb-16 lg:pt-28">
          <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
            What We Build
          </p>
          <h1 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Capabilities & Expertise
          </h1>
          <p className="animate-fade-up delay-1 mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our team brings deep experience across six core service areas.
            From rapid MVPs to enterprise-scale platforms, here&apos;s what
            we deliver.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-muted/30 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold tracking-tight text-brand-coral sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service capabilities grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-brand-coral/30"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-coral/10">
                  <service.icon className="size-5 text-brand-coral" />
                </div>
                <h2 className="mt-4 text-lg font-semibold">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-coral">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-t bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              Our Approach
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How We Deliver Results
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Every project at Zenqbit follows a structured process designed to
              minimize risk and maximize value. We start with a free discovery
              session to understand your business goals, technical requirements,
              and timeline constraints. From there, our engineers build a
              detailed architecture blueprint before writing a single line of code.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              We work in agile sprints with weekly demos, so you see progress
              from day one. Our teams are cross-functional — frontend, backend,
              DevOps, and QA engineers collaborate from the start, ensuring
              smooth handoffs and consistent quality. Whether you need a
              rapid MVP to validate a market or a production-grade platform
              handling millions of transactions, our process adapts to your
              scale.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Based in Cyberjaya, Malaysia and Dhaka, Bangladesh, our team
              operates across time zones to keep projects moving. We combine
              Southeast Asian market expertise with deep engineering talent —
              giving clients the best of both worlds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Have a Project in Mind?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] text-muted-foreground">
            Tell us about your idea and we&apos;ll show you how our team can
            bring it to life — on time and on budget.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex h-11 items-center rounded-full bg-brand-coral px-8 text-sm font-semibold text-white transition-all hover:bg-brand-coral/90"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  );
}
