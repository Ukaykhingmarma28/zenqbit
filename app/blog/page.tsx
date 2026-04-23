import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Zenqbit",
  description: "Insights on web development, AI, mobile apps, and more from the Zenqbit team.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto min-h-[60vh] max-w-7xl px-6 py-24">
      <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl">
        Blog
      </h1>
      <p className="animate-fade-up delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Thoughts, tutorials, and case studies from our team. Coming soon.
      </p>
    </section>
  );
}
