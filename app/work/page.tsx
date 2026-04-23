import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Zenqbit",
  description: "See the projects and products we've built for our clients.",
};

export default function WorkPage() {
  return (
    <section className="mx-auto min-h-[60vh] max-w-7xl px-6 py-24">
      <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl">
        Our Work
      </h1>
      <p className="animate-fade-up delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        A showcase of projects we&apos;ve delivered. Coming soon.
      </p>
    </section>
  );
}
