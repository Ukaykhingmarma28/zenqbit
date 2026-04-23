import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Zenqbit",
  description: "Join the Zenqbit team. See open positions.",
};

export default function CareersPage() {
  return (
    <section className="mx-auto min-h-[60vh] max-w-7xl px-6 py-24">
      <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl">
        Careers
      </h1>
      <p className="animate-fade-up delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        We&apos;re growing. Check back soon for open positions.
      </p>
    </section>
  );
}
