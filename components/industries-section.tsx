"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/industries";

const filtered = industries.filter(
  (ind) => ind.slug !== "fintech" && ind.slug !== "telecom"
);

export function IndustriesSection() {
  return (
    <section id="industries" className="border-t py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="animate-fade-up mb-14 grid gap-6 lg:grid-cols-2 lg:items-end lg:mb-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-coral">
              Industries We Serve
            </p>
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px]">
              Industries We Power
              <br />
              with Innovation
            </h2>
          </div>
          <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground lg:text-right">
            We build tailored solutions for diverse industries — adapting to
            your unique challenges and delivering technology that drives real
            business impact.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className={`animate-fade-up delay-${Math.min(i + 1, 5)} group relative flex flex-col bg-card p-8 transition-colors duration-200 hover:bg-muted/50`}
              >
                <div
                  className="mb-5 flex size-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: industry.color }}
                >
                  <Icon className="size-5 text-brand-dark/70" strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-semibold tracking-tight">
                  {industry.name}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {industry.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {industry.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-1.5 pt-6">
                  <span className="text-[13px] font-medium text-brand-coral">
                    Learn more
                  </span>
                  <ArrowRight className="size-3.5 text-brand-coral transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="animate-fade-up delay-5 mt-8 flex items-center justify-center gap-4 rounded-2xl border border-dashed border-border/60 py-8">
          <p className="text-sm text-muted-foreground">
            Don&apos;t see your industry?
          </p>
          <Link
            href="/contact"
            className="inline-flex h-9 items-center rounded-lg bg-brand-coral px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-coral/90"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
