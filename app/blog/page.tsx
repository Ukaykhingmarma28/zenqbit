import type { Metadata } from "next";
import Link from "next/link";
import { PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Software Engineering Insights",
  description:
    "Insights on software development, AI, IoT, and digital transformation from the Zenqbit engineering team in Malaysia and Bangladesh.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Zenqbit Blog — Software Engineering Insights",
    description:
      "Technical insights on AI, IoT, and full-stack development from our engineering team.",
    url: "/blog",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zenqbit — Technology Solutions" }],
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 text-center lg:pb-16 lg:pt-28">
          <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
            From Our Team
          </p>
          <h1 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="animate-fade-up delay-1 mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Technical insights, engineering deep-dives, and lessons from
            building real products.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-brand-coral/10">
              <PenLine className="size-7 text-brand-coral" />
            </div>
            <h2 className="mt-6 text-xl font-bold">Coming Soon</h2>
          </div>

          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Our engineering team is putting together a collection of articles
              and technical guides drawn from real project experience. We build
              custom software, AI systems, and IoT platforms for clients across
              fintech, edtech, e-commerce, healthcare, and more — and we want
              to share what we&apos;ve learned along the way.
            </p>
            <p>
              Topics we&apos;re preparing include AI integration patterns for
              production applications, IoT architecture decisions for
              edge-to-cloud systems, full-stack development best practices with
              React and Next.js, mobile app development strategies for
              cross-platform delivery, and automation workflows that reduce
              operational overhead.
            </p>
            <p>
              We&apos;ll also cover lessons learned from building products across
              Southeast Asia — including navigating Malaysia&apos;s fintech
              regulations, scaling platforms for Bangladesh&apos;s growing
              digital market, and choosing the right cloud infrastructure for
              regional deployments.
            </p>
            <p>
              Whether you&apos;re a CTO evaluating technology partners, a
              developer exploring new approaches, or a founder planning your
              product roadmap — our blog will have something for you. In the
              meantime, explore our current service offerings or reach out to
              discuss your project.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/services/ai-solutions"
              className="text-sm font-medium text-brand-coral hover:underline"
            >
              Explore our AI services
            </Link>
            <span className="hidden text-muted-foreground sm:inline">|</span>
            <Link
              href="/services/web-development"
              className="text-sm font-medium text-brand-coral hover:underline"
            >
              Web development
            </Link>
            <span className="hidden text-muted-foreground sm:inline">|</span>
            <Link
              href="/contact"
              className="text-sm font-medium text-brand-coral hover:underline"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
