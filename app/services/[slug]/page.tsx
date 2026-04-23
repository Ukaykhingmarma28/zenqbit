import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { services, getServiceBySlug } from "@/lib/services";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Zenqbit`,
    description: service.description,
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
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:pb-24 lg:pt-28">
          <Link
            href="/#services"
            className="focus-ring mb-8 inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All Services
          </Link>

          <div className="flex items-start gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <service.icon className="size-7" />
            </div>
            <div>
              <h1 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="animate-fade-up delay-1 mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {service.longDescription}
              </p>
              <div className="animate-fade-up delay-2 mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="animate-fade-up delay-3 mt-8 flex gap-4">
                <Button size="lg" className="h-12 px-6 text-base">
                  Get a Quote
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 text-base"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-2xl font-bold tracking-tight">
            Other Services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="focus-ring group block rounded-xl"
              >
                <Card className="h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/15">
                      <s.icon className="size-5" />
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
        </div>
      </section>

      {/* CTA */}
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
            <Button size="lg" className="h-12 px-6 text-base">
              Get a Free Quote
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-6 text-base"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
