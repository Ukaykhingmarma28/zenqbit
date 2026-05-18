import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe2,
  Users,
  Cpu,
  BrainCircuit,
  Shield,
  Zap,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { JsonLd } from "@/components/json-ld";
import { getAboutPageSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "About Us — Our Story & Engineering Team",
  description:
    "Zenqbit: skilled engineers building custom software, AI, and IoT solutions. Founded in 2025 with offices in Cyberjaya, Malaysia and Dhaka, Bangladesh.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Zenqbit — Our Story & Engineering Team",
    description:
      "Skilled engineers building custom software, AI, and IoT solutions from Malaysia and Bangladesh.",
    url: "/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zenqbit — Technology Solutions" }],
  },
};

const strengths = [
  {
    icon: BrainCircuit,
    title: "AI-Enhanced Development",
    description:
      "We integrate AI into our own workflows — from code generation to testing — so our clients benefit from faster delivery and fewer defects.",
  },
  {
    icon: Cpu,
    title: "Hardware + Software R&D",
    description:
      "Unlike pure-software shops, our team includes engineers with deep IoT hardware experience — firmware, Linux kernel customization, and sensor integration.",
  },
  {
    icon: Shield,
    title: "World-Class Standards",
    description:
      "We follow ISO 27001, OWASP, WCAG, and SOC 2 frameworks in every project. Enterprise-grade discipline, even for startups.",
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description:
      "MVPs in 8–12 weeks. Production systems shipped in agile sprints. Our team is structured to move fast without cutting corners.",
  },
  {
    icon: Users,
    title: "Scalable Team",
    description:
      "A growing team of skilled engineers with access to a vetted network of specialists. We scale up or down based on your project phase — no long-term lock-in.",
  },
  {
    icon: Globe2,
    title: "Two Strategic Offices",
    description:
      "Cyberjaya, Malaysia for client-facing operations and Southeast Asian reach. Dhaka, Bangladesh for deep engineering talent and R&D capacity.",
  },
];

const domains = [
  "Web Development",
  "AI & Machine Learning",
  "IoT & Embedded Systems",
  "Mobile Applications",
  "Cloud & DevOps",
  "SEO & Technical Strategy",
  "Hardware Prototyping",
  "Linux Kernel & Firmware",
  "Automation & RPA",
  "E-Commerce Platforms",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={getAboutPageSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 text-center lg:pb-16 lg:pt-28">
          <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
            Our Story
          </p>
          <h1 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Engineering That Delivers
          </h1>
          <p className="animate-fade-up delay-1 mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Zenqbit was founded in 2025 with a simple thesis: businesses
            deserve technology partners who ship real results — not slide
            decks. We combine deep engineering expertise with the speed and
            flexibility of a lean, modern team.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              We exist to make world-class software engineering accessible to
              businesses of every size. Whether you&apos;re a startup validating
              an idea or an enterprise modernizing legacy systems, our team
              brings the same discipline, speed, and care to every
              engagement. We build custom software, AI systems, and IoT
              solutions that work in the real world — not just in demos.
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* Strengths */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What Sets Us Apart
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] text-muted-foreground">
              We&apos;re not just another outsourcing company. Here&apos;s
              what makes Zenqbit different.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((s) => (
              <div key={s.title} className="space-y-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-coral/10">
                  <s.icon className="size-5 text-brand-coral" />
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* Team & Expertise */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Built by Engineers, for Engineers
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Zenqbit was co-founded by engineers with hands-on experience
                across web development, technical SEO, IoT hardware R&D, and
                Linux kernel development. That engineering-first DNA runs
                through everything we do — from how we scope projects to how
                we write code.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Our core team of skilled engineers covers the full product
                lifecycle. When projects demand specialized expertise, we
                draw from a vetted network of specialists — scaling
                quickly without sacrificing quality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {domains.map((d) => (
                <div
                  key={d}
                  className="rounded-xl border border-border/50 bg-card px-4 py-3 text-center text-sm font-medium"
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* Offices */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Our Offices
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-muted-foreground">
            Two offices across Asia, positioned for both client proximity and
            engineering depth.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-coral">
                Headquarters
              </p>
              <h3 className="mt-2 text-xl font-bold">Cyberjaya, Malaysia</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Our client-facing hub in Malaysia&apos;s technology corridor.
                Cyberjaya gives us proximity to Southeast Asian markets and
                Malaysia&apos;s thriving tech ecosystem.
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-coral">
                Engineering Center
              </p>
              <h3 className="mt-2 text-xl font-bold">Dhaka, Bangladesh</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Our engineering and R&D center. Dhaka&apos;s deep talent pool
                in software and hardware engineering powers our development
                capacity and IoT innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[15px] text-muted-foreground">
            Book a free 30-minute consultation and let&apos;s explore how
            Zenqbit can help you build, scale, and ship.
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
