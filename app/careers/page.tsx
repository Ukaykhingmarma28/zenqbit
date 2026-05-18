import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Globe2, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — Join Our Engineering Team",
  description:
    "Join Zenqbit's growing team building custom software, AI, and IoT solutions from Cyberjaya, Malaysia and Dhaka, Bangladesh.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Zenqbit — Join Our Engineering Team",
    description:
      "Join a growing team of skilled engineers building custom software, AI, and IoT solutions.",
    url: "/careers",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zenqbit — Technology Solutions" }],
  },
};

const perks = [
  {
    icon: Zap,
    title: "Real Engineering Work",
    description:
      "You'll work on production systems — custom software, AI integrations, and IoT platforms — not internal tools nobody uses.",
  },
  {
    icon: Globe2,
    title: "Two Offices, One Team",
    description:
      "Collaborate across our Cyberjaya and Dhaka offices. We build as one team regardless of location.",
  },
  {
    icon: Users,
    title: "Learn From Experts",
    description:
      "Work alongside engineers with deep expertise in web, AI, IoT hardware, Linux kernel, and more.",
  },
  {
    icon: Briefcase,
    title: "Growth-Stage Energy",
    description:
      "We're early enough that your work shapes the company, but established enough that you won't be figuring everything out alone.",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 text-center lg:pb-16 lg:pt-28">
          <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
            Join Us
          </p>
          <h1 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Build the Future With Us
          </h1>
          <p className="animate-fade-up delay-1 mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We&apos;re a growing team of engineers, and we&apos;re always
            looking for talented people who want to do meaningful work.
          </p>
        </div>
      </section>

      {/* Why Zenqbit */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Why Zenqbit?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {perks.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-coral/10">
                  <p.icon className="size-5 text-brand-coral" />
                </div>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="border-t py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            What We Look For
          </h2>
          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              We value engineers who take ownership of their work and care about
              the end result — not just the code they write. Our projects span
              custom web platforms, AI-powered applications, IoT systems with
              real hardware integration, and mobile apps used by thousands. That
              means we need people comfortable working across the stack and
              willing to dig into unfamiliar territory.
            </p>
            <p>
              Technical skill matters, but so does communication. Our teams
              collaborate across our Cyberjaya, Malaysia and Dhaka, Bangladesh
              offices daily. We use agile sprints, code reviews, and shared
              dashboards to keep everyone aligned. If you thrive in a
              fast-moving environment where your contributions are visible and
              valued, you&apos;ll fit right in.
            </p>
            <p>
              We&apos;re especially interested in experience with React,
              Next.js, Node.js, Python, cloud platforms (AWS, GCP), IoT
              protocols, and AI/ML frameworks. But if you&apos;re a strong
              engineer who learns fast, we care more about your ability to solve
              problems than your resume&apos;s keyword density.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="border-t bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Open Positions
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            We don&apos;t have any open roles right now, but we&apos;re always
            interested in hearing from strong engineers. If you&apos;re
            passionate about building great software, AI systems, or IoT
            products — reach out and introduce yourself.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex h-11 items-center rounded-full bg-brand-coral px-8 text-sm font-semibold text-white transition-all hover:bg-brand-coral/90"
          >
            Send Us Your Resume
          </Link>
        </div>
      </section>
    </>
  );
}
