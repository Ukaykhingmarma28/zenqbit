import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScheduleForm } from "@/components/schedule-form";

export const metadata: Metadata = {
  title: "Schedule a Call — Zenqbit",
  description:
    "Book a free 30-minute consultation with Zenqbit. Select your service, industry, and preferred time.",
};

export default function ContactPage() {
  return (
    <>
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
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight">
            Other Ways to Reach Us
          </h2>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card px-6 py-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-coral/10">
                <Mail className="size-5 text-brand-coral" />
              </div>
              <h3 className="mt-4 font-semibold">Email</h3>
              <Link
                href="mailto:sales@zenqbit.com"
                className="mt-2 text-sm text-brand-coral hover:underline"
              >
                sales@zenqbit.com
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">
                We reply within 24 hours
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card px-6 py-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-coral/10">
                <Phone className="size-5 text-brand-coral" />
              </div>
              <h3 className="mt-4 font-semibold">Phone</h3>
              <Link
                href="tel:+8809610902323"
                className="mt-2 text-sm text-brand-coral hover:underline"
              >
                +880 9610-902323
              </Link>
              <p className="mt-1 text-xs text-muted-foreground">
                Mon–Fri, 9 AM – 6 PM BST
              </p>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-border/50 bg-card px-6 py-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-coral/10">
                <MapPin className="size-5 text-brand-coral" />
              </div>
              <h3 className="mt-4 font-semibold">Offices</h3>
              <p className="mt-2 text-sm">Dhaka &middot; Kuala Lumpur</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Two offices across Asia
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
