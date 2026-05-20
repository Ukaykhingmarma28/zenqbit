"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

/**
 * Matched to brainstation-23.com hero (Elementor nested-carousel + post-51731.css).
 * @see https://brainstation-23.com/
 */

interface Stat {
  image: string;
  value: string;
  label: string;
}

interface Slide {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  stats: [Stat, Stat];
}

const slides: Slide[] = [
  {
    headline:
      "Custom Software, AI & IoT Solutions — Built to Scale Your Business",
    subtext:
      "From startups to enterprises — our skilled engineers in Malaysia and Bangladesh build scalable, secure software that drives real results.",
    ctaLabel: "Schedule a Free Consultation",
    ctaHref: "/contact",
    stats: [
      { image: "/avatars/12.jpg", value: "6+", label: "Service Domains" },
      { image: "/avatars/25.jpg", value: "98%", label: "Client Retention" },
    ],
  },
  {
    headline:
      "End-to-End IoT Systems — From Sensors to Dashboards",
    subtext:
      "Working with experienced R&D partners, we turn innovative IoT ideas into practical, real-world technology — custom hardware, firmware, and cloud platforms.",
    ctaLabel: "Explore IoT Solutions",
    ctaHref: "/services/iot-solutions",
    stats: [
      { image: "/avatars/32.jpg", value: "8+", label: "Industry Verticals" },
      { image: "/avatars/47.jpg", value: "24/7", label: "Support Coverage" },
    ],
  },
  {
    headline: "AI-Powered Solutions, Crafted With Real Engineering Care",
    subtext:
      "From LLM chatbots to computer vision and ML pipelines — we integrate AI into your product thoughtfully, shipping measurable impact.",
    ctaLabel: "Explore AI Services",
    ctaHref: "/services/ai-solutions",
    stats: [
      { image: "/avatars/68.jpg", value: "6+", label: "Tech Domains" },
      {
        image: "/avatars/15.jpg",
        value: "100%",
        label: "Client Satisfaction",
      },
    ],
  },
];

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-h-[120px] flex-col justify-center px-3 py-4 sm:min-h-[200px] sm:px-4 sm:py-6">
      <p className="mb-1 text-xl font-bold leading-7 tracking-tight text-[#11172C] sm:text-[28px] sm:leading-9">
        {value}
      </p>
      <p className="text-sm font-medium leading-5 text-[#496D7C] sm:text-xl sm:leading-[30px]">
        {label}
      </p>
    </div>
  );
}

/** Mobile: horizontal stat badges only. sm+: BS23-style 2×2 grid with images. */
function HeroVisual({
  stats,
  priority,
}: {
  stats: [Stat, Stat];
  priority?: boolean;
}) {
  return (
    <>
      {/* Mobile: text-only stat row */}
      <div className="grid w-full grid-cols-2 gap-3 sm:hidden">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-black/5"
          >
            <p className="text-lg font-bold leading-tight text-[#11172C]">
              {stat.value}
            </p>
            <p className="text-xs font-medium text-[#496D7C]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* sm+: full 2×2 grid */}
      <div className="hidden w-full max-w-[480px] grid-cols-2 gap-3 sm:grid md:max-w-[520px] md:gap-4">
        <div className="relative h-[200px] overflow-hidden rounded-xl">
          <Image
            src={stats[0].image}
            alt=""
            fill
            sizes="240px"
            className="object-cover object-center"
            priority={priority}
            {...(priority ? { loading: "eager" as const } : {})}
          />
        </div>
        <StatBox value={stats[0].value} label={stats[0].label} />
        <StatBox value={stats[1].value} label={stats[1].label} />
        <div className="relative h-[200px] overflow-hidden rounded-xl">
          <Image
            src={stats[1].image}
            alt=""
            fill
            sizes="240px"
            className="object-cover object-center"
            priority={priority}
            {...(priority ? { loading: "eager" as const } : {})}
          />
        </div>
      </div>
    </>
  );
}

export function HeroSlider() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", duration: 25 },
    [autoplay.current],
  );

  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className="relative w-full bg-[#F5F8FB] bg-[length:auto] bg-[position:center_right] bg-no-repeat pt-16 pb-12 sm:py-14 lg:py-20"
      style={{
        backgroundImage: "url(/hero-brand-pattern.svg)",
      }}
    >
      <div className="w-full" role="region" aria-roledescription="carousel">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex touch-pan-y">
            {slides.map((slide, slideIndex) => (
              <div
                key={slide.headline}
                className="min-w-0 shrink-0 grow-0 basis-full"
                role="group"
                aria-roledescription="slide"
              >
                <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
                  <div className="grid min-h-[360px] grid-cols-1 items-center gap-6 sm:min-h-[420px] sm:gap-10 lg:min-h-[480px] lg:grid-cols-2 lg:gap-8">
                    <div className="flex flex-col justify-center lg:pe-4">
                      <h2 className="text-left text-[1.375rem] font-semibold leading-[1.25] tracking-[-0.02em] text-[#11172C] sm:text-[1.75rem] sm:leading-[1.2] sm:tracking-[-0.025em] lg:max-w-xl lg:text-[2.5rem] lg:leading-[1.15] lg:tracking-[-2px] xl:max-w-2xl">
                        {slide.headline}
                      </h2>
                      <p className="mt-2 text-left text-sm font-medium leading-relaxed text-[#496D7C] sm:mt-3 sm:max-w-lg sm:text-base lg:text-lg lg:leading-[30px]">
                        {slide.subtext}
                      </p>
                      <div className="mt-4 sm:mt-5">
                        <Link
                          href={slide.ctaHref}
                          className="inline-flex items-center rounded-full bg-brand-coral px-4 py-2.5 text-sm font-semibold leading-6 text-white transition-colors hover:bg-brand-coral/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 sm:px-5 sm:py-3 sm:text-base"
                        >
                          {slide.ctaLabel}
                        </Link>
                      </div>
                    </div>

                    <div className="flex w-full justify-center lg:justify-end">
                      <HeroVisual
                        stats={slide.stats}
                        priority={slideIndex === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-4 flex justify-center gap-3 sm:-mt-4">
          {slides.map((slide, i) => (
            <button
              key={slide.headline}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
              className={cn(
                "h-2 rounded-full transition-all duration-400 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral/30 focus-visible:ring-offset-2",
                i === current
                  ? "w-7 bg-brand-coral shadow-[0_0_6px_rgba(240,84,79,0.4)]"
                  : "w-2 bg-[#c5cdd6] hover:bg-[#9aa8b3] hover:scale-125",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
