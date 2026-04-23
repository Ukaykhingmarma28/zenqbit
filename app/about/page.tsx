import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Zenqbit",
  description: "Learn about Zenqbit, our mission, and the team behind our software solutions.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto min-h-[60vh] max-w-7xl px-6 py-24">
      <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl">
        About Us
      </h1>
      <p className="animate-fade-up delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        We&apos;re a team of engineers, designers, and problem-solvers building
        digital products that make a real difference. More content coming soon.
      </p>
    </section>
  );
}
