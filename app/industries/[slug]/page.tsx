import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { industries, getIndustryBySlug } from "@/lib/industries";
import { services } from "@/lib/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Solutions — Zenqbit`,
    description: industry.description,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const otherIndustries = industries.filter((ind) => ind.slug !== slug);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:pb-24 lg:pt-28">
          <Link
            href="/#industries"
            className="mb-8 inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All Industries
          </Link>

          <div className="flex items-start gap-5">
            <div
              className="flex size-14 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${industry.color}` }}
            >
              <industry.icon className="size-7 text-brand-dark" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                {industry.tagline}
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {industry.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {industry.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 bg-brand-coral px-6 text-base hover:bg-brand-coral/90"
                  )}
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 px-6 text-base"
                  )}
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              What We Build
            </p>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
              Solutions for {industry.name}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industry.features.map((feature) => (
              <div key={feature.title}>
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-brand-coral/10">
                  <CheckCircle2 className="size-5 text-brand-coral" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <Separator className="my-3 w-8 bg-brand-coral/30" />
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="border-t bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              Proven Results
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How We&apos;ve Helped
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="group overflow-hidden rounded-[20px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:bg-card"
              >
                <div
                  className="mx-2 mt-2 rounded-2xl px-6 pb-5 pt-6"
                  style={{ backgroundColor: industry.color }}
                >
                  <h3 className="text-xl font-bold tracking-tight text-brand-dark">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-brand-dark/60">
                    {useCase.description}
                  </p>
                </div>
                <div className="flex items-center justify-between px-6 py-4">
                  <span className="text-sm font-bold">View Details</span>
                  <div className="flex size-9 items-center justify-center rounded-[10px] bg-[#f0f0f0] transition-colors duration-200 group-hover:bg-brand-dark dark:bg-muted dark:group-hover:bg-foreground">
                    <ArrowRight className="size-4 text-brand-dark/70 transition-colors duration-200 group-hover:text-white dark:text-foreground/70 dark:group-hover:text-brand-dark" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Relevant Services ── */}
      <section className="border-t py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              How We Can Help
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Services for {industry.name}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              We bring together the right combination of services to address
              your industry&apos;s unique challenges.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block rounded-xl"
              >
                <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-brand-coral/10 transition-colors duration-200 group-hover:bg-brand-coral/15">
                      <service.icon className="size-5 text-brand-coral" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      {service.title}
                      <ArrowRight className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-60" />
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              Common Questions
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {industry.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-border/50 bg-card transition-shadow hover:shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="pr-4 font-semibold">{faq.question}</span>
                  <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Industries ── */}
      <section className="border-t py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Other Industries
            </h2>
            <Link
              href="/#industries"
              className="group hidden items-center gap-2 text-sm font-semibold text-brand-coral transition-colors hover:text-brand-coral/80 sm:inline-flex"
            >
              View All
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group/card block overflow-hidden rounded-[20px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:bg-card"
              >
                <div
                  className="mx-2 mt-2 rounded-2xl px-5 pb-4 pt-5"
                  style={{ backgroundColor: ind.color }}
                >
                  <h3 className="text-lg font-extrabold tracking-tight text-brand-dark">
                    {ind.name}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-brand-dark/60 line-clamp-2">
                    {ind.tagline}
                  </p>
                </div>
                <div className="flex items-center justify-between px-5 py-3">
                  <span className="text-[14px] font-bold text-brand-dark dark:text-foreground">
                    Explore
                  </span>
                  <div className="flex size-8 items-center justify-center rounded-[10px] bg-[#f0f0f0] transition-colors duration-200 group-hover/card:bg-brand-dark dark:bg-muted dark:group-hover/card:bg-foreground">
                    <ArrowRight className="size-3.5 text-brand-dark/70 transition-colors duration-200 group-hover/card:text-white dark:text-foreground/70 dark:group-hover/card:text-brand-dark" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative border-t py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,hsl(var(--primary)/0.06),transparent)]" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build for {industry.name}?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Tell us about your project and we&apos;ll show you how our{" "}
            {industry.name.toLowerCase()} expertise can make it happen.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 bg-brand-coral px-6 text-base hover:bg-brand-coral/90"
              )}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-6 text-base"
              )}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
