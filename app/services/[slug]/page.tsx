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
import { services, getServiceBySlug } from "@/lib/services";
import { JsonLd } from "@/components/json-ld";
import {
  getServiceSchema,
  getFaqSchema,
  getBreadcrumbSchema,
} from "@/lib/schemas";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function truncateDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const truncated = text.slice(0, max);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 80 ? truncated.slice(0, lastSpace) : truncated) + "…";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const shortDesc = truncateDescription(service.description);
  return {
    title: `${service.title} Services`,
    description: shortDesc,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} — Zenqbit`,
      description: shortDesc,
      url: `/services/${slug}`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zenqbit — Technology Solutions" }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <JsonLd data={getServiceSchema(service)} />
      <JsonLd data={getFaqSchema(service.faqs)} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: "https://zenqbit.com" },
          { name: "Services", url: "https://zenqbit.com/#our-services" },
          { name: service.title, url: `https://zenqbit.com/services/${slug}` },
        ])}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:pb-24 lg:pt-28">
          <Link
            href="/#our-services"
            className="mb-8 inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All Services
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-brand-coral/10">
              <service.icon className="size-7 text-brand-coral" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {service.longDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 bg-brand-coral px-6 text-base hover:bg-brand-coral/90"
                  )}
                >
                  Get a Quote
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

      {/* ── Features Grid ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              What We Offer
            </p>
            <h2 className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
              Capabilities
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => (
              <div key={feature.title} className={`group delay-${Math.min(i + 1, 5)}`}>
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

      {/* ── Process ── */}
      <section className="border-t bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              How We Work
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Process
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              A proven methodology that delivers predictable results — no surprises.
            </p>
          </div>

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[20px] right-[20px] top-[19px] hidden h-px bg-border lg:block" />

            {service.process.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="relative z-10 mb-5 flex size-10 items-center justify-center rounded-full border-2 border-brand-teal/30 bg-brand-teal/10 bg-background">
                  <span className="text-sm font-bold text-brand-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-teal">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="border-t py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              Real-World Impact
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Use Cases
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.useCases.map((useCase) => (
              <div
                key={useCase.industry}
                className="group overflow-hidden rounded-[20px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:bg-card"
              >
                <div className="mx-2 mt-2 rounded-2xl bg-brand-coral/5 px-6 pb-5 pt-6">
                  <h3 className="text-xl font-bold tracking-tight">
                    {useCase.industry}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-brand-coral/10 px-3 py-1 text-xs font-medium text-brand-coral">
                      {useCase.industry}
                    </span>
                  </div>
                </div>
              </div>
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
            {service.faqs.map((faq) => (
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

      {/* ── Other Services ── */}
      <section className="border-t py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Other Services
            </h2>
            <Link
              href="/#our-services"
              className="group hidden items-center gap-2 text-sm font-semibold text-brand-coral transition-colors hover:text-brand-coral/80 sm:inline-flex"
            >
              View All
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.slice(0, 3).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block rounded-xl"
              >
                <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-brand-coral/10 transition-colors duration-200 group-hover:bg-brand-coral/15">
                      <s.icon className="size-5 text-brand-coral" />
                    </div>
                    <CardTitle className="flex items-center gap-2">
                      {s.title}
                      <ArrowRight className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-60" />
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {s.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {otherServices.length > 3 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {otherServices.slice(3).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group block rounded-xl"
                >
                  <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-brand-coral/10 transition-colors duration-200 group-hover:bg-brand-coral/15">
                        <s.icon className="size-5 text-brand-coral" />
                      </div>
                      <CardTitle className="flex items-center gap-2">
                        {s.title}
                        <ArrowRight className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-60" />
                      </CardTitle>
                      <CardDescription className="leading-relaxed">
                        {s.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative border-t py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,hsl(var(--primary)/0.06),transparent)]" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Tell us about your {service.title.toLowerCase()} project and
            we&apos;ll get back to you within 24 hours.
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
