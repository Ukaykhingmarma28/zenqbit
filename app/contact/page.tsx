import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ScheduleForm } from "@/components/schedule-form";
import { JsonLd } from "@/components/json-ld";
import { getContactPageSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Contact Us — Free Consultation",
  description:
    "Get in touch with Zenqbit. Book a free consultation for custom software, AI, IoT, or mobile app development. Offices in Malaysia and Bangladesh.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Zenqbit — Free Consultation",
    description:
      "Book a free 30-minute consultation for custom software, AI, IoT, and mobile app development.",
    url: "/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Zenqbit — Technology Solutions" }],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getContactPageSchema()} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 text-center lg:pb-16 lg:pt-28">
          <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
            Free Consultation
          </p>
          <h1 className="animate-fade-up text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Schedule a Call
          </h1>
          <p className="animate-fade-up delay-1 mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Book a free 30-minute consultation with our team. We&apos;ll discuss
            your project and show you how we can help.
          </p>
        </div>
      </section>

      {/* Scheduling Form */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScheduleForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="border-t bg-muted/30 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-4 text-center text-2xl font-bold tracking-tight">
            Other Ways to Reach Us
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
            Prefer to reach out directly? Our team is available Monday through
            Friday, 9 AM to 6 PM in both Malaysian (MYT) and Bangladesh (BST)
            time zones. We respond to all inquiries within 24 hours.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card px-6 py-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-coral/10">
                <Mail className="size-5 text-brand-coral" />
              </div>
              <h3 className="mt-4 font-semibold">Email</h3>
              <Link
                href="mailto:hello@zenqbit.com"
                className="mt-2 text-sm text-brand-coral hover:underline"
              >
                hello@zenqbit.com
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">
                General inquiries, project requests, and partnerships
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card px-6 py-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-coral/10">
                <Phone className="size-5 text-brand-coral" />
              </div>
              <h3 className="mt-4 font-semibold">Phone</h3>
              <Link
                href="tel:+601168295384"
                className="mt-2 text-sm text-brand-coral hover:underline"
              >
                +60 11-6829 5384
              </Link>
              <Link
                href="tel:+8801805650587"
                className="mt-1 text-sm text-brand-coral hover:underline"
              >
                +880 1805-650587
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">
                Mon–Fri, 9 AM – 6 PM (MYT / BST)
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card px-6 py-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-coral/10">
                <MapPin className="size-5 text-brand-coral" />
              </div>
              <h3 className="mt-4 font-semibold">Offices</h3>
              <p className="mt-2 text-sm">Cyberjaya, Malaysia</p>
              <p className="text-sm">Dhaka, Bangladesh</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Headquarters and engineering center across Asia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="border-t py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            What Happens After You Reach Out
          </h2>
          <div className="mt-8 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Once you submit your consultation request, a project manager from
              our team will reach out within 24 hours to schedule a free
              30-minute discovery call. During this call, we&apos;ll discuss
              your business goals, technical requirements, timeline
              expectations, and budget considerations.
            </p>
            <p>
              After the discovery call, our engineering team prepares a detailed
              proposal including architecture recommendations, technology stack
              suggestions, team composition, and a phased delivery timeline.
              We&apos;ll walk you through the proposal in a follow-up session
              and answer any questions before you decide to move forward.
            </p>
            <p>
              We work with startups validating their first product, SMEs
              modernizing legacy systems, and enterprises scaling their
              technology infrastructure. No matter the project size, every
              engagement gets the same level of technical rigour and dedicated
              attention from our engineering team across Malaysia and
              Bangladesh.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
