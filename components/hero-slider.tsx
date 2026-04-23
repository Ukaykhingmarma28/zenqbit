"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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
    headline: "Scale Your Dev Team With Top 1% Bangladeshi Talents in 4 Weeks",
    subtext:
      "From startups to enterprises—build scalable, secure software with our 18+ years of expertise and ISO 27001-certified teams.",
    ctaLabel: "Hire Your Team Now",
    ctaHref: "/contact",
    stats: [
      {
        image: "https://i.pravatar.cc/400?img=12",
        value: "18+",
        label: "Years of Experience",
      },
      {
        image: "https://i.pravatar.cc/400?img=25",
        value: "98%",
        label: "Client Retention",
      },
    ],
  },
  {
    headline: "Build AI-Powered, Scalable Software for Startups to Enterprises.",
    subtext:
      "From fintech to eCommerce, we deliver end-to-end solutions tailored to your business—fast, flexible, and reliable.",
    ctaLabel: "Schedule a Call",
    ctaHref: "/contact",
    stats: [
      {
        image: "https://i.pravatar.cc/400?img=32",
        value: "15+",
        label: "Projects Delivered",
      },
      {
        image: "https://i.pravatar.cc/400?img=47",
        value: "24/7",
        label: "Support Coverage",
      },
    ],
  },
  {
    headline: "AI-Powered Solutions, Crafted With Real Engineering Care",
    subtext:
      "From LLM chatbots to computer vision and ML pipelines — we integrate AI into your product thoughtfully, shipping measurable impact.",
    ctaLabel: "Explore AI Services",
    ctaHref: "/services/ai-solutions",
    stats: [
      {
        image: "https://i.pravatar.cc/400?img=68",
        value: "6+",
        label: "Tech Domains",
      },
      {
        image: "https://i.pravatar.cc/400?img=15",
        value: "100%",
        label: "Client Satisfaction",
      },
    ],
  },
];

export function HeroSlider() {
  const autoplay = useRef<ReturnType<typeof Autoplay> | null>(null);
  if (!autoplay.current) {
    autoplay.current = Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true });
  }
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={autoplay.current ? [autoplay.current] : []}
      opts={{ loop: true, align: "start" }}
      className="w-full"
    >
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.headline}>
            <div className="relative w-full overflow-hidden text-left text-foreground lg:aspect-[16/6]">

              <div className="relative z-10 grid h-full grid-cols-1 items-center gap-4 px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:py-8 xl:px-14">
                {/* ─── Left: Content ─── */}
                <div className="flex flex-col justify-center text-left lg:col-span-7">
                  <h2 className="text-balance text-left text-xl font-bold leading-[1.15] tracking-tight sm:text-2xl lg:text-3xl xl:text-4xl">
                    {slide.headline}
                  </h2>
                  <p className="mt-3 max-w-xl text-pretty text-left text-xs leading-relaxed text-muted-foreground sm:text-sm lg:mt-4">
                    {slide.subtext}
                  </p>
                  <div className="mt-5 text-left lg:mt-6">
                    <Link
                      href={slide.ctaHref}
                      className="inline-flex h-10 items-center rounded-lg bg-brand-coral px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-coral/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:h-11"
                    >
                      {slide.ctaLabel}
                    </Link>
                  </div>
                </div>

                {/* ─── Stats: horizontal row on mobile, 2-row grid on desktop ─── */}
                {/* Mobile */}
                <div className="flex items-center gap-4 lg:hidden">
                  {slide.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={stat.image}
                          alt=""
                          fill
                          sizes="72px"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <div className="text-lg font-bold leading-none tracking-tight">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-[10px] text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop */}
                <div className="hidden h-full grid-rows-2 gap-4 lg:col-span-5 lg:grid">
                  {/* Row 1: text (left) + image (right) */}
                  <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-2xl font-bold tracking-tight xl:text-4xl">
                        {slide.stats[0].value}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground xl:text-sm">
                        {slide.stats[0].label}
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] h-full overflow-hidden rounded-2xl">
                      <Image
                        src={slide.stats[0].image}
                        alt=""
                        fill
                        sizes="200px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Row 2: image (left) + text (right) */}
                  <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                    <div className="relative aspect-[4/3] h-full overflow-hidden rounded-2xl">
                      <Image
                        src={slide.stats[1].image}
                        alt=""
                        fill
                        sizes="200px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                      <div className="text-2xl font-bold tracking-tight xl:text-4xl">
                        {slide.stats[1].value}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground xl:text-sm">
                        {slide.stats[1].label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.headline}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={mounted ? i === current : i === 0}
            className={cn(
              "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              (mounted ? i === current : i === 0)
                ? "w-8 bg-brand-coral dark:bg-brand-coral"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
          />
        ))}
      </div>
    </Carousel>
  );
}
