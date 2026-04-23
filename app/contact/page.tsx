import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Zenqbit",
  description: "Get in touch with Zenqbit for your next project.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto min-h-[60vh] max-w-7xl px-6 py-24">
      <h1 className="animate-fade-up text-4xl font-bold tracking-tight sm:text-5xl">
        Contact Us
      </h1>
      <p className="animate-fade-up delay-1 mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Have a project in mind? Reach out and we&apos;ll get back to you within
        24 hours. More content coming soon.
      </p>
    </section>
  );
}
